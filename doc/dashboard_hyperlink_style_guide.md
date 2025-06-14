# Dashboard超链接样式使用指南

## 简介

本文档详细介绍了Ribocentre-aptamer网站中Dashboard数据详情表专用超链接样式的使用方法。这套样式专为数据表格设计，提供了统一、优雅的超链接视觉效果，特别适用于各种dashboard页面的表格数据展示。

## 样式特点

### 视觉特性
- **主题色**: 使用网站主题紫色 `#520049`
- **过渡效果**: 平滑的颜色和背景过渡动画
- **交互反馈**: 悬停时提供明显的视觉反馈
- **响应式**: 适配不同屏幕尺寸和设备

### 设计原则
- **一致性**: 所有dashboard页面使用统一的超链接样式
- **可访问性**: 符合网页可访问性标准，提供良好的对比度
- **用户体验**: 清晰的交互状态，帮助用户理解可点击元素

## 完整CSS样式代码

```css
/* ====== Dashboard数据详情表专用超链接样式 ====== */

/* 通用数据详情表超链接样式 - 适用于所有dashboard页面 */
.data-table-section .table a {
    color: #520049 !important;
    text-decoration: none !important;
    font-weight: 600;
    transition: all 0.2s ease;
}

.data-table-section .table a:hover {
    color: #7a0070 !important;
    text-decoration: underline !important;
    background-color: rgba(82, 0, 73, 0.1);
    padding: 2px 4px;
    border-radius: 3px;
}

.data-table-section .table a:visited {
    color: #520049 !important;
}

.data-table-section .table a:active {
    color: #520049 !important;
    background-color: rgba(82, 0, 73, 0.2);
}

/* Aptamer name列专用样式（第2列） - 适用于所有dashboard页面 */
.data-table-section .table td:nth-child(2) a {
    color: #520049 !important;
    font-weight: 700 !important;
}

.data-table-section .table td:nth-child(2) a:hover {
    color: #7a0070 !important;
    text-shadow: 0 1px 2px rgba(82, 0, 73, 0.3);
}
```

## 使用方法

### 1. 基本使用方式

#### HTML结构要求
```html
<section class="data-table-section">
    <div class="table-container">
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>名称</th>
                        <th>配体</th>
                        <th>年份</th>
                        <!-- 更多列... -->
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="link-url" target="_blank">Aptamer名称</a></td>
                        <td>配体名称</td>
                        <td><a href="pubmed-url" target="_blank">2023</a></td>
                        <!-- 更多数据... -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

#### 关键CSS类名
- `.data-table-section`: 必须的外层容器类名
- `.table`: Bootstrap表格类名
- 超链接直接使用 `<a>` 标签即可自动应用样式

### 2. JavaScript动态生成使用

#### 在表格中添加超链接
```javascript
// 方法1: innerHTML方式
const nameCell = document.createElement('td');
if (item.Linker && item.Linker.trim() !== '' && item.Linker !== 'null') {
    nameCell.innerHTML = `<a href="${item.Linker}" target="_blank">${item['Article name'] || ''}</a>`;
} else {
    nameCell.textContent = item['Article name'] || '';
}

// 方法2: 创建DOM元素方式
const yearCell = document.createElement('td');
if (item['Link to PubMed Entry'] && item['Link to PubMed Entry'].trim() !== '') {
    const yearLink = document.createElement('a');
    yearLink.href = item['Link to PubMed Entry'];
    yearLink.target = '_blank';
    yearLink.textContent = item.Year || '';
    yearCell.appendChild(yearLink);
} else {
    yearCell.textContent = item.Year || '';
}
```

### 3. 样式自定义

#### 颜色自定义
```css
/* 自定义主题色 */
.data-table-section .table a {
    color: #your-color !important;
}

.data-table-section .table a:hover {
    color: #your-hover-color !important;
    background-color: rgba(your-rgb-values, 0.1);
}
```

#### 字体权重自定义
```css
/* 调整字体粗细 */
.data-table-section .table a {
    font-weight: 500; /* 或 normal, bold, 700 等 */
}
```

## 现有使用例子

### 1. 主页Dashboard表格
**文件位置**: `index.html`

**应用场景**: 主页数据统计表格中的年份链接到PubMed

```javascript
// 在js/dashboard-main.js第1224行附近
let yearHTML = `${item.Year || ''}`;
if (item['Link to PubMed Entry'] && item['Link to PubMed Entry'].trim() !== '' && item['Link to PubMed Entry'] !== 'null') {
    yearHTML = `<a href="${item['Link to PubMed Entry']}" target="_blank">${item.Year || ''}</a>`;
}
yearCell.innerHTML = yearHTML;
```

**效果**: 年份显示为可点击的紫色链接，点击后在新窗口打开PubMed页面

### 2. 荧光分子页面表格
**文件位置**: `_pages/fluorescence.html`

**应用场景**: 荧光分子数据表格中的分子名称链接

```html
<!-- 在HTML结构中 -->
<section class="data-table-section">
    <div class="chart-header">
        <h4 class="chart-title">荧光分子详情表</h4>
    </div>
    <div class="table-container">
        <div class="table-responsive">
            <table id="fluorTable" class="table table-striped table-hover">
                <!-- 表格内容 -->
            </table>
        </div>
    </div>
