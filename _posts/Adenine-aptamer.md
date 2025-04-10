---
layout: post
title:  "Adenine aptamer"
date:   2024-05-10 00:00:00
author: Linfei Li, Yuhang Luo
categories: Aptamer
---
<html>
<head>
  <style>
    /* 按钮容器样式 */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
    }
    /* 按钮样式 */
    .button {
      display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #ffffff;
      color: #520049;
      text-decoration: none;
      border: 1px solid #520049;
      border-radius: 5px;
    }
    /* 鼠标悬停样式 */
    .button:hover {
      background-color: #c9c5c5;
      cursor: pointer;
    }
  </style>
</head>
</html>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
    display: block;
    font-size: 24px;
    background-color: #ffffff;
    text-decoration: none;
    border-radius: 1px;
    width: 500px;
    border-width: 1px 1px 2px 1px;
    border-color: #ffffff #ffffff #ffffff #ffffff;
}
.blowheader_box{
    display: block;
      padding: 6px;
      font-size:20px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 1px;
      width:170px;
      height:40px;
  }
  .box_style{
    background: #ffffff;
  }
  blockquote {
  margin: 0 0 0px;
  }
</style>
</head>
<br>
<br>

<div class="side-nav">
<ul>
    <div class="side-nav-item"><li><a href="#description" style="color: #000000;">Description</a></li></div>
    <div class="side-nav-item"><li><a href="#SELEX" style="color: #000000;">SELEX</a></li></div>
    <div class="side-nav-item"><li><a href="#Structure" style="color: #000000;">Structure</a></li></div>
    <div class="side-nav-item"><li><a href="#ligand-recognition" style="color: #000000;">Ligand information</a></li></div>
    <div class="side-nav-item"><li><a href="#references" style="color: #000000;">References</a></li></div>
    </ul>
</div>



<font><p class="header_box" id="description">Description</p></font>
<font>In 2002, Meli and Décout discovered that the adenine binding site consists of two separate secondary structure elements forming a two-part binding site that interacts with adenine in a novel manner of purine recognition<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Meli and Décout used an in vitro screening technique, starting with a pool of RNA opened with a random sequence of 50 nucleotides, and after 12 rounds of screening, cloning resulted in 18 different sequences<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. In addition, an analytical affinity column was run under isocratic conditions to determine an approximate dissociation constant (Kd) for the RNA-ligand interaction. The 2D structure of the figure is based on the article by ribodraw tool to draw. We used the minimum free energy (MFE) structure. RNA 12 E4 aptamer binding to Adenine.<br></font>
<font><p>5'-GGGAGAGGAUACUACACGUGAUAGGACGAUUAUCGAAAAUCACCAGAUUGGACCCUGGUUAACGAUCCAUUGCAUGUAGCAGAAGCUUCCG-3'</p></font>
<img src="/images/2D/Adenine_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Adenine is a purine base which forms a component of DNA among other functions and is present in many multivitamins.-----From Drugbank</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Molecular Formula</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">CAS</th>
        <th onclick="sortTable(4)">Solubility</th>
        <th onclick="sortTable(5)">PubChem</th>
        <th onclick="sortTable(6)">Drug ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">Adenine</td>
        <td name="td1">C<sub>5</sub>H<sub>5</sub>N<sub>5</sub></td>
        <td name="td2">135.13 g/mol</td>
        <td name="td3">73-24-5</td>
        <td name="td4">1030mg/L (at 25 °C)</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/190" target="_blank" style="color:#520049"><b>190</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB00173" target="_blank" style="color:#520049"><b>DB00173</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Adenine_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<p class="blowheader_box">Similar compound</p>                    
