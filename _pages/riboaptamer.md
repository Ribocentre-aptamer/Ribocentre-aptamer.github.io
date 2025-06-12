---
title: "Ribocentre Aptamer - RNA Aptamers"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /Ribocentre-aptamer/
---
<html lang="en">

<head>
  <!--set sort order in table header begin-->
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
  <script src="https://cdn.plot.ly/plotly-2.26.2.min.js"></script>
  <!-- dashboard style -->
  <link rel="stylesheet" href="/css/dashboard.css">
  <link rel="stylesheet" href="/css/article-common.css">
  <style>
    .header_box {
      display: block;
      font-size: 24px;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width: 500px;
      border-width: 1px 1px 2px 1px;
      border-color: #ffffff #ffffff #ffffff #ffffff;
    }
    .box_style {
      background: #ffffff;
    }
    h2 {
      font-size: 20px;
    }
    /* 按钮容器样式 */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
      overflow: auto
    }
    /* 按钮样式 */
    .button {
      display: block;
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      background-color: #ffffff;
      color: #520049;
      text-decoration: none;
      font-size: 16px;
      border: 1px solid #520049;
      border-radius: 5px;
    }
    /* 鼠标悬停样式 */
    .button:hover {
      background-color: #c9c5c5;
      cursor: pointer;
    }
    /* 样式表格 */
    .table-style1 {
      border: 2px solid #ffffff;
      border: 2px solid #ffffff;
      border: 2px solid #ffffff;
      border-radius: 5px;
      background-color: #fff;
      border-radius: 5px;
    }
    .table-style1 th {
      background-color: #520049;
      background-color: #520049;
      background-color: #520049;
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
    }
    .table-style1 td {
      background-color: #ffffff;
      background-color: #f9f9f9;
      background-color: #f9f9f9;
    }
    .table-style1 th,
    .table-style1 td {
      padding: 10px 10px;
    }
    table.dataTable.no-footer {
      border-bottom: 1px solid rgba(0, 0, 0, 0);
    }
    /* 隐藏所有 sheet */
    .sheet {
      display: all;
      overflow: auto
    }
    /* Style the search box */
    #searchBox {
      padding: 10px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 1px;
      width: 300px;
    }
    /* Style the search box when it has focus */
    #searchBox:focus {
      outline: none;
      border-color: #efefef;
    }
    /* Style the placeholder text */
    #searchBox::placeholder {
      font-size: 16px;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      color: #000000;
      font: inherit;
      /* font-weight: bold; */
      margin: 0;
    }
    /* 搜索框和下载框水平布局 */
    .form-container {
      display: flex;
      align-items: center;
      overflow: auto
    }
    .form-container input {
      margin-right: 10px;
    }
    /* 下载框位置设置 */
    .form-container select {
      margin-left: auto;
      padding: 10px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 4px;
      width: 300px;
    }
    .button.clicked {
      background-color: #999;
    }
    .table {
      width: 100%;
      max-width: 100%;
      margin: 5 auto;
      border-collapse: collapse;
      background-color: #ffffff;
      border: 1px solid #fff;
      table-layout: fixed;
      /* 使用固定布局 */
    }
    .table td {
      padding: 10px;
      text-align: center;
      color: white;
      transition: transform 0.3s, background-color 0.3s, color 0.3s;
      word-wrap: break-word;
      /* 单词换行 */
      white-space: normal;
      /* 换行处理 */
    }
    /* 每个单元格的背景颜色 */
    .row1 td:nth-child(1) {
      background-color: #FFA07A;
    }
    .row1 td:nth-child(2) {
      background-color: #FFA07A;
    }
    .row1 td:nth-child(3) {
      background-color: #385dbf;
    }
    .row1 td:nth-child(4) {
      background-color: #385dbf;
    }
    .row1 td:nth-child(5) {
      background-color: #385dbf;
    }
    .row1 td:nth-child(6) {
      background-color: #385dbf;
    }
    .row1 td:nth-child(7) {
      background-color: #385dbf;
    }
    .row1 td:nth-child(8) {
      background-color: #385dbf;
    }
    .row1 td:nth-child(9) {
      background-color: #385dbf;
    }
    /* 在:hover伪类下，将transform属性添加到td元素上 */
    .table td:hover {
      transform: scale(1.05);
      /* 缩放到105% */
      cursor: pointer;
    }
    /* 覆盖链接样式，确保链接文字颜色为白色 */
    .table a {
      color: white !important;
      text-decoration: none !important;
      /* 去除链接下划线 */
    }
    /* 鼠标悬停链接时，保持白色 */
    .table a:hover {
      color: white !important;
      text-decoration: none !important;
    }
    /* 其他行的背景颜色 */
    .row2 td:nth-child(1) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(2) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(3) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(4) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(5) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(6) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(7) {
      background-color: #385dbf;
    }
    .row2 td:nth-child(8) {
      background-color: #f0a570;
    }
    .row2 td:nth-child(9) {
      background-color: #f0a570;
    }
    .row3 td:nth-child(1) {
      background-color: #f0a570;
    }
    .row3 td:nth-child(2) {
      background-color: #f0a570;
    }
    .row3 td:nth-child(3) {
      background-color: #f0a570;
    }
    .row3 td:nth-child(4) {
      background-color: #d75369;
    }
    .row3 td:nth-child(5) {
      background-color: #d75369;
    }
    .row3 td:nth-child(6) {
      background-color: #d75369;
    }
    .row3 td:nth-child(7) {
      background-color: #d75369;
    }
    .row3 td:nth-child(8) {
      background-color: #d75369;
    }
    .row3 td:nth-child(9) {
      background-color: #d75369;
    }
    .row4 td:nth-child(1) {
      background-color: #d75369;
    }
    .row4 td:nth-child(2) {
      background-color: #d75369;
    }
    .row4 td:nth-child(3) {
      background-color: #d75369;
    }
    .row4 td:nth-child(4) {
      background-color: #d75369;
    }
    .row4 td:nth-child(5) {
      background-color: #3c58a5;
    }
    .row4 td:nth-child(6) {
      background-color: #3c58a5;
    }
    .row4 td:nth-child(7) {
      background-color: #14a0ec;
    }
    .row4 td:nth-child(8) {
      background-color: #14a0ec;
    }
    .row4 td:nth-child(9) {
      background-color: #14a0ec;
    }
    .row5 td:nth-child(1) {
      background-color: #14a0ec;
    }
    .row5 td:nth-child(2) {
      background-color: #14a0ec;
    }
    .row5 td:nth-child(3) {
      background-color: #e97e8d;
    }
    .row5 td:nth-child(4) {
      background-color: #e97e8d;
    }
    .row5 td:nth-child(5) {
      background-color: #e97e8d;
    }
    .row5 td:nth-child(6) {
      background-color: #e97e8d;
    }
    .row5 td:nth-child(7) {
      background-color: #ade48b;
    }
    .row5 td:nth-child(8) {
      background-color: #ade48b;
    }
    .row5 td:nth-child(9) {
      background-color: #ade48b;
    }
    .row6 td:nth-child(1) {
      background-color: #ade48b;
    }
    .row6 td:nth-child(2) {
      background-color: #9841da;
    }
    .row6 td:nth-child(3) {
      background-color: #77c670;
    }
    #pie-chart {
      margin: 0 auto;
      /* 居中 */
    }
    .table2 {
      width: 100%;
      max-width: 100%;
      margin: 5px auto;
      /* 适当的间距 */
      border-collapse: collapse;
      background-color: #ffffff;
      border: 1px solid #fff;
      table-layout: fixed;
      /* 使用固定布局 */
    }
    .table2 td {
      padding: 10px;
      text-align: center;
      color: white;
      transition: transform 0.3s, background-color 0.3s, color 0.3s;
      word-wrap: break-word;
      /* 单词换行 */
      white-space: normal;
      /* 换行处理 */
    }
    /* 每个单元格的背景颜色设置 */
    .table2 .row1 td:nth-child(1) {
      background-color: #FFA07A;
    }
    .table2 .row1 td:nth-child(2) {
      background-color: #FFA07A;
    }
    .table2 .row1 td:nth-child(3) {
      background-color: #FFA07A;
    }
    .table2 .row1 td:nth-child(4) {
      background-color: #FFA07A;
    }
    .table2 .row1 td:nth-child(5) {
      background-color: #385dbf;
    }
    .table2 .row1 td:nth-child(6) {
      background-color: #385dbf;
    }
    .table2 .row1 td:nth-child(7) {
      background-color: #385dbf;
    }
    .table2 .row1 td:nth-child(8) {
      background-color: #f0a570;
    }
    .table2 .row1 td:nth-child(9) {
      background-color: #f0a570;
    }
    .table2 .row2 td:nth-child(1) {
      background-color: #f0a570;
    }
    .table2 .row2 td:nth-child(2) {
      background-color: #d75369;
    }
    .table2 .row2 td:nth-child(3) {
      background-color: #d75369;
    }
    .table2 .row2 td:nth-child(4) {
      background-color: #d75369;
    }

    .table2 .row2 td:nth-child(5) {
      background-color: #d75369;
    }

    .table2 .row2 td:nth-child(6) {
      background-color: #d75369;
    }

    .table2 .row2 td:nth-child(7) {
      background-color: #d75369;
    }

    .table2 .row2 td:nth-child(8) {
      background-color: #d75369;
    }

    .table2 .row2 td:nth-child(9) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(1) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(2) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(3) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(4) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(5) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(6) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(7) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(8) {
      background-color: #d75369;
    }

    .table2 .row3 td:nth-child(9) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(1) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(2) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(3) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(4) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(5) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(6) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(7) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(8) {
      background-color: #d75369;
    }

    .table2 .row4 td:nth-child(9) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(1) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(2) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(3) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(4) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(5) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(6) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(7) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(8) {
      background-color: #d75369;
    }

    .table2 .row5 td:nth-child(9) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(1) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(2) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(3) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(4) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(5) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(6) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(7) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(8) {
      background-color: #d75369;
    }

    .table2 .row6 td:nth-child(9) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(1) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(2) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(3) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(4) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(5) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(6) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(7) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(8) {
      background-color: #d75369;
    }

    .table2 .row7 td:nth-child(9) {
      background-color: #d75369;
    }

    .table2 .row8 td:nth-child(1) {
      background-color: #d75369;
    }

    .table2 .row8 td:nth-child(2) {
      background-color: #3c58a5;
    }

    .table2 .row8 td:nth-child(3) {
      background-color: #3c58a5;
    }

    .table2 .row8 td:nth-child(4) {
      background-color: #3c58a5;
    }

    .table2 .row8 td:nth-child(5) {
      background-color: #3c58a5;
    }

    .table2 .row8 td:nth-child(6) {
      background-color: #3c58a5;
    }

    .table2 .row8 td:nth-child(7) {
      background-color: #14a0ec;
    }

    .table2 .row8 td:nth-child(8) {
      background-color: #14a0ec;
    }

    .table2 .row8 td:nth-child(9) {
      background-color: #14a0ec;
    }

    .table2 .row9 td:nth-child(1) {
      background-color: #14a0ec;
    }

    .table2 .row9 td:nth-child(2) {
      background-color: #14a0ec;
    }

    .table2 .row9 td:nth-child(3) {
      background-color: #14a0ec;
    }

    .table2 .row9 td:nth-child(4) {
      background-color: #e97e8d;
    }

    .table2 .row9 td:nth-child(5) {
      background-color: #e97e8d;
    }

    .table2 .row9 td:nth-child(6) {
      background-color: #e97e8d;
    }

    .table2 .row9 td:nth-child(7) {
      background-color: #e97e8d;
    }

    .table2 .row9 td:nth-child(8) {
      background-color: #e97e8d;
    }

    .table2 .row9 td:nth-child(9) {
      background-color: #e97e8d;
    }

    .table2 .row10 td:nth-child(1) {
      background-color: #e97e8d;
    }

    .table2 .row10 td:nth-child(2) {
      background-color: #e97e8d;
    }

    .table2 .row10 td:nth-child(3) {
      background-color: #e97e8d;
    }

    .table2 .row10 td:nth-child(4) {
      background-color: #ade48b;
    }

    .table2 .row10 td:nth-child(5) {
      background-color: #ade48b;
    }

    .table2 .row10 td:nth-child(6) {
      background-color: #ade48b;
    }

    .table2 .row10 td:nth-child(7) {
      background-color: #ade48b;
    }

    .table2 .row10 td:nth-child(8) {
      background-color: #ade48b;
    }

    .table2 .row10 td:nth-child(9) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(1) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(2) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(3) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(4) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(5) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(6) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(7) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(8) {
      background-color: #ade48b;
    }

    .table2 .row11 td:nth-child(9) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(1) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(2) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(3) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(4) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(5) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(6) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(7) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(8) {
      background-color: #ade48b;
    }

    .table2 .row12 td:nth-child(9) {
      background-color: #9841da;
    }

    .table2 .row13 td:nth-child(1) {
      background-color: #9841da;
    }

    .table2 .row13 td:nth-child(2) {
      background-color: #9841da;
    }

    .table2 .row13 td:nth-child(3) {
      background-color: #ab233a;
    }

    .table2 .row13 td:nth-child(4) {
      background-color: #2a5c76;
    }

    .table2 .row13 td:nth-child(5) {
      background-color: #2a5c76;
    }

    .table2 .row13 td:nth-child(6) {
      background-color: #2a5c76;
    }

    .table2 .row13 td:nth-child(7) {
      background-color: #6ed9cd;
    }

    .table2 .row13 td:nth-child(8) {
      background-color: #6ed9cd;
    }

    .table2 .row13 td:nth-child(9) {
      background-color: #6ed9cd;
    }

    .table2 .row14 td:nth-child(1) {
      background-color: #396120;
    }

    .table2 .row14 td:nth-child(2) {
      background-color: #396120;
    }

    .table2 .row14 td:nth-child(3) {
      background-color: #77c670;
    }

    .table2 .row14 td:nth-child(4) {
      background-color: #77c670;
    }

    .table2 .row14 td:nth-child(5) {
      background-color: #bf97d1;
    }

    .table2 .row14 td:nth-child(6) {
      background-color: #bf97d1;
    }

    .table2 .row14 td:nth-child(7) {
      background-color: #bf97d1;
    }

    .table2 .row14 td:nth-child(8) {
      background-color: #bf97d1;
    }

    .table2 .row14 td:nth-child(9) {
      background-color: #bf97d1;
    }

    .table2 .row15 td:nth-child(1) {
      background-color: #bf97d1;
    }

    /* 悬停效果 */
    .table2 td:hover {
      transform: scale(1.05);
      /* 缩放到105% */
      cursor: pointer;
    }

    /* 链接样式 */
    .table2 a {
      color: white !important;
      text-decoration: none !important;
      /* 去除链接下划线 */
    }

    /* 链接悬停样式 */
    .table2 a:hover {
      color: white !important;
      text-decoration: none !important;
    }
  </style>
