#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Strict replace (reuse original struct_asym_id value):
Match ONLY blocks that start with 'struct_asym_id:' (any value), then
  start_residue_number: N
  end_residue_number: N  (must equal start)
  color: { r:255, g:0, b:255 }
Rewrite them as:
  auth_asym_id: '<ORIGINAL_struct_asym_id>'
  auth_seq_id: N
  color: { r:255, g:0, b:255 }
  representation: 'ball-and-stick'
"""
import argparse
import re
from pathlib import Path
import sys
import shutil

# Regex: robust to whitespace/newlines, CRLF/LF; requires exact color 255,0,255;
# ensures end == start via a backreference; struct_asym_id value can be any quoted string.
PATTERN = re.compile(
    r"""(?mx)                                   # m: ^/$ multiline, x: verbose
    ^(?P<indent>[ \t]*)struct_asym_id\s*:\s*['\"](?P<struct>[^'\"]+)['\"]\s*,\s*
    (?:\r?\n(?P=indent)[ \t]*)?start_residue_number\s*:\s*(?P<start>\d+)\s*,\s*
    (?:\r?\n(?P=indent)[ \t]*)?end_residue_number\s*:\s*(?P=start)\s*,\s*
    (?:\r?\n(?P=indent)[ \t]*)?color\s*:\s*\{\s*r\s*:\s*255\s*,\s*g\s*:\s*0\s*,\s*b\s*:\s*255\s*\}
    \s*(?P<trailing>,?)
    """
)

def build_replacement(m: re.Match) -> str:
    indent = m.group('indent')
    start = m.group('start')
    struct_val = m.group('struct')
    trailing = m.group('trailing') or ''
    return (
        f"{indent}auth_asym_id: '{struct_val}',\n"
        f"{indent}auth_seq_id: {start},\n"
        f"{indent}color: {{ r:255, g:0, b:255 }},\n"
        f"{indent}representation: 'ball-and-stick'{trailing}"
    )

def replace_in_text(text: str) -> tuple[str, int]:
    out, last, count = [], 0, 0
    for m in PATTERN.finditer(text):
        out.append(text[last:m.start()])
        out.append(build_replacement(m))
        last = m.end()
        count += 1
    out.append(text[last:])
    return ''.join(out), count

def process_file(p: Path, dry_run: bool, backup: bool) -> int:
    try:
        original = p.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        original = p.read_text(encoding='utf-8', errors='ignore')
    new_text, n = replace_in_text(original)
    if n == 0:
        return 0
    if not dry_run:
        if backup:
            bak = p.with_suffix(p.suffix + '.bak')
            if not bak.exists():
                shutil.copyfile(p, bak)
        p.write_text(new_text, encoding='utf-8')
    print(f"{'DRY-RUN: ' if dry_run else ''}{p} -> {n} block(s) replaced")
    return n

def main():
    ap = argparse.ArgumentParser(description="Strictly replace Mol* ligand blocks in Markdown (auth_asym_id = original struct_asym_id)." )
    ap.add_argument('path', nargs='?', default='.', help="Root folder (default: current dir)")
    ap.add_argument('--ext', default='md', help="Comma-separated extensions to scan (default: md)")
    ap.add_argument('--dry-run', action='store_true', help="Only report changes")
    ap.add_argument('--no-backup', action='store_true', help="Do not create .bak backups")
    args = ap.parse_args()

    root = Path(args.path).expanduser().resolve()
    if not root.exists():
        print(f"Path not found: {root}", file=sys.stderr)
        sys.exit(2)

    exts = [e.strip().lstrip('.').lower() for e in args.ext.split(',') if e.strip()]
    total_files = 0
    total_replacements = 0
    for ext in exts:
        for p in root.rglob(f"*.{ext}"):
            n = process_file(p, args.dry_run, backup=(not args.no_backup))
            if n:
                total_files += 1
                total_replacements += n

    print(f"Done. Files changed: {total_files}, blocks replaced: {total_replacements}")

if __name__ == "__main__":
    main()
