#!/usr/bin/env python3
"""
根据 apidata/sequences_cleaned.json 为 _posts 中的 aptamer 页面补全标签。
修复版本：使用更严格的匹配策略，避免过度匹配。

功能：
1. 移除旧的 GC/Length/Year/Type 等自动生成字段（避免重复）。
2. 将 json 中对应记录的 Type / Category / Length / GC / Year 追加到 tags。
3. 写入统一的 type 字段（取第一条记录的 Type）。
4. 报告无法在 JSON 中找到匹配的页面。
5. 修复了匹配策略，避免匹配不到，同时删除了多余的SELEX文件。

使用方法：
    python scripts/update_post_tags_from_sequence_json_fixed.py

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

def normalize_strict(text) -> str:
    """更严格的归一化：保留更多信息，只移除空格和连字符"""
    if not text:
        return ""
    text_str = str(text).lower()
    # 只移除空格、连字符和括号，保留数字和字母
    return re.sub(r"[\s\-\(\)]", "", text_str)


def normalize_loose(text) -> str:
    """宽松的归一化：移除所有非字母数字字符"""
    if not text:
        return ""
    text_str = str(text).lower()
    return re.sub(r"[^a-z0-9]", "", text_str)


def extract_aptamer_names(linker_name_field: str) -> list:
    """从 Linker name(page name) 字段中提取所有aptamer名称"""
    if not linker_name_field:
        return []
    
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
    
    filename = os.path.basename(linker_path)
    if filename.endswith('.html'):
        filename = filename[:-5]
    elif filename.endswith('.md'):
        filename = filename[:-3]
    
    return filename


def is_strict_match(text1: str, text2: str) -> bool:
    """严格匹配：必须完全相等或者有明确的包含关系且长度相近"""
    if not text1 or not text2:
        return False
    
    # 完全匹配
    if text1 == text2:
        return True
    
    # 如果有包含关系，检查长度比例
    if text1 in text2 or text2 in text1:
        shorter, longer = (text1, text2) if len(text1) < len(text2) else (text2, text1)
        # 只有当较短的字符串长度至少是较长字符串的80%时才认为匹配
        length_ratio = len(shorter) / len(longer) if longer else 0
        return length_ratio >= 0.8
    
    return False


def load_sequence_records(path=SEQ_JSON_PATH):
    """加载序列记录并建立映射，使用更严格的策略"""
    with open(path, "r", encoding="utf-8") as f:
        obj = json.load(f)
    sheet = obj.get("Sheet1") or []
    
    # 使用严格映射和宽松映射两种策略
    strict_mappings = {
        'linker_name': defaultdict(list),
        'linker_path': defaultdict(list),
    }
    
    loose_mappings = {
        'named': defaultdict(list),
        'article_name': defaultdict(list)
    }
    
    for rec in sheet:
        # 1. 严格映射：基于 Linker name(page name) 字段
        linker_name = rec.get("Linker name(page name)") or ""
        if linker_name:
            aptamer_names = extract_aptamer_names(linker_name)
            for name in aptamer_names:
                normalized = normalize_strict(name)
                if normalized:
                    strict_mappings['linker_name'][normalized].append(rec)
        
        # 2. 严格映射：基于 Linker 路径
        linker_path = rec.get("Linker") or ""
        if linker_path:
            filename = extract_filename_from_linker(linker_path)
            normalized = normalize_strict(filename)
            if normalized:
                strict_mappings['linker_path'][normalized].append(rec)
        
        # 3. 宽松映射：基于 Named 字段
        named = rec.get("Named") or ""
        if named:
            normalized = normalize_loose(named)
            if normalized:
                loose_mappings['named'][normalized].append(rec)
        
        # 4. 宽松映射：基于 Article name 字段
        article_name = rec.get("Article name") or ""
        if article_name:
            normalized = normalize_loose(article_name)
            if normalized:
                loose_mappings['article_name'][normalized].append(rec)
    
    return strict_mappings, loose_mappings


def find_matching_records_fixed(filename_slug: str, title_slug: str, strict_mappings: dict, loose_mappings: dict):
    """使用修复的匹配策略查找记录"""
    found_records = []
    match_details = []
    
    # 创建严格和宽松版本的文件名
    filename_strict = normalize_strict(filename_slug)
    title_strict = normalize_strict(title_slug)
    filename_loose = normalize_loose(filename_slug)
    title_loose = normalize_loose(title_slug)
    
    # 策略1: 精确匹配 Linker name (严格)
    for key, records in strict_mappings['linker_name'].items():
        if key == filename_strict or key == title_strict:
            found_records.extend(records)
            match_details.append(f"精确匹配 Linker name (strict): {key} -> {len(records)} 条记录")
    
    # 策略2: 精确匹配 Linker 路径 (严格)
    for key, records in strict_mappings['linker_path'].items():
        if key == filename_strict or key == title_strict:
            found_records.extend(records)
            match_details.append(f"精确匹配 Linker 路径 (strict): {key} -> {len(records)} 条记录")
    
    # 如果已经有精确匹配，直接返回
    if found_records:
        unique_records = list({id(r): r for r in found_records}.values())
        return unique_records, match_details
    
    # 策略3: 严格匹配 Linker name (允许包含关系，但要求长度相近)
    for key, records in strict_mappings['linker_name'].items():
        if is_strict_match(key, filename_strict) or is_strict_match(key, title_strict):
            found_records.extend(records)
            match_details.append(f"严格匹配 Linker name: {key} -> {len(records)} 条记录")
    
    # 策略4: 严格匹配 Linker 路径
    for key, records in strict_mappings['linker_path'].items():
        if is_strict_match(key, filename_strict) or is_strict_match(key, title_strict):
            found_records.extend(records)
            match_details.append(f"严格匹配 Linker 路径: {key} -> {len(records)} 条记录")
    
    # 如果严格匹配有结果，返回
    if found_records:
        unique_records = list({id(r): r for r in found_records}.values())
        return unique_records, match_details
    
    # 策略5: 宽松匹配 Named 字段（但限制结果数量）
    for key, records in loose_mappings['named'].items():
        if is_strict_match(key, filename_loose) or is_strict_match(key, title_loose):
            # 限制宽松匹配的结果数量，避免过度匹配
            if len(records) <= 5:  # 只接受5条或更少的记录
                found_records.extend(records)
                match_details.append(f"宽松匹配 Named (limited): {key} -> {len(records)} 条记录")
    
    # 策略6: 宽松匹配 Article name 字段（限制结果数量）
    for key, records in loose_mappings['article_name'].items():
        if is_strict_match(key, filename_loose) or is_strict_match(key, title_loose):
            if len(records) <= 5:  # 只接受5条或更少的记录
                found_records.extend(records)
                match_details.append(f"宽松匹配 Article name (limited): {key} -> {len(records)} 条记录")
    
    # 去重并返回
    unique_records = list({id(r): r for r in found_records}.values())
    return unique_records, match_details


def extract_front_matter(content: str):
    """拆分 YAML front-matter 与正文"""
    if not content.startswith("---"):
        return None, content
    parts = content.split("---", 2)
    if len(parts) < 3:
        return None, content
    return parts[1].strip(), parts[2]


def rebuild_post(path: str, meta: dict, body: str):
    """写回文件"""
    yaml_str = yaml.dump(meta, allow_unicode=True, sort_keys=False)
    with open(path, "w", encoding="utf-8") as f:
        f.write("---\n" + yaml_str + "---" + body)


# ---------- 主流程 ----------

def main():
    print("加载序列记录...")
    strict_mappings, loose_mappings = load_sequence_records()
    
    unmatched = []
    matched_count = 0
    high_match_warnings = []
    
    print("处理aptamer文件...")
    # 匹配所有aptamer相关的文件，包括不同的拼写变体
    aptamer_files = []
    aptamer_files.extend(glob.glob(os.path.join(POSTS_DIR, "*aptamer*.md")))  # 小写aptamer
    aptamer_files.extend(glob.glob(os.path.join(POSTS_DIR, "*Aptamer*.md")))  # 大写Aptamer
    aptamer_files.extend(glob.glob(os.path.join(POSTS_DIR, "*aptermer*.md"))) # 拼写错误aptermer
    
    # 去重（防止文件被重复处理）
    aptamer_files = list(set(aptamer_files))
    
    for md_path in aptamer_files:
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

        filename = os.path.splitext(os.path.basename(md_path))[0]
        filename_slug = filename
        title_slug = meta.get("title") or ""
        
        print(f"处理文件: {filename}")

        # 查找匹配的记录
        recs, match_details = find_matching_records_fixed(filename_slug, title_slug, strict_mappings, loose_mappings)
        
        if not recs:
            unmatched.append(md_path)
            print(f"  - 未找到匹配记录")
            continue
        
        # 检查是否匹配了过多记录
        if len(recs) > 15:
            high_match_warnings.append({
                'filename': filename,
                'count': len(recs),
                'details': match_details
            })
            print(f"  - ⚠️  找到 {len(recs)} 条记录（可能过多）")
        else:
            matched_count += 1
            print(f"  - ✓ 找到 {len(recs)} 条匹配记录")

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

    # 输出统计结果
    print(f"\n{'='*60}")
    print("处理完成")
    print(f"{'='*60}")
    print(f"成功匹配: {matched_count} 个文件")
    print(f"高匹配数量警告: {len(high_match_warnings)} 个文件")
    print(f"未匹配: {len(unmatched)} 个文件")
    
    if high_match_warnings:
        print(f"\n⚠️  高匹配数量警告文件:")
        for warning in high_match_warnings:
            print(f"  - {warning['filename']}: {warning['count']} 条记录")
            print(f"    匹配策略: {'; '.join(warning['details'])}")
    
    if unmatched:
        print(f"\n未匹配文件:")
        for p in unmatched:
            print("  -", os.path.relpath(p, PROJECT_ROOT))
    
    if not unmatched and not high_match_warnings:
        print("✓ 全部aptamer页面均已正确匹配JSON并更新完毕")


if __name__ == "__main__":
    main() 