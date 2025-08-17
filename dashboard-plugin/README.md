# Dashboard Plugin 📊

一个功能强大、高度可定制的数据可视化仪表板插件，支持随插随用的快速部署。

## ✨ 特性

- 🚀 **即插即用** - 单文件引入，无需复杂配置
- 🎨 **完全自定义** - 支持字段映射、主题、布局等全方位定制
- 📊 **多种图表** - 柱状图、饼图、散点图等可视化方式
- 🔍 **智能筛选** - 多维度交互式筛选，支持节点层级关系
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 💾 **数据导出** - 支持CSV格式数据导出
- 🌐 **国际化支持** - 多语言界面支持
- ⚡ **高性能** - 优化的数据处理和图表渲染

## 🚀 快速开始

### 1. 基本依赖

确保页面中已引入 Plotly.js：

```html
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
```

### 2. 引入插件

```html
<!-- 引入插件Bundle文件 -->
<script src="dashboard-plugin-bundle.js"></script>
```

### 3. 准备容器

```html
<div id="dashboard-container"></div>
```

### 4. 配置和初始化

```javascript
// 基本配置
const config = {
    container: '#dashboard-container',
    dataSource: {
        url: './data/my-data.json'
    },
    fieldMapping: {
        year: 'year',
        category: 'category',
        sequence: 'content',
        name: 'title'
    }
};

// 创建并初始化
const dashboard = new DashboardPlugin(config);
dashboard.init();
```

## 📋 完整示例

### HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的数据仪表板</title>
</head>
<body>
    <div id="dashboard-container"></div>
    
    <!-- 依赖库 -->
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    
    <!-- 插件 -->
    <script src="dashboard-plugin-bundle.js"></script>
    
    <!-- 配置和初始化 -->
    <script>
        const config = {
            container: '#dashboard-container',
            dataSource: {
                url: './apidata/sequences_cleaned.json',
                dataPath: 'Sheet1'
            },
            fieldMapping: {
                year: 'Year',
                category: 'Category',
                sequence: 'Sequence',
                length: 'Length',
                gc_content: 'GC Content',
                name: 'Named'
            },
            i18n: {
                title: 'Aptamer 数据仪表板'
            }
        };
        
        const dashboard = new DashboardPlugin(config);
        dashboard.init().then(() => {
            console.log('仪表板初始化成功！');
        });
    </script>
</body>
</html>
```

## ⚙️ 配置详解

### 数据源配置 (dataSource)

```javascript
dataSource: {
    url: './data/data.json',      // 数据文件路径
    format: 'json',               // 数据格式（目前支持json）
    dataPath: 'Sheet1'            // 数据在JSON中的路径（可选）
}
```

### 字段映射 (fieldMapping)

插件通过字段映射来理解你的数据结构：

```javascript
fieldMapping: {
    // 基础字段映射
    year: 'publication_year',     // 年份字段
    category: 'type',             // 分类字段
    sequence: 'content',          // 序列/内容字段
    length: 'size',               // 长度字段
    gc_content: 'quality_score',  // GC含量/质量分数字段
    name: 'title',                // 名称字段
    
    // 扩展字段映射（用于表格显示）
    extended: {
        sequenceName: 'full_name',
        description: 'detailed_desc',
        externalLink: 'reference_url'
    }
}
```

### 图表配置 (charts)

```javascript
charts: {
    // 年份分布柱状图
    year: {
        enabled: true,
        title: 'Year Distribution',
        type: 'bar'
    },
    
    // 类别分布饼图
    category: {
        enabled: true,
        title: 'Category Distribution',
        type: 'pie'
    },
    
    // 散点图
    scatter: {
        enabled: true,
        title: 'Data Correlation',
        type: 'scatter',
        xField: 'length',
        yField: 'gc_content',
        xLabel: 'Length (bp)',
        yLabel: 'GC Content (%)'
    }
}
```

### 表格配置 (table)

```javascript
table: {
    enabled: true,
    columns: [
        {
            key: 'name',                    // 字段key
            label: 'Name',                  // 显示标签
            searchLink: '/search/',         // 搜索链接（可选）
            link: 'externalLink',          // 链接字段（可选）
            truncate: 20,                  // 截断长度（可选）
            colorize: true                 // 序列着色（可选）
        }
    ],
    exportColumns: ['name', 'category', 'year']  // 导出字段
}
```

### 主题配置 (theme)

```javascript
theme: {
    colors: [
        '#AEE1D6', '#F6D6AD', '#F7B7A3', '#B5C7ED',
        '#E7B7E8', '#B7E7E1', '#E8D7B7', '#F7E6AD'
    ],
    highlight: '#7D807F',
    dim: 'rgba(180,180,180,0.3)'
}
```

### 功能开关 (features)

```javascript
features: {
    export: true,           // 数据导出功能
    tooltip: true,          // 工具提示
    multiSelect: true,      // 多选筛选
    nodeInteraction: true   // 节点交互
}
```

### 国际化 (i18n)

```javascript
i18n: {
    title: 'Data Dashboard',
    loading: 'Loading data...',
    noData: 'No data available',
    totalRecords: 'Total Records',
    exportButton: 'Export Data',
    resetButton: 'Reset All Filters'
}
```

## 🎯 数据格式要求

插件支持多种数据格式，推荐的JSON结构：

### 简单格式
```json
[
    {
        "year": 2020,
        "category": "Type A",
        "sequence": "ATCGATCG",
        "length": 8,
        "gc_content": 0.5,
        "name": "Sample 1"
    }
]
```

### 嵌套格式
```json
{
    "Sheet1": [
        {
            "Year": 2020,
            "Category": "Type A",
            "Sequence": "ATCGATCG",
            "Length": 8,
            "GC Content": 0.5,
            "Named": "Sample 1"
        }
    ]
}
```

## 🔧 API 参考

### 主要方法

```javascript
const dashboard = new DashboardPlugin(config);

