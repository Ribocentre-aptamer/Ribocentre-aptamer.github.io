#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Unified Aptamer Management Script
统一适配体管理脚本，支持有3D和无3D结构的适配体

使用方法:
  python manage_aptamers.py add-3d "适配体名称" "链接" "分类"
  python manage_aptamers.py add-no3d "适配体名称" "链接" "分类"
  python manage_aptamers.py list-3d
  python manage_aptamers.py list-no3d
  python manage_aptamers.py validate
  python manage_aptamers.py categories-3d
  python manage_aptamers.py categories-no3d
"""

import json
import sys
import argparse
from pathlib import Path
from collections import OrderedDict

class UnifiedAptamerManager:
    def __init__(self):
        self.data_files = {
            '3d': 'apidata/aptamer_3d_enhanced.json',
            'no3d': 'apidata/aptamer_no_3d_enhanced.json'
        }
        self.data = {}
        self.load_all_data()
    
    def load_all_data(self):
        """加载所有数据文件"""
        for key, filepath in self.data_files.items():
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    self.data[key] = json.load(f)
                print(f"✅ 已加载{key}数据文件: {filepath}")
            except FileNotFoundError:
                print(f"❌ 数据文件不存在: {filepath}")
                sys.exit(1)
            except json.JSONDecodeError as e:
                print(f"❌ JSON解析错误: {e}")
                sys.exit(1)
    
    def save_data(self, data_type):
        """保存指定类型的数据文件"""
        filepath = Path(self.data_files[data_type])
        
        # 创建备份
        backup_file = filepath.with_suffix('.bak')
        if filepath.exists():
            import shutil
            shutil.copy2(filepath, backup_file)
            print(f"📁 已创建备份: {backup_file}")
        
        # 保存新数据
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(self.data[data_type], f, ensure_ascii=False, indent=2)
        print(f"💾 已保存数据文件: {filepath}")
    
    def get_categories(self, data_type):
        """获取指定类型的所有可用分类"""
        return list(self.data[data_type]['category_config'].keys())
    
    def add_aptamer(self, data_type, name, link, category):
        """添加新适配体"""
        
        # 验证数据类型
        if data_type not in self.data:
            print(f"❌ 无效数据类型: {data_type}")
            return False
        
        # 验证分类
        categories = self.get_categories(data_type)
        if category not in categories:
            print(f"❌ 无效分类: {category}")
            print(f"可用分类: {', '.join(categories)}")
            return False
        
        # 检查是否已存在
        for item in self.data[data_type]['data']:
            if item['name'] == name:
                print(f"⚠️  适配体已存在: {name}")
                return False
        
        # 获取分类配置
        category_config = self.data[data_type]['category_config'][category]
        
        # 创建新适配体数据
        new_aptamer = {
            "name": name,
            "link": link,
            "background_color": category_config['primary_color'],
            "position": {"row": 0, "column": 0},  # 将重新计算
            "category": category,
            "category_info": {
                "name": category,
                "primary_color": category_config['primary_color'],
                "description": category_config['description']
            }
        }
        
        # 添加到数据中
        self.data[data_type]['data'].append(new_aptamer)
        self.data[data_type]['metadata']['total_items'] += 1
        self.data[data_type]['metadata']['last_updated'] = "2024-06-26"
        
        # 重新排序和分配位置
        self.reposition_aptamers(data_type)
        
        type_desc = "有3D结构" if data_type == '3d' else "无3D结构"
        print(f"✅ 成功添加{type_desc}适配体: {name}")
        print(f"   分类: {category}")
        print(f"   链接: {link}")
        print(f"   颜色: {category_config['primary_color']}")
        
        return True
    
    def update_aptamer(self, data_type, old_name, new_name=None, new_link=None, new_category=None):
        """更新现有适配体"""
        
        # 验证数据类型
        if data_type not in self.data:
            print(f"❌ 无效数据类型: {data_type}")
            return False
        
        # 查找适配体
        target_item = None
        for item in self.data[data_type]['data']:
            if item['name'] == old_name:
                target_item = item
                break
        
        if not target_item:
            print(f"❌ 未找到适配体: {old_name}")
            return False
        
        # 验证新分类（如果提供）
        if new_category:
            categories = self.get_categories(data_type)
            if new_category not in categories:
                print(f"❌ 无效分类: {new_category}")
                print(f"可用分类: {', '.join(categories)}")
                return False
        
        # 更新数据
        changes = []
        
        if new_name:
            target_item['name'] = new_name
            changes.append(f"名称: {old_name} → {new_name}")
        
        if new_link:
            target_item['link'] = new_link
            changes.append(f"链接: {new_link}")
        
        if new_category:
            category_config = self.data[data_type]['category_config'][new_category]
            target_item['category'] = new_category
            target_item['background_color'] = category_config['primary_color']
            target_item['category_info'] = {
                "name": new_category,
                "primary_color": category_config['primary_color'],
                "description": category_config['description']
            }
            changes.append(f"分类: {new_category}")
            
            # 重新排序
            self.reposition_aptamers(data_type)
        
        if changes:
            self.data[data_type]['metadata']['last_updated'] = "2024-06-26"
            type_desc = "有3D结构" if data_type == '3d' else "无3D结构"
            print(f"✅ 成功更新{type_desc}适配体:")
            for change in changes:
                print(f"   {change}")
            return True
        else:
            print("⚠️  没有提供更新内容")
            return False
    
    def delete_aptamer(self, data_type, name):
        """删除适配体"""
        
        # 验证数据类型
        if data_type not in self.data:
            print(f"❌ 无效数据类型: {data_type}")
            return False
        
        # 查找并删除
        for i, item in enumerate(self.data[data_type]['data']):
            if item['name'] == name:
                removed_item = self.data[data_type]['data'].pop(i)
                self.data[data_type]['metadata']['total_items'] -= 1
                self.data[data_type]['metadata']['last_updated'] = "2024-06-26"
                
                # 重新排序
                self.reposition_aptamers(data_type)
                
                type_desc = "有3D结构" if data_type == '3d' else "无3D结构"
                print(f"✅ 成功删除{type_desc}适配体: {name}")
                print(f"   分类: {removed_item['category']}")
                return True
        
        print(f"❌ 未找到适配体: {name}")
        return False
    
    def reposition_aptamers(self, data_type):
        """重新计算适配体位置"""
        
        # 按分类分组并排序
        categories = list(self.data[data_type]['category_config'].keys())
        
        # 对数据按分类顺序排序
        def sort_key(item):
            category_index = categories.index(item['category']) if item['category'] in categories else 999
            return (category_index, item['name'])
        
        self.data[data_type]['data'].sort(key=sort_key)
        
        # 重新分配位置
        columns_per_row = 9
        for i, item in enumerate(self.data[data_type]['data']):
            row = (i // columns_per_row) + 1
            col = (i % columns_per_row) + 1
            item['position'] = {"row": row, "column": col}
    
    def list_aptamers(self, data_type, category=None):
        """列出适配体"""
        
        # 验证数据类型
        if data_type not in self.data:
            print(f"❌ 无效数据类型: {data_type}")
            return
        
        if category:
            categories = self.get_categories(data_type)
            if category not in categories:
                print(f"❌ 无效分类: {category}")
                return
        
        # 按分类分组
        by_category = {}
        for item in self.data[data_type]['data']:
            cat = item['category']
            if cat not in by_category:
                by_category[cat] = []
            by_category[cat].append(item)
        
        # 显示结果
        if category:
            categories_to_show = [category]
        else:
            categories_to_show = self.get_categories(data_type)
        
        type_desc = "有3D结构" if data_type == '3d' else "无3D结构"
        print(f"\n📋 {type_desc}适配体列表:")
        print("=" * 60)
        
        total_count = 0
        for cat in categories_to_show:
            if cat in by_category:
                items = by_category[cat]
                print(f"\n📂 {cat} ({len(items)} 项)")
                print("-" * 50)
                
                for item in items:
                    print(f"  • {item['name']}")
                    print(f"    链接: {item['link']}")
                    print(f"    位置: 第{item['position']['row']}行第{item['position']['column']}列")
                    print(f"    颜色: {item['background_color']}")
                    print()
                
                total_count += len(items)
        
        print(f"📊 总计: {total_count} 个适配体")
    
    def validate_data(self, data_type=None):
        """验证数据完整性"""
        
        data_types = [data_type] if data_type else ['3d', 'no3d']
        
        for dtype in data_types:
            if dtype not in self.data:
                continue
                
            type_desc = "有3D结构" if dtype == '3d' else "无3D结构"
            print(f"\n🔍 验证{type_desc}适配体数据完整性...")
            errors = []
            warnings = []
            
            # 检查必需字段
            required_fields = ['name', 'link', 'category', 'background_color', 'position']
            
            for i, item in enumerate(self.data[dtype]['data']):
                for field in required_fields:
                    if field not in item:
                        errors.append(f"项目 {i+1}: 缺少字段 '{field}'")
                
                # 检查分类有效性
                if 'category' in item:
                    categories = self.get_categories(dtype)
                    if item['category'] not in categories:
                        errors.append(f"项目 {i+1} ({item.get('name', 'Unknown')}): 无效分类 '{item['category']}'")
                
                # 检查链接格式
                if 'link' in item and not item['link'].startswith('http'):
                    warnings.append(f"项目 {i+1} ({item.get('name', 'Unknown')}): 链接可能无效")
            
            # 检查重复名称
            names = [item['name'] for item in self.data[dtype]['data'] if 'name' in item]
            duplicate_names = [name for name in set(names) if names.count(name) > 1]
            
            if duplicate_names:
                warnings.extend([f"重复名称: {name}" for name in duplicate_names])
            
            # 显示结果
            if errors:
                print(f"❌ 发现 {len(errors)} 个错误:")
                for error in errors:
                    print(f"   {error}")
            
            if warnings:
                print(f"⚠️  发现 {len(warnings)} 个警告:")
                for warning in warnings:
                    print(f"   {warning}")
            
            if not errors and not warnings:
                print(f"✅ {type_desc}适配体数据验证通过，没有发现问题")
        
        return True
    
    def show_statistics(self):
        """显示统计信息"""
        print("\n📊 适配体数据库统计:")
        print("=" * 50)
        
        for dtype in ['3d', 'no3d']:
            if dtype in self.data:
                type_desc = "有3D结构" if dtype == '3d' else "无3D结构"
                total = self.data[dtype]['metadata']['total_items']
                categories = self.data[dtype]['metadata']['categories']
                
                print(f"\n{type_desc}适配体:")
                print(f"  总数: {total}")
                print(f"  分类: {categories}")
                
                # 按分类统计
                category_stats = {}
                for item in self.data[dtype]['data']:
                    category = item['category']
                    category_stats[category] = category_stats.get(category, 0) + 1
                
                print("  分类分布:")
                for category, count in category_stats.items():
                    print(f"    {category}: {count}")
        
        total_all = sum(self.data[dtype]['metadata']['total_items'] for dtype in self.data)
        print(f"\n🎯 数据库总计: {total_all} 个适配体")

def main():
    parser = argparse.ArgumentParser(description='统一适配体数据管理工具')
    subparsers = parser.add_subparsers(dest='command', help='可用命令')
    
    # 添加3D适配体
    add_3d_parser = subparsers.add_parser('add-3d', help='添加有3D结构的适配体')
    add_3d_parser.add_argument('name', help='适配体名称')
    add_3d_parser.add_argument('link', help='详情页面链接')
    add_3d_parser.add_argument('category', help='分类')
    
    # 添加无3D适配体
    add_no3d_parser = subparsers.add_parser('add-no3d', help='添加无3D结构的适配体')
    add_no3d_parser.add_argument('name', help='适配体名称')
    add_no3d_parser.add_argument('link', help='详情页面链接')
    add_no3d_parser.add_argument('category', help='分类')
    
    # 更新命令
    update_3d_parser = subparsers.add_parser('update-3d', help='更新有3D结构的适配体')
    update_3d_parser.add_argument('old_name', help='现有适配体名称')
    update_3d_parser.add_argument('--name', help='新名称')
    update_3d_parser.add_argument('--link', help='新链接')
    update_3d_parser.add_argument('--category', help='新分类')
    
    update_no3d_parser = subparsers.add_parser('update-no3d', help='更新无3D结构的适配体')
    update_no3d_parser.add_argument('old_name', help='现有适配体名称')
    update_no3d_parser.add_argument('--name', help='新名称')
    update_no3d_parser.add_argument('--link', help='新链接')
    update_no3d_parser.add_argument('--category', help='新分类')
    
    # 列表命令
    list_3d_parser = subparsers.add_parser('list-3d', help='列出有3D结构的适配体')
    list_3d_parser.add_argument('--category', help='筛选分类')
    
    list_no3d_parser = subparsers.add_parser('list-no3d', help='列出无3D结构的适配体')
    list_no3d_parser.add_argument('--category', help='筛选分类')
    
    # 验证命令
    validate_parser = subparsers.add_parser('validate', help='验证所有数据')
    
    # 分类命令
    categories_3d_parser = subparsers.add_parser('categories-3d', help='列出有3D结构适配体的所有分类')
    categories_no3d_parser = subparsers.add_parser('categories-no3d', help='列出无3D结构适配体的所有分类')
    
    # 统计命令
    stats_parser = subparsers.add_parser('stats', help='显示统计信息')
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return
    
    # 初始化管理器
    manager = UnifiedAptamerManager()
    
    # 执行命令
    success = True
    
    if args.command == 'add-3d':
        success = manager.add_aptamer('3d', args.name, args.link, args.category)
        if success:
            manager.save_data('3d')
    
    elif args.command == 'add-no3d':
        success = manager.add_aptamer('no3d', args.name, args.link, args.category)
        if success:
            manager.save_data('no3d')
    
    elif args.command == 'update-3d':
        success = manager.update_aptamer('3d', args.old_name, new_name=args.name, new_link=args.link, new_category=args.category)
        if success:
            manager.save_data('3d')
    
    elif args.command == 'update-no3d':
        success = manager.update_aptamer('no3d', args.old_name, new_name=args.name, new_link=args.link, new_category=args.category)
        if success:
            manager.save_data('no3d')
    
    elif args.command == 'list-3d':
        manager.list_aptamers('3d', args.category)
        return
    
    elif args.command == 'list-no3d':
        manager.list_aptamers('no3d', args.category)
        return
    
    elif args.command == 'validate':
        manager.validate_data()
        return
    
    elif args.command == 'categories-3d':
        categories = manager.get_categories('3d')
        print("📋 有3D结构适配体可用分类:")
        for cat in categories:
            config = manager.data['3d']['category_config'][cat]
            print(f"  • {cat} ({config['description']}) - {config['primary_color']}")
        return
    
    elif args.command == 'categories-no3d':
        categories = manager.get_categories('no3d')
        print("📋 无3D结构适配体可用分类:")
        for cat in categories:
            config = manager.data['no3d']['category_config'][cat]
            print(f"  • {cat} ({config['description']}) - {config['primary_color']}")
        return
    
    elif args.command == 'stats':
        manager.show_statistics()
        return
    
    # 完成操作提示
    if success and args.command.startswith(('add-', 'update-')):
        print("🎉 操作完成！")

if __name__ == "__main__":
    main() 