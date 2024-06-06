---
title: "Ribocentre-aptamer - Structures"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /structures/
---
<html lang="en">
<head>
<!--set sort order in table header begin-->
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title>Aptamer applications</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <!--set sort order in table header finish-->
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
  </style>
</head>


<body onload="showSheet('sheet1')">
<h1 class="post-title" itemprop="name headline">Structures</h1>
This page provides a summary of the methods used for structure determination and phasing in RNA aptamer structure research. Additionally, we provide a comprehensive list of  all the structured RNA aptamer included in this collection, along with their respective Protein Data Bank (PDB) entries<!--sup>[<a href="#ref1" style="color:#520049">1</a>]</sup-->.
<br>
<br>
<br>


<p class="header_box" >Statistical information </p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/structure/stru-1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/structure/stru-2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
 <br>
 <br>



<p class="header_box" >Detailed information</p>    
This section displays
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
<br>
        
<div id="sheet1" class="sheet">
<h2>Small molecules</h2>
    <table id="cfttable" class="table-style1">
      <thead>   
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Structure Determination</th>
        <th onclick="sortTable(4)">NDB</th>
        <th onclick="sortTable(5)">Phase Determination</th>
        <th onclick="sortTable(6)">Resolution(Å)</th>
        <th onclick="sortTable(7)">Year</th>
      </tr>
      </thead>
    <tbody>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">FMN_aptamer</td>
      <td name="td2">FMN</td>
      <td name="td3">NMR</td>
      <td name="td4">1FMN</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8642604/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">ARGININE_aptamer</td>
      <td name="td2">ARGININE</td>
      <td name="td3">NMR</td>
      <td name="td4">1KOC</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">Citrulline_aptamer</td>
      <td name="td2">Citrulline</td>
      <td name="td3">NMR</td>
      <td name="td4">1KOD</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">Vitamin B12_aptamer</td>
      <td name="td2">Vitamin B12</td>
      <td name="td3">X-ray</td>
      <td name="td4">1ET4</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.3</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10903943/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">Vitamin B12_aptamer</td>
      <td name="td2">Vitamin B12</td>
      <td name="td3">X-ray</td>
      <td name="td4">1DDY</td>
      <td name="td5">Co(MAD)</td>
      <td name="td6">3.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10625428/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">Biotin_aptamer</td>
      <td name="td2">Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">1F27</td>
      <td name="td5">Se (MAD)</td>
      <td name="td6">1.3</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10698630/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">5-HT_aptamer</td>
      <td name="td2">5-HT</td>
      <td name="td3">X-ray</td>
      <td name="td4">5KPY</td>
      <td name="td5">Ir (SIRAS)</td>
      <td name="td6">2.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28092358/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">flavin_aptamer</td>
      <td name="td2">FMN</td>
      <td name="td3">NMR</td>
      <td name="td4">7RWR</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36097297/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline_aptamer</td>
      <td name="td2">TAL3</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D2A</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.17</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline_aptamer</td>
      <td name="td2">theophylline</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D28</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.42</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline aptamer</td>
      <td name="td2">apo</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D29</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.81</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline aptamer</td>
      <td name="td2">TAL2</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D2B</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.44</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline aptamer</td>
      <td name="td2">TAL1</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D5L</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.64</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline aptamer</td>
      <td name="td2">TAL4</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D5O</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1">theophylline aptamer</td>
      <td name="td2">TAL2 and Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">8DK7</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.46</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">malachite green_aptamer</td>
      <td name="td2">tetramethylrosamine (TMR)</td>
      <td name="td3">X-ray</td>
      <td name="td4">1F1T</td>
      <td name="td5">Br (MAD)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10926496/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">malachite green_aptamer</td>
      <td name="td2">malachite green</td>
      <td name="td3">NMR</td>
      <td name="td4">1Q8N</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/14695514/" target="_blank" style="color:#520049"><b>2004</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">4TS0</td>
      <td name="td5">Ba (SAD)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25026079/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">DFHBI</td>
      <td name="td3">X-ray</td>
      <td name="td4">4TS2</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.88</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25026079/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">DFHBI</td>
      <td name="td3">X-ray</td>
      <td name="td4">5OB3</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28939697/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">GTP_aptamer</td>
      <td name="td2">GTP</td>
      <td name="td3">NMR</td>
      <td name="td4">5LWJ</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/27885761/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Corn aptamer</td>
      <td name="td2">DFHO</td>
      <td name="td3">X-ray</td>
      <td name="td4">5BJP</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">2.51</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28945234/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Corn aptamer</td>
      <td name="td2">DFHO</td>
      <td name="td3">X-ray</td>
      <td name="td4">5BJO</td>
      <td name="td5">I (SAD)</td>
      <td name="td6">2.35</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28945234/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">5V3F</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">1.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28553947/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">the DIR2s aptamer</td>
      <td name="td2">oxazole thiazole blue (OTB)</td>
      <td name="td3">X-ray</td>
      <td name="td4">6DB9,6DB8</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.025</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30382099/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-II aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6C63</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.90002801531</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29768001/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-II aptamer</td>
      <td name="td2">TO3-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6C64</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29768001/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-II aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6C65</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29768001/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-III aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E8S</td>
      <td name="td5">Ir(SAD)</td>
      <td name="td6">2.35</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30992561/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-III aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E8T</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30992561/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-III aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E8U</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.55</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30992561/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">iMango-III aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6PQ7</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31397326/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Corn aptamer</td>
      <td name="td2">ThT</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E81</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.721</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31178406/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Corn aptamer</td>
      <td name="td2">ThT</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E82</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.1</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31178406/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Corn aptamer</td>
      <td name="td2">TO</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E84</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31178406/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Corn aptamer</td>
      <td name="td2">apo</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E80</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31178406/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">tetramethylrhodamine_aptamer</td>
      <td name="td2">tetramethylrhodamine</td>
      <td name="td3">NMR</td>
      <td name="td4">6GZR,6GZK</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31754719/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-IV aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6V9B</td>
      <td name="td5">Br (SAD)</td>
      <td name="td6">2.4</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32386573/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-IV aptamer</td>
      <td name="td2">TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6V9D</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32386573/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Chili aptamer</td>
      <td name="td2">DMHBI+</td>
      <td name="td3">X-ray</td>
      <td name="td4">7OAW</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.95</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Chili aptamer</td>
      <td name="td2">DMHBO+</td>
      <td name="td3">X-ray</td>
      <td name="td4">7OA3</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Chili aptamer</td>
      <td name="td2">DMHBO+</td>
      <td name="td3">X-ray</td>
      <td name="td4">7OAV</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">2.99</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Chili aptamer</td>
      <td name="td2">DMHBO+</td>
      <td name="td3">X-ray</td>
      <td name="td4">7OAX</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.24</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOH</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">1.64</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOG</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">1.5</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOI</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.92</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOJ</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.77</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC485</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOK</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC497</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOL</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.31</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC508</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOM</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC514</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EON</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.3</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC525</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOO</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.23</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC620</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOP</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-III aptamer</td>
      <td name="td2">YO3-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">6UP0</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/33376189/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Mango-III aptamer</td>
      <td name="td2">DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">7L0Z</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.1</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/33376189/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Squash aptamer</td>
      <td name="td2">DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">7KVT</td>
      <td name="td5">Ir (SAD)</td>
      <td name="td6">2.73</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34937911/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Squash aptamer</td>
      <td name="td2">DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">7KVU</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.68</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34937911/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Squash aptamer</td>
      <td name="td2">DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">7KVV</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.85</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34937911/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Beetroot aptamer</td>
      <td name="td2">DFAME</td>
      <td name="td3">X-ray</td>
      <td name="td4">8EYU</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.95</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Beetroot aptamer</td>
      <td name="td2">ThT</td>
      <td name="td3">X-ray</td>
      <td name="td4">8EYW</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.1</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Beetroot aptamer</td>
      <td name="td2">DFHO</td>
      <td name="td3">X-ray</td>
      <td name="td4">8F0N</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.85</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Beetroot aptamer</td>
      <td name="td2">DFHO</td>
      <td name="td3">X-ray</td>
      <td name="td4">8EYV</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.55</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Nucleosides & Nucleotides</td>
      <td name="td1">AMP_aptamer</td>
      <td name="td2">AMP</td>
      <td name="td3">NMR</td>
      <td name="td4">1AM0</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8700212/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Nucleosides & Nucleotides</td>
      <td name="td1">AMP_aptamer</td>
      <td name="td2">AMP</td>
      <td name="td3">NMR</td>
      <td name="td4">1RAW</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8756406/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Nucleosides & Nucleotides</td>
      <td name="td1">GTP_aptamer</td>
      <td name="td2">GTP</td>
      <td name="td3">NMR</td>
      <td name="td4">2AU4</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049"><b>2006</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Nucleosides & Nucleotides</td>
      <td name="td1">ATP_aptamer</td>
      <td name="td2">AMPNAapo</td>
      <td name="td3">EM</td>
      <td name="td4">6WLJ,6WLK</td>
      <td name="td5">NA</td>
      <td name="td6">9.6</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32616928/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">Aminoglycoside_aptamer</td>
      <td name="td2">Aminoglycoside</td>
      <td name="td3">NMR</td>
      <td name="td4">1TOB</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9070426/" target="_blank" style="color:#520049"><b>1997</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">theophylline_aptamer</td>
      <td name="td2">theophylline</td>
      <td name="td3">NMR</td>
      <td name="td4">1EHT</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9253414/" target="_blank" style="color:#520049"><b>1997</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">tobramycin_aptamer</td>
      <td name="td2">tobramycin</td>
      <td name="td3">NMR</td>
      <td name="td4">2TOB</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9731769/" target="_blank" style="color:#520049"><b>1998</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">neomycin B_aptamer</td>
      <td name="td2">neomycin B</td>
      <td name="td3">NMR</td>
      <td name="td4">1NEM</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10425683/" target="_blank" style="color:#520049"><b>1999</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">Streptomycin_aptamer</td>
      <td name="td2">Streptomycin</td>
      <td name="td3">X-ray</td>
      <td name="td4">1NTA,1NTB</td>
      <td name="td5">Ba (MAD)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12618190/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">theophylline_aptamer</td>
      <td name="td2">theophylline</td>
      <td name="td3">NMR</td>
      <td name="td4">1O15</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12568611/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1">tetracycline_aptamer</td>
      <td name="td2">tetracycline</td>
      <td name="td3">X-ray</td>
      <td name="td4">3EGZ</td>
      <td name="td5">Se (MAD)</td>
      <td name="td6">2.2</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18940672/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">trifluoroethyl, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4Q9R</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.12</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">1TU, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4KZD</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.19</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">bromo-ligand analog, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4Q9Q</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.45</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC599 and Fab BL3-6</td>
      <td name="td3">X-ray</td>
      <td name="td4">7U0Y</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.66</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/35759696/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC and Fab BL3-6</td>
      <td name="td3">X-ray</td>
      <td name="td4">7SZU</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.24</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/35759696/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
   </tbody>
  </table>
