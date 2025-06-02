// Dashboard Main - 仪表板主要功能模块

// ====== 数据管理模块 ======
const DataModule = {
    // 加载数据
    async loadData() {
        try {
            // 使用全局配置中的数据路径
            const dataPath = window.DASHBOARD_CONFIG?.dataPath || './apidata/sequences_cleaned.json';
            const response = await fetch(dataPath);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            originalData = data;
            filteredData = [...data];
            
            console.log('数据加载成功，共', data.length, '条记录');
            
            this.updateStatistics();
            ChartModule.createAllCharts();
            UIModule.updateDataSummary();
            FilterModule.updateFilterTags();
            TableModule.updateDataTable();
        } catch (error) {
            console.error('数据加载失败:', error);
            // 显示错误信息给用户
            this.showLoadingError(error.message);
        }
    },

    // 显示加载错误
    showLoadingError(errorMessage) {
        const container = document.querySelector('.amir-container');
        if (container) {
            const errorDiv = document.createElement('div');
            errorDiv.style.cssText = `
                background: #f8d7da;
                color: #721c24;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border: 1px solid #f5c6cb;
                text-align: center;
            `;
            errorDiv.innerHTML = `
                <h4>数据加载失败</h4>
                <p>无法加载适配体数据。请检查网络连接或联系管理员。</p>
                <small>错误详情: ${errorMessage}</small>
            `;
            container.insertBefore(errorDiv, container.firstChild);
        }
    },

    // 更新统计数据
    updateStatistics() {
        const ligands = [...new Set(filteredData.map(d => d.ligand))];
        const years = [...new Set(filteredData.map(d => d.year))];
        
        // 安全地更新统计数据，检查元素是否存在
        const totalAptamersEl = document.getElementById('totalAptamers');
        const uniqueLigandsEl = document.getElementById('uniqueLigands');
        const yearSpanEl = document.getElementById('yearSpan');
        const avgGCEl = document.getElementById('avgGC');
        
        if (totalAptamersEl) {
            totalAptamersEl.textContent = filteredData.length;
        }
        
        if (uniqueLigandsEl) {
            uniqueLigandsEl.textContent = ligands.length;
        }
        
        if (yearSpanEl) {
            yearSpanEl.textContent = `${Math.max(...years) - Math.min(...years)}年`;
        }
        
        if (avgGCEl) {
            const avgGC = filteredData.reduce((sum, d) => sum + d.gc_content, 0) / filteredData.length;
            avgGCEl.textContent = avgGC.toFixed(1) + '%';
        }
    }
};

