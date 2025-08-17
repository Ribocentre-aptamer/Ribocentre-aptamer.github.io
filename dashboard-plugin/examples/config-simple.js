/**
 * Dashboard Plugin 简单配置示例
 * 
 * 这是一个最小化的配置示例，展示了插件的基本用法
 * 适合快速上手和简单数据的可视化
 */

const simpleConfig = {
    // 基本配置
    container: '#my-dashboard',
    
    // 数据源 - 指向你的JSON文件
    dataSource: {
        url: './data/my-data.json'
    },
    
    // 字段映射 - 告诉插件如何理解你的数据
    fieldMapping: {
        year: 'year',           // 年份字段
        category: 'type',       // 类别字段  
        sequence: 'content',    // 内容字段
        length: 'size',         // 大小字段
        name: 'title'           // 标题字段
    },
    
    // 自定义标题
    i18n: {
        title: 'My Data Dashboard'
    }
};

// 使用示例:
// const dashboard = new DashboardPlugin(simpleConfig);
// dashboard.init();