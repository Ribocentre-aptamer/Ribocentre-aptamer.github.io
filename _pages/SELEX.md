---
title: "Ribocentre-aptamer - SELEX"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /SELEX/
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
    font-weight: bold;
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
.image-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0; /* 无间隙 */
        }
        
        .image-grid a {
            position: relative;
            display: block;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0); /* 初始阴影效果 */
            transition: box-shadow 0.3s ease; /* 添加过渡效果 */
        }
        
        .image-grid img {
            width: 100%;
            height: auto;
            transition: transform 0.3s ease; /* 添加过渡效果 */
        }
        
        .image-grid a:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 鼠标悬停时添加阴影效果 */
        }
        
        .image-grid a:hover img {
            transform: scale(1.1); /* 鼠标悬停时放大图片 */
        }
  </style>
</head>

<meta name="google-site-verification" content="uLZVKfay17Zcx_rzSlECNKhxf9gpvF4jLw3Zsa4agTs" />
<body onload="showSheet('sheet1')">
<h1 class="post-title" itemprop="name headline">SELEX</h1>
<p>The systematic evolution of ligands by exponential enrichment (SELEX) is a powerful technique used for the in vitro selection of nucleic acid ligands, such as aptamers, against a wide range of targets including proteins, small molecules, and even complex systems.</p>
<p>For common improved methods in SELEX's evolution, please see the table below.</p>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="image-grid">
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/Conventional-SELEX">
              <img src="/images/SELEX/Conventional-SELEX.svg" alt="Image 1">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/CE-SELEX">
              <img src="/images/SELEX/CE-SELEX.svg" alt="Image 2">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/MB-SELEX">
              <img src="/images/SELEX/MB-SELEX.svg" alt="Image 3">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/MB-SELEX">
              <img src="/images/SELEX/Capture-SELEX.svg" alt="Image 4">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/Cell-SELEX">
              <img src="/images/SELEX/Cell-SELEX.svg" alt="Image 5">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/In-vivo-SELEX">
              <img src="/images/SELEX/In-vivo-SELEX-1.svg" alt="Image 6">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/In-vivo-SELEX">
              <img src="/images/SELEX/In-vivo-SELEX-2.svg" alt="Image 7">
            </a>
            <a href="{{ site.url }}{{ site.baseurl }}/_posts/One-round-SELEX">
              <img src="/images/SELEX/One-round-SELEX.svg" alt="Image 8">
            </a>
    </div>