// ====== 图表渲染模块 ======
const ChartModule = {
    // 创建年份分布图表
    createYearChart() {
        const allYearCounts = {};
        originalData.forEach(d => {
            allYearCounts[d.year] = (allYearCounts[d.year] || 0) + 1;
        });
        
        const allYears = Object.keys(allYearCounts).map(y => parseInt(y)).sort();
        const allCounts = allYears.map(year => allYearCounts[year]);
        
        const filteredYearCounts = {};
        filteredData.forEach(d => {
            filteredYearCounts[d.year] = (filteredYearCounts[d.year] || 0) + 1;
        });
        
        const hasFilter = activeFilters.years.size > 0 || activeFilters.gcBins.size > 0 || activeFilters.scatterSelection;
        
        const trace = {
            x: allYears,
            y: allCounts,
            type: 'bar',
            marker: {
                color: allYears.map((year, i) => {
                    if (!hasFilter) {
                        return morandiColors[i % morandiColors.length];
                    }
                    if (filteredYearCounts[year] > 0) {
                        return morandiColors[i % morandiColors.length];
                    }
                    return morandiDim;
                }),
                opacity: 1.0,
                line: {
                    width: allYears.map(year =>
                        (!hasFilter ? 1 : (filteredYearCounts[year] > 0 ? 3 : 1))
                    ),
                    color: allYears.map(year =>
                        (!hasFilter ? 'white' : (filteredYearCounts[year] > 0 ? morandiHighlight : 'white'))
                    )
                }
            },
            hovertemplate: '<b>%{x}年</b><br>总数: %{y}<br>筛选后: %{customdata}<br>点击进行多选筛选<extra></extra>',
            customdata: allYears.map(year => filteredYearCounts[year] || 0),
            hoverlabel: { bgcolor: 'white', bordercolor: morandiHighlight }
        };
        
        const layout = {
            ...chartLayoutBase,
            margin: { l: 60, r: 20, t: 20, b: 50 },
            xaxis: {
                title: '年份',
                titlefont: { size: 12, color: '#555' },
                tickfont: { size: 10, color: '#555' },
                gridcolor: 'rgba(0,0,0,0.1)',
                showgrid: true
            },
            yaxis: {
                title: '数量',
                titlefont: { size: 12, color: '#555' },
                tickfont: { size: 10, color: '#555' },
                gridcolor: 'rgba(0,0,0,0.1)',
                showgrid: true
            }
        };
        
        Plotly.newPlot('yearChart', [trace], layout, chartConfig);
        
        document.getElementById('yearChart').on('plotly_click', function(data) {
            const year = data.points[0].x;
            FilterModule.toggleYearFilter(year);
        });
    },

    // 创建GC区间分布图表
    createGCBinChart() {
        const allGCBinCounts = {};
        originalData.forEach(d => {
            allGCBinCounts[d.gc_bin] = (allGCBinCounts[d.gc_bin] || 0) + 1;
        });
        
        const gcBins = Object.keys(allGCBinCounts).sort();
        const allValues = gcBins.map(bin => allGCBinCounts[bin]);
        
        const filteredGCBinCounts = {};
        filteredData.forEach(d => {
            filteredGCBinCounts[d.gc_bin] = (filteredGCBinCounts[d.gc_bin] || 0) + 1;
        });
        
        const hasFilter = activeFilters.years.size > 0 || activeFilters.gcBins.size > 0 || activeFilters.scatterSelection;
        
        const trace = {
            labels: gcBins,
            values: allValues,
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: gcBins.map((bin, i) => {
                    if (!hasFilter) {
                        return morandiColors[i % morandiColors.length];
                    }
                    if (filteredGCBinCounts[bin] > 0) {
                        return morandiColors[i % morandiColors.length];
                    }
                    return morandiDim;
                }),
                line: {
                    color: gcBins.map(bin =>
                        (!hasFilter ? 'white' : (filteredGCBinCounts[bin] > 0 ? morandiHighlight : 'white'))
                    ),
                    width: gcBins.map(bin =>
                        (!hasFilter ? 1 : (filteredGCBinCounts[bin] > 0 ? 3 : 1))
                    )
                }
            },
            textinfo: 'percent',
            textfont: { size: 11, color: 'white' },
            hovertemplate: '<b>%{label}</b><br>总数: %{value}<br>筛选后: %{customdata}<br>点击进行多选筛选<extra></extra>',
            customdata: gcBins.map(bin => filteredGCBinCounts[bin] || 0),
            hoverlabel: { bgcolor: 'white', bordercolor: morandiHighlight }
        };
        
        const layout = {
            ...chartLayoutBase,
            margin: { l: 20, r: 20, t: 20, b: 20 },
            showlegend: false
        };
        
        Plotly.newPlot('ligandChart', [trace], layout, chartConfig);
        
        document.getElementById('ligandChart').on('plotly_click', function(data) {
            const gcBin = data.points[0].label;
            FilterModule.toggleGCBinFilter(gcBin);
        });
    },

    // 创建散点图
    createScatterChart() {
        const years = [...new Set(filteredData.map(d => d.year))];
        const hasFilter = activeFilters.years.size > 0 || activeFilters.gcBins.size > 0 || activeFilters.scatterSelection;
        
        const colors = hasFilter
            ? filteredData.map(d => morandiColors[years.indexOf(d.year) % morandiColors.length])
            : filteredData.map(() => morandiColors[0]);
        
        const opacities = hasFilter
            ? filteredData.map(d => 1.0)
            : filteredData.map(() => 1.0);
        
        const trace = {
            x: filteredData.map(d => d.length),
            y: filteredData.map(d => d.gc_content),
            mode: 'markers',
            type: 'scatter',
            marker: {
                size: 6,
                color: colors,
                opacity: opacities,
                line: { width: 1, color: 'white' }
            },
            hovertemplate: '<b>%{text}</b><br>长度: %{x} bp<br>GC含量: %{y}%<extra></extra>',
            text: filteredData.map(d => d.name),
            hoverlabel: { bgcolor: 'white', bordercolor: morandiHighlight }
        };
        
        const layout = {
            ...chartLayoutBase,
            margin: { l: 60, r: 30, t: 30, b: 50 },
            xaxis: {
                title: '序列长度 (bp)',
                titlefont: { size: 12, color: '#555' },
                tickfont: { size: 10, color: '#555' },
                gridcolor: 'rgba(0,0,0,0.1)',
                showgrid: true
            },
            yaxis: {
                title: 'GC含量 (%)',
                titlefont: { size: 12, color: '#555' },
                tickfont: { size: 10, color: '#555' },
                gridcolor: 'rgba(0,0,0,0.1)',
                showgrid: true
            },
            dragmode: 'select'
        };
        
        Plotly.newPlot('scatterChart', [trace], layout, chartConfig);
        
        document.getElementById('scatterChart').on('plotly_selected', function(eventData) {
            if (eventData && eventData.points && eventData.points.length > 0) {
                const xValues = eventData.points.map(p => p.x);
                const yValues = eventData.points.map(p => p.y);
                activeFilters.scatterSelection = {
                    xrange: [Math.min(...xValues), Math.max(...xValues)],
                    yrange: [Math.min(...yValues), Math.max(...yValues)]
                };
                FilterModule.applyFilters();
            }
        });
        
        document.getElementById('scatterChart').on('plotly_deselect', function() {
            activeFilters.scatterSelection = null;
            FilterModule.applyFilters();
        });
    },

    // 创建所有图表
    createAllCharts() {
        this.createYearChart();
        this.createGCBinChart();
        this.createScatterChart();
    }
};

