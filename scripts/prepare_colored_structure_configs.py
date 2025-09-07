#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Prepare per-aptamer color configs from merged data for Mol* export.

This script does not invoke Mol*; it generates JSON configs and an index
under apidata/colored_structures/ to be consumed by the Node exporter
or for manual use.

Usage:
  python scripts/prepare_colored_structure_configs.py \
    --merged apidata/merged_data_0907.json \
    --output apidata/colored_structures

Optional:
  --single Hfq-aptamer
"""

import json
import argparse
from pathlib import Path
from datetime import datetime


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--merged', default='apidata/merged_data_0907.json')
    p.add_argument('--output', default='apidata/colored_structures')
    p.add_argument('--single')
    args = p.parse_args()

    merged = json.loads(Path(args.merged).read_text(encoding='utf-8'))
    aptamers = merged.get('aptamers', {})

    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    items = []
    for slug, entry in aptamers.items():
        if args.single and slug != args.single:
            continue
        st = (entry.get('structure') or {})
        viewer = (st.get('viewer') or {})
        pdb = (viewer.get('pdb_info') or {}).get('pdb_file_path')
        if not pdb:
            continue
        color_schemes = viewer.get('color_schemes') or []
        cfg = {
            'slug': slug,
            'title': entry.get('title') or ((entry.get('post') or {}).get('meta') or {}).get('title'),
            'pdb_file_path': pdb,
            'non_selected_color': {'r': 255, 'g': 255, 'b': 255},
            'color_schemes': color_schemes,
        }
        sub = out_dir / slug
        sub.mkdir(parents=True, exist_ok=True)
        (sub / 'config.json').write_text(json.dumps(cfg, ensure_ascii=False, indent=2), encoding='utf-8')
        items.append({'slug': slug, 'title': cfg['title'], 'pdb': pdb, 'config': f'{slug}/config.json'})

    index = {
        'generated_at': datetime.now().isoformat(),
        'source': args.merged,
        'total': len(items),
        'items': items
    }
    (out_dir / 'index.json').write_text(json.dumps(index, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'Wrote {len(items)} configs to {out_dir}')


if __name__ == '__main__':
    main()