<p>We screened the compounds with great similarity to by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID. For another compound, we used a similar compound query method from the PubChem database.</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Zinc_id</th>
        <th onclick="sortTable(1)">Named</th>
        <th onclick="sortTable(2)">CAS</th>
        <th onclick="sortTable(3)">Pubchem CID</th>
        <th onclick="sortTable(4)">Structure</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0">ZINC882</td>
        <td name="td1">Adenine</td>
        <td name="td2">73-24-5</td>
        <td name="td3">190</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC13544284</td>
        <td name="td1">2-Azaadenine</td>
        <td name="td2">2308-56-7</td>
        <td name="td3">5480214</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC18188160</td>
        <td name="td1">1H-imidazo[4,5-c]pyridin-4-amine</td>
        <td name="td2">6811-77-4</td>
        <td name="td3">418745</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC669370153</td>
        <td name="td1">7-methyl-1H-imidazo[4,5-b]pyridin-6-amine</td>
        <td name="td2">NA</td>
        <td name="td3">118094694</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC255987181</td>
        <td name="td1">CID 76852915</td>
        <td name="td2">NA</td>
        <td name="td3">76852915</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC12503143</td>
        <td name="td1">1-methyl-9H-purin-6-amine</td>
        <td name="td2">NA</td>
        <td name="td3">444453</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC13518237</td>
        <td name="td1">4-Amino-7H-pyrrolo[2,3-d]pyrimidine</td>
        <td name="td2">1500-85-2</td>
        <td name="td3">5359620</td>
        <td name="td4"><img src="/images/Similar_compound/Adenine_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1]  Adenine-aptamer complexes: a bipartite RNA site that binds the adenine nucleic base.</strong></font><br/>
Meli, M., Vergne, J., Décout, J. L., & Maurel, M. C.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/11705996/" target="_blank" style="color:#520049">The Journal of biological chemistry, 277(3), 2104–2111. (2002)</a>
<br/>





<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- Molstar CSS & JS -->
      <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.1.css">
      <script src="/js/mol/ro_pdbe-molstar-plugin-1.2.1.js"></script>
        <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          .msp-plugin ::-webkit-scrollbar-thumb {
              background-color: #474748  !important;
          }
          .msp-plugin .msp-layout-standard {
              border: 1px solid #efefef;
          }
          .viewerSection1 {
            padding-top: 0px;
          }
          .controlsSection1 {
            width: 300px;
              display: flex;
              float:left;
              padding: 0px 0 0 0;
              height:25px;
            }
            .controlBox1 {
              border: 0px solid lightgray;
              padding: 0px;
              margin-bottom: 0px;
            }
          #myViewer1{
            float:left;
            width:500px;
            height: 500px;
            position:relative;
          }
        </style>
    </head>
    <script>
      var viewerInstance1 = new PDBeMolstarPlugin();
      var options1 = {
        customData:{
        url:'/pdbfiles/1RAW-3D.pdb',
        format: 'pdb'},
        expanded: false,
        hideControls: true,
        bgColor: {r:255, g:255, b:255},
        }
      var viewerContainer1 = document.getElementById('myViewer1');
      viewerInstance1.render(viewerContainer1, options1);
  window.addEventListener('load', function() {
    var colorSelectionButton1 = document.querySelector('.controlsSection1 button');
    colorSelectionButton1.click();
  });
    </script>


<script>
    window.addEventListener('DOMContentLoaded', function() {
      var td = document.getElementsByName('td4')[0];
      var maxLength = 100; // 设置最大长度
      var originalText = td.innerHTML;
      var displayedText = originalText.substring(0, maxLength);
      
      if (originalText.length > maxLength) {
        displayedText += '<span class="ellipsis-btn">......</span>'; // 在超出长度时添加省略号按钮
        displayedText += '<span class="hidden-content">' + originalText.substring(maxLength) + '</span>'; // 隐藏的内容
        td.innerHTML = displayedText;
        
        // 获取省略号按钮元素和隐藏的内容元素
        var ellipsisBtn = td.querySelector('.ellipsis-btn');
        var hiddenContent = td.querySelector('.hidden-content');
        
        // 添加点击事件监听器
        ellipsisBtn.addEventListener('click', function() {
          if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'inline'; // 展开内容
            ellipsisBtn.innerHTML = '...'; // 更新按钮文字为“...”
            td.appendChild(ellipsisBtn); // 将按钮移到内容后面
          } else {
            hiddenContent.style.display = 'none'; // 收起内容
            ellipsisBtn.innerHTML = '......'; // 更新按钮文字为省略号
            td.appendChild(ellipsisBtn); // 将按钮移到内容后面
          }
        });
      }
    });
  </script>
</html>