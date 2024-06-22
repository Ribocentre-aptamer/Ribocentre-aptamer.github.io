---
title: "Riboaptamer - RNA-Aptamers"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /sequences/
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
<h1 class="post-title" itemprop="name headline">Sequences</h1>
Shows the sequence of RNA aptamers. We keep the U in the partial sequence because it is consistent with the sequence information in the fasta file. ( We provide the script could change T into U on the page). <a href="https://www.ribocentre.org/downloads/sequence-T2U.ipynb" target="_blank" download="sequence-T2U.ipynb"><button class="btn btn-secondary"><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download Script</button></a><br><br>

<div class="sectiontitle" style="border: 1px solid #C9C9C9; background-color: #fff;">
<!--p class="header_box" >Search by sequence<span class="updating-text"> (Continuously updated)</span></p-->
<head>
    <title>Sequence search</title>
  </head>
  <body>
    <rnacentral-sequence-search
            databases='["ribocentre"]'
            examples='[
              {"description": "GlnRs aptamer", "urs": "", "sequence": "UGGGGUAUCGCCAAGCGGUAAGGCACCGGAUUCUGAUUCCGGAGGUCGAGGUUCGAAUCCUCGUACCCCAGCCA"}
            ]'
            rfam="true"
    />
  <script type="text/javascript" src="https://www.ribocentre.org/js/RNAcentral-sequence-search.js"></script></body>
</div>
<br>
<br>
<br>


<p class="header_box" >Detailed information</p>    
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()">
</div>
<br>
<div id="sheet1" class="sheet">
    <table id="cfttable" class="table-style1">
      <thead>   
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Target</th>
        <th onclick="sortTable(2)">Sequence</th>
        <th onclick="sortTable(3)">Length</th>
        <th onclick="sortTable(4)">GC Content</th>
        <th onclick="sortTable(5)">Affinity</th>
        <th onclick="sortTable(6)">Year</th>
      </tr>
      </thead>
    <tbody>
      <tr>
  <td name="td0">CB-42 aptamer</td>
  <td name="td1">Cibacron Blue 3GA</td>
  <td name="td2">5'GGGAGAAUUCCCGCGGCAGAAGC
CCACCUGGCUUUGAACUCUAUGUUA
UUGGGUGGGGGAAACUUAAGAAAAC
UACCACCCUUCAACAUUACCGCCCU
UCAGCCUGCCAGCGCCCUGCAGCCC
GGGAAGCUU3'</td>
  <td name="td3">132</td>
  <td name="td4">56.06%</td>
  <td name="td5">Kd~600µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B4-25 aptamer</td>
  <td name="td1">Reactive Blue 4</td>
  <td name="td2">5'GGGAGAAUUCCCGCGGCGUUGGC
CCAGGAUAAUAGGACGAAAUCCGAA
AAAUCCGUACCCAACAUAGAACCCC
CCCAGCGCUCACACGGACGCCCCAU
UACGGCUAACCGAACGCCUGCAGCC
CGGGAAGCUU3'</td>
  <td name="td3">133</td>
  <td name="td4">59.40%</td>
  <td name="td5">Kd<100µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b></a></td>
</tr>
    
 <tr>
  <td name="td0">wild type aptamer</td>
  <td name="td1">T4 DNA polymerase (gp43)</td>
  <td name="td2">5'GAAUUGUGGUGUUGGCUCCCUAU
AGUGAGUCGUAUUAAUAUUCCUUAG
UUUUAUAGCCCAAUAACUCAGGCUC
UUGAUUGGUUUUCAAUAGAGAUAUA
AAAUUCUUUUCAUAG3'</td>
  <td name="td3">113</td>
  <td name="td4">33.63%</td>
  <td name="td5">Kd: 4.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/2200121/" target="_blank" style="color:#520049"><b>1990</b></a></td>
</tr>
    
 <tr>
  <td name="td0">major variant aptamer</td>
  <td name="td1">T4 DNA polymerase (gp43)</td>
  <td name="td2">5'GAAUUGUGGUGUUGGCUCCCUAU
AGUGAGUCGUAUUAAUAUUCCUUAG
UUUUAUAGCCCAGCAACCUAGGCUC
UUGAUUGGUUUUCAAUAGAGAUAUA
AAAUUCUUUUCAUAG3'</td>
  <td name="td3">113</td>
  <td name="td4">35.40%</td>
  <td name="td5">Kd: 4.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/2200121/" target="_blank" style="color:#520049"><b>1990</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ligand 1.1 aptamer</td>
  <td name="td1">Human imunnodeficiency virus type 1 reverse transcriptase (HIV-1-RT)</td>
  <td name="td2">5'GGGAGCAUCAGACUUUUAAUCUG
ACAAUCAAGAAUUCCGUUUUCAGUC
GGGAAAAACUGAACAAUCUAUGAAA
GAAUUUUAUAUCUCUAUUGAAAC3'</td>
  <td name="td3">96</td>
  <td name="td4">33.33%</td>
  <td name="td5">Kd: 5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/1379730/" target="_blank" style="color:#520049"><b>1992</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ligand 1.3a aptamer</td>
  <td name="td1">Human imunnodeficiency virus type 1 reverse transcriptase (HIV-1-RT)</td>
  <td name="td2">5'GGGAGCAUCAGACUUUUAAUCUG
ACAAUCAAGAAUAUCUUCCGAAGCC
GAACGGGAAAACCGGCAUCUAUGAA
AGAAUUUUAUCUCUAUUGAAAC3'</td>
  <td name="td3">95</td>
  <td name="td4">38.95%</td>
  <td name="td5">Kd: 5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/1379730/" target="_blank" style="color:#520049"><b>1992</b></a></td>
</tr>
    
 <tr>
  <td name="td0">5A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
AUCUCCUCCCGUCGAAGCUAACCUG
GCCACUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">58.44%</td>
  <td name="td5">Kd: 23 ± 3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">7A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
UCGGCGAGCUAACCAAGACACUCGC
UGCACUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">58.44%</td>
  <td name="td5">Kd: 5.0 ± 0.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">13A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
ACCCGCGGCCUCCGAAGCUAACCAG
GACACUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">61.04%</td>
  <td name="td5">Kd: 3.2 ± 0.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">14A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
UGGGUGCUAACCAGGACACACCCAC
GCUGUUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">58.44%</td>
  <td name="td5">Kd: 3.0 ± 0.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">21A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
UGGGUGCUUAACCAGGCCACACCCU
GCUGUUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">58.44%</td>
  <td name="td5">Kd: 8.1 ± 0.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">12A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGAUGCCUGUCGAGCAUGCU
GGGGGCAACGCUACAGACAAGUGCA
CCCAACGUAGCUAAACAGCUUUGUC
GACGGG3'</td>
  <td name="td3">79</td>
  <td name="td4">58.23%</td>
  <td name="td5">Kd: exhibits biphasic binding, 0.51 ± 0.13 nM, 60 ± 52 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">26At aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGUGAAGGCAACGUAUAGGCAAG
CACACUUCACC3'</td>
  <td name="td3">34</td>
  <td name="td4">52.94%</td>
  <td name="td5">Kd: ~0.19 ± 0.02 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">26A aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGAUGCCUGUCGAGCAUGCU
GCGUCAGAAGGCAACGUAUAGGCAA
GCACACGUAGCUAAACAGCUUUGUC
GACGGG3'</td>
  <td name="td3">79</td>
  <td name="td4">55.70%</td>
  <td name="td5">Kd: exhibits biphasic binding, 0.19 ± 0.02 nM, 49 ± 26 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">22B aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGAUGCCUGUCGAGCAUGCU
GAGGGUAACGUACUGGCAAGCUCAC
CUCAGCGUAGCUAAACAGCUUUGUC
GACGGG3'</td>
  <td name="td3">79</td>
  <td name="td4">56.96%</td>
  <td name="td5">Kd: exhibits biphasic binding, 0.13 ± 0.03 nM, 510 ± 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">28B aptamer</td>
  <td name="td1">Basic fibroblast growth factor (bFGF)</td>
  <td name="td2">5'GGGAGAUGCCUGUCGAGCAUGCU
GAGGGUAACGUAUAGUCAAGACACC
UCAAGUGUAGCUAAACAGCUUUGUC
GACGGG3'</td>
  <td name="td3">79</td>
  <td name="td4">51.90%</td>
  <td name="td5">Kd: exhibits biphasic binding, 0.32 ± 0.07 nM, 140 ± 80 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">9 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGGCGCAGCCUCAAUGA
GGCUGGUGGUGCAAG3'</td>
  <td name="td3">38</td>
  <td name="td4">63.16%</td>
  <td name="td5">Kd: 1.9 ± 0.21*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">18 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGGCGCAGCCUCAAUGA
GGCUGGAGGUACAAG3'</td>
  <td name="td3">38</td>
  <td name="td4">60.53%</td>
  <td name="td5">Kd: 2.0*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">19 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGGCACAGCCUCAAUGA
GGCUGGUGGUACAAG3'</td>
  <td name="td3">38</td>
  <td name="td4">57.89%</td>
  <td name="td5">Kd: 1.2 ± 0.08*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">6 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGACACAGCCUCAAUGA
GGCUGCAGAUACAAG3'</td>
  <td name="td3">38</td>
  <td name="td4">52.63%</td>
  <td name="td5">Kd: 3.1 ± 0.26*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">116 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGACACAGCUGCUGCAG
AUACAAG3'</td>
  <td name="td3">30</td>
  <td name="td4">53.33%</td>
  <td name="td5">Kd: 2.1*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">126 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGACACAGCCUCAAUGA
GGCUGCAGAAACAAG3'</td>
  <td name="td3">38</td>
  <td name="td4">52.63%</td>
  <td name="td5">Kd: 2.7 ± 0.29*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">15 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'GCUCUUGGCCGCAGCCUCAAUGA
GGCUGAUGAUACAAG3'</td>
  <td name="td3">38</td>
  <td name="td4">55.26%</td>
  <td name="td5">Kd: 1.7*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">1 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUACUCCGUACGCAAGUA
CGGUCGAGAAACAG3'</td>
  <td name="td3">37</td>
  <td name="td4">48.65%</td>
  <td name="td5">Kd: 4.3*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">2 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUUUAGGACUCGUACGCA
AGUACUGAGAUACUACAG3'</td>
  <td name="td3">41</td>
  <td name="td4">41.46%</td>
  <td name="td5">Kd: 2.4*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">13 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUCCUGGCUCGUACGCAA
GUACUAGAGACACAG3'</td>
  <td name="td3">38</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 3.6*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">14 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACUCGUACGCAAGUAC
UGGAGAAACAG3'</td>
  <td name="td3">34</td>
  <td name="td4">47.06%</td>
  <td name="td5">Kd: 5.4 ± 0.05*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">23 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGGACUCGUACGCAAGU
ACUUGAGAUACACG3'</td>
  <td name="td3">37</td>
  <td name="td4">45.95%</td>
  <td name="td5">Kd: 3.1*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">50 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGUCUCGUACGCAAGUAC
UGAGAAACGACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">47.22%</td>
  <td name="td5">Kd: 0.4*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">63 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACUCCGUAUGCAAGUA
CGUUGAGCAACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">47.22%</td>
  <td name="td5">Kd: 7.7, 9.5, 9.6*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">74 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUAGACUCGUACGCAAGU
ACUCGAGAUAUACAG3'</td>
  <td name="td3">38</td>
  <td name="td4">42.11%</td>
  <td name="td5">Kd: 4.2*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">75 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUUGGACUCCGUACGCAA
GUACGUCGAGAUACAG3'</td>
  <td name="td3">39</td>
  <td name="td4">48.72%</td>
  <td name="td5">Kd: 1.9*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">83 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGGACUCGUACGCAAGU
ACUGAGAAACACCG3'</td>
  <td name="td3">37</td>
  <td name="td4">48.65%</td>
  <td name="td5">Kd: 3.6*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">88 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGACUCUUUGUACGCAA
GUACAGAGUGAUACAG3'</td>
  <td name="td3">39</td>
  <td name="td4">41.03%</td>
  <td name="td5">Kd: 1.4*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">15 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACGCGUACGCAAGUAC
UGUGAUACAG3'</td>
  <td name="td3">33</td>
  <td name="td4">48.48%</td>
  <td name="td5">Kd: 4.1*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">17 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACGCGCUGGUACGCAA
GUACGGCUGUGAUACAG3'</td>
  <td name="td3">40</td>
  <td name="td4">55.00%</td>
  <td name="td5">Kd: 3.9*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">4 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUAGGUUGAGGUACGCAG
ACGGCUCUCUACAG3'</td>
  <td name="td3">37</td>
  <td name="td4">51.35%</td>
  <td name="td5">Kd: 1.9*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">20 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUACUCUCGUACGCAAGU
ACGAUCGAGACACAG3'</td>
  <td name="td3">38</td>
  <td name="td4">47.37%</td>
  <td name="td5">Kd: 2.6*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">51 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGAGCUCGUACGCAAGU
ACUCGAGGUACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 1.0*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">53 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUUUGGAGGUACGCAAGU
ACGCGCUCACAG3'</td>
  <td name="td3">35</td>
  <td name="td4">51.43%</td>
  <td name="td5">Kd: 2.0*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">58 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUACUCCUGUACGCAAGU
ACGGUUGAGACACAG3'</td>
  <td name="td3">38</td>
  <td name="td4">47.37%</td>
  <td name="td5">Kd: 3.2*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">72 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUAUGAGAGUAGCAAGUA
CCGGACUCUACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">44.44%</td>
  <td name="td5">Kd: 0.3*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">73 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGCUCGUGUACGCAAGU
ACGCUUGAGGAACAG3'</td>
  <td name="td3">38</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 1.4*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">86 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGUAGAGGUACGCAAGU
ACGCGCUCCACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">52.78%</td>
  <td name="td5">Kd: 6.4, 6.5, 7.4, 9.7*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">87 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUUUUUGAGGUACGCAAG
UACGCGGCUCGACAG3'</td>
  <td name="td3">38</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 2.3*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">92 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGUGUAGAGGUACGCAAGU
AAGCGGCUCCACAG3'</td>
  <td name="td3">37</td>
  <td name="td4">51.35%</td>
  <td name="td5">Kd: 7.4*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">22 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGUACGUUGUACGCAAGU
ACACGGGUUACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">47.22%</td>
  <td name="td5">Kd: 0.7*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">59 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGCUUCGUACGCAAGUAU
GAUGAUACAG3'</td>
  <td name="td3">33</td>
  <td name="td4">42.42%</td>
  <td name="td5">Kd: 0.2*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">61 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACAUCGUACGCAAGUA
CCUUGAAACAG3'</td>
  <td name="td3">34</td>
  <td name="td4">44.12%</td>
  <td name="td5">Kd: 4.6*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">76 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACUUCGGUACGCAAUU
ACCGACUGACACAG3'</td>
  <td name="td3">37</td>
  <td name="td4">48.65%</td>
  <td name="td5">Kd: 2.4*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">79 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCUGGACAUUUGUACGCAAGU
ACGUUUGAUACAG3'</td>
  <td name="td3">36</td>
  <td name="td4">38.89%</td>
  <td name="td5">Kd: 3.9*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">18 aptamer</td>
  <td name="td1">Rev protein of HIV-1 (minimal Rev-binding element (RBE) found within the Rev Responsive Element (RRE))</td>
  <td name="td2">5'AUUCGGUAGCAUCUUGUACGCAA
GUACGAGAGAGCAACAG3'</td>
  <td name="td3">40</td>
  <td name="td4">47.50%</td>
  <td name="td5">Kd: 0.5*</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
</tr>
    
 <tr>
  <td name="td0">16 aptamer</td>
  <td name="td1">α-Thrombin, Human</td>
  <td name="td2">5'GGGAGAUGCCUGUCGAGCAUGCU
GCAUCCGGAUCGAAGUUAGUAGGCG
GAGUGGUAGCUAAACAGCUUUGUCG
ACGGG3'</td>
  <td name="td3">78</td>
  <td name="td4">56.41%</td>
  <td name="td5">Kd: 37 ± 3.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">27 aptamer</td>
  <td name="td1">α-Thrombin, Human</td>
  <td name="td2">5'GGGAGAUGCCUGUCGAGCAUGCU
GGUGCGGCUUUGGGCGCCGUGCUUG
ACGUAGCUAAACAGCUUUGUCGACG
GG3'</td>
  <td name="td3">75</td>
  <td name="td4">61.33%</td>
  <td name="td5">Kd: 114 ± 2.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">16.24 aptamer</td>
  <td name="td1">α-Thrombin, Human</td>
  <td name="td2">5'UCCGGAUCGAAGUUAGUAGGCGG
A3'</td>
  <td name="td3">24</td>
  <td name="td4">54.17%</td>
  <td name="td5">Kd: 9.3 ± 1.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">27.33 aptamer</td>
  <td name="td1">α-Thrombin, Human</td>
  <td name="td2">5'GAGCAUGCUGGUGCGGCUUUGGG
CGCCGUGCUU3'</td>
  <td name="td3">33</td>
  <td name="td4">66.67%</td>
  <td name="td5">Kd: 155 ± 9.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">DOPE. 40 aptamer</td>
  <td name="td1">Cyanocobalamin (vitamin B12)</td>
  <td name="td2">5'GUCGGCCUAUCCGACAGGCACCG
CGAGAGGACCAUUAUAGUGCGCAUA
ACCACUUCAGUGCGAGCAAAAAUUU
GG3'</td>
  <td name="td3">75</td>
  <td name="td4">53.33%</td>
  <td name="td5">Kd: 88 ± 19 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">DOPE. 40 aptamer</td>
  <td name="td1">Cobinamide dicyanide</td>
  <td name="td2">5'GUCGGCCUAUCCGACAGGCACCG
CGAGAGGACCAUUAUAGUGCGCAUA
ACCACUUCAGUGCGAGCAAAAAUUU
GG3'</td>
  <td name="td3">75</td>
  <td name="td4">53.33%</td>
  <td name="td5">Kd: 20 ± 9 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B12.9 aptamer</td>
  <td name="td1">Cobinamide dicyanide</td>
  <td name="td2">5'AACACUAUCCGACUGGCACCGCC
AGCGGACAAAUCCGGUGCGCAUAAC
CACCUCAGUGCGAGCAACGAUGGCC
UUUCUACCCAAAGAUUUUCCUUGGU
CAUUAGGAUCC3'</td>
  <td name="td3">109</td>
  <td name="td4">53.21%</td>
  <td name="td5">Kd: 8.8 ± 0.5 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B12.9 aptamer</td>
  <td name="td1">Cyanocobalamin (vitamin B12)</td>
  <td name="td2">5'AACACUAUCCGACUGGCACCGCC
AGCGGACAAAUCCGGUGCGCAUAAC
CACCUCAGUGCGAGCAACGAUGGCC
UUUCUACCCAAAGAUUUUCCUUGGU
CAUUAGGAUCC3'</td>
  <td name="td3">109</td>
  <td name="td4">53.21%</td>
  <td name="td5">Kd: 320 ± 90 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">35-mer aptamer aptamer</td>
  <td name="td1">Cyanocobalamin (vitamin B12)</td>
  <td name="td2">5'GGAACCGGUGCGCAUAACCACCU
CAGUGCGAGCAA3'</td>
  <td name="td3">35</td>
  <td name="td4">60.00%</td>
  <td name="td5">Kd: 88 ± 19 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">35-mer aptamer aptamer</td>
  <td name="td1">Cobinamide dicyanide</td>
  <td name="td2">5'GGAACCGGUGCGCAUAACCACCU
CAGUGCGAGCAA3'</td>
  <td name="td3">35</td>
  <td name="td4">60.00%</td>
  <td name="td5">Kd: 19.7 ± 8.7 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">mTCT8-4 aptamer</td>
  <td name="td1">Bronchodilator theophylline</td>
  <td name="td2">5'AGUGAUACCAGCAUCGUCUUGAU
GCCCUUGGCAGCACU3'</td>
  <td name="td3">38</td>
  <td name="td4">52.63%</td>
  <td name="td5">Kd: 0.1 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7510417/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TCT8-4 aptamer</td>
  <td name="td1">Bronchodilator theophylline</td>
  <td name="td2">5'AAGUGAUACCAGCAUCGUCUUGA
UGCCCUUGGCAGCACUUCA3'</td>
  <td name="td3">42</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 0.6 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7510417/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">44.Cit11 aptamer</td>
  <td name="td1">L-citrulline [L-(+)-2-amino-5-ureidovaleric acid]</td>
  <td name="td2">5'GACGAGAAGGAGUGCUGGUUAUA
CUAGCGGUUAGGUCACUCGUC3'
 
  </td>
  <td name="td3">44</td>
  <td name="td4">52.27%</td>
  <td name="td5">Kd: 62-68 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10786843/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">44.Arg11 aptamer</td>
  <td name="td1">L-arginine</td>
  <td name="td2">5'GACGAGAAGGAGCGCUGGUUCUA
CUAGCAGGUAGGUCACUCGUC3'</td>
  <td name="td3">44</td>
  <td name="td4">56.82%</td>
  <td name="td5">Kd: 56-76 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10786843/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Clone 6 aptamer</td>
  <td name="td1">Protein kinase C beta II (protein kinase C βII)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAGGCUU
ACAGAGUGUGCGUAAUGGCGUUCCC
AAAUUCGGGCUGGGAACCGUUCGUU
CGUGUUAUGCCCGUAGAUAUGGCAA
GUCGCGGAUGCUCAGUACUACACUC
UUGUGGUCAGUCACAUAUGUGCGUC
UACAUGGAUCCUCA3'</td>
  <td name="td3">162</td>
  <td name="td4">51.85%</td>
  <td name="td5">Kd: 7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7528207/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Clone 10 aptamer</td>
  <td name="td1">Protein kinase C beta II (protein kinase C βII)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAGGUUG
UUAAGUGCGAGUUGUUUUACUCCGA
UGAUACGGGGAGCGUUAGAGUCUUA
UGACCUUGUUCUCCACGUCACUGUC
CAAGUCACUCCGCGUCAUAGCAGUC
GGAUCCUGUACAUAUGUGCGUCUAC
AUGGAUCCUCA3'</td>
  <td name="td3">159</td>
  <td name="td4">49.69%</td>
  <td name="td5">Kd: 7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7528207/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">100 aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
CCGGUAGUCGCAUGGCCCAUCGCGC
CCGGUUCGACAUGAGGCCCGGAUCC
GGC3'</td>
  <td name="td3">76</td>
  <td name="td4">64.47%</td>
  <td name="td5">Kd1: 0.20 ± 0.02 nM
Kd2: 42 ± 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">100t aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGCCGGUAGUCGCAUGGCCCAUC
GCGCCCGG3'</td>
  <td name="td3">31</td>
  <td name="td4">77.42%</td>
  <td name="td5">Kd1: 0.42 ± 0.04 nM
Kd2: 182 ±94 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">44t aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGAAGCUUGAUGGGUGACACACG
UCAUGCCGAGCU3'</td>
  <td name="td3">35</td>
  <td name="td4">57.14%</td>
  <td name="td5">Kd1: 0.48 ± 0.04 nM
Kd2: 82 ± 23 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">12t aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGAAGGGAACCUGCGUCUCGGCA
CCUUCG3'</td>
  <td name="td3">29</td>
  <td name="td4">65.52%</td>
  <td name="td5">Kd1: 1.1 ±0.2 nM
Kd2: 180 ± 160 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">40t aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGUCAACGGUUGAGUCUGUCCCG
UUCGAC3'</td>
  <td name="td3">29</td>
  <td name="td4">58.62%</td>
  <td name="td5">Kd1: 20 ± 1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">84t aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGCUCAAUAGUUGGAGGCCUGUC
CUCGCCGUAGAGC3'</td>
  <td name="td3">36</td>
  <td name="td4">61.11%</td>
  <td name="td5">Kd1:1.8 ±0.4 nM
Kd2: 31 ± 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">126t aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGAACGGUUCUGUGUGUGGACUA
GCCGCGGCCGUU3'</td>
  <td name="td3">35</td>
  <td name="td4">62.86%</td>
  <td name="td5">Kd1: 1.4 ±0.2 nM
Kd2: 181 ± 57 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">44 aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
AGCUUGAUGGGUGACACACGUCAUG
CCGAGCUUUUCGACAUGAGGCCCGG
AUCCGGC3'</td>
  <td name="td3">80</td>
  <td name="td4">56.25%</td>
  <td name="td5">Kd1: 1.7 ±0.5 nM
Kd2: 38 ±32 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">12 aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
GCAGACGAAGGGAACCUGCGUCUCG
GCACCUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">61.04%</td>
  <td name="td5">Kd1: 0.48 ± 0.07 nM
Kd2: 21 ±5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">40 aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
GCUUGAUGGGUGACACACGUCAUGC
CGAGCUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">58.44%</td>
  <td name="td5">Kd1: 0.19 ±0.09 nM
Kd2: 10 ± 1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">84 aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
GCUCAAUAGUUGGAGGCCUGUCCUC
GCCGUAGAGCGUUCGACAUGAGGCC
CGGAUCCGGC3'</td>
  <td name="td3">83</td>
  <td name="td4">59.04%</td>
  <td name="td5">Kd1: 0.82 ±0.2 nM
