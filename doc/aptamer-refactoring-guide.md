# Aptamer页面重构指南

## 重构概述

原始的 `_pages/riboaptamer.md` 文件过于庞大（3869行），包含大量内联CSS和JavaScript代码，导致维护困难。本次重构将页面模块化，提取数据和样式到独立文件中。

## 文件结构

### 新增文件

1. **CSS样式文件**
   - `css/aptamer.css` - 页面专用样式

2. **JavaScript文件**
   - `js/aptamer.js` - 页面专用交互逻辑

3. **数据文件**
   - `apidata/aptamer-pie-chart.json` - 饼图数据
   - `apidata/aptamer-table-lists.json` - 表格列表数据（有/无3D结构）
   - `apidata/aptamer-tables-data.json` - 四个主要表格数据

4. **重构后的页面**
   - `_pages/riboaptamer-refactored.md` - 重构后的页面文件

## 模块说明

### 1. 饼图模块
- **数据文件**: `apidata/aptamer-pie-chart.json`
- **功能**: 显示适配体分类统计
- **包含**: 数值、标签、颜色配置

### 2. 表格列表模块
- **数据文件**: `apidata/aptamer-table-lists.json`
- **功能**: 显示有/无3D结构的适配体列表
- **包含**: 两个彩色表格，每个单元格包含名称和链接

### 3. 主要表格模块
- **数据文件**: `apidata/aptamer-tables-data.json`
- **功能**: 四个主要数据表格
- **包含**: 
  - Small molecules (小分子)
  - Proteins (蛋白质)
  - Amino acids (氨基酸)
  - Sugars (糖类)

### 4. 样式模块
- **文件**: `css/aptamer.css`
- **功能**: 所有页面样式
- **包含**: 
  - 基础样式
  - 表格样式
  - 按钮样式
  - 响应式设计

### 5. 交互模块
- **文件**: `js/aptamer.js`
- **功能**: 所有页面交互
- **包含**:
  - 数据加载
  - 表格渲染
  - 搜索功能
  - 事件处理

## 数据结构

### 饼图数据结构
```json
{
  "pieChart": {
    "values": [数值数组],
    "labels": [标签数组],
    "colors": [颜色数组]
  }
}
```

### 表格列表数据结构
```json
{
  "with3DStructure": {
    "title": "标题",
    "rows": [
      {
        "class": "行样式类",
        "cells": [
          {"name": "名称", "url": "链接"}
        ]
      }
    ]
  }
}
```

### 主要表格数据结构
```json
{
  "smallMolecules": [
    {
      "category": "分类",
      "name": "名称",
      "nameUrl": "名称链接",
      "ligand": "配体",
      "description": "描述",
      "discovery": "发现年份",
      "discoveryUrl": "发现链接",
      "pdb": "PDB信息"
    }
  ]
}
```

## 使用方法

### 1. 替换原文件
将 `_pages/riboaptamer-refactored.md` 重命名为 `_pages/riboaptamer.md`

### 2. 确保文件路径正确
检查所有引用的CSS、JS和数据文件路径是否正确

### 3. 数据更新
- 更新 `apidata/` 目录下的JSON文件来修改数据
- 无需修改HTML或JavaScript代码

### 4. 样式调整
- 修改 `css/aptamer.css` 来调整样式
- 无需在HTML中添加内联样式

### 5. 功能扩展
- 修改 `js/aptamer.js` 来添加新功能
- 使用模块化的函数结构

## 优势

1. **可维护性**: 代码分离，职责明确
2. **可扩展性**: 模块化设计，易于添加新功能
3. **数据管理**: 数据独立存储，便于更新
4. **性能优化**: 按需加载，减少页面大小
5. **代码复用**: 样式和脚本可在其他页面复用

## 注意事项

1. 确保所有外部依赖（jQuery、DataTables、Plotly）正常加载
2. 检查Jekyll变量（如 `{{ site.baseurl }}`）在生产环境中的正确性
3. 测试所有交互功能是否正常工作
4. 验证数据加载和渲染是否正确

## 后续维护

1. **添加新数据**: 只需更新对应的JSON文件
2. **修改样式**: 只需修改CSS文件
3. **添加功能**: 在JavaScript文件中添加新函数
4. **性能优化**: 可以进一步拆分数据文件或实现懒加载

这种重构方式大大提高了代码的可维护性和可扩展性，为后续的开发和维护提供了良好的基础。 