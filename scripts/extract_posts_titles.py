#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取_posts目录下markdown文件的文件名和title信息
"""

import os
import re
import csv
from pathlib import Path
from typing import List, Dict, Tuple

def extract_title_from_markdown(file_path: str) -> str:
    """从markdown文件中提取title"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 查找title行，支持多种格式
        title_patterns = [
            r'^title:\s*(.+)$',  # title: xxx
            r'^Title:\s*(.+)$',  # Title: xxx
            r'^#\s*(.+)$',       # # xxx
            r'^##\s*(.+)$',      # ## xxx
        ]
        
        lines = content.split('\n')
        for line in lines:
            line = line.strip()
            for pattern in title_patterns:
                match = re.match(pattern, line)
                if match:
                    title = match.group(1).strip()
                    # 移除可能的引号
                    title = title.strip('"\'')
                    return title
        
        # 如果没有找到title，返回文件名
        return ""
        
    except Exception as e:
        print(f"读取文件 {file_path} 时出错: {e}")
        return ""

def get_filename_without_extension(file_path: str) -> str:
    """获取不带扩展名的文件名"""
    return Path(file_path).stem

def scan_posts_directory(posts_dir: str = "_posts") -> List[Dict]:
    """扫描_posts目录下的所有markdown文件"""
    results = []
    
    if not os.path.exists(posts_dir):
        print(f"目录 {posts_dir} 不存在")
        return results
    
    # 获取所有.md文件
    md_files = []
    for root, dirs, files in os.walk(posts_dir):
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    
    print(f"找到 {len(md_files)} 个markdown文件")
    
    # 处理每个文件
    for file_path in md_files:
        filename = get_filename_without_extension(file_path)
        title = extract_title_from_markdown(file_path)
        
        results.append({
            'filename': filename,
            'title': title,
            'file_path': file_path,
            'has_title': bool(title)
        })
    
    return results

def save_to_csv(data: List[Dict], output_file: str = "posts_titles.csv"):
    """保存数据到CSV文件"""
    try:
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            if data:
                fieldnames = ['序号', '文件名', 'Title', '文件路径', '是否有Title']
                writer = csv.DictWriter(f, fieldnames=fieldnames)
                writer.writeheader()
                
                for i, item in enumerate(data, 1):
                    writer.writerow({
                        '序号': i,
                        '文件名': item['filename'],
                        'Title': item['title'],
                        '文件路径': item['file_path'],
                        '是否有Title': '是' if item['has_title'] else '否'
                    })
        
        print(f"数据已保存到 {output_file}")
        
    except Exception as e:
        print(f"保存CSV文件时出错: {e}")

def generate_summary_report(data: List[Dict]):
    """生成统计报告"""
    total_files = len(data)
    files_with_title = sum(1 for item in data if item['has_title'])
    files_without_title = total_files - files_with_title
    
    print("\n" + "="*60)
    print("统计报告")
    print("="*60)
    print(f"总文件数: {total_files}")
    print(f"有Title的文件数: {files_with_title}")
    print(f"无Title的文件数: {files_without_title}")
    print(f"Title覆盖率: {files_with_title/total_files*100:.1f}%")
    
    if files_without_title > 0:
        print(f"\n无Title的文件列表:")
        print("-" * 40)
        for item in data:
            if not item['has_title']:
                print(f"  - {item['filename']}")
    
    # 分析title长度
    titles = [item['title'] for item in data if item['has_title']]
    if titles:
        title_lengths = [len(title) for title in titles]
        avg_length = sum(title_lengths) / len(title_lengths)
        max_length = max(title_lengths)
        min_length = min(title_lengths)
        
        print(f"\nTitle长度统计:")
        print(f"  平均长度: {avg_length:.1f} 字符")
        print(f"  最长: {max_length} 字符")
        print(f"  最短: {min_length} 字符")

def main():
    """主函数"""
    print("开始扫描_posts目录下的markdown文件...")
    
    # 扫描文件
    data = scan_posts_directory()
    
    if not data:
        print("没有找到markdown文件")
        return
    
    # 按文件名排序
    data.sort(key=lambda x: x['filename'])
    
    # 保存到CSV
    save_to_csv(data)
    
    # 生成统计报告
    generate_summary_report(data)
    
    # 显示前10个文件作为示例
    print(f"\n前10个文件示例:")
    print("-" * 80)
    print(f"{'序号':<4} {'文件名':<30} {'Title':<40}")
    print("-" * 80)
    
    for i, item in enumerate(data[:10], 1):
        title = item['title'][:37] + "..." if len(item['title']) > 40 else item['title']
        print(f"{i:<4} {item['filename']:<30} {title:<40}")

if __name__ == "__main__":
    main() 