---
layout: post
title:  "GTP aptamer"
date:   2024-03-31 00:00:00
author: Yangyi Ren, Chen Ke
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
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049">2002</a></h3>
    </div>
    <div class="body">
      <p>The GTP RNA aptamer was selected for the first time<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/15099096/" target="_blank" style="color:#520049">2004</a></h3>
    </div>
    <div class="body">
      <p>To compare the structures and activities of eleven distinct GTP-binding RNAs<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049">2006</a></h3>
    </div>
    <div class="body">
      <p>Present the solution structure of the 41-nt Class I GTP aptamer (Kd = 75 nM) as determined by NMR<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
    </div>
  </div>
    <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/23601641/" target="_blank" style="color:#520049">2013</a></h3>
    </div>
    <div class="body">
      <p>Using in vitro selection to search a GTP RNA  aptamers,including one (the "G motif") with a G-quadruplex structure<sup>[<a href="#ref4" style="color:#520049">4</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/24824832/" target="_blank" style="color:#520049">2014</a></h3>
    </div>
    <div class="body">
      <p>Reporting the discovery and characterization of a second class of naturally occurring GTP aptamer, the “CA motif”<sup>[<a href="#ref5" style="color:#520049">5</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/27659052/" target="_blank" style="color:#520049">2016</a></h3>
    </div>
    <div class="body">
      <p>Solution NMR demonstrates class V aptamer binds GTP via a two-layered G-quadruplex, folding upon ligand addition<sup>[<a href="#ref6" style="color:#520049">6</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/27885761/" target="_blank" style="color:#520049">2017</a></h3>
    </div>
    <div class="body">
      <p>Report the NMR solution structure of an in vitro selected GTP-binding RNA aptamer bound to GTP with an intricate tertiary structure<sup>[<a href="#ref7" style="color:#520049">7</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/31030336/" target="_blank" style="color:#520049">2019</a></h3>
    </div>
    <div class="body">
      <p>The NMR-based structure determination of the high-affinity binding GTP-aptamer 9-12<sup>[<a href="#ref8" style="color:#520049">8</a>]</sup></p>
    </div>
  </div>
<div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/38074198/" target="_blank" style="color:#520049">2023</a></h3>
    </div>
    <div class="body">
      <p>Selection for ATP binding we isolate specific ATP- or GTP-binding aptamers with low micromolar affinities<sup>[<a href="#ref9" style="color:#520049">9</a>]</sup></p>
    </div>
  </div>
</div>


         
<font ><p class="header_box" id="description">Description</p></font>
<font >In 2002, Davis et al. employed in vitro selection techniques to isolate aptamers with high-affinity binding sites for GTP. Then,Davis et al. demonstrated significantly enhanced GTP binding, spanning three orders of magnitude in binding affinity. In 2006, James etal elucidated the structure of the aptamer complexed with GTP using multidimensional nuclear magnetic resonance spectroscopy and molecular dynamics calculations<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>



<p class="header_box" id="SELEX">SELEX</p>
<p>Aptamers, RNA sequences that bind to target ligands, are typically isolated by in vitro selection from RNA libraries containing completely random sequences. To see whether higher-affinity aptamers can be isolated from partially structured RNA libraries, we selected for aptamers that bind GTP, starting from a mixture of fully random and partially structured libraries. Because stem-loops are common motifs in previously characterized aptamers, we designed the partially structured library to contain a centrally located stable stem-loop. We used an off-rate selection protocol designed to maximize the enrichment of high-affinity aptamers. The selection produced a surprisingly large number of distinct sequence motifs and secondary structures, including seven different aptamers with Kds ranging from 500 to 25 nanomolar. The engineered stem-loop was present in the three highest affinity aptamers, and in 12 of 13 independent isolates with a single consensus sequence, suggesting that its inclusion increased the abundance of high-affinity aptamers in the starting pool<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>  



<p class="header_box" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>Here we use ribodraw to complete the figure, through the 3D structure information<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>.</p></font>
<font><p>5'-GGGACGAAGUGGUUGGGCGCUUCGGCGUGUGAAAACGUCCC-3'</p></font>
<img src="/images/2D/GTP_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>





<p class="blowheader_box">3D visualisation</p>             
<font >James m. carothers and Jonathan h. davis elucidate the solution structure of the 41-nt Class I GTP aptamer (Kd = 75 nM) using  multidimensional NMR spectroscopy and molecular dynamics calculations. The PDB ID of this structure is 2AU4<sup>[<a href="#ref3" style="color:#520049" >3</a>]</sup>.<br>Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/GTP_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  struct_asym_id: 'A',    
  start_residue_number:1, 
  end_residue_number:7, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:8, 
  end_residue_number:16, 
  color:{r:128,g:219,b:158}
},{
  struct_asym_id: 'A', 
  start_residue_number:17, 
  end_residue_number:28, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:29, 
  end_residue_number:29, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:30, 
  end_residue_number:34, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:35, 
  end_residue_number:41, 
  color:{r:9,g:254,b:254}
},{
  struct_asym_id: 'B', 
  start_residue_number:42, 
  end_residue_number:42, 
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
        url:'/pdbfiles/2AU4-3D.pdb',
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


<p class="blowheader_box">Binding pocket</p>             
<font >Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 2AU4 by NMR. GTP(Guanosine-5'-triphosphate)(shown in sticks) is labeled in yellow. Right: The hydrogen bonds of binding sites of the aptamer bound with GTP.</font>
<br><br>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/GTP_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/GTP_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
  <br>
  <br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  
  
<p class="blowheader_box">SELEX ligand</p>
<font >Jonathan H. Davis and Jack W. Szostak use ultrafiltration Kd assays to determine binding assays<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>. The affinity of the aptamer is shown in the figure below.</font >
<div style="display: flex; justify-content: center;">
<br>
<!--table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Ligand</th>
        <th onclick="sortTable(1)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">ATP</td>
        <td name="td1">~14uM</td>
      </tr>
      <tr>
        <td name="td0">adenosine</td>
        <td name="td1">5-8uM</td>
      </tr>
      <tr>
        <td name="td0">dATP</td>
        <td name="td1">> 1mM</td>
      </tr>
	  </tbody>
  </table-->
  </div>
  <img src="/images/SELEX_ligand/GTP_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;display:block;margin:0 auto;border:solid 1px #efefef;border-radius:0;" class="img-responsive">
<br>

<p class="blowheader_box">Structure ligand</p>
<font><p>GTP is a guanosine 5'-phosphate and a purine ribonucleoside 5'-triphosphate. It has a role as an Escherichia coli metabolite, a mouse metabolite and an uncoupling protein inhibitor. It is a conjugate acid of a GTP.-----from PubChem</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">PubChem CID</th>
        <th onclick="sortTable(1)">Molecular Formula</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">CAS</th>
        <th onclick="sortTable(4)">Solubility</th>
        <th onclick="sortTable(5)">Drugbank ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/135398633" target="_blank" style="color:#520049"><b>135398633</b></a></td>
        <td name="td1">C<sub>10</sub>H<sub>16</sub>N<sub>5</sub>O<sub>14</sub>P<sub>3</sub></td>
        <td name="td2">523.18 g/mol</td>
        <td name="td3">86-01-1</td>
        <td name="td4">100 mg/mL in water</td>
        <td name="td5"><a href="https://go.drugbank.com/drugs/DB04137" target="_blank" style="color:#520049"><b>DB04137</b> </a></td>
      </tr>
	  </tbody>
  </table>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/GTP_stru_ligand1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/GTP_stru_ligand2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;">
  </div>
                    
<p class="blowheader_box">Similar compound</p>
<font><p>We screened the compounds with great similarity to GTP by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
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
        <td name="td1">ZINC14881082</td>
        <td name="td2">9beta-D-Arabinofuranosylguanosine 5'-Triphosphate</td>
        <td name="td3">72490-81-4</td>
        <td name="td4">135544356</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC100054067</td>
        <td name="td2">6-Thioguanosine-5'- O- Triphosphate</td>
        <td name="td3">NA</td>
        <td name="td4">131769948</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC37868676</td>
        <td name="td2">Phosphoaminophosphonic Acid Guanylate Ester</td>
        <td name="td3">34273-04-6</td>
        <td name="td4">135403657</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC8215530</td>
        <td name="td2">Inosine triphosphate</td>
        <td name="td3">132-06-9</td>
        <td name="td4">135398643</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC13436579</td>
        <td name="td2">2'-Deoxyguanosine-5'-Triphosphate</td>
        <td name="td3">2564-35-4</td>
        <td name="td4">135398599</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC95618747</td>
        <td name="td2">6-Thioguanosine 5'-triphosphate</td>
        <td name="td3">17670-19-8</td>
        <td name="td4">10143562</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC53683954</td>
        <td name="td2">7-Methyl-Guanosine-5'-Triphosphate</td>
        <td name="td3">26554-26-7</td>
        <td name="td4">135419182</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC44221439</td>
        <td name="td2">Guanidinetriphosphate</td>
        <td name="td3">NA</td>
        <td name="td4">135440071</td>
        <td name="td5"><img src="/images/Similar_compound/GTP_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
	  </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Isolation of high-affinity GTP aptamers from partially structured RNA libraries.</strong></font><br />
Jonathan H. Davis and Jack W. Szostak.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12185247/" target="_blank" style="color:#520049" >PNAS, 99 (18) 11616-11621 (2002)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Informational Complexity and Functional Activity of RNA Structures.</strong></font><br />
James M. Carothers, Stephanie C. Oestreich‡, Jonathan H. Davis, and Jack W. Szostak.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15099096/" target="_blank" style="color:#520049">JACS, 126(16) 5130–5137 (2004)</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Solution structure of an informationally complex high-affinity RNA aptamer to GTP.</strong></font><br />
Carothers, J. M., Davis, J. H., Chou, J. J., & Szostak, J. W.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049">RNA, 12(4), 567-579 (2006)</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Discovery of widespread GTP-binding motifs in genomic DNA and RNA.</strong></font><br />
Curtis, E. A., & Liu, D. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/23601641/" target="_blank" style="color:#520049">Chemistry & biology, 20(4), 521-532 (2013)</a>
<br />
                
<a id="ref5"></a><font><strong>[5] A naturally occurring, noncanonical GTP aptamer made of simple tandem repeats.</strong></font><br />
Curtis, Edward A., and David R. Liu<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/24824832/" target="_blank" style="color:#520049">RNA biology, 11(6), 682-692 (2014)</a>
<br />
                
<a id="ref6"></a><font><strong>[6] An intermolecular G-quadruplex as the basis for GTP recognition in the class V–GTP aptamer.</strong></font><br />
Nasiri, A. H., Wurm, J. P., Immer, C., Weickhmann, A. K., & Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/27659052/" target="_blank" style="color:#520049">RNA, 22(11), 1750-1759. (2016)</a>
<br />
                
<a id="ref7"></a><font><strong>[7] A stably protonated adenine nucleotide with a highly shifted pKa value stabilizes the tertiary structure of a GTP‐binding RNA aptamer.</strong></font><br />
Wolter, A. C., Weickhmann, A. K., Nasiri, A. H., Hantke, K., Ohlenschläger, O., Wunderlich, C. H. & Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/27885761/" target="_blank" style="color:#520049">Angewandte Chemie International Edition, 56(1), 401-404. (2017)</a>
<br />
                
<a id="ref8"></a><font><strong>[8] NMR resonance assignments for the GTP-binding RNA aptamer 9-12 in complex with GTP.</strong></font><br />
Wolter, A. C., Pianu, A., Kremser, J., Strebitzer, E., Schnieders, R., Fürtig, B.& Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31030336/" target="_blank" style="color:#520049">Biomolecular NMR Assignments, 13, 281-286 (2019)</a>
<br />
                
<a id="ref9"></a><font><strong>[9] Emergence of ATP‐and GTP‐Binding Aptamers from Single RNA Sequences by Error‐Prone Replication and Selection.</strong></font><br />
Wachowius, F., Porebski, B. T., Johnson, C. M., & Holliger, P.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/38074198/" target="_blank" style="color:#520049">ChemSystemsChem, 5(5), e202300006. (2023)</a>
<br />
                       