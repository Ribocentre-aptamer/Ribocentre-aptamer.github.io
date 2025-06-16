---
layout: theophylline_style
title:  "Chemokine CCL17-aptamer"
date:   2024-05-31 00:00:00
author: Yangyi Ren, Chen Ke
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
<font>In 2018, Lorenz Fülle and colleagues used SELEX (Systematic Evolution of Ligands by Exponential enrichment) technique to isolate high affinity RNA aptamers that bind to the CCL17 protein<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2018, Lorenz Fülle and Nancy Steiner et al. isolated 2 specific sequences for targeting Chemokine CCL17 in 10 rounds of selection<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGUCGUCGCGGGUUGGCUCGUAGAUCGGGCCGGUACAGACGACCCAGACGACUCGCUGAGGAUCCGAGA-3'</p></font>
<img src="/images/2D/CCL17_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>CCL17 is a powerful chemokine produced in the thymus and by antigen-presenting cells like dendritic cells, macrophages, and monocytes.CCL17 plays a complex role in cancer. It attracts T-regulatory cells allowing for some cancers to evade an immune response.</font>
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
        <td name="td0">Chemokine CCL17</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/Q9WUZ6/entry" target="_blank" style="color:#520049"><b>Q9WUZ6</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00048/" target="_blank" style="color:#520049"><b>PF00048</b></a></td>
        <td name="td3">10.467 kDa</td>
        <td name="td4">MRSLQMLLLAALLLGTFLQHARAARATNVGRECCLDYFKGAIPIRKLVSWYKTSVECSRDAIVFLTVQGKLICADPKDKHVKKAIRLVKNPRP</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NR2#entity-1" target="_blank" style="color:#520049"><b>1NR2</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/20295" target="_blank" style="color:#520049"><b>20295</b></a></td>
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
      <td name="td0">MF11.46</td>
      <td name="td1">5'-GGGUCGUCGCGGGUUGGCUCGUAGAUCGGGCCGGUACAGACGACCCAGACGACUCGCUGAGGAUCCGAGA-3'</td>
      <td name="td2">Chemokine CCL17</td>
      <td name="td3">0.9 ± 0.1 nM</td>
    </tr>
     <tr>
      <td name="td0">MF11</td>
      <td name="td1">5'-AAUAGAGUCGUCGCGGGUUGGCUCGUAGAUCGGGCCGGUACAGACGACUCGCUGAGGAUCCGAGA-3'</td>
      <td name="td2">Chemokine CCL17</td>
      <td name="td3">NA</td>
    </tr>
     <tr>
      <td name="td0">MF35</td>
      <td name="td1">5'-GAGCAGCAUUUGUGGUUUCCCGAUCGCUUCCCCUAAACAGCAGACGACUCGCUGAGGAUCCGAGA-3'</td>
      <td name="td2">Chemokine CCL17</td>
      <td name="td3">NA</td>
    </tr>
     <tr>
      <td name="td0">MF35.47</td>
      <td name="td1">5'-GAGCAGCAUUUGUGGUUUCCCGAUCGCUUCCC-3'</td>
      <td name="td2">Chemokine CCL17</td>
      <td name="td3">7.5 ± 1.5 nM</td>
    </tr>
   </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/CCL17_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">1NR4-E</td>
      <td name="td1">12.3</td>
      <td name="td2">0.8</td>
      <td name="td3">Thymus and activation-regulated chemokine</td>
    </tr>
            
     <tr>
      <td name="td0">2VXW-A</td>
      <td name="td1">11.5</td>
      <td name="td2">0.9</td>
      <td name="td3">C-C motif chemokine 5</td>
    </tr>
            
     <tr>
      <td name="td0">7SO0-B</td>
      <td name="td1">11.3</td>
      <td name="td2">1.1</td>
      <td name="td3">Evasin p974</td>
    </tr>
            
     <tr>
      <td name="td0">5EKI-E</td>
      <td name="td1">10.1</td>
      <td name="td2">1.5</td>
      <td name="td3">C-C motif chemokine 21</td>
    </tr>
            
     <tr>
      <td name="td0">2JYO-A</td>
      <td name="td1">9.5</td>
      <td name="td2">2.0</td>
      <td name="td3">C-C motif chemokine 20 (small-inducible cytokine</td>
    </tr>
            
     <tr>
      <td name="td0">1B2T-A</td>
      <td name="td1">9.0</td>
      <td name="td2">1.6</td>
      <td name="td3">Protein (fractalkine)</td>
    </tr>
            
     <tr>
      <td name="td0">2MP1-A</td>
      <td name="td1">8.3</td>
      <td name="td2">1.9</td>
      <td name="td3">C-C motif chemokine 19</td>
    </tr>
            
     <tr>
      <td name="td0">4HED-A</td>
      <td name="td1">7.6</td>
      <td name="td2">1.8</td>
      <td name="td3">Uncharacterized protein</td>
    </tr>
            
     <tr>
      <td name="td0">1F9P-A</td>
      <td name="td1">7.5</td>
      <td name="td2">2.1</td>
      <td name="td3">Connective tissue activating peptide-iii</td>
    </tr>
            
     <tr>
      <td name="td0">1O80-A</td>
      <td name="td1">7.4</td>
      <td name="td2">2.5</td>
      <td name="td3">Small inducible cytokine b10</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] RNA aptamers recognizing murine CCL17 inhibit T cell chemotaxis and reduce contact hypersensitivity in vivo.</strong></font><br />
Fülle, L., Steiner, N., Funke, M., Gondorf, F., Pfeiffer, F., Siegl, J., ... & Förster, I. <br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049">Molecular Therapy, 26(1), 95-104. (2018)</a>
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
