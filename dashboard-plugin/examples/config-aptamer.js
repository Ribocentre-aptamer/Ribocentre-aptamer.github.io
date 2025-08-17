/**
 * Dashboard Plugin 配置示例 - Aptamer 数据
 * 
 * 这是一个针对aptamer数据的完整配置示例
 * 展示了如何配置字段映射、图表设置、表格显示等
 */

const dashboardConfig = {
    // 容器选择器
    container: '#dashboard-container',
    
    // 数据源配置
    dataSource: {
        url: './apidata/sequences_cleaned.json',  // 数据文件路径
        format: 'json',                          // 数据格式
        dataPath: 'Sheet1'                       // 数据在JSON中的路径（如果嵌套）
    },
    
    // 字段映射配置 - 将原始数据字段映射到插件标准字段
    fieldMapping: {
        // 基础字段映射
        year: 'Year',                    // 年份字段
        category: 'Category',            // 分类字段  
        sequence: 'Sequence',            // 序列字段
        length: 'Length',                // 长度字段
        gc_content: 'GC Content',        // GC含量字段
        affinity: 'Affinity',           // 亲和力字段
        name: 'Named',                  // 名称字段
        
        // 扩展字段映射（用于表格显示和导出）
        extended: {
            sequenceName: 'Named',                    // 序列名称
            aptamerName: 'Linker name(page name)',    // Aptamer名称
            pubmedLink: 'Link to PubMed Entry',       // PubMed链接
            ligandDescription: 'Ligand Description',  // 配体描述
            linker: 'Linker'                         // 链接字段
        }
    },
    
    // 图表配置
    charts: {
        // 年份分布柱状图
        year: {
            enabled: true,
            title: 'Publication Year Distribution',
            type: 'bar'
        },
        
        // 类别分布饼图  
        category: {
            enabled: true,
            title: 'Aptamer Category Distribution',
            type: 'pie'
        },
        
        // 散点图
        scatter: {
            enabled: true,
            title: 'Sequence Length vs GC Content',
            type: 'scatter',
            xField: 'length',           // X轴字段
            yField: 'gc_content',       // Y轴字段
            xLabel: 'Sequence Length (bp)',  // X轴标签
            yLabel: 'GC Content (%)'         // Y轴标签
        }
    },
    
    // 表格配置
    table: {
        enabled: true,
        
        // 表格显示列配置
        columns: [
            {
                key: 'sequenceName',
                label: 'Sequence Name',
                searchLink: '/sequences/'  // 点击跳转到搜索页面
            },
            {
                key: 'aptamerName', 
                label: 'Aptamer Name',
                link: 'linker'  // 使用linker字段作为链接
            },
            {
                key: 'year',
                label: 'Discovery Year',
                link: 'pubmedLink'  // 使用pubmedLink字段作为链接
            },
            {
                key: 'category',
                label: 'Category'
            },
            {
                key: 'sequence',
                label: 'Sequence (5\'-3\')',
                truncate: 10,      // 超过10个字符时截断
                colorize: true     // 启用序列着色
            },
            {
                key: 'ligandDescription',
                label: 'Description', 
                truncate: 20       // 超过20个字符时截断
            }
        ],
        
        // 导出列配置（包含更多信息）
        exportColumns: [
            'sequenceName', 'aptamerName', 'year', 'pubmedLink',
            'category', 'sequence', 'ligandDescription'
        ]
    },
    
    // 主题配置
    theme: {
        colors: [
            '#AEE1D6',  // 明亮青绿
            '#F6D6AD',  // 明亮米杏
            '#F7B7A3',  // 明亮珊瑚
            '#B5C7ED',  // 明亮蓝紫
            '#E7B7E8',  // 明亮粉紫
            '#B7E7E1',  // 明亮青蓝
            '#E8D7B7',  // 明亮米黄
            '#F7E6AD'   // 明亮柠檬
        ],
        highlight: '#7D807F',                // 高亮颜色
        dim: 'rgba(180,180,180,0.3)'        // 暗淡颜色
    },
    
    // 功能开关
    features: {
        export: true,           // 启用数据导出
        tooltip: true,          // 启用工具提示
        multiSelect: true,      // 启用多选筛选
        nodeInteraction: true   // 启用节点交互
    },
    
    // 国际化配置
    i18n: {
        title: 'Aptamer Dashboard',
        loading: 'Loading aptamer data...',
        noData: 'No aptamer data available',
        totalRecords: 'Total Aptamers',
        filteredRecords: 'Filtered Aptamers',
        exportButton: 'Export Data',
        resetButton: 'Reset All Filters'
    }
};

// 导出配置（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dashboardConfig;
}

// 全局变量（如果在浏览器环境中）
if (typeof window !== 'undefined') {
    window.APTAMER_DASHBOARD_CONFIG = dashboardConfig;
}