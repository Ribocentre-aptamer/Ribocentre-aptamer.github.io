---
layout: post
title:  "SPC-aptamer"
date:   2024-04-30 00:00:00
author: Zhijie Tan, Qiaozhen Liu
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
<img src="/images/2D/SPC_aptamer_2D.svg" alt="drawing" style="width:800px;height:300px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Sphingosylphosphocholine acid is a cationic phosphosphingolipid consisting of sphingosine having a phosphocholine moiety attached to its primary hydroxyl group. It is a phosphosphingolipid, a quaternary ammonium ion and a member of phosphocholines. It is functionally related to a sphingosine. It is a conjugate acid of a sphingosine-1-phosphocholine. It is a tautomer of a sphingosine-1-phosphocholine(1+).-----From WiKi</p>
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
<img src="/images/SELEX_ligand/SPC_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
