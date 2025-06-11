// Dashboard Configuration - 仪表板配置文件

// ====== 全局变量 ======
let originalData = [];
let filteredData = [];

// 冻结数据和节点层级管理
let nodeInteractionOrder = []; // 用户交互顺序，保存图表ID: ['yearChart', 'ligandChart', 'scatterChart']
let nodeFilteredData = {  // 每个节点的筛选后数据
    yearChart: [],       // A节点(柱状图)的筛选后数据
    ligandChart: [],     // B节点(饼图)的筛选后数据
    scatterChart: []     // C节点(散点图)的筛选后数据
};
let nodeFrozenState = {  // 每个节点的冻结状态
    yearChart: false,    // A节点是否冻结
    ligandChart: false,  // B节点是否冻结
    scatterChart: false  // C节点是否冻结
};

// 筛选条件
let activeFilters = {
    years: new Set(),
    categories: new Set(),
    scatterSelection: null
};

// ====== 颜色配置 ======
// 替换为更明亮的莫兰迪色系
const morandiColors = [
    '#AEE1D6', // 明亮青绿
    '#F6D6AD', // 明亮米杏
    '#F7B7A3', // 明亮珊瑚
    '#B5C7ED', // 明亮蓝紫
    '#E7B7E8', // 明亮粉紫
    '#B7E7E1', // 明亮青蓝
    '#E8D7B7', // 明亮米黄
    '#F7E6AD', // 明亮柠檬
];

const morandiHighlight = '#7D807F'; // 柔和深灰，作为高亮边框
const morandiDim = 'rgba(180,180,180,0.3)'; // 非高亮部分叠加的半透明灰

// ====== 图表配置 ======
const chartConfig = {
    responsive: true,
    displayModeBar: false,
    // 提升悬停性能的配置
    interaction: {
        intersect: false,
        mode: 'nearest'
    }
};

const chartLayoutBase = {
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
    font: {
        family: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        size: 12,
        color: '#555'
    },
    // 全局悬停配置
    hovermode: 'closest',
    hoverdistance: 50
};

// ====== 工具函数 ======
// 获取年份颜色
function getYearColor(year, yearRange) {
    const minYear = Math.min(...yearRange);
    const maxYear = Math.max(...yearRange);
    const ratio = (year - minYear) / (maxYear - minYear);
    
    if (ratio <= 0.2) return morandiColors[0];
    if (ratio <= 0.4) return morandiColors[1];
    if (ratio <= 0.6) return morandiColors[2];
    if (ratio <= 0.8) return morandiColors[3];
    return morandiColors[4];
}

// AMIR风格提示框
function showAmirTooltip(content, x, y) {
    const tooltip = document.getElementById('amirTooltip');
    const tooltipContent = tooltip.querySelector('.tooltip-content');
    
    tooltipContent.innerHTML = content;
    tooltip.style.left = x + 'px';
    tooltip.style.top = (y - 10) + 'px';
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translate(-50%, -100%)';
}

function hideAmirTooltip() {
    const tooltip = document.getElementById('amirTooltip');
    tooltip.style.opacity = '0';
}

// 创建筛选标签
function createFilterTag(text, onRemove) {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';
    tag.innerHTML = `
        <span class="filter-tag-text">${text}</span>
        <button class="filter-tag-remove" type="button">×</button>
    `;
    
    tag.querySelector('.filter-tag-remove').addEventListener('click', onRemove);
    return tag;
}

// 导出数据
function exportData() {
    // 检查是否有数据可导出
    if (!filteredData || filteredData.length === 0) {
        alert("No data available to export.");
        return;
    }
    
    // 从第一条数据获取所有字段名
    const firstItem = filteredData[0];
    const headers = Object.keys(firstItem);
    
    // 创建CSV标题行
    const headerRow = headers.join(",");
    
    // 创建数据行
    const dataRows = filteredData.map(item => {
        return headers.map(header => {
            // 处理可能包含逗号的字段，用引号包裹
            let value = item[header] !== undefined ? item[header] : "";
            // 如果值包含逗号、引号或换行符，则用引号包裹并处理内部引号
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
                value = '"' + value.replace(/"/g, '""') + '"';
            }
            return value;
        }).join(",");
    }).join("\n");
    
    // 组合完整CSV内容
    const csvContent = "data:text/csv;charset=utf-8," + headerRow + "\n" + dataRows;
    
    // 创建下载链接
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "aptamer_data_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Exported ${filteredData.length} records with ${headers.length} fields.`);
}

// 重置所有筛选
function resetAllFilters() {
    // 重置所有筛选条件
    activeFilters = {
        years: new Set(),
        categories: new Set(),
        scatterSelection: null
    };
    
    // 重置节点交互顺序和冻结状态
    nodeInteractionOrder = [];
    nodeFrozenState.yearChart = false;
    nodeFrozenState.ligandChart = false;
    nodeFrozenState.scatterChart = false;
    
    // 重置各节点数据
    nodeFilteredData.yearChart = [];
    nodeFilteredData.ligandChart = [];
    nodeFilteredData.scatterChart = [];
    
    // 重置筛选后数据
    filteredData = [...originalData];
    
    // 更新UI
    applyFilters();
}

console.log('Dashboard configuration loaded'); 