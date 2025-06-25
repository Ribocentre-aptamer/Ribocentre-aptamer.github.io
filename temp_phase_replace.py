#!/usr/bin/env python3
import json
import re

def replace_phase_determination(json_file):
    """批量替换Phase Determination字段中的元素符号为完整格式"""
    
    # 读取JSON文件
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 定义替换映射（去除空格后的版本）
    replacements = {
        'Co': 'Phase determination (Co)',
        'Se': 'Phase determination (Se)', 
        'Ir': 'Phase determination (Ir)',
        'Br': 'Phase determination (Br)',
        'Ba': 'Phase determination (Ba)'
    }
    
    # 计数器
    changes = 0
    
    # 遍历每个条目
    for item in data:
        if 'Phase Determination' in item:
            original_value = item['Phase Determination']
            # 去除前后空格
            cleaned_value = original_value.strip()
            
            # 检查是否需要替换
            if cleaned_value in replacements:
                item['Phase Determination'] = replacements[cleaned_value]
                changes += 1
                print(f"替换: '{original_value}' -> '{item['Phase Determination']}'")
    
    # 写回文件
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\n完成! 总共替换了 {changes} 个字段")

if __name__ == "__main__":
    replace_phase_determination("apidata/structure-6.20.split.json") 