Kd2: 21 ± 5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">126 aptamer</td>
  <td name="td1">Vascular Endothelial Growth Factor (VEGF)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
AACGGUUCUGUGUGUGGACUAGCCG
CGGCCGUUUUCGACAUGAGGCCCGG
AUCCGGC3'</td>
  <td name="td3">80</td>
  <td name="td4">58.75%</td>
  <td name="td5">Kd1: 0.14 ±0.04 nM
Kd2: 11 ± 3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
</tr>
    
 <tr>
  <td name="td0">YT1 aptamer</td>
  <td name="td1">Tax protein of the human T-cell lymphomatic virus (HTLV-1)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
GGACUUAUUCUCGAGCCUGCAUGUG
CUAGUCGACGUUGUUUCUGCAUCUU
GAAAGAUGGGGCUGUGGGUGUGGUU
ACUUCUACGCGGUAUGCACUGUACG
CCCCAUAUGUGCGUCUACAUGGAUC
CUCA3'</td>
  <td name="td3">152</td>
  <td name="td4">51.32%</td>
  <td name="td5">Kd: 70 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7489503/" target="_blank" style="color:#520049"><b>1995</b></a></td>
</tr>
    
 <tr>
  <td name="td0">W13 (clone 8) aptamer</td>
  <td name="td1">Tobramycin</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
CGUUUGGGGUCCCACAACACAGGUC
UUUGCUGGUCAUAUAUGCGUGUCCU
CUAGGAAGUGCAUAUGUGCGUCUAC
AUGGAUCCUCA3'</td>
  <td name="td3">109</td>
  <td name="td4">50.46%</td>
  <td name="td5">Kd: 4.3 ± 0.7 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>1995</b></a></td>
</tr>
    
 <tr>
  <td name="td0">X1 aptamer</td>
  <td name="td1">Tobramycin</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
CUGGUUAGUUUUGCACAGUGGUCGA
UGCUAGACUUGGUUUAGGUAAUGAG
UCCAAUAGUCCAUAUGUGCGUCUAC
AUGGAUCCUCA3'</td>
  <td name="td3">109</td>
  <td name="td4">45.87%</td>
  <td name="td5">Kd: 3 ± 1 nM (high affinity component); 15.9 ± 0.7 µM (low affinity component)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>1995</b></a></td>
</tr>
    
 <tr>
  <td name="td0">J6 aptamer</td>
  <td name="td1">Tobramycin</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
AGUAUAGCGAGGUUUAGCUACACUC
GUGCUGAUCGUUUGGUACGGGACCU
GCGUGUAGCCCAUAUGUGCGUCUAC
AUGGAUCCUCA3'</td>
  <td name="td3">109</td>
  <td name="td4">51.38%</td>
  <td name="td5">Kd: 2 ± 1 nM (high affinity component); 6.0 ± 0.4 µM (low affinity component)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>1995</b></a></td>
</tr>
    
 <tr>
  <td name="td0">24A aptamer</td>
  <td name="td1">Vascular pemeability factor/vascular endothelial growth factor (VPF/VEGF)</td>
  <td name="td2">5'GGGAGACAAGAAUAACGCUCAAA
CCCUGAUGGUAGACGCCGGGGUGCC
GGAAUUCGACAGGAGGCUCACAACA
GGC3'</td>
  <td name="td3">76</td>
  <td name="td4">57.89%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9383475/" target="_blank" style="color:#520049"><b>1995</b></a></td>
</tr>
    
 <tr>
  <td name="td0">P5 aptamer</td>
  <td name="td1">Human immunodeficiency virus (HIV-1) integrase</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
CCAGUCUUGUGGCUUUGAAAGAGAG
GAGUGUUCGACAUGAGGCCCGGAUC
CGGC3'</td>
  <td name="td3">77</td>
  <td name="td4">54.55%</td>
  <td name="td5">Kd: 12 nM or 2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/7778267/" target="_blank" style="color:#520049"><b>1995</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SLB10-1 aptamer</td>
  <td name="td1">Aminoglycoside lividomycin</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCAACGAGUGCAGUGGGAAACAGG
UCUUUGGCUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">48.75%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9238640/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SLB10-34 aptamer</td>
  <td name="td1">Aminoglycoside lividomycin</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCCCGUCAAGUCCGGUAAGGUGCC
UGACGUCUUCACUGCAGACUUGACG
AAGCUU3'</td>
  <td name="td3">79</td>
  <td name="td4">51.90%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9238640/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ag.06 aptamer</td>
  <td name="td1">L-arginine</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCAUGA
UAAACCGAUGCUGGGCGAUUCUCCU
GAAGUAGGGGAAGAGUUGUCAUGUA
UGGGGGCACCACGGUCGGAUCCUG3
'</td>
  <td name="td3">97</td>
  <td name="td4">55.67%</td>
  <td name="td5">Kd: 330 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8604334/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C8 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
GCUAGGCAAUGUUUCGGUUGGAGUA
AUCCGGUGGCUUGCCAUGAUUUACG
UGAGUGCUGAUCCGUGAUGAGAUAG
UAAGUGCAAUCU3'</td>
  <td name="td3">110</td>
  <td name="td4">45.45%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C18 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
GCUAGGCAAUGUUUCGGUUGGAGUA
AUCCGGUGGCUUGCCAUGAUUUACG
UGAGUGCUGAUCCGUGAUGAGAUAG
UAAGUGCAAUCU3'</td>
  <td name="td3">110</td>
  <td name="td4">45.45%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C17 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
GUAUUCUCGGUGGUUUAAUCUGUGU
AGAGGAGCUGACUCCUUUGGUUGGA
CUACGUGGAGGUUCUCUUAGAUAGU
AAGUGCAAUCU3'</td>
  <td name="td3">109</td>
  <td name="td4">43.12%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C5 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
CAAGAAGUGGAAAUGCGCAGCGACC
AUGAAACCUCGCAUGGUUCAUCGAU
UGUUUGGAUAGUGUCUGUGUGAGAU
AGUAAGUGCAAUCU3'</td>
  <td name="td3">112</td>
  <td name="td4">43.75%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C1 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
GCAGUUAACCAAGCCUGCAUACUGG
AUAGACGGCUUAUCCGACUGAAUGC
CUCCCGAAAGGUGCAGUUAGAUAGU
AAGUGCAAUCU3'</td>
  <td name="td3">109</td>
  <td name="td4">45.87%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C9 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
GCGCAAACCCGAAGAAUGCCCAAAU
UGAUCCAGAGCAAGUGGGAAUGAUA
UAAAGUACCUGGUCCUGGAGAUAGU
AAGUGCAAUCU3'</td>
  <td name="td3">109</td>
  <td name="td4">44.04%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C15 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
UCCAAACCCCGUUGAGAGUUGAUCC
GGUCUAGGGAAUGGGAAAGAAGUAG
GUAUCGAAGAGAAUGUACCCUAGAU
AGUAAGUGCAAUCU3'</td>
  <td name="td3">112</td>
  <td name="td4">43.75%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C24 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
AGGACUCAAAUAUUCACGUUGACGU
UGUCUUGGAGUGCUGAUCGGAAAAC
CAAUAUGAUUAAUGGGUCCUGAGAU
AGUAAGUGCAAUCU3'</td>
  <td name="td3">112</td>
  <td name="td4">40.18%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C33 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
ACGCAGCGACUGUGGUGGUGAGCGG
UUGCGUAACUUGAUUUAAGCAAGUA
CUGCCAUGGCCGAACCUCUAAGAUA
GUAAGUGCAAUCU3'</td>
  <td name="td3">111</td>
  <td name="td4">46.85%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C34 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
UCUAGUCAAGUUGCAAUCUCCGGUG
GGGUGGUAACCGAGGAACACGUUUC
GGGUGUAUAGGCUAGCGAGAUAGUA
AGUGCAAUCU3'</td>
  <td name="td3">108</td>
  <td name="td4">47.22%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C37 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
UCUACCAGAGCGAGUGUGCUGAACG
UUCUAAGGACGGGAUUGAAUCGAGA
UGCGUAUACUAGGACCUUACGAGAU
AGUAAGUGCAAUCU3'</td>
  <td name="td3">112</td>
  <td name="td4">44.64%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C52 aptamer</td>
  <td name="td1">Human immunodeficiency virus type 1 Rev (HIV-1 Rev)</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
GCUUGGUACCGAGCUCGGAUCCACG
UAGUAACGGGCCGCCAGUGUCUGGA
AUUCGGGUCGUUCUUGAGAUAGUAA
GUGCAAUCU3'</td>
  <td name="td3">107</td>
  <td name="td4">50.47%</td>
  <td name="td5">Kd: 19-36 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">14.12 aptamer</td>
  <td name="td1">L-selectin receptor globulin (LS-Rg)</td>
  <td name="td2">5'UCGGGCGAGUCGUCUGUAACAAC
AAUCAAGGCGGGUUCACCGCCCCAG
UAUGAGUACCGCAUCGUCCUCCC3'</td>
  <td name="td3">71</td>
  <td name="td4">59.15%</td>
  <td name="td5">Kd: 0.2 nM-3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8650187/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">13.32 aptamer</td>
  <td name="td1">L-selectin receptor globulin (LS-Rg)</td>
  <td name="td2">5'UCGGGCGAGUCGUCUGCGCGUAU
GUGUGAAAGCGUGUGCACGGAGGCG
UCUACAAUCCGCAUCGUCCUCCC3'</td>
  <td name="td3">71</td>
  <td name="td4">61.97%</td>
  <td name="td5">Kd: 3 nM-4 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8650187/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D-R16c aptamer</td>
  <td name="td1">D-arginine</td>
  <td name="td2">5'CGGAUGGAAGGCGUGGUUAGAAU
CCAAUAGCCCAUCCG3'</td>
  <td name="td3">38</td>
  <td name="td4">55.26%</td>
  <td name="td5">Kd: 135 ± 25 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8523524/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">L-R16c aptamer</td>
  <td name="td1">L-arginine</td>
  <td name="td2">5'CGGAUGGAAGGCGUGGUUAGAAU
CCAAUAGCCCAUCCG3'</td>
  <td name="td3">38</td>
  <td name="td4">55.26%</td>
  <td name="td5">Kd:  129 ± 18 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/8523524/" target="_blank" style="color:#520049"><b>1996</b></a></td>
</tr>
    
 <tr>
  <td name="td0">V2 trans Hammerhead Ribozyme aptamer</td>
  <td name="td1">Adenosine triphosphate (ATP)</td>
  <td name="td2">5'GGGCGACCCCAGUGCAUUGCGAA
GAAACUGUGCGACUUCGGUCGCAGC
AAACGUCGGC3"
5'GCCGUAGGUU
GCCC3'</td>
  <td name="td3">72</td>
  <td name="td4">63.89%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9257650/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">V2 Hammerhead Ribozyme aptamer</td>
  <td name="td1">Adenosine triphosphate (ATP)</td>
  <td name="td2">5'UUUGUAGGCGACCUACCACUCUC
GUGGCCCAGUGCAUUGCUGCGACCG
AAGUCGCCAGUUUCUUCCCAAAUGU
CGUCGCCAUCUCUUCC3'</td>
  <td name="td3">89</td>
  <td name="td4">56.18%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9257650/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">10G-1 aptamer</td>
  <td name="td1">NS3 protease of hepatitis C virus (HCV)</td>
  <td name="td2">5'GGGAACUCGAUGAAGCGAAUUCU
GUUGGCGAACUGUACGCAAGUACAC
UGGAUGACAGGCCUAUCUAUCGGAU
CCACG3'</td>
  <td name="td3">78</td>
  <td name="td4">51.28%</td>
  <td name="td5">Kd: 650 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">dopa2 aptamer</td>
  <td name="td1">Dopamine</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCGCCGCG
GAAGACGUUGGAAGGAUAGAUACCU
ACAACGGGGAAUAUAGAGGCCAGCA
CAUAGUGAGGCCCUCCUCCCAGUCC
GUUCGGGAUCCUC3'</td>
  <td name="td3">111</td>
  <td name="td4">58.56%</td>
  <td name="td5">Kd: 2.8 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9245404/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt1 aptamer</td>
  <td name="td1">Prion protein rPrP23-231 (rPrPc) fused to glutathione S-transferase (GST), RecombiNAt Syrian golden hamster</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCACGA
AUUCGUUGUGCGGGAAUUUGAGGGA
CGAUGGGGAAGUGGGACGAAUGACU
CAUUGCCGCGGUAGGGUUAGGCACC
ACGGUCGGAUCC3'</td>
  <td name="td3">110</td>
  <td name="td4">58.18%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt2 aptamer</td>
  <td name="td1">Prion protein rPrP23-231 (rPrPc) fused to glutathione S-transferase (GST), RecombiNAt Syrian golden hamster</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCAGCA
AUGCGUUGUGUGGGAAUUUGAGGGA
CGAUGGGGAAGUGGGGACGAAUGAC
UCAUUGCCGCGGUAGGGUUGGCACC
ACGGUCGGAUCC3'</td>
  <td name="td3">110</td>
  <td name="td4">59.09%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt3 aptamer</td>
  <td name="td1">Prion protein rPrP23-231 (rPrPc) fused to glutathione S-transferase (GST), RecombiNAt Syrian golden hamster</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCUACC
UUAGAGUAGGAGCGGGACGAGGGGU
UGUUGGGACGUGGGUAUGAUCCAUA
CAUUAGGAAGCUGGUGAGCUGGCAC
CACGGUCGGAUCC3'</td>
  <td name="td3">111</td>
  <td name="td4">57.66%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">70cam6 aptamer</td>
  <td name="td1">Chloramphenicol (Cam)</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
AAUGAAAAGGGCUGGCGAGACAUAU
CCGCUGGGCAAUCAGAUUCGGAGCC
GCACCACCCUCGAAGUAGACAGGGC
AUAAGGUAUUUAAUUCCAUA3'</td>
  <td name="td3">118</td>
  <td name="td4">48.31%</td>
  <td name="td5">Kd: 2.1 ±  0.3 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">70cam9 aptamer</td>
  <td name="td1">Chloramphenicol (Cam)</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
AAGAGCUUGACGGUCCCGAGAGUCG
AGCCCAAGCUGACACUGGACCUUUG
CGGACCACGUGUUGAUCGUCGGGGC
AUAAGGUAUUUAAUUCCAUA3'</td>
  <td name="td3">118</td>
  <td name="td4">50.85%</td>
  <td name="td5">Kd: 8 ±  4 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">70cam53 aptamer</td>
  <td name="td1">Chloramphenicol (Cam)</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
AGGCACCAAAGCUGAAGUAGCGGGA
UAACUCAAAUUACUUUAGGUGUAUG
AAGGUGAAACUAGCAAUGAAGGGCA
UAAGGUAUUUAAUUCCAUA3'</td>
  <td name="td3">117</td>
  <td name="td4">39.32%</td>
  <td name="td5">Kd: 7 ±  2 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">80Cm50* aptamer</td>
  <td name="td1">Chloramphenicol (Cam)</td>
  <td name="td2">5'GGGCAUAAGGUAUUUAAUUCCAU
ACGGCAGACGAGCCUUGACGAGCCA
AUCUACACUUGGCGAUGACCGAUGG
GCCCCAGCUACUUCUGGCAGUUUCG
AUUCGUUUGAUUCGGAUGCUCGGUA
GCUCAACUCG3'</td>
  <td name="td3">133</td>
  <td name="td4">51.88%</td>
  <td name="td5">Kd: 25 ±  3 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">BBS #4,14,15 aptamer</td>
  <td name="td1">B52 protein</td>
  <td name="td2">5'GGGAGAAUUCAACUGCCAUCUAG
GCAGGGUAACGAUCAACCUGGCGAC
AGCUGCCCUGCCGUCCAAGUACUAC
AAGCUUCUGGACUCGGU3'</td>
  <td name="td3">90</td>
  <td name="td4">55.56%</td>
  <td name="td5">Kd: 50nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9111335/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">BBS #8 aptamer</td>
  <td name="td1">B52 protein</td>
  <td name="td2">5'GGGAGAAUUCAACUGCCAUCUAG
GCUGGUCAACCAGGCGACCGCCACC
CGCGCGCGCAAUACCUAGUACUACA
AGCUUCUGGACUCGGU3'</td>
  <td name="td3">89</td>
  <td name="td4">58.43%</td>
  <td name="td5">Kd: 20nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9111335/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">BBS #11 aptamer</td>
  <td name="td1">B52 protein</td>
  <td name="td2">5'GGGAGAAUUCAACUGCCAUCUAG
GCUGCUCACGAGUCCAUGACCAGUA
CGAUCAACCAGGCGACAGUACUACA
AGCUUCUGGACUCGGU3'</td>
  <td name="td3">89</td>
  <td name="td4">52.81%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9111335/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">BBS #23 aptamer</td>
  <td name="td1">B52 protein</td>
  <td name="td2">5'GGGAGAAUUCAACUGCCAUCUAG
GCCCAACUGCUAAGAAGCAUCCUGU
ACGAUCAACCCGGCGACAGUACUAC
AAGCUUCUGGACUCGGU3'</td>
  <td name="td3">90</td>
  <td name="td4">52.22%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9111335/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">g18_4.seq aptamer</td>
  <td name="td1">RNA stem-loop target (5'GCACGGTGCTGCTGAGATGCCCGT3')</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
CCGAAGCAUUCCGGCGUAGGGGUCU
GUGCGCAAAACCAUCGGCCCUGGUG
CCUAUGUGCGUCUACAUGGAUCCUC
A3'</td>
  <td name="td3">99</td>
  <td name="td4">57.58%</td>
  <td name="td5">Kd: 70 ± 15 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9222504/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">FC aptamer</td>
  <td name="td1">RNA polymerase II (Pol II), Saccharomyces cerevisiae (S. cerevisiae)</td>
  <td name="td2">5'GGGCCGCUAAGUCCUCGCUCACG
AUACAGCACUGAUUGCGGUCGAGGU
AGCUUGAUGGGCCACGCGCGACUCG
GAUCCAC3'</td>
  <td name="td3">80</td>
  <td name="td4">62.50%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9346949/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G4 aptamer</td>
  <td name="td1">Farnesylated peptide modeled after the carboxyl terminus of K ras</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCCU
GCUCAGGGGUGGGUCGUAUAAUUAG
CGUAGGGAGGUAGUGGAUGAGUAAG
CCUGGGAUGUCAUAUGUGCGUCUAC
AUGGAUCCUCA3'</td>
  <td name="td3">109</td>
  <td name="td4">52.29%</td>
  <td name="td5">Kd: 139 ± 12 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9222505/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G26 aptamer</td>
  <td name="td1">Farnesylated peptide modeled after the carboxyl terminus of K ras</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCCU
GAGAUGUAUCGUUGCCGGGGAUGGG
UGGGUGGUGUGAAGGCGAUCGUCAU
CAGUUCGAGCCAUAUGUGCGUCUAC
AUGGAUCCUCA3'</td>
  <td name="td3">109</td>
  <td name="td4">55.05%</td>
  <td name="td5">Kd: 0.93 ± 0.05 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov./9222505/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G6–16 aptamer</td>
  <td name="td1">NS3 Protein of Hepatitis C Virus (HCV)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGGCU
UGCUGUUGUUUCCCUGUUGUUUUGU
CUCUCAACUUUAUUGUGGUAAAGAU
CACUGGGUUGAUAAGGGCUAACUCU
AAUUUGACUACAUGGUCGGACCAAU
CAGUUCUUAUGGGAGAUGCAUAUGU
GCGUCUACAUGGAUCCUCA3'</td>
  <td name="td3">167</td>
  <td name="td4">43.71%</td>
  <td name="td5">Kd: 120 ± 18 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9356339/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G6–19 aptamer</td>
  <td name="td1">NS3 Protein of Hepatitis C Virus (HCV)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
AUACUGAAUUAAUCGCUACCGUGUC
AUUGUACUUGGUAGUGUUGAUGGUU
UGGGUCGCAUUUGGCUUGGCUUAUG
GUUUUUUCACCCUACCUCUCAUUGA
CGCACUAGGCUCUCAUAUGUGCGUC
UACAUGGAUCCUCA3'</td>
  <td name="td3">162</td>
  <td name="td4">45.68%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9356339/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">945 aptamer</td>
  <td name="td1">Special elongation factor SelB of Escherichia coli</td>
  <td name="td2">5'GUCAGGAUGACUGCUGCGCUCGU
GUCGUCACUGACCAUCUGUCGCAGG
UCUGCGCACAUCGGUCGUUCACGGC
CCAUCGGUUGCAGGUCUGCACCAAU
CGGUCGGUAAUGGCGCAAUGAGCAU
UACGGAUUCAAGC3'</td>
  <td name="td3">136</td>
  <td name="td4">58.09%</td>
  <td name="td5">binding ratio: 2.0</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9192624/" target="_blank" style="color:#520049"><b>1997</b></a></td>
</tr>
    
 <tr>
  <td name="td0">XBA RNA aptamer</td>
  <td name="td1">Xanthine (2,6-dioxypurine)</td>
  <td name="td2">5'GGCACGUGUAUUACCCUAGUGGU
CGACGUGCC3'</td>
  <td name="td3">32</td>
  <td name="td4">59.38%</td>
  <td name="td5">Kd: 3.3 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9512549/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">XBA RNA aptamer</td>
  <td name="td1">Guanine</td>
  <td name="td2">5'GGCACGUGUAUUACCCUAGUGGU
CGACGUGCC3'</td>
  <td name="td3">32</td>
  <td name="td4">59.38%</td>
  <td name="td5">Kd: 1.3 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9512549/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">APC-167 aptamer</td>
  <td name="td1">Activated protein C (APC), Human</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
GUGAGACCAGCCGAGUGGUGUCUGG
CUAUUCACUGGAGCGUGGGUGGAAC
CCCUGCGCACUCGUUUGGCUGUCCG
GGCCUUCGGGCCGGGAUUAUCUCUU
UGGGUUUUGUGAUUUGGUCAUAUGU
GCGUCUACAUGGAUCCUCA3'</td>
  <td name="td3">167</td>
  <td name="td4">55.69%</td>
  <td name="td5">Ki: 83 ± 17 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9546673/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">APC-99 aptamer</td>
  <td name="td1">Activated protein C (APC), Human</td>
  <td name="td2">5'GUGAGACCAGCCGAGUGGUGUCU
GGCUAUUCACUGGAGCGUGGGUGGA
ACCCCUGCGCACUCGUUUGGCUGUC
CGGGCCUUCGGGCCGGGAUUAUCUC
U3'</td>
  <td name="td3">99</td>
  <td name="td4">62.63%</td>
  <td name="td5">Ki: 137 ± 14 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9546673/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SRB-2 aptamer</td>
  <td name="td1">Fluorophore sulforhodamine B</td>
  <td name="td2">5'GGAACACUAUCCGACUGGCACCU
GUGCUCUAUAGCAGAAUGCUAACAU
UAGAUGAUGGAGGGGCGCAAGGUUA
ACCGCCUCAGUACAUCGGUGCCUUG
GUCAUUAGGAUCCCG3'</td>
  <td name="td3">113</td>
  <td name="td4">52.21%</td>
  <td name="td5">Kd: 70 ± 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">FB-1 aptamer</td>
  <td name="td1">Fluorescein</td>
  <td name="td2">5'GGACGGCACCACGGUCGGAUCCG
UGAGUUGUGACAAUUUAGCGGGUGG
UAUUAGAGCCUACUGCCACAGCAAU
AGGAUCGAUACAGAUCU3'</td>
  <td name="td3">90</td>
  <td name="td4">52.22%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">N30yc5 aptamer</td>
  <td name="td1">Protein tyrosine phosphatases (PTPase) ( Yop51*Δ162 ), Yersinia</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGUA
UUACUGCUGGUGACGAGGGCUAGAC
GACGUACCUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">51.25%</td>
  <td name="td5">Kd: 28 ± 12 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9603938/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">N71yc16 aptamer</td>
  <td name="td1">Protein tyrosine phosphatases (PTPase) ( Yop51*Δ162 ), Yersinia</td>
  <td name="td2">5'GGGAGAUACCAGCUUAUUCAAUU
CUGGCAAUGGGCUAUCCCAAGUGCU
AGGCUUCAGGGAGCGAGGACCAGAC
GACGUACCUAACCCUAAGGUGAGAU
AGUAAGUGCAAUCU3'</td>
  <td name="td3">112</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 18 ± 2.9 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9603938/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">21.01 aptamer</td>
  <td name="td1">Glutathione S-transferase-fused RBD (GST-RBD) Ras-binding domain (Raf-1 RBD)</td>
  <td name="td2">5'GGGAGAUCAGAAUAAACGCUCAA
CUGAUCAAUGGCGUACAAUGGAUUC
GUUCUCAUAACCAAAACCCUUACCC
CUUGGACUGAUUCGACAUGAGGCCC
CUGCAGGGCG3'</td>
  <td name="td3">108</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 332 ± 93 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9883908/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">21.07 aptamer</td>
  <td name="td1">Glutathione S-transferase-fused RBD (GST-RBD) Ras-binding domain (Raf-1 RBD)</td>
  <td name="td2">5'GGGAGAUCAGAAUAAACGCUCAA
