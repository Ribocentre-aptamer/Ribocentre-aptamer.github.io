# Sequences Access Buttons - 功能说明文档

## 概述

我们为高级搜索页面和aptamer详情页面实现了序列访问按钮功能，用户可以通过这些按钮快速访问相关的序列数据。

## 功能特点

### 1. 高级搜索页面优化

#### List View 中的按钮
- **位置**: 在搜索结果标签区域
- **触发条件**: 当页面类型结果包含多个aptamer序列时
- **样式**: 绿色渐变按钮，悬浮时变色和轻微上移
- **功能**: 点击跳转到sequences页面，自动过滤显示相关序列

```html
<button class="tag tag-sequences-btn" data-search-query="thrombin">
    <i class="fas fa-dna"></i> 3 Sequences
</button>
```

#### Table View 中的按钮
- **位置**: 在aptamer名称后面
- **样式**: 紧凑的绿色小按钮，显示序列数量
- **功能**: 与List View相同

```html
<button class="multi-aptamer-btn" data-search-query="ATP">
    <i class="fas fa-dna"></i> 5×
</button>
```

### 2. Aptamer详情页面按钮

#### 布局集成方式
- **集成方式**: 直接集成到`aptamer_page.html`布局中
- **位置**: 页面标题和日期信息之后，导航之前
- **样式**: 专业的渐变绿色按钮，带有精美的容器和动画效果

```html
<button class="aptamer-sequences-btn" data-page-title="{{ page.title }}">
    <i class="fas fa-dna"></i>
    <span>View Related Sequences</span>
    <i class="fas fa-external-link-alt"></i>
</button>
```

## 技术实现

### 1. 高级搜索页面 (`js/advanced-search.js`)

#### 按钮生成逻辑
```javascript
// List View
if (item.result_type === 'page' && item.aptamer_count && item.aptamer_count > 1) {
    const searchQuery = this.generateSequenceSearchQuery(item);
    tags.push(`<button class="tag tag-sequences-btn" data-search-query="${searchQuery}">
        <i class="fas fa-dna"></i> ${item.aptamer_count} Sequences
    </button>`);
}

// Table View  
if (item.result_type === 'page' && item.aptamer_count && item.aptamer_count > 1) {
    const searchQuery = this.generateSequenceSearchQuery(item);
    multiBadge = `<button class="multi-aptamer-btn" data-search-query="${searchQuery}">
        <i class="fas fa-dna"></i> ${item.aptamer_count}×
    </button>`;
}
```

#### 搜索查询生成
```javascript
generateSequenceSearchQuery(item) {
    // 1. 优先使用配体信息
    if (item.structured_tags && item.structured_tags['Ligand']) {
        return item.structured_tags['Ligand'];
    }
    
    // 2. 从content中提取配体信息
    if (item.content && item.content.includes('Ligand:')) {
        const ligandMatch = item.content.match(/Ligand:\s*([^|,]+)/i);
        if (ligandMatch && ligandMatch[1]) {
            return ligandMatch[1].trim();
        }
    }
    
    // 3. 从标题中提取关键词
    // 4. 使用类别信息
    // 5. Fallback处理
}
```

#### 事件处理
```javascript
setupSequencesAccessHandlers(container) {
    this.sequencesAccessHandler = (event) => {
        const sequencesBtn = event.target.closest('.tag-sequences-btn');
        const multiAptamerBtn = event.target.closest('.multi-aptamer-btn');
        
        if (!sequencesBtn && !multiAptamerBtn) return;
        
        const btn = sequencesBtn || multiAptamerBtn;
        const searchQuery = btn.getAttribute('data-search-query');
        
        if (searchQuery) {
            const sequencesUrl = `/sequences/?search=${encodeURIComponent(searchQuery)}`;
            window.open(sequencesUrl, '_blank');
        }
    };
    
    container.addEventListener('click', this.sequencesAccessHandler);
}
```

### 2. 通用序列访问助手 (`js/sequences-access-helper.js`)

