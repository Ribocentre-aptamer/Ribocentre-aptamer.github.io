import pandas as pd
import json
import re
import numpy as np

def clean_excel_data():
    """
    从Excel文件读取并清洗适配体数据
    """
    try:
        # 读取Excel文件
        print("正在读取Excel文件...")
        df = pd.read_excel('sequences_2025.6.6.xlsx')
        
        print(f"原始数据行数: {len(df)}")
        print(f"列名: {list(df.columns)}")
        
        # 显示前几行数据以便调试
        print("\n前3行数据:")
        print(df.head(3))
        
        clean_data = []
        
        for index, row in df.iterrows():
            try:
                # 处理长度
                length = None
                if pd.notna(row.get('Length')):
                    length_str = str(row['Length']).strip()
                    if length_str.replace('.0', '').isdigit():
                        length = int(float(length_str))
                
                # 处理GC含量
                gc_content = 0
                if pd.notna(row.get('GC Content')):
                    gc_str = str(row['GC Content']).replace('%', '').strip()
                    gc_match = re.search(r'(\d+(?:\.\d+)?)', gc_str)
                    if gc_match:
                        gc_content = float(gc_match.group(1))
                
                # 处理年份
                year = None
                if pd.notna(row.get('Year')):
                    year_str = str(row['Year']).strip()
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
                    if gc_content < 40:
                        gc_bin = '< 40%'
                    elif gc_content < 50:
                        gc_bin = '40-50%'
                    elif gc_content < 60:
                        gc_bin = '50-60%'
                    else:
                        gc_bin = '≥ 60%'
                
                # 处理配体名称
                ligand = '未知'
                if pd.notna(row.get('Ligand')):
                    ligand = str(row['Ligand']).strip()
                    if ligand.lower() in ['na', 'n/a', '']:
                        ligand = '未知'
                
                # 处理适配体名称
                aptamer_name = ''
                if pd.notna(row.get('Named')):
                    aptamer_name = str(row['Named']).strip()
                if not aptamer_name or aptamer_name.lower() in ['na', 'n/a']:
                    aptamer_name = str(row.get('ID', '')).strip()
                
                # 处理其他字段
                aptamer_id = str(row.get('ID', '')).strip()
                ligand_desc = str(row.get('Ligand Description', '')).strip() if pd.notna(row.get('Ligand Description')) else ''
                sequence = str(row.get('Sequence', '')).strip() if pd.notna(row.get('Sequence')) else ''
                affinity = str(row.get('Affinity', '')).strip() if pd.notna(row.get('Affinity')) else ''
                article_name = str(row.get('Article name', '')).strip() if pd.notna(row.get('Article name')) else ''
                linker = str(row.get('Linker', '')).strip() if pd.notna(row.get('Linker')) else ''
                
                # 处理新增字段
                aptamer_type = str(row.get('Type', '')).strip() if pd.notna(row.get('Type')) else ''
                category = str(row.get('Category', '')).strip() if pd.notna(row.get('Category')) else ''
                ligand_info = str(row.get('Ligand Information \n(CAS/sequence)', '')).strip() if pd.notna(row.get('Ligand Information \n(CAS/sequence)')) else ''
                pubmed_link = str(row.get('Link to PubMed Entry', '')).strip() if pd.notna(row.get('Link to PubMed Entry')) else ''
                
                # 只添加有长度、GC含量、年份和配体信息的有效数据
                if length and length > 0 and gc_content > 0 and year and ligand != '未知':
                    clean_record = {
                        'id': aptamer_id,
                        'name': aptamer_name,
                        'ligand': ligand,
                        'ligand_description': ligand_desc,
                        'sequence': sequence,
                        'length': length,
                        'gc_content': gc_content,
                        'affinity': affinity,
                        'year': year,
                        'year_bin': year_bin,
                        'gc_bin': gc_bin,
                        'article_name': article_name,
                        'link': linker,
                        'type': aptamer_type,
                        'category': category,
                        'ligand_info': ligand_info,
                        'pubmed_link': pubmed_link
                    }
                    clean_data.append(clean_record)
                    
            except Exception as e:
                print(f"跳过第 {index+2} 行，错误: {e}")
                continue
        
        print(f"\n清洗完成，共 {len(clean_data)} 条有效数据")
        
        # 保存为JSON文件，确保UTF-8编码无BOM
        with open('_data/sequences_cleaned.json', 'w', encoding='utf-8') as f:
            json.dump(clean_data, f, ensure_ascii=False, indent=2)
        
        print("数据已保存到 _data/sequences_cleaned.json")
        
        # 统计信息
        if clean_data:
            ligand_counts = {}
            year_counts = {}
            gc_stats = []
            type_counts = {}
            category_counts = {}
            
            for record in clean_data:
                # 配体统计
                ligand = record['ligand']
                ligand_counts[ligand] = ligand_counts.get(ligand, 0) + 1
                
                # 年份统计
                year_bin = record['year_bin']
                year_counts[year_bin] = year_counts.get(year_bin, 0) + 1
                
                # GC含量统计
                gc_stats.append(record['gc_content'])
                
                # 类型统计
                aptamer_type = record['type']
                if aptamer_type:
                    type_counts[aptamer_type] = type_counts.get(aptamer_type, 0) + 1
                
                # 类别统计
                category = record['category']
                if category:
                    category_counts[category] = category_counts.get(category, 0) + 1
            
            print(f"\n=== 数据统计 ===")
            print(f"总数据量: {len(clean_data)}")
            print(f"平均GC含量: {np.mean(gc_stats):.1f}%")
            print(f"GC含量范围: {np.min(gc_stats):.1f}% - {np.max(gc_stats):.1f}%")
            
            print(f"\n前10个最常见的配体:")
            sorted_ligands = sorted(ligand_counts.items(), key=lambda x: x[1], reverse=True)[:10]
            for ligand, count in sorted_ligands:
                print(f"  {ligand}: {count}")
            
            print(f"\n年份分布:")
            sorted_years = sorted(year_counts.items())
            for year_bin, count in sorted_years:
                print(f"  {year_bin}: {count}")
            
            print(f"\n适配体类型分布:")
            sorted_types = sorted(type_counts.items(), key=lambda x: x[1], reverse=True)
            for aptamer_type, count in sorted_types:
                print(f"  {aptamer_type}: {count}")
            
            print(f"\n类别分布:")
            sorted_categories = sorted(category_counts.items(), key=lambda x: x[1], reverse=True)
            for category, count in sorted_categories:
                print(f"  {category}: {count}")
        
        return clean_data
        
    except FileNotFoundError:
        print("错误: 未找到 sequences_2025.6.6.xlsx 文件")
        print("请确保文件在当前目录中")
        return None
    except Exception as e:
        print(f"处理Excel文件时出错: {e}")
        return None

if __name__ == "__main__":
    # 检查pandas是否安装
    try:
        import pandas as pd
        import openpyxl  # Excel文件支持
    except ImportError:
        print("需要安装pandas和openpyxl:")
        print("pip install pandas openpyxl")
        exit(1)
    
    clean_excel_data() 