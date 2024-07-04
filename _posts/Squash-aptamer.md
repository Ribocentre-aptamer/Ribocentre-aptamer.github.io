---
layout: post
title:  "Squash aptamer"
date:   2024-06-30 00:00:00
author: Zhizhong Lu, Ying Ao
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
    <div class="side-nav-item"><li><a href="#timeline" style="color: #000000;">Timeline</a></li></div>
    <div class="side-nav-item"><li><a href="#description" style="color: #000000;">Description</a></li></div>
    <div class="side-nav-item"><li><a href="#SELEX" style="color: #000000;">SELEX</a></li></div>
    <div class="side-nav-item"><li><a href="#Structure" style="color: #000000;">Structure</a></li></div>
    <div class="side-nav-item"><li><a href="#ligand-recognition" style="color: #000000;">Ligand information</a></li></div>
    <div class="side-nav-item"><li><a href="#references" style="color: #000000;">References</a></li></div>
    </ul>
</div>



<p class="header_box" id="timeline">Timeline</p>
<div class="timeline">
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/34937909/" target="_blank" style="color:#520049">2022</a></h3>
  </div>
  <div class="body">
    <p>Evolved a naturally occurring well-folded adenine riboswitch into a fluorogenic aptamer-Squash<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/34937911/" target="_blank" style="color:#520049">2022</a></h3>
  </div>
  <div class="body">
    <p>Reported the 2.7 Å-resolution co-crystal structure of fluorophore-bound Squash<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/38098702/" target="_blank" style="color:#520049">2023</a></h3>
  </div>
  <div class="body">
    <p>Used the fluorogenic RNA aptamers Pepper and Squash as light-up RNA sensors<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
  </div>
 </div>
</div>


