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
        // 确保数据已加载
        if (!originalData || originalData.length === 0) {
            console.warn('原始数据未加载或为空');
            return;
        }
        
        if (!filteredData) {
            console.warn('筛选数据未初始化');
            return;
        }
        
        const ligands = [...new Set(filteredData.map(d => d.ligand))];
        const years = filteredData.length > 0 ? [...new Set(filteredData.map(d => d.year))] : [];
        
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
                    const avgGC = validGCData.reduce((sum, d) => sum + d.gc_content, 0) / validGCData.length;
                    avgGCEl.textContent = avgGC.toFixed(1) + '%';
                } else {
                    avgGCEl.textContent = '0%';
                }
            } else {
                avgGCEl.textContent = '0%';
            }
        }
    }
};

// ====== 图表渲染模块 ======
const ChartModule = {
    // 创建年份分布图表
    createYearChart() {
        // 获取所有可能的年份（基于原始数据）- 始终显示完整结构
        const allYearCounts = {};
        originalData.forEach(d => {
            allYearCounts[d.year] = (allYearCounts[d.year] || 0) + 1;
        });
        const allYears = Object.keys(allYearCounts).map(y => parseInt(y)).sort();
        
        console.log("创建年份图表 - 交互顺序:", nodeInteractionOrder.join(" > "));
        
        // 确定数据源 - A节点使用原始数据，B/C节点使用上级节点数据
        let dataForVisualization = [];
        
        if (nodeInteractionOrder.length === 0) {
            // 没有任何交互，使用原始数据
            dataForVisualization = [...originalData];
            console.log("年份图表无交互，使用原始数据:", dataForVisualization.length);
        } else {
            // 根据当前节点在交互序列中的位置确定数据来源
            const myIndex = nodeInteractionOrder.indexOf('yearChart');
            
            if (myIndex === -1) {
                // 如果不在交互序列中，使用最后一个交互节点的数据
                const lastNodeId = nodeInteractionOrder[nodeInteractionOrder.length - 1];
                dataForVisualization = [...nodeFilteredData[lastNodeId]];
                console.log(`年份图表不在交互序列中，使用最后节点${lastNodeId}数据:`, dataForVisualization.length);
            } else if (myIndex === 0) {
                // 如果是A节点，必须使用原始数据，严禁下探
                dataForVisualization = [...originalData];
                console.log("年份图表是A节点，使用原始数据(禁止下探):", dataForVisualization.length);
            } else {
                // 如果是B节点或C节点，使用上级节点的数据进行可视化
                const parentNodeId = nodeInteractionOrder[myIndex - 1];
                dataForVisualization = [...nodeFilteredData[parentNodeId]];
                console.log(`年份图表是${myIndex === 1 ? 'B' : 'C'}节点，使用上级节点${parentNodeId}数据:`, dataForVisualization.length);
            }
        }
        
        // 计算可视化数据的年份分布
        let visualizationYearCounts = {};
        dataForVisualization.forEach(d => {
            visualizationYearCounts[d.year] = (visualizationYearCounts[d.year] || 0) + 1;
        });
        
        // 检查当前是否有筛选
        const hasYearFilter = activeFilters.years.size > 0;
        const hasAnyFilter = nodeInteractionOrder.length > 0;
        
        // 柱状图始终显示所有年份，但基于可视化数据源
        const trace = {
            x: allYears,
            y: allYears.map(year => visualizationYearCounts[year] || 0), // 使用可视化数据源的计数
            type: 'bar',
            marker: {
                color: allYears.map((year, i) => {
                    // 如果该年份被选中，使用高亮颜色
                    if (hasYearFilter && activeFilters.years.has(year)) {
                        return morandiHighlight;
                    }
                    // 如果有筛选但该年份没有数据，使用暗淡颜色
                    if (hasAnyFilter && (!visualizationYearCounts[year] || visualizationYearCounts[year] === 0)) {
                        return morandiDim;
                    }
                    // 正常颜色
                    return morandiColors[i % morandiColors.length];
                }),
                opacity: 1.0,
                line: {
                    width: allYears.map(year => {
                        if (hasYearFilter && activeFilters.years.has(year)) {
                            return 3;
                        }
                        return 1;
                    }),
                    color: allYears.map(year => {
                        if (hasYearFilter && activeFilters.years.has(year)) {
                            return '#333';
                        }
                        return 'white';
                    })
                }
            },
            hovertemplate: '<b>%{x}年</b><br>' + 
                          '数量: %{y}<br>' +
                          '点击进行多选筛选<extra></extra>',
            hoverlabel: { bgcolor: 'white', bordercolor: morandiHighlight }
        };
        
        const layout = {
            ...chartLayoutBase,
            margin: { l: 60, r: 20, t: 30, b: 50 },
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
            },
            title: hasAnyFilter ? {
                text: nodeFrozenState.yearChart ? '年份分布 (已冻结)' : '年份分布 (已筛选)',
                font: { size: 14, color: '#520049' }
            } : null
        };
        
        Plotly.newPlot('yearChart', [trace], layout, chartConfig);
        
        document.getElementById('yearChart').on('plotly_click', function(data) {
            const year = data.points[0].x;
            FilterModule.toggleYearFilter(year);
        });
    },

    // 创建类别分布图表
    createCategoryChart() {
        // 获取所有可能的类别（基于原始数据）
        const allCategoryCounts = {};
        originalData.forEach(d => {
            allCategoryCounts[d.category] = (allCategoryCounts[d.category] || 0) + 1;
        });
        const allCategories = Object.keys(allCategoryCounts).sort();
        
        console.log("创建类别图 - 交互顺序:", nodeInteractionOrder.join(" > "));
        
        // 确定数据源 - A节点使用原始数据，B/C节点使用上级节点数据
        let dataForVisualization = [];
        
        if (nodeInteractionOrder.length === 0) {
            // 没有任何交互，使用原始数据
            dataForVisualization = [...originalData];
            console.log("类别图表无交互，使用原始数据:", dataForVisualization.length);
        } else {
            // 根据当前节点在交互序列中的位置确定数据来源
            const myIndex = nodeInteractionOrder.indexOf('ligandChart');
            
            if (myIndex === -1) {
                // 如果不在交互序列中，使用最后一个交互节点的数据
                const lastNodeId = nodeInteractionOrder[nodeInteractionOrder.length - 1];
                dataForVisualization = [...nodeFilteredData[lastNodeId]];
                console.log(`类别图表不在交互序列中，使用最后节点${lastNodeId}数据:`, dataForVisualization.length);
            } else if (myIndex === 0) {
                // 如果是A节点，必须使用原始数据，严禁下探
                dataForVisualization = [...originalData];
                console.log("类别图表是A节点，使用原始数据(禁止下探):", dataForVisualization.length);
            } else {
                // 如果是B节点或C节点，使用上级节点的数据进行可视化
                const parentNodeId = nodeInteractionOrder[myIndex - 1];
                dataForVisualization = [...nodeFilteredData[parentNodeId]];
                console.log(`类别图表是${myIndex === 1 ? 'B' : 'C'}节点，使用上级节点${parentNodeId}数据:`, dataForVisualization.length);
            }
        }
        
        // 计算可视化数据的类别分布
        const visualizationCategoryCounts = {};
        dataForVisualization.forEach(d => {
            visualizationCategoryCounts[d.category] = (visualizationCategoryCounts[d.category] || 0) + 1;
        });
        
        // 检查是否有类别筛选
        const hasCategoryFilter = activeFilters.categories.size > 0;
        const hasAnyFilter = nodeInteractionOrder.length > 0;
        
        // 创建饼图数据 - 基于可视化数据源的类别分布
        const pieData = allCategories.map(category => {
            const value = visualizationCategoryCounts[category] || 0;
            return {
                category: category,
                count: value,
                isFiltered: hasCategoryFilter && activeFilters.categories.has(category)
            };
        });
        
        // 如果可视化数据源为空，显示提示
        if (dataForVisualization.length === 0) {
            console.warn('可视化数据源为空，显示空状态');
            Plotly.newPlot('ligandChart', [], {
                ...chartLayoutBase,
                margin: { l: 20, r: 20, t: 20, b: 20 },
                annotations: [{
                    text: '筛选中... 请尝试其他筛选条件',
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.5,
                    y: 0.5,
                    xanchor: 'center',
                    yanchor: 'middle',
                    showarrow: false,
                    font: { size: 16, color: '#520049' }
                }]
            }, chartConfig);
            return;
        }
        
        // 只显示有数据的类别
        const displayCategories = pieData.filter(d => d.count > 0).map(d => d.category);
        const displayValues = pieData.filter(d => d.count > 0).map(d => d.count);
        const isFiltered = pieData.filter(d => d.count > 0).map(d => d.isFiltered);
        
        // 如果筛选后没有数据，显示错误
        if (displayCategories.length === 0) {
            console.warn('筛选后没有类别数据，显示空状态');
            Plotly.newPlot('ligandChart', [], {
                ...chartLayoutBase,
                margin: { l: 20, r: 20, t: 20, b: 20 },
                annotations: [{
                    text: '没有匹配的类别数据',
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.5,
                    y: 0.5,
                    xanchor: 'center',
                    yanchor: 'middle',
                    showarrow: false,
                    font: { size: 16, color: '#520049' }
                }]
            }, chartConfig);
            return;
        }
        
        const trace = {
            labels: displayCategories,
            values: displayValues,
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: displayCategories.map((category, i) => {
                    // 如果该类别被选中，使用高亮颜色
                    if (isFiltered[i]) {
                        return morandiHighlight;
                    }
                    // 正常颜色
                    return morandiColors[i % morandiColors.length];
                }),
                line: {
                    color: displayCategories.map((category, i) => {
                        if (isFiltered[i]) {
                            return '#333';
                        }
                        return 'white';
                    }),
                    width: displayCategories.map((category, i) => {
                        if (isFiltered[i]) {
                            return 3;
                        }
                        return 1;
                    })
                }
            },
            textinfo: 'percent',
            textfont: { size: 11, color: 'white' },
            hovertemplate: '<b>%{label}</b><br>数量: %{value}<br>' + 
                          '点击进行多选筛选<extra></extra>',
            hoverlabel: { bgcolor: 'white', bordercolor: morandiHighlight },
            opacity: displayCategories.map((category, i) => {
                if (hasCategoryFilter && !isFiltered[i]) {
                    return 0.6; // 未选中的区间半透明
                }
                return 1.0; // 选中的区间完全不透明
            })
        };
        
        const layout = {
            ...chartLayoutBase,
            margin: { l: 20, r: 20, t: 20, b: 20 },
            showlegend: false,
            title: hasAnyFilter ? {
                text: nodeFrozenState.ligandChart ? '类别分布 (已冻结)' : '类别分布 (已筛选)',
                font: { size: 14, color: '#520049' }
            } : null
        };
        
        Plotly.newPlot('ligandChart', [trace], layout, chartConfig);
        
        document.getElementById('ligandChart').on('plotly_click', function(data) {
            const category = data.points[0].label;
            FilterModule.toggleCategoryFilter(category);
        });
    },

    // 创建散点图
    createScatterChart() {
        console.log("创建散点图 - 交互顺序:", nodeInteractionOrder.join(" > "));
        
        // 确定数据源 - A节点使用原始数据，B/C节点使用上级节点数据
        let dataForVisualization = [];
        
        if (nodeInteractionOrder.length === 0) {
            // 没有任何交互，使用原始数据
            dataForVisualization = [...originalData];
            console.log("散点图无交互，使用原始数据:", dataForVisualization.length);
        } else {
            // 根据当前节点在交互序列中的位置确定数据来源
            const myIndex = nodeInteractionOrder.indexOf('scatterChart');
            
            if (myIndex === -1) {
                // 如果不在交互序列中，使用最后一个交互节点的数据
                const lastNodeId = nodeInteractionOrder[nodeInteractionOrder.length - 1];
                dataForVisualization = [...nodeFilteredData[lastNodeId]];
                console.log(`散点图不在交互序列中，使用最后节点${lastNodeId}数据:`, dataForVisualization.length);
            } else if (myIndex === 0) {
                // 如果是A节点，必须使用原始数据，严禁下探
                dataForVisualization = [...originalData];
                console.log("散点图是A节点，使用原始数据(禁止下探):", dataForVisualization.length);
            } else {
                // 如果是B节点或C节点，使用上级节点的数据进行可视化
                const parentNodeId = nodeInteractionOrder[myIndex - 1];
                dataForVisualization = [...nodeFilteredData[parentNodeId]];
                console.log(`散点图是${myIndex === 1 ? 'B' : 'C'}节点，使用上级节点${parentNodeId}数据:`, dataForVisualization.length);
            }
        }

        // 如果没有数据，显示空状态
        if (dataForVisualization.length === 0) {
            Plotly.newPlot('scatterChart', [], {
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
                annotations: [{
                    text: '没有匹配的数据',
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.5,
                    y: 0.5,
                    xanchor: 'center',
                    yanchor: 'middle',
                    showarrow: false,
                    font: { size: 16, color: '#999' }
                }]
            }, chartConfig);
            return;
        }
        
        // 获取当前筛选后数据的散点图区域选择状态
        const hasScatterSelection = activeFilters.scatterSelection !== null;
        const scatterSelected = [];
        
        if (hasScatterSelection && nodeFrozenState.scatterChart) {
            // 如果散点图已冻结且有区域选择，计算哪些点符合选择条件
            const sel = activeFilters.scatterSelection;
            dataForVisualization.forEach((d, i) => {
                if (d.length >= sel.xrange[0] && d.length <= sel.xrange[1] &&
                    d.gc_content >= sel.yrange[0] && d.gc_content <= sel.yrange[1]) {
                    scatterSelected.push(i);
                }
            });
        }
        
        const years = [...new Set(dataForVisualization.map(d => d.year))];
        
        // 创建颜色映射，颜色基于年份
        const yearColorMap = {};
        years.forEach((year, i) => {
            yearColorMap[year] = morandiColors[i % morandiColors.length];
        });
        
        // 确定每个点的颜色和大小
        const colors = dataForVisualization.map((d, i) => {
            if (hasScatterSelection && nodeFrozenState.scatterChart && scatterSelected.includes(i)) {
                // 被选中的点使用高亮颜色
                return morandiHighlight;
            }
            // 正常颜色
            return yearColorMap[d.year];
        });
        
        const sizes = dataForVisualization.map((d, i) => {
            if (hasScatterSelection && nodeFrozenState.scatterChart && scatterSelected.includes(i)) {
                // 被选中的点更大
                return 10;
            }
            // 正常大小
            return 8;
        });
        
        // 将GC含量从0-1的小数转换为0-100的百分比
        const trace = {
            x: dataForVisualization.map(d => d.length),
            y: dataForVisualization.map(d => d.gc_content * 100), // 将小数乘以100显示为百分比
            mode: 'markers',
            type: 'scatter',
            marker: {
                size: sizes,
                color: colors,
                opacity: dataForVisualization.map((d, i) => {
                    if (hasScatterSelection && nodeFrozenState.scatterChart && !scatterSelected.includes(i)) {
                        // 未选中的点透明度降低
                        return 0.4;
                    }
                    return 0.8;
                }),
                line: { 
                    width: dataForVisualization.map((d, i) => {
                        if (hasScatterSelection && nodeFrozenState.scatterChart && scatterSelected.includes(i)) {
                            return 2;
                        }
                        return 1;
                    }), 
                    color: 'white' 
                }
            },
            hovertemplate: '<b>%{text}</b><br>长度: %{x} bp<br>GC含量: %{y}%<br>年份: %{customdata[0]}<br>类别: %{customdata[1]}<extra></extra>',
            text: dataForVisualization.map(d => d.name),
            customdata: dataForVisualization.map(d => [
                d.year,
                d.category
            ]),
            hoverlabel: { bgcolor: 'white', bordercolor: morandiHighlight }
        };
        
        const hasAnyFilter = nodeInteractionOrder.length > 0;
        
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
            dragmode: 'select',
            title: hasAnyFilter ? {
                text: nodeFrozenState.scatterChart ? 
                      `数据分布 (已冻结, ${dataForVisualization.length}/${originalData.length} 条数据)` : 
                      `数据分布 (已筛选, ${dataForVisualization.length}/${originalData.length} 条数据)`,
                font: { size: 14, color: '#520049' }
            } : null
        };
        
        Plotly.newPlot('scatterChart', [trace], layout, chartConfig);
        
        document.getElementById('scatterChart').on('plotly_selected', function(eventData) {
            if (eventData && eventData.points && eventData.points.length > 0) {
                const xValues = eventData.points.map(p => p.x);
                const yValues = eventData.points.map(p => p.y);
                const selection = {
                    xrange: [Math.min(...xValues), Math.max(...xValues)],
                    yrange: [Math.min(...yValues) / 100, Math.max(...yValues) / 100] // 将百分比转回小数存储
                };
                FilterModule.setScatterSelection(selection);
            }
        });
        
        document.getElementById('scatterChart').on('plotly_deselect', function() {
            FilterModule.clearScatterSelection();
        });
    },

    // 创建所有图表
    createAllCharts() {
        try {
            console.log("开始创建所有图表...");
            this.createYearChart();
            this.createCategoryChart();
            this.createScatterChart();
            console.log("所有图表创建完成");
        } catch (error) {
            console.error("创建图表时发生错误:", error);
        }
    }
};

