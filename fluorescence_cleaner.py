import pandas as pd
import json
import re
import numpy as np

def clean_fluorescence_data():
    """
    从Excel文件读取并清洗荧光适配体数据
    """
    try:
        # 读取Excel文件
        print("正在读取Excel文件...")
        df = pd.read_excel('Fluorescences页面总设计_20250604/Fluorescences页面aptamer序列与荧光小分子等信息对应表_20250604.xlsx')
        
        print(f"原始数据行数: {len(df)}")
        print(f"列名: {list(df.columns)}")
        
        # 显示前几行数据以便调试
        print("\n前3行数据:")
        print(df.head(3))
        
        clean_data = []
        
        for index, row in df.iterrows():
            try:
                # 处理基本字段
                aptamer_name = str(row.get('Aptamer name', '')).strip() if pd.notna(row.get('Aptamer name')) else ''
                ligand = str(row.get('Ligand', '')).strip() if pd.notna(row.get('Ligand')) else ''
                mechanisms = str(row.get('Mechanisms', '')).strip() if pd.notna(row.get('Mechanisms')) else ''
                sequence = str(row.get('Sequence (5\'-3\')', '')).strip() if pd.notna(row.get('Sequence (5\'-3\')')) else ''
                citation = str(row.get('Citation', '')).strip() if pd.notna(row.get('Citation')) else ''
                structures = str(row.get('Relevant 3D structures', '')).strip() if pd.notna(row.get('Relevant 3D structures')) else ''
                pubmed_link = str(row.get('PubMed linker', '')).strip() if pd.notna(row.get('PubMed linker')) else ''
                more_info = str(row.get('More information', '')).strip() if pd.notna(row.get('More information')) else ''
                remarks = str(row.get('remarks', '')).strip() if pd.notna(row.get('remarks')) else ''
                
                # 处理年份
                year = None
                if pd.notna(row.get('Year')):
                    year_str = str(row['Year']).strip()
                    year_match = re.search(r'(\d{4})', year_str)
                    if year_match:
                        year = int(year_match.group(1))
                
                # 处理序列长度和GC含量
                length = 0
                gc_content = 0
                if sequence:
                    # 移除非核苷酸字符
                    clean_seq = re.sub(r'[^ATGCUatgcu]', '', sequence)
                    length = len(clean_seq)
                    
                    # 计算GC含量
                    if length > 0:
                        gc_count = sum(1 for base in clean_seq.upper() if base in 'GC')
                        gc_content = gc_count / length
                
                # 创建清洗后的记录
                clean_record = {
                    'name': aptamer_name,
                    'ligand': ligand,
                    'mechanisms': mechanisms,
                    'sequence': sequence,
                    'length': length,
                    'gc_content': gc_content,
                    'year': year,
                    'citation': citation,
                    'structures': structures,
                    'pubmed_link': pubmed_link,
                    'more_info': more_info,
                    'remarks': remarks
                }
                
                # 只添加有名称和荧光机制的有效数据
                if aptamer_name and mechanisms:
                    clean_data.append(clean_record)
                    
            except Exception as e:
                print(f"跳过第 {index+2} 行，错误: {e}")
                continue
        
        print(f"\n清洗完成，共 {len(clean_data)} 条有效数据")
        
        # 保存为JSON文件，确保UTF-8编码无BOM
        with open('apidata/fluorescence_data.json', 'w', encoding='utf-8') as f:
            json.dump(clean_data, f, ensure_ascii=False, indent=2)
        
        print("数据已保存到 apidata/fluorescence_data.json")
        
        # 统计信息
        if clean_data:
            ligand_counts = {}
            mechanisms_counts = {}
            year_counts = {}
            length_stats = []
            gc_stats = []
            
            for record in clean_data:
                # 配体统计
                ligand = record['ligand']
                if ligand:
                    ligand_counts[ligand] = ligand_counts.get(ligand, 0) + 1
                
                # 荧光机制统计
                mechanisms = record['mechanisms']
                if mechanisms:
                    mechanisms_counts[mechanisms] = mechanisms_counts.get(mechanisms, 0) + 1
                
                # 年份统计
                year = record['year']
                if year:
                    year_counts[year] = year_counts.get(year, 0) + 1
                
                # 长度和GC含量统计
                if record['length'] > 0:
                    length_stats.append(record['length'])
                    gc_stats.append(record['gc_content'])
            
            print(f"\n=== 数据统计 ===")
            print(f"总数据量: {len(clean_data)}")
            
            if length_stats:
                print(f"平均序列长度: {np.mean(length_stats):.1f} bp")
                print(f"序列长度范围: {np.min(length_stats)} - {np.max(length_stats)} bp")
            
            if gc_stats:
                print(f"平均GC含量: {np.mean(gc_stats)*100:.1f}%")
                print(f"GC含量范围: {np.min(gc_stats)*100:.1f}% - {np.max(gc_stats)*100:.1f}%")
            
            print(f"\n最常见的配体:")
            sorted_ligands = sorted(ligand_counts.items(), key=lambda x: x[1], reverse=True)[:10]
            for ligand, count in sorted_ligands:
                print(f"  {ligand}: {count}")
            
            print(f"\n荧光机制分布:")
            sorted_mechanisms = sorted(mechanisms_counts.items(), key=lambda x: x[1], reverse=True)
            for mechanism, count in sorted_mechanisms:
                print(f"  {mechanism}: {count}")
            
            print(f"\n发表年份分布:")
            sorted_years = sorted(year_counts.items())
            for year, count in sorted_years:
                print(f"  {year}: {count}")
        
        return clean_data
        
    except FileNotFoundError:
        print("错误: 未找到 Fluorescences页面aptamer序列与荧光小分子等信息对应表_20250604.xlsx 文件")
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
    
    clean_fluorescence_data()