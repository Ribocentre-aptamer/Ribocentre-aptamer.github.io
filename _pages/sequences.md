---
title: "Ribocentre Aptamer - Sequences"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /sequences/
---
<html lang="en">
<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title>Aptamer sequences</title>
  <link rel="stylesheet" type="text/css" href="{{ '/css/jquery.dataTables.css' | relative_url }}">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
  <script type="text/javascript" src="{{ '/js/jquery.js' | relative_url }}"></script>
  <script type="text/javascript" src="{{ '/js/jquery.dataTables.js' | relative_url }}"></script>
  <link rel="stylesheet" href="/css/dashboard.css">
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
  
<style>
.button {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 10px;
  text-align: center;
  background-color: #ffffff;
  color: #520049;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid #520049;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background-color: #520049;
  color: white;
}
</style>
</head>

<body>
<h1 class="post-title" itemprop="name headline">Sequences</h1>
Shows the sequence of RNA aptamers. We keep the U in the partial sequence because it is consistent with the sequence information in the fasta file. ( We provide the script could change T into U on the page). <a href="https://www.ribocentre.org/downloads/sequence-T2U.ipynb" target="_blank" download="sequence-T2U.ipynb"><button class="btn btn-secondary"><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download Script</button></a><br><br>

<!-- 搜索框和操作按钮容器 -->
<div class="form-container" style="margin-bottom:15px;display:flex;align-items:center;">
  <input type="text" id="searchBox" placeholder="Search sequences..." style="padding:8px;font-size:15px;border:2px solid #ccc;border-radius:4px;width:300px;">
  <button id="exportBtn" class="button" style="margin-left:10px;">Export Selected</button>
  <button id="selectAllBtn" class="button">Select All</button>
  <button id="deselectAllBtn" class="button">Deselect All</button>
</div>

<!-- 表格容器 -->
<div id="sequences-table" class="sheet">
  <div class="loading">Loading sequences data...</div>
</div>

<div class="amir-tooltip" id="amirTooltip">
  <div class="tooltip-content"></div>
  <div class="tooltip-arrow"></div>
</div>

<script src="{{ site.baseurl }}/js/sequences.js"></script>
</body>
</html>