UUGACUCAAUGGCGUACAAUGGAUU
CGUUCUCAUAACCAAAACCCUUACC
CCUUGGACUGUUCGACAUGAGGCCC
CUGCAGGGCG3'</td>
  <td name="td3">108</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 332 ± 93 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9883908/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">J6f1 aptamer</td>
  <td name="td1">Tobramycin</td>
  <td name="td2">5'GGCUUAGUAUAGCGAGGUUUAGC
UACACUCGUGCUGAGCC3'</td>
  <td name="td3">40</td>
  <td name="td4">52.50%</td>
  <td name="td5">Kd: 5.15 ± 1.52 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9425088/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ps11-20 aptamer</td>
  <td name="td1">RecombiNAt basic fibroblast growth factor (bFGF), Human</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCAAUCCCAAUGGCUUGAACUGCC
AACGAACGUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">47.50%</td>
  <td name="td5">Kd: 1.8 ±  0.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9873529/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C #128 aptamer</td>
  <td name="td1">Streptomycin</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCACCC
CUUUGUGGGAACGCAAAACUAAAGG
AAGAUCUCAAGAAAGGUGGAUCGCA
UUUGGACUUCUGCCCAGGGUGGCAC
CACGGUCGGAUCCAC3'</td>
  <td name="td3">113</td>
  <td name="td4">54.87%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C #128 (46 mer) aptamer</td>
  <td name="td1">Streptomycin</td>
  <td name="td2">5'GGAUCGCAUUUGGACUUCUGCCC
AGGGUGGCACCACGGUCGGAUCC3'</td>
  <td name="td3">46</td>
  <td name="td4">63.04%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B # 84 aptamer</td>
  <td name="td1">Streptomycin</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCCAGA
CAGUAGAGGGAAGUGUGAGCUAUCA
CCUCAAGGAAAACGCUUCAGAAAGG
GACUUAGGUGAUGAUAGUGUGGCAC
CACGGUCGGAUCCAC3'</td>
  <td name="td3">113</td>
  <td name="td4">53.10%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B #84 (41 mer) aptamer</td>
  <td name="td1">Streptomycin</td>
  <td name="td2">5'AUCACCUCAAGGAAAACGCUUCA
GAAAGGGACUUAGGUGAU3'</td>
  <td name="td3">41</td>
  <td name="td4">43.90%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b></a></td>
</tr>
    
 <tr>
  <td name="td0">clone 488 aptamer</td>
  <td name="td1">SelB protein, Escherichia coli</td>
  <td name="td2">5'GCGCUAAGUCCUCGCUCAGCCCA
UAAGUUGUCCCAAGUCUUGGGCGCA
AAUACAUCCCACGCGCGACUCGGAU
CCG3'</td>
  <td name="td3">76</td>
  <td name="td4">59.21%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10496219/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B2 aptamer</td>
  <td name="td1">Phenylalanine tRNA, Yeast</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCUACGUA
UCUUCAGGCGGUAACUAACUGUGCU
GAGUCUAAUCUUUGUGAGGGACGGU
AACAUAUGGUUCCCGCGUGGUCCGU
UCGGGAUCCUC3'</td>
  <td name="td3">109</td>
  <td name="td4">53.21%</td>
  <td name="td5">Kd: 12 ± 1.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B3 aptamer</td>
  <td name="td1">Phenylalanine tRNA, Yeast</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCAAGCCU
GUCGUGUGAACCUUGGUAGUCUUCA
GAUACCAUUCUAGCCACGAGAGACU
ACGACACUGCUCCGUCGCCCGUCCG
UUCGGGAUCCUC3'</td>
  <td name="td3">110</td>
  <td name="td4">57.27%</td>
  <td name="td5">Kd: 26 ± 1.4 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B4 aptamer</td>
  <td name="td1">Phenylalanine tRNA, Yeast</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCUCGGUC
ACGCAUCUUCACGUCGAAAGCUACA
UCGGUCUGCUGACGGUGAUGGCAUU
UGCGCGGCUUACGCCGGUCGUGGUC
CGUUCGGGAUCCUC3'</td>
  <td name="td3">112</td>
  <td name="td4">60.71%</td>
  <td name="td5">binding efficiency:40%</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B6 aptamer</td>
  <td name="td1">Phenylalanine tRNA, Yeast</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCAGAGUG
GCCGGGCCUCCAUUCGGGGGUUAUC
UUCACCUACGGGCCCCACGCGUUAU
UUAGUGUUGUACCGUAGGGCUGUGU
CCGUUCGGGAUCCUC3'</td>
  <td name="td3">113</td>
  <td name="td4">60.18%</td>
  <td name="td5">binding efficiency:37%</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B7 aptamer</td>
  <td name="td1">Phenylalanine tRNA, Yeast</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCGGGUCU
UCACAGACUUGGCAAUUACCAGAAC
AUGUGCCUGGUAUACGUCAAUACGU
CUGGUGGUUAAUACCGCCGUGGUCC
GUUCGGGAUCCUC3'</td>
  <td name="td3">111</td>
  <td name="td4">54.05%</td>
  <td name="td5">binding efficiency:41%</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B1 aptamer</td>
  <td name="td1">Phenylalanine tRNA, Yeast</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCAUCACG
GGUGUAUGCAAGACUCAGCAGUGGG
CCAUAUGGUCGGAUCGAGGCUAGCU
AAGUCUCCCAAUUGCACCUUCGUGG
UCCGUUCGGGAUCCUC3'</td>
  <td name="td3">114</td>
  <td name="td4">57.02%</td>
  <td name="td5">binding efficiency:16%</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D20 aptamer</td>
  <td name="td1">Cytoplasmic domain of CD18</td>
  <td name="td2">5'GGGCGCUAAGUCCUCGCUCAUGC
GCGUCCCAUGGGGUAUAGAGGGGUC
GAAGUGGACGCGCGACUCGGAUCCU
AC3'</td>
  <td name="td3">75</td>
  <td name="td4">64.00%</td>
  <td name="td5">Kd: between 500 and 1,000 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10097084/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D28 aptamer</td>
  <td name="td1">Cytoplasmic domain of CD18</td>
  <td name="td2">5'GGGCGCUAAGUCCUCGCUCAUAC
AACGAGGGGUCGUGUAGGGAUGUAU
GGGCUUGGACACACGCGCGACUCGG
AUCCUAC3'</td>
  <td name="td3">80</td>
  <td name="td4">60.00%</td>
  <td name="td5">Kd: between 500 and 1,000 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10097084/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D31 aptamer</td>
  <td name="td1">Cytoplasmic domain of CD18</td>
  <td name="td2">5'GGGCGCUAAGUCCUCGCUCACAA
GGUGCAAUGCAAUAUGUGAGUGCGC
CGCCCUUUCUCUCGCGCGACUCGGA
UCCUAC3'</td>
  <td name="td3">79</td>
  <td name="td4">59.49%</td>
  <td name="td5">Kd: between 500 and 1,000 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10097084/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA-1 aptamer</td>
  <td name="td1">Subtilisin BPN</td>
  <td name="td2">5'GGGCGAAUUCGAGCUCGGGCCAC
UCGCUCAACACGGUAAGUAGAGACC
UAGUGGUACAUAAAGGACUGCAGGC
AUGCAAGCU3'</td>
  <td name="td3">82</td>
  <td name="td4">54.88%</td>
  <td name="td5">Ki: 2.5 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10348914/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">85 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUGAAUGA
GAGAGAAGUAAAAGGUUGAUAUAAA
UAGUGCCCA3'</td>
  <td name="td3">57</td>
  <td name="td4">42.11%</td>
  <td name="td5">Kd: 11 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">88 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUUCGAAA
GAAAAGAGUAACUGGUUGAUAUAAA
UAGUGCCCA3'</td>
  <td name="td3">57</td>
  <td name="td4">42.11%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">76 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUAAGAGA
AGAAGUACCCGAGCGUUGAUAUAAA
UAGUGCCCA3'</td>
  <td name="td3">57</td>
  <td name="td4">47.37%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">98 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUGAUGAA
GUAAAAAGCGAUGAGUUGAUAUAAA
UAGUGCCCA3'</td>
  <td name="td3">57</td>
  <td name="td4">42.11%</td>
  <td name="td5">Kd: 21 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">58 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUGGGAGG
CAGAAAGGAAAAAGUGUUGAUAUAA
AUAGUGCCCA3'</td>
  <td name="td3">58</td>
  <td name="td4">46.55%</td>
  <td name="td5">Kd: 13 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">77 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUAAGAAA
GAACGGAACCAUGGUUGAUAUAAAU
AGUGCCCA3'</td>
  <td name="td3">56</td>
  <td name="td4">44.64%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">78 aptamer</td>
  <td name="td1">Unr (Upstream of N-Ras) protein, Human</td>
  <td name="td2">5'GGGCCACCAACGACAUUGAAAAA
AAAACAAGAAGAAGGUUGAUAUAAA
UAGUGCCCA3'</td>
  <td name="td3">57</td>
  <td name="td4">38.60%</td>
  <td name="td5">Kd: 8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">2-16 aptamer</td>
  <td name="td1">Trypanosome variant surface glycoprotein (VSG)</td>
  <td name="td2">5'CGUCCAUCGGGUGGCCCGUGUCU
GAGCGGGGACGGGGACUUGAGCGCC
GCUGUCCGACUGAAUU3'</td>
  <td name="td3">80</td>
  <td name="td4">63.75%</td>
  <td name="td5">Kd: 60 ± 17 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10198434/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R-06 aptamer</td>
  <td name="td1">Trans-activation responsive (TAR) RNA element of HIV-1</td>
  <td name="td2">5'GGUUACCAGCCUUCACUGCGGGC
CACGAUUGUCGAGUCCAUCAACAGG
UCCCAGACGUGUUGAACUGGAGAUC
CCCCCGCACCACGGUCGGUCACAC3
'</td>
  <td name="td3">97</td>
  <td name="td4">60.82%</td>
  <td name="td5">Kd: 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R-39 aptamer</td>
  <td name="td1">Trans-activation responsive (TAR) RNA element of HIV-1</td>
  <td name="td2">5'GGUUACCAGCCUUCACUGCACAG
CCUCACUCCGGUCCCAGACGAAGUG
ACGGCACCAUGUGAGAAGCCCUACU
GUGCCCGCACCACGGUCGGUCACAC
3'</td>
  <td name="td3">98</td>
  <td name="td4">62.24%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R-42 aptamer</td>
  <td name="td1">Trans-activation responsive (TAR) RNA element of HIV-1</td>
  <td name="td2">5'GGUUACCAGCCUUCACUGCCCAG
CGCAAUGACGACCCCCAGUCCCAGA
UGGGAGGUCAUAGUCAUAGUCGGAC
UCACCGCGGCACCACGGUCGGUCAC
AC3'</td>
  <td name="td3">100</td>
  <td name="td4">62.00%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R-06 24 aptamer</td>
  <td name="td1">Trans-activation responsive (TAR) RNA element of HIV-1</td>
  <td name="td2">5'UCAACACGGUCCCAGACGUGUUG
A3'</td>
  <td name="td3">24</td>
  <td name="td4">54.17%</td>
  <td name="td5">Kd: 32 ± 8 nM </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA aptamer 3 aptamer</td>
  <td name="td1">Human transcription factor NF-kB as a p50 homodimer (p502)</td>
  <td name="td2">5'GGGAUAUCCUCGAGACAUAAGAA
ACAAGAUAGAUCCUGAAACUGUUUU
AAGGUUGGCCGAUCUUCUGCUCGAG
AAUGCAUGAAGCGUUCCAUAUUUUU
3'</td>
  <td name="td3">98</td>
  <td name="td4">40.82%</td>
  <td name="td5">Kd: 1.34 ± 0.2 nM </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10074372/" target="_blank" style="color:#520049"><b>1999</b></a></td>
</tr>
    
 <tr>
  <td name="td0">109.2-3 aptamer</td>
  <td name="td1">Prokaryotic 16s-rRNA region</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCCU
UCUCCUGCCGCGCGAUUUUACGCCG
ACAAGGGUGGCAUGAUGAUGUGUCU
NUAUAUAGCAUAUGUGCGUCUACAU
GGAUCCUCA3'</td>
  <td name="td3">106</td>
  <td name="td4">50.94%</td>
  <td name="td5">Kd: 1.236 ± 0.051 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">109.1-7 aptamer</td>
  <td name="td1">Prokaryotic 16s-rRNA region</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
UUAGGGCGGGACUUUUGGCCGCAAA
GGUUGGUGUGAGGGUUCUCAAUAAU
GGCCCAAGCAUAUGUGCGUCUACAU
GGAUCCUCA3'</td>
  <td name="td3">107</td>
  <td name="td4">51.40%</td>
  <td name="td5">Kd: 1.446 ± 0.088 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">109.2-15 aptamer</td>
  <td name="td1">Prokaryotic 16s-rRNA region</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCGG
CGUUCCGCAUCGGCAACUGGCGAGG
AGUUGUAUUCGGCGGAAACGGGUUG
AGGUCCGACAUAUGUGCGUCUACAU
GGAUCCUCA3'</td>
  <td name="td3">107</td>
  <td name="td4">57.01%</td>
  <td name="td5">Kd: 1.665 ± 0.101 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">69.1-4 aptamer</td>
  <td name="td1">Prokaryotic 16s-rRNA region</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCAG
UGGAAGAGCCGGGUUGGGCAUAUGU
GCGUCUACAUGGAUCCUCA3'</td>
  <td name="td3">67</td>
  <td name="td4">55.22%</td>
  <td name="td5">Kd: 2.946 ± 0.149 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">69.1-11 aptamer</td>
  <td name="td1">Prokaryotic 16s-rRNA region</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCAG
CGGAACGGCCGACUUCAACAUAUGU
GCGUCUACAUGGAUCCUCA3'</td>
  <td name="td3">67</td>
  <td name="td4">53.73%</td>
  <td name="td5">Kd: 2.786 ± 0.188 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">1D13-01 aptamer</td>
  <td name="td1">Doxycyline</td>
  <td name="td2">5'GGAGCUCGGUAGUGACGCGUUGU
GUUUACGCGUCUGAUGAGUGUAUAU
GACACCGAUGGGUAUUUGCUAGUAU
CCUGCGUUCACGAAACUACCUCGAG
ACGU3'</td>
  <td name="td3">102</td>
  <td name="td4">50.00%</td>
  <td name="td5">Ki: 70 ± 20 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">1D16-05 aptamer</td>
  <td name="td1">Doxycyline</td>
  <td name="td2">5'GGAGCUCGGUAGUGACGCGUUGU
GUUUACGCGUCUGAUGAGUGGUACA
GUCCAGGGUGAAGUUCCAAUUUUGA
ACACCUCCACGAAACUACCUCGAGA
CGU3'</td>
  <td name="td3">101</td>
  <td name="td4">51.49%</td>
  <td name="td5">Ki: 20 ± 5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">1D16-06 aptamer</td>
  <td name="td1">Doxycyline</td>
  <td name="td2">5'GGAGCUCGGUAGUGACGCGUUGU
GUUUACGCGUCUGAUGAGUGGUUUG
ACCCUUGAUUCGAUGUAUUCGAAAG
UGCUUGUUGACGAAACUACCUCGAG
ACGU3'</td>
  <td name="td3">102</td>
  <td name="td4">49.02%</td>
  <td name="td5">Ki: 25 ± 3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">rafl7 aptamer</td>
  <td name="td1">Adenosine triphosphate (ATP)</td>
  <td name="td2">5'GGAAGGCACGACGAAGCAAGCAG
GCAACGAACACAGAAGACCGGGGGA
ACUACCGCGCGUGCCAGACCCAACC
AGCCAGAGACC3'</td>
  <td name="td3">84</td>
  <td name="td4">63.10%</td>
  <td name="td5">Kd: 223 μM ± 20 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11101810/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">rafl7-U61C aptamer</td>
  <td name="td1">Adenosine triphosphate (ATP)</td>
  <td name="td2">5'GGAAGGCACGACGAAGCAAGCAG
GCAACGAACACAGAAGACCGGGGGA
ACUACCGCGCGCGCCAGACCCAACC
AGCCAGAGACC3'</td>
  <td name="td3">84</td>
  <td name="td4">64.29%</td>
  <td name="td5">Kd: 165 μM ± 10 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11101810/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">rafl7s aptamer</td>
  <td name="td1">Adenosine triphosphate (ATP)</td>
  <td name="td2">5'GGGCGCGACGAAGCAAGCAGGCA
ACGAACACAGAAGACCGGGGGAACU
ACCGCGCGCGCCC3'</td>
  <td name="td3">61</td>
  <td name="td4">68.85%</td>
  <td name="td5">Kd: 175 μM ± 5 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11101810/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">rafl28 aptamer</td>
  <td name="td1">Adenosine triphosphate (ATP)</td>
  <td name="td2">5'GGAAGGCACGACCGCGCAAGAUA
CCGCCCGACAGCGGAAGGAGGGGCA
UGCGGUCCAGGGCUGAGACCCAACC
AGCCAGAGACC3'</td>
  <td name="td3">84</td>
  <td name="td4">67.86%</td>
  <td name="td5">NA </td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11101810/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">1D16-13 aptamer</td>
  <td name="td1">Doxycyline</td>
  <td name="td2">5'GGAGCUCGGUAGUGACGCGUUGU
GUUUACGCGUCUGAUGAGUCCUCGG
UAAUCGCCGUAUCAAAAGUCGGAAU
GGAGGGUCGACGAAACUACCUCGAG
ACGU3'</td>
  <td name="td3">102</td>
  <td name="td4">53.92%</td>
  <td name="td5">Ki: 50 ± 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">9-41U22 aptamer</td>
  <td name="td1">Pepocin</td>
  <td name="td2">5'GGGAGUCUGAAGUCGGACUCGAU
AUCAAUUCACUUCAGACU3'</td>
  <td name="td3">41</td>
  <td name="td4">46.34%</td>
  <td name="td5">Kd: 17.9 ± 2.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10671532/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">08-09 aptamer</td>
  <td name="td1">Pepocin</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGUA
UUCAACCAAGUCUAAUGUCGGACUC
GAUAUCAAUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">43.75%</td>
  <td name="td5">Kd: 21.0 ± 2.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10671532/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">8-14 aptamer</td>
  <td name="td1">Pepocin</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGUA
UUCAGUCUAGGAAGCAGUCGGACUU
GUUAUCAAUUCACUGCAGACUGUAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">45.00%</td>
  <td name="td5">Kd: 23.4 ± 2.3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10671532/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">cAMP - b (parent) aptamer</td>
  <td name="td1">Second messenger adenosine 3',5'-cyclic monophosphate (cAMP; 1)</td>
  <td name="td2">5'GGAAGAGAUGGCGACUAAAACGA
CUUGUCGCGUGCUGCCCGCCUGUUC
GCUUCUGCACCCCGGCGGUAAGCUU
GGCAC3'</td>
  <td name="td3">78</td>
  <td name="td4">61.54%</td>
  <td name="td5">No reported</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10913311/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">cAMP - b aptamer</td>
  <td name="td1">Second messenger adenosine 3',5'-cyclic monophosphate (cAMP; 1)</td>
  <td name="td2">5'GGAAGAGAUGGCGACUAAAACGA
CUUGUCGC3'</td>
  <td name="td3">31</td>
  <td name="td4">51.61%</td>
  <td name="td5">Kd: 10 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10913311/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B-2 aptamer</td>
  <td name="td1">R5 helix peptide</td>
  <td name="td2">5'GGGAAACUGGAUGGAAUGGGCUC
GAUGAAAAUCGACCGUGCGCUGAAA
AGCACGCGAGGUCCUGCUGUAAGUG
UGCCA3'</td>
  <td name="td3">78</td>
  <td name="td4">55.13%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12903331/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B-6 aptamer</td>
  <td name="td1">R5 helix peptide</td>
  <td name="td2">5'GGGAAACUGGAUGGAAUGGGCUC
GCAAGGCCCCCUGAGCUGCACAAGU
UCAUGGCGAGGUCCUGCUGUAAGUG
UGCCA3'</td>
  <td name="td3">78</td>
  <td name="td4">58.97%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12903331/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Tyr 1 aptamer</td>
  <td name="td1">L-tyrosine</td>
  <td name="td2">5'GGGAAGCUUGUACAGGGGGCAGU
CAACUCGUGCGAUCGUGAAAACGGG
GCAAGAUGGCCUUACAGCGGUCAAU
ACGGGGGUCAUCAGAUAGGGAGGCC
CUCCUGGUGGUCCGUUCGGGAUCCU
C3'</td>
  <td name="td3">124</td>
  <td name="td4">59.68%</td>
  <td name="td5">Kd: 35 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10786843/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G9-I aptamer</td>
  <td name="td1">Nonstructural protein 3 (NS3) protease active site in the truncated polypeptide ΔNS3, Hepatitis C virus (HCV)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
CGGGAUUUGAGGGUAGAAUGGGACU
ACCUUUCCUCUCUCCUUCCUCUUCU
3'</td>
  <td name="td3">73</td>
  <td name="td4">50.68%</td>
  <td name="td5">Kd: 11.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G9-II aptamer</td>
  <td name="td1">Nonstructural protein 3 (NS3) protease active site in the truncated polypeptide ΔNS3, Hepatitis C virus (HCV)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGUGC
UCUUAGAAUGGGACUAAGACACGGG
ACCCUUUCCUCUCUCCUUCCUCUUC
U3'</td>
  <td name="td3">74</td>
  <td name="td4">51.35%</td>
  <td name="td5">Kd: 6.3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G9-III aptamer</td>
  <td name="td1">Nonstructural protein 3 (NS3) protease active site in the truncated polypeptide ΔNS3, Hepatitis C virus (HCV)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGUAC
GACACGAUUGGGACGUGUCUAUGGG
ACCCUUUCCUCUCUCCUUCCUCUUC
U3'</td>
  <td name="td3">74</td>
  <td name="td4">52.70%</td>
  <td name="td5">Kd: 8.9 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">clone 31 aptamer</td>
  <td name="td1">Tat protein from HIV-1 in the presence of Zn2+ ion</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
UGGUUAUCAUGUUUAUGCGUACGGG
CGCCCAUAUGUGCGUCUACAUGGAU
CCUCA3'</td>
  <td name="td3">78</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 0.31 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11132628/" target="_blank" style="color:#520049"><b>2000</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA20 aptamer</td>
  <td name="td1">WT1-ZFP & WT1[+KTS]-ZFP (two zinc finger isoforms of the WT1 DNA binding domain)</td>
  <td name="td2">5'GGGGCCACCAACGACAUUGACGA
AUGCGUAAAUUGCUAGGUUGAUAUA
AAUAGUGCCCAUGGAUCCGCGGGUG
UCGGG3'</td>
  <td name="td3">78</td>
  <td name="td4">52.56%</td>
  <td name="td5">Kd: 87.4 ± 10.4 nM (WT1-ZFP) & 69.8 ± 8.4 nM (WT1[+KTS]-ZFP)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11329270/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA22 aptamer</td>
  <td name="td1">WT1-ZFP & WT1[+KTS]-ZFP (two zinc finger isoforms of the WT1 DNA binding domain)</td>
  <td name="td2">5'GGGGCCACCAACGACAUUGAUAU
GGUGACCACCCCGGCGUUGAUAUAA
AUAGUGCCCAUGGAUCCGCGGGUGU
CGGG3'</td>
  <td name="td3">77</td>
  <td name="td4">58.44%</td>
  <td name="td5">Kd: 13.8 ± 1.1 nM (WT1-ZFP) & 22.8 ± 2.3 nM (WT1[+KTS]-ZFP)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11329270/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA38 aptamer</td>
  <td name="td1">WT1-ZFP & WT1[+KTS]-ZFP (two zinc finger isoforms of the WT1 DNA binding domain)</td>
  <td name="td2">5'GGGGCCACCAACGACAUUAUCAC
CCACCCCGAGCUGGCGUUGAUAUAA
AUAGUGCCCAUGGAUCCGCGGGUGU
CGGG3'</td>
  <td name="td3">77</td>
  <td name="td4">59.74%</td>
  <td name="td5">Kd: 17.8 ± 1.4 nM (WT1-ZFP) & 33.7 ± 4.4 nM (WT1[+KTS]-ZFP)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11329270/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Clone 5 aptamer</td>
  <td name="td1">Sialyl Lewis X (sLeX)-expressing HL60 cells</td>
  <td name="td2">5'CCGUAAUACGACUCACUAUAGGG
GAGCUCGGUACCGAAUUCAAGGYAC
UCUGUGCUUGUCGAUGUGYAUUGAU
GGCACUUUCGAGUCAACGAGUUGAC
AGRACAAGUAGUCAAGCUUUGCAGA
GAGGAUCCUU3'</td>
  <td name="td3">130</td>
  <td name="td4">46.62%</td>
  <td name="td5">Kd: 0.085 nM and 3.3 nM via SPR</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11178986/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">cb28 aptamer aptamer</td>
  <td name="td1">Class I typical tetracyclins</td>
  <td name="td2">5'GCAUGCUAAUACGACUCACUAUA
