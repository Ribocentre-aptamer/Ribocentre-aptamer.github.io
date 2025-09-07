#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Export annotated mmCIF files for aptamers that have 3D viewer configs.

For each aptamer with a local/remote PDB id, this script attempts to
produce two files under apidata/colored_structures/<slug>/:
  - <pdb_id>.cif              (downloaded from RCSB if not present locally)
  - <pdb_id>.annotated.cif   (same content with a header comment block
                              embedding JSON color rules)
And writes/updates apidata/colored_structures/index.json to include
the mmCIF paths.

Usage:
  python scripts/export_mmcif_with_annotations.py \
    --merged apidata/merged_data_0907.json \
    --output apidata/colored_structures [--single Hfq-aptamer]
"""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError
from datetime import datetime
from zipfile import ZipFile, ZIP_DEFLATED
import socket
import time
import gzip
from io import BytesIO


def read_json(path: Path):
    return json.loads(path.read_text(encoding='utf-8'))


def write_json(path: Path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding='utf-8')


def guess_pdb_id_from_path(p: str) -> str | None:
    # extract 4-char PDB id from filename tokens
    name = Path(p).name
    m = re.search(r'([0-9][A-Za-z0-9]{3})', name)
    if m:
        return m.group(1).upper()
    return None


def _http_get(url: str, timeout: int) -> bytes:
    req = Request(url, headers={'User-Agent': 'Ribocentre-aptamer-export/1.0'})
    with urlopen(req, timeout=timeout) as resp:
        # Stream in chunks to avoid long single-read stuck
        chunks = []
        while True:
            chunk = resp.read(1024 * 64)
            if not chunk:
                break
            chunks.append(chunk)
        return b''.join(chunks)


def download_cif(pdb_id: str, timeout: int = 45, retries: int = 3, retry_delay: float = 2.0) -> bytes:
    """Download mmCIF for a PDB ID with retries.

    Tries .cif first, then .cif.gz fallback. Raises on final failure.
    """
    last_err = None
    urls = [
        f'https://files.rcsb.org/download/{pdb_id}.cif',
        f'https://files.rcsb.org/download/{pdb_id}.cif.gz',
    ]
    for attempt in range(1, retries + 1):
        for u in urls:
            try:
                data = _http_get(u, timeout)
                if u.endswith('.gz'):
                    try:
                        data = gzip.decompress(data)
                    except OSError:
                        # Some servers might already send plain text
                        pass
                return data
            except (TimeoutError, socket.timeout) as e:
                last_err = e
            except (URLError, HTTPError, OSError) as e:
                last_err = e
        if attempt < retries:
            time.sleep(retry_delay * attempt)  # backoff
    # On failure
    if last_err:
        raise last_err
    raise RuntimeError(f'Failed to download CIF for {pdb_id} after {retries} retries')


def load_local_cif(repo_root: Path, pdb_id: str) -> bytes | None:
    # Try common local locations
    pdb_dir = repo_root / 'pdbfiles'
    candidates = [
        pdb_dir / f'{pdb_id}.cif',
        pdb_dir / f'{pdb_id.upper()}.cif',
        pdb_dir / f'{pdb_id.lower()}.cif',
    ]
    for c in candidates:
        if c.exists():
            return c.read_bytes()
    return None


def annotate_cif(cif_text: str, slug: str, title: str | None, color_schemes) -> str:
    """Annotate mmCIF with a human-readable color matrix.

    The annotation is added as comment lines at the top of the CIF file.
    Two tables are provided for readability:
      1) color_ranges: chain,start,end,r,g,b
      2) color_residues: chain,residue,r,g,b (expanded per residue)
    """
    header_lines: list[str] = []
    header_lines.append('# Ribocentre Aptamer Colored Structure Annotation')
    header_lines.append('# version: 2')
    header_lines.append(f'# slug: {slug}')
    header_lines.append(f'# title: {title or ""}')

    # Normalize color schemes
    ranges = []  # list of (chain, start, end, r,g,b)
    residues = []  # list of (chain, resno, r,g,b)
    if isinstance(color_schemes, list):
        for rule in color_schemes:
            if not isinstance(rule, dict):
                continue
            chain = rule.get('struct_asym_id')
            start = rule.get('start_residue_number')
            end = rule.get('end_residue_number')
            col = rule.get('color') or {}
            try:
                r = int(col.get('r'))
                g = int(col.get('g'))
                b = int(col.get('b'))
            except Exception:
                # Skip rules without valid color
                continue
            try:
                start_i = int(start)
                end_i = int(end)
            except Exception:
                # If any bound missing, treat as a single residue if possible
                try:
                    single = int(start if start is not None else end)
                except Exception:
                    continue
                if chain:
                    ranges.append((chain, single, single, r, g, b))
                    residues.append((chain, single, r, g, b))
                continue

            if not chain:
                continue
            if end_i < start_i:
                start_i, end_i = end_i, start_i
            ranges.append((chain, start_i, end_i, r, g, b))
            # Expand to per-residue entries for readability
            for resno in range(start_i, end_i + 1):
                residues.append((chain, resno, r, g, b))

    # Emit compact range table
    header_lines.append('# annotation.color_ranges (columns: chain,start,end,r,g,b)')
    if ranges:
        for chain, start_i, end_i, r, g, b in ranges:
            header_lines.append(f'# {chain},{start_i},{end_i},{r},{g},{b}')
    else:
        header_lines.append('# (no ranges)')

    # Emit per-residue matrix
    header_lines.append('# annotation.color_residues (columns: chain,residue,r,g,b)')
    if residues:
        for chain, resno, r, g, b in residues:
            header_lines.append(f'# {chain},{resno},{r},{g},{b}')
    else:
        header_lines.append('# (no residues)')

    header_lines.append('# end_annotation')
    return '\n'.join(header_lines) + '\n' + cif_text


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--merged', default='apidata/merged_data_0907.json')
    ap.add_argument('--output', default='apidata/colored_structures')
    ap.add_argument('--single')
    ap.add_argument('--offline', action='store_true', help='Do not download; only annotate when local CIF exists')
    ap.add_argument('--net-timeout', type=int, default=60, help='Per-request timeout seconds')
    ap.add_argument('--net-retries', type=int, default=4, help='Total HTTP retries')
    ap.add_argument('--retry-delay', type=float, default=2.0, help='Base delay for backoff between retries (seconds)')
    args = ap.parse_args()

    repo_root = Path.cwd()
    merged = read_json(Path(args.merged))
    aptamers = merged.get('aptamers', {})
    out_root = Path(args.output)
    out_root.mkdir(parents=True, exist_ok=True)

    # Load or init index.json
    index_path = out_root / 'index.json'
    if index_path.exists():
        index = read_json(index_path)
    else:
        index = {'generated_at': None, 'source': args.merged, 'total': 0, 'items': []}

    items_by_slug = {it.get('slug'): it for it in index.get('items', []) if isinstance(it, dict)}

    processed = 0
    for slug, entry in aptamers.items():
        if args.single and slug != args.single:
            continue
        st = (entry.get('structure') or {})
        viewer = (st.get('viewer') or {})
        pdb_path = (viewer.get('pdb_info') or {}).get('pdb_file_path')
        if not pdb_path:
            continue
        color_schemes = viewer.get('color_schemes') or []
        title = entry.get('title') or ((entry.get('post') or {}).get('meta') or {}).get('title')

        # Collect PDB IDs: either all from summary or a single guess
        pdb_ids_list = []
        for pid in ((st.get('summary') or {}).get('pdb_ids') or []):
            if isinstance(pid, str) and re.fullmatch(r'[0-9][A-Za-z0-9]{3}', pid.strip()):
                pdb_ids_list.append(pid.strip().upper())
        if not pdb_ids_list:
            pid = guess_pdb_id_from_path(pdb_path)
            if pid:
                pdb_ids_list = [pid]
        if not pdb_ids_list:
            items_by_slug.setdefault(slug, {'slug': slug, 'title': title})
            items_by_slug[slug].update({'pdb': pdb_path, 'error': 'no_pdb_id'})
            continue

        # Ensure dir
        out_dir = out_root / slug
        out_dir.mkdir(parents=True, exist_ok=True)

        raw_paths = []
        annotated_paths = []
        for pdb_id in pdb_ids_list:
            raw_cif_path = out_dir / f'{pdb_id}.cif'
            annotated_cif_path = out_dir / f'{pdb_id}.annotated.cif'

            # Load or download CIF
            cif_bytes = load_local_cif(repo_root, pdb_id)
            if cif_bytes is None and not args.offline:
                try:
                    cif_bytes = download_cif(pdb_id, timeout=args.net_timeout, retries=args.net_retries, retry_delay=args.retry_delay)
                except (URLError, HTTPError, TimeoutError, socket.timeout, OSError) as e:
                    items_by_slug.setdefault(slug, {'slug': slug, 'title': title})
                    items_by_slug[slug].update({'pdb': pdb_id, 'error': f'download_failed: {e}'})
                    continue
            elif cif_bytes is None and args.offline:
                items_by_slug.setdefault(slug, {'slug': slug, 'title': title})
                items_by_slug[slug].update({'pdb': pdb_id, 'error': 'offline_no_local_cif'})
                continue

            # Write raw CIF
            if not raw_cif_path.exists() or len(raw_cif_path.read_bytes()) != len(cif_bytes):
                raw_cif_path.write_bytes(cif_bytes)

            # Annotate CIF with header comments
            cif_text = cif_bytes.decode('utf-8', errors='replace')
            annotated_text = annotate_cif(cif_text, slug, title, color_schemes)
            annotated_cif_path.write_text(annotated_text, encoding='utf-8')

            raw_paths.append(str(raw_cif_path.relative_to(out_root)))
            annotated_paths.append(str(annotated_cif_path.relative_to(out_root)))
            processed += 1

        # Update index for this slug
        item = items_by_slug.setdefault(slug, {'slug': slug, 'title': title})
        # Build per-aptamer zip with all annotated CIFs and config
        zip_rel_path = None
        if annotated_paths:
            zip_name = f'{slug}.mmcif.zip'
            zip_path = out_dir / zip_name
            with ZipFile(zip_path, 'w', compression=ZIP_DEFLATED) as zf:
                # add annotated cif files
                for rel in annotated_paths:
                    abs_path = out_root / rel
                    if abs_path.exists():
                        zf.write(abs_path, arcname=Path(rel).name)
                # include config.json if exists
                cfg = out_dir / 'config.json'
                if cfg.exists():
                    zf.write(cfg, arcname='config.json')
            zip_rel_path = str(zip_path.relative_to(out_root))

        item.update({
            'pdb_list': pdb_ids_list,
            'raw_cif_list': raw_paths,
            'annotated_cif_list': annotated_paths,
            'color_schemes_count': len(color_schemes),
            **({'zip': zip_rel_path} if zip_rel_path else {})
        })

    # Rewrite index
    items = list(items_by_slug.values())
    items.sort(key=lambda x: x.get('slug', ''))
    index = {
        'generated_at': datetime.now().isoformat(),
        'source': args.merged,
        'total': len(items),
        'items': items
    }
    write_json(index_path, index)
    print(f'Annotated mmCIF exported for {processed} aptamers. Index: {index_path}')


if __name__ == '__main__':
    main()
