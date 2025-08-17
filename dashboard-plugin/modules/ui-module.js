/**
 * UI模块
 * 负责用户界面更新和交互
 */
class UIModule {
    constructor(plugin) {
        this.plugin = plugin;
        this.config = plugin.config;
    }

    /**
     * 更新统计数据
     */
    updateStatistics() {
        const container = document.querySelector(this.config.container);
        if (!container) return;

        // 获取统计数据
        const stats = this.plugin.modules.data.getStatistics();
        
        // 更新DOM元素
        this.updateElement(container, '#totalAptamers', stats.total);
        this.updateElement(container, '#uniqueLigands', stats.uniqueCategories);
        this.updateElement(container, '#yearSpan', stats.yearSpan);
        this.updateElement(container, '#avgGC', stats.avgGC);
        
        console.log('📊 统计数据已更新:', stats);
    }

    /**
     * 更新数据摘要
     */
    updateDataSummary() {
        const container = document.querySelector(this.config.container);
        if (!container) return;

        const currentCount = this.plugin.data.filtered.length;
        const totalCount = this.plugin.data.original.length;
        const percentage = totalCount > 0 ? ((currentCount / totalCount) * 100).toFixed(1) : '0';
        
        this.updateElement(container, '#currentCount', currentCount);
        this.updateElement(container, '#filterPercentage', percentage + '%');
        
        // 更新摘要卡片的样式
        const summaryCard = container.querySelector('.data-summary');
        if (summaryCard) {
            if (currentCount < totalCount) {
                summaryCard.style.background = '#e3f2fd';
                summaryCard.style.borderLeft = '4px solid #2196f3';
            } else {
                summaryCard.style.background = '#f8f9fa';
                summaryCard.style.borderLeft = 'none';
            }
        }
    }

    /**
     * 更新DOM元素
     */
    updateElement(container, selector, value) {
        const element = container.querySelector(selector);
        if (element) {
            element.textContent = value;
        } else {
            console.warn(`⚠️ 元素未找到: ${selector}`);
        }
    }

    /**
     * 显示加载状态
     */
    showLoading(show = true, message = null) {
        const container = document.querySelector(this.config.container);
        const indicator = container.querySelector('#loadingIndicator');
        
        if (indicator) {
            indicator.style.display = show ? 'block' : 'none';
            
            if (message) {
                const loadingText = indicator.querySelector('.loading-text');
                if (loadingText) {
                    loadingText.textContent = message;
                }
            }
        }
    }

