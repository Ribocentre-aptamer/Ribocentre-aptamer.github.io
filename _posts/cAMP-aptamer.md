---
layout: post
title:  "cAMP-aptamer"
date:   2024-05-31 00:00:00
author: Linfei Li, Yuhang Luo
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
<font>In 2000, Koizumi and Breaker isolated RNA binding to some cAMPs through in vitro selection experiment<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Koizumi, M., & Breaker, R. R.isolated two classes of RNA aptamers that bind the second messenger adenosine 3′,5′-cyclic by  vitro selection， Class II aptamers, which dominate the final selected RNA population, require divalent cations for complex formation and display a dissociation constant (KD) for cAMP of ∼10 µM.The class II aptamer exhibits substantial discrimination against 5′- and 3′-phosphorylated nucleosides such as ATP, 5′-AMP, and 3′-AMP<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. In addition, an analytical affinity column was run under isocratic conditions to determine an approximate dissociation constant (Kd) for the RNA-ligand interaction. The 2D structure of the figure is based on the prediction results of the RNA fold website by ribodraw tool to draw.<br></font>
<font><p>5'-GGAAGAGAUGGCGACUAAAACGACUUGUCGC-3'</p></font>
<img src="/images/2D/cAMP_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>




<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Cyclic AMP (Cyclic adenosine monophosphate) is a derivative of adenosine triphosphate, an intracellular signalling molecule responsible for directing cellular responses to extracellular signals,.-----From MedChemExpress</font>
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
        <td name="td0">cAMP</td>
        <td name="td1">C<sub>10</sub>H<sub>12</sub>N<sub>5</sub>O<sub>6</sub>P</td>
        <td name="td2">329.21 g/mol</td>
        <td name="td3">60-92-4</td>
        <td name="td4">4 mg/mL</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/6076" target="_blank" style="color:#520049"><b>6076</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB02527" target="_blank" style="color:#520049"><b>DB02527</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/cAMP_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">Ligand</th>
        <th onclick="sortTable(2)">Sequence</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">Cyclic AMP</td>
        <td name="td2">5'-GGAAGAGAUGGCGACUAAAACGACUUGUCGC-3'</td>
        <td name="td3">10 uM</td>
      </tr>
	  </tbody>
  </table>
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity to  by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID. For another compound, we used a similar compound query method from the PubChem database.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Zinc_id</th>
        <th onclick="sortTable(1)">Named</th>
        <th onclick="sortTable(2)">CAS</th>
        <th onclick="sortTable(3)">Pubchem CID</th>
        <th onclick="sortTable(4)">Structure</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0">ZINC3873977</td>
        <td name="td1">Camp</td>
        <td name="td2">60-92-4</td>
        <td name="td3">6076</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC12502230</td>
        <td name="td1">(4aR,6R,7S,7aR)-6-(6-aminopurin-9-yl)-2-hydroxy-2-oxo-4a,6,7,7a-tetrahydro-4H-furo[3,2-d][1,3,2]dioxaphosphinin-7-ol</td>
        <td name="td2">NA</td>
        <td name="td3">25322946</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC4245698</td>
        <td name="td1">Adenosin-3',5'-monophosphat</td>
        <td name="td2">NA</td>
        <td name="td3">12071879</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC3581269</td>
        <td name="td1">Cyclic ara-AMP</td>
        <td name="td2">32465-18-2</td>
        <td name="td3">6603718</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC3869451</td>
        <td name="td1">(4aS,6R,7S,7aR)-6-(6-aminopurin-9-yl)-2-hydroxy-2-oxo-4a,6,7,7a-tetrahydro-4H-furo[3,2-d][1,3,2]dioxaphosphinin-7-ol</td>
        <td name="td2">NA</td>
        <td name="td3">6604194</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC3869449</td>
        <td name="td1">(4aS,6R,7R,7aR)-6-(6-aminopurin-9-yl)-2-hydroxy-2-oxo-4a,6,7,7a-tetrahydro-4H-furo[3,2-d][1,3,2]dioxaphosphinin-7-ol</td>
        <td name="td2">NA</td>
        <td name="td3">12866365</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC12502232</td>
        <td name="td1">(4aR,6S,7S,7aR)-6-(6-aminopurin-9-yl)-2-hydroxy-2-oxo-4a,6,7,7a-tetrahydro-4H-furo[3,2-d][1,3,2]dioxaphosphinin-7-ol</td>
        <td name="td2">NA</td>
        <td name="td3">25322948</td>
        <td name="td4"><img src="/images/Similar_compound/cAMP_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1]  Molecular recognition of cAMP by an RNA aptamer.</strong></font><br/>
Koizumi, M., & Breaker, R. R.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/10913311/" target="_blank" style="color:#520049"> Biochemistry, 39(30), 8983–8992. (2000)</a>
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