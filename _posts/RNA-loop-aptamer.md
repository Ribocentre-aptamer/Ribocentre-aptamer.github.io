---
layout: post
title:  "RNA loop aptamer"
date:   2024-06-18 00:00:00
author: Ke Chen, Yangyi Ren
categories: Aptamer
---
<!--p style="font-size: 24px"><strong>Keywords: </strong> <br/></p>
<font ><strong>small molecule, Synthetic, dyes, PubChem CID 25863</strong></font >
<br /-->

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
<font>In 1997, Bongrae Cho and colleagues used the systematic evolution of ligands by exponential enrichment (SELEX) to isolate high affinity RNA aptamers that bind to the RNA stem-loop. The RNA used for selection was a small stem-loop which was prepared by in vitro transcription<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 1997, Bongrae Cho and colleagues used a blocking deoxynucleotide to select against species in the RNA library which bound to the target RNA stem-loop by W-C base pairing. The winning RNA aptamer was identified by affinity chromatography and gel-shift<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>g18_04 aptamer was the aptamer sequence mainly studied in the article, which had a high affinity with RNA stem-loop. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGGGUCUGUGCGCAAAACCAUCGGCCCUGGUGCCUAUGUGCGUCUACAUGGAUCCUCA-3'</p></font>
<img src="/images/2D/g18_04_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>The target stem-loop RNA was designed by the authors themselves. The target stem-loop RNA designed by the author includes the stem sequence is the same as that of Bacillus subtilis RNase P RNA P5.1 domain. Although the stem-loop RNA is 3 nt longer than the latter.</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Gene ID</th>
        <th onclick="sortTable(2)">Pfam</th>
        <th onclick="sortTable(3)">MW</th>
        <th onclick="sortTable(4)">Nucleic acid sequences</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">RNA stem-loop</td>
        <td name="td1">NA</td>
        <td name="td2"><a href="https://rfam.org/family/RF00011" target="_blank" style="color:#520049"><b>RF00011</b></a></td>
        <td name="td3">105.48 kDa</td>
        <td name="td4">GCGAGCCUAGCGAAGUCAUAAGCUAGGGCAGUCUUUAGAGGCUGACGGCAGGAAAAAAGCCUACGUCUUCGGAUAUGGCUGAGUAUCCUUGAAAGUGCCACAGUGACGAAGUCUCACUAGAAAUGGUGAGAGUGGAACGCGGUAAACCCCUCGCA</td>
        <td name="td5">NA</td>
      </tr>
	  </tbody>
  </table>

  <p>Some isolated sequences bind to the affinity of the nucleic acid.</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Sequence</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
      <td name="td0">g18_04</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGGGUCUGUGCGCAAAACCAUCGGCCCUGGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">70 nM</td>
    </tr>
            
     <tr>
      <td name="td0">g18_01</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGGGUCUGUGCGCAAAACCAUCGUCCCGGGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
            
     <tr>
      <td name="td0">g18_06</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUUUCCUUAGGGGUUCAGUUGUUUCGCGCAUGAACGGCAUCAGUGCACCGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
            
     <tr>
      <td name="td0">g18_09</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUAGUUGAUCGAGCGUGUUAGUUCUCCAAUCUCUGUGUAGCGUGGAGCUGGGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
            
     <tr>
      <td name="td0">g18_10</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGUGUCUGUGCGCAAAACCAUCGGCCCGGGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
            
     <tr>
      <td name="td0">g18_11</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGGGUCUGUGCGCAAAACCAUCGGCCCGGGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
            
     <tr>
      <td name="td0">g18_12</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGUGUCUGUGCGCAAAACCAUAGGCCCGGGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
            
     <tr>
      <td name="td0">g12_03</td>
      <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCCGAAGCAUUCCGGCGUAGGGGUCUGUGCGCAAAACUAUCGGCCCGGGUGCCUAUGUGCGUCUACAUGGAUCCUCA</td>
      <td name="td2">RNA stem-loop</td>
      <td name="td3">NA</td>
    </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/g18_04_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>


<p class="blowheader_box">Similar compound</p>                    
<font><p>Researchers generate a mapping between European Nucleotide Archive (ENA), Protein Data Bank (PDB) and Rfam coordinate systems for those sequences which have a structure in the PDB. The ENA provides a comprehensive record of the world’s nucleotide sequencing information, covering raw sequencing data, sequence assembly information and functional annotation. Bit score is a relative score used to measure the similarity of a sequence alignment. It is calculated based on a comparison between the score of the alignment sequence and the expected score of the random model. A higher Bit score means that the comparison results are more similar and likely to be more reliable. The list of neighbours is sorted by Bit score.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(0)">PDB</th>
        <th onclick="sortTable(1)">PDB Residues</th>
        <th onclick="sortTable(2)">Bit score</th>
      </tr>
      </thead>
    <tbody>
     <tr>
      <td name="td0">2A64-A</td>
      <td name="td1">8-404</td>
      <td name="td2">326.8</td>
    </tr>
            
     <tr>
      <td name="td0">3DHS-A</td>
      <td name="td1">8-255</td>
      <td name="td2">181.4</td>
    </tr>
            
     <tr>
      <td name="td0">1NBS-A</td>
      <td name="td1">1-154</td>
      <td name="td2">145.9</td>
    </tr>
            
     <tr>
      <td name="td0">1NBS-B</td>
      <td name="td1">1-154</td>
      <td name="td2">145.9</td>
    </tr>
    </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Interacting RNA species identified by combinatorial selection.</strong></font><br />
Cho, B., Taylor, D. C., Nicholas, H. B., Jr, & Schmidt, F. J. <br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9222504/" target="_blank" style="color:#520049">Bioorganic & medicinal chemistry, 5(6), 1107–1113. (1997)</a>
<br/>




<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- Molstar CSS & JS -->
      <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.1.css">
      <script src="/js/mol/pdbe-molstar-plugin.js"></script>
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
