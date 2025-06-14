/**
 * 统计数据模块 JS - 从homepage-main.js中提取
 * 实现数字计数动画和相关功能
 */

// 统计数据模块
const StatsModule = {
    /**
     * 为统计数字添加动画效果
     * @param {HTMLElement} element - 需要添加动画的元素
     * @param {number} target - 目标数值
     * @param {number} duration - 动画持续时间（毫秒）
     */
    animateCounter(element, target, duration = 1500) {
        if (!element) return;
        
        // 初始值
        let current = 0;
        
        // 计算每一步增加的数值
        const increment = target / (duration / 30);
        
        // 创建计时器
        const timer = setInterval(() => {
            current += increment;
            
            // 如果达到或超过目标值，停止动画
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // 更新DOM
            element.textContent = Math.floor(current);
        }, 30);
    },

    /**
     * 检查元素是否在视口中
     * @param {HTMLElement} element - 需要检查的元素
     * @returns {boolean} - 元素是否在视口中
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * 在滚动时检查并初始化计数器
     */
    handleScroll() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            // 如果元素在视口中且尚未初始化
            if (this.isInViewport(counter) && !counter.dataset.initialized) {
                const target = parseInt(counter.getAttribute('data-count'));
                this.animateCounter(counter, target);
                counter.dataset.initialized = 'true';
            }
        });
    },

    /**
     * 初始化统计模块
     */
    init() {
        // 获取所有计数器元素
        const counters = document.querySelectorAll('.stat-number');
        
        // 如果没有计数器元素，直接返回
        if (counters.length === 0) return;
        
        // 标记所有计数器为未初始化
        counters.forEach(counter => {
            counter.dataset.initialized = 'false';
        });
        
        // 立即检查一次
        this.handleScroll();
        
        // 添加滚动事件监听
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    }
};

// 当DOM加载完成后初始化模块
document.addEventListener('DOMContentLoaded', function() {
    StatsModule.init();
});

// 导出模块供其他JS使用
window.StatsModule = StatsModule; 