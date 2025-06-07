---
title: "Ribocentre Aptamer - Home"
layout: homelay
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /
---
<style>
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 0;
    margin-bottom: 40px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 40px;
    opacity: 0.9;
}

.overview-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin: -30px auto 50px;
    max-width: 1200px;
    overflow: hidden;
}

.overview-content {
    display: flex;
    min-height: 500px;
}

.overview-text {
    flex: 1;
    padding: 40px;
}

.overview-text h3 {
    color: #333;
    font-size: 2.2rem;
    margin-bottom: 20px;
    font-weight: bold;
}

.overview-text .description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
}

.overview-text .features {
    list-style: none;
    padding: 0;
}

.overview-text .features li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    color: #333;
}

.overview-text .features li:before {
    content: "✓";
    color: #28a745;
    font-weight: bold;
    margin-right: 10px;
}

.carousel-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    position: relative;
}

.carousel {
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
}

.carousel-slides {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
}

.carousel-slide {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-slide .slide-content {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}

.carousel-slide .slide-content:hover {
    transform: scale(1.05);
}

.carousel-slide .slide-content h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    font-weight: bold;
}

.carousel-slide .slide-content p {
    font-size: 1.2rem;
    opacity: 0.9;
}

.carousel-nav {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: background 0.3s;
}

.carousel-dot.active {
    background: white;
}

.carousel-prev, .carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.8);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    transition: background 0.3s;
}

.carousel-prev:hover, .carousel-next:hover {
    background: white;
}

.carousel-prev {
    left: 10px;
}

.carousel-next {
    right: 10px;
}

.stats-section {
    background: #f8f9fa;
    padding: 60px 0;
}

.stats-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

.stat-item {
    text-align: center;
    margin: 20px;
}

.stat-number {
    font-size: 3rem;
    font-weight: bold;
    color: #667eea;
    display: block;
}

.stat-label {
    font-size: 1.2rem;
    color: #666;
    margin-top: 10px;
}

.resources-section {
    padding: 60px 0;
    max-width: 1200px;
    margin: 0 auto;
}

.resources-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: #333;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 0 20px;
}

.resource-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.resource-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 10px;
}

.resource-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
}

.resource-description {
    color: #666;
    line-height: 1.6;
}

.cite-section {
    background: white;
    border: 2px solid #f8f9fa;
    border-radius: 15px;
    padding: 30px;
    margin: 40px auto;
    max-width: 1200px;
}

.cite-title {
    color: #444;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: bold;
}

.related-databases {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
}

.db-link img {
    width: 110px;
    height: auto;
}

.feedback-section {
    margin-top: 40px;
}

.button {
    display: inline-block;
    padding: 8px 35px;
    width: 140px;
    height: 40px;
    background-color: #996699;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    text-align: center;
    line-height: 24px;
    margin-right: 10px;
}

.button:hover {
    background-color: #774477;
    color: white;
    text-decoration: none;
}

