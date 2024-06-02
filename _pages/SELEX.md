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
  .header_boxx1 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:180px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx2 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:230px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
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
  </style>
</head>

<meta name="google-site-verification" content="uLZVKfay17Zcx_rzSlECNKhxf9gpvF4jLw3Zsa4agTs" />
<body onload="showSheet('sheet1')">
<h1 class="post-title" itemprop="name headline">SELEX</h1>
The systematic evolution of ligands by exponential enrichment (SELEX) is a powerful technique used for the in vitro selection of nucleic acid ligands, such as aptamers, against a wide range of targets including proteins, small molecules, and even complex systems<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br> 
For common improved methods in SELEX's evolution, please see the table below.
<br>
<br><br>
        


<p class="header_boxx2" >Detailed information</p>    
This section lists some of the improved methods that have been developed during SELEX's development.
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
  
<p class="header_boxx1" >SELEX Methods</p>


      
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
        <td name="td1">1990</td>
        <td name="td2">SELEX is a method used to select specific nucleic acid sequences, with specific functions from a large pool of random sequences. SELEX was developed in the early 1990s by Larry Gold and Jack Szostak as a solution to the challenge of isolating nucleic acid ligands capable of binding specific targets.</td>
        <td name="td3">Proteins, small molecules and even complex systems</td>
        <td name="td4">T4 DNA polymerase, ATP...</td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CE-SELEX" target="_blank" style="color:#520049"><b>Capillary electrophoresis-SELEX(CE-SELEX)</b></a></td>
        <td name="td1">2004</td>
        <td name="td2">CE-SELEX is a variation of the SELEX technique that integrates capillary electrophoresis  as a separation method during the selection process.</td>
        <td name="td3">Proteins, small molecules, and cells</td>
        <td name="td4"></td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/MB-SELEX" target="_blank" style="color:#520049"><b>Magnetic-based SELEX(MB-SELEX)</b></a></td>
        <td name="td1">1997</td>
        <td name="td2">Magnetic bead-based SELEX is a variation of the SELEX technique that utilizes magnetic beads as a solid support matrix for the selection process.</td>
        <td name="td3">Proteins, small molecules</td>
        <td name="td4"></td>
      </tr>    
      <tr>
        <td name="td0"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Cell-SELEX" target="_blank" style="color:#520049"><b>Cell-SELEX</b></a></td>
        <td name="td1">2006</td>
        <td name="td2">Cell-SELEX, also known as cell-based systematic evolution of ligands by exponential enrichment, is a technique derived from the SELEX method. It enables the selection of aptamers against cell surface molecules, receptors, or whole cells.</td>
        <td name="td3">Cells</td>
        <td name="td4"></td>
      </tr>    
      <tr>
        <td name="td0" rowspan = "1">...</td>
        <td name="td1">...</td>
        <td name="td2">...</td>
        <td name="td3">...</td>
        <td name="td4">...</td>
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