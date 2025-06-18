/**
 * Advanced Search Page Functionality Module
 * Uses the same data source as homepage search
 */

class AdvancedSearchModule {
    constructor() {
        this.searchData = [];
        this.filteredData = [];
        this.currentPage = 1;
        this.itemsPerPageList = 5;
        this.itemsPerPageTable = 20;
        this.itemsPerPage = this.itemsPerPageList; // 默认list
        this.searchTimeout = null;
        this.currentFilters = {};
        this.currentSearchType = 'all';
        this.currentView = 'list';
        this.masonryLoaded = false;
        this.masonryPage = 1;
        this.masonryPageSize = 30;
        this.masonryData = [];
        
        this.init();
    }

    async init() {
        try {
            await this.loadData();
            this.setupEventListeners();
            this.setupFilters();
            console.log('Advanced Search Module initialized');
        } catch (error) {
            console.error('Failed to initialize advanced search:', error);
        }
    }

    async loadData() {
        try {
            // Use the same search.json file as homepage search
            const potentialPaths = [
                `${window.location.origin}${window.DASHBOARD_CONFIG?.baseurl || ''}/search.json`,
                './search.json',
                '../search.json',
                '/search.json',
                'search.json'
            ].filter(Boolean);

            let response = null;
            let successfulPath = null;

            // Try each path until one works
            for (const path of potentialPaths) {
                try {
                    console.log(`Attempting to load data from: ${path}`);
                    response = await fetch(path);
                    if (response.ok) {
                        successfulPath = path;
                        break;
                    }
                } catch (error) {
                    console.warn(`Failed to load from ${path}:`, error.message);
                    continue;
                }
            }

            if (!response || !response.ok) {
                throw new Error(`Failed to load data from any path. Last status: ${response?.status}`);
            }

            const text = await response.text();
            
            // Try to parse JSON, handling possible Jekyll template issues
            try {
                this.searchData = JSON.parse(text);
            } catch (e) {
                // Try to clean the text if it has template markers
                const jsonStart = text.indexOf('[');
                if (jsonStart !== -1) {
                    const cleanedText = text.substring(jsonStart);
                    this.searchData = JSON.parse(cleanedText);
                } else {
                    throw e;
                }
            }
            
            console.log(`Successfully loaded ${this.searchData.length} records from: ${successfulPath}`);
            
            // Also load sequences_cleaned.json data and merge into searchData
            try {
                const seqRes = await fetch('/apidata/sequences_cleaned.json');
                if (seqRes.ok) {
                    const seqJson = await seqRes.json();
                    if (seqJson && Array.isArray(seqJson.Sheet1) && typeof SearchUtils.transformSequenceRecord === 'function') {
                        const sequenceData = seqJson.Sheet1.map(SearchUtils.transformSequenceRecord);
                        this.searchData.push(...sequenceData);
                        console.log(`Added ${sequenceData.length} sequence records to search data`);
                    }
                }
            } catch (e) { 
                console.warn('Failed to load sequences data for advanced search:', e); 
            }
        } catch (error) {
            console.error('Error loading search data:', error);
            console.log('Using mock data as fallback');
            // Use mock data as fallback
            this.searchData = this.generateMockData();
        }
    }