@media (max-width: 768px) {
    .overview-content {
        flex-direction: column;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .stats-container {
        flex-direction: column;
        align-items: center;
    }
    
    .related-databases {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>

<!-- Hero Section -->
<div class="hero-section">
    <div class="container">
        <h1 class="hero-title">欢迎来到 Ribocentre-Aptamer</h1>
        <p class="hero-subtitle">——综合性的适配体数据库与研究平台</p>
    </div>
</div>

<!-- Overview Container -->
<div class="overview-container">
    <div class="overview-content">
        <!-- Left side - Text content -->
        <div class="overview-text">
            <h3>关于 Ribocentre-Aptamer</h3>
            <p class="description">
                <strong style="color:#520049;">Ribocentre-Aptamer</strong> 是一个专门收集、整理和展示适配体相关数据的综合性平台。我们致力于为研究人员提供全面、准确的适配体信息资源。
            </p>
            <ul class="features">
                <li>收录超过 <strong>1000+</strong> 个适配体序列数据</li>
                <li><strong>结构分析</strong> - 详细的三维结构信息和分析</li>
                <li><strong>SELEX数据</strong> - 完整的筛选实验数据记录</li>
                <li><strong>应用案例</strong> - 丰富的实际应用场景展示</li>
                <li><strong>荧光检测</strong> - 荧光标记和检测方法数据库</li>
                <li><strong>文献检索</strong> - 相关研究文献的全面收录</li>
                <li><strong>在线工具</strong> - 提供序列分析和预测工具</li>
                <li><strong>数据下载</strong> - 支持批量数据导出功能</li>
            </ul>
        </div>
        
        <!-- Right side - Carousel -->
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-slides" id="carouselSlides">
                    <div class="carousel-slide">
                        <div class="slide-content" style="background: linear-gradient(45deg, #667eea, #764ba2); color: white;">
                            <h3>适配体结构</h3>
                            <p>三维结构解析与功能分析</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="slide-content" style="background: linear-gradient(45deg, #f093fb, #f5576c); color: white;">
                            <h3>SELEX筛选</h3>
                            <p>系统进化配体指数富集</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="slide-content" style="background: linear-gradient(45deg, #4facfe, #00f2fe); color: white;">
                            <h3>生物应用</h3>
                            <p>诊断、治疗与检测应用</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="slide-content" style="background: linear-gradient(45deg, #43e97b, #38f9d7); color: white;">
                            <h3>荧光检测</h3>
                            <p>基于荧光的检测技术</p>
                        </div>
                    </div>
                    <div class="carousel-slide">
                        <div class="slide-content" style="background: linear-gradient(45deg, #fa709a, #fee140); color: white;">
                            <h3>数据分析</h3>
                            <p>综合数据库与分析工具</p>
                        </div>
                    </div>
                </div>
                
                <button class="carousel-prev" onclick="prevSlide()">‹</button>
                <button class="carousel-next" onclick="nextSlide()">›</button>
                
                <div class="carousel-nav">
                    <span class="carousel-dot active" onclick="currentSlide(1)"></span>
                    <span class="carousel-dot" onclick="currentSlide(2)"></span>
                    <span class="carousel-dot" onclick="currentSlide(3)"></span>
                    <span class="carousel-dot" onclick="currentSlide(4)"></span>
                    <span class="carousel-dot" onclick="currentSlide(5)"></span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Statistics Section -->
<div class="stats-section">
    <div class="stats-container">
        <div class="stat-item">
            <span class="stat-number" data-count="1000">0</span>
            <div class="stat-label">适配体序列</div>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="500">0</span>
            <div class="stat-label">三维结构</div>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="300">0</span>
            <div class="stat-label">SELEX实验</div>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="200">0</span>
            <div class="stat-label">应用案例</div>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="150">0</span>
            <div class="stat-label">荧光检测</div>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-count="2000">0</span>
            <div class="stat-label">相关文献</div>
        </div>
    </div>
</div>

<!-- Resources Section -->
<div class="resources-section">
    <h2 class="resources-title">我们的资源</h2>
    <div class="resources-grid">
        <div class="resource-card">
            <div class="resource-icon" style="background: #667eea;"></div>
            <h3 class="resource-title">适配体序列</h3>
            <p class="resource-description">
                包含DNA和RNA适配体的完整序列信息，支持序列搜索、比对和分析功能。
            </p>
        </div>
        
        <div class="resource-card">
            <div class="resource-icon" style="background: #f093fb;"></div>
            <h3 class="resource-title">结构数据</h3>
            <p class="resource-description">
                提供适配体的三维结构数据，包括NMR和X射线晶体学解析的结构信息。
            </p>
        </div>
        
        <div class="resource-card">
            <div class="resource-icon" style="background: #4facfe;"></div>
            <h3 class="resource-title">SELEX数据</h3>
            <p class="resource-description">
                详细记录适配体筛选过程中的实验条件、步骤和结果数据。
            </p>
        </div>
        
        <div class="resource-card">
            <div class="resource-icon" style="background: #43e97b;"></div>
            <h3 class="resource-title">应用案例</h3>
            <p class="resource-description">
                展示适配体在生物传感、药物递送、诊断等领域的实际应用。
            </p>
        </div>
        
        <div class="resource-card">
            <div class="resource-icon" style="background: #fa709a;"></div>
            <h3 class="resource-title">荧光检测</h3>
            <p class="resource-description">
                收录基于荧光的适配体检测方法和相关实验数据。
            </p>
        </div>
        
        <div class="resource-card">
            <div class="resource-icon" style="background: #ffecd2;"></div>
            <h3 class="resource-title">在线工具</h3>
            <p class="resource-description">
                提供序列分析、结构预测、引物设计等生物信息学工具。
            </p>
        </div>
    </div>
</div>

<!-- Citation and Database Links -->
<div class="cite-section">
    <h4 class="cite-title">引用我们</h4>
    <div>
        Zhichao Miao, Lin Huang<br>
        <strong style="color:#520049;">Ribocentre-aptamer: a database of aptamers.</strong><br>
        <a href="#" style="color:#520049;">Article link</a>
    </div>
    
    <h4 class="cite-title" style="margin-top: 30px;">相关数据库</h4>
    <div class="related-databases">
        <a href="https://www.ribocentre.org/" target="_blank" class="db-link">
            <img src="{{ site.url }}{{ site.baseurl }}/images/ribocentre.svg" alt="Ribocentre">
        </a>
        <a href="https://riboswitch.ribocentre.org/" target="_blank" class="db-link">
            <img src="{{ site.url }}{{ site.baseurl }}/images/riboswitch.svg" alt="Riboswitch">
        </a>
    </div>
    
    <div class="feedback-section">
        <h4 class="cite-title">反馈</h4>
        <p>如何使用数据库？请点击这里：</p>
        <a href="{{ site.url }}{{ site.baseurl }}/helps/" class="button">帮助</a>
        
        <p style="margin-top: 20px;">如何提供反馈？请点击这里：</p>
        <a href="https://docs.google.com/spreadsheets/d/1YYWEy1PL9YyzxqsPtWUqqh5G2gbl4D9n7SeV7cqaSK8/edit?gid=0#gid=0" class="button" target="_blank">反馈</a>
    </div>
</div>

<script>
// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.getElementById('carouselSlides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentSlideIndex = index;
}

function nextSlide() {
    const nextIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(prevIndex);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto-play carousel
setInterval(nextSlide, 5000);

// Animated counter
function animateCounter(element, target) {
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
}

// Initialize counters when page loads
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
    });
});
</script>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 

