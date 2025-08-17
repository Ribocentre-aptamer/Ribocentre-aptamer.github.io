/**
 * 筛选模块
 * 负责所有筛选逻辑和节点交互管理
 */
class FilterModule {
    constructor(plugin) {
        this.plugin = plugin;
        this.config = plugin.config;
    }

    /**
     * 切换年份筛选
     */
    toggleYearFilter(year) {
        console.log('🗓️ 切换年份筛选:', year);
        
        if (this.plugin.state.filters.years.has(year)) {
            this.plugin.state.filters.years.delete(year);
        } else {
            this.plugin.state.filters.years.add(year);
        }
        
        // 检查是否应该自动重置
        if (this.shouldAutoReset()) {
            console.log('🔄 检测到所有筛选条件已清空，自动重置');
            this.resetAll();
            return;
        }
        
        // 注册节点交互
        this.registerNodeInteraction('yearChart');
    }

    /**
     * 切换类别筛选
     */
    toggleCategoryFilter(category) {
        console.log('🏷️ 切换类别筛选:', category);
        
        if (this.plugin.state.filters.categories.has(category)) {
            this.plugin.state.filters.categories.delete(category);
        } else {
            this.plugin.state.filters.categories.add(category);
        }
        
        // 检查是否应该自动重置
        if (this.shouldAutoReset()) {
            console.log('🔄 检测到所有筛选条件已清空，自动重置');
            this.resetAll();
            return;
        }
        
        // 注册节点交互
        this.registerNodeInteraction('ligandChart');
    }

    /**
     * 设置散点图区域筛选
     */
    setScatterSelection(selection) {
        console.log('📊 设置散点图区域筛选:', selection);
        
        // 验证选择区域是否有数据
        const xField = this.config.charts.scatter.xField;
        const yField = this.config.charts.scatter.yField;
        
        const filteredCount = this.plugin.data.original.filter(d => 
            d[xField] >= selection.xrange[0] && d[xField] <= selection.xrange[1] &&
            d[yField] >= selection.yrange[0] && d[yField] <= selection.yrange[1]
        ).length;
        
        if (filteredCount === 0) {
            console.warn('⚠️ 散点图筛选没有匹配数据，取消选择');
            this.plugin.state.filters.scatterSelection = null;
            return;
        }
        
        this.plugin.state.filters.scatterSelection = selection;
        
        // 注册节点交互
        this.registerNodeInteraction('scatterChart');
    }

    /**
     * 清除散点图区域筛选
     */
    clearScatterSelection() {
        console.log('🧹 清除散点图区域筛选');
        
        this.plugin.state.filters.scatterSelection = null;
        
        // 从交互序列中移除散点图
        const index = this.plugin.state.nodeInteractionOrder.indexOf('scatterChart');
        if (index !== -1) {
            this.plugin.state.nodeInteractionOrder.splice(index, 1);
            this.plugin.state.nodeFrozenState.scatterChart = false;
        }
        
        // 检查是否应该自动重置
        if (this.shouldAutoReset()) {
            console.log('🔄 检测到所有筛选条件已清空，自动重置');
            this.resetAll();
            return;
        }
        
        this.applyFilters();
    }

    /**
     * 注册节点交互
     */
    registerNodeInteraction(nodeId) {
        console.log(`🎯 注册节点交互: ${nodeId}`);
        
        const alreadyInteracted = this.plugin.state.nodeInteractionOrder.includes(nodeId);
        
        if (alreadyInteracted) {
            console.log(`节点 ${nodeId} 已在交互序列中，保持当前顺序`);
            this.plugin.state.nodeFrozenState[nodeId] = true;
        } else {
            this.plugin.state.nodeInteractionOrder.push(nodeId);
            this.plugin.state.nodeFrozenState[nodeId] = true;
            console.log(`新增交互节点: ${nodeId}, 当前顺序: ${this.plugin.state.nodeInteractionOrder.join(' > ')}`);
        }
        
        // 计算节点数据并应用筛选
        this.calculateSpecificNodeData(nodeId);
        this.applyFilters();
    }