// ====== 筛选模块 ======
const FilterModule = {
    // 应用筛选器
    applyFilters() {
        console.log('应用筛选器 - 年份:', Array.from(activeFilters.years), 'GC区间:', Array.from(activeFilters.gcBins));
        
        filteredData = originalData.filter(d => {
            // 年份筛选
            if (activeFilters.years.size > 0 && !activeFilters.years.has(d.year)) {
                return false;
            }
            
            // GC区间筛选
            if (activeFilters.gcBins.size > 0 && !activeFilters.gcBins.has(d.gc_bin)) {
                return false;
            }
            
            // 散点图区域筛选
            if (activeFilters.scatterSelection) {
                const sel = activeFilters.scatterSelection;
                if (d.length < sel.xrange[0] || d.length > sel.xrange[1] ||
                    d.gc_content < sel.yrange[0] || d.gc_content > sel.yrange[1]) {
                    return false;
                }
            }
            
            return true;
        });
        
        console.log('筛选后数据数量:', filteredData.length, '原始数据数量:', originalData.length);
        
        // 检查筛选后是否有数据
        if (filteredData.length === 0 && (activeFilters.years.size > 0 || activeFilters.gcBins.size > 0 || activeFilters.scatterSelection)) {
            console.warn('筛选后没有数据！当前筛选条件:', {
                years: Array.from(activeFilters.years),
                gcBins: Array.from(activeFilters.gcBins),
                scatterSelection: activeFilters.scatterSelection
            });
            
            // 检查GC区间筛选问题
            if (activeFilters.gcBins.size > 0) {
                const availableGCBins = [...new Set(originalData.map(d => d.gc_bin))];
                console.log('可用的GC区间列表:', availableGCBins.slice(0, 10));
                console.log('筛选的GC区间:', Array.from(activeFilters.gcBins));
                
                activeFilters.gcBins.forEach(gcBin => {
                    const exists = availableGCBins.includes(gcBin);
                    console.log(`GC区间 "${gcBin}" 是否存在:`, exists);
                    if (!exists) {
                        console.error('筛选的GC区间不存在于原始数据中:', gcBin);
                        const similar = availableGCBins.find(available => 
                            available.includes(gcBin) || gcBin.includes(available)
                        );
                        if (similar) {
                            console.log('可能匹配的GC区间:', similar);
                        }
                    }
                });
            }
        }
        
        // 更新所有图表和统计
        DataModule.updateStatistics();
        ChartModule.createAllCharts();
        UIModule.updateDataSummary();
        this.updateFilterTags();
        TableModule.updateDataTable();
    },

    // 切换年份筛选
    toggleYearFilter(year) {
        console.log('切换年份筛选:', year);
        
        if (activeFilters.years.has(year)) {
            activeFilters.years.delete(year);
        } else {
            activeFilters.years.add(year);
        }
        
        this.applyFilters();
    },

    // 切换GC区间筛选
    toggleGCBinFilter(gcBin) {
        console.log('切换GC区间筛选:', gcBin);
        
        if (activeFilters.gcBins.has(gcBin)) {
            activeFilters.gcBins.delete(gcBin);
        } else {
            activeFilters.gcBins.add(gcBin);
        }
        
        this.applyFilters();
    },

    // 更新筛选标签
    updateFilterTags() {
        const tagsContainer = document.getElementById('filterTags');
        tagsContainer.innerHTML = '';
        
        // 年份标签
        activeFilters.years.forEach(year => {
            const tag = createFilterTag(`年份: ${year}`, () => this.toggleYearFilter(year));
            tagsContainer.appendChild(tag);
        });
        
        // 配体标签
        activeFilters.gcBins.forEach(gcBin => {
            const shortLigand = gcBin.length > 20 ? gcBin.substring(0, 20) + '...' : gcBin;
            const tag = createFilterTag(`配体: ${shortLigand}`, () => this.toggleGCBinFilter(gcBin));
            tagsContainer.appendChild(tag);
        });
        
        // 散点图筛选标签
        if (activeFilters.scatterSelection) {
            const sel = activeFilters.scatterSelection;
            const text = `范围: ${sel.xrange[0].toFixed(0)}-${sel.xrange[1].toFixed(0)}bp, ${sel.yrange[0].toFixed(1)}-${sel.yrange[1].toFixed(1)}%`;
            const tag = createFilterTag(text, () => {
                activeFilters.scatterSelection = null;
                this.applyFilters();
            });
            tagsContainer.appendChild(tag);
        }
        
        // 显示/隐藏筛选控制区域
        const filterSection = document.querySelector('.filter-controls');
        filterSection.style.display = (activeFilters.years.size > 0 || 
                                       activeFilters.gcBins.size > 0 || 
                                       activeFilters.scatterSelection) ? 'block' : 'none';
    }
};

