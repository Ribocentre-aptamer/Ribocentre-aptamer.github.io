---
title: "Ribocentre Aptamer - Sequences"
layout: gridlay
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /sequences/
---
<html lang="en">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">

<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
<title>Ribocentre-aptamer sequences</title>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<style>
:root{
  --primary-color:#520049;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.7;color:#333;font-size:16px;letter-spacing:.3px;}
.table-style{width:100%;margin:20px 0;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 4px rgba(0,0,0,0.1);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;}
.table-style th{background:var(--primary-color);color:#fff;padding:12px;text-align:left;white-space:nowrap;font-size:16px;}
.table-style td{padding:12px;border-bottom:1px solid #e8e8e8;white-space:nowrap;font-size:16px;}
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
    white-space: nowrap;
    font-size: 16px;
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
#searchBox{padding:10px;font-size:16px;border:2px solid #ccc;border-radius:4px;width:300px;white-space:nowrap;}
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
/* 序列样式 */
.sequence-cell {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  white-space: nowrap;
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
/* Tooltip样式 */
.amir-tooltip {
  position: fixed;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
  max-width: 300px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
  white-space: normal;
}

.amir-tooltip .tooltip-content {
  word-wrap: break-word;
}

.amir-tooltip .tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: none;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-top: 5px solid rgba(0, 0, 0, 0.9);
  border-bottom: none;
}

.truncated-text {
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  font-size: 16px;
}
/* 表格容器样式 */
.data-table-section > div {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>

</head>
<body style="padding-top: 0px;">
<h1 class="post-title">Sequences</h1>
<p>Named here is composed of ligand + underscore + article name, which belongs to a unique name. For RNA aptamers isolated from the same ligand in the same article, we only selected 1-2 of them to draw the details page.</p>
<div class="form-container" style="margin-bottom:15px;">
  <input type="text" id="searchBox" placeholder="Search...">
  <button id="exportSelectedBtn" class="button" style="margin-left:10px;" disabled>Export Selected (<span id="selectedCount">0</span>)</button>
  <button id="exportAllBtn" class="button" style="margin-left:10px;">Export All Results</button>
  <button id="selectCurrentPageBtn" class="button" style="margin-left:10px;">Select Current Page</button>
  <button id="selectAllResultsBtn" class="button" style="margin-left:10px;">Select All Results</button>
  <button id="clearSelectionBtn" class="button" style="margin-left:10px;">Clear Selection</button>
</div>
<section class="data-table-section">
  <div style="display: flex; overflow: auto;">
    <table id="seqTable" class="table table-style display" style="flex: 1;margin-top: 0px;margin-bottom: 0px;">
      <thead>
        <tr>
          <th>Select</th>
          <th>Sequence Name</th>
          <th>Aptamer Name</th>
          <th>Category</th>
          <th>Type</th>
          <th>Article name</th>
          <th>Sequence</th>
          <th>Length</th>
          <th>GC Content</th>
          <th>Year</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  <div style="text-align: center; margin-top: 10px; color: #666; font-size: 14px; font-style: italic;">
    💡 Tip: Scroll horizontally to view more columns
  </div>
  <div id="selectionStatus" style="text-align: center; margin-top: 5px; color: #520049; font-size: 14px; font-weight: 600;">
    <!-- 选择状态信息将在这里显示 -->
  </div>
</section>

<!-- Tooltip元素 -->
<div id="amirTooltip" class="amir-tooltip" style="opacity: 0;">
  <div class="tooltip-content"></div>
  <div class="tooltip-arrow"></div>
</div>

<script>

let table;
let tableData=[];

let currentPage = 1;
let rowsPerPage = 10;
let filteredRows = [];
let allRows = [];
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
    
    currentPage = 1;
    renderTable();
    setupPagination();
  });
}

function renderTable() {
  const tbody = document.querySelector('#seqTable tbody');
  tbody.innerHTML = '';
  
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageRows = filteredRows.slice(startIndex, endIndex);
  
  pageRows.forEach((row, index) => {
    const tr = document.createElement('tr');
    const globalIndex = startIndex + index;
    // 从row[1]中提取纯文本序列名（可能包含HTML）
    const sequenceNameHTML = row[1] || 'N/A';
    const sequenceName = sequenceNameHTML.replace ? sequenceNameHTML.replace(/<[^>]+>/g, '') : sequenceNameHTML;
    const rowId = `row_${sequenceName}`; // 使用序列名作为唯一标识
    
    row.forEach((cellData, cellIndex) => {
      const td = document.createElement('td');
      if (cellIndex === 0) {
        // 复选框列，检查是否应该被选中
        const isChecked = selectedRowIds.has(rowId);
        td.innerHTML = `<input type="checkbox" class="row-select" data-row-id="${rowId}" ${isChecked ? 'checked' : ''}>`;
      } else {
        td.innerHTML = cellData;
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  
  // 添加复选框事件监听器
  addCheckboxListeners();
  // 添加tooltip监听器
  addTooltipListeners();
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

function addDataTableCheckboxListeners() {
  // 为DataTable中的复选框添加事件监听器
  $('#seqTable tbody').off('change', '.row-select').on('change', '.row-select', function() {
    const rowId = $(this).attr('data-row-id');
    
    if (this.checked) {
      selectedRowIds.add(rowId);
    } else {
      selectedRowIds.delete(rowId);
    }
    updateSelectedCount();
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

// 辅助函数：截断文本
function truncateText(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// 辅助函数：转义HTML
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 序列染色函数
function colorizeSequence(sequence) {
  if (!sequence) return '';
  return sequence.replace(/[AUGC]/g, function(match) {
    switch(match) {
      case 'A': return '<span style="color: #ff6b6b;">A</span>';
      case 'U': return '<span style="color: #4ecdc4;">U</span>';
      case 'G': return '<span style="color: #45b7d1;">G</span>';
      case 'C': return '<span style="color: #f9ca24;">C</span>';
      default: return match;
    }
  });
}

// 显示tooltip
function showAmirTooltip(content, clientX, clientY) {
  const tooltip = document.getElementById('amirTooltip');
  if (!tooltip) return;
  
  const tooltipContent = tooltip.querySelector('.tooltip-content');
  if (!tooltipContent) return;
  
  tooltipContent.innerHTML = content;
  
  // 确保tooltip可见以计算尺寸
  tooltip.style.opacity = '0';
  tooltip.style.display = 'block';
  tooltip.style.position = 'fixed';
  tooltip.style.transform = 'none';
  
  // 获取tooltip尺寸
  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // 计算最佳位置
  let left = clientX - (tooltipRect.width / 2);
  let top = clientY - tooltipRect.height - 15;
  let arrowPosition = 'bottom';
  
  // 边界检查
  if (left + tooltipRect.width > viewportWidth) {
    left = viewportWidth - tooltipRect.width - 10;
  }
  
  if (left < 10) {
    left = 10;
  }
  
  if (top < 10) {
    top = clientY + 15;
    arrowPosition = 'top';
  }
  
  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
  tooltip.style.opacity = '1';
}

// 隐藏tooltip
function hideAmirTooltip() {
  const tooltip = document.getElementById('amirTooltip');
  if (tooltip) {
    tooltip.style.opacity = '0';
  }
}

// 添加tooltip事件监听器
function addTooltipListeners() {
  const truncatedTexts = document.querySelectorAll('.truncated-text');
  truncatedTexts.forEach(element => {
    element.style.cursor = 'pointer';
    
    element.addEventListener('mouseenter', (e) => {
      const fullText = e.target.getAttribute('data-full-text');
      const isSequence = e.target.getAttribute('data-is-sequence') === 'true';
      
      // 如果是序列，使用染色逻辑；否则使用原始文本
      const htmlContent = isSequence ? colorizeSequence(fullText) : fullText;
      showAmirTooltip(htmlContent, e.clientX, e.clientY);
    });

    element.addEventListener('mousemove', (e) => {
      const fullText = e.target.getAttribute('data-full-text');
      const isSequence = e.target.getAttribute('data-is-sequence') === 'true';
      
      // 如果是序列，使用染色逻辑；否则使用原始文本
      const htmlContent = isSequence ? colorizeSequence(fullText) : fullText;
      showAmirTooltip(htmlContent, e.clientX, e.clientY);
    });

    element.addEventListener('mouseleave', () => {
      hideAmirTooltip();
    });
  });
}

function buildRows(data){
  return data.map(d=>{
    // 特殊处理：根据sequence name确定正确的aptamer name
    let aptamerName = d['Linker name(page name)'] || 'N/A';
    const seqName = d.Named || '';
    if (seqName && aptamerName !== 'N/A') {
      // 检查是否是合并的aptamer（包含逗号）
      if (aptamerName.includes(',')) {
        // 从sequence name中提取对应的aptamer部分
        if (seqName.includes('CB-42')) {
          aptamerName = 'CB-42 aptamer';
        } else if (seqName.includes('B4-25')) {
          aptamerName = 'B4-25 aptamer';
        } else if (seqName.includes('Ribostamycin')) {
          aptamerName = 'Ribostamycin aptamer';
        } else if (seqName.includes('Paromomycin')) {
          aptamerName = 'Paromomycin aptamer';
        }
        // 可以在这里添加更多特殊情况的处理
      }
    }
    
    // 处理链接 - 使用处理后的aptamerName作为显示文本
    // 修复链接路径问题：确保以斜杠开头
    let linkerUrl = d.Linker;
    if (linkerUrl && !linkerUrl.startsWith('/')) {
      linkerUrl = '/' + linkerUrl;
    }
    const aptamerLink = linkerUrl ? `<a href="${linkerUrl}" target="_blank">${aptamerName}</a>` : aptamerName;
    
    // 处理PubMed链接
    const yearLink = d['Link to PubMed Entry'] ? `<a href="${d['Link to PubMed Entry']}" target="_blank">${d.Year || 'N/A'}</a>` : (d.Year || 'N/A');
    
    // 处理序列字段 - 使用tooltip显示完整序列并染色
    const sequenceField = d.Sequence ? `<span class="truncated-text sequence-cell" data-full-text="${escapeHtml(d.Sequence)}" data-is-sequence="true">${truncateText(d.Sequence, 6)}</span>` : 'N/A';
    
    // 处理配体描述字段 - 使用tooltip显示完整内容
    const ligandDesc = d['Ligand Description'] ? `<span class="truncated-text" data-full-text="${escapeHtml(d['Ligand Description'])}" data-is-sequence="false">${truncateText(d['Ligand Description'], 20)}</span>` : 'N/A';
    
    const sequenceName = d.Named || 'N/A';
    const rowId = `row_${sequenceName}`; // 使用序列名作为唯一标识
    return [
      `<input type="checkbox" class="row-select" data-row-id="${rowId}">`,
      d.Named || 'N/A',
      aptamerLink,
      d.Category || 'N/A',
      d.Type || 'N/A',
      d['Article name'] || 'N/A',
      sequenceField,
      d.Length || 'N/A',
      d['GC Content'] && !isNaN(parseFloat(d['GC Content'])) ? (parseFloat(d['GC Content']) * 100).toFixed(1) + '%' : 'N/A',
      yearLink,
      ligandDesc
    ];
  });
}

function loadData(){
  fetch('{{ site.baseurl }}/apidata/sequences_cleaned.json')
    .then(r=>r.json())
    .then(json=>{
      // 处理数据结构，如果数据在Sheet1中
      let data = json.Sheet1 || json;
      
      // 检查URL参数，如果有id参数则过滤数据
      const urlParams = new URLSearchParams(window.location.search);
      const targetId = urlParams.get('id');
      const searchQuery = urlParams.get('search');
      const formatParam = urlParams.get('format');
      
      if (targetId) {
        data = data.filter(item => item.ID === targetId);
      }
      
      // 如果有搜索参数，无论是否为JSON格式都要进行过滤
      if (searchQuery) {
        // 解码URL编码的字符（如%2C变成逗号）
        let decodedSearchQuery = decodeURIComponent(searchQuery);
        
        // 检查是否包含逗号，如果包含则分割为多个搜索词进行OR搜索
        if (decodedSearchQuery.includes(',')) {
          const searchTerms = decodedSearchQuery.split(',').map(term => term.trim().toLowerCase());
          data = data.filter(item => {
            return searchTerms.some(searchTerm => 
              Object.values(item).some(value => 
                value && value.toString().toLowerCase().includes(searchTerm)
              )
            );
          });
        } else {
          // 普通搜索逻辑
          data = data.filter(item => {
            return Object.values(item).some(value => 
              value && value.toString().toLowerCase().includes(decodedSearchQuery.toLowerCase())
            );
          });
        }
      }
      
              // 如果请求JSON格式，直接返回数据
        if (formatParam === 'json') {
          // 保存原始数据总数（在所有过滤之前）
          const originalCount = json.Sheet1 ? json.Sheet1.length : json.length;
          let responseData = data; // 数据已经被上面的逻辑过滤过了
          
          // 构建完整的API响应
          const apiResponse = {
            success: true,
            message: responseData.length === 0 ? "No results found" : `Found ${responseData.length} result(s)`,
            query: {
              search: searchQuery || null,
              id: targetId || null,
              timestamp: new Date().toISOString(),
              endpoint: "/sequences/"
            },
            statistics: {
              total_in_database: originalCount,
              filtered_results: responseData.length,
              search_performed: !!searchQuery,
              id_filter_applied: !!targetId
            },
            data: responseData.length === 0 ? [] : responseData
          };
          
          // 如果没有结果，添加建议
          if (responseData.length === 0 && searchQuery) {
            apiResponse.suggestions = [
              "Try a broader search term",
              "Check spelling of your search query",
              "Use partial matching (e.g., 'ATP' instead of 'ATP-binding')",
              "Browse all data: /sequences/ or /api/"
            ];
          }
          
          // 返回JSON数据
          document.body.innerHTML = '<pre style="background: #f8f9fa; padding: 20px; border-radius: 5px; border: 1px solid #dee2e6; color: #495057;">' + 
            JSON.stringify(apiResponse, null, 2) + '</pre>';
          document.body.style.fontFamily = 'Monaco, "Lucida Console", monospace';
          document.body.style.padding = '20px';
          document.body.style.margin = '0';
          document.body.style.backgroundColor = '#ffffff';
          return;
      }
      
      tableData=data;
      const rows=buildRows(data);
      
      // 如果有搜索参数，显示搜索结果提示
      if (searchQuery) {
        const originalCount = json.Sheet1 ? json.Sheet1.length : json.length;
        const decodedSearchQuery = decodeURIComponent(searchQuery);
        const searchResultsInfo = document.createElement('div');
        searchResultsInfo.style.cssText = 'background: #e8f4fd; border: 1px solid #bee5eb; color: #0c5460; padding: 10px; margin-bottom: 15px; border-radius: 5px; font-size: 14px;';
        searchResultsInfo.innerHTML = `<strong>Search Results for "${decodedSearchQuery}":</strong> Found ${data.length} result(s) out of ${originalCount} total entries. <a href="/sequences/" style="color: #520049; text-decoration: underline;">Clear search</a>`;
        document.querySelector('h1.post-title').insertAdjacentElement('afterend', searchResultsInfo);
      }
      
      // 初始化选择状态显示
      updateSelectedCount();
      
      // 确保 DataTable 函数存在
      if (typeof $.fn.DataTable === 'undefined') {
        console.error('DataTable is not loaded, trying alternative initialization');
        // 如果 DataTable 没有加载，尝试简单的表格显示
        initSimpleTable(rows);
        
        // 如果URL中有search参数，自动执行搜索（简单表格模式）
        if (searchQuery) {
          const decodedSearchQuery = decodeURIComponent(searchQuery);
          $('#searchBox').val(decodedSearchQuery);
          $('#searchBox').trigger('input');
        }
        return;
      }
      
      try {
        table=$('#seqTable').DataTable({
          data:rows,
          columns:[
            {title:'Select',orderable:false},
            {title:'Sequence Name'},
            {title:'Aptamer Name'},
            {title:'Category'},
            {title:'Type'},
            {title:'Article name'},
            {title:'Sequence'},
            {title:'Length'},
            {title:'GC Content'},
            {title:'Year'},
            {title:'Description'}
          ],
          responsive:true,
          pageLength:25,
          dom:'lrtip',
          drawCallback: function() {
            // 每次重绘表格后添加事件监听器
            addDataTableCheckboxListeners();
            addTooltipListeners();
            updateSelectedCount();
          }
        });
        $('#searchBox').on('input',function(){
          const searchTerm = this.value.toLowerCase();
          // 对于DataTable，使用内置搜索，但对于包含逗号的搜索，显示所有结果
          // 因为用户可能想要看到所有相关的aptamer
          table.search(this.value).draw();
        });
        
        // 如果URL中有search参数，自动执行搜索
        if (searchQuery) {
          const decodedSearchQuery = decodeURIComponent(searchQuery);
          $('#searchBox').val(decodedSearchQuery);
          if (table && typeof table.search === 'function') {
            table.search(decodedSearchQuery).draw();
          }
        }
      } catch (error) {
        console.error('DataTable initialization failed:', error);
        initSimpleTable(rows);
        
        // 如果URL中有search参数，自动执行搜索（简单表格模式）
        if (searchQuery) {
          const decodedSearchQuery = decodeURIComponent(searchQuery);
          $('#searchBox').val(decodedSearchQuery);
          $('#searchBox').trigger('input');
        }
      }
    })
    .catch(error => {
      console.error('Error loading data:', error);
    });
}

// 选择当前页面所有行
function selectCurrentPage() {
  if (table && typeof table.rows === 'function') {
    // DataTable 模式 - 选择当前页面显示的行
    $('#seqTable tbody tr .row-select').each(function() {
      $(this).prop('checked', true);
      const rowId = $(this).attr('data-row-id');
      if (rowId) {
        selectedRowIds.add(rowId);
      }
    });
  } else {
    // 简单表格模式 - 选择当前页面的复选框
    const currentPageCheckboxes = document.querySelectorAll('#seqTable tbody .row-select');
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
      const sequenceNameHTML = rowData[1] || 'N/A';
      const sequenceName = sequenceNameHTML.replace ? sequenceNameHTML.replace(/<[^>]+>/g, '') : sequenceNameHTML;
      const rowId = `row_${sequenceName}`;
      selectedRowIds.add(rowId);
    });
    // 更新所有复选框状态
    $('#seqTable .row-select').prop('checked', true);
  } else {
    // 简单表格模式 - 选择所有filteredRows
    filteredRows.forEach((row, index) => {
      const sequenceNameHTML = row[1] || 'N/A';
      const sequenceName = sequenceNameHTML.replace ? sequenceNameHTML.replace(/<[^>]+>/g, '') : sequenceNameHTML;
      const rowId = `row_${sequenceName}`;
      selectedRowIds.add(rowId);
    });
    // 更新当前页面显示
    document.querySelectorAll('#seqTable tbody tr .row-select').forEach(checkbox => {
      checkbox.checked = true;
    });
  }
  updateSelectedCount();
}

// 清除所有选择
function clearSelection() {
  selectedRowIds.clear();
  // 清除所有复选框的选中状态
  $('#seqTable .row-select').prop('checked', false);
  document.querySelectorAll('.row-select').forEach(checkbox => {
    checkbox.checked = false;
  });
  updateSelectedCount();
}

// 根据序列名从原始数据中获取行
function getOriginalDataBySequenceName(sequenceName) {
  return tableData.find(item => item.Named === sequenceName);
}

// 导出选中的行
function exportSelected(){
  const selected = [];
  
  // 从原始数据中获取选中的行
  selectedRowIds.forEach(rowId => {
    // 从rowId中提取序列名（格式：row_sequenceName）
    const sequenceName = rowId.replace('row_', '');
    const originalData = getOriginalDataBySequenceName(sequenceName);
    if (originalData) {
      selected.push(originalData);
    }
  });
  
  if (selected.length === 0) {
    alert('Please select rows to export first!');
    return;
  }
  
  exportOriginalDataToCSV(selected, `selected_sequences_${selected.length}_rows.csv`);
}

// 导出所有结果
function exportAllResults() {
  // 获取当前过滤后的原始数据
  let originalRows = [];
  
  if (table && typeof table.rows === 'function') {
    // DataTable 模式 - 获取当前显示的所有行对应的原始数据
    table.rows().data().each(function(rowData) {
      // 从HTML中提取纯文本序列名
      const sequenceNameHTML = rowData[1]; // 序列名在第二列（跳过复选框列）
      const sequenceName = sequenceNameHTML.replace ? sequenceNameHTML.replace(/<[^>]+>/g, '') : sequenceNameHTML; // 去除HTML标签
      const originalData = getOriginalDataBySequenceName(sequenceName);
      if (originalData) {
        originalRows.push(originalData);
      }
    });
  } else {
    // 简单表格模式 - 从filteredRows对应的原始数据
    filteredRows.forEach(row => {
      // 从HTML中提取纯文本序列名
      const sequenceNameHTML = row[1]; // 序列名在第二列（跳过复选框列）
      const sequenceName = sequenceNameHTML.replace ? sequenceNameHTML.replace(/<[^>]+>/g, '') : sequenceNameHTML; // 去除HTML标签
      const originalData = getOriginalDataBySequenceName(sequenceName);
      if (originalData) {
        originalRows.push(originalData);
      }
    });
  }
  
  exportOriginalDataToCSV(originalRows, `all_sequences_${originalRows.length}_rows.csv`);
}

// 安全字符串处理函数
function safeStringReplace(value, searchValue, replaceValue) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).replace(searchValue, replaceValue);
}

function safeString(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
}

// 导出原始数据的CSV函数
function exportOriginalDataToCSV(dataRows, filename) {
  const headers=['Sequence Name','Aptamer Name','Category','Type','Article name','Sequence','Length','GC Content','Year','Description'];
  const csv=[headers.join(',')];
  
  dataRows.forEach((data, index) => {
    try {
      // 处理aptamer名称 - 去掉合并的名称，根据sequence name确定正确的aptamer name
      let aptamerName = data['Linker name(page name)'] || 'N/A';
      const seqName = data.Named || '';
      
      if (seqName && aptamerName !== 'N/A' && aptamerName.includes(',')) {
        // 检查是否是合并的aptamer（包含逗号）
        if (seqName.includes('CB-42')) {
          aptamerName = 'CB-42 aptamer';
        } else if (seqName.includes('B4-25')) {
          aptamerName = 'B4-25 aptamer';
        } else if (seqName.includes('Ribostamycin')) {
          aptamerName = 'Ribostamycin aptamer';
        } else if (seqName.includes('Paromomycin')) {
          aptamerName = 'Paromomycin aptamer';
        }
      }
      
      // 格式化GC含量
      let gcContent = 'N/A';
      if (data['GC Content'] && !isNaN(parseFloat(data['GC Content']))) {
        gcContent = (parseFloat(data['GC Content']) * 100).toFixed(1) + '%';
      }
      
      csv.push([
        `"${safeString(data.Named || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(aptamerName).replace(/"/g, '""')}"`,
        `"${safeString(data.Category || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data.Type || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data['Article name'] || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data.Sequence || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data.Length || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(gcContent).replace(/"/g, '""')}"`,
        `"${safeString(data.Year || 'N/A').replace(/"/g, '""')}"`,
        `"${safeString(data['Ligand Description'] || 'N/A').replace(/"/g, '""')}"`,
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

// 通用CSV导出函数 (保留用于向后兼容)
function exportRowsToCSV(rows, filename) {
  const headers=['Sequence Name','Aptamer Name','Category','Type','Article name','Sequence','Length','GC Content','Year','Description'];
  const csv=[headers.join(',')];
  
  rows.forEach((r, index) => {
    try {
      // 跳过第一个复选框列
      const exportRow = r.slice(1);
      
      // 确保exportRow有足够的元素
      while (exportRow.length < 10) {
        exportRow.push('N/A');
      }
      
      csv.push([
        safeStringReplace(exportRow[0], /<[^>]+>/g, ''),
        `"${safeStringReplace(exportRow[1], /"/g, '""')}"`,
        `"${safeStringReplace(exportRow[2], /"/g, '""')}"`,
        `"${safeStringReplace(safeStringReplace(exportRow[3], /<[^>]+>/g, ''), /"/g, '""')}"`,
        `"${safeStringReplace(exportRow[4], /"/g, '""')}"`,
        `"${safeStringReplace(safeStringReplace(exportRow[5], /<[^>]+>/g, ''), /"/g, '""')}"`,
        safeStringReplace(exportRow[6], /<[^>]+>/g, ''),
        safeStringReplace(exportRow[7], /<[^>]+>/g, ''),
        safeStringReplace(exportRow[8], /<[^>]+>/g, ''),
        `"${safeStringReplace(safeStringReplace(exportRow[9], /<[^>]+>/g, ''), /"/g, '""')}"`,
      ].join(','));
    } catch (error) {
      console.error(`Error processing row ${index}:`, error, r);
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

$(document).ready(function(){
  // 确保tooltip元素存在
  if (!document.getElementById('amirTooltip')) {
    const tooltip = document.createElement('div');
    tooltip.id = 'amirTooltip';
    tooltip.className = 'amir-tooltip';
    tooltip.style.opacity = '0';
    tooltip.innerHTML = `
      <div class="tooltip-content"></div>
      <div class="tooltip-arrow"></div>
    `;
    document.body.appendChild(tooltip);
  }
  
  // 等待所有脚本加载完成
  setTimeout(function() {
    loadData();
    $('#exportSelectedBtn').on('click',exportSelected);
    $('#exportAllBtn').on('click',exportAllResults);
    $('#selectCurrentPageBtn').on('click',selectCurrentPage);
    $('#selectAllResultsBtn').on('click',selectAllResults);
    $('#clearSelectionBtn').on('click',clearSelection);
  }, 100);
});
</script>
</body>
</html>
