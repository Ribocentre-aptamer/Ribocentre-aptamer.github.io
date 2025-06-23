#!/usr/bin/env python3
"""
根据 apidata/sequences_cleaned.json 为 _posts 中的 aptamer 页面补全标签。

功能：
1. 移除旧的 GC/Length/Year/Type 等自动生成字段（避免重复）。
2. 将 json 中对应记录的 Type / Category / Length / GC / Year 追加到 tags。
3. 写入统一的 type 字段（取第一条记录的 Type）。
4. 报告无法在 JSON 中找到匹配的页面。

使用方法：
    python scripts/update_post_tags_from_sequence_json.py

要求：
    pip install pyyaml
"""

import os
import re
import json
import yaml
import glob
from collections import defaultdict

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(ROOT_DIR, os.pardir))
POSTS_DIR = os.path.join(PROJECT_ROOT, "_posts")
SEQ_JSON_PATH = os.path.join(PROJECT_ROOT, "apidata", "sequences_cleaned.json")

# ---------- 工具函数 ----------

def normalize(text: str) -> str:
    """将文本转成统一格式用于标题匹配"""
    if not text:
        return ""
    return re.sub(r"[^a-z0-9]", "", text.lower())


def load_sequence_records(path=SEQ_JSON_PATH):
    with open(path, "r", encoding="utf-8") as f:
        obj = json.load(f)
    sheet = obj.get("Sheet1") or []
    name_map = defaultdict(list)
    for rec in sheet:
        name = normalize(rec.get("Named") or rec.get("ID") or "")
        if name:
            name_map[name].append(rec)
    return name_map


def extract_front_matter(content: str):
    """拆分 YAML front-matter 与正文"""
    if not content.startswith("---"):
        return None, content  # no yaml
    parts = content.split("---", 2)
    if len(parts) < 3:
        return None, content  # malformed
    return parts[1].strip(), parts[2]


def rebuild_post(path: str, meta: dict, body: str):
    """写回文件"""
    yaml_str = yaml.dump(meta, allow_unicode=True, sort_keys=False)
    with open(path, "w", encoding="utf-8") as f:
        f.write("---\n" + yaml_str + "---" + body)


# ---------- 主流程 ----------

def main():
    # ---------- 建立 post 映射：根据 Linker name (page name) 字段 ----------
    linker_map = defaultdict(list)
    all_recs = load_sequence_records()
    for recs in all_recs.values():
        for r in recs:
            page_name = r.get("Linker name (page name)") or r.get("Linker") or ""
            if not page_name:
                continue
            slug = normalize(page_name)
            if slug:
                linker_map[slug].append(r)

    unmatched = []

    for md_path in glob.glob(os.path.join(POSTS_DIR, "*aptamer.md")):
        try:
            with open(md_path, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception as e:
            print(f"读取失败: {md_path}: {e}")
            continue

        yaml_part, body = extract_front_matter(content)
        if yaml_part is None:
            print(f"缺少 front-matter: {md_path}")
            continue

        meta = yaml.safe_load(yaml_part) or {}

        # 通过标题 & 文件名两种归一化后匹配
        slug1 = normalize(os.path.splitext(os.path.basename(md_path))[0])
        title_norm = normalize(meta.get("title") or "")

        recs = linker_map.get(slug1, []) + linker_map.get(title_norm, [])

        # 若仍未匹配，尝试模糊包含：只要 key 是 title_norm 的子串或相反
        if not recs:
            for key, lst in linker_map.items():
                if key in title_norm or title_norm in key:
                    recs.extend(lst)
        if recs:
            # 去重
            recs = list({id(r): r for r in recs}.values())
        if not recs:
            unmatched.append(md_path)
            continue  # 不写回，保持原样

        # 1. 构建 tag 集合，先剔除旧的自动标签
        old_tags = meta.get("tags", []) or []
        if isinstance(old_tags, str):
            old_tags = [old_tags]
        clean_tags = {
            t for t in old_tags
            if not re.match(r"^(GC|Length|Year|Type|Category|Named):", str(t))
        }

        # 2. 追加来自 JSON 的标签
        for r in recs:
            if r.get("Type"):
                clean_tags.add(f"Type:{r['Type']}")
            if r.get("Category"):
                clean_tags.add(f"Category:{r['Category']}")
            if r.get("Length"):
                clean_tags.add(f"Length:{r['Length']}")
            gc = r.get("GC Content")
            if gc is not None and gc != "":
                try:
                    gc_val = float(gc) * 100 if float(gc) < 1 else float(gc)
                    clean_tags.add(f"GC:{gc_val}")
                except Exception:
                    pass
            if r.get("Year"):
                clean_tags.add(f"Year:{r['Year']}")

            # 使用 Named 作为区分标签
            if r.get("Named"):
                clean_tags.add(f"Named:{r['Named']}")

        meta["tags"] = sorted(clean_tags)

        # 3. 设置 type 字段（若缺失）
        if "type" not in meta or not meta["type"]:
            meta["type"] = recs[0].get("Type", "")

        # 4. 写回
        rebuild_post(md_path, meta, body)

    # 输出未匹配列表
    if unmatched:
        print("以下页面在 sequences_cleaned.json 中找不到对应记录：")
        for p in unmatched:
            print("  -", os.path.relpath(p, PROJECT_ROOT))
    else:
        print("全部 aptamer 页面均已匹配 JSON 并更新完毕 ✔")


if __name__ == "__main__":
    main() 