---
title: "Ribocentre-aptamer - Fluorescences"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /fluorescences/
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
.blowheader_box1{
    display: block;
      padding: 6px;
      font-size:20px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 1px;
      width:400px;
        height:40px;
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
.image-grid img {
    width: 100%;
    height: auto;
}
  </style>
</head>

<meta name="google-site-verification" content="uLZVKfay17Zcx_rzSlECNKhxf9gpvF4jLw3Zsa4agTs" />
<body onload="showSheet('sheet1')">
<h1 class="post-title" itemprop="name headline">Fluorescences and Light-up RNA aptamers</h1>
<p>Light-up RNA aptamers are fluorescent RNA molecules that become fluorescent upon binding to specific fluorophores. This concept emerged from the need for non-invasive, real-time imaging tools to study RNA molecules and their interactions within living cells. Traditional fluorescent tags like GFP (green fluorescent protein) are not suitable for RNA because they are protein-based. Thus, the development of RNA-based fluorescent tags (light-up RNA aptamers) became crucial for expanding the toolkit available for RNA visualization and functional studies.</p>
<p>The discovery of Spinach, the first light-up RNA aptamer, by Jaffrey and colleagues in 2011 marked a significant milestone. Spinach binds to a fluorophore called DFHBI and emits green fluorescence, mimicking GFP. Following Spinach, several other light-up aptamers were developed, including Mango, Broccoli, and Corn, each binding to different fluorophores and exhibiting different fluorescence properties. Researchers optimize light-up RNA aptamers for improved brightness, stability, and minimal background fluorescence. This involves iterative cycles of selection and mutation to enhance the aptamer’s performance for better performance in cellular environments.</p>
<p>Light-up RNA aptamers represent a significant advancement in the study of RNA biology, offering a versatile and powerful tool for real-time imaging and functional analysis of RNA molecules in living cells.</p>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/fluorescences/Light-up-aptamer.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">


<p class="header_box">Detailed information</p>    
<p>This section lists some common fluorescent molecule-light-up RNA aptamer pairs.</p>
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
</div>
<br>
<br>



<p class="header_box">Fluorogenic mechanisms</p>
<p>Light-up RNA aptamers contain specific binding sites that interact with small-molecule fluorophores. These fluorophores are non-fluorescent or weakly fluorescent in the absence of the aptamer. Upon binding to the aptamer, the fluorophore undergoes a conformational change that enhances its fluorescence properties. This binding typically occurs through a combination of hydrogen bonding, Van der Waals interactions, and stacking interactions within the RNA’s three-dimensional structure.</p>
<p>Understanding their mechanism of action involves exploring how these aptamers interact with their fluorophores to produce fluorescence, the structural basis of their function, and the principles guiding their design and optimization.</p>

<p class="blowheader_box1">Twisted Intramolecular Charge Transfer (TICT)</p>
<p>TICT refers to a mechanism where the binding of a target induces a conformational change in the RNA aptamer, leading to the activation or enhancement of fluorescence through a twisted charge-transfer state. This state involves the separation of charge within the molecule, resulting in a geometry that promotes fluorescence.</p>
<p>In the unbound state, the RNA aptamer and its fluorophore may be in a non-planar or less twisted conformation with limited charge separation, leading to weak or no fluorescence. Upon binding to a specific target, the aptamer undergoes a conformational change that facilitates a twist between the donor and acceptor moieties within the fluorophore. This twist maximizes the charge separation, creating an intramolecular charge transfer state with a large dipole moment. The TICT state stabilizes the fluorophore in a way that enhances its fluorescence emission, often resulting in a red-shifted and intensified fluorescence signal compared to the non-twisted state.</p>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/fluorescences/Twisted-intramolecular charge-transfer(TICT)-01.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">

<p class="blowheader_box1">Contact Quenching (CQ)</p>
<p>Contact quenching in light-up RNA aptamers involves the reduction or elimination of fluorescence due to the close physical proximity of a quencher molecule to the fluorophore. This process is highly dependent on the spatial arrangement and interaction between the RNA aptamer and its target.</p>
<p>In the absence of the target, the fluorophore may be in close proximity to a quencher moiety within the RNA aptamer, resulting in minimal fluorescence. Binding of the target induces a conformational change in the RNA aptamer that separates the fluorophore from the quencher. The increased distance between the fluorophore and quencher reduces the efficiency of non-radiative energy transfer, allowing the fluorophore to emit fluorescence. The efficiency of contact quenching and subsequent fluorescence recovery can be modulated by the nature of the target-aptamer interaction and the specific design of the aptamer.</p>
<p>Light-up RNA aptamers exploiting contact quenching are used in biosensors to detect various biomolecules by monitoring changes in fluorescence.These aptamers facilitate the detection and quantification of analytes in complex mixtures.</p>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/fluorescences/Contact-quenchingCQ).svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">

