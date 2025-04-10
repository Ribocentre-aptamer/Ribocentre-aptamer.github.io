---
layout: post
title:  "Chloramphenicol aptamer"
date:   2024-05-10 00:00:00
author: Linfei Li, Yuhang Luo
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
<font>In 1997,Burke, Gold. L.et al. Cam-specific RNA aptamers had been isolated mainly to study RNA–antibiotic interactions. In 2011, Mehtaet al.identified Cam aptamers by in vitro screening. Burke, Gold. L. et al. identified Cam-binding RNA aptamers from two independent initial random RNA populations. Boundary determinations, ribonuclease S1 sensitivity analyses and the activity of truncated minimal RNAs identified a structural motif that is shared by sequences from both selections. Reselection from a pool of mutated variants of the minimal aptamer further refined the sequence requirements for binding.  They used proton nuclear magnetic resonance (NMR) to establish a 1:1 RNA: Cam stoichiometry of the complex. Both the protection and NMR data both show that Cam stabilizes the active fold of this aptamer<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Pardi, A., & Gold, L used two independent Cam-binding RNA populations with 70 or 80 random positions(70Cm and 80Cm,respectively) isolated using the SELEX protocol  from random starting pools containing 10<sup>14</sup>-10<sup>15</sup> sequences. Cam-binding RNA transcripts were affinity eluted from a Cam-derivatized agarose resin, amplified, and re-tran- scribed for additional partitions over the resin. The elutions included long incubations in order to encourage selection of high-affinity aptamers with long off rates(sce the Materials and methods section). Specific elution from the resin with free Cam was low in the first seven cycles of selection/amplification. This number climbed to2-6% in the eighth cycle and around 20% in the ninth. After thrce more selection cycles at elevated wash strin- gency, 40-50% of the RNA cluted with Cam. RNA recov- ered from the 12th cycle was converted to double-stranded DNA for cloning and sequencing.  There were 74 distinct sequences among the 96 isolates sequenced. Twelve sequences were found in pairs of identical or nearly identical isolates, two in three different isolates, and two in four different isolates. All other sequences were found only once<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figures is based on the prediction results of the RNA fold website by ribodraw tool to draw. Here, we chose the sequence with the best affinity for 2D drawing.<br></font>
<font><p>5'-GGGAAAAGCGAAUCAUACACAAGAAUGAAAAGGGCUGGCGAGACAUAUCCGCUGGGCAAUCAGAUUCGGAGCCGCACCACCCUCGAAGUAGACAGGGCAUAAGGUAUUUAAUUCCAUA-3'</p></font>
<img src="/images/2D/Chloramphenicol_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Chloramphenicol is a broad spectrum antibiotic that is effective against a variety of susceptible and serious bacterial infections but is not frequently used because of its high risk of bone marrow toxicity.-----From WiKi</p>
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
        <td name="td0">Chloramphenicol (Cam)</td>
        <td name="td1">C<sub>11</sub>H<sub>12</sub>Cl<sub>2</sub>N<sub>2</sub>O<sub>5</sub></td>
        <td name="td2">323.13g/mol</td>
        <td name="td3">56-75-7</td>
        <td name="td4">2500mg/L (at 25 °C)</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/5959" target="_blank" style="color:#520049"><b>5959</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB00446" target="_blank" style="color:#520049"><b>DB00446</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Chloramphenicol_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity to by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID. For another compound, we used a similar compound query method from the PubChem database.</p></font>
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
        <td name="td0">ZINC1532336</td>
        <td name="td1">Chloramphenicol</td>
        <td name="td2">56-75-7</td>
        <td name="td3">5959</td>
        <td name="td4"><img src="/images/Similar_compound/Chloramphenicol _Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC11616717</td>
        <td name="td1">4-[(2R,3S)-2-[(2,2-dichloroacetyl)amino]-3-hydroxy-3-(4-nitrophenyl)propoxy]-4-oxobutanoic acid</td>
        <td name="td2">NA</td>
        <td name="td3">92402792</td>
        <td name="td4"><img src="/images/Similar_compound/Chloramphenicol _Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC4535930</td>
        <td name="td1">PD054003</td>
        <td name="td2">NA</td>
        <td name="td3">45006058</td>
        <td name="td4"><img src="/images/Similar_compound/Chloramphenicol _Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC4654660</td>
        <td name="td1">4-[(2S,3R)-2-[(2,2-dichloroacetyl)amino]-3-hydroxy-3-(4-nitrophenyl)propoxy]-4-oxobutanoic acid</td>
        <td name="td2">NA</td>
        <td name="td3">443384</td>
        <td name="td4"><img src="/images/Similar_compound/Chloramphenicol _Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1]  RNA aptamers to the peptidyl transferase inhibitor chloramphenicol.</strong></font><br/>
Burke, D. H., Hoffman, D. C., Brown, A., Hansen, M., Pardi, A., & Gold, L.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049">Chemistry & biology, 4(11), 833–843 (1997)</a>
<br/>

<a id="ref2"></a><font><strong>[2]  In vitro selection and characterization of DNA aptamers recognizing chloramphenicol.</strong></font><br/>
Mehta, J., Van Dorst, B., Rouah-Martin, E., Herrebout, W., Scippo, M. L., Blust, R., & Robbens, J.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/21839787/" target="_blank" style="color:#520049">Journal of biotechnology, 155(4), 361–369 (2011)</a>
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