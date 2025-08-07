#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
修复 aptamer_3d_enhanced.json —— 同步分类并清理描述
"""

import json
import re
from pathlib import Path

# --------- 路径 ----------
BASE = Path("apidata")
#aptamer_path  = BASE / "aptamer_3d_enhanced.json"
aptamer_path  = BASE / "aptamer_no_3d_enhanced.json"
seq_path      = BASE / "sequences_cleaned.json"
out_path      = BASE / "aptamer_no_3d_enhanced_fixed.json"

# --------- 统一化处理 ----------
def _normalize_link(raw: str) -> str:
    """把各种写法归一到 '_posts/xxx-aptamer' 形式（无前导斜杠、无 .html）"""
    if not raw:
        return ""
    # 去域名
    raw = re.sub(r"https?://[^/]+", "", raw)
    # 去查询串
    raw = raw.split("?", 1)[0]
    # 去 .html/.htm
    raw = re.sub(r"\.html?$", "", raw, flags=re.IGNORECASE)
    # 去尾部 '/index'
    raw = re.sub(r"/index$", "", raw, flags=re.IGNORECASE)
    # 去掉所有前导斜杠
    return raw.lstrip("/")

# --------- 读文件 ----------
apt_json = json.loads(aptamer_path.read_text(encoding="utf-8"))
seq_json = json.loads(seq_path.read_text(encoding="utf-8"))

# --------- 构建映射表 ----------
link2cat = {}
for row in seq_json.get("Sheet1", []):
    nk = _normalize_link(str(row.get("Linker", "")).strip())
    cat = row.get("Category") or row.get("Type")
    if nk and cat:
        link2cat[nk] = cat

# --------- 修复 ----------
patched, cleaned = 0, 0
for rec in apt_json.get("data", []):
    nk = _normalize_link(rec.get("link", ""))
    new_cat = link2cat.get(nk)

    # 更新分类（若有不同）
    if new_cat:
        if rec.get("category") != new_cat:
            rec["category"] = new_cat
        if isinstance(rec.get("category_info"), dict):
            rec["category_info"]["name"] = new_cat
        patched += 1

    # 删除描述（顶层与 category_info）
    if rec.pop("description", None) == "荧光适配体":
        cleaned += 1
    if isinstance(rec.get("category_info"), dict):
        if rec["category_info"].pop("description", None) == "荧光适配体":
            cleaned += 1

# --------- 写回 ----------
out_path.write_text(json.dumps(apt_json, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"分类同步 {patched} 条，删除描述 {cleaned} 条，结果已保存至 {out_path}")
