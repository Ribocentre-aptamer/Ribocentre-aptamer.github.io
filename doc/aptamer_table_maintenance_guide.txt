# 适配体表格维护指南

## 概述

新的适配体表格系统基于JSON数据驱动，支持动态生成和灵活配置。维护者只需要在JSON文件中添加或修改数据，即可自动更新网页上的表格显示。

## 文件结构

```
apidata/
├── aptamer_no_3d_enhanced.json    # 主要数据文件
├── table_config.json             # 表格配置文件
└── aptamer_no_3d_table.json      # 原始数据（备份）

js/
└── aptamer-table-generator.js    # 表格生成器

_pages/
└── riboaptamer-refactored.html   # 重构后的页面
```

## 添加新适配体

### 步骤1：准备数据

新适配体需要包含以下信息：
- `name`: 适配体名称
- `link`: 详情页面链接
- `category`: 分类（必须是现有分类之一）

### 步骤2：确定分类

当前支持的分类：

| 分类 | 英文名称 | 描述 | 主要颜色 |
|------|----------|------|----------|
| 小分子化合物 | Small Molecules | 包括荧光素、多巴胺等 | #385dbf |
| 蛋白质 | Proteins | 各种蛋白质和酶 | #d75369 |
| 病毒 | Viruses | HIV、HCV等病毒相关 | #ade48b |
| 核酸 | Nucleic Acids | RNA、DNA等核酸 | #6ed9cd |
| 细胞与癌症 | Cells & Cancer | 细胞和癌症相关 | #bf97d1 |
| 其他化合物 | Other Compounds | 特殊化合物 | #2a5c76 |
| 其他 | Others | 未分类项目 | #FFA07A |

### 步骤3：编辑JSON文件

打开 `apidata/aptamer_no_3d_enhanced.json`，在 `data` 数组中添加新项目：

```json
{
  "name": "新适配体名称",
  "link": "https://aptamer.ribocentre.org/_posts/新适配体-aptamer",
  "background_color": "#适当的颜色代码",
  "position": {
    "row": 自动计算,
    "column": 自动计算
  },
  "category": "适当的分类",
  "category_info": {
    "name": "分类名称",
    "primary_color": "主要颜色",
    "description": "分类描述"
  }
}
```

### 步骤4：自动化添加（推荐）

使用提供的脚本自动添加新适配体：

```python
# add_new_aptamer.py
import json

def add_new_aptamer(name, link, category):
    # 读取现有数据
    with open('apidata/aptamer_no_3d_enhanced.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 获取分类配置
    category_config = data['category_config'][category]
    
    # 创建新适配体数据
    new_aptamer = {
        "name": name,
        "link": link,
        "background_color": category_config['primary_color'],
        "position": {"row": 0, "column": 0},  # 将自动重新计算
        "category": category,
        "category_info": {
            "name": category,
            "primary_color": category_config['primary_color'],
            "description": category_config['description']
        }
    }
    
    # 添加到数据中
    data['data'].append(new_aptamer)
    data['metadata']['total_items'] += 1
    
    # 重新排序和分配位置
    reposition_aptamers(data)
    
    # 保存文件
    with open('apidata/aptamer_no_3d_enhanced.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ 成功添加适配体: {name}")

# 使用示例
add_new_aptamer("新适配体", "https://aptamer.ribocentre.org/_posts/new-aptamer", "Proteins")
```

## 修改现有适配体

### 更新名称或链接

```python
def update_aptamer(old_name, new_name=None, new_link=None, new_category=None):
    with open('apidata/aptamer_no_3d_enhanced.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # 查找并更新适配体
    for item in data['data']:
        if item['name'] == old_name:
            if new_name:
                item['name'] = new_name
            if new_link:
                item['link'] = new_link
            if new_category:
                item['category'] = new_category
                # 更新分类信息
                category_config = data['category_config'][new_category]
                item['category_info'] = {
                    "name": new_category,
                    "primary_color": category_config['primary_color'],
                    "description": category_config['description']
                }
                item['background_color'] = category_config['primary_color']
            break
    
    # 保存文件
    with open('apidata/aptamer_no_3d_enhanced.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
```

## 添加新分类

### 步骤1：更新分类配置

在 `category_config` 中添加新分类：

```json
"新分类": {
  "primary_color": "#新颜色代码",
  "colors": ["#颜色1", "#颜色2"],
  "description": "分类描述"
}
```

### 步骤2：更新颜色映射

确保新分类的颜色不与现有分类冲突。

### 步骤3：测试显示效果

在浏览器中测试新分类的显示效果，确保颜色对比度和可读性良好。

## 表格配置

### 布局配置

在 `apidata/table_config.json` 中调整表格布局：

```json
{
  "layout": {
    "columns_per_row": 9,        // 每行列数
    "auto_layout": true,         // 自动布局
    "responsive": true           // 响应式设计
  },
  "styling": {
    "cell_padding": "8px",       // 单元格内边距
    "border_radius": "4px",      // 圆角半径
    "hover_effect": true,        // 悬停效果
    "transition": "all 0.3s ease" // 过渡动画
  },
  "interactions": {
    "clickable": true,           // 可点击
    "tooltip": true,             // 显示提示
    "new_tab": true              // 新标签页打开
  }
}
```

## 验证和测试

### 数据验证

使用验证脚本检查数据完整性：

```bash
python verify_enhanced_data.py
```

### 本地测试

1. 启动本地服务器
2. 访问页面
3. 检查表格显示
4. 测试交互功能

### 检查列表

- [ ] 新适配体是否正确显示
- [ ] 分类颜色是否正确
- [ ] 链接是否可用
- [ ] 悬停提示是否正常
- [ ] 响应式布局是否正常
- [ ] 统计信息是否更新

## 故障排除

### 常见问题

1. **表格不显示**
   - 检查JSON文件语法
   - 检查JavaScript控制台错误
   - 验证文件路径

2. **颜色显示错误**
   - 检查颜色代码格式
   - 验证分类配置

3. **链接无效**
   - 检查URL格式
   - 验证文件存在

4. **分类不正确**
   - 检查分类名称拼写
   - 验证分类配置存在

### 调试命令

```javascript
// 浏览器控制台中检查表格状态
console.log(aptamerTableGenerator.getCategoryStats());
console.log(aptamerTableGenerator.data);
```

## 最佳实践

1. **数据一致性**
   - 始终使用相同的分类名称
   - 保持链接格式一致
   - 定期验证数据完整性

2. **性能优化**
   - 避免过大的JSON文件
   - 使用适当的图片大小
   - 优化JavaScript执行

3. **用户体验**
   - 确保颜色对比度足够
   - 提供有意义的悬停提示
   - 保持界面响应迅速

4. **维护流程**
   - 定期备份数据文件
   - 记录重要变更
   - 测试新功能

## 版本历史

- **v2.0.0**: 重构为基于JSON的动态系统
- **v1.0.0**: 原始静态表格实现

## 联系支持

如有问题或建议，请联系开发团队或在项目仓库中创建issue。 