    generateMockData() {
        // Generate mock data based on aptamer research
        const mockData = [];
        const aptamerTypes = [
            'ATP binding aptamer',
            'Thrombin aptamer',
            'PDGF aptamer', 
            'Lysozyme aptamer',
            'Cocaine aptamer',
            'Immunoglobulin E aptamer',
            'Vascular endothelial growth factor aptamer',
            'Protein kinase C aptamer',
            'Human α-thrombin aptamer',
            'Adenosine aptamer'
        ];
        
        const targets = ['ATP', 'Thrombin', 'PDGF', 'Lysozyme', 'Cocaine', 'IgE', 'VEGF', 'PKC', 'α-thrombin', 'Adenosine'];
        const categories = ['aptamer', 'structure', 'application', 'selex', 'fluorescence'];

        for (let i = 0; i < 100; i++) {
            const randomIndex = i % aptamerTypes.length;
            const randomName = aptamerTypes[randomIndex];
            const randomTarget = targets[randomIndex];
            
            mockData.push({
                title: `${randomName} ${Math.floor(i/10) + 1}`,
                content: `This is a comprehensive study of ${randomName} including structural analysis, binding affinity measurements, and potential therapeutic applications. The aptamer shows high specificity for ${randomTarget} with excellent binding characteristics.`,
                category: categories[Math.floor(Math.random() * categories.length)],
                tags: `${randomTarget}, aptamer, binding, structural analysis`,
                url: `/aptamer/${randomName.toLowerCase().replace(/\s+/g, '-')}-${i+1}/`,
                date: `${2000 + Math.floor(Math.random() * 24)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
                // Additional metadata for aptamers
                target: randomTarget,
                sequence_length: 20 + Math.floor(Math.random() * 80),
                gc_content: 30 + Math.floor(Math.random() * 40),
                kd_value: (Math.random() * 1000).toFixed(2),
                selection_rounds: Math.floor(Math.random() * 15) + 5,
                structure_type: Math.random() > 0.5 ? 'DNA' : 'RNA'
            });
        }
        return mockData;
    }

    setupEventListeners() {
        // Main search input
        const searchInput = document.getElementById('mainSearchInput');
        const clearBtn = document.getElementById('clearSearch');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const value = e.target.value.trim();
                clearBtn.classList.toggle('visible', value.length > 0);
                
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    this.performSearch(value);
                }, 300);
            });

            searchInput.addEventListener('focus', () => {
                this.showSuggestions();
            });

            searchInput.addEventListener('blur', () => {
                setTimeout(() => this.hideSuggestions(), 200);
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                clearBtn.classList.remove('visible');
                this.clearSearch();
            });
        }

        // Search type buttons
        document.querySelectorAll('.search-type-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.search-type-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentSearchType = btn.dataset.type;
                this.performSearch(searchInput.value);
            });
        });

        // Example tag click
        document.querySelectorAll('.example-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const example = tag.dataset.example;
                searchInput.value = example;
                clearBtn.classList.add('visible');
                this.performSearch(example);
            });
        });

        // Filter controls
        this.setupFilterControls();

        // Result controls
        this.setupResultControls();

        // Floating buttons
        this.setupFloatingButtons();

        const searchCard = document.querySelector('.search-card');
        const filterCard = document.querySelector('.filter-card');
        const resultsList = document.getElementById('resultsList');
    }

    setupFilterControls() {
        const toggleBtn = document.getElementById('toggleFilters');
        const filtersContent = document.getElementById('filtersContent');
        const resetBtn = document.getElementById('resetFilters');
        const applyBtn = document.getElementById('applyFilters');
        const searchInput = document.getElementById('mainSearchInput');
        const searchCard = document.querySelector('.search-card');
        const filterCard = document.querySelector('.filter-card');
        const resultsCard = document.querySelector('.results-card');
        const filterHeader = document.querySelector('.filter-card .filter-header');

        let lastScrollTop = 0;
        let isScrolling = false;
        let scrollTimeout;
        let isSliding = false;

        function updateStickyState() {
            const isSearchFocused = searchCard.classList.contains('focused');
            const isFilterOpen = !filtersContent.classList.contains('collapsed');
            
            if (isSearchFocused) {
                searchCard.classList.add('sticky');
                if (isFilterOpen) {
                    filterCard.classList.add('sticky');
                    resultsCard.classList.add('sticky');
                }
            } else {
                searchCard.classList.remove('sticky');
                filterCard.classList.remove('sticky');
                resultsCard.classList.remove('sticky');
            }
        }

        function handleScroll() {
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(() => {
                    const st = window.pageYOffset || document.documentElement.scrollTop;
                    const searchCardRect = searchCard.getBoundingClientRect();
                    const filterCardRect = filterCard.getBoundingClientRect();
                    
                    // 当搜索框和过滤器完全滚出视图时
                    if (st > lastScrollTop && searchCardRect.bottom < 0 && !isSliding) {
                        isSliding = true;
                        searchCard.classList.add('slide-left');
                        filterCard.classList.add('slide-left');
                        
                        // 动画结束后移除类
                        setTimeout(() => {
                            searchCard.classList.remove('slide-left');
                            filterCard.classList.remove('slide-left');
                            isSliding = false;
                        }, 800);
                    } 
                    // 当回到顶部时
                    else if (st < lastScrollTop && st < 100) {
                        searchCard.classList.remove('sticky');
                        filterCard.classList.remove('sticky');
                        resultsCard.classList.remove('sticky');
                    }
                    // 正常滚动时的吸顶效果
                    else if (st > lastScrollTop && searchCardRect.top < 0) {
                        searchCard.classList.add('sticky');
                        if (!filtersContent.classList.contains('collapsed')) {
                            filterCard.classList.add('sticky');
                            resultsCard.classList.add('sticky');
                        }
                    }
                    
                    lastScrollTop = st <= 0 ? 0 : st;
                    isScrolling = false;
                });
            }
        }

        if (toggleBtn && filtersContent) {
            toggleBtn.addEventListener('click', () => {
                // 添加水润效果
                filterCard.classList.add('water-ripple');
                setTimeout(() => {
                    filterCard.classList.remove('water-ripple');
                }, 1200);

                filtersContent.classList.toggle('collapsed');
                const icon = toggleBtn.querySelector('i');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
                
                updateStickyState();
            });
        }

        if (searchInput && searchCard) {
            searchInput.addEventListener('focus', () => {
                searchCard.classList.add('focused');
                searchCard.classList.add('water-ripple');
                setTimeout(() => {
                    searchCard.classList.remove('water-ripple');
                }, 1200);
                updateStickyState();
            });

            searchInput.addEventListener('blur', () => {
                searchCard.classList.remove('focused');
                updateStickyState();
            });
        }

        // 监听滚动事件
        window.addEventListener('scroll', handleScroll);

        // 其他事件监听器保持不变
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetFilters();
            });
        }

        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                this.applyFilters();
            });
        }
    }

    setupResultControls() {
        // Sort selection
        const sortSelect = document.getElementById('sortBy');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                this.sortResults(sortSelect.value);
            });
        }

        // View switch
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentView = btn.dataset.view;
                this.renderResults();
            });
        });

        // Export button
        const exportBtn = document.getElementById('exportResults');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportResults();
            });
        }
    }

    setupFloatingButtons() {
        const backToTop = document.getElementById('backToTop');
        const saveSearch = document.getElementById('saveSearch');
        const shareSearch = document.getElementById('shareSearch');

        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Show/hide back to top button
            window.addEventListener('scroll', () => {
                backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
            });
        }

        if (saveSearch) {
            saveSearch.addEventListener('click', () => {
                this.saveCurrentSearch();
            });
        }

        if (shareSearch) {
            shareSearch.addEventListener('click', () => {
                this.shareCurrentSearch();
            });
        }
    }

    async performSearch(query) {
        if (!query) {
            this.showPlaceholder();
            return;
        }

        this.showLoadingState();

        // Simulated search delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const startTime = performance.now();

        // Use shared utility to process results for consistency
        let results = SearchUtils.processResults(this.searchData, query);

        // Apply search type filter
        if (this.currentSearchType !== 'all') {
            results = this.filterByType(results, this.currentSearchType);
        }

        // Apply other filter conditions
        results = this.applyCurrentFilters(results);

        const endTime = performance.now();
        const searchTime = ((endTime - startTime) / 1000).toFixed(3);

        this.filteredData = results;
        this.currentPage = 1;
        
        this.showResults(results, searchTime);
    }

    filterByType(data, type) {
        switch (type) {
            case 'aptamer':
                return data.filter(item => 
                    (item.category && item.category.includes('aptamer')) ||
                    (item.title && item.title.toLowerCase().includes('aptamer')) ||
                    (item.tags && item.tags.toLowerCase().includes('aptamer'))
                );
            case 'structure':
                return data.filter(item => 
                    (item.category && item.category.includes('structure')) ||
                    (item.content && item.content.toLowerCase().includes('structure')) ||
                    (item.tags && item.tags.toLowerCase().includes('structure'))
                );
            case 'selex':
                return data.filter(item => 
                    (item.category && item.category.includes('selex')) ||
                    (item.content && item.content.toLowerCase().includes('selex')) ||
                    (item.tags && item.tags.toLowerCase().includes('selex'))
                );
            case 'application':
                return data.filter(item => 
                    (item.category && item.category.includes('application')) ||
                    (item.content && item.content.toLowerCase().includes('application')) ||
                    (item.tags && item.tags.toLowerCase().includes('therapeutic'))
                );
            case 'fluorescence':
                return data.filter(item => 
                    (item.category && item.category.includes('fluorescence')) ||
                    (item.content && item.content.toLowerCase().includes('fluorescence')) ||
                    (item.tags && item.tags.toLowerCase().includes('fluorescence'))
                );
            default:
                return data;
        }
    }

    applyCurrentFilters(data) {
        let filtered = [...data];

        // Year filter (extract from date field)
        const yearFrom = document.getElementById('yearFrom')?.value;
        const yearTo = document.getElementById('yearTo')?.value;
        if (yearFrom || yearTo) {
            filtered = filtered.filter(item => {
                const year = item.date ? parseInt(item.date.split('-')[0]) : 0;
                return (!yearFrom || year >= parseInt(yearFrom)) && 
                       (!yearTo || year <= parseInt(yearTo));
            });
        }

        // Sequence length filter
        const lengthFrom = document.getElementById('lengthFrom')?.value;
        const lengthTo = document.getElementById('lengthTo')?.value;
        if (lengthFrom || lengthTo) {
            filtered = filtered.filter(item => {
                const length = item.sequence_length || 0;
                return (!lengthFrom || length >= parseInt(lengthFrom)) && 
                       (!lengthTo || length <= parseInt(lengthTo));
            });
        }

        // GC content filter
        const gcFrom = document.getElementById('gcFrom')?.value;
        const gcTo = document.getElementById('gcTo')?.value;
        if (gcFrom || gcTo) {
            filtered = filtered.filter(item => {
                const gc = item.gc_content || 0;
                return (!gcFrom || gc >= parseFloat(gcFrom)) && 
                       (!gcTo || gc <= parseFloat(gcTo));
            });
        }

        // Target type filter
        const targetType = document.getElementById('targetType')?.value;
        if (targetType) {
            filtered = filtered.filter(item => 
                item.tags && item.tags.toLowerCase().includes(targetType.toLowerCase())
            );
        }

        // Application field filter
        const applicationField = document.getElementById('applicationField')?.value;
        if (applicationField) {
            filtered = filtered.filter(item => 
                item.content && item.content.toLowerCase().includes(applicationField.toLowerCase())
            );
        }

        // Affinity filter (using kd_value)
        const affinityRange = document.getElementById('affinityRange')?.value;
        if (affinityRange) {
            filtered = filtered.filter(item => {
                const kd = parseFloat(item.kd_value) || 0;
                switch (affinityRange) {
                    case 'pM': return kd < 1;
                    case 'nM': return kd >= 1 && kd < 1000;
                    case 'μM': return kd >= 1000 && kd < 1000000;
                    case 'mM': return kd >= 1000000;
                    default: return true;
                }
            });
        }

        return filtered;
    }

    sortResults(sortBy) {
        if (!this.filteredData.length) return;

        this.filteredData.sort((a, b) => {
            switch (sortBy) {
                case 'year':
                    const yearA = a.date ? parseInt(a.date.split('-')[0]) : 0;
                    const yearB = b.date ? parseInt(b.date.split('-')[0]) : 0;
                    return yearB - yearA;
                case 'length':
                    return (b.sequence_length || 0) - (a.sequence_length || 0);
                case 'gc-content':
                    return (b.gc_content || 0) - (a.gc_content || 0);
                case 'affinity':
                    const kdA = a.kd_value ? parseFloat(a.kd_value) : Infinity;
                    const kdB = b.kd_value ? parseFloat(b.kd_value) : Infinity;
                    return kdA - kdB;
                case 'relevance':
                default:
                    return 0; // Keep original order
            }
        });

        this.renderResults();
    }

    showResults(results, searchTime) {
        const resultsHeader = document.getElementById('resultsHeader');
        const resultsCount = document.getElementById('resultsCount');
        const searchTimeSpan = document.getElementById('searchTime');

        // Hide placeholder and loading state
        this.hideLoadingState();
        this.hidePlaceholder();

        // Show results header
        if (resultsHeader) {
            resultsHeader.style.display = 'flex';
        }

        if (resultsCount) {
            resultsCount.textContent = `Found ${results.length} results`;
        }

        if (searchTimeSpan) {
            searchTimeSpan.textContent = `in ${searchTime} seconds`;
        }

        this.renderResults();
        this.setupPagination();
    }

    renderResults() {
        const resultsList = document.getElementById('resultsList');
        if (!resultsList) return;

        let start, end, pageData;
        switch (this.currentView) {
            case 'grid':
                // 瀑布流无限加载，不渲染分页
                if (!this.masonryLoaded) {
                    this.masonryLoaded = true;
                    this.masonryPage = 1;
                    this.masonryPageSize = 30;
                    this.masonryData = this.filteredData.slice(0, this.masonryPage * this.masonryPageSize);
                    this.renderGridView(resultsList, this.masonryData);
                    window.addEventListener('scroll', this.handleMasonryScroll.bind(this));
                } else {
                    this.renderGridView(resultsList, this.masonryData);
                }
                // 隐藏分页，显示进度条
                const paginationContainer = document.getElementById('paginationContainer');
                if (paginationContainer) paginationContainer.style.display = 'none';
                this.showMasonryProgressBar();
                break;
            case 'table':
                window.removeEventListener('scroll', this.handleMasonryScroll);
                this.hideMasonryProgressBar();
                this.itemsPerPage = this.itemsPerPageTable;
                start = (this.currentPage - 1) * this.itemsPerPage;
                end = start + this.itemsPerPage;
                pageData = this.filteredData.slice(start, end);
                this.renderTableView(resultsList, pageData);
                this.setupPagination();
                break;
            case 'list':
            default:
                window.removeEventListener('scroll', this.handleMasonryScroll);
                this.hideMasonryProgressBar();
                this.itemsPerPage = this.itemsPerPageList;
                start = (this.currentPage - 1) * this.itemsPerPage;
                end = start + this.itemsPerPage;
                pageData = this.filteredData.slice(start, end);
                this.renderListView(resultsList, pageData);
                this.setupPagination();
                break;
        }
    }

    showMasonryProgressBar() {
        const bar = document.getElementById('masonryProgressBar');
        if (bar && this.filteredData.length > this.masonryPageSize) {
            bar.style.display = 'flex';
            this.updateMasonryProgressBar();
        }
    }

    hideMasonryProgressBar() {
        const bar = document.getElementById('masonryProgressBar');
        if (bar) {
            bar.style.display = 'none';
        }
    }

    handleMasonryScroll() {
        if (this.currentView !== 'grid') return;
        
        // 计算滚动进度 - 考虑页面总高度和视窗位置
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollProgress = scrollTop / (documentHeight - windowHeight);
        
        // 基于滚动位置的智能加载
        if ((windowHeight + scrollTop) >= (documentHeight - 200)) {
            // 快到底部时加载更多
            this.masonryPage++;
            const moreData = this.filteredData.slice(0, this.masonryPage * this.masonryPageSize);
            if (moreData.length > this.masonryData.length) {
                this.masonryData = moreData;
                const resultsList = document.getElementById('resultsList');
                this.renderGridView(resultsList, this.masonryData);
            }
        }
        
        // 实时更新进度条 - 传递滚动进度用于更精确的计算
        this.updateMasonryProgressBar(scrollProgress);
    }

    updateMasonryProgressBar(scrollProgress = 0) {
        const bar = document.getElementById('masonryProgressBar');
        const inner = document.getElementById('masonryProgressInner');
        if (!bar || !inner) return;
        
        const total = this.filteredData.length;
        const loaded = this.masonryData.length;
        
        // 如果数据量小于一页，不显示进度条
        if (total <= this.masonryPageSize) {
            bar.style.display = 'none';
            return;
        }
        
        // 多维度进度计算
        const dataLoadProgress = total > 0 ? (loaded / total) : 0;
        const scrollWeight = Math.min(scrollProgress * 1.2, 1); // 滚动权重，略微放大
        
        // 综合进度：70% 基于数据加载，30% 基于滚动位置
        const combinedProgress = (dataLoadProgress * 0.7) + (scrollWeight * 0.3);
        const finalProgress = Math.min(combinedProgress, 1);
        
        // 进度条高度计算 - 使用缓动函数
        const barHeight = 320; // 进度条总高度
        const minHeight = 8; // 最小高度
        const maxHeight = barHeight - 4; // 最大高度，留出边距
        
        // 使用缓动函数让进度条动画更自然
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(finalProgress);
        
        // 计算最终高度
        const progressHeight = Math.max(minHeight, Math.round(maxHeight * easedProgress));
        
        // 渐变动画更新
        const currentHeight = parseInt(inner.style.height) || minHeight;
        const heightDiff = progressHeight - currentHeight;
        
        if (Math.abs(heightDiff) > 2) {
            // 使用CSS transition实现平滑动画
            inner.style.transition = 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            inner.style.height = progressHeight + 'px';
        } else {
            // 微小变化直接设置，避免不必要的动画
            inner.style.transition = 'none';
            inner.style.height = progressHeight + 'px';
        }
        
        // 根据进度调整进度条颜色渐变
        const hue = 240 + (finalProgress * 60); // 从紫色(300)到蓝色(240)
        const saturation = 60 + (finalProgress * 30); // 饱和度递增
        const lightness = 50 + (finalProgress * 20); // 亮度递增
        
        inner.style.background = `linear-gradient(180deg, 
            hsl(${hue}, ${saturation}%, ${lightness}%) 0%, 
            hsl(${hue - 20}, ${saturation + 10}%, ${lightness - 15}%) 100%)`;
        
        // 进度条阴影效果随进度增强
        const shadowIntensity = 0.2 + (finalProgress * 0.3);
        inner.style.boxShadow = `0 0 ${8 + finalProgress * 4}px hsla(${hue}, ${saturation}%, ${lightness}%, ${shadowIntensity})`;
        
        // 显示进度条
        bar.style.display = 'flex';
        
        // 如果完全加载完毕，添加完成效果
        if (loaded >= total && finalProgress >= 0.98) {
            setTimeout(() => {
                inner.style.background = 'linear-gradient(180deg, #10b981 0%, #059669 100%)';
                inner.style.boxShadow = '0 0 12px rgba(16, 185, 129, 0.4)';
                
                // 2秒后恢复原色
                setTimeout(() => {
                    inner.style.background = `linear-gradient(180deg, 
                        hsl(${hue}, ${saturation}%, ${lightness}%) 0%, 
                        hsl(${hue - 20}, ${saturation + 10}%, ${lightness - 15}%) 100%)`;
                    inner.style.boxShadow = `0 0 ${8 + finalProgress * 4}px hsla(${hue}, ${saturation}%, ${lightness}%, ${shadowIntensity})`;
                }, 2000);
            }, 300);
        }
    }

    renderListView(container, data) {
        const html = data.map(item => `
            <div class="result-item-list">
                <div class="result-header">
                    <h3 class="result-title">
                        <a href="${item.url}" target="_blank">${item.title || 'Unknown Title'}</a>
                    </h3>
                    <div class="result-tags">
                        ${item.category ? `<span class="tag tag-type">${item.category}</span>` : ''}
                        ${item.tags ? `<span class="tag tag-tags">${item.tags.split(',')[0]}</span>` : ''}
                    </div>
                </div>
                <div class="result-meta">
                    <span class="meta-item"><i class="fas fa-bullseye"></i> Target: ${item.target || 'Unknown'}</span>
                    <span class="meta-item"><i class="fas fa-calendar"></i> Date: ${item.date || 'Unknown'}</span>
                    <span class="meta-item"><i class="fas fa-ruler"></i> Length: ${item.sequence_length || 'Unknown'} bp</span>
                    <span class="meta-item"><i class="fas fa-percentage"></i> GC: ${item.gc_content || 'Unknown'}%</span>
                </div>
                <p class="result-description">${this.truncateText(item.content || 'No description available', 200)}</p>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    renderGridView(container, data) {
        // 使用瀑布流布局
        const html = `
            <div class="results-masonry">
                ${data.map(item => `
                    <div class="result-item-masonry">
                        <div class="masonry-card">
                            <div class="card-header-masonry">
                                <h4 class="card-title-masonry">${this.truncateText(item.title || 'Unknown Title', 50)}</h4>
                                <div class="card-year">${item.date ? item.date.split('-')[0] : 'Unknown'}</div>
                            </div>
                            <div class="card-body">
                                <div class="card-meta">
                                    <div class="meta-row">
                                        <span class="meta-label">Target:</span>
                                        <span class="meta-value">${item.target || 'Unknown'}</span>
                                    </div>
                                    <div class="meta-row">
                                        <span class="meta-label">Length:</span>
                                        <span class="meta-value">${item.sequence_length || 'Unknown'} bp</span>
                                    </div>
                                    <div class="meta-row">
                                        <span class="meta-label">GC Content:</span>
                                        <span class="meta-value">${item.gc_content || 'Unknown'}%</span>
                                    </div>
                                    <div class="meta-row">
                                        <span class="meta-label">Category:</span>
                                        <span class="meta-value">${item.category || 'Unknown'}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="${item.url}" target="_blank" class="btn-view-details">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.innerHTML = html;
    }

    renderTableView(container, data) {
        const html = `
            <div class="table-responsive">
                <table class="results-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Target</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Length (bp)</th>
                            <th>GC Content (%)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(item => `
                            <tr>
                                <td class="table-name">${this.truncateText(item.title || 'Unknown', 40)}</td>
                                <td>${item.target || 'Unknown'}</td>
                                <td>
                                    ${item.category ? `<span class="table-tag">${item.category}</span>` : 'Unknown'}
                                </td>
                                <td>${item.date ? item.date.split('-')[0] : 'Unknown'}</td>
                                <td>${item.sequence_length || 'Unknown'}</td>
                                <td>${item.gc_content || 'Unknown'}</td>
                                <td>
                                    <a href="${item.url}" target="_blank" class="btn-small">
                                        Details
                                    </a>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        container.innerHTML = html;
    }

    setupPagination() {
        const totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
        const paginationContainer = document.getElementById('paginationContainer');
        const pageNumbers = document.getElementById('pageNumbers');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (totalPages <= 1) {
            if (paginationContainer) {
                paginationContainer.style.display = 'none';
            }
            return;
        }

        if (paginationContainer) {
            paginationContainer.style.display = 'flex';
        }

        // Update button states
        if (prevBtn) {
            prevBtn.disabled = this.currentPage <= 1;
            prevBtn.onclick = () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.renderResults();
                    this.setupPagination();
                }
            };
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentPage >= totalPages;
            nextBtn.onclick = () => {
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.renderResults();
                    this.setupPagination();
                }
            };
        }

        // Generate page numbers
        if (pageNumbers) {
            const pageHtml = [];
            const startPage = Math.max(1, this.currentPage - 2);
            const endPage = Math.min(totalPages, this.currentPage + 2);

            if (startPage > 1) {
                pageHtml.push(`<span class="page-number" onclick="advancedSearch.goToPage(1)">1</span>`);
                if (startPage > 2) {
                    pageHtml.push(`<span class="page-ellipsis">...</span>`);
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                const activeClass = i === this.currentPage ? 'active' : '';
                pageHtml.push(`<span class="page-number ${activeClass}" onclick="advancedSearch.goToPage(${i})">${i}</span>`);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageHtml.push(`<span class="page-ellipsis">...</span>`);
                }
                pageHtml.push(`<span class="page-number" onclick="advancedSearch.goToPage(${totalPages})">${totalPages}</span>`);
            }

            pageNumbers.innerHTML = pageHtml.join('');
        }
    }

    goToPage(page) {
        this.currentPage = page;
        this.renderResults();
        this.setupPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showPlaceholder() {
        document.getElementById('searchPlaceholder')?.style.setProperty('display', 'block');
        document.getElementById('resultsHeader')?.style.setProperty('display', 'none');
        document.getElementById('paginationContainer')?.style.setProperty('display', 'none');
        document.getElementById('resultsList').innerHTML = '';
    }

    hidePlaceholder() {
        document.getElementById('searchPlaceholder')?.style.setProperty('display', 'none');
    }

    showLoadingState() {
        document.getElementById('loadingState')?.style.setProperty('display', 'block');
        this.hidePlaceholder();
    }

    hideLoadingState() {
        document.getElementById('loadingState')?.style.setProperty('display', 'none');
    }

    clearSearch() {
        this.filteredData = [];
        this.currentPage = 1;
        this.showPlaceholder();
    }

    resetFilters() {
        // Reset all filter inputs
        document.getElementById('yearFrom').value = '';
        document.getElementById('yearTo').value = '';
        document.getElementById('lengthFrom').value = '';
        document.getElementById('lengthTo').value = '';
        document.getElementById('gcFrom').value = '';
        document.getElementById('gcTo').value = '';
        document.getElementById('targetType').value = '';
        document.getElementById('applicationField').value = '';
        document.getElementById('affinityRange').value = '';

        // Re-execute search
        const searchInput = document.getElementById('mainSearchInput');
        if (searchInput && searchInput.value) {
            this.performSearch(searchInput.value);
        }
    }

    applyFilters() {
        const searchInput = document.getElementById('mainSearchInput');
        if (searchInput && searchInput.value) {
            this.performSearch(searchInput.value);
        }
    }

    viewDetails(title) {
        // Find the item and open its URL
        const item = this.filteredData.find(item => item.title === title);
        if (item && item.url) {
            window.open(item.url, '_blank');
        } else {
            alert(`View details for ${title} - feature to be implemented`);
        }
    }

    saveCurrentSearch() {
        // Save current search state
        const searchState = {
            query: document.getElementById('mainSearchInput').value,
            type: this.currentSearchType,
            filters: this.getCurrentFilters(),
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('savedSearch', JSON.stringify(searchState));
        alert('Search saved successfully!');
    }

    shareCurrentSearch() {
        // Share current search
        const searchParams = new URLSearchParams();
        const query = document.getElementById('mainSearchInput').value;
        
        if (query) searchParams.set('q', query);
        if (this.currentSearchType !== 'all') searchParams.set('type', this.currentSearchType);
        
        const filters = this.getCurrentFilters();
        Object.entries(filters).forEach(([key, value]) => {
            if (value) searchParams.set(key, value);
        });

        const shareUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Ribocentre-Aptamer Search Results',
                url: shareUrl
            });
        } else {
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Search link copied to clipboard!');
            });
        }
    }

    getCurrentFilters() {
        return {
            yearFrom: document.getElementById('yearFrom')?.value,
            yearTo: document.getElementById('yearTo')?.value,
            lengthFrom: document.getElementById('lengthFrom')?.value,
            lengthTo: document.getElementById('lengthTo')?.value,
            gcFrom: document.getElementById('gcFrom')?.value,
            gcTo: document.getElementById('gcTo')?.value,
            targetType: document.getElementById('targetType')?.value,
            applicationField: document.getElementById('applicationField')?.value,
            affinityRange: document.getElementById('affinityRange')?.value
        };
    }

    exportResults() {
        if (!this.filteredData.length) {
            alert('No data to export');
            return;
        }

        // Create CSV content
        const headers = ['Title', 'Target', 'Category', 'Date', 'Length', 'GC Content', 'Tags', 'URL'];
        const csvContent = [
            headers.join(','),
            ...this.filteredData.map(item => [
                `"${(item.title || '').replace(/"/g, '""')}"`,
                `"${(item.target || '').replace(/"/g, '""')}"`,
                `"${(item.category || '').replace(/"/g, '""')}"`,
                item.date || '',
                item.sequence_length || '',
                item.gc_content || '',
                `"${(item.tags || '').replace(/"/g, '""')}"`,
                item.url || ''
            ].join(','))
        ].join('\n');

        // 下载文件
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `aptamer_search_results_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    showSuggestions() {
        const suggestions = document.getElementById('searchSuggestions');
        const searchInput = document.getElementById('mainSearchInput');
        
        if (!suggestions || !searchInput) return;

        const query = searchInput.value.trim().toLowerCase();
        if (query.length < 2) {
            suggestions.style.display = 'none';
            return;
        }

        // 使用统一的搜索逻辑获取建议列表
        const suggestionsList = SearchUtils.processResults(this.searchData, query)
            .slice(0, 5)
            .map(item => ({
                title: item.title,
                category: item.category,
                url: item.url
            }));

        if (suggestionsList.length > 0) {
            const html = suggestionsList.map(item => `
                <div class="suggestion-item" data-url="${item.url}">
                    <div class="suggestion-title">${this.highlightKeywords(item.title, query)}</div>
                    ${item.category ? `<div class="suggestion-category">${item.category}</div>` : ''}
                </div>
            `).join('');

            suggestions.innerHTML = html;
            suggestions.style.display = 'block';

            // 添加点击事件
            suggestions.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const url = item.getAttribute('data-url');
                    if (url) {
                        window.open(url, '_blank');
                    }
                });
            });
        } else {
            suggestions.style.display = 'none';
        }
    }

    highlightKeywords(text, query) {
        return SearchUtils.highlightKeywords(text, query);
    }

    setupFilters() {
        // Set initial state of filters
        const filtersContent = document.getElementById('filtersContent');
        if (filtersContent) {
            filtersContent.classList.add('collapsed');
        }
    }

    // Helper method to truncate text
    truncateText(text, maxLength) {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    }
}

// Initialize search module
let advancedSearch;
document.addEventListener('DOMContentLoaded', () => {
    advancedSearch = new AdvancedSearchModule();
});

// Add result styles
const resultStyles = `
<style>
/* Search results styles */
.result-item-list {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border-left: 4px solid #520049;
}

.result-item-list:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.result-title {
    margin: 0;
    font-size: 18px;
    color: #333;
}

.result-title a {
    color: #520049;
    text-decoration: none;
    transition: color 0.3s ease;
}

.result-title a:hover {
    color: #3d0037;
    text-decoration: underline;
}

.result-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag {
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
    color: white;
}

.tag-type {
    background: #17a2b8;
}

.tag-app {
    background: #28a745;
}

.result-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #666;
}

