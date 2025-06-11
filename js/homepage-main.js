// Homepage Main JavaScript - 主要功能模块

// ====== 打字机效果模块 ======
const TypewriterModule = {
    init() {
        const titleText = "Welcome to Ribocentre-Aptamer";
        const subtitleText = "——Comprehensive Aptamer Database and Research Platform";
        
        const titleElement = document.getElementById('typewriter-title');
        const subtitleElement = document.getElementById('typewriter-subtitle');
        const titleCursor = document.getElementById('title-cursor');
        const subtitleCursor = document.getElementById('subtitle-cursor');
        
        if (!titleElement || !subtitleElement || !titleCursor || !subtitleCursor) {
            console.error('Typewriter elements not found');
            return;
        }
        
        let titleIndex = 0;
        let subtitleIndex = 0;
        
        const resetTypewriter = () => {
            titleElement.textContent = '';
            subtitleElement.textContent = '';
            titleCursor.style.visibility = 'visible';
            subtitleCursor.style.visibility = 'hidden';
            titleIndex = 0;
            subtitleIndex = 0;
        };
        
        const typeTitle = () => {
            if (titleIndex < titleText.length) {
                titleElement.textContent += titleText.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 120);
            } else {
                setTimeout(() => {
                    titleCursor.style.visibility = 'hidden';
                    subtitleCursor.style.visibility = 'visible';
                    typeSubtitle();
                }, 800);
            }
        };
        
        const typeSubtitle = () => {
            if (subtitleIndex < subtitleText.length) {
                subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
                subtitleIndex++;
                setTimeout(typeSubtitle, 100);
            } else {
                setTimeout(() => {
                    subtitleCursor.style.visibility = 'hidden';
                    setTimeout(() => {
                        resetTypewriter();
                        typeTitle();
                    }, 4000);
                }, 2500);
            }
        };
        
        resetTypewriter();
        setTimeout(typeTitle, 1500);
    }
};

// ====== 轮播图模块 ======
const CarouselModule = {
    currentSlideIndex: 0,
    slides: null,
    dots: null,
    totalSlides: 0,

    init() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.totalSlides = this.slides.length;
        
        // 自动播放
        setInterval(() => this.nextSlide(), 5000);
    },

    showSlide(index) {
        const slidesContainer = document.getElementById('carouselSlides');
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        }
        
        this.dots.forEach(dot => dot.classList.remove('active'));
        if (this.dots[index]) {
            this.dots[index].classList.add('active');
        }
        
        this.currentSlideIndex = index;
    },

    nextSlide() {
        const nextIndex = (this.currentSlideIndex + 1) % this.totalSlides;
        this.showSlide(nextIndex);
    },

    prevSlide() {
        const prevIndex = (this.currentSlideIndex - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(prevIndex);
    },

    currentSlide(index) {
        this.showSlide(index - 1);
    }
};

// ====== 统计计数器模块 ======
const CounterModule = {
    animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 30);
    },

    init() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            this.animateCounter(counter, target);
        });
    }
};

