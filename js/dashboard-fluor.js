// dashboard-fluor.js - 针对荧光页面(fluorescence.html)的 Dashboard 补丁脚本
// 仅在该页面中引入，以避免影响首页(index.html) 的默认行为
// 主要功能：
// 1. 在数据加载阶段，把每条记录的 mechanisms 字段映射为 category，复用原有类别图逻辑
// 2. 重写 TableModule.updateDataTable，使其列顺序与荧光页面一致
// 3. 其他页面继续使用原版 dashboard-main.js，不受影响

(function () {
    if (typeof DataModule === 'undefined') {
        console.error('DataModule 未定义，dashboard-fluor.js 无法应用补丁');
        return;
    }

    // --- 重写 DataModule.loadData ---
    const originalLoadData = DataModule.loadData;
    DataModule.loadData = async function () {
        try {
            const dataPath = window.DASHBOARD_CONFIG?.dataPath || './apidata/fluorescence_data.json';
            const response = await fetch(dataPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // 将 mechanisms 字段映射到 category，复用原有类别(饼图)逻辑
            data.forEach(d => {
                if (d.mechanisms !== undefined && d.mechanisms !== null) {
                    d.category = d.mechanisms;
                }
            });

            // 保存到全局数据
            originalData = data;
            filteredData = [...data];

            console.log('Fluorescence data loaded successfully, total', data.length, 'records');

            // 初始化各模块
            this.updateStatistics();
            ChartModule.createAllCharts();
            UIModule.updateDataSummary();
            FilterModule.updateFilterTags();
            TableModule.updateDataTable();
        } catch (error) {
            console.error('Fluorescence data loading failed:', error);
            this.showLoadingError(error.message);
        }
    };

    // --- 重写 TableModule.updateDataTable ---
    if (typeof TableModule !== 'undefined') {
        TableModule.updateDataTable = function () {
            const tableBody = document.getElementById('tableBody');
            const tableInfo = document.getElementById('tableInfo');

            if (!tableBody || !tableInfo) {
                console.warn('表格元素缺失，无法更新数据表');
                return;
            }

            tableInfo.textContent = `Showing ${filteredData.length} records (out of ${originalData.length} total)`;
            tableBody.innerHTML = '';

            // 辅助函数
            const safe = (v) => (v !== undefined && v !== null && String(v).trim() !== '' ? v : 'NA');

            const colorizeSequence = (seq) => {
                if (!seq) return 'NA';
                const colorMap = { 'A': '#d9534f', 'T': '#f0ad4e', 'U': '#f0ad4e', 'C': '#5bc0de', 'G': '#5cb85c' };
                return seq.split('').map(ch => `<span style="color:${colorMap[ch.toUpperCase()] || '#333'}">${ch}</span>`).join('');
            };

            const addTooltip = (cell, htmlContent) => {
                if (!htmlContent) return;
                cell.style.cursor = 'pointer';
                
                cell.addEventListener('mouseenter', (e) => {
                    showAmirTooltip(htmlContent, e.clientX, e.clientY);
                });
                cell.addEventListener('mousemove', (e) => {
                    // 实时跟随鼠标移动
                    showAmirTooltip(htmlContent, e.clientX, e.clientY);
                });
                cell.addEventListener('mouseleave', hideAmirTooltip);
            };

            filteredData.forEach((item, index) => {
                const row = document.createElement('tr');
                row.style.whiteSpace = 'nowrap';

                // Aptamer name 列
                let nameHTML = safe(item.name);
                if (item.more_info && item.more_info.trim() !== '') {
                    nameHTML = `<a href="${item.more_info}" target="_blank">${safe(item.name)}</a>`;
                }

                // Ligand
                const ligandRaw = item.ligand ?? '';
                const ligandShort = ligandRaw ? ligandRaw.split(',')[0].trim() : 'NA';
                const ligandFull = ligandRaw || 'NA';

                // Year
                let yearHTML = safe(item.year);
                if (item.pubmed_link && item.pubmed_link.trim() !== '') {
                    yearHTML = `<a href="${item.pubmed_link}" target="_blank">${safe(item.year)}</a>`;
                }

                // Mechanisms
                const mechHTML = safe(item.mechanisms);

                // Sequence
                const seqRaw = item.sequence ?? '';
                const seqShort = seqRaw ? seqRaw.substring(0, 10) + '...' : 'NA';
                const seqFullColored = colorizeSequence(seqRaw);

                // Citation
                const citationRaw = item.citation ?? '';
                const citationParts = citationRaw.split(',');
                let citationShort = citationRaw;
                if (citationParts.length >= 2) {
                    citationShort = citationParts[0] + ',' + citationParts[1];
                }
                if (citationShort === '') citationShort = 'NA';

                // Structures
                const structRaw = item.structures ?? '';
                const structShort = structRaw ? structRaw.split(',')[0].trim() : 'NA';
                const structFull = structRaw || 'NA';

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${nameHTML}</td>
                    <td>${ligandShort}</td>
                    <td>${yearHTML}</td>
                    <td>${mechHTML}</td>
                    <td>${seqShort}</td>
                    <td>${citationShort}</td>
                    <td>${structShort}</td>
                `;
                tableBody.appendChild(row);

                const cells = row.querySelectorAll('td');
                // 依次添加 tooltip
                addTooltip(cells[2], ligandFull); // ligand
                addTooltip(cells[5], seqFullColored); // sequence
                addTooltip(cells[6], citationRaw || 'NA'); // citation full
                addTooltip(cells[7], structFull); // structures full
            });
        };
    }

    const originalUpdateStatistics = DataModule.updateStatistics;
    DataModule.updateStatistics = function() {
        // 复用原函数逻辑，但修正 GC 显示为百分比
        if (!originalData || originalData.length === 0) {
            return;
        }

        if (!filteredData) {
            return;
        }

        const ligands = [...new Set(filteredData.map(d => d.ligand))];
        const years = filteredData.length > 0 ? [...new Set(filteredData.map(d => d.year))] : [];

        const totalAptamersEl = document.getElementById('totalAptamers');
        const uniqueLigandsEl = document.getElementById('uniqueLigands');
        const yearSpanEl = document.getElementById('yearSpan');
        const avgGCEl = document.getElementById('avgGC');

        if (totalAptamersEl) totalAptamersEl.textContent = filteredData.length;
        if (uniqueLigandsEl) uniqueLigandsEl.textContent = ligands.length;
        if (yearSpanEl) {
            if (years.length > 0) {
                const yearSpan = Math.max(...years) - Math.min(...years);
                yearSpanEl.textContent = yearSpan + '年';
            } else {
                yearSpanEl.textContent = '0年';
            }
        }

        if (avgGCEl) {
            if (filteredData.length > 0) {
                const validGCData = filteredData.filter(d => d.gc_content !== undefined && d.gc_content !== null && !isNaN(d.gc_content));
                if (validGCData.length > 0) {
                    const avgGC = validGCData.reduce((sum, d) => sum + d.gc_content, 0) / validGCData.length * 100;
                    avgGCEl.textContent = avgGC.toFixed(1) + '%';
                } else {
                    avgGCEl.textContent = '0%';
                }
            } else {
                avgGCEl.textContent = '0%';
            }
        }
    };

    // --- 覆写 ChartModule.createAllCharts：仅生成年份和类别图 ---
    ChartModule.createAllCharts = function () {
        try {
            console.log("[Fluor] 创建年份及类别图表，无散点图...");
            this.createYearChart();
            this.createCategoryChart();
            console.log("[Fluor] 图表创建完成");
        } catch (error) {
            console.error("[Fluor] 创建图表时发生错误:", error);
        }
    };

    // --- 覆写 FilterModule.updateNodeStateIndicators：忽略散点图 ---
    if (typeof FilterModule !== 'undefined') {
        const originalUpdateNodeStateIndicators = FilterModule.updateNodeStateIndicators;
        FilterModule.updateNodeStateIndicators = function () {
            // 年份图状态
            const yearChartEl = document.querySelector('#yearChart');
            const ligandChartEl = document.querySelector('#ligandChart');
            if (!yearChartEl || !ligandChartEl) {
                return; // 元素缺失时直接返回
            }
            const yearChartHeader = yearChartEl.closest('.chart-wrapper').querySelector('.chart-header');
            const ligandChartHeader = ligandChartEl.closest('.chart-wrapper').querySelector('.chart-header');

            const yearStateIndicator = yearChartHeader.querySelector('.node-state-indicator') || document.createElement('div');
            yearStateIndicator.className = 'node-state-indicator';
            const ligandStateIndicator = ligandChartHeader.querySelector('.node-state-indicator') || document.createElement('div');
            ligandStateIndicator.className = 'node-state-indicator';

            // 清除状态
            yearStateIndicator.textContent = '';
            ligandStateIndicator.textContent = '';

            // 根据交互顺序填充状态（仅 A/B 两层）
            nodeInteractionOrder.forEach((nodeId, index) => {
                const stateText = index === 0 ? 'Node A' : 'Node B';
                if (nodeId === 'yearChart') {
                    yearStateIndicator.textContent = stateText;
                    yearStateIndicator.style.backgroundColor = '#520049';
                } else if (nodeId === 'ligandChart') {
                    ligandStateIndicator.textContent = stateText;
                    ligandStateIndicator.style.backgroundColor = '#520049';
                }
            });

            // 附加到 DOM
            if (!yearChartHeader.querySelector('.node-state-indicator')) {
                yearChartHeader.appendChild(yearStateIndicator);
            }
            if (!ligandChartHeader.querySelector('.node-state-indicator')) {
                ligandChartHeader.appendChild(ligandStateIndicator);
            }
        };
    }

    // --- 覆写导出功能：确保fluorescence页面导出与表格显示一致 ---
    window.exportData = function() {
        // 获取当前的filteredData - 从全局作用域或者尝试多种方式获取
        let currentData = null;
        if (typeof filteredData !== 'undefined' && filteredData && filteredData.length > 0) {
            currentData = filteredData;
        } else if (typeof originalData !== 'undefined' && originalData && originalData.length > 0) {
            currentData = originalData;
        } else if (typeof window.filteredData !== 'undefined' && window.filteredData && window.filteredData.length > 0) {
            currentData = window.filteredData;
        } else if (typeof window.originalData !== 'undefined' && window.originalData && window.originalData.length > 0) {
            currentData = window.originalData;
        }
        
        // 检查是否有数据可导出
        if (!currentData || currentData.length === 0) {
            alert("暂无数据可导出。请检查数据是否已加载。");
            console.error('Export failed: No data available');
            return;
        }
        
        console.log(`准备导出 ${currentData.length} 条荧光数据`);
        
        // 创建CSV内容 - 严格按照fluorescence表格显示的列来导出
        const csvRows = [];
        
        // 标题行 - 与fluorescence表格显示完全一致
        const headers = [
            'No.',
            'Aptamer name',
            'Ligand',
            'Year',
            'Mechanisms',
            'Sequence (5\'-3\')',
            'Citation',
            'Relevant 3D structures'
        ];
        csvRows.push(headers.map(h => `"${h}"`).join(','));
        
        // 数据行 - 严格按照fluorescence表格逻辑处理
        currentData.forEach((item, index) => {
            // Debug: 检查每个item的内容
            if (index === 0) {
                console.log('第一条记录的字段:', Object.keys(item));
                console.log('第一条记录的内容:', item);
            }
            
            // 1. No. - 行号
            const no = index + 1;
            
            // 2. Aptamer name - 去除HTML标签
            const aptamerName = (item.name || 'N/A').toString().replace(/<[^>]*>/g, '');
            
            // 3. Ligand - 取第一个逗号前的部分
            const ligandRaw = item.ligand || '';
            const ligand = ligandRaw ? ligandRaw.split(',')[0].trim() : 'N/A';
            
            // 4. Year - 去除HTML标签
            const year = (item.year || 'N/A').toString().replace(/<[^>]*>/g, '');
            
            // 5. Mechanisms
            const mechanisms = (item.mechanisms || 'N/A').toString().replace(/<[^>]*>/g, '');
            
            // 6. Sequence (5'-3') - 使用完整序列
            const sequence = (item.sequence || 'N/A').toString().replace(/<[^>]*>/g, '');
            
            // 7. Citation - 使用完整引用
            const citation = (item.citation || 'N/A').toString().replace(/<[^>]*>/g, '');
            
            // 8. Relevant 3D structures - 使用完整结构信息
            const structures = (item.structures || 'N/A').toString().replace(/<[^>]*>/g, '');
            
            // 构建行数据
            const rowData = [no, aptamerName, ligand, year, mechanisms, sequence, citation, structures];
            const csvRow = rowData.map(val => {
                const strVal = String(val).replace(/"/g, '""'); // 转义双引号
                return `"${strVal}"`;
            }).join(',');
            
            csvRows.push(csvRow);
        });
        
        // 创建CSV内容
        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        
        // 创建下载链接
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `fluorescence_export_${currentData.length}_rows.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`✅ 已导出荧光页面数据 ${currentData.length} 条记录，包含 ${headers.length} 个字段`);
    };

    console.log('dashboard-fluor.js 补丁已应用');
})(); 