---
layout: post
title:  "ERα-aptamer"
date:   2024-06-02 00:00:00
author: Zhijie Tan, Qiaozhen Liu
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



<font><p class="header_box" id="description">Description</p></font>
<font>In 2012, Xu et al. identified three high affinity aptamers and characterized one of the AptER-1 in detail. This aptamer interacted with ERα in a way not affected by the presence or absence of either the steroidal ligands or the estrogen response DNA elements, and effectively inhibited ER-mediated transcriptional activation in a breast cancer cell line<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2012, Xu et al. identified isolated 3 specific sequences for targeting ERα in a 50nt sequence poolthrough 7 rounds of selection<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>AptER-1 was the aptamer sequence mainly studied in the article, which had a high affinity with ERα. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-CCACAGUUCAGAGGCACCGCGAACAAAACGCAAGACAGAGUGCCGACAAGAGC-3'</p></font>
<img src="/images/2D/ER_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-information">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>The oestrogen receptors (ERs) are steroid or nuclear hormone receptors that act as transcription regulators involved in diverse physiological functions. Oestrogen receptors function as dimeric molecules in nuclei to regulate the transcription of target genes in a ligand-responsive manner.-----from Pfam</font>
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
        <td name="td0">Estrogen receptor α (ERα)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P03372/entry" target="_blank" style="color:#520049"><b>P03372</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/InterPro/IPR001292/" target="_blank" style="color:#520049"><b>IPR001292</b></a></td>
        <td name="td3">28.86 kDa</td>
        <td name="td4">SKKNSLALSLTADQMVSALLDAEPPILYSEYDPTRPFSEASMMGLLTNLADRELVHMINWAKRVPGFVDLTLHDQVHLLECAWLEILMIGLVWRSMEHPGKLLFAPNLLLDRNQGKCVEGMVEIFDMLLATSSRFRMMNLQGEEFVCLKSIILLNSGVYTFLSSTLKSLEEKDHIHRVLDKITDTLIHLMAKAGLTLQQQHQRLAQLLLILSHIRHMSNKGMEHLYSMKCKNVVPLYDLLLEMLDAHRLHAPT</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1ere" target="_blank" style="color:#520049"><b>1ere</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/protein/AAD52984.1" target="_blank" style="color:#520049"><b>AAD52984.1</b></a></td>
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
      <td name="td0">AptER-1</td>
      <td name="td1">5'-CCACAGUUCAGAGGCACCGCGAACAAAACGCAAGACAGAGUGCCGACAAGAGC-3'</td>
      <td name="td2">Estrogen receptor α (ERα)</td>
      <td name="td3">16 nM</td>
    </tr>
     <tr>
      <td name="td0">AptER-2</td>
      <td name="td1">5'-ACACGCGAGAUAGAGCGAGGCCUCCAAAAAUGGCCACGCCAGGAAGCAAGU-3'</td>
      <td name="td2">Estrogen receptor α (ERα)</td>
      <td name="td3">21 nM</td>
    </tr>
     <tr>
      <td name="td0">AptER-1</td>
      <td name="td1">5'-GACCCAGGGCCGGGACGCAAAGCAGCCAAAACAGACGGCCCCAGUCAGGGAGUU-3'</td>
      <td name="td2">Estrogen receptor α (ERα)</td>
      <td name="td3">30 nM</td>
    </tr>
	</tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/ER_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">8JF7-J</td>
      <td name="td1">20.6</td>
      <td name="td2">1.9</td>
      <td name="td3">Glutamate receptor ionotropic, nmda 1</td>
    </tr>
            
     <tr>
      <td name="td0">4HJJ-H</td>
      <td name="td1">20.4</td>
      <td name="td2">1.9</td>
      <td name="td3">interleukin-18</td>
    </tr>
            
     <tr>
      <td name="td0">8IQS-H</td>
      <td name="td1">20.2</td>
      <td name="td2">5.4</td>
      <td name="td3">M11 Vl-sarah</td>
    </tr>
            
     <tr>
      <td name="td0">7CEA-A</td>
      <td name="td1">19.8</td>
      <td name="td2">5.1</td>
      <td name="td3">Huts-4 VH(s112c)-sarah</td>
    </tr>
            
     <tr>
      <td name="td0">6OPA-S</td>
      <td name="td1">19.7</td>
      <td name="td2">1.3</td>
      <td name="td3">Envelope glycoprotein GP160</td>
    </tr>
            
     <tr>
      <td name="td0">7KHF-A</td>
      <td name="td1">19.4</td>
      <td name="td2">10.0</td>
      <td name="td3">Mdb1 fab heavy chain</td>
    </tr>
            
     <tr>
      <td name="td0">6RUL-A</td>
      <td name="td1">19.0</td>
      <td name="td2">1.5</td>
      <td name="td3">Gfp-lama-f98 a gfp enhancer nanobody with cpdhfr</td>
    </tr>
            
     <tr>
      <td name="td0">6XUX-A</td>
      <td name="td1">18.3</td>
      <td name="td2">1.8</td>
      <td name="td3">Nanobody,glucosidase ygjk,glucosidase ygjk,nanobo</td>
    </tr>
            
     <tr>
      <td name="td0">7RGA-E</td>
      <td name="td1">17.7</td>
      <td name="td2">1.8</td>
      <td name="td3">Nano clostridial antibody mimetic protein 3 VHH</td>
    </tr>
            
     <tr>
      <td name="td0">1ETZ-A</td>
      <td name="td1">17.7</td>
      <td name="td2">4.0</td>
      <td name="td3">Fab nc10.14 - light chain</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] In search of novel drug target sites on estrogen receptors using RNA aptamers.</strong></font><br />
Xu, D., Chatakonda, VK., Kourtidis, A., Conklin, DS., & Shi, H.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049">Nucleic Acid Therapeutics,24(3):226-38. (2014)</a>
<br/>