<br>
<br>
<p class="header_box">Detailed information</p>    
<p>This section lists some of the improved methods that have been developed during SELEX's development.</p>
<br>
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
</div>
<br>

  
<p class="header_box" >SELEX Methods</p>  
<div id="sheet1" class="sheet">
    <table id="cfttable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Development</th>
        <th onclick="sortTable(2)">Description</th>
        <th onclick="sortTable(3)">Target</th>
        <th onclick="sortTable(4)">Examples</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Conventional-SELEX" target="_blank" style="color:#520049"><b>Conventional SELEX</b></a></td>
        <td name="td1"><a href="https://pubmed.ncbi.nlm.nih.gov/2200121/" target="_blank" style="color:#520049"><b>1990</b></a></td>
        <td name="td2">SELEX is a method used to select specific nucleic acid sequences, with specific functions from a large pool of random sequences. SELEX was developed in the early 1990s by Larry Gold and Jack Szostak as a solution to the challenge of isolating nucleic acid ligands capable of binding specific targets.</td>
        <td name="td3">Proteins, small molecules, and even complex systems</td>
        <td name="td4">
        <a href="https://pubmed.ncbi.nlm.nih.gov/10339553/" target="_blank" style="color:#520049"><b>Malachite green (MG)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>DMHBI</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/28945233/" target="_blank" style="color:#520049"><b>DFHO</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/30382099/" target="_blank" style="color:#520049"><b>Oxazole thiazole blue (OTB)</b></a>,<br>
        <a href="(https://pubmed.ncbi.nlm.nih.gov/20159999/" target="_blank" style="color:#520049"><b>Tetramethylrhodamine (TMR)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/31548726/" target="_blank" style="color:#520049"><b>HBC</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/35294188/" target="_blank" style="color:#520049"><b>DFAME</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/10074372/" target="_blank" style="color:#520049"><b>NF-kappaB</b></a>,<br>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1369933/" target="_blank" style="color:#520049"><b>Citrulline</b></a>,<br>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1369933/" target="_blank" style="color:#520049"><b>Arginine</b></a>,<br>
        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.199410841" target="_blank" style="color:#520049"><b>Flavin mononucleotide (FMN) </b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/36097297/" target="_blank" style="color:#520049"><b>Flavin adenine dinucleotide (FAD)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>Cyanocobalamin (Vitamin B12)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/7687750/" target="_blank" style="color:#520049"><b>ATP</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049"><b>GTP</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>Tetracycline</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9383458/" target="_blank" style="color:#520049"><b>Aminoglycoside antibiotic</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>Streptomycin</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/7510417/" target="_blank" style="color:#520049"><b>Theophylline</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>Tobramycin</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9056763/" target="_blank" style="color:#520049"><b>Ribosomal protein S8</b></a>,<br>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1370407/" target="_blank" style="color:#520049"><b>Mammalian translation initiation factor 4A (eIF4A) </b></a>,<br>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2390795/" target="_blank" style="color:#520049"><b>Human IgG</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>Human thrombin</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9346949/" target="_blank" style="color:#520049"><b>Yeast RNA polymerase II (Pol II) </b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>Prion protein (PrPC)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/10233958/" target="_blank" style="color:#520049"><b>HTLV-1 arginine-rich Rex peptide</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/8289245/" target="_blank" style="color:#520049"><b>HIV-1 REV peptide</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/10886365/" target="_blank" style="color:#520049"><b>HIV Tat protein</b></a><br>
        </td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CE-SELEX" target="_blank" style="color:#520049"><b>Capillary electrophoresis-SELEX(CE-SELEX)</b></a></td>
        <td name="td1"><a href="https://pubmed.ncbi.nlm.nih.gov/14709039/" target="_blank" style="color:#520049"><b>2004</b></a></td>
        <td name="td2">CE-SELEX is a variation of the SELEX technique that integrates capillary electrophoresis  as a separation method during the selection process.</td>
        <td name="td3">Proteins, small molecules, and cells</td>
        <td name="td4">
        <a href="https://pubmed.ncbi.nlm.nih.gov/14709039/" target="_blank" style="color:#520049"><b>Immunoglobulin E (IgE)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/16194066/" target="_blank" style="color:#520049"><b>Human immunodeficiency virus reverse transcriptase (HIV-1 RT)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/20564698/" target="_blank" style="color:#520049"><b>Myotonic dystrophy kinase-related Cdc42-binding kinase (αMRCK)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/22965726/" target="_blank" style="color:#520049"><b>Bovine catalase</b></a><br>
        </td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/MB-SELEX" target="_blank" style="color:#520049"><b>Magnetic-based SELEX(MB-SELEX)</b></a></td>
        <td name="td1"><a href="https://pubmed.ncbi.nlm.nih.gov/9168972/" target="_blank" style="color:#520049"><b>1997</b></a></td>
        <td name="td2">Magnetic bead-based SELEX is a variation of the SELEX technique that utilizes magnetic beads as a solid support matrix for the selection process.</td>
        <td name="td3">Proteins, small molecules</td>
        <td name="td4">
        <a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>TO1-biotin</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/19246008/" target="_blank" style="color:#520049"><b>Transcription repressor TetR</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>HEWL (lysozyme)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>G-protein-coupled receptor kinase 2 (GRK2)</b></a><br>
        </td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Cell-SELEX" target="_blank" style="color:#520049"><b>Cell-SELEX</b></a></td>
        <td name="td1"><a href="https://pubmed.ncbi.nlm.nih.gov/20539292/" target="_blank" style="color:#520049"><b>2006</b></a></td>
        <td name="td2">Cell-SELEX, also known as cell-based systematic evolution of ligands by exponential enrichment, is a technique derived from the SELEX method. It enables the selection of aptamers against cell surface molecules, receptors, or whole cells.</td>
        <td name="td3">Cells and membrane proteins</td>
        <td name="td4">
        <a href="https://pubmed.ncbi.nlm.nih.gov/12124337/" target="_blank" style="color:#520049"><b>Human glutamate carboxypeptidase II (GCPII)</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/21321690/" target="_blank" style="color:#520049"><b>Small cell lung cancer</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/23226512/" target="_blank" style="color:#520049"><b>Mouse tumor endothelial cells</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/23403083/" target="_blank" style="color:#520049"><b>Human hepatocarcinoma</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/24857291/" target="_blank" style="color:#520049"><b>Colorectal cancer</b></a><br>
        </td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/In-vivo-SELEX" target="_blank" style="color:#520049"><b>In vivo SELEX</b></a></td>
        <td name="td1">In vivo SELEX-1: <a href="https://pubmed.ncbi.nlm.nih.gov/8255755/" target="_blank" style="color:#520049"><b>1993</b></a><br>In vivo SELEX-2: <a href="https://pubmed.ncbi.nlm.nih.gov/19946274/" target="_blank" style="color:#520049"><b>2010</b></a></td>
        <td name="td2">In vivo SELEX is an extension of the SELEX  method that aims to generate aptamers within a living organism, providing a more realistic selection pressure.</td>
        <td name="td3">Biomolecules, cells, and tissues</td>
        <td name="td4">
        <a href="https://pubmed.ncbi.nlm.nih.gov/8255755/" target="_blank" style="color:#520049"><b>HIV-1</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/9733847/" target="_blank" style="color:#520049"><b>Rous sarcoma virus</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/19946274/" target="_blank" style="color:#520049"><b>Hepatic colon cancer metastases</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/23299833/" target="_blank" style="color:#520049"><b>Capillary endothelia and parenchyma in brain</b></a><br>
        </td>
      </tr>  
        <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/One-round-SELEX" target="_blank" style="color:#520049"><b>One round-SELEX</b></a></td>
        <td name="td1"><a href="https://pubmed.ncbi.nlm.nih.gov/17697378/" target="_blank" style="color:#520049"><b>2007a</b></a><br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/17262788/" target="_blank" style="color:#520049"><b>2007b</b></a><br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/19183794/" target="_blank" style="color:#520049"><b>2008</b></a><br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/22860007/" target="_blank" style="color:#520049"><b>2012a</b></a><br><a href="https://pubmed.ncbi.nlm.nih.gov/22505517/" target="_blank" style="color:#520049"><b>2012b</b></a></td>
        <td name="td2">One round-SELEX is an evolution of the traditional SELEX methodology, designed to address some of the limitations and inefficiencies associated with multiple rounds of selection by reducing the number of rounds required to identify high-affinity aptamers, thereby saving time and resources.</td>
        <td name="td3">Small molecules, proteins and cells</td>
        <td name="td4">
        <a href="https://pubmed.ncbi.nlm.nih.gov/17697378/" target="_blank" style="color:#520049"><b>Vaccinia virus</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/19183794/" target="_blank" style="color:#520049"><b>Ovalbumin</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/19183794/" target="_blank" style="color:#520049"><b>Botulinum neurotoxin</b></a>,<br>
        <a href="https://pubmed.ncbi.nlm.nih.gov/22505517/" target="_blank" style="color:#520049"><b>Kallikrein-related peptidase 6 (KLK6)</b></a><br>
        </td>
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
<br>