---
layout: post
title:  "FB-1 aptamer"
date:   2024-05-14 00:00:00
author: Bo Fu, Jiali Wang
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
<font>In 1998, Leslie A Holeman et al. employed in vitro selection techniques to isolate aptamers with high-affinity binding sites for Fluorescein. The aptamer binds the fluorophore with high affinity, recognizing both the planar aromatic ring system and a negatively charged sulfonate, a rare example of anion recognition by RNA<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>SELEX was performed with a library containing ~5×10<sup>14</sup> random RNA molecules and selected RNAs for their ability to bind Fluorescein. After SELEX, researchers selected a number of sequences, including FB-1, to characterize their affinity for the dye and its spectral properties<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGACGGCACCACGGUCGGAUCCGUGAGUUGUGACAAUUUAGCGGGUGGUAUUAGAGCCUACUGCCACAGCAAUAGGAUCGAUACAGAUCU-3'</p></font>
<img src="/images/2D/Fluorescein_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>




<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>The Kd for sulforhodamine was determined both in solution and following immobilization on a solid support. The increase in fluorophore anisotropy, presumed to result from the change in rotational diffusion accompanying complex formation, may be accurately modeled using a simple hyperbolic function. The amount of aptamer bound as a function of ligand concentration (accessible packed bead concentration corrected for dilution) was fit by a non-linear least squares method using Kaliedagraph (Abelbeck Software) to a function of the form: % bound = f × [SR] / (KD + [SR]), where f is the fraction of RNA properly folded, [SR] is the accessible immobilized fluorophore concentration, and Kd is the dissociation constant for binding immobilized ligand.</font>
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
        <td name="td0">FB-1 RNA aptamer</td>
        <td name="td1">C<sub>20</sub>H<sub>12</sub>O<sub>5</sub></td>
        <td name="td2">332.3 g/mol</td>
        <td name="td3">2321-07-5</td>
        <td name="td4">83.33 mg/mL in DMSO</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/16850" target="_blank" style="color:#520049"><b>16850</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB00693" target="_blank" style="color:#520049"><b>DB00693</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Fluorescein_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<!--div style="display: flex; justify-content: center;"></div>
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
        <td name="td1">5'-GGACGGCACCACGGUCGGAUCCGUGAGUUGUGACAAUUUAGCGGGUGGUAUUAGAGCCUACUGCCACAGCAAUAGGAUCGAUACAGAUCU-3'</td>
        <td name="td2">Fluorescein</td>
        <td name="td3">NA</td>
      </tr>
	  </tbody>
  </table-->
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
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
        <td name="td0">ZINC3872582</td>
        <td name="td1">Fluorescein</td>
        <td name="td2">518-47-8, 2321-07-5, 72088-94-9</td>
        <td name="td3">16850.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC5847030</td>
        <td name="td1">Fluorescin</td>
        <td name="td2">518-44-5</td>
        <td name="td3">68205.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC4261850</td>
        <td name="td1">Dichlorofluorescein</td>
        <td name="td2">76-54-0, 263400-88-0</td>
        <td name="td3">64944.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC3831317</td>
        <td name="td1">Phenolphthalein</td>
        <td name="td2">77-09-8, 62625-16-5</td>
        <td name="td3">4764.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC15020070</td>
        <td name="td1">((3R)-3'-hydroxy-6'-methoxyspiro[2-benzofuran-3,9'-xanthene]-1-one)</td>
        <td name="td2">65144-30-1</td>
        <td name="td3">26369045.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC5863605</td>
        <td name="td1">NA</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC6756692</td>
        <td name="td1">5-Aminofluorescein</td>
        <td name="td2">3326-34-9, 27599-63-9</td>
        <td name="td3">76845.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC43199397</td>
        <td name="td1">((3S)-3'-amino-6'-hydroxyspiro[2-benzofuran-3,9'-xanthene]-1-one)</td>
        <td name="td2">nan</td>
        <td name="td3">93948834.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC4506036</td>
        <td name="td1">6-Aminofluorescein</td>
        <td name="td2">51649-83-3</td>
        <td name="td3">103924.0</td>
        <td name="td4"><img src="/images/Similar_compound/Fluorescein_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Isolation and characterization of fluorophore-binding RNA aptamers.</strong></font><br />
Holeman, L. A., Robinson, S. L., Szostak, J. W., & Wilson, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049">Folding & design, 3(6), 423–431. (1998)</a>
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