.meta-item i {
    color: #520049;
    width: 16px;
}

.result-description {
    color: #666;
    line-height: 1.6;
    margin: 0;
}

/* Grid view styles */
.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.result-item-grid {
    height: 100%;
}

.grid-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.grid-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-header {
    background: linear-gradient(135deg, #520049, #3d0037);
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.card-title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    flex: 1;
}

.card-year {
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

.card-body {
    padding: 20px;
    flex: 1;
}

.card-meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.meta-label {
    font-weight: 500;
    color: #666;
    font-size: 14px;
}

.meta-value {
    color: #333;
    font-weight: 600;
    font-size: 14px;
}

.card-footer {
    padding: 20px;
    border-top: 1px solid #eee;
}

.btn-view-details {
    width: 100%;
    background: #520049;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-view-details:hover {
    background: #3d0037;
    transform: translateY(-1px);
}

/* Table view styles */
.table-responsive {
    overflow-x: auto;
}

.results-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.results-table th {
    background: #520049;
    color: white;
    padding: 15px 12px;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
}

.results-table td {
    padding: 15px 12px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
}

.results-table tr:hover {
    background: #f8f9fa;
}

.table-name {
    font-weight: 600;
    color: #520049;
}

.table-tag {
    padding: 4px 8px;
    background: #e9ecef;
    border-radius: 12px;
    font-size: 12px;
    color: #495057;
}

.btn-small {
    background: #520049;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s ease;
}

.btn-small:hover {
    background: #3d0037;
}

/* No results styles */
.no-results {
    text-align: center;
    padding: 60px 20px;
    color: #666;
}

.no-results h3 {
    margin: 20px 0 10px;
    color: #333;
}

.no-results p {
    margin: 0;
    line-height: 1.6;
}

/* Responsive design */
@media (max-width: 768px) {
    .result-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .result-meta {
        flex-direction: column;
        gap: 10px;
    }

    .results-grid {
        grid-template-columns: 1fr;
    }

    .card-header {
        flex-direction: column;
        gap: 10px;
    }

    .results-table {
        font-size: 12px;
    }

    .results-table th,
    .results-table td {
        padding: 10px 8px;
    }
}
</style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', resultStyles); 