GGAGCUCAGCCUUCACUGCUGCUUA
AAGCCUAAAACAUACCAGAUCGCCA
CCCGCGCUUUAAUCUGGAGAGGUGA
AGAAUUCGACCACCUAGGCUGCACC
ACAAGCUU3'</td>
  <td name="td3">131</td>
  <td name="td4">49.62%</td>
  <td name="td5">Kd: ~1 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">cb28 minimer aptamer</td>
  <td name="td1">Class I typical tetracyclins</td>
  <td name="td2">5'GGCCUAAAACAUACCAGAUUUCG
AUCUGGAGAGGUGAAGAAUUCGACC
ACCUAGGCCGGU3'</td>
  <td name="td3">60</td>
  <td name="td4">50.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D8 aptamer</td>
  <td name="td1">Sephadex G-100</td>
  <td name="td2">5'GGGAGUCGACCGACCAGAAGUCC
GAGUAAUUUACGUUUUGAUACGGUU
GCGGAACUUGCUAUGUGCGUCUACA
UCUAGACUCAU3'</td>
  <td name="td3">84</td>
  <td name="td4">47.62%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11139634/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Toggle-25 aptamer</td>
  <td name="td1">Thrombin, Human and porcine</td>
  <td name="td2">5'GGGAGAGAGGAAGAGGGAUGGGG
AACAAAGCUGAAGUACUUACCCAAG
AUCAUCCCGAACGACAUAACCCAGA
GGUCGAU3‘</td>
  <td name="td3">80</td>
  <td name="td4">51.25%</td>
  <td name="td5">Kd: (Human: 2.8 ± 0.7 nM, Porcine: 83 ± 3 pM)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11735341/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA 12 E4 aptamer</td>
  <td name="td1">Adenine</td>
  <td name="td2">5'GGGAGAGGAUACUACACGUGAUA
GGACGAUUAUCGAAAAUCACCAGAU
UGGACCCUGGUUAACGAUCCAUUGC
AUGUAGCAGAAGCUUCCG3'</td>
  <td name="td3">91</td>
  <td name="td4">47.25%</td>
  <td name="td5">Kd: 10 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11705996/" target="_blank" style="color:#520049"><b>2001</b></a></td>
</tr>
    
 <tr>
  <td name="td0">12 E4 aptamer</td>
  <td name="td1">N6-adenine</td>
  <td name="td2">5'GCGAAUUCGGAGAGGAUACUACA
CGUGAUAGGACGAUUAUCGAAAAUC
ACCAGAUUGGACCCUGGUUAACGAU
CGGAAGCUUCUGCUACAUGCAAUGG
3'</td>
  <td name="td3">98</td>
  <td name="td4">46.94%</td>
  <td name="td5">Kd: 10 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11705996/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer A.2 aptamer</td>
  <td name="td1">Nonstructural 5B (NS5B) polymerase, hepatitis C virus (HCV) NS5BΔC55 protein</td>
  <td name="td2">5'GGGAUGCUUCGGCAUCCCAGUCG
AUGCGUAUCGCAGACUAUGUGGCUU
CGGCCGUUGGAGUUGGUACCGCUUC
GGCGGUACGUAAGCUUGGG3'</td>
  <td name="td3">92</td>
  <td name="td4">59.78%</td>
  <td name="td5">Kd: 16 ± 1.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer B.2 aptamer</td>
  <td name="td1">Nonstructural 5B (NS5B) polymerase, hepatitis C virus (HCV) NS5BΔC55 protein</td>
  <td name="td2">5'GGGAUGCUUCGGCAUCCCCGAAG
CCGCUAUGGACCAGUGGCGCGGCUU
CGGCCCGACGGAGUGGUACCGCUUC
GGCGGUACGUAAGCUUGGG3'</td>
  <td name="td3">92</td>
  <td name="td4">67.39%</td>
  <td name="td5">Kd: 1.5 ± 0.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer B.3 aptamer</td>
  <td name="td1">Nonstructural 5B (NS5B) polymerase, hepatitis C virus (HCV) NS5BΔC55 protein</td>
  <td name="td2">5'GGGAUGCUUCGGCAUCCCGCUCU
GGGCCGAAUAUGGACCACGUGGCUU
CGGCCGCCAGCUCGUGUACCGCUUC
GGCGGUACGUAAGCUUGGG3'</td>
  <td name="td3">92</td>
  <td name="td4">65.22%</td>
  <td name="td5">Kd: 10 ± 1.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer B.2 SLII aptamer</td>
  <td name="td1">Nonstructural 5B (NS5B) polymerase, hepatitis C virus (HCV) NS5BΔC55 protein</td>
  <td name="td2">5'CGAAGCCGCGCUAUGGACCAGUG
GCGCGGCUUCG3'</td>
  <td name="td3">34</td>
  <td name="td4">70.59%</td>
  <td name="td5">Kd: >>200 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SA19 Aptamer aptamer</td>
  <td name="td1">Streptavidin (SA)</td>
  <td name="td2">5'AAUUAACCCUCACUAAAGGGAAC
UGUUGUGAGUCUCAUGUCGAACUUU
CCUAGCGCACAUGCGACCUCUAUGC
GUAAUACGAACGUUGACGGUUUGAG
CGUCUAGUCUUGUCU3'</td>
  <td name="td3">113</td>
  <td name="td4">46.02%</td>
  <td name="td5">Kd: 7 ± 1.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12000850/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">DP3 aptamer</td>
  <td name="td1">Neuropeptide Y (NPY)</td>
  <td name="td2">5'UCGGAGAAAGGGAAGCUUGAGCA
GCAGGAGGGCCGGCGUUAGGGUUAG
CGAGCCGAUUGAAAGAAGAAGGAAC
GAGCGUACGGAUCCGAUC3'</td>
  <td name="td3">91</td>
  <td name="td4">57.14%</td>
  <td name="td5">Kd: 0.37 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11756401/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">W2 aptamer</td>
  <td name="td1">Complement 5 protein (C5 protein)</td>
  <td name="td2">5'CGUCCCUUCGCAACCCUUUAAGA
CUUGGGACCCUGCUCUU3'</td>
  <td name="td3">40</td>
  <td name="td4">55.00%</td>
  <td name="td5">Kd: 3.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12490703/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA5 aptamer</td>
  <td name="td1">Release factor 1 (RF1), Thermus thermophilus (T. thermophilus)</td>
  <td name="td2">5'GGGAGAGGAUACUACACGUGGUG
UGUCAAGCCAGCCCUAGCUUGCUAC
CUGGGGGCCACUGACCUAUCCAUUG
CAUGUAGCAGAAGCUUCCG3'</td>
  <td name="td3">92</td>
  <td name="td4">56.52%</td>
  <td name="td5">Kd: 2 x 10^-5 M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11904188/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA7 aptamer</td>
  <td name="td1">Release factor 1 (RF1), Thermus thermophilus (T. thermophilus)</td>
  <td name="td2">5'GGGAGAGGAUACUACACGUGGAA
AGCUGAAAGUGAACGGAGUAUCACA
GAGAACCCGGAAAAGUGGAGCCAUU
GCAUGUAGCAGAAGCUUCCG3'</td>
  <td name="td3">93</td>
  <td name="td4">50.54%</td>
  <td name="td5">Kd: 2 x 10^-5 M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11904188/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SE RNA #1 aptamer</td>
  <td name="td1">Nuclear factor of activated T cells NFATc DNA binding domain (DBD)</td>
  <td name="td2">5'GGGAGAGCGGAAGCGUGCUGGGC
CUCUGUUCCCAAGGGAAUACYGGUC
GUGUUGGAUCAGGUUGGCAUAACCC
AGAGGUCGAUGGAUCCCCCC3'</td>
  <td name="td3">92</td>
  <td name="td4">60.87%</td>
  <td name="td5">Kd: 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12408978/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">bU118 aptamer</td>
  <td name="td1">ATP</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
ACUUAGGAGGAAGAAACUGCACAAU
ACACAGAUCACGCGAAAGGAUAAUG
CGUUCUGCGGAUUGUGGGCCUGGGC
AUAAGGUAUUUAAUUCCAUA3'</td>
  <td name="td3">118</td>
  <td name="td4">44.07%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11884639/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">bU320 aptamer</td>
  <td name="td1">ATP</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
AGCAAUCUUGUUAACGGUGGAGGAC
GUAUGAAGGAAACUUAGGAAUCCCU
GGUCCACGAAUCUGACCGUGUGGGC
AUAAGGUAUUUAAUUCCAUA3'</td>
  <td name="td3">118</td>
  <td name="td4">44.07%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11884639/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">bU321 aptamer</td>
  <td name="td1">ATP</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
AAAGAACGUGAUGAAACGGUAACCA
UAUCGCGUGCUCAAACUACAACGGA
AAAUGAGGAGGAACGUGCUCAUGGG
CAUAAGGUAUUUAAUUCCAUA3'</td>
  <td name="td3">119</td>
  <td name="td4">42.02%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11884639/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">bU40min aptamer</td>
  <td name="td1">ATP</td>
  <td name="td2">5'GGGAAAAGCGAAUCAUACACAAG
AUUCACUCUACACCCAUGUCCCUAG
GACUACAGGUUAACUACAAACCUCG
AUCCGGUGCUUAGGGUGUGCUGG3'</td>
  <td name="td3">100</td>
  <td name="td4">51.52%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11884639/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">E2F-E1 aptamer</td>
  <td name="td1">E2F transcription factor</td>
  <td name="td2">5'GUCGAUGUGAUAAGUAGGACGGA
GGUGGUCGAU3'</td>
  <td name="td3">33</td>
  <td name="td4">51.52%</td>
  <td name="td5">Kd:2–4 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12095300/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">beta 55 aptamer</td>
  <td name="td1">Beta amyloid peptide (βA4(1–40))</td>
  <td name="td2">5'UUACCGUAAGGCCUGUCUUCGUU
UGACAGCGGCUUGUUGACCCUCACA
CUUUGUACCUGCUGCCAA3'</td>
  <td name="td3">66</td>
  <td name="td4">47.54%</td>
  <td name="td5">Kd: 29–48 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/11820803/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 10-10 aptamer</td>
  <td name="td1">Guanosine triphosphate (GTP)</td>
  <td name="td2">5'GUGACGCGACUAGUUACGGAUGC
UCAACAGUAGCCAACACGAGUACUG
CUUCGGCAGUGGAACCAACGUAGUA
UGUUUAGCAUUCAUUCAGUUGGCGC
CUCCUAUAGUGAGUCGUAUUACAU3
'</td>
  <td name="td3">122</td>
  <td name="td4">50.48%</td>
  <td name="td5">Kd: 28 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Class I aptamer</td>
  <td name="td1">Guanosine triphosphate (GTP)</td>
  <td name="td2">5'GUGACGCGACUAGUUACGGACUU
UCCGaAGuGGUUGGGCUGCUUCGGC
AGuGuGAAAaCGGAGAGUUCAUUCA
GUUGGCGCCUCCUAUAGUGAGUCGU
AUUACAU3'</td>
  <td name="td3">105</td>
  <td name="td4">47.17%</td>
  <td name="td5">Kd: 60–300 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 10-59 aptamer</td>
  <td name="td1">Guanosine triphosphate (GTP)</td>
  <td name="td2">5'GUGACGCGACUAGUUACGGAGAU
AAGUUCCCAAGGCGGGUUGGAAGAG
AUAUCAUAGGAGCUUGUCUUCAUUC
AGUUGGCGCCUCCUAUAGUGAGUCG
UAUUACAU3'</td>
  <td name="td3">106</td>
  <td name="td4">46.46%</td>
  <td name="td5">Kd: 200 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 9-12 aptamer</td>
  <td name="td1">Guanosine triphosphate (GTP)</td>
  <td name="td2">5'GUGACGCGACUAGUUACGGAUCU
AGCAGUUCAGGUAACCACGUAAGAU
ACGGGUCUAGAUUCAUUCAGUUGGC
GCCUCCUAUAGUGAGUCGUAUUACA
U3'</td>
  <td name="td3">99</td>
  <td name="td4">48.15%</td>
  <td name="td5">Kd:  250 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 10-24 aptamer</td>
  <td name="td1">Guanosine triphosphate (GTP)</td>
  <td name="td2">5'GUGACGCGACUAGUUACGGAGGC
AUCUAUAUACUGCUUCGGCAGGGAA
CUCUACUAAGCACCGAUGUCUUCAU
UCAGUUGGCGCCUCCUAUAGUGAGU
CGUAUUACAU3'</td>
  <td name="td3">108</td>
  <td name="td4">48.06%</td>
  <td name="td5">Kd:  250 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 10-6 aptamer</td>
  <td name="td1">Guanosine triphosphate (GTP)</td>
  <td name="td2">5'GUGACGCGACUAGUUACGGAAAU
GAAGAUAGUCGGGACCACUUCCCUG
AGUCUGCUUCGGCAGUAACUCCAAG
GAGAAAGGUCGUCAUUUUCAUUCAG
UUGGCGCCUCCUAUAGUGAGUCGUA
UUACAU3'</td>
  <td name="td3">129</td>
  <td name="td4">51.39%</td>
  <td name="td5">Kd: 500 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C1 aptamer</td>
  <td name="td1">Mitochondria</td>
  <td name="td2">5'GGAAUUCUAAUACGACUCACUAU
AGGGACGCAGGGACUGUACCUUCUA
GGCUGGGUCAUGUGACUGUAGCGG3
'</td>
  <td name="td3">72</td>
  <td name="td4">54.17%</td>
  <td name="td5">Kd: 1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12024047/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C16 aptamer</td>
  <td name="td1">Mitochondria</td>
  <td name="td2">5'GGAAUUCUAAUACGACUCACUAU
AGGGACGCAGGGACUGUACGGUAAG
UCCCCGGGCAUGUGACUGUAGCGG3
'</td>
  <td name="td3">72</td>
  <td name="td4">47.22%</td>
  <td name="td5">Kd: 0.46 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12024047/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C20 aptamer</td>
  <td name="td1">Mitochondria</td>
  <td name="td2">5'GGAAUUCUAAUACGACUCACUAU
AGGGACGCAGGGACUGUAUGGUUUU
CUGGGGUUUAUGUGACUGUAGCGG3
'</td>
  <td name="td3">72</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 1.19 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12024047/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C32 aptamer</td>
  <td name="td1">Mitochondria</td>
  <td name="td2">5'GGAAUUCUAAUACGACUCACUAU
AGGGACGCAGGGACUGUACGGAUCA
GAGUCUCCUAUGUGACUGUAGCGG3
'</td>
  <td name="td3">72</td>
  <td name="td4">54.02%</td>
  <td name="td5">Kd: 0.1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12024047/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">P19 aptamer</td>
  <td name="td1">Rat neurotensin receptor NTS-1</td>
  <td name="td2">5'UAAUACGACUACUAUAGGGAGGA
CGAUGCGGACAGAUACGGAACUACA
GAGGUCAAUUACGGUGGCCACGCCA
GACGACUCGCCCGA3'</td>
  <td name="td3">87</td>
  <td name="td4">56.98%</td>
  <td name="td5">Kd: 0.37 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12054450/" target="_blank" style="color:#520049"><b>2002</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R1-1 aptamer</td>
  <td name="td1">Hepatitis C virus NS5B protein (HCV NS5B protein)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
CUCCUAACCUCUCCGCAUGNGCUGU
UACCUACACAGCUCAGCAUGCAUGA
GGCCCGGAUCCGGC3'</td>
  <td name="td3">86</td>
  <td name="td4">50.57%</td>
  <td name="td5">Kd: 100 ± 6 (1/s)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R20-43 aptamer</td>
  <td name="td1">Hepatitis C virus NS5B protein (HCV NS5B protein)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
UGUAGAGACUUUUCGAAAAGCGUGU
UCCCAAUGAGUCUAUGCAUGCAUGA
GGCCCGGAUCCGGC3'</td>
  <td name="td3">87</td>
  <td name="td4">57.47%</td>
  <td name="td5">Kd × 10e4: 1.0 ± 0.1 (1/s)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R20-15 aptamer</td>
  <td name="td1">Hepatitis C virus NS5B protein (HCV NS5B protein)</td>
  <td name="td2">5'GGGAGCUCAGAAUAAACGCUCAA
UGUAGGCUAGUACCGACCUGCGUGC
CUCGCUCCUUUUCAUGCAUGCAUGA
GGCCCGGAUCCGGC3'</td>
  <td name="td3">87</td>
  <td name="td4">62.50%</td>
  <td name="td5">Kd × 10e4: 100 ± 6 (1/s)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">11-1 aptamer</td>
  <td name="td1">Angiopoietin-2 (Ang2)</td>
  <td name="td2">5'GGGAGGACGAUGCGGACUAGCCU
CAUCAGCUCAUGUGCCCCUCCGCCU
GGAUCACCAGACGACUCGCUGAGGA
UCCGAGA3'</td>
  <td name="td3">80</td>
  <td name="td4">60.98%</td>
  <td name="td5">Kd: 3.1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12692304/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">11-1.41 aptamer</td>
  <td name="td1">Angiopoietin-2 (Ang2)</td>
  <td name="td2">5'GAGGACGAUGCGGACUAGCCUCA
UCAGCUCAUGUGCCCCUC3'</td>
  <td name="td3">41</td>
  <td name="td4">44.12%</td>
  <td name="td5">Kd: 2.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12692304/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">T705 aptamer</td>
  <td name="td1">Thrombin, Bovine</td>
  <td name="td2">5'GCAAUGGUACGGUACUUCCUUUG
GAAGAUAGCUGGAGAACUAACCAAA
AGUGCACGCUACUUUGCUAA3'</td>
  <td name="td3">68</td>
  <td name="td4">54.41%</td>
  <td name="td5">Kd: 164 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12557236/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">T710 aptamer</td>
  <td name="td1">Thrombin, Bovine</td>
  <td name="td2">5'GCAAUGGUACGGUACUUCCAAGU
GCGGGGGGGAGGUGGUGGUUCCAAA
AGUGCACGCUACUUUGCUAA3'</td>
  <td name="td3">68</td>
  <td name="td4">60.24%</td>
  <td name="td5">Kd: 240 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12557236/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">A30 aptamer</td>
  <td name="td1">Oligomeric state of the extracellular domains of human epidermal growth factor receptor-3 (HER3ECD)</td>
  <td name="td2">5'GGGAAUUCCGCGUGUGCCAGCGA
AAGUUGCGUAUGGGUCACAUCGCAG
GCACAUGUCAUCUGGGCGGUCCGUU
CGGGAUCCUC3'</td>
  <td name="td3">83</td>
  <td name="td4">53.41%</td>
  <td name="td5">Kd: 45 nM in hrg-unbound; 400 nM in hrg-bound</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12874383/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">#11 aptamer</td>
  <td name="td1">Mammalian translation initiation factor 4A (eIF4A)</td>
  <td name="td2">5'GGGAGACAAGAAUAAAACGCUCA
AACAUUGCAUCGACAGCUGCAAGGC
UCCCGCCGUACAAACCUUCGACAGG
AGGCUCACAACAGGC3'</td>
  <td name="td3">88</td>
  <td name="td4">53.41%</td>
  <td name="td5">Kd: 8 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">#1 aptamer</td>
  <td name="td1">Mammalian translation initiation factor 4A (eIF4A)</td>
  <td name="td2">5'GGGAGACAAGAAUAAAACGCUCA
ACAGGCGUUUAGCCUCUAAGUAACA
GGGGCCUCCCAUGAGCUUCGACAGG
AGGCUCACAACAGGC3'</td>
  <td name="td3">88</td>
  <td name="td4">56.82%</td>
  <td name="td5">Kd: 3 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">#20 aptamer</td>
  <td name="td1">Mammalian translation initiation factor 4A (eIF4A)</td>
  <td name="td2">5'GGGAGACAAGAAUAAAACGCUCA
AGGGGACCGCGCCCCACAUGUGAGU
GAGGCCGAAACGUAGAUUCGACAGG
AGGCUCACAACAGGC3'</td>
  <td name="td3">88</td>
  <td name="td4">46.15%</td>
  <td name="td5">Kd: 44 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">#30 aptamer</td>
  <td name="td1">Mammalian translation initiation factor 4A (eIF4A)</td>
  <td name="td2">5'GGGAGACAAGAAUAAAACGCUCA
AUGUGGAUGAUUUGUAUGAUCGCGC
AUACAAUUCGACAGGAGGCUCACAA
CAGGC3'</td>
  <td name="td3">78</td>
  <td name="td4">55.68%</td>
  <td name="td5">Kd: 1 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">no.21 aptamer</td>
  <td name="td1">Mammalian translation initiation factor 4A (eIF4A)</td>
  <td name="td2">5'GGGAGACAAGAAUAAAACGCUCA
AGGGGACCGCGCCCCACAUGUGAGU
GAGGCCGAAACAUAGAUUCGACAGG
AGGCUCACAACAGGC3'</td>
  <td name="td3">88</td>
  <td name="td4">42.37%</td>
  <td name="td5">Kd: 27 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">pRNAwt aptamer</td>
  <td name="td1">ATP (Adenosine triphosphate)</td>
  <td name="td2">5'UCAAUGGUACGGUACUUCCAUUG
UCAUGUGUAUGUUGGGGAUUAAACC
CUGAUUGAGUUCAGconCCCACAUA
CUUUGUUGAUUGGUUGUCAAUCAUG
GCAAAAGUGCACGCUACUUUGA3'</td>
  <td name="td3">118</td>
  <td name="td4">46.72%</td>
  <td name="td5">Kd: 1.3 ± 0.8 mM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12444088/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptRNA1 aptamer</td>
  <td name="td1">ATP (Adenosine triphosphate)</td>
  <td name="td2">5'UCAAUGGUACGGUACUUCCAUUG
UCAUGUGUAGGGUUGGGAAGAAACU
GUGGCACUUCGGUGCCAGconCAAC
CCUACUUUGUUGAUUGGUUGUCAAU
CAUGGCAAAAGUGCACGCUACUUUG
A3'</td>
  <td name="td3">122</td>
  <td name="td4">71.74%</td>
  <td name="td5">Kd: 0.1 ± 0.06 mM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12444088/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">tMG RNA aptamer</td>
  <td name="td1">MAb198 antibody, Rat</td>
  <td name="td2">5'GGGCCGGAGGUUAGCUUGCCCAU
GGCAAGCAGGGCGCCACGGACCC3'</td>
  <td name="td3">46</td>
  <td name="td4">57.47%</td>
  <td name="td5">Kd: 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/12885412/" target="_blank" style="color:#520049"><b>2003</b></a></td>
</tr>
    
 <tr>
  <td name="td0">M1 aptamer</td>
  <td name="td1">4,4′-methylenedianiline (MDA)</td>
  <td name="td2">5'GCCUGUUGUGAGCCUCCUGUCGA
ACUGCGAUCAGCGGUAAAUUUCCGC
GCAGCCUCCACGCCGCUUGAGCGUU
UAUUCUUGUCUCCC3'</td>
  <td name="td3">87</td>
  <td name="td4">55.17%</td>
  <td name="td5">Kd: 0.45 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/14706642/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">M3 aptamer</td>
  <td name="td1">4,4′-methylenedianiline (MDA)</td>
  <td name="td2">5'GCCUGUUGUGAGCCUCCUGUCGA
ACAGAGGCAGUACUCAUCAACCCGA
GCCUUCCGUCCCUGAGUUGAGCGUU
UAUUCUUGUCUCCC3'</td>
  <td name="td3">87</td>
  <td name="td4">55.17%</td>
  <td name="td5">Kd: 2 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/14706642/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">M22 aptamer</td>
  <td name="td1">4,4′-methylenedianiline (MDA)</td>
  <td name="td2">5'GCCUGUUGUGAGCCUCCUGUCGA
AUGGGAGGAGUGCUGCUCUCCAGGC
ACUCUUGUUGCUCGGAUUGAGCGUU
UAUUCUUGUCUCCC3'</td>
  <td name="td3">87</td>
  <td name="td4">63.04%</td>
  <td name="td5">Kd: 12 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/14706642/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA aptamer #1 aptamer</td>
  <td name="td1">Nuclear factor of activated T cells DNA binding domain (NFAT DBD)</td>
  <td name="td2">5'GGGAGAGCGGAAGCGUGCUGGGC
CGAUAUGAAGGAGUGGAGAGGGUGG
CAGCAUGGUCCGGAUCCAUAACCCA
GAGGUCGAUGGAUCCCCCC3'</td>
  <td name="td3">92</td>
  <td name="td4">63.04%</td>
  <td name="td5">Kd: 11.1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15359119/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA aptamer #2 aptamer</td>
  <td name="td1">Nuclear factor of activated T cells DNA binding domain (NFAT DBD)</td>
  <td name="td2">5'GGGAGAGCGGAAGCGUGCUGGGC
CGAGGGAGGCGAUAUGAAGGUGUAG
AGAGGCCUCCUGGACACAUAACCCA
GAGGUCGAUGGAUCCCCCC3'</td>
  <td name="td3">92</td>
  <td name="td4">56.20%</td>
  <td name="td5">Kd: 120 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15359119/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F1-1 aptamer</td>
  <td name="td1">C-terminal ribonuclease domain of colicin E3 (CRD of colicin E3)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