    /**
     * 计算特定节点的数据
     */
    calculateSpecificNodeData(nodeId) {
        console.log(`🧮 计算节点 ${nodeId} 的数据`);
        
        const filters = this.plugin.state.filters;
        
        // 根据节点类型和筛选条件计算数据
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
            // 如果没有应用筛选条件，使用原始数据
            this.plugin.data.nodeFiltered[nodeId] = [...this.plugin.data.original];
        }
        
        console.log(`节点 ${nodeId} 数据更新: ${this.plugin.data.nodeFiltered[nodeId].length} 条记录`);
    }

    /**
     * 计算所有节点数据（基于层级关系）
     */
    calculateNodeData() {
        const nodeOrder = this.plugin.state.nodeInteractionOrder;
        const nodeData = this.plugin.data.nodeFiltered;
        const frozenState = this.plugin.state.nodeFrozenState;
        
        console.log('🔄 计算节点数据，交互顺序:', nodeOrder.join(' > '));
        
        // 保存冻结节点的数据
        const frozenNodesData = {};
        Object.keys(frozenState).forEach(nodeId => {
            if (frozenState[nodeId]) {
                frozenNodesData[nodeId] = [...(nodeData[nodeId] || [])];
            }
        });
        
        // 重置未冻结节点的数据
        Object.keys(nodeData).forEach(nodeId => {
            if (!frozenState[nodeId]) {
                nodeData[nodeId] = [];
            }
        });
        
        // 如果没有交互，所有节点使用原始数据
        if (nodeOrder.length === 0) {
            Object.keys(nodeData).forEach(nodeId => {
                nodeData[nodeId] = [...this.plugin.data.original];
            });
            return;
        }
        
        // 恢复冻结节点的数据
        Object.keys(frozenNodesData).forEach(nodeId => {
            nodeData[nodeId] = [...frozenNodesData[nodeId]];
        });
        
        // 处理节点层级关系
        if (nodeOrder.length === 1) {
            // 只有A节点
            const firstNodeId = nodeOrder[0];
            const firstNodeData = nodeData[firstNodeId];
            
            Object.keys(nodeData).forEach(nodeId => {
                if (nodeId !== firstNodeId && !frozenState[nodeId]) {
                    nodeData[nodeId] = [...firstNodeData];
                }
            });
        } else {
            // 多节点交互
            nodeOrder.forEach((interactedNodeId, index) => {
                if (index === 0) return; // 跳过A节点
                
                const parentNodeId = nodeOrder[index - 1];
                const parentNodeData = nodeData[parentNodeId];
                
                // 根据当前节点的筛选条件过滤上级节点数据
                const filters = this.plugin.state.filters;
                
                if (interactedNodeId === 'yearChart' && filters.years.size > 0) {
                    nodeData[interactedNodeId] = parentNodeData.filter(d => 
                        filters.years.has(d.year)
                    );
                } else if (interactedNodeId === 'ligandChart' && filters.categories.size > 0) {
                    nodeData[interactedNodeId] = parentNodeData.filter(d => 
                        filters.categories.has(d.category)
                    );
                } else if (interactedNodeId === 'scatterChart' && filters.scatterSelection) {
                    const sel = filters.scatterSelection;
                    const xField = this.config.charts.scatter.xField;
                    const yField = this.config.charts.scatter.yField;
                    
                    nodeData[interactedNodeId] = parentNodeData.filter(d => 
                        d[xField] >= sel.xrange[0] && d[xField] <= sel.xrange[1] &&
                        d[yField] >= sel.yrange[0] && d[yField] <= sel.yrange[1]
                    );
                } else {
                    nodeData[interactedNodeId] = [...parentNodeData];
                }
            });
            
            // 未交互节点使用最后一个交互节点的数据
            const lastNodeId = nodeOrder[nodeOrder.length - 1];
            const lastNodeData = nodeData[lastNodeId];
            
            Object.keys(nodeData).forEach(nodeId => {
                if (!nodeOrder.includes(nodeId) && !frozenState[nodeId]) {
                    nodeData[nodeId] = [...lastNodeData];
                }
            });
        }
    }

    /**
     * 应用筛选器
     */
    applyFilters() {
        console.log('🔍 应用筛选器');
        console.log('当前筛选条件:', {
            years: Array.from(this.plugin.state.filters.years),
            categories: Array.from(this.plugin.state.filters.categories),
            scatterSelection: this.plugin.state.filters.scatterSelection
        });
        
        // 基于所有筛选条件过滤原始数据
        const filteredData = this.plugin.data.original.filter(d => {
            const filters = this.plugin.state.filters;
            
            // 年份筛选
            if (filters.years.size > 0 && !filters.years.has(d.year)) {
                return false;
            }
            
            // 类别筛选
            if (filters.categories.size > 0 && !filters.categories.has(d.category)) {
                return false;
            }
            
            // 散点图区域筛选
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
        
        // 计算节点数据
        this.calculateNodeData();
        
        // 更新全局筛选数据
        this.plugin.data.filtered = filteredData.length > 0 ? filteredData : [...this.plugin.data.original];
        
        console.log(`📊 筛选结果: ${this.plugin.data.filtered.length}/${this.plugin.data.original.length} 条记录`);
        
        // 更新所有UI组件
        this.plugin.modules.ui.updateStatistics();
        this.plugin.modules.chart.createAllCharts();
        this.plugin.modules.ui.updateDataSummary();
        this.updateFilterTags();
        this.plugin.modules.table.updateDataTable();
        
        // 触发筛选事件
        this.plugin.emit('filtersApplied', {
            filtered: this.plugin.data.filtered.length,
            total: this.plugin.data.original.length
        });
    }

    /**
     * 更新筛选标签
     */
    updateFilterTags() {
        const container = document.querySelector(this.config.container);
        const tagsContainer = container.querySelector('#filterTags');
        if (!tagsContainer) return;
        
        tagsContainer.innerHTML = '';
        
        const colors = this.config.theme.colors;
        const filters = this.plugin.state.filters;
        
        // 年份标签
        filters.years.forEach(year => {
            const yearIndex = this.plugin.modules.chart.getAllPossibleYears().indexOf(year);
            const color = colors[yearIndex % colors.length];
            const tag = this.createFilterTag(`Year: ${year}`, () => this.toggleYearFilter(year), color, 'yearChart');
            tagsContainer.appendChild(tag);
        });
        
        // 类别标签
        filters.categories.forEach(category => {
            const categories = [...new Set(this.plugin.data.original.map(d => d.category))];
            const categoryIndex = categories.indexOf(category);
            const color = colors[categoryIndex % colors.length];
            const tag = this.createFilterTag(`Category: ${category}`, () => this.toggleCategoryFilter(category), color, 'ligandChart');
            tagsContainer.appendChild(tag);
        });
        
        // 散点图筛选标签
        if (filters.scatterSelection) {
            const sel = filters.scatterSelection;
            const xField = this.config.charts.scatter.xField;
            const yField = this.config.charts.scatter.yField;
            
            let text = `Range: ${sel.xrange[0].toFixed(0)}-${sel.xrange[1].toFixed(0)}`;
            if (yField === 'gc_content') {
                text += `, ${(sel.yrange[0] * 100).toFixed(1)}-${(sel.yrange[1] * 100).toFixed(1)}%`;
            } else {
                text += `, ${sel.yrange[0].toFixed(1)}-${sel.yrange[1].toFixed(1)}`;
            }
            
            const tag = this.createFilterTag(text, () => this.clearScatterSelection(), this.config.theme.highlight, 'scatterChart');
            tagsContainer.appendChild(tag);
        }
        
        // 显示/隐藏筛选控制区域
        const hasActiveFilters = filters.years.size > 0 || filters.categories.size > 0 || filters.scatterSelection;
        const filterSection = container.querySelector('.filter-controls');
        if (filterSection) {
            filterSection.style.display = hasActiveFilters ? 'block' : 'none';
        }
        
        // 更新重置按钮
        const resetBtn = container.querySelector('#resetAllFilters');
        if (resetBtn) {
            const activeFilterCount = (filters.years.size > 0 ? 1 : 0) + 
                                     (filters.categories.size > 0 ? 1 : 0) + 
                                     (filters.scatterSelection ? 1 : 0);
            resetBtn.textContent = `${this.config.i18n.resetButton} (${activeFilterCount})`;
            resetBtn.disabled = !hasActiveFilters;
            resetBtn.style.opacity = hasActiveFilters ? '1' : '0.5';
        }
        
        // 更新节点状态指示器
        this.updateNodeStateIndicators();
    }

    /**
     * 创建筛选标签
     */
    createFilterTag(text, onRemove, color, nodeId) {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        
        const levelLabel = this.getNodeLevel(nodeId);
        tag.innerHTML = `
            <span class="legend-color" style="background:${color || '#e0e0e0'}"></span>
            <span class="filter-tag-text">${text}</span>
            ${levelLabel ? `<span class="filter-tag-level">${levelLabel}</span>` : ''}
            <button class="filter-tag-remove" type="button">×</button>
        `;
        
        tag.querySelector('.filter-tag-remove').addEventListener('click', onRemove);
        return tag;
    }

    /**
     * 获取节点层级标签
     */
    getNodeLevel(nodeId) {
        const index = this.plugin.state.nodeInteractionOrder.indexOf(nodeId);
        const labels = ['A', 'B', 'C', 'D'];
        return index >= 0 ? labels[index] : '';
    }

    /**
     * 更新节点状态指示器
     */
    updateNodeStateIndicators() {
        const container = document.querySelector(this.config.container);
        if (!container) return;
        
        // 清除所有现有的状态指示器
        container.querySelectorAll('.node-state-indicator').forEach(indicator => {
            indicator.textContent = '';
        });
        
        // 为交互节点添加状态指示器
        this.plugin.state.nodeInteractionOrder.forEach((nodeId, index) => {
            const stateText = index === 0 ? 'Node A' : (index === 1 ? 'Node B' : 'Node C');
            const chartElement = container.querySelector(`#${nodeId}`);
            
            if (chartElement) {
                const wrapper = chartElement.closest('.chart-wrapper, .analysis-wrapper');
                if (wrapper) {
                    const header = wrapper.querySelector('.chart-header');
                    if (header) {
                        let indicator = header.querySelector('.node-state-indicator');
                        if (!indicator) {
                            indicator = document.createElement('div');
                            indicator.className = 'node-state-indicator';
                            header.appendChild(indicator);
                        }
                        indicator.textContent = stateText;
                    }
                }
            }
        });
    }

    /**
     * 检查是否应该自动重置
     */
    shouldAutoReset() {
        const filters = this.plugin.state.filters;
        const hasActiveFilters = filters.years.size > 0 ||
                                filters.categories.size > 0 ||
                                filters.scatterSelection !== null;
        
        return !hasActiveFilters && this.plugin.state.nodeInteractionOrder.length > 0;
    }

    /**
     * 重置所有筛选
     */
    resetAll() {
        console.log('🔄 重置所有筛选条件');
        
        // 重置筛选条件
        this.plugin.state.filters = {
            years: new Set(),
            categories: new Set(),
            types: new Set(),
            scatterSelection: null
        };
        
        // 重置节点状态
        this.plugin.state.nodeInteractionOrder = [];
        this.plugin.state.nodeFrozenState = {};
        
        // 重置数据
        this.plugin.data.nodeFiltered = {};
        this.plugin.data.filtered = [...this.plugin.data.original];
        
        // 更新UI
        this.applyFilters();
        
        console.log('✅ 所有筛选条件已重置');
    }
}

// 暴露到全局作用域
window.FilterModule = FilterModule;