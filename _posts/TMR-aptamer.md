---
layout: post
title:  "TMR aptamer"
date:   2024-04-23 00:00:00
author: Bo Fu, Jiali Wang
categories: Aptamer
---
<!--p style="font-size: 24px"><strong>Keywords: <br /></p-->
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
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/20159999/" target="_blank" style="color:#520049">2010</a></h3>
    </div>
    <div class="body">
      <p>Aptamers bind a larger fluorescent dye, tetramethylrhodamine was selected<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/27730489/" target="_blank" style="color:#520049">2017</a></h3>
    </div>
    <div class="body">
      <p>The NMR resonance assignment of an RNA aptamer binding to the fluorescent ligand tetramethylrhodamine TMR was present<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/31754719/" target="_blank" style="color:#520049">2020</a></h3>
    </div>
    <div class="body">
      <p>The atomic resolution structure of an RNA-aptamer binding to the fluorescent xanthene dye tetramethylrhodamine was present<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
    </div>
  </div>
</div>


         
<font><p class="header_box" id="description">Description</p></font>
<font>In 2010, James M. Carothers et al. employed in vitro selection techniques to isolate aptamers with high-affinity binding sites for TMR. Subsequently, Elke Duchardt-Ferner et al. elucidated the structure of the TMR3 aptamer/TMR complex by NMR-spectroscopy in their work published in 2020<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref3" style="color:#520049">3</a></sup><sup>]</sup>.<br></font>
<br>
<br>



<p class="header_box" id="SELEX">SELEX</p>
<p>This work generated aptamers that bind TMR using SELEX. An RNA library containing ~10<sup>14</sup> random library members was used and 5-carboxy TMR was conjugated to NovaBiochem Amino PEGA resin as positive target. After 10 rounds of SELEX, four of the TMR aptamers (TMR1, TMR2, TMR3 and TMR4)that exhibited substantial activity in the column-binding assays.The crystal structure of the TMR3-TMR complex was reported in subsequent work<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref3" style="color:#520049">3</a></sup><sup>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>Here we used ribodraw to complete the figure, through the 3D structure information<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.</p></font>
<font><p>5'-GACUCAUUUCCGUUUUCUAUGGGUCUUGGCCUGCUUCGGCAGGAGGUAACAUACACCUGUCCACACCUGCGC-3'</p></font>
<img src="/images/2D/5-TAMRA_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>