</div>    



<div id="sheet5" class="sheet">
    <h2>Proteins</h2>
    <table id="eletable" class="table-style1">
      <thead> 
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Structure Determination</th>
        <th onclick="sortTable(4)">NDB</th>
        <th onclick="sortTable(5)">Phase Determination</th>
        <th onclick="sortTable(6)">Resolution(Å)</th>
        <th onclick="sortTable(7)">Year</th>
      </tr>
      </thead>
    <tbody>
      <tr>
      <td name="td0">Bacteria</td>
      <td name="td1">YmaH (Hfq)_aptamer</td>
      <td name="td2">YmaH (Hfq)</td>
      <td name="td3">X-ray</td>
      <td name="td4">3HSB,3AHU</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.2</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/22053080/" target="_blank" style="color:#520049"><b>2012</b></a></td>
    </tr>
     <tr>
      <td name="td0">Bacteria</td>
      <td name="td1">ribosomal protein S8_aptamer</td>
      <td name="td2">ribosomal protein S8</td>
      <td name="td3">X-ray</td>
      <td name="td4">4PDB</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.6</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25140011/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Bacteria</td>
      <td name="td1">TetR_aptamer</td>
      <td name="td2">transcription repressor TetR</td>
      <td name="td3">X-ray</td>
      <td name="td4">6SY4</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.69</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Bacteria</td>
      <td name="td1">TetR_aptamer</td>
      <td name="td2">transcription repressor TetR</td>
      <td name="td3">X-ray</td>
      <td name="td4">6SY6</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">GlnRS_aptamer</td>
      <td name="td2">GlnRS，Gln</td>
      <td name="td3">X-ray</td>
      <td name="td4">1EXD</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10881199/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">NF-kappaB_aptamer</td>
      <td name="td2">NF-kappaB</td>
      <td name="td3">X-ray</td>
      <td name="td4">1OOA</td>
      <td name="td5">molecular replacement(MR) and single isomorphous replacement (SIR) methods</td>
      <td name="td6">2.45</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12886018/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">eIF4A_aptamer</td>
      <td name="td2">initiation factor 4A (eIF4A)</td>
      <td name="td3">NMR</td>
      <td name="td4">1XWP</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/15687383/" target="_blank" style="color:#520049"><b>2005</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">eIF4A_aptamer</td>
      <td name="td2">initiation factor 4A (eIF4A)</td>
      <td name="td3">NMR</td>
      <td name="td4">1XWU</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/15687383/" target="_blank" style="color:#520049"><b>2005</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">FC RNA aptamer</td>
      <td name="td2">RNA polymerase (Pol) II</td>
      <td name="td3">X-ray</td>
      <td name="td4">2B63</td>
      <td name="td5">Br (SAD)</td>
      <td name="td6">3.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/16341226/" target="_blank" style="color:#520049"><b>2005</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">NF-kappaB_aptamer</td>
      <td name="td2">NF-kappaB</td>
      <td name="td3">NMR</td>
      <td name="td4">2JWV</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18160411/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">human thrombin_aptamer</td>
      <td name="td2">human thrombin</td>
      <td name="td3">X-ray</td>
      <td name="td4">3DD2</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18971322/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">human IgG_aptamer</td>
      <td name="td2">human IgG</td>
      <td name="td3">X-ray</td>
      <td name="td4">3AGV</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.15</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/20675355/" target="_blank" style="color:#520049"><b>2010</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">GRK2_aptamer</td>
      <td name="td2">G protein-coupled receptor kinase 2 (GRK2)</td>
      <td name="td3">X-ray</td>
      <td name="td4">3UZT</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.51</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/22727813/" target="_blank" style="color:#520049"><b>2012</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">GRK2_aptamer</td>
      <td name="td2">G protein-coupled receptor kinase 2 (GRK2)</td>
      <td name="td3">X-ray</td>
      <td name="td4">3UZS</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.51</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/22727813/" target="_blank" style="color:#520049"><b>2012</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">lysozyme_aptamer</td>
      <td name="td2">lysozyme</td>
      <td name="td3">X-ray</td>
      <td name="td4">4M6D</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.68</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">lysozyme_aptamer</td>
      <td name="td2">lysozyme</td>
      <td name="td3">X-ray</td>
      <td name="td4">4M4O</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4KZE</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.4</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">Ribosomal Protein S8_aptamer</td>
      <td name="td2">Ribosomal Protein S8</td>
      <td name="td3">NMR</td>
      <td name="td4">2LUN</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25114049/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">L-CLL2_aptamer</td>
      <td name="td2">L-CLL2</td>
      <td name="td3">X-ray</td>
      <td name="td4">4R8I</td>
      <td name="td5">Se (SAD)</td>
      <td name="td6">2.05</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25901662/" target="_blank" style="color:#520049"><b>2015</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">Thrombin_aptamer</td>
      <td name="td2">Thrombin</td>
      <td name="td3">X-ray</td>
      <td name="td4">5DO4</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.86</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/27566147/" target="_blank" style="color:#520049"><b>2016</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">FXa_aptamer</td>
      <td name="td2">factor Xa (FXa)</td>
      <td name="td3">X-ray</td>
      <td name="td4">5VOE</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29863725/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">FXa_aptamer</td>
      <td name="td2">factor Xa and Rivaroxaban</td>
      <td name="td3">X-ray</td>
      <td name="td4">5VOF</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.25</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29863725/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">Fab BL3-6S97N</td>
      <td name="td3">X-ray</td>
      <td name="td4">6B14</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.64</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29309709/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">Fab BL3-6S97N</td>
      <td name="td3">X-ray</td>
      <td name="td4">6B3K</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.09</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29309709/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">GCPII_aptamer</td>
      <td name="td2">human glutamate carboxypeptidase II (GCPII)</td>
      <td name="td3">X-ray</td>
      <td name="td4">6RTI</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.2</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32525981/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">bacteriophage MS2 coat protein_aptamer</td>
      <td name="td2">bacteriophage MS2 coat protein</td>
      <td name="td3">X-ray</td>
      <td name="td4">6MSF</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9461079/" target="_blank" style="color:#520049"><b>1998</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">bacteriophage MS2 coat protein_aptamer</td>
      <td name="td2">bacteriophage MS2 coat protein</td>
      <td name="td3">X-ray</td>
      <td name="td4">5MSF,7MSF</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9808042/" target="_blank" style="color:#520049"><b>1998</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">bacteriophage MS2 coat protein_aptamer</td>
      <td name="td2">bacteriophage MS2 coat protein</td>
      <td name="td3">X-ray</td>
      <td name="td4">1U1Y</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.85</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/15496523/" target="_blank" style="color:#520049"><b>2004</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">prion_aptamer</td>
      <td name="td2">prion</td>
      <td name="td3">NMR</td>
      <td name="td4">2RQJ</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/19666719/" target="_blank" style="color:#520049"><b>2009</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">prion_aptamer</td>
      <td name="td2">prion</td>
      <td name="td3">NMR</td>
      <td name="td4">2RSK</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/23180780/" target="_blank" style="color:#520049"><b>2013</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">prion_aptamer</td>
      <td name="td2">prion</td>
      <td name="td3">NMR</td>
      <td name="td4">2RU7</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24803670/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Others</td>
      <td name="td1">prion_aptamer</td>
      <td name="td2">prion</td>
      <td name="td3">NMR</td>
      <td name="td4">6K84</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32188933/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">REV peptide_aptamer</td>
      <td name="td2">REV peptide</td>
      <td name="td3">NMR</td>
      <td name="td4">1ULL</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">REV peptide_aptamer</td>
      <td name="td2">REV peptide</td>
      <td name="td3">NMR</td>
      <td name="td4">484D</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10467126/" target="_blank" style="color:#520049"><b>1999</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">HTLV-1_aptamer</td>
      <td name="td2">HTLV-1 arginine-rich Rex peptide</td>
      <td name="td3">NMR</td>
      <td name="td4">1EXY</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10647177/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">HIV Tat protein_aptamer</td>
      <td name="td2">HIV Tat protein</td>
      <td name="td3">NMR</td>
      <td name="td4">1NBK</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12737819/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">trifluoroethyl, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4Q9R</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.12</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">1TU, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4KZD</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.19</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Spinach aptamer</td>
      <td name="td2">bromo-ligand analog, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4Q9Q</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.45</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC599 and Fab BL3-6</td>
      <td name="td3">X-ray</td>
      <td name="td4">7U0Y</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.66</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/35759696/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
            
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1">Pepper aptamer</td>
      <td name="td2">HBC and Fab BL3-6</td>
      <td name="td3">X-ray</td>
      <td name="td4">7SZU</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.24</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/35759696/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>  
    </tbody>
  </table>
