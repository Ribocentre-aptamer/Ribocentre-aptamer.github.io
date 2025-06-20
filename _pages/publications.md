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
    padding: 2px 4px;
    border-radius: 3px;
}

.data-table-section .table a:hover {
    color: #7a0070 !important;
    text-decoration: underline !important;
    background-color: rgba(82, 0, 73, 0.1);
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

/* 内容截断和展开功能 */
.cell-content {
    position: relative;
    max-height: 3em;
    overflow: hidden;
    line-height: 1.5em;
    transition: max-height 0.3s ease;
}

.cell-content.expanded {
    max-height: none;
}

.expand-btn {
    color: #520049;
    cursor: pointer;
    font-size: 12px;
    padding: 2px 6px;
    border: 1px solid #520049;
    border-radius: 3px;
    background: white;
    margin-top: 4px;
    display: inline-block;
    transition: all 0.2s ease;
}

.expand-btn:hover {
    background: #520049;
    color: white;
}

.table-style td {
    vertical-align: top;
    max-width: 300px;
}
#searchBox{padding:10px;font-size:16px;border:2px solid #ccc;border-radius:4px;width:300px;}
#searchBox:focus{outline:none;border-color:#efefef;}
/* 分页器美化 */
#pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
}

#pagination button {
  background-color: #fff;
  border: 1px solid #dee2e6;
  color: #495057;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#pagination button:hover {
  background-color: #e9ecef;
  border-color: #adb5bd;
  color: #495057;
}

#pagination button.current {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

#pagination button.current:hover {
  background-color: #6b0062;
  border-color: #6b0062;
}

#pagination button:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
  border-color: #dee2e6;
}

#pagination button:disabled:hover {
  background-color: #f8f9fa;
  color: #6c757d;
  border-color: #dee2e6;
}

.pagination-info {
  color: #6c757d;
  font-size: 14px;
  margin-left: 15px;
}
</style>

</head>
<body style="padding-top: 0px;">
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
    row.forEach((cellData, index) => {
      const td = document.createElement('td');
      
      // Add truncation functionality for longer content cells (author, title, journal, aptamer columns)
      if (index >= 2 && index <= 5) {
        const wrappedContent = wrapContentWithExpand(cellData);
        td.innerHTML = wrappedContent;
      } else {
        td.innerHTML = cellData;
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function wrapContentWithExpand(content) {
  if (!content || content === 'N/A') {
    return content;
  }
  
     // Check if content needs truncation (based on text length or multiple br tags)
  const textContent = content.replace(/<[^>]+>/g, '');
  const hasManyLines = (content.match(/<br>/gi) || []).length > 1;
  
  if (textContent.length < 80 && !hasManyLines) {
    return content;
  }
  
  const contentId = 'content_' + Math.random().toString(36).substr(2, 9);
  return `
    <div class="cell-content" id="${contentId}">
      ${content}
    </div>
    <div class="expand-btn" onclick="toggleContent('${contentId}', this)">
      Show More
    </div>
  `;
}

function toggleContent(contentId, button) {
  const content = document.getElementById(contentId);
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    button.textContent = 'Show More';
  } else {
    content.classList.add('expanded');
    button.textContent = 'Show Less';
  }
}

function setupPagination() {
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  let paginationHtml = '<div id="pagination">';
  
  // First page button
  if (currentPage > 1) {
    paginationHtml += `<button onclick="changePage(1)" title="First Page">1</button>`;
    if (currentPage > 4) {
      paginationHtml += `<span style="margin: 0 8px; color: #6c757d;">...</span>`;
    }
  }
  
  // Previous page button
  if (currentPage > 1) {
    paginationHtml += `<button onclick="changePage(${currentPage - 1})" title="Previous Page">‹</button>`;
  } else {
    paginationHtml += `<button disabled title="Previous Page">‹</button>`;
  }
  
  // Page number buttons around current page
  const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  const endPage = Math.min(totalPages, Math.max(currentPage + 2, 5));
  
  for (let i = startPage; i <= endPage; i++) {
    if (i === 1 && currentPage <= 4) continue; // Avoid duplicate first page
    if (i === totalPages && currentPage >= totalPages - 3) continue; // Avoid duplicate last page
    
    if (i === currentPage) {
      paginationHtml += `<button class="current">${i}</button>`;
    } else {
      paginationHtml += `<button onclick="changePage(${i})">${i}</button>`;
    }
  }
  
  // Next page button
  if (currentPage < totalPages) {
    paginationHtml += `<button onclick="changePage(${currentPage + 1})" title="Next Page">›</button>`;
  } else {
    paginationHtml += `<button disabled title="Next Page">›</button>`;
  }
  
  // Last page button
  if (currentPage < totalPages) {
    if (currentPage < totalPages - 3) {
      paginationHtml += `<span style="margin: 0 8px; color: #6c757d;">...</span>`;
    }
    paginationHtml += `<button onclick="changePage(${totalPages})" title="Last Page">${totalPages}</button>`;
  }
  
  paginationHtml += `<span class="pagination-info">Showing ${Math.min((currentPage - 1) * rowsPerPage + 1, filteredRows.length)}-${Math.min(currentPage * rowsPerPage, filteredRows.length)} of ${filteredRows.length} entries</span>`;
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
      d.publication.authors || 'N/A',
      d.publication.title || 'N/A',
      d.publication.journal || 'N/A',
      aptLinks
    ];

  });
}
function loadData(){
  fetch('{{ site.baseurl }}/apidata/combineRef_updated.json')
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
          dom:'lrtip'
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

