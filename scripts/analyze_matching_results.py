#!/usr/bin/env python3
"""
分析每个aptamer页面匹配到的记录数量，识别可能的错误匹配

使用方法：
    python scripts/analyze_matching_results.py
"""

import os
import re
import json
import glob
from collections import defaultdict

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(ROOT_DIR, os.pardir))
POSTS_DIR = os.path.join(PROJECT_ROOT, "_posts")
SEQ_JSON_PATH = os.path.join(PROJECT_ROOT, "apidata", "sequences_cleaned.json")

def normalize(text) -> str:
    """将文本转成统一格式用于标题匹配"""
    if not text:
        return ""
    text_str = str(text)
    return re.sub(r"[^a-z0-9]", "", text_str.lower())

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

def is_fuzzy_match(text1: str, text2: str, threshold: float = 0.7) -> bool:
    """检查两个归一化文本是否模糊匹配"""
    if not text1 or not text2:
        return False
    
    if text1 == text2:
        return True
    
    if text1 in text2 or text2 in text1:
        return True
    
    shorter, longer = (text1, text2) if len(text1) < len(text2) else (text2, text1)
    common_chars = sum(1 for c in shorter if c in longer)
    similarity = common_chars / len(longer) if longer else 0
    
    return similarity >= threshold

def load_sequence_records(path=SEQ_JSON_PATH):
    """加载序列记录并建立多种映射"""
    with open(path, "r", encoding="utf-8") as f:
        obj = json.load(f)
    sheet = obj.get("Sheet1") or []
    
    mappings = {
        'linker_name': defaultdict(list),
        'linker_path': defaultdict(list),
        'named': defaultdict(list),
        'article_name': defaultdict(list)
    }
    
    for rec in sheet:
        # 1. 基于 Linker name(page name) 字段
        linker_name = rec.get("Linker name(page name)") or ""
        if linker_name:
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

def find_matching_records_with_debug(filename_slug: str, title_slug: str, mappings: dict):
    """查找匹配的记录，并返回详细的匹配信息"""
    found_records = []
    match_details = []
    
    # 策略1: 精确匹配 Linker name
    for key, records in mappings['linker_name'].items():
        if key == filename_slug or key == title_slug:
            found_records.extend(records)
            match_details.append(f"精确匹配 Linker name: {key} -> {len(records)} 条记录")
    
    # 策略2: 精确匹配 Linker 路径
    for key, records in mappings['linker_path'].items():
        if key == filename_slug or key == title_slug:
            found_records.extend(records)
            match_details.append(f"精确匹配 Linker 路径: {key} -> {len(records)} 条记录")
    
    # 如果已找到记录，返回
    if found_records:
        unique_records = list({id(r): r for r in found_records}.values())
        return unique_records, match_details
    
    # 策略3: 模糊匹配 Linker name
    for key, records in mappings['linker_name'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
            match_details.append(f"模糊匹配 Linker name: {key} -> {len(records)} 条记录")
    
    # 策略4: 模糊匹配 Linker 路径
    for key, records in mappings['linker_path'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
            match_details.append(f"模糊匹配 Linker 路径: {key} -> {len(records)} 条记录")
    
    # 策略5: 检查 Named 字段
    for key, records in mappings['named'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
            match_details.append(f"模糊匹配 Named: {key} -> {len(records)} 条记录")
    
    # 策略6: 检查 Article name 字段
    for key, records in mappings['article_name'].items():
        if is_fuzzy_match(key, filename_slug) or is_fuzzy_match(key, title_slug):
            found_records.extend(records)
            match_details.append(f"模糊匹配 Article name: {key} -> {len(records)} 条记录")
    
    unique_records = list({id(r): r for r in found_records}.values())
    return unique_records, match_details

def main():
    print("加载序列记录...")
    mappings = load_sequence_records()
    
    results = []
    
    print("分析每个aptamer文件的匹配情况...")
    for md_path in glob.glob(os.path.join(POSTS_DIR, "*aptamer.md")):
        filename = os.path.splitext(os.path.basename(md_path))[0]
        filename_slug = normalize(filename)
        
        # 简单假设标题与文件名相同（为了快速分析）
        title_slug = filename_slug
        
        recs, match_details = find_matching_records_with_debug(filename_slug, title_slug, mappings)
        
        results.append({
            'filename': filename,
            'record_count': len(recs),
            'match_details': match_details,
            'sample_records': recs[:3] if recs else []  # 只取前3条作为样本
        })
    
    # 按记录数量排序
    results.sort(key=lambda x: x['record_count'], reverse=True)
    
    print(f"\n{'='*60}")
    print("匹配结果统计（按记录数量降序排列）")
    print(f"{'='*60}")
    
    # 显示统计概览
    total_files = len(results)
    high_count_files = len([r for r in results if r['record_count'] > 10])
    medium_count_files = len([r for r in results if 2 <= r['record_count'] <= 10])
    single_count_files = len([r for r in results if r['record_count'] == 1])
    zero_count_files = len([r for r in results if r['record_count'] == 0])
    
    print(f"总文件数: {total_files}")
    print(f"高匹配数量 (>10条): {high_count_files}")
    print(f"中等匹配数量 (2-10条): {medium_count_files}")
    print(f"单条匹配: {single_count_files}")
    print(f"零匹配: {zero_count_files}")
    print()
    
    # 显示详细结果
    for i, result in enumerate(results):
        print(f"{i+1:3d}. {result['filename']:<50} {result['record_count']:>3d} 条记录")
        
        # 对于高匹配数量的显示更多细节
        if result['record_count'] > 10:
            print(f"     匹配策略: {'; '.join(result['match_details'])}")
            if result['sample_records']:
                print("     样本记录:")
                for j, rec in enumerate(result['sample_records']):
                    print(f"       {j+1}. Named: {rec.get('Named', 'N/A')}")
                    print(f"          Linker name: {rec.get('Linker name(page name)', 'N/A')}")
            print()
    
    print(f"\n{'='*60}")
    print("需要关注的高匹配数量文件（可能存在错误匹配）:")
    print(f"{'='*60}")
    
    high_match_files = [r for r in results if r['record_count'] > 10]
    for result in high_match_files:
        print(f"• {result['filename']}: {result['record_count']} 条记录")
        print(f"  匹配策略: {'; '.join(result['match_details'])}")
        print()

if __name__ == "__main__":
    main() 