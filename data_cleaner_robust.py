import csv
import json
import re

def clean_data():
    data = []
    
    # 首先读取整个文件内容并修复行分割问题
    with open('_data/sequences-NEW.csv', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 修复CSV格式问题：合并被意外分割的行
    lines = content.split('\n')
    fixed_lines = []
    current_line = ""
    
    # 获取标题行确定列数
    header_line = lines[0]
    expected_columns = len(header_line.split(','))
    
    for line in lines:
        if not line.strip():
            continue
            
        current_line += line
        
        # 简单检查：如果当前行的逗号数量接近预期列数，认为是完整的行
        comma_count = current_line.count(',')
        
        # 检查是否是完整的行（基于逗号数量和行的结构）
        if comma_count >= expected_columns - 2:  # 允许一些容错
            fixed_lines.append(current_line)
            current_line = ""
        else:
            current_line += " "  # 如果行不完整，加空格连接下一行
    
    # 如果还有剩余内容，添加到最后
    if current_line.strip():
        fixed_lines.append(current_line)
    
    # 将修复后的内容写入临时文件
    with open('_data/sequences-fixed.csv', 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    # 现在处理修复后的CSV文件
    try:
        with open('_data/sequences-fixed.csv', 'r', encoding='utf-8') as f:
            # 使用更宽松的CSV解析设置
            reader = csv.DictReader(f, quoting=csv.QUOTE_MINIMAL, skipinitialspace=True)
            
            for i, row in enumerate(reader):
                try:
                    # 处理长度
                    length_str = str(row.get('Length', '')).strip()
                    length = None
                    if length_str and length_str.isdigit():
                        length = int(length_str)
                    
                    # 处理GC含量
                    gc_str = str(row.get('GC Content', '')).replace('%', '').strip()
                    gc_content = 0
                    if gc_str:
                        # 提取数字部分
                        gc_match = re.search(r'(\d+(?:\.\d+)?)', gc_str)
                        if gc_match:
                            gc_content = float(gc_match.group(1))
                    
                    # 处理年份
                    year_str = str(row.get('Year', '')).strip()
                    year = None
                    if year_str:
                        year_match = re.search(r'(\d{4})', year_str)
                        if year_match:
                            year = int(year_match.group(1))
                    
                    # 创建年份区间
                    year_bin = '未知'
                    if year:
                        if year < 2000:
                            year_bin = '1990-1999'
                        elif year < 2005:
                            year_bin = '2000-2004'
                        elif year < 2010:
                            year_bin = '2005-2009'
                        elif year < 2015:
                            year_bin = '2010-2014'
                        elif year < 2020:
                            year_bin = '2015-2019'
                        else:
                            year_bin = '2020+'
                    
                    # 创建GC含量区间
                    gc_bin = '未知'
                    if gc_content > 0:
                        if gc_content < 30:
                            gc_bin = '低GC (< 30%)'
                        elif gc_content < 50:
                            gc_bin = '中GC (30-50%)'
                        elif gc_content < 70:
                            gc_bin = '高GC (50-70%)'
                        else:
                            gc_bin = '极高GC (> 70%)'
                    
                    # 处理配体名称
                    ligand = str(row.get('Ligand', '')).strip()
                    if not ligand or ligand.lower() in ['na', 'n/a', '']:
                        ligand = '未知'
                    
                    # 处理适配体名称
                    aptamer_name = str(row.get('Named', '')).strip()
                    if not aptamer_name or aptamer_name.lower() in ['na', 'n/a', '']:
                        aptamer_name = str(row.get('ID', '')).strip()
                    
                    # 只添加有效数据
                    if length and gc_content and year and ligand != '未知':
                        clean_record = {
                            'id': str(row.get('ID', '')).strip(),
                            'aptamer_name': aptamer_name,
                            'ligand': ligand,
                            'ligand_description': str(row.get('Ligand Description', '')).strip(),
                            'sequence': str(row.get('Sequence', '')).strip(),
                            'length': length,
                            'gc_content': gc_content,
                            'affinity': str(row.get('Affinity', '')).strip(),
                            'year': year,
                            'year_bin': year_bin,
                            'gc_bin': gc_bin,
                            'article_name': str(row.get('Article name', '')).strip(),
                            'link': str(row.get('Linker', '')).strip()
                        }
                        data.append(clean_record)
                        
                except Exception as e:
                    print(f"跳过第 {i+2} 行，错误: {e}")
                    continue
                    
    except Exception as e:
        print(f"读取CSV文件时出错: {e}")
        return
    
    # 保存为JSON
    with open('_data/sequences_cleaned.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"清洗完成，共 {len(data)} 条有效数据")
    print("数据已保存到 _data/sequences_cleaned.json")
    
    # 创建配体统计
    ligand_counts = {}
    for record in data:
        ligand = record['ligand']
        ligand_counts[ligand] = ligand_counts.get(ligand, 0) + 1
    
    print(f"\n前10个最常见的配体:")
    sorted_ligands = sorted(ligand_counts.items(), key=lambda x: x[1], reverse=True)[:10]
    for ligand, count in sorted_ligands:
        print(f"  {ligand}: {count}")

if __name__ == "__main__":
    clean_data() 