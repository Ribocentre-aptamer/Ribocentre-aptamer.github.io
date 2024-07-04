---
layout: post
title:  "HIV-1 CA-aptamer"
date:   2024-05-22 00:00:00
author: Jiali Wang, Chen Ke
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


<font ><p class="header_box" id="description">Description</p></font>
<font >In 2022, Gruenke PR, Aneja R, Welbourn S, et al. selexed for an RNA aptamer called CA15-2. The function of this aptamer is to specifically bind to the capsid lattice structure of HIV-1 and inhibit virus replication. Research has shown that CA15-2 selectively binds to the CA lattice rather than the CA monomer or CA hexamer, indicating that it may target an interface that exists only on the CA lattice and is easily accessible. In addition, the expression of CA15-2 in virus producing cells can inhibit the replication of HIV-1, but not in target cells, indicating that it may bind to a biologically relevant and accessible site during virus production, which may not be reachable in the subsequent replication step or remain unchanged after binding to the aptamer. Importantly, CA15-2 is the first identified aptamer that can specifically recognize the HIV-1 CA lattice<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2022, the RNA library Gruenke PR, Aneja R, Welbourn S, et al. used started with a random region containing 56N (56 nucleotides, where N represents any nucleotide), estimated to contain approximately 10<sub>15</sub> unique sequences. Through screening, the RNA adapter CA15-2 that can specifically bind to the CA lattice was ultimately obtained from the 15th round of screening. Multiple cloned sequences were identified using Sanger sequencing technology, including CA15-2<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw. PR10.1-8A aptamer binds to HIV-1 aspartyl protease(PR)<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGAAGAAGAGAAUCAUACACAAGAUCGACGUACCUCAGGGUGGUGUAUGACUGAGGUGAAGACUGUGAACCAUGGCAUGCGGGCAUAAGGUAGGUAAGUCCAUA-3'</p></font>
<img src="/images/2D/CA15_2_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
<br>
<br>

<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>

<p class="blowheader_box">SELEX ligand</p>
<p>Coronavirus (CoV) nucleocapsid (N) proteins have 3 highly conserved domains. The N-terminal domain (NTD) (N1b), the C-terminal domain (CTD)(N2b) and the N3 region. The N1b and N2b domains from SARS CoV, infectious bronchitis virus (IBV), human CoV 229E and mouse hepatic virus (MHV) display similar topological organisations. N proteins form dimers, which are asymmetrically arranged into octamers via their N2b domains. Domains N1b and N2b are linked by another domain N2a that contains an SR-rich region in which phosphorylation of specific serine residues allows the N protein to associate with the RNA helicase DDX1 permitting template read-through, and enabling the transition from discontinuous transcription of subgenomic mRNAs (sgmRNAs) to continuous synthesis of longer sgmRNAs and genomic RNA (gRNA). It has been shown that N proteins interact with nonstructural protein 3 (NSP3) and thus are recruited to the replication-transcription complexes (RTCs).-----from Pfam</p>
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
        <td name="td0">HIV-1 capsid (CA)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P12493/entry#structure" target="_blank" style="color:#520049"><b>P12493</b></a></td>
        <td name="td2">NA</td>
        <td name="td3">24.345 kDa</td>
        <td name="td4">PIVQNLQGQMVHQAISPRTLNAWVKVVEEKAFSPEVIPMFSALSEGATPQDLNTMLNTVGGHQAAMQMLKETINEEAAEWDRLHPVHAGPIAPGQMREPRGSDIAGTTSTLQEQIGWMTHNPPIPVGEIYKRWIILGLNKIVRMYSPTSILDIRQGPKEPFRDYVDRFYKTLRAEQASQEVKNWMTETLLVQNANPDCKTILKALGPGATLEEMMTAC</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/8FIU" target="_blank" style="color:#520049"><b>8FIU</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/nuccore/M19921" target="_blank" style="color:#520049"><b>M19921</b></a></td>
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
        <td name="td0">CA15-2</td>
        <td name="td1">5'-GGAAGAAGAGAAUCAUACACAAGAUCGACGUACCUCAGGGUGGUGUAUGACUGAGGUGAAGACUGUGAACCAUGGCAUGCGGGCAUAAGGUAGGUAAGUCCAUA-3'</td>
        <td name="td2">HIV-1 CA lattice</td>
        <td name="td3">350 ± 50 nM </td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/CA15_2_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>

<p class="blowheader_box">Similar compound</p>                    
<font><p>We used the Dail server website to compare the structural similarities of ligand proteins, and chose the top 10 in terms of similarity for presentation. The Dali server is a network service for comparing protein structures in 3D. Dali compares them against those in the Protein Data Bank (PDB). Z-score is a standard score that is converted from an original score. The list of neighbours is sorted by Z-score. Similarities with a Z-score lower than 2 are spurious. RMSD(Root Mean Square Deviation) value is used to measure the degree to which atoms deviate from the alignment position.</p></font>
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
      <td name="td0">7ASL-A</td>
      <td name="td1">19.6</td>
      <td name="td2">11.0</td>
      <td name="td3">Gag protein</td>
    </tr>
     <tr>
      <td name="td0">1L6N-A</td>
      <td name="td1">19.1</td>
      <td name="td2">3.2</td>
      <td name="td3">Gag polyprotein</td>
    </tr>
     <tr>
      <td name="td0">2XGU-A</td>
      <td name="td1">17.8</td>
      <td name="td2">2.6</td>
      <td name="td3">Relik capsid N-terminal domain</td>
    </tr>
     <tr>
      <td name="td0">6HWX-A</td>
      <td name="td1">12.2</td>
      <td name="td2">3.0</td>
      <td name="td3">Putative gag polyprotein</td>
    </tr>
     <tr>
      <td name="td0">8C9M-A</td>
      <td name="td1">10.7</td>
      <td name="td2">6.2</td>
      <td name="td3">Gag protein</td>
    </tr>
     <tr>
      <td name="td0">5A9E-A</td>
      <td name="td1">9.3</td>
      <td name="td2">8.4</td>
      <td name="td3">Deltambd gag protein</td>
    </tr>
     <tr>
      <td name="td0">6RWG-A</td>
      <td name="td1">8.4</td>
      <td name="td2">3.0</td>
      <td name="td3">Gag polyprotein</td>
    </tr>
     <tr>
      <td name="td0">7LGA-D</td>
      <td name="td1">7.1</td>
      <td name="td2">2.2</td>
      <td name="td3">Retrotransposon-derived protein peg10</td>
    </tr>
     <tr>
      <td name="td0">1QRJ-A</td>
      <td name="td1">6.2</td>
      <td name="td2">4.8</td>
      <td name="td3">Htlv-i capsid protein</td>
    </tr>
     <tr>
      <td name="td0">7ST9-E</td>
      <td name="td1">4.9</td>
      <td name="td2">6.3</td>
      <td name="td3">Checkpoint protein rad24</td>
    </tr>
    </tbody>
  </table>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Selection and identification of an RNA aptamer that specifically binds the HIV-1 capsid lattice and inhibits viral replication.</strong></font><br />
Gruenke, P. R., Aneja, R., Welbourn, S., Ukah, O. B., Sarafianos, S. G., Burke, D. H., & Lange, M. J. <br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35018437/" target="_blank" style="color:#520049" >Nucleic acids research, 50(3), 1701–1717. (2022)</a>
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
