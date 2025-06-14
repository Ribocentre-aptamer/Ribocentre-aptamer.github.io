# Theophylline风格模板使用指南

本指南介绍如何使用专门为Theophylline-aptamer页面设计的模板创建新页面。

## 基本用法

1. 在Markdown文件的front matter中使用`theophylline_style`布局：

```yaml
---
layout: theophylline_style
title: "页面标题"
date: YYYY-MM-DD 00:00:00
author: 作者名
categories: Aptamer
---
```

2. 使用与Theophylline-aptamer_back1.md相同的HTML结构:

```html
<html>
<head>
  <style>
    /* 可选的页面特定样式 */
  </style>
</head>
<body>
  <!-- 内容 -->
</body>
</html>
```

## 内容结构

### 一级标题

使用以下格式创建一级标题，这样导航菜单会自动识别这些标题：

```html
<div class="content-section">
  <h2 class="section-title" id="section-id">Section Title</h2>
  <!-- 内容 -->
</div>
```

**注意**: 必须同时使用`class="section-title"`和`id`属性，这样导航才能正确识别。

### 常用的内容模块

#### 时间线

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

#### 小标题

```html
<div class="blowheader_box">小标题</div>
```

#### 序列显示

```html
<div class="sequence">5'-GGCAUACCAGCCGAAAGGCCCUUGGCAGCGUC-3'</div>
```

#### 高亮文本

```html
<span class="highlight-text">高亮文本</span>
```

#### 信息框

```html
<div class="info-box">
  <p><b>标题:</b> 内容</p>
</div>
```

#### 表格

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

#### 结构图片网格

```html
<div class="structure-images">
  <img src="/images/path/image1.svg" alt="Image 1" class="img-responsive">
  <img src="/images/path/image2.svg" alt="Image 2" class="img-responsive">
</div>
```

#### 3D结构表格

```html
<table class="structure-table" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
  <tr>
    <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
      <img src="/images/3D/example.svg" alt="3D structure" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
    </td>
    <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
      <!-- 3D查看器组件 -->
    </td>
  </tr>
</table>
```

#### 参考文献

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

## 模板文件

我们已创建一个完整的模板文件`_posts/theophylline_template.md`，您可以直接复制此文件并修改内容，确保所有必需的HTML结构都已包含。

## 注意事项

1. 确保每个主要部分都使用`<div class="content-section">`包裹
2. 确保每个一级标题都使用`<h2 class="section-title" id="xxx">`格式
3. 导航菜单会自动检测并显示带有这种格式的标题

如有任何问题，请参考示例文件`_posts/Theophylline-aptamer_back1.md`和`_posts/theophylline_template.md`。 