</head>


<body>
  <h1 class="post-title" itemprop="name headline">RNA Aptamers</h1>

  RNA Aptamers are nucleic acid molecules that mimic antibodies by folding into complex 3D shapes that bind to specific
  targets. Although some aptamers exist naturally as the ligand-binding elements of riboswitches, most are generated in
  vitro and can be tailored for a specific target.

  <p class="header_box">Statistical information </p>
  <!--iframe src="../plotly_pie.html" class="rounded-iframe" width="100%" height="600" frameborder="0"></iframe-->

  <!-- 添加折叠面板和搜索框 -->
  <div class="collapsible-container">
    <div id="pie-chart" style="width: 800px; height: 600px;"></div>
    <script>
      var data = [{
        values: [12, 7, 73, 3, 2, 3, 3, 28, 4, 6, 8, 16, 7, 11, 3],
        labels: ['Bacteria', 'Cell', 'Mammalian', 'Other', 'Parasite', 'Prion', 'Toxin', 'Viral', 'RNA', 'Amino Acids & Peptides', 'Biologics & Signaling Molecules', 'Fluorophores', 'Nucleosides & Nucleotides', 'Pharmaceuticals', 'Synthetic'],
        type: 'pie',
        marker: {
          colors: ['#e97e8d', '#bf97d1', '#d75369', '#9841da', '#396120', '#77c670', '#ab233a', '#ade48b', '#6ed9cd', '#FFA07A', '#f0a570', '#385dbf', '#3c58a5', '#14a0ec', '#2a5c76']
        }
      }];
      var layout = {
      };
      Plotly.newPlot('pie-chart', data, layout);
    </script>
    <p>The aptamer database encompasses both aptamers with known 3D structures and those without. The following table
      lists the ligands of all aptamers in this database. The color coding of the table matches the hues of the pie
      chart displayed above, which symbolizes the various categories of aptamers. By clicking on a ligand of interest,
      you can access detailed information pertaining to the respective aptamer.</p>
    <div id="sheet1" class="sheet">
      <!-- 统计信息折叠面板 -->
      <div class="stat-panel" style="margin-bottom: 30px;">
        <div class="stat-header" onclick="toggleStats()"
          style="cursor: pointer; padding: 10px; background-color: #f2f2f2; border-radius: 5px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: bold; color: #520049;">▶ Aptamer Statistics Panel (click to toggle)</span>
          <span id="toggleIcon">-</span>
        </div>
        <div id="statsContent" style="display: block; padding-top: 15px;">
          <!--lihl --->
          <font>This table lists the ligands of aptamers with identified 3D structures:</font>
          <table class="table" border="1">
            <tr class="row1">
              <td><a href="https://aptamer.ribocentre.org/_posts/Citrulline-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Citrulline</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Arginine-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Arginine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Chili-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Chili</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TMR-aptamer" target="_blank"
                  onclick="handleCellClick(event)">TMR</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Mango-aptamer(TO1-biotin)" target="_blank"
                  onclick="handleCellClick(event)">Mango</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Mango-aptamer(TO1-biotin)" target="_blank"
                  onclick="handleCellClick(event)">Mango II</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Mango-III-aptamer(YO3)" target="_blank"
                  onclick="handleCellClick(event)">Mango III</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Mango-III-aptamer(YO3)" target="_blank"
                  onclick="handleCellClick(event)">Mango IV</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Spinach-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Spinach</a></td>
            </tr>
            <tr class="row2">
              <td><a href="https://aptamer.ribocentre.org/_posts/Squash-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Squash</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Corn-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Corn</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/DIR2s-apt-aptamer" target="_blank"
                  onclick="handleCellClick(event)">DIR2s</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Pepper-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Pepper</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/MG-aptamer" target="_blank"
                  onclick="handleCellClick(event)">MG</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Clivias-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Clivias</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Beetroot-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Beetroot</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/FMN-aptamer" target="_blank"
                  onclick="handleCellClick(event)">FMN</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Vitamin-B12-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Vitamin B<sub>12</sub></a></td>
            </tr>
            <tr class="row3">
              <td><a href="https://aptamer.ribocentre.org/_posts/5HTP-aptamer" target="_blank"
                  onclick="handleCellClick(event)">5HTP</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Riboflavin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Riboflavin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Biotin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Biotin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/AML1(RUNX1)-aptamer" target="_blank"
                  onclick="handleCellClick(event)">AML1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/A9g-RNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">GCPII</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/eIF4A-aptamer" target="_blank"
                  onclick="handleCellClick(event)">eIF4A</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/GRK2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">GRK2</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/IgG-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Human IgG</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/NF-kappaB-aptamer" target="_blank"
                  onclick="handleCellClick(event)">NF-kappaB</a></td>
            </tr>
            <tr class="row4">
              <td><a href="https://aptamer.ribocentre.org/_posts/Thrombin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Thrombin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Lysozyme-aptamer" target="_blank"
                  onclick="handleCellClick(event)">lysozyme</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/GlnRs-aptamer" target="_blank"
                  onclick="handleCellClick(event)">GlnRs</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Factor-Xa-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Factor Xa</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/ATP-aptamer" target="_blank"
                  onclick="handleCellClick(event)">ATP</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/GTP-aptamer" target="_blank"
                  onclick="handleCellClick(event)">GTP</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Tetracycline-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Tetracycline</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/NeomycinB-RNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Neomycin B</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Streptomycin-RNA-Aptamer" target="_blank"
                  onclick="handleCellClick(event)">Streptomycin</a></td>
            </tr>
            <tr class="row5">
              <td><a href="https://aptamer.ribocentre.org/_posts/Theophylline-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Theophylline</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Tobramycin-RNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Tobramycin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Hfq-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Hfq</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Ribosomal-protein-S8-aptamer" target="_blank"
                  onclick="handleCellClick(event)">ribosomal protein S8</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TetR-aptamer" target="_blank"
                  onclick="handleCellClick(event)">TetR</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/FC-RNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">RNA polymerase (Pol) II</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HIV-1-REV-peptide-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 REV peptide</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Tat-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Tat peptides</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/REX16-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HTLV-1 arginine-rich Rex peptide</a></td>
            </tr>
            <tr class="row6">
              <td><a href="https://aptamer.ribocentre.org/_posts/LR06-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 TAR RNA</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/bacteriophage-MS2-coat-protein-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Bacteriophage MS2 coat protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Bovine-prion-protein(bPrP)-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Bovine prion</a></td>
            </tr>
          </table>
          <br>
          <font>This table lists the ligands of aptamers with unknown 3D structures:</font>
          <table class="table2" border="1">
            <tr class="row1">
              <td><a href="https://aptamer.ribocentre.org/_posts/DP3-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Neuropeptide Y</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Tyr-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">L-tyrosine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/%CE%B255-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Amyloid beta-peptide</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/L-SUP-A-004-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Substance P</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/FB-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Fluorescein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/II-mini3-4-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Hoechst</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Okra-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Okra</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Dopamine-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Dopamine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Clone-5-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Sialyl Lewis X</a></td>
            </tr>
            <tr class="row2">
              <td><a href="https://aptamer.ribocentre.org/_posts/SPC-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Sphingosylphosphorylcholine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Gp43-aptamer" target="_blank"
                  onclick="handleCellClick(event)">T4 DNA polymerase</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/bFGF-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Basic fibroblast growth factor</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/PKC-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Protein kinase C</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/VEGF-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Vascular Endothelial Growth Factor</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/14.12-aptamer" target="_blank"
                  onclick="handleCellClick(event)">L-selectin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/E2F-E1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">E2F</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/21.01-aptamer" target="_blank"
                  onclick="handleCellClick(event)">RAF1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/APC-99-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Human activated protein C</a></td>
            </tr>
            <tr class="row3">
              <td><a href="https://aptamer.ribocentre.org/_posts/77-aptamer" target="_blank"
                  onclick="handleCellClick(event)">CSDE1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TR-D28-aptamer" target="_blank"
                  onclick="handleCellClick(event)">CD18</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/P19-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Neurotensin receptor</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/11-1.41-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Angiopoietin-2</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/A30-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HER3</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/No.21-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Eukaryotic initiation factor 4A</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Bovine-thrombin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Bovine thrombin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/tMG-RNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Rat monoclonal antibody</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TCF-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">T cytokine 1</a></td>
            </tr>
            <tr class="row4">
              <td><a href="https://aptamer.ribocentre.org/_posts/RANK-aptamer" target="_blank"
                  onclick="handleCellClick(event)">RANK</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Cytohesin-2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Cytohesin-2</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/NFAT-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Nuclear factor of activated T-cells</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/hTNF-α-aptamer" target="_blank"
                  onclick="handleCellClick(event)">hTNF α</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/tFKBP*3R-2G-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Engineered FKBP protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/eIF4E-aptamer" target="_blank"
                  onclick="handleCellClick(event)">eIF4E</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/3Dpol-aptamer" target="_blank"
                  onclick="handleCellClick(event)">RNA-dependent RNA polymerase</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/B1-CT-aptamer" target="_blank"
                  onclick="handleCellClick(event)">BACE1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Bovine-factor-IX-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Bovine factor IX</a></td>
            </tr>
            <tr class="row5">
              <td><a href="https://aptamer.ribocentre.org/_posts/polβ-aptamer" target="_blank"
                  onclick="handleCellClick(event)">DNA polymerase β</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TbRIII-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Transforming growth factor-β type III</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/AMPA-receptors-Aptamer" target="_blank"
                  onclick="handleCellClick(event)">AMPA receptors</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/The-protein-calsenilin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Ca<sup>2+</sup>-binding protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/WL-2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">β2-microglobulin fibrils</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/AN58-aptamer" target="_blank"
                  onclick="handleCellClick(event)">GluR2 AMPA receptors</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TfR-ECD-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Transferrin receptor protein 1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/E2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Amyloid beta-peptide</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/PAI-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Plasminogen activator inhibitor-1</a></td>
            </tr>
            <tr class="row6">
              <td><a href="https://aptamer.ribocentre.org/_posts/J18-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Epithelial Growth Factor Receptor</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/ZAP-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Zinc-finger antiviral protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/PTP1B-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Protein tyrosine phosphatase 1B</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/IL-17A-aptamer" target="_blank"
                  onclick="handleCellClick(event)">IL-17A</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/CypB-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Cyclophilin B</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/OX40-aptamer" target="_blank"
                  onclick="handleCellClick(event)">OX40</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Glycoprotein-2-(GP2)-protein-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Glycoprotein 2</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/ERα-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Estrogen receptor α</a></td>
              <td><a
                  href="https://aptamer.ribocentre.org/_posts/Gastrointestinal-carcinoembryonic-antigen-(CEA)-aptamer"
                  target="_blank" onclick="handleCellClick(event)">Carcinoembryonic antigen</a></td>
            </tr>
            <tr class="row7">
              <td><a href="https://aptamer.ribocentre.org/_posts/Interleukin-6-receptor-domain-3-(IL-6R-D3)-aptamer"
                  target="_blank" onclick="handleCellClick(event)">IL-6R</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Restriction-endonucleases-(REases)-KpnI-aptamer"
                  target="_blank" onclick="handleCellClick(event)">REases KpnI</a></td>
              <td><a
                  href="https://aptamer.ribocentre.org/_posts/Ubiquitin-carboxyl-terminal-hydrolase37-(UCH37)-aptamer"
                  target="_blank" onclick="handleCellClick(event)">Ubiquitin carboxyl-terminal hydrolase37</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/AB9-aptamer" target="_blank"
                  onclick="handleCellClick(event)">AMPA and kainate receptors</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Gastrointestinal-cancer-antigen-50-aptamer"
                  target="_blank" onclick="handleCellClick(event)">Gastrointestinal cancer antigen 50</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Cancer-antigen-72-4(CA72-4)-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Cancer antigen 72–4</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Chemokine-CCL17-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Chemokine CCL17</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/IL2-CD25-aptermer" target="_blank"
                  onclick="handleCellClick(event)">IL2–CD25</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Mixed-lineage-leukemia-proteins-(MLL)-aptermer"
                  target="_blank" onclick="handleCellClick(event)">Mixed lineage leukemia proteins</a></td>
            </tr>
            <tr class="row8">
              <td><a href="https://aptamer.ribocentre.org/_posts/Aβ42-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Aβ42</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/XBA-RNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Xanthine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/cAMP-aptamer" target="_blank"
                  onclick="handleCellClick(event)">cAMP</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/rafl7s-aptamer" target="_blank"
                  onclick="handleCellClick(event)">ATP(2)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/bG40min-aptamer" target="_blank"
                  onclick="handleCellClick(event)">ATP(3)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Adenine-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Adenine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/70cam6-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Chloramphenicol</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Lividomycin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Lividomycin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/SRB-2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Sulforhodamine B</a></td>
            </tr>
            <tr class="row9">
              <td><a href="https://aptamer.ribocentre.org/_posts/J6f1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Tobramycin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Doxycyline-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Doxycyline</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Codeine-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Codeine</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Escherichia-coli-aptamer" target="_blank"
                  onclick="handleCellClick(event)">E.Coil</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Protein-tyrosine-phosphatases-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Protein tyrosine phosphatases</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Subtilisin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Subtilisin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Peptide-release-factor-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Peptide release factor 1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Colicin-E3-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Colicin E3</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Type-IVB-Pili-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Type IVB Pili</a></td>
            </tr>
            <tr class="row10">
              <td><a href="https://aptamer.ribocentre.org/_posts/CsrA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">CsrA</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/RF-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Escherichia coli release factor 1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Elongation-factor-SelB-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Elongation factor SelB</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/ligand-1.1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 RT</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/59-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 Rev protein (1)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/C52-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 Rev protein (2)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/P5-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 integrase</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/YT1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HTLV-1 Tax protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Clone-31-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 Tat protein</a></td>
            </tr>
            <tr class="row11">
              <td><a href="https://aptamer.ribocentre.org/_posts/10G-1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HCV NS3 protease (1)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/G9-II-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HCV NS3 protease (2)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/R5-helix-peptide-aptamer" target="_blank"
                  onclick="handleCellClick(event)">R5 helix peptide</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/RNA22-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Wilms tumor protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/B.2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HCV NS5B (1)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HCV-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HCV NS5B (2)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HSV-1-US11-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HSV-1 US11</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Hemagglutinin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Hemagglutinin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/H3N2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">H3N2 Haemagglutinin</a></td>
            </tr>
            <tr class="row12">
              <td><a href="https://aptamer.ribocentre.org/_posts/SARS-CoV-N-protein-aptamer" target="_blank"
                  onclick="handleCellClick(event)">SARS-CoV N protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HPV-16-E7-oncoprotein-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HPV-16 E7 protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HBV-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HBV P protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HIRRV-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Hirame rhabdovirus</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HPAI-H5N1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">H5N1/H7N7 Hemagglutinin (HA)</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Hemagglutinin-(HA)-protein-aptamer" target="_blank"
                  onclick="handleCellClick(event)">gHA1</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HIV-1-PR-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 protease</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HIV-1-CA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">HIV-1 capsid</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/B52-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Serine/arginine-rich (SR) proteins</a></td>
            </tr>
            <tr class="row13">
              <td><a href="https://aptamer.ribocentre.org/_posts/Mitochondrion-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Mitochondrion</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Mbl-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Drosophila muscleblind protein Mbl</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Pepocin-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Pepocin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/B4-25-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Reactive Blue 4</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/B4-25-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Cibacron Blue 3GA</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/D8-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Sephadex G-100</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/109.2-3-aptamer" target="_blank"
                  onclick="handleCellClick(event)">16S rRNA decoding region</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/tRNA-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Yeast tRNA</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/RNA-loop-aptamer" target="_blank"
                  onclick="handleCellClick(event)">RNA stem-loop</a></td>
            </tr>
            <tr class="row14">
              <td><a href="https://aptamer.ribocentre.org/_posts/CED-9-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Cell death abnormality gene 9</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Trypanosome-VSG-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Variant surface glycoprotein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Prion-protein1-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Hamster prion protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/Prion-protein2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Sheep prion protein</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/pUC19-aptamer" target="_blank"
                  onclick="handleCellClick(event)">β-catenin</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/HER2-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Breast cancer cells</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/E3-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Prostate cancer cell</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/TNBC-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Triple-negative breast cancer</a></td>
              <td><a href="https://aptamer.ribocentre.org/_posts/CD133-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Cell line Hep3B CD133</a></td>
            </tr>
            <tr class="row15">
              <td><a href="https://aptamer.ribocentre.org/_posts/GL56-aptamer" target="_blank"
                  onclick="handleCellClick(event)">Glioma cells</a></td>
            </tr>
          </table>
          <!--img src="/images/aptamers/Aptamers_classification.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive"-->
          <div style="display: flex; justify-content: center;">
          </div>
          <!--a href="/downloads/riboswitches_page/Classification_of_Riboswitches.pdf" target="_blank" download="Classification_of_Riboswitches.pdf"><button class="btn btn-secondary" style="color:#520049" ><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download FIGURE</button></a-->
          <!--p>For more detailed information about each Aptamer, please browse the table below.</p-->
        </div>
      </div>
    </div>
    <!-- 添加切换统计信息面板的JavaScript函数 -->
    <script>
      function toggleStats() {
        var content = document.getElementById("statsContent");
        var icon = document.getElementById("toggleIcon");
        if (content.style.display === "none") {
          content.style.display = "block";
          icon.textContent = "-";
        } else {
          content.style.display = "none";
          icon.textContent = "+";
        }
      }
    </script>
