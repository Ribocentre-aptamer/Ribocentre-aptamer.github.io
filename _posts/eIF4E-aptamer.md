---
layout: post
title:  "eIF4E-aptamer"
date:   2024-05-15 00:00:00
author: Bichun Wu, Jiaxin Zhao
categories: Aptamer
---

<div class="content-section">

<div class="content-section">

<div class="content-section">

<div class="content-section">

<div class="content-section">

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

<font>
</div>

<div class="content-section">
<h2 class="section-title" id="description">Description</h2></font>
<font>In 2005, Mochizuki, K., & Nakamura, Y. developed two RNA aptamers, aptamer 1 and aptamer 2, with high affinity for mammalian eIF4E by in vitro RNA selection-amplification. Aptamer 1 inhibits the cap binding to eIF4E more efficiently than the cap analog m7GpppN or aptamer 2. Consistently, aptamer 1 inhibits specifically cap-dependent in vitro translation while it does not inhibit cap-independent HCV IRES-directed translation initiation<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>

</div>

<div class="content-section">
<h2 class="section-title" id="SELEX">SELEX</h2>
<p>In 2005, Mochizuki, K., & Nakamura, Y. cloned and sequenced 144 individual RNAs poolthrough 14 rounds of selection,revealing nine unique aptamers that did not share any common motifs .When these RNA species were labeled with [α-32P]CTP and examined for their ability to bind to eIF4E in a nitrocellulose filter retention assay, only two RNAs, no. 15 and no. 34, bound efficiently to eIF4E<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>

</div>

<div class="content-section">
<h2 class="section-title" id="Structure">Structure</h2>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGACAAGAAUAAACGCUCAAUGUUCAACCAGAGUGAAACCACUAACGGGUCAGAGCCCCUUCGACAGGAGGCUCACAACAGGC-3'</p></font>
<img src="/images/2D/eIF4E_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>

<font >
</div>

<div class="content-section">
<h2 class="section-title" id="ligand-recognition">Ligand information</h2></font>  

<div class="blowheader_box">SELEX ligand</div>
<p>EIF4E-T is the transporter protein for shuttling the mRNA cap-binding protein EIF4E protein, targeting it for nuclear import. EIF4E-T contains several key binding domains including two functional leucine-rich NESs (nuclear export signals) between residues 438-447 and 613-638 in the human protein. The other two binding domains are an EIF4E-binding site, between residues 27-42 in Q9EST3, and a bipartite NLS (nuclear localisation signals) between 194-211, and these lie in family EIF4E-T_N. EIF4E is the eukaryotic translation initiation factor 4E that is the rate-limiting factor for cap-dependent translation initiation.-----from Pfam</p>
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
        <td name="td0">eIF4E</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P63074/entry" target="_blank" style="color:#520049"><b>P63074</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF10477/" target="_blank" style="color:#520049"><b>PF10477</b></a></td>
        <td name="td3">25 kDa</td>
        <td name="td4">MATVEPETTPTTNPPPAEEEKTESNQEVANPEHYIKHPLQNRWALWFFKNDKSKTWQANLRLISKFDTVEDFWALYNHIQLSSNLMPGCDYSLFKDGIEPMWEDEKNKRGGRWLITLNKQQRRSDLDRFWLETLLCLIGESFDDYSDDVCGAVVNVRAKGDKIAIWTTECENRDAVTHIGRVYKERLGLPPKIVIGYQSHADTATKSGSTTKNRFVV</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2WMC" target="_blank" style="color:#520049"><b>2WMC</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/117045" target="_blank" style="color:#520049"><b>117045</b></a></td>
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
        <td name="td0">aptamer1</td>
        <td name="td1">5'-GGGAGACAAGAAUAAACGCUCAAUGUUCAACCAGAGUGAAACCACUAACGGGUCAGAGCCCCUUCGACAGGAGGCUCACAACAGGC-3'</td>
        <td name="td2">eIF4E</td>
        <td name="td3">11.2 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/eIF4E_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>

<div class="blowheader_box">Similar compound</div>                    
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
      <td name="td0">2GPQ-A</td>
      <td name="td1">15.5</td>
      <td name="td2">3.1</td>
      <td name="td3">Eukaryotic translation initiation factor 4e</td>
    </tr>
            
     <tr>
      <td name="td0">7KCJ-A</td>
      <td name="td1">14.6</td>
      <td name="td2">2.8</td>
      <td name="td3">Eukaryotic translation initiation factor 4e type</td>
    </tr>
            
     <tr>
      <td name="td0">1AP8-A</td>
      <td name="td1">12.8</td>
      <td name="td2">3.4</td>
      <td name="td3">Translation initiation factor eif4e</td>
    </tr>
            
     <tr>
      <td name="td0">1ZTP-B</td>
      <td name="td1">10.3</td>
      <td name="td2">2.8</td>
      <td name="td3">Basophilic leukemia expressed protein bles03</td>
    </tr>
            
     <tr>
      <td name="td0">4RSX-A</td>
      <td name="td1">8.1</td>
      <td name="td2">3.8</td>
      <td name="td3">Type iii effector hopa1</td>
    </tr>
            
     <tr>
      <td name="td0">8SAM-A</td>
      <td name="td1">7.3</td>
      <td name="td2">3.3</td>
      <td name="td3">Class iii lanthipeptide, class iii lanthionine sy</td>
    </tr>
            
     <tr>
      <td name="td0">3C19-A</td>
      <td name="td1">6.3</td>
      <td name="td2">2.3</td>
      <td name="td3">Uncharacterized protein mk0293</td>
    </tr>
            
     <tr>
      <td name="td0">3BO6-A</td>
      <td name="td1">6.1</td>
      <td name="td2">3.3</td>
      <td name="td3">Hydrophilic protein, vira protein</td>
    </tr>
            
     <tr>
      <td name="td0">4DJB-A</td>
      <td name="td1">6.0</td>
      <td name="td2">2.6</td>
      <td name="td3">E4-orf3</td>
    </tr>
            
     <tr>
      <td name="td0">4AE5-B</td>
      <td name="td1">5.3</td>
      <td name="td2">3.7</td>
      <td name="td3">Signal transduction protein trap</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 

</div>

<div class="content-section">
<h2 class="section-title" id="references">References</h2>
                
<a id="ref1"></a><font><strong>[1] High affinity RNA for mammalian initiation factor 4E interferes with mRNA-cap binding and inhibits translation.</strong></font><br />
Mochizuki,& Nakamura, Y.<br />
<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1370693/" target="_blank" style="color:#520049">RNA (New York, N.Y.), 11(1), 77–89. (2005)</a>
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
    
    
    </html>

</div>

