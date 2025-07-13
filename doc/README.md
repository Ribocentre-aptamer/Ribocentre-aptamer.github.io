# 技术文档目录

## 📋 文档概述

本目录包含 Ribocentre-Aptamer 项目的所有技术文档、维护指南和开发说明。为避免 Jekyll 渲染干扰，所有原始 markdown 文件已重命名为 `.txt` 格式，但内容完全保留。

## 📁 文档分类

### 🔧 系统维护文档

#### 适配体管理系统
- **unified_aptamer_maintenance_guide.txt** - 统一适配体表格维护指南
- **aptamer_table_maintenance_guide.txt** - 适配体表格维护指南（向后兼容）
- **REFACTOR_SUMMARY.txt** - 统一适配体表格系统重构总结
- **final_cleanup_summary.txt** - 最终清理总结
- **final_optimization_summary.txt** - 最终优化总结

#### 数据管理
- **add_linker_usage_guide.txt** - 链接器添加使用指南
- **README_JSON.txt** - JSON数据格式说明
- **PubMed_API_使用说明.txt** - PubMed API集成说明

### 🎨 样式与界面开发

#### 页面样式系统
- **aptamer_style_guide.txt** - 适配体页面样式应用指南
- **theophylline_template_guide.txt** - Theophylline模板使用指南
- **theophylline_template.txt** - Theophylline页面模板
- **dashboard_hyperlink_style_guide.txt** - 仪表盘超链接样式指南

#### 组件开发
- **amir_tooltip_usage.txt** - 工具提示组件使用说明
- **sequences_access_buttons_guide.txt** - 序列访问按钮指南
- **fluorescence_page_guide.txt** - 荧光页面开发指南

### 🔍 搜索功能文档

#### 搜索系统架构
- **search_functionality.txt** - 搜索功能实现详细文档（27KB，778行）
- **SEARCH_FIX_README.txt** - 搜索功能修复记录
- **search_fix_documentation.txt** - 搜索修复文档
- **tag_handling_update.txt** - 标签处理更新

### 📊 数据可视化与优化

#### 仪表盘系统
- **DASHBOARD_OPTIMIZATION.txt** - 仪表盘优化指南
- **Dashboard_Tooltip_Optimization_Journey.txt** - 仪表盘工具提示优化历程
- **plotly-pie-chart-tooltip-debugging.txt** - Plotly饼图工具提示调试
- **DATA_VISUALIZATION_README.txt** - 数据可视化说明

#### 性能优化
- **website-optimization-summary.txt** - 网站优化总结
- **minification-setup.txt** - 代码压缩设置
- **molstar-optimization-guide.txt** - Molstar优化指南
- **HOMEPAGE_OPTIMIZATION.txt** - 主页优化记录

### 🏗️ 系统架构文档

#### 重构与架构
- **aptamer-refactoring-guide.txt** - 适配体重构指南
- **NODE_HIERARCHY_SYSTEM.txt** - 节点层次系统
- **quick-reference.txt** - 快速参考指南

## 📖 文档使用指南

### 查看文档

所有文档都是标准的 Markdown 格式，只是扩展名改为 `.txt`。可以使用任何文本编辑器或 Markdown 查看器打开：

```bash
# 使用文本编辑器查看
cat doc/unified_aptamer_maintenance_guide.txt

# 使用Markdown查看器
code doc/search_functionality.txt
```

### 文档搜索

可以使用命令行工具在文档中搜索特定内容：

```bash
# 搜索包含特定关键词的文档
grep -r "适配体管理" doc/

# 搜索特定功能的实现
grep -r "搜索功能" doc/

# 查找样式相关文档
find doc/ -name "*style*" -type f
```

## 🔍 重要文档详解

### 1. 统一适配体管理系统

**核心文档**: `unified_aptamer_maintenance_guide.txt`

这是最重要的维护文档，详细说明了：
- 统一适配体表格系统架构
- 有3D和无3D结构适配体的分类管理
- 命令行工具使用方法
- 日常维护工作流程

**关键内容**:
- 数据库统计：180个适配体（53个有3D + 127个无3D）
- 分类系统：15个分类的完整说明
- 管理命令：所有可用的命令行操作

### 2. 搜索功能实现

**核心文档**: `search_functionality.txt`

最详细的技术文档之一（27KB），包含：
- 三个搜索模块的完整架构
- Header搜索、主页搜索、高级搜索的实现细节
- 文件依赖关系图
- 性能优化策略

**技术要点**:
- 模块化搜索架构
- 防抖处理和缓存策略
- 多视图渲染系统

### 3. 样式开发指南

**核心文档**: `aptamer_style_guide.txt`

提供完整的样式应用指南：
- `aptamer_page` 布局的使用方法
- HTML结构规范
- 组件库使用说明
- 导航系统自动生成

### 4. 系统重构记录

**核心文档**: `REFACTOR_SUMMARY.txt`

记录了重要的系统重构历程：
- 从固定位置系统到JSON驱动的灵活系统
- 两套独立表格系统的统一化
- 维护效率的显著提升（30分钟→30秒）

## 🚀 快速开始

### 新手入门

1. **了解系统架构**: 先阅读 `unified_aptamer_maintenance_guide.txt`
2. **学习基础操作**: 参考 `quick-reference.txt`
3. **掌握样式系统**: 查看 `aptamer_style_guide.txt`

### 开发者指南

1. **搜索功能开发**: 详读 `search_functionality.txt`
2. **界面组件开发**: 参考 `dashboard_hyperlink_style_guide.txt`
3. **性能优化**: 查看 `website-optimization-summary.txt`

### 维护人员

1. **日常维护**: 使用 `unified_aptamer_maintenance_guide.txt`
2. **数据管理**: 参考 `add_linker_usage_guide.txt`
3. **问题排查**: 查看各种修复文档

## 📝 文档更新

### 添加新文档

1. 创建新的 `.txt` 文件
2. 使用标准 Markdown 格式
3. 更新本 README 的文档分类

### 修改现有文档

1. 直接编辑对应的 `.txt` 文件
2. 保持 Markdown 格式规范
3. 必要时更新相关引用

## 🔗 相关资源

- **脚本文档**: 参考 `../scripts/README.md`
- **项目主文档**: 参考 `../PROJECT_DOCUMENTATION.md`
- **在线版本**: [Ribocentre-Aptamer](https://aptamer.ribocentre.org)