ACUGUCCUCCCUUCAGAGAGCGCGG
GACCCUUAACUUGGGGCCCACGAAC
AGCUUCAGUUCCGUCUCGGCGUCAU
AUGUGCGUCUACAUGGAUCCUCA3‘</td>
  <td name="td3">121</td>
  <td name="td4">47.06%</td>
  <td name="td5">Kd: 2±11 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15023071/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F2-1 aptamer</td>
  <td name="td1">C-terminal ribonuclease domain of colicin E3 (CRD of colicin E3)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
UCCCUGGCCCAAGAUCCUAAUAAAG
UUUUUUCGGACCGGAGCGAAACCAC
UAUCCUCUUAAGCAAUCUGUCAUAU
GUGCGUCUACAUGGAUCCUCA3‘</td>
  <td name="td3">119</td>
  <td name="td4">50.83%</td>
  <td name="td5">Kd: 14±2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15023071/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F3-1 aptamer</td>
  <td name="td1">C-terminal ribonuclease domain of colicin E3 (CRD of colicin E3)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
GUACAACACAUCAUUACGGCUGCUA
UUGGCUCCAAGCGUCUUUCUCCCUG
GUCAAUAGUCCAGCCACCACGCAUA
UGUGCGUCUACAUGGAUCCUCA3‘</td>
  <td name="td3">120</td>
  <td name="td4">51.26%</td>
  <td name="td5">Kd: 4±15 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15023071/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F4-1 aptamer</td>
  <td name="td1">C-terminal ribonuclease domain of colicin E3 (CRD of colicin E3)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
GACAUCUGUAAGUAAGAUUCUAUCU
GCAAAGCGGUUAGGAGGGCUCGGAC
UCUGAUUGCCUCCCCGCACCCAUAU
GUGCGUCUACAUGGAUCCUCA3‘</td>
  <td name="td3">119</td>
  <td name="td4">52.10%</td>
  <td name="td5">Kd: 7±1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15023071/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F4-2 aptamer</td>
  <td name="td1">C-terminal ribonuclease domain of colicin E3 (CRD of colicin E3)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
GACAUCUGUAAGUAAGAUUCUAUCU
GCAAAGCGGUUAGGGGGGCUCGGAC
UCUGAUUGCCUCCCCGCACCCAUAU
GUGCGUCUACAUGGAUCCUCA3‘</td>
  <td name="td3">119</td>
  <td name="td4">58.68%</td>
  <td name="td5">Kd: 294±170 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15023071/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F5-1 aptamer</td>
  <td name="td1">C-terminal ribonuclease domain of colicin E3 (CRD of colicin E3)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCUU
GUCAGCUGCUCGCGGGAUCGAUCCA
UUCGGUGGCCAUGCUCCGGAAGACG
GGCCGGCUUCGCAAGACUCAGGCAU
AUGUGCGUCUACAUGGAUCCUCA3‘</td>
  <td name="td3">121</td>
  <td name="td4">56.52%</td>
  <td name="td5">Kd: 10±1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15023071/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">apt1 aptamer</td>
  <td name="td1">Receptor activator of NF-kappaB (RANK), Human</td>
  <td name="td2">5'ACACAAUGGACGGAUUCGUAUGG
GUGGGAUCGGGAAGGGCUACGAACA
CCGUAACGGCCGACAUGAGAG3'</td>
  <td name="td3">69</td>
  <td name="td4">48.57%</td>
  <td name="td5">Kd: 0.33 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15562003/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">apt2 aptamer</td>
  <td name="td1">Receptor activator of NF-kappaB (RANK), Human</td>
  <td name="td2">5'ACACAAUGGACGAUAUGGUAUUG
AGGUGGGAAGGGGAUUGGGAUAAUU
GCCAUAACGGCCGACAUGAGAG3'</td>
  <td name="td3">70</td>
  <td name="td4">53.62%</td>
  <td name="td5">Kd: 1.8 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15562003/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">apt3 aptamer</td>
  <td name="td1">Receptor activator of NF-kappaB (RANK), Human</td>
  <td name="td2">5'ACACAAUGGACGAUAGUGGUUGG
GAUUGGGUGGGCGCACAAGUUGUUC
CGUUAACGGCCGACAUGAGAG3'</td>
  <td name="td3">69</td>
  <td name="td4">53.52%</td>
  <td name="td5">Kd: 5.8 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15562003/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">3.1 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACCCCGGGU
UCUGUAUGAUCCGACCGGUCAGAUA
AGACCACAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">56.34%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">7.5 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGCAUCGU
UUGCGUGGCGUGUCCGGGCGCCGAU
UCGUAAAAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">49.30%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">12 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACUAGGCGG
AUUGUUUCGAUUCUUUGCCUUGUCC
CUAGUGCAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">45.07%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">14.8 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGUAUAUA
CGGAUUAGGUUGUAGCUCAGACCAG
UAAUGUCAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">53.52%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">16.3 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGUGCUAG
AUGCUACGAGUGGUCUCCUCACGUA
GAAGGGGAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">49.30%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">18.1 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAGGUCCCAC
AUAGGUUGGUCUUGUUGUAUGGGCU
GUUUGCAAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">47.89%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">1 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAGUGUUUUG
GGAGAGAAAAGGGGGAGCCUUUACU
UUGUUGGAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">43.66%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">2 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAGACGAUGU
UAUCAGGGAGUUGGGAUCAUAUAGU
CUUACAUAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">47.89%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">4 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGCAAGAG
CCGCCCUAAUGGUUCAAUGGUAACU
GUAUAUGAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">40.85%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">6 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAGACUUCUU
GUGCCAUUAUGAAUUAUUGCUAAUC
CUCUUGAAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">49.30%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">8.6 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAAGGACGUA
CUUGGAAAAGAGGCGCGAAGAACCU
GGUAUGUAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">49.30%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">9 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAUAGGACGU
ACUUGGAAAAGAGGCGCGAAGAACC
UGGUAUGAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">50.70%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">10 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAUGGCCACC
UUGCCACUCUUCCUUGCAUAUUUUA
CUCCCGCAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">52.11%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">11.7 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACAAGCCGA
GGGGGAGUAUCUGAUGACAAUUCGG
AGCUCCAAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">52.11%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">13.2 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAUCAUGGUG
UGUGAGUUAGCUCACGUGCCGUUUC
GAAGGCGAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">52.11%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">17.9 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACAUGGGCU
AGACCGGCAUAAAACUGCUGUAGUU
GCACGCCAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">45.07%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">20.4 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGUUGUAG
UAGUGGCUUGGGCAUAACUCAGUUA
AACACUAAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">47.89%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">15 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUAGACCGCGG
AAAAGGAAGGAAUUAGAUACAACGG
AGAAGUGAAGAAGACUCGCAAGA3'</td>
  <td name="td3">71</td>
  <td name="td4">60.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">T1.7.5 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGCAUCGU
UUGCGUGGCGUGUCCGGGCGCAAGA
AGACUCGCAAGA3'</td>
  <td name="td3">60</td>
  <td name="td4">46.77%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">T4.14.8 aptamer</td>
  <td name="td1">Tumor necrosis factor alpha (hTNFα), Human</td>
  <td name="td2">5'GGGAGGACGAUGUUACGUAUAUA
CGGAUUAGGUUGUAGCUCAGACCAA
GAAGACUCGCAAGA3'</td>
  <td name="td3">62</td>
  <td name="td4">49.38%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">K61 aptamer</td>
  <td name="td1">ADP-ribosylation factors (ARF) nucleotide-binding site opener (ARNO)/cytohesin-2</td>
  <td name="td2">5'GGGAGAGACAAGCUUGGGUCGCG
UUUUGCUAUUGAUUUCUUUUAACCU
GGCCUGUUUGGGCCUCUUGCUCUUC
CUAGGAGU3'</td>
  <td name="td3">81</td>
  <td name="td4">61.00%</td>
  <td name="td5">Kd: 115 ± 3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15277685/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">#10 aptamer</td>
  <td name="td1">T-Cell Factor-1 (TCF-1) protein</td>
  <td name="td2">5'GGGGAGCUCGGUACCGGUGCGAU
CCCCUGUUUACAUUGCAUGCUAGGA
CGACGCGCCCGAGCGGGUACCCAUU
GUGUCGUCGGAAGCUUUGCAGAGGA
UC3'</td>
  <td name="td3">100</td>
  <td name="td4">60.24%</td>
  <td name="td5">Kd: 100~500 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15055546/" target="_blank" style="color:#520049"><b>2004</b></a></td>
</tr>
    
 <tr>
  <td name="td0">A11 aptamer</td>
  <td name="td1">RPKPQQFFGLM-NH2 (peptide, Substance P )</td>
  <td name="td2">5'GGAGCUUAGACAACAGCAGCGUG
CAGGUGGGUAAAGGGGUGUGAUCGA
GGGUCGAGAGGCACGCUCAGGUGAG
UCGGUUCCAC'3</td>
  <td name="td3">83</td>
  <td name="td4">68.18%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15745995/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SUP-A-004 aptamer</td>
  <td name="td1">RPKPQQFFGLM-NH2 (peptide, Substance P )</td>
  <td name="td2">5'GGCGCAGGUGGGUAAAGGGGUGU
GAUCGAGGGUCGAGAGGCGCC3'</td>
  <td name="td3">44</td>
  <td name="td4">51.49%</td>
  <td name="td5">Kd: 40 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15745995/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">s23 aptamer</td>
  <td name="td1">TFKBP*3R-2G (cell surface protein)</td>
  <td name="td2">5'GGGUUCGAAUGCAAGUCUGGUGA
GUGUUGGGAGGGCAGUGACUUGCUU
CGUAGUGUAAACUGACGUGGCGGUG
UUACUUUACUGUUACGCUAGGUUAC
GGG3'</td>
  <td name="td3">101</td>
  <td name="td4">55.56%</td>
  <td name="td5">Kd: 4.3 ± 0.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16199752/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">T1 s23 aptamer</td>
  <td name="td1">TFKBP*3R-2G (cell surface protein)</td>
  <td name="td2">5'CGAAUGCAAGUCUGGUGAGUGUU
GGGAGGGCAGUGACUUGCUUCG3'</td>
  <td name="td3">45</td>
  <td name="td4">58.33%</td>
  <td name="td5">Kd: 2.8 ± 0.2  nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16199752/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">T2 s23 aptamer</td>
  <td name="td1">TFKBP*3R-2G (cell surface protein)</td>
  <td name="td2">5'GCAAGUCUGGUGAGUGUUGGGAG
GGCAGUGACUUGC3'</td>
  <td name="td3">36</td>
  <td name="td4">54.55%</td>
  <td name="td5">Kd:16.1 ± 3.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16199752/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C44 aptamer</td>
  <td name="td1">IFN-gamma-inducible (IFN-γ-Inducible) mCXCL10 Chemokine (also known as IP-10 in humans and CRG-2 in mice)</td>
  <td name="td2">5'UAAUACGACUCACUAUAGGGAGG
ACGAUGCGGCAUGCGUCUGACCUAC
GUGCCAAGCAUUUGUGUAACCCGUC
AGACGACUCGCCCGA3'</td>
  <td name="td3">88</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 3.5 nM, IC50 = 40.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15938634/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C44-38 aptamer</td>
  <td name="td1">IFN-gamma-inducible (IFN-γ-Inducible) mCXCL10 Chemokine (also known as IP-10 in humans and CRG-2 in mice)</td>
  <td name="td2">5'UCUGACCUACGUGCCAAGCAUUU
GUGUAACCCGUCAGA3'</td>
  <td name="td3">38</td>
  <td name="td4">52.87%</td>
  <td name="td5">IC50 = 29.3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15938634/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">P31 aptamer</td>
  <td name="td1">IFN-gamma-inducible (IFN-γ-Inducible) mCXCL10 Chemokine (also known as IP-10 in humans and CRG-2 in mice)</td>
  <td name="td2">5'UAAUACGACUCACUAUAGGGAGG
ACGAUGCGGAGUUUCUUCUGAGGUC
UGAACCUUUCGAAAGCUGGCGCUCA
GACGACUCGCCCGA3'</td>
  <td name="td3">87</td>
  <td name="td4">51.14%</td>
  <td name="td5">Kd: 1.53 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15938634/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">P12 aptamer</td>
  <td name="td1">IFN-gamma-inducible (IFN-γ-Inducible) mCXCL10 Chemokine (also known as IP-10 in humans and CRG-2 in mice)</td>
  <td name="td2">5'UAAUACGACUCACUAUAGGGAGG
ACGAUGCGGACUGAACCUAAUUUGA
AAUUGGCUGGCGCGCAUAUUCCGUC
AGACGACUCGCCCGA3'</td>
  <td name="td3">88</td>
  <td name="td4">42.50%</td>
  <td name="td5">Kd: 1.76 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15938634/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C17 aptamer</td>
  <td name="td1">Herpes simplex virus-1 (HSV-1) US11</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGCAAUCCUGUAUUGAACUUCUC
ACUAAAACUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">45.68%</td>
  <td name="td5">Kd: 70 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16246910/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R9-43 aptamer</td>
  <td name="td1">Carbon storage regulation protein A, Escherichia coli (CsrA of E. coli)</td>
  <td name="td2">5'ACCGAGUCCAGAAGCUUGUAGUA
CACAAGGAUGUGCCAUGCCUAGAUG
GAGUUGAAUUCUCCCUAUAGUGAGU
CGUAUUAC3'</td>
  <td name="td3">81</td>
  <td name="td4">52.33%</td>
  <td name="td5">Kd: 7.1 ± 0.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16131593/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 1 aptamer</td>
  <td name="td1">Mammalian eukaryotic translation initiation factor 4F (eIF4E)</td>
  <td name="td2">5'GGGAGACAAGAAUAAACGCUCAA
UGUUCAACCAGAGUGAAACCACUAA
CGGGUCAGAGCCCCUUCGACAGGAG
GCUCACAACAGGC3'</td>
  <td name="td3">86</td>
  <td name="td4">55.17%</td>
  <td name="td5">Kd: 11.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15611299/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 2 aptamer</td>
  <td name="td1">Mammalian eukaryotic translation initiation factor 4F (eIF4E)</td>
  <td name="td2">5'GGGAGACAAGAAUAAACGCUCAA
GCCAGAGCAACAACCUUCCGAGCCG
CGGGAUAAAACCGAGUUCGACAGGA
GGCUCACAACAGGC3'</td>
  <td name="td3">87</td>
  <td name="td4">51.14%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15611299/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">S-PS8.4 aptamer</td>
  <td name="td1">Type IVB pili of Salmonella enterica (S. enterica) serovar Typhi (pre-PilS)</td>
  <td name="td2">5'GCGGAAUUCUAAUACGACUCACU
AUAGGGAACAGUCCGAGCCUCACUG
UUAUCCGAUAGCAGCGCGGGAUGAG
GGUCAAUGCGUCAUA3'</td>
  <td name="td3">88</td>
  <td name="td4">54.05%</td>
  <td name="td5">Kd: 8.56 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16189080/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">clone A (wild type) aptamer</td>
  <td name="td1">Hemagglutinin influenza virus (HA influenza virus)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGGGU
UAGCAGUCGGCAUGCGGUACAGACA
GACCUUUCCUCUCUCCUUCCUCUUC
U3'</td>
  <td name="td3">74</td>
  <td name="td4">48.65%</td>
  <td name="td5">Kd: 188 ± 36 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15913532/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">clone B aptamer</td>
  <td name="td1">Hemagglutinin influenza virus (HA influenza virus)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGGGU
UAGCGGUCGUCUUAAGUAGUUUUUG
GUCCUUUCCUCUCUCCUUCCUCUUC
U3'</td>
  <td name="td3">74</td>
  <td name="td4">48.00%</td>
  <td name="td5">Kd: 115 ± 23 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/15913532/" target="_blank" style="color:#520049"><b>2005</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F38 aptamer</td>
  <td name="td1">RNA-dependent RNA polymerase (3Dpol)</td>
  <td name="td2">5'GGGAAGGGAUCCACAUCUACAAA
UUCCUUCAUAAUAAACCCGUCCACG
CCCUUCGAAGCAGUUCAGACGUCAC
UU3'</td>
  <td name="td3">75</td>
  <td name="td4">41.25%</td>
  <td name="td5">Kd: 460 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17018573/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F47 aptamer</td>
  <td name="td1">RNA-dependent RNA polymerase (3Dpol)</td>
  <td name="td2">5'GGGAAGGGAUCCAAUCUACAAAU
UCGUUAACAGAAAACCUCAGUUGCU
GGGUUGUUUUCACUGCAAACUUGAC
AAAGCUA3'</td>
  <td name="td3">80</td>
  <td name="td4">49.37%</td>
  <td name="td5">Kd: 375 ± 46 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17018573/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F52 aptamer</td>
  <td name="td1">RNA-dependent RNA polymerase (3Dpol)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCCUUACCCGUGAACCGCAGUUGC
UGAGUUGUUCGAAGCAGUUCAGACG
UCACUU3'</td>
  <td name="td3">79</td>
  <td name="td4">46.88%</td>
  <td name="td5">Kd: 625 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17018573/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F47tr aptamer</td>
  <td name="td1">RNA-dependent RNA polymerase (3Dpol)</td>
  <td name="td2">5'GGGUUAACAGAAAACCUCAGUUG
