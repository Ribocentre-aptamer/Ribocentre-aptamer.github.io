---
title: "Ribocentre Aptamer - Publications"
layout: gridlay
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /publications/
---
<html lang="en">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">

<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
<title>Ribocentre-aptamer publications</title>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
<style>
:root{
  --primary-color:#520049;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.7;color:#333;font-size:16px;letter-spacing:.3px;}
.table-style{width:100%;margin:20px 0;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 4px rgba(0,0,0,0.1);}
.table-style th{background:var(--primary-color);color:#fff;padding:12px;text-align:left;}
.table-style td{padding:12px;border-bottom:1px solid #e8e8e8;}
.table-style tbody tr:nth-child(even){background:rgba(245,245,245,0.5);}
.table-style tbody tr:hover{background:rgba(82,0,73,0.05);}
/* Dashboard数据详情表专用超链接样式 */
.data-table-section .table a {
    color: #520049 !important;
    text-decoration: none !important;
    font-weight: 600;
    transition: all 0.2s ease;
}

.data-table-section .table a:hover {
    color: #7a0070 !important;
    text-decoration: underline !important;
    background-color: rgba(82, 0, 73, 0.1);
    padding: 2px 4px;
    border-radius: 3px;
}

.data-table-section .table a:visited {
    color: #520049 !important;
}

.data-table-section .table a:active {
    color: #520049 !important;
    background-color: rgba(82, 0, 73, 0.2);
}

.data-table-section .table td:nth-child(2) a {
    color: #520049 !important;
    font-weight: 700 !important;
}

.data-table-section .table td:nth-child(2) a:hover {
    color: #7a0070 !important;
    text-shadow: 0 1px 2px rgba(82, 0, 73, 0.3);
}
#searchBox{padding:10px;font-size:16px;border:2px solid #ccc;border-radius:4px;width:300px;}
#searchBox:focus{outline:none;border-color:#efefef;}
#pagination button{
  background-color:#f8f9fa;
  border:1px solid #dee2e6;
  color:#495057;
  cursor:pointer;
  border-radius:4px;
}
#pagination button:hover{
  background-color:#e9ecef;
  border-color:#adb5bd;
}
</style>

</head>
<body>
<h1 class="post-title">Publications</h1>
<p>This page lists the reviews and articles about RNA aptamers.</p>
<div class="form-container" style="margin-bottom:15px;">
  <input type="text" id="searchBox" placeholder="Search...">
  <button id="exportBtn" class="button" style="margin-left:10px;">Export Selected</button>
  <button id="selectAllBtn" class="button" style="margin-left:10px;">Select All</button>
  <button id="deselectAllBtn" class="button" style="margin-left:10px;">Deselect All</button>
</div>
<section class="data-table-section">
  <table id="pubTable" class="table table-style display" style="width:100%">
    <thead>
      <tr>
        <th>Select</th>
        <th>Year</th>
        <th>Author</th>
        <th>Title</th>
        <th>Journal</th>
        <th>Aptamer</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</section>
<script>

let table;
let tableData=[];

let currentPage = 1;
let rowsPerPage = 25;
let filteredRows = [];
let allRows = [];

function initSimpleTable(rows) {
  allRows = rows;
  filteredRows = rows;
  renderTable();
  setupPagination();
  
  // 简单的搜索功能
  $('#searchBox').on('input', function() {
    const searchTerm = this.value.toLowerCase();
    filteredRows = allRows.filter(row => {
      return row.some(cell => cell.toString().toLowerCase().includes(searchTerm));
    });
    currentPage = 1;
    renderTable();
    setupPagination();
  });
}

function renderTable() {
  const tbody = document.querySelector('#pubTable tbody');
  tbody.innerHTML = '';
  
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageRows = filteredRows.slice(startIndex, endIndex);
  
  pageRows.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cellData => {
      const td = document.createElement('td');
      td.innerHTML = cellData;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function setupPagination() {
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  let paginationHtml = '<div id="pagination" style="margin-top: 20px; text-align: center;">';
  
  // 上一页按钮
  if (currentPage > 1) {
    paginationHtml += `<button onclick="changePage(${currentPage - 1})" style="margin: 0 5px; padding: 5px 10px;">Previous Page</button>`;
  }
  
  // 页码按钮
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    if (i === currentPage) {
      paginationHtml += `<button style="margin: 0 5px; padding: 5px 10px; background-color: var(--primary-color); color: white;">${i}</button>`;
    } else {
      paginationHtml += `<button onclick="changePage(${i})" style="margin: 0 5px; padding: 5px 10px;">${i}</button>`;
    }
  }
  
  // 下一页按钮
  if (currentPage < totalPages) {
    paginationHtml += `<button onclick="changePage(${currentPage + 1})" style="margin: 0 5px; padding: 5px 10px;">Next Page</button>`;
  }
  
  paginationHtml += `<span style="margin-left: 20px;">Showing ${Math.min((currentPage - 1) * rowsPerPage + 1, filteredRows.length)}-${Math.min(currentPage * rowsPerPage, filteredRows.length)} of ${filteredRows.length} entries</span>`;
  paginationHtml += '</div>';
  
  // 移除旧的分页器
  const oldPagination = document.getElementById('pagination');
  if (oldPagination) {
    oldPagination.remove();
  }
  
  // 添加新的分页器
  document.querySelector('.data-table-section').insertAdjacentHTML('afterend', paginationHtml);
}

function changePage(page) {
  currentPage = page;
  renderTable();
  setupPagination();
}

function buildRows(data){
  return data.map(d=>{
    const aptLinks=d.posts.map(p=>`<a href="${p.post_link}" target="_blank">${p.post_title}</a>`).join('<br>');
    
    // 处理 publication 为 null 的情况
    if (d.publication === null) {
      return [
        '<input type="checkbox" class="row-select">',
        `<a href="https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/" target="_blank">${d.pmid}</a>`,
        'N/A',
        'N/A',
        'N/A',
        aptLinks
      ];
    }
    
    return [
      '<input type="checkbox" class="row-select">',
      `<a href="https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/" target="_blank">${d.publication.year}</a>`,
      d.publication.authors,
      d.publication.title,
      d.publication.journal,
      aptLinks
    ];

  });
}
function loadData(){
  fetch('{{ site.baseurl }}/apidata/combineRef.json')
    .then(r=>r.json())
    .then(json=>{
      tableData=json;
      const rows=buildRows(json);
      
      // 确保 DataTable 函数存在
      if (typeof $.fn.DataTable === 'undefined') {
        console.error('DataTable is not loaded, trying alternative initialization');
        // 如果 DataTable 没有加载，尝试简单的表格显示
        initSimpleTable(rows);
        return;
      }
      
      try {
        table=$('#pubTable').DataTable({
          data:rows,
          columns:[
            {title:'Select',orderable:false},
            {title:'Year'},
            {title:'Author'},
            {title:'Title'},
            {title:'Journal'},
            {title:'Aptamer'}
          ],
          responsive:true,
          pageLength:25,
          dom:'Bfrtip',
          buttons:['copy','csv','excel','pdf','print']
        });
        $('#searchBox').on('input',function(){table.search(this.value).draw();});
      } catch (error) {
        console.error('DataTable initialization failed:', error);
        initSimpleTable(rows);
      }
    })
    .catch(error => {
      console.error('Error loading data:', error);
    });
}
function exportSelected(){
  const selected=[];
  let rows=[];
  
  if (table && typeof table.rows === 'function') {
    // DataTable 模式
    table.rows().every(function(){
      const node=this.node();
      if($(node).find('input.row-select').prop('checked')){
        selected.push(this.data());
      }
    });
    rows=selected.length?selected:table.rows().data().toArray();
  } else {
    // 简单表格模式
    $('#pubTable tbody tr').each(function() {
      if ($(this).find('input.row-select').prop('checked')) {
        const rowData = [];
        $(this).find('td').each(function() {
          rowData.push($(this).html());
        });
        selected.push(rowData);
      }
    });
    
    if (selected.length === 0) {
      // 如果没有选中任何行，导出所有可见行
      $('#pubTable tbody tr').each(function() {
        const rowData = [];
        $(this).find('td').each(function() {
          rowData.push($(this).html());
        });
        rows.push(rowData);
      });
    } else {
      rows = selected;
    }
  }
  
  const headers=['Year','Author','Title','Journal','Aptamer'];
  const csv=[headers.join(',')];
  rows.forEach(r=>{
    // 跳过第一个复选框列
    const exportRow = r.slice(1);
    csv.push([
      exportRow[0].replace(/<[^>]+>/g,''),
      `"${exportRow[1].replace(/"/g,'""')}"`,
      `"${exportRow[2].replace(/"/g,'""')}"`,
      `"${exportRow[3].replace(/"/g,'""')}"`,
      exportRow[4].replace(/<[^>]+>/g,'; ')
    ].join(','));
  });
  const csvContent='data:text/csv;charset=utf-8,'+csv.join('\n');
  const link=document.createElement('a');
  link.setAttribute('href',encodeURI(csvContent));
  link.setAttribute('download','publications.csv');
  document.body.appendChild(link);link.click();document.body.removeChild(link);
}
function selectAll() {
  $('#pubTable tbody tr:visible input.row-select').prop('checked', true);
}

function deselectAll() {
  $('#pubTable tbody tr input.row-select').prop('checked', false);
}

$(document).ready(function(){
  // 等待所有脚本加载完成
  setTimeout(function() {
    loadData();
    $('#exportBtn').on('click',exportSelected);
    $('#selectAllBtn').on('click',selectAll);
    $('#deselectAllBtn').on('click',deselectAll);
  }, 100);
});
</script>
</body>
</html>