<p class="header_box">Detail information</p>
<div class="dashboard-section">
  <h2 class="blowheader_box">Small molecules</h2>
  <div class="amir-container">
    <div class="chart-container">
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Publication Trends by Year</h4>
        </div>
        <div class="chart-content">
          <div id="sm-yearChart" class="amir-chart"></div>
        </div>
      </div>
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Distribution by Category</h4>
        </div>
        <div class="chart-content">
          <div id="sm-categoryChart" class="amir-chart"></div>
        </div>
      </div>
    </div>
    <section class="filter-controls">
      <div class="filter-header">
        <h4 class="filter-title">Data Filtering</h4>
        <div class="filter-actions">
          <button class="filter-btn reset-btn" id="sm-reset">Reset All</button>
        </div>
      </div>
      <div class="filter-tags" id="sm-filterTags"></div>
    </section>
    <section class="data-table-section">
      <div class="chart-header">
        <h4 class="chart-title">Aptamer Data</h4>
        <div class="chart-controls">
          <span class="chart-info" id="sm-tableInfo"></span>
        </div>
      </div>
      <div class="table-container">
        <div class="table-responsive">
          <table id="sm-dataTable" class="table table-striped table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Ligand</th>
                <th>Year</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody id="sm-tableBody"></tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="data-summary">
      <div class="summary-cards">
        <div class="summary-card">
          <span class="summary-label">Currently Showing</span>
          <span class="summary-count" id="sm-currentCount"></span>
          <span class="summary-unit">records</span>
        </div>
        <div class="summary-card">
          <span class="summary-label">Filter Ratio</span>
          <span class="summary-percentage" id="sm-filterPercentage"></span>
          <span class="summary-unit">visible</span>
        </div>
      </div>
    </section>
  </div>
