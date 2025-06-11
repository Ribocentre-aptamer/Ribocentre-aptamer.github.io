# Ribocentre-Aptamer 搜索功能实现文档

本文档详细说明了 Ribocentre-Aptamer 网站中搜索功能的实现逻辑，包括 header 中的搜索功能和主页的 homepageSearch 功能。
后续计划进行减法，现在两者的行为不同。

## 1. 搜索功能架构概述

Ribocentre-Aptamer 网站的搜索功能采用了模块化设计，主要包含两个核心模块：

1. **SearchModule (js/search.js)** - 全站通用的搜索功能模块
2. **homepageSearchModule (js/homepage-main.js)** - 主页特定的搜索功能模块

这两个模块可以根据不同页面的需求独立运行或协同工作。系统会根据当前页面类型自动选择合适的搜索模块。

## 2. 文件依赖关系

### 2.1 Header 搜索功能相关文件

Header 中的搜索功能主要依赖以下文件：

| 文件路径 | 作用 |
|---------|------|
| `js/search.js` | 实现全站通用的搜索功能逻辑 |
| `css/search.css` | 提供搜索功能的样式定义 |
| `js/simple-jekyll-search.min.js` | 提供基于 Jekyll 的搜索引擎功能 |
| `search.json` | 存储网站内容的搜索索引数据 |

### 2.2 Homepage 搜索功能相关文件

主页的搜索功能主要依赖以下文件：

| 文件路径 | 作用 |
|---------|------|
| `js/homepage-main.js` | 包含 homepageSearchModule 实现 |
| `css/search.css` | 提供搜索功能的样式定义 |
| `css/homepage.css` | 包含主页特定的搜索样式 |
| `js/homepage-data.js` | 提供主页搜索需要的数据 |
| `apidata/sequences_cleaned.json` | 提供适配体序列数据用于搜索 |

## 3. 搜索功能实现详解

### 3.1 Header 搜索功能 (SearchModule)

#### 3.1.1 初始化流程

```js
// 在 js/search.js 中
const SearchModule = {
    init() {
        // 获取DOM元素
        this.mainSearchInput = document.getElementById('mainSearch');
        this.searchResultsOverlay = document.getElementById('searchResultsOverlay');
        this.searchResults = document.getElementById('searchResults');
        this.searchResultsList = document.getElementById('searchResultsList');
        this.searchResultsCount = document.getElementById('searchResultsCount');
        
        // 检查页面类型，避免与主页搜索冲突
        const isIndexPage = window.location.pathname === '/' || 
                            window.location.pathname.endsWith('index.html');
        const homepageModuleActive = typeof homepageSearchModule !== 'undefined' && 
                                    homepageSearchModule.mainSearchInput;
        
        // 在特定条件下跳过初始化
        if (isIndexPage && !isFluorescencePage && homepageModuleActive) {
            console.log('SearchModule: 在index页面检测到homepageSearchModule，跳过初始化');
            return;
        }
        
        // 如果页面中没有搜索结果容器，创建一个
        if (!this.searchResultsOverlay || !this.searchResults || !this.searchResultsList || !this.searchResultsCount) {
            this.setupSearchContainer();
        }
        
        // 绑定事件
        this.bindEvents();
        this.bindWindowEvents();
    }
}
```

#### 3.1.2 搜索处理流程

1. **输入监听**：监听搜索框的输入事件，使用防抖处理
2. **搜索执行**：满足条件时执行 `performSearch()` 方法
3. **结果处理**：处理搜索结果并显示
4. **结果展示**：在搜索结果覆盖层中显示结果

```js
// 搜索执行函数
async performSearch() {
    const query = this.mainSearchInput.value.trim();
    if (query.length === 0) return;
    
    // 显示加载状态
    this.searchResultsList.innerHTML = '<div class="search-loading">搜索中...</div>';
    this.searchResultsCount.textContent = '搜索中...';
    this.showSearchResults();
    
    const startTime = performance.now();
    
    try {
        // 获取搜索数据
        const response = await fetch('/search.json');
        if (!response.ok) throw new Error('搜索数据加载失败');
        const data = await response.json();
        
        // 处理搜索结果
        this.allSearchResults = this.processSearchResults(data, query);
        
        // 计算搜索耗时
        const searchTime = ((performance.now() - startTime) / 1000).toFixed(3);
        
        // 渲染搜索结果
        this.renderResults(searchTime);
    } catch (error) {
        console.error('搜索过程出错:', error);
        this.searchResultsList.innerHTML = '<div class="search-error">搜索失败，请稍后重试</div>';
        this.searchResultsCount.textContent = '搜索失败';
    }
}
```

