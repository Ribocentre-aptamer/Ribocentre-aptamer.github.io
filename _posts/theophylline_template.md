---
layout: theophylline_style
title:  "模板示例"
date:   2024-05-20 00:00:00
author: 作者名
categories: Aptamer
---
<html>
<head>
  <style>
    /* 这里可以添加额外的页面特定样式 */
  </style>
</head>
<body>
  <!-- 阅读进度条、导航球和导航菜单由布局自动插入 -->

  <!-- Timeline部分 -->
  <div class="content-section">
    <h2 class="section-title" id="timeline">Timeline</h2>
    <div class="timeline">
      <div class="entry">
        <div class="title">
          <h3><a href="#" target="_blank" style="color:#520049">2020</a></h3>
        </div>
        <div class="body">
          <p>示例事件描述<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
        </div>
      </div>
      <div class="entry">
        <div class="title">
          <h3><a href="#" target="_blank" style="color:#520049">2021</a></h3>
        </div>
        <div class="body">
          <p>示例事件描述<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Description部分 -->
  <div class="content-section">
    <h2 class="section-title" id="description">Description</h2>
    <p>在这里添加描述内容。可以使用 <span class="highlight-text">高亮文本</span> 强调关键词。</p>
  </div>

  <!-- SELEX部分 -->
  <div class="content-section">
    <h2 class="section-title" id="SELEX">SELEX</h2>
    <p>SELEX部分的详细内容...</p>
    <p>更多相关内容在 <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> 页面。</p>
  </div>

  <!-- Structure部分 -->
  <div class="content-section">
    <h2 class="section-title" id="Structure">Structure</h2>
    <div class="blowheader_box">2D representation</div>
    <p>在这里描述2D结构信息。</p>
    <div class="sequence">5'-GGCAUACCAGCCGAAAGGCCCUUGGCAGCGUC-3'</div>
    <img src="/images/2D/example_2D.svg" alt="2D structure" style="width:800px;height:350px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">

    <div class="blowheader_box">3D visualisation</div>
    <p>在这里描述3D结构信息。</p>
    <!-- 3D结构查看器表格 -->
    <table class="structure-table" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <tr>
        <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
          <img src="/images/3D/example_3D.svg" alt="3D structure" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
        </td>
        <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
          <!-- 这里可以添加3D查看器组件 -->
        </td>
      </tr>
    </table>
  </div>

  <!-- Ligand信息部分 -->
  <div class="content-section">
    <h2 class="section-title" id="ligand-recognition">Ligand information</h2>
    
    <div class="blowheader_box">SELEX ligand</div>
    <p>这里描述SELEX配体的信息。</p>
    <img src="/images/SELEX_ligand/example_SELEX_ligand.svg" alt="SELEX ligands" class="img-responsive">

    <div class="blowheader_box">Structure ligand</div>
    <p>这里描述结构配体的信息。</p>

    <div class="info-box">
      <p><b>PubChem CID:</b> 数据库ID</p>
      <p><b>CAS number:</b> CAS编号</p>
      <p><b>Drugbank:</b> 药物数据库信息</p>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>PubChem CID</th>
          <th>Formula</th>
          <th>Weight</th>
          <th>CAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>示例配体</td>
          <td><a href="#" target="_blank">12345</a></td>
          <td>C₂H₅OH</td>
          <td>46.07 g/mol</td>
          <td><a href="#" target="_blank">64-17-5</a></td>
        </tr>
      </tbody>
    </table>

    <div class="structure-images">
      <img src="/images/Structure_ligand/example_stru_ligand1.svg" alt="Structure ligand 1" class="img-responsive">
      <img src="/images/Structure_ligand/example_stru_ligand2.svg" alt="Structure ligand 2" class="img-responsive">
    </div>

    <div class="blowheader_box">Similar compound(s)</div>
    <p>这里描述相似化合物的信息。</p>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CAS</th>
          <th>Pubchem CID</th>
          <th>Structure</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#" target="_blank">示例ID</a></td>
          <td>示例名称</td>
          <td><a href="#" target="_blank">12345-67-8</a></td>
          <td><a href="#" target="_blank">12345</a></td>
          <td><img src="/images/Similar_compound/example_compound.svg" alt="Similar compound" style="width:500px" /></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 参考文献部分 -->
  <div class="content-section">
    <h2 class="section-title" id="references">References</h2>
                
    <a id="ref1"></a><font><strong>[1] 示例参考文献标题1.</strong></font><br />
    示例作者1<br />
    <a href="#" target="_blank" style="color:#520049">示例期刊信息1</a>
    <br />
                
    <a id="ref2"></a><font><strong>[2] 示例参考文献标题2.</strong></font><br />
    示例作者2<br />
    <a href="#" target="_blank" style="color:#520049">示例期刊信息2</a>
    <br />
  </div>
</body>
</html> 