    /**
     * 显示错误消息
     */
    showError(message, type = 'error') {
        const container = document.querySelector(this.config.container);
        if (!container) return;

        // 移除已存在的错误消息
        this.hideError();

        const errorDiv = document.createElement('div');
        errorDiv.id = 'dashboard-error-message';
        errorDiv.className = `dashboard-message dashboard-${type}`;
        
        const bgColor = type === 'error' ? '#f8d7da' : type === 'warning' ? '#fff3cd' : '#d1ecf1';
        const textColor = type === 'error' ? '#721c24' : type === 'warning' ? '#856404' : '#0c5460';
        const borderColor = type === 'error' ? '#f5c6cb' : type === 'warning' ? '#ffeeba' : '#bee5eb';
        
        errorDiv.style.cssText = `
            background: ${bgColor};
            color: ${textColor};
            padding: 15px 20px;
            border-radius: 8px;
            margin: 15px 0;
            border: 1px solid ${borderColor};
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: slideIn 0.3s ease-out;
        `;
        
        errorDiv.innerHTML = `
            <div>
                <strong>${type === 'error' ? '❌ Error' : type === 'warning' ? '⚠️ Warning' : 'ℹ️ Info'}</strong>
                <div style="margin-top: 5px;">${message}</div>
            </div>
            <button onclick="this.parentElement.remove()" style="
                background: none;
                border: none;
                color: ${textColor};
                cursor: pointer;
                font-size: 18px;
                padding: 0;
                margin-left: 15px;
            ">×</button>
        `;
        
        // 添加动画样式
        if (!document.getElementById('dashboard-message-styles')) {
            const style = document.createElement('style');
            style.id = 'dashboard-message-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
        
        container.insertBefore(errorDiv, container.firstChild);
        
        // 自动隐藏（除了错误消息）
        if (type !== 'error') {
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.remove();
                }
            }, 5000);
        }
    }

    /**
     * 隐藏错误消息
     */
    hideError() {
        const existingError = document.getElementById('dashboard-error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    /**
     * 显示成功消息
     */
    showSuccess(message) {
        this.showError(message, 'success');
    }

    /**
     * 显示警告消息
     */
    showWarning(message) {
        this.showError(message, 'warning');
    }

    /**
     * 更新页面标题
     */
    updateTitle(title = null) {
        const finalTitle = title || this.config.i18n.title;
        
        // 更新dashboard标题
        const container = document.querySelector(this.config.container);
        const titleElement = container.querySelector('.dashboard-title');
        if (titleElement) {
            titleElement.textContent = finalTitle;
        }
        
        // 更新页面标题（如果允许）
        if (this.config.updatePageTitle !== false) {
            document.title = finalTitle;
        }
    }

    /**
     * 切换主题
     */
    switchTheme(themeName) {
        if (!this.config.themes || !this.config.themes[themeName]) {
            console.warn(`⚠️ 主题不存在: ${themeName}`);
            return;
        }
        
        const theme = this.config.themes[themeName];
        const container = document.querySelector(this.config.container);
        
        if (container) {
            // 更新CSS变量
            Object.keys(theme).forEach(key => {
                container.style.setProperty(`--${key}`, theme[key]);
            });
            
            // 添加主题类
            container.className = container.className.replace(/theme-\w+/g, '');
            container.classList.add(`theme-${themeName}`);
            
            console.log(`🎨 已切换到主题: ${themeName}`);
            
            // 触发主题切换事件
            this.plugin.emit('themeChanged', { theme: themeName });
        }
    }

    /**
     * 设置响应式行为
     */
    setupResponsive() {
        const container = document.querySelector(this.config.container);
        if (!container) return;

        const handleResize = () => {
            const width = container.offsetWidth;
            
            // 移除所有响应式类
            container.classList.remove('dashboard-mobile', 'dashboard-tablet', 'dashboard-desktop');
            
            // 添加对应的响应式类
            if (width < 768) {
                container.classList.add('dashboard-mobile');
            } else if (width < 1024) {
                container.classList.add('dashboard-tablet');
            } else {
                container.classList.add('dashboard-desktop');
            }
            
            // 重新渲染图表以适应新尺寸
            if (this.plugin.modules.chart) {
                setTimeout(() => {
                    this.plugin.modules.chart.createAllCharts();
                }, 100);
            }
        };

        // 初始化响应式
        handleResize();
        
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
        
        // 保存清理函数
        this._cleanupResize = () => {
            window.removeEventListener('resize', handleResize);
        };
    }

    /**
     * 添加快捷键支持
     */
    setupKeyboardShortcuts() {
        const shortcuts = {
            'KeyR': () => this.plugin.resetAllFilters(), // R键重置筛选
            'KeyE': () => this.plugin.exportData(),       // E键导出数据
            'Escape': () => this.plugin.resetAllFilters() // ESC键重置筛选
        };

        const handleKeydown = (event) => {
            // 只在按下Ctrl/Cmd时生效（Mac支持）
            if ((event.ctrlKey || event.metaKey) && shortcuts[event.code]) {
                event.preventDefault();
                shortcuts[event.code]();
            } else if (event.key === 'Escape' && shortcuts['Escape']) {
                event.preventDefault();
                shortcuts['Escape']();
            }
        };

        document.addEventListener('keydown', handleKeydown);
        
        // 保存清理函数
        this._cleanupKeyboard = () => {
            document.removeEventListener('keydown', handleKeydown);
        };
        
        console.log('⌨️ 快捷键已启用: Ctrl+R(重置), Ctrl+E(导出), Esc(重置)');
    }

    /**
     * 初始化可访问性功能
     */
    setupAccessibility() {
        const container = document.querySelector(this.config.container);
        if (!container) return;

        // 添加ARIA标签
        container.setAttribute('role', 'application');
        container.setAttribute('aria-label', this.config.i18n.title);
        
        // 为图表添加可访问性属性
        const charts = container.querySelectorAll('.chart-container');
        charts.forEach((chart, index) => {
            chart.setAttribute('role', 'img');
            chart.setAttribute('aria-label', `Chart ${index + 1}`);
        });
        
        // 为表格添加可访问性属性
        const table = container.querySelector('.data-table');
        if (table) {
            table.setAttribute('role', 'table');
            table.setAttribute('aria-label', 'Data table');
        }
        
        console.log('♿ 可访问性功能已初始化');
    }

    /**
     * 获取UI状态
     */
    getUIState() {
        const container = document.querySelector(this.config.container);
        if (!container) return null;

        return {
            isLoading: this.plugin.data.loading,
            hasError: !!container.querySelector('#dashboard-error-message'),
            theme: this.getCurrentTheme(),
            responsiveClass: this.getResponsiveClass(),
            statistics: this.plugin.modules.data.getStatistics()
        };
    }

    /**
     * 获取当前主题
     */
    getCurrentTheme() {
        const container = document.querySelector(this.config.container);
        if (!container) return 'default';
        
        const classList = Array.from(container.classList);
        const themeClass = classList.find(cls => cls.startsWith('theme-'));
        return themeClass ? themeClass.replace('theme-', '') : 'default';
    }

    /**
     * 获取响应式类
     */
    getResponsiveClass() {
        const container = document.querySelector(this.config.container);
        if (!container) return 'desktop';
        
        if (container.classList.contains('dashboard-mobile')) return 'mobile';
        if (container.classList.contains('dashboard-tablet')) return 'tablet';
        return 'desktop';
    }

    /**
     * 销毁UI模块
     */
    destroy() {
        // 清理事件监听器
        if (this._cleanupResize) {
            this._cleanupResize();
        }
        if (this._cleanupKeyboard) {
            this._cleanupKeyboard();
        }
        
        // 清理消息
        this.hideError();
        
        // 隐藏加载指示器
        this.showLoading(false);
        
        console.log('🧹 UI模块已清理');
    }
}

// 暴露到全局作用域
window.UIModule = UIModule;