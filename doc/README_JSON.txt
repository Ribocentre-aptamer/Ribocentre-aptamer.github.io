# 无3D模型适配体表格数据 - JSON文件说明

## 文件概述

`aptamer_no_3d_table.json` 包含了从riboaptamer.md文件中提取的无3D结构适配体表格数据。

## 数据统计

- **总项目数**: 127个适配体
- **表格类型**: table2 (无3D模型的适配体)
- **数据分布**: 15行，前14行每行9个项目，第15行1个项目
- **背景色种类**: 15种不同颜色

## JSON结构

```json
{
  "description": "无3D模型的适配体表格数据",
  "table_class": "table2",
  "total_items": 127,
  "data": [
    {
      "name": "适配体名称",
      "link": "https://aptamer.ribocentre.org/_posts/...",
      "background_color": "#颜色代码",
      "position": {
        "row": 行号,
        "column": 列号
      }
    }
  ]
}
```

## 字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | string | 适配体的显示名称 |
| `link` | string | 适配体详情页面的URL链接 |
| `background_color` | string | 单元格的背景颜色（十六进制） |
| `position.row` | integer | 在表格中的行位置（1-15） |
| `position.column` | integer | 在表格中的列位置（1-9） |

## 背景色分布

| 颜色代码 | 项目数 | 颜色描述 |
|----------|--------|----------|
| #FFA07A | 4 | 浅橙色 |
| #385dbf | 3 | 深蓝色 |
| #f0a570 | 3 | 橙色 |
| #d75369 | 54 | 深红色（最多） |
| #3c58a5 | 5 | 蓝色 |
| #14a0ec | 6 | 亮蓝色 |
| #e97e8d | 9 | 粉红色 |
| #ade48b | 23 | 浅绿色（第二多） |
| #9841da | 3 | 紫色 |
| #ab233a | 1 | 深红色 |
| #2a5c76 | 3 | 深蓝绿色 |
| #6ed9cd | 3 | 青色 |
| #396120 | 2 | 深绿色 |
| #77c670 | 2 | 绿色 |
| #bf97d1 | 6 | 浅紫色 |

## 重复项目说明

### 重复名称
- **Amyloid beta-peptide**: 出现2次，对应不同的适配体（β55-aptamer 和 E2-aptamer）

### 重复链接
- **B4-25-aptamer**: 对应2个不同的化合物（Reactive Blue 4 和 Cibacron Blue 3GA）

这些重复都是合理的，反映了实际的生物学关系。

## 使用示例

### Python示例

```python
import json

# 读取数据
with open('aptamer_no_3d_table.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 按背景色筛选
red_aptamers = [item for item in data['data'] if item['background_color'] == '#d75369']
print(f"红色背景的适配体数量: {len(red_aptamers)}")

# 按位置筛选（第一行）
first_row = [item for item in data['data'] if item['position']['row'] == 1]
print(f"第一行的适配体: {[item['name'] for item in first_row]}")

# 查找特定名称
target_name = "Dopamine"
dopamine_aptamer = next((item for item in data['data'] if item['name'] == target_name), None)
if dopamine_aptamer:
    print(f"多巴胺适配体链接: {dopamine_aptamer['link']}")
```

### JavaScript示例

```javascript
// 假设数据已加载到data变量中
const data = /* JSON数据 */;

// 按颜色分组
const colorGroups = data.data.reduce((groups, item) => {
    const color = item.background_color;
    if (!groups[color]) groups[color] = [];
    groups[color].push(item);
    return groups;
}, {});

// 获取最常见的颜色
const mostCommonColor = Object.keys(colorGroups)
    .sort((a, b) => colorGroups[b].length - colorGroups[a].length)[0];

console.log(`最常见的背景色: ${mostCommonColor}`);
console.log(`该颜色下的适配体数量: ${colorGroups[mostCommonColor].length}`);
```

## 文件生成信息

- **生成时间**: 基于riboaptamer.md文件
- **提取脚本**: extract_table_data.py
- **验证脚本**: verify_extracted_data.py
- **重复检查**: check_duplicates.py

## 注意事项

1. 链接都指向 `https://aptamer.ribocentre.org/_posts/` 路径
2. 部分链接包含URL编码字符（如 %CE%B2）
3. 背景颜色与原始CSS样式表保持一致
4. 位置信息基于表格的行列坐标（从1开始计数） 