</div>

<div class="dashboard-section">
  <h2 class="blowheader_box">Proteins</h2>
  <div class="amir-container">
    <div class="chart-container">
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Publication Trends by Year</h4>
        </div>
        <div class="chart-content">
          <div id="pr-yearChart" class="amir-chart"></div>
        </div>
      </div>
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Distribution by Category</h4>
        </div>
        <div class="chart-content">
          <div id="pr-categoryChart" class="amir-chart"></div>
        </div>
      </div>
    </div>
    <section class="filter-controls">
      <div class="filter-header">
        <h4 class="filter-title">Data Filtering</h4>
        <div class="filter-actions">
          <button class="filter-btn reset-btn" id="pr-reset">Reset All</button>
        </div>
      </div>
      <div class="filter-tags" id="pr-filterTags"></div>
    </section>
    <section class="data-table-section">
      <div class="chart-header">
        <h4 class="chart-title">Aptamer Data</h4>
        <div class="chart-controls">
          <span class="chart-info" id="pr-tableInfo"></span>
        </div>
      </div>
      <div class="table-container">
        <div class="table-responsive">
          <table id="pr-dataTable" class="table table-striped table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Ligand</th>
                <th>Year</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody id="pr-tableBody"></tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="data-summary">
      <div class="summary-cards">
        <div class="summary-card">
          <span class="summary-label">Currently Showing</span>
          <span class="summary-count" id="pr-currentCount"></span>
          <span class="summary-unit">records</span>
        </div>
        <div class="summary-card">
          <span class="summary-label">Filter Ratio</span>
          <span class="summary-percentage" id="pr-filterPercentage"></span>
          <span class="summary-unit">visible</span>
        </div>
      </div>
    </section>
  </div>
