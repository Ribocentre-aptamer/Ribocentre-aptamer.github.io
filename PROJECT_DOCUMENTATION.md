# Ribocentre-Aptamer 项目文档

## 📋 项目概述

Ribocentre-Aptamer 是一个专业的适配体数据库网站，提供全面的适配体信息检索、可视化展示和数据管理功能。

## 📁 文档导航

### 🔧 维护与管理
- [维护脚本指南](#维护脚本指南) - 所有脚本的使用说明
- [统一适配体管理](#统一适配体管理) - 适配体数据管理系统
- [数据维护指南](#数据维护指南) - 日常维护工作流程

### 🎨 开发与优化  
- [样式开发指南](#样式开发指南) - 页面样式和组件开发
- [搜索功能文档](#搜索功能文档) - 搜索系统实现详解
- [性能优化记录](#性能优化记录) - 系统优化历史

### 📊 系统架构
- [重构总结](#重构总结) - 系统重构记录
- [技术架构](#技术架构) - 整体技术方案

---

## 维护脚本指南

### 核心管理脚本

#### 1. 统一适配体管理脚本 (`scripts/manage_aptamers.py`)

**功能**: 统一管理有3D和无3D结构的适配体数据

**基本用法**:
```bash
# 查看所有统计信息
python scripts/manage_aptamers.py stats

# 验证所有数据
python scripts/manage_aptamers.py validate
```

**有3D结构适配体管理**:
```bash
# 添加有3D结构适配体
python scripts/manage_aptamers.py add-3d "适配体名称" "链接" "分类"

# 更新有3D结构适配体
python scripts/manage_aptamers.py update-3d "旧名称" --name "新名称" --category "新分类"

# 列出有3D结构适配体
python scripts/manage_aptamers.py list-3d

# 按分类筛选
python scripts/manage_aptamers.py list-3d --category "Fluorescent Aptamers"

# 查看可用分类
python scripts/manage_aptamers.py categories-3d
```

**无3D结构适配体管理**:
```bash
# 添加无3D结构适配体  
python scripts/manage_aptamers.py add-no3d "适配体名称" "链接" "分类"

# 更新无3D结构适配体
python scripts/manage_aptamers.py update-no3d "旧名称" --name "新名称" --category "新分类"

# 列出无3D结构适配体
python scripts/manage_aptamers.py list-no3d

# 按分类筛选
python scripts/manage_aptamers.py list-no3d --category "Proteins"

# 查看可用分类
python scripts/manage_aptamers.py categories-no3d
```

#### 2. 单独适配体管理脚本 (`scripts/add_aptamer.py`)

**功能**: 管理无3D结构适配体（向后兼容）

```bash
# 添加新适配体
python scripts/add_aptamer.py add "适配体名称" "链接" "分类"

# 更新适配体
python scripts/add_aptamer.py update "旧名称" --name "新名称" --category "新分类"

# 列出所有适配体
python scripts/add_aptamer.py list

# 按分类筛选
python scripts/add_aptamer.py list --category "Proteins"

# 验证数据
python scripts/add_aptamer.py validate

# 查看所有分类
python scripts/add_aptamer.py categories
```

### 数据处理脚本

#### 3. 序列数据更新 (`scripts/update_post_tags_from_sequence_json.py`)

**功能**: 从序列JSON文件更新文章标签

```bash
python scripts/update_post_tags_from_sequence_json.py
```

#### 4. 荧光信息增强 (`scripts/add_more_info_to_fluorescence_json.py`)

**功能**: 为荧光适配体数据添加详细信息

```bash
python scripts/add_more_info_to_fluorescence_json.py
```

#### 5. 链接器添加 (`scripts/add_linker_to_json.py`)

**功能**: 为JSON数据添加链接器信息

```bash
python scripts/add_linker_to_json.py
```

### 分析和清理脚本

#### 6. 数据分析脚本

```bash
# 分析匹配结果
python scripts/analyze_matching_results.py

# 生成关键词频率
python scripts/generate_keyword_freq.py

# 提取参考文献
python scripts/extract_refs.py

# 解析结构数据
python scripts/parse_structures.py
```

#### 7. 数据清理脚本

```bash
# Excel数据清理
python scripts/excel_cleaner.py

# GC含量四舍五入
python scripts/round_gc_content.py

# 检查链接器有效性
python scripts/check_linker_validity.py
```

### 外部API集成

#### 8. PubMed API更新 (`scripts/pubmed_api_updater.py`)

**功能**: 自动更新PubMed文献信息

```bash
python scripts/pubmed_api_updater.py
```

### 前端资源优化

#### 9. 资源压缩脚本

```bash
# JavaScript压缩
node scripts/minify-js.js

# CSS压缩  
node scripts/minify-css.js

# 测试压缩效果
node scripts/test-minification.js
```

---

## 统一适配体管理

### 系统架构

新的统一适配体表格系统同时支持**有3D结构**和**无3D结构**两种类型的适配体表格，采用相同的JSON数据驱动架构。

### 文件结构

```
apidata/
├── aptamer_3d_enhanced.json          # 有3D结构适配体数据
├── aptamer_no_3d_enhanced.json       # 无3D结构适配体数据  
├── table_3d_config.json             # 有3D结构表格配置
├── table_config.json                # 无3D结构表格配置
└── aptamer-table-lists.json         # 原始数据（备份）

js/
└── aptamer-table-generator.js       # 统一表格生成器

scripts/
├── manage_aptamers.py                # 统一管理脚本
└── add_aptamer.py                    # 单独的无3D管理脚本（向后兼容）
```

### 数据库统计

- **有3D结构适配体**: 53个，8个分类
- **无3D结构适配体**: 127个，7个分类
- **总计**: 180个适配体

### 分类系统

#### 有3D结构适配体分类

| 分类 | 英文名称 | 数量 | 主要颜色 |
|------|----------|------|----------|
| 荧光适配体 | Fluorescent Aptamers | 13 | #FF6B6B |
| 小分子化合物 | Small Molecules | 11 | #45B7D1 |
| 抗生素 | Antibiotics | 7 | #FFEAA7 |
| 蛋白质 | Proteins | 13 | #96CEB4 |
| 转录因子 | Transcription Factors | 1 | #DDA0DD |
| 病毒与核酸 | Viral & Nucleic Acids | 5 | #DDA0DD |
| 朊病毒 | Prions | 1 | #DDA0DD |
| 其他 | Others | 2 | #808080 |

#### 无3D结构适配体分类

| 分类 | 英文名称 | 数量 | 主要颜色 |
|------|----------|------|----------|
| 小分子化合物 | Small Molecules | 17 | #385dbf |
| 蛋白质 | Proteins | 70 | #d75369 |
| 病毒 | Viruses | 23 | #ade48b |
| 核酸 | Nucleic Acids | 3 | #6ed9cd |
| 细胞与癌症 | Cells & Cancer | 6 | #bf97d1 |
| 其他化合物 | Other Compounds | 4 | #2a5c76 |
| 其他 | Others | 4 | #FFA07A |

---

## 数据维护指南

### 日常维护流程

```bash
# 1. 查看当前状态
python scripts/manage_aptamers.py stats

# 2. 添加新适配体
python scripts/manage_aptamers.py add-3d/no3d "名称" "链接" "分类"

# 3. 验证数据完整性
python scripts/manage_aptamers.py validate

# 4. 浏览器测试页面显示效果
```

### 最佳实践

#### 分类选择指南

**有3D结构适配体**:
- **Fluorescent Aptamers**: Mango、Spinach等以植物/颜色命名的荧光RNA
- **Small Molecules**: ATP、FMN、Biotin等小分子化合物
- **Antibiotics**: Tetracycline、Neomycin等抗生素
- **Proteins**: Thrombin、Lysozyme等蛋白质

**无3D结构适配体**:
- **Small Molecules**: 小分子化合物和荧光素
- **Proteins**: 各种蛋白质（数量最多）
- **Viruses**: HIV、HCV等病毒相关
- **Cells & Cancer**: 细胞和癌症相关

#### 命名规范

- **一致性**: 使用标准的生物学名称
- **简洁性**: 避免过长的名称
- **准确性**: 确保名称与实际适配体匹配

#### 链接规范

- **格式**: `https://aptamer.ribocentre.org/_posts/适配体名称-aptamer`
- **验证**: 确保链接可访问
- **一致性**: 保持URL格式统一

---

## 样式开发指南

### 快速应用指南

要将统一样式应用到其他aptamer页面，在Markdown文件的front matter中使用`aptamer_page`布局：

```yaml
---
layout: aptamer_page
title: "页面标题"
date: YYYY-MM-DD 00:00:00
author: 作者名
categories: Aptamer
---
```

### HTML结构规范

#### 1. 内容区域结构

```html
<div class="content-section">
  <h2 class="section-title" id="section-id">Section Title</h2>
  <!-- 内容 -->
</div>
```

#### 2. 时间线结构

```html
<div class="content-section">
  <h2 class="section-title" id="timeline">Timeline</h2>
  <div class="timeline">
    <div class="entry">
      <div class="title">
        <h3><a href="链接" target="_blank" style="color:#520049">年份</a></h3>
      </div>
      <div class="body">
        <p>事件描述<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
      </div>
    </div>
  </div>
</div>
```

#### 3. 常用组件

```html
<!-- 小标题 -->
<div class="blowheader_box">小标题</div>

<!-- 序列显示 -->
<div class="sequence">5'-GGCAUACCAGCCGAAAGGCCCUUGGCAGCGUC-3'</div>

<!-- 高亮文本 -->
<span class="highlight-text">重要内容</span>

<!-- 信息框 -->
<div class="info-box">
  <p>信息内容</p>
</div>
```

### 文件结构

- `_includes/custom_styles/aptamer_styles.html` - 所有CSS样式
- `_includes/custom_styles/aptamer_navigation.html` - 导航元素和JavaScript
- `_layouts/aptamer_page.html` - 专用布局文件

---

## 搜索功能文档

### 搜索系统架构

Ribocentre-Aptamer 网站的搜索功能采用模块化设计，包含三个核心模块：

1. **SearchModule** (`js/search.js`) - 全站通用搜索功能
2. **homepageSearchModule** (`js/homepage-main.js`) - 主页特定搜索功能  
3. **AdvancedSearchModule** (`js/advanced-search.js`) - 高级搜索页面功能
4. **SearchUtils** (`js/search-utils.js`) - 通用搜索工具函数

### 文件依赖关系

#### Header搜索功能
- `js/search.js` - 搜索逻辑实现
- `js/search-utils.js` - 公共工具函数
- `css/search.css` - 样式定义
- `search.json` - 搜索索引数据

#### 主页搜索功能
- `js/homepage-main.js` - 主页搜索模块
- `apidata/sequences_cleaned.json` - 序列数据
- `css/homepage.css` - 主页特定样式

#### 高级搜索功能
- `js/advanced-search.js` - 高级搜索实现
- `css/advanced-search.css` - 高级搜索样式
- `advanced_search.html` - 高级搜索页面

### 搜索功能特性

#### 基础搜索
- 实时搜索建议
- 关键词高亮
- 结果统计
- 响应式设计

#### 高级搜索
- 多字段搜索
- 类型过滤
- 参数筛选（年份、序列长度、GC含量等）
- 多种视图（列表、网格、表格）
- 结果排序

---

## 性能优化记录

### 资源压缩优化

#### JavaScript压缩
- 使用UglifyJS压缩JavaScript文件
- 平均压缩率：60-70%
- 关键文件：`aptamer-table-generator.js`、`search.js`

#### CSS压缩
- 使用clean-css压缩样式文件
- 移除冗余代码和注释
- 优化选择器性能

#### 图片优化
- SVG文件优化
- 适当的图片格式选择
- 响应式图片加载

### 缓存策略

- 静态资源缓存
- API数据缓存
- 搜索结果缓存

### 性能监控

- 页面加载时间监控
- 搜索响应时间统计
- 资源加载性能分析

---

## 重构总结

### 重构目标

将原本基于固定位置和固定颜色的两套独立表格系统（有3D结构和无3D结构），重构为统一的JSON数据驱动的灵活系统。

### 重构成果

#### 数据统一
- **180个适配体**: 完整覆盖两种表格类型
- **15个分类**: 针对不同结构类型优化的分类系统
- **统一数据格式**: JSON驱动的标准化数据结构

#### 工具统一
- **统一管理脚本**: 一个工具管理所有类型
- **命令行界面**: 简化的操作流程
- **自动验证**: 数据完整性保证

#### 维护效率提升
- **维护时间**: 从30分钟减少到30秒
- **出错概率**: 从高风险降到几乎为零
- **扩展难度**: 从困难变为简单
- **团队门槛**: 从需要前端知识到零门槛

### 技术架构改进

#### 原始架构 → 现代架构
```
# 原始方式
手动修改HTML/CSS → 一条命令操作
硬编码位置映射 → 自动分类配色  
两套独立系统 → 统一管理架构
无数据验证 → 自动验证脚本
```

---

## 技术架构

### 前端技术栈

- **框架**: Jekyll静态网站生成器
- **样式**: SCSS + Bootstrap
- **交互**: Vanilla JavaScript (ES6+)
- **可视化**: D3.js、Plotly.js
- **分子结构**: Molstar、FornaContainer

### 后端数据

- **数据格式**: JSON
- **数据源**: 手工整理 + API集成
- **存储**: 静态文件
- **更新**: Python脚本自动化

### 部署架构

- **托管**: GitHub Pages
- **CDN**: GitHub CDN
- **域名**: 自定义域名
- **SSL**: Let's Encrypt

### 开发工具

- **版本控制**: Git + GitHub
- **依赖管理**: Bundler (Ruby) + npm (Node.js)
- **构建工具**: Jekyll + 自定义脚本
- **代码质量**: ESLint + 手工review

---

## 🔗 相关链接

- **原始文档**: 详细技术文档请参考 `doc/` 目录下的 `.txt` 文件
- **脚本源码**: 所有脚本的完整代码在 `scripts/` 目录
- **项目主页**: [Ribocentre-Aptamer](https://aptamer.ribocentre.org)
- **GitHub仓库**: [项目GitHub地址]

---

## 📞 技术支持

如有问题或建议，请：
1. 查看本文档相关章节
2. 运行 `validate` 命令检查数据
3. 联系开发团队或创建issue

---

*最后更新: 2024年12月* 