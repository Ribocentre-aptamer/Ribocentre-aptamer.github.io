#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
分析_posts目录下markdown文件的分类统计
"""

import csv
import re
from collections import defaultdict, Counter

def load_posts_data(csv_file: str = "posts_titles.csv") -> list:
    """加载posts_titles.csv数据"""
    data = []
    try:
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                data.append(row)
        print(f"成功加载 {len(data)} 条记录")
        return data
    except Exception as e:
        print(f"加载CSV文件时出错: {e}")
        return []

def categorize_aptamer(title: str, filename: str) -> str:
    """根据title和filename对aptamer进行分类"""
    title_lower = title.lower()
    filename_lower = filename.lower()
    
    # SELEX方法
    if 'selex' in title_lower or 'selex' in filename_lower:
        return "SELEX方法"
    
    # 病毒相关
    virus_keywords = ['hiv', 'hcv', 'hpv', 'hsv', 'sars', 'hbv', 'htlv', 'h3n2', 'h5n1', 'h7n7']
    for keyword in virus_keywords:
        if keyword in title_lower or keyword in filename_lower:
            return "病毒相关"
    
    # 小分子化合物
    small_molecule_keywords = [
        'atp', 'dopamine', 'adenine', 'chloramphenicol', 'codeine', 'doxycyline',
        'caffeine', 'theophylline', 'tetracycline', 'neomycin', 'streptomycin',
        'tobramycin', 'ribostamycin', 'paromomycin', 'lividomycin',
        'arginine', 'citrulline', 'biotin', 'fad', 'fmn', 'gtp', 'camp',
        'xanthine', 'vitamin', 'tobramycin', 'theophylline', 'tetracycline'
    ]
    for keyword in small_molecule_keywords:
        if keyword in title_lower or keyword in filename_lower:
            return "小分子化合物"
    
    # 荧光适配体
    fluorescent_keywords = [
        'beetroot', 'broccoli', 'chili', 'clivias', 'corn', 'mango', 'pepper',
        'rhobast', 'spinach', 'squash', 'fluorescent', 'fluorescence'
    ]
    for keyword in fluorescent_keywords:
        if keyword in title_lower or keyword in filename_lower:
            return "荧光适配体"
    
    # 细胞和癌症
    cell_cancer_keywords = [
        'cancer', 'tumor', 'carcinoma', 'leukemia', 'glioma', 'breast',
        'prostate', 'cd133', 'her2', 'tnbc', 'psma', 'ce133'
    ]
    for keyword in cell_cancer_keywords:
        if keyword in title_lower or keyword in filename_lower:
            return "细胞和癌症"
    
    # 核酸相关
    nucleic_keywords = [
        'rna', 'dna', 'trna', 'rrna', 'mrna', 'nucleic', 'polymerase',
        'transcription', 'translation', 'ribosomal'
    ]
    for keyword in nucleic_keywords:
        if keyword in title_lower or keyword in filename_lower:
            return "核酸相关"
    
    # 朊病毒
    prion_keywords = ['prion', 'prp']
    for keyword in prion_keywords:
        if keyword in title_lower or keyword in filename_lower:
            return "朊病毒"
    
    # 其他蛋白质
    return "其他蛋白质"

def analyze_categories(data: list) -> dict:
    """分析分类统计"""
    categories = defaultdict(list)
    category_counts = Counter()
    
    for item in data:
        title = item['Title']
        filename = item['文件名']
        category = categorize_aptamer(title, filename)
        
        categories[category].append({
            'filename': filename,
            'title': title
        })
        category_counts[category] += 1
    
    return {
        'categories': dict(categories),
        'counts': dict(category_counts)
    }

def generate_category_report(analysis_result: dict):
    """生成分类报告"""
    categories = analysis_result['categories']
    counts = analysis_result['counts']
    
    print("\n" + "="*80)
    print("分类统计报告")
    print("="*80)
    
    total = sum(counts.values())
    
    # 按数量排序
    sorted_categories = sorted(counts.items(), key=lambda x: x[1], reverse=True)
    
    print(f"{'分类':<15} {'数量':<8} {'百分比':<10} {'示例'}")
    print("-" * 80)
    
    for category, count in sorted_categories:
        percentage = count / total * 100
        examples = categories[category][:3]  # 前3个示例
        example_str = ", ".join([ex['filename'] for ex in examples])
        if len(categories[category]) > 3:
            example_str += "..."
        
        print(f"{category:<15} {count:<8} {percentage:<10.1f}% {example_str}")
    
    print(f"\n总计: {total} 个文件")

def save_category_data(analysis_result: dict, output_file: str = "posts_categories.csv"):
    """保存分类数据到CSV"""
    try:
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            fieldnames = ['序号', '文件名', 'Title', '分类']
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            
            index = 1
            for category, items in analysis_result['categories'].items():
                for item in items:
                    writer.writerow({
                        '序号': index,
                        '文件名': item['filename'],
                        'Title': item['title'],
                        '分类': category
                    })
                    index += 1
        
        print(f"分类数据已保存到 {output_file}")
        
    except Exception as e:
        print(f"保存分类数据时出错: {e}")

def analyze_title_patterns(data: list):
    """分析title模式"""
    print("\n" + "="*60)
    print("Title模式分析")
    print("="*60)
    
    # 统计title长度
    title_lengths = [len(item['Title']) for item in data]
    avg_length = sum(title_lengths) / len(title_lengths)
    max_length = max(title_lengths)
    min_length = min(title_lengths)
    
    print(f"Title长度统计:")
    print(f"  平均长度: {avg_length:.1f} 字符")
    print(f"  最长: {max_length} 字符")
    print(f"  最短: {min_length} 字符")
    
    # 查找最长的title
    longest_title = max(data, key=lambda x: len(x['Title']))
    print(f"  最长Title: {longest_title['Title']} (文件: {longest_title['文件名']})")
    
    # 查找最短的title
    shortest_title = min(data, key=lambda x: len(x['Title']))
    print(f"  最短Title: {shortest_title['Title']} (文件: {shortest_title['文件名']})")
    
    # 分析特殊字符
    special_chars = []
    for item in data:
        title = item['Title']
        if re.search(r'[αβγδεζηθικλμνξοπρστυφχψω]', title):
            special_chars.append(item)
    
    if special_chars:
        print(f"\n包含希腊字母的Title ({len(special_chars)}个):")
        for item in special_chars:
            print(f"  - {item['Title']} ({item['文件名']})")

def main():
    """主函数"""
    print("开始分析_posts目录的分类统计...")
    
    # 加载数据
    data = load_posts_data()
    if not data:
        return
    
    # 分析分类
    analysis_result = analyze_categories(data)
    
    # 生成报告
    generate_category_report(analysis_result)
    
    # 分析title模式
    analyze_title_patterns(data)
    
    # 保存分类数据
    save_category_data(analysis_result)

if __name__ == "__main__":
    main() 