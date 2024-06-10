---
layout: post
title:  "P5 aptamer"
date:   2024-05-09 00:00:00
author: Ke Chen, Yangyi Ren
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


<font ><p class="header_box" id="description">Description</p></font>
<font >In 1995, Patrick Allen and colleagues used the SELEX method to isolate the aptamer with high affinity for the HIV-1 integrase. The aptamer will competitively inhibit interaction between integrase and viral DNA and thus may prevent formation of preintegration complexes and viral DNA processing<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 1995, Patrick Allen et al. constructed a random pool, the random pool of DNA oligomers was synthesized in which the 5'- and 3'-proximal ends were fixed sequences used for amplification and the central region consisted of 30 randomized positions. After 18 rounds of SELEX, RNA sequences with high specificity were selected<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>P5 was the aptamer sequence mainly studied in the article, which had a high affinity with HIV-1 integrase. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGCUCAGAAUAAACGCUCAACCAGUCUUGUGGCUUUGAAAGAGAGGAGUGUUCGACAUGAGGCCCGGAUCCGGC-3'</p></font>
<img src="/images/2D/P5_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Integrase mediates integration of a DNA copy of the viral genome into the host chromosome. Integrase is composed of three domains. The amino-terminal domain is a zinc binding domain. This domain is the central catalytic domain. The carboxyl terminal domain that is a non-specific DNA binding domain. The catalytic domain acts as an endonuclease when two nucleotides are removed from the 3' ends of the blunt-ended viral DNA made by reverse transcription. This domain also catalyses the DNA strand transfer reaction of the 3' ends of the viral DNA to the 5' ends of the integration site.-----from Pfam</font>
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
        <td name="td0">HIV-1 integrase</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/Q76353/entry#function" target="_blank" style="color:#520049"><b>Q76353</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00665/" target="_blank" style="color:#520049"><b>PF00665</b></a></td>
        <td name="td3">15.44 kDa</td>
        <td name="td4">CSPGIWQLDCTHLEGKVILVAVHVASGYIEAEVIPAETGQETAYFLLKLAGRWPVKTVHTDNGSNFTSTTVKTACWWAGIKQEFGIESMNKELKKIIGQVRDQAEHLQTAVQMAVFIHNKKRKGGYSAGERIVDIIATDI</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6L0C" target="_blank" style="color:#520049"><b>6L0C</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/protein/AAC37875.1" target="_blank" style="color:#520049"><b>AAC37875.1</b></a></td>
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
        <td name="td0">P5</td>
        <td name="td1">5'-GGGAGCUCAGAAUAAACGCUCAACCAGUCUUGUGGCUUUGAAAGAGAGGAGUGUUCGACAUGAGGCCCGGAUCCGGC-3'</td>
        <td name="td2">HIV-1 integrase</td>
        <td name="td3">2-12 nM</td>
      </tr>
	  </tbody>
     <tbody>
      <tr>
        <td name="td0">A54</td>
        <td name="td1">5'-GGGAGCUCAGAAUAAACGCUCAACGGCACAGGGGUUGUAUCCUCCGGGACGAAUUCGACAUGAGGCCCGGAUCCGGC-3'</td>
        <td name="td2">HIV-1 integrase</td>
        <td name="td3">~80.0 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/P5_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">6RWL-A</td>
      <td name="td1">20.0</td>
      <td name="td2">1.3</td>
      <td name="td3">Pol protein</td>
    </tr>
     <tr>
      <td name="td0">6Z2Y-B</td>
      <td name="td1">15.9</td>
      <td name="td2">2.2</td>
      <td name="td3">Pol protein</td>
    </tr>
     <tr>
      <td name="td0">3OY9-A</td>
      <td name="td1">15.0</td>
      <td name="td2">2.7</td>
      <td name="td3">Pfv integrase</td>
    </tr>
     <tr>
      <td name="td0">5EJK-D</td>
      <td name="td1">14.7</td>
      <td name="td2">2.2</td>
      <td name="td3">Gag-pro-pol polyprotein</td>
    </tr>
     <tr>
      <td name="td0">8B4H-C</td>
      <td name="td1">13.3</td>
      <td name="td2">2.3</td>
      <td name="td3">Putative transposase for insertion sequence eleme</td>
    </tr>
     <tr>
      <td name="td0">4FCY-B</td>
      <td name="td1">12.4</td>
      <td name="td2">2.5</td>
      <td name="td3">Transposase</td>
    </tr>
     <tr>
      <td name="td0">8EA3-W</td>
      <td name="td1">12.0</td>
      <td name="td2">2.6</td>
      <td name="td3">Target_le</td>
    </tr>
     <tr>
      <td name="td0">7Q5B-B</td>
      <td name="td1">11.7</td>
      <td name="td2">2.9</td>
      <td name="td3">DNA (56-mer)</td>
    </tr>
     <tr>
      <td name="td0">5CR4-B</td>
      <td name="td1">9.7</td>
      <td name="td2">2.8</td>
      <td name="td3">Sleeping beauty transposase, SB100X</td>
    </tr>
     <tr>
      <td name="td0">4U7B-A</td>
      <td name="td1">8.5</td>
      <td name="td2">3.2</td>
      <td name="td3">DNA (25-mer)</td>
    </tr>
    </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Isolation of high-affinity RNA ligands to HIV-1 integrase from a random pool.</strong></font><br />
Allen, P., Worland, S., & Gold, L.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/7778267/" target="_blank" style="color:#520049" >Virology, 209(2), 327–336. (1995)</a>
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
