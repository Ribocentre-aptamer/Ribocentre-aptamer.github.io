---
layout: post
title:  "B1-CT aptamer"
date:   2024-05-17 00:00:00
author: Bichun Wu, Jiaxin Zhao
categories: Aptamer
---
<!--p style="font-size: 24px"><strong>Keywords: </strong> <br/></p>
<font ><strong>small molecule, Synthetic, dyes, PubChem CID 25863</strong></font >
<br /-->

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
<font>In 2006, Rentmeister, A., & Famulok, M. describe the isolation and characterization of RNA aptamers that selectively target the B1-CT. They show that these RNAs bind to authentic BACE1 and provide evidence that the binding site is restricted to the membrane-proximal half of the C terminus<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2006, Rentmeister, A., & Famulok, M. used SELEX  to select for aptamers that recognize the cytoplasmic tail of BACE (B1-CT). The 24 amino acid peptide representing the entire cytoplasmic domain of the transmembrane protein BACE1 was attached to cyanogen bromide (CNBr)-activated Sepharose via an N-terminal linker. A DNA library with a diversity of 1014 comprising a 40-nt random region flanked by two primer binding sites was in vitro transcribed to yield the respective RNA library. RNA was incubated with the selection matrix and after removal of nonbinding sequences by washing with binding buffer, remaining species were eluted, reverse-transcribed, and used as input DNA for the next transcription and a new selection cycle.  B1-CT binding species were enriched after six cycles of selection, reverse-transcribed, cloned, and sequenced. From this first selection the monoclone K11 exhibited the best binding properties in column assays being the only clone that bound better to the B1-CT-Sepharose than the enriched pool from cycle 6 . A dissociation constant of 4.1 μM for the binding of K11 to the free B1-CT peptide was determined using surface plasmon resonance (SPR) measurements<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAUAGGAUCCACAUCUACGUAUUACGCAACGCCGGGCCACTACGCGAATGGCAAGCCCGTCGACUUCACUGCAGACUUGACGAAGCUU-3'</p></font>
<img src="/images/2D/B1_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Together, BACE1 and BACE2 define a novel family of aspartyl proteases [4]. Both enzymes share significant sequence similarity with other members of the pepsin family of aspartyl proteases and contain the two characteristic D(T/S)G(T/S) motifs that form the catalytic site. However, by contrast with other aspartyl proteases, BACE1 and BACE2 are type I TM proteins. Each protein comprises a large lumenal domain containing the active centre, a single TM domain and a small cytoplasmic tail.-----from InterPro</font>
<br>
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
        <td name="td0">BACE1</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P56817/entry" target="_blank" style="color:#520049"><b>P56817</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/InterPro/IPR009120/" target="_blank" style="color:#520049"><b>IPR009120</b></a></td>
        <td name="td3">48.18 kDa</td>
        <td name="td4">MGSSHHHHHHSAGENLYFQGTLPRETDEEPEEPGRRGSFVEMVDNLRGKSGQGYYVEMTVGSPPQTLNILVDTGSSNFAVGAAPHPFLHRYYQRQLSSTYRDLRKGVYVPYTQGAWAGELGTDLVSIPHGPNVTVRANIAAITESDKFFINGSNWEGILGLAYAEIARPDDSLEPFFDSLVKQTHVPNLFSLQLCGAGFPLNQSEVLASVGGSMIIGGIDHSLYTGSLWYTPIRREWYYEVIIVRVEINGQDLKMDCKEYNYDKSIVDSGTTNLRLPKKVFEAAVKSIKAASSTEKFPDGFWLGEQLVCWQAGTTPWNIFPVISLYLMGEVTNQSFRITILPQQYLRPVEDVATSQDDCYKFAISQSSTGTVMGAVIMEGFYVVFDRARKRIGFAVSACHVHDEFRTAAVEGPFVTLDMEDCGYNIPQTDEST</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3UQW" target="_blank" style="color:#520049"><b>3UQW</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/23621" target="_blank" style="color:#520049"><b>23621</b></a></td>
      </tr>
	  </tbody>
  </table>

<font>Some isolated sequences bind to the affinity of the protein.</font>
<br>
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
        <td name="td0">TH14</td>
        <td name="td1">5'-GGGAUAGGAUCCACAUCUACGUAUUACGCAACGCCGGGCCACTACGCGAATGGCAAGCCCGTCGACUUCACUGCAGACUUGACGAAGCUU-3'</td>
        <td name="td2">Cytoplasmic tail of BACE</td>
        <td name="td3">280 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/B1_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
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
      <td name="td0">3R1G-B</td>
      <td name="td1">53.8</td>
      <td name="td2">1.3</td>
      <td name="td3">Beta-secretase 1</td>
    </tr>
            
     <tr>
      <td name="td0">2RMP-A</td>
      <td name="td1">33.8</td>
      <td name="td2">2.5</td>
      <td name="td3">Mucoropepsin</td>
    </tr>
            
     <tr>
      <td name="td0">4ZL4-A</td>
      <td name="td1">32.5</td>
      <td name="td2">2.7</td>
      <td name="td3">Aspartic protease pm5</td>
    </tr>
            
     <tr>
      <td name="td0">1QDM-A</td>
      <td name="td1">31.8</td>
      <td name="td2">2.3</td>
      <td name="td3">Prophytepsin</td>
    </tr>
            
     <tr>
      <td name="td0">2QZX-A</td>
      <td name="td1">30.7</td>
      <td name="td2">2.3</td>
      <td name="td3">Candidapepsin-5</td>
    </tr>
            
     <tr>
      <td name="td0">1YG9-A</td>
      <td name="td1">28.8</td>
      <td name="td2">2.6</td>
      <td name="td3">Aspartic protease bla g 2</td>
    </tr>
            
     <tr>
      <td name="td0">7RY7-A</td>
      <td name="td1">27.5</td>
      <td name="td2">2.4</td>
      <td name="td3">Plasmepsin x</td>
    </tr>
            
     <tr>
      <td name="td0">3VLA-A</td>
      <td name="td1">26.1</td>
      <td name="td2">3.2</td>
      <td name="td3">Edgp</td>
    </tr>
            
     <tr>
      <td name="td0">4EHC-A</td>
      <td name="td1">17.0</td>
      <td name="td2">3.1</td>
      <td name="td3">Pe-pgrs family protein</td>
    </tr>
            
     <tr>
      <td name="td0">2O40-A</td>
      <td name="td1">8.6</td>
      <td name="td2">3.5</td>
      <td name="td3">Covalent dimer hiv-1 protease</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] RNA aptamers selectively modulate protein recruitment to the cytoplasmic domain of beta-secretase BACE1 in vitro.</strong></font><br />
Rentmeister, & Famulok, M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16888322/" target="_blank" style="color:#520049">RNA (New York, N.Y.), 12(9), 1650–1660. (2006)</a>
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
    </html>
