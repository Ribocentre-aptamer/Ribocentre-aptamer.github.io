---
layout: post
title:  "NX-213 aptamer"
date:   2024-05-19 00:00:00
author: Bo Fu, Jiali Wang
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
<font>Louis S Green and Derek Jellinek et al. reported aptamers with affinity for VEGF in their article published in 1995<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In their work published in 1995, Louis S Green and Derek Jellinek et al. used SELEX to isolate RNA aptamer sequences with affinity for VEGF from a nucleic acid library containing about 6×10<sup>14</sup> sequences after 11 rounds of selection process<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-ACCCUGAUGGUAGACGCCGGGGUG-3'</p></font>
<img src="/images/2D/24A_aptamer_2D.svg" alt="drawing" style="width:800px;height:300px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>VEGF active in angiogenesis, vasculogenesis and endothelial cell growth. Induces endothelial cell proliferation, promotes cell migration, inhibits apoptosis and induces permeabilization of blood vessels. Binds to the FLT1/VEGFR1 and KDR/VEGFR2 receptors, heparan sulfate and heparin. Binds to the NRP1/neuropilin-1 receptor. Binding to NRP1 initiates a signaling pathway needed for motor neuron axon guidance and cell body migration, including for the caudal migration of facial motor neurons from rhombomere 4 to rhombomere 6 during embryonic development (By similarity). Also binds the DEAR/FBXW7-AS1 receptor.-----From Uniprot</p>
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
        <td name="td0">VEGF</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P49767/entry" target="_blank" style="color:#520049"><b>P49767</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/protein/UniProt/P49767/entry/pfam/#table" target="_blank" style="color:#520049"><b>P49767</b></a></td>
        <td name="td3">46.883 kDa</td>
        <td name="td4">MHLLGFFSVACSLLAAALLPGPREAPAAAAAFESGLDLSDAEPDAGEATAYASKDLEEQLRSVSSVDELMTVLYPEYWKMYKCQLRKGGWQHNREQANLNSRTEETIKFAAAHYNTEILKSIDNEWRKTQCMPREVCIDVGKEFGVATNTFFKPPCVSVYRCGGCCNSEGLQCMNTSTSYLSKTLFEITVPLSQGPKPVTISFANHTSCRCMSKLDVYRQVHSIIRRSLPATLPQCQAANKTCPTNYMWNNHICRCLAQEDFMFSSDAGDDSTDGFHDICGPNKELDEETCQCVCRAGLRPASCGPHKELDRNSCQCVCKNKLFPSQCGANREFDENTCQCVCKRTCPRNQPLNPGKCACECTESPQKCLLKGKKFHHQTCSCYRRPCTNRQKACEPGFSYSEEVCRCVPSYWKRPQMS</td>
        <td name="td5">
        <a href="https://www.rcsb.org/structure/2X1X" target="_blank" style="color:#520049"><b>2X1X</b></a><br>
        <a href="https://www.rcsb.org/structure/4BSK" target="_blank" style="color:#520049"><b>4BSK</b></a>
        </td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/7424" target="_blank" style="color:#520049"><b>7424</b></a></td>
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
      <td name="td0">NX-213</td>
      <td name="td1">5'-ACCCUGAUGGUAGACGCCGGGGUG-3'</td>
      <td name="td2">NA</td>
      <td name="td3">0.14 ± 0.01 nM</td>
    </tr>
     <tr>
      <td name="td0">NX-178</td>
      <td name="td1">5'-ACCCUGAUGGUAGACGCCGGGGUG-3'</td>
      <td name="td2">NA</td>
      <td name="td3">2.4 ± 0.5 nM</td>
    </tr>
     <tr>
      <td name="td0">NX-191</td>
      <td name="td1">5'-ACCCUGAUGGUAGACGCCGGGGUG-3'</td>
      <td name="td2">NA</td>
      <td name="td3">250 ± 130 nM</td>
    </tr>
     <tr>
      <td name="td0">NX-223</td>
      <td name="td1">5'-ACCCUGAUGGUAGACGCCGGGGUG-3'</td>
      <td name="td2">NA</td>
      <td name="td3">250 ± 100 nM</td>
    </tr>
     <tr>
      <td name="td0">NX-224</td>
      <td name="td1">5'-ACCCUGAUGGUAGACGCCGGGGUG-3'</td>
      <td name="td2">NA</td>
      <td name="td3">320 ±70 nM</td>
    </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/24A_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">2XV7-A </td>
      <td name="td1">12.6</td>
      <td name="td2">1.5</td>
      <td name="td3">Vascular endothelial growth factor D</td>
    </tr>
            
     <tr>
      <td name="td0">1FZV-b </td>
      <td name="td1">10.9</td>
      <td name="td2">3.0</td>
      <td name="td3">Placenta growth factor</td>
    </tr>
            
     <tr>
      <td name="td0">2GNN-C </td>
      <td name="td1">10.4</td>
      <td name="td2">3.9</td>
      <td name="td3">Vascular endothelial growth factor homolog</td>
    </tr>
            
     <tr>
      <td name="td0">3MJK-A </td>
      <td name="td1">9.4</td>
      <td name="td2">3.3</td>
      <td name="td3">Platelet-derived growth factor subunit A</td>
    </tr>
            
     <tr>
      <td name="td0">4NT5-A</td>
      <td name="td1">6.6</td>
      <td name="td2">2.7</td>
      <td name="td3">Von willebrand factor</td>
    </tr>
            
     <tr>
      <td name="td0">5BPU-A </td>
      <td name="td1">6.0</td>
      <td name="td2">3.4</td>
      <td name="td3">Norrin</td>
    </tr>
            
     <tr>
      <td name="td0">8END-A</td>
      <td name="td1">6.0</td>
      <td name="td2">3.1</td>
      <td name="td3">Bursicon</td>
    </tr>
            
     <tr>
      <td name="td0">2ASK-A</td>
      <td name="td1">5.7</td>
      <td name="td2">3.3</td>
      <td name="td3">Artemin</td>
    </tr>
            
     <tr>
      <td name="td0">4MQW-B</td>
      <td name="td1">5.5</td>
      <td name="td2">2.1</td>
      <td name="td3">Glycoprotein hormones, alpha polypeptide</td>
    </tr>
            
     <tr>
      <td name="td0">8I2G-Y</td>
      <td name="td1">5.3</td>
      <td name="td2">2.2</td>
      <td name="td3">Chimera of guanine nucleotide-binding protein g(s</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Nuclease-resistant nucleic acid ligands to vascular permeability factor/vascular endothelial growth factor.</strong></font><br />
Green, L. S., Jellinek, D., Bell, C., Beebe, L. A., Feistner, B. D., Gill, S. C., Jucker, F. M., & Janjić, N.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9383475/" target="_blank" style="color:#520049">Chemistry & biology, 2(10), 683–695. (1995)</a>
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