#!/usr/bin/env python3
"""
增强版本的链接添加脚本
功能：为 sequences_cleaned.json 中的记录添加 Linker 字段，并验证链接有效性
"""
import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass


@dataclass
class ProcessingStats:
    """处理统计信息"""
    total_records: int = 0
    records_with_existing_linker: int = 0
    records_without_page_name: int = 0
    linkers_added: int = 0
    valid_linkers: int = 0
    invalid_linkers: int = 0
    duplicated_page_names: int = 0


class LinkerProcessor:
    """链接处理器类"""
    
    def __init__(self, json_path: str = "apidata/sequences_cleaned.json", 
                 posts_dir: str = "_posts", verbose: bool = False):
        self.json_path = Path(json_path)
        self.posts_dir = Path(posts_dir)
        self.verbose = verbose
        self.stats = ProcessingStats()
        self.invalid_linkers: List[Tuple[str, str, str]] = []  # (ID, page_name, reason)
        self.page_name_usage: Dict[str, List[str]] = {}  # page_name -> [ID1, ID2, ...]
        
    def log_verbose(self, message: str):
        """输出详细日志"""
        if self.verbose:
            print(f"[DEBUG] {message}")
    
    def slugify(self, name: str) -> str:
        """
        将页面名称转换为用于文件名的slug
        
        规则：
        1. 去除前后空白字符
        2. 将空格和连续空白字符替换为单个短横线'-'
        3. 将特殊分隔符（em dash, en dash, 斜杠, 下划线）替换为短横线
        4. 移除除字母数字、短横线、括号外的字符
        5. 压缩多个短横线
        6. 返回不以短横线开头或结尾的slug
        """
        slug = name.strip()
        self.log_verbose(f"Slugifying: '{name}' -> 第1步: '{slug}'")
        
        # 规范化空格和分隔符
        separator_pattern = r"[\s/·—–_]+"
        slug = re.sub(separator_pattern, "-", slug)
        self.log_verbose(f"Slugifying: 第2步(分隔符): '{slug}'")
        
        # 移除不需要的标点符号，但保留括号
        slug = re.sub(r"[^A-Za-z0-9\-()]+", "", slug)
        self.log_verbose(f"Slugifying: 第3步(清理字符): '{slug}'")
        
        # 压缩多个短横线
        slug = re.sub(r"-{2,}", "-", slug)
        slug = slug.strip("-")
        self.log_verbose(f"Slugifying: 最终结果: '{slug}'")
        
        return slug
    
    def validate_linker(self, linker_path: str) -> Tuple[bool, str]:
        """
        验证链接是否有效
        
        Args:
            linker_path: 链接路径，如 '/_posts/ATP-aptamer.html'
            
        Returns:
            Tuple[bool, str]: (是否有效, 错误原因)
        """
        if not linker_path:
            return False, "链接为空"
        
        if not linker_path.startswith('/_posts/'):
            return False, f"链接格式错误，应以 '/_posts/' 开头: {linker_path}"
        
        # 提取文件名（去除 .html 扩展名）
        slug = Path(linker_path).stem
        
        # 检查对应的 .md 或 .html 文件是否存在
        md_file = self.posts_dir / f"{slug}.md"
        html_file = self.posts_dir / f"{slug}.html"
        
        if md_file.exists():
            self.log_verbose(f"找到对应的 .md 文件: {md_file}")
            return True, ""
        elif html_file.exists():
            self.log_verbose(f"找到对应的 .html 文件: {html_file}")
            return True, ""
        else:
            return False, f"找不到对应的源文件: {md_file} 或 {html_file}"
    
    def collect_page_name_usage(self, data: Dict) -> None:
        """收集页面名称使用情况，检测重复"""
        for record in data.get("Sheet1", []):
            page_name = record.get("Linker name(page name)")
            record_id = record.get("ID", "未知ID")
            
            if page_name:
                if page_name not in self.page_name_usage:
                    self.page_name_usage[page_name] = []
                self.page_name_usage[page_name].append(record_id)
    
    def process_records(self, data: Dict, force_update: bool = False) -> bool:
        """
        处理所有记录
        
        Args:
            data: JSON数据
            force_update: 是否强制更新已存在的链接
            
        Returns:
            bool: 是否有更新
        """
        if "Sheet1" not in data:
            raise KeyError("JSON数据中缺少 'Sheet1' 键")
        
        records = data["Sheet1"]
        self.stats.total_records = len(records)
        
        print(f"开始处理 {self.stats.total_records} 条记录...")
        
        # 收集页面名称使用情况
        self.collect_page_name_usage(data)
        
        # 统计重复的页面名称
        duplicated_names = {name: ids for name, ids in self.page_name_usage.items() 
                          if len(ids) > 1}
        self.stats.duplicated_page_names = len(duplicated_names)
        
        if duplicated_names:
            print(f"\n⚠️  发现 {self.stats.duplicated_page_names} 个重复的页面名称:")
            for name, ids in duplicated_names.items():
                print(f"  - '{name}' 被以下记录使用: {', '.join(ids)}")
        
        updated = False
        
        for i, record in enumerate(records, 1):
            record_id = record.get("ID", f"记录_{i}")
            page_name = record.get("Linker name(page name)")
            existing_linker = record.get("Linker")
            
            self.log_verbose(f"\n处理记录 {i}/{self.stats.total_records}: {record_id}")
            
            # 检查是否已有链接
            if existing_linker and not force_update:
                self.log_verbose(f"记录已有链接: {existing_linker}")
                self.stats.records_with_existing_linker += 1
                
                # 验证现有链接
                is_valid, error_reason = self.validate_linker(existing_linker)
                if is_valid:
                    self.stats.valid_linkers += 1
                else:
                    self.stats.invalid_linkers += 1
                    self.invalid_linkers.append((record_id, existing_linker, error_reason))
                    self.log_verbose(f"现有链接无效: {error_reason}")
                continue
            
            # 检查是否有页面名称
            if not page_name:
                self.log_verbose("缺少页面名称，跳过")
                self.stats.records_without_page_name += 1
                continue
            
            # 生成新链接
            slug = self.slugify(page_name)
            new_linker = f"/_posts/{slug}.html"
            
            self.log_verbose(f"生成新链接: {new_linker}")
            
            # 验证新链接
            is_valid, error_reason = self.validate_linker(new_linker)
            
            if is_valid:
                record["Linker"] = new_linker
                self.stats.linkers_added += 1
                self.stats.valid_linkers += 1
                updated = True
                self.log_verbose(f"✅ 成功添加有效链接")
            else:
                self.stats.invalid_linkers += 1
                self.invalid_linkers.append((record_id, new_linker, error_reason))
                self.log_verbose(f"❌ 生成的链接无效: {error_reason}")
                
                # 即使链接无效，也可以选择添加（由调用者决定）
                if force_update:
                    record["Linker"] = new_linker
                    self.stats.linkers_added += 1
                    updated = True
                    self.log_verbose("⚠️  强制添加无效链接")
        
        return updated
    
    def save_data(self, data: Dict) -> None:
        """保存数据到JSON文件"""
        with self.json_path.open("w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"✅ 数据已保存到 {self.json_path}")
    
    def print_statistics(self) -> None:
        """打印统计信息"""
        print("\n" + "="*60)
        print("📊 处理统计信息")
        print("="*60)
        print(f"总记录数:              {self.stats.total_records}")
        print(f"已有链接的记录:        {self.stats.records_with_existing_linker}")
        print(f"缺少页面名称的记录:    {self.stats.records_without_page_name}")
        print(f"新添加的链接:          {self.stats.linkers_added}")
        print(f"有效链接数:            {self.stats.valid_linkers}")
        print(f"无效链接数:            {self.stats.invalid_linkers}")
        print(f"重复页面名称数:        {self.stats.duplicated_page_names}")
        
        # 计算百分比
        if self.stats.total_records > 0:
            valid_percentage = (self.stats.valid_linkers / self.stats.total_records) * 100
            print(f"链接有效率:            {valid_percentage:.1f}%")
    
    def print_invalid_linkers(self, max_display: int = 20) -> None:
        """打印无效链接详情"""
        if not self.invalid_linkers:
            return
        
        print(f"\n❌ 无效链接详情 (显示前 {min(max_display, len(self.invalid_linkers))} 个):")
        print("-" * 80)
        for i, (record_id, linker, reason) in enumerate(self.invalid_linkers[:max_display]):
            print(f"{i+1:2d}. 记录ID: {record_id}")
            print(f"    链接: {linker}")
            print(f"    原因: {reason}")
            print()
        
        if len(self.invalid_linkers) > max_display:
            print(f"... 还有 {len(self.invalid_linkers) - max_display} 个无效链接未显示")
    
    def run(self, force_update: bool = False, dry_run: bool = False) -> None:
        """
        运行处理流程
        
        Args:
            force_update: 是否强制更新已存在的链接
            dry_run: 是否只进行测试运行（不保存文件）
        """
        # 检查文件存在性
        if not self.json_path.exists():
            raise FileNotFoundError(f"找不到文件: {self.json_path}")
        
        if not self.posts_dir.exists():
            raise FileNotFoundError(f"找不到目录: {self.posts_dir}")
        
        print(f"📂 JSON文件路径: {self.json_path}")
        print(f"📂 Posts目录: {self.posts_dir}")
        print(f"🔧 强制更新模式: {'是' if force_update else '否'}")
        print(f"🧪 测试运行模式: {'是' if dry_run else '否'}")
        print(f"📝 详细日志: {'开启' if self.verbose else '关闭'}")
        
        # 加载数据
        print("\n📖 加载JSON数据...")
        with self.json_path.open("r", encoding="utf-8") as f:
            data = json.load(f)
        
        # 处理记录
        updated = self.process_records(data, force_update)
        
        # 保存数据（如果不是dry run）
        if updated and not dry_run:
            self.save_data(data)
        elif dry_run:
            print("\n🧪 测试运行模式 - 未保存更改")
        elif not updated:
            print("\n✨ 没有需要更新的记录")
        
        # 打印统计信息
        self.print_statistics()
        self.print_invalid_linkers()


def main():
    """主函数"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="为 sequences_cleaned.json 添加和验证 Linker 字段",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用示例:
  %(prog)s                          # 基本运行
  %(prog)s --verbose                # 显示详细日志
  %(prog)s --force                  # 强制更新已存在的链接
  %(prog)s --dry-run                # 测试运行，不保存文件
  %(prog)s --json-path path/to/data.json  # 指定JSON文件路径
        """
    )
    
    parser.add_argument(
        "--json-path", 
        default="apidata/sequences_cleaned.json",
        help="JSON数据文件路径 (默认: apidata/sequences_cleaned.json)"
    )
    parser.add_argument(
        "--posts-dir", 
        default="_posts",
        help="Posts目录路径 (默认: _posts)"
    )
    parser.add_argument(
        "--force", 
        action="store_true",
        help="强制更新已存在的链接"
    )
    parser.add_argument(
        "--dry-run", 
        action="store_true",
        help="测试运行模式，不保存任何更改"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="显示详细的调试信息"
    )
    
    args = parser.parse_args()
    
    try:
        processor = LinkerProcessor(
            json_path=args.json_path,
            posts_dir=args.posts_dir,
            verbose=args.verbose
        )
        processor.run(
            force_update=args.force,
            dry_run=args.dry_run
        )
        
    except Exception as e:
        print(f"❌ 错误: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main() 