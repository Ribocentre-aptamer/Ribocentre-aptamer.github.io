# 荧光页面(Fluorescence)开发与优化文档

## 项目概述

本文档详细记录了对Ribocentre-aptamer网站中荧光页面(Fluorescence)的开发与优化过程，包括数据仪表盘(Dashboard)的实现、表格展示、参考文献格式化以及现代化排版等方面的改进。通过模块化设计，确保了代码的可维护性和可复用性。

## 需求列表

1. **数据仪表盘(Dashboard)分离**
   - 实现荧光页面专用的dashboard，使用荧光数据JSON
   - 确保与首页(index)的dashboard互不干扰

2. **表格数据展示优化**
   - 优化荧光分子表格的样式和内容展示
   - 实现分子式下标、单位标准化等科学展示需求

3. **参考文献标准化**
   - 统一参考文献的格式，与Theophylline-aptamer页面保持一致
   - 解决列表编号重复问题

4. **现代化排版**
   - 实现单词前三个字母强调效果，帮助非母语读者阅读
   - 添加首字母加粗、小标题样式美化等视觉增强

## 新创建的文件

### 1. `js/dashboard-fluor.js`
**目的**：为荧光页面提供专用的Dashboard功能补丁，确保与首页互不干扰。
**主要功能**：
- 重写`DataModule.loadData`，映射`mechanisms`字段为`category`
- 覆写`ChartModule.createAllCharts`，移除散点图相关代码
- 覆写`FilterModule.updateNodeStateIndicators`，解决缺失DOM节点的问题
- 修正GC含量百分比的计算与显示

### 2. `js/fluor-article.js`
**目的**：处理荧光页面的表格数据和参考文献，实现文本排版增强。
**主要功能**：
- 从JSON加载表格数据，实现分子式下标转换
- 格式化参考文献，保持统一的样式
- 通过DOM操作强调单词前三个字母
- 美化小标题样式
- 使用MutationObserver确保样式应用到新内容

### 3. `css/article-common.css`
**目的**：提供可复用的文章样式，用于多个页面。
**主要功能**：
- 定义基础排版、标题样式
- 提供文本强调、序列样式等通用组件
- 优化表格展示，确保自适应不同屏幕
- 定义参考文献格式，移除自动编号

## 实现要点

### Dashboard模块化实现
```javascript
// 在dashboard-fluor.js中
DataModule.loadData = async function () {
  // ... 加载数据代码
  // 关键步骤：映射mechanisms为category以复用饼图逻辑
  data.forEach(item => {
    item.category = item.mechanisms;
  });
};
```

### 表格数据优化
```javascript
// 在fluor-article.js中
// 将分子式转换为HTML，把数字转换为下标
function formatChemicalFormula(formula) {
  return formula.replace(/([A-Z][a-z]*)(\d+)/g, '$1<sub>$2</sub>');
}
```

### 参考文献格式化
```javascript
// 在fluor-article.js中
// 创建标准格式的参考文献
const titleHtml = `<font><strong>[${index + 1}] ${ref.title}</strong></font><br />`;
// ... 组装作者、期刊等信息
```

### 文本强调实现
```javascript
// 在fluor-article.js中
// 直接操作DOM实现单词前三字母强调
const prefixSpan = document.createElement('span');
prefixSpan.style.fontWeight = '600';
prefixSpan.style.color = '#520049';
prefixSpan.textContent = word.substring(0, 3);
```

## 数据格式示例

### 1. 荧光分子表格数据 (fluorescence_article.json)
```json
[
  {
    "Fluorescent molecule": "DFHBI",
    "UPAC": "(5Z)-5-[(3,5-difluoro-4-hydroxyphenyl)methylidene]-2,3-dimethylimidazol-4-one",
    "Molecular Formula": "C12H10F2N2O2",
    "Molar mass": "252.22 g/mol",
    "CAS": "1241390-29-3",
    "Excitation (nm)": 469,
    "Emission (nm)": 501,
    "Aptamer": "Spinach",
    "Fluorogenic mechanisms": "TICT"
  },
  // 更多数据条目...
]
```

### 2. 参考文献数据 (fluorescence_reference.json)
```json
[
  {
    "id": 1,
    "authors": [
      "Pédelacq, J. D.",
      "Cabantous, S.",
      "Tran, T.",
      "Terwilliger, T. C.",
      "Waldo, G. S."
    ],
    "year": 2006,
    "title": "Engineering and characterization of a superfolder green fluorescent protein",
    "journal": "Nature Biotechnology",
    "volume": "24",
    "issue": "1",
    "pages": "79-88",
    "url": "https://pubmed.ncbi.nlm.nih.gov/16369541/"
  },
  // 更多参考文献...
]
```

## 解决的主要问题

### 1. 样式冲突问题
**问题**：外部样式覆盖我们的自定义样式，导致效果不显示
**解决方案**：
- 使用内联样式(style属性)设置关键样式，确保最高优先级
- 添加!important标记强制应用重要样式
- 在HTML中添加行内样式作为最后保障

### 2. 动态内容处理
**问题**：动态加载的内容没有应用我们的样式
**解决方案**：
- 使用MutationObserver监控DOM变化
- 在multiple事件点(DOMContentLoaded, load)尝试应用样式
- 设置延时执行确保DOM完全渲染

### 3. 参考文献编号重复
**问题**：ol列表自带编号与手动添加的编号[1]重复
**解决方案**：
- 使用CSS移除列表自动编号
- 在HTML元素上添加`list-style-type: none`
- 通过JavaScript动态设置`listStyleType = 'none'`

### 4. 表格展示问题
**问题**：表格显示不美观，空间利用不合理
**解决方案**：
- 优化表格容器，添加自适应滚动
- 设置单元格内容居中，统一布局
- 调整表头样式，确保良好的视觉层次

## 使用指南

### 添加新页面
要将相同的功能应用到新页面，请按照以下步骤操作：

1. 在HTML头部引入CSS:
```html
<link rel="stylesheet" href="/css/article-common.css">
```

2. 在页面底部引入JS:
```html
<script src="{{ site.baseurl }}/js/fluor-article.js"></script>
```

3. 创建内容区块:
```html
<section class="fluor-body-section">
  <!-- 内容放这里 -->
</section>
```

### 数据更新
1. 表格数据在`apidata/fluorescence_article.json`
2. 参考文献在`apidata/fluorescence_reference.json`
3. 更新数据时保持JSON格式一致即可自动应用样式

## 最佳实践与注意事项

1. **CSS优先级**：涉及样式覆盖时，考虑使用内联样式或!important
2. **JSON数据格式**：保持键名一致，避免修改现有字段名
3. **代码模块化**：新功能应考虑添加到适当的js文件中，保持关注点分离
4. **样式复用**：尽量使用article-common.css中定义的样式类
5. **兼容性**：新添加的JS功能应考虑兼容主流浏览器

## 未来改进方向

1. 进一步优化移动端适配
2. 添加更多数据可视化组件
3. 完善文档并添加更多代码示例
4. 考虑添加更多交互式元素，如工具提示和弹出框

---