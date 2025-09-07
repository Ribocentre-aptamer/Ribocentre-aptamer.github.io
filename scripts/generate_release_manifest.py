#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate a manifest and release notes for colored structures to attach in a GitHub Release.

Outputs under apidata/colored_structures/:
  - manifest.json: detailed inventory (paths, sizes, sha256) per aptamer slug
  - release_notes.md: concise Markdown listing per aptamer

Usage:
  python scripts/generate_release_manifest.py \
    --root apidata/colored_structures \
    --manifest apidata/colored_structures/manifest.json \
    --notes apidata/colored_structures/release_notes.md
"""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from typing import Dict, Any, List


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def human_size(n: int) -> str:
    units = ['B', 'KB', 'MB', 'GB']
    i = 0
    x = float(n)
    while x >= 1024 and i < len(units) - 1:
        x /= 1024.0
        i += 1
    return f"{x:.1f} {units[i]}"


def collect(root: Path) -> Dict[str, Any]:
    inv: Dict[str, Any] = {
        'root': str(root),
        'aptamers': [],
        'total_files': 0,
        'total_size_bytes': 0,
    }

    if not root.exists():
        return inv

    for slug_dir in sorted([p for p in root.iterdir() if p.is_dir()]):
        slug = slug_dir.name
        item: Dict[str, Any] = {
            'slug': slug,
            'zip': None,
            'files': [],  # list of dicts: {path, size, sha256}
            'counts': {},
            'sizes': {},
        }

        # Prefer to include only the relevant types
        for p in sorted(slug_dir.rglob('*')):
            if not p.is_file():
                continue
            rel = p.relative_to(root)
            # Summarize file types
            ext = p.suffix.lower()
            ftype = 'other'
            if rel.name.endswith('.mmcif.zip'):
                ftype = 'zip'
            elif rel.name.endswith('.annotated.cif'):
                ftype = 'annotated_cif'
            elif rel.name.endswith('.cif'):
                ftype = 'cif'
            elif rel.name == 'config.json':
                ftype = 'config'

            size = p.stat().st_size
            entry = {
                'path': str(rel).replace('\\', '/'),
                'size': size,
                'size_h': human_size(size),
                'sha256': sha256_file(p),
                'type': ftype,
            }
            item['files'].append(entry)

        # Populate quick pointers
        for f in item['files']:
            if f['path'].endswith('.mmcif.zip'):
                item['zip'] = f['path']
                break

        # Counts & size summary
        counts = {}
        sizes = {}
        for f in item['files']:
            counts[f['type']] = counts.get(f['type'], 0) + 1
            sizes[f['type']] = sizes.get(f['type'], 0) + f['size']
        item['counts'] = counts
        item['sizes'] = {k: {'bytes': v, 'human': human_size(v)} for k, v in sizes.items()}

        inv['aptamers'].append(item)
        inv['total_files'] += len(item['files'])
        inv['total_size_bytes'] += sum(f['size'] for f in item['files'])

    return inv


def write_notes(manifest: Dict[str, Any], notes_path: Path) -> None:
    lines: List[str] = []
    lines.append('# Colored Structures Release')
    lines.append('')
    lines.append(f"Aptamers: {len(manifest.get('aptamers', []))}")
    lines.append(f"Files: {manifest.get('total_files', 0)}  ")
    lines.append('')
    lines.append('This release contains per-aptamer colored structures (mmCIF) with annotation headers.')
    lines.append('For each aptamer a zip is provided when available; see manifest.json for full details.')
    lines.append('')
    for item in manifest.get('aptamers', []):
        slug = item['slug']
        zip_path = item.get('zip')
        ann_count = item.get('counts', {}).get('annotated_cif', 0)
        cif_count = item.get('counts', {}).get('cif', 0)
        lines.append(f"## {slug}")
        if zip_path:
            lines.append(f"- Zip: `{zip_path}`")
        else:
            lines.append("- Zip: (not available)")
        lines.append(f"- Annotated CIFs: {ann_count}")
        lines.append(f"- Raw CIFs: {cif_count}")
        lines.append("")

    notes_path.parent.mkdir(parents=True, exist_ok=True)
    notes_path.write_text('\n'.join(lines), encoding='utf-8')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='apidata/colored_structures')
    ap.add_argument('--manifest', default='apidata/colored_structures/manifest.json')
    ap.add_argument('--notes', default='apidata/colored_structures/release_notes.md')
    args = ap.parse_args()

    root = Path(args.root)
    manifest = collect(root)
    Path(args.manifest).write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
    write_notes(manifest, Path(args.notes))
    print(f"Wrote manifest: {args.manifest}")
    print(f"Wrote notes: {args.notes}")


if __name__ == '__main__':
    main()

