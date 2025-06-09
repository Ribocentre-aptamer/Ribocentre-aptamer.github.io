 // Fluorescence Dashboard Extension - 荧光适配体数据处理扩展

// 表格更新模块 - 特别针对荧光适配体数据
const FluorescenceTableModule = {
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
            
            // 序列名称链接
            let nameCell = '';
            if (item.more_info) {
                nameCell = `<td><a href="${item.more_info}" target="_blank" style="color:#520049">${item.name}</a></td>`;
            } else {
                nameCell = `<td>${item.name}</td>`;
            }
            
            // 年份链接
            let yearCell = '';
            if (item.pubmed_link) {
                yearCell = `<td><a href="${item.pubmed_link}" target="_blank" style="color:#520049">${item.year}</a></td>`;
            } else {
                yearCell = `<td>${item.year}</td>`;
            }
            
            // GC含量显示为百分比
            const gcContent = item.gc_content ? (item.gc_content * 100).toFixed(1) + '%' : 'N/A';
            
            row.innerHTML = `
                <td>${index + 1}</td>
                ${nameCell}
                <td title="${item.ligand}">${item.ligand.length > 30 ? item.ligand.substring(0, 30) + '...' : item.ligand}</td>
                <td>${item.mechanisms || 'N/A'}</td>
                ${yearCell}
                <td>${item.length || 'N/A'}</td>
                <td>${gcContent}</td>
            `;
            tableBody.appendChild(row);
        });
    }
};

// 在主表格模块不存在或没有更新方法时，备份
if (!window.TableModule || !window.TableModule.updateDataTable) {
    window.TableModule = {
        updateDataTable: FluorescenceTableModule.updateDataTable
    };
} else {
    // 保存原始更新方法
    const originalUpdateDataTable = window.TableModule.updateDataTable;
    
    // 覆盖更新方法
    window.TableModule.updateDataTable = function() {
        // 检查是否在荧光页面
        if (window.location.pathname.includes('fluorescence')) {
            FluorescenceTableModule.updateDataTable();
        } else {
            originalUpdateDataTable();
        }
    };
}

// 修改饼图处理，使用 mechanisms 字段作为分类
const FluorescenceChartModule = {
    createCategoryChart() {
        // 获取所有可能的荧光机制类别（基于原始数据）
        const allMechanismCounts = {};
        originalData.forEach(d => {
            if (d.mechanisms) {
                allMechanismCounts[d.mechanisms] = (allMechanismCounts[d.mechanisms] || 0) + 1;
            }
        });
        const allMechanisms = Object.keys(allMechanismCounts).sort();
        
        // 确定数据源
        let dataForVisualization = [];
        
        if (nodeInteractionOrder.length === 0) {
            dataForVisualization = [...originalData];
        } else {
            const myIndex = nodeInteractionOrder.indexOf('ligandChart');
            
            if (myIndex === -1) {
                const lastNodeId = nodeInteractionOrder[nodeInteractionOrder.length - 1];
                dataForVisualization = [...nodeFilteredData[lastNodeId]];
            } else if (myIndex === 0) {
                dataForVisualization = [...originalData];
            } else {
                const parentNodeId = nodeInteractionOrder[myIndex - 1];
                dataForVisualization = [...nodeFilteredData[parentNodeId]];
            }
        }
        
        // 计算可视化数据的荧光机制分布
        const visualizationMechanismCounts = {};
        dataForVisualization.forEach(d => {
            if (d.mechanisms) {
                visualizationMechanismCounts[d.mechanisms] = (visualizationMechanismCounts[d.mechanisms] || 0) + 1;
            }
        });
        
        // 检查是否有类别筛选
        const hasMechanismFilter = activeFilters.categories.size > 0;
        const hasAnyFilter = nodeInteractionOrder.length > 0;
        
        // 创建饼图数据 - 基于可视化数据源的类别分布
        const pieData = allMechanisms.map(mechanism => {
            const value = visualizationMechanismCounts[mechanism] || 0;
            return {
                mechanism: mechanism,
                count: value,
                isFiltered: hasMechanismFilter && activeFilters.categories.has(mechanism)
            };
        });
        
        // 如果可视化数据源为空，显示提示
        if (dataForVisualization.length === 0) {
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
        const displayMechanisms = pieData.filter(d => d.count > 0).map(d => d.mechanism);
        const displayValues = pieData.filter(d => d.count > 0).map(d => d.count);
        const isFiltered = pieData.filter(d => d.count > 0).map(d => d.isFiltered);
        
        // 如果筛选后没有数据，显示错误
        if (displayMechanisms.length === 0) {
            Plotly.newPlot('ligandChart', [], {
                ...chartLayoutBase,
                margin: { l: 20, r: 20, t: 20, b: 20 },
                annotations: [{
                    text: '没有匹配的荧光机制数据',
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
            labels: displayMechanisms,
            values: displayValues,
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: displayMechanisms.map((mechanism, i) => {
                    // 如果该类别被选中，使用高亮颜色
                    if (isFiltered[i]) {
                        return morandiHighlight;
                    }
                    // 正常颜色
                    return morandiColors[i % morandiColors.length];
                }),
                line: {
                    color: displayMechanisms.map((mechanism, i) => {
                        if (isFiltered[i]) {
                            return '#333';
                        }
                        return 'white';
                    }),
                    width: displayMechanisms.map((mechanism, i) => {
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
            opacity: displayMechanisms.map((mechanism, i) => {
                if (hasMechanismFilter && !isFiltered[i]) {
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
                text: nodeFrozenState.ligandChart ? '荧光机制分布 (已冻结)' : '荧光机制分布 (已筛选)',
                font: { size: 14, color: '#520049' }
            } : null
        };
        
        Plotly.newPlot('ligandChart', [trace], layout, chartConfig);
        
        document.getElementById('ligandChart').on('plotly_click', function(data) {
            const mechanism = data.points[0].label;
            FilterModule.toggleCategoryFilter(mechanism);
        });
    }
};

// 在初始化后挂载扩展的图表模块
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否在荧光页面
    if (window.location.pathname.includes('fluorescence')) {
        console.log('荧光适配体数据处理扩展已加载');
        
        // 修改原始的 createCategoryChart 方法
        if (window.ChartModule && window.ChartModule.createCategoryChart) {
            // 保存原始方法
            const originalCreateCategoryChart = window.ChartModule.createCategoryChart;
            
            // 覆盖方法
            window.ChartModule.createCategoryChart = function() {
                FluorescenceChartModule.createCategoryChart();
            };
        }
        
        // 修改筛选标签模块，使用mechanisms字段
        if (window.FilterModule && window.FilterModule.toggleCategoryFilter) {
            // 保存原始的toggleCategoryFilter方法
            const originalToggleCategoryFilter = window.FilterModule.toggleCategoryFilter;
            
            // 覆盖方法
            window.FilterModule.toggleCategoryFilter = function(category) {
                console.log('切换荧光机制筛选:', category);
                
                if (activeFilters.categories.has(category)) {
                    activeFilters.categories.delete(category);
                } else {
                    activeFilters.categories.add(category);
                }
                
                // 注册节点交互
                this.registerNodeInteraction('ligandChart');
            };
        }
    }
});