// ====== 主页搜索模块 ======
const homepageSearchModule = {
    mainSearchInput: null,
    mainSearchResults: null,
    currentPage: 1,
    resultsPerPage: 10,
    allSearchResults: [],
    searchTimeout: null,
    isSearchActive: false,
    heroOriginalHeight: null,
    overviewOriginalHeight: null,

    init() {
        // 检查是否在index.html页面，以及是否已有SearchModule模块在运行
        const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
        const searchModuleActive = typeof SearchModule !== 'undefined' && SearchModule.mainSearchInput;
        
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
    },

    setupSearchContainer() {
        // 创建搜索结果容器
        this.mainSearchResults = document.createElement('div');
        this.mainSearchResults.id = 'main-search-results';
        this.mainSearchResults.className = 'search-results-container';
        this.mainSearchResults.style.cssText = `
            display: none;
            position: absolute;
            width: 100%;
            max-width: 600px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
            z-index: 999999;
            margin-top: 5px;
            max-height: 400px;
            overflow-y: auto;
        `;
        
        const searchSection = this.mainSearchInput.closest('.homepage-search-section');
        const resultsWrapper = document.createElement('div');
        resultsWrapper.style.cssText = 'position: relative; width: 100%;';
        resultsWrapper.appendChild(this.mainSearchResults);
        
        searchSection.querySelector('.homepage-search-container').appendChild(resultsWrapper);
    },

    bindEvents() {
        // 点击页面其他区域关闭搜索结果
        document.addEventListener('click', (event) => {
            if (!this.mainSearchInput.contains(event.target) && 
                !this.mainSearchResults.contains(event.target)) {
                this.mainSearchResults.style.display = 'none';
                this.restoreHeroHeight();
            }
        });

        // 输入框事件 - 添加防抖
        this.mainSearchInput.addEventListener('input', () => {
            this.handleSearchInput();
        });

        this.mainSearchInput.addEventListener('focus', () => {
            this.handleSearchFocus();
        });

        this.mainSearchInput.addEventListener('blur', () => {
            this.handleSearchBlur();
        });

        this.mainSearchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && this.mainSearchInput.value.trim() !== '') {
                this.clearSearchTimeout();
                this.performSearch();
            }
        });

        // 搜索按钮事件
        window.performSearch = () => {
            if (this.mainSearchInput.value.trim() !== '') {
                this.clearSearchTimeout();
                this.performSearch();
            }
        };
    },

    bindWindowEvents() {
        // 窗口大小改变时重新计算高度
        window.addEventListener('resize', () => {
            if (this.isSearchActive) {
                this.restoreHeroHeight();
                setTimeout(() => this.fixHeroHeight(), 50);
            }
        });

        // ESC键关闭搜索结果
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.mainSearchResults.style.display !== 'none') {
                this.mainSearchResults.style.display = 'none';
                this.mainSearchInput.value = '';
                this.mainSearchInput.blur();
                this.restoreHeroHeight();
            }
        });
    },

    handleSearchInput() {
        const query = this.mainSearchInput.value.trim();
        const config = window.SEARCH_CONFIG || {
            disableHeroHeightFix: false,
            searchDelay: 300,
            minSearchLength: 2
        };

        // 清除之前的搜索延时
        this.clearSearchTimeout();

        // 如果查询为空，立即隐藏结果
        if (query.length === 0) {
            this.mainSearchResults.style.display = 'none';
            this.restoreHeroHeight();
            return;
        }

        // 如果查询长度小于配置的最小长度，不进行搜索
        if (query.length < config.minSearchLength) {
            return;
        }

        // 确保Hero Section高度已固定（如果启用）
        if (!config.disableHeroHeightFix && !this.isSearchActive) {
            this.isSearchActive = true;
            this.fixHeroHeight();
        }

        // 延迟执行搜索
        this.searchTimeout = setTimeout(() => {
            this.performSearch();
        }, config.searchDelay);
    },

    handleSearchFocus() {
        const config = window.SEARCH_CONFIG || { disableHeroHeightFix: false };
        
        // 立即固定高度，不管是否已经激活
        if (!config.disableHeroHeightFix) {
            this.isSearchActive = true;
            this.fixHeroHeight();
            console.log('Search focus - Hero height fixed');
        }

        if (this.mainSearchInput.value.trim() !== '') {
            this.clearSearchTimeout();
            this.performSearch();
        }
    },

    handleSearchBlur() {
        // 延迟执行，避免点击搜索结果时立即恢复
        setTimeout(() => {
            const config = window.SEARCH_CONFIG || { disableHeroHeightFix: false };
            
            if (this.mainSearchResults.style.display === 'none' && 
                document.activeElement !== this.mainSearchInput) {
                if (!config.disableHeroHeightFix) {
                    this.isSearchActive = false;
                    this.restoreHeroHeight();
                }
            }
        }, 150);
    },

    clearSearchTimeout() {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = null;
        }
    },

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
            
            console.log('Hero height fixed at:', this.heroOriginalHeight + 'px');
        }
        
        if (overviewContainer && !overviewContainer.classList.contains('search-active')) {
            this.overviewOriginalHeight = overviewContainer.getBoundingClientRect().height;
            
            // 强制禁用transition并固定高度
            overviewContainer.style.transition = 'none';
            overviewContainer.style.height = this.overviewOriginalHeight + 'px';
            overviewContainer.style.minHeight = this.overviewOriginalHeight + 'px';
            overviewContainer.style.maxHeight = this.overviewOriginalHeight + 'px';
            overviewContainer.style.setProperty('--overview-fixed-height', this.overviewOriginalHeight + 'px');
            overviewContainer.classList.add('search-active');
            
            console.log('Overview height fixed at:', this.overviewOriginalHeight + 'px');
        }
    },

    restoreHeroHeight() {
        const heroSection = document.querySelector('.hero-section');
        const overviewContainer = document.querySelector('.overview-container');
        
        if (heroSection && heroSection.classList.contains('search-active')) {
            heroSection.classList.remove('search-active');
            heroSection.style.removeProperty('height');
            heroSection.style.removeProperty('min-height');
            heroSection.style.removeProperty('max-height');
            heroSection.style.removeProperty('transition');
            heroSection.style.removeProperty('--hero-fixed-height');
            
            console.log('Hero height restored');
        }
        
        if (overviewContainer && overviewContainer.classList.contains('search-active')) {
            overviewContainer.classList.remove('search-active');
            overviewContainer.style.removeProperty('height');
            overviewContainer.style.removeProperty('min-height');
            overviewContainer.style.removeProperty('max-height');
            overviewContainer.style.removeProperty('transition');
            overviewContainer.style.removeProperty('--overview-fixed-height');
            
            console.log('Overview height restored');
        }
    },

    async performSearch() {
        const query = this.mainSearchInput.value.trim();
        if (!query) {
            this.mainSearchResults.style.display = 'none';
            this.restoreHeroHeight();
            return;
        }

        this.mainSearchResults.innerHTML = '<div style="padding: 15px; text-align: center; color: #666;">正在搜索...</div>';
        this.mainSearchResults.style.display = 'block';

        const searchPaths = ['./search.json', '/search.json', 'search.json'];
        this.currentPage = 1;

        try {
            const data = await SearchUtils.fetchData(searchPaths);
            this.processSearchResults(data, query);
        } catch (e) {
            console.error('搜索数据加载失败', e);
            this.mainSearchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: #4d5156;">无法加载搜索数据，请稍后再试。</div>';
        }
    },

    processSearchResults(data, query) {
        const startTime = Date.now();
        this.allSearchResults = SearchUtils.processResults(data, query);
        this.renderResults(Date.now() - startTime);
    },

    calculateRelevanceScore(item, query) {
        return SearchUtils.calculateRelevanceScore(item, query);
    },

    renderResults(searchTime) {
        if (this.allSearchResults.length === 0) {
            this.mainSearchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: #4d5156; font-size: 16px;">没有找到相关结果，请尝试其他关键词。</div>';
            return;
        }

        const startIndex = (this.currentPage - 1) * this.resultsPerPage;
        const endIndex = Math.min(startIndex + this.resultsPerPage, this.allSearchResults.length);
        const currentResults = this.allSearchResults.slice(startIndex, endIndex);

        let html = `<div style="padding: 10px 15px; border-bottom: 1px solid #eee; color: #70757a; font-size: 14px;">
            找到 ${this.allSearchResults.length} 个结果 (用时 ${searchTime} 毫秒)
        </div>`;

        currentResults.forEach(item => {
            const query = this.mainSearchInput.value.trim();
            const highlightedTitle = this.highlightKeywords(item.title, query);
            
            html += `<div class="search-result-item" style="padding: 15px; border-bottom: 1px solid #eee; cursor: pointer;" data-url="${item.url}">
                <h4 style="margin: 0 0 5px 0; color: #1a73e8; font-size: 18px; font-weight: 500;">${highlightedTitle}</h4>
                ${item.category ? `<div style="color: #70757a; font-size: 12px; margin-bottom: 5px;">${this.highlightKeywords(item.category, query)}</div>` : ''}
                <div style="margin: 5px 0; color: #4d5156; font-size: 14px; line-height: 1.58;">${this.getContentPreview(item.content, query)}</div>
                <div style="display: flex; justify-content: space-between; margin-top: 5px; font-size: 12px; color: #70757a;">
                    ${item.tags ? `<div style="color: #520049;">${this.highlightKeywords(item.tags, query)}</div>` : '<div></div>'}
                    ${item.date ? `<div>${item.date}</div>` : '<div></div>'}
                </div>
            </div>`;
        });

        this.mainSearchResults.innerHTML = html;

        // 添加点击事件
        this.mainSearchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function(e) {
                const url = this.getAttribute('data-url');
                if (url) window.open(url, '_blank');
            });
        });

        this.mainSearchResults.style.display = 'block';
    },

    highlightKeywords(text, query) {
        return SearchUtils.highlightKeywords(text, query);
    },

    getContentPreview(content, query) {
        return SearchUtils.getContentPreview(content, query, 150);
    }
};