</div>

<div class="dashboard-section">
  <h2 class="blowheader_box">Nucleic acids</h2>
  <div class="amir-container">
    <div class="chart-container">
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Publication Trends by Year</h4>
        </div>
        <div class="chart-content">
          <div id="na-yearChart" class="amir-chart"></div>
        </div>
      </div>
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Distribution by Category</h4>
        </div>
        <div class="chart-content">
          <div id="na-categoryChart" class="amir-chart"></div>
        </div>
      </div>
    </div>
    <section class="filter-controls">
      <div class="filter-header">
        <h4 class="filter-title">Data Filtering</h4>
        <div class="filter-actions">
          <button class="filter-btn reset-btn" id="na-reset">Reset All</button>
        </div>
      </div>
      <div class="filter-tags" id="na-filterTags"></div>
    </section>
    <section class="data-table-section">
      <div class="chart-header">
        <h4 class="chart-title">Aptamer Data</h4>
        <div class="chart-controls">
          <span class="chart-info" id="na-tableInfo"></span>
        </div>
      </div>
      <div class="table-container">
        <div class="table-responsive">
          <table id="na-dataTable" class="table table-striped table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Ligand</th>
                <th>Year</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody id="na-tableBody"></tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="data-summary">
      <div class="summary-cards">
        <div class="summary-card">
          <span class="summary-label">Currently Showing</span>
          <span class="summary-count" id="na-currentCount"></span>
          <span class="summary-unit">records</span>
        </div>
        <div class="summary-card">
          <span class="summary-label">Filter Ratio</span>
          <span class="summary-percentage" id="na-filterPercentage"></span>
          <span class="summary-unit">visible</span>
        </div>
      </div>
    </section>
  </div>
