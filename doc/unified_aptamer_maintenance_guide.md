# 统一适配体表格维护指南

## 概述

新的统一适配体表格系统同时支持**有3D结构**和**无3D结构**两种类型的适配体表格，采用相同的JSON数据驱动架构，提供一致的维护体验。

## 系统架构

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

_pages/
└── riboaptamer-refactored.html      # 重构后的页面
```

### 数据库统计

- **有3D结构适配体**: 53个，8个分类
- **无3D结构适配体**: 127个，7个分类
- **总计**: 180个适配体

## 分类系统对比

### 有3D结构适配体分类

| 分类 | 英文名称 | 描述 | 主要颜色 | 数量 |
|------|----------|------|----------|------|
| 荧光适配体 | Fluorescent Aptamers | 以植物命名的荧光RNA | #FF6B6B | 13 |
| 小分子化合物 | Small Molecules | 维生素、ATP等小分子 | #45B7D1 | 11 |
| 抗生素 | Antibiotics | 各种抗生素类化合物 | #FFEAA7 | 7 |
| 蛋白质 | Proteins | 各种蛋白质 | #96CEB4 | 13 |
| 转录因子 | Transcription Factors | 转录相关蛋白 | #DDA0DD | 1 |
| 病毒与核酸 | Viral & Nucleic Acids | 病毒蛋白和核酸 | #DDA0DD | 5 |
| 朊病毒 | Prions | 朊病毒蛋白 | #DDA0DD | 1 |
| 其他 | Others | 未分类项目 | #808080 | 2 |

### 无3D结构适配体分类

| 分类 | 英文名称 | 描述 | 主要颜色 | 数量 |
|------|----------|------|----------|------|
| 小分子化合物 | Small Molecules | 荧光素、多巴胺等 | #385dbf | 17 |
| 蛋白质 | Proteins | 各种蛋白质和酶 | #d75369 | 70 |
| 病毒 | Viruses | HIV、HCV等病毒相关 | #ade48b | 23 |
| 核酸 | Nucleic Acids | RNA、DNA等核酸 | #6ed9cd | 3 |
| 细胞与癌症 | Cells & Cancer | 细胞和癌症相关 | #bf97d1 | 6 |
| 其他化合物 | Other Compounds | 特殊化合物 | #2a5c76 | 4 |
| 其他 | Others | 未分类项目 | #FFA07A | 4 |

## 统一管理命令

### 基本操作

```bash
# 显示所有统计信息
python scripts/manage_aptamers.py stats

# 验证所有数据
python scripts/manage_aptamers.py validate
```

### 有3D结构适配体管理

```bash
# 添加有3D结构的适配体
python scripts/manage_aptamers.py add-3d "新适配体名称" "链接" "分类"

# 更新有3D结构的适配体
python scripts/manage_aptamers.py update-3d "旧名称" --name "新名称" --category "新分类"

# 列出所有有3D结构的适配体
python scripts/manage_aptamers.py list-3d

# 按分类列出有3D结构的适配体
python scripts/manage_aptamers.py list-3d --category "Fluorescent Aptamers"

# 查看有3D结构适配体的分类
python scripts/manage_aptamers.py categories-3d
```

### 无3D结构适配体管理

```bash
# 添加无3D结构的适配体
python scripts/manage_aptamers.py add-no3d "新适配体名称" "链接" "分类"

# 更新无3D结构的适配体
python scripts/manage_aptamers.py update-no3d "旧名称" --name "新名称" --category "新分类"

# 列出所有无3D结构的适配体
python scripts/manage_aptamers.py list-no3d

# 按分类列出无3D结构的适配体
python scripts/manage_aptamers.py list-no3d --category "Proteins"

# 查看无3D结构适配体的分类
python scripts/manage_aptamers.py categories-no3d
```

## 添加新适配体示例

### 添加有3D结构的荧光适配体

```bash
# 1. 查看可用分类
python scripts/manage_aptamers.py categories-3d

# 2. 添加新的荧光适配体
python scripts/manage_aptamers.py add-3d "Orange" "https://aptamer.ribocentre.org/_posts/Orange-aptamer" "Fluorescent Aptamers"

# 3. 验证添加结果
python scripts/manage_aptamers.py list-3d --category "Fluorescent Aptamers"
```

### 添加无3D结构的蛋白质适配体

```bash
# 1. 查看可用分类
python scripts/manage_aptamers.py categories-no3d

# 2. 添加新的蛋白质适配体
python scripts/manage_aptamers.py add-no3d "新蛋白质" "https://aptamer.ribocentre.org/_posts/new-protein-aptamer" "Proteins"

