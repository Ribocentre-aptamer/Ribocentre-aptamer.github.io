#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Aptamer Management Script
用于添加、更新和管理无3D模型适配体数据的实用脚本

使用方法:
  python add_aptamer.py add "适配体名称" "链接" "分类"
  python add_aptamer.py update "旧名称" --name "新名称" --category "新分类"
  python add_aptamer.py list
  python add_aptamer.py validate
"""

import json
import sys
import argparse
from pathlib import Path
from collections import OrderedDict

class AptamerManager:
    def __init__(self, data_file='apidata/aptamer_no_3d_enhanced.json'):
        self.data_file = Path(data_file)
        self.data = None
        self.load_data()
    
    def load_data(self):
        """加载数据文件"""
        try:
            with open(self.data_file, 'r', encoding='utf-8') as f:
                self.data = json.load(f)
            print(f"✅ 已加载数据文件: {self.data_file}")
        except FileNotFoundError:
            print(f"❌ 数据文件不存在: {self.data_file}")
            sys.exit(1)
        except json.JSONDecodeError as e:
            print(f"❌ JSON解析错误: {e}")
            sys.exit(1)
    
    def save_data(self):
        """保存数据文件"""
        # 创建备份
        backup_file = self.data_file.with_suffix('.bak')
        if self.data_file.exists():
            import shutil
            shutil.copy2(self.data_file, backup_file)
            print(f"📁 已创建备份: {backup_file}")
        
        # 保存新数据
        with open(self.data_file, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, ensure_ascii=False, indent=2)
        print(f"💾 已保存数据文件: {self.data_file}")
    
    def get_categories(self):
        """获取所有可用分类"""
        return list(self.data['category_config'].keys())
    
    def add_aptamer(self, name, link, category):
        """添加新适配体"""
        
        # 验证分类
        if category not in self.get_categories():
            print(f"❌ 无效分类: {category}")
            print(f"可用分类: {', '.join(self.get_categories())}")
            return False
        
        # 检查是否已存在
        for item in self.data['data']:
            if item['name'] == name:
                print(f"⚠️  适配体已存在: {name}")
                return False
        
        # 获取分类配置
        category_config = self.data['category_config'][category]
        
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
        self.data['data'].append(new_aptamer)
        self.data['metadata']['total_items'] += 1
        self.data['metadata']['last_updated'] = "2024-06-26"
        
        # 重新排序和分配位置
        self.reposition_aptamers()
        
        print(f"✅ 成功添加适配体: {name}")
        print(f"   分类: {category}")
        print(f"   链接: {link}")
        print(f"   颜色: {category_config['primary_color']}")
        
        return True
    
    def update_aptamer(self, old_name, new_name=None, new_link=None, new_category=None):
        """更新现有适配体"""
        
        # 查找适配体
        target_item = None
        for item in self.data['data']:
            if item['name'] == old_name:
                target_item = item
                break
        
        if not target_item:
            print(f"❌ 未找到适配体: {old_name}")
            return False
        
        # 验证新分类（如果提供）
        if new_category and new_category not in self.get_categories():
            print(f"❌ 无效分类: {new_category}")
            print(f"可用分类: {', '.join(self.get_categories())}")
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
            category_config = self.data['category_config'][new_category]
            target_item['category'] = new_category
            target_item['background_color'] = category_config['primary_color']
            target_item['category_info'] = {
                "name": new_category,
                "primary_color": category_config['primary_color'],
                "description": category_config['description']
            }
            changes.append(f"分类: {new_category}")
            
            # 重新排序
            self.reposition_aptamers()
        
        if changes:
            self.data['metadata']['last_updated'] = "2024-06-26"
            print(f"✅ 成功更新适配体:")
            for change in changes:
                print(f"   {change}")
            return True
        else:
            print("⚠️  没有提供更新内容")
            return False
    
    def delete_aptamer(self, name):
        """删除适配体"""
        
        # 查找并删除
        for i, item in enumerate(self.data['data']):
            if item['name'] == name:
                removed_item = self.data['data'].pop(i)
                self.data['metadata']['total_items'] -= 1
                self.data['metadata']['last_updated'] = "2024-06-26"
                
                # 重新排序
                self.reposition_aptamers()
                
                print(f"✅ 成功删除适配体: {name}")
                print(f"   分类: {removed_item['category']}")
                return True
        
        print(f"❌ 未找到适配体: {name}")
        return False
    
    def reposition_aptamers(self):
        """重新计算适配体位置"""
        
        # 按分类分组并排序
        categories = list(self.data['category_config'].keys())
        
        # 对数据按分类顺序排序
        def sort_key(item):
            category_index = categories.index(item['category']) if item['category'] in categories else 999
            return (category_index, item['name'])
        
        self.data['data'].sort(key=sort_key)
        
        # 重新分配位置
        columns_per_row = 9
        for i, item in enumerate(self.data['data']):
            row = (i // columns_per_row) + 1
            col = (i % columns_per_row) + 1
            item['position'] = {"row": row, "column": col}
    
    def list_aptamers(self, category=None):
        """列出适配体"""
        
        if category and category not in self.get_categories():
            print(f"❌ 无效分类: {category}")
            return
        
        # 按分类分组
        by_category = {}
        for item in self.data['data']:
            cat = item['category']
            if cat not in by_category:
                by_category[cat] = []
            by_category[cat].append(item)
        
        # 显示结果
        if category:
            categories_to_show = [category]
        else:
            categories_to_show = self.get_categories()
        
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
    
    def validate_data(self):
        """验证数据完整性"""
        
        print("🔍 验证数据完整性...")
        errors = []
        warnings = []
        
        # 检查必需字段
        required_fields = ['name', 'link', 'category', 'background_color', 'position']
        
        for i, item in enumerate(self.data['data']):
            for field in required_fields:
                if field not in item:
                    errors.append(f"项目 {i+1}: 缺少字段 '{field}'")
            
            # 检查分类有效性
            if 'category' in item and item['category'] not in self.get_categories():
                errors.append(f"项目 {i+1} ({item.get('name', 'Unknown')}): 无效分类 '{item['category']}'")
            
            # 检查链接格式
            if 'link' in item and not item['link'].startswith('http'):
                warnings.append(f"项目 {i+1} ({item.get('name', 'Unknown')}): 链接可能无效")
        
        # 检查重复名称
        names = [item['name'] for item in self.data['data'] if 'name' in item]
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
            print("✅ 数据验证通过，没有发现问题")
        
        return len(errors) == 0

def main():
    parser = argparse.ArgumentParser(description='适配体数据管理工具')
    subparsers = parser.add_subparsers(dest='command', help='可用命令')
    
    # 添加命令
    add_parser = subparsers.add_parser('add', help='添加新适配体')
    add_parser.add_argument('name', help='适配体名称')
    add_parser.add_argument('link', help='详情页面链接')
    add_parser.add_argument('category', help='分类')
    
    # 更新命令
    update_parser = subparsers.add_parser('update', help='更新现有适配体')
    update_parser.add_argument('old_name', help='现有适配体名称')
    update_parser.add_argument('--name', help='新名称')
    update_parser.add_argument('--link', help='新链接')
    update_parser.add_argument('--category', help='新分类')
    
    # 删除命令
    delete_parser = subparsers.add_parser('delete', help='删除适配体')
    delete_parser.add_argument('name', help='适配体名称')
    
    # 列表命令
    list_parser = subparsers.add_parser('list', help='列出适配体')
    list_parser.add_argument('--category', help='筛选分类')
    
    # 验证命令
    validate_parser = subparsers.add_parser('validate', help='验证数据')
    
    # 分类命令
    categories_parser = subparsers.add_parser('categories', help='列出所有分类')
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return
    
    # 初始化管理器
    manager = AptamerManager()
    
    # 执行命令
    success = True
    
    if args.command == 'add':
        success = manager.add_aptamer(args.name, args.link, args.category)
    
    elif args.command == 'update':
        success = manager.update_aptamer(
            args.old_name, 
            new_name=args.name,
            new_link=args.link, 
            new_category=args.category
        )
    
    elif args.command == 'delete':
        success = manager.delete_aptamer(args.name)
    
    elif args.command == 'list':
        manager.list_aptamers(args.category)
        return
    
    elif args.command == 'validate':
        success = manager.validate_data()
        return
    
    elif args.command == 'categories':
        categories = manager.get_categories()
        print("📋 可用分类:")
        for cat in categories:
            config = manager.data['category_config'][cat]
            print(f"  • {cat} ({config['description']}) - {config['primary_color']}")
        return
    
    # 保存更改
    if success and args.command in ['add', 'update', 'delete']:
        manager.save_data()
        print("🎉 操作完成！")

if __name__ == "__main__":
    main() 