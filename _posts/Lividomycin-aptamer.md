---
layout: post
title:  "Lividomycin aptamer"
date:   2024-05-10 00:00:00
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
<font>In 1996, Lato, S. M., & Ellington, A. D.isolated RNA molecules capable of binding to rifamycin led to the discovery of the SLB10-1 aptamer in vitro<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Lato, S. M., & Ellington, A. D. used in vitro screening from a pool of RNAs that would contain 30 random sequence positions, after which 10 aptamers were cloned, 13 clones were sequenced, and 12 proved to be identical aptamers, one being an unrelated species<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. The 2D structure of the figure is based on the article by ribodraw tool to draw.<br></font>
<font><p>5'-GGGAAUGGAUCCACAUCUACGAAUUCAACGAGUGCAGUGGGAAACAGGUCUUUGGCUUCACUGCAGACUUGACGAAGCUU-3'</p></font>
<img src="/images/2D/Lividomycin_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>This compound belongs to the class of organic compounds known as 4,5-disubstituted 2-deoxystreptamines. These are 2-deoxystreptamine aminoglycosides that a glycosidically linked to a pyranose of furanose unit at the C4- and C5-positions.-----from drugbank</font>
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
        <td name="td0">lividomycin</td>
        <td name="td1">C<sub>29</sub>H<sub>55</sub>N<sub>5</sub>O<sub>18</sub></td>
        <td name="td2">761.8 g/mol</td>
        <td name="td3">36441-41-5</td>
        <td name="td4">Difficult to dissolve in water</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/72394" target="_blank" style="color:#520049"><b>72394</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB04728" target="_blank" style="color:#520049"><b>DB04728</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Lividomycin_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
        <td name="td1">Lividomycin</td>
        <td name="td2">5'GGGAAUGGAUCCACAUCUACGAAUUCAACGAGUGCAGUGGGAAACAGGUCUUUGGCUUCACUGCAGACUUGACGAAGCUU3'</td>
        <td name="td3">NA</td>
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
        <td name="td0">ZINC253673980</td>
        <td name="td1">lividomycin A</td>
        <td name="td2">36441-41-5</td>
        <td name="td3">72394</td>
        <td name="td4"><img src="/images/Similar_compound/Lividomycin _Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC255211892</td>
        <td name="td1">(2R,3S,4R,5S,6R)-2-[(2R,3S,4R,5S,6R)-5-amino-2-(aminomethyl)-6-[(2S,3R,4S,5S)-5-[(1R,2S,3R,5S,6S)-3,5-diamino-2-[(2R,3S,4R,5S,6S)-3-amino-4,5-dihydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-6-hydroxycyclohexyl]oxy-4-hydroxy-2-(hydroxymethyl)oxolan-3-yl]oxy-4-hydroxyoxan-3-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol</td>
        <td name="td2">NA</td>
        <td name="td3">162929092</td>
        <td name="td4"><img src="/images/Similar_compound/Lividomycin _Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC257402766</td>
        <td name="td1">(2R,3S,4R,5R,6S)-2-[(2S,3R,4S,5R,6R)-5-amino-2-(aminomethyl)-6-[(2S,3S,4R,5R)-5-[(1R,2S,3S,5R,6R)-3,5-diamino-2-[(2R,3S,5R,6R)-3-amino-5-hydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-6-hydroxycyclohexyl]oxy-4-hydroxy-2-(hydroxymethyl)oxolan-3-yl]oxy-4-hydroxyoxan-3-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol</td>
        <td name="td2">NA</td>
        <td name="td3">125038099</td>
        <td name="td4"><img src="/images/Similar_compound/Lividomycin _Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC257402767</td>
        <td name="td1">(2R,3S,4R,5R,6S)-2-[(2S,3R,4S,5R,6R)-5-amino-2-(aminomethyl)-6-[(2S,3S,4R,5R)-5-[(1R,2S,3S,5R,6R)-3,5-diamino-2-[(2R,3S,5S,6R)-3-amino-5-hydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-6-hydroxycyclohexyl]oxy-4-hydroxy-2-(hydroxymethyl)oxolan-3-yl]oxy-4-hydroxyoxan-3-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol</td>
        <td name="td2">NA</td>
        <td name="td3">125038100</td>
        <td name="td4"><img src="/images/Similar_compound/Lividomycin _Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC257402768</td>
        <td name="td1">(2R,3S,4R,5R,6S)-2-[(2S,3R,4S,5R,6R)-5-amino-2-(aminomethyl)-6-[(2S,3S,4R,5R)-5-[(1R,2S,3S,5R,6R)-3,5-diamino-2-[(2R,3S,5S,6S)-3-amino-5-hydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-6-hydroxycyclohexyl]oxy-4-hydroxy-2-(hydroxymethyl)oxolan-3-yl]oxy-4-hydroxyoxan-3-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol</td>
        <td name="td2">NA</td>
        <td name="td3">125038101</td>
        <td name="td4"><img src="/images/Similar_compound/Lividomycin _Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC257402769</td>
        <td name="td1">(2R,3S,4R,5R,6S)-2-[(2S,3R,4S,5R,6R)-5-amino-2-(aminomethyl)-6-[(2S,3S,4R,5R)-5-[(1R,2S,3S,5R,6R)-3,5-diamino-2-[(2R,3S,5R,6S)-3-amino-5-hydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-6-hydroxycyclohexyl]oxy-4-hydroxy-2-(hydroxymethyl)oxolan-3-yl]oxy-4-hydroxyoxan-3-yl]oxy-6-(hydroxymethyl)oxane-3,4,5-triol</td>
        <td name="td2">NA</td>
        <td name="td3">125038102</td>
        <td name="td4"><img src="/images/Similar_compound/Lividomycin _Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Screening chemical libraries for nucleic-acid-binding drugs by in vitro selection: a test case with lividomycin.</strong></font><br/>
Lato, S. M., & Ellington, A. D.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/9238640/" target="_blank" style="color:#520049">Molecular diversity, 2(1-2), 103–110. (1996)</a>
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