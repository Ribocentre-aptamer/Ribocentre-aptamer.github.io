---
layout: post
title:  "Clivias aptamer"
date:   2024-06-09 00:00:00
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
<font>In a work published in 2023, Li Jiang and Xin Xie et al. isolated an RNA aptamer, named Clivias, which binds NBSI and transform its optical properties. Later, in a work published in 2024 by Kaiyi Huang and others, the structure of the Clivias-NBSI derivates complex is analyzed by crystallization, diffraction data collection<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>.</font>
<br>
<br>

<p class="header_box" id="SELEX">SELEX</p>
<p>SELEX was performed with a library and selected RNAs for their ability to bind NBSI derivates. The selection process went through 8 rounds. After SELEX, researchers selected a number of sequences, including Clivias, to characterize their affinity for the dye and its spectral properties<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>    



<p class="header_box" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>Here we used Ribodraw to complete the figure, through the 3D structure information. Spinach aptamer was the aptamer sequence mainly studied in SELEX article<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.</p></font>
<font><p>5'-AGAUUGUAAACACGCCGAAGGCGGACACU-3'</p></font>
<img src="/images/2D/Clivia_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>


<p class="blowheader_box">3D visualisation</p>             
<font>Kaiyi Huang and Qianqian Song  et al. present the solution structure, as determined by crystallization and diffraction data collection of Clivias-NBSI complex. The PDB ID of these structures are 8HZE<sup>[<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>.<br>Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<!--div><font><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/NBSI_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>PDBe Molstar</title>
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
  struct_asym_id: 'X', 
  start_residue_number:27, 
  end_residue_number:28, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:32, 
  end_residue_number:33, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:62, 
  end_residue_number:63, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:66, 
  end_residue_number:67, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:71, 
  end_residue_number:71, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:69, 
  end_residue_number:69, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:85, 
  end_residue_number:94, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'X', 
  start_residue_number:1, 
  end_residue_number:13, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'X', 
  start_residue_number:101, 
  end_residue_number:101, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'X', 
  start_residue_number:36, 
  end_residue_number:44, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:49, 
  end_residue_number:57, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:26, 
  end_residue_number:26, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:31, 
  end_residue_number:31, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:64, 
  end_residue_number:64, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:25, 
  end_residue_number:25, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:29, 
  end_residue_number:30, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:65, 
  end_residue_number:65, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:68, 
  end_residue_number:68, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:70, 
  end_residue_number:70, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:72, 
  end_residue_number:72, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:14, 
  end_residue_number:24, 
  color:{r:0,g:128,b:128}
},
{
  struct_asym_id: 'X', 
  start_residue_number:73, 
  end_residue_number:84, 
  color:{r:0,g:128,b:128}
},
{
  struct_asym_id: 'X', 
  start_residue_number:34, 
  end_residue_number:35, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'X', 
  start_residue_number:58, 
  end_residue_number:61, 
  color:{r:255,g:135,b:10}
}
              ]
            viewerInstance1.visual.select({ data: selectSections1, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 120px;">Color Selection</button><br><br>
          <button button style="float: left;height:25px;width: 120px;" onclick="viewerInstance1.visual.clearSelection()">Clear Selection</button><br><br>
      </div>
    <div class="viewerSection1">
      <div id="myViewer1"></div>
    </div>
    <script>
      var viewerInstance1 = new PDBeMolstarPlugin();
      var options1 = {
        customData:{
        url:'/pdbfiles/.pdb',
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
</div-->
<br>
<br>


<p class="blowheader_box">Binding pocket</p>             
<font >Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 4TS0 by NMR and X-ray crystallography. DFHBI(shown in sticks) is labeled in yellow. Right: The hydrogen bonds of binding sites of the aptamer bound with DFHBI or other nucleotides surround small molecules.</font>
<br>
<br>
  <!--table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/NBSI_aptamer_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/NBSI_aptamer_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table-->
  <br>
  <br>



<font><p class="header_box" id="ligand-recognition">Ligand information</p></font>  
<p class="blowheader_box">SELEX ligand</p>
<font>To determine the dissociation constants of Clivia with different fluorophores, 20 nM Clivia RNA was incubated with increasing concentrations of the fluorophore (0–5 μM) and the fluorescence intensity at the corresponding spectra was measured using a Neo2 multi-mode microplate reader(BioTek). The resulting data were fitted to a curve based on the Hill equation: Y = Bmax · Xh/(Kd + Xh), where Bmax represents the maximum specific binding parameter in the same units as Y, h represents the Hill slope and Kd represents the concentration needed to achieve a half-maximum binding at equilibrium<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.</font >
<br><br>
<img src="/images/SELEX_ligand/NBSI_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>

<p class="blowheader_box">Structure ligand</p>
<font><p>NBSI is a typical chromophore structure consisting of an electron donor and an electron acceptor linked by π conjugation. NBSI exhibit a large Stokes shift of 80 nm when it was constrained in glycerol.-----From 2023_nature methods_Large Stokes shift fluorescent RNAs for dual-emission fluorescence and bioluminescence imaging in live cells.</p></font>
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
        <td name="td0"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/163781292" target="_blank" style="color:#520049"><b>163781292</b></a></td>
        <td name="td1">C<sub>22</sub>H<sub>22</sub>FN<sub>3</sub>O<sub>2</sub></td>
        <td name="td2">379.4 g/mol</td>
        <td name="td3">NA</td>
        <td name="td4">NA</td>
        <td name="td5">NA</td>
      </tr>
	  </tbody>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Structure_ligand/NBSI581_stru_ligand1.svg" alt="drawing" style="width:500px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Structure_ligand/NBSI581_stru_ligand2.svg" alt="drawing" style="width:500px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>


<p class="blowheader_box">Similar compound</p>
<font><p>We screened the compounds with great similarity to AMP by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
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
        <td name="td0">ZINC2383302907</td>
        <td name="td1">(5Z)-2-[(E)-2-(4-fluorophenyl)ethenyl]-5-[[4-[2-hydroxyethyl(methyl)amino]phenyl]methylidene]-3-methylimidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">163781292</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC145364711</td>
        <td name="td1">(5Z)-5-[[4-(dimethylamino)phenyl]methylidene]-3-methyl-2-phenylimidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">70809009</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(5Z)-2-[(E)-2-(4-fluorophenyl)ethenyl]-3-methyl-5-[[4-[methyl(2-prop-2-ynoxyethyl)amino]phenyl]methylidene]imidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">168141028</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(5Z)-5-[[4-[2-(dimethylamino)ethyl-methylamino]phenyl]methylidene]-2-[(E)-2-(3-fluorophenyl)ethenyl]-3-methylimidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">168727611</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC2383303014</td>
        <td name="td1">(5Z)-2-[(E)-2-(3-fluorophenyl)ethenyl]-5-[[4-[2-hydroxyethyl(methyl)amino]phenyl]methylidene]-3-methylimidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">168727620</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(5Z)-2-[(E)-2-(3-fluorophenyl)ethenyl]-5-[[4-[2-isocyanoethyl(methyl)amino]phenyl]methylidene]-3-methylimidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">168727621</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">2-[4-[(Z)-[2-[(E)-2-(3-fluorophenyl)ethenyl]-1-methyl-5-oxoimidazol-4-ylidene]methyl]-N-methylanilino]ethoxy thiohypoiodite</td>
        <td name="td2">NA</td>
        <td name="td3">169613093</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC169512732</td>
        <td name="td1">(5Z)-5-[[3-(dimethylamino)phenyl]methylidene]-3-(2-hydroxyethyl)-2-methylimidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">102456280</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(5Z)-2-[(E)-2-(4-fluorophenyl)ethenyl]-3-methyl-5-[[4-[methyl(2-prop-2-enoxyethyl)amino]phenyl]methylidene]imidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">169612817</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(5Z)-2-[(E)-2-(4-fluorophenyl)ethenyl]-3-methyl-5-[[4-[methyl-[2-(2-methylprop-2-enoxy)ethyl]amino]phenyl]methylidene]imidazol-4-one</td>
        <td name="td2">NA</td>
        <td name="td3">169612902</td>
        <td name="td4"><img src="/images/Similar_compound/NBSI_Simi_compound10.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Large Stokes shift fluorescent RNAs for dual-emission fluorescence and bioluminescence imaging in live cells.</strong></font><br />
Jiang, L., Xie, X., Su, N., Zhang, D., Chen, X., Xu, X., Zhang, B., Huang, K., Yu, J., Fang, M., Bao, B., Zuo, F., Yang, L., Zhang, R., Li, H., Huang, X., Chen, Z., Zeng, Q., Liu, R., Lin, Q., … Yang, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/37723244/" target="_blank" style="color:#520049">Nature methods, 20(10), 1563–1572. (2023)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Structural basis of a small monomeric Clivia fluorogenic RNA with a large Stokes shift.</strong></font><br />
Huang, K., Song, Q., Fang, M., Yao, D., Shen, X., Xu, X., Chen, X., Zhu, L., Yang, Y., & Ren, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/38816645/" target="_blank" style="color:#520049">Nature chemical biology, 10.1038/s41589-024-01633-1. (2024)</a>
<br />




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