### 3.2 Homepage 搜索功能 (homepageSearchModule)

#### 3.2.1 初始化流程

```js
// 在 js/homepage-main.js 中
const homepageSearchModule = {
    init() {
        // 检查是否在index.html页面，以及是否已有SearchModule模块在运行
        const isIndexPage = window.location.pathname === '/' || 
                           window.location.pathname.endsWith('index.html');
        const searchModuleActive = typeof SearchModule !== 'undefined' && 
                                  SearchModule.mainSearchInput;
        
        // 在index页面，并且SearchModule已激活，则不初始化本模块的搜索功能
        if (isIndexPage && searchModuleActive) {
            console.log('homepageSearchModule: 检测到SearchModule已存在，跳过搜索功能初始化');
            return;
        }
        
        this.mainSearchInput = document.getElementById('mainSearch');
        if (!this.mainSearchInput) return;

        this.setupSearchContainer();
        this.bindEvents();
        this.bindWindowEvents();
    }
}
```

#### 3.2.2 搜索处理流程

1. **输入监听**：监听搜索框的输入事件，使用防抖处理
2. **Hero区域高度固定**：当搜索激活时，固定hero区域高度，避免布局抖动
3. **数据获取**：从配置的数据路径获取搜索数据
4. **结果处理**：处理搜索结果，计算相关性得分
5. **结果展示**：在搜索结果容器中显示结果

```js
// 主页搜索执行函数
async performSearch() {
    const query = this.mainSearchInput.value.trim();
    if (query.length === 0) {
        this.mainSearchResults.style.display = 'none';
        return;
    }
    
    // 显示加载状态
    this.mainSearchResults.innerHTML = '<div style="padding: 20px; text-align: center;">搜索中...</div>';
    this.mainSearchResults.style.display = 'block';
    
    try {
        // 获取数据路径
        const config = window.DASHBOARD_CONFIG || { dataPath: '/apidata/sequences_cleaned.json' };
        const dataPath = config.dataPath;
        
        // 获取搜索数据
        const response = await fetch(dataPath);
        if (!response.ok) throw new Error(`Failed to load data from ${dataPath}`);
        const data = await response.json();
        
        // 处理搜索结果
        this.allSearchResults = this.processSearchResults(data, query);
        
        // 渲染搜索结果
        this.renderResults();
    } catch (error) {
        console.error('搜索过程出错:', error);
        this.mainSearchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: red;">搜索失败，请稍后重试</div>';
    }
}
```

## 4. 关键功能实现

### 4.1 搜索相关性计算

```js
calculateRelevanceScore(item, query) {
    let score = 0;
    const queryLower = query.toLowerCase();
    
    // 标题匹配权重最高
    if (item.title) {
        const titleLower = item.title.toLowerCase();
        if (titleLower === queryLower) score += 100;
        else if (titleLower.startsWith(queryLower)) score += 80;
        else if (titleLower.includes(queryLower)) score += 60;
    }
    
    // 内容匹配权重其次
    if (item.content) {
        const contentLower = item.content.toLowerCase();
        if (contentLower.includes(queryLower)) {
            // 根据匹配位置计算权重，越靠前权重越高
            const pos = contentLower.indexOf(queryLower);
            const posWeight = Math.max(0, 40 - Math.floor(pos / 20));
            score += posWeight;
        }
    }
    
    // 类别匹配权重最低
    if (item.category && item.category.toLowerCase().includes(queryLower)) {
        score += 20;
    }
    
    return score;
}
```

### 4.2 搜索结果高亮显示

```js
highlightKeywords(text, query) {
    if (!text) return '';
    const pattern = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(pattern, '<span class="keyword-highlight">$1</span>');
}
```

### 4.3 Hero区域高度固定

为了防止搜索结果显示时导致页面布局跳动，代码会在搜索激活时固定hero区域高度：