<font><p class="header_box" id="description">Description</p></font>
<font>In 2022, Dey, S. K. et al. evolved a naturally occurring well-folded adenine riboswitch into a fluorogenic aptamer——Squash，Squash exhibits markedly improved in-cell folding and highly efficient metabolite-dependent folding when fused to a S-adenosylmethionine (SAM)-binding aptamer. The same year, Truong, L. et al. reported the 2.7 Å-resolution co-crystal structure of fluorophore-bound Squash. Squash does not harbor a G-quadruplex, sandwiching its fluorophore between a base triple and a non-canonical base quadruple in a largely apolar pocket<sup>[<a href="#ref1" style="color:#520049">1</a>,<a href="#ref2" style="color:#520049">2</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>To evolve the adenine aptamer into a fluorogenic aptamer, we selected for aptamers that bind to agarose-immobilized DFHBI.  By the seventh round of SELEX, the pool exhibited fluorescence upon incubation with DFHBI-1T. At this point, the library was cloned into a bacterial expression vector, transformed into E. coli, and fluorescent aptamers were identified by sorting cells based on DFHBI-1T-induced fluorescence. After recovery of plasmids from the brightest cells, we found three library members which induced fluorescence activation of DFHBI-1T. For directed evolution, we synthesized a DNA library of 9–1 aptamer mutants such that each nucleotide in the ligand-binding pocket has a controlled probability of being converted into one of the other three nucleotides<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font>Here we used ribodraw to complete the figure, through the 3D structure information<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.<br></font>
<font><p>5'-GGGAAGAUACAAGGUGAGCCCAAUAAUAUGGUUUGGGUUAGGAUAGGAAGUAGAGCCUUAAACUCUCUAAGCGGUAUCUUCCC-3'</p></font>
<img src="/images/2D/squash_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>


<p class="blowheader_box">3D visualisation</p>             
<font>Determined the co-crystal structures of Squash bound to DFHBI-1T and DFHO. Our structures reveal that the fluorescence turn-on aptamer retains the overall fold of the adenine riboswitch, and that the fluorophores are recognized in a binding site lacking a G-quadruplex.This shows Squash-DFHBI-1T co-crystal structure in here. The PDB ID is 7KVU<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.<br>Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/Structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/squash_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>PDBe Molstar</title>
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
    <body onload="customize()">
        <div class="controlsSection1">
            <button onclick="
              var selectSections1 = [
                {
  struct_asym_id: 'G', 
  start_residue_number:1, 
  end_residue_number:10, 
  color:{r:255,g:255,b:0}
},
{
  struct_asym_id: 'G', 
  start_residue_number:11, 
  end_residue_number:17, 
  color:{r:255,g:192,b:203}
},
{
  struct_asym_id: 'G', 
  start_residue_number:18, 
  end_residue_number:38, 
  color:{r:0,g:255,b:0}
},
{
  struct_asym_id: 'G', 
  start_residue_number:39, 
  end_residue_number:49, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'G', 
  start_residue_number:50, 
  end_residue_number:67, 
  color:{r:72,g:209,b:204}
},
{
  struct_asym_id: 'G', 
  start_residue_number:68, 
  end_residue_number:73, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'G', 
  start_residue_number:74, 
  end_residue_number:83, 
  color:{r:255,g:255,b:0}
},
{
  struct_asym_id: 'G', 
  start_residue_number:106, 
  end_residue_number:106, 
  color:{r:255,g:255,b:0}
}
              ]
            viewerInstance1.visual.select({ data: selectSections1, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 120px;">Color Selection</button><br><br>
          <button button style="float: left;height:25px;width: 120px;" onclick="viewerInstance1.visual.clearSelection()">Clear Selection</button><br><br>
      </div>
    <div class="viewerSection1">
    <!-- Molstar container -->
      <div id="myViewer1"></div>
    </div>
    <script>
      var viewerInstance1 = new PDBeMolstarPlugin();
      var options1 = {
        customData:{
        url:'/pdbfiles/7kvu-3D.pdb',
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
</body>
</html>
</td>
</tr>
</table>
</div>
<br>


<p class="blowheader_box">Binding pocket</p>              
<font>Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 7KVU by X-ray crystallography. DFHBI-1T(shown in sticks) is labeled in yellow. Right: The hydrogen bonds of binding sites of the aptamer bound with DFHBI-1T<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.</font>
<br><br>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/squash_aptamer_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/squash_aptamer_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Dissociation constants (Kd) for the RNA-fluorophore complexes were determined.  The RNA aptamer at a fixed concentration (50 nM) was titrated with increasing fluorophore concentration and the resulting increase in fluorescence was recorded.  For each fluorophore concentration, a background signal for fluorophore only solution was also measured separately and subtracted from the measured RNA-fluorophore signal.  Data was fitted to a single site saturation model using nonlinear regression analysis in Sigmaplot software.</p>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/squash_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<br>
<!--div style="display: flex; justify-content: center;"></div>
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
        <td name="td1">5'-GAGACGGUCGGGUCCAGAUAUUCGUAUCUGUCGAGUAGAGUGUGGGCUC-3'</td>
        <td name="td2">DFHBI-1T</td>
        <td name="td3">360 nM</td>
      </tr>
	  </tbody>
  </table-->



<p class="blowheader_box">Structure ligand</p>                    
<font><p>DFHBI-1T is a membrane-permeable RNA aptamers-activated fluorescence probe (ex/em=472 nm/507 nm). DFHBI-1T binds to RNA aptamers (Spinach, iSpinach, and Broccoli) and causes specific fluorescence and lower background fluorescence. DFHBI-1T is used to image RNA in live cells</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">PubChem CID</th>
        <th onclick="sortTable(1)">Molecular Formula</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">CAS</th>
        <th onclick="sortTable(4)">Solubility</th>
        <th onclick="sortTable(5)">MedChemExpress</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/101889712" target="_blank" style="color:#520049"><b>101889712</b> </a></td>
        <td name="td1">C<sub>13</sub>H<sub>9</sub>F<sub>5</sub>N<sub>2</sub>O<sub>2</sub></td>
        <td name="td2">320.21 g/mol</td>
        <td name="td3">1539318-36-9</td>
        <td name="td4">100 mg/ml(in DMSO)</td>
        <td name="td5"><a href="https://www.medchemexpress.cn/dfhbi-1t.html" target="_blank" style="color:#520049"><b>HY-110251</b></a></td>
      </tr>
	  </tbody>
  </table>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/squash_stru_ligand1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/squash_stru_ligand2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;"></div>
<br>

<p class="blowheader_box">Similar compound</p>
<font><p>We used the PubChem database to screen compounds that were more similar to DFHBI-1T, and selected the most similar compounds for display. For those without CAS numbers, we will supplement them with Pubchem CID.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
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
        <td name="td1">DFHBI</td>
        <td name="td2">1241390-29-3</td>
        <td name="td3">70808995</td>
        <td name="td4"><img src="/images/Similar_compound/squash_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">SCHEMBL14662970</td>
        <td name="td2">NA</td>
        <td name="td3">71240545</td>
        <td name="td4"><img src="/images/Similar_compound/squash_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">3,5-difluoro-4-hydroxybenzylidene 1-trifluoroethyl-imidazolinone</td>
        <td name="td2">NA</td>
        <td name="td3">129847459</td>
        <td name="td4"><img src="/images/Similar_compound/squash_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">(z)-4-(2-(difluoroboryl)-4-hydroxybenzylidene)-1,2-dimethyl-1h-imidazol-5(4h)-one</td>
        <td name="td2">NA</td>
        <td name="td3">132599529</td>
        <td name="td4"><img src="/images/Similar_compound/squash_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">DFAME</td>
        <td name="td2">1420815-55-9</td>
        <td name="td3">71240548</td>
        <td name="td4"><img src="/images/Similar_compound/squash_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">DFHBI-2T</td>
        <td name="td2">1539318-40-5</td>
        <td name="td3">129080921</td>
        <td name="td4"><img src="/images/Similar_compound/squash_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
	  </tbody>
  </table>
<br>
<br>



                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Repurposing an adenine riboswitch into a fluorogenic imaging and sensing tag.</strong></font><br />
Dey, S. K., Filonov, G. S., Olarerin-George, A. O., Jackson, B. T., Finley, L. W. S., & Jaffrey, S. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/34937909/" target="_blank" style="color:#520049">Nature chemical biology, 18(2), 180–190. (2022)</a>
<br/>
            
<a id="ref2"></a><font><strong>[2] The fluorescent aptamer Squash extensively repurposes the adenine riboswitch fold.</strong></font><br />
Truong, L., Kooshapur, H., Dey, S. K., Li, X., Tjandra, N., Jaffrey, S. R., & Ferré-D'Amaré, A. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/34937911/" target="_blank" style="color:#520049">Nature chemical biology, 18(2), 191–198. (2022)</a>
<br/>
            
<a id="ref3"></a><font><strong>[3] A universal orthogonal imaging platform for living-cell RNA detection using fluorogenic RNA aptamers.</strong></font><br />
Yin, P., Ge, M., Xie, S., Zhang, L., Kuang, S., & Nie, Z.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/38098702/" target="_blank" style="color:#520049">Chemical science, 14(48), 14131–14139. (2023)</a>
<br/>

