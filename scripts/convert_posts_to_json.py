#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Posts to JSON Converter
将 _posts 目录下的 Markdown 文件转换为结构化的 JSON 数据
使用方法:
  python convert_posts_to_json.py --input _posts --output apidata/posts_data.json
  python convert_posts_to_json.py --input _posts --output apidata/posts_data.json --validate
  python convert_posts_to_json.py --input _posts --output apidata/posts_data.json --single "ATP-aptamer.md"
"""
import re
import json
import yaml
import argparse
from pathlib import Path
from datetime import datetime
from typing import Dict, Any, List, Optional, Tuple
from bs4 import BeautifulSoup
import logging
class PostsToJsonConverter:
    def __init__(self, input_dir: str, output_file: str):
        self.input_dir = Path(input_dir)
        self.output_file = Path(output_file)
        self.logger = self._setup_logging()
        
        # 正则表达式模式
        self.section_pattern = re.compile(r'<p class="header_box" id="([^"]+)"[^>]*>([^<]+)</p>', re.IGNORECASE)
        self.subsection_pattern = re.compile(r'<p class="blowheader_box"[^>]*>([^<]+)</p>', re.IGNORECASE)
        self.image_pattern = re.compile(r'<img[^>]*src="([^"]+)"[^>]*(?:alt="([^"]*)")?[^>]*/?>', re.IGNORECASE)
        self.sequence_pattern = re.compile(r"5[''']-[AUCGT\s-]+-3[''']", re.IGNORECASE)
        self.front_matter_pattern = re.compile(r'^---\s*\n(.*?)\n---\s*\n', re.DOTALL)
        
        # 预定义的节点结构
        self.expected_sections = {
            'timeline': 'Timeline',
            'description': 'Description', 
            'selex': 'SELEX',
            'structure': 'Structure',
            'ligand-recognition': 'Ligand information',
            'references': 'References'
        }
        
        # 结构区块的子节点
        self.structure_subsections = [
            '2D representation',
            '3D visualisation', 
            '3D visualization',
            'Binding pocket'
        ]
        
        # 配体信息区块的子节点
        self.ligand_subsections = [
            'SELEX ligand',
            'Structure ligand', 
            'Similar compound(s)',
            'Similar compounds'
        ]
    def _setup_logging(self) -> logging.Logger:
        """设置日志记录"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('conversion.log'),
                logging.StreamHandler()
            ]
        )
        return logging.getLogger(__name__)
    def extract_front_matter(self, content: str) -> Tuple[Dict[str, Any], str]:
        """提取并解析Front Matter"""
        match = self.front_matter_pattern.match(content)
        if not match:
            return {}, content
        
        try:
            front_matter = yaml.safe_load(match.group(1))
            remaining_content = content[match.end():]
            return front_matter or {}, remaining_content
        except yaml.YAMLError as e:
            self.logger.warning(f"YAML解析错误: {e}")
            return {}, content
    def extract_images(self, content: str) -> List[Dict[str, str]]:
        """提取图片信息"""
        images = []
        for match in self.image_pattern.finditer(content):
            src = match.group(1)
            alt = match.group(2) if match.group(2) else ""
            
            # 解析图片类型和描述
            image_info = {
                'src': src,
                'alt': alt,
                'type': self._classify_image(src),
                'filename': Path(src).name if src else ""
            }
            images.append(image_info)
        
        return images
    def _classify_image(self, src: str) -> str:
        """根据路径分类图片类型"""
        if '/2D/' in src:
            return '2d_structure'
        elif '/3D/' in src:
            return '3d_structure'
        elif '/Binding_pocket/' in src:
            return 'binding_pocket'
        elif '/SELEX_ligand/' in src:
            return 'selex_ligand'
        elif '/Structure_ligand/' in src:
            return 'structure_ligand'
        elif '/Similar_compound/' in src:
            return 'similar_compound'
        else:
            return 'other'
    def extract_sequences(self, content: str) -> List[str]:
        """提取RNA/DNA序列"""
        sequences = []
        for match in self.sequence_pattern.finditer(content):
            sequence = match.group(0).strip()
            # 清理空格和格式字符
            cleaned_sequence = re.sub(r'\s+', '', sequence)
            sequences.append(cleaned_sequence)
        
        return list(set(sequences))  # 去重
    def extract_tables(self, content: str) -> List[Dict[str, Any]]:
        """提取表格数据"""
        tables = []
        soup = BeautifulSoup(content, 'html.parser')
        
        for table in soup.find_all('table'):
            table_data = {
                'headers': [],
                'rows': [],
                'class': table.get('class', []),
                'style': table.get('style', '')
            }
            
            # 提取表头
            thead = table.find('thead')
            if thead:
                header_row = thead.find('tr')
                if header_row:
                    for th in header_row.find_all('th'):
                        table_data['headers'].append(th.get_text(strip=True))
            
            # 提取表格数据
            tbody = table.find('tbody') or table
            for tr in tbody.find_all('tr'):
                row = []
                for td in tr.find_all(['td', 'th']):
                    cell_data = {
                        'text': td.get_text(strip=True),
                        'html': str(td),
                        'links': []
                    }
                    
                    # 提取链接
                    for a in td.find_all('a'):
                        href = a.get('href', '')
                        link_text = a.get_text(strip=True)
                        cell_data['links'].append({
                            'url': href,
                            'text': link_text
                        })
                    
                    row.append(cell_data)
                
                if row:  # 只添加非空行
                    table_data['rows'].append(row)
            
            if table_data['headers'] or table_data['rows']:
                tables.append(table_data)
        
        return tables
    def extract_references(self, content: str) -> List[Dict[str, str]]:
        """提取参考文献"""
        references = []
        
        # 查找参考文献区块
        ref_pattern = re.compile(r'<a id="ref(\d+)"></a>.*?<font><strong>\[(\d+)\]\s*([^<]+)</strong></font><br\s*/?>\s*([^<]+)<br\s*/?>\s*<a[^>]*>([^<]+)</a>', re.DOTALL | re.IGNORECASE)
        
        for match in ref_pattern.finditer(content):
            ref_id = match.group(1)
            ref_num = match.group(2)
            title = match.group(3).strip()
            authors = match.group(4).strip()
            journal_info = match.group(5).strip()
            
            references.append({
                'id': ref_id,
                'number': ref_num,
                'title': title,
                'authors': authors,
                'journal': journal_info
            })
        
        return references
    def extract_timeline(self, content: str) -> List[Dict[str, str]]:
        """提取时间线数据"""
        timeline = []
        
        # 查找时间线条目
        entry_pattern = re.compile(r'<div class="entry">.*?<h3><a[^>]*>(\d{4})</a></h3>.*?<p>([^<]+)</p>.*?</div>', re.DOTALL | re.IGNORECASE)
        
        for match in entry_pattern.finditer(content):
            year = match.group(1)
            description = match.group(2).strip()
            
            timeline.append({
                'year': year,
                'description': description
            })
        
        return timeline
    def extract_3d_structure_info(self, content: str) -> Dict[str, Any]:
        """提取3D结构相关信息"""
        structure_info = {
            'pdb_info': {},
            'molstar_config': {},
            'color_schemes': [],
            'interactive_controls': []
        }
        
        # 提取PDB信息
        pdb_id_pattern = re.compile(r'PDB ID.*?is\s+(\w+)', re.IGNORECASE)
        pdb_id_match = pdb_id_pattern.search(content)
        if pdb_id_match:
            structure_info['pdb_info']['pdb_id'] = pdb_id_match.group(1)
        
        # 提取PDB文件路径
        pdb_file_pattern = re.compile(r'url:\s*[\'"]([^\'\"]*\.pdb)[\'"]', re.IGNORECASE)
        pdb_file_match = pdb_file_pattern.search(content)
        if pdb_file_match:
            structure_info['pdb_info']['pdb_file_path'] = pdb_file_match.group(1)
        
        # 提取Molstar配置选项
        molstar_options = {}
        
        # 背景颜色
        bg_color_pattern = re.compile(r'bgColor:\s*\{([^}]+)\}', re.IGNORECASE)
        bg_color_match = bg_color_pattern.search(content)
        if bg_color_match:
            molstar_options['background_color'] = bg_color_match.group(1)
        
        # 隐藏控件
        hide_controls_pattern = re.compile(r'hideCanvasControls:\s*\[([^\]]+)\]', re.IGNORECASE)
        hide_controls_match = hide_controls_pattern.search(content)
        if hide_controls_match:
            controls = [ctrl.strip().strip('\'"') for ctrl in hide_controls_match.group(1).split(',')]
            molstar_options['hidden_controls'] = controls
        
        structure_info['molstar_config'] = molstar_options
        
        # 提取颜色选择规则
        color_selection_pattern = re.compile(r'var\s+selectSections\d+\s*=\s*\[(.*?)\]', re.DOTALL | re.IGNORECASE)
        color_selection_match = color_selection_pattern.search(content)
        if color_selection_match:
            color_rules_text = color_selection_match.group(1)
            color_rules = self._parse_color_rules(color_rules_text)
            structure_info['color_schemes'] = color_rules
        
        # 提取交互控制按钮
        button_pattern = re.compile(r'<button[^>]*onclick="([^"]*)"[^>]*>([^<]+)</button>', re.IGNORECASE)
        for button_match in button_pattern.finditer(content):
            onclick_code = button_match.group(1).strip()
            button_text = button_match.group(2).strip()
            structure_info['interactive_controls'].append({
                'text': button_text,
                'action': 'color_selection' if 'select' in onclick_code.lower() else 'clear_selection'
            })
        
        return structure_info
    def _parse_color_rules(self, color_rules_text: str) -> List[Dict[str, Any]]:
        """解析颜色规则JavaScript代码"""
        color_rules = []
        
        # 匹配每个颜色规则对象（处理嵌套的大括号）
        rule_pattern = re.compile(r'\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}', re.DOTALL)
        
        for rule_match in rule_pattern.finditer(color_rules_text):
            rule_text = rule_match.group(1)
            rule_data = {}
            
            # 提取各个属性
            properties = [
                ('struct_asym_id', r'struct_asym_id:\s*[\'"]([^\'"]+)[\'"]'),
                ('start_residue_number', r'start_residue_number:\s*(\d+)'),
                ('end_residue_number', r'end_residue_number:\s*(\d+)'),
                ('color', r'color:\s*\{([^}]+)\}')
            ]
            
            for prop_name, pattern in properties:
                match = re.search(pattern, rule_text)
                if match:
                    if prop_name == 'color':
                        # 解析RGB颜色值
                        color_text = match.group(1)
                        rgb_match = re.findall(r'([rgb]):\s*(\d+)', color_text)
                        if rgb_match:
                            color_dict = {component: int(value) for component, value in rgb_match}
                            rule_data[prop_name] = color_dict
                    elif prop_name in ['start_residue_number', 'end_residue_number']:
                        rule_data[prop_name] = int(match.group(1))
                    else:
                        rule_data[prop_name] = match.group(1)
            
            if rule_data:  # 只添加非空的规则
                color_rules.append(rule_data)
        
        return color_rules
    def parse_section_content(self, section_id: str, content: str) -> Dict[str, Any]:
        """解析特定节点的内容"""
        section_data = {
            'id': section_id,
            'content': {
                'text': '',
                'images': [],
                'tables': [],
                'sequences': [],
                'subsections': {}
            }
        }
        
        if section_id == 'timeline':
            section_data['content']['timeline_entries'] = self.extract_timeline(content)
        elif section_id == 'references':
            section_data['content']['references'] = self.extract_references(content)
        
        # 提取通用内容
        section_data['content']['images'] = self.extract_images(content)
        section_data['content']['tables'] = self.extract_tables(content)
        section_data['content']['sequences'] = self.extract_sequences(content)
        
        # 提取纯文本（去除HTML标签）
        soup = BeautifulSoup(content, 'html.parser')
        section_data['content']['text'] = soup.get_text(separator=' ', strip=True)
        
        # 处理子节点（使用不区分大小写的匹配）
        if section_id.lower() == 'structure':
            section_data['content']['subsections'] = self._extract_subsections(content, self.structure_subsections)
        elif section_id.lower() == 'ligand-recognition':
            section_data['content']['subsections'] = self._extract_subsections(content, self.ligand_subsections)
        
        return section_data
    def _extract_subsections(self, content: str, subsection_names: List[str]) -> Dict[str, Dict[str, Any]]:
        """提取子节点内容"""
        subsections = {}
        
        # 首先找到所有的blowheader_box位置
        all_blowheader_pattern = re.compile(r'<p class="blowheader_box"[^>]*>([^<]+)</p>', re.IGNORECASE)
        all_matches = list(all_blowheader_pattern.finditer(content))
        
        # 调试：记录找到的所有子节点标题
        found_titles = [match.group(1).strip() for match in all_matches]
        self.logger.debug(f"Found blowheader_box titles: {found_titles}")
        self.logger.debug(f"Expected subsection names: {subsection_names}")
        
        for subsection_name in subsection_names:
            # 查找匹配的子节
            matched = False
            for i, match in enumerate(all_matches):
                found_title = match.group(1).strip()
                
                # 灵活匹配子节名称（处理变体）
                if self._subsection_names_match(subsection_name, found_title):
                    self.logger.debug(f"Matched '{subsection_name}' with '{found_title}'")
                    matched = True
                    
                    # 确定内容范围
                    start_pos = match.end()
                    
                    # 找到下一个blowheader_box或header_box的位置作为结束
                    if i + 1 < len(all_matches):
                        end_pos = all_matches[i + 1].start()
                    else:
                        # 查找下一个header_box
                        next_header_pattern = re.compile(r'<p class="header_box"', re.IGNORECASE)
                        next_header_match = next_header_pattern.search(content, start_pos)
                        if next_header_match:
                            end_pos = next_header_match.start()
                        else:
                            end_pos = len(content)
                    
                    subsection_content = content[start_pos:end_pos].strip()
                    self.logger.debug(f"Subsection '{found_title}' content length: {len(subsection_content)}")
                    
                    subsection_data = {
                        'title': found_title,
                        'text': '',
                        'images': self.extract_images(subsection_content),
                        'tables': self.extract_tables(subsection_content),
                        'sequences': self.extract_sequences(subsection_content)
                    }
                    
                    # 特殊处理3D可视化子节
                    if '3d' in found_title.lower() and 'visuali' in found_title.lower():
                        self.logger.debug(f"Processing 3D visualization subsection: {found_title}")
                        structure_3d_info = self.extract_3d_structure_info(subsection_content)
                        subsection_data.update(structure_3d_info)
                        self.logger.debug(f"3D structure info extracted: {structure_3d_info}")
                    
                    # 提取纯文本
                    soup = BeautifulSoup(subsection_content, 'html.parser')
                    subsection_data['text'] = soup.get_text(separator=' ', strip=True)
                    
                    # 使用标准化的键名
                    key_name = subsection_name.lower().replace(' ', '_')
                    subsections[key_name] = subsection_data
                    break
            
            if not matched:
                self.logger.warning(f"Could not find subsection '{subsection_name}' in content")
        
        return subsections
    
    def _subsection_names_match(self, expected: str, found: str) -> bool:
        """检查子节名称是否匹配（处理变体）"""
        expected_lower = expected.lower().strip()
        found_lower = found.lower().strip()
        
        # 直接匹配
        if expected_lower == found_lower:
            return True
        
        # 处理常见变体
        variants = {
            '3d visualisation': ['3d visualization', '3d visualisation', '3d structure'],
            '3d visualization': ['3d visualisation', '3d visualization', '3d structure'],
            'similar compound(s)': ['similar compounds', 'similar compound(s)', 'similar compound'],
            'similar compounds': ['similar compound(s)', 'similar compounds', 'similar compound']
        }
        
        if expected_lower in variants:
            return found_lower in variants[expected_lower]
        
        # 模糊匹配（去除标点符号）
        import string
        expected_clean = expected_lower.translate(str.maketrans('', '', string.punctuation))
        found_clean = found_lower.translate(str.maketrans('', '', string.punctuation))
        
        return expected_clean == found_clean
    def parse_markdown_file(self, file_path: Path) -> Dict[str, Any]:
        """解析单个Markdown文件"""
        self.logger.info(f"解析文件: {file_path.name}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            self.logger.error(f"读取文件失败 {file_path}: {e}")
            return {}
        
        # 提取Front Matter
        front_matter, main_content = self.extract_front_matter(content)
        
        # 初始化文件数据结构
        file_data = {
            'filename': file_path.name,
            'metadata': {
                'front_matter': front_matter,
                'file_size': file_path.stat().st_size,
                'last_modified': datetime.fromtimestamp(file_path.stat().st_mtime).isoformat(),
                'parsed_at': datetime.now().isoformat()
            },
            'sections': {}
        }
        
        # 查找所有节点
        current_pos = 0
        sections_found = []
        
        for match in self.section_pattern.finditer(main_content):
            section_id = match.group(1)
            section_title = match.group(2).strip()
            start_pos = match.start()
            
            sections_found.append({
                'id': section_id,
                'title': section_title,
                'start': start_pos,
                'match': match
            })
        
        # 提取每个节点的内容
        for i, section in enumerate(sections_found):
            section_id = section['id']
            section_start = section['match'].end()
            
            # 确定节点结束位置
            if i + 1 < len(sections_found):
                section_end = sections_found[i + 1]['start']
            else:
                section_end = len(main_content)
            
            # 提取节点内容
            section_content = main_content[section_start:section_end].strip()
            
            # 解析节点
            if section_content:
                file_data['sections'][section_id] = self.parse_section_content(section_id, section_content)
        
        # 统计信息
        file_data['metadata']['statistics'] = {
            'total_sections': len(file_data['sections']),
            'total_images': sum(len(section['content']['images']) for section in file_data['sections'].values()),
            'total_tables': sum(len(section['content']['tables']) for section in file_data['sections'].values()),
            'total_sequences': sum(len(section['content']['sequences']) for section in file_data['sections'].values()),
            'sections_found': list(file_data['sections'].keys())
        }
        
        self.logger.info(f"文件解析完成: {file_path.name} - {file_data['metadata']['statistics']['total_sections']} 个节点")
        return file_data
    def convert_all_posts(self, single_file: Optional[str] = None) -> Dict[str, Any]:
        """转换所有帖子或单个文件"""
        results = {
            'metadata': {
                'conversion_date': datetime.now().isoformat(),
                'source_directory': str(self.input_dir),
                'total_files': 0,
                'successful_conversions': 0,
                'failed_conversions': 0,
                'errors': []
            },
            'posts': {}
        }
        
        # 确定要处理的文件
        if single_file:
            files_to_process = [self.input_dir / single_file]
        else:
            files_to_process = list(self.input_dir.glob('*.md'))
        
        results['metadata']['total_files'] = len(files_to_process)
        
        for file_path in files_to_process:
            if not file_path.exists():
                error_msg = f"文件不存在: {file_path}"
                self.logger.error(error_msg)
                results['metadata']['errors'].append(error_msg)
                results['metadata']['failed_conversions'] += 1
                continue
            
            try:
                file_data = self.parse_markdown_file(file_path)
                if file_data:
                    # 使用文件名（不包含扩展名）作为键
                    file_key = file_path.stem
                    results['posts'][file_key] = file_data
                    results['metadata']['successful_conversions'] += 1
                else:
                    results['metadata']['failed_conversions'] += 1
            
            except Exception as e:
                error_msg = f"处理文件失败 {file_path}: {str(e)}"
                self.logger.error(error_msg)
                results['metadata']['errors'].append(error_msg)
                results['metadata']['failed_conversions'] += 1
        
        return results
    def save_results(self, results: Dict[str, Any]) -> None:
        """保存转换结果"""
        # 确保输出目录存在
        self.output_file.parent.mkdir(parents=True, exist_ok=True)
        
        # 创建备份
        if self.output_file.exists():
            backup_file = self.output_file.with_suffix('.bak')
            import shutil
            shutil.copy2(self.output_file, backup_file)
            self.logger.info(f"已创建备份: {backup_file}")
        
        # 保存结果，使用自定义的JSON编码器处理datetime对象
        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=2, default=str)
        
        self.logger.info(f"转换结果已保存到: {self.output_file}")
        self.logger.info(f"成功转换: {results['metadata']['successful_conversions']} 个文件")
        self.logger.info(f"转换失败: {results['metadata']['failed_conversions']} 个文件")
    def validate_results(self, results: Dict[str, Any]) -> bool:
        """验证转换结果"""
        self.logger.info("开始验证转换结果...")
        
        validation_passed = True
        
        for post_key, post_data in results['posts'].items():
            # 检查必需字段
            if 'metadata' not in post_data:
                self.logger.error(f"{post_key}: 缺少 metadata 字段")
                validation_passed = False
            
            if 'sections' not in post_data:
                self.logger.error(f"{post_key}: 缺少 sections 字段")
                validation_passed = False
                continue
            
            # 检查常见节点
            expected_sections = ['description', 'structure', 'references']
            for section in expected_sections:
                if section not in post_data['sections']:
                    self.logger.warning(f"{post_key}: 缺少常见节点 '{section}'")
            
            # 验证图片路径
            for section_id, section_data in post_data['sections'].items():
                if 'content' in section_data and 'images' in section_data['content']:
                    for image in section_data['content']['images']:
                        if not image.get('src'):
                            self.logger.warning(f"{post_key}.{section_id}: 发现空图片路径")
        
        if validation_passed:
            self.logger.info("✅ 验证通过")
        else:
            self.logger.error("❌ 验证失败")
        
        return validation_passed