// 初始化插件
await dashboard.init();

// 重置所有筛选
dashboard.resetAllFilters();

// 导出数据
dashboard.exportData();

// 销毁插件
dashboard.destroy();

// 获取字段值
dashboard.getFieldValue(item, fieldKey);

// 处理空值
dashboard.handleEmptyValue(value);
```

### 事件系统

```javascript
// 监听事件
dashboard.on('initialized', () => {
    console.log('Dashboard initialized');
});

dashboard.on('filtersApplied', (data) => {
    console.log(`Showing ${data.filtered} of ${data.total} records`);
});

dashboard.on('dataExported', (data) => {
    console.log(`Exported ${data.count} records`);
});

dashboard.on('destroyed', () => {
    console.log('Dashboard destroyed');
});
```

## 📁 项目结构

```
dashboard-plugin/
├── dashboard-plugin.js           # 主插件文件
├── dashboard-plugin-bundle.js    # 一体化Bundle文件 ⭐
├── modules/                      # 模块化文件
│   ├── data-module.js
│   ├── chart-module.js
│   ├── filter-module.js
│   ├── table-module.js
│   └── ui-module.js
├── examples/                     # 配置示例
│   ├── config-simple.js
│   ├── config-aptamer.js
│   └── config-advanced.js
└── README.md                     # 说明文档
```

## 🌟 使用场景

### 1. 生物信息学数据
- Aptamer序列分析
- 基因表达数据可视化
- 蛋白质结构分析

### 2. 科研数据分析
- 实验结果统计
- 文献数据整理
- 时间序列分析

### 3. 业务数据展示
- 销售数据仪表板
- 用户行为分析
- 产品性能监控

## 🎨 自定义扩展

### 添加新的图表类型

```javascript
// 在ChartModule中扩展
class ChartModule {
    createCustomChart() {
        // 自定义图表实现
    }
}
```

### 自定义筛选逻辑

```javascript
// 在FilterModule中扩展
class FilterModule {
    customFilter(data, criteria) {
        // 自定义筛选逻辑
    }
}
```

## 🔍 故障排除

### 常见问题

1. **数据加载失败**
   - 检查数据文件路径是否正确
   - 确认数据格式是否为有效JSON
   - 检查dataPath配置

2. **图表不显示**
   - 确认已引入Plotly.js
   - 检查容器是否存在
   - 查看浏览器控制台错误信息

3. **字段映射错误**
   - 检查fieldMapping配置
   - 确认原始数据中字段名称
   - 使用浏览器开发工具查看数据结构

### 调试模式

```javascript
// 开启调试信息
const config = {
    // ... 其他配置
    debug: true
};
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请：
1. 查阅本文档
2. 检查示例配置
3. 提交 Issue

---

**Dashboard Plugin** - 让数据可视化变得简单！ 🚀