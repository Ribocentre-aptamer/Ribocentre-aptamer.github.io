---
layout: post
title:  "SARS-CoV N protein aptamer"
date:   2024-05-06 00:00:00
author: Jiali Wang, Bo Fu
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


<font ><p class="header_box" id="description">Description</p></font>
<font >In 2009, Ahn DG, Jeon IJ, Kim JD, et al. used the SELEX method to select the aptamer with high compatibility for the SARS-CoV nucleocapsid (N) protein. The aptamer antibody mixed immunoassay method they studied may be used for rapid and sensitive detection of SARS-CoV N protein, which has potential application value for improving the treatment and prognosis of SARS<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2009, Ahn DG, Jeon IJ, Kim JD, et al. screened an RNA aptamer pool with approximately 10<sup>14</sup> random, 40-nt long aptamers by SELEX to isolate those binding to SARS-CoV N protein. After a total of nine rounds of SELEX process, including five rounds of preliminary screening and four rounds of screening under more stringent conditions (a 5-fold reduction in the amount of N protein). After nine rounds of screening, the cDNA of the selected RNA population was cloned, and 17 independent clones were randomly selected for sequencing. They further validated the binding specificity and affinity of the selected aptamers with N protein through electrophoretic mobility change analysis (EMSA) and surface plasmon resonance (SPR) analysis<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw. Aptamer 1 binds to SARS-CoV nucleocapsid (N) protein<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGAGCGGAAGCGUGCUGGGCCUGUCGUUCGCUGUCUUGCUACGUUACGUUACACGGUUGGCAUAACCCAGAGGUCGAUGG-3'</p></font>
<img src="/images/2D/aptamer1_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>





<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Coronavirus (CoV) nucleocapsid (N) proteins have 3 highly conserved domains. The N-terminal domain (NTD) (N1b), the C-terminal domain (CTD)(N2b) and the N3 region. The N1b and N2b domains from SARS CoV, infectious bronchitis virus (IBV), human CoV 229E and mouse hepatic virus (MHV) display similar topological organisations. N proteins form dimers, which are asymmetrically arranged into octamers via their N2b domains. Domains N1b and N2b are linked by another domain N2a that contains an SR-rich region in which phosphorylation of specific serine residues allows the N protein to associate with the RNA helicase DDX1 permitting template read-through, and enabling the transition from discontinuous transcription of subgenomic mRNAs (sgmRNAs) to continuous synthesis of longer sgmRNAs and genomic RNA (gRNA). It has been shown that N proteins interact with nonstructural protein 3 (NSP3) and thus are recruited to the replication-transcription complexes (RTCs).-----From Pfam</p>
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
        <td name="td0">SARS-CoV nucleocapsid (N) protein</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P59595/entry" target="_blank" style="color:#520049"><b>P59595</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00937/" target="_blank" style="color:#520049"><b>PF00937</b></a></td>
        <td name="td3">13.913 kDa</td>
        <td name="td4">NTASWFTALTQHGKEELRFPRGQGVPINTNSGPDDQIGYYRRATRRVRGGDGKMKELSPRWYFYYLGTGPEASLPYGANKEGIVWVATEGALNTPKDHIGTRNPNNNAATVLQLPQGTTLPKGFYA</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2OFZ" target="_blank" style="color:#520049"><b>2OFZ</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/nuccore/AY278741" target="_blank" style="color:#520049"><b>AY278741</b></a></td>
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
        <td name="td0">apatamer 1</td>
        <td name="td1">5'-GGGAGAGCGGAAGCGUGCUGGGCCUGUCGUUCGCUGUCUUGCUACGUUACGUUACACGGUUGGCAUAACCCAGAGGUCGAUGG-3'</td>
        <td name="td2">SARS-CoV N protein</td>
        <td name="td3">1.65 ± 0.41 nM (equilibrium dissociation constant)<br>0.81 nM (apparent dissociation constant)</td>
      </tr>
	  </tbody>
     <tbody>
      <tr>
        <td name="td0">apatamer 2</td>
        <td name="td1">5'-GGGAGAGCGGAAGCGUGCUGGGCCUCAUUACACACAUCUCACGGGAGACAUAGCUGACGAUAUCCAUAACCCAGAGGUCGAUGG-3'</td>
        <td name="td2">SARS-CoV N protein</td>
        <td name="td3">3.35 nM (apparent dissociation constant)</td>
      </tr>
	  </tbody>
    </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/aptamer1_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
        <td name="td0">5N4K-A</td>
        <td name="td1">16.8</td>
        <td name="td2">1.8</td>
        <td name="td3">Nucleoprotein</td>
      </tr>
      <tr>
        <td name="td0">8FD5-A</td>
        <td name="td1">5.2</td>
        <td name="td2">3.5</td>
        <td name="td3">Nucleoprotein</td>
      </tr>
    </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] RNA aptamer-based sensitive detection of SARS coronavirus nucleocapsid protein.</strong></font><br />
Ahn, D. G., Jeon, I. J., Kim, J. D., Song, M. S., Han, S. R., Lee, S. W., Jung, H., & Oh, J. W.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/19684916/" target="_blank" style="color:#520049">The Analyst, 134(9), 1896–1901. (2009)</a>
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