# 3. 验证添加结果  
python scripts/manage_aptamers.py list-no3d --category "Proteins"
```

## 网页展示

### 页面结构

重构后的页面同时显示两个表格：

1. **有3D结构的适配体表格** - 显示在上方
2. **无3D结构的适配体表格** - 显示在下方

### 表格特性

- **统一样式**: 两个表格使用相同的视觉设计
- **分类颜色**: 每个表格有独立的分类颜色方案
- **响应式**: 完美适配移动端
- **交互功能**: 悬停提示、点击跳转
- **动态加载**: 基于JSON数据实时生成

### JavaScript架构

```javascript
// 多表格管理器
multiTableManager = new MultiAptamerTableManager();

// 创建有3D结构表格
aptamer3DTableGenerator = multiTableManager.createTable('aptamer3DTableContainer', '3d');

// 创建无3D结构表格  
aptamerTableGenerator = multiTableManager.createTable('aptamerTableContainer', 'no3d');

// 加载所有表格
multiTableManager.loadAllTables();
```

## 数据维护最佳实践

### 1. 分类选择指南

#### 有3D结构适配体
- **Fluorescent Aptamers**: Mango、Spinach等以植物/颜色命名的荧光RNA
- **Small Molecules**: ATP、FMN、Biotin等小分子化合物
- **Antibiotics**: Tetracycline、Neomycin等抗生素
- **Proteins**: Thrombin、Lysozyme等蛋白质
- **Viral & Nucleic Acids**: HIV相关蛋白、TAR RNA等

#### 无3D结构适配体
- **Small Molecules**: 小分子化合物和荧光素
- **Proteins**: 各种蛋白质（数量最多）
- **Viruses**: HIV、HCV等病毒相关
- **Cells & Cancer**: 细胞和癌症相关

### 2. 命名规范

- **一致性**: 使用标准的生物学名称
- **简洁性**: 避免过长的名称
- **准确性**: 确保名称与实际适配体匹配

### 3. 链接规范

- **格式**: `https://aptamer.ribocentre.org/_posts/适配体名称-aptamer`
- **验证**: 确保链接可访问
- **一致性**: 保持URL格式统一

### 4. 工作流程

```bash
# 日常维护流程
1. python scripts/manage_aptamers.py stats          # 查看当前状态
2. python scripts/manage_aptamers.py add-3d/no3d   # 添加新适配体
3. python scripts/manage_aptamers.py validate      # 验证数据完整性
4. 浏览器测试页面显示效果                          # 人工验证
```

## 故障排除

### 常见问题

1. **表格不显示**
   - 检查JSON文件语法
   - 验证文件路径
   - 查看浏览器控制台错误

2. **分类错误**
   - 使用 `categories-3d` 或 `categories-no3d` 查看可用分类
   - 检查分类名称拼写

3. **颜色显示问题**
   - 验证分类配置
   - 检查CSS样式是否加载

### 调试命令

```bash
# 验证特定类型数据
python scripts/manage_aptamers.py validate

# 查看详细信息
python scripts/manage_aptamers.py list-3d
python scripts/manage_aptamers.py list-no3d

# 检查分类配置
python scripts/manage_aptamers.py categories-3d
python scripts/manage_aptamers.py categories-no3d
```

### 浏览器调试

```javascript
// 在浏览器控制台中检查
console.log(multiTableManager.getAllStats());
console.log(aptamer3DTableGenerator.getCategoryStats());
console.log(aptamerTableGenerator.getCategoryStats());
```

## 系统优势

### 统一架构
- **一致的数据格式**: 两种表格使用相同的JSON结构
- **统一的管理工具**: 一个脚本管理所有类型
- **相同的维护流程**: 降低学习成本

### 高效维护
- **命令行操作**: 30秒完成添加/更新
- **自动验证**: 实时检查数据完整性  
- **智能分类**: 自动颜色分配和排序

### 可扩展性
- **新分类支持**: 轻松添加新的分类
- **多表格管理**: 支持更多表格类型
- **模块化设计**: 便于功能扩展

## 版本历史

- **v2.1.0**: 统一有3D和无3D结构适配体表格系统
- **v2.0.0**: 重构无3D结构适配体表格为JSON驱动
- **v1.0.0**: 原始静态表格实现

## 技术支持

如有问题或建议，请：
1. 查看本维护指南
2. 运行 `validate` 命令检查数据
3. 联系开发团队或创建issue

---

🎉 **统一适配体表格系统 - 让维护变得简单高效！** 🎉 