<style>
  #searchBox {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 1px;
    width: 300px;
  }
  /* Style the search box when it has focus */
  #searchBox:focus {
    outline: none;
    border-color: #efefef;
  }
  /* Style the placeholder text */
  #searchBox::placeholder {
    font-size: 16px;
  }
  button, input, optgroup, select, textarea {
    color: #000000;
    font: inherit;
    /* font-weight: bold; */
    margin: 0;
}
  .header_box {
    display: block;
    /* padding: 10px; */
    font-size: 24px;
    /* margin-right: 100px; */
    /* text-align: left; */
    background-color: #ffffff;
    text-decoration: none;
    border-radius: 1px;
    width: 500px;
    /* height: 50px; */
    border-width: 1px 1px 2px 1px;
    /* border-style: solid solid solid solid; */
    border-color: #ffffff #ffffff #ffffff #ffffff;
}
  .box_style{
    background: #ffffff;
  }
  .wrapper {
    display: block;
    position: relative;
    width: 100%; /*大边框的大小*/
    margin: 0;
    padding: 0;
    text-align: left;
    word-wrap: break-word;
    }
  .sectiontitle {
    display: block;
    max-width: 100%;
    margin: 0 auto ;
    text-align: left;
    background :#fff;
    }
  body {
    padding-top: 0px;
  }
  .well {
    max-width: 72%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  .smallwell {
    max-width: 100%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
 
  .left-aligned {
  text-align: left;
}
   img{
    /* margin: 0 0 0 0;  */
    border-radius: 0%; }
/*****/
.button-container {
    display: flex;
    justify-content: flex-start; /* 左对齐 */
}

.button {
    display: inline-block;
    padding: 8px 35px;
    width:140px;
    height:40px;
    background-color: #996699; /* 深紫色按钮背景 */
    color: #fff; /* 白色按钮文字 */
    border: 1px solid #fff; /* 白色边框 */
    border-radius: 1px; /* 角 */
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
    text-align: center;
}

.button:hover {
    background-color: #efefef; /* 悬停时浅紫色背景 */
}

.button:last-child {
    margin-left: 0px; /* 增加按钮之间的间距 */
}
</style>
</head>

<body>
 
<div class="wrapper box_style" ><!-- 整个边框 -->
<br>
  <div class="well" style="border: 1px solid #C9C9C9; background-color: #fff;"> 
    <section class="sectiontitle"> 
    <!--h1 class="post-title" itemprop="name headline"><strong>Welcome to Ribocentre-aptamer</strong></h1-->
    <div>
    <div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators"> 
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
    </ol>
    <!-- Items -->
    <div class="carousel-inner" markdown="0">
         <div class="item active">
            <img src="/images/home_page/home1.svg" alt="Slide 1" style=" width:700px; height:500px;object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item ">
            <img src="/images/home_page/home2.svg" alt="Slide 2" style=" width:700px; height:500px;object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home3.svg" alt="Slide 3" style=" width:700px; height:500px;object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home4.svg" alt="Slide 4" style="width:600px; height:500px;object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home5.svg" alt="Slide 5" style=" width:600px; height:500px;object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home6.svg" alt="Slide 6" style=" width:600px;height:500px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br>
<strong style="color:#520049;font-weight: bold">Ribocentre-aptamer</strong>  is a comprehensive resource that catalogues various RNA aptamers capable of binding specific target molecules with high affinity and specificity. Aptamers are short, single-stranded RNA molecules selected for their ability to bind a wide range of targets, including small organic compounds, proteins, and even entire cells. This database provides detailed information on the binding characteristics, structural features, and experimental conditions for each aptamer, facilitating research and development in fields such as drug discovery, diagnostics, and synthetic biology. The RNA aptamer Database significantly broadens our understanding of RNA functionality, showcasing its versatility not only in genetic coding and catalysis but also in precise molecular recognition and binding.
<br><br>

<strong style="color:#0874c4;font-weight: bold">Ribocentre</strong>  is designed to contain comprehensive information of all natural ribozymes. Ribozymes are good systems for understanding the 'sequence - structure - function' relationship of RNA molecules, since ribozymes are found in the genomes of species from all kingdoms of life and play a role in important reactions such as peptide-bond formation, RNA splicing, transfer RNA biosynthesis, and viral replication. This is therefore an excellent time to summarise these properties, and our new web-based database will make this generally accessible<a href="https://www.ribocentre.org/" target="_blank" style="color:#0874c4" > (Accessing the Ribocentre)</a>.
<br><br>
<strong style="color:#005826;font-weight: bold">Riboswitch</strong>  is a regulatory segment of a messenger RNA molecule that binds a small molecule, resulting in a change in production of the proteins encoded by the mRNA. Thus, an mRNA that contains a riboswitch is directly involved in regulating its own activity, in response to the concentrations of its effector molecule. The discovery that modern organisms use RNA to bind small molecules, and discriminate against closely related analogs, expanded the known natural capabilities of RNA beyond its ability to code for proteins, catalyze reactions, or to bind other RNA or protein macromolecules<a href="https://riboswitch.ribocentre.org/" target="_blank" style="color:#005826" > (Accessing the Riboswitch)</a>.
</div>
<br>
<br>
       

<div class="sectiontitle" style="border: 2px solid #ffffff; background-color: #fff; border-radius:9px;">
<p class="header_box" style="color:#444444">Cite us</p>
<div class="left-aligned" style="width: 82%;">
Zhichao Miao, Lin Huang <br>
<strong style="color:#520049;font-weight: bold">Ribocentre-aptamer: a database of aptamers.</strong><br>
<a href="https:" target="_blank" style="color:#520049">Article link</a>
</div>
</div>
<br>
<br>


<div class="sectiontitle" style="border: 2px solid #ffffff; background-color: #fff; border-radius:9px;">
<p class="header_box" style="color:#444444">Related database</p>
<div class="left-aligned" style="width: 82%;">
<a href="https://www.ribocentre.org/" target="_blank"><img src="/images/ribocentre.svg" alt="drawing" style="width:110px;margin:0 auto;"></a>
<a href="https://riboswitch.ribocentre.org/" target="_blank"><img src="/images/riboswitch.svg" alt="drawing" style="width:110px;margin:0 auto;"></a>
</div>
</div>
<br>
<br>
<br>


<!--div class="button-container">
    <a href="help.html" class="button">Help</a>
    <a href="https://docs.google.com/document/d/your-document-id/edit" class="button">Provide Suggestions</a>
</div-->



<p class="header_box" style="color:#444444">Feedback</p>
<font>How to use the database? Please click here:<font>
<div class="button-container">
    <a href="{{ site.url }}{{ site.baseurl }}/helps/" class="button">Help</a>
</div>
<p></p>
<font>How to provide feedback? Please click here:<font>
<div class="button-container">
    <a href="https://docs.google.com/spreadsheets/d/1YYWEy1PL9YyzxqsPtWUqqh5G2gbl4D9n7SeV7cqaSK8/edit?gid=0#gid=0" class="button" target="_blank">Feedback</a>
</div>
<!--a href="https://aptamer.ribocentre.org/helps/" target="_blank"><img src="/images/Feedback.png" alt="drawing" style="width:130px;height: 40px;margin:0 auto;"></a-->
















  
 






