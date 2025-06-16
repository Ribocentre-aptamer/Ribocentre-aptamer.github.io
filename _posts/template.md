---
layout: post
title:  "标题"
date:   2024-09-09 00:00:00
author: 作者名
categories: 分类
---
<html>
<head>
  <style>
    /* 全局变量 */
    :root {
      --primary-color: #520049;
      --secondary-color: #f5f5f5;
      --text-color: #333;
      --border-radius: 8px;
      --transition: all 0.3s ease;
      --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    /* 基础样式 */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.7;
      color: var(--text-color);
      position: relative;
      font-size: 16px;
      letter-spacing: 0.3px;
    }

    /* 段落样式优化 */
    p {
      margin-bottom: 18px;
      text-align: justify;
      text-justify: inter-word;
    }

    /* 首字母加粗效果 */
    .content-section p:first-of-type::first-letter {
      font-weight: 700;
      font-size: 1.2em;
      color: var(--primary-color);
    }

    /* 小标题样式 */
    .blowheader_box {
      background: linear-gradient(135deg, var(--primary-color), rgba(82, 0, 73, 0.8));
      color: white;
      padding: 12px 20px;
      margin: 30px 0 20px;
      border-radius: var(--border-radius);
      font-size: 18px;
      font-weight: 600;
      position: relative;
      box-shadow: 0 4px 15px rgba(82, 0, 73, 0.2);
      letter-spacing: 0.5px;
    }

    .blowheader_box::before {
      content: '▶';
      margin-right: 10px;
      font-size: 0.9em;
    }

    .blowheader_box::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 20px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid var(--primary-color);
    }

    /* 序列样式优化 */
    .sequence {
      font-family: 'Courier New', monospace;
      background: var(--secondary-color);
      padding: 15px 20px;
      border-radius: var(--border-radius);
      margin: 20px 0;
      border-left: 4px solid var(--primary-color);
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 600;
      color: #2c3e50;
    }

    /* 强调文本样式 */
    .highlight-text {
      background: linear-gradient(120deg, rgba(82, 0, 73, 0.1) 0%, rgba(82, 0, 73, 0.2) 100%);
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 500;
    }

    /* 上标样式优化 */
    sup {
      font-size: 0.75em;
      vertical-align: super;
      color: var(--primary-color);
      font-weight: 600;
    }

    /* 下标样式优化 */
    sub {
      font-size: 0.8em;
      vertical-align: sub;
      color: #666;
    }

    /* 导航栏样式 */
    .nav-ball {
      position: fixed;
      top: 50%;
      right: 30px;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      background: var(--primary-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: var(--transition);
      box-shadow: 0 4px 15px rgba(82, 0, 73, 0.3);
    }

    .nav-ball:hover {
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 6px 20px rgba(82, 0, 73, 0.4);
    }

    .nav-ball.active {
      background: rgba(82, 0, 73, 0.9);
    }

    .nav-ball-icon {
      width: 24px;
      height: 24px;
      position: relative;
    }

    .nav-ball-icon span {
      display: block;
      height: 2px;
      width: 16px;
      background: white;
      margin: 3px auto;
      transition: var(--transition);
      border-radius: 1px;
    }

    .nav-ball.active .nav-ball-icon span:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }

    .nav-ball.active .nav-ball-icon span:nth-child(2) {
      opacity: 0;
    }

    .nav-ball.active .nav-ball-icon span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }

    /* 遮罩层样式 */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      visibility: hidden;
      transition: var(--transition);
      z-index: 998;
    }

    .overlay.active {
      opacity: 1;
      visibility: visible;
    }

    /* 内容区块样式 */
    .content-section {
      background: white;
      padding: 25px;
      margin-bottom: 30px;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }

    .section-title {
      color: var(--primary-color);
      font-size: 24px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--primary-color);
    }

    .subsection-title {
      color: var(--primary-color);
    font-size: 20px;
      margin: 25px 0 15px;
    }

    /* 时间线样式 */
    .timeline {
      position: relative;
      padding: 40px 0;
      margin: 20px 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, var(--primary-color), rgba(82, 0, 73, 0.3));
      border-radius: 2px;
    }

    .entry {
      position: relative;
      margin-left: 80px;
      margin-bottom: 40px;
      opacity: 0;
      transform: translateX(30px);
      animation: slideInRight 0.6s ease forwards;
    }

    .entry:nth-child(even) {
      animation-delay: 0.1s;
    }

    .entry:nth-child(odd) {
      animation-delay: 0.2s;
    }

    @keyframes slideInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .entry::before {
      content: '';
      position: absolute;
      left: -65px;
      top: 10px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary-color);
      border: 4px solid white;
      box-shadow: 0 0 0 3px var(--primary-color);
      z-index: 10;
      transition: var(--transition);
    }

    .entry:hover::before {
      transform: scale(1.3);
      box-shadow: 0 0 0 6px rgba(82, 0, 73, 0.3);
    }

    .entry .title {
      margin-bottom: 15px;
    }

    .entry .title h3 {
      margin: 0;
      color: var(--primary-color);
      font-size: 18px;
      font-weight: 600;
    }

    .entry .body {
      background: white;
      padding: 20px;
      border-radius: var(--border-radius);
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border-left: 4px solid var(--primary-color);
      transition: var(--transition);
      position: relative;
    }

    .entry .body::before {
      content: '';
      position: absolute;
      left: -12px;
      top: 20px;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid white;
    }

    .entry:hover .body {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .entry .body p {
      margin: 0;
      line-height: 1.6;
      color: #555;
    }

    /* 表格样式 */
    .table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
    }

    .table th {
      background: var(--primary-color);
      color: white;
      padding: 15px 12px;
      text-align: left;
      font-weight: 600;
      border-bottom: 2px solid rgba(255,255,255,0.1);
    }

    .table td {
      padding: 15px 12px;
      border-bottom: 1px solid #e8e8e8;
      vertical-align: top;
    }

    .table tbody tr:nth-child(even) {
      background: rgba(245, 245, 245, 0.5);
    }

    .table tbody tr:nth-child(odd) {
      background: white;
    }

    .table tr:hover {
      background: rgba(82, 0, 73, 0.05);
      transform: scale(1.002);
      transition: all 0.2s ease;
    }

    .table tbody tr {
      transition: all 0.2s ease;
    }

    .table tbody tr:last-child td {
      border-bottom: none;
    }

    /* 表格中图片的样式 */
    .table td img {
      max-width: 100px;
      height: auto;
      border-radius: 4px;
    }

    /* 图片样式 */
    .img-responsive {
      max-width: 100%;
      height: auto;
      border-radius: var(--border-radius);
      margin: 20px 0;
    }

    /* 引用样式 */
    blockquote {
      border-left: 4px solid var(--primary-color);
      margin: 20px 0;
      padding: 10px 20px;
      background: var(--secondary-color);
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }

    /* 结构查看器样式 */
    .structure-viewer {
      margin: 20px 0;
    }

    .viewer-note {
      text-align: right;
      margin-bottom: 10px;
      color: #666;
    }

    .viewer-container {
      display: flex;
      gap: 20px;
      align-items: flex-start;
    }

    .viewer-controls {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .viewer-controls button {
      padding: 8px 16px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: var(--transition);
    }

    .viewer-controls button:hover {
      opacity: 0.9;
    }

    /* 序列样式 */
    .sequence {
      font-family: monospace;
      background: var(--secondary-color);
      padding: 10px;
      border-radius: var(--border-radius);
      margin: 15px 0;
    }

    /* 绑定口袋图片样式 */
    .binding-pocket-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }

    /* 信息框样式 */
    .info-box {
      background: var(--secondary-color);
      padding: 15px;
      border-radius: var(--border-radius);
      margin: 20px 0;
    }

    .info-box p {
      margin: 10px 0;
    }

    .info-box a {
      color: var(--primary-color);
    text-decoration: none;
    }

    .info-box a:hover {
      text-decoration: underline;
    }

    /* 结构图片样式 */
    .structure-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 20px 0;
    }

    .structure-images img {
      width: 100%;
      height: auto;
      border-radius: var(--border-radius);
    }

    /* 链接样式 */
    a {
      color: var(--primary-color);
      text-decoration: none;
      transition: var(--transition);
    }

    a:hover {
      opacity: 0.8;
    }

    /* 表格中的链接样式 */
    .table a {
      color: var(--primary-color);
      font-weight: bold;
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
      .side-nav ul {
        flex-direction: column;
}
      
      .side-nav-item {
        width: 100%;
      }
      
      .side-nav-item a {
    display: block;
      text-align: center;
      }

      .content-section {
        padding: 15px;
  }

      .table {
        display: block;
        overflow-x: auto;
  }

      /* 3D可视化移动端样式 */
      .structure-table {
        width: 100% !important;
        display: block;
        overflow-x: auto;
      }

      .structure-table td {
        display: block;
        width: 100%;
        margin-bottom: 20px;
      }

      .structure-table td img,
      .structure-table #myViewer1 {
        width: 100% !important;
        max-width: 350px;
        height: auto !important;
      }

      .binding-pocket-table {
        width: 100% !important;
        display: block;
        overflow-x: auto;
      }

      .binding-pocket-table td {
        display: block;
        width: 100%;
        margin-bottom: 20px;
      }

      .binding-pocket-table td img {
        width: 100% !important;
        max-width: 350px;
      }

      .viewer-container {
        flex-direction: column;
  }

      .binding-pocket-images {
        grid-template-columns: 1fr;
      }

      .structure-images {
        grid-template-columns: 1fr;
      }

      .info-box {
        padding: 10px;
      }
        }

    /* 3D可视化部分特殊样式 */
    .structure-table {
      margin: 20px auto;
      border-collapse: collapse;
      background: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
    }

    .structure-table td {
      padding: 0;
      border: none;
      vertical-align: top;
    }

    /* 3D可视化表格中的图片不受尺寸限制 */
    .structure-table td img {
      max-width: none;
      width: 500px;
      height: auto;
    }

    /* Molstar容器样式 */
    .structure-table #myViewer1 {
      width: 500px !important;
      height: 500px !important;
    }

    /* 绑定口袋表格样式 */
    .binding-pocket-table {
      width: 1000px;
      margin: 20px auto;
      border-collapse: collapse;
      background: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--box-shadow);
    }

    .binding-pocket-table td {
      padding: 0;
      border: none;
      text-align: center;
    }

    .binding-pocket-table td img {
      max-width: none;
      width: 500px;
      height: auto;
    }

    /* 侧边导航样式 */
    .side-nav {
      position: fixed !important;
      top: 50% !important;
      right: 90px !important;
      left: auto !important;
      transform: translateY(-50%) scale(0);
      background: rgba(255, 255, 255, 0.95);
      padding: 15px 0;
      border-radius: var(--border-radius);
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      z-index: 999;
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      width: 200px;
      max-width: 200px;
      opacity: 0;
    }

    .side-nav.active {
      transform: translateY(-50%) scale(1);
      opacity: 1;
    }

    .side-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .side-nav-item {
      margin: 0;
      position: relative;
    }

    .side-nav-item a {
      display: block;
      padding: 10px 15px;
      color: var(--primary-color);
      text-decoration: none;
      transition: var(--transition);
      font-size: 14px;
      position: relative;
      overflow: hidden;
    }

    .side-nav-item a::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: var(--primary-color);
      transform: scaleY(0);
      transition: transform 0.2s;
    }

    .side-nav-item a:hover {
      background: rgba(82, 0, 73, 0.1);
      padding-left: 20px;
    }

    .side-nav-item a:hover::before {
      transform: scaleY(1);
    }

    .side-nav-item.active a {
      background: rgba(82, 0, 73, 0.1);
      font-weight: 600;
    }

    .side-nav-item.active a::before {
      transform: scaleY(1);
    }

    /* 阅读进度条样式 */
    .progress-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: transparent;
      z-index: 1001;
    }

    .progress-bar {
      height: 100%;
      background: var(--primary-color);
      width: 0%;
      transition: width 0.1s ease;
      box-shadow: 0 0 10px rgba(82, 0, 73, 0.3);
    }

    /* 参考文献样式优化 - 使用更精确的选择器 */
    div.content-section h2[id="references"] + a[id^="ref"],
    div.content-section a[id^="ref"] + a[id^="ref"] {
      display: block;
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(82, 0, 73, 0.1);
    }
    
    div.content-section a[id^="ref"]:nth-of-type(odd) {
      background-color: rgba(245, 245, 245, 0.5);
      padding: 10px;
      border-radius: var(--border-radius);
    }
    
    /* 强制样式应用 */
    div.content-section a[id^="ref"] {
      display: block !important;
      margin-top: 15px !important;
    }
    
    /* 调整Similar compound表格列宽 */
    .table th:nth-child(1), 
    .table td:nth-child(1) {
      width: 12%;
    }
    
    .table th:nth-child(2), 
    .table td:nth-child(2) {
      width: 12%;
    }
    
    .table th:nth-child(3), 
    .table td:nth-child(3) {
      width: 10%;
    }
    
    .table th:nth-child(4), 
    .table td:nth-child(4) {
      width: 12%;
    }
    
    .table th:nth-child(5), 
    .table td:nth-child(5) {
      width: 54%;
    }
    
    /* 确保Structure列的图片适当显示 */
    .table td:nth-child(5) img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <!-- 阅读进度条 -->
  <div class="progress-container">
    <div class="progress-bar" id="progressBar"></div>
  </div>

  <!-- 导航球 -->
  <div class="nav-ball" id="navBall">
    <div class="nav-ball-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <!-- 遮罩层 -->
  <div class="overlay" id="overlay"></div>

  <!-- 侧边导航 -->
  <div class="side-nav" id="sideNav">
    <ul>
      <li class="side-nav-item"><a href="#timeline">Timeline</a></li>
      <li class="side-nav-item"><a href="#description">Description</a></li>
      <li class="side-nav-item"><a href="#selex">SELEX</a></li>
      <li class="side-nav-item"><a href="#structure">Structure</a></li>
      <li class="side-nav-item"><a href="#ligand-information">Ligand information</a></li>
      <li class="side-nav-item"><a href="#references">References</a></li>
    </ul>
  </div>

  <script>
    // 导航球切换
    const navBall = document.getElementById('navBall');
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('overlay');

    navBall.addEventListener('click', () => {
      navBall.classList.toggle('active');
      sideNav.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      navBall.classList.remove('active');
      sideNav.classList.remove('active');
      overlay.classList.remove('active');
    });

    // 阅读进度条
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('progressBar').style.width = scrolled + '%';
    });

    // 平滑滚动和导航项激活
    const sections = document.querySelectorAll('h2[id]');
    const navItems = document.querySelectorAll('.side-nav-item a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.parentElement.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
          item.parentElement.classList.add('active');
        }
      });
    });

    document.querySelectorAll('.side-nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          // 关闭导航菜单
          navBall.classList.remove('active');
          sideNav.classList.remove('active');
          overlay.classList.remove('active');
        }
      });
    });

    // Timeline动画效果
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // 观察所有timeline条目
    document.querySelectorAll('.entry').forEach(entry => {
      entry.style.animationPlayState = 'paused';
      observer.observe(entry);
    });
  </script>

