---
layout: post
title:  "TR-D28 aptamer"
date:   2024-05-22 00:00:00
author: Bo Fu, Jiali Wang
categories: Aptamer
---
<html>
<head>
  <title>横向排列的点击按钮</title>
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
<font>Michael Blind and Waldemar Kolanus et al. reported aptamers with affinity for CD18 in their article published in 1998<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In their work published in 1999, Michael Blind and Waldemar Kolanus et al. used SELEX to isolate RNA aptamer sequences with affinity for CD18 from a nucleic acid library containing about 5×10<sup>14</sup> sequences with after 11 rounds of selection process<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGCGCUAAGUCCUCGCUCAUACAACGAGGGGUCGUGUAGGGAUGUAUGGGCUUGGACACACGCGCGACUCGGAUCCUAC-3'</p></font>
<img src="/images/2D/TR-D28_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>In molecular biology, CD18 (Integrin beta chain-2) is an integrin beta chain protein that is encoded by the ITGB2 gene in humans. Upon binding with one of a number of alpha chains, CD18 is capable of forming multiple heterodimers, which play significant roles in cellular adhesion and cell surface signaling, as well as important roles in immune responses. CD18 also exists in soluble, ligand binding forms. Deficiencies in CD18 expression can lead to adhesion defects in circulating white blood cells in humans, reducing the immune system's ability to fight off foreign invaders.-----From Wikipedia</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Uniprot ID</th>
        <th onclick="sortTable(2)">Pfam</th>
        <th onclick="sortTable(3)">MW</th>
        <th onclick="sortTable(4)">Amino acids sequences</th>
        <th onclick="sortTable(5)">PDB</th>
        <th onclick="sortTable(6)">Gene ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">CD18</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb?query=CD18" target="_blank" style="color:#520049"><b>CD18</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00362/" target="_blank" style="color:#520049"><b>PF00362</b></a></td>
        <td name="td3">84.791 kDa</td>
        <td name="td4">MLGLRPPLLALVGLLSLGCVLSQECTKFKVSSCRECIESGPGCTWCQKLNFTGPGDPDSIRCDTRPQLLMRGCAADDIMDPTSLAETQEDHNGGQKQLSPQKVTLYLRPGQAAAFNVTFRRAKGYPIDLYYLMDLSYSMLDDLRNVKKLGGDLLRALNEITESGRIGFGSFVDKTVLPFVNTHPDKLRNPCPNKEKECQPPFAFRHVLKLTNNSNQFQTEVGKQLISGNLDAPEGGLDAMMQVAACPEEIGWRNVTRLLVFATDDGFHFAGDGKLGAILTPNDGRCHLEDNLYKRSNEFDYPSVGQLAHKLAENNIQPIFAVTSRMVKTYEKLTEIIPKSAVGELSEDSSNVVHLIKNAYNKLSSRVFLDHNALPDTLKVTYDSFCSNGVTHRNQPRGDCDGVQINVPITFQVKVTATECIQEQSFVIRALGFTDIVTVQVLPQCECRCRDQSRDRSLCHGKGFLECGICRCDTGYIGKNCECQTQGRSSQELEGSCRKDNNSIICSGLGDCVCGQCLCHTSDVPGKLIYGQYCECDTINCERYNGQVCGGPGRGLCFCGKCRCHPGFEGSACQCERTTEGCLNPRRVECSGRGRCRCNVCECHSGYQLPLCQECPGCPSPCGKYISCAECLKFEKGPFGKNCSAACPGLQLSNNPVKGRTCKERDSEGCWVAYTLEQQDGMDRYLIYVDESRECVAGPNIAAIVGGTVAGIVLIGILLLVIWKALIHLSDLREYRRFEKEKLKSQWNNDNPLFKSATTTVMNPKFAES</td>
        <td name="td5">
        <a href="https://www.rcsb.org/structure/1YUK" target="_blank" style="color:#520049"><b>1YUK</b></a><br>
        <a href="https://www.rcsb.org/structure/2P26" target="_blank" style="color:#520049"><b>2P26</b></a><br>
        <a href="https://www.rcsb.org/structure/3K6S" target="_blank" style="color:#520049"><b>3K6S</b></a>
        </td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/3689" target="_blank" style="color:#520049"><b>3689</b></a></td>
      </tr>
	  </tbody>
  </table>