```js
fixHeroHeight() {
    const heroSection = document.querySelector('.hero-section');
    const overviewContainer = document.querySelector('.overview-container');
    
    if (heroSection && !heroSection.classList.contains('search-active')) {
        // 保存原始高度
        this.heroOriginalHeight = heroSection.getBoundingClientRect().height;
        
        // 强制禁用transition并固定高度
        heroSection.style.transition = 'none';
        heroSection.style.height = this.heroOriginalHeight + 'px';
        heroSection.style.minHeight = this.heroOriginalHeight + 'px';
        heroSection.style.maxHeight = this.heroOriginalHeight + 'px';
        heroSection.style.setProperty('--hero-fixed-height', this.heroOriginalHeight + 'px');
        heroSection.classList.add('search-active');
    }
    
    if (overviewContainer && !overviewContainer.classList.contains('search-active')) {
        // 类似处理overview容器
        // ...
    }
}
```

## 5. 模块协同工作方式

### 5.1 模块优先级判断

网站根据当前页面类型和已初始化的模块来决定使用哪个搜索模块：

1. **在主页上**：
   - 如果 `homepageSearchModule` 已初始化，则使用该模块
   - 如果 `homepageSearchModule` 未初始化，则使用 `SearchModule`

2. **在其他页面上**：
   - 始终使用 `SearchModule`

### 5.2 模块互操作性

这两个模块可以在特定情况下互相调用对方的方法：

```js
// 例如，在homepageSearchModule中可以调用SearchModule的方法
if (typeof SearchModule !== 'undefined' && SearchModule.closeSearchResults) {
    SearchModule.closeSearchResults();
}

// 在SearchModule中可以检测homepageSearchModule的存在
if (typeof homepageSearchModule !== 'undefined' && homepageSearchModule.mainSearchInput) {
    // ...相应处理
}
```

## 6. CSS样式实现

搜索功能的样式主要定义在 `css/search.css` 中，包括：

1. **搜索输入框样式**：`.homepage-search-box`, `.homepage-search-input`
2. **搜索结果容器样式**：`.search-results-container`, `.search-results-overlay`
3. **搜索结果项样式**：`.search-result-item`, `.search-result-title`
4. **关键字高亮样式**：`.keyword-highlight`
5. **响应式设计**：针对不同屏幕尺寸的样式调整

## 7. 搜索配置选项

网站提供了全局配置对象来控制搜索行为：

```js
// 在index.html中定义的全局配置
window.SEARCH_CONFIG = {
    disableHeroHeightFix: true, // 是否禁用hero section高度调整
    searchDelay: 300,           // 搜索延迟时间（毫秒）
    minSearchLength: 2          // 最小搜索字符长度
};

window.DASHBOARD_CONFIG = {
    baseurl: '{{ site.baseurl }}',
    dataPath: '{{ site.baseurl }}/apidata/sequences_cleaned.json' // 搜索数据路径
};
```

## 8. 常见问题与解决方案

### 8.1 搜索模块冲突

**问题**：在某些页面上，`SearchModule` 和 `homepageSearchModule` 可能同时初始化，导致冲突。

**解决方案**：
- 每个模块在初始化前检查另一个模块是否已经初始化
- 基于页面类型和特定条件决定哪个模块应该运行
- 在某些特定页面上强制使用某一个模块

### 8.2 搜索结果布局抖动

**问题**：搜索结果显示时可能导致页面布局抖动，特别是在主页的hero区域。

**解决方案**：
- 实现 `fixHeroHeight()` 方法，在搜索激活时固定hero区域高度
- 提供配置选项 `disableHeroHeightFix` 来控制这一行为
- 使用CSS过渡效果使布局变化更平滑

## 9. 搜索功能扩展建议

1. **增加筛选选项**：允许用户按类别、日期等条件筛选搜索结果
2. **添加高级搜索**：实现更复杂的搜索语法，如布尔操作符
3. **搜索历史记录**：保存用户最近的搜索查询
4. **搜索建议**：在用户输入时提供自动完成建议
5. **搜索结果分页**：对大量搜索结果实现分页显示

## 10. 总结

Ribocentre-Aptamer 网站的搜索功能采用了模块化设计，通过 `SearchModule` 和 `homepageSearchModule` 两个核心模块实现了全站和主页的搜索功能。这种设计允许不同页面根据需求使用不同的搜索实现，同时保持了用户体验的一致性。

搜索功能的关键特性包括：
- 防抖处理的实时搜索
- 相关性评分的结果排序
- 关键字高亮显示
- 响应式设计适应不同设备
- 布局固定避免页面抖动

通过这些实现，网站为用户提供了高效、直观的搜索体验，帮助用户快速找到所需的适配体信息。 