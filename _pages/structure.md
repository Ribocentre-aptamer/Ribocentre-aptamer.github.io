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
  <script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
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
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FMN-aptamer" target="_blank" style="color:#520049"><b>FMN aptamer</b></a></td>
      <td name="td2">FMN</td>
      <td name="td3">NMR</td>
      <td name="td4">1FMN</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8642604/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Citrulline-aptamer" target="_blank" style="color:#520049"><b>Arginine aptamer</b></a></td>
      <td name="td2">Arginine</td>
      <td name="td3">NMR</td>
      <td name="td4">1KOC</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Citrulline-aptamer" target="_blank" style="color:#520049"><b>Citrulline aptamer</b></a></td>
      <td name="td2">Citrulline</td>
      <td name="td3">NMR</td>
      <td name="td4">1KOD</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Vitamin-B12-aptamer" target="_blank" style="color:#520049"><b>Vitamin B12-aptamer</b></a></td>
      <td name="td2">Vitamin B12</td>
      <td name="td3">X-ray</td>
      <td name="td4">1ET4<br>1DDY</td>
      <td name="td5">molecular replacement(MR),<br>Co(MAD)</td>
      <td name="td6">2.3<br>>3.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10903943/" target="_blank" style="color:#520049"><b>2000</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/10625428/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Biotin-aptamer" target="_blank" style="color:#520049"><b>Biotin aptamer</b></a></td>
      <td name="td2">Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">1F27</td>
      <td name="td5">Se (MAD)</td>
      <td name="td6">1.3</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10698630/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/5HTP-aptamer" target="_blank" style="color:#520049"><b>5HTP-aptamer</b></a></td>
      <td name="td2">5-HT</td>
      <td name="td3">X-ray</td>
      <td name="td4">5KPY</td>
      <td name="td5">Ir (SIRAS)</td>
      <td name="td6">2.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28092358/" target="_blank" style="color:#520049"><b>2017</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Riboflavin-aptamer" target="_blank" style="color:#520049"><b>Riboflavin aptamer</b></a></td>
      <td name="td2">FMN</td>
      <td name="td3">NMR</td>
      <td name="td4">7RWR</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36097297/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
     <tr>
      <td name="td0">Biologics & Signaling Molecules</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Theophylline-aptamer" target="_blank" style="color:#520049"><b>Theophylline-aptamer</b></a></td>
      <td name="td2">TAL3<br>theophylline<br>apo<br>TAL2<br>TAL1<br>TAL4</td>
      <td name="td3">X-ray</td>
      <td name="td4">8D2A<br>8D28<br>8D29<br>8D2B<br>8D5L<br>8D5O</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.17<br>1.42<br>1.81<br>1.44<br>1.64<br>2.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/36413497/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/MG-aptamer" target="_blank" style="color:#520049"><b>MG aptamer</b></a></td>
      <td name="td2">tetramethylrosamine(TMR)<br>malachite green</td>
      <td name="td3">X-ray<br>NMR</td>
      <td name="td4">1F1T<br>1Q8N</td>
      <td name="td5">Br (MAD)<br>NA</td>
      <td name="td6">2.8<br>NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10926496/" target="_blank" style="color:#520049"><b>2000</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/14695514/" target="_blank" style="color:#520049"><b>2004</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-aptamer" target="_blank" style="color:#520049"><b>Spinach aptamer</b></a></td>
      <td name="td2">DFHBI-1T<br>DFHBI<br>DFHBI<br>trifluoroethyl, Fab<br>1TU, Fab<br>bromo-ligand analog, Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4TS0<br>4TS2<br>5OB3<br>4Q9R<br>4KZD<br>4Q9Q</td>
      <td name="td5">Ba (SAD),<br>molecular replacement(MR)</td>
      <td name="td6">2.8<br>2.88<br>2.0<br>3.12<br>2.19<br>2.45</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25026079/" target="_blank" style="color:#520049"><b>2014</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/28939697/" target="_blank" style="color:#520049"><b>2017</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GTP-aptamer" target="_blank" style="color:#520049"><b>GTP aptamer</b></a></td>
      <td name="td2">GTP</td>
      <td name="td3">NMR</td>
      <td name="td4">5LWJ<br>2AU4</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/27885761/" target="_blank" style="color:#520049"><b>2017</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049"><b>2006</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Corn-aptamer" target="_blank" style="color:#520049"><b>Corn aptamer</b></a></td>
      <td name="td2">DFHO<br>DFHO<br>ThT<br>ThT<br>TO<br>	apo</td>
      <td name="td3">X-ray</td>
      <td name="td4">5BJP<br>5BJO<br>6E81<br>6E82<br>6E84<br>6E80</td>
      <td name="td5">Ir (SAD),<br>molecular replacement(MR)</td>
      <td name="td6">2.51<br>2.35<br>2.721<br>3.1<br>2.9<br>2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28945234/" target="_blank" style="color:#520049"><b>2017</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/31178406/" target="_blank" style="color:#520049"><b>2019</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-aptamer(TO1-biotin)" target="_blank" style="color:#520049"><b>Mango aptamer(TO1-biotin)</b></a></td>
      <td name="td2">TO1-Biotin<br>TO1-Biotin<br>TO3-Biotin<br>TO1-Biotin<br>TO1-Biotin<br>TO1-Biotin</td>
      <td name="td3">X-ray</td>
      <td name="td4">5V3F<br>6C63<br>6C64<br>6C65<br>6V9B<br>6V9D</td>
      <td name="td5">Ir (SAD),<br>molecular replacement(MR)</td>
      <td name="td6">1.7<br>2.9<br>3.0<br>2.8<br>2.4<br>2.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/28553947/" target="_blank" style="color:#520049"><b>2017</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/29768001/" target="_blank" style="color:#520049"><b>2018</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/32386573/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/DIR2s-apt-aptamer" target="_blank" style="color:#520049"><b>DIR2s-apt aptamer</b></a></td>
      <td name="td2">oxazole thiazole blue (OTB)</td>
      <td name="td3">X-ray</td>
      <td name="td4">6DB9,6DB8</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.025</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30382099/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-III-aptamer(YO3)" target="_blank" style="color:#520049"><b>Mango-III aptamer(YO3)</b></a></td>
      <td name="td2">TO1-Biotin<br>TO1-Biotin<br>TO1-Biotin<br>TO1-Biotin<br>YO3-Biotin<br>DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">6E8S<br>6E8T<br>6E8U<br>6PQ7<br>6UP0<br>7L0Z</td>
      <td name="td5">Ir(SAD),<br>molecular replacement(MR)</td>
      <td name="td6">2.35<br>2.9<br>1.55<br>3.0<br>2.8<br>2.1</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/30992561/" target="_blank" style="color:#520049"><b>2019</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/31397326/" target="_blank" style="color:#520049"><b>2019</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/33376189/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TMR-aptamer" target="_blank" style="color:#520049"><b>TMR aptamer</b></a></td>
      <td name="td2">tetramethylrhodamine</td>
      <td name="td3">NMR</td>
      <td name="td4">6GZR<br>6GZK</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/31754719/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Chili-aptamer" target="_blank" style="color:#520049"><b>Chili aptamer</b></a></td>
      <td name="td2">DMHBI+<br>DMHBO+<br>DMHBO+<br>DMHBO+</td>
      <td name="td3">X-ray</td>
      <td name="td4">7OAW<br>7OA3<br>7OAV<br>7OAX</td>
      <td name="td5">molecular replacement(MR),<br>Ir (SAD)</td>
      <td name="td6">2.95<br>2.8<br>2.99<br>2.24</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049"><b>2021</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Pepper-aptamer" target="_blank" style="color:#520049"><b>Pepper aptamer</b></a></td>
      <td name="td2">HBC<br>HBC<br>HBC<br>HBC<br>HBC485<br>HBC497<br>HBC508<br>HBC514<br>HBC525<br>HBC620<br>HBC599 and Fab BL3-6<br>	HBC and Fab BL3-6</td>
      <td name="td3">X-ray</td>
      <td name="td4">7EOH<br>7EOG<br>7EOI<br>7EOJ<br>7EOK<br>7EOL<br>7EOM<br>7EON<br>7EOO<br>7EOP<br>7U0Y<br>7SZU</td>
      <td name="td5">Ir (SAD),<br>molecular replacement(MR)</td>
      <td name="td6">1.64<br>1.5<br>1.92<br>1.77<br>2.7<br>2.31<br>2.7<br>2.3<br>2.23<br>1.8<br>2.66<br>2.24</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/35759696/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Squash-aptamer" target="_blank" style="color:#520049"><b>Squash aptamer</b></a></td>
      <td name="td2">DFHBI-1T</td>
      <td name="td3">X-ray</td>
      <td name="td4">7KVT<br>7KVU<br>7KVV</td>
      <td name="td5">Ir (SAD),<br>molecular replacement(MR)</td>
      <td name="td6">2.73<br>2.68<br>2.85</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/34937911/" target="_blank" style="color:#520049"><b>2022</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Beetroot-aptamer(DFAME)" target="_blank" style="color:#520049"><b>Beetroot aptamer</b></a></td>
      <td name="td2">DFAME<br>ThT<br>DFHO<br>DFHO</td>
      <td name="td3">X-ray</td>
      <td name="td4">8EYU<br>8EYW<br>8F0N<br>8EYV</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.95<br>2.1<br>2.85<br>2.55</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
    </tr>
     <tr>
      <td name="td0">Nucleosides & Nucleotides</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ATP-aptamer" target="_blank" style="color:#520049"><b>AMP aptamer</b></a></td>
      <td name="td2">AMP</td>
      <td name="td3">NMR</td>
      <td name="td4">1AM0<br>1RAW</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8700212/" target="_blank" style="color:#520049"><b>1996</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/8756406/" target="_blank" style="color:#520049"><b>1996</b></a></td>
    </tr>
     <tr>
      <td name="td0">Nucleosides & Nucleotides</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ATP-aptamer" target="_blank" style="color:#520049"><b>ATP aptamer</b></a></td>
      <td name="td2">AMPNAapo</td>
      <td name="td3">EM</td>
      <td name="td4">6WLJ,6WLK</td>
      <td name="td5">NA</td>
      <td name="td6">9.6</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32616928/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tobramycin-RNA-aptamer" target="_blank" style="color:#520049"><b>Tobramycin-RNA aptamer</b></a></td>
      <td name="td2">Aminoglycoside<br>tobramycin</td>
      <td name="td3">NMR</td>
      <td name="td4">1TOB<br>2TOB</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9070426/" target="_blank" style="color:#520049"><b>1997</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/9731769/" target="_blank" style="color:#520049"><b>1998</b></a></td>
    </tr>
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Theophylline-aptamer" target="_blank" style="color:#520049"><b>Theophylline-aptamer</b></a></td>
      <td name="td2">theophylline</td>
      <td name="td3">NMR</td>
      <td name="td4">1EHT<br>1O15</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9253414/" target="_blank" style="color:#520049"><b>1997</b></a><a href="https://pubmed.ncbi.nlm.nih.gov/12568611/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NeomycinB-RNA-aptamer" target="_blank" style="color:#520049"><b>NeomycinB RNA aptamer</b></a></td>
      <td name="td2">neomycin B</td>
      <td name="td3">NMR</td>
      <td name="td4">1NEM</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10425683/" target="_blank" style="color:#520049"><b>1999</b></a></td>
    </tr>
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Streptomycin-RNA-Aptamer" target="_blank" style="color:#520049"><b>Streptomycin-RNA Aptamer</b></a></td>
      <td name="td2">Streptomycin</td>
      <td name="td3">X-ray</td>
      <td name="td4">1NTA,1NTB</td>
      <td name="td5">Ba (MAD)</td>
      <td name="td6">2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12618190/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
     <tr>
      <td name="td0">Pharmaceuticals</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tetracycline-aptamer" target="_blank" style="color:#520049"><b>Tetracycline aptamer</b></a></td>
      <td name="td2">tetracycline</td>
      <td name="td3">X-ray</td>
      <td name="td4">3EGZ</td>
      <td name="td5">Se (MAD)</td>
      <td name="td6">2.2</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18940672/" target="_blank" style="color:#520049"><b>2008</b></a></td>
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
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hfq-aptamer" target="_blank" style="color:#520049"><b>Hfq aptamer</b></a></td>
      <td name="td2">YmaH (Hfq)</td>
      <td name="td3">X-ray</td>
      <td name="td4">3HSB<br>3AHU</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.2</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/22053080/" target="_blank" style="color:#520049"><b>2012</b></a></td>
    </tr>
     <tr>
      <td name="td0">Bacteria</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ribosomal-protein-S8-aptamer" target="_blank" style="color:#520049"><b>Ribosomal protein S8-aptamer</b></a></td>
      <td name="td2">ribosomal protein S8</td>
      <td name="td3">X-ray<br>NMR</td>
      <td name="td4">4PDB<br>	2LUN</td>
      <td name="td5">molecular replacement(MR),<br>NA</td>
      <td name="td6">2.6<br>NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25140011/" target="_blank" style="color:#520049"><b>2014</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/25114049/" target="_blank" style="color:#520049"><b>2014</b></a></td>
    </tr>
     <tr>
      <td name="td0">Bacteria</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TetR-aptamer" target="_blank" style="color:#520049"><b>TetR aptamer</b></a></td>
      <td name="td2">transcription repressor TetR</td>
      <td name="td3">X-ray</td>
      <td name="td4">6SY4<br>6SY6</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.69<br>2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GlnRs-aptamer" target="_blank" style="color:#520049"><b>GlnRs aptamer</b></a></td>
      <td name="td2">GlnRS<br>Gln</td>
      <td name="td3">X-ray</td>
      <td name="td4">1EXD</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.7</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10881199/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NF-kappaB-aptamer" target="_blank" style="color:#520049"><b>NF-kappaB aptamer</b></a></td>
      <td name="td2">NF-kappaB</td>
      <td name="td3">X-ray<br>NMR</td>
      <td name="td4">1OOA<br>2JWV</td>
      <td name="td5">molecular replacement(MR) and single isomorphous replacement (SIR) methods,<br>NA</td>
      <td name="td6">2.45<br>NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12886018/" target="_blank" style="color:#520049"><b>2003</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/18160411/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/eIF4A-aptamer" target="_blank" style="color:#520049"><b>(eIF4A)-aptamer</b></a></td>
      <td name="td2">initiation factor 4A (eIF4A)</td>
      <td name="td3">NMR</td>
      <td name="td4">1XWP<br>1XWU</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/15687383/" target="_blank" style="color:#520049"><b>2005</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FC-RNA-aptamer" target="_blank" style="color:#520049"><b>FC RNA aptamer</b></a></td>
      <td name="td2">RNA polymerase (Pol) II</td>
      <td name="td3">X-ray</td>
      <td name="td4">2B63</td>
      <td name="td5">Br (SAD)</td>
      <td name="td6">3.8</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/16341226/" target="_blank" style="color:#520049"><b>2005</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Thrombin-aptamer" target="_blank" style="color:#520049"><b>Thrombin aptamer</b></a></td>
      <td name="td2">human thrombin</td>
      <td name="td3">X-ray</td>
      <td name="td4">3DD2</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/18971322/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/IgG-aptamer" target="_blank" style="color:#520049"><b>IgG aptamer</b></a></td>
      <td name="td2">human IgG</td>
      <td name="td3">X-ray</td>
      <td name="td4">3AGV</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.15</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/20675355/" target="_blank" style="color:#520049"><b>2010</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GRK2-aptamer" target="_blank" style="color:#520049"><b>GRK2 aptamer</b></a></td>
      <td name="td2">G protein-coupled receptor kinase 2 (GRK2)</td>
      <td name="td3">X-ray</td>
      <td name="td4">3UZT<br>3UZS</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.51</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/22727813/" target="_blank" style="color:#520049"><b>2012</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>lysozyme aptamer</b></a></td>
      <td name="td2">lysozyme</td>
      <td name="td3">X-ray</td>
      <td name="td4">4M6D<br>4M4O</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.68<br>2.0</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NOX-E36-L-aptamer" target="_blank" style="color:#520049"><b>NOX-E36 L-aptamer</b></a></td>
      <td name="td2">L-CLL2</td>
      <td name="td3">X-ray</td>
      <td name="td4">4R8I</td>
      <td name="td5">Se (SAD)</td>
      <td name="td6">2.05</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/25901662/" target="_blank" style="color:#520049"><b>2015</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Thrombin-aptamer" target="_blank" style="color:#520049"><b>Thrombin aptamer</b></a></td>
      <td name="td2">Thrombin</td>
      <td name="td3">X-ray</td>
      <td name="td4">5DO4</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.86</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/27566147/" target="_blank" style="color:#520049"><b>2016</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Factor-Xa-aptamer" target="_blank" style="color:#520049"><b>Factor Xa-aptamer</b></a></td>
      <td name="td2">factor Xa (FXa)<br>factor Xa and Rivaroxaban</td>
      <td name="td3">X-ray</td>
      <td name="td4">5VOE<br>5VOF</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.0<br>2.25</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29863725/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-RNA-aptamer" target="_blank" style="color:#520049"><b>Spinach RNA aptamer</b></a></td>
      <td name="td2">Fab BL3-6S97N</td>
      <td name="td3">X-ray</td>
      <td name="td4">6B14<br>6B3K</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">1.64<br>2.09</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/29309709/" target="_blank" style="color:#520049"><b>2018</b></a></td>
    </tr>
     <tr>
      <td name="td0">Mammalian</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/A9g-RNA-aptamer" target="_blank" style="color:#520049"><b>A9g RNA aptamer</b></a></td>
      <td name="td2">human glutamate carboxypeptidase II (GCPII)</td>
      <td name="td3">X-ray</td>
      <td name="td4">6RTI</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.2</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/32525981/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
     <tr>
      <td name="td0">Others</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/bacteriophage-MS2-coat-protein-aptamer" target="_blank" style="color:#520049"><b>Bacteriophage MS2 coat protein-aptamer</b></a></td>
      <td name="td2">bacteriophage MS2 coat protein</td>
      <td name="td3">X-ray</td>
      <td name="td4">6MSF<br>5MSF,7MSF<br>1U1Y</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">2.8<br>2.8<br>2.85</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/9461079/" target="_blank" style="color:#520049"><b>1998</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/9808042/" target="_blank" style="color:#520049"><b>1998</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/15496523/" target="_blank" style="color:#520049"><b>2004</b></a></td>
    </tr>
     <tr>
      <td name="td0">Others</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Bovine-prion-protein(bPrP)-aptamer" target="_blank" style="color:#520049"><b>Bovine prion protein(bPrP) aptamer</b></a></td>
      <td name="td2">prion</td>
      <td name="td3">NMR</td>
      <td name="td4">2RQJ<br>2RSK<br>2RU7<br>6K84</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/19666719/" target="_blank" style="color:#520049"><b>2009</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/23180780/" target="_blank" style="color:#520049"><b>2013</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/24803670/" target="_blank" style="color:#520049"><b>2014</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/32188933/" target="_blank" style="color:#520049"><b>2020</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-REV-peptide-aptamer" target="_blank" style="color:#520049"><b>HIV-1 REV peptide-aptamer</b></a></td>
      <td name="td2">REV peptide</td>
      <td name="td3">NMR</td>
      <td name="td4">1ULL<br>484D</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/10467126/" target="_blank" style="color:#520049"><b>1999</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/REX16-aptamer" target="_blank" style="color:#520049"><b>REX16 aptamer</b></a></td>
      <td name="td2">HTLV-1 arginine-rich Rex peptide</td>
      <td name="td3">NMR</td>
      <td name="td4">1EXY</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/10647177/" target="_blank" style="color:#520049"><b>2000</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tat-aptamer" target="_blank" style="color:#520049"><b>Tat aptamer</b></a></td>
      <td name="td2">HIV Tat protein</td>
      <td name="td3">NMR</td>
      <td name="td4">1NBK</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/12737819/" target="_blank" style="color:#520049"><b>2003</b></a></td>
    </tr>
     <tr>
      <td name="td0">Fluorophores</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-aptamer" target="_blank" style="color:#520049"><b>Spinach aptamer</b></a></td>
      <td name="td2">trifluoroethyl, Fab<br>1TU, Fab<br>bromo-ligand analog, Fab<br>Fab</td>
      <td name="td3">X-ray</td>
      <td name="td4">4Q9R<br>4KZD<br>4Q9Q<br>4KZE</td>
      <td name="td5">molecular replacement(MR)</td>
      <td name="td6">3.12<br>2.19<br>2.45<br>2.4</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
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
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/AML1(RUNX1)-aptamer" target="_blank" style="color:#520049"><b>AML1 (RUNX1)-aptamer</b></a></td>
      <td name="td2">AML1 Runt domain</td>
      <td name="td3">NMR</td>
      <td name="td4">2RRC</td>
      <td name="td5">NA</td>
      <td name="td6">NA</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/27514505/" target="_blank" style="color:#520049"><b>2011</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/LR06-aptamer" target="_blank" style="color:#520049"><b>LR06(GA) aptamer</b></a></td>
      <td name="td2">TAR RNA</td>
      <td name="td3">NMR<br>NMR<br>X-ray</td>
      <td name="td4">2OOM,2PN9<br>2RN1<br>2JLT</td>
      <td name="td5">NA<br>NA<br>Br(SAD)</td>
      <td name="td6">NA<br>NA<br>2.9</td>
      <td name="td7"><a href="https://pubmed.ncbi.nlm.nih.gov/17768146/" target="_blank" style="color:#520049"><b>2007</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/18607001/" target="_blank" style="color:#520049"><b>2008</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/18996893/" target="_blank" style="color:#520049"><b>2008</b></a></td>
    </tr>
     <tr>
      <td name="td0">Viral</td>
      <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RBA-14-aptamer" target="_blank" style="color:#520049"><b>RBA-14 aptamer</b></a></td>
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
</html>
<br>