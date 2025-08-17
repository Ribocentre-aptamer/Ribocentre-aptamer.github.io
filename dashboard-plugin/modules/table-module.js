/**
 * 表格模块
 * 负责数据表格的显示和导出功能
 */
class TableModule {
    constructor(plugin) {
        this.plugin = plugin;
        this.config = plugin.config;
    }

    /**
     * 更新数据表格
     */
    updateDataTable() {
        if (!this.config.table.enabled) return;
        
        const container = document.querySelector(this.config.container);
        const tableBody = container.querySelector('#tableBody');
        const tableInfo = container.querySelector('#tableInfo');

        if (!tableBody || !tableInfo) {
            console.warn('⚠️ 表格元素缺失，无法更新数据表');
            return;
        }

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
            row.style.whiteSpace = 'nowrap';

            // 添加行号
            const cells = [`${index + 1}`];

            // 根据配置生成列数据
            this.config.table.columns.forEach(column => {
                const cellData = this.generateCellData(item, column, index);
                cells.push(cellData.html);
            });

            row.innerHTML = cells.map(cell => `<td>${cell}</td>`).join('');
            tableBody.appendChild(row);

            // 添加tooltip
            this.addCellTooltips(row, item);
        });
    }

    /**
     * 生成单元格数据
     */
    generateCellData(item, column, index) {
        let value = this.plugin.getFieldValue(item, column.key);
        value = this.plugin.handleEmptyValue(value);
        
        if (value === 'N/A') {
            return { html: 'N/A', tooltip: null };
        }

        let html = value;
        let tooltip = null;

        // 处理链接
        if (column.link) {
            const linkValue = this.plugin.getFieldValue(item, column.link);
            if (linkValue && linkValue !== 'N/A') {
                let url = linkValue;
                if (!url.startsWith('http') && !url.startsWith('/')) {
                    url = '/' + url;
                }
                html = `<a href="${url}" target="_blank" style="color: #520049; text-decoration: none;">${value}</a>`;
            }
        }

        // 处理搜索链接
        if (column.searchLink && value !== 'N/A') {
            const searchQuery = encodeURIComponent(value);
            html = `<a href="${column.searchLink}?search=${searchQuery}" target="_blank">${value}</a>`;
        }

        // 处理截断
        if (column.truncate && value.length > column.truncate) {
            html = value.substring(0, column.truncate) + '...';
            tooltip = column.colorize ? this.colorizeSequence(value) : value;
        }

        // 处理序列着色
        if (column.colorize && value !== 'N/A') {
            if (column.truncate) {
                // 如果有截断，tooltip已经包含完整的彩色序列
                if (!tooltip) {
                    tooltip = this.colorizeSequence(value);
                }
            } else {
                // 如果没有截断，直接着色显示
                html = this.colorizeSequence(value);
            }
        }

        return { html, tooltip };
    }

    /**
     * 序列着色
     */
    colorizeSequence(sequence) {
        if (!sequence || sequence === 'N/A') return sequence;
        
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

    /**
     * 添加单元格tooltip
     */
    addCellTooltips(row, item) {
        const cells = row.querySelectorAll('td');
        
        this.config.table.columns.forEach((column, i) => {
            const cellIndex = i + 1; // 跳过行号列
            const cell = cells[cellIndex];
            
            if (!cell) return;
            
            let tooltipContent = null;
            
            // 检查是否需要tooltip
            if (column.truncate || column.colorize) {
                const value = this.plugin.getFieldValue(item, column.key);
                const processedValue = this.plugin.handleEmptyValue(value);
                
                if (processedValue !== 'N/A') {
                    if (column.colorize) {
                        tooltipContent = this.colorizeSequence(processedValue);
                    } else if (column.truncate && processedValue.length > column.truncate) {
                        tooltipContent = processedValue;
                    }
                }
            }
            
            if (tooltipContent) {
                this.addTooltip(cell, tooltipContent);
            }
        });
    }

    /**
     * 添加tooltip事件
     */
    addTooltip(cell, htmlContent) {
        if (!htmlContent || !this.config.features.tooltip) return;
        
        cell.style.cursor = 'pointer';
        
        cell.addEventListener('mouseenter', (e) => {
            this.showTooltip(htmlContent, e.clientX, e.clientY, e);
        });
        
        cell.addEventListener('mousemove', (e) => {
            this.showTooltip(htmlContent, e.clientX, e.clientY, e);
        });
        
        cell.addEventListener('mouseleave', () => {
            this.hideTooltip();
        });
    }

    /**
     * 显示tooltip
     */
    showTooltip(content, clientX, clientY, event) {
        const tooltip = document.getElementById('amirTooltip');
        if (!tooltip) return;
        
        const tooltipContent = tooltip.querySelector('.tooltip-content');
        if (!tooltipContent) return;
        
        tooltipContent.innerHTML = content;
        
        // 智能定位tooltip
        tooltip.style.opacity = '0';
        tooltip.style.display = 'block';
        tooltip.style.position = 'fixed';
        
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let left = clientX - (tooltipRect.width / 2);
        let top = clientY - tooltipRect.height - 15;
        
        // 边界检查
        if (left + tooltipRect.width > viewportWidth) {
            left = viewportWidth - tooltipRect.width - 10;
        }
        if (left < 10) {
            left = 10;
        }
        if (top < 10) {
            top = clientY + 15;
        }
        
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.style.opacity = '1';
    }

    /**
     * 隐藏tooltip
     */
    hideTooltip() {
        const tooltip = document.getElementById('amirTooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
        }
    }

    /**
     * 导出数据
     */
    exportData() {
        if (!this.config.features.export) {
            console.warn('⚠️ 导出功能未启用');
            return;
        }
        
        const data = this.plugin.data.filtered;
        
        if (!data || data.length === 0) {
            alert('暂无数据可导出');
            return;
        }
        
        console.log('📤 开始导出数据...');
        
        try {
            // 创建CSV内容
            const csvRows = [];
            
            // 标题行
            const headers = ['No.', ...this.config.table.exportColumns.map(key => {
                const column = this.config.table.columns.find(col => col.key === key);
                return column ? column.label : key;
            })];
            csvRows.push(headers.map(h => `"${h}"`).join(','));
            
            // 数据行
            data.forEach((item, index) => {
                const rowData = [index + 1];
                
                this.config.table.exportColumns.forEach(key => {
                    let value = this.plugin.getFieldValue(item, key);
                    value = this.plugin.handleEmptyValue(value);
                    
                    // 清理HTML标签
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
            
            // 创建并下载文件
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
            
            console.log(`✅ 成功导出 ${data.length} 条记录`);
            
            // 触发导出事件
            this.plugin.emit('dataExported', {
                count: data.length,
                columns: this.config.table.exportColumns.length
            });
            
        } catch (error) {
            console.error('❌ 导出失败:', error);
            alert('导出失败，请稍后重试');
        }
    }

    /**
     * 获取表格统计信息
     */
    getTableStats() {
        const data = this.plugin.data.filtered;
        return {
            total: this.plugin.data.original.length,
            filtered: data.length,
            columns: this.config.table.columns.length,
            exportColumns: this.config.table.exportColumns.length
        };
    }

    /**
     * 销毁模块
     */
    destroy() {
        // 清理事件监听器等
        const container = document.querySelector(this.config.container);
        if (container) {
            const tableBody = container.querySelector('#tableBody');
            if (tableBody) {
                tableBody.innerHTML = '';
            }
        }
    }
}

// 暴露到全局作用域
window.TableModule = TableModule;