<div class="content-section">
  <h2 class="section-title" id="timeline">Timeline</h2>
  <div class="timeline">
    <div class="entry">
      <div class="title">
        <h3><a href="#" target="_blank" style="color:#520049">年份</a></h3>
      </div>
      <div class="body">
        <p>事件描述<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
      </div>
    </div>
    <!-- 添加更多时间线条目 -->
  </div>
</div>

<div class="content-section">
  <h2 class="section-title" id="description">Description</h2>
  <p>在这里添加描述内容，使用<span class="highlight-text">highlight-text</span>类突出显示重要内容。参考文献格式：<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
</div>

<div class="content-section">
  <h2 class="section-title" id="selex">SELEX</h2>
  <p>描述SELEX过程和实验条件。</p>
  <p>详细信息可以通过以下链接访问：<a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a></p>
</div>

<div class="content-section">
  <h2 class="section-title" id="structure">Structure</h2>
  
  <div class="blowheader_box">2D representation</div>
  <p>描述2D结构信息。</p>
  <div class="sequence">5'-这里是核苷酸序列-3'</div>
  <img src="/images/2D/placeholder.svg" alt="2D structure" style="width:800px;height:350px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">

  <div class="blowheader_box">3D visualisation</div>             
  <p>描述3D结构信息，包括PDB ID等。</p>
  <p>更多结构信息可通过以下链接访问：<a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a></p>
  
  <div class="blowheader_box">Binding pocket</div>             
  <p>描述结合口袋信息。</p>
  <table class="binding-pocket-table" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
    <tr>
      <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
        <img src="/images/Binding_pocket/placeholder1.svg" alt="binding pocket" style="width:500px;margin-top: 0px;margin-bottom: 0px;">
      </td>
      <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
        <img src="/images/Binding_pocket/placeholder2.svg" alt="binding pocket" style="width:500px;margin-top: 0px;margin-bottom: 0px;">
      </td>
    </tr>
  </table>