// ====== Molstar 3D分子结构展示模块 ======
const MolstarModule = {
    currentAptamerIndex: 0,
    molstarInstance: null,
    aptamerData: [],

    init() {
        this.aptamerData = window.aptamerData || [];
        if (this.aptamerData.length > 0) {
            this.currentAptamerIndex = Math.floor(Math.random() * this.aptamerData.length);
            this.loadMolstarLibrary()
                .then(() => {
                    setTimeout(() => this.loadAptamerStructure(this.currentAptamerIndex), 500);
                })
                .catch(error => {
                    console.error('Molstar库加载失败:', error);
                    this.showFallback();
                });
        } else {
            this.showFallback();
            this.updateInfoCards({
                name: 'Ribocentre Aptamer',
                url: '#',
                target: '多种生物分子',
                firstYear: '1990-2024',
                pdbId: 'N/A',
                description: 'Ribocentre-Aptamer是一个综合性的适配体数据库与研究平台，致力于为研究人员提供全面、准确的适配体信息资源。'
            });
        }
    },

    loadMolstarLibrary() {
        return new Promise((resolve, reject) => {
            if (window.PDBeMolstarPlugin) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = (window.DASHBOARD_CONFIG?.baseurl || '') + '/js/mol/pdbe-molstar-plugin.js';
            script.onload = resolve;
            script.onerror = () => reject(new Error('Failed to load Molstar library'));
            document.head.appendChild(script);
        });
    },

    updateInfoCards(data) {
        // 基本信息卡片
        const aptamerName = document.getElementById('aptamerName');
        const aptamerTarget = document.getElementById('aptamerTarget');
        const aptamerYear = document.getElementById('aptamerYear');
        
        if (aptamerName) {
            aptamerName.textContent = data.name || 'Unknown Aptamer';
            aptamerName.href = data.url || '#';
        }
        if (aptamerTarget) aptamerTarget.textContent = `Target: ${data.target || 'Unknown'}`;
        if (aptamerYear) aptamerYear.textContent = `Discovery Year: ${data.firstYear || data.date || 'Unknown'}`;

        // 结构信息卡片
        const pdbLink = document.getElementById('pdbLink');
        const structureResolution = document.getElementById('structureResolution');
        const structureMethod = document.getElementById('structureMethod');
        
        const pdbId = data.pdbId || 'Unknown';
        if (pdbLink) {
            pdbLink.textContent = `PDB: ${pdbId}`;
            pdbLink.href = pdbId !== 'Unknown' ? `https://www.rcsb.org/structure/${pdbId}` : '#';
        }
        if (structureResolution) structureResolution.textContent = `Resolution: High Resolution`;
        if (structureMethod) structureMethod.textContent = `Method: X-ray/NMR`;

        // 描述信息卡片
        const descriptionText = document.getElementById('descriptionText');
        if (descriptionText) {
            const cleanDescription = (data.description || 'No description available')
                .replace(/\n\s*\n\s*\n/g, '\n\n')
                .replace(/^\s+|\s+$/g, '')
                .replace(/[ \t]+/g, ' ');
            descriptionText.textContent = cleanDescription;
        }
    },

    loadAptamerStructure(index) {
        if (!this.aptamerData || this.aptamerData.length === 0) {
            console.error('No aptamer data available');
            this.showFallback();
            return;
        }

        const data = this.aptamerData[index];
        
        try {
            this.updateInfoCards(data);

            if (this.molstarInstance) {
                this.molstarInstance = null;
            }

            const molstarViewer = document.getElementById('molstar-viewer');
            if (molstarViewer) {
                molstarViewer.innerHTML = '';

                if (data.molstarUrl && data.molstarUrl !== 'null' && data.molstarUrl !== null) {
                    const options = {
                        customData: {
                            url: data.molstarUrl,
                            format: 'pdb'
                        },
                        moleculeId: data.pdbId || 'structure',
                        expanded: false,
                        hideControls: true,
                        hideCanvasControls: ['expand', 'controlToggle', 'controlInfo', 'selection', 'trajectory', 'animation', 'axes', 'camera', 'screenshot', 'settings', 'fullscreen'],
                        bgColor: {r: 248, g: 250, b: 252},
                        selectInteraction: false,
                        pdbeLink: false,
                        loadMaps: false,
                        validationAnnotation: false,
                        domainAnnotation: false,
                        lowPrecisionCoords: true
                    };

                    this.molstarInstance = new PDBeMolstarPlugin();
                    this.molstarInstance.render(molstarViewer, options)
                        .then(() => {
                            console.log('Molstar渲染成功');
                            this.enableRotation();
                        })
                        .catch(error => {
                            console.error('Molstar渲染失败:', error);
                            this.showFallback();
                        });
                } else {
                    this.showFallback();
                }
            }

            this.currentAptamerIndex = index;

        } catch (error) {
            console.error('Failed to load aptamer structure:', error);
            this.showFallback();
        }
    },

    enableRotation() {
        try {
            if (this.molstarInstance?.plugin?.canvas3d) {
                const canvas3d = this.molstarInstance.plugin.canvas3d;
                canvas3d.setProps({
                    trackball: {
                        ...canvas3d.props.trackball,
                        animate: {
                            name: 'spin',
                            params: { speed: 1 }
                        }
                    }
                });
            } else if (this.molstarInstance?.toggleSpin) {
                this.molstarInstance.toggleSpin(true, false);
            } else {
                const molstarViewer = document.getElementById('molstar-viewer');
                if (molstarViewer) {
                    molstarViewer.style.animation = 'molstarSpin 15s linear infinite';
                }
            }
        } catch (error) {
            console.log('启用旋转时出错:', error);
            const molstarViewer = document.getElementById('molstar-viewer');
            if (molstarViewer) {
                molstarViewer.style.animation = 'molstarSpin 15s linear infinite';
            }
        }
    },

    showFallback() {
        const molstarViewer = document.getElementById('molstar-viewer');
        if (molstarViewer) {
            molstarViewer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #4a5568; text-align: center; padding: 20px;">
                    <div>
                        <div style="font-size: 3rem; margin-bottom: 10px;">🧬</div>
                        <div style="font-size: 1.2rem; font-weight: bold;">3D 分子结构</div>
                        <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 5px;">真实适配体三维结构展示</div>
                    </div>
                </div>
            `;
        }
    }
};

// ====== 全局函数导出 ======
// 为轮播图导出全局函数
window.nextSlide = () => CarouselModule.nextSlide();
window.prevSlide = () => CarouselModule.prevSlide();
window.currentSlide = (index) => CarouselModule.currentSlide(index);

// ====== 初始化 ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('Homepage modules loading...');
    
    // 初始化所有模块
    TypewriterModule.init();
    CounterModule.init();
    CarouselModule.init();
    homepageSearchModule.init();
    
    // 延迟初始化Molstar以避免阻塞其他功能
    setTimeout(() => {
        MolstarModule.init();
    }, 1000);
    
    console.log('Homepage modules loaded successfully');
}); 