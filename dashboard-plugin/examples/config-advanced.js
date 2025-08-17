/**
 * Dashboard Plugin 高级配置示例
 * 
 * 展示插件的高级功能和自定义选项
 * 包括复杂的字段映射、自定义主题、多语言支持等
 */

const advancedConfig = {
    container: '#advanced-dashboard',
    
    // 复杂数据源配置
    dataSource: {
        url: './api/complex-data.json',
        format: 'json',
        dataPath: 'results.data'  // 嵌套数据路径
    },
    
    // 复杂字段映射
    fieldMapping: {
        // 基础字段可以映射到多个可能的源字段
        year: 'publication_year',
        category: 'item_category', 
        sequence: 'sequence_data',
        length: 'sequence_length',
        gc_content: 'gc_percentage',
        name: 'sequence_id',
        
        // 扩展字段用于详细显示
        extended: {
            fullName: 'full_sequence_name',
            description: 'detailed_description',
            externalLink: 'external_reference_url',
            metadata: 'additional_metadata'
        }
    },
    
    // 图表高级配置
    charts: {
        year: {
            enabled: true,
            title: 'Timeline Analysis',
            type: 'bar'
        },
        category: {
            enabled: true,
            title: 'Category Breakdown', 
            type: 'pie'
        },
        scatter: {
            enabled: true,
            title: 'Correlation Analysis',
            type: 'scatter',
            xField: 'length',
            yField: 'gc_content',
            xLabel: 'Data Size (units)',
            yLabel: 'Quality Score (%)'
        }
    },
    
    // 高级表格配置
    table: {
        enabled: true,
        columns: [
            {
                key: 'fullName',
                label: 'Full Name',
                searchLink: '/search/'
            },
            {
                key: 'category', 
                label: 'Category'
            },
            {
                key: 'year',
                label: 'Year',
                link: 'externalLink'
            },
            {
                key: 'sequence',
                label: 'Data',
                truncate: 15,
                colorize: false
            },
            {
                key: 'description',
                label: 'Description',
                truncate: 30
            }
        ],
        exportColumns: [
            'fullName', 'category', 'year', 'externalLink', 
            'sequence', 'description', 'metadata'
        ]
    },
    
    // 自定义主题
    theme: {
        colors: [
            '#FF6B6B',  // 红色系
            '#4ECDC4',  // 青色系  
            '#45B7D1',  // 蓝色系
            '#96CEB4',  // 绿色系
            '#FECA57',  // 黄色系
            '#FF9FF3',  // 粉色系
            '#54A0FF',  // 蓝紫系
            '#5F27CD'   // 紫色系
        ],
        highlight: '#2C2C54',
        dim: 'rgba(108,108,108,0.4)'
    },
    
    // 功能配置
    features: {
        export: true,
        tooltip: true,
        multiSelect: true,
        nodeInteraction: true
    },
    
    // 多语言配置
    i18n: {
        title: 'Advanced Data Analytics Dashboard',
        loading: 'Analyzing data patterns...',
        noData: 'No data matches current criteria',
        totalRecords: 'Total Items',
        filteredRecords: 'Filtered Results',
        exportButton: 'Export Analysis',
        resetButton: 'Clear All Filters'
    },
    
    // 事件回调配置
    callbacks: {
        onInitialized: function(dashboard) {
            console.log('Dashboard initialized with', dashboard.data.original.length, 'records');
        },
        onFiltersApplied: function(data) {
            console.log('Filters applied:', data.filtered, 'of', data.total, 'records shown');
        },
        onDataExported: function(data) {
            console.log('Data exported:', data.count, 'records in', data.columns, 'columns');
        }
    }
};

// 使用示例（带事件监听）:
/*
const dashboard = new DashboardPlugin(advancedConfig);

// 监听插件事件
dashboard.on('initialized', advancedConfig.callbacks.onInitialized);
dashboard.on('filtersApplied', advancedConfig.callbacks.onFiltersApplied);
dashboard.on('dataExported', advancedConfig.callbacks.onDataExported);

// 初始化
dashboard.init().then(() => {
    console.log('Advanced dashboard ready!');
}).catch(error => {
    console.error('Dashboard initialization failed:', error);
});
*/