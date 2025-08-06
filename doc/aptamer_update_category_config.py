#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
自动重建 aptamer 数据文件头部的 category_config。

特点
------
* **增删同步**：仅保留 data 中实际出现的分类，多余旧分类被清理，新分类自动加入。
* **颜色聚合**：为每个分类收集该分类下出现过的全部颜色，
  - primary_color：优先沿用旧配置；若无则取出现次数最多的颜色（并保持出现顺序的最早者）。
  - colors：去重后按首次出现顺序排列；若 primary_color 不在列表里则被插到最前。
* **描述复用**：沿用旧 `description`；若旧文件里不存在，则用分类名本身。
* **统计自动更新**：`metadata["categories"]` 会被刷新为实际分类总数。
* **原文件安全**：在同目录生成 `.bak.json` 备份后再覆盖原文件。

用法
------
    python update_category_config.py <file1.json> <file2.json> ...
    # 若不指定参数，则默认扫描当前目录下包含 "aptamer" 且以 ".json" 结尾的文件
"""

import json
import sys
import pathlib
from collections import Counter, defaultdict

def choose_primary(colors: list[str]) -> str:
    """
    在颜色列表里选一个最常出现的颜色作为 primary_color；
    若出现次数并列，取最早出现的。
    """
    counter = Counter(colors)
    most_common_count = counter.most_common(1)[0][1]
    for c in colors:            # 按出现顺序遍历
        if counter[c] == most_common_count:
            return c            # 先到先得

def rebuild_category_config(obj: dict) -> None:
    """就地重建 obj['category_config'] 并刷新 obj['metadata']['categories']"""
    # 旧配置备份，便于继承 primary_color / description
    old_cfg = obj.get("category_config", {})

    # --- 统计每个分类下所有出现过的颜色 -----------------------------
    cat_colors: dict[str, list[str]] = defaultdict(list)
    for rec in obj.get("data", []):
        cat = rec.get("category") or rec.get("category_info", {}).get("name")
        if not cat:
            continue
        color = (
            rec.get("category_info", {}).get("primary_color")
            or rec.get("background_color")
        )
        if color:
            cat_colors[cat].append(color)

    # --- 构建新的 category_config ------------------------------------
    new_cfg = {}
    for cat, colors in cat_colors.items():
        # 去重但保持首次出现顺序
        seen = set()
        uniq = [c for c in colors if not (c in seen or seen.add(c))]
        # primary_color：旧的优先；否则选众数
        primary = old_cfg.get(cat, {}).get("primary_color") or choose_primary(colors)
        if primary not in uniq:
            uniq.insert(0, primary)
        new_cfg[cat] = {
            "primary_color": primary,
            "colors": uniq,
            "description": old_cfg.get(cat, {}).get("description", cat)
        }

    # --- 写回 ------------------------------------
    obj["category_config"] = new_cfg
    if "metadata" in obj:
        obj["metadata"]["categories"] = len(new_cfg)

def process_file(path: pathlib.Path) -> None:
    raw = path.read_text(encoding="utf-8")
    obj = json.loads(raw)
    rebuild_category_config(obj)

    # 备份原文件
    backup = path.with_suffix(".bak.json")
    path.rename(backup)

    # 覆盖写新文件
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[✔] {path.name}: 已重建 {len(obj['category_config'])} 个分类 (备份 → {backup.name})")

def main():
    args = sys.argv[1:]
    if args:
        files = [pathlib.Path(p) for p in args]
    else:
        files = sorted(pathlib.Path(".").glob("*aptamer*.json"))
        if not files:
            print("未找到待处理的 aptamer*.json 文件")
            return
    for f in files:
        try:
            process_file(f)
        except Exception as e:
            print(f"[✘] 处理 {f} 时出错：{e}")

if __name__ == "__main__":
    main()
