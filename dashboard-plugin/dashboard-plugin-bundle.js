/*!
 * Dashboard Plugin Bundle v1.0.0
 * 一个可独立部署的数据可视化仪表板插件
 * 
 * 包含所有必需的模块和依赖
 * 
 * 使用方法:
 * 1. 引入 Plotly.js 库
 * 2. 引入此文件
 * 3. 创建配置对象
 * 4. 初始化插件: new DashboardPlugin(config).init()
 * 
 * @author Dashboard Plugin Team
 * @version 1.0.0
 */

(function(global) {
    'use strict';

    // =====================================================
    // 数据处理模块
    // =====================================================
    class DataModule {
        constructor(plugin) {
            this.plugin = plugin;
            this.config = plugin.config;
        }

        async loadData() {
            try {
                console.log('📥 Starting data loading...');
                
                const response = await fetch(this.config.dataSource.url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const responseData = await response.json();
                console.log('📥 Raw data loading completed');
                
                let processedData = this.extractDataArray(responseData);
                processedData = this.processDataFields(processedData);
                
                this.plugin.data.original = processedData;
                this.plugin.data.filtered = [...processedData];
                
                console.log(`✅ Data processing completed, ${processedData.length} records total`);
                
                this.plugin.modules.ui.updateStatistics();
                this.plugin.modules.chart.createAllCharts();
                this.plugin.modules.ui.updateDataSummary();
                this.plugin.modules.filter.updateFilterTags();
                this.plugin.modules.table.updateDataTable();
                
            } catch (error) {
                console.error('❌ Data loading failed:', error);
                this.showLoadingError(error.message);
                throw error;
            }
        }

        extractDataArray(responseData) {
            let processedData = [];
            
            if (this.config.dataSource.dataPath) {
                const dataPath = this.config.dataSource.dataPath;
                if (responseData[dataPath] && Array.isArray(responseData[dataPath])) {
                    processedData = responseData[dataPath];
                    console.log(`📄 Reading data from ${dataPath} field`);
                }
            }
            
            if (processedData.length === 0 && Array.isArray(responseData)) {
                processedData = responseData;
                console.log('📄 Reading array data directly');
            }
            
            if (processedData.length === 0) {
                const possibleArrayField = Object.keys(responseData).find(
                    key => Array.isArray(responseData[key]) && responseData[key].length > 0
                );
                
                if (possibleArrayField) {
                    processedData = responseData[possibleArrayField];
                    console.log(`📄 从 ${possibleArrayField} 字段读取数据`);
                } else {
                    console.warn('⚠️ No valid data array found, using empty array');
                    processedData = [];
                }
            }
            
            return processedData;
        }

        processDataFields(data) {
            return data.map((item, index) => {
                const processedItem = { ...item };
                this.processBasicFields(processedItem, item, index);
                this.processExtendedFields(processedItem, item);
                return processedItem;
            });
        }

        processBasicFields(processedItem, originalItem, index) {
            const mapping = this.config.fieldMapping;
            
            const fieldMappings = [
                ['year', [mapping.year, 'Year'], (val) => parseInt(val) || new Date().getFullYear()],
                ['category', [mapping.category, 'Category', 'Ligand'], (val) => String(val)],
                ['sequence', [mapping.sequence, 'Sequence'], (val) => String(val)],
                ['length', [mapping.length, 'Length'], (val) => parseInt(val) || (processedItem.sequence ? processedItem.sequence.length : 0)],
                ['gc_content', [mapping.gc_content, 'GC Content', 'GC_Content'], (val) => this.processGCContent(val)],
                ['affinity', [mapping.affinity, 'Affinity'], (val) => val],
                ['name', [mapping.name, 'Name', 'Named', 'Article name', 'Sequence Name', 'sequence_name', '序列名称', 'aptamer_name', 'Aptamer Name'], null]
            ];

            fieldMappings.forEach(([targetField, sourceFields, processor]) => {
                if (!processedItem[targetField]) {
                    const foundValue = sourceFields.find(field => originalItem[field] !== undefined && originalItem[field] !== null);
                    
                    if (foundValue !== undefined) {
                        let value = originalItem[foundValue];
                        if (processor) {
                            value = processor(value);
                        }
                        processedItem[targetField] = value;
                    }
                }
            });

            // 特殊处理riboaptamer数据格式
            // 将Category字段映射到category (小写)，复用原有类别(饼图)逻辑
            if (originalItem.Category !== undefined && originalItem.Category !== null) {
                processedItem.category = originalItem.Category;
            }
            
            // 确保year字段是数字类型
            if (originalItem.Year) {
                processedItem.year = parseInt(originalItem.Year, 10);
            }
            
            // 确保ligand字段存在
            if (originalItem.Ligand) {
                processedItem.ligand = originalItem.Ligand;
            }

            if (!processedItem.name) {
                if (processedItem.ligand || originalItem.ligand || originalItem.Ligand) {
                    processedItem.name = processedItem.ligand || originalItem.ligand || originalItem.Ligand;
                } else if (originalItem.Named) {
                    processedItem.name = originalItem.Named;
                } else if (originalItem['Article name']) {
                    processedItem.name = originalItem['Article name'];
                } else {
                    processedItem.name = `Entry ${index + 1}`;
                }
            }
        }

        processExtendedFields(processedItem, originalItem) {
            const extMapping = this.config.fieldMapping.extended;
            
            Object.keys(extMapping).forEach(targetField => {
                const sourceField = extMapping[targetField];
                if (originalItem[sourceField] !== undefined) {
                    processedItem[targetField] = originalItem[sourceField];
                }
            });
        }

        processGCContent(value) {
            if (value === null || value === undefined || value === '') {
                return 0;
            }
            
            const numValue = parseFloat(value);
            if (isNaN(numValue)) {
                return 0;
            }
            
            if (numValue > 1) {
                return numValue / 100;
            }
            
            return numValue;
        }

        showLoadingError(errorMessage) {
            const container = document.querySelector(this.config.container);
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
                    <h4>❌ ${this.config.i18n.loading} Failed</h4>
                    <p>Unable to load data. Please check your configuration or contact the administrator.</p>
                    <small>Error details: ${errorMessage}</small>
                `;
                container.insertBefore(errorDiv, container.firstChild);
            }
        }

        getStatistics(data = null) {
            const sourceData = data || this.plugin.data.filtered;
            
            if (!sourceData || sourceData.length === 0) {
                return {
                    total: 0,
                    uniqueCategories: 0,
                    yearSpan: '0 years',
                    avgGC: '0%'
                };
            }

            const categories = [...new Set(sourceData.map(d => d.category))].filter(Boolean);
            const years = sourceData.map(d => d.year).filter(Boolean);
            const gcValues = sourceData.map(d => d.gc_content).filter(val => val !== null && val !== undefined && !isNaN(val));

            let yearSpan = '0 years';
            if (years.length > 0) {
                const minYear = Math.min(...years);
                const maxYear = Math.max(...years);
                yearSpan = `${maxYear - minYear} years`;
            }

            let avgGC = '0%';
            if (gcValues.length > 0) {
                const avgGCValue = gcValues.reduce((sum, val) => sum + val, 0) / gcValues.length;
                avgGC = (avgGCValue * 100).toFixed(1) + '%';
            }

            return {
                total: sourceData.length,
                uniqueCategories: categories.length,
                yearSpan,
                avgGC
            };
        }
    }

    // =====================================================
    // 图表模块
    // =====================================================
    class ChartModule {
        constructor(plugin) {
            this.plugin = plugin;
            this.config = plugin.config;
            this.chartInstances = {};
        }

        createAllCharts() {
            try {
                console.log('📊 Starting chart creation...');
                
                if (this.config.charts.year.enabled) {
                    this.createYearChart();
                }
                
                if (this.config.charts.category.enabled) {
                    this.createCategoryChart();
                }
                
                if (this.config.charts.scatter.enabled) {
                    this.createScatterChart();
                }
                
                console.log('✅ All charts created successfully');
            } catch (error) {
                console.error('❌ 创建图表时发生错误:', error);
            }
        }

        createYearChart() {
            const chartId = 'yearChart';
            const chartElement = document.getElementById(chartId);
            if (!chartElement) return;

            const dataForVisualization = this.getVisualizationData(chartId);
            const allYears = this.getAllPossibleYears();
            
            const yearCounts = {};
            dataForVisualization.forEach(d => {
                yearCounts[d.year] = (yearCounts[d.year] || 0) + 1;
            });

            const hasYearFilter = this.plugin.state.filters.years.size > 0;
            const hasAnyFilter = this.plugin.state.nodeInteractionOrder.length > 0;

            const colors = this.config.theme.colors;
            const trace = {
                x: allYears,
                y: allYears.map(year => yearCounts[year] || 0),
                type: 'bar',
                marker: {
                    color: allYears.map((year, i) => {
                        if (hasYearFilter && this.plugin.state.filters.years.has(year)) {
                            return '#fff';
                        }
                        if (hasAnyFilter && (!yearCounts[year] || yearCounts[year] === 0)) {
                            return this.config.theme.dim;
                        }
                        return colors[i % colors.length];
                    }),
                    line: {
                        width: allYears.map(year => 
                            hasYearFilter && this.plugin.state.filters.years.has(year) ? 3 : 1
                        ),
                        color: allYears.map((year, i) => 
                            hasYearFilter && this.plugin.state.filters.years.has(year) 
                                ? colors[i % colors.length] 
                                : 'white'
                        )
                    }
                },
                hovertemplate: '<b>Year: %{x}</b><br>Count: %{y}<br><i>Click to filter</i><extra></extra>',
                hoverlabel: {
                    bgcolor: 'white',
                    bordercolor: this.config.theme.highlight,
                    font: { size: 12, color: '#333' }
                }
            };

            const layout = {
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                margin: { l: 60, r: 20, t: 30, b: 50 },
                xaxis: {
                    title: 'Year',
                    titlefont: { size: 12, color: '#555' },
                    tickfont: { size: 10, color: '#555' },
                    gridcolor: 'rgba(0,0,0,0.1)',
                    showgrid: true
                },
                yaxis: {
                    title: 'Count', 
                    titlefont: { size: 12, color: '#555' },
                    tickfont: { size: 10, color: '#555' },
                    gridcolor: 'rgba(0,0,0,0.1)',
                    showgrid: true
                },
                hovermode: 'closest'
            };

            Plotly.newPlot(chartId, [trace], layout, { responsive: true, displayModeBar: false });

            chartElement.on('plotly_click', (data) => {
                const year = data.points[0].x;
                this.plugin.modules.filter.toggleYearFilter(year);
            });

            this.chartInstances[chartId] = { trace, layout };
        }

        createCategoryChart() {
            const chartId = 'ligandChart';
            const chartElement = document.getElementById(chartId);
            if (!chartElement) return;

            const dataForVisualization = this.getVisualizationData(chartId);
            
            if (dataForVisualization.length === 0) {
                this.showEmptyChart(chartId, 'No category data available');
                return;
            }

            const categoryCounts = {};
            dataForVisualization.forEach(d => {
                categoryCounts[d.category] = (categoryCounts[d.category] || 0) + 1;
            });

            const categories = Object.keys(categoryCounts).filter(cat => categoryCounts[cat] > 0);
            const values = categories.map(cat => categoryCounts[cat]);
            
            if (categories.length === 0) {
                this.showEmptyChart(chartId, 'No matching category data');
                return;
            }

            const hasCategoryFilter = this.plugin.state.filters.categories.size > 0;
            const colors = this.config.theme.colors;
            
            const trace = {
                labels: categories,
                values: values,
                type: 'pie',
                hole: 0.4,
                marker: {
                    colors: categories.map((cat, i) => {
                        if (hasCategoryFilter && this.plugin.state.filters.categories.has(cat)) {
                            return '#fff';
                        }
                        return colors[i % colors.length];
                    }),
                    line: {
                        color: categories.map((cat, i) => 
                            hasCategoryFilter && this.plugin.state.filters.categories.has(cat)
                                ? colors[i % colors.length]
                                : 'white'
                        ),
                        width: categories.map(cat =>
                            hasCategoryFilter && this.plugin.state.filters.categories.has(cat) ? 3 : 1
                        )
                    }
                },
                pull: categories.map(cat =>
                    hasCategoryFilter && this.plugin.state.filters.categories.has(cat) ? 0.05 : 0
                ),
                textinfo: 'none',
                hoverinfo: 'label+value+percent',
                hovertemplate: '<b>%{label}</b><br>Count: %{value}<br>Percentage: %{percent}<br><i>Click to filter</i><extra></extra>',
                hoverlabel: {
                    bgcolor: 'white',
                    bordercolor: this.config.theme.highlight,
                    font: { size: 12, color: '#333' }
                }
            };

            const layout = {
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                margin: { l: 20, r: 120, t: 20, b: 20 },
                showlegend: true,
                legend: {
                    orientation: 'v',
                    x: 1.02,
                    y: 0.5,
                    xanchor: 'left',
                    yanchor: 'middle',
                    bgcolor: 'rgba(255,255,255,0.8)',
                    bordercolor: 'rgba(0,0,0,0.1)',
                    borderwidth: 1,
                    font: { size: 10, color: '#333' }
                },
                hovermode: 'closest'
            };

            Plotly.newPlot(chartId, [trace], layout, { responsive: true, displayModeBar: false });

            chartElement.on('plotly_click', (data) => {
                const category = data.points[0].label;
                this.plugin.modules.filter.toggleCategoryFilter(category);
            });

            this.chartInstances[chartId] = { trace, layout };
        }

        createScatterChart() {
            const chartId = 'scatterChart';
            const chartElement = document.getElementById(chartId);
            if (!chartElement) return;

            const dataForVisualization = this.getVisualizationData(chartId);
            
            if (dataForVisualization.length === 0) {
                this.showEmptyChart(chartId, 'No scatter data available');
                return;
            }

            const xField = this.config.charts.scatter.xField;
            const yField = this.config.charts.scatter.yField;

            const hasScatterSelection = this.plugin.state.filters.scatterSelection !== null;
            const scatterSelected = [];
            
            if (hasScatterSelection) {
                const sel = this.plugin.state.filters.scatterSelection;
                dataForVisualization.forEach((d, i) => {
                    if (d[xField] >= sel.xrange[0] && d[xField] <= sel.xrange[1] &&
                        d[yField] >= sel.yrange[0] && d[yField] <= sel.yrange[1]) {
                        scatterSelected.push(i);
                    }
                });
            }

            const years = [...new Set(dataForVisualization.map(d => d.year))];
            const yearColorMap = {};
            years.forEach((year, i) => {
                yearColorMap[year] = this.config.theme.colors[i % this.config.theme.colors.length];
            });

            const trace = {
                x: dataForVisualization.map(d => d[xField]),
                y: dataForVisualization.map(d => d[yField] * (yField === 'gc_content' ? 100 : 1)),
                mode: 'markers',
                type: 'scatter',
                marker: {
                    size: dataForVisualization.map((d, i) => 
                        hasScatterSelection && scatterSelected.includes(i) ? 10 : 8
                    ),
                    color: dataForVisualization.map((d, i) => {
                        if (hasScatterSelection && scatterSelected.includes(i)) {
                            return '#fff';
                        }
                        return yearColorMap[d.year] || this.config.theme.colors[0];
                    }),
                    opacity: dataForVisualization.map((d, i) =>
                        hasScatterSelection && !scatterSelected.includes(i) ? 0.4 : 0.8
                    ),
                    line: {
                        width: dataForVisualization.map((d, i) =>
                            hasScatterSelection && scatterSelected.includes(i) ? 2 : 1
                        ),
                        color: dataForVisualization.map((d, i) => {
                            if (hasScatterSelection && scatterSelected.includes(i)) {
                                return yearColorMap[d.year] || this.config.theme.colors[0];
                            }
                            return 'white';
                        })
                    }
                },
                text: dataForVisualization.map(d => d.name || 'Unknown'),
                customdata: dataForVisualization.map(d => [d.year, d.category]),
                hovertemplate: '<b>%{text}</b><br>' +
                             `${this.config.charts.scatter.xLabel}: %{x}<br>` +
                             `${this.config.charts.scatter.yLabel}: %{y}<br>` +
                             'Year: %{customdata[0]}<br>' +
                             'Category: %{customdata[1]}<extra></extra>',
                hoverlabel: {
                    bgcolor: 'white',
                    bordercolor: this.config.theme.highlight,
                    font: { size: 12, color: '#333' }
                }
            };

            const layout = {
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                margin: { l: 60, r: 30, t: 30, b: 50 },
                xaxis: {
                    title: this.config.charts.scatter.xLabel,
                    titlefont: { size: 12, color: '#555' },
                    tickfont: { size: 10, color: '#555' },
                    gridcolor: 'rgba(0,0,0,0.1)',
                    showgrid: true
                },
                yaxis: {
                    title: this.config.charts.scatter.yLabel,
                    titlefont: { size: 12, color: '#555' },
                    tickfont: { size: 10, color: '#555' },
                    gridcolor: 'rgba(0,0,0,0.1)', 
                    showgrid: true
                },
                dragmode: 'select',
                hovermode: 'closest'
            };

            Plotly.newPlot(chartId, [trace], layout, { responsive: true, displayModeBar: false });

            chartElement.on('plotly_selected', (eventData) => {
                if (eventData && eventData.points && eventData.points.length > 0) {
                    const xValues = eventData.points.map(p => p.x);
                    const yValues = eventData.points.map(p => p.y);
                    const selection = {
                        xrange: [Math.min(...xValues), Math.max(...xValues)],
                        yrange: yField === 'gc_content' 
                            ? [Math.min(...yValues) / 100, Math.max(...yValues) / 100]
                            : [Math.min(...yValues), Math.max(...yValues)]
                    };
                    this.plugin.modules.filter.setScatterSelection(selection);
                }
            });

            chartElement.on('plotly_deselect', () => {
                this.plugin.modules.filter.clearScatterSelection();
            });

            this.chartInstances[chartId] = { trace, layout };
        }

        getVisualizationData(chartId) {
            const nodeOrder = this.plugin.state.nodeInteractionOrder;
            const nodeData = this.plugin.data.nodeFiltered;
            
            if (nodeOrder.length === 0) {
                return [...this.plugin.data.original];
            }

            const myIndex = nodeOrder.indexOf(chartId);
            
            if (myIndex === -1) {
                const lastNodeId = nodeOrder[nodeOrder.length - 1];
                return [...(nodeData[lastNodeId] || this.plugin.data.original)];
            } else if (myIndex === 0) {
                return [...this.plugin.data.original];
            } else {
                const parentNodeId = nodeOrder[myIndex - 1];
                return [...(nodeData[parentNodeId] || this.plugin.data.original)];
            }
        }

        getAllPossibleYears() {
            const years = [...new Set(this.plugin.data.original.map(d => d.year))].filter(Boolean);
            return years.sort((a, b) => a - b);
        }

        showEmptyChart(chartId, message) {
            const layout = {
                plot_bgcolor: 'rgba(0,0,0,0)',
                paper_bgcolor: 'rgba(0,0,0,0)',
                margin: { l: 20, r: 20, t: 20, b: 20 },
                annotations: [{
                    text: message,
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.5,
                    y: 0.5,
                    xanchor: 'center',
                    yanchor: 'middle',
                    showarrow: false,
                    font: { size: 16, color: '#999' }
                }]
            };

            Plotly.newPlot(chartId, [], layout, { responsive: true, displayModeBar: false });
        }

        destroy() {
            Object.keys(this.chartInstances).forEach(chartId => {
                const element = document.getElementById(chartId);
                if (element && element.data) {
                    Plotly.purge(chartId);
                }
            });
            this.chartInstances = {};
        }
    }

    // =====================================================
    // 筛选模块 (简化版，包含核心功能)
    // =====================================================
    class FilterModule {
        constructor(plugin) {
            this.plugin = plugin;
            this.config = plugin.config;
        }

        toggleYearFilter(year) {
            console.log('🗓️ Toggle year filter:', year);
            
            if (this.plugin.state.filters.years.has(year)) {
                this.plugin.state.filters.years.delete(year);
            } else {
                this.plugin.state.filters.years.add(year);
            }
            
            if (this.shouldAutoReset()) {
                this.resetAll();
                return;
            }
            
            this.registerNodeInteraction('yearChart');
        }

        toggleCategoryFilter(category) {
            console.log('🏷️ Toggle category filter:', category);
            
            if (this.plugin.state.filters.categories.has(category)) {
                this.plugin.state.filters.categories.delete(category);
            } else {
                this.plugin.state.filters.categories.add(category);
            }
            
            if (this.shouldAutoReset()) {
                this.resetAll();
                return;
            }
            
            this.registerNodeInteraction('ligandChart');
        }

        setScatterSelection(selection) {
            console.log('📊 Set scatter plot area filter:', selection);
            this.plugin.state.filters.scatterSelection = selection;
            this.registerNodeInteraction('scatterChart');
        }

        clearScatterSelection() {
            console.log('🧹 Clear scatter plot area filter');
            this.plugin.state.filters.scatterSelection = null;
            
            const index = this.plugin.state.nodeInteractionOrder.indexOf('scatterChart');
            if (index !== -1) {
                this.plugin.state.nodeInteractionOrder.splice(index, 1);
                this.plugin.state.nodeFrozenState.scatterChart = false;
            }
            
            if (this.shouldAutoReset()) {
                this.resetAll();
                return;
            }
            
            this.applyFilters();
        }

        registerNodeInteraction(nodeId) {
            const alreadyInteracted = this.plugin.state.nodeInteractionOrder.includes(nodeId);
            
            if (!alreadyInteracted) {
                this.plugin.state.nodeInteractionOrder.push(nodeId);
            }
            this.plugin.state.nodeFrozenState[nodeId] = true;
            
            this.calculateSpecificNodeData(nodeId);
            this.applyFilters();
        }

        calculateSpecificNodeData(nodeId) {
            const filters = this.plugin.state.filters;
            
            if (nodeId === 'yearChart' && filters.years.size > 0) {
                this.plugin.data.nodeFiltered[nodeId] = this.plugin.data.original.filter(d => 
                    filters.years.has(d.year)
                );
            } else if (nodeId === 'ligandChart' && filters.categories.size > 0) {
                this.plugin.data.nodeFiltered[nodeId] = this.plugin.data.original.filter(d => 
                    filters.categories.has(d.category)
                );
            } else if (nodeId === 'scatterChart' && filters.scatterSelection) {
                const sel = filters.scatterSelection;
                const xField = this.config.charts.scatter.xField;
                const yField = this.config.charts.scatter.yField;
                
                this.plugin.data.nodeFiltered[nodeId] = this.plugin.data.original.filter(d => 
                    d[xField] >= sel.xrange[0] && d[xField] <= sel.xrange[1] &&
                    d[yField] >= sel.yrange[0] && d[yField] <= sel.yrange[1]
                );
            } else {
                this.plugin.data.nodeFiltered[nodeId] = [...this.plugin.data.original];
            }
        }

        applyFilters() {
            const filteredData = this.plugin.data.original.filter(d => {
                const filters = this.plugin.state.filters;
                
                if (filters.years.size > 0 && !filters.years.has(d.year)) {
                    return false;
                }
                
                if (filters.categories.size > 0 && !filters.categories.has(d.category)) {
                    return false;
                }
                
                if (filters.scatterSelection) {
                    const sel = filters.scatterSelection;
                    const xField = this.config.charts.scatter.xField;
                    const yField = this.config.charts.scatter.yField;
                    
                    if (d[xField] < sel.xrange[0] || d[xField] > sel.xrange[1] ||
                        d[yField] < sel.yrange[0] || d[yField] > sel.yrange[1]) {
                        return false;
                    }
                }
                
                return true;
            });
            
            this.plugin.data.filtered = filteredData.length > 0 ? filteredData : [...this.plugin.data.original];
            
            this.plugin.modules.ui.updateStatistics();
            this.plugin.modules.chart.createAllCharts();
            this.plugin.modules.ui.updateDataSummary();
            this.updateFilterTags();
            this.plugin.modules.table.updateDataTable();
            
            this.plugin.emit('filtersApplied', {
                filtered: this.plugin.data.filtered.length,
                total: this.plugin.data.original.length
            });
        }

        updateFilterTags() {
            const container = document.querySelector(this.config.container);
            const tagsContainer = container.querySelector('#filterTags');
            if (!tagsContainer) return;
            
            tagsContainer.innerHTML = '';
            
            const colors = this.config.theme.colors;
            const filters = this.plugin.state.filters;
            
            // 获取所有可能的年份，确保与图表中的颜色映射一致
            const allYears = this.plugin.modules.chart.getAllPossibleYears();
            
            // 年份标签 - 使用与图表中相同的颜色映射逻辑
            filters.years.forEach(year => {
                const yearIndex = allYears.indexOf(year);
                const yearColor = yearIndex !== -1 ? colors[yearIndex % colors.length] : colors[0];
                const nodeIndex = this.plugin.state.nodeInteractionOrder.indexOf('yearChart');
                const nodeLabel = nodeIndex !== -1 ? ` (Node ${String.fromCharCode(65 + nodeIndex)})` : '';
                const tag = this.createFilterTag(`Year: ${year}${nodeLabel}`, () => this.toggleYearFilter(year), yearColor);
                tagsContainer.appendChild(tag);
            });
            
            // 获取所有可能的类别，确保与图表中的颜色映射一致
            const dataForVisualization = this.plugin.data.filtered.length > 0 ? this.plugin.data.filtered : this.plugin.data.original;
            const categoryCounts = {};
            dataForVisualization.forEach(d => {
                if (d.category) categoryCounts[d.category] = (categoryCounts[d.category] || 0) + 1;
            });
            const allCategories = Object.keys(categoryCounts).filter(cat => categoryCounts[cat] > 0);
            
            // 类别标签 - 使用与图表中相同的颜色映射逻辑
            filters.categories.forEach(category => {
                const categoryIndex = allCategories.indexOf(category);
                const categoryColor = categoryIndex !== -1 ? colors[categoryIndex % colors.length] : colors[0];
                const nodeIndex = this.plugin.state.nodeInteractionOrder.indexOf('ligandChart');
                const nodeLabel = nodeIndex !== -1 ? ` (Node ${String.fromCharCode(65 + nodeIndex)})` : '';
                const tag = this.createFilterTag(`Category: ${category}${nodeLabel}`, () => this.toggleCategoryFilter(category), categoryColor);
                tagsContainer.appendChild(tag);
            });
            
            // 散点图筛选标签
            if (filters.scatterSelection) {
                const sel = filters.scatterSelection;
                const nodeIndex = this.plugin.state.nodeInteractionOrder.indexOf('scatterChart');
                const nodeLabel = nodeIndex !== -1 ? ` (Node ${String.fromCharCode(65 + nodeIndex)})` : '';
                const text = `Range: ${sel.xrange[0].toFixed(0)}-${sel.xrange[1].toFixed(0)}${nodeLabel}`;
                const tag = this.createFilterTag(text, () => this.clearScatterSelection(), this.config.theme.highlight);
                tagsContainer.appendChild(tag);
            }
            
            // 显示/隐藏筛选控制区域
            const hasActiveFilters = filters.years.size > 0 || filters.categories.size > 0 || filters.scatterSelection;
            const filterSection = container.querySelector('.filter-controls');
            if (filterSection) {
                filterSection.style.display = hasActiveFilters ? 'block' : 'none';
            }
        }

        createFilterTag(text, onRemove, color) {
            const tag = document.createElement('div');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                <span class="legend-color" style="background:${color || '#e0e0e0'}"></span>
                <span class="filter-tag-text">${text}</span>
                <button class="filter-tag-remove" type="button">×</button>
            `;
            
            tag.querySelector('.filter-tag-remove').addEventListener('click', onRemove);
            return tag;
        }

        shouldAutoReset() {
            const filters = this.plugin.state.filters;
            const hasActiveFilters = filters.years.size > 0 ||
                                    filters.categories.size > 0 ||
                                    filters.scatterSelection !== null;
            
            return !hasActiveFilters && this.plugin.state.nodeInteractionOrder.length > 0;
        }

        resetAll() {
            this.plugin.state.filters = {
                years: new Set(),
                categories: new Set(),
                types: new Set(),
                scatterSelection: null
            };
            
            this.plugin.state.nodeInteractionOrder = [];
            this.plugin.state.nodeFrozenState = {};
            this.plugin.data.nodeFiltered = {};
            this.plugin.data.filtered = [...this.plugin.data.original];
            
            this.applyFilters();
        }
    }

    // =====================================================
    // 表格模块 (简化版)
    // =====================================================
    class TableModule {
        constructor(plugin) {
            this.plugin = plugin;
            this.config = plugin.config;
        }

        updateDataTable() {
            if (!this.config.table.enabled) return;
            
            const container = document.querySelector(this.config.container);
            const tableBody = container.querySelector('#tableBody');
            const tableInfo = container.querySelector('#tableInfo');

            if (!tableBody || !tableInfo) return;

            const data = this.plugin.data.filtered;
            tableInfo.textContent = `Showing ${data.length} records (out of ${this.plugin.data.original.length} total)`;
            tableBody.innerHTML = '';

            if (data.length === 0) {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="${this.config.table.columns.length + 1}" style="text-align: center; padding: 40px; color: #999;">
                    ${this.config.i18n.noData}
                </td>`;
                tableBody.appendChild(row);
                return;
            }

            data.forEach((item, index) => {
                const row = document.createElement('tr');
                const cells = [`${index + 1}`];

                this.config.table.columns.forEach(column => {
                    let value = this.plugin.getFieldValue(item, column.key);
                    value = this.plugin.handleEmptyValue(value);
                    
                    // 为序列添加颜色化处理
                    if (column.key === 'sequence' && column.colorize && value !== 'N/A') {
                        const fullSequence = value;
                        const truncateLength = column.truncate || this.config.table.sequenceTruncateLength || 10;
                        const shouldTruncate = value.length > truncateLength;
                        
                        if (shouldTruncate) {
                            value = value.substring(0, truncateLength) + '...';
                        }
                        
                        // 存储完整序列用于tooltip
                        cells.push({
                            html: value,
                            tooltip: shouldTruncate ? this.colorizeSequence(fullSequence) : null,
                            isSequence: true
                        });
                    } else {
                        // 处理其他字段的截断
                        let truncateLength = column.truncate;
                        if (column.key === 'description') {
                            truncateLength = truncateLength || this.config.table.descriptionTruncateLength || 20;
                        }
                        
                        const shouldTruncate = truncateLength && value !== 'N/A' && value.length > truncateLength;
                        
                        if (shouldTruncate) {
                            const fullValue = value;
                            value = value.substring(0, truncateLength) + '...';
                            cells.push({
                                html: value,
                                tooltip: fullValue,
                                isSequence: false
                            });
                        } else {
                            cells.push({ html: value, tooltip: null, isSequence: false });
                        }
                    }
                });

                // 构建表格行，包含tooltip支持
                const cellsHtml = cells.map((cell, cellIndex) => {
                    if (typeof cell === 'string') {
                        return `<td>${cell}</td>`;
                    }
                    
                    const className = cell.tooltip ? 'tooltip-cell' : '';
                    // 对于序列类型，不转义HTML；对于普通文本，进行转义
                    const dataTooltip = cell.tooltip ?
                        (cell.isSequence ?
                            `data-tooltip="${cell.tooltip.replace(/"/g, '&quot;')}"` :
                            `data-tooltip="${this.escapeHtml(cell.tooltip)}"`) : '';
                    const dataSequence = cell.isSequence ? 'data-sequence="true"' : '';
                    
                    return `<td class="${className}" ${dataTooltip} ${dataSequence}>${cell.html}</td>`;
                }).join('');
                
                row.innerHTML = cellsHtml;
                tableBody.appendChild(row);
                
                // 添加tooltip事件监听
                row.querySelectorAll('.tooltip-cell').forEach(cell => {
                    this.addTooltipEvents(cell);
                });
            });
        }
        
        colorizeSequence(sequence) {
            if (!sequence) return '';
            const colorMap = {
                'A': '#d9534f',
                'T': '#f0ad4e',
                'U': '#f0ad4e',
                'C': '#5bc0de',
                'G': '#5cb85c'
            };
            return sequence.split('').map(ch =>
                `<span style="color:${colorMap[ch.toUpperCase()] || '#333'}">${ch}</span>`
            ).join('');
        }
        
        addTooltipEvents(cell) {
            cell.addEventListener('mouseenter', (e) => {
                const tooltip = e.target.getAttribute('data-tooltip');
                const isSequence = e.target.getAttribute('data-sequence') === 'true';
                if (tooltip) {
                    const content = isSequence ? tooltip : this.escapeHtml(tooltip);
                    // 使用clientX, clientY坐标，与原版js/dashboard-main.js完全一致
                    this.plugin.showAmirTooltip(content, e.clientX, e.clientY, e);
                }
            });
            
            cell.addEventListener('mousemove', (e) => {
                const tooltip = e.target.getAttribute('data-tooltip');
                if (tooltip) {
                    const isSequence = e.target.getAttribute('data-sequence') === 'true';
                    const content = isSequence ? tooltip : this.escapeHtml(tooltip);
                    // 实时跟随鼠标移动，与原版js/dashboard-main.js完全一致
                    this.plugin.showAmirTooltip(content, e.clientX, e.clientY, e);
                }
            });
            
            cell.addEventListener('mouseleave', () => {
                this.plugin.hideAmirTooltip();
            });
        }
        
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        exportData() {
            if (!this.config.features.export) return;
            
            const data = this.plugin.data.filtered;
            if (!data || data.length === 0) {
                alert('No data available for export');
                return;
            }
            
            const csvRows = [];
            const headers = ['No.', ...this.config.table.columns.map(col => col.label)];
            csvRows.push(headers.map(h => `"${h}"`).join(','));
            
            data.forEach((item, index) => {
                const rowData = [index + 1];
                this.config.table.columns.forEach(column => {
                    let value = this.plugin.getFieldValue(item, column.key);
                    value = this.plugin.handleEmptyValue(value);
                    if (typeof value === 'string') {
                        value = value.replace(/<[^>]*>/g, '');
                    }
                    rowData.push(value);
                });
                
                const csvRow = rowData.map(val => {
                    const strVal = String(val).replace(/"/g, '""');
                    return `"${strVal}"`;
                }).join(',');
                
                csvRows.push(csvRow);
            });
            
            const csvContent = csvRows.join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `dashboard_export_${data.length}_rows.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.plugin.emit('dataExported', { count: data.length });
        }
    }

    // =====================================================
    // UI模块 (简化版)
    // =====================================================
    class UIModule {
        constructor(plugin) {
            this.plugin = plugin;
            this.config = plugin.config;
        }

        updateStatistics() {
            const container = document.querySelector(this.config.container);
            if (!container) return;

            const stats = this.plugin.modules.data.getStatistics();
            
            this.updateElement(container, '#totalAptamers', stats.total);
            this.updateElement(container, '#uniqueLigands', stats.uniqueCategories);
            this.updateElement(container, '#yearSpan', stats.yearSpan);
            this.updateElement(container, '#avgGC', stats.avgGC);
        }

        updateDataSummary() {
            const container = document.querySelector(this.config.container);
            if (!container) return;

            const currentCount = this.plugin.data.filtered.length;
            const totalCount = this.plugin.data.original.length;
            const percentage = totalCount > 0 ? ((currentCount / totalCount) * 100).toFixed(1) : '0';
            
            this.updateElement(container, '#currentCount', currentCount);
            this.updateElement(container, '#filterPercentage', percentage + '%');
        }

        updateElement(container, selector, value) {
            const element = container.querySelector(selector);
            if (element) {
                element.textContent = value;
            }
        }

        showLoading(show = true) {
            const container = document.querySelector(this.config.container);
            const indicator = container.querySelector('#loadingIndicator');
            
            if (indicator) {
                indicator.style.display = show ? 'block' : 'none';
            }
        }
    }

    // =====================================================
    // 主插件类
    // =====================================================
    class DashboardPlugin {
        constructor(config = {}) {
            this.version = '1.0.0';
            this.config = this.mergeConfig(this.getDefaultConfig(), config);
            this.data = {
                original: [],
                filtered: [],
                nodeFiltered: {},
                loading: false
            };
            this.state = {
                filters: {
                    years: new Set(),
                    categories: new Set(),
                    types: new Set(),
                    scatterSelection: null
                },
                nodeInteractionOrder: [],
                nodeFrozenState: {}
            };
            this.modules = {};
            this.initialized = false;
            
            console.log(`🎛️ Dashboard Plugin v${this.version} initializing...`);
        }

        getDefaultConfig() {
            return {
                container: '#dashboard-container',
                dataSource: {
                    url: './data/data.json',
                    format: 'json',
                    dataPath: null
                },
                fieldMapping: {
                    id: 'id',
                    name: 'name',
                    year: 'year',
                    category: 'category',
                    sequence: 'sequence',
                    length: 'length',
                    gc_content: 'gc_content',
                    affinity: 'affinity',
                    description: 'description',
                    extended: {
                        sequenceName: 'Named',
                        aptamerName: 'Linker name(page name)',
                        pubmedLink: 'Link to PubMed Entry',
                        ligandDescription: 'Ligand Description',
                        linker: 'Linker'
                    }
                },
                charts: {
                    year: { enabled: true, title: 'Year Distribution', type: 'bar' },
                    category: { enabled: true, title: 'Category Distribution', type: 'pie' },
                    scatter: {
                        enabled: true,
                        title: 'Data Distribution',
                        type: 'scatter',
                        xField: 'length',
                        yField: 'gc_content',
                        xLabel: 'Sequence Length (bp)',
                        yLabel: 'GC Content (%)'
                    }
                },
                table: {
                    enabled: true,
                    columns: [
                        { key: 'sequenceName', label: 'Sequence Name' },
                        { key: 'aptamerName', label: 'Aptamer Name' },
                        { key: 'year', label: 'Discovery Year' },
                        { key: 'category', label: 'Category' },
                        { key: 'sequence', label: 'Sequence (5\'-3\')', truncate: 10, colorize: true },
                        { key: 'description', label: 'Description', truncate: 20 }
                    ],
                    sequenceTruncateLength: 10, // 用户可配置的序列截断长度
                    descriptionTruncateLength: 20 // 用户可配置的描述截断长度
                },
                theme: {
                    colors: ['#AEE1D6', '#F6D6AD', '#F7B7A3', '#B5C7ED', '#E7B7E8', '#B7E7E1', '#E8D7B7', '#F7E6AD'],
                    highlight: '#7D807F',
                    dim: 'rgba(180,180,180,0.3)'
                },
                features: { export: true, tooltip: true, multiSelect: true, nodeInteraction: true },
                i18n: {
                    title: 'Data Dashboard',
                    loading: 'Loading data...',
                    noData: 'No data available',
                    totalRecords: 'Total Records',
                    exportButton: 'Export Data',
                    resetButton: 'Reset All Filters'
                }
            };
        }

        mergeConfig(defaultConfig, userConfig) {
            const merge = (target, source) => {
                for (const key in source) {
                    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                        target[key] = target[key] || {};
                        merge(target[key], source[key]);
                    } else {
                        target[key] = source[key];
                    }
                }
                return target;
            };
            return merge(JSON.parse(JSON.stringify(defaultConfig)), userConfig);
        }

        async init() {
            try {
                console.log('🚀 Starting Dashboard Plugin initialization...');
                
                const container = document.querySelector(this.config.container);
                if (!container) {
                    throw new Error(`Container not found: ${this.config.container}`);
                }
                
                this.createHTML(container);
                this.loadStyles();
                this.initModules();
                await this.loadData();
                this.bindEvents();
                
                this.initialized = true;
                console.log('✅ Dashboard Plugin initialization completed');
                this.emit('initialized');
                
            } catch (error) {
                console.error('❌ Dashboard Plugin initialization failed:', error);
                throw error;
            }
        }

        createHTML(container) {
            const html = `
                <div class="dashboard-plugin" data-version="${this.version}">
                    <div class="dashboard-header">
                        <h2 class="dashboard-title">${this.config.i18n.title}</h2>
                        <div class="dashboard-stats">
                            <span class="stat-item">${this.config.i18n.totalRecords}: <span id="totalAptamers">0</span></span>
                            <span class="stat-item">Unique Categories: <span id="uniqueLigands">0</span></span>
                            <span class="stat-item">Year Span: <span id="yearSpan">0</span></span>
                            <span class="stat-item">Avg GC: <span id="avgGC">0%</span></span>
                        </div>
                    </div>

                    <div class="filter-controls" style="display: none;">
                        <div class="filter-section">
                            <h4>Active Filters</h4>
                            <div id="filterTags" class="filter-tags"></div>
                            <div class="filter-buttons">
                                <button id="resetAllFilters" class="btn btn-reset">${this.config.i18n.resetButton}</button>
                            </div>
                        </div>
                    </div>

                    <div class="charts-grid">
                        ${this.config.charts.year.enabled ? `
                        <div class="chart-wrapper">
                            <div class="chart-header"><h4>${this.config.charts.year.title}</h4></div>
                            <div id="yearChart" class="chart-container"></div>
                        </div>` : ''}
                        
                        ${this.config.charts.category.enabled ? `
                        <div class="chart-wrapper">
                            <div class="chart-header"><h4>${this.config.charts.category.title}</h4></div>
                            <div id="ligandChart" class="chart-container"></div>
                        </div>` : ''}
                        
                        ${this.config.charts.scatter.enabled ? `
                        <div class="analysis-wrapper">
                            <div class="chart-header"><h4>${this.config.charts.scatter.title}</h4></div>
                            <div id="scatterChart" class="chart-container"></div>
                        </div>` : ''}
                    </div>

                    <div class="data-summary">
                        <div class="summary-card">
                            <h4>Data Summary</h4>
                            <p>Showing <span id="currentCount">0</span> records (<span id="filterPercentage">100%</span> of total)</p>
                        </div>
                    </div>

                    ${this.config.table.enabled ? `
                    <div class="table-section">
                        <div class="table-header">
                            <h4>Data Table</h4>
                            ${this.config.features.export ? `<button id="exportData" class="btn btn-export">${this.config.i18n.exportButton}</button>` : ''}
                        </div>
                        <div class="table-info" id="tableInfo"></div>
                        <div class="table-wrapper">
                            <table class="data-table">
                                <thead><tr><th>No.</th>${this.config.table.columns.map(col => `<th>${col.label}</th>`).join('')}</tr></thead>
                                <tbody id="tableBody"></tbody>
                            </table>
                        </div>
                    </div>` : ''}

                    <div id="loadingIndicator" class="loading-indicator" style="display: none;">
                        <div class="loading-spinner"></div>
                        <div class="loading-text">${this.config.i18n.loading}</div>
                    </div>
                    
                    <!-- 智能Tooltip - 与原版兼容的amirTooltip ID -->
                    <div id="amirTooltip" class="amir-tooltip" style="opacity: 0; display: none;">
                        <div class="tooltip-content"></div>
                        <div class="tooltip-arrow"></div>
                    </div>
                </div>
            `;
            
            container.innerHTML = html;
        }

        loadStyles() {
            if (document.getElementById('dashboard-plugin-styles')) return;

            const style = document.createElement('style');
            style.id = 'dashboard-plugin-styles';
            style.textContent = `
                /* Dashboard Plugin Enhanced Styles - 集成原有dashboard.css的精美样式 */
                
                /* 基础容器 */
                .dashboard-plugin {
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    color: #333;
                    line-height: 1.6;
                    max-width: 1500px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                }
                
                /* 标题区域 - 集成原有渐变效果 */
                .dashboard-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 25px;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 12px;
                    border: 1px solid #e9ecef;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .dashboard-title {
                    margin: 0 0 15px 0;
                    color: #520049;
                    font-size: 2.2em;
                    font-weight: 600;
                }
                
                /* 统计卡片区域 - 使用原有的stat-card样式 */
                .dashboard-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-bottom: 20px;
                }
                
                .stat-item {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 12px;
                    padding: 25px;
                    text-align: center;
                    border: 1px solid #e9ecef;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    font-size: 1.1em;
                    color: #666;
                }
                
                .stat-item:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                
                /* 筛选控制区域 - 集成原有样式 */
                .filter-controls {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
                    border-radius: 12px;
                    padding: 20px;
                    margin-bottom: 30px;
                    border: 1px solid #e3f2fd;
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .filter-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 15px;
                }
                
                .filter-tag {
                    display: flex;
                    align-items: center;
                    cursor: default;
                    border-radius: 16px;
                    padding: 4px 10px 4px 4px;
                    background: #f8f9fa;
                    box-shadow: 0 0 0 2px var(--legend-border, rgba(82,0,73,0.2));
                    transition: box-shadow 0.2s, transform 0.2s, filter 0.2s;
                }
                
                .filter-tag:hover {
                    box-shadow: 0 2px 8px rgba(80,0,73,0.10);
                    filter: brightness(1.1);
                }
                
                .filter-tag .legend-color {
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    margin-right: 7px;
                    border: 2px solid #fff;
                    box-shadow: 0 0 0 1px #ccc;
                }
                
                .filter-tag-text {
                    font-size: 13px;
                    color: inherit;
                    font-weight: 500;
                }
                
                .filter-tag-remove {
                    background: none;
                    border: none;
                    color: #666;
                    font-size: 16px;
                    line-height: 1;
                    cursor: pointer;
                    padding: 0;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s ease;
                }
                
                .filter-tag-remove:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
                
                /* 图表区域 - 使用原有样式 */
                .charts-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .chart-wrapper, .analysis-wrapper {
                    background: white;
                    border-radius: 12px;
                    border: 1px solid #e9ecef;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    animation: fadeInUp 0.6s ease-out;
                }
                
                .chart-wrapper {
                    overflow: visible;
                }
                
                .analysis-wrapper {
                    overflow: hidden;
                    grid-column: 1 / -1;
                }
                
                .chart-header {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    padding: 15px 20px;
                    border-bottom: 1px solid #e9ecef;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .chart-header h4 {
                    font-size: 16px;
                    font-weight: 600;
                    color: #333333;
                    margin: 0;
                }
                
                .chart-container {
                    height: 300px;
                    position: relative;
                    padding: 15px;
                }
                
                /* 数据摘要 */
                .data-summary {
                    text-align: center;
                    margin-bottom: 30px;
                    margin-top: 30px;
                }
                
                .summary-card {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    border-radius: 25px;
                    padding: 15px 30px;
                    border: 1px solid #e9ecef;
                    min-width: 150px;
                    display: inline-block;
                }
                
                /* 表格样式 */
                .table-section {
                    margin-top: 0px;
                    background: white;
                    border-radius: 12px;
                    border: 1px solid #e9ecef;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                
                .table-header {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    padding: 15px 20px;
                    border-bottom: 1px solid #e9ecef;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .table-header h4 {
                    font-size: 16px;
                    font-weight: 600;
                    color: #333333;
                    margin: 0;
                }
                
                .table-wrapper {
                    padding: 15px;
                }
                
                .table-responsive {
                    max-height: 360px;
                    overflow-y: auto;
                    border-radius: 8px;
                    border: 1px solid #e9ecef;
                }
                
                .data-table {
                    margin-bottom: 0;
                    font-size: 13px;
                    width: 100%;
                    border-collapse: collapse;
                    table-layout: fixed;
                    margin: 0;
                    border: 0;
                }
                
                .data-table th {
                    position: sticky;
                    top: 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    z-index: 10;
                    border-bottom: 2px solid #dee2e6;
                    font-weight: 600;
                    color: #333333;
                    padding: 12px 8px;
                    text-align: center;
                }
                
                .data-table td {
                    padding: 8px;
                    vertical-align: middle;
                    border-top: 1px solid #dee2e6;
                    white-space: normal;
                    word-break: break-word;
                    text-align: inherit;
                    vertical-align: middle !important;
                }
                
                .data-table tbody tr:nth-of-type(odd) {
                    background-color: rgba(0, 0, 0, 0.02);
                }
                
                .data-table tbody tr:hover {
                    background-color: rgba(74, 144, 226, 0.1);
                    cursor: pointer;
                }
                
                /* 按钮样式 */
                .btn {
                    padding: 8px 16px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                
                .btn-reset {
                    background: #dc3545;
                    color: white;
                }
                
                .btn-reset:hover {
                    background: #c82333;
                }
                
                .btn-export {
                    background: #28a745;
                    color: white;
                }
                
                .btn-export:hover {
                    background: #218838;
                }
                
                /* 加载动画 */
                .loading-indicator {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    text-align: center;
                    z-index: 1000;
                }
                
                .loading-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #520049;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                }
                
                /* 动画定义 */
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* 响应式设计 */
                @media (max-width: 1024px) {
                    .charts-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .dashboard-stats {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 768px) {
                    .dashboard-plugin {
                        padding: 15px;
                    }
                    
                    .dashboard-stats {
                        grid-template-columns: 1fr;
                    }
                    
                    .chart-header {
                        flex-direction: column;
                        gap: 10px;
                        text-align: center;
                    }
                    
                    .chart-container {
                        height: 250px;
                    }
                }
                
                /* 智能Tooltip样式 - 与原版完全一致，根据内容动态调整尺寸 */
                .amir-tooltip {
                    position: fixed;
                    z-index: 999999;
                    background: rgba(0, 0, 0, 0.9);
                    color: white;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 12px;
                    line-height: 1.4;
                    max-width: 90vw;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    word-wrap: break-word;
                    white-space: nowrap;
                    overflow-wrap: break-word;
                }
                
                /* 当tooltip内容是序列时，允许换行显示 */
                .amir-tooltip[data-sequence="true"] {
                    white-space: normal;
                    max-width: 400px;
                }
                
                .tooltip-content {
                    word-wrap: break-word;
                }
                
                .tooltip-arrow {
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    transition: all 0.2s ease;
                }
                
                /* 默认箭头在底部 */
                .tooltip-arrow {
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-top: 5px solid rgba(0, 0, 0, 0.9);
                    border-bottom: none;
                }
                
                /* tooltip单元格样式 */
                .tooltip-cell {
                    cursor: help;
                    position: relative;
                }
                
                .tooltip-cell:hover {
                    background-color: rgba(74, 144, 226, 0.1) !important;
                }
            `;
            document.head.appendChild(style);
        }

        initModules() {
            this.modules.data = new DataModule(this);
            this.modules.chart = new ChartModule(this);
            this.modules.filter = new FilterModule(this);
            this.modules.table = new TableModule(this);
            this.modules.ui = new UIModule(this);
        }

        async loadData() {
            this.showLoading(true);
            try {
                await this.modules.data.loadData();
            } finally {
                this.showLoading(false);
            }
        }

        bindEvents() {
            const container = document.querySelector(this.config.container);
            
            const resetBtn = container.querySelector('#resetAllFilters');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => this.resetAllFilters());
            }
            
            const exportBtn = container.querySelector('#exportData');
            if (exportBtn) {
                exportBtn.addEventListener('click', () => this.exportData());
            }
            
            // 暴露全局tooltip函数，确保与原版js/dashboard-config.js完全兼容
            if (typeof window !== 'undefined') {
                window.showAmirTooltip = (content, clientX, clientY, event) => {
                    this.showAmirTooltip(content, clientX, clientY, event);
                };
                window.hideAmirTooltip = () => {
                    this.hideAmirTooltip();
                };
            }
        }

        showLoading(show) {
            this.modules.ui.showLoading(show);
            this.data.loading = show;
        }

        resetAllFilters() {
            this.modules.filter.resetAll();
            this.emit('filtersReset');
        }

        exportData() {
            this.modules.table.exportData();
            this.emit('dataExported');
        }

        getFieldValue(item, fieldKey) {
            const mapping = this.config.fieldMapping;
            let actualKey = mapping[fieldKey] || mapping.extended[fieldKey] || fieldKey;
            return item[actualKey];
        }

        handleEmptyValue(value) {
            if (value === null || value === undefined || value === '' ||
                value === 'null' || value === 'NULL' ||
                value === 'na' || value === 'NA' || value === 'N/A' ||
                value === 'nan' || value === 'NaN' || value === 'NAN' ||
                (typeof value === 'string' && value.trim() === '')) {
                return 'N/A';
            }
            return value;
        }
        
        // ====== 智能Tooltip系统 - 与原版js/dashboard-config.js完全一致 ======
        
        // 指定不触发自定义tooltip的元素选择器
        getIgnoreTooltipElements() {
            return [
                '#ligandChart',
                '#ligandChart .plotly',
                '#ligandChart .plotly .pie',
                '#ligandChart .plotly .hoverlayer'
            ];
        }
        
        // AMIR风格提示框 - 智能定位版本（与js/dashboard-config.js完全一致）
        showAmirTooltip(content, clientX, clientY, event) {
            // 检查事件源是否应该被忽略
            if (event && event.target) {
                const target = event.target;
                const ignoreTooltipElements = this.getIgnoreTooltipElements();
                
                // 检查目标元素或其任何祖先元素是否在忽略列表中
                if (ignoreTooltipElements.some(selector => {
                    // 检查元素是否匹配选择器
                    if (target.matches && target.matches(selector)) {
                        return true;
                    }
                    
                    // 检查元素的祖先是否匹配选择器
                    const closestMatch = target.closest && target.closest(selector);
                    return closestMatch != null;
                })) {
                    // 如果元素应该被忽略，直接返回
                    return;
                }
            }
            
            const container = document.querySelector(this.config.container);
            const tooltip = container.querySelector('#smartTooltip') || document.getElementById('amirTooltip');
            if (!tooltip) return;
            
            const tooltipContent = tooltip.querySelector('.tooltip-content');
            if (!tooltipContent) return;
            
            tooltipContent.innerHTML = content;
            
            // 检查是否为序列类型内容，设置相应的属性
            const isSequence = event && event.target && event.target.getAttribute('data-sequence') === 'true';
            if (isSequence) {
                tooltip.setAttribute('data-sequence', 'true');
            } else {
                tooltip.removeAttribute('data-sequence');
            }
            
            // 确保tooltip可见以计算尺寸
            tooltip.style.opacity = '0';
            tooltip.style.display = 'block';
            tooltip.style.position = 'fixed';
            tooltip.style.transform = 'none';
            
            // 获取tooltip尺寸
            const tooltipRect = tooltip.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // 计算最佳位置，让小箭头对准鼠标
            // 小箭头在tooltip底部中央，所以tooltip应该在鼠标上方，水平居中
            let left = clientX - (tooltipRect.width / 2); // 水平居中对准鼠标
            let top = clientY - tooltipRect.height - 15;  // 在鼠标上方，留出箭头空间
            let arrowPosition = 'bottom'; // 箭头默认在底部
            
            // 如果tooltip会超出右边界，调整左侧位置
            if (left + tooltipRect.width > viewportWidth) {
                left = viewportWidth - tooltipRect.width - 10;
            }
            
            // 如果tooltip会超出左边界，调整左侧位置
            if (left < 10) {
                left = 10;
            }
            
            // 如果tooltip会超出上边界，放到鼠标下方
            if (top < 10) {
                top = clientY + 15;
                arrowPosition = 'top'; // 箭头在顶部
            }
            
            // 如果tooltip会超出下边界，强制放到上方
            if (top + tooltipRect.height > viewportHeight && clientY > tooltipRect.height + 30) {
                top = clientY - tooltipRect.height - 15;
                arrowPosition = 'bottom';
            }
            
            // 设置箭头位置
            const arrow = tooltip.querySelector('.tooltip-arrow');
            if (arrow) {
                if (arrowPosition === 'bottom') {
                    arrow.style.top = 'auto';
                    arrow.style.bottom = '-5px';
                    arrow.style.borderTop = '5px solid rgba(0, 0, 0, 0.9)';
                    arrow.style.borderBottom = 'none';
                } else {
                    arrow.style.bottom = 'auto';
                    arrow.style.top = '-5px';
                    arrow.style.borderBottom = '5px solid rgba(0, 0, 0, 0.9)';
                    arrow.style.borderTop = 'none';
                }
                // 箭头水平位置对准鼠标
                const arrowLeft = clientX - left - 5; // 5px是箭头宽度的一半
                const finalArrowLeft = Math.max(5, Math.min(arrowLeft, tooltipRect.width - 15));
                arrow.style.left = finalArrowLeft + 'px';
                
                // Debug模式：显示箭头位置信息（与原版一致）
                if (window.location.search.includes('debug=tooltip')) {
                    console.log('Tooltip Debug - clientX:', clientX, 'clientY:', clientY, 'tooltipSize:', tooltipRect.width + 'x' + tooltipRect.height);
                    console.log('Arrow Debug - position:', arrowPosition, 'left:', finalArrowLeft + 'px');
                }
            }
            
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.style.opacity = '1';
        }
        
        hideAmirTooltip() {
            const container = document.querySelector(this.config.container);
            const tooltip = container.querySelector('#smartTooltip') || document.getElementById('amirTooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        }
        
        // 兼容性方法，保持向后兼容
        showTooltip(content, clientX, clientY, event) {
            this.showAmirTooltip(content, clientX, clientY, event);
        }
        
        hideTooltip() {
            this.hideAmirTooltip();
        }
        
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        on(event, callback) {
            this.events = this.events || {};
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }

        emit(event, data) {
            if (this.events && this.events[event]) {
                this.events[event].forEach(callback => callback(data));
            }
        }

        destroy() {
            const container = document.querySelector(this.config.container);
            if (container) {
                container.innerHTML = '';
            }
            
            const styles = document.getElementById('dashboard-plugin-styles');
            if (styles) {
                styles.remove();
            }
            
            Object.values(this.modules).forEach(module => {
                if (module.destroy) {
                    module.destroy();
                }
            });
            
            this.initialized = false;
            this.emit('destroyed');
        }
    }

    // 暴露到全局作用域
    global.DashboardPlugin = DashboardPlugin;

    console.log('📊 Dashboard Plugin Bundle v1.0.0 loaded');

})(typeof window !== 'undefined' ? window : this);