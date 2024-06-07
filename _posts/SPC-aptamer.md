---
layout: post
title:  "SPC-aptamer"
date:   2024-04-30 00:00:00
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
<font>In 2010, Horii et al. have generated RNA aptamers that bind to SPC with high affinity using an in vitro selection procedure and developed an enzyme-linked aptamer assay system using the minimized SPC aptamer that can successfully distinguish SPC from the structurally related sphingosine 1-phosphate (S1P)<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2010, Horii et al. used twelve rounds of traditional in vitro selection with SPC beads to isolate aptamers that bound to SPC. After round 12, the SPC binding assay of the pool using SPR indicated favorable binding properties to SPC<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>A unique stem-loop conformation was conserved in the m012 aptamer, suggesting that this region is critical for binding to SPC. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGCGAAUUCUUCCGUUAUUGGAGCCAAGUCGCC-3'</p></font>
<img src="/images/2D/SPC_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-information">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Sphingosylphosphocholine acid is a cationic phosphosphingolipid consisting of sphingosine having a phosphocholine moiety attached to its primary hydroxyl group. It is a phosphosphingolipid, a quaternary ammonium ion and a member of phosphocholines. It is functionally related to a sphingosine. It is a conjugate acid of a sphingosine-1-phosphocholine. It is a tautomer of a sphingosine-1-phosphocholine(1+).-----From WiKi</font>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Molecular Formula</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">CAS</th>
        <th onclick="sortTable(4)">Solubility</th>
        <th onclick="sortTable(5)">PubChem</th>
        <th onclick="sortTable(6)">MCE</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">Sphingosylphosphorylcholine (SPC)</td>
        <td name="td1">C<sub>23</sub>H<sub>50</sub>N<sub>2</sub>O<sub>5</sub>P<sup>+</sup></td>
        <td name="td2">465.6 g/mol</td>
        <td name="td3">1670-26-4</td>
        <td name="td4">10 mg/ml (chloroform/methanol (2:1))</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/5280613" target="_blank" style="color:#520049"><b>5280613</b></a></td>
        <td name="td6"><a href="https://www.medchemexpress.cn/sphingosylphosphorylcholine.html" target="_blank" style="color:#520049"><b>HY-132187</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/SPC_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">Sequence</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">5'-GGCGAAUUCUUCCGUUAUUGGAGCCAAGUCGCC-3'</td>
        <td name="td2">Sphingosylphosphorylcholine (SPC)</td>
        <td name="td3">196 nM</td>
      </tr>
	  </tbody>
  </table>
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity to SPC by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">Zinc_id</th>
        <th onclick="sortTable(2)">Named</th>
        <th onclick="sortTable(3)">CAS</th>
        <th onclick="sortTable(4)">Pubchem CID</th>
        <th onclick="sortTable(5)">Structure</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">ZINC8218753</td>
        <td name="td2">LysoSM(d18:1)</td>
        <td name="td3">NA</td>
        <td name="td4">5283561</td>
        <td name="td5"><img src="/images/Similar_compound/SPC_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC40165441</td>
        <td name="td2">Lysosm(D18:0)</td>
        <td name="td3">NA</td>
        <td name="td4">5283561</td>
        <td name="td5"><img src="/images/Similar_compound/SPC_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC15297567</td>
        <td name="td2">Lpc(14:0)</td>
        <td name="td3">NA</td>
        <td name="td4">444675</td>
        <td name="td5"><img src="/images/Similar_compound/SPC_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
	  </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Development of a sphingosylphosphorylcholine detection system using RNA aptamers.</strong></font><br />
Horii, K., Omi, K., Yoshida, Y., Imai, Y., Sakai, N., Oka, A., Masuda, H., Furuichi, M., Tanimoto, T., & Waga, I.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049">Molecules, 15(8):5742-55. (2010)</a>
<br/>