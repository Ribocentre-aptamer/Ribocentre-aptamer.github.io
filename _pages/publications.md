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

/* 按钮样式 */
.button {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 10px;
  text-align: center;
  background-color: #ffffff;
  color: #520049;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid #520049;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}
.button:hover {
  background-color: #520049;
  color: white;
}
.button:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
  border-color: #dee2e6;
  cursor: not-allowed;
  opacity: 0.5;
}
.button:disabled:hover {
  background-color: #f8f9fa;
  color: #6c757d;
  border-color: #dee2e6;
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

/* 排序指示器样式 */
.sort-indicator {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #ffffff;
  opacity: 0.8;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  font-weight: bold;
}

.sort-indicator.active {
  opacity: 1;
  color: #ffd700;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  font-weight: bold;
}

.table-style th:hover .sort-indicator {
  opacity: 1;
  color: #f0f0f0;
}
</style>

<!-- 引入 WordCloud2.js 库 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/wordcloud2.js/1.1.1/wordcloud2.min.js"></script>

</head>
<body style="padding-top: 0px;">
<h1 class="post-title">Publications</h1>
<p>This page lists the reviews and articles about RNA aptamers. <span style="color:#6c757d;font-size:14px;">💡 Click on column headers to sort the table.</span></p>

<!-- 关键词词云容器 -->
<section class="word-cloud-section" style="margin:30px 0;padding:30px;background:linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);border-radius:16px;box-shadow:0 8px 32px rgba(82,0,73,0.12);border:1px solid rgba(82,0,73,0.08);position:relative;overflow:hidden;">
  <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg, var(--primary-color) 0%, #7a0070 50%, var(--primary-color) 100%);"></div>
  <h3 style="color:var(--primary-color);margin-bottom:20px;text-align:center;font-weight:600;font-size:24px;letter-spacing:0.5px;">Research Keywords Cloud</h3>
  <div id="wordCloudContainer" style="text-align:center;overflow:hidden;position:relative;">
    <canvas id="wordCloud" style="max-width:100%;height:auto;border-radius:12px;background:#ffffff;box-shadow:0 4px 16px rgba(0,0,0,0.08);"></canvas>
  </div>
  <p style="font-size:14px;color:#6c757d;text-align:center;margin-top:15px;font-style:italic;">Click on keywords to filter related publications</p>
</section>

<div class="form-container" style="margin-bottom:15px;">
  <input type="text" id="searchBox" placeholder="Search...">
  <button id="exportSelectedBtn" class="button" style="margin-left:10px;" disabled>Export Selected (<span id="selectedCount">0</span>)</button>
  <button id="exportAllBtn" class="button" style="margin-left:10px;">Export All Results</button>
  <button id="selectCurrentPageBtn" class="button" style="margin-left:10px;">Select Current Page</button>
  <button id="selectAllResultsBtn" class="button" style="margin-left:10px;">Select All Results</button>
  <button id="clearSelectionBtn" class="button" style="margin-left:10px;">Clear Selection</button>
</div>
<section class="data-table-section">
  <table id="pubTable" class="table table-style display" style="width:100%">
    <thead>
      <tr>
        <th style="cursor:default;">Select</th>
        <th style="cursor:pointer;user-select:none;position:relative;padding-right:25px;" onclick="sortTable(1)" title="Click to sort by Year">Year <span class="sort-indicator" id="sort-1">↕</span></th>
        <th style="cursor:pointer;user-select:none;position:relative;padding-right:25px;" onclick="sortTable(2)" title="Click to sort by Aptamer">Aptamer <span class="sort-indicator" id="sort-2">↕</span></th>
        <th style="cursor:pointer;user-select:none;position:relative;padding-right:25px;" onclick="sortTable(3)" title="Click to sort by Author">Author <span class="sort-indicator" id="sort-3">↕</span></th>
        <th style="cursor:pointer;user-select:none;position:relative;padding-right:25px;" onclick="sortTable(4)" title="Click to sort by Title">Title <span class="sort-indicator" id="sort-4">↕</span></th>
        <th style="cursor:pointer;user-select:none;position:relative;padding-right:25px;" onclick="sortTable(5)" title="Click to sort by Journal">Journal <span class="sort-indicator" id="sort-5">↕</span></th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div id="selectionStatus" style="text-align: center; margin-top: 15px; color: #520049; font-size: 14px; font-weight: 600;">
    <!-- 选择状态信息将在这里显示 -->
  </div>
</section>
<script>

let table;
let tableData=[];

let currentPage = 1;
let rowsPerPage = 25;
let filteredRows = [];
let allRows = [];
let sortColumn = -1; // 当前排序列，-1表示无排序
let sortDirection = 'asc'; // 排序方向：'asc' 或 'desc'
let selectedRowIds = new Set(); // 存储选中行的唯一标识符

function initSimpleTable(rows) {
  allRows = rows;
  filteredRows = rows;
  renderTable();
  setupPagination();
  
  // 简单的搜索功能
  $('#searchBox').on('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    // 检查是否包含逗号，如果包含则分割为多个搜索词进行OR搜索
    if (searchTerm.includes(',')) {
      const searchTerms = searchTerm.split(',').map(term => term.trim());
      filteredRows = allRows.filter(row => {
        return searchTerms.some(term => 
          row.some(cell => cell.toString().toLowerCase().includes(term))
        );
      });
    } else {
      filteredRows = allRows.filter(row => {
        return row.some(cell => cell.toString().toLowerCase().includes(searchTerm));
      });
    }
    
    applySorting(); // 搜索后重新应用排序
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
  
  pageRows.forEach((row, index) => {
    const tr = document.createElement('tr');
    // 从row[1]中提取PMID作为唯一标识（Year列包含PMID链接）
    const yearHTML = row[1] || '';
    const pmidMatch = yearHTML.match(/\/(\d+)\//);
    const pmid = pmidMatch ? pmidMatch[1] : `row_${startIndex + index}`;
    const rowId = `pub_${pmid}`;
    
    row.forEach((cellData, cellIndex) => {
      const td = document.createElement('td');
      
      if (cellIndex === 0) {
        // 复选框列，检查是否应该被选中
        const isChecked = selectedRowIds.has(rowId);
        td.innerHTML = `<input type="checkbox" class="row-select" data-row-id="${rowId}" ${isChecked ? 'checked' : ''}>`;
      } else {
        // Add truncation functionality for longer content cells (author, title, journal, aptamer columns)
        if (cellIndex >= 2 && cellIndex <= 5) {
          const wrappedContent = wrapContentWithExpand(cellData);
          td.innerHTML = wrappedContent;
        } else {
          td.innerHTML = cellData;
        }
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  
  // 添加复选框事件监听器
  addCheckboxListeners();
  // 更新选中计数
  updateSelectedCount();
}

function addCheckboxListeners() {
  document.querySelectorAll('.row-select').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const rowId = this.getAttribute('data-row-id');
      if (this.checked) {
        selectedRowIds.add(rowId);
      } else {
        selectedRowIds.delete(rowId);
      }
      updateSelectedCount();
    });
  });
}

function updateSelectedCount() {
  const count = selectedRowIds.size;
  document.getElementById('selectedCount').textContent = count;
  const exportSelectedBtn = document.getElementById('exportSelectedBtn');
  exportSelectedBtn.disabled = count === 0;
  exportSelectedBtn.style.opacity = count === 0 ? '0.5' : '1';
  
  // 更新选择状态信息
  const statusDiv = document.getElementById('selectionStatus');
  if (statusDiv) {
    let totalRows = 0;
    if (table && typeof table.rows === 'function') {
      totalRows = table.rows().data().length;
    } else {
      totalRows = filteredRows.length;
    }
    
    if (count === 0) {
      statusDiv.innerHTML = '';
      statusDiv.style.color = '#6c757d';
    } else if (count === totalRows) {
      statusDiv.innerHTML = `✓ Selected all ${count} rows`;
      statusDiv.style.color = '#28a745';
    } else {
      statusDiv.innerHTML = `Selected ${count} / ${totalRows} rows`;
      statusDiv.style.color = '#520049';
    }
  }
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
    const pmid = d.pmid || 'unknown';
    const rowId = `pub_${pmid}`;
    
    // 处理 publication 为 null 的情况
    if (d.publication === null) {
      return [
        `<input type="checkbox" class="row-select" data-row-id="${rowId}">`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/" target="_blank">N/A</a>`,
        aptLinks || '<span style="color:#6c757d;font-style:italic;">No aptamer</span>',
        'N/A',
        'N/A',
        'N/A'
      ];
    }
    
    // 确保year字段存在且有效，处理错误的日期格式
    let year = d.publication.year || 'N/A';
    
    // 如果年份是8位数字（如20221101），提取前4位作为年份
    if (year !== 'N/A' && /^\d{8}$/.test(year)) {
      year = year.substring(0, 4);
    }
    // 如果年份不是4位数字，设为N/A
    else if (year !== 'N/A' && !/^\d{4}$/.test(year)) {
      year = 'N/A';
    }
    
    return [
      `<input type="checkbox" class="row-select" data-row-id="${rowId}">`,
      `<a href="https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/" target="_blank">${year}</a>`,
      aptLinks || '<span style="color:#6c757d;font-style:italic;">No aptamer</span>',
      d.publication.authors || 'N/A',
      d.publication.title || 'N/A',
      d.publication.journal || 'N/A'
    ];

  });
}
function loadData(){
  fetch('{{ site.baseurl }}/apidata/combineRef_updated.json')
    .then(r=>r.json())
    .then(json=>{
      tableData=json;
      const rows=buildRows(json);
      
      // 初始化选择状态显示
      updateSelectedCount();
      
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
            {title:'Year',orderable:false}, // 禁用DataTable排序，使用自定义排序
            {title:'Aptamer',orderable:false},
            {title:'Author',orderable:false},
            {title:'Title',orderable:false},
            {title:'Journal',orderable:false}
          ],
          responsive:true,
          pageLength:25,
          dom:'lrtip',
          drawCallback: function() {
            // 每次重绘表格后添加事件监听器
            addDataTableCheckboxListeners();
            updateSelectedCount();
          }
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

function addDataTableCheckboxListeners() {
  // 为DataTable中的复选框添加事件监听器
  $('#pubTable tbody').off('change', '.row-select').on('change', '.row-select', function() {
    const rowId = $(this).attr('data-row-id');
    
    if (this.checked) {
      selectedRowIds.add(rowId);
    } else {
      selectedRowIds.delete(rowId);
    }
    updateSelectedCount();
  });
}
// 根据PMID从原始数据中获取行
function getOriginalDataByPMID(pmid) {
  return tableData.find(item => item.pmid === pmid);
}

// 安全字符串处理函数
function safeString(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
}

// 选择当前页面所有行
function selectCurrentPage() {
  if (table && typeof table.rows === 'function') {
    // DataTable 模式 - 选择当前页面显示的行
    $('#pubTable tbody tr .row-select').each(function() {
      $(this).prop('checked', true);
      const rowId = $(this).attr('data-row-id');
      if (rowId) {
        selectedRowIds.add(rowId);
      }
    });
  } else {
    // 简单表格模式 - 选择当前页面的复选框
    const currentPageCheckboxes = document.querySelectorAll('#pubTable tbody .row-select');
    currentPageCheckboxes.forEach(checkbox => {
      checkbox.checked = true;
      const rowId = checkbox.getAttribute('data-row-id');
      if (rowId) {
        selectedRowIds.add(rowId);
      }
    });
  }
  updateSelectedCount();
}

// 选择所有搜索结果
function selectAllResults() {
  if (table && typeof table.rows === 'function') {
    // DataTable 模式 - 基于当前显示的数据
    table.rows().data().each(function(rowData) {
      const yearHTML = rowData[1] || '';
      const pmidMatch = yearHTML.match(/\/(\d+)\//);
      const pmid = pmidMatch ? pmidMatch[1] : 'unknown';
      const rowId = `pub_${pmid}`;
      selectedRowIds.add(rowId);
    });
    // 更新所有复选框状态
    $('#pubTable .row-select').prop('checked', true);
  } else {
    // 简单表格模式 - 选择所有filteredRows
    filteredRows.forEach((row, index) => {
      const yearHTML = row[1] || '';
      const pmidMatch = yearHTML.match(/\/(\d+)\//);
      const pmid = pmidMatch ? pmidMatch[1] : `row_${index}`;
      const rowId = `pub_${pmid}`;
      selectedRowIds.add(rowId);
    });
    // 更新当前页面显示
    document.querySelectorAll('#pubTable tbody tr .row-select').forEach(checkbox => {
      checkbox.checked = true;
    });
  }
  updateSelectedCount();
}

// 清除所有选择
function clearSelection() {
  selectedRowIds.clear();
  // 清除所有复选框的选中状态
  $('#pubTable .row-select').prop('checked', false);
  document.querySelectorAll('.row-select').forEach(checkbox => {
    checkbox.checked = false;
  });
  updateSelectedCount();
}

// 导出选中的行
function exportSelected(){
  const selected = [];
  
  // 从原始数据中获取选中的行
  selectedRowIds.forEach(rowId => {
    // 从rowId中提取PMID（格式：pub_pmid）
    const pmid = rowId.replace('pub_', '');
    const originalData = getOriginalDataByPMID(pmid);
    if (originalData) {
      selected.push(originalData);
    }
  });
  
  if (selected.length === 0) {
    alert('Please select rows to export first!');
    return;
  }
  
  exportOriginalDataToCSV(selected, `selected_publications_${selected.length}_rows.csv`);
}

// 导出所有结果
function exportAllResults() {
  // 获取当前过滤后的原始数据
  let originalRows = [];
  
  if (table && typeof table.rows === 'function') {
    // DataTable 模式 - 获取当前显示的所有行对应的原始数据
    table.rows().data().each(function(rowData) {
      const yearHTML = rowData[1] || '';
      const pmidMatch = yearHTML.match(/\/(\d+)\//);
      const pmid = pmidMatch ? pmidMatch[1] : null;
      if (pmid) {
        const originalData = getOriginalDataByPMID(pmid);
        if (originalData) {
          originalRows.push(originalData);
        }
      }
    });
  } else {
    // 简单表格模式 - 从filteredRows对应的原始数据
    filteredRows.forEach(row => {
      const yearHTML = row[1] || '';
      const pmidMatch = yearHTML.match(/\/(\d+)\//);
      const pmid = pmidMatch ? pmidMatch[1] : null;
      if (pmid) {
        const originalData = getOriginalDataByPMID(pmid);
        if (originalData) {
          originalRows.push(originalData);
        }
      }
    });
  }
  
  exportOriginalDataToCSV(originalRows, `all_publications_${originalRows.length}_rows.csv`);
}

// 导出原始数据的CSV函数
function exportOriginalDataToCSV(dataRows, filename) {
  const headers=['Year','Aptamer','Author','Title','Journal','PubMed Link'];
  const csv=[headers.join(',')];
  
  dataRows.forEach((data, index) => {
    try {
      // 处理aptamer链接 - 提取aptamer名称
      let aptamerNames = 'No aptamer';
      if (data.posts && data.posts.length > 0) {
        aptamerNames = data.posts.map(p => p.post_title).join('; ');
      }
      
      // 处理年份
      let year = 'N/A';
      if (data.publication && data.publication.year) {
        year = data.publication.year;
        // 如果年份是8位数字（如20221101），提取前4位作为年份
        if (/^\d{8}$/.test(year)) {
          year = year.substring(0, 4);
        }
        // 如果年份不是4位数字，设为N/A
        else if (!/^\d{4}$/.test(year)) {
          year = 'N/A';
        }
      }
      
      // 处理PubMed链接
      let pubmedLink = 'N/A';
      if (data.pmid) {
        pubmedLink = `https://pubmed.ncbi.nlm.nih.gov/${data.pmid}/`;
      }
      
      csv.push([
        `"${safeString(year).replace(/"/g, '""')}"`,
        `"${safeString(aptamerNames).replace(/"/g, '""')}"`,
        `"${safeString(data.publication ? data.publication.authors || 'N/A' : 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data.publication ? data.publication.title || 'N/A' : 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data.publication ? data.publication.journal || 'N/A' : 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(pubmedLink).replace(/"/g, '""')}"`,
      ].join(','));
    } catch (error) {
      console.error(`Error processing data row ${index}:`, error, data);
      // 跳过有问题的行
    }
  });
  
  const csvContent='data:text/csv;charset=utf-8,'+csv.join('\n');
  const link=document.createElement('a');
  link.setAttribute('href',encodeURI(csvContent));
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 保留旧的函数用于向后兼容
function selectAll() {
  selectCurrentPage();
}

function deselectAll() {
  clearSelection();
}

// 排序功能
function sortTable(columnIndex) {
  if (sortColumn === columnIndex) {
    // 如果点击同一列，切换排序方向
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    // 如果点击不同列，设置为升序
    sortColumn = columnIndex;
    sortDirection = 'asc';
  }
  
  applySorting();
  currentPage = 1;
  renderTable();
  setupPagination();
  updateSortIndicators();
}

function applySorting() {
  if (sortColumn === -1) return;
  
  filteredRows.sort((a, b) => {
    let aVal = a[sortColumn] || '';
    let bVal = b[sortColumn] || '';
    
    // 移除HTML标签进行比较
    aVal = aVal.toString().replace(/<[^>]+>/g, '').trim();
    bVal = bVal.toString().replace(/<[^>]+>/g, '').trim();
    
    // 特殊处理空值和"No aptamer"情况，将其排在最后
    if (aVal === '' || aVal === 'No aptamer') aVal = 'zzz_empty';
    if (bVal === '' || bVal === 'No aptamer') bVal = 'zzz_empty';
    
    // 对于年份列，尝试数字比较
    if (sortColumn === 1) {
      const aNum = parseInt(aVal);
      const bNum = parseInt(bVal);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
      }
    }
    
    // 字符串比较
    const comparison = aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: 'base' });
    return sortDirection === 'asc' ? comparison : -comparison;
  });
}

function updateSortIndicators() {
  // 重置所有排序指示器为默认状态
  document.querySelectorAll('.sort-indicator').forEach(indicator => {
    indicator.className = 'sort-indicator';
    indicator.textContent = '↕';
  });
  
  // 设置当前排序列的指示器
  if (sortColumn !== -1) {
    const indicator = document.getElementById(`sort-${sortColumn}`);
    if (indicator) {
      indicator.className = 'sort-indicator active';
      indicator.textContent = sortDirection === 'asc' ? '↑' : '↓';
    }
  }
}

// 载入并渲染关键词词云
function loadWordCloud(){
  fetch('{{ site.baseurl }}/apidata/keyword_freq.json')
    .then(r=>r.json())
    .then(data=>{
      const list=data.map(d=>[d.keyword,d.count]);
      
      // 动态计算画布尺寸（适配屏幕显示比例）
      const container = document.getElementById('wordCloudContainer');
      const containerWidth = container.offsetWidth;
      
      // 计算可用高度：从词云顶部到搜索框的距离
      const wordCloudSection = document.querySelector('.word-cloud-section');
      const searchContainer = document.querySelector('.form-container');
      const wordCloudTop = wordCloudSection.offsetTop;
      const searchTop = searchContainer.offsetTop;
      const availableHeight = searchTop - wordCloudTop - 160; // 增加更多缓冲空间
      
      const canvas = document.getElementById('wordCloud');
      canvas.width = containerWidth - 80; // 增加左右边距到80px
      canvas.height = Math.max(availableHeight - 40, 350); // 底部增加40px间距，防止截断
      
      // 计算字体大小范围，缩小最大最小差距
      const maxCount = Math.max(...list.map(d => d[1]));
      const minCount = Math.min(...list.map(d => d[1]));
      const countRange = maxCount - minCount;
      
      WordCloud(canvas,{
        list:list,
        gridSize:Math.round(6 * canvas.width / 800), // 减小网格密度，避免重叠
        weightFactor:function(size){
          // 缩小字体大小差距，最小字体不会太小
          const normalizedSize = (size - minCount) / countRange;
          const minFontSize = 14;
          const maxFontSize = 42;
          return minFontSize + normalizedSize * (maxFontSize - minFontSize);
        },
        backgroundColor:'#ffffff',
        color:function(word, weight, fontSize, distance, theta){
          // 精致的颜色方案
          const colors = ['#520049', '#7a0070', '#4a0042', '#6b0062', '#8b0080', '#5d0054'];
          return colors[Math.floor(Math.random() * colors.length)];
        },
        rotateRatio:0.1, // 减少旋转，提高可读性
        minSize:14, // 增大最小字体
        drawOutOfBound:false, // 不绘制超出边界的词
        shrinkToFit:true, // 自动缩放以适应画布
        padding:4, // 增加词汇间距到4px，避免重叠和截断
        origin:[canvas.width/2, canvas.height/2 - 10], // 稍微上移中心点，避免底部截断
        click:function(item){
          if(!item)return;
          const word=item[0];
          const searchBox=document.getElementById('searchBox');
          searchBox.value=word;
          const event=new Event('input');
          searchBox.dispatchEvent(event);
        }
      });
    })
    .catch(err=>console.error('WordCloud load error',err));
}

$(document).ready(function(){
  // 等待所有脚本加载完成
  setTimeout(function() {
    loadData();
    loadWordCloud();
    $('#exportSelectedBtn').on('click',exportSelected);
    $('#exportAllBtn').on('click',exportAllResults);
    $('#selectCurrentPageBtn').on('click',selectCurrentPage);
    $('#selectAllResultsBtn').on('click',selectAllResults);
    $('#clearSelectionBtn').on('click',clearSelection);
  }, 100);
  
  // 窗口大小变化时重新渲染词云
  $(window).on('resize', function() {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(function() {
      loadWordCloud();
    }, 300);
  });
  
  // 页面加载完成后再次调整词云尺寸（确保DOM完全渲染）
  $(window).on('load', function() {
    setTimeout(function() {
      loadWordCloud();
    }, 200);
  });
});
</script>
</body>
</html>