<p class="blowheader_box1">Spirolactonization (SP)</p>
<p>Spirolactonization in light-up RNA aptamers involves the formation of a spirolactone ring structure upon binding to a target. This structural change enhances the fluorescence of the aptamer, providing a clear signal upon target recognition.</p>
<p>In the absence of the target, the RNA aptamer remains in a conformation that does not support spirolactone formation, leading to weak or no fluorescence. Binding of the target induces a conformational rearrangement in the aptamer, promoting the formation of a spirolactone ring. The formation of the spirolactone ring stabilizes the fluorophore in a fluorescent state, significantly enhancing its emission properties. The structural rigidity and planarity introduced by the spirolactone ring reduce non-radiative decay pathways, leading to a bright fluorescence signal.</p>
<p>Spirolactonization-based light-up RNA aptamers are used to detect specific targets with high sensitivity and specificity. These aptamers can serve dual functions in theranostics, providing both diagnostic imaging and therapeutic action.</p>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/fluorescences/Spirolactonization(SP).svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<br>
<br>
<br>

<p class="header_box">Properties of Fluorophore-Aptamer pairs</p>
<p>Each light-up RNA aptamer is usually specific to a particular fluorophore. The specificity arises from the precise shape and chemical environment of the binding pocket within the RNA. The sequence and structure of the aptamer dictate the compatibility with the fluorophore, ensuring selective binding and fluorescence activation. Researchers focused on optimizing these aptamers for improved brightness, stability, and minimal background fluorescence. This included engineering the aptamers and fluorophores for better performance in cellular environments.</p>
<p>The table below lists several fluorescent small molecular-RNA pairings for which interaction patterns have been known through crystallographic studies or NMR. (The table only shows the representative individuals of each type of fluorescent small molecule. For more details, click on small molecule to jump to the corresponding view).</p>