</section>
```

### 3. 适配体重构页面
**文件位置**: `_pages/riboaptamer-refactored.html`

**应用场景**: 适配体数据表格中的名称和年份链接

```javascript
// 在js/dashboard-aptamer.js第164行附近
// Aptamer名称链接
let nameHTML = item['Article name'] || '';
if (item.Linker && item.Linker.trim() !== '' && item.Linker !== 'null') {
    nameHTML = `<a href="${item.Linker}" target="_blank">${item['Article name'] || ''}</a>`;
}
nameCell.innerHTML = nameHTML;

// 年份PubMed链接
let yearHTML = `${item.Year || ''}`;
if (item['Link to PubMed Entry'] && item['Link to PubMed Entry'].trim() !== '' && item['Link to PubMed Entry'] !== 'null') {
    yearHTML = `<a href="${item['Link to PubMed Entry']}" target="_blank">${item.Year || ''}</a>`;
}
yearCell.innerHTML = yearHTML;
```

## 最佳实践

### 1. 链接验证
```javascript
// 总是验证链接的有效性
if (item.linkField && item.linkField.trim() !== '' && item.linkField !== 'null') {
    // 创建链接
} else {
    // 显示纯文本
}
```

### 2. 目标窗口设置
```html
<!-- 外部链接总是在新窗口打开 -->
<a href="external-url" target="_blank">链接文本</a>

<!-- 内部链接可以在当前窗口打开 -->
<a href="internal-url">链接文本</a>
```

### 3. 内容截断处理
```javascript
// 对于长链接文本，适当截断但保留完整信息
const displayText = fullText.length > 20 
    ? fullText.substring(0, 20) + '...' 
    : fullText;

// 使用tooltip显示完整信息
addTooltip(linkElement, fullText);
```

### 4. 无障碍访问
```html
<!-- 为链接添加描述性属性 -->
<a href="pubmed-url" target="_blank" title="在PubMed中查看完整文献信息">
    2023
</a>
```

## 兼容性注意事项

### 1. CSS权重
- 使用 `!important` 确保样式优先级
- 避免与其他全局样式冲突

### 2. 浏览器兼容性
- `transition`: 支持所有现代浏览器
- `rgba()`: IE9+支持
- `border-radius`: IE9+支持

### 3. 响应式设计
- 样式在移动设备上表现良好
- 触摸设备上的悬停效果会保持到下次点击

## 故障排除

### 1. 样式不生效
- 检查是否包含了 `.data-table-section` 容器类
- 确认CSS文件正确加载
- 检查CSS权重是否被其他样式覆盖

### 2. 链接不可点击
- 检查HTML结构是否正确
- 确认链接URL格式正确
- 检查是否有其他元素遮挡

### 3. 样式显示异常
- 检查浏览器控制台是否有CSS错误
- 确认颜色值格式正确
- 检查伪类选择器是否正确

## 扩展建议

### 1. 添加图标
```css
.data-table-section .table a[target="_blank"]::after {
    content: " 🔗";
    font-size: 0.8em;
    opacity: 0.6;
}
```

### 2. 添加动画效果
```css
.data-table-section .table a {
    position: relative;
    overflow: hidden;
}

.data-table-section .table a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(82, 0, 73, 0.1), transparent);
    transition: left 0.5s;
}

.data-table-section .table a:hover::before {
    left: 100%;
}
```

### 3. 不同类型链接的区分
```css
/* PubMed链接样式 */
.data-table-section .table a[href*="pubmed"] {
    color: #0066cc !important;
}

/* 内部页面链接样式 */
.data-table-section .table a[href^="/"] {
    color: #520049 !important;
}
```

## 更新日志

- **v1.0** (2024): 初始版本，基本超链接样式
- **v1.1** (2024): 添加特殊列样式支持
- **v1.2** (2024): 优化悬停效果和过渡动画

## 联系与支持

如果您在使用过程中遇到问题或有改进建议，请：
1. 检查本文档的故障排除部分
2. 查看浏览器开发者工具中的错误信息
3. 联系开发团队进行技术支持

---

**注意**: 本样式系统专为dashboard表格设计，请勿在其他页面元素中使用，以避免样式冲突。 