#### 自动检测逻辑
```javascript
isAptamerDetailsPage() {
    const path = window.location.pathname;
    const title = document.title.toLowerCase();
    const hasAptamerInTitle = title.includes('aptamer') || title.includes('ribocentre');
    
    // 检查meta标签
    const metaTags = document.querySelectorAll('meta[name="keywords"], meta[name="description"]');
    let hasAptamerMeta = false;
    metaTags.forEach(tag => {
        if (tag.content && tag.content.toLowerCase().includes('aptamer')) {
            hasAptamerMeta = true;
        }
    });
    
    return hasAptamerInTitle || hasAptamerMeta || path.includes('aptamer') || 
           document.querySelector('.aptamer-content, .post-content, .content');
}
```

#### 查询提取逻辑
```javascript
extractSearchQueryFromPage() {
    // 1. 从页面标题提取
    // 2. 从页面内容提取配体信息
    // 3. 从URL路径提取
    // 4. Fallback处理
}
```

## CSS样式

### 高级搜索按钮样式

```css
/* List View 序列访问按钮 */
.tag-sequences-btn {
    background: #28a745 !important;
    color: white !important;
    border: none !important;
    padding: 6px 12px !important;
    border-radius: 15px !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 4px !important;
    box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2) !important;
}

.tag-sequences-btn:hover {
    background: #218838 !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3) !important;
}

/* Table View 多aptamer按钮 */
.multi-aptamer-btn {
    display: inline-block !important;
    background: #28a745 !important;
    color: #fff !important;
    border: none !important;
    border-radius: 10px !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    padding: 3px 8px !important;
    margin-left: 4px !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 1px 3px rgba(40, 167, 69, 0.2) !important;
}

.multi-aptamer-btn:hover {
    background: #218838 !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 2px 6px rgba(40, 167, 69, 0.3) !important;
}
```

### 详情页面按钮样式

```css
.sequences-access-container {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #28a745;
}

.sequences-access-btn {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
    color: white !important;
    border: none !important;
    padding: 12px 24px !important;
    border-radius: 25px !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3) !important;
    text-transform: uppercase !important;
    letter-spacing: 0.5px !important;
}

.sequences-access-btn:hover {
    background: linear-gradient(135deg, #218838 0%, #1abc9c 100%) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4) !important;
}
```

## 使用方法

### 自动集成
1. **高级搜索页面**: 脚本自动为多序列页面结果添加访问按钮
2. **Aptamer详情页面**: 按钮直接集成到`aptamer_page.html`布局中，自动显示

### 工作原理
- 高级搜索页面的按钮通过JavaScript动态生成
- Aptamer页面的按钮通过Jekyll布局模板直接嵌入HTML
- 事件处理器统一管理所有按钮的点击行为

## 功能流程

1. **初始化**: 页面加载时设置事件监听器
2. **布局渲染**: Jekyll模板直接在HTML中生成按钮
3. **用户交互**: 用户点击按钮触发事件处理器
4. **查询提取**: 从页面标题提取合适的搜索关键词
5. **页面跳转**: 在新窗口打开sequences页面，传递搜索参数
6. **结果显示**: sequences页面自动过滤并显示相关序列

## 扩展性

### 添加新的按钮类型
可以通过修改`setupSequencesAccessHandlers`方法来支持新的按钮类型：

```javascript
const newButtonType = event.target.closest('.new-button-class');
if (!sequencesBtn && !multiAptamerBtn && !newButtonType) return;

const btn = sequencesBtn || multiAptamerBtn || newButtonType;
```

### 自定义搜索查询生成
可以扩展`generateSequenceSearchQuery`方法以支持更复杂的查询生成逻辑。

### 样式自定义
所有样式都使用了`!important`以确保优先级，可以通过修改CSS变量或类名来自定义外观。

## 注意事项

1. **依赖**: 需要Font Awesome图标库支持
2. **兼容性**: 使用了现代JavaScript特性，需要现代浏览器支持
3. **性能**: 使用了事件委托来优化性能
4. **响应式**: 支持移动设备的响应式设计 