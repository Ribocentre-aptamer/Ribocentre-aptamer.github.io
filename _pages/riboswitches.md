---
title: "Riboswitch - Riboswitch"
layout: riboswitch
excerpt: "Riboswitches: A riboswitch database"
sitemap: True
permalink: /riboswitches/
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
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #c9c5c5;
      border-radius: 5px;
      width:250px;
	    height:50px;
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
    table {
        border: 1px solid #ffffff;
        border: 1px solid #ffffff;
		    border: 1px solid #ffffff;
		    border-radius: 5px;
		    background-color: #fff;
		    border-radius: 5px;
        }
		  th {
        background-color: #520049;
        background-color: #520049;
        background-color: #520049;
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
		  td {
		    background-color: #ffffff;
		    background-color: #ffffff;
		    background-color: #ffffff;
		    }		
		  th, td {
		  padding: 10px 10px;
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
    border-radius: 4px;
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
<h1 class="post-title" itemprop="name headline">RNA Aptamers</h1>
    
RNA Aptamers are nucleic acid molecules that mimic antibodies by folding into complex 3D shapes that bind to specific targets. Although some aptamers exist naturally as the ligand-binding elements of riboswitches, most are generated in vitro and can be tailored for a specific target.
<br>
<br><br>
        
<p class="header_box" >Statistical information </p>
<img src="/images/aptamers/Aptamers_classification.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>

<!--a href="/downloads/riboswitches_page/Classification_of_Riboswitches.pdf" target="_blank" download="Classification_of_Riboswitches.pdf"><button class="btn btn-secondary" style="color:#520049" ><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download FIGURE</button></a-->   
<br>
<p>For more detailed information about each Aptamer, please browse the table below.</p>
<br>

<p class="header_box" >Detail information</p>    
This section lists all the experimentally validated Aptamers.
<br><br>
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
  <select id="downloadOptions">
    <option value="" disabled selected>Select an option</option>
    <option value="/downloads/RNA-aptamers_page/Small_molecules.xlsx">Small molecules</option>
     <option value="/downloads/RNA-aptamers_page/Proteins.xlsx">Proteins</option>
      <option value="/downloads/RNA-aptamers_page/Nucleic_acids.xlsx">Nucleic acids</option>
      <option value="/downloads/RNA-aptamers_page/Others.xlsx">Others</option>
    <option value="/downloads/RNA-aptamers/All_tables.xlsx">all table in this page </option>
  </select>
  <!-- Download button -->
  <!--button class="button" onclick="downloadExcel()">Download</button-->
</div>
<br>
  <!-- 按钮 -->
  <!--div class="button-container">
      <button class="button" onclick="showSheet('sheet1')">Small molecules</button>
      <button class="button" onclick="showSheet('sheet2')">Proteins</button>
      <button class="button" onclick="showSheet('sheet3')">Nucleic acids</button>
      <button class="button" onclick="showSheet('sheet3')">Others</button>
  </div-->
        
<div id="sheet1" class="sheet">
    <h2>Small molecules</h2>
    <table id="cfttable">
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
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/ATP-aptamer" target="_blank" style="color:#520049"><b>ATP aptamer</b></a></td>
        <td name="td2">ATP,<br>adenosine</td>
        <td name="td3">ATP (Adenosine 5'-triphosphate) is an important substance for energy storage and metabolism in the body, which provides energy for metabolism and plays a role as a coenzyme in cells. ATP is an important endogenous signal molecule in immunity and inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7687750/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1AM0" target="_blank" style="color:#520049"><b>1AM0</b> </a>(AMP)</td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/B4-25-aptamer" target="_blank" style="color:#520049"><b>B4-25 aptamer</b></a></td>
        <td name="td2">Reactive Blue 4</td>
        <td name="td3">In 1990, Andrew D. Ellington & Jack W. Szostak isolated RNA binding to some dyes through in vitro selection experiments, and named these RNA specifically binding as aptamers.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr>    
	  </tbody>
  </table>
</div>        
    
<div id="sheet4" class="sheet">
    <h2>Proteins</h2>
    <table id="cfttable">
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
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/bacteriophage-MS2-coat-protein-aptamer" target="_blank" style="color:#520049"><b>Bacteriophage MS2 coat protein-aptamer</b></a></td>
        <td name="td2">Bacteriophage MS2 coat protein</td>
        <td name="td3">The coat protein of the RNA bacteriophage MS2 binds a specific stem-loop structure in viral RNA to accomplish encapsidation of the genome and translational repression of replicase synthesis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1469719/" target="_blank" style="color:#520049"><b>1992</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6MSF" target="_blank" style="color:#520049"><b>6MSF</b> </a></td>
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
</html><br><br>
        