// ====== 筛选模块 ======
const FilterModule = {
    // 注册节点交互，更新交互顺序并设置冻结状态
    registerNodeInteraction(nodeId) {
        console.log(`注册节点交互: ${nodeId}`);
        
        // 检查节点是否已经在交互序列中
        const alreadyInteracted = nodeInteractionOrder.includes(nodeId);
        
        if (alreadyInteracted) {
            // 如果节点已经在交互序列中，不改变交互顺序，只更新该节点的数据
            console.log(`节点${nodeId}已在交互序列中，保持当前交互顺序，更新筛选条件`);
            
            // 确保节点处于冻结状态
            nodeFrozenState[nodeId] = true;
        } else {
            // 如果是首次交互该节点，将其添加到交互序列末尾
            nodeInteractionOrder.push(nodeId);
            nodeFrozenState[nodeId] = true;
            console.log(`新增交互节点: ${nodeId}, 当前交互顺序: ${nodeInteractionOrder.join(' > ')}`);
        }
        
        // 应用筛选器，但明确计算该节点的新数据
        this.calculateSpecificNodeData(nodeId);
        this.applyFilters();
    },
    
    // 计算特定节点的数据，基于最新筛选条件
    calculateSpecificNodeData(nodeId) {
        console.log(`计算节点 ${nodeId} 的最新数据`);
        
        // 根据节点类型和筛选条件计算数据
        if (nodeId === 'yearChart' && activeFilters.years.size > 0) {
            // 年份筛选 - 直接从原始数据筛选
            nodeFilteredData[nodeId] = originalData.filter(d => 
                activeFilters.years.has(d.year)
            );
            console.log(`更新 ${nodeId} 节点数据: ${nodeFilteredData[nodeId].length} 条记录`);
        } else if (nodeId === 'ligandChart' && activeFilters.categories.size > 0) {
            // 类别筛选 - 直接从原始数据筛选
            nodeFilteredData[nodeId] = originalData.filter(d => 
                activeFilters.categories.has(d.category)
            );
            console.log(`更新 ${nodeId} 节点数据: ${nodeFilteredData[nodeId].length} 条记录`);
        } else if (nodeId === 'scatterChart' && activeFilters.scatterSelection) {
            // 散点图区域筛选 - 直接从原始数据筛选
            const sel = activeFilters.scatterSelection;
            nodeFilteredData[nodeId] = originalData.filter(d => 
                d.length >= sel.xrange[0] && d.length <= sel.xrange[1] &&
                d.gc_content >= sel.yrange[0] && d.gc_content <= sel.yrange[1]
            );
            
            // 如果筛选后没有数据，给出警告并使用原始数据
            if (nodeFilteredData[nodeId].length === 0) {
                console.warn(`散点图筛选后没有数据，使用原始数据`);
                nodeFilteredData[nodeId] = [...originalData];
            }
            
            console.log(`更新 ${nodeId} 节点数据: ${nodeFilteredData[nodeId].length} 条记录`);
        } else {
            // 如果该节点没有应用筛选条件，使用原始数据
            nodeFilteredData[nodeId] = [...originalData];
        }
    },

    // 计算各节点数据，基于层级关系
    calculateNodeData() {
        // 首先保存当前冻结节点的数据
        const frozenNodesData = {};
        for (const nodeId in nodeFrozenState) {
            if (nodeFrozenState[nodeId]) {
                frozenNodesData[nodeId] = [...nodeFilteredData[nodeId]];
            }
        }
        
        // 重置未冻结节点的数据
        for (const nodeId in nodeFilteredData) {
            if (!nodeFrozenState[nodeId]) {
                nodeFilteredData[nodeId] = [];
            }
        }
        
        // 如果没有交互，所有节点使用原始数据
        if (nodeInteractionOrder.length === 0) {
            for (const nodeId in nodeFilteredData) {
                nodeFilteredData[nodeId] = [...originalData];
            }
            return;
        }
        
        // 恢复冻结节点的数据
        for (const nodeId in frozenNodesData) {
            nodeFilteredData[nodeId] = [...frozenNodesData[nodeId]];
        }
        
        // 如果交互序列中只有一个节点(A节点)
        if (nodeInteractionOrder.length === 1) {
            const firstNodeId = nodeInteractionOrder[0];
            const firstNodeData = nodeFilteredData[firstNodeId];
            console.log(`只有A节点(${firstNodeId})，数据量: ${firstNodeData.length}`);
            
            // 非交互节点使用A节点的筛选结果
            for (const nodeId in nodeFilteredData) {
                if (nodeId !== firstNodeId && !nodeFrozenState[nodeId]) {
                    nodeFilteredData[nodeId] = [...firstNodeData];
                    console.log(`  节点${nodeId}使用A节点数据: ${nodeFilteredData[nodeId].length}`);
                }
            }
            return;
        }
        
        // 处理多节点交互情况 - 先计算每个交互节点的基础数据
        nodeInteractionOrder.forEach((interactedNodeId, index) => {
            if (index === 0) return; // 跳过A节点，A节点已经计算过了
            
            // 根据层级关系决定使用哪个上级节点的数据
            const parentNodeId = nodeInteractionOrder[index - 1];
            const parentNodeData = nodeFilteredData[parentNodeId];
            
            // 根据当前节点的筛选条件过滤上级节点数据
            if (interactedNodeId === 'yearChart' && activeFilters.years.size > 0) {
                // 基于上级节点数据进行年份筛选
                nodeFilteredData[interactedNodeId] = parentNodeData.filter(d => 
                    activeFilters.years.has(d.year)
                );
            } else if (interactedNodeId === 'ligandChart' && activeFilters.categories.size > 0) {
                // 基于上级节点数据进行类别筛选
                nodeFilteredData[interactedNodeId] = parentNodeData.filter(d => 
                    activeFilters.categories.has(d.category)
                );
            } else if (interactedNodeId === 'scatterChart' && activeFilters.scatterSelection) {
                // 基于上级节点数据进行散点图区域筛选
                const sel = activeFilters.scatterSelection;
                nodeFilteredData[interactedNodeId] = parentNodeData.filter(d => 
                    d.length >= sel.xrange[0] && d.length <= sel.xrange[1] &&
                    d.gc_content >= sel.yrange[0] && d.gc_content <= sel.yrange[1]
                );
            } else {
                // 如果没有应用筛选条件，使用上级节点数据
                nodeFilteredData[interactedNodeId] = [...parentNodeData];
            }
            
            console.log(`  ${String.fromCharCode(65 + index)}节点(${interactedNodeId})筛选后数据: ${nodeFilteredData[interactedNodeId].length}`);
        });
        
        // 剩余未交互节点使用最后一个交互节点的数据
        if (nodeInteractionOrder.length > 0) {
            const lastNodeId = nodeInteractionOrder[nodeInteractionOrder.length - 1];
            const lastNodeData = nodeFilteredData[lastNodeId];
            
            for (const nodeId in nodeFilteredData) {
                if (!nodeInteractionOrder.includes(nodeId) && !nodeFrozenState[nodeId]) {
                    nodeFilteredData[nodeId] = [...lastNodeData];
                    console.log(`  未交互节点${nodeId}使用${lastNodeId}数据: ${nodeFilteredData[nodeId].length}`);
                }
            }
        }
        
        console.log("节点数据计算完成，交互顺序:", nodeInteractionOrder.join(" > "));
    },

    // 切换年份筛选
    toggleYearFilter(year) {
        console.log('切换年份筛选:', year);
        
        if (activeFilters.years.has(year)) {
            activeFilters.years.delete(year);
        } else {
            activeFilters.years.add(year);
        }
        
        // 注册节点交互
        this.registerNodeInteraction('yearChart');
    },

    // 切换类别筛选
    toggleCategoryFilter(category) {
        console.log('切换类别筛选:', category);
        
        if (activeFilters.categories.has(category)) {
            activeFilters.categories.delete(category);
        } else {
            activeFilters.categories.add(category);
        }
        
        // 注册节点交互
        this.registerNodeInteraction('ligandChart');
    },
    
    // 设置散点图区域筛选
    setScatterSelection(selection) {
        console.log('设置散点图区域筛选:', selection);
        activeFilters.scatterSelection = selection;
        
        // 预先计算筛选后的数据量，确保有数据
        const filteredCount = originalData.filter(d => 
            d.length >= selection.xrange[0] && d.length <= selection.xrange[1] &&
            d.gc_content >= selection.yrange[0] && d.gc_content <= selection.yrange[1]
        ).length;
        
        console.log(`散点图筛选预计返回 ${filteredCount} 条数据`);
        
        if (filteredCount === 0) {
            console.warn('散点图筛选没有匹配数据，取消选择');
            activeFilters.scatterSelection = null;
            return;
        }
        
        // 更新节点数据
        nodeFilteredData['scatterChart'] = originalData.filter(d => 
            d.length >= selection.xrange[0] && d.length <= selection.xrange[1] &&
            d.gc_content >= selection.yrange[0] && d.gc_content <= selection.yrange[1]
        );
        
        // 注册节点交互
        this.registerNodeInteraction('scatterChart');
    },
    
    // 清除散点图区域筛选
    clearScatterSelection() {
        activeFilters.scatterSelection = null;
        
        // 如果散点图在交互序列中，移除它
        const index = nodeInteractionOrder.indexOf('scatterChart');
        if (index !== -1) {
            nodeInteractionOrder.splice(index, 1);
            nodeFrozenState.scatterChart = false;
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
        
        // 类别标签
        activeFilters.categories.forEach(category => {
            const tag = createFilterTag(`类别: ${category}`, () => this.toggleCategoryFilter(category));
            tagsContainer.appendChild(tag);
        });
        
        // 散点图筛选标签
        if (activeFilters.scatterSelection) {
            const sel = activeFilters.scatterSelection;
            const text = `范围: ${sel.xrange[0].toFixed(0)}-${sel.xrange[1].toFixed(0)}bp, ${sel.yrange[0].toFixed(1)}-${sel.yrange[1].toFixed(1)}%`;
            const tag = createFilterTag(text, () => this.clearScatterSelection());
            tagsContainer.appendChild(tag);
        }
        
        // 显示/隐藏筛选控制区域
        const hasActiveFilters = activeFilters.years.size > 0 || 
                               activeFilters.categories.size > 0 || 
                               activeFilters.scatterSelection;
        
        const filterSection = document.querySelector('.filter-controls');
        filterSection.style.display = hasActiveFilters ? 'block' : 'none';
        
        // 设置当前筛选条件计数和节点状态
        const activeFilterCount = (activeFilters.years.size > 0 ? 1 : 0) + 
                                 (activeFilters.categories.size > 0 ? 1 : 0) + 
                                 (activeFilters.scatterSelection ? 1 : 0);
        
        const resetBtn = document.getElementById('resetAllFilters');
        if (resetBtn) {
            resetBtn.textContent = `重置全部 (${activeFilterCount})`;
            resetBtn.disabled = !hasActiveFilters;
            resetBtn.style.opacity = hasActiveFilters ? '1' : '0.5';
        }
        
        // 更新节点状态指示器
        this.updateNodeStateIndicators();
    },
    
    // 更新节点状态指示器，显示交互顺序和冻结状态
    updateNodeStateIndicators() {
        // 年份图状态
        const yearChartHeader = document.querySelector('#yearChart').closest('.chart-wrapper').querySelector('.chart-header');
        const yearStateIndicator = yearChartHeader.querySelector('.node-state-indicator') || document.createElement('div');
        yearStateIndicator.className = 'node-state-indicator';
        
        // 饼图状态
        const ligandChartHeader = document.querySelector('#ligandChart').closest('.chart-wrapper').querySelector('.chart-header');
        const ligandStateIndicator = ligandChartHeader.querySelector('.node-state-indicator') || document.createElement('div');
        ligandStateIndicator.className = 'node-state-indicator';
        
        // 散点图状态
        const scatterChartHeader = document.querySelector('#scatterChart').closest('.analysis-wrapper').querySelector('.chart-header');
        const scatterStateIndicator = scatterChartHeader.querySelector('.node-state-indicator') || document.createElement('div');
        scatterStateIndicator.className = 'node-state-indicator';
        
        // 清除所有状态
        yearStateIndicator.textContent = '';
        ligandStateIndicator.textContent = '';
        scatterStateIndicator.textContent = '';
        
        // 根据交互顺序设置节点状态 - 这里采用正向顺序
        nodeInteractionOrder.forEach((nodeId, index) => {
            // 节点层级使用字母A/B/C表示，按照交互顺序顺序分配
            // 第一个交互的是A节点，第二个是B节点，第三个是C节点
            const stateText = index === 0 ? 'A节点' : (index === 1 ? 'B节点' : 'C节点');
            
            if (nodeId === 'yearChart') {
                yearStateIndicator.textContent = stateText;
                yearStateIndicator.style.backgroundColor = '#520049';
            } else if (nodeId === 'ligandChart') {
                ligandStateIndicator.textContent = stateText;
                ligandStateIndicator.style.backgroundColor = '#520049';
            } else if (nodeId === 'scatterChart') {
                scatterStateIndicator.textContent = stateText;
                scatterStateIndicator.style.backgroundColor = '#520049';
            }
        });
        
        // 添加状态指示器到图表标题
        if (!yearChartHeader.querySelector('.node-state-indicator')) {
            yearChartHeader.appendChild(yearStateIndicator);
        }
        if (!ligandChartHeader.querySelector('.node-state-indicator')) {
            ligandChartHeader.appendChild(ligandStateIndicator);
        }
        if (!scatterChartHeader.querySelector('.node-state-indicator')) {
            scatterChartHeader.appendChild(scatterStateIndicator);
        }
        
        // 在控制台显示当前节点层级和交互顺序
        console.log("当前节点层级:", 
            nodeInteractionOrder.map((nodeId, index) => {
                const levelName = index === 0 ? 'A' : (index === 1 ? 'B' : 'C');
                return `${levelName}=${nodeId}`;
            }).join(', ')
        );
    },
    
    // 显示没有匹配数据的警告
    showNoDataWarning() {
        // 检查是否已经有警告
        let warningEl = document.getElementById('noDataWarning');
        if (!warningEl) {
            warningEl = document.createElement('div');
            warningEl.id = 'noDataWarning';
            warningEl.style.cssText = `
                background: #fff3cd;
                color: #856404;
                padding: 12px 15px;
                border-radius: 6px;
                margin: 10px 0;
                border: 1px solid #ffeeba;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: space-between;
            `;
            const container = document.querySelector('.filter-controls');
            if (container) {
                container.parentNode.insertBefore(warningEl, container.nextSibling);
            }
        }
        
        warningEl.innerHTML = `
            <div>
                <strong>没有匹配的数据!</strong> 
                当前筛选条件组合没有返回任何结果。
            </div>
            <button id="resetFiltersBtn" style="
                background: #dc3545;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 4px;
                cursor: pointer;
            ">重置筛选</button>
        `;
        
        document.getElementById('resetFiltersBtn').addEventListener('click', resetAllFilters);
    },
    
    // 隐藏警告
    hideNoDataWarning() {
        const warningEl = document.getElementById('noDataWarning');
        if (warningEl) {
            warningEl.remove();
        }
    },

    // 应用筛选器，基于节点层级逻辑
    applyFilters() {
        console.log('应用筛选器 - 当前交互顺序:', nodeInteractionOrder.join(" > "));
        console.log('筛选条件 - 年份:', Array.from(activeFilters.years), '类别:', Array.from(activeFilters.categories));
        
        // 首先，基于所有筛选条件过滤原始数据
        const dataWithAllFilters = originalData.filter(d => {
            // 年份筛选
            if (activeFilters.years.size > 0 && !activeFilters.years.has(d.year)) {
                return false;
            }
            
            // 类别筛选
            if (activeFilters.categories.size > 0 && !activeFilters.categories.has(d.category)) {
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
        
        // 如果筛选后数据为空，但有筛选条件，给出警告
        if (dataWithAllFilters.length === 0 && 
            (activeFilters.years.size > 0 || activeFilters.categories.size > 0 || activeFilters.scatterSelection)) {
            console.warn('应用所有筛选条件后没有匹配数据');
            
            // 如果散点图筛选导致没有数据，尝试重置散点图筛选
            if (activeFilters.scatterSelection) {
                console.warn('尝试重置散点图筛选');
                activeFilters.scatterSelection = null;
                
                // 重新应用筛选器
                return this.applyFilters();
            }
        }
        
        // 根据节点层级计算每个节点的数据
        this.calculateNodeData();
        
        // 更新全局筛选后数据(用于表格和统计)
        filteredData = dataWithAllFilters.length > 0 ? dataWithAllFilters : [...originalData];
        
        console.log(`筛选后数据: ${filteredData.length}/${originalData.length} 条`);
        
        // 检查筛选后是否有数据
        if (filteredData.length === 0 && (activeFilters.years.size > 0 || activeFilters.categories.size > 0 || activeFilters.scatterSelection)) {
            console.warn('筛选后没有数据！');
            this.showNoDataWarning();
        } else {
            this.hideNoDataWarning();
        }
        
        // 更新所有图表和统计
        DataModule.updateStatistics();
        ChartModule.createAllCharts();
        UIModule.updateDataSummary();
        this.updateFilterTags();
        TableModule.updateDataTable();
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
window.toggleCategoryFilter = (category) => FilterModule.toggleCategoryFilter(category); 