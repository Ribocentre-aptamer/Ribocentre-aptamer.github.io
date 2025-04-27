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
<script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
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
   .box_style{
    background: #ffffff;
  }
  h2{
    font-size:20px;
  }
/* 按钮容器样式 */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
      overflow:auto
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
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
		  .table-style1 td {
		    background-color: #ffffff;
		    background-color: #f9f9f9;
		    background-color: #f9f9f9;
		    }		
		  .table-style1 th, .table-style1 td {
		  padding: 10px 10px;
		}
    table.dataTable.no-footer {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
    /* 隐藏所有 sheet */
    .sheet {
      display: all;
      overflow:auto
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
  button, input, optgroup, select, textarea {
    color: #000000;
    font: inherit;
    /* font-weight: bold; */
    margin: 0;
}
  /* 搜索框和下载框水平布局 */
    .form-container {
      display: flex;
      align-items: center;
      overflow:auto
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
    table-layout: fixed; /* 使用固定布局 */
  }
  .table td {
    padding: 10px;
    text-align: center;
    color: white;
    transition: transform 0.3s, background-color 0.3s, color 0.3s;
    word-wrap: break-word; /* 单词换行 */
    white-space: normal; /* 换行处理 */
  }
  /* 每个单元格的背景颜色 */
  .row1 td:nth-child(1) { background-color: #FFA07A; }
  .row1 td:nth-child(2) { background-color: #FFA07A; }
  .row1 td:nth-child(3) { background-color: #385dbf; }
  .row1 td:nth-child(4) { background-color: #385dbf; }
  .row1 td:nth-child(5) { background-color: #385dbf; }
  .row1 td:nth-child(6) { background-color: #385dbf; }
  .row1 td:nth-child(7) { background-color: #385dbf; }
  .row1 td:nth-child(8) { background-color: #385dbf; }
  .row1 td:nth-child(9) { background-color: #385dbf; }
  /* 在:hover伪类下，将transform属性添加到td元素上 */
  .table td:hover {
    transform: scale(1.05); /* 缩放到105% */
    cursor: pointer;
  }
  /* 覆盖链接样式，确保链接文字颜色为白色 */
.table a {
  color: white !important;
  text-decoration: none !important; /* 去除链接下划线 */
}
/* 鼠标悬停链接时，保持白色 */
.table a:hover {
  color: white !important;
  text-decoration: none !important;
}
  /* 其他行的背景颜色 */
  .row2 td:nth-child(1) { background-color: #385dbf; }
  .row2 td:nth-child(2) { background-color: #385dbf; }
  .row2 td:nth-child(3) { background-color: #385dbf; }
  .row2 td:nth-child(4) { background-color: #385dbf; }
  .row2 td:nth-child(5) { background-color: #385dbf; }
  .row2 td:nth-child(6) { background-color: #385dbf; }
  .row2 td:nth-child(7) { background-color: #385dbf; }
  .row2 td:nth-child(8) { background-color: #f0a570; }
  .row2 td:nth-child(9) { background-color: #f0a570; }
  .row3 td:nth-child(1) { background-color: #f0a570; }
  .row3 td:nth-child(2) { background-color: #f0a570; }
  .row3 td:nth-child(3) { background-color: #f0a570; }
  .row3 td:nth-child(4) { background-color: #d75369; }
  .row3 td:nth-child(5) { background-color: #d75369; }
  .row3 td:nth-child(6) { background-color: #d75369; }
  .row3 td:nth-child(7) { background-color: #d75369; }
  .row3 td:nth-child(8) { background-color: #d75369; }
  .row3 td:nth-child(9) { background-color: #d75369; }
  .row4 td:nth-child(1) { background-color: #d75369; }
  .row4 td:nth-child(2) { background-color: #d75369; }
  .row4 td:nth-child(3) { background-color: #d75369; }
  .row4 td:nth-child(4) { background-color: #d75369; }
  .row4 td:nth-child(5) { background-color: #3c58a5; }
  .row4 td:nth-child(6) { background-color: #3c58a5; }
  .row4 td:nth-child(7) { background-color: #14a0ec; }
  .row4 td:nth-child(8) { background-color: #14a0ec; }
  .row4 td:nth-child(9) { background-color: #14a0ec; }
  .row5 td:nth-child(1) { background-color: #14a0ec; }
  .row5 td:nth-child(2) { background-color: #14a0ec; }
  .row5 td:nth-child(3) { background-color: #e97e8d; }
  .row5 td:nth-child(4) { background-color: #e97e8d; }
  .row5 td:nth-child(5) { background-color: #e97e8d; }
  .row5 td:nth-child(6) { background-color: #e97e8d; }
  .row5 td:nth-child(7) { background-color: #ade48b; }
  .row5 td:nth-child(8) { background-color: #ade48b; }
  .row5 td:nth-child(9) { background-color: #ade48b; }
  .row6 td:nth-child(1) { background-color: #ade48b; }
  .row6 td:nth-child(2) { background-color: #9841da; }
  .row6 td:nth-child(3) { background-color: #77c670; }
  #pie-chart {
      margin: 0 auto; /* 居中 */
    }
.table2 {
    width: 100%;
    max-width: 100%;
    margin: 5px auto; /* 适当的间距 */
    border-collapse: collapse;
    background-color: #ffffff;
    border: 1px solid #fff;
    table-layout: fixed; /* 使用固定布局 */
  }
  .table2 td {
    padding: 10px;
    text-align: center;
    color: white;
    transition: transform 0.3s, background-color 0.3s, color 0.3s;
    word-wrap: break-word; /* 单词换行 */
    white-space: normal; /* 换行处理 */
  }
  /* 每个单元格的背景颜色设置 */
  .table2 .row1 td:nth-child(1) { background-color: #FFA07A; }
  .table2 .row1 td:nth-child(2) { background-color: #FFA07A; }
  .table2 .row1 td:nth-child(3) { background-color: #FFA07A; }
  .table2 .row1 td:nth-child(4) { background-color: #FFA07A; }
  .table2 .row1 td:nth-child(5) { background-color: #385dbf; }
  .table2 .row1 td:nth-child(6) { background-color: #385dbf; }
  .table2 .row1 td:nth-child(7) { background-color: #385dbf; }
  .table2 .row1 td:nth-child(8) { background-color: #f0a570; }
  .table2 .row1 td:nth-child(9) { background-color: #f0a570; }
  .table2 .row2 td:nth-child(1) { background-color: #f0a570; }
  .table2 .row2 td:nth-child(2) { background-color: #d75369; }
  .table2 .row2 td:nth-child(3) { background-color: #d75369; }
  .table2 .row2 td:nth-child(4) { background-color: #d75369; }
  .table2 .row2 td:nth-child(5) { background-color: #d75369; }
  .table2 .row2 td:nth-child(6) { background-color: #d75369; }
  .table2 .row2 td:nth-child(7) { background-color: #d75369; }
  .table2 .row2 td:nth-child(8) { background-color: #d75369; }
  .table2 .row2 td:nth-child(9) { background-color: #d75369; }
  .table2 .row3 td:nth-child(1) { background-color: #d75369; }
  .table2 .row3 td:nth-child(2) { background-color: #d75369; }
  .table2 .row3 td:nth-child(3) { background-color: #d75369; }
  .table2 .row3 td:nth-child(4) { background-color: #d75369; }
  .table2 .row3 td:nth-child(5) { background-color: #d75369; }
  .table2 .row3 td:nth-child(6) { background-color: #d75369; }
  .table2 .row3 td:nth-child(7) { background-color: #d75369; }
  .table2 .row3 td:nth-child(8) { background-color: #d75369; }
  .table2 .row3 td:nth-child(9) { background-color: #d75369; }
  .table2 .row4 td:nth-child(1) { background-color: #d75369; }
  .table2 .row4 td:nth-child(2) { background-color: #d75369; }
  .table2 .row4 td:nth-child(3) { background-color: #d75369; }
  .table2 .row4 td:nth-child(4) { background-color: #d75369; }
  .table2 .row4 td:nth-child(5) { background-color: #d75369; }
  .table2 .row4 td:nth-child(6) { background-color: #d75369; }
  .table2 .row4 td:nth-child(7) { background-color: #d75369; }
  .table2 .row4 td:nth-child(8) { background-color: #d75369; }
  .table2 .row4 td:nth-child(9) { background-color: #d75369; }
  .table2 .row5 td:nth-child(1) { background-color: #d75369; }
  .table2 .row5 td:nth-child(2) { background-color: #d75369; }
  .table2 .row5 td:nth-child(3) { background-color: #d75369; }
  .table2 .row5 td:nth-child(4) { background-color: #d75369; }
  .table2 .row5 td:nth-child(5) { background-color: #d75369; }
  .table2 .row5 td:nth-child(6) { background-color: #d75369; }
  .table2 .row5 td:nth-child(7) { background-color: #d75369; }
  .table2 .row5 td:nth-child(8) { background-color: #d75369; }
  .table2 .row5 td:nth-child(9) { background-color: #d75369; }
  .table2 .row6 td:nth-child(1) { background-color: #d75369; }
  .table2 .row6 td:nth-child(2) { background-color: #d75369; }
  .table2 .row6 td:nth-child(3) { background-color: #d75369; }
  .table2 .row6 td:nth-child(4) { background-color: #d75369; }
  .table2 .row6 td:nth-child(5) { background-color: #d75369; }
  .table2 .row6 td:nth-child(6) { background-color: #d75369; }
  .table2 .row6 td:nth-child(7) { background-color: #d75369; }
  .table2 .row6 td:nth-child(8) { background-color: #d75369; }
  .table2 .row6 td:nth-child(9) { background-color: #d75369; }
  .table2 .row7 td:nth-child(1) { background-color: #d75369; }
  .table2 .row7 td:nth-child(2) { background-color: #d75369; }
  .table2 .row7 td:nth-child(3) { background-color: #d75369; }
  .table2 .row7 td:nth-child(4) { background-color: #d75369; }
  .table2 .row7 td:nth-child(5) { background-color: #d75369; }
  .table2 .row7 td:nth-child(6) { background-color: #d75369; }
  .table2 .row7 td:nth-child(7) { background-color: #d75369; }
  .table2 .row7 td:nth-child(8) { background-color: #d75369; }
  .table2 .row7 td:nth-child(9) { background-color: #d75369; }
  .table2 .row8 td:nth-child(1) { background-color: #d75369; }
  .table2 .row8 td:nth-child(2) { background-color: #3c58a5; }
  .table2 .row8 td:nth-child(3) { background-color: #3c58a5; }
  .table2 .row8 td:nth-child(4) { background-color: #3c58a5; }
  .table2 .row8 td:nth-child(5) { background-color: #3c58a5; }
  .table2 .row8 td:nth-child(6) { background-color: #3c58a5; }
  .table2 .row8 td:nth-child(7) { background-color: #14a0ec; }
  .table2 .row8 td:nth-child(8) { background-color: #14a0ec; }
  .table2 .row8 td:nth-child(9) { background-color: #14a0ec; }
  .table2 .row9 td:nth-child(1) { background-color: #14a0ec; }
  .table2 .row9 td:nth-child(2) { background-color: #14a0ec; }
  .table2 .row9 td:nth-child(3) { background-color: #14a0ec; }
  .table2 .row9 td:nth-child(4) { background-color: #e97e8d; }
  .table2 .row9 td:nth-child(5) { background-color: #e97e8d; }
  .table2 .row9 td:nth-child(6) { background-color: #e97e8d; }
  .table2 .row9 td:nth-child(7) { background-color: #e97e8d; }
  .table2 .row9 td:nth-child(8) { background-color: #e97e8d; }
  .table2 .row9 td:nth-child(9) { background-color: #e97e8d; }
  .table2 .row10 td:nth-child(1) { background-color: #e97e8d; }
  .table2 .row10 td:nth-child(2) { background-color: #e97e8d; }
  .table2 .row10 td:nth-child(3) { background-color: #e97e8d; }
  .table2 .row10 td:nth-child(4) { background-color: #ade48b; }
  .table2 .row10 td:nth-child(5) { background-color: #ade48b; }
  .table2 .row10 td:nth-child(6) { background-color: #ade48b; }
  .table2 .row10 td:nth-child(7) { background-color: #ade48b; }
  .table2 .row10 td:nth-child(8) { background-color: #ade48b; }
  .table2 .row10 td:nth-child(9) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(1) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(2) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(3) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(4) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(5) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(6) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(7) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(8) { background-color: #ade48b; }
  .table2 .row11 td:nth-child(9) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(1) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(2) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(3) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(4) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(5) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(6) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(7) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(8) { background-color: #ade48b; }
  .table2 .row12 td:nth-child(9) { background-color: #9841da; }
  .table2 .row13 td:nth-child(1) { background-color: #9841da; }
  .table2 .row13 td:nth-child(2) { background-color: #9841da; }
  .table2 .row13 td:nth-child(3) { background-color: #ab233a; }
  .table2 .row13 td:nth-child(4) { background-color: #2a5c76; }
  .table2 .row13 td:nth-child(5) { background-color: #2a5c76; }
  .table2 .row13 td:nth-child(6) { background-color: #2a5c76; }
  .table2 .row13 td:nth-child(7) { background-color: #6ed9cd; }
  .table2 .row13 td:nth-child(8) { background-color: #6ed9cd; }
  .table2 .row13 td:nth-child(9) { background-color: #6ed9cd; }
  .table2 .row14 td:nth-child(1) { background-color: #396120; }
  .table2 .row14 td:nth-child(2) { background-color: #396120; }
  .table2 .row14 td:nth-child(3) { background-color: #77c670; }
  .table2 .row14 td:nth-child(4) { background-color: #77c670; }
  .table2 .row14 td:nth-child(5) { background-color: #bf97d1; }
  .table2 .row14 td:nth-child(6) { background-color: #bf97d1; }
  .table2 .row14 td:nth-child(7) { background-color: #bf97d1; }
  .table2 .row14 td:nth-child(8) { background-color: #bf97d1; }
  .table2 .row14 td:nth-child(9) { background-color: #bf97d1; }
  .table2 .row15 td:nth-child(1) { background-color: #bf97d1; }
  /* 悬停效果 */
  .table2 td:hover {
    transform: scale(1.05); /* 缩放到105% */
    cursor: pointer;
  }
  /* 链接样式 */
  .table2 a {
    color: white !important;
    text-decoration: none !important; /* 去除链接下划线 */
  }
  /* 链接悬停样式 */
  .table2 a:hover {
    color: white !important;
    text-decoration: none !important;
  }

</style>
</head>


<body onload="showSheet('sheet1')">
<h1 class="post-title" itemprop="name headline">RNA Aptamers</h1>
    
RNA Aptamers are nucleic acid molecules that mimic antibodies by folding into complex 3D shapes that bind to specific targets. Although some aptamers exist naturally as the ligand-binding elements of riboswitches, most are generated in vitro and can be tailored for a specific target.
<br>
<br>
<br>
        
<p class="header_box" >Statistical information </p>
<!--iframe src="../plotly_pie.html" class="rounded-iframe" width="100%" height="600" frameborder="0"></iframe-->
<div id="pie-chart" style="width: 800px; height: 600px;"></div>
<script>
    var data = [{
      values: [12, 7, 73, 3, 2, 3, 3, 28, 4, 6, 8, 16, 7, 11, 3],
      labels: ['Bacteria', 'Cell', 'Mammalian', 'Other', 'Parasite', 'Prion','Toxin','Viral','RNA','Amino Acids & Peptides','Biologics & Signaling Molecules','Fluorophores','Nucleosides & Nucleotides','Pharmaceuticals','Synthetic'],
      type: 'pie',
      marker: {
        colors: ['#e97e8d', '#bf97d1', '#d75369', '#9841da', '#396120', '#77c670', '#ab233a', '#ade48b', '#6ed9cd', '#FFA07A', '#f0a570', '#385dbf', '#3c58a5', '#14a0ec','#2a5c76']
      }
    }];
    var layout = {
    };
    Plotly.newPlot('pie-chart', data, layout);
  </script>


<p>The aptamer database encompasses both aptamers with known 3D structures and those without. The following table lists the ligands of all aptamers in this database. The color coding of the table matches the hues of the pie chart displayed above, which symbolizes the various categories of aptamers. By clicking on a ligand of interest, you can access detailed information pertaining to the respective aptamer.</p>
<font>This table lists the ligands of aptamers with identified 3D structures:</font>
  <table class="table" border="1">
    <tr class="row1">
      <td><a href="https://aptamer.ribocentre.org/_posts/Citrulline-aptamer" target="_blank" onclick="handleCellClick(event)">Citrulline</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Arginine-aptamer" target="_blank" onclick="handleCellClick(event)">Arginine</a></td>
       <td><a href="https://aptamer.ribocentre.org/_posts/Chili-aptamer" target="_blank" onclick="handleCellClick(event)">Chili</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/TMR-aptamer" target="_blank" onclick="handleCellClick(event)">TMR</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Mango-aptamer(TO1-biotin)" target="_blank" onclick="handleCellClick(event)">Mango</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Mango-aptamer(TO1-biotin)" target="_blank" onclick="handleCellClick(event)">Mango II</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Mango-III-aptamer(YO3)" target="_blank" onclick="handleCellClick(event)">Mango III</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Mango-III-aptamer(YO3)" target="_blank" onclick="handleCellClick(event)">Mango IV</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Spinach-aptamer" target="_blank" onclick="handleCellClick(event)">Spinach</a></td>
    </tr>
    <tr class="row2">
    <td><a href="https://aptamer.ribocentre.org/_posts/Squash-aptamer" target="_blank" onclick="handleCellClick(event)">Squash</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Corn-aptamer" target="_blank" onclick="handleCellClick(event)">Corn</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/DIR2s-apt-aptamer" target="_blank" onclick="handleCellClick(event)">DIR2s</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Pepper-aptamer" target="_blank" onclick="handleCellClick(event)">Pepper</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/MG-aptamer" target="_blank" onclick="handleCellClick(event)">MG</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Clivias-aptamer" target="_blank" onclick="handleCellClick(event)">Clivias</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Beetroot-aptamer" target="_blank" onclick="handleCellClick(event)">Beetroot</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/FMN-aptamer" target="_blank" onclick="handleCellClick(event)">FMN</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Vitamin-B12-aptamer" target="_blank" onclick="handleCellClick(event)">Vitamin B<sub>12</sub></a></td>
    </tr>
    <tr class="row3">
    <td><a href="https://aptamer.ribocentre.org/_posts/5HTP-aptamer" target="_blank" onclick="handleCellClick(event)">5HTP</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Riboflavin-aptamer" target="_blank" onclick="handleCellClick(event)">Riboflavin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Biotin-aptamer" target="_blank" onclick="handleCellClick(event)">Biotin</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/AML1(RUNX1)-aptamer" target="_blank" onclick="handleCellClick(event)">AML1</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/A9g-RNA-aptamer" target="_blank" onclick="handleCellClick(event)">GCPII</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/eIF4A-aptamer" target="_blank" onclick="handleCellClick(event)">eIF4A</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/GRK2-aptamer" target="_blank" onclick="handleCellClick(event)">GRK2</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/IgG-aptamer" target="_blank" onclick="handleCellClick(event)">Human IgG</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/NF-kappaB-aptamer" target="_blank" onclick="handleCellClick(event)">NF-kappaB</a></td>
    </tr>
    <tr class="row4">
    <td><a href="https://aptamer.ribocentre.org/_posts/Thrombin-aptamer" target="_blank" onclick="handleCellClick(event)">Thrombin</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Lysozyme-aptamer" target="_blank" onclick="handleCellClick(event)">lysozyme</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/GlnRs-aptamer" target="_blank" onclick="handleCellClick(event)">GlnRs</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Factor-Xa-aptamer" target="_blank" onclick="handleCellClick(event)">Factor Xa</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/ATP-aptamer" target="_blank" onclick="handleCellClick(event)">ATP</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/GTP-aptamer" target="_blank" onclick="handleCellClick(event)">GTP</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Tetracycline-aptamer" target="_blank" onclick="handleCellClick(event)">Tetracycline</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/NeomycinB-RNA-aptamer" target="_blank" onclick="handleCellClick(event)">Neomycin B</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Streptomycin-RNA-Aptamer" target="_blank" onclick="handleCellClick(event)">Streptomycin</a></td>
    </tr>
    <tr class="row5">
    <td><a href="https://aptamer.ribocentre.org/_posts/Theophylline-aptamer" target="_blank" onclick="handleCellClick(event)">Theophylline</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Tobramycin-RNA-aptamer" target="_blank" onclick="handleCellClick(event)">Tobramycin</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Hfq-aptamer" target="_blank" onclick="handleCellClick(event)">Hfq</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Ribosomal-protein-S8-aptamer" target="_blank" onclick="handleCellClick(event)">ribosomal protein S8</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/TetR-aptamer" target="_blank" onclick="handleCellClick(event)">TetR</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/FC-RNA-aptamer" target="_blank" onclick="handleCellClick(event)">RNA polymerase (Pol) II</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/HIV-1-REV-peptide-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 REV peptide</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Tat-aptamer" target="_blank" onclick="handleCellClick(event)">Tat peptides</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/REX16-aptamer" target="_blank" onclick="handleCellClick(event)">HTLV-1 arginine-rich Rex peptide</a></td>
    </tr>
    <tr class="row6">
    <td><a href="https://aptamer.ribocentre.org/_posts/LR06-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 TAR RNA</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/bacteriophage-MS2-coat-protein-aptamer" target="_blank" onclick="handleCellClick(event)">Bacteriophage MS2 coat protein</a></td>
    <td><a href="https://aptamer.ribocentre.org/_posts/Bovine-prion-protein(bPrP)-aptamer" target="_blank" onclick="handleCellClick(event)">Bovine prion</a></td>
    </tr>
  </table>
  <br>
<font>This table lists the ligands of aptamers with unknown 3D structures:</font>
<table class="table2" border="1">
    <tr class="row1">
      <td><a href="https://aptamer.ribocentre.org/_posts/DP3-aptamer" target="_blank" onclick="handleCellClick(event)">Neuropeptide Y</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Tyr-1-aptamer" target="_blank" onclick="handleCellClick(event)">L-tyrosine</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/%CE%B255-aptamer" target="_blank" onclick="handleCellClick(event)">Amyloid beta-peptide</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/L-SUP-A-004-aptamer" target="_blank" onclick="handleCellClick(event)">Substance P</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/FB-1-aptamer" target="_blank" onclick="handleCellClick(event)">Fluorescein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/II-mini3-4-aptamer" target="_blank" onclick="handleCellClick(event)">Hoechst</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Okra-aptamer" target="_blank" onclick="handleCellClick(event)">Okra</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Dopamine-aptamer" target="_blank" onclick="handleCellClick(event)">Dopamine</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Clone-5-aptamer" target="_blank" onclick="handleCellClick(event)">Sialyl Lewis X</a></td>
    </tr>
    <tr class="row2">
      <td><a href="https://aptamer.ribocentre.org/_posts/SPC-aptamer" target="_blank" onclick="handleCellClick(event)">Sphingosylphosphorylcholine</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Gp43-aptamer" target="_blank" onclick="handleCellClick(event)">T4 DNA polymerase</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/bFGF-aptamer" target="_blank" onclick="handleCellClick(event)">Basic fibroblast growth factor</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/PKC-aptamer" target="_blank" onclick="handleCellClick(event)">Protein kinase C</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/VEGF-aptamer" target="_blank" onclick="handleCellClick(event)">Vascular Endothelial Growth Factor</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/14.12-aptamer" target="_blank" onclick="handleCellClick(event)">L-selectin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/E2F-E1-aptamer" target="_blank" onclick="handleCellClick(event)">E2F</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/21.01-aptamer" target="_blank" onclick="handleCellClick(event)">RAF1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/APC-99-aptamer" target="_blank" onclick="handleCellClick(event)">Human activated protein C</a></td>
    </tr>
    <tr class="row3">
      <td><a href="https://aptamer.ribocentre.org/_posts/77-aptamer" target="_blank" onclick="handleCellClick(event)">CSDE1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/TR-D28-aptamer" target="_blank" onclick="handleCellClick(event)">CD18</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/P19-aptamer" target="_blank" onclick="handleCellClick(event)">Neurotensin receptor</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/11-1.41-aptamer" target="_blank" onclick="handleCellClick(event)">Angiopoietin-2</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/A30-aptamer" target="_blank" onclick="handleCellClick(event)">HER3</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/No.21-aptamer" target="_blank" onclick="handleCellClick(event)">Eukaryotic initiation factor 4A</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Bovine-thrombin-aptamer" target="_blank" onclick="handleCellClick(event)">Bovine thrombin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/tMG-RNA-aptamer" target="_blank" onclick="handleCellClick(event)">Rat monoclonal antibody</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/TCF-1-aptamer" target="_blank" onclick="handleCellClick(event)">T cytokine 1</a></td>
    </tr>
    <tr class="row4">
      <td><a href="https://aptamer.ribocentre.org/_posts/RANK-aptamer" target="_blank" onclick="handleCellClick(event)">RANK</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Cytohesin-2-aptamer" target="_blank" onclick="handleCellClick(event)">Cytohesin-2</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/NFAT-aptamer" target="_blank" onclick="handleCellClick(event)">Nuclear factor of activated T-cells</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/hTNF-α-aptamer" target="_blank" onclick="handleCellClick(event)">hTNF α</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/tFKBP*3R-2G-aptamer" target="_blank" onclick="handleCellClick(event)">Engineered FKBP protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/eIF4E-aptamer" target="_blank" onclick="handleCellClick(event)">eIF4E</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/3Dpol-aptamer" target="_blank" onclick="handleCellClick(event)">RNA-dependent RNA polymerase</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/B1-CT-aptamer" target="_blank" onclick="handleCellClick(event)">BACE1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Bovine-factor-IX-aptamer" target="_blank" onclick="handleCellClick(event)">Bovine factor IX</a></td>
    </tr>
    <tr class="row5">
      <td><a href="https://aptamer.ribocentre.org/_posts/polβ-aptamer" target="_blank" onclick="handleCellClick(event)">DNA polymerase β</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/TbRIII-aptamer" target="_blank" onclick="handleCellClick(event)">Transforming growth factor-β type III</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/AMPA-receptors-Aptamer" target="_blank" onclick="handleCellClick(event)">AMPA receptors</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/The-protein-calsenilin-aptamer" target="_blank" onclick="handleCellClick(event)">Ca<sup>2+</sup>-binding protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/WL-2-aptamer" target="_blank" onclick="handleCellClick(event)">β2-microglobulin fibrils</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/AN58-aptamer" target="_blank" onclick="handleCellClick(event)">GluR2 AMPA receptors</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/TfR-ECD-aptamer" target="_blank" onclick="handleCellClick(event)">Transferrin receptor protein 1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/E2-aptamer" target="_blank" onclick="handleCellClick(event)">Amyloid beta-peptide</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/PAI-1-aptamer" target="_blank" onclick="handleCellClick(event)">Plasminogen activator inhibitor-1</a></td>
    </tr>
    <tr class="row6">
      <td><a href="https://aptamer.ribocentre.org/_posts/J18-aptamer" target="_blank" onclick="handleCellClick(event)">Epithelial Growth Factor Receptor</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/ZAP-aptamer" target="_blank" onclick="handleCellClick(event)">Zinc-finger antiviral protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/PTP1B-aptamer" target="_blank" onclick="handleCellClick(event)">Protein tyrosine phosphatase 1B</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/IL-17A-aptamer" target="_blank" onclick="handleCellClick(event)">IL-17A</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/CypB-aptamer" target="_blank" onclick="handleCellClick(event)">Cyclophilin B</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/OX40-aptamer" target="_blank" onclick="handleCellClick(event)">OX40</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Glycoprotein-2-(GP2)-protein-aptamer" target="_blank" onclick="handleCellClick(event)">Glycoprotein 2</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/ERα-aptamer" target="_blank" onclick="handleCellClick(event)">Estrogen receptor α</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Gastrointestinal-carcinoembryonic-antigen-(CEA)-aptamer" target="_blank" onclick="handleCellClick(event)">Carcinoembryonic antigen</a></td>
    </tr>
    <tr class="row7">
      <td><a href="https://aptamer.ribocentre.org/_posts/Interleukin-6-receptor-domain-3-(IL-6R-D3)-aptamer" target="_blank" onclick="handleCellClick(event)">IL-6R</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Restriction-endonucleases-(REases)-KpnI-aptamer" target="_blank" onclick="handleCellClick(event)">REases KpnI</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Ubiquitin-carboxyl-terminal-hydrolase37-(UCH37)-aptamer" target="_blank" onclick="handleCellClick(event)">Ubiquitin carboxyl-terminal hydrolase37</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/AB9-aptamer" target="_blank" onclick="handleCellClick(event)">AMPA and kainate receptors</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Gastrointestinal-cancer-antigen-50-aptamer" target="_blank" onclick="handleCellClick(event)">Gastrointestinal cancer antigen 50</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Cancer-antigen-72-4(CA72-4)-aptamer" target="_blank" onclick="handleCellClick(event)">Cancer antigen 72–4</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Chemokine-CCL17-aptamer" target="_blank" onclick="handleCellClick(event)">Chemokine CCL17</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/IL2-CD25-aptermer" target="_blank" onclick="handleCellClick(event)">IL2–CD25</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Mixed-lineage-leukemia-proteins-(MLL)-aptermer" target="_blank" onclick="handleCellClick(event)">Mixed lineage leukemia proteins</a></td>
    </tr>
    <tr class="row8">
      <td><a href="https://aptamer.ribocentre.org/_posts/Aβ42-aptamer" target="_blank" onclick="handleCellClick(event)">Aβ42</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/XBA-RNA-aptamer" target="_blank" onclick="handleCellClick(event)">Xanthine</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/cAMP-aptamer" target="_blank" onclick="handleCellClick(event)">cAMP</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/rafl7s-aptamer" target="_blank" onclick="handleCellClick(event)">ATP(2)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/bG40min-aptamer" target="_blank" onclick="handleCellClick(event)">ATP(3)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Adenine-aptamer" target="_blank" onclick="handleCellClick(event)">Adenine</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/70cam6-aptamer" target="_blank" onclick="handleCellClick(event)">Chloramphenicol</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Lividomycin-aptamer" target="_blank" onclick="handleCellClick(event)">Lividomycin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/SRB-2-aptamer" target="_blank" onclick="handleCellClick(event)">Sulforhodamine B</a></td>
    </tr>
    <tr class="row9">
      <td><a href="https://aptamer.ribocentre.org/_posts/J6f1-aptamer" target="_blank" onclick="handleCellClick(event)">Tobramycin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Doxycyline-aptamer" target="_blank" onclick="handleCellClick(event)">Doxycyline</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Codeine-aptamer" target="_blank" onclick="handleCellClick(event)">Codeine</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Escherichia-coli-aptamer" target="_blank" onclick="handleCellClick(event)">E.Coil</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Protein-tyrosine-phosphatases-aptamer" target="_blank" onclick="handleCellClick(event)">Protein tyrosine phosphatases</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Subtilisin-aptamer" target="_blank" onclick="handleCellClick(event)">Subtilisin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Peptide-release-factor-1-aptamer" target="_blank" onclick="handleCellClick(event)">Peptide release factor 1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Colicin-E3-aptamer" target="_blank" onclick="handleCellClick(event)">Colicin E3</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Type-IVB-Pili-aptamer" target="_blank" onclick="handleCellClick(event)">Type IVB Pili</a></td>
    </tr>
    <tr class="row10">
      <td><a href="https://aptamer.ribocentre.org/_posts/CsrA-aptamer" target="_blank" onclick="handleCellClick(event)">CsrA</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/RF-1-aptamer" target="_blank" onclick="handleCellClick(event)">Escherichia coli release factor 1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Elongation-factor-SelB-aptamer" target="_blank" onclick="handleCellClick(event)">Elongation factor SelB</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/ligand-1.1-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 RT</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/59-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 Rev protein (1)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/C52-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 Rev protein (2)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/P5-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 integrase</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/YT1-aptamer" target="_blank" onclick="handleCellClick(event)">HTLV-1 Tax protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Clone-31-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 Tat protein</a></td>
    </tr>
    <tr class="row11">
      <td><a href="https://aptamer.ribocentre.org/_posts/10G-1-aptamer" target="_blank" onclick="handleCellClick(event)">HCV NS3 protease (1)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/G9-II-aptamer" target="_blank" onclick="handleCellClick(event)">HCV NS3 protease (2)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/R5-helix-peptide-aptamer" target="_blank" onclick="handleCellClick(event)">R5 helix peptide</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/RNA22-aptamer" target="_blank" onclick="handleCellClick(event)">Wilms tumor protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/B.2-aptamer" target="_blank" onclick="handleCellClick(event)">HCV NS5B (1)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HCV-aptamer" target="_blank" onclick="handleCellClick(event)">HCV NS5B (2)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HSV-1-US11-aptamer" target="_blank" onclick="handleCellClick(event)">HSV-1 US11</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Hemagglutinin-aptamer" target="_blank" onclick="handleCellClick(event)">Hemagglutinin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/H3N2-aptamer" target="_blank" onclick="handleCellClick(event)">H3N2 Haemagglutinin</a></td>
    </tr>
    <tr class="row12">
      <td><a href="https://aptamer.ribocentre.org/_posts/SARS-CoV-N-protein-aptamer" target="_blank" onclick="handleCellClick(event)">SARS-CoV N protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HPV-16-E7-oncoprotein-aptamer" target="_blank" onclick="handleCellClick(event)">HPV-16 E7 protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HBV-aptamer" target="_blank" onclick="handleCellClick(event)">HBV P protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HIRRV-aptamer" target="_blank" onclick="handleCellClick(event)">Hirame rhabdovirus</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HPAI-H5N1-aptamer" target="_blank" onclick="handleCellClick(event)">H5N1/H7N7 Hemagglutinin (HA)</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Hemagglutinin-(HA)-protein-aptamer" target="_blank" onclick="handleCellClick(event)">gHA1</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HIV-1-PR-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 protease</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HIV-1-CA-aptamer" target="_blank" onclick="handleCellClick(event)">HIV-1 capsid</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/B52-aptamer" target="_blank" onclick="handleCellClick(event)">Serine/arginine-rich (SR) proteins</a></td>
    </tr>
    <tr class="row13">
      <td><a href="https://aptamer.ribocentre.org/_posts/Mitochondrion-aptamer" target="_blank" onclick="handleCellClick(event)">Mitochondrion</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Mbl-aptamer" target="_blank" onclick="handleCellClick(event)">Drosophila muscleblind protein Mbl</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Pepocin-aptamer" target="_blank" onclick="handleCellClick(event)">Pepocin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/B4-25-aptamer" target="_blank" onclick="handleCellClick(event)">Reactive Blue 4</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/B4-25-aptamer" target="_blank" onclick="handleCellClick(event)">Cibacron Blue 3GA</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/D8-aptamer" target="_blank" onclick="handleCellClick(event)">Sephadex G-100</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/109.2-3-aptamer" target="_blank" onclick="handleCellClick(event)">16S rRNA decoding region</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/tRNA-aptamer" target="_blank" onclick="handleCellClick(event)">Yeast tRNA</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/RNA-loop-aptamer" target="_blank" onclick="handleCellClick(event)">RNA stem-loop</a></td>
      </tr>
<tr class="row14">
      <td><a href="https://aptamer.ribocentre.org/_posts/CED-9-aptamer" target="_blank" onclick="handleCellClick(event)">Cell death abnormality gene 9</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Trypanosome-VSG-aptamer" target="_blank" onclick="handleCellClick(event)">Variant surface glycoprotein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Prion-protein1-aptamer" target="_blank" onclick="handleCellClick(event)">Hamster prion protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/Prion-protein2-aptamer" target="_blank" onclick="handleCellClick(event)">Sheep prion protein</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/pUC19-aptamer" target="_blank" onclick="handleCellClick(event)">β-catenin</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/HER2-aptamer" target="_blank" onclick="handleCellClick(event)">Breast cancer cells</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/E3-aptamer" target="_blank" onclick="handleCellClick(event)">Prostate cancer cell</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/TNBC-aptamer" target="_blank" onclick="handleCellClick(event)">Triple-negative breast cancer</a></td>
      <td><a href="https://aptamer.ribocentre.org/_posts/CD133-aptamer" target="_blank" onclick="handleCellClick(event)">Cell line Hep3B CD133</a></td>
    </tr>
   <tr class="row15">
      <td><a href="https://aptamer.ribocentre.org/_posts/GL56-aptamer" target="_blank" onclick="handleCellClick(event)">Glioma cells</a></td>
    </tr>
</table>

<!--img src="/images/aptamers/Aptamers_classification.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive"-->
<div style="display: flex; justify-content: center;">   
</div>

<!--a href="/downloads/riboswitches_page/Classification_of_Riboswitches.pdf" target="_blank" download="Classification_of_Riboswitches.pdf"><button class="btn btn-secondary" style="color:#520049" ><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download FIGURE</button></a-->   

<!--p>For more detailed information about each Aptamer, please browse the table below.</p-->
<br>
<br>
<br>

<p class="header_box" >Detail information</p>    
This section lists all the experimentally validated aptamers.

<br><br>
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
  <!--select id="downloadOptions">
    <option value="" disabled selected>Select an option</option>
    <option value="/downloads/RNA-aptamers_page/Small_molecules.xlsx">Small molecules</option>
     <option value="/downloads/RNA-aptamers_page/Proteins.xlsx">Proteins</option>
      <option value="/downloads/RNA-aptamers_page/Nucleic_acids.xlsx">Nucleic acids</option>
      <option value="/downloads/RNA-aptamers_page/Others.xlsx">Others</option>
    <option value="/downloads/RNA-aptamers/All_tables.xlsx">all table in this page </option>
  </select-->
  <!-- Download button -->
  <!--button class="button" onclick="downloadExcel()">Download</button-->
</div>
  <!-- 按钮 -->
  <!--div class="button-container">
      <button class="button" onclick="showSheet('sheet1')">Small molecules</button>
      <button class="button" onclick="showSheet('sheet2')">Proteins</button>
      <button class="button" onclick="showSheet('sheet3')">Nucleic acids</button>
      <button class="button" onclick="showSheet('sheet3')">Others</button>
  </div-->
        
<div id="sheet1" class="sheet">
    <h2>Small molecules</h2>
    <p style="color:#FF4136;">You can download the tables by clicking on the five buttons below.</p>
    <table id="cfttable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ATP-aptamer" target="_blank" style="color:#520049"><b>ATP aptamer</b></a></td>
        <td name="td2">ATP,<br>Adenosine</td>
        <td name="td3">ATP (Adenosine 5'-triphosphate) is an important substance for energy storage and metabolism in the body, which provides energy for metabolism and plays a role as a coenzyme in cells. ATP is an important endogenous signal molecule in immunity and inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7687750/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1AM0" target="_blank" style="color:#520049"><b>1AM0</b> </a>(AMP)<br><a href="https://www.rcsb.org/structure/1RAW" target="_blank" style="color:#520049"><b>1RAW</b> </a>(AMP)</td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B4-25-aptamer" target="_blank" style="color:#520049"><b>B4-25 aptamer</b></a></td>
        <td name="td2">Reactive Blue 4</td>
        <td name="td3">Reactive Blue 4 is an anthraquinone dye, as a single colorimetric chemosensor for sequential determination of multiple analytes with different optical responses in aqueous media. Reactive Blue 4 is phytotoxic, cytotoxic and genotoxic.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B4-25-aptamer" target="_blank" style="color:#520049"><b>CB-42 aptamer</b></a></td>
        <td name="td2">Cibacron Blue 3GA</td>
        <td name="td3">Cibacron Blue 3G-A is an anthraquinone dye, inhibits the R46 β-lactamase with a Ki value of 1.2 uM.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Pepper-aptamer" target="_blank" style="color:#520049"><b>Pepper aptamer</b></a></td>
        <td name="td2">HBC</td>
        <td name="td3">HBC ((4-((2-hydroxyethyl)(methyl)amino)-benzylidene)-cyanophenyl-acetonitrile) is a synthetic dye similar to GFP fluorophores, featuring a structurally rigid electron acceptor and a strong electron donor.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/31548726/" target="_blank" style="color:#520049"><b>2019</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7EOH" target="_blank" style="color:#520049"><b>7EOH</b></a><br><a href="https://www.rcsb.org/structure/7SZU" target="_blank" style="color:#520049"><b>7SZU</b></a><br><a href="https://www.rcsb.org/structure/7U0Y" target="_blank" style="color:#520049"><b>7U0Y</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FMN-aptamer" target="_blank" style="color:#520049"><b>FMN aptamer</b></a></td>
        <td name="td2">Flavin mononucleotide (FMN)</td>
        <td name="td3">Flavin mononucleotide (FMN)  is a cofactor that mediates oxidation–reduction reactions when bound as a prosthetic group in flavoproteins. The chromophore (isoalloxazine ring) of FMN serves as a transient carrier of a pair of hydrogen atoms removed from the substrate molecule in redox reactions catalyzed by these enzymes.</td>
        <td name="td4"><a href="https://onlinelibrary.wiley.com/doi/10.1002/anie.199410841" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1FMN" target="_blank" style="color:#520049"><b>1FMN</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GTP-aptamer" target="_blank" style="color:#520049"><b>GTP aptamer</b></a></td>
        <td name="td2">Guanosine-5'-triphosphate (GTP)</td>
        <td name="td3">Guanosine-5'-triphosphate (GTP) is a purine nucleoside triphosphate and serves as an essential building block for RNA synthesis during transcription. Structurally, it closely resembles guanosine, differing primarily in the presence of a triphosphate group attached to the ribose sugar.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2AU4" target="_blank" style="color:#520049"><b>2AU4</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tetracycline-aptamer" target="_blank" style="color:#520049"><b>Tetracycline aptamer</b></a></td>
        <td name="td2">Tetracycline</td>
        <td name="td3">Tetracycline antibiotics constitute a broad-spectrum class of compounds that share a common fundamental structure. They are either directly extracted from several species of Streptomyces bacteria or derived semi-synthetically from the compounds initially isolated from these bacteria.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>2001</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3EGZ" target="_blank" style="color:#520049"><b>3EGZ</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Corn-aptamer" target="_blank" style="color:#520049"><b>Corn aptamer</b></a></td>
        <td name="td2">DFHO</td>
        <td name="td3">3,5-difluoro-4-hydroxybenzylidene imidazolinone-2-oxime (DFHO) is a Corn homologous ligand that fluoresces yellow upon excitation and is used to image RNA in living cells. It features a benzylidene imidazolinone core with fluorine and hydroxy functional groups, contributing to its unique chemical reactivity and properties. DFHO is known for its role in fluorescent imaging or as a molecular probe, taking advantage of its fluorescence characteristics and stability. The compound's structural modifications allow for tunable optical and electronic properties, making it valuable in areas such as bioimaging, photonics, and sensor development.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28945233/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://doi.org/10.2210/pdb5BJP/pdb" target="_blank" style="color:#520049"><b>5BJP</b></a><br><a href="https://www.rcsb.org/structure/5BJO" target="_blank" style="color:#520049"><b>5BJO</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NeomycinB-aptamer" target="_blank" style="color:#520049"><b>NeomycinB aptamer</b></a></td>
        <td name="td2">NeomycinB</td>
        <td name="td3">Neomycin is an aminoglycoside antibiotic and a potent inhibitor of RNase P cleavage activity. Neomycin has excellent killing effect on gram-negative and Gram-positive bacteria. Neomycin includes neomycin A, B, C three components.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9383458/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NEM" target="_blank" style="color:#520049"><b>1NEM</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Streptomycin-aptamer" target="_blank" style="color:#520049"><b>Streptomycin aptamer</b></a></td>
        <td name="td2">Streptomycin (STR)</td>
        <td name="td3">Streptomycin (STR) is an antibiotic medication used to treat a number of bacterial infections, including tuberculosis, Mycobacterium avium complex, endocarditis, brucellosis, burkholderia infection, plague, tularemia, and rat bite fever. For active tuberculosis it is often given together with isoniazid, rifampicin, and pyrazinamide. It is administered by injection into a vein or muscle.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NTA" target="_blank" style="color:#520049"><b>1NTA</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Theophylline-aptamer" target="_blank" style="color:#520049"><b>Theophylline aptamer</b></a></td>
        <td name="td2">Theophylline</td>
        <td name="td3">Theophylline, also known as 1,3-dimethylxanthine, is a drug that inhibits phosphodiesterase and blocks adenosine receptors. It is used to treat chronic obstructive pulmonary disease (COPD) and asthma. It is pharmacology is similar to other methylxanthine drugs (e.g., theobromine and caffeine)</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7510417/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EHT" target="_blank" style="color:#520049"><b>1EHT</b></a><br><a href="https://www.rcsb.org/structure/8D28" target="_blank" style="color:#520049"><b>8D28</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tobramycin-aptamer" target="_blank" style="color:#520049"><b>Tobramycin aptamer</b></a></td>
        <td name="td2">Tobramycin</td>
        <td name="td3">Tobramycin is an aminoglycoside antibiotic derived from Streptomyces tenebrarius that is used to treat various types of bacterial infections, particularly Gram-negative infections. Tobramycin works by binding to a site on the bacterial 30S and 50S ribosome, preventing formation of the 70S complex.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1TOB" target="_blank" style="color:#520049"><b>1TOB</b></a><br><a href="https://www.rcsb.org/structure/2TOB" target="_blank" style="color:#520049"><b>2TOB</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/5HTP-aptamer" target="_blank" style="color:#520049"><b>5HTP aptamer</b></a></td>
        <td name="td2">5-Hydroxytryptophan (5HTP)</td>
        <td name="td3">5-Hydroxytryptophan (5HTP), also known as oxitriptan, is a naturally occurring amino acid and chemical precursor as well as a metabolic intermediate in the biosynthesis of the neurotransmitter serotonin.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28092358/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5KPY" target="_blank" style="color:#520049"><b>5KPY</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FAD-aptamer" target="_blank" style="color:#520049"><b>FAD aptamer</b></a></td>
        <td name="td2">Flavin adenine dinucleotide(FAD)<br>Flavin mononucleotide(FMN)<br>Riboflavin(Rb)</td>
        <td name="td3">Flavin adenine dinucleotide (FAD) is a redox-active coenzyme associated with various proteins, which is involved with several enzymatic reactions in metabolism. A flavoprotein is a protein that contains a flavin group, which may be in the form of FAD or flavin mononucleotide (FMN).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/36097297/" target="_blank" style="color:#520049"><b>2022</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7RWR" target="_blank" style="color:#520049"><b>7RWR</b></a> (FMN)</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Citrulline-aptamer" target="_blank" style="color:#520049"><b>Citrulline aptamer</b></a></td>
        <td name="td2">Citrulline</td>
        <td name="td3">Citrulline is a metabolic intermediate within the urea cycle, which is the pathway by which mammals excrete ammonia by converting it into urea. Citrulline is also produced as a byproduct of the enzymatic production of nitric oxide from the amino acid arginine, catalyzed by nitric oxide synthase. In the yeast species Saccharomyces cerevisiae, citrulline is a metabolic intermediate in the latter, cytosolic half of the arginine biosynthesis pathway.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1KOD" target="_blank" style="color:#520049"><b>1KOD</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Arginine-aptamer" target="_blank" style="color:#520049"><b>Arginine aptamer</b></a></td>
        <td name="td2">Arginine</td>
        <td name="td3">Arginine is the amino acid with the formula (H2N)(HN)CN(H)(CH2)3CH(NH2)CO2H.  The molecule features a guanidino group appended to a standard amino acid framework.  The guanidine group in arginine is the precursor for the biosynthesis of nitric oxide.  Like all amino acids, it is a white, water-soluble solid.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9631062/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1KOC" target="_blank" style="color:#520049"><b>1KOC</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Vitamin-B12-aptamer" target="_blank" style="color:#520049"><b>Vitamin B12 aptamer</b></a></td>
        <td name="td2">Cyanocobalamin (vitamin B<sub>12</sub>)</td>
        <td name="td3">Cyanocobalamin (commonly known as Vitamin B<sub>12</sub>) is a highly complex, essential vitamin, owing its name to the fact that it contains the mineral, cobalt. This vitamin is produced naturally by bacteria, and is necessary for DNA synthesis and cellular energy production. Vitamin B<sub>12</sub> has many forms, including the cyano-, methyl-, deoxyadenosyl- and hydroxy-cobalamin forms. The cyano form, is the most widely used form in supplements and prescription drugs. Several pharmaceutical forms of cyanocobalamin have been developed, including the tablet, injection, and nasal spray forms.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1ET4" target="_blank" style="color:#520049"><b>1ET4</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/DIR2s-apt-aptamer" target="_blank" style="color:#520049"><b>DIR2s-apt aptamer</b></a></td>
        <td name="td2">OTB-SO3<br>OTB-SO3, Fab</td>
        <td name="td3">OTB (3-Methyl-2-[(3-methyl-1,3-benzothiazol-3-ium-2-yl)methylidene]-1,3-benzoxazole) is a cyanine dye that fluoresces blue when excited.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28644615/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6DB9" target="_blank" style="color:#520049"><b>6DB9 (OTB-SO3)</b></a><br><br><a href="https://www.rcsb.org/structure/6DB8" target="_blank" style="color:#520049"><b>6DB8 (OTB-SO3, Fab)</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Beetroot-aptamer" target="_blank" style="color:#520049"><b>Beetroot aptamer</b></a></td>
        <td name="td2">ThT<br>DFHO<br>DFAME</td>
        <td name="td3">ThT (Thioflavin T) are fluorescent dyes used for histology staining and biophysical studies of protein aggregation and investigate amyloid formation. They are also used in biophysical studies of the electrophysiology of bacteria.<br>DFHO (3,5-difluoro-4-hydroxybenzylidene imidazolinone-2-oxime) is a Corn homologous ligand that fluoresces yellow upon excitation and is used to image RNA in living cells.<br>DFAME is a red fluorophore. Beetroot and Corn are dimeric fluorogenic RNA aptamers that can bind to DFAME to form Beetroot-DFAME (Kd=460 nM) and Corn-DFAME (Kd= 3600 nM). Beetroot-DFAME (Kd=460 nM) and Corn-DFAME can be used to form RNA assemblies in living cells. Creating RNA assemblies can be used for the study of RNA Nanostructures. DNA/RNA Nanostructures would be useful in cell and gene therapy (CGT) research.</td>
        <td name="td4"><a href="https:" target="_blank" style="color:#520049"><b>2022</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/8EYW" target="_blank" style="color:#520049"><b>8EYW</b></a><br><a href="https://www.rcsb.org/structure/8EYV" target="_blank" style="color:#520049"><b>8EYV</b></a><br><a href="https://www.rcsb.org/structure/8EYU" target="_blank" style="color:#520049"><b>8EYU</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Chili-aptamer" target="_blank" style="color:#520049"><b>Chili aptamer</b></a></td>
        <td name="td2">DMHBI<br>DMHBO+</td>
        <td name="td3">DMHBI (4-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-1,2-dimethyl-4,5-dihydro-1H-imidazol-5-one) is predominantly found in the phenolic form, the brighter DMFBI mimics EGFP and is anionic under standard conditions. The DMFBI-RNA complex has been called Spinach, it is the first fluorescent RNA tag that is both selective and non-toxic. It only fluoresces when bound to RNA, is resistant to photobleaching and has been used to follow RNA tagged molecules as they move through cells.----From Green Fluorescent Protein<br>DMHBO+ ([4-[(2Z,4Z)-4-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-2-(nitrosomethylidene)-5-oxoimidazolidin-1-yl]phenyl]-trimethylazanium) is a cationic chromophore that binds to the Chili aptamer with a Kd of 12 nM. The Chili-DMHBO+ complex is an ideal fluorescence donor for FRET to the rhodamine dye Atto 590, suitable for imaging RNA in cells. Ex/Em=456/592 nm.</td>
        <td name="td4"><a href="https:" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7OAW" target="_blank" style="color:#520049"><b>7OAW (DMHBI+)</b></a><br><br><a href="https://www.rcsb.org/structure/7OAX" target="_blank" style="color:#520049"><b>7OAX</b></a><br><br><a href="https://www.rcsb.org/structure/7OA3" target="_blank" style="color:#520049"><b>7OA3</b></a><br><br><a href="https://www.rcsb.org/structure/7OAV" target="_blank" style="color:#520049"><b>7OAV (DMHBO+)</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TMR-aptamer" target="_blank" style="color:#520049"><b>TMR aptamer</b></a></td>
        <td name="td2">TMR (Tetramethylrhodamine)</td>
        <td name="td3">TMR (tetramethylrhodamine) is a rhodamine in which four hydrogens have been replaced by methyl groups. Forms such as tetramethylrhodamine dextran are often used as fluorescent tracer dyes in cell research.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20159999/" target="_blank" style="color:#520049"><b>2010</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6GZK" target="_blank" style="color:#520049"><b>6GZK</b></a><br><a href="https://www.rcsb.org/structure/6GZR" target="_blank" style="color:#520049"><b>6GZR</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-aptamer(TO1-biotin)" target="_blank" style="color:#520049"><b>Mango aptamer(TO1-biotin)</b></a></td>
        <td name="td2">TO1-Biotin</td>
        <td name="td3">TO1 (Thiazole Orange) is an asymmetric cyanine fluorophore, which contains a benzothiazole ring covalently linked to a quinoline ring via a monomethine bridge.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5V3F" target="_blank" style="color:#520049"><b>5V3F</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-III-aptamer(YO3)" target="_blank" style="color:#520049"><b>Mango-III aptamer(YO3)</b></a></td>
        <td name="td2">Oxazole yellow 3 (YO3)</td>
        <td name="td3">YO3 (Oxazole yellow 3) is a synthetic fluorescent small molecule whose spectral properties are very similar to Texas Red. YO3-biotin fluoresces with comparable intensities when bound in either the Mango or the Spinach construct, similarly to TO1-biotin. DFHBI-1T outcompetes YO3-biotin bound in Spinach, whereas YO3-biotin is unable to outcompete DFHBI-1T bound in Spinach.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>2014</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6UP0" target="_blank" style="color:#520049"><b>6UP0</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-aptamer" target="_blank" style="color:#520049"><b>Spinach aptamer</b></a></td>
        <td name="td2">DFHBI</td>
        <td name="td3">DFHBI ((Z)-4-(3,5-difluoro- 4-hydroxybenzylidene)-1,2-dimethyl-1H-imidazol-5(4H)-one) is a small molecule that resembles the chromophore of green fluorescent protein (GFP). Spinach and DFHBI are essentially nonfluorescent when unbound, whereas the Spinach-DFHBI complex is brightly fluorescent both in vitro and in living cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4TS0" target="_blank" style="color:#520049"><b>4TS0</b></a><br><a href="https://www.rcsb.org/structure/4TS2" target="_blank" style="color:#520049"><b>4TS2</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/MG-aptamer" target="_blank" style="color:#520049"><b>MG aptamer</b></a></td>
        <td name="td2">Malachite green (MG)</td>
        <td name="td3">MG (Malachite green) is an organic compound that is used as a dyestuff and controversially as an antimicrobial in aquaculture. Malachite green is traditionally used as a dye for materials such as silk, leather, and paper. Despite its name the dye is not prepared from the mineral malachite; the name just comes from the similarity of color.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10339553/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1Q8N" target="_blank" style="color:#520049"><b>1Q8N</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Biotin-aptamer" target="_blank" style="color:#520049"><b>Biotin aptamer</b></a></td>
        <td name="td2">Biotin</td>
        <td name="td3">Biotin is one of the vitamin B groups, also known as vitamin H, vitamin B7, coenzyme R (Coenzyme R) and so on. Biotin is abundant in liver, kidney, yeast and milk, and it is an important factor for organisms to fix carbon dioxide. It is easy to combine with protein Avidin in egg white. Eating a large amount of raw protein can hinder the absorption of biotin and lead to biotin deficiency, such as depilation, weight loss and dermatitis. Because its deficiency rarely occurs, it is often called biotin directly.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9772167/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1F27" target="_blank" style="color:#520049"><b>1F27</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/SRB-2-aptamer" target="_blank" style="color:#520049"><b>SRB-2 aptamer</b></a></td>
        <td name="td2">Sulforhodamine B</td>
        <td name="td3">Sulforhodamine B or Kiton Red 620 is a fluorescent dye with uses spanning from laser-induced fluorescence to the quantification of cellular proteins of cultured cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FB-1-aptamer" target="_blank" style="color:#520049"><b>FB-1 aptamer</b></a></td>
        <td name="td2">Fluorescein</td>
        <td name="td3">Fluorescein is an organic compound and dye based on the xanthene tricyclic structural motif, formally belonging to triarylmethine dyes family. It is available as a dark orange/red powder slightly soluble in water and alcohol.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Squash-aptamer" target="_blank" style="color:#520049"><b>Squash aptamer</b></a></td>
        <td name="td2">DFHBI-1T</td>
        <td name="td3">DFHBI-1T is a fluorescent probe that can be activated via a membrane RNA aptamer (ex/em=472 nm/507 nm).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/34937909/" target="_blank" style="color:#520049"><b>2022</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7KVU" target="_blank" style="color:#520049"><b>7KVU</b></a><br><a href="https://www.rcsb.org/structure/7KVT" target="_blank" style="color:#520049"><b>7KVT</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/II-mini3-4-aptamer" target="_blank" style="color:#520049"><b>II-mini3-4 aptamer</b></a></td>
        <td name="td2">Hoechst 33258</td>
        <td name="td3">Hoechst stains are part of a family of blue fluorescent dyes used to stain DNA. These bis-benzimides were originally developed by Hoechst AG, which numbered all their compounds so that the dye Hoechst 33342 is the 33,342nd compound made by the company. There are three related Hoechst stains: Hoechst 33258, Hoechst 33342, and Hoechst 34580. The dyes Hoechst 33258 and Hoechst 33342 are the ones most commonly used and they have similar excitation-emission spectra.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18726014/" target="_blank" style="color:#520049"><b>2008</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Okra-aptamer" target="_blank" style="color:#520049"><b>Okra aptamer</b></a></td>
        <td name="td2">ACE</td>
        <td name="td3">3-(2,3,6,7-tetrahydro-1H,5H-pyrido(3,2,1-ij)quinolin-9-yl)acrylamide- 2-cyano-N-(2-(2-aminoethoxy) ethyl) (ACE) was a non-GFP-like fluorophore, a hydrophilic derivative of 9-(2-carboxy-2-cyanovinyl) julolidine molecule rotor that has low fluorescence in solution.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/38783134/" target="_blank" style="color:#520049"><b>2024</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Clivias-aptamer" target="_blank" style="color:#520049"><b>Clivias aptamer</b></a></td>
        <td name="td2">NBSI</td>
        <td name="td3">NBSI is a typical chromophore structure consisting of an electron donor and an electron acceptor linked by π conjugation. NBSI exhibit a large Stokes shift of 80 nm when it was constrained in glycerol.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/37723244/" target="_blank" style="color:#520049"><b>2023</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/8HZE" target="_blank" style="color:#520049"><b>8HZE</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Doxycyline-aptamer" target="_blank" style="color:#520049"><b>Doxycyline aptamer</b></a></td>
        <td name="td2">Doxycyline</td>
        <td name="td3">Doxycycline is a tetracycline antibiotic that inhibits bacterial growth and is thought to have anti-inflammatory effects.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049"><b>2000</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Adenine-aptamer" target="_blank" style="color:#520049"><b>Adenine aptamer</b></a></td>
        <td name="td2">Adenine</td>
        <td name="td3">Adenine, organic compound belonging to the purine family, occurring free in tea or combined in many substances of biological importance, including the nucleic acids, which govern hereditary characteristics of all cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11705996/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/70cam6-aptamer" target="_blank" style="color:#520049"><b>Chloramphenicol aptamer</b></a></td>
        <td name="td2">Chloramphenicol (Cam)</td>
        <td name="td3">Chloramphenicol is an antibiotic useful for the treatment of a number of bacterial infections,Chloramphenicol was discovered after being isolated from Streptomyces venezuelae in 1947. Its chemical structure was identified and it was first synthesized in 1949.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049"><b>1997</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/cAMP-aptamer" target="_blank" style="color:#520049"><b>cAMP aptamer</b></a></td>
        <td name="td2">3',5'-cyclic adenosine monophosphate (cAMP)</td>
        <td name="td3">Cyclic adenosine monophosphate (cAMP, cyclic AMP, or 3',5'-cyclic adenosine monophosphate) is a second messenger, or cellular signal occurring within cells, that is important in many biological processes. cAMP is a derivative of adenosine triphosphate (ATP) and used for intracellular signal transduction in many different organisms, conveying the cAMP-dependent pathway.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10913311/" target="_blank" style="color:#520049"><b>2000</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/J6f1-aptamer" target="_blank" style="color:#520049"><b>J6f1 aptamer</b></a></td>
        <td name="td2">Tobramycin</td>
        <td name="td3">Tobramycin is an aminoglycoside antibiotic derived from Streptomyces tenebrarius that is used to treat various types of bacterial infections, particularly Gram-negative infections. Tobramycin works by binding to a site on the bacterial 30S and 50S ribosome, preventing formation of the 70S complex.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9425088/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Lividomycin-aptamer" target="_blank" style="color:#520049"><b>Lividomycin aptamer</b></a></td>
        <td name="td2">Lividomycin</td>
        <td name="td3">Lividomycin is a broad-spectrum aminoglycoside antibiotic. It is effective against most gram positive and gram negative bacteria including Mycobacterial tuberculosis (the causative agent of tuberculosis) and Pseudomonas aeruginosa.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9238640/" target="_blank" style="color:#520049"><b>1996</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/XBA-RNA-aptamer" target="_blank" style="color:#520049"><b>XBA RNA aptamer</b></a></td>
        <td name="td2">Xanthine (2,6-dioxypurine)<br>Guanine</td>
        <td name="td3">Xanthine oxidase (XO, sometimes 'XAO') is a form of xanthine oxidoreductase, a type of enzyme that generates reactive oxygen species. These enzymes catalyze the oxidation of hypoxanthine to xanthine and can further catalyze the oxidation of xanthine to uric acid.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9512549/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/rafl7s-aptamer" target="_blank" style="color:#520049"><b>rafl7s aptamer</b></a></td>
        <td name="td2">Adenosine triphosphate (ATP)</td>
        <td name="td3">ATP (Adenosine 5'-triphosphate) is an important substance for energy storage and metabolism in the body, which provides energy for metabolism and plays a role as a coenzyme in cells. ATP is an important endogenous signal molecule in immunity and inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11101810/" target="_blank" style="color:#520049"><b>2000</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Amino Acids & Peptides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/β55-aptamer" target="_blank" style="color:#520049"><b>β55 aptamer</b></a></td>
        <td name="td2">Amyloid beta-peptide(βA4(1-40))</td>
        <td name="td3">Peptides generated from AMYLOID BETA-PEPTIDES PRECURSOR. An amyloid fibrillar form of these peptides is the major component of amyloid plaques found in individuals with Alzheimer's disease and in aged individuals with trisomy 21 (DOWN SYNDROME). The peptide is found predominantly in the nervous system, but there have been reports of its presence in non-neural tissue.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11820803/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/bG40min-aptamer" target="_blank" style="color:#520049"><b>bG40min aptamer</b></a></td>
        <td name="td2">Adenosine triphosphate (ATP)</td>
        <td name="td3">ATP is an adenosine 5'-phosphate in which the 5'-phosphate is a triphosphate group. It is involved in the transportation of chemical energy during metabolic pathways. It has a role as a nutraceutical, a micronutrient, a fundamental metabolite and a cofactor. It is an adenosine 5'-phosphate and a purine ribonucleoside 5'-triphosphate. It is a conjugate acid of an ATP(3-).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11884639/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Dopamine-aptamer" target="_blank" style="color:#520049"><b>Dopamine aptamer</b></a></td>
        <td name="td2">Dopamine</td>
        <td name="td3">Dopamine is catechol in which the hydrogen at position 4 is substituted by a 2-aminoethyl group. It has a role as a cardiotonic drug, a beta-adrenergic agonist, a dopaminergic agent, a sympathomimetic agent, a human metabolite, an Escherichia coli metabolite and a mouse metabolite. It is a conjugate base of a dopaminium(1+).-----From ChEBI</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9245404/" target="_blank" style="color:#520049"><b>1997</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Amino Acids & Peptides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tyr-1-aptamer" target="_blank" style="color:#520049"><b>Tyr 1 aptamer</b></a></td>
        <td name="td2">L-tyrosine</td>
        <td name="td3">L-tyrosine is an optically active form of tyrosine having L-configuration. It has a role as an EC 1.3.1.43 (arogenate dehydrogenase) inhibitor, a nutraceutical, a micronutrient and a fundamental metabolite. It is an erythrose 4-phosphate/phosphoenolpyruvate family amino acid, a proteinogenic amino acid, a tyrosine and a L-alpha-amino acid. It is functionally related to a L-tyrosinal. It is a conjugate base of a L-tyrosinium. It is a conjugate acid of a L-tyrosinate(1-). It is an enantiomer of a D-tyrosine. It is a tautomer of a L-tyrosine zwitterion. From ChEBI.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10786843/" target="_blank" style="color:#520049"><b>2000</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Amino Acids & Peptides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/DP3-aptamer" target="_blank" style="color:#520049"><b>DP3 aptamer</b></a></td>
        <td name="td2">Neuropeptide Y (NPY)</td>
        <td name="td3">Neuropeptide Y is a 36-amino acid peptide found in many organs and in many sympathetic noradrenergic neurons. It has vasoconstrictor and diuretic activity and regulates local blood flow, glandular secretion, and smooth muscle activity. The peptide also stimulates feeding and drinking behavior and influences pituitary hormone secretion.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11756401/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/D8-aptamer" target="_blank" style="color:#520049"><b>D8 aptamer</b></a></td>
        <td name="td2">Sephadex G-100</td>
        <td name="td3">Sephadex is a common matrix used in gel filtration.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11139634/" target="_blank" style="color:#520049"><b>2001</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Clone-5-aptamer" target="_blank" style="color:#520049"><b>Clone 5 aptamer</b></a></td>
        <td name="td2">Sialyl Lewis X (sLeX)</td>
        <td name="td3">Sialyl-Lewis X (sLeX) is a salivarylated polytetrasaccharide, an endogenous antigen.Sialyl-Lewis X is a high-affinity ligand for the selectins E-, P-, and L-.Sialyl-Lewis X binds to ELAM-1 and CD62 and has the ability to inhibit CD62-mediated neutrophil recruitment at sites of inflammation. Sialyl-Lewis X binds to ELAM-1 and CD62 and has the ability to inhibit CD62-mediated neutrophil recruitment at sites of inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11178986/" target="_blank" style="color:#520049"><b>2001</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Amino Acids & Peptides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/L-SUP-A-004-aptamer" target="_blank" style="color:#520049"><b>L-SUP-A-004 aptamer</b></a></td>
        <td name="td2">Substance P</td>
        <td name="td3">Substance P is a neuropeptide consisting of 11-amino acids. It preferentially activates neurokinin-1 receptors, exterting excitatory effects on central and peripheral neurons and involved in pain transmission. It has a role as a neurotransmitter, a vasodilator agent and a neurokinin-1 receptor agonist. It is a conjugate base of a substance P(3+).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15745995/" target="_blank" style="color:#520049"><b>2005</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/SPC-aptamer" target="_blank" style="color:#520049"><b>SPC-aptamer</b></a></td>
        <td name="td2">Sphingosylphosphorylcholine (SPC)</td>
        <td name="td3">Sphingosylphosphorylcholine (SPC) is a lysosphingolipid that exerts multiple functions, including acting as a spasmogen, as a mitogenic factor for various types of cells, and sometimes as an inflammatory mediator.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Codeine-aptamer" target="_blank" style="color:#520049"><b>Codeine aptamer</b></a></td>
        <td name="td2">Codeine</td>
        <td name="td3">Codeine, chemical formula C18H21NO3, is an opioid used to treat mild to moderate pain.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17038331/" target="_blank" style="color:#520049"><b>2006</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ribostamycin-aptamer" target="_blank" style="color:#520049"><b>Ribostamycin aptamer</b></a></td>
        <td name="td2">Ribostamycin (RIO)</td>
        <td name="td3">Ribostamycin is an aminoglycoside-aminocyclitol antibiotic isolated from a streptomycete, Streptomyces ribosidificus, originally identified in a soil sample from Tsu City of Mie Prefecture in Japan. It is made up of 3 ring subunits: 2-deoxystreptamine (DOS), neosamine C, and ribose. Ribostamycin, along with other aminoglycosides with the DOS subunit, is an important broad-spectrum antibiotic with important use against human immunodeficiency virus and is considered a critically important antimicrobial by the World Health Organization.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18000033/" target="_blank" style="color:#520049"><b>2008</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2N0J" target="_blank" style="color:#520049"><b>2N0J</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ribostamycin-aptamer" target="_blank" style="color:#520049"><b>Paromomycin aptamer</b></a></td>
        <td name="td2">Paromomycin (PAR)</td>
        <td name="td3">Paromomycin is an antimicrobial used to treat a number of parasitic infections including amebiasis, giardiasis, leishmaniasis, and tapeworm infection. It is a first-line treatment for amebiasis or giardiasis during pregnancy. Otherwise, it is generally a second line treatment option. It is taken by mouth, applied to the skin, or by injection into a muscle.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18000033/" target="_blank" style="color:#520049"><b>2008</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2MXS" target="_blank" style="color:#520049"><b>2MXS</b></a></td>
      </tr>
	  </tbody>
  </table>
</div>        
    


<div id="sheet5" class="sheet">
    <h2>Proteins</h2>
    <p style="color:#FF4136;">You can download the tables by clicking on the five buttons below.</p>
    <table id="eletable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Other</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/bacteriophage-MS2-coat-protein-aptamer" target="_blank" style="color:#520049"><b>Bacteriophage MS2 coat protein aptamer</b></a></td>
        <td name="td2">Bacteriophage MS2 coat protein</td>
        <td name="td3">The coat protein of the RNA bacteriophage MS2 binds a specific stem-loop structure in viral RNA to accomplish encapsidation of the genome and translational repression of replicase synthesis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1469719/" target="_blank" style="color:#520049"><b>1992</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6MSF" target="_blank" style="color:#520049"><b>6MSF</b> </a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hfq-aptamer" target="_blank" style="color:#520049"><b>Hfq aptamer</b></a></td>
        <td name="td2">Hfq</td>
        <td name="td3">Hfq（host factor required for phage Qβ RNA replication） binds to the loop structure formed by the AG repeat sequence, which regulates gene expression.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22053080/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3HSB" target="_blank" style="color:#520049"><b>3HSB</b></a><br><a href="https://www.rcsb.org/structure/3AHU" target="_blank" style="color:#520049"><b>3AHU</b></a></td>
      </tr>    
      <tr>
        <td name="td0" rowspan = "1">Other</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>Lysozyme aptamer</b></a></td>
        <td name="td2">Lysozyme</td>
        <td name="td3">Lysozyme (EC 3.2.1.17, muramidase, N-acetylmuramide glycanhydrolase; systematic name peptidoglycan N-acetylmuramoylhydrolase) is an antimicrobial enzyme produced by animals that forms part of the innate immune system.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4M6D" target="_blank" style="color:#520049"><b>4M6D</b></a><br><a href="https://www.rcsb.org/structure/4M4O" target="_blank" style="color:#520049"><b>4M4O</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-REV-peptide-aptamer" target="_blank" style="color:#520049"><b>HIV-1 REV peptide-aptamer</b></a></td>
        <td name="td2">HIV-1 REV peptide</td>
        <td name="td3">The HIV-1 protein Rev controls a key step in viral replication by mediating nuclear output of both unspliced and single-spliced viral mRNAs.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1ULL" target="_blank" style="color:#520049"><b>1ULL</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Prion</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Bovine-prion-protein-aptamer" target="_blank" style="color:#520049"><b>Bovine prion protein aptamer</b></a></td>
        <td name="td2">Bovine prion protein</td>
        <td name="td3">A prion is a misfolded protein that induces misfolding in normal variants of the same protein, leading to cellular death. Normal cellular form of prion protein (PrP<sub>C</sub>) change into abnormal form (PrP<sub>Sc</sub>) and causes anti-prion, prevent prion and Alzheimer's disease. </td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/19098441/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2RU7" target="_blank" style="color:#520049"><b>2RU7</b></a><br><a href="https://www.rcsb.org/structure/2RSK" target="_blank" style="color:#520049"><b>2RSK</b></a><br><a href="https://www.rcsb.org/structure/2RQJ" target="_blank" style="color:#520049"><b>2RQJ</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GlnRs-aptamer" target="_blank" style="color:#520049"><b>GlnRs aptamer</b></a></td>
        <td name="td2">Glutaminyl-tRNA synthetase (GlnRs)</td>
        <td name="td3">GlnRs (Glutaminyl-tRNA synthetase) is a member of the aminoacyl tRNA synthetase family. It forms a subcomplex with arginine tRNA synthetase (RRS) and P43 (a cofactor of the aminoacyl tRNA synthetase complex), interacting closely with RRS and P43, and more weakly with other aminoacyl tRNA synthetases.</td>
        <td name="td4"><a href="https://www.proquest.com/openview/6857e35043f04e11f53714d80cdc4dcf/1?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EXD" target="_blank" style="color:#520049"><b>1EXD</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/eIF4A-aptamer" target="_blank" style="color:#520049"><b>eIF4A aptamer</b></a></td>
        <td name="td2">Mammalian translation initiation factor 4A (eIF4A)</td>
        <td name="td3">The apparent role of mammalian translation initiation factor 4A (eIF4A) is to facilitate the "melting" of secondary structure present in the 5′ untranslated region of mRNAs that impedes translation initiation, finally controlling the translation initiation. RNA aptamers to initiation factor 4A helicase hinder cap-dependent translation by blocking ATP hydrolysis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1XWP" target="_blank" style="color:#520049"><b>1XWP</b></a><br><a href="https://www.rcsb.org/structure/1XWU" target="_blank" style="color:#520049"><b>1XWU</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RBA-14-aptamer" target="_blank" style="color:#520049"><b>RBA-14 aptamer</b></a></td>
        <td name="td2">Rev<sup>93</sup></td>
        <td name="td3">Human immunodeficiency virus type 1 (HIV-1) Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6CF2" target="_blank" style="color:#520049"><b>6CF2</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GRK2-aptamer" target="_blank" style="color:#520049"><b>GRK2 aptamer</b></a></td>
        <td name="td2">G-protein-coupled receptor kinase 2 (GRK2)</td>
        <td name="td3">G-protein-coupled receptor kinase 2 (GRK2) is an enzyme that in humans is encoded by the ADRBK1 gene. GRK2 was initially called Beta-adrenergic receptor kinase (βARK or βARK1), and is a member of the G protein-coupled receptor kinase subfamily of the Ser/Thr protein kinases that is most highly similar to GRK3(βARK2).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3UZT" target="_blank" style="color:#520049"><b>3UZT</b></a><br><a href="https://www.rcsb.org/structure/3UZS" target="_blank" style="color:#520049"><b>3UZS</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-Tat-aptamer" target="_blank" style="color:#520049"><b>HIV Tat aptamer</b></a></td>
        <td name="td2">HIV Tat peptides</td>
        <td name="td3">In molecular biology, Tat is a protein that is encoded for by the tat gene in HIV-1. Tat is a regulatory protein that drastically enhances the efficiency of viral transcription. Tat stands for "Trans-Activator of Transcription". The protein consists of between 86 and 101 amino acids depending on the subtype. Tat vastly increases the level of transcription of the HIV dsDNA.</td>
        <td name="td4"><a href="https://onlinelibrary.wiley.com/doi/10.1046/j.1365-2443.2000.00330.x" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NBK" target="_blank" style="color:#520049"><b>1NBK</b></a><br>(argininamide)</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/IgG-aptamer" target="_blank" style="color:#520049"><b>IgG aptamer</b></a></td>
        <td name="td2">Human IgG</td>
        <td name="td3">IgG (Immunoglobulin G) is a four-stranded monomer, the main antibody component in blood serum and extracellular fluid, Immunoglobulin G(IgG) can be divided into four subclasses, namely immunoglobulin G1, immunoglobulin G2, immunoglobulin G3 and immunoglobulin G4, according to the difference of γ-chain antigenicity in immunoglobulin G molecules (the four subclasses in mice are immunoglobulin G1, immunoglobulin G2a, immunoglobulin G2b and immunoglobulin G3).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18441054/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3AGV" target="_blank" style="color:#520049"><b>3AGV</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NF-kappaB-aptamer" target="_blank" style="color:#520049"><b>NF-kappaB P50 aptamer</b></a></td>
        <td name="td2">NF-kappaB P50</td>
        <td name="td3">Nuclear factor kappa-B (NF-κB) protein was first discovered by David Baltimore. This protein family can selectively bind to the κ-light chain enhancer of B cells to regulate the expression of many genes. Members of NF-κB family have structural homology with retrovirus cancer protein v-Rel, so they are classified as NF-κB/Rel proteins. In mammals, there are five proteins in this family, which are RelA(p65), RelB, c-Rel, NF-κB1(p50) and NF-κB2(p52).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10074372/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1OOA" target="_blank" style="color:#520049"><b>1OOA</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Thrombin-aptamer" target="_blank" style="color:#520049"><b>Thrombin aptamer</b></a></td>
        <td name="td2">Human Thrombin</td>
        <td name="td3">Thrombin is a serine protease, an enzyme that, in humans, is encoded by the F2 gene. During the clotting process, prothrombin (coagulation factor II) is proteolytically cleaved by the prothrombinase enzyme complex to form thrombin. Thrombin in turn acts as a serine protease that converts soluble fibrinogen into insoluble strands of fibrin, as well as catalyzing many other coagulation-related reactions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5DO4" target="_blank" style="color:#520049"><b>5DO4</b></a><br><a href="https://www.rcsb.org/structure/3DD2" target="_blank" style="color:#520049"><b>3DD2</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ribosomal-protein-S8-aptamer" target="_blank" style="color:#520049"><b>Ribosomal protein S8-aptamer</b></a></td>
        <td name="td2">Ribosomal protein S8</td>
        <td name="td3">Ribosomal protein S8 is a component of the 40S subunit. This protein belongs to the S8E family of ribosomal proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25140011/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4PDB" target="_blank" style="color:#520049"><b>4PDB</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TetR-aptamer" target="_blank" style="color:#520049"><b>TetR aptamer</b></a></td>
        <td name="td2">Transcription repressor TetR</td>
        <td name="td3">Tet Repressor proteins (termed TetR) family is a family of transcriptional regulators prevalent in a variety of bacteria. It controls the expression of genes that encode the tetracycline overflow pump necessary for drug resistance.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6SY4" target="_blank" style="color:#520049"><b>6SY4</b></a><br><a href="https://www.rcsb.org/structure/6SY6" target="_blank" style="color:#520049"><b>6SY6</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Rex-protein-aptamer" target="_blank" style="color:#520049"><b>Rex protein aptamer</b></a></td>
        <td name="td2">HTLV-1 Rex protein</td>
        <td name="td3">Human T-cell leukemia virus type 1 (HTLV-1) replication was largely regulated by the virus-encoded proteins Tax and Rex. Rex functions posttranscriptionally, enhancing the cytoplasmic appearance of incompletely spliced mRNAs encoding HTLV-1 structural proteins and suppressing the appearance of completely spliced mRNAs encoding regulatory proteins such as Tax and Rex.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10647177/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EXY" target="_blank" style="color:#520049"><b>1EXY</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/AML1(RUNX1)-aptamer" target="_blank" style="color:#520049"><b>AML1 (RUNX1) aptamer</b></a></td>
        <td name="td2">AML1 Runt domain</td>
        <td name="td3">AML1 (RUNX1) is a key transcription factor for hematopoiesis that binds to the Runt-binding double-stranded DNA element (RDE) of target genes through its N-terminal Runt domain.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/23997091/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2RRC" target="_blank" style="color:#520049"><b>2RRC</b> </a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/PSMA-aptamer" target="_blank" style="color:#520049"><b>PSMA aptamer</b></a></td>
        <td name="td2">Prostate-specific membrane antigen (PSMA)</td>
        <td name="td3">Prostate-specific membrane antigen (PSMA) is a membrane-tethered glycoprotein naturally expressed in various tissues, including the central nervous system, kidney, small intestine and liver. PSMA is overexpressed on the surface of prostate cancer (PCa) cells compared to the limited expression levels observed in healthy prostate tissue, and this overexpression is significantly correlated to poor disease prognosis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12124337/" target="_blank" style="color:#520049"><b>2002</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6RTI" target="_blank" style="color:#520049"><b>6RTI</b> </a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-RNA-aptamer" target="_blank" style="color:#520049"><b>Spinach RNA aptamer</b></a></td>
        <td name="td2">Fab BL3-6S97N</td>
        <td name="td3">Fab BL3-6S97N is an affinity-matured variant of the Fab BL3-6 antibody fragment, featuring a key S97N mutation in CDR L3. This mutation introduces asparagine, forming additional hydrogen bonds with RNA nucleobase A40, enhancing binding affinity by ~20-fold compared to the parent Fab. The crystal structure of Fab BL3-6S97N bound to the GAAACAC RNA motif shows N97’s carboxamide group within hydrogen bonding distance of A40, strengthening interactions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6B14" target="_blank" style="color:#520049"><b>6B14</b></a><br><a href="https://www.rcsb.org/structure/6B3K" target="_blank" style="color:#520049"><b>6B3K</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Factor-Xa-aptamer" target="_blank" style="color:#520049"><b>Factor Xa aptamer</b></a></td>
        <td name="td2">Factor Xa</td>
        <td name="td3">Factor Xa, a trypsin-like serine protease, is situated at the critical juncture between the intrinsic and extrinsic pathways, catalyzing the conversion of prothrombin to thrombin, and hence plays a pivotal role in the final common pathway of the cascade and has become an important target in the discovery and development of new anticoagulants.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20022942/" target="_blank" style="color:#520049"><b>2009</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5VOF" target="_blank" style="color:#520049"><b>5VOF</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/L-CCL2-aptamer" target="_blank" style="color:#520049"><b>L-CCL2 aptamer</b></a></td>
        <td name="td2">L-CCL2</td>
        <td name="td3">C-C motif chemokine 2 (L-CCL2), also referred to as monocyte chemoattractant protein 1 (MCP1) or small inducible cytokine A2 (SCYA2), is a protein categorized as a chemotactic cytokine or chemokine. CCL2, a member of the CC chemokine family, is composed of small soluble proteins that primarily function to regulate cell trafficking.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18776253/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4R8I" target="_blank" style="color:#520049"><b>4R8I</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FC-RNA-aptamer" target="_blank" style="color:#520049"><b>FC RNA aptamer</b></a></td>
        <td name="td2">RNA polymerase (Pol) II (S. cerevisiae)</td>
        <td name="td3">RNA polymerase II (RNAP II and Pol II) is a multiprotein complex that transcribes DNA into precursors of messenger RNA (mRNA) and most small nuclear RNA (snRNA) and microRNA. It is one of the three RNAP enzymes found in the nucleus of eukaryotic cells. A 550 kDa complex of 12 subunits, RNAP II is the most studied type of RNA polymerase. A wide range of transcription factors are required for it to bind to upstream gene promoters and begin transcription.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9346949/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2B63" target="_blank" style="color:#520049"><b>2B63</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/10G-1-aptamer" target="_blank" style="color:#520049"><b>10G-1 aptamer</b></a></td>
        <td name="td2">HCV NS3 protease</td>
        <td name="td3">The RNA genome of human hepatitis C virus (HCV) is translated into a large precursor polyprotein. NS3 protein has a trypsin-like serine-protease motif in its N-terminal region, the NS3 protease of HCV has a crucial role in the processing of the polyprotein into functional viral proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-Rev-aptamer" target="_blank" style="color:#520049"><b>HIV-1 Rev aptamer</b></a></td>
        <td name="td2">Human immunodeficiency virus type 1 (HIV-1) Rev93 protein</td>
        <td name="td3">Human immunodeficiency virus type 1 (HIV-1) Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6CF2" target="_blank" style="color:#520049"><b>6CF2</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B.2-aptamer" target="_blank" style="color:#520049"><b>B.2 aptamer</b></a></td>
        <td name="td2">HCV NS5B polymerase (HCV NS5BΔC55 protein)</td>
        <td name="td3">Hepatitis C virus NS5B is a 66-kDa membrane-associated viral nonstructural protein, derived from the C-terminal end of the polyprotein. NS5B was initially identified as an RNA-dependent RNA polymerase (RdRp) by the presence of the hallmark GDD sequence, a motif involved in binding the Mg<sup>2+</sup> ions essential for all polymerase functions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/C52-aptamer" target="_blank" style="color:#520049"><b>C52 aptamer</b></a></td>
        <td name="td2">HIV-1 Rev protein</td>
        <td name="td3">Human immunodeficiency virus type 1 (HIV-1) Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8523524/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Clone-31-aptamer" target="_blank" style="color:#520049"><b>Clone 31 aptamer</b></a></td>
        <td name="td2">HIV-1 Tat protein</td>
        <td name="td3">Tat proteins are present in all known lentiviruses and are early RNA binding proteins that regulate transcription. Tat from the human immunodeficiency virus type-1 (HIV-1) is a protein comprising 86 amino acids and encoded by 2 exons. The first 72 amino acids are encoded by exon 1 and exhibit full trans-activating activity.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10886365/" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/G6-16-aptamer" target="_blank" style="color:#520049"><b>G6-16 aptamer</b></a></td>
        <td name="td2">HCV NS3 protein</td>
        <td name="td3">Hepatitis C virus (HCV) is a single-stranded RNA virus and its genome is translated into a single large polyprotein. The viral-encoded NS3 protein possesses protease, nucleoside triphosphatase, and helicase activities, which are considered essential for viral proliferation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/G9-II-aptamer" target="_blank" style="color:#520049"><b>G9-II aptamer</b></a></td>
        <td name="td2">HCV NS3 protease (ΔNS3)</td>
        <td name="td3">The RNA genome of human hepatitis C virus (HCV) is translated into a large precursor polyprotein. NS3 protein has a trypsin-like serine-protease motif in its N-terminal region, the NS3 protease of HCV has a crucial role in the processing of the polyprotein into functional viral proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ligand-1.1-aptamer" target="_blank" style="color:#520049"><b>ligand 1.1 aptamer</b></a></td>
        <td name="td2">HIV-1 RT</td>
        <td name="td3">Human imunnodeficiency virus type 1 reverse transcriptase (HIV-1 RT) is an heterodimeric and multifunctional enzyme possessing DNA polymerase activity, on both RNA and DNA templates, and ribonuclease H activity (RNase H) which degrades the RNA strand of RNA/DNA and RNA/RNA hybrids.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1379730/" target="_blank" style="color:#520049"><b>1992</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/P5-aptamer" target="_blank" style="color:#520049"><b>P5 aptamer</b></a></td>
        <td name="td2">HIV-1 integrase</td>
        <td name="td3">In vitro, human immunodeficiency virus type 1 (HIV-1) integrase has been shown to be necessary for processing double-stranded viral DNA, cleaving recipient DNA, and integrating the processed DNA into the host genome. It is usually carried by the virus itself and is not present in the host cell.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7778267/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/YT1-aptamer" target="_blank" style="color:#520049"><b>YT1 aptamer</b></a></td>
        <td name="td2">HTLV-1 Tax protein</td>
        <td name="td3">Human T-cell lymphotropic virus type 1 (HTLV-1) Tax protein is a transactivating protein, it does not normally bind to nucleic acids, but instead stimulates transcription by interacting with a variety of cellular transcription factors, including the cyclic AMP-response element binding protein (CREB), NF-kappa B, and the serum response factor (SRF).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7489503/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HSV-1-US11-aptamer" target="_blank" style="color:#520049"><b>HSV-1 US11-aptamer</b></a></td>
        <td name="td2">Herpes simplex virus-1 (HSV-1) US11</td>
        <td name="td3">Herpes simplex virus-1 US11 is a RNA-binding protein with a novel RNA-binding domain. US11 has also been described as a double-stranded RNA (dsRNA)-binding protein.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16246910/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/SARS-CoV-N-protein-aptamer" target="_blank" style="color:#520049"><b>SARS-CoV N protein aptamer</b></a></td>
        <td name="td2">SARS-CoV nucleocapsid (N) protein</td>
        <td name="td3">SARS-CoV nucleocapsid (N) protein refers to the nucleocapsid protein of the Severe Acute Respiratory Syndrome Coronavirus (SARS-CoV). The nucleocapsid protein is one of the key components that make up the structure of viral particles. It encapsulates the genetic material of the virus, namely the RNA genome, forming the nucleocapsid of the virus.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/19684916/" target="_blank" style="color:#520049"><b>2009</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-CA-aptamer" target="_blank" style="color:#520049"><b>HIV-1 CA-aptamer</b></a></td>
        <td name="td2">HIV-1 capsid (CA) protein</td>
        <td name="td3">HIV-1 capsid (CA) protein is the protein shell of a virus, enclosing its genetic material. It consists of several oligomeric (repeating) structural subunits made of protein called protomers. The observable 3-dimensional morphological subunits, which may or may not correspond to individual proteins, are called capsomeres. The proteins making up the capsid are called capsid proteins or viral coat proteins (VCP). The capsid and inner genome is called the nucleocapsid.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/35018437/" target="_blank" style="color:#520049"><b>2022</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hemagglutinin-aptamer" target="_blank" style="color:#520049"><b>Hemagglutinin aptamer</b></a></td>
        <td name="td2">Hemagglutinin (HA)</td>
        <td name="td3">Hemagglutinin (HA) is a substance that causes red blood cell agglutination, such as antibodies or glycoproteins found on the surface of viruses. Virus hemagglutinin enables the virus to bind to host cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15913532/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HPV-16-E7-oncoprotein-aptamer" target="_blank" style="color:#520049"><b>HPV-16 E7 oncoprotein aptamer</b></a></td>
        <td name="td2">Human papillomavirus type 16 (HPV-16) E7 oncoprotein</td>
        <td name="td3">Human papillomavirus type 16 (HPV-16) E7 oncoprotein (HPV-16 E7 protein) is a small acidic phosphoprotein that resembles adenovirus E1A and SV40 large T antigen both in sequence and functionality.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21565620/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5">NA</td>
      </tr>
       <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIRRV-aptamer" target="_blank" style="color:#520049"><b>HIRRV aptamer</b></a></td>
        <td name="td2">Hirame rhabdovirus (HIRRV)</td>
        <td name="td3">Hirome rhabdovirus (HIRRV) belongs to the family of rhabdoviruses and is composed of rod-shaped particles that can infect living organisms, including viruses that cause rabies.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/H3N2-aptamer" target="_blank" style="color:#520049"><b>H3N2 aptamer</b></a></td>
        <td name="td2">Haemagglutinin (HA) region of H3N2</td>
        <td name="td3">Hemagglutinin (HA) is an antigenic glycoprotein located on the surface of influenza virus, which is responsible for binding the virus to infected cells. The name "hemagglutinin" comes from the fact that this protein can cause the aggregation ("agglutination") of red blood cells in vitro.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16476969/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-PR-aptamer" target="_blank" style="color:#520049"><b>HIV-1 PR aptamer</b></a></td>
        <td name="td2">HIV-1 protease (PR)</td>
        <td name="td3">HIV-1 protease (PR) is a retroviral aspartyl protease (retropepsin), an enzyme involved with peptide bond hydrolysis in retroviruses, that is essential for the life-cycle of HIV, the retrovirus that causes AIDS. HIV protease cleaves newly synthesized polyproteins (namely, Gag and Gag-Pol) at nine cleavage sites to create the mature protein components of an HIV virion, the infectious form of a virus outside of the host cell. Without effective HIV protease, HIV virions remain uninfectious.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HCV-aptamer" target="_blank" style="color:#520049"><b>HCV aptamer</b></a></td>
        <td name="td2">Hepatitis C virus NS5B protein (HCV NS5B protein)</td>
        <td name="td3">Hepatitis C virus NS5B protein (HCV NS5B protein) refers to a non-structural protein of the Hepatitis C virus (HCV), specifically the non-structural protein numbered as 5B. The NS5B protein plays a crucial role in the life cycle and replication of HCV, as it functions as an RNA-dependent RNA polymerase (RdRp).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049"><b>2003</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HBV-aptamer" target="_blank" style="color:#520049"><b>HBV aptamer</b></a></td>
        <td name="td2">Hepatitis B virus (HBV) polymerase (P protein) (miniP)</td>
        <td name="td3">Hepatitis B virus (HBV) polymerase (P protein) (miniP) is a key enzyme in the replication process of hepatitis B virus (HBV).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22125633/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Gastrointestinal-cancer-antigen-50-aptamer" target="_blank" style="color:#520049"><b>Gastrointestinal cancer antigen 50-aptamer</b></a></td>
        <td name="td2">Gastrointestinal cancer antigen 50</td>
        <td name="td3">Gastrointestinal cancer antigen 50 (CA 50), a novel cancer-associated carbohydrate marker, is detected by the C 50 antibody that has been obtained by immunization of mice with a human colorectal adenocarcinoma cell line.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Cancer-antigen-72–4(CA72-4)-aptamer" target="_blank" style="color:#520049"><b>Cancer antigen 72–4(CA72-4)-aptamer</b></a></td>
        <td name="td2">Cancer antigen 72–4(CA72-4)</td>
        <td name="td3">CA 72-4 is a mucin-glycoprotein present on the surface of many cell types such as ovarian, breast, colon, pancreatic cells, especially cancer cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Chemokine-CCL17-aptamer" target="_blank" style="color:#520049"><b>Chemokine CCL17-aptamer</b></a></td>
        <td name="td2">Chemokine CCL17</td>
        <td name="td3">CCL17 is a powerful chemokine produced in the thymus and by antigen-presenting cells like dendritic cells, macrophages, and monocytes.CCL17 plays a complex role in cancer. It attracts T-regulatory cells allowing for some cancers to evade an immune response.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Gastrointestinal-carcinoembryonic-antigen-(CEA)-aptamer" target="_blank" style="color:#520049"><b>Gastrointestinal carcinoembryonic antigen (CEA)-aptamer</b></a></td>
        <td name="td2">Gastrointestinal carcinoembryonic antigen (CEA)</td>
        <td name="td3">Carcinoembryonic antigen (CEA) describes a set of highly-related glycoproteins involved in cell adhesion.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Glycoprotein-2-(GP2)-protein-aptamer" target="_blank" style="color:#520049"><b>Glycoprotein 2 (GP2) protein-aptamer</b></a></td>
        <td name="td2">Glycoprotein 2 (GP2) protein</td>
        <td name="td3">The glycoprotein 2 (GP2) is exclusively expressed on M cells among intestinal epithelial cells and serves as an uptake receptor for a subset of commensal and pathogenic bacteria.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24334484/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hemagglutinin-(HA)-protein-aptamer" target="_blank" style="color:#520049"><b>Hemagglutinin (HA) protein-aptamer</b></a></td>
        <td name="td2">Hemagglutinin (HA) protein</td>
        <td name="td3">Hemagglutinin (HA) protein is a homotrimeric glycoprotein found on the surface of influenza viruses and is integral to its infectivity.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24835440/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Interleukin-6-receptor-domain-3-(IL-6R-D3)-aptamer" target="_blank" style="color:#520049"><b>Interleukin-6 receptor domain 3 (IL-6R D3)-aptamer</b></a></td>
        <td name="td2">Interleukin-6 receptor domain 3 (IL-6R D3)</td>
        <td name="td3">Interleukin 6 (IL6) is a potent pleiotropic cytokine that regulates cell growth and differentiation and plays an important role in immune response. Dysregulated production of IL6 and this receptor are implicated in the pathogenesis of many diseases, such as multiple myeloma, autoimmune diseases and prostate cancer.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/26383776/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Restriction-endonucleases-(REases)-KpnI-aptamer" target="_blank" style="color:#520049"><b>Restriction endonucleases (REases) KpnI-aptamer</b></a></td>
        <td name="td2">Restriction endonucleases (REases) KpnI</td>
        <td name="td3">The restriction endonucleases (REases) KpnI is an orthodox Type IIP enzyme, which binds to DNA in the absence of metal ions and cleaves the DNA sequence 5′-GGTAC^C-3′ in the presence of Mg2+ as shown generating 3′ four base overhangs.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ubiquitin-carboxyl-terminal-hydrolase37-(UCH37)-aptamer" target="_blank" style="color:#520049"><b>Ubiquitin carboxyl-terminal hydrolase37 (UCH37)-aptamer</b></a></td>
        <td name="td2">Ubiquitin carboxyl-terminal hydrolase37 (UCH37)</td>
        <td name="td3">Ubiquitin carboxyl-terminal hydrolase is a member of a gene family whose products hydrolyze small C-terminal adducts of ubiquitin to generate the ubiquitin monomer.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/27930845/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CypB-aptamer" target="_blank" style="color:#520049"><b>CypB-aptamer</b></a></td>
        <td name="td2">cyclophilin B (CypB)</td>
        <td name="td3">CypB is an ER-resident protein that possesses peptidyl-prolyl cis/trans-isomerase activity and is known to be secreted into body fluids. It has been implicated as a tissue biomarker in other cancers.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22484812/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ERα-aptamer" target="_blank" style="color:#520049"><b>ERα-aptamer</b></a></td>
        <td name="td2">Estrogen receptor α (ERα)</td>
        <td name="td3">Estrogen plays a prominent role in the etiology of various cancers. Its effect on the target tissue is primarily mediated through binding to specific intracellular estrogen receptors, ERα and ERβ.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Escherichia-coli-aptamer" target="_blank" style="color:#520049"><b>Escherichia coli-aptamer</b></a></td>
        <td name="td2">Escherichia coli O157:H7</td>
        <td name="td3">Escherichia coli (E. coli) O157:H7 is a major foodborne pathogen that causes life-threatening symptoms in humans worldwide.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22166202/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HPAI-H5N1-aptamer" target="_blank" style="color:#520049"><b>HPAI H5N1-aptamer</b></a></td>
        <td name="td2">Hemagglutinin (HA) of H5N1 and H7N7</td>
        <td name="td3">Hemagglutinin (HA) of H5N1 and H7N7 is responsible for both receptor (glycan) binding and membrane fusion during cell entry.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24374323/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/IL-17A-aptamer" target="_blank" style="color:#520049"><b>IL-17A aptamer</b></a></td>
        <td name="td2">Proinflammatory cytokine interleukin-17A (IL-17A)</td>
        <td name="td3">The proinflammatory cytokine interleukin-17A (IL-17A) is produced primarily by the CD4+T cell subset called Th17 cells, which is involved in host defense, inflammation, and autoimmune disorders.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20967861/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/OX40-aptamer" target="_blank" style="color:#520049"><b>OX40-aptamer</b></a></td>
        <td name="td2">OX40</td>
        <td name="td3">OX40 is a costimulatory receptor expressed primarily on activated CD4 T cells approximately 18–24 hours after initial stimulation via the T cell receptor. OX40's cognate ligand, OX40-L, is expressed on antigen presenting cells (APCs) such as dendritic cells and B lymphocytes and binds to OX40, inducing an agonistic response in T lymphocytes that results in cell proliferation, increased cytokine production, and long-term survival of T lymphocytes.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/23113766/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RF-1-aptamer" target="_blank" style="color:#520049"><b>RF-1-aptamer</b></a></td>
        <td name="td2">Escherichia coli release factor 1</td>
        <td name="td3">Release factor 1 (RF-1) is an essential cofactor which is responsible for translation termination at stop codons UAA and UAG.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17188871" target="_blank" style="color:#520049"><b>2007</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ZAP-aptamer" target="_blank" style="color:#520049"><b>ZAP-aptamer</b></a></td>
        <td name="td2">Zinc-finger antiviral protein</td>
        <td name="td3">The zinc-finger antiviral protein (ZAP) is a host factor that specifically inhibits the replication of certain viruses, including murine leukemia virus, Sindbis virus and Ebola virus, by targeting the viral mRNAs for degradation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21203916/" target="_blank" style="color:#520049"><b>2010</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Prion</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Prion-protein1-aptamer" target="_blank" style="color:#520049"><b>Prion protein 1 aptamer</b></a></td>
        <td name="td2">Hamster  prion protein</td>
        <td name="td3">The RNA aptamers may fold into G-quartet-containing structural elements and replacement of the G residues in the G quartet scaffold with uridine residues destroyed binding to PrP completely.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Colicin-E3-aptamer" target="_blank" style="color:#520049"><b>Colicin E3 aptamer</b></a></td>
        <td name="td2">Colicin E3</td>
        <td name="td3">The aptamers specifically bound to the protein and prevented the 16S rRNA cleavage by the C-terminal ribonuclease domain.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/35970037/" target="_blank" style="color:#520049"><b>2004</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Type-IVB-Pili-aptamer" target="_blank" style="color:#520049"><b>Type IVB Pili aptamer</b></a></td>
        <td name="td2">Type IVB Pili</td>
        <td name="td3">Type IVB pili, composed largely of polymerized PilS protein, also mediate bacterial self-association. The structural protein PilS of the type IVB pili might play important roles in the pathogenesis of S. enterica serovar Typhi in humans.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16189080/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Prion</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Prion-protein2-aptamer" target="_blank" style="color:#520049"><b>Prion protein 2 aptamer</b></a></td>
        <td name="td2">Sheep prion protein</td>
        <td name="td3">PrP binds nucleic acids with high affinity, causing the formation of nucleoprotein complexes in which PrP has become partially resistant to proteinase K.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Subtilisin-aptamer" target="_blank" style="color:#520049"><b>Subtilisin aptamer</b></a></td>
        <td name="td2">Subtilisin</td>
        <td name="td3">Subtilisin is a protease (a protein-digesting enzyme) initially obtained from Bacillus subtilis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10348914/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Elongation-factor-SelB-aptamer" target="_blank" style="color:#520049"><b>Elongation factor SelB aptamer</b></a></td>
        <td name="td2">Elongation factor SelB</td>
        <td name="td3">RNA aptamers bound to the SelB C-terminal domain responsible for mRNA hairpin binding.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9192624/" target="_blank" style="color:#520049"><b>1997</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/10496219/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Protein-tyrosine-phosphatases-aptamer" target="_blank" style="color:#520049"><b>Protein tyrosine phosphatases aptamer</b></a></td>
        <td name="td2">Protein tyrosine phosphatases</td>
        <td name="td3">Protein tyrosine phosphatases (EC 3.1.3.48, systematic name protein-tyrosine-phosphate phosphohydrolase) are a group of enzymes that remove phosphate groups from phosphorylated tyrosine residues on proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9603938/" target="_blank" style="color:#520049"><b>1998</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CsrA-aptamer" target="_blank" style="color:#520049"><b>CsrA-aptamer</b></a></td>
        <td name="td2">CsrA</td>
        <td name="td3">CsrA of Escherichia coli is an RNA binding protein that plays a central role in repressing several stationary phase processes and activating certain exponential phase functions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16131593/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Peptide-release-factor-1-aptamer" target="_blank" style="color:#520049"><b>Peptide release factor 1-aptamer</b></a></td>
        <td name="td2">Peptide release factor 1</td>
        <td name="td3">A release factor is a protein that allows for the termination of translation by recognizing the termination codon or stop codon in an mRNA sequence. They are named so because they release new peptides from the ribosome.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11904188/" target="_blank" style="color:#520049"><b>2002</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/3Dpol-aptamer" target="_blank" style="color:#520049"><b>3Dpol-aptamer</b></a></td>
        <td name="td2">3Dpol</td>
        <td name="td3">Replication of the RNA genome of the virus, via negative strand intermediates, involves an RNA-dependent RNA polymerase (3Dpol). Lysine residues on the surface of 3Dpol were chemically biotinylated, allowing the enzyme to be immobilized onto the surface of steptavidin-coated magnetic beads.</td>
        <td name="td4"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1624902/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/AMPA-receptors-Aptamer" target="_blank" style="color:#520049"><b>AMPA receptors aptamer</b></a></td>
        <td name="td2">Alpha-Amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA) receptors</td>
        <td name="td3">α-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA) receptors are one of the important receptor classes involved in glutamate-mediated excitotoxicity. Although small molecule antagonists of this receptor have been shown to have neuroprotective properties, their low solubilities pose severe side effects in clinical trials.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17588619/" target="_blank" style="color:#520049"><b>2007</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B1-CT-aptamer" target="_blank" style="color:#520049"><b>B1-CT aptamer</b></a></td>
        <td name="td2">Cytoplasmic tail of BACE</td>
        <td name="td3">BACE1 is a type I transmembrane aspartyl protease which represents a valuable target in AD therapy because BACE1 knockout mice do not show overt abnormalities. The cytoplasmic tail (CT) of BACE was found to be responsible for its subcellular localization and trafficking, suggesting that modulation of BACE localization or interference with protein factors that interact with the cytoplasmic domain might also affect APP processing and Aβ formation, either directly or indirectly.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16888322/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Bovine-factor-IX-aptamer" target="_blank" style="color:#520049"><b>Bovine factor IX aptamer</b></a></td>
        <td name="td2">Bovine factor IX</td>
        <td name="td3">DNA polymerase β (polβ), a member of the X family of DNA polymerases, is the major polymerase in the base excision repair pathway.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17030508/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/eIF4E-aptamer" target="_blank" style="color:#520049"><b>eIF4E-aptamer</b></a></td>
        <td name="td2">Mammalian eukaryotic translation initiation factor 4F (eIF4E)</td>
        <td name="td3">eIF4E recognizes the mRNA 5′-cap structure (m7GpppN) and plays a pivotal role in control of translation initiation, which is the rate-limiting step in translation. Overexpression of eIF4E has a dramatic effect on cell growth and leads to oncogenic transformation.</td>
        <td name="td4"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1370693/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/polβ-aptamer" target="_blank" style="color:#520049"><b>polβ-aptamer</b></a></td>
        <td name="td2">DNA polymerase β</td>
        <td name="td3">DNA polymerase β (polβ), a member of the X family of DNA polymerases, is the major polymerase in the base excision repair pathway.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TbRIII-aptamer" target="_blank" style="color:#520049"><b>TbRIII-aptamer</b></a></td>
        <td name="td2">Transforming growth factor-β type III receptor expressed on Chinese hamster ovary (CHO) cells(TbRIII)</td>
        <td name="td3">TbRIII plays at least three key roles in signal transduction. First, it facilitates TGF-β2 ligand binding to TGF-β type II receptor (TbRII). Second, it assists inhibin binding to the activin receptor leading to complete blocking of activin binding. Third, it mediates TbRII internalization triggered by β-arrestin binding.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16540230/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/pUC19-aptamer" target="_blank" style="color:#520049"><b>pUC19-aptamer</b></a></td>
        <td name="td2">β-catenin</td>
        <td name="td3">β-Catenin is a multifunctional protein that plays critical roles in cell adhesion and signaling. Although it was first identified as a component of a cell adhesion complex, it is now recognized as a central component of the developmentally important Wnt pathway. The scaffolding proteins adenomatous polyposis coli (APC) and Axin/Axin2 interact with β-catenin, and glycogen synthase kinase-3β (GSK-3β) subsequently phosphorylates β-catenin, leading to its proteasomal degradation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17079480/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/14.12-aptamer" target="_blank" style="color:#520049"><b>14.12 aptamer</b></a></td>
        <td name="td2">L-selectin</td>
        <td name="td3">L-selectin is one of calcium-dependent lectin that mediates cell adhesion by binding to glycoproteins on neighboring cells. Mediates the adherence of lymphocytes to endothelial cells of high endothelial venules in peripheral lymph nodes.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8650187/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NX-213-aptamer" target="_blank" style="color:#520049"><b>NX-213 aptamer</b></a></td>
        <td name="td2">Vascular endothelial growth factor (VEGF)</td>
        <td name="td3">Vascular endothelial growth factor (VEGF) active in angiogenesis, vasculogenesis and endothelial cell growth. VEGF induces endothelial cell proliferation, promotes cell migration, inhibits apoptosis and induces permeabilization of blood vessels.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9383475/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/11-1.41-aptamer" target="_blank" style="color:#520049"><b>11-1.41 aptamer</b></a></td>
        <td name="td2">Angiopoietin-2 (Ang2)</td>
        <td name="td3">Angiopoietin-2 binds to TEK/TIE2, competing for the ANGPT1 binding site, and modulating ANGPT1 signaling. Angiopoietin-2 can induce tyrosine phosphorylation of TEK/TIE2 in the absence of ANGPT1.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12692304/" target="_blank" style="color:#520049"><b>2003</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/21.01-aptamer" target="_blank" style="color:#520049"><b>21.01 aptamer</b></a></td>
        <td name="td2">Raf-1</td>
        <td name="td3">RAF proto-oncogene serine/threonine-protein kinase that acts as a regulatory link between the membrane-associated Ras GTPases and the MAPK/ERK cascade, and this critical regulatory link functions as a switch determining cell fate decisions including proliferation, differentiation, apoptosis, survival and oncogenic transformation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9883908/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/77-aptamer" target="_blank" style="color:#520049"><b>77 aptamer</b></a></td>
        <td name="td2">Upstream of N-Ras (Unr) protein</td>
        <td name="td3">Upstream of N-Ras (Unr) protein, also called CSDE1. In molecular biology, the cold-shock domain (CSD) is a protein domain of about 70 amino acids which has been found in prokaryotic and eukaryotic DNA-binding proteins. Part of this domain is highly similar to the RNP-1 RNA-binding motif.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/APC-99-aptamer" target="_blank" style="color:#520049"><b>APC-99 aptamer</b></a></td>
        <td name="td2">Human activated protein C (APC)</td>
        <td name="td3">Human activated protein C (APC) is a vitamin K-dependent serine protease that regulates blood coagulation by inactivating factors Va and VIIIa in the presence of calcium ions and phospholipids. Exerts a protective effect on the endothelial cell barrier function.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9546673/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/E2F-E1-aptamer" target="_blank" style="color:#520049"><b>E2F-E1 aptamer</b></a></td>
        <td name="td2">E2F1</td>
        <td name="td3">E2F is transcription activator that binds DNA cooperatively with DP proteins through the E2 recognition site, 5'-TTTC[CG]CGC-3' found in the promoter region of a number of genes whose products are involved in cell cycle regulation or in DNA replication.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8946842/" target="_blank" style="color:#520049"><b>1996</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/P19-aptamer" target="_blank" style="color:#520049"><b>P19 aptamer</b></a></td>
        <td name="td2">Neurotensin receptor NTS-1 (NTR)</td>
        <td name="td3">Neurotensin receptor type 1 is G-protein coupled receptor for the tridecapeptide neurotensin (NTS). Signaling is effected via G proteins that activate a phosphatidylinositol-calcium second messenger system. Signaling leads to the activation of downstream MAP kinases and protects cells against apoptosis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12054450/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ps11-20-aptamer" target="_blank" style="color:#520049"><b>ps11-20 aptamer</b></a></td>
        <td name="td2">Basic fibroblast growth factor (bFGF)</td>
        <td name="td3">Growth factor active in angiogenesis, and endothelial cell growth, stimulating their proliferation and migration and also has effects on the permeability of blood vessels.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9873529/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RNA22-aptamer" target="_blank" style="color:#520049"><b>RNA22 aptamer</b></a></td>
        <td name="td2">Wilms tumor protein (WT1)</td>
        <td name="td3">Wilms tumor protein (WT1) is a type of transcription factor that plays an important role in cellular development and cell survival. Recognizes and binds to the DNA sequence 5'-GCG(T/G)GGGCG-3'. Regulates the expression of numerous target genes, including EPO. Plays an essential role for development of the urogenital system.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11329270/" target="_blank" style="color:#520049"><b>2001</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/SE-RNA-1-aptamer" target="_blank" style="color:#520049"><b>SE RNA #1 aptamer</b></a></td>
        <td name="td2">Nuclear factor of activated T cells (NFATC)</td>
        <td name="td3">NFATC1 plays a role in the inducible expression of cytokine genes in T-cells, especially in the induction of the IL-2 or IL-4 gene transcription. NFATC1 also controls gene expression in embryonic cardiac cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12408978/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TR-D28-aptamer" target="_blank" style="color:#520049"><b>TR-D28 aptamer</b></a></td>
        <td name="td2">Integrin beta chain-2 (CD18)</td>
        <td name="td3">In molecular biology, integrin beta chain-2 (CD18) is an integrin beta chain protein that is encoded by the ITGB2 gene in humans. Upon binding with one of a number of alpha chains, CD18 is capable of forming multiple heterodimers, which play significant roles in cellular adhesion and cell surface signaling, as well as important roles in immune responses.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10097084/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/W2-aptamer" target="_blank" style="color:#520049"><b>W2 aptamer</b></a></td>
        <td name="td2">Complement component 5 (C5) protein</td>
        <td name="td3">Activation of C5 by a C5 convertase initiates the spontaneous assembly of the late complement components, C5-C9, into the membrane attack complex. C5b has a transient binding site for C6. The C5b-C6 complex is the foundation upon which the lytic complex is assembled.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12490703/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/AB9-aptamer" target="_blank" style="color:#520049"><b>AB9 aptamer</b></a></td>
        <td name="td2">AMPA and kainate receptors</td>
        <td name="td3">Compared with NMDA receptors, AMPA and kainate receptors are more alike in both sequence and structure. AMPA receptors are expressed post-syn- aptically and are involved in fast excitatory neurotransmission Kainate receptors are expressed both pre- and post-synap- tically, and contribute to excitatory neurotransmission and modulate network excitability by regulating neurotransmitter release.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28872832/" target="_blank" style="color:#520049"><b>2017</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Aβ42-aptamer" target="_blank" style="color:#520049"><b>Aβ42 aptamer</b></a></td>
        <td name="td2">β-amyloid 42 (Aβ42)</td>
        <td name="td3">Oligomers of β-amyloid 42 (Aβ42), rather than fibrils, drive the pathogenesis of Alzheimer’s disease (AD). In particular, toxic oligomeric species called protofibrils (PFs) have attracted significant attention.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/32127399/" target="_blank" style="color:#520049"><b>2020</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/IL2-CD25-aptermer" target="_blank" style="color:#520049"><b>IL2-CD25 aptermer</b></a></td>
        <td name="td2">IL2–CD25 complexes</td>
        <td name="td3">The regulation of the immune response by the interaction between IL2 with its alpha receptor subunit, IL2Rα (CD25), which leads to recruitment of additional receptor subunits (IL2Rβ and γ) to mediate activation signals in lymphocytes . Numerous studies have illustrated the importance of IL2–CD25 complexes on the immune response in a variety of diseases, including cancer.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mixed-lineage-leukemia-proteins-(MLL)-aptermer" target="_blank" style="color:#520049"><b>Mixed lineage leukemia proteins (MLL) aptermer</b></a></td>
        <td name="td2">Mixed lineage leukemia proteins (MLL)</td>
        <td name="td3">Mixed lineage leukemia proteins (MLL) are the key histone lysine methyltransferases that regulate expression of diverse genes. Aberrant activation of MLL promotes leukemia as well as solid tumors in humans.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30419633/" target="_blank" style="color:#520049"><b>2019</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TCF-1-aptamer" target="_blank" style="color:#520049"><b>TCF-1 aptamer</b></a></td>
        <td name="td2">TCF-1</td>
        <td name="td3">T cytokine 1 (TCF-1) is a transcription factor (TF) of the classical Wnt signaling pathway, encoded by Tcf7.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15055546/" target="_blank" style="color:#520049"><b>2004</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/A30-aptamer" target="_blank" style="color:#520049"><b>A30 aptamer</b></a></td>
        <td name="td2">Extracellular domains of HER3</td>
        <td name="td3">HER3 (ErbB3) is a member of the EGFR (HER, ErbB) subfamily of proteins, which are receptor PTKs (RTKs) containing an extracellular EGF-related ligand-binding region, a transmembrane helix, and a cytoplasmic region with a tyr kinase domain and a regulatory C-terminal tail. HER3ECD is the extracellular domains of HER3.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12874383/" target="_blank" style="color:#520049"><b>2003</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RANK-aptamer" target="_blank" style="color:#520049"><b>RANK aptamer</b></a></td>
        <td name="td2">RANK(TNFRSF11A )</td>
        <td name="td3">The receptor activatorof NF-kB (RANK)is a memberof the tumor necrosis factor (TNF) receptor family and acts to cause osteoclastgenesis through the interaction  with its ligand, RANKL.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15562003/" target="_blank" style="color:#520049"><b>2004</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Cytohesin-2-aptamer" target="_blank" style="color:#520049"><b>Cytohesin-2 aptamer</b></a></td>
        <td name="td2">Cytohesin-2</td>
        <td name="td3">Cytohesins are a family of highly homologous guanine nucleotide exchange factors (GEFs) that act on ADP-ribosylation factors (ARFs). The small ARF-GEFs are involved in integrin signaling, actin cytoskeleton remodeling, and vesicle transport. The N-terminal coiled-coil and parts of the Sec7 domain of cytohesin-2 are required for serum-mediated transcriptional activation in nonimmune cells, whereas cytohesin-1 is not.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15277685/" target="_blank" style="color:#520049"><b>2004</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/No.21-aptamer" target="_blank" style="color:#520049"><b>No.21 aptamer</b></a></td>
        <td name="td2">Eukaryotic translation initiation factor 4F (eIF4E)</td>
        <td name="td3">Eukaryotic initiation factor 4A eukaryotic translation Initiation Factor 4A (eIF4A) is an ATP-dependent RNA binding protein, an RNA-dependent ATPase, and an RNA helicase that plays an important role in the initiation of eukaryotic translation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NFAT-aptamer" target="_blank" style="color:#520049"><b>NFAT aptamer</b></a></td>
        <td name="td2">NFAT DNA binding domain</td>
        <td name="td3">Nuclear factor of activated T-cells (NFAT) is a family of transcription factors shown to be important in immune response. One or more members of the NFAT family is expressed in most cells of the immune system.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15359119/" target="_blank" style="color:#520049"><b>2004</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/tFKBP*3R-2G-aptamer" target="_blank" style="color:#520049"><b>tFKBP*3R-2G aptamer</b></a></td>
        <td name="td2">tFKBP*3R-2G</td>
        <td name="td3">The FK506-binding protein designated as FKBP*, engineering retrofit FKBP* got tFKBP*3R-2G.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16199752/" target="_blank" style="color:#520049"><b>2005</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/hTNF-α-aptamer" target="_blank" style="color:#520049"><b>hTNF α aptamer</b></a></td>
        <td name="td2">hTNF α</td>
        <td name="td3">Human tumor necrosis factor α (hTNFα), a pleiotropic cytokine with activities ranging from host defense mechanisms in infection and injury to severe toxicity in septic shock or other related diseases, is a promising target for drug screening.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Bovine-thrombin-aptamer" target="_blank" style="color:#520049"><b>Bovine thrombin aptamer</b></a></td>
        <td name="td2">Bovine thrombin</td>
        <td name="td3">Bovine thrombin is a topical thrombin indicated to aid hemostasis whenever oozing blood and minor bleeding from capillaries and small venules is accessible and control of bleeding by standard surgical techniques (like suture, ligature, or cautery) is ineffective or impractical Label.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12557236/" target="_blank" style="color:#520049"><b>2003</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/tMG-RNA-aptamer" target="_blank" style="color:#520049"><b>tMG RNA aptamer</b></a></td>
        <td name="td2">rat monoclonal antibody (mAb198)</td>
        <td name="td3">Clinical symptoms of EAMG in rats engendered by passive transfer of mAb198.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12885412/" target="_blank" style="color:#520049"><b>2003</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Parasite</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CED-9-aptamer" target="_blank" style="color:#520049"><b>CED-9 aptamer</b></a></td>
        <td name="td2">Cell death abnormality gene 9 (CED-9)</td>
        <td name="td3">Cell death abnormality gene 9 (CED-9), also known as apoptosis regulator CED-9, is a gene found in Caenorhabditis elegans that inhibits/represses programmed cell death (apoptosis).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16467303/" target="_blank" style="color:#520049"><b>2006</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/PKC-aptamer" target="_blank" style="color:#520049"><b>PKC aptamer</b></a></td>
        <td name="td2">Protein kinase C beta II</td>
        <td name="td3">In cell biology, Protein kinase C, commonly abbreviated to PKC (EC 2.7.11.13), is a family of protein kinase enzymes that are involved in controlling the function of other proteins through the phosphorylation of hydroxyl groups of serine and threonine amino acid residues on these proteins, or a member of this family. PKC enzymes in turn are activated by signals such as increases in the concentration of diacylglycerol (DAG) or calcium ions (Ca2+). Hence PKC enzymes play important roles in several signal transduction cascades.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7528207/" target="_blank" style="color:#520049"><b>1994</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Other</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mbl-aptamer" target="_blank" style="color:#520049"><b>Mbl-aptamer</b></a></td>
        <td name="td2">Drosophila muscleblind protein (Mbl)</td>
        <td name="td3">Drosophila muscleblind (Mbl) is an RNA-binding protein critical for cellular differentiation and development. Mbl plays significant roles in the differentiation of photoreceptors and the terminal differentiation of muscles. The human orthologues of Mbl, known as muscleblind-like proteins (MBNL1-3), similarly regulate the alternative splicing of transcripts essential for development.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18557632/" target="_blank" style="color:#520049"><b>2008</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Toxin</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Pepocin-aptamer" target="_blank" style="color:#520049"><b>Pepocin aptamer</b></a></td>
        <td name="td2">Pepocin</td>
        <td name="td3">Pepocin is a ribosome-inactivating protein (RIP). RIPs site-specifically recognize and depurinate an adenosine at position 4324 in rat 28 S rRNA, rendering the ribosome incapable of interacting with essential elongation factors.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10671532/" target="_blank" style="color:#520049"><b>2000</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/R5-helix-peptide-aptamer" target="_blank" style="color:#520049"><b>R5 helix peptide-aptamer</b></a></td>
        <td name="td2">R5 helix peptide</td>
        <td name="td3">A simple R5 helix peptide as a model of N peptide from bacteriophade λ.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12903331/" target="_blank" style="color:#520049"><b>2000</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Other</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B52-aptamer" target="_blank" style="color:#520049"><b>B52-aptamer</b></a></td>
        <td name="td2">SR Protein B52 (SRp55)</td>
        <td name="td3">Serine/arginine-rich (SR) proteins comprise a family of proteins that is predominantly found in eukaryotes and plays a prominent role in RNA splicing. A characteristic feature of SR proteins is the presence of an S/R-rich low-complexity domain (RS domain).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9111335/" target="_blank" style="color:#520049"><b>1997</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Gp43-aptamer" target="_blank" style="color:#520049"><b>T4 gp43-aptamer</b></a></td>
        <td name="td2">T4 DNA polymerase (gp43)</td>
        <td name="td3">A DNA polymerase is a member of a family of enzymes that catalyze the synthesis of DNA molecules from nucleoside triphosphates, the molecular precursors of DNA. These enzymes are essential for DNA replication and usually work in groups to create two identical DNA duplexes from a single original DNA duplex. T4 DNA polymerase is a DNA polymerase with 3´ -deoxyribonuclease activity but no 5´a3´ deoxyribonuclease activity.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/2200121/" target="_blank" style="color:#520049"><b>1990</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Parasite</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Trypanosome-VSG-aptamer" target="_blank" style="color:#520049"><b>Trypanosome VSG aptamer</b></a></td>
        <td name="td2">Trypanosome variant surface glycoprotein (VSG)</td>
        <td name="td3">Variant surface glycoprotein (VSG) is a ~60kDa protein which densely packs the cell surface of protozoan parasites belonging to the genus Trypanosoma. This genus is notable for their cell surface proteins. They were first isolated from Trypanosoma brucei in 1975 by George Cross.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10198434/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/VEGF-aptamer" target="_blank" style="color:#520049"><b>VEGF-aptamer</b></a></td>
        <td name="td2">Vascular Endothelial Growth Factor (VEGF)</td>
        <td name="td3">Vascular endothelial growth factor (VEGF or VEGF-A), also known as vascular permeability factor (VPF), is an effective mediator of angiogenesis in fetus and adults. It is a member of PDGF family, characterized by eight conserved cysteine residues and a cystine knot structure.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/The-protein-calsenilin-aptamer" target="_blank" style="color:#520049"><b>The protein calsenilin aptamer</b></a></td>
        <td name="td2">The protein calsenilin</td>
        <td name="td3">The aptamer binds in a conformationally selective manner to calsenilin, which involved in Ca2+ -mediated apoptotic signaling. The binding of aptamer-2 does noy discriminate between Ca2+ bound and unbound protein.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17904852/" target="_blank" style="color:#520049"><b>2007</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/WL-2-aptamer" target="_blank" style="color:#520049"><b>WL-2 aptamer</b></a></td>
        <td name="td2">beta(2)m fibrils</td>
        <td name="td3">One of the most fascinating features of amyloid fibrils is their generic cross-beta architecture that can be formed from many different and completely unrelated proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17878167/" target="_blank" style="color:#520049"><b>2007</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/AN58-aptamer" target="_blank" style="color:#520049"><b>AN58 aptamer</b></a></td>
        <td name="td2">GluR2 AMPA receptors</td>
        <td name="td3">AN58 has a high selectivity for the GluR4 AMPA receptor subunit. Furthermore, this RNA molecule possesses stable physical properties. Therefore, AN58 serves as a unique lead compound for developing water-soluble inhibitors with a nanomolar affinity for GluR2 AMPA receptors.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17929944/" target="_blank" style="color:#520049"><b>2007</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TfR-ECD-aptamer" target="_blank" style="color:#520049"><b>TfR-ECD aptamer</b></a></td>
        <td name="td2">Mouse transferrin receptor (TfR-ECD)</td>
        <td name="td3">Transferrin receptor protein 1 (TfR1), also known as Cluster of Differentiation 71 (CD71), is a protein that in humans is encoded by the TFRC gene.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18838694/" target="_blank" style="color:#520049"><b>2008</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/E2-aptamer" target="_blank" style="color:#520049"><b>E2 aptamer</b></a></td>
        <td name="td2">Amyloid beta-peptide (Aβ)</td>
        <td name="td3">Amyloid beta is a protein associated with Alzheimer's disease (AD) that builds up in the brains of patients with amyloid plaques.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/19668864/" target="_blank" style="color:#520049"><b>2009</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/PAI-1-aptamer" target="_blank" style="color:#520049"><b>PAI-1 aptamer</b></a></td>
        <td name="td2">Serine protease inhibitor plasminogen activator inhibitor-1 (PAI-1)</td>
        <td name="td3">Plasminogen activator inhibitor-1 (PAI-1) is a serine protease inhibitor (serpin) that regulates fibrinolysis, cell adhesion and cell motility via its interactions with plasminogen activators and vitronectin.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/19284310/" target="_blank" style="color:#520049"><b>2009</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/J18-aptamer" target="_blank" style="color:#520049"><b>J18 aptamer</b></a></td>
        <td name="td2">Epithelial Growth Factor Receptor (EGFR)</td>
        <td name="td3">The epidermal growth factor receptor (EGFR) belongs to the ERBB family of tyrosine kinase receptors. EGFR signaling cascade is a key regulator in cell proliferation, differentiation, division, survival, and cancer development.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/19271740/" target="_blank" style="color:#520049"><b>2009</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/PTP1B-aptamer" target="_blank" style="color:#520049"><b>PTP1B aptamer</b></a></td>
        <td name="td2">Protein tyrosine phosphatase 1B (PTP1B)</td>
        <td name="td3">PTP-1B belongs to the protein tyrosine phosphatase family and maintains the balance of tyrosine protein phosphorylation together with protein tyrosine kinases (PTK).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20572251/" target="_blank" style="color:#520049"><b>2010</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/bFGF-aptamer" target="_blank" style="color:#520049"><b>bFGF aptamer</b></a></td>
        <td name="td2">Basic fibroblast growth factor (bFGF)</td>
        <td name="td3">Basic fibroblast growth factor (bFGF) serves as a pleiotropic modulator for numerous cells of mesenchymal and neuroectodermal lineages. In an in vitro environment, bFGF exhibits stimulatory effects on cell proliferation, migration, as well as the induction of plasminogen activator and collagenase activities.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-RNA-aptamer" target="_blank" style="color:#520049"><b>Aptamer 24-2-min(Spinach)</b></a></td>
        <td name="td2">DFHBI and Fab</td>
        <td name="td3">DFHBI (3,5-difluoro-4-hydroxybenzylidene imidazolinone) is a small molecule that resembles the chromophore of green fluorescent protein (GFP) for imaging RNA in living cells.. Spinach and DFHBI are essentially nonfluorescent when unbound, whereas the Spinach-DFHBI complex is brightly fluorescent both in vitro and in living cells.DFHBI fluorescence is activated by binding to Spinach2 or Broccoli aptamers. Exhibits peak excitation maxima of 447 nm and peak fluorescence emission of 501 nm when bound to Spinach2.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4KZD" target="_blank" style="color:#520049"><b>4KZD</b></a><br><a href="https://www.rcsb.org/structure/4Q9Q" target="_blank" style="color:#520049"><b>4Q9Q</b></a><br><a href="https://www.rcsb.org/structure/4KZD" target="_blank" style="color:#520049"><b>4KZD</b></a><br><a href="https://www.rcsb.org/structure/4Q9R" target="_blank" style="color:#520049"><b>4Q9R</b></a></td>
      </tr>
	  </tbody>
  </table>
</div>



<div id="sheet6" class="sheet" class="table-style1">
    <h2>Nucleic acid</h2>
    <p style="color:#FF4136;">You can download the tables by clicking on the five buttons below.</p>
    <table id="amintable">
     <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody> 
      <tr>
        <td name="td0" rowspan = "1">RNA</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-TAR-RNA-aptamer" target="_blank" style="color:#520049"><b>HIV-1 TAR RNA aptamer</b></a></td>
        <td name="td2">HIV-1 TAR RNA</td>
        <td name="td3">The trans-activating responsive (TAR) RNA element located in the 5′-untranslated region of the human immunodeficiency virus type 1 (HIV-1) genome is a 59 nt imperfect stem-loop essential for the viral replication. TAR regulates transcription by interacting with both viral and cellular proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2OOM" target="_blank" style="color:#520049"><b>2OOM</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">RNA</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/109.2-3-aptamer" target="_blank" style="color:#520049"><b>109.2-3 aptamer</b></a></td>
        <td name="td2">16S rRNA decoding region</td>
        <td name="td3">The decoding region of prokaryotic 16S ribosomal RNA (rRNA) is a region of RNA which is thought to interact with mRNA and tRNA. It has long been known that the interaction of the codon and anticodon occurs on the A-site of the decoding region of prokaryotic 16S rRNA, which is itself part of the 30S ribosomal subunit.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5">NA</td>
      </tr>
        <tr>
        <td name="td0" rowspan = "1">RNA</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/tRNA-aptamer" target="_blank" style="color:#520049"><b>tRNA aptamer</b></a></td>
        <td name="td2">Yeast phenylalanine tRNA</td>
        <td name="td3">Transfer RNA (tRNA), often referred to simply as tRNA, is a 76-90 nucleotide RNA whose 3' end can be catalyzed by aminoacyl-TRNA synthetase to attach a specific amino acid. In the process of translation, tRNA can recognize the codon on mRNA by its own anti-codon, and transport the amino acid corresponding to the codon to the polypeptide chain in ribosome synthesis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5">NA</td>
      </tr>
       <tr>
        <td name="td0" rowspan = "1">RNA</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RNA-loop-aptamer" target="_blank" style="color:#520049"><b>RNA loop aptamer</b></a></td>
        <td name="td2">RNA stem-loop</td>
        <td name="td3">The reverse repeat sequence present in single-stranded RNA can form a secondary structure due to hydrogen bond pairing between complementary bases. The double-stranded region between the paired bases forms a "stem", while the unpaired single-stranded region protrudes into a "loop".</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9222504/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5">NA</td>
      </tr>
	  </tbody>
  </table>
</div>



<div id="sheet7" class="sheet">
    <h2>Cell</h2>
    <p style="color:#FF4136;">You can download the tables by clicking on the five buttons below.</p>
    <table id="sugtable" class="table-style1">
     <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody> 
      <tr>
        <td name="td0" rowspan = "1">Other </td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mitochondrion-aptamer" target="_blank" style="color:#520049"><b>Mitochondrion aptamer</b></a></td>
        <td name="td2">Mitochondrion</td>
        <td name="td3">Mitochondrion is a kind of organelle which exists in most eukaryotic cells and is covered by two membranes. It is the structure that produces energy in cells and the main place for cells to carry out aerobic respiration, so it is called "power house". Its diameter is about 0.5 to 1.0 microns.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12024047/" target="_blank" style="color:#520049"><b>2002</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HER2-aptamer" target="_blank" style="color:#520049"><b>HER2 aptamer</b></a></td>
        <td name="td2">HER2-positive breast cancer cells</td>
        <td name="td3">Human epidermal growth factor receptor-2 (HER2/erbB-2) belongs to a family of four transmembrane receptors involved in signal transduction pathways that regulate cell growth and differentiation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/26221481/" target="_blank" style="color:#520049"><b>2015</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/E3-aptamer" target="_blank" style="color:#520049"><b>E3 aptamer</b></a></td>
        <td name="td2">prostate cancer cell</td>
        <td name="td3">Prostate cancer is both the most commonly diagnosed malignancy and the second most common cause of cancer-related mortality for men. Common human prostate cancer cell lines include DU145, LNCaP clone FGC, PC3, NCI-H660, 22RV1, etc. E3 aptamr was obtained by selected different prostate cancer cell lines(LNCaP, PC-3, DU 145, and 22Rv1 cell lines).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/29666232/" target="_blank" style="color:#520049"><b>2018</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TNBC-aptamer" target="_blank" style="color:#520049"><b>TNBC aptamer</b></a></td>
        <td name="td2">Triple-negative breast cancer (TNBC)</td>
        <td name="td3">Triple-negative breast cancer refers to the breast cancer whose immunohistochemical results show that estrogen receptor (ER), progesterone receptor (PR) and proto-oncogene Her-2 are all negative.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CD133-aptamer" target="_blank" style="color:#520049"><b>CD133 aptamer</b></a></td>
        <td name="td2">CD133 on cell line Hep3B</td>
        <td name="td3">CD133, also known as Prominin-1, is a pentaspan, highly glycosylated, membrane glycoprotein that is associated with cholesterol in the plasma membrane.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/23196060/" target="_blank" style="color:#520049"><b>2013</b></a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Cell</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GL56-aptamer" target="_blank" style="color:#520049"><b>GL56 aptamer</b></a></td>
        <td name="td2">Insulin receptor (glioma cells)</td>
        <td name="td3">IR belongs to a family of receptor tyrosine kinases (RTKs) that also includes the insulin-like growth factor 1 receptor (IGF-1R).Activation of both receptors plays a key role in normal tissues physiology and has been implicated in cancer development and progression.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/27648925/" target="_blank" style="color:#520049"><b>2016</b></a></td>
        <td name="td5">NA</td>
      </tr>
    </tbody>
  </table>
</div>

     
                
<script>
  var tables = [];
    var currentSheet = 'sheet1';
     $(document).ready(function() {
    $.noConflict();
    tables.push($('#cfttable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#rnadetable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#rnapretable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#smtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#eletable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));


    
    tables.push($('#amintable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#sugtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#tboxtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#othtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    
    
    // Hide the search box for DataTables
      $('#cfttable_filter').css('display', 'none');
      $('#rnadetable_filter').css('display', 'none');
      $('#rnapretable_filter').css('display', 'none');
       $('#smtable_filter').css('display', 'none');
      $('#eletable_filter').css('display', 'none');
      $('#amintable_filter').css('display', 'none');
      $('#sugtable_filter').css('display', 'none');
      $('#tboxtable_filter').css('display', 'none');
      $('#othtable_filter').css('display', 'none'); 
      
  // Show the initial sheet (sheet1) and hide others
    showSheet('sheet1');
    hideAllSheetsExcept('sheet1');
  });

  function sortTable(columnIndex) {
    // TODO: Add sorting logic based on the columnIndex
  }

  

function downloadExcel() {
  var selectElement = document.getElementById('downloadOptions');
  var selectedValue = selectElement.value;

  // Check if a valid option was selected
  if (selectedValue !== '') {
    // Create a temporary link element with the download URL
    var link = document.createElement('a');
    link.href = selectedValue;
    link.download = selectedValue.split('/').pop(); // Set the filename to the last part of the URL
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }
}
	
	
	function showSheet(sheetId) {
    // Hide the current sheet
    if (currentSheet) {
        var currentSheetElement = document.getElementById(currentSheet);
        currentSheetElement.style.display = 'none';
    }

    // Show the selected sheet
    var sheet = document.getElementById(sheetId);
    sheet.style.display = 'block';

    // Update the current sheet
    currentSheet = sheetId;

    // Get all buttons
    var buttons = document.querySelectorAll('.button');

    // Remove clicked class from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove('clicked');
    });

    // Add clicked class to the clicked button using event.target
    event.target.classList.add('clicked');
}

  function hideAllSheetsExcept(sheetId) {
    var sheets = document.getElementsByClassName('sheet');
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.id !== sheetId) {
        sheet.style.display = 'none';
      }
    }
    }

    function showAllSheets() {
      var sheets = document.getElementsByClassName('sheet');
      for (var i = 0; i < sheets.length; i++) {
        sheets[i].style.display = 'block';
      }
    }

    function searchTables() {
      var keyword = $('#searchBox').val().toLowerCase();

      tables.forEach(function(table) {
        table.search(keyword).draw();
      });
      // Filter the sheets based on search results
    filterSheets();
  }

  function filterSheets() {
    var keyword = $('#searchBox').val().toLowerCase();
    var sheets = document.getElementsByClassName('sheet');

    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      var table = tables[i];

      var displaySheet = false;

      table.rows().eq(0).each(function(index) {
        var row = table.row(index);
        var rowData = row.data().join(' ').toLowerCase();
        var display = rowData.includes(keyword) ? '' : 'none';
        row.nodes().to$().css('display', display);

        if (display !== 'none') {
          displaySheet = true;
        }
      });

      if (displaySheet) {
        $('#' + sheet.id).show();
      } else {
        $('#' + sheet.id).hide();
      }
    }
  }  
  </script>


 <!--script>
  window.addEventListener('DOMContentLoaded', function() {
    var td3Elements = document.getElementsByName('td3'); // 获取所有 name="td3" 的元素

    td3Elements.forEach(function(td) {
      var maxLength = 100; // 设置最大长度
      var originalText = td.innerHTML.trim(); // 获取原始内容并去除首尾空白

      // 如果内容长度超过最大长度，才进行处理
      if (originalText.length > maxLength) {
        var displayedText = originalText.substring(0, maxLength);
        var hiddenContent = '<span class="hidden-content" style="display:none;">' + originalText.substring(maxLength) + '</span>';
        var toggleBtn = ' <span class="ellipsis-btn" onclick="toggleHiddenContent(this)">......</span>'; // 初始的收起按钮

        // 将截断的内容、空格、隐藏内容和收起按钮组合到 td 内部
        td.innerHTML = displayedText + ' ' + hiddenContent + toggleBtn;
      }
    });
  });

  // 点击展开按钮时触发的函数
  function toggleHiddenContent(btn) {
    var hiddenContent = btn.parentElement.querySelector('.hidden-content');
    
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'inline'; // 展开内容
      btn.innerHTML = '...'; // 更新按钮文字为“... (less)”
    } else {
      hiddenContent.style.display = 'none'; // 收起内容
      btn.innerHTML = '......'; // 更新按钮文字为“... (more)”
    }
  }
</script-->



 </body>
</html>
<br>
        