<p>Some isolated sequences bind to the affinity of the protein.</p>
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
        <td name="td0">TR-D28 aptamer</td>
        <td name="td1">5'-GGGCGCUAAGUCCUCGCUCAUACAACGAGGGGUCGUGUAGGGAUGUAUGGGCUUGGACACACGCGCGACUCGGAUCCUAC-3'</td>
        <td name="td2">CD18</td>
        <td name="td3">NA</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/TR-D28_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<p class="blowheader_box">Similar compound</p>                    
<font><p>We used the Dail server website to compare the structural similarities of ligand proteins, and chose the top 10 in terms of similarity for presentation. The Dali server is a network service for comparing protein structures in 3D. Dali compares them against those in the Protein Data Bank (PDB). Z-score is a standard score that is converted from an original score. The list of neighbours is sorted by Z-score. Similarities with a Z-score lower than 2 are spurious. RMSD (Root Mean Square Deviation) value is used to measure the degree to which atoms deviate from the alignment position.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(0)">PDB</th>
        <th onclick="sortTable(1)">Z-socre</th>
        <th onclick="sortTable(2)">RMSD</th>
        <th onclick="sortTable(3)">Description</th>
      </tr>
      </thead>
    <tbody>
      <tr>
      <td name="td0">5E6W-A</td>
      <td name="td1">24.0</td>
      <td name="td2">6.1</td>
      <td name="td3">Integrin beta-2                                           </td>
    </tr>
            
     <tr>
      <td name="td0">1JV2-B</td>
      <td name="td1">15.0</td>
      <td name="td2">2.3</td>
      <td name="td3">Integrin, alpha V                                        </td>
    </tr>
            
     <tr>
      <td name="td0">8T2V-B</td>
      <td name="td1">14.2</td>
      <td name="td2">4.7</td>
      <td name="td3">Integrin alpha-IIB                                      </td>
    </tr>
            
     <tr>
      <td name="td0">8JMW-A </td>
      <td name="td1">9.5</td>
      <td name="td2">11.3</td>
      <td name="td3">S8 family serine peptidase                                </td>
    </tr>
            
     <tr>
      <td name="td0">6FVI-A </td>
      <td name="td1">9.0</td>
      <td name="td2">2.1</td>
      <td name="td3">Centrosomal protein of 192 kDa                            </td>
    </tr>
            
     <tr>
      <td name="td0">8K2G-A</td>
      <td name="td1">8.4</td>
      <td name="td2">3.1</td>
      <td name="td3">Oligosaccharide-releasing beta-N-acetylgalactosam          </td>
    </tr>
            
     <tr>
      <td name="td0">7PTB-A</td>
      <td name="td1">8.3</td>
      <td name="td2">8.5</td>
      <td name="td3">Centrosomal protein of 192 kDa                            </td>
    </tr>
            
     <tr>
      <td name="td0">2E6J-A</td>
      <td name="td1">8.3</td>
      <td name="td2">2.1</td>
      <td name="td3">Hydin protein                                             </td>
    </tr>
            
     <tr>
      <td name="td0">6LP4-A</td>
      <td name="td1">8.3</td>
      <td name="td2">2.5</td>
      <td name="td3">Vesicle-associated membrane protein-associated PR          </td>
    </tr>
            
     <tr>
      <td name="td0">4UJ6-A</td>
      <td name="td1">8.1</td>
      <td name="td2">12.4</td>
      <td name="td3">Surface layer protein      </td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Cytoplasmic RNA modulators of an inside-out signal-transduction cascade.</strong></font><br />
Blind, M., Kolanus, W., & Famulok, M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/10097084/" target="_blank" style="color:#520049">Proceedings of the National Academy of Sciences of the United States of America, 96(7), 3606–3610. (1999)</a>
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