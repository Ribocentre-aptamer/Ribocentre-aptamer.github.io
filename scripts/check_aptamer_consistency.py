#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
检查aptamer JSON文件中的数据一致性问题
比较name字段和link字段中的页面名称是否一致
"""

import json
import re
import os
from typing import Dict, List, Tuple
from urllib.parse import urlparse

def extract_filename_from_url(url: str) -> str:
    """从URL中提取文件名"""
    if not url:
        return ""
    
    # 解析URL
    parsed = urlparse(url)
    path = parsed.path
    
    # 提取最后一个路径段作为文件名
    filename = path.split('/')[-1]
    
    # 移除可能的文件扩展名
    if filename.endswith('.html'):
        filename = filename[:-5]
    elif filename.endswith('.md'):
        filename = filename[:-3]
    
    return filename

def normalize_name(name: str) -> str:
    """标准化名称以便比较"""
    if not name:
        return ""
    
    # 转换为小写
    name = name.lower()
    
    # 移除特殊字符和空格
    name = re.sub(r'[^\w\s-]', '', name)
    
    # 将多个空格替换为单个空格
    name = re.sub(r'\s+', ' ', name)
    
    # 移除首尾空格
    name = name.strip()
    
    return name

def check_consistency(name: str, filename: str) -> Tuple[bool, str]:
    """检查名称和文件名是否一致"""
    normalized_name = normalize_name(name)
    normalized_filename = normalize_name(filename)
    
    # 完全匹配
    if normalized_name == normalized_filename:
        return True, "完全匹配"
    
    # 检查文件名是否包含在名称中
    if normalized_filename in normalized_name:
        return True, "文件名包含在名称中"
    
    # 检查名称是否包含在文件名中
    if normalized_name in normalized_filename:
        return True, "名称包含在文件名中"
    
    # 检查是否有部分匹配（至少50%的字符匹配）
    if len(normalized_name) > 0 and len(normalized_filename) > 0:
        common_chars = set(normalized_name) & set(normalized_filename)
        if len(common_chars) / max(len(set(normalized_name)), len(set(normalized_filename))) >= 0.5:
            return False, "部分匹配"
    
    return False, "不匹配"

def analyze_json_file(file_path: str) -> List[Dict]:
    """分析JSON文件并返回数据列表"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        results = []
        for item in data.get('data', []):
            name = item.get('name', '')
            link = item.get('link', '')
            filename = extract_filename_from_url(link)
            
            is_consistent, consistency_type = check_consistency(name, filename)
            
            results.append({
                'name': name,
                'link': link,
                'filename': filename,
                'is_consistent': is_consistent,
                'consistency_type': consistency_type,
                'normalized_name': normalize_name(name),
                'normalized_filename': normalize_name(filename)
            })
        
        return results
    
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
        return []

def generate_consistency_report():
    """生成一致性检查报告"""
    # 文件路径
    file1 = "apidata/aptamer_no_3d_enhanced.json"
    file2 = "apidata/aptamer_3d_enhanced.json"
    
    print("开始检查aptamer JSON文件的数据一致性...")
    print("=" * 80)
    
    # 分析两个文件
    data1 = analyze_json_file(file1)
    data2 = analyze_json_file(file2)
    
    # 生成详细表格
    print("\n1. 无3D结构适配体数据一致性检查")
    print("-" * 80)
    print(f"{'序号':<4} {'名称':<30} {'文件名':<25} {'一致性':<8} {'类型':<12}")
    print("-" * 80)
    
    consistent_count1 = 0
    inconsistent_count1 = 0
    
    for i, item in enumerate(data1, 1):
        status = "✓" if item['is_consistent'] else "✗"
        print(f"{i:<4} {item['name']:<30} {item['filename']:<25} {status:<8} {item['consistency_type']:<12}")
        
        if item['is_consistent']:
            consistent_count1 += 1
        else:
            inconsistent_count1 += 1
    
    print("\n2. 有3D结构适配体数据一致性检查")
    print("-" * 80)
    print(f"{'序号':<4} {'名称':<30} {'文件名':<25} {'一致性':<8} {'类型':<12}")
    print("-" * 80)
    
    consistent_count2 = 0
    inconsistent_count2 = 0
    
    for i, item in enumerate(data2, 1):
        status = "✓" if item['is_consistent'] else "✗"
        print(f"{i:<4} {item['name']:<30} {item['filename']:<25} {status:<8} {item['consistency_type']:<12}")
        
        if item['is_consistent']:
            consistent_count2 += 1
        else:
            inconsistent_count2 += 1
    
    # 生成统计报告
    print("\n3. 统计报告")
    print("=" * 80)
    print(f"无3D结构适配体文件: {file1}")
    print(f"  总项目数: {len(data1)}")
    print(f"  一致项目数: {consistent_count1}")
    print(f"  不一致项目数: {inconsistent_count1}")
    print(f"  一致性比例: {consistent_count1/len(data1)*100:.1f}%")
    
    print(f"\n有3D结构适配体文件: {file2}")
    print(f"  总项目数: {len(data2)}")
    print(f"  一致项目数: {consistent_count2}")
    print(f"  不一致项目数: {inconsistent_count2}")
    print(f"  一致性比例: {consistent_count2/len(data2)*100:.1f}%")
    
    # 生成详细的不一致项目列表
    print("\n4. 不一致项目详细列表")
    print("=" * 80)
    
    print("\n无3D结构适配体中的不一致项目:")
    print("-" * 50)
    for item in data1:
        if not item['is_consistent']:
            print(f"名称: {item['name']}")
            print(f"文件名: {item['filename']}")
            print(f"链接: {item['link']}")
            print(f"标准化名称: {item['normalized_name']}")
            print(f"标准化文件名: {item['normalized_filename']}")
            print("-" * 30)
    
    print("\n有3D结构适配体中的不一致项目:")
    print("-" * 50)
    for item in data2:
        if not item['is_consistent']:
            print(f"名称: {item['name']}")
            print(f"文件名: {item['filename']}")
            print(f"链接: {item['link']}")
            print(f"标准化名称: {item['normalized_name']}")
            print(f"标准化文件名: {item['normalized_filename']}")
            print("-" * 30)
    
    # 保存详细数据到文件
    save_detailed_data(data1, data2)

def save_detailed_data(data1: List[Dict], data2: List[Dict]):
    """保存详细数据到文件"""
    # 保存无3D结构数据
    with open("aptamer_no_3d_consistency_data.csv", "w", encoding="utf-8") as f:
        f.write("序号,名称,链接,文件名,一致性,类型,标准化名称,标准化文件名\n")
        for i, item in enumerate(data1, 1):
            f.write(f"{i},{item['name']},{item['link']},{item['filename']},{item['is_consistent']},{item['consistency_type']},{item['normalized_name']},{item['normalized_filename']}\n")
    
    # 保存有3D结构数据
    with open("aptamer_3d_consistency_data.csv", "w", encoding="utf-8") as f:
        f.write("序号,名称,链接,文件名,一致性,类型,标准化名称,标准化文件名\n")
        for i, item in enumerate(data2, 1):
            f.write(f"{i},{item['name']},{item['link']},{item['filename']},{item['is_consistent']},{item['consistency_type']},{item['normalized_name']},{item['normalized_filename']}\n")
    
    print(f"\n详细数据已保存到:")
    print(f"  - aptamer_no_3d_consistency_data.csv")
    print(f"  - aptamer_3d_consistency_data.csv")

if __name__ == "__main__":
    generate_consistency_report() 