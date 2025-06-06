import csv
import json
import re

def clean_data():
    data = []
    
    # 首先读取整个文件内容并修复行分割问题
    with open('raw_data/sequences-fixed.csv', 'r', encoding='utf-8') as f:
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
    with open('temp_fixed.csv', 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    # 现在处理修复后的CSV文件
    try:
        with open('temp_fixed.csv', 'r', encoding='utf-8') as f:
            # 使用更宽松的CSV解析设置
            reader = csv.DictReader(f, quoting=csv.QUOTE_MINIMAL, skipinitialspace=True)
            
            for i, row in enumerate(reader):
                try:
                    # 处理长度
                    length_str = str(row.get('Length', '')).strip()
                    length = None
                    if length_str and length_str.replace('.', '').isdigit():
                        length = int(float(length_str))
                    
                    # 处理GC含量 - 修正：小数转百分数
                    gc_str = str(row.get('GC Content', '')).replace('%', '').strip()
                    gc_content = 0
                    if gc_str:
                        # 提取数字部分
                        gc_match = re.search(r'(\d+(?:\.\d+)?)', gc_str)
                        if gc_match:
                            gc_content = float(gc_match.group(1))
                            # 如果是小数（小于1），转换为百分数
                            if gc_content < 1:
                                gc_content = gc_content * 100
                    
                    # 处理年份 - 修正：不分bin，直接使用年份
                    year_str = str(row.get('Year', '')).strip()
                    year = None
                    if year_str:
                        year_match = re.search(r'(\d{4})', year_str)
                        if year_match:
                            year = int(year_match.group(1))
                    
                    # 创建GC含量区间 - 修正：基于百分数
                    gc_bin = '未知'
                    if gc_content > 0:
                        if gc_content < 40:
                            gc_bin = '< 40%'
                        elif gc_content < 50:
                            gc_bin = '40-50%'
                        elif gc_content < 60:
                            gc_bin = '50-60%'
                        else:
                            gc_bin = '≥ 60%'
                    
                    # 处理配体名称
                    ligand = str(row.get('Ligand', '')).strip()
                    if not ligand or ligand.lower() in ['na', 'n/a', '']:
                        ligand = '未知'
                    
                    # 处理适配体名称
                    aptamer_name = str(row.get('Named', '')).strip()
                    if not aptamer_name or aptamer_name.lower() in ['na', 'n/a', '']:
                        aptamer_name = str(row.get('ID', '')).strip()
                    
                    # 只添加有效数据
                    if length and gc_content > 0 and year and ligand != '未知':
                        clean_record = {
                            'id': str(row.get('ID', '')).strip(),
                            'name': aptamer_name,
                            'ligand': ligand,
                            'ligand_description': str(row.get('Ligand Description', '')).strip(),
                            'sequence': str(row.get('Sequence', '')).strip(),
                            'length': length,
                            'gc_content': round(gc_content, 1),  # 保留一位小数
                            'affinity': str(row.get('Affinity', '')).strip(),
                            'year': year,  # 直接使用年份，不分bin
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
    with open('apidata/sequences_cleaned.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"清洗完成，共 {len(data)} 条有效数据")
    print("数据已保存到 apidata/sequences_cleaned.json")
    
    # 创建统计信息
    if data:
        ligand_counts = {}
        year_counts = {}
        gc_stats = []
        
        for record in data:
            ligand = record['ligand']
            ligand_counts[ligand] = ligand_counts.get(ligand, 0) + 1
            
            year = record['year']
            year_counts[year] = year_counts.get(year, 0) + 1
            
            gc_stats.append(record['gc_content'])
        
        # 计算GC含量统计
        avg_gc = sum(gc_stats) / len(gc_stats)
        min_gc = min(gc_stats)
        max_gc = max(gc_stats)
        
        print(f"\n=== 数据统计 ===")
        print(f"总数据量: {len(data)}")
        print(f"平均GC含量: {avg_gc:.1f}%")
        print(f"GC含量范围: {min_gc:.1f}% - {max_gc:.1f}%")
        
        print(f"\n前10个最常见的配体:")
        sorted_ligands = sorted(ligand_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        for ligand, count in sorted_ligands:
            print(f"  {ligand}: {count}")
        
        print(f"\n年份分布 (前10个最多的年份):")
        sorted_years = sorted(year_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        for year, count in sorted_years:
            print(f"  {year}: {count}")

if __name__ == "__main__":
    clean_data() 