def main():
    parser = argparse.ArgumentParser(description='将 _posts 目录下的 Markdown 文件转换为 JSON')
    parser.add_argument('--input', '-i', default='_posts', help='输入目录路径')
    parser.add_argument('--output', '-o', default='apidata/posts_data.json', help='输出JSON文件路径')
    parser.add_argument('--single', '-s', help='只转换单个文件')
    parser.add_argument('--validate', '-v', action='store_true', help='转换后验证结果')
    parser.add_argument('--verbose', action='store_true', help='详细日志输出')
    
    args = parser.parse_args()
    
    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)
    
    # 初始化转换器
    converter = PostsToJsonConverter(args.input, args.output)
    
    # 执行转换
    results = converter.convert_all_posts(args.single)
    
    # 保存结果
    converter.save_results(results)
    
    # 验证结果（如果需要）
    if args.validate:
        converter.validate_results(results)
    
    print(f"\n🎉 转换完成!")
    print(f"📁 输出文件: {args.output}")
    print(f"✅ 成功: {results['metadata']['successful_conversions']} 个文件")
    print(f"❌ 失败: {results['metadata']['failed_conversions']} 个文件")
    
    if results['metadata']['errors']:
        print(f"\n⚠️  错误信息:")
        for error in results['metadata']['errors']:
            print(f"   {error}")
if __name__ == "__main__":
    main() 