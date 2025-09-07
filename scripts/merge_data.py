#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Merge posts_data.json, sequences_cleaned.json and structure-6.20.split.json
into a normalized dataset keyed by aptamer page slug (e.g. "Hfq-aptamer").

Usage:
  python scripts/merge_data.py \
    --posts apidata/posts_data.json \
    --sequences apidata/sequences_cleaned.json \
    --structures apidata/structure-6.20.split.json \
    --output apidata/merged_data.json

Optional:
  --single "Hfq aptamer"          # only merge a specific aptamer by title/name
  --verbose                        # debug logging
"""

from __future__ import annotations

import argparse
import json
import logging
import re
from pathlib import Path
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple


def setup_logger(verbose: bool) -> logging.Logger:
    logging.basicConfig(
        level=logging.DEBUG if verbose else logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s'
    )
    return logging.getLogger(__name__)


def load_json(path: Path) -> Any:
    with path.open('r', encoding='utf-8') as f:
        return json.load(f)


def slug_from_linker(linker: Optional[str]) -> Optional[str]:
    """Extract slug from a path like '/_posts/Hfq-aptamer' or URL '.../_posts/Hfq-aptamer.html'."""
    if not linker:
        return None
    # Remove protocol/domain if present
    linker = re.sub(r'^https?://[^/]+', '', linker)
    # Keep last path component
    name = Path(linker).name
    # Strip .html if present
    if name.endswith('.html'):
        name = name[:-5]
    return name or None


def normalize_tags_to_map(tags: List[str]) -> Dict[str, List[str]]:
    """Convert ['GC:54.0', 'Length:63', 'Named:...', 'Year:2012'] to a dict of lists.
    Keeps unparseable tags under key 'other'.
    """
    out: Dict[str, List[str]] = {}
    for t in tags or []:
        if ':' in t:
            key, val = t.split(':', 1)
            key = key.strip()
            val = val.strip()
            out.setdefault(key, []).append(val)
        else:
            out.setdefault('other', []).append(t)
    return out


def build_indexes(
    posts_data: Dict[str, Any],
    sequences_data: Dict[str, Any],
    structures_data: List[Dict[str, Any]],
    logger: logging.Logger,
) -> Tuple[Dict[str, Dict[str, Any]], Dict[str, List[Dict[str, Any]]], Dict[str, Dict[str, Any]]]:
    """Return (posts_by_slug, sequences_by_slug, structures_by_slug)."""
    posts_by_slug: Dict[str, Dict[str, Any]] = {}
    for slug, post in (posts_data.get('posts') or {}).items():
        posts_by_slug[slug] = post

    # sequences_cleaned.json structure: { "Sheet1": [ { ... } ] }
    sequences_by_slug: Dict[str, List[Dict[str, Any]]] = {}
    for rec in (sequences_data.get('Sheet1') or []):
        slug = slug_from_linker(rec.get('Linker'))
        if not slug:
            # Fallback: try from 'Linker name(page name)' by normalizing spaces/underscores
            name = rec.get('Linker name(page name)')
            if name:
                # Last token after slash or comma? leave as is; sequences may list multiple names
                slug = re.sub(r'\s+', '-', name.strip())
        if slug:
            sequences_by_slug.setdefault(slug, []).append(rec)
        else:
            logger.debug(f"Skipping sequence record without slug: {rec.get('ID')}")

    structures_by_slug: Dict[str, Dict[str, Any]] = {}
    for entry in structures_data:
        slug = slug_from_linker(entry.get('AptamerLinker'))
        if not slug:
            # As fallback, try using cleaned Name to dash-separated slug
            name = entry.get('Name')
            if name:
                slug = re.sub(r'\s+', '-', name.strip())
        if slug:
            structures_by_slug[slug] = entry
        else:
            logger.debug(f"Skipping structure entry without slug: {entry.get('Name')}")

    return posts_by_slug, sequences_by_slug, structures_by_slug


def extract_post_core(post: Dict[str, Any]) -> Dict[str, Any]:
    meta = post.get('metadata', {})
    fm = (meta.get('front_matter') or {})
    sections = post.get('sections', {})

    # Description
    desc_text = (sections.get('description') or {}).get('content', {}).get('text')

    # Timeline
    timeline_sec = (sections.get('timeline') or {}).get('content', {})
    timeline_entries = timeline_sec.get('timeline_entries') or []
    timeline_text = timeline_sec.get('text')

    # Structure content and assets
    struct_sec = (sections.get('Structure') or {}).get('content', {})
    # Subsections under structure
    struct_subs = struct_sec.get('subsections') or {}
    two_d = (struct_subs.get('2d_representation') or {})
    three_d = (struct_subs.get('3d_visualization') or {})
    binding_pocket = (struct_subs.get('binding_pocket') or {})

    # Ligand recognition subsections
    ligand_sec = (sections.get('ligand-recognition') or {}).get('content', {})
    ligand_subs = ligand_sec.get('subsections') or {}
    selex_lig = (ligand_subs.get('selex_ligand') or {})
    structure_lig = (ligand_subs.get('structure_ligand') or {})

    # Sequences collected in post
    sequences_in_post: List[str] = []
    sequences_in_post.extend(struct_sec.get('sequences') or [])
    # Also merge sequences referenced inside subsections
    for sub in [two_d, three_d, binding_pocket, selex_lig, structure_lig]:
        if sub:
            sequences_in_post.extend(sub.get('sequences') or [])
    # Deduplicate
    sequences_in_post = sorted(set(sequences_in_post))

    # Images by type using the pre-classified 'type' field
    def filter_images(imgs: List[Dict[str, Any]], expected_type: str) -> List[Dict[str, Any]]:
        return [img for img in imgs or [] if img.get('type') == expected_type]

    images_all = []
    for part in [
        struct_sec.get('images') or [],
        two_d.get('images') or [],
        three_d.get('images') or [],
        binding_pocket.get('images') or [],
    ]:
        images_all.extend(part)

    # Deduplicate by 'src'
    seen_src = set()
    unique_images = []
    for img in images_all:
        src = img.get('src')
        if src and src not in seen_src:
            seen_src.add(src)
            unique_images.append(img)

    images_2d = filter_images(unique_images, '2d_structure')
    images_3d = filter_images(unique_images, '3d_structure')
    images_binding = filter_images(unique_images, 'binding_pocket')

    # PDB viewer config if exists
    viewer = {
        'pdb_info': three_d.get('pdb_info') or struct_sec.get('pdb_info') or {},
        'molstar_config': three_d.get('molstar_config') or struct_sec.get('molstar_config') or {},
        'color_schemes': three_d.get('color_schemes') or struct_sec.get('color_schemes') or [],
        'interactive_controls': three_d.get('interactive_controls') or struct_sec.get('interactive_controls') or [],
    }

    # Build normalized core
    core = {
        'meta': {
            'title': fm.get('title'),
            'type': fm.get('type'),
            'categories': fm.get('categories'),
            'date': fm.get('date'),
            'authors': fm.get('author'),
            'tags_map': normalize_tags_to_map(fm.get('tags') or []),
            'filename': post.get('filename'),
        },
        'description': desc_text,
        'timeline': {
            'entries': timeline_entries,
            'text': timeline_text,
        },
        'structure': {
            'images': {
                '2d': images_2d,
                '3d': images_3d,
                'binding_pocket': images_binding,
            },
            'viewer': viewer,
            'subsections_present': sorted([k for k, v in struct_subs.items() if v]),
        },
        'ligand': {
            'selex_ligand': {
                'text': selex_lig.get('text'),
                'images': selex_lig.get('images') or [],
                'tables': selex_lig.get('tables') or [],
                'sequences': selex_lig.get('sequences') or [],
            },
            'structure_ligand': {
                'text': structure_lig.get('text'),
                'images': structure_lig.get('images') or [],
                'tables': structure_lig.get('tables') or [],
                'sequences': structure_lig.get('sequences') or [],
            },
        },
        'references': (sections.get('references') or {}).get('content', {}).get('references') or [],
        'post_sequences_extracted': sequences_in_post,
    }
    return core


def normalize_structure_entry(entry: Dict[str, Any]) -> Dict[str, Any]:
    # Extract PDB IDs as list, splitting by comma/space
    pdb_ids: List[str] = []
    ndb_text = entry.get('NDB_text')
    if isinstance(ndb_text, str):
        pdb_ids = [t.strip() for t in re.split(r'[\s,]+', ndb_text) if t.strip()]

    # Collect PubMed URLs present
    pubmed_urls: List[str] = []
    for key in ['Pubmed1_url', 'Pubmed2', 'Pubmed3', 'Pubmed4']:
        url = entry.get(key)
        if isinstance(url, str) and url:
            pubmed_urls.append(url)

    return {
        'name': entry.get('Name'),
        'aptamer_linker': entry.get('AptamerLinker'),
        'ligand': entry.get('Ligand'),
        'method': entry.get('Structure Determination'),
        'pdb_ids': pdb_ids,
        'pdb_primary_url': entry.get('NDB_url'),
        'phase_determination': entry.get('Phase Determination'),
        'resolution_A': entry.get('Resolution(Å)'),
        'year': entry.get('Year'),
        'pubmed_year_text': entry.get('Pubmed1_text'),
        'pubmed_urls': pubmed_urls,
    }


def normalize_sequence_record(rec: Dict[str, Any]) -> Dict[str, Any]:
    return {
        'id': rec.get('ID'),
        'page_name': rec.get('Linker name(page name)'),
        'type': rec.get('Type'),
        'category': rec.get('Category'),
        'named': rec.get('Named'),
        'article_name': rec.get('Article name'),
        'ligand': rec.get('Ligand'),
        'ligand_description': rec.get('Ligand Description'),
        'ligand_info': rec.get('Ligand Information \n(CAS/sequence)'),
        'sequence': rec.get('Sequence'),
        'length': rec.get('Length'),
        'gc_content': rec.get('GC Content'),
        'affinity': rec.get('Affinity'),
        'year': rec.get('Year'),
        'pubmed_url': rec.get('Link to PubMed Entry'),
        'linker': rec.get('Linker'),
        'source': 'sequences_cleaned',
    }


def merge_all(
    posts_path: Path,
    sequences_path: Path,
    structures_path: Path,
    output_path: Path,
    single_name: Optional[str],
    logger: logging.Logger,
) -> Dict[str, Any]:
    posts_data = load_json(posts_path)
    sequences_data = load_json(sequences_path)
    structures_data = load_json(structures_path)

    posts_by_slug, sequences_by_slug, structures_by_slug = build_indexes(
        posts_data, sequences_data, structures_data, logger
    )

    all_slugs = set(posts_by_slug.keys()) | set(sequences_by_slug.keys()) | set(structures_by_slug.keys())

    merged: Dict[str, Any] = {
        'metadata': {
            'merged_at': datetime.now().isoformat(),
            'source_files': {
                'posts': str(posts_path),
                'sequences': str(sequences_path),
                'structures': str(structures_path),
            },
            'counts': {
                'posts': len(posts_by_slug),
                'sequences_groups': len(sequences_by_slug),
                'structures': len(structures_by_slug),
                'unique_slugs': len(all_slugs),
            }
        },
        'aptamers': {}
    }

    # If only a single aptamer by name is requested, find its slug candidates
    slugs_to_process = list(all_slugs)
    if single_name:
        target = single_name.strip().lower()
        slugs_to_process = []
        # Try match via posts (title)
        for slug, post in posts_by_slug.items():
            title = ((post.get('metadata') or {}).get('front_matter') or {}).get('title')
            if isinstance(title, str) and title.strip().lower() == target:
                slugs_to_process.append(slug)
        # Try structures Name
        for slug, entry in structures_by_slug.items():
            name = entry.get('Name')
            if isinstance(name, str) and name.strip().lower() == target:
                if slug not in slugs_to_process:
                    slugs_to_process.append(slug)
        # Try sequences page name
        for slug, recs in sequences_by_slug.items():
            for rec in recs:
                pname = rec.get('Linker name(page name)')
                if isinstance(pname, str) and pname.strip().lower() == target:
                    if slug not in slugs_to_process:
                        slugs_to_process.append(slug)

    for slug in sorted(slugs_to_process):
        post = posts_by_slug.get(slug)
        seq_group = sequences_by_slug.get(slug, [])
        str_entry = structures_by_slug.get(slug)

        core_from_post = extract_post_core(post) if post else None
        seqs_norm = [normalize_sequence_record(r) for r in seq_group]
        str_norm = normalize_structure_entry(str_entry) if str_entry else None

        # Title fallback resolution
        title = None
        if core_from_post and core_from_post['meta'].get('title'):
            title = core_from_post['meta']['title']
        elif str_norm and str_norm.get('name'):
            title = str_norm['name']
        elif seq_group:
            # Use common page name if consistent
            names = {
                (r.get('Linker name(page name)') or '').strip() for r in seq_group if r.get('Linker name(page name)')
            }
            if len(names) == 1:
                title = names.pop()

        merged['aptamers'][slug] = {
            'slug': slug,
            'title': title,
            'post': core_from_post,
            'sequences': {
                'records': seqs_norm,
                'extracted_from_post': (core_from_post or {}).get('post_sequences_extracted') if core_from_post else [],
            },
            'structure': {
                'summary': str_norm,
                'viewer': (core_from_post or {}).get('structure', {}).get('viewer') if core_from_post else {},
                'images': (core_from_post or {}).get('structure', {}).get('images') if core_from_post else {},
            },
            'ligand': (core_from_post or {}).get('ligand') if core_from_post else {},
            'description': (core_from_post or {}).get('description') if core_from_post else None,
            'timeline': (core_from_post or {}).get('timeline') if core_from_post else {},
            'references': (core_from_post or {}).get('references') if core_from_post else [],
            'presence': {
                'has_post': bool(post),
                'has_sequences': bool(seq_group),
                'has_structure': bool(str_entry),
            }
        }

    # Basic stats for convenience
    present_counts = {
        'all_three': 0,
        'post_and_sequences': 0,
        'post_and_structure': 0,
        'sequences_and_structure': 0,
        'only_post': 0,
        'only_sequences': 0,
        'only_structure': 0,
    }
    for slug, data in merged['aptamers'].items():
        p = data['presence']
        has_post = p['has_post']
        has_seq = p['has_sequences']
        has_str = p['has_structure']
        if has_post and has_seq and has_str:
            present_counts['all_three'] += 1
        elif has_post and has_seq:
            present_counts['post_and_sequences'] += 1
        elif has_post and has_str:
            present_counts['post_and_structure'] += 1
        elif has_seq and has_str:
            present_counts['sequences_and_structure'] += 1
        elif has_post:
            present_counts['only_post'] += 1
        elif has_seq:
            present_counts['only_sequences'] += 1
        elif has_str:
            present_counts['only_structure'] += 1

    merged['metadata']['presence_counts'] = present_counts

    # Write output
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open('w', encoding='utf-8') as f:
        json.dump(merged, f, ensure_ascii=False, indent=2)

    return merged


def main():
    parser = argparse.ArgumentParser(description='Merge posts, sequences, and structure JSON datasets.')
    parser.add_argument('--posts', default='apidata/posts_data.json', help='Path to posts_data.json')
    parser.add_argument('--sequences', default='apidata/sequences_cleaned.json', help='Path to sequences_cleaned.json')
    parser.add_argument('--structures', default='apidata/structure-6.20.split.json', help='Path to structure-6.20.split.json')
    parser.add_argument('--output', default='apidata/merged_data.json', help='Output merged JSON path')
    parser.add_argument('--single', help='Only merge a single aptamer by title/name (e.g., "Hfq aptamer")')
    parser.add_argument('--verbose', action='store_true', help='Verbose logging')

    args = parser.parse_args()
    logger = setup_logger(args.verbose)

    merged = merge_all(
        posts_path=Path(args.posts),
        sequences_path=Path(args.sequences),
        structures_path=Path(args.structures),
        output_path=Path(args.output),
        single_name=args.single,
        logger=logger,
    )

    logger.info('Merged %d aptamers into %s', len(merged.get('aptamers', {})), args.output)


if __name__ == '__main__':
    main()
