---
layout: post
title:  "GRK2 aptamer"
date:   2024-04-19 00:00:00
author: Zhizhong Lu, Ying Ao
permalink: /docs/GRK2-aptamer/
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
<!--body>
  <p style="font-size: 16px">Click the buttons to navigate to different sections:</p>
  <div class="button-container">
    <a class="button" style="color:#520049" href="#timeline">Timeline</a>
    <a class="button" style="color:#520049" href="#description">Description</a>
    <a class="button" style="color:#520049" href="#SELEX">SELEX</a>
    <a class="button" style="color:#520049" href="#structure">Structure</a>
    <a class="button" style="color:#520049" href="#ligand-recognition">Ligand recognition
    <a class="button" style="color:#520049" href="#references">References</a>
   </a>
  </div>
</body-->
</html>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
     display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #c9c5c5;
      border-radius: 5px;
      width:225px;
	    height:50px;
  }
  .header_boxx1 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:115px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx2 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:140px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx3 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:85px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx4 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:120px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx5 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:215px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx6 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:135px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .blowheader_box{
    display: block;
      padding: 10px;
      font-size:18px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 5px;
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
<p><br /></p>



         
<font ><p class="header_boxx2" id="description">Description</p></font>
<font >In 2008, Mayer, G.et al. have used SELEX (systematic evolution of ligands by exponential enrichment) to develop RNA aptamers that potently and selectively inhibit GRK2. This process has yielded an aptamer, C13, which bound to GRK2 with a high affinity. In 2012, Tesmer, J. J. determined crystallographic structures of GRK2 bound to an RNA aptamer that potently and selectively inhibits kinase activity<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>.<br></font>
<p><br /></p> <br>

<p class="header_boxx3" id="SELEX">SELEX</p>
<p>In 2008, Mayer, G.et al. used a structurally constrained RNA library in vitro selection. After 12 selection cycles the enriched RNA library was analyzed for GRK2 binding, The enriched RNA library was cloned and the sequences of 18 monoclones were determined<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/docs/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br> <br>    



<p class="header_boxx4" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>Here we use ribodraw to complete the figure, through the 3D structure information<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.</p></font>
<font><p>C13.18 aptamer: 5'-GGCAGACCAUACGGGAGAGAAACUUGCC-3'<br>C13.28 aptamer: 5‘-CCAUACGGGAGAGAAACU-3’</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/GRK2_aptamer_2D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/GRK2_aptamer_2D2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
<br><br>


<p class="blowheader_box">3D visualisation</p>             
<font >Mayer, G., & Tesmer, J. J. determined the crystal structure of C13.18 aptamer bound to the GRK2 protein at 3.51 Å resolution and C13.28 aptamer bound to the GRK2 protein at 4.52 Å resolution. The PDB ID of the two aptamers is 3UZT and 3UZS<sup>[<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>. Only the structure of 3ZUS is shown here. Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/docs/Structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/GRK2_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  struct_asym_id: 'A', 
  start_residue_number:29, 
  end_residue_number:671, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'B', 
  start_residue_number:2, 
  end_residue_number:340, 
  color:{r:255,g:192,b:203}
},{
  struct_asym_id: 'C', 
  start_residue_number:41, 
  end_residue_number:48, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'C', 
  start_residue_number:54, 
  end_residue_number:68, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'C', 
  start_residue_number:49, 
  end_residue_number:53, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'G', 
  start_residue_number:2, 
  end_residue_number:68, 
  color:{r:255,g:192,b:203}
},{
  struct_asym_id: 'A', 
  start_residue_number:701, 
  end_residue_number:701, 
  color:{r:0,g:128,b:0}
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
        url:'/docs/pdbfiles/3uzs-3D.pdb',
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
    </html></td>
  </tr></table><br>
  </div>


<p class="blowheader_box">Binding pocket</p>             
<font >Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 3UZS at 4.52 Å resolution. The GRK2 protein (shown in vacuumm electrostatics), blue is positive charge, red is negative charge. Right: The hydrogen bonds of binding sites of the aptamer bound with the GRK2 protein. Hydrogen bonds was predicted by Pymol.</font>
<br><br>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/GRK2_aptamer_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/GRK2_aptamer_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
  <br><br>





<font ><p class="header_boxx5" id="ligand-recognition">Ligand information</p></font>  
<p class="blowheader_box">SELEX ligand</p>
<font >Used a flow cytometry-based protein-RNA interaction assay. Biotinylated GRK2 (bGRK2) was first immobilized on streptavidin beads and incubated with increasing amounts of 5'Alexa Fluor-488-labeled C13.28 (F-C13.28) or C13.18 (F-C13.18). The beads were then passed through a flow cytometer and the amount of bead-bound fluorescence was quantitated to yield a dissociation constant (Kd)<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.</font >
<div style="display: flex; justify-content: center;">
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(0)">Sequence</th>
        <th onclick="sortTable(0)">Ligand</th>
        <th onclick="sortTable(1)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">C13.18</td>
        <td name="td1">CCAUACGGGAGAGAAACU</td>
        <td name="td3">GRK2</td>
        <td name="td4">35 ± 5 nM</td>
      </tr>
      <tr>
        <td name="td0">C13.20</td>
        <td name="td1">GACCAUACGGGAGAGAAACU</td>
        <td name="td3">GRK2</td>
        <td name="td4">48 ± 7 nM</td>
      </tr>
      <tr>
        <td name="td0">C13.28</td>
        <td name="td1">GGCAGACCAUACGGGAGAGAAACUUGCC</td>
        <td name="td3">GRK2</td>
        <td name="td4">1.2 ± 0.6 nM</td>
      </tr>
	  </tbody>
  </table>
  </div>
<br>

<p class="blowheader_box">Structure ligand</p>
<font><p>GRK2, also called beta-adrenergic receptor kinase (beta-ARK) or beta-ARK1, is important in regulating several cardiac receptor responses. It plays a role in cardiac development and in hypertension. Deletion of GRK2 in mice results in embryonic lethality, caused by hypoplasia of the ventricular myocardium. GRK2 also plays important roles in the liver (as a regulator of portal blood pressure), in immune cells, and in the nervous system. Altered GRK2 expression has been reported in several disorders including major depression, schizophrenia, bipolar disorder, and Parkinsonism. GRK2 contains an N-terminal RGS homology (RH) domain, a central catalytic domain, and C-terminal pleckstrin homology (PH) domain that mediates PIP2 and G protein betagamma-subunit translocation to the membrane. GRKs phosphorylate and regulate G protein-coupled receptors (GPCRs), the largest superfamily of cell surface receptors which regulate some part of nearly all physiological functions. Phosphorylated GPCRs bind to arrestins, which prevents further G protein signaling despite the presence of activating ligand. TheGRK2 subfamily is part of a larger superfamily that includes the catalytic domains of other STKs, protein tyrosine kinases, RIO kinases, aminoglycoside phosphotransferase, choline kinase, and phosphoinositide 3-kinase.-----Interpro</p></font>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Uniprot ID</th>
        <th onclick="sortTable(1)">InterPro ID</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">Amino acids sequences</th>
        <th onclick="sortTable(4)">PDB ID</th>
        <th onclick="sortTable(5)">GenBank</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0"><a href="https://www.uniprot.org/uniprotkb/P21146/" target="_blank" style="color:#520049"><b>P21146</b></a></td>
        <td name="td1"><a href="https://www.ebi.ac.uk/interpro/entry/cdd/CD14223/" target="_blank" style="color:#520049"><b>CD14223/</b></a></td>
        <td name="td2">79.66 KDa</td>
        <td name="td3">MADLEAVLADVSYLMAMEKSKATPAARASKKILLPEPSIRSVMQKYLEDRGEVTFEKIFSQKLGYLLFRDFCLKHLEEAKPLVEFYEEIKKYEKLETEEERLVCSREIFDTYIMKELLACSHPFSKSAIEHVQGHLVKKQVPPDLFQPYIEEICQNLRGDVFQKFIESDKFTRFCQWKNVELNIHLTMNDFSVHRIIGRGGFGEVYGCRKADTGKMYAMKCLDKKRIKMKQGETLALNERIMLSLVSTGDCPFIVCMSYAFHTPDKLSFILDLMNGGDLHYHLSQHGVFSEADMRFYAAEIILGLEHMHNRFVVYRDLKPANILLDEHGHVRISDLGLACDFSKKKPHASVGTHGYMAPEVLQKGVAYDSSADWFSLGCMLFKLLRGHSPFRQHKTKDKHEIDRMTLTMAVELPDSFSPELRSLLEGLLQRDVNRRLGCLGRGAQEVKESPFFRSLDWQMVFLQKYPPPLIPPRGEVNAADAFDIGSFDEEDTKGIKLLDSDQELYRNFPLTISERWQQEVAETVFDTINAETDRLEARKKTKNKQLGHEEDYALGKDCIMHGYMSKMGNPFLTQWQRRYFYLFPNRLEWRGEGEAPQSLLTMEEIQSVEETQIKERKCLLLKIRGGKQFVLQCDSDPELVQWKKELRDAYREAQQLVQRVPKMKNKPRSPVVELSKVPLIQRGSANGL</td>
        <td name="td4"><a href="https://www.rcsb.org/structure/1OMW" target="_blank" style="color:#520049"><b>1OMW</b></a></td>
        <td name="td5"><a href="https://www.ncbi.nlm.nih.gov/gene/282682" target="_blank" style="color:#520049"><b>282682</b> </a></td>
      </tr>
	  </tbody>
  </table>
 <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/GRK2_aptamer_stru_ligand.svg" alt="drawing" style="width:800px"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;">
  </div>


<p class="blowheader_box">Similar compound</p>
<font><p>We used the Dail server website to compare the structural similarities of ligand proteins, and chose the top 10 in terms of similarity for presentation. The Dali server is a network service for comparing protein structures in 3D. Dali compares them against those in the Protein Data Bank (PDB). Z-score is a standard score that is converted from an original score. The list of neighbours is sorted by Z-score. Similarities with a Z-score lower than 2 are spurious. RMSD(Root Mean Square Deviation) value is used to measure the degree to which atoms deviate from the alignment position.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">PDB</th>
        <th onclick="sortTable(2)">Z-score</th>
        <th onclick="sortTable(3)">RMSD</th>
        <th onclick="sortTable(4)">Description</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">1OMW-A</td>
        <td name="td2">55.2</td>
        <td name="td3">0</td>
        <td name="td4">G-protein coupled receptor kinase 2</td>
      </tr>
      <tr>
        <td name="td1">3PSC-A</td>
        <td name="td2">51.8</td>
        <td name="td3">0.4</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">3PVW-A</td>
        <td name="td2">50.3</td>
        <td name="td3">0.7</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">7PWD-A</td>
        <td name="td2">49.5</td>
        <td name="td3">1.3</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">1YM7-A</td>
        <td name="td2">49.1</td>
        <td name="td3">0.8</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">1YM7-D</td>
        <td name="td2">49</td>
        <td name="td3">0.6</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">3PVU-A</td>
        <td name="td2">48.8</td>
        <td name="td3">0.5</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">5UKL-A</td>
        <td name="td2">48.7</td>
        <td name="td3">1.2</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">3CIK-A</td>
        <td name="td2">48.4</td>
        <td name="td3">1.2</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
      <tr>
        <td name="td1">6U7C-A</td>
        <td name="td2">48.3</td>
        <td name="td3">0.9</td>
        <td name="td4">Beta-adrenergic receptor kinase 1</td>
      </tr>
	  </tbody>
  </table>
<br><br>

                 
<p class="header_boxx6" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] An RNA molecule that specifically inhibits G-protein-coupled receptor kinase 2 in vitro.</strong></font><br />
Mayer, G., Wulffen, B., Huber, C., Brockmann, J., Flicke, B., Neumann, L., Hafenbradl, D., Klebl, B. M., Lohse, M. J., Krasel, C., & Blind, M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049" >RNA (New York, N.Y.), 14(3), 524–534. (2008)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Molecular mechanism for inhibition of g protein-coupled receptor kinase 2 by a selective RNA aptamer.</strong></font><br />
Tesmer, V. M., Lennarz, S., Mayer, G., & Tesmer, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/22727813/" target="_blank" style="color:#520049">Structure (London, England : 1993), 20(8), 1300–1309. (2012)</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Crystallographic Pursuit of a Protein-RNA Aptamer Complex.</strong></font><br />
Tesmer J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/26552823/" target="_blank" style="color:#520049"> Methods in molecular biology (Clifton, N.J.), 1380, 151–160. (2016)</a>
<br />
