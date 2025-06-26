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

def normalize(text) -> str:
    """将文本转成统一格式用于标题匹配"""
    if not text:
        return ""
    # 确保转换为字符串
    text_str = str(text)
    return re.sub(r"[^a-z0-9]", "", text_str.lower())


def extract_aptamer_names(linker_name_field: str) -> list:
    """从 Linker name(page name) 字段中提取所有aptamer名称"""
    if not linker_name_field:
        return []
    
    # 按逗号分割，然后清理每个名称
    names = []
    for name in linker_name_field.split(','):
        cleaned = name.strip()
        if cleaned:
            names.append(cleaned)
    return names


def extract_filename_from_linker(linker_path: str) -> str:
    """从Linker路径中提取文件名"""
    if not linker_path:
        return ""
    
    # 提取文件名部分，去掉路径和扩展名
    filename = os.path.basename(linker_path)
    if filename.endswith('.html'):
        filename = filename[:-5]  # 去掉.html
    elif filename.endswith('.md'):
        filename = filename[:-3]  # 去掉.md
    
    return filename


def is_fuzzy_match(text1: str, text2: str, threshold: float = 0.7) -> bool:
    """检查两个归一化文本是否模糊匹配"""
    if not text1 or not text2:
        return False
    
    # 完全匹配
    if text1 == text2:
        return True
    
    # 包含关系
    if text1 in text2 or text2 in text1:
        return True
    
    # 计算相似度（简单的字符匹配）
    shorter, longer = (text1, text2) if len(text1) < len(text2) else (text2, text1)
    common_chars = sum(1 for c in shorter if c in longer)
    similarity = common_chars / len(longer) if longer else 0
    
    return similarity >= threshold


def load_sequence_records(path=SEQ_JSON_PATH):
    """加载序列记录并建立多种映射"""
    with open(path, "r", encoding="utf-8") as f:
        obj = json.load(f)
    sheet = obj.get("Sheet1") or []
    
    # 建立多种映射
    mappings = {
        'linker_name': defaultdict(list),      # 基于 Linker name(page name)
        'linker_path': defaultdict(list),      # 基于 Linker 路径
        'named': defaultdict(list),            # 基于 Named 字段
        'article_name': defaultdict(list)      # 基于 Article name 字段
    }
    
    for rec in sheet:
        # 1. 基于 Linker name(page name) 字段
        linker_name = rec.get("Linker name(page name)") or ""
        if linker_name:
            # 处理多个aptamer名称（逗号分隔）
            aptamer_names = extract_aptamer_names(linker_name)
            for name in aptamer_names:
                normalized = normalize(name)
                if normalized:
                    mappings['linker_name'][normalized].append(rec)
        
        # 2. 基于 Linker 路径
        linker_path = rec.get("Linker") or ""
        if linker_path:
            filename = extract_filename_from_linker(linker_path)
            normalized = normalize(filename)
            if normalized:
                mappings['linker_path'][normalized].append(rec)
        
        # 3. 基于 Named 字段
        named = rec.get("Named") or ""
        if named:
            normalized = normalize(named)
            if normalized:
                mappings['named'][normalized].append(rec)
        
        # 4. 基于 Article name 字段
        article_name = rec.get("Article name") or ""
        if article_name:
            normalized = normalize(article_name)
            if normalized:
                mappings['article_name'][normalized].append(rec)
    
    return mappings


def find_matching_records(filename_slug: str, title_slug: str, mappings: dict):
    """查找匹配的记录，使用多种策略"""
    found_records = []
    
    # 策略1: 精确匹配 Linker name
    for key, records in mappings['linker_name'].items():
        if key == filename_slug or key == title_slug:
            found_records.extend(records)
    
    # 策略2: 精确匹配 Linker 路径
    for key, records in mappings['linker_path'].items():
        if key == filename_slug or key == title_slug:
            found_records.extend(records)
    
    # 如果已找到记录，返回
    if found_records:
        return list({id(r): r for r in found_records}.values())
    
    # 策略3: 模糊匹配 Linker name
    for key, records in mappings['linker_name'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
    
    # 策略4: 模糊匹配 Linker 路径
    for key, records in mappings['linker_path'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
    
    # 策略5: 检查 Named 字段
    for key, records in mappings['named'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
    
    # 策略6: 检查 Article name 字段
    for key, records in mappings['article_name'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
    
    # 去重并返回
    return list({id(r): r for r in found_records}.values())


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
    print("加载序列记录...")
    mappings = load_sequence_records()
    
    unmatched = []
    matched_count = 0
    
    print("处理aptamer文件...")
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
        filename = os.path.splitext(os.path.basename(md_path))[0]
        filename_slug = normalize(filename)
        title_slug = normalize(meta.get("title") or "")
        
        print(f"处理文件: {filename}")
        print(f"  - 文件名归一化: {filename_slug}")
        print(f"  - 标题归一化: {title_slug}")

        # 查找匹配的记录
        recs = find_matching_records(filename_slug, title_slug, mappings)
        
        if not recs:
            unmatched.append(md_path)
            print(f"  - 未找到匹配记录")
            continue
        
        matched_count += 1
        print(f"  - 找到 {len(recs)} 条匹配记录")

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
        print(f"  - 已更新标签")

    # 输出统计结果
    print(f"\n=== 处理完成 ===")
    print(f"成功匹配: {matched_count} 个文件")
    print(f"未匹配: {len(unmatched)} 个文件")
    
    if unmatched:
        print("\n以下页面在 sequences_cleaned.json 中找不到对应记录：")
        for p in unmatched:
            print("  -", os.path.relpath(p, PROJECT_ROOT))
    else:
        print("全部 aptamer 页面均已匹配 JSON 并更新完毕 ✔")


if __name__ == "__main__":
    main() 