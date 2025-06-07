import csv
import json
import re

def clean_data():
    data = []
    with open('_data/sequences-NEW.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # 清洗数据
            try:
                # 处理长度
                length = int(row['Length']) if row['Length'].isdigit() else None
                
                # 处理GC含量，移除%符号
                gc_content = row['GC Content'].replace('%', '') if row['GC Content'] else '0'
                gc_content = float(gc_content) if gc_content.replace('.', '').isdigit() else 0
                
                # 处理年份
                year = int(row['Year']) if row['Year'].isdigit() else None
                
                # 创建年份区间
                year_bin = ''
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
                gc_bin = ''
                if gc_content:
                    if gc_content < 40:
                        gc_bin = '< 40%'
                    elif gc_content < 50:
                        gc_bin = '40-50%'
                    elif gc_content < 60:
                        gc_bin = '50-60%'
                    else:
                        gc_bin = '≥ 60%'
                
                # 清洗配体名称
                ligand = row['Ligand'].strip() if row['Ligand'] else 'Unknown'
                
                cleaned_row = {
                    'id': row['ID'],
                    'name': row['Named'],
                    'ligand': ligand,
                    'ligand_description': row['Ligand Description'],
                    'sequence': row['Sequence'],
                    'length': length,
                    'gc_content': gc_content,
                    'affinity': row['Affinity'],
                    'year': year,
                    'year_bin': year_bin,
                    'gc_bin': gc_bin,
                    'article_name': row['Article name'],
                    'link': row['Linker'] if row['Linker'] and row['Linker'] != 'NA' else None
                }
                
                if all([cleaned_row['length'], cleaned_row['year'], cleaned_row['ligand']]):
                    data.append(cleaned_row)
            except Exception as e:
                print(f'跳过行: {e}')
                continue
    
    return data

if __name__ == "__main__":
    # 清洗数据并保存为JSON
    cleaned_data = clean_data()
    print(f'清洗完成，共 {len(cleaned_data)} 条有效数据')

    # 保存为JSON文件
    with open('apidata/sequences_cleaned.json', 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)

    print('数据已保存到 apidata/sequences_cleaned.json') 