CUGGGUUGU3'</td>
  <td name="td3">32</td>
  <td name="td4">47.50%</td>
  <td name="td5">Kd: 325</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17018573/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 32 aptamer</td>
  <td name="td1">DNA polymerase beta (polβ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGGUUGGGUUGUCGUAGAUAGAG
CGCUUCAAUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">47.50%</td>
  <td name="td5">Kd: 290 ± 80 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 32 aptamer</td>
  <td name="td1">DNA polymerase kappa (polκ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGGUUGGGUUGUCGUAGAUAGAG
CGCUUCAAUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">46.25%</td>
  <td name="td5">Kd: 410 ± 50 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 25 aptamer</td>
  <td name="td1">DNA polymerase beta (polβ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGGUUGGGUUGUCGUAGAUAUAG
CUUAGCCAUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">46.25%</td>
  <td name="td5">Kd: 430 ± 130 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 25 aptamer</td>
  <td name="td1">DNA polymerase kappa (polκ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGGUUGGGUUGUCGUAGAUAUAG
CUUAGCCAUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">48.75%</td>
  <td name="td5">Kd: 500 ± 100 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 53 aptamer</td>
  <td name="td1">DNA polymerase beta (polβ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGGGUGGGUUGUCGUGGAUGACG
AUUAUCAGUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">50.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 45 aptamer</td>
  <td name="td1">DNA polymerase beta (polβ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUUCGGGGGGGUUGUUCGUGGAAAA
UGCUUGCGUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 490 ± 70 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 45 aptamer</td>
  <td name="td1">DNA polymerase kappa (polκ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUUCGGGGGGGUUGUUCGUGGAAAA
UGCUUGCGUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">52.50%</td>
  <td name="td5">Kd: 750  ± 160 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer 31 aptamer</td>
  <td name="td1">DNA polymerase beta (polβ)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCGUUAACUGACCCAGGGAAGUGC
CACCCCCCUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">61.25%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RM312 aptamer</td>
  <td name="td1">RecombiNAt ovine PrP (Prion protein) of the susceptible-specific (V136R154Q171) or resistant-specific (A136R154R171) alleles</td>
  <td name="td2">5'GAGGAUCCGCCGAGUAACAGACG
UCGGGGAUUGGCAAACCCCGUUUCC
UUGAGCGACCCCCUUGAGGCUCGAA
UUCGCCC3'</td>
  <td name="td3">80</td>
  <td name="td4">58.49%</td>
  <td name="td5">Kd: 28.9 ± 0.8 nM (VRQ), Kd: 14.6 ± 1.3 nM (ARR)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RM312c (truncated RM312) aptamer</td>
  <td name="td1">RecombiNAt ovine PrP (Prion protein) of the susceptible-specific (V136R154Q171) or resistant-specific (A136R154R171) alleles</td>
  <td name="td2">5'GAGGAUCCGCCGAGUAACAGACG
UCGGGGAUUGGCAAACCCCGUUUCC
UUGAG3'</td>
  <td name="td3">53</td>
  <td name="td4">62.50%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RM312e (truncated RM312) aptamer</td>
  <td name="td1">RecombiNAt ovine PrP (Prion protein) of the susceptible-specific (V136R154Q171) or resistant-specific (A136R154R171) alleles</td>
  <td name="td2">5'GGCAAACCCCGUUUCCUUGAGCG
ACCCCCUUGAGGCUCGAAUUCGCCC
3'</td>
  <td name="td3">48</td>
  <td name="td4">56.25%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RM120 aptamer</td>
  <td name="td1">RecombiNAt ovine PrP (Prion protein) of the susceptible-specific (V136R154Q171) or resistant-specific (A136R154R171) alleles</td>
  <td name="td2">5'GAGGAUCCGCCGAGUAACAGAGU
AGCAACAGAAUUGGAUCCCGACCAC
UAAGAACCCGGCCUUGAGGCUCGAA
UUCGCCC3'</td>
  <td name="td3">80</td>
  <td name="td4">52.50%</td>
  <td name="td5">Kd: 72.6 ± 3.7 nM (VRQ), Kd: 23.2 ± 0.5 nM (ARR)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RM207 aptamer</td>
  <td name="td1">RecombiNAt ovine PrP (Prion protein) of the susceptible-specific (V136R154Q171)</td>
  <td name="td2">5'GAGGAUCCGCCGAGUAACAGUGC
CAUGAGUGAAAUAAAACCAUCCGGA
ACUAAGACUGCGCUUGAGGCUCGAA
UUCGCCC3'</td>
  <td name="td3">80</td>
  <td name="td4">60.00%</td>
  <td name="td5">Kd: 55.3 ± 1.4 nM (VRQ)</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RM14 aptamer</td>
  <td name="td1">RecombiNAt ovine PrP (prion protein) of the susceptible-specific (V136R154Q171) or resistant-specific (A136R154R171) alleles</td>
  <td name="td2">5'GAGGAUCCGCCGAGUAACAGCGU
GCAGGUACUAGCUCCACCCCGAGGG
GGCACAUCAUUUCUUGAGGCUCGAA
UUCGCCC3'</td>
  <td name="td3">80</td>
  <td name="td4">59.21%</td>
  <td name="td5">Kd: 20 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R9-2 aptamer</td>
  <td name="td1">Caenorhabditis elegans Bcl-2 homolog CED-9</td>
  <td name="td2">5'AGGGAGGACGAUGCGGGGUGCUU
CGAGCGUAGGAAGAAAGCCGGGGGC
UGCAGAUAAUGUAUAGCCAGACGAC
GGA3'</td>
  <td name="td3">76</td>
  <td name="td4">55.26%</td>
  <td name="td5">Kd: ~4nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16467303/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R9-7 aptamer</td>
  <td name="td1">Caenorhabditis elegans Bcl-2 homolog CED-9</td>
  <td name="td2">5'AGGGAGGACGAUGCGGGAUGGAC
GCUUAUCCGCAUAGAGGUUUACUAC
UUCGGAGACUGCCGAUACAGACGAC
GGA3'</td>
  <td name="td3">76</td>
  <td name="td4">60.18%</td>
  <td name="td5">Kd: ~16 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16467303/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">clone 5 aptamer</td>
  <td name="td1">Bovine factor IX</td>
  <td name="td2">5'GGGAGCUCAGCCUUCACUGC-CU
ACGCGGGCGUUUACGUAACGGCUUA
UGGGGAGCUGAGCGCUUGACCGUGG
UAGUGCUAAGCAGUAAACGAG-GGC
ACCACGGUCGGAUCCAC3'</td>
  <td name="td3">113</td>
  <td name="td4">64.04%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17030508/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Class A-20 aptamer</td>
  <td name="td1">Influenza B virus hemagglutinin (HA) (B/Johannesburg/05/1999), Human</td>
  <td name="td2">5'GGGAGCUCAGCCUUCACUGCACU
CCGGCUGGUGGACGCGGUACGAGCA
AUUUGUACCGGAUGGAUGUUCGGGC
AGCGGUGUGGCAGGGAUGAGCGGCA
CCACGGUCGGAUCCAC3'</td>
  <td name="td3">114</td>
  <td name="td4">55.56%</td>
  <td name="td5">Kd: 44 ± 6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16751591/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TH14 aptamer</td>
  <td name="td1">Cytoplasmic tail of BACE (B1-CT)</td>
  <td name="td2">5'GGGAUAGGAUCCACAUCUACGUA
UUACGCAACGCCGGGCCACUACGCG
AAUGGCAAGCCCGUCGACUUCACUG
CAGACUUGACGAAGCUU3' </td>
  <td name="td3">90</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 280 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16888322/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">S10 aptamer</td>
  <td name="td1">Cytoplasmic tail of BACE (B1-CT)</td>
  <td name="td2">5'GGGAUAGGAUCCACAUCUACGUA
UUAGUACACGUCGGCCACCUACGCG
AAGUGGAAGCCUCAUUUGUUCACUG
CAGACUUGACGAAGCUU3'</td>
  <td name="td3">90</td>
  <td name="td4">53.33%</td>
  <td name="td5">Kd: 360 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16888322/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">P30-10-16 aptamer</td>
  <td name="td1">Haemagglutinin (HA) region of the target strain A/Panama/2007/1999(H3N2)</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGGGU
UAAGCAGUCGGCAUGCGGUACAGAC
AGACCUUUCCUCUCUCCUUCCUCUU
CU3'</td>
  <td name="td3">75</td>
  <td name="td4">55.79%</td>
  <td name="td5">Kd: 188 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16476969/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">A07 aptamer</td>
  <td name="td1">RecombiNAt transforming growth factor-beta type III receptor displayed on cell surface</td>
  <td name="td2">5'GGGCCAGGCAGCGAGAGAUAAGC
AGAAGAAGUAUGUGACCAUGCUCCA
GAGAGCAACUUCACAUGCGUAGCCA
AACCGACCACACGCGUCCGAGA3'</td>
  <td name="td3">95</td>
  <td name="td4">60.34%</td>
  <td name="td5">Kd: 2.47 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/16540230/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">FC5 aptamer</td>
  <td name="td1">Coedine</td>
  <td name="td2">5'GGGACAGGGCUAGCAGUAGGAUU
GGGUGAGGGGAUGUGCUGUGGAGGC
AAAGCUUCCG3'</td>
  <td name="td3">58</td>
  <td name="td4">57.63%</td>
  <td name="td5">Kd: 4.00 ± 0.13 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17038331/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">FC45 aptamer</td>
  <td name="td1">Coedine</td>
  <td name="td2">5'GGGACAGGGCUAGCUUAGUGCUA
UGUGAGAAAAGGGUGUGGGGGGAGG
CAAAGCUUCCG3'</td>
  <td name="td3">59</td>
  <td name="td4">56.79%</td>
  <td name="td5">Kd: 2.50 ± 0.06 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17038331/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">pUC19 aptamer</td>
  <td name="td1">S37A-β-catenin, Human</td>
  <td name="td2">5'GGACGCGUGGUACCAGGCCGAUC
UAUGGACGCUAUAGGCACACCGGAU
ACUUUAACGAUUGGCUAAGCUUCCG
CGGGGAUC3'</td>
  <td name="td3">81</td>
  <td name="td4">48.60%</td>
  <td name="td5">Kd: ~5.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17079480/" target="_blank" style="color:#520049"><b>2006</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Aptamer #25 aptamer</td>
  <td name="td1">Alpha-Amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA) (α-Amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid) receptors</td>
  <td name="td2">5'ACCGAGUCCAGAAGCUUGUAGUA
CUCGGCGAACUACCUAACCCCCCAC
AAUUGUAUUAUCGCCCGCCUAGAUG
GCAGUUGAAUUCUCCCUAUAGUGAG
UCGUAUUAC3'</td>
  <td name="td3">107</td>
  <td name="td4">64.95%</td>
  <td name="td5">Kd: 37 ± 5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17588619/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ApT4-A aptamer</td>
  <td name="td1">Thyroxine (T4)</td>
  <td name="td2">5'GAAUUCGUCGACGGAUCCGCAGU
GCGUCUUGGGUUGUGAGCUCCCGGC
UCGCAUUGUGAGGUGGAGGGGGACG
UGCUGCAGGUCGACGCAUGCGCCG3
'</td>
  <td name="td3">97</td>
  <td name="td4">60.49%</td>
  <td name="td5">Kd: 50±10 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17163839/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer-2 aptamer</td>
  <td name="td1">Biased conformation(s) of calsenilin</td>
  <td name="td2">5'GGGACGCGUGGUACCGACGGAGG
CUUGUUUAUGUAGGGAUGUAAGGGG
AUGGGCAAUGUGGCGACAGCUUCCG
CGGGGAUC3'</td>
  <td name="td3">81</td>
  <td name="td4">60.49%</td>
  <td name="td5">Kd: 43 nM for Ca2+ bound, 79 nM for Ca2+ unbound</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17904852/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer-12 aptamer</td>
  <td name="td1">Biased conformation(s) of calsenilin</td>
  <td name="td2">5'GGGACGCGUGGUACCAAAGAGGC
UGCGCGGAAGUGAGGGUGUUGGUUA
CGAAGGUUGGUGUGUGAAGCUUCCG
CGGGGAUC3'</td>
  <td name="td3">81</td>
  <td name="td4">56.10%</td>
  <td name="td5">Kd: 190 nM for Ca2+ bound</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17904852/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">II-1 aptamer</td>
  <td name="td1">Release factor 1, Escherichia coli (E. Coli)</td>
  <td name="td2">5'GGACCGAGAAGYYACCCAGGAUU
GCGUGUUAAGGCGCUCGGCUCGAUA
UUUAUGCUGGUCAUGGUGGACGCAC
AUCGCAGCAAC3'</td>
  <td name="td3">82</td>
  <td name="td4">55.91%</td>
  <td name="td5">Kd: 30 ± 6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17188871/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">M-2 aptamer</td>
  <td name="td1">Amyloid-like fibrils formed in vitro from monomeric beta-2-microglobulin (β2m)</td>
  <td name="td2">5'GGGCCAAGCUUGCAUGCCUGCAG
UUGGUUACGCGUACAGUGAAACUCG
GAAAGUUGAAGGGCCAAAUGGGAAC
GGUACCGAGCUCAGGUUCCC3'</td>
  <td name="td3">93</td>
  <td name="td4">49.51%</td>
  <td name="td5">Kd: 1.15E-08 M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17878167/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">WL-2 aptamer</td>
  <td name="td1">Amyloid-like fibrils formed in vitro from monomeric beta-2-microglobulin (β2m)</td>
  <td name="td2">5'GGGCCAAGCUUGCAUGCCUGCAG
AAAAAUAAAGUGUGUACACUAAAUU
GCUAGCCCCCGGAAAGAAGGUCAAC
AAAAGUCAGUGGUACCGAGCUCAGG
UUCCC3'</td>
  <td name="td3">103</td>
  <td name="td4">60.40%</td>
  <td name="td5">Kd: 7.48E-09 M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17878167/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">LS-5 aptamer</td>
  <td name="td1">Amyloid-like fibrils formed in vitro from monomeric beta-2-microglobulin (β2m)</td>
  <td name="td2">5'GGGCCAAGCUUGCAUGCCUGCAG
GCAAACGGGGGCGUUUCGGCGGAGG
AGUGGGAAGAAAAACGAGAGAAGAG
UUGGAACGGGUACCGAGCUCAGGUU
CCC3'</td>
  <td name="td3">101</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd: 2.21E-08 M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17878167/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">AN58 aptamer</td>
  <td name="td1">RecombiNAt GluR2Qflip AMPA receptor transiently expressed in HEK-293 (human embryonic kidney) cells</td>
  <td name="td2">5'GGGCGAAUUCAACUGCCAUCUAG
GCAGUAACCAGGAGUUAGUAGGACA
AGUUUCGUCC3'</td>
  <td name="td3">58</td>
  <td name="td4">57.89%</td>
  <td name="td5">Kd: 0.419 ± 0.221 nM & IC50: 121 ± 7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/17929944/" target="_blank" style="color:#520049"><b>2007</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C13 aptamer</td>
  <td name="td1">G-protein-coupled receptor kinase 2 (GRK2)</td>
  <td name="td2">5'CUGCAGUUCGGGUAGCACAGACC
AUACGGGAGAGAAACUUGUGCAACC
CGGGGCUAC3'</td>
  <td name="td3">57</td>
  <td name="td4">58.82%</td>
  <td name="td5">Kd: 78.2 nM ± 2.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C13.51 aptamer</td>
  <td name="td1">G-protein-coupled receptor kinase 2 (GRK2)</td>
  <td name="td2">5'GGUUCGGGUAGCACAGACCAUAC
GGGAGAGAAACUUGUGCAACCCGGG
GCU3'</td>
  <td name="td3">51</td>
  <td name="td4">47.50%</td>
  <td name="td5">Kd: 101.2 nM ± 7.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RNA 20 aptamer</td>
  <td name="td1">Drosophila muscleblind protein (Mbl)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCACCGUAGAUGAUGGAUGUGCGG
UAGAGUCUUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">52.58%</td>
  <td name="td5">Kd: 0.23 nM ± 0.09</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/18557632/" target="_blank" style="color:#520049"><b>2008</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt #1 aptamer</td>
  <td name="td1">Bovine Prion Protein (bPrP)</td>
  <td name="td2">5'GGGAGGUGGAACUGAAGGAGACA
AUCCAUUCAUCUCUCGAAUGAGGAA
GUAGCCCAAGAGGAGGAGGAGGAUG
AGCACUUCGCAAUCGCUCUACGCA3
'</td>
  <td name="td3">97</td>
  <td name="td4">62.03%</td>
  <td name="td5">Kd: 82 ± 21 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19098441/" target="_blank" style="color:#520049"><b>2008</b></a></td>
</tr>
    
 <tr>
  <td name="td0">FB4 aptamer</td>
  <td name="td1">Mouse transferrin receptor (TfR-ECD)</td>
  <td name="td2">5'GGGCGAAUUCCGCGUGUGCUGAG
GGCGGAAGAACUAAUUUGGGACGGA
UUGCGGCCGUUGUCUGUGGCGUCCG
UUCGGG3'</td>
  <td name="td3">79</td>
  <td name="td4">66.67%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/18838694/#:~:text=Endocytosed%20enzyme%2Daptamer%20conjugate%20corrected,aptamer%20in%20receptor%2Dmediated%20endocytosis." target="_blank" style="color:#520049"><b>2008</b></a></td>
</tr>
    
 <tr>
  <td name="td0">FB4 (truncated version) aptamer</td>
  <td name="td1">Mouse transferrin receptor (TfR-ECD)</td>
  <td name="td2">5'GGACGGAUUGCGGCCGUUGUCUG
UGGCGUCCGUUCG3'</td>
  <td name="td3">36</td>
  <td name="td4">56.67%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/18838694/" target="_blank" style="color:#520049"><b>2008</b></a></td>
</tr>
    
 <tr>
  <td name="td0">N2 aptamer</td>
  <td name="td1">Amyloid beta-peptide (Aβ)</td>
  <td name="td2">5'GGGAUGUUCUAGGCGGUUGAUGA
UAGCGUAUGCCACUCUCCUGGGACC
CCCCGCCGGAUGGCCACAUCCAGAG
UAGCAUAAUUGAUCCGA3'</td>
  <td name="td3">90</td>
  <td name="td4">52.81%</td>
  <td name="td5">Kd: 21.6 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19668864/" target="_blank" style="color:#520049"><b>2009</b></a></td>
</tr>
    
 <tr>
  <td name="td0">E2 aptamer</td>
  <td name="td1">Amyloid beta-peptide (Aβ)</td>
  <td name="td2">5'GGGAUGUUCUAGGCGGUUGAUGA
UUUGGGGUGUCGGGCGAUUUUUAGG
GUUGGGCCAGGCCGUCAUCCAGAGU
AGCAUAAUUGAUCCGA3'</td>
  <td name="td3">89</td>
  <td name="td4">53.95%</td>
  <td name="td5">Kd: 10.9 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19668864/" target="_blank" style="color:#520049"><b>2009</b></a></td>
</tr>
    
 <tr>
  <td name="td0">WT-15 aptamer</td>
  <td name="td1">Serine protease inhibitor plasminogen activator inhibitor-1 (PAI-1)</td>
  <td name="td2">5'GGGAGGACGAUGCGGAUCAACUC
ACCGUAGGUCUAGUGAGAACUUCAA
GUCUACUCAGACGACUCGCUGAGGA
UCC3'</td>
  <td name="td3">76</td>
  <td name="td4">57.89%</td>
  <td name="td5">Kd: 177 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19284310/" target="_blank" style="color:#520049"><b>2009</b></a></td>
</tr>
    
 <tr>
  <td name="td0">SM-20 aptamer</td>
  <td name="td1">Serine protease inhibitor plasminogen activator inhibitor-1 (PAI-1)</td>
  <td name="td2">5'GGGAGGACGAUGCGGAGCGACUG
ACGAUCUUGAGUAAACCGCUCAUCC
ACGUAGUCAGACGACUCGCUGAGGA
UCC3'</td>
  <td name="td3">76</td>
  <td name="td4">59.04%</td>
  <td name="td5">Kd: 920 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19284310/" target="_blank" style="color:#520049"><b>2009</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer 1 aptamer</td>
  <td name="td1">SARS-CoV nucleocapsid (N) protein</td>
  <td name="td2">5'GGGAGAGCGGAAGCGUGCUGGGC
CUGUCGUUCGCUGUCUUGCUACGUU
ACGUUACACGGUUGGCAUAACCCAG
AGGUCGAUGG3'</td>
  <td name="td3">83</td>
  <td name="td4">48.08%</td>
  <td name="td5">Kd: 1.65 ± 0.41 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19684916/" target="_blank" style="color:#520049"><b>2009</b></a></td>
</tr>
    
 <tr>
  <td name="td0">J18 aptamer</td>
  <td name="td1">Epithelial Growth Factor Receptor (EGFR)</td>
  <td name="td2">5'GGCGCUCCGACCUUAGUCUCUGC
AAGAUAAACCGUGCUAUUGACCACC
CUCAACACACUUAUUUAAUGUAUUG
AACGGACCUACGAACCGUGUAGCAC
AGCAGA3'</td>
  <td name="td3">104</td>
  <td name="td4">53.38%</td>
  <td name="td5">kd: 7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/19271740/" target="_blank" style="color:#520049"><b>2009</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt10L aptamer</td>
  <td name="td1">Sulforhodamine analogue (ASR) fluorogen</td>
  <td name="td2">5'GAAGCUUGGGAAUUCGAGCUCCU
GACAGCAGGACCCUCACCUCGGUGA
UGAUGGAGGGGCGCAAGGUUAACCG
CCUCAGGGUCCUCGAUUCGAAGACG
UCCAGCUGAUCUAGAUUCUAUAGUG
UCACCUAAAU3'</td>
  <td name="td3">133</td>
  <td name="td4">62.50%</td>
  <td name="td5">Kd: 39.1 ± 7.6 μM or 3.5 ± 1.5 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20809562/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt10T3 (88mer) aptamer</td>
  <td name="td1">Sulforhodamine analogue (ASR) fluorogen</td>
  <td name="td2">5'GGACAGCAGGACCCUCACCUCGG
UGAUGAUGGAGGGGCGCAAGGUUAA
CCGCCUCAGGGUCCUCGACUCGAAG
ACGUCCAGCUGAUCC3'</td>
  <td name="td3">88</td>
  <td name="td4">49.30%</td>
  <td name="td5">Kd: 26.9 ± 2.2 uM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20809562/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C13 aptamer</td>
  <td name="td1">Protein tyrosine phosphatase 1B (PTP1B)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACUGU
GAUCAAUUUGGCAAUCCGCCACACG
AGACUGCAGACUUGACGAAGCUU3'</td>
  <td name="td3">71</td>
  <td name="td4">46.15%</td>
  <td name="td5">Ki: 200 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20572251/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C13M21 aptamer</td>
  <td name="td1">Protein tyrosine phosphatase 1B (PTP1B)</td>
  <td name="td2">5'm(GA)AUUCUGUGAUCAAUUUGG
CAAUCCGCCACACGAGUm(UsC)3'</td>
  <td name="td3">39</td>
  <td name="td4">46.48%</td>
  <td name="td5">Ki: 166 nM and 168 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20572251/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C9 aptamer</td>
  <td name="td1">Protein tyrosine phosphatase 1B (PTP1B)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACUGU
GAUUAAUUUGGCAAUCCGCCACACU
AGACUGCAGACUUGACGAAGCUU3'</td>
  <td name="td3">71</td>
  <td name="td4">44.30%</td>
  <td name="td5">Ki: 250 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20572251/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C1 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCUACCGUUAUUGGUGUCACCGAA
GAUGUUAUUCACUGCAGACUUGACG
AAGCUU3'</td>
  <td name="td3">79</td>
  <td name="td4">47.50%</td>
  <td name="td5">Kd: 20.9 ± 0.19 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C2 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGGAAUGGAUCCACAUCUACGAA
UUCUUCCGUUAUUGGAGCCAAGUCG
UAUCCCGAUUCACUGCAGACUUGAC
GAAGCUU3'</td>
  <td name="td3">80</td>
  <td name="td4">45.57%</td>
  <td name="td5">Kd: 33.2 ± 0.19 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">C8 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGAAUGGAUCCACAUCUACGAAU
UCGCAUUGUCCGCACGCAAAGCAUU
AUUGUGAUUCACUGCAGACUUGACG
AAGCUU3'</td>
  <td name="td3">79</td>
  <td name="td4">44.44%</td>
  <td name="td5">Kd: 90.4 ± 2.35 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">m009 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGGAUCCACAUCUACGAAUUCUA
CCGUUAUUGGUGUCACCGAAGAUGU
UAUUCC3'</td>
  <td name="td3">54</td>
  <td name="td4">46.34%</td>
  <td name="td5">Kd: 186 ± 5.05 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">m010 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGAUCUACGAAUUCUACCGUUAU
UGGUGUCACCGAAGAUCC3'</td>
  <td name="td3">41</td>
  <td name="td4">49.09%</td>
  <td name="td5">Kd: 252 ± 7.04 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">m011 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGGAUCCACAUCUACGAAUUCUU
CCGUUAUUGGAGCCAAGUCGUAUCC
CGAUUCC3'</td>
  <td name="td3">55</td>
  <td name="td4">54.55%</td>
  <td name="td5">Kd: 221 ± 4.84 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">m012 aptamer</td>
  <td name="td1">Sphingosylphosphorylcholine (SPC)</td>
  <td name="td2">5'GGCGAAUUCUUCCGUUAUUGGAG
CCAAGUCGCC3'</td>
  <td name="td3">33</td>
  <td name="td4">63.89%</td>
  <td name="td5">Kd: 196 ± 2.98 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">21-E aptamer</td>
  <td name="td1">Zinc-finger antiviral protein (ZAP)</td>
  <td name="td2">5'GGGAACAGUCCGAGCCUGCGUGC
GAGGAGGUGGAGAGGGUGGGUGUGC
GUGGCGUGGGGUGAAUUCGUCAUA3
'</td>
  <td name="td3">72</td>
  <td name="td4">64.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/21203916/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">21-K aptamer</td>
  <td name="td1">Zinc-finger antiviral protein (ZAP)</td>
  <td name="td2">5'GGGAACAGUCCGAGCCAAGCGGU
AGCGUCAGGGGGUGGAGGGAGGAGG
CCGCGUGGUGUGGGUGAAUUCGUCA
UA3'</td>
  <td name="td3">75</td>
  <td name="td4">54.17%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/21203916/" target="_blank" style="color:#520049"><b>2010</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt21‐2 aptamer</td>
  <td name="td1">Interleukin-17A (IL‐17A)</td>
  <td name="td2">5'UAAUACGACUCACUAUAGGGAGC
AGGAGAGAGGUCAGAUGGGUCUAGC
CGGAGGAGUCAGUAAUCGGUAGACC
CAUCUGACCUCUCUCCUGCUCCC3'</td>
  <td name="td3">96</td>
  <td name="td4">38.38%</td>
  <td name="td5">Kd: 48.5 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/20967861/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Two Arm aptamer</td>
  <td name="td1">Escherichia coli (E. coli) O157:H7</td>
  <td name="td2">5'GGGAUACCAGCUUAUUCAAUUUG
AUUCCAUCUUCCUGGACUGUCGAAA
AUUCAGUAUCGGGAGGUUACGUAUU
UGGUUUAUAGAUAGUAAGUGCAAUC
U3'</td>
  <td name="td3">99</td>
  <td name="td4">40.00%</td>
  <td name="td5">Kd: 110 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22166202/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">G5α3N.4 aptamer</td>
  <td name="td1">Human papillomavirus type 16 (HPV-16) E7 oncoprotein</td>
  <td name="td2">5'UAAUACGACUCACUAUAGGGAGA
CCCAAGCCGAUUUAUUUUGUGCAGC
UUUUGUUCCCUUUAGUGAGGGUUAA
UU3'</td>
  <td name="td3">75</td>
  <td name="td4">36.07%</td>
  <td name="td5">Kd: 1.9 µM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/21565620/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">S9 aptamer</td>
  <td name="td1">RecombiNAt truncated human hepatitis B virus (HBV) P protein (miniP)</td>
  <td name="td2">5'UGUUCAUGUCCUACUGUUCAAAC
AAAAAAACUGUGCACAAAAAUAAAU
UGGGGCAUGGACA3'</td>
  <td name="td3">61</td>
  <td name="td4">39.34%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22125633/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">S6 aptamer</td>
  <td name="td1">RecombiNAt truncated human hepatitis B virus (HBV) P protein (miniP)</td>
  <td name="td2">5'UGUUCAUGUCCUACUGUUCACAG
AAAAUAGCUGUGCAAAAAAAAAAGA
UGGGGCAUGGACA3'</td>
  <td name="td3">61</td>
  <td name="td4">55.10%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22125633/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">24-2 (Spinach) aptamer</td>
  <td name="td1">The fluorophore in Green fluorescent protein (GFP) (Ser65-Tyr66-Gly67)</td>
  <td name="td2">5'GACGCAACUGAAUGAAAUGGUGA
AGGACGGGUCCAGGUGUGGCUGCUU
CGGCAGUGCAGCUUGUUGAGUAGAG
UGUGAGCUCCGUAACUAGUCGCGUC
3'</td>
  <td name="td3">98</td>
  <td name="td4">52.94%</td>
  <td name="td5">KD: 537 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">13-2 aptamer</td>
  <td name="td1">The fluorophore in Green fluorescent protein (GFP) (Ser65-Tyr66-Gly67)</td>
  <td name="td2">5'UCUAGAAUUCAAUUUGCGUAUUG
AGACAGGGCCGCGCUAUUUCUGGAG
GGGCGGUACAUGAAAGUGGUGGUUG
GGUGCGGUCGGAGAUAGCUCGAGCA
AUGC3'</td>
  <td name="td3">102</td>
  <td name="td4">54.39%</td>
  <td name="td5">KD: 464 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">44626 aptamer</td>
  <td name="td1">The fluorophore in Green fluorescent protein (GFP) (Ser65-Tyr66-Gly67)</td>
  <td name="td2">5'GGGAGAUACGCUCUAGAAUUCAA
UUGCAUGGUGGUCUGGGACAGACGU
GUGGACGGCACACAGCGUGAGGCUU
UGGUGGGUUAUGGCUGUCAUGCGAG
AUAGCUCGAGCAAUGC3'</td>
  <td name="td3">114</td>
  <td name="td4">63.21%</td>
  <td name="td5">KD: 406 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
</tr>
    
 <tr>
  <td name="td0">9C7 aptamer</td>
  <td name="td1">OX40, T cell costimulatory receptor</td>
  <td name="td2">5'UCGGGCGAGUCGUCUGGGGAGGA
CGAUGCGGAAAAAAGAACACUUCCG
AUUAGGGCCCACCCUAACGGCCGCA
GGGGAGGACGAUGCGGCCGCAUCGU
CCUCCCUA3'</td>
  <td name="td3">106</td>
  <td name="td4">69.37%</td>
  <td name="td5">Kd: 1.7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23113766/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">11F11 aptamer</td>
  <td name="td1">OX40, T cell costimulatory receptor</td>
  <td name="td2">5'UCGGGCGAGUCGUCUGGGGAGGA
CGAUGCGGAACGGGACCACCCAUGC
CAGGGGACCACCUCAGGCAGCGCCA
GACGACGGGAGGACGAUGCGGCCGC
AUCGUCCUCCCUA3'</td>
  <td name="td3">111</td>
  <td name="td4">32.50%</td>
  <td name="td5">Kd: 10 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23113766/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">H1 aptamer</td>
  <td name="td1">Hirame rhabdovirus (HIRRV)</td>
  <td name="td2">5'GGUGUAUAGGUAUUGAAUCAAUU
GUUUUAGCGUUGUCUUA3'</td>
  <td name="td3">40</td>
  <td name="td4">41.46%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">H2 aptamer</td>
  <td name="td1">Hirame rhabdovirus (HIRRV)</td>
  <td name="td2">5'GGAACGCGAGCUUAGAUUUCGGA
GAACAGUUUGUAAUUGUU3'</td>
  <td name="td3">41</td>
  <td name="td4">50.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">H3 aptamer</td>
  <td name="td1">Hirame rhabdovirus (HIRRV)</td>
  <td name="td2">5'GUCCUAUACAGUGUGACCGGUUG
AAAGUGGGUUCGUUG3'</td>
  <td name="td3">38</td>
  <td name="td4">52.50%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">H4 aptamer</td>
  <td name="td1">Hirame rhabdovirus (HIRRV)</td>
  <td name="td2">5'GGGUUAAGCCGGAUUGUAGACUG
UAACAGGUAGAGCUGGC3'</td>
  <td name="td3">40</td>
  <td name="td4">69.01%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">M9-5 aptamer</td>
  <td name="td1">Cyclophilin B (CypB)</td>
  <td name="td2">5'GGGAGGACGAUGCGGGGACCUAU
GCAGUAGCCAGUGUGGACUGGGCUG
CCCCCCCCAGACGACUCGCCCGA3'</td>
  <td name="td3">71</td>
  <td name="td4">NA%</td>
  <td name="td5">Kd: 1.5 ± 0.02 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/22484812/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F3 aptamer</td>
  <td name="td1">human matrix metalloprotease 9 (hMMP-9)</td>
  <td name="td2">GGUUACCAGCCUUCACUGCCCUGCC
CUCACCCGUUAGCCUGAGCGCCCCG
CACCACGGUCGGUCACAC</td>
  <td name="td3">68</td>
  <td name="td4">NA%</td>
  <td name="td5">8.1 ± 3.4 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23043415/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F2 aptamer</td>
  <td name="td1">human matrix metalloprotease 9 (hMMP-10)</td>
  <td name="td2">GGUUACCAGCCUUCACUGCUCCCGG
ACGCGUCUGUAUCCGCUACCCGCCG
CACCACGGUCGGUCACAC</td>
  <td name="td3">68</td>
  <td name="td4">NA%</td>
  <td name="td5">15.4 ± 2.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23043415/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F1 aptamer</td>
  <td name="td1">human matrix metalloprotease 9 (hMMP-11)</td>
  <td name="td2">GGUUACCAGCCUUCACUGCCCUGCG
CCAACCCGUUAGCCUUGUCGCCCCG
CACCACGGUCGGUCACAC</td>
  <td name="td3">68</td>
  <td name="td4">NA%</td>
  <td name="td5">18.3 ± 3.7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23043415/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F3Bomf aptamer</td>
  <td name="td1">human matrix metalloprotease 9 (hMMP-12)</td>
  <td name="td2">UGCCCUGCCCUCACCCGUUAGCCUG
AGCGCCCCGCA</td>
  <td name="td3">36</td>
  <td name="td4">NA%</td>
  <td name="td5">Kd: 20 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23043415/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F3B aptamer</td>
  <td name="td1">human matrix metalloprotease 9 (hMMP-13)</td>
  <td name="td2">UGCCCUGCCCUCACCCGUUAGCCUG
AGCGCCCCGCA</td>
  <td name="td3">36</td>
  <td name="td4">NA%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23043415/" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">MDA231 aptamer aptamer</td>
  <td name="td1">MDA-231/LUC and MDA-MB-231 cell lines</td>
  <td name="td2">GGGAGGACGAUGCGUCCUUGUCGUC
UUGCGUCCCCAGACGACUCGCCCGA</td>
  <td name="td3">50</td>
  <td name="td4">60.00%</td>
  <td name="td5">200 nM</td>
  <td name="td6"><a href="https://iro.uiowa.edu/esploro/outputs/doctoral/9983776762102771" target="_blank" style="color:#520049"><b>2012</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CD133-A15 aptamer</td>
  <td name="td1">CD133-positive on cell line HT-29</td>
  <td name="td2">5'CCCUCCUACAUAGGG'3</td>
  <td name="td3">15</td>
  <td name="td4">60.00%</td>
  <td name="td5">Kd: 83.2 ± 82.9 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23196060/" target="_blank" style="color:#520049"><b>2013</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CD133-A15 aptamer</td>
  <td name="td1">CD133-positive on cell line Hep3B</td>
  <td name="td2">5'CCCUCCUACAUAGGG'3</td>
  <td name="td3">15</td>
  <td name="td4">36.84%</td>
  <td name="td5">Kd: 33.9 ± 12.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23196060/" target="_blank" style="color:#520049"><b>2013</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CD133-B19 aptamer</td>
  <td name="td1">CD133-positive on cell line HT-29</td>
  <td name="td2">5'CAGAACGUAUACUAUUCUG3'</td>
  <td name="td3">19</td>
  <td name="td4">36.84%</td>
  <td name="td5">Kd: 145.1 ± 75.4</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23196060/" target="_blank" style="color:#520049"><b>2013</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CD133-B19 aptamer</td>
  <td name="td1">CD133-positive on cell line Hep3B</td>
  <td name="td2">5'CAGAACGUAUACUAUUCUG3'</td>
  <td name="td3">19</td>
  <td name="td4">47.78%</td>
  <td name="td5">Kd: 52.3 ± 15.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/23196060/" target="_blank" style="color:#520049"><b>2013</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt1 aptamer</td>
  <td name="td1">Cell-surface Glycoprotein CD44</td>
  <td name="td2">5'GGGAUGGAUCCAAGCUUACUGGC
AUCUGGAUUUGCGCGUGCCAGAAUA
AAGAGUAUAACGUGUGAAUGGGAAG
CUUCGAUAGGAAUUCGG3'</td>
  <td name="td3">90</td>
  <td name="td4">58.46%</td>
  <td name="td5">Kd: 81.3 ± 30.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24171482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
</tr>
    
 <tr>
  <td name="td0">AptER-1 aptamer</td>
  <td name="td1">Estrogen receptor alpha (ERα)</td>
  <td name="td2">5'GGGCAGAGGCACCGCGAACAAAA
CGCAAGACAGAGUGCCGACAAGAGC
ACUACAAGCUUCUGCCC3</td>
  <td name="td3">65</td>
  <td name="td4">54.64%</td>
  <td name="td5">Kd:16 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">AptER-2 aptamer</td>
  <td name="td1">Estrogen receptor alpha (ERα)</td>
  <td name="td2">5'GGGAGAAUUCAACUGCCAUCUAG
GCACACGCGAGAUAGAGCGAGGCCU
CCAAAAAUGGCCACGCCAGGAAGCA
GUACUACAAGCUUCUGGACUCGGU3
'</td>
  <td name="td3">97</td>
  <td name="td4">58.42%</td>
  <td name="td5">Kd: 21 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">AptER-3 aptamer</td>
  <td name="td1">Estrogen receptor alpha (ERα)</td>
  <td name="td2">5'GGGAGAAUUCAACUGCCAUCUAG
GCGACCCAGGGCCGGGACGCAAAGC
AGCCAAAACAGACGGCCCCAGUCAG
GGAGUUACUACAAGCUUCUGGACUC
GGU3'</td>
  <td name="td3">101</td>
  <td name="td4">54.55%</td>
  <td name="td5">Kd: 30 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">8-1 aptamer</td>
  <td name="td1">Hemagglutinin (HA) of highly pathogenic avian influenza (HPAI H5N1)</td>
  <td name="td2">5'UCUAAUACGACUCACUAUAGGAG
CUCAGCCUUCACUGCCUGUUAGAGU
UUCCUAAAAGCGAACUGGCGCCCUC
GUCAGCAUCUGGCAGACGAGUGGAG
ACGGACUAACCACAGGCACCACGGU
CGGAUCCUG3'</td>
  <td name="td3">132</td>
  <td name="td4">54.55%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24374323/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">8-3 aptamer</td>
  <td name="td1">Hemagglutinin (HA) of highly pathogenic avian influenza (HPAI H5N1)</td>
  <td name="td2">5'UCUAAUACGACUCACUAUAGGAG
CUCAGCCUUCACUGCGAGAUUGUUC
UGACCGAGUUGCCUAGCAGGGCAAC
CGCUGGAACUUGAAGUCGGUAAUGC
GAGCGGAAAGCCUUGGCACCACGGU
CGGAUCCUG3'</td>
  <td name="td3">132</td>
  <td name="td4">58.33%</td>
  <td name="td5">Kd: 170 pM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24374323/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">8-10 aptamer</td>
  <td name="td1">Hemagglutinin (HA) of highly pathogenic avian influenza (HPAI H5N1)</td>
  <td name="td2">5'UCUAAUACGACUCACUAUAGGAG
CUCAGCCUUCACUGCGGUGACCGGA
GGAAUACGCGGACGGAGAAAGGGUU
GGCCUCGUGGAUGGCGGAUACCCGU
CCAGGGAUCUUCUAGGCACCACGGU
CGGAUCCUG3'</td>
  <td name="td3">132</td>
  <td name="td4">48.65%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24374323/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Apt1 aptamer</td>
  <td name="td1">Glygoprotein 2 (GP2), Mouse</td>
  <td name="td2">5'GGGAGAAUUCCGACCAGAAGCAA
GUAGUUGGCGCCUACUAUAGAAAUA
CGCCUUUCCUCUCUCCUUCCUCUUC
U3'</td>
  <td name="td3">74</td>
  <td name="td4">51.06%</td>
  <td name="td5">Kd: 110 ± 2.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24334484/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">HA12-16 aptamer</td>
  <td name="td1">Glycosylated receptor-binding domain of the HA protein (gHA1)</td>
  <td name="td2">5'GGGUUCACUGCAGACUUGACGAA
GCUUGCUUGACGGAGAUCAAGGGCG
AGUCGCAUACCAAGUUGAUGGGGAA
UGGAUCCACAUCUACGAAUUC3'</td>
  <td name="td3">94</td>
  <td name="td4">52.53%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/24835440/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">29-1 aptamer</td>
  <td name="td1">RNA Mimic of Green Fluorescent Protein (Fluorophores, coupled with fluorescence-activated cell sorting (FACS); Escherichia coli</td>
  <td name="td2">5'GAGACGCAACUGAAUGAAAUGGU
GAAGGAGACGGUCGGGUCCAGGCAC
AAAAAUGUUGCCUGUUGAGUAGAGU
GUGGGCUCCGUAACUAGUCGCGUCA
C3'</td>
  <td name="td3">99</td>
  <td name="td4">55.10%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25337688/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Broccoli–DFHBI-1T(29-1-3-1)
 aptamer</td>
  <td name="td1">RNA Mimic of Green Fluorescent Protein (Fluorophores, coupled with fluorescence-activated cell sorting (FACS); Escherichia coli</td>
  <td name="td2">5'GAGACGGUCGGGUCCAGAUAUUC
GUAUCUGUCGAGUAGAGUGUGGGCU
C3'</td>
  <td name="td3">49</td>
  <td name="td4">62.28%</td>
  <td name="td5">KD: 360 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25337688/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">tBroccoli aptamer</td>
  <td name="td1">RNA Mimic of Green Fluorescent Protein (Fluorophores, coupled with fluorescence-activated cell sorting (FACS); Escherichia coli</td>
  <td name="td2">5'GCCCGGAUAGCUCAGUCGGUAGA
GCAGCGGAGACGGUCGGGUCCAGAU
AUUCGUAUCUGUCGAGUAGAGUGUG
GGCUCCGCGGGUCCAGGGUUCAAGU
CCCUGUUCGGGCGCCA3'</td>
  <td name="td3">114</td>
  <td name="td4">60.89%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25337688/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">tRNA-Broccoli-c-diGMP sensor aptamer</td>
  <td name="td1">RNA Mimic of Green Fluorescent Protein (Fluorophores, coupled with fluorescence-activated cell sorting (FACS); Escherichia coli</td>
  <td name="td2">5'GCCCGGAUAGCUCAGUCGGUAGA
GCAGCGGAGACGGUCGGGUACGCAC
AGGGCAAACCAUUCGAAAGAGUGGG
ACGCAAAGCCUCCGGCCUAAACCAG
AAGACAUGGUAGGUAGCGGGGUUAC
CGAUAGUAGAGUGUGGGCUCCGCGG
GUCCAGGGUUCAAGUCCCUGUUCGG
GCGCCA3'</td>
  <td name="td3">179</td>
  <td name="td4">61.15%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25337688/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">tdBroccoli aptamer</td>
  <td name="td1">RNA Mimic of Green Fluorescent Protein (Fluorophores, coupled with fluorescence-activated cell sorting (FACS); Escherichia coli</td>
  <td name="td2">5'GCCCGGAUAGCUCAGUCGGUAGA
GCAGCGGAGACGGUCGGGUCCAUCU
GAGACGGUCGGGUCCAGAUAUUCGU
AUCUGUCGAGUAGAGUGUGGGCUCA
GAUGUCGAGUAGAGUGUGGGCUCCG
CGGGUCCAGGGUUCAAGUCCCUGUU
CGGGCGCCA3'</td>
  <td name="td3">157</td>
  <td name="td4">46.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25337688/" target="_blank" style="color:#520049"><b>2014</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TSA14 aptamer</td>
  <td name="td1">RHER2/neu protein via TUBO cell line</td>
  <td name="td2">5'ACCGAGUCCAGAAGCUUGUAGUA
CUGCUGGAGCAUUUAUGGAUGAACC
UUGGACGGAAGCCUAGAUGGAGUUG
AAUUCUCCCUAUAGUGAGUCGUAUU
AC3'</td>
  <td name="td3">100</td>
  <td name="td4">44.79%</td>
  <td name="td5">Kd: 133.9 ± 12.78 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26221481/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PR10.1 aptamer</td>
  <td name="td1">HIV-1 aspartyl protease (PR)</td>
  <td name="td2">5'GGGUUACCUAGGUGUAGAUGCUC
UUCAUUGUAACUUCUCAUAAUUUCC
CGAGGCUUUUACUUUCGGGGUCCUA
AGUGACGUCUGAACUGCUUCGAA3'
 </td>
  <td name="td3">96</td>
  <td name="td4">46.88%</td>
  <td name="td5">Kd: 115 ± 22 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PR10.9 aptamer</td>
  <td name="td1">HIV-1 aspartyl protease (PR)</td>
  <td name="td2">5'GGGUUACCUAGGAGGAGAUGCUA
CAUUACCUAAGUAAGAUUACGGCUU
CGAGUUUAGAGACCUCUCCCUGGUA
AGUGACGUCUGAACUGCUUCGAA3'</td>
  <td name="td3">96</td>
  <td name="td4">47.92%</td>
  <td name="td5">Kd: 93 ±19 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PR10.1-8E aptamer</td>
  <td name="td1">HIV-1 aspartyl protease (PR)</td>
  <td name="td2">5'GGGUUACCUAGGAGGAGAUGCUC
UUAAGUGUAACUUCUCAUAACAUCC
GGAGGCUUUUACUUCCGGGGACCUA
AGUGACGUCUGAACUGCUUCGAA3'</td>
  <td name="td3">96</td>
  <td name="td4">47.87%</td>
  <td name="td5">Kd: 17 ± 3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PR10.1-8A aptamer</td>
  <td name="td1">HIV-1 aspartyl protease (PR)</td>
  <td name="td2">5'GGGUUACCUAGGAGGAGAUGCUC
UUAAGUGUAACUUCUCGUAAUUCCC
AAGGCUUUUACCUCGGGGUCCUAAG
UGACGUCUGAACUGCUUCGAA3'</td>
  <td name="td3">94</td>
  <td name="td4">50.53%</td>
  <td name="td5">Kd: 2.2 ± 0.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PR10.9-8N aptamer</td>
  <td name="td1">HIV-1 aspartyl protease (PR)</td>
  <td name="td2">5'GGGUUACCUAGGAGGAGAUGCUU
UGACCUAAGGUAAGAUAACGGCUUC
GAGUUCAGAGACCUCGCCCUGGUAA
GUGACGUCUGAACUGCUUCGAA3'</td>
  <td name="td3">95</td>
  <td name="td4">56.92%</td>
  <td name="td5">Kd: 4.3 ± 0.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CA72-4 A01 aptamer</td>
  <td name="td1">Gastrointestinal cancer antigen 72–4</td>
  <td name="td2">5'GGGUCGUGUCGGAUCCUGCGAAG
GGGGGCAGAGGUUUGACGCGAGAAA
GCUUCUAAGGUAACGAU3'</td>
  <td name="td3">65</td>
  <td name="td4">44.78%</td>
  <td name="td5">Kd: 52.7nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">anti-KpnI RNA Aptamer 20 aptamer</td>
  <td name="td1">KpnI isoschizomer Acc65I</td>
  <td name="td2">5'GGGAUAUCCUUCAUGAUUCGGAA
AAGCGUAACCGCGGCCAAUCAUGCA
UGAAGCGUUCCAUAUUUUU3'</td>
  <td name="td3">67</td>
  <td name="td4">37.31%</td>
  <td name="td5">Kd: 11.6 ± 2.3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">anti-KpnI RNA Aptamer 24 aptamer</td>
  <td name="td1">KpnI isoschizomer Acc65I</td>
  <td name="td2">5'GGGAUAUCCUUCAUGGUGUGAUU
AAACGUAAUCUCAAUCGAUCAUGCA
UGAAGCGUUCCAUAUUUUU3'</td>
  <td name="td3">67</td>
  <td name="td4">41.18%</td>
  <td name="td5">Kd: 28.7 ± 5.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">anti-KpnI RNA Aptamer 29 aptamer</td>
  <td name="td1">KpnI isoschizomer Acc65I</td>
  <td name="td2">5'GGGAUAUCCCUACAUGAUAAUCG
GGUGAGUAAGGCCUAAACAUCAUGC
AUGAAGCGUUCCAUAUUUUU3'</td>
  <td name="td3">68</td>
  <td name="td4">46.27%</td>
  <td name="td5">Kd: 419 ± 46.6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">anti-KpnI RNA Aptamer 30 aptamer</td>
  <td name="td1">KpnI isoschizomer Acc65I</td>
  <td name="td2">5'GGGAUAUCCUUCAUGAUUCGGAA
AAGCGUAACCGCGGCCGAUCAUGCA
UGAAGCGUUCCAUAUUUUU3'</td>
  <td name="td3">67</td>
  <td name="td4">51.38%</td>
  <td name="td5">Kd: 18.6 ± 4.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F2 aptamer</td>
  <td name="td1">Soluble pleiotropic cytokine interleukin-6 receptor (sIL-6R) and interleukin-6 receptor domain 3 (IL-6R D3)</td>
  <td name="td2">5'AAUGCGAAGAAAGAGGUCUGAGA
CAUUCUCAACGAACUAUGAGGAAAG
GGACCGUGCGAGGGUUGGGUUAGGG
UUUGGAGCCACGGUCCUUCUGGAGU
UGACGUUGCUU3'</td>
  <td name="td3">109</td>
  <td name="td4">47.27%</td>
  <td name="td5">Kd: 97.7 ± 18.3 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26383776/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F3 aptamer</td>
  <td name="td1">Soluble pleiotropic cytokine interleukin-6 receptor (sIL-6R) and interleukin-6 receptor domain 3 (IL-6R D3)</td>
  <td name="td2">5'AAUGCGAAGAAAGAGGUCUGAGA
CAUUCUGAAGAGAGAAAGCCAGUAG
AGGGAAGAGGGAUGAGGGACGUGGG
AAUCUUGGUAAUCAGUCUUCUGGAG
UUGACGUUGCUU3'</td>
  <td name="td3">110</td>
  <td name="td4">48.60%</td>
  <td name="td5">Kd: 179 ± 117 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26383776/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F4 aptamer</td>
  <td name="td1">Soluble pleiotropic cytokine interleukin-6 receptor (sIL-6R) and interleukin-6 receptor domain 3 (IL-6R D3)</td>
  <td name="td2">5'AAUGCGAAGAAAGAGGUCUGAGA
CAUUCUUAAAAACGGCCCAUCGUUU
GGCRCUGUGGGAGUGGAGGGUGGAU
GGUGUUAAGCGAUUCUUCUGGAGUU
GACGUUGCUU3'</td>
  <td name="td3">107</td>
  <td name="td4">54.44%</td>
  <td name="td5">Kd: 34.8 ± 5.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/26383776/" target="_blank" style="color:#520049"><b>2015</b></a></td>
</tr>
    
 <tr>
  <td name="td0">UCH37‐1 aptamer</td>
  <td name="td1">Proteasome‐associated deubiquitylating enzyme UCH37</td>
  <td name="td2">5'GGGUUCACUGCAGACUUGACGAA
GCUUGGAGGGCAUGCUUCGGGCAAA
CCUGUAGGGGUGCGGCUCUAAUGGA
UCCACAUCUACGAAUUC3'</td>
  <td name="td3">90</td>
  <td name="td4">42.70%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/27930845/" target="_blank" style="color:#520049"><b>2016</b></a></td>
</tr>
    
 <tr>
  <td name="td0">GL56 aptamer</td>
  <td name="td1">Glioblastoma cell line U87MG</td>
  <td name="td2">5'GGAGACAAGAAUAAACGCUCAAU
GAUUUUGCAGCACUUCUUGUUAUCU
UAACGAACUGUUGAUGAUUCGACAG
GAGGCUCACAACAGGC3'</td>
  <td name="td3">89</td>
  <td name="td4">60.00%</td>
  <td name="td5">Kd: 6 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/27648925/" target="_blank" style="color:#520049"><b>2016</b></a></td>
</tr>
    
 <tr>
  <td name="td0">MF11 aptamer</td>
  <td name="td1">Chemokine CCL17</td>
  <td name="td2">5'AAUAGAGUCGUCGCGGGUUGGCU
CGUAGAUCGGGCCGGUACAGACGAC
UCGCUGAGGAUCCGAGA3'</td>
  <td name="td3">65</td>
  <td name="td4">55.38%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">MF35 aptamer</td>
  <td name="td1">Chemokine CCL17</td>
  <td name="td2">5'GAGCAGCAUUUGUGGUUUCCCGA
UCGCUUCCCCUAAACAGCAGACGAC
UCGCUGAGGAUCCGAGA3'</td>
  <td name="td3">65</td>
  <td name="td4">65.71%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">MF11.46 aptamer</td>
  <td name="td1">Chemokine CCL17</td>
  <td name="td2">5'GGGUCGUCGCGGGUUGGCUCGUA
GAUCGGGCCGGUACAGACGACCCAG
ACGACUCGCUGAGGAUCCGAGA3'</td>
  <td name="td3">70</td>
  <td name="td4">56.25%</td>
  <td name="td5">Kd: 0.9 ± 0.1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">MF35.47 aptamer</td>
  <td name="td1">Chemokine CCL17</td>
  <td name="td2">5'GAGCAGCAUUUGUGGUUUCCCGA
UCGCUUCCC3'</td>
  <td name="td3">32</td>
  <td name="td4">56.96%</td>
  <td name="td5">Kd: 7.5 ± 1.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">E3 aptamer aptamer</td>
  <td name="td1">Prostate cancer cell line PC-3</td>
  <td name="td2">5'GGGAGGACGAUGCGGGGCUUUCG
GGCUUUCGGCAACAUCAGCCCCUCA
GCCAUUUCUCCUACUGGGAUAGGUG
GAUUAU3'</td>
  <td name="td3">79</td>
  <td name="td4">48.78%</td>
  <td name="td5">Kd: 146-410 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/29666232/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CA50 A01 aptamer</td>
  <td name="td1">Homo sapien - CA50</td>
  <td name="td2">5'GGGUCGUGUCGGAUCCGUGAGUU
UUUCGCGGCGAAGACAAGGCUCGAA
GCUUCUAAGGUAACGAU3'</td>
  <td name="td3">69</td>
  <td name="td4">51.22%</td>
  <td name="td5">Kd: 38 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CEA A01 aptamer</td>
  <td name="td1">Homo sapien - CEA</td>
  <td name="td2">5'AUCGUUACCUUAGAAGCUUAGGC
ACGACGCAUAGCCUUGGGAGCGAGG
AGGAUCCGACACGACCCUAUAGUGA
GUCGUAUUA3'</td>
  <td name="td3">82</td>
  <td name="td4">51.22%</td>
  <td name="td5">Kd: 16.5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CA72-4 A01 aptamer</td>
  <td name="td1">Homo sapien - CA72-4</td>
  <td name="td2">5'GGGUCGUGUCGGAUCCUGCGAAG
GGGGGCAGAGGUUUGACGCGAGAAA
GCUUCUAAGGUAACGAU3'</td>
  <td name="td3">69</td>
  <td name="td4">48.78%</td>
  <td name="td5">Kd: 52.7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CEA A02 aptamer</td>
  <td name="td1">Homo sapien - CEA</td>
  <td name="td2">5'AUCGUUACCUUAGAAGCUUAACG
GCAUGACCUAACCUGGAGGCGCAUC
AGGAUCCGACACGACCCUAUAGUGA
GUCGUAUUA3'</td>
  <td name="td3">82</td>
  <td name="td4">48.78%</td>
  <td name="td5">Kd: 156.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CA72-4 A02 aptamer</td>
  <td name="td1">Homo sapien - CA72-4</td>
  <td name="td2">5'AUCGUUACCUUAGAAGCUUCCCA
AAAAGGAUUGGGGCGUCUGCAUGAC
CGGAUCCGACACGACCCUAUAGUGA
GUCGUAUUA3'</td>
  <td name="td3">82</td>
  <td name="td4">51.22%</td>
  <td name="td5">Kd: 71.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CA50 A02 aptamer</td>
  <td name="td1">Homo sapien - CA50</td>
  <td name="td2">5'AUCGUUACCUUAGAAGCUUAGCU
CGAAAGUGGGCUGGCGAUGUGUCCC
GGGAUCCGACACGACCCUAUAGUGA
GUCGUAUUA3'</td>
  <td name="td3">82</td>
  <td name="td4">59.26%</td>
  <td name="td5">Kd: 30.7 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
</tr>
    
 <tr>
  <td name="td0">APT 1 aptamer</td>
  <td name="td1">Mixed lineage leukemia protein 1 (MLL1)</td>
  <td name="td2">5'GGCUCGAGGAACGUACAGAGGGU
GGAGAGUGGGUGGAAGCUUACGGUA
CCUAGC3'</td>
  <td name="td3">54</td>
  <td name="td4">61.11%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30419633/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">APT 2 aptamer</td>
  <td name="td1">Mixed lineage leukemia protein 1 (MLL1)</td>
  <td name="td2">5'GGCUCGAGGACGUAACAGAGGGA
GGCGAGUGGGUGGAAGCUUACGGUA
CCUAGC3'</td>
  <td name="td3">54</td>
  <td name="td4">66.67%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30419633/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Tr-1 aptamer</td>
  <td name="td1">Soluble Interleukin 2 Receptor α (CD25)</td>
  <td name="td2">5'GGGAGGACGAUGCGGUCCUGUCG
UCUGUUCGUCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">66.67%</td>
  <td name="td5">Kd: 122.0 ± 5.23 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Tr-6 aptamer</td>
  <td name="td1">Soluble Interleukin 2 Receptor α (CD25)</td>
  <td name="td2">5'GGGAGGACGAUGCGGCGUUUCCU
CUGGUUCGUCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">66.67%</td>
  <td name="td5">Kd: 96.9 ± 5.77 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Tr-7 aptamer</td>
  <td name="td1">Soluble Interleukin 2 Receptor α (CD25)</td>
  <td name="td2">5'GGGAGGACGAUGCGGUGAGUCGU
UCCCUUCGUCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">70.59%</td>
  <td name="td5">Kd: 68.2 ± 2.73 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Tr-8 aptamer</td>
  <td name="td1">Soluble Interleukin 2 Receptor α (CD25)</td>
  <td name="td2">5'GGGAGGACGAUGCGGGCCGUUGU
UGUGUGCCGCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">66.67%</td>
  <td name="td5">Kd: 35.7 ± 1.56 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Tr-11 aptamer</td>
  <td name="td1">Soluble Interleukin 2 Receptor α (CD25)</td>
  <td name="td2">5'GGGAGGACGAUGCGGAUUCUGGU
UACUGGCCGCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">63.41%</td>
  <td name="td5">Kd: 46.1 ± 1.76 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Ca-apt-1 aptamer</td>
  <td name="td1">C. albicans</td>
  <td name="td2">CGAAAGACCAACGCAGCCAAACUGA
AGCCCCAGUCGCCCCG</td>
  <td name="td3">41</td>
  <td name="td4">70.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30779315/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Ca-apt-12 aptamer</td>
  <td name="td1">C. albicans</td>
  <td name="td2">AGCCCUCAACCCAGACACCCCCAAC
CUUCCUCGCCCCCCC</td>
  <td name="td3">40</td>
  <td name="td4">48.84%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/30779315/" target="_blank" style="color:#520049"><b>2019</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TN2 aptamer</td>
  <td name="td1">Triple-negative breast cancer (TNBC) cell line MDA-MB-231</td>
  <td name="td2">5'UAGGGAAGAGAAGGACAUAUGAU
AAGGCCGACGUAAUGUGUCGGUCGU
UACGCGUCGUGCACGUUGACUAGUA
CAUGACCACUUGA3'</td>
  <td name="td3">86</td>
  <td name="td4">51.16%</td>
  <td name="td5">Kd: 59.12 ± 12.93 or 73.02 ± 12</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TN3 aptamer</td>
  <td name="td1">Triple-negative breast cancer (TNBC) cell line MDA-MB-232</td>
  <td name="td2">5'UAGGGAAGAGAAGGACAUAUGAU
CCGAUCUCACGCGCACCUUCUCUUC
AGCGCGCGACUGGCAUUGACUAGUA
CAUGACCACUUGA3'</td>
  <td name="td3">86</td>
  <td name="td4">48.84%</td>
  <td name="td5">Kd: 21.91 ± 3.08 or 28.93 ± 9.72</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TN20 aptamer</td>
  <td name="td1">Triple-negative breast cancer (TNBC) cell line MDA-MB-233</td>
  <td name="td2">5'UAGGGAAGAGAAGGACAUAUGAU
CGAUGCGCACCGAUCUCUCUUCUGC
ACGUCCUUCGGCACAUUGACUAGUA
CAUGACCACUUGA3'</td>
  <td name="td3">86</td>
  <td name="td4">52.33%</td>
  <td name="td5">Kd: 24.30 ± 4.99 or 23.92 ± 3.59</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TN29 aptamer</td>
  <td name="td1">Triple-negative breast cancer (TNBC) cell line MDA-MB-234</td>
  <td name="td2">5'UAGGGAAGAGAAGGACAUAUGAU
CCUGCCCCAACCAUCGCUUCCUCGA
CGCGCGUUGUCGGCAUUGACUAGUA
CAUGACCACUUGA3'</td>
  <td name="td3">86</td>
  <td name="td4">46.51%</td>
  <td name="td5">Kd: 9.84 ± 1.63 or 10.77 ± 2.41</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TN58 aptamer</td>
  <td name="td1">Triple-negative breast cancer (TNBC) cell line MDA-MB-235</td>
  <td name="td2">5'UAGGGAAGAGAAGGACAUAUGAU
GCAACGUUGUGGUCCCGUUUGCACU
UUGUUUACGCGCGCAUUGACUAGUA
CAUGACCACUUGA3'</td>
  <td name="td3">86</td>
  <td name="td4">57.14%</td>
  <td name="td5">Kd: 17.17 ± 2.87 or 26.09 ± 3.20</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">TN145 aptamer</td>
  <td name="td1">Triple-negative breast cancer (TNBC) cell line MDA-MB-236</td>
  <td name="td2">5'UAGGGAAGAGAAGGACAUAUGAU
CCUCAGCGCGCAACUUCCCUCCGUU
CCCUGCCACGCGUCA3'</td>
  <td name="td3">63</td>
  <td name="td4">49.30%</td>
  <td name="td5">Kd: 26.88 ± 3.68 or 37.36 ± 3.50</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">DUX4 aptamer aptamer</td>
  <td name="td1">Double homeobox protein 4 (DUX4)</td>
  <td name="td2">5'AUCCAGAGUGACGCAGCUAACUU
AAUCAACCGCAGGUUGAUUAGCCCA
UUAGCUGGACACGGUGGCUUAGU3'</td>
  <td name="td3">71</td>
  <td name="td4">51.95%</td>
  <td name="td5">Kd: 20 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32020675/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">E22P–AbD43 aptamer</td>
  <td name="td1">Toxic beta-amyloid 42 dimer (Aβ42)</td>
  <td name="td2">5'GGGACGAAGACCAACUGAACUUU
GUGGUGGCGGCUACUCGUGUUCUUU
UGACUUUGUCCGUGCUGCCACCUUA
CUUC3'</td>
  <td name="td3">77</td>
  <td name="td4">49.38%</td>
  <td name="td5">Kd: 20 ± 6.0 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/32127399/" target="_blank" style="color:#520049"><b>2020</b></a></td>
</tr>
    
 <tr>
  <td name="td0">RBD-PB6 aptamer</td>
  <td name="td1">SARS-CoV-2 spike protein</td>
  <td name="td2">5'GGGGCCACCAACGACAUUUGUAA
UUCCUGGACCGAUACUUCCGUCAGG
ACAGAGGUUGAUAUAAAUAGUGCCC
AUGGAUCC3'</td>
  <td name="td3">81</td>
  <td name="td4">60.00%</td>
  <td name="td5">KD:~ 18 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/34876524/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B85.T2 aptamer</td>
  <td name="td1">CD19</td>
  <td name="td2">UGAGCCCUGUUCGACAGGAGGCUCA</td>
  <td name="td3">25</td>
  <td name="td4">56.67%</td>
  <td name="td5">Kd:49.9 ± 13 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/34680368/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B88.T2 aptamer</td>
  <td name="td1">CD19</td>
  <td name="td2">CCUGUUGUUCGACAGGAGGCUCACA
ACAGG</td>
  <td name="td3">30</td>
  <td name="td4">40.74%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/34680368/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Clone 1 aptamer</td>
  <td name="td1">human epidermal growth factor receptor 3 (HER3)</td>
  <td name="td2">GGAUUAAGGAGGUGAUAUUUAUG-C
AUUUGUAUGCUCAGUUGUUUAUCAC
UCUUCUU-UGCGGUGGAGGAGGAGG
UAGCUA</td>
  <td name="td3">81</td>
  <td name="td4">40.00%</td>
  <td name="td5">Kd:700 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33770580/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">IBR aptamer</td>
  <td name="td1">IL-6 receptor (IL-6R)</td>
  <td name="td2">GGAUUAAGGAGGUGAUAUUUAUGUA
GAUGUAGUAUUCCUACGAAGUAUUA
UUCUUCUUGCGGUGGAGGAGGAGGU
AGCUA</td>
  <td name="td3">80</td>
  <td name="td4">42.42%</td>
  <td name="td5">Kd:200 ± 200 n M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33590853/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ex-50.T aptamer</td>
  <td name="td1">breast cancer exosomes</td>
  <td name="td2">UGUGGCAGUUAAGAAUAGAUCUUCG
CUGCGAUU</td>
  <td name="td3">33</td>
  <td name="td4">20.00%</td>
  <td name="td5">Kd:∼0.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33614245/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">R1SR13 aptamer</td>
  <td name="td1">Regulator of calcineurin 1 (RCAN1)</td>
  <td name="td2">AUACAACAAAAACAAAAACAAGAAA</td>
  <td name="td3">25</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd:293 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/31451750/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F5f1 aptamer</td>
  <td name="td1">Fibroblast growth factor 5 (FGF5)</td>
  <td name="td2">GGGCUAGCUGAUCGUACCUCUCCGU
ACUGACCUACAGAGCGACAUACUAG
UGUAUCCAGAUACUAACAGCUAACA
CCC</td>
  <td name="td3">78</td>
  <td name="td4">50.00%</td>
  <td name="td5">Kd:0.7 ± 0.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33536494/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F5f3 aptamer</td>
  <td name="td1">Fibroblast growth factor 5 (FGF5)</td>
  <td name="td2">GGGCUAGCUGAUCGUACCUAGCGUG
AAUCCAACACGCUUGACAUGCAAAC
UGCAUCCAGAUACUAACAGCUAACA
CCC</td>
  <td name="td3">78</td>
  <td name="td4">57.14%</td>
  <td name="td5">Kd:0.57 ± 0.02 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33536494/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F5f1_56 aptamer</td>
  <td name="td1">Fibroblast growth factor 5 (FGF5)</td>
  <td name="td2">GGGCGACCUCUCCGUACUGACCUAC
AGAGCGACAUACUAGUGUAUCCAGA
UCGCCC</td>
  <td name="td3">56</td>
  <td name="td4">57.14%</td>
  <td name="td5">Kd:0.118 ± 0.003 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33536494/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">F5f3_56 aptamer</td>
  <td name="td1">Fibroblast growth factor 5 (FGF5)</td>
  <td name="td2">GGGCGACCUAGCGUGAAUCCAACAC
GCUUGACAUGCAAACUGCAUCCAGA
UCGCCC</td>
  <td name="td3">56</td>
  <td name="td4">48.08%</td>
  <td name="td5">Kd:0.92 ± 0.04 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/33536494/" target="_blank" style="color:#520049"><b>2021</b></a></td>
</tr>
    
 <tr>
  <td name="td0">CA15-2 aptamer</td>
  <td name="td1">HIV-1 Capsid (CA) lattice tubes</td>
  <td name="td2">5'GGAAGAAGAGAAUCAUACACAAG
AUCGACGUACCUCAGGGUGGUGUAU
GACUGAGGUGAAGACUGUGAACCAU
GGCAUGCGGGCAUAAGGUAGGUAAG
UCCAUA3'</td>
  <td name="td3">104</td>
  <td name="td4">72.73%</td>
  <td name="td5">Kd: 350 ± 50 nM or Kd: 502 ± 57 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/35018437/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">L-Apt.8f aptamer</td>
  <td name="td1">Amyloid precursor protein (APP) 3'UTR D-rG4</td>
  <td name="td2">5'L-GCGGCAAGAGUGGGGGAGGGG
GGUCGACGCC3'</td>
  <td name="td3">33</td>
  <td name="td4">72.73%</td>
  <td name="td5">Kd:24.06 ± 2.90 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/35762921/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D-Apt.8f aptamer</td>
  <td name="td1">Amyloid precursor protein (APP) 3'UTR D-rG5</td>
  <td name="td2">5'GCGGCAAGAGUGGGGGAGGGGGG
UCGACGCC3'</td>
  <td name="td3">33</td>
  <td name="td4">76.92%</td>
  <td name="td5">Kd:49.23±4.89nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/35762921/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D-Apt.8 aptamer</td>
  <td name="td1">Amyloid precursor protein (APP) 3'UTR D-rG6</td>
  <td name="td2">5'GCGGCGCCGAAGGGAGUGUGGGG
GGGGGUCGACGCCG3'</td>
  <td name="td3">39</td>
  <td name="td4">77.78%</td>
  <td name="td5">KD:11.14±1.43 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/35762921/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">D-Apt.21 aptamer</td>
  <td name="td1">Amyloid precursor protein (APP) 3'UTR D-rG7</td>
  <td name="td2">5'GUGGCCCGAGGUGGGCGGGAGGG
ACGUAGCGGCCAC3'</td>
  <td name="td3">36</td>
  <td name="td4">48.00%</td>
  <td name="td5">Kd:67.54±11.27 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/35762921/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Clone 1 aptamer</td>
  <td name="td1">IL-23</td>
  <td name="td2">5'GGAUUAAGGAGGUGAUAUUUAUG
CGUUCGACGAUGUGCAGAAUGGUUG
UUUGUGCGGUGGAGGAGGAGGUAGC
UA3'</td>
  <td name="td3">75</td>
  <td name="td4">48.72%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/35567939/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">MA 39/76 aptamer</td>
  <td name="td1">hypoxic phenotype in breast cancer (BC) cells</td>
  <td name="td2">5'CGCUGUGUGGAUAACAUGUAGCU
ACACAAUUCGAACCGC3'</td>
  <td name="td3">39</td>
  <td name="td4">64.71%</td>
  <td name="td5">Kd:∼35 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/36188221/" target="_blank" style="color:#520049"><b>2022</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B-ALL1 aptamer</td>
  <td name="td1">B cell surface protein CD22</td>
  <td name="td2">5'GGGAGGACGAUGCGGGCCAUUCG
UCUUUUCGUCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">64.71%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37662970/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">B-ALL2 aptamer</td>
  <td name="td1">B cell surface protein CD22</td>
  <td name="td2">5'GGGAGGACGAUGCGGUGACUCGU
CUGUUUCGUCCCCAGACGACUCGCC
CGA3'</td>
  <td name="td3">51</td>
  <td name="td4">63.75%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37662970/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">LepRapt-11 aptamer</td>
  <td name="td1">LipL32</td>
  <td name="td2">5'GGGAGGACGAUGCGGAUCCGAAG
AUCGUCCUGGAGGGAAGGGAGGGUA
GGCGCAGCAGACGACUCGCUGAGGA
UCCGAGA3'</td>
  <td name="td3">80</td>
  <td name="td4">63.75%</td>
  <td name="td5">Kd:54.45 ± 9.836 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/36812779/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">LepRapt-3 aptamer</td>
  <td name="td1">LipL32</td>
  <td name="td2">5'GGGAGGACGAUGCGGUAUGGGAC
CGCGUAAGAGUGGGAGGGGGCGGCA
GGUUCAUCAGACGACUCGCUGAGGA
UCCGAGA3'</td>
  <td name="td3">80</td>
  <td name="td4">62.50%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/36812779/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ChOmpUapta-1 aptamer</td>
  <td name="td1">V. cholerae</td>
  <td name="td2">5'UCCUCGCAUCGGGGGUGAAGUAC
CGUGCGAAAGUCGACGG3'</td>
  <td name="td3">40</td>
  <td name="td4">52.50%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/36703590/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ChOmpUapta-2 aptamer</td>
  <td name="td1">V. cholerae</td>
  <td name="td2">5'CGGUUUUAAGUGGCAAGGCGAUU
UGCCUGGGUAGAAUCCG3'</td>
  <td name="td3">40</td>
  <td name="td4">60.00%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/36703590/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ChOmpUapta-3 aptamer</td>
  <td name="td1">V. cholerae</td>
  <td name="td2">5'GCCUUGGGUAGAGGCCGGUGGGU
AUCUCCAUGAGAUGCUC3'</td>
  <td name="td3">40</td>
  <td name="td4">58.90%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/36703590/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">K1(S4) aptamer</td>
  <td name="td1">cute myeloid leukaemia 1 (AML1) Runt domain (RD)</td>
  <td name="td2">5'GGGACACAAUGGACGGCCCUGCC
ACGAUAGCGGCGCGGGAAGUAAAGU
AUACACCUAACGGCCGACAUGAGAG
3'</td>
  <td name="td3">73</td>
  <td name="td4">61.64%</td>
  <td name="td5">Kd:0.044 ± 0.003 n M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37500079/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">K2(S2) aptamer</td>
  <td name="td1">cute myeloid leukaemia 1 (AML2) Runt domain (RD)</td>
  <td name="td2">5'GGGACACAAUGGACGGCCCAGCC
ACCUAGAGCGAGCGCGCAAUGGAGA
CCCAUUGUAACGGCCGACAUGAGAG
3'</td>
  <td name="td3">73</td>
  <td name="td4">61.64%</td>
  <td name="td5">Kd:0.011 ± 0.01 n M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37500079/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">K3(S7) aptamer</td>
  <td name="td1">cute myeloid leukaemia 1 (AML3) Runt domain (RD)</td>
  <td name="td2">5'GGGACACAAUGGACGGCCCUGCC
ACCUAGAGCGAGCGCGCAAUGGAGA
CCCAUUGUAACGGCCGACAUGAGAG
3'</td>
  <td name="td3">73</td>
  <td name="td4">67.50%</td>
  <td name="td5">Kd:0.056 ± 0.003 n M</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37500079/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">10478 aptamer</td>
  <td name="td1">cardiomyocyte</td>
  <td name="td2">5'UGCAGGUGCAUGUGGGAUCACGC
GCGGUUAGGUCGCCGCG3'</td>
  <td name="td3">40</td>
  <td name="td4">56.57%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37765072/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">DENV-3 aptamer</td>
  <td name="td1">dengue NS1</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCUUUG
AUCUCGUGGGGGUGUGUCGCGGGAG
ACACCAUGGAAUAUAUGGCUGAUUU
CAUGUGGGCACCACGGUCGGAUCCA
C3'</td>
  <td name="td3">99</td>
  <td name="td4">56.57%</td>
  <td name="td5">Kd:37.57 ± 10.34 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37237536/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">DENV-6 aptamer</td>
  <td name="td1">dengue NS1</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCCGUA
GUCGUAUCUCCAUUACCCAGAAUGG
UGAUGCGCCGUGAAGAGCGGUUUAG
GGAAUUGGCACCACGGUCGGAUCCA
C3'</td>
  <td name="td3">99</td>
  <td name="td4">56.44%</td>
  <td name="td5">Kd:41.40 ± 9.29 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37237536/" target="_blank" style="color:#520049"><b>2023</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PRapt-1 aptamer</td>
  <td name="td1">Progesterone Receptor</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCUACU
UGGGAGGGGAGCGAACCUUCCAGUU
CGUCUCUCUUGGGAAAGGGUUUGUA
GCUAAUCAGGCACCACGGUCGGAUC
CAC3'</td>
  <td name="td3">101</td>
  <td name="td4">60.61%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38802696/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PRapt-2 aptamer</td>
  <td name="td1">Progesterone Receptor</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCCUGG
GGGCGGGUUGGGUUGUAUCAUUUGC
CGUUAGCCUGGUACAAAAGGGAGGC
ACUGGAGGCACCACGGUCGGAUCCA
C3'</td>
  <td name="td3">99</td>
  <td name="td4">63.37%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38802696/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">PRapt-3 aptamer</td>
  <td name="td1">Progesterone Receptor</td>
  <td name="td2">5'GGAGCUCAGCCUUCACUGCUUGC
UUUUGGGGGUGCCGUACGCAUUGCG
GCAGGGGGAAGAGGAGGGUAGCGAC
CAGUCGAAGGCACCACGGUCGGAUC
CAC3'</td>
  <td name="td3">101</td>
  <td name="td4">50.82%</td>
  <td name="td5">Kd:380 nM±35 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38802696/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">LxC aptamer</td>
  <td name="td1">levofloxacin</td>
  <td name="td2">5'GGGCACUCCAAGCUAGAUCUACC
GGUUUGGGUAGUGCGAUUCGCACUG
AAUGCCGCGUAGGCUUCGCUACUGG
CUUCUACUACGUACCCAAAAUGGCU
AGCAAAGGAGAAGAACUUUUCACU3
'</td>
  <td name="td3">122</td>
  <td name="td4">56.16%</td>
  <td name="td5">Kd:6 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38275309/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">LxCsh aptamer</td>
  <td name="td1">levofloxacin</td>
  <td name="td2">5'GGGUUUGGGUAGUGCGAUUCGCA
CUGAAUGCCGCGUAGGCUUCGCUAC
UGGCUUCUACUACGUACCCAAACCC
3'</td>
  <td name="td3">73</td>
  <td name="td4">40.79%</td>
  <td name="td5">Kd:6 μM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38275309/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">Clone 1 aptamer</td>
  <td name="td1">human interleukin-17 receptor A (IL-17RA)</td>
  <td name="td2">5'GGAUUAAGGAGGUGAUAUUUAUG
AUGAUUGUGUUUUAUCUGCAUCAUA
AUGAGUGCGGUGGAGGAGGAGGUAG
CUA3'</td>
  <td name="td3">76</td>
  <td name="td4">21.84%</td>
  <td name="td5">Kd:5 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38031342/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">VF1 aptamer</td>
  <td name="td1">VβBCC complex</td>
  <td name="td2">5'gggagacaagaauaaacgcucaa
UUGGAUCGAAACCAUGUAGACAUGG
CCAUCCAAAGGGAGAuucgacagga
ggcucacaacaggc3'</td>
  <td name="td3">87</td>
  <td name="td4">21.84%</td>
  <td name="td5">Kd:4.3 ± 0.1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38740386/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">VN49 aptamer</td>
  <td name="td1">VβBCC complex</td>
  <td name="td2">5'gggagacaagaauaaacgcucaa
AAGUGGCCUAGUACUCGACUCOAAC
CUAGUAGUCUAGGGUuucgacagga
ggcucacaacaggc3'</td>
  <td name="td3">87</td>
  <td name="td4">58.62%</td>
  <td name="td5">Kd:9.62 ± 0.02 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38740386/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">VF1-29 aptamer</td>
  <td name="td1">VβBCC complex</td>
  <td name="td2">5'GGAGCGAAACCAUGUAGACAUGG
CCCUCC3'</td>
  <td name="td3">29</td>
  <td name="td4">13.89%</td>
  <td name="td5">Kd:2.7 ± 0.1 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38740386/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer 15 aptamer</td>
  <td name="td1">Plasmodium tRip200-402WT</td>
  <td name="td2">5'gggagacaagaauaaacgcucaa
AUGAACACCUAGUCAAGACCGUUUA
uucgacaggaggcucacaacaggc3
'</td>
  <td name="td3">72</td>
  <td name="td4">18.06%</td>
  <td name="td5">Kd:66  ± 2.2 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37414209/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer 17 aptamer</td>
  <td name="td1">Plasmodium tRip200-402WT</td>
  <td name="td2">5'gggagacaagaauaaacgcucaa
GGUGAGAUAACCUGUCAGCACCUAG
uucgacaggaggcucacaacaggc3
'</td>
  <td name="td3">72</td>
  <td name="td4">16.67%</td>
  <td name="td5">Kd:71.7 ± 6.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37414209/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer 37 aptamer</td>
  <td name="td1">Plasmodium tRip200-402WT</td>
  <td name="td2">5'gggagacaagaauaaacgcucaa
ACCUGACCUACAGGUAACGCUAACA
uucgacaggaggcucacaacaggc3
'</td>
  <td name="td3">72</td>
  <td name="td4">15.28%</td>
  <td name="td5">Kd:110 ± 11.8 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37414209/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">aptamer 24 aptamer</td>
  <td name="td1">Plasmodium tRip200-402WT</td>
  <td name="td2">5'gggagacaagaauaaacgcucaa
GAGAAGUCAGAUCGAAACACCUAGA
uucgacaggaggcucacaacaggc3
'</td>
  <td name="td3">72</td>
  <td name="td4">37.80%</td>
  <td name="td5">Kd:37.3 ± 9 nM</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/37414209/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ApBC1 aptamer</td>
  <td name="td1">MGSO-3 cells</td>
  <td name="td2">5'GGGUUGUGUAGAUGAGGUAACUG
AUGAAAAUGAUACU8uUAUACAGAA
AUUAUCACUCCAGUGACGUCUGAAC
UGCUUCGAA3'</td>
  <td name="td3">82</td>
  <td name="td4">46.05%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38372191/" target="_blank" style="color:#520049"><b>2024</b></a></td>
</tr>
    
 <tr>
  <td name="td0">ApBC2 aptamer</td>
  <td name="td1">MGSO-3 cells</td>
  <td name="td2">5'GGGUUGUGUAGAUGCGUCAGUAU
CAUUUGGAAAUGUUUUCGUCAUGGA
GGUUCCGUGACGUCUGAACUGCUUC
GAA3'</td>
  <td name="td3">76</td>
  <td name="td4">46.05%</td>
  <td name="td5">NA</td>
  <td name="td6"><a href="https://pubmed.ncbi.nlm.nih.gov/38372191/" target="_blank" style="color:#520049"><b>2024</b></a></td>
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
<br>