</div>

<div class="content-section">
  <h2 class="section-title" id="ligand-information">Ligand information</h2>
  
  <div class="blowheader_box">SELEX ligand</div>
  <p>描述SELEX配体信息。</p>
  <img src="/images/SELEX_ligand/placeholder.svg" alt="SELEX ligands" class="img-responsive">

  <div class="blowheader_box">Structure ligand</div>
  <p>描述结构配体信息。</p>

  <div class="info-box">
    <p><b>PubChem CID:</b> <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank"><b>PubChem数据库</b></a>中物质的唯一标识符。</p>
    <p><b><a href="https://commonchemistry.cas.org/" target="_blank"><b>CAS</b></a>编号:</b> 化学物质的全球注册号。</p>
    <p><b><a href="https://go.drugbank.com/" target="_blank"><b>Drugbank</b></a>:</b> 提供药物和药物靶点详细信息的综合数据库。</p>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>PubChem CID</th>
        <th>分子式</th>
        <th>分子量</th>
        <th>CAS</th>
        <th>溶解度</th>
        <th>Drugbank ID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>配体名称</td>
        <td><a href="#" target="_blank">ID</a></td>
        <td>C<sub>x</sub>H<sub>y</sub>N<sub>z</sub>O<sub>w</sub></td>
        <td>xx.xx g/mol</td>
        <td><a href="#" target="_blank">CAS号</a></td>
        <td>溶解度信息</td>
        <td><a href="#" target="_blank">DB00xxx</a></td>
      </tr>
    </tbody>
  </table>

  <div class="structure-images">
    <img src="/images/Structure_ligand/placeholder1.svg" alt="Structure ligand 1" class="img-responsive">
    <img src="/images/Structure_ligand/placeholder2.svg" alt="Structure ligand 2" class="img-responsive">
  </div>

  <div class="blowheader_box">Similar compound(s)</div>
  <p>描述相似化合物信息。</p>

  <div class="info-box">
    <p><b>ZINC ID:</b> <a href="https://zinc15.docking.org/" target="_blank"><b>ZINC数据库</b></a>使用的化合物标识符，这是用于虚拟筛选药物分子的最大存储库之一。</p>
    <p><b>PubChem CID:</b> <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank"><b>PubChem数据库</b></a>中物质的唯一标识符。</p>
    <p><b><a href="https://commonchemistry.cas.org/" target="_blank"><b>CAS</b></a>编号:</b> 化学物质的全球注册号。</p>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>ZINC ID</th>
        <th>名称</th>
        <th>CAS</th>
        <th>Pubchem CID</th>
        <th>结构</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#" target="_blank">ZINCxxxxxxxx</a></td>
        <td>化合物名称</td>
        <td><a href="#" target="_blank">CAS号</a></td>
        <td><a href="#" target="_blank">ID</a></td>
        <td><img src="/images/Similar_compound/placeholder.svg" alt="drawing" style="width:500px" /></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="content-section">
  <h2 class="section-title" id="references">References</h2>
                
<a id="ref1"></a><font><strong>[1] 参考文献标题.</strong></font><br />
作者.<br />
<a href="#" target="_blank" style="color:#520049">期刊, 卷(期), 页码. (年份)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] 参考文献标题.</strong></font><br />
作者.<br />
<a href="#" target="_blank" style="color:#520049">期刊, 卷(期), 页码. (年份)</a>
<br />
</div>
</body>
</html> 