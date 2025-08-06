#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
sync_palette_morandi.py  ——  为任意数量的 aptamer JSON
  • 统一 Morandi 30 色调色板
  • 同步 category_config
  • 修复 data[*].background_color & category_info.primary_color
"""

import json, sys, datetime
from pathlib import Path
from collections import OrderedDict

# ---------- 30-色 Morandi 调色板 ----------
'''
MORANDI30 = [
    "#c9c0bb", "#b8b0a4", "#d6c7b0", "#e3d8c8", "#b7a59f",
    "#9fa3a9", "#8e9fa9", "#83907a", "#a1b39d", "#d2b9b1",
    "#c0a5a0", "#a68d85", "#8f8c8e", "#706d6f", "#dfd0cb",
    "#c8c6c6", "#b7c1c6", "#b5a782", "#a8ad88", "#d1cbbe",
    "#c3b4a3", "#afb7b3", "#d3c99e", "#c6c0aa", "#bfa9a0",
    "#a79f91", "#c5c4c0", "#acb6c6", "#9ca3ae", "#cdbab5",
]
'''
'''
MORANDI30 = [
    "#520049", "#7E647F", "#9E8AA1", "#B79BBC", "#D3C7D8",
    "#C9C0BB", "#C8B4AE", "#DCBEB4", "#E0D7CF", "#D5CAB8",
    "#B5A782", "#A8AD88", "#B9BCA9", "#C0C9C2", "#B4C4C8",
    "#9CB0B5", "#8D96A6", "#8790A3", "#A5AABC", "#C5CCD8",
    "#DFD0CB", "#C0A5A0", "#BFA9A0", "#C3B4A3", "#C6C0AA",
    "#D3C99E", "#D6C7B0", "#E3D8C8", "#ACB6C6", "#9CA3AE",
]
'''
'''
MORANDI30 = [
    "#520049",  # Deep Plum  (anchor)
    "#73206A",  # Rich Plum
    "#91427F",  # Bright Orchid
    "#AF6893",  # Mauve Rose
    "#CB93AF",  # Lilac Blush
    "#E4B8CD",  # Rose Mist
    "#F3D8E5",  # Whisper Pink
    "#FCEBF2",  # Blossom Veil
    "#FADADE",  # Salmon Dust
    "#F1CEC0",  # Soft Coral
    "#FFD8B6",  # Peach Cream
    "#FFE8C9",  # Buttercream
    "#FFF4D9",  # Light Butter
    "#E4F0D5",  # Mint Whisper
    "#CFE5D2",  # Pastel Mint
    "#C1DDE4",  # Powder Aqua
    "#AECAE3",  # Baby Blue
    "#99B4D8",  # Cornflower
    "#889DCB",  # Periwinkle
    "#7B88B7",  # Slate Indigo
    "#6E7EA7",  # Dusk Blue
    "#5D668A",  # Dusty Navy
    "#837392",  # Twilight Purple
    "#9A829D",  # French Lilac
    "#B79AB1",  # Lavender Smoke
    "#D0B3C6",  # Pale Mauve
    "#ECD0D9",  # Rose Quartz
    "#F6E5E9",  # Light Blush
    "#E7DCD1",  # Antique Sand
    "#D4C8C0",  # Warm Greige
]
'''
# ---------- Morandi-Bright 30 ----------
MORANDI30 = [
    "#AEE1D6",  # Bright Aqua
    "#8FD8C6",  # Mint Green
    "#7CCCCC",  # Sea-Foam
    "#9AC8C9",  # Soft Teal
    "#A6D1F2",  # Baby Blue
    "#B5C7ED",  # Powder Blue
    "#9AB8F2",  # Sky Blue
    "#90A7E6",  # Cornflower
    "#B5A5E6",  # Lavender Blue
    "#C4B1E0",  # Lilac
    "#D0B5E8",  # Light Lilac
    "#E7B7E8",  # Pink Lavender
    "#F6B5CB",  # Light Rose
    "#F7B7A3",  # Coral Peach
    "#F5A6A6",  # Salmon Pink
    "#FFB4B4",  # Soft Red-Pink
    "#FFD3B4",  # Apricot
    "#F6D6AD",  # Warm Peach
    "#F7E6AD",  # Lemon Cream
    "#E8D7B7",  # Sand Beige
    "#D9E89D",  # Lime Sorbet
    "#BCE29E",  # Pistachio
    "#AEE392",  # Spring Green
    "#92CD75",  # Bright Moss
    "#8EC46C",  # Fresh Grass
    "#B8D0C5",  # Celadon
    "#B7E7E1",  # Clear Aqua
    "#C0E6BA",  # Pale Mint
    "#EAD1DC",  # Mauve Pink
    "#C1C8E4",  # Periwinkle Pastel
]


# ---------- 工具函数 ----------
def load_json(p: Path) -> dict:
    return json.loads(p.read_text(encoding="utf-8"))

def dump_json(obj: dict, p: Path):
    p.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")

def collect_categories(objs):
    cats = OrderedDict()
    for o in objs:
        for r in o.get("data", []):
            cat = r.get("category") or r.get("category_info", {}).get("name")
            if cat and cat not in cats:
                cats[cat] = None
    return list(cats)

def build_cmap(cats):
    """
    为 len(cats) 个分类在调色板中均匀取色，首尾覆盖色带两端。
    """
    P = len(MORANDI30)
    N = len(cats)
    if N > P:
        raise RuntimeError(f"分类数量 {N} 超过调色板容量 {P}，请扩展调色板！")

    # 单类别 → 用色带中点；多类别 → 均匀取色
    if N == 1:
        idxs = [P // 2]
    else:
        step = (P - 1) / (N - 1)
        idxs = [round(i * step) for i in range(N)]

    return {cat: MORANDI30[idx] for cat, idx in zip(cats, idxs)}

def rebuild_config(obj, cmap):
    obj["category_config"] = {
        c: {"primary_color": col, "colors": [col], "description": c}
        for c, col in cmap.items()
    }
    obj.setdefault("metadata", {})["categories"] = len(cmap)

def patch_data(obj, cmap):
    for rec in obj.get("data", []):
        cat = rec.get("category") or rec.get("category_info", {}).get("name")
        if not cat or cat not in cmap:
            continue
        col = cmap[cat]
        rec["background_color"] = col
        ci = rec.setdefault("category_info", {"name": cat})
        ci["primary_color"] = col
        ci.setdefault("name", cat)

def save_palette_map(cmap, out_dir: Path):
    ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    fname = f"palette_map_{ts}.json"
    dump_json(cmap, out_dir / fname)
    print(f"🎨 已输出映射文件 → {fname}")

def process(paths):
    objs = [load_json(p) for p in paths]
    cats = collect_categories(objs)
    cmap = build_cmap(cats)

    for p, obj in zip(paths, objs):
        rebuild_config(obj, cmap)
        patch_data(obj, cmap)
        dump_json(obj, p)
        print(f"✓ {p.name}: 同步 {len(cats)} 类色卡并修复 data")

    # 输出 palette 映射
    save_palette_map(cmap, Path("."))

# ---------- CLI ----------
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python sync_palette_morandi.py <file1.json> <file2.json> ...")
        sys.exit(1)
    files = [Path(f) for f in sys.argv[1:]]
    process(files)