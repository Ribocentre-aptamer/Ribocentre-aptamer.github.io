---
layout: post
title:  "J6f1 aptamer"
date:   2024-05-20 00:00:00
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
<font>In 1995, Wang & Rando reported on the selection of RNA aptamers which were directed against the aminoglycoside tobramycin. In 1998, Hamasaki and Rando were reported here which are designed to reveal the nature of the tobramycin binding domain of J6. Experiments are reported here which are designed to reveal the nature of the tobramycin binding domain of J6. A small (40 nts) stem-loop derivative of J6, containing a 3 nt and a 1 nt bulge, stoichiometrically binds tobramycin with a dissociation constant of approximately 5 nM. These studies demonstrate that simplified RNA molecules can be generated which bind aminoglycosides specifically and with high affinities. J6f1 is a truncated mutant of J6 aptamer<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Hamasaki and his colleagues truncated J6 and screened it for transcription to find that J6f1 was the sequence with the highest affinity for tobramycin<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. In addition, an analytical affinity column was run under isocratic conditions to determine an approximate dissociation constant (Kd) for the RNA-ligand interaction. The 2D structure of the figures is based on the prediction results of the RNA fold website by ribodraw tool to draw.<br></font>
<font><p>J6: 5'-GGGAGAAUUCCGACCAGAAGCUUAGUAUAGCGAGGUUUAGCUACACUCGUGCUGAUCGUUUGGUACGGGACCUGCGUGUAGCCCAUAUGUGCGUCUACAUGGAUCCUCA-3'<br>J6f1: 5'-GGCUUAGUAUAGCGAGGUUUAGCUACACUCGUGCUGAGCC-3'</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/Tobramycin_aptamer_2D1.svg" alt="drawing" style="width:500px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/Tobramycin_aptamer_2D2.svg" alt="drawing" style="width:500px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Tobramycin is an aminoglycoside antibiotic used to treat cystic fibrosis-associated bacterial, lower respiratory tract, urinary tract, eye, skin, bone, and skin structure infections.-----From Drugbank</p>
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
        <td name="td0">Tobramycin</td>
        <td name="td1">C<sub>18</sub>H<sub>37</sub>N<sub>5</sub>O<sub>9</sub></td>
        <td name="td2">467.5 g/mol</td>
        <td name="td3">32986-56-4</td>
        <td name="td4">5.37e+01 g/L</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/36294" target="_blank" style="color:#520049"><b>36294</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB00684" target="_blank" style="color:#520049"><b>DB00684</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Tobramycin_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<!--table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">Ligand</th>
        <th onclick="sortTable(2)">Sequence</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">Tobramycin</td>
        <td name="td2">5'-GGCUUAGUAUAGCGAGGUUUAGCUACACUCGUGCUGAGCC-3'</td>
        <td name="td3">5.15 ± 1.52 nM</td>
      </tr>
	  </tbody>
  </table-->
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
        <td name="td0">ZINC8551162</td>
        <td name="td1">(2R,3S,4R,5S,6S)-4-amino-2-[(1R,2R,3R,4S,6R)-4,6-diamino-3-[(2S,3S,5S,6S)-3-amino-6-(aminomethyl)-5-hydroxyoxan-2-yl]oxy-2-hydroxycyclohexyl]oxy-6-(hydroxymethyl)oxane-3,5-dio</td>
        <td name="td2">NA</td>
        <td name="td3">92331686</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC8551164</td>
        <td name="td1">(2R,3S,4R,5S,6S)-4-amino-2-[(1R,2R,3R,4S,6R)-4,6-diamino-3-[(2R,3S,5S,6S)-3-amino-6-(aminomethyl)-5-hydroxyoxan-2-yl]oxy-2-hydroxycyclohexyl]oxy-6-(hydroxymethyl)oxane-3,5-diol</td>
        <td name="td2">NA</td>
        <td name="td3">92331688</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC8551165</td>
        <td name="td1">(2R,3S,4R,5S,6S)-4-amino-2-[(1R,2R,3R,4S,6R)-4,6-diamino-3-[(2R,3S,5S,6R)-3-amino-6-(aminomethyl)-5-hydroxyoxan-2-yl]oxy-2-hydroxycyclohexyl]oxy-6-(hydroxymethyl)oxane-3,5-diol</td>
        <td name="td2">NA</td>
        <td name="td3">92331689</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC8551163</td>
        <td name="td1">(2R,3S,4R,5S,6S)-4-amino-2-[(1R,2R,3R,4S,6R)-4,6-diamino-3-[(2S,3S,5S,6R)-3-amino-6-(aminomethyl)-5-hydroxyoxan-2-yl]oxy-2-hydroxycyclohexyl]oxy-6-(hydroxymethyl)oxane-3,5-diol</td>
        <td name="td2">NA</td>
        <td name="td3">92331687</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC43562055</td>
        <td name="td1">(2S,3R,4R,5S,6S)-2-(Aminomethyl)-6-[(1R,2R,3S,4R,6S)-4,6-diamino-3-[(2S,3R,4S,5S,6R)-4-amino-3,5-dihydroxy-6-(hydroxymethyl)oxan-2-yl]oxy-2-hydroxycyclohexyl]oxyoxane-3,4,5-triol</td>
        <td name="td2">NA</td>
        <td name="td3">11274101</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC8214590 </td>
        <td name="td1">Kanamycin</td>
        <td name="td2">59-01-8</td>
        <td name="td3">6032</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC53132258</td>
        <td name="td1">Bekanamycin</td>
        <td name="td2">4696-76-8</td>
        <td name="td3">439318</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC8214383</td>
        <td name="td1">Dibekacin</td>
        <td name="td2">34493-98-6</td>
        <td name="td3">470999</td>
        <td name="td4"><img src="/images/Similar_compound/Tobramycin_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Minimal RNA constructs that specifically bind aminoglycoside antibiotics with high affinities.</strong></font><br/>
Hamasaki, K., Killian, J., Cho, J., & Rando, R. R.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/9425088/" target="_blank" style="color:#520049">Biochemistry, 37(2), 656–663. (1998)</a>
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