// ====== UI交互模块 ======
const UIModule = {
    // 更新数据摘要
    updateDataSummary() {
        const currentCount = filteredData.length;
        const totalCount = originalData.length;
        const percentage = ((currentCount / totalCount) * 100).toFixed(1);
        
        document.getElementById('currentCount').textContent = currentCount;
        document.getElementById('filterPercentage').textContent = percentage + '%';
    }
};

// ====== 数据表格模块 ======
const TableModule = {
    // 更新数据表格
    updateDataTable() {
        const tableBody = document.getElementById('tableBody');
        const tableInfo = document.getElementById('tableInfo');
        
        // 更新表格信息
        tableInfo.textContent = `显示 ${filteredData.length} 条数据（共 ${originalData.length} 条）`;
        
        // 清空表格
        tableBody.innerHTML = '';
        
        // 添加筛选后的数据
        filteredData.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td title="${item.name}">${item.name.length > 40 ? item.name.substring(0, 40) + '...' : item.name}</td>
                <td title="${item.ligand}">${item.ligand.length > 30 ? item.ligand.substring(0, 30) + '...' : item.ligand}</td>
                <td>${item.year}</td>
                <td>${item.length}</td>
                <td>${item.gc_content.toFixed(1)}</td>
                <td title="${item.affinity}">${item.affinity.length > 20 ? item.affinity.substring(0, 20) + '...' : item.affinity}</td>
            `;
            tableBody.appendChild(row);
        });
    }
};

// ====== 初始化 ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard modules loading...');
    
    // 检查全局配置是否存在
    if (!window.DASHBOARD_CONFIG) {
        console.warn('全局配置不存在，使用默认配置');
        window.DASHBOARD_CONFIG = {
            baseurl: '',
            dataPath: './apidata/sequences_cleaned.json'
        };
    }
    
    // 加载数据
    DataModule.loadData();
    
    // 绑定事件
    document.getElementById('resetAllFilters').addEventListener('click', resetAllFilters);
    document.getElementById('exportData').addEventListener('click', exportData);
    
    console.log('Dashboard modules loaded successfully');
});

// 暴露给外部的函数（兼容性）
window.applyFilters = () => FilterModule.applyFilters();
window.toggleYearFilter = (year) => FilterModule.toggleYearFilter(year);
window.toggleGCBinFilter = (gcBin) => FilterModule.toggleGCBinFilter(gcBin); 