</div>

<div class="dashboard-section">
  <h2 class="blowheader_box">Cells</h2>
  <div class="amir-container">
    <div class="chart-container">
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Publication Trends by Year</h4>
        </div>
        <div class="chart-content">
          <div id="ce-yearChart" class="amir-chart"></div>
        </div>
      </div>
      <div class="chart-wrapper">
        <div class="chart-header">
          <h4 class="chart-title">Distribution by Category</h4>
        </div>
        <div class="chart-content">
          <div id="ce-categoryChart" class="amir-chart"></div>
        </div>
      </div>
    </div>
    <section class="filter-controls">
      <div class="filter-header">
        <h4 class="filter-title">Data Filtering</h4>
        <div class="filter-actions">
          <button class="filter-btn reset-btn" id="ce-reset">Reset All</button>
        </div>
      </div>
      <div class="filter-tags" id="ce-filterTags"></div>
    </section>
    <section class="data-table-section">
      <div class="chart-header">
        <h4 class="chart-title">Aptamer Data</h4>
        <div class="chart-controls">
          <span class="chart-info" id="ce-tableInfo"></span>
        </div>
      </div>
      <div class="table-container">
        <div class="table-responsive">
          <table id="ce-dataTable" class="table table-striped table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Ligand</th>
                <th>Year</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody id="ce-tableBody"></tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="data-summary">
      <div class="summary-cards">
        <div class="summary-card">
          <span class="summary-label">Currently Showing</span>
          <span class="summary-count" id="ce-currentCount"></span>
          <span class="summary-unit">records</span>
        </div>
        <div class="summary-card">
          <span class="summary-label">Filter Ratio</span>
          <span class="summary-percentage" id="ce-filterPercentage"></span>
          <span class="summary-unit">visible</span>
        </div>
      </div>
    </section>
  </div>
</div>

<script src="{{ site.baseurl }}/js/aptamer-dashboard.js"></script>
<script>
  initAptamerDashboard({dataPath: '{{ site.baseurl }}/apidata/aptamer_small_molecules.json', prefix: 'sm'});
  initAptamerDashboard({dataPath: '{{ site.baseurl }}/apidata/aptamer_proteins.json', prefix: 'pr'});
  initAptamerDashboard({dataPath: '{{ site.baseurl }}/apidata/aptamer_nucleic_acids.json', prefix: 'na'});
  initAptamerDashboard({dataPath: '{{ site.baseurl }}/apidata/aptamer_cells.json', prefix: 'ce'});
</script>
<script>
  function handleCellClick(event) {
    // placeholder for future cell click actions
  }
</script>