<div id="sheet1" class="sheet">
    <table id="cfttable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Fluorescent molecule</th>
        <th onclick="sortTable(1)">IUPAC</th>
        <th onclick="sortTable(2)">Molecular Formula</th>
        <th onclick="sortTable(3)">Molar mass</th>
        <th onclick="sortTable(4)">CAS</th>
        <th onclick="sortTable(5)">Excitation (nm)</th>
        <th onclick="sortTable(6)">Emission (nm)</th>
        <th onclick="sortTable(7)">Aptamer</th>
        <th onclick="sortTable(8)">Fluorogenic mechanisms</th>
      </tr>
      </thead>
    <tbody>
       <tr>
        <td name="td0" rowspan = "1">DFHBI</td>
        <td name="td1">(5Z)-5-[(3,5-difluoro-4-hydroxyphenyl)methylidene]-2,3-dimethylimidazol-4-one</td>
        <td name="td2">C<sub>12</sub>H<sub>10</sub>F<sub>2</sub>N<sub>2</sub>O<sub>2</sub></td>
        <td name="td3">252.22 g/mol</td>
        <td name="td4">1241390-29-3</td>
        <td name="td5">469</td>
        <td name="td6">501</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-aptamer" target="_blank" style="color:#520049"><b>Spinach aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">MG</td>
        <td name="td1">[4-[[4-(dimethylamino)phenyl]-phenylmethylidene]cyclohexa-2,5-dien-1-ylidene]-dimethylazanium;chloride</td>
        <td name="td2">C<sub>23</sub>H<sub>25</sub>ClN<sub>2</sub></td>
        <td name="td3">364.9 g/mol</td>
        <td name="td4">569-64-2</td>
        <td name="td5">630</td>
        <td name="td6">655</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/MG-aptamer" target="_blank" style="color:#520049"><b>MG aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">HBC 530</td>
        <td name="td1">4-[(E)-1-cyano-2-[4-[2-hydroxyethyl(methyl)amino]phenyl]ethenyl]benzonitrile</td>
        <td name="td2">C<sub>19</sub>H<sub>17</sub>N<sub>3</sub>O</td>
        <td name="td3">303.4 g/mol</td>
        <td name="td4">156840-13-0</td>
        <td name="td5">485</td>
        <td name="td6">530</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Pepper-aptamer" target="_blank" style="color:#520049"><b>Pepper aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">TO1</td>
        <td name="td1">4-methylbenzenesulfonate;(2Z)-3-methyl-2-[(1-methylquinolin-1-ium-4-yl)methylidene]-1,3-benzothiazole</td>
        <td name="td2">C<sub>26</sub>H<sub>24</sub>N<sub>2</sub>O<sub>3</sub>S<sub>2</sub></td>
        <td name="td3">476.6 g/mol</td>
        <td name="td4">107091-89-4</td>
        <td name="td5">510</td>
        <td name="td6">535</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-III-aptamer(YO3)" target="_blank" style="color:#520049"><b>Mango aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">DFHO</td>
        <td name="td1">(5Z)-5-[(3,5-difluoro-4-hydroxyphenyl)methylidene]-3-methyl-2-(nitrosomethylidene)imidazolidin-4-one</td>
        <td name="td2">C<sub>12</sub>H<sub>9</sub>F<sub>2</sub>N<sub>3</sub>O<sub>3</sub></td>
        <td name="td3">281.21 g/mol</td>
        <td name="td4">1420815-34-4</td>
        <td name="td5">505</td>
        <td name="td6">545</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Corn-aptamer" target="_blank" style="color:#520049"><b>Corn aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">DMHBI</td>
        <td name="td1">5-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-2,3-dimethylimidazol-4-one</td>
        <td name="td2">C<sub>14</sub>H<sub>16</sub>N<sub>2</sub>O<sub>4</sub></td>
        <td name="td3">276.29 g/mol</td>
        <td name="td4">1629243-34-0</td>
        <td name="td5">400</td>
        <td name="td6">537</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Chili-aptamer" target="_blank" style="color:#520049"><b>Chili aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">YO3</td>
        <td name="td1">(2Z)-3-methyl-2-[(E)-3-(1-methylquinolin-1-ium-4-yl)prop-2-enylidene]-1,3-benzoxazole</td>
        <td name="td2">C<sub>21</sub>H<sub>19</sub>N<sub>2</sub>O<sup>+</sup></td>
        <td name="td3">315.4 g/mol</td>
        <td name="td4">NA</td>
        <td name="td5">595</td>
        <td name="td6">620</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-III-aptamer(YO3)" target="_blank" style="color:#520049"><b>Mango-III aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">ThT</td>
        <td name="td1">4-(3,6-dimethyl-1,3-benzothiazol-3-ium-2-yl)-N,N-dimethylaniline</td>
        <td name="td2">C<sub>17</sub>H<sub>19</sub>ClN<sub>2</sub>S</td>
        <td name="td3">318.9 g/mol</td>
        <td name="td4">2390-54-7</td>
        <td name="td5">455</td>
        <td name="td6">485</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Beetroot-aptamer(ThT)" target="_blank" style="color:#520049"><b>Beetroot aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">TMR</td>
        <td name="td1">2-[3-(dimethylamino)-6-dimethylazaniumylidenexanthen-9-yl]benzoate</td>
        <td name="td2">C<sub>24</sub>H<sub>22</sub>N<sub>2</sub>O<sub>3</sub></td>
        <td name="td3">386.4 g/mol</td>
        <td name="td4">120718-52-7</td>
        <td name="td5">564</td>
        <td name="td6">587</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TMR-aptamer" target="_blank" style="color:#520049"><b>TMR3 aptamer</b></a></td>
        <td name="td8">CQ</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">DFAME</td>
        <td name="td1">methyl 3-[4-[(3,5-difluoro-4-hydroxyphenyl)methylidene]-1-methyl-5-oxoimidazol-2-yl]prop-2-enoate</td>
        <td name="td2">C<sub>15</sub>H<sub>12</sub>F<sub>2</sub>N<sub>2</sub>O<sub>4</sub></td>
        <td name="td3">322.26 g/mol</td>
        <td name="td4">1420815-55-9</td>
        <td name="td5">514</td>
        <td name="td6">619</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Beetroot-aptamer(DFAME)" target="_blank" style="color:#520049"><b>Beetroot aptamer</b></a></td>
        <td name="td8">TICT</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">OTB</td>
        <td name="td1">3-methyl-2-[(3-methyl-1,3-benzothiazol-3-ium-2-yl)methylidene]-1,3-benzoxazole</td>
        <td name="td2">C<sub>17</sub>H<sub>15</sub>N<sub>2</sub>OS<sup>+</sup></td>
        <td name="td3">295.4 g/mol</td>
        <td name="td4">NA</td>
        <td name="td5">380</td>
        <td name="td6">421</td>
        <td name="td7"><a href="{{ site.url }}{{ site.baseurl }}/_posts/DIR2s-apt-aptamer" target="_blank" style="color:#520049"><b>DIRs2-Apt aptamer</b></a></td>
        <td name="td8">TICT</td>
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