<p class="blowheader_box">3D visualisation</p>             
<font>Elke Duchardt-Ferner et al. solved the structure of the TMR3 aptamer/TMR complex by NMR-spectroscopy in their work published in 2020. The PDB ID of the structures are 6GZK and 6GZR<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>.<br>Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/5-TAMRA_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:101, 
  end_residue_number:101, 
  color:{r:255,g:255,b:0}
},
{
  struct_asym_id: 'A', 
  start_residue_number:26, 
  end_residue_number:31, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:33, 
  end_residue_number:39, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:8, 
  end_residue_number:23, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:25, 
  end_residue_number:25, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:40, 
  end_residue_number:40, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:1, 
  end_residue_number:7, 
  color:{r:0,g:128,b:128}
},
{
  struct_asym_id: 'A', 
  start_residue_number:41, 
  end_residue_number:48, 
  color:{r:0,g:128,b:128}
},
{
  struct_asym_id: 'A', 
  start_residue_number:24, 
  end_residue_number:24, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:32, 
  end_residue_number:32, 
  color:{r:255,g:135,b:10}
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
        url:'/pdbfiles/6gzk.pdb',
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
<font>Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 6GZK by NMR. 5'-TAMRA (shown in sticks) is labeled in yellow. Right: The hydrogen bonds of binding sites of the aptamer bound with 5'-TAMRA or other nucleotides surround small molecules.</font>
<br><br>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/5-TAMRA_aptamer_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/5-TAMRA_aptamer_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
  <br>
  <br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  
  
<p class="blowheader_box">SELEX ligand</p>
<font>Apparent Kds were determined with the spin-filter method using at least three independent measurements taken across the linear range<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.</font >
<br><br>
<div style="display: flex; justify-content: center;">
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
  <img src="/images/SELEX_ligand/TMR_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;border:solid 1px #efefef!important;display:block;margin:0 auto;border:solid 1px;border-radius:0;" class="img-responsive">
<br>

<p class="blowheader_box">Structure ligand</p>
<font><p>Tetramethylrhodamine is a rhodamine in which four hydrogens have been replaced by methyl groups. Forms such as tetramethylrhodamine dextran are often used as fluorescent tracer dyes in cell research.-----From Wiktionary</p></font>
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
        <td name="td0"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/9952143" target="_blank" style="color:#520049"><b>9952143</b> </a></td>
        <td name="td1">C<sub>24</sub>H<sub>22</sub>N<sub>2</sub>O<sub>3</sub></td>
        <td name="td2">386.4 g/mol</td>
        <td name="td3">120718-52-7</td>
        <td name="td4">NA</td>
        <td name="td5"><a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:52282" target="_blank" style="color:#520049"><b>52282</b> </a></td>
      </tr>
	  </tbody>
  </table>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/TMR_stru_ligand1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/TMR_stru_ligand2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;"></div>

                    
<p class="blowheader_box">Similar compound</p>
<font><p>We screened the compounds with great similarity to TMR by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
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
        <td name="td1">ZINC4521864</td>
        <td name="td2">Rhodamine II</td>
        <td name="td3">115532-49-5</td>
        <td name="td4">5009757</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC4521863</td>
        <td name="td2">Rhodamine I</td>
        <td name="td3">115532-52-0</td>
        <td name="td4">2762683</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC3873937</td>
        <td name="td2">[9-(4-Amino-2-carboxyphenyl)-6-(dimethylamino)xanthen-3-ylidene]-dimethylazanium</td>
        <td name="td3">167095-10-5</td>
        <td name="td4">5421</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC71789489</td>
        <td name="td2">[9-(5-Amino-2-carboxyphenyl)-6-(dimethylamino)xanthen-3-ylidene]-dimethylazanium</td>
        <td name="td3">80724-18-1</td>
        <td name="td4">10895427</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC35952357</td>
        <td name="td2">[6-(Dimethylamino)-9-(2-methoxycarbonylphenyl)thioxanthen-3-ylidene]-dimethylazanium</td>
        <td name="td3">NA</td>
        <td name="td4">11621055</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC34630916</td>
        <td name="td2">[9-(2-Carboxyphenyl)-6-(dimethylamino)thioxanthen-3-ylidene]-dimethylazanium</td>
        <td name="td3">NA</td>
        <td name="td4">11512296</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC139098115</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">NA</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC38346243</td>
        <td name="td2">N-(6-(dimethylamino)-9-phenyl-3H-thioxanthen-3-ylidene)-N-methylmethanaminium bromide</td>
        <td name="td3">NA</td>
        <td name="td4">11188604</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC504537834</td>
        <td name="td2">6-[3,6-bis(dimethylamino)xanthen-9-ylidene]-3-iminocyclohexa-1,4-diene-1-carboxylic acid</td>
        <td name="td3">NA</td>
        <td name="td4">92043312</td>
        <td name="td5"><img src="/images/Similar_compound/TMR_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
	  </tbody>
  </table>
  <br>
  <br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Selecting RNA aptamers for synthetic biology: investigating magnesium dependence and predicting binding affinity.</strong></font><br />
Carothers, J. M., Goler, J. A., Kapoor, Y., Lara, L., & Keasling, J. D.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20159999/" target="_blank" style="color:#520049">Nucleic acids research, 38(8), 2736–2747. (2010)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] NMR resonance assignments for the tetramethylrhodamine binding RNA aptamer 3 in complex with the ligand 5-carboxy-tetramethylrhodamine.</strong></font><br />
Duchardt-Ferner, E., Juen, M., Kreutz, C., & Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/27730489/" target="_blank" style="color:#520049">Biomolecular NMR assignments, 11(1), 29–34. (2017)</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Structure of an RNA aptamer in complex with the  fluorophore tetramethylrhodamine.</strong></font><br />
Duchardt-Ferner, E., Juen, M., Bourgeois, B., Madl, T., Kreutz, C., Ohlenschläger, O., & Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31754719/" target="_blank" style="color:#520049">Nucleic acids research, 48(2), 949–961. (2020)</a>
<br />