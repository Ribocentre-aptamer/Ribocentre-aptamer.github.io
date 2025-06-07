# 如何应用样式到其他aptamer页面

## 快速应用指南

要将这套样式应用到其他aptamer页面，只需按照以下步骤操作：

1. 在Markdown文件的front matter中使用`aptamer_page`布局：

```yaml
---
layout: aptamer_page
title: "页面标题"
date: YYYY-MM-DD 00:00:00
author: 作者名
categories: Aptamer
---
```

2. 使用预定义的HTML结构组织内容：

```html
<div class="content-section">
  <h2 class="section-title" id="section-id">Section Title</h2>
  <!-- 内容 -->
</div>
```

## 详细说明

### 文件结构

我们创建了以下文件来实现样式的模块化：

- `_includes/custom_styles/aptamer_styles.html` - 包含所有CSS样式
- `_includes/custom_styles/aptamer_navigation.html` - 包含导航元素和JavaScript
- `_layouts/aptamer_page.html` - 专用布局文件

### 内容结构

页面内容应使用以下结构组织：

1. **时间线部分**

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
    <!-- 更多时间线条目 -->
  </div>
</div>
```

2. **描述部分**

```html
<div class="content-section">
  <h2 class="section-title" id="description">Description</h2>
  <p>描述内容，可以使用 <span class="highlight-text">高亮文本</span> 强调关键词。</p>
</div>
```

3. **小标题使用**

```html
<div class="blowheader_box">小标题</div>
```

4. **序列显示**

```html
<div class="sequence">5'-GGCAUACCAGCCGAAAGGCCCUUGGCAGCGUC-3'</div>
```

5. **表格**

```html
<table class="table">
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
    </tr>
  </tbody>
</table>
```

6. **信息框**

```html
<div class="info-box">
  <p>信息内容</p>
</div>
```

7. **参考文献**

```html
<div class="content-section">
  <h2 class="section-title" id="references">References</h2>
  <a id="ref1"></a><font><strong>[1] 文章标题.</strong></font><br />
  作者列表<br />
  <a href="链接" target="_blank" style="color:#520049">期刊信息</a>
  <br />
  <!-- 更多参考文献 -->
</div>
```

### 导航结构

导航菜单现在会自动根据页面中的一级标题生成。系统会自动识别以下元素作为导航项：

1. 带有id属性的`.header_box`元素
2. 带有id属性的`h2`标题
3. 带有id属性的`.section-title`元素

例如，对于具有以下结构的页面：

```html
<p class="header_box" id="description">Description</p>
<p class="header_box" id="SELEX">SELEX</p>
<h2 class="section-title" id="Structure">Structure</h2>
<p class="header_box" id="ligand-recognition">Ligand information</p>
<h2 class="section-title" id="references">References</h2>
```

系统将自动生成包含这5个导航项的导航菜单。

### 自定义导航

如果您希望手动设置导航项而不使用自动生成，可以在页面开头添加以下脚本：

```html
<!-- 在页面内容的最前面添加 -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 等待导航加载完成
    setTimeout(function() {
      const navItemsContainer = document.getElementById('navItems');
      if (navItemsContainer) {
        navItemsContainer.innerHTML = `
          <li class="side-nav-item"><a href="#custom-section1">自定义项1</a></li>
          <li class="side-nav-item"><a href="#custom-section2">自定义项2</a></li>
          <!-- 更多自定义导航项 -->
        `;
      }
    }, 200);
  });
</script>
```

## 注意事项

1. 确保每个主要部分都有唯一的ID，这样导航才能正常工作
2. 所有样式和脚本都是通过布局文件自动包含的，无需手动添加
3. 图片应使用相对路径引用，例如 `/images/your-image.svg`

## 故障排除

如果样式没有正确应用：

1. 确认使用了正确的布局 `layout: aptamer_page`
2. 检查HTML结构是否符合预期
3. 查看浏览器控制台是否有JavaScript错误

如有任何问题，请参考示例文件 `_posts/Theophylline-aptamer.md`。