</div>
    


<div id="sheet6" class="sheet" class="table-style1">
    <h2>Nucleic acid</h2>
    <table id="amintable">
     <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Structure Determination</th>
        <th onclick="sortTable(4)">NDB</th>
        <th onclick="sortTable(5)">Phase Determination</th>
        <th onclick="sortTable(6)">Resolution(Å)</th>
        <th onclick="sortTable(7)">Year</th>
      </tr>
      </thead>
    <tbody>
      <tr>
      <td name="td0">Mammalian</td>
      <td name="td1">AML1_aptamer</td>
      <td name="td2">AML1 Runt domain</td>
      <td name="td3">NMR</td>
      <td name="td4">2RRC</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/27514505/" target="_blank" style="color:#520049"><b>2011</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">TAR_aptamer</td>
      <td name="td2">trans-activating responsive (TAR)</td>
      <td name="td3">NMR</td>
      <td name="td4">2OOM,2PN9</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/17768146/" target="_blank" style="color:#520049"><b>2007</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">TAR RNA_aptamer</td>
      <td name="td2">TAR RNA</td>
      <td name="td3">NMR</td>
      <td name="td4">2RN1</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18607001/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">TAR RNA_aptamer</td>
      <td name="td2">TAR RNA</td>
      <td name="td3">X-ray</td>
      <td name="td4">2JLT</td>
      <td name="td5">Br(SAD)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18996893/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1">Rev RNA_aptamer</td>
      <td name="td2">Rev RNA</td>
      <td name="td3">X-ray</td>
      <td name="td4">6CF2</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30017564/" target="_blank" style="color:#520049"><b>2018</b></a></td>
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
        
    </body>
</html><br>