---
layout: post
title:  "Clone 5 aptamer"
date:   2024-05-27 00:00:00
author: Yuhang Luo, Linfei Li
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



<font><p class="header_box" id="description">Description</p></font>
<font>In 2001,Yu J et al. screened an RNA aptamer targeting Sialyl Lewis X (sLeX) and determined its affinity and specificity by surface plasmon resonance technique, and found that its affinity was about 1000-fold higher than that of the original RNA library, and verified the aptamer's application in inhibiting adhesion of sLeX-expressing HL60 cells to E- and P-selectin by static in vitro experiments<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Jaehoon Yu et al. screened RNA aptamers against Sialyl Lewis X (sLeX), mainly by screening Clone 5 RNA aptamers from a random RNA library containing 70 random nucleotides by an in vitro screening program, and after 17 rounds of screening, a final aptamer sequence was obtained that had a high affinity and high specificity. The affinity of the aptamer for sLeX was determined using surface plasmon resonance, and the KD value for Clone 5 was 0.085 nM<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. The 2D structure of the figures is based on the prediction results of the RNA fold website by ribodraw tool to draw. We used the minimum free energy (MFE) structure. Clone 5 aptamer binding to Sialyl Lewis X (sLeX).<br></font>
<font><p>5'-CCGUAAUACGACUCACUAUAGGGGAGCUCGGUACCGAAUUCAAGGYACUCUGUGCUUGUCGAUGUGYAUUGAUGGCACUUUCGAGUCAACGAGUUGACAGRACAAGUAGUCAAGCUUUGCAGAGAGGAUCCUU-3'</p></font>
<img src="/images/2D/Sialyl_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Sialyl-Lewis X (sLeX) is a salivarylated polytetrasaccharide, an endogenous antigen.Sialyl-Lewis X is a high-affinity ligand for the selectins E-, P-, and L-.Sialyl-Lewis X binds to ELAM-1 and CD62 and has the ability to inhibit CD62-mediated neutrophil recruitment at sites of inflammation. Sialyl-Lewis X binds to ELAM-1 and CD62 and has the ability to inhibit CD62-mediated neutrophil recruitment at sites of inflammation.-----From ChEBI</font>
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
        <th onclick="sortTable(6)">Drug ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">Sialyl Lewis X (sLeX)</td>
        <td name="td1">C<sub>31</sub>H<sub>52</sub>N<sub>2</sub>O<sub>23</sub></td>
        <td name="td2">820.7 g/mol</td>
        <td name="td3">NA</td>
        <td name="td4">NA</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/44279132" target="_blank" style="color:#520049"><b>44279132</b></a></td>
        <td name="td6">NA</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Sialyl_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We used the PubChem database to screen compounds that were more similar to Sialyl Lewis X (sLeX),  and selected the most similar compounds for display. For those without CAS numbers, we will supplement them with Pubchem CID.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(1)">Named</th>
        <th onclick="sortTable(2)">CAS</th>
        <th onclick="sortTable(3)">Pubchem CID</th>
        <th onclick="sortTable(4)">Structure</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td1">6-Sialyllactosamine</td>
        <td name="td2">64364-50-7</td>
        <td name="td3">125128</td>
        <td name="td4"><img src="/images/Similar_compound/Sialyl_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">3'-Sialyllactose</td>
        <td name="td2">35890-38-1</td>
        <td name="td3">123914</td>
        <td name="td4"><img src="/images/Similar_compound/Sialyl_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">Hyaluronan</td>
        <td name="td2">NA</td>
        <td name="td3">3084049</td>
        <td name="td4"><img src="/images/Similar_compound/Sialyl_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">3'-beta-Sialyl-beta-lactose</td>
        <td name="td2">64839-32-3</td>
        <td name="td3">448469</td>
        <td name="td4"><img src="/images/Similar_compound/Sialyl_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">G(M1)-Oligosaccharide</td>
        <td name="td2">85373-04-2</td>
        <td name="td3">196569</td>
        <td name="td4"><img src="/images/Similar_compound/Sialyl_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">NeuAcalpha2-6Galbeta</td>
        <td name="td2">NA</td>
        <td name="td3">5289369</td>
        <td name="td4"><img src="/images/Similar_compound/Sialyl_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] In vitro selection of the RNA aptamer against the Sialyl Lewis X and its inhibition of the cell adhesion.</strong></font><br/>
Jeong S, Eom T, Kim S, Lee S, Yu J<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/11178986/" target="_blank" style="color:#520049">Biochemical and biophysical research communications. 2001 Feb 16;281(1):237-43. (2001)</a>
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