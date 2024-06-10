---
layout: post
title:  "Chili aptamer"
date:   2024-04-22 00:00:00
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
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049">2011</a></h3>
    </div>
    <div class="body">
      <p>In this work, researchers isolated Spinach RNA aptamer and obtained another 13-2 aptamer series which has affinity with DMHBI and can activate its fluorescence<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/30485561/" target="_blank" style="color:#520049">2019</a></h3>
    </div>
    <div class="body">
      <p>An RNA aptamer named Chili mimics Large Stokes shift fluorescent proteins appeared<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/31740962/" target="_blank" style="color:#520049">2019</a></h3>
    </div>
    <div class="body">
      <p>The interactions between the Chili RNA and a family of conditionally fluorescent ligands was analyzed using a variety of spectroscopic, calorimetric and biochemical techniques<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
    </div>
  </div>
    <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049">2021</a></h3>
    </div>
    <div class="body">
      <p>Two co-crystal structures of the Chili RNA with positively charged DMHBO+ and DMHBI+ ligands were revealed<sup>[<a href="#ref4" style="color:#520049">4</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/37723244/" target="_blank" style="color:#520049">2023</a></h3>
    </div>
    <div class="body">
      <p>Chili labeled snRNA is used for intracellular imaging in the presence of specific concentrations of DMHBI<sup>[<a href="#ref5" style="color:#520049">5</a>]</sup></p>
    </div>
  </div>
</div>


         
<font><p class="header_box" id="description">Description</p></font>
<font>In 2011, Jeremy S. Paige et al. isolated Spinach RNA aptamer and obtained a 13-2 aptamer series that has affinity with DMHBI and can activate its fluorescence. In 2018, Christian Steinmetzger et al. obtained an RNA aptamer with stronger affinity to DMHBI through rational design of 13-2-min, and named it Chili. In 2021, Mateusz Mieczkowski et al. analyzed the structure of the Chili-DMHBI's derivatives complexs through crystallization, diffraction data collection and NMR spectroscopy<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref2" style="color:#520049">2</a></sup><sup>,<a href="#ref3" style="color:#520049">3</a></sup><sup>]</sup>.<br></font>
<br>
<br>



<p class="header_box" id="SELEX">SELEX</p>
<p>This work generated aptamers that bind DMHBI using SELEX. A DNA library containing ~5×10<sup>13</sup> random library members was used and DMHBI was conjugated to agarose beads as positive target. After 10 rounds of SELEX, an RNA aptamer that binds DFAME and activates its fluorescence was identified<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>  


<p class="header_box" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>Here we used ribodraw to complete the figure, through the 3D structure information<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.</p></font>
<font><p>5'-GGCUAGCUGGAGGGGCGCCAGUUCGCUGGUGGUUGGGUGCGGUCGGCUAGCC-3'</p></font>
<img src="/images/2D/DMHBI+_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>



<p class="blowheader_box">3D visualisation</p>             
<font>In 2021, Mateusz Mieczkowski et al. analyzed the structure of the Chili-DMHBI's derivatives complexs through crystallization, diffraction data collection and NMR spectroscopy. Structural data obtained by X-ray crystallography were deposited in the Protein Data Bank and are available with the following accession codes: 7OAW, 7OAX, 7OA3, 7OAV<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>.<br>Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/DMHBI+_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  struct_asym_id: 'D', 
  start_residue_number:14, 
  end_residue_number:14, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'D', 
  start_residue_number:16, 
  end_residue_number:16, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'D', 
  start_residue_number:31, 
  end_residue_number:31, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'D', 
  start_residue_number:33, 
  end_residue_number:34, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'D', 
  start_residue_number:2, 
  end_residue_number:8, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'D', 
  start_residue_number:10, 
  end_residue_number:11, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'D', 
  start_residue_number:35, 
  end_residue_number:35, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'D', 
  start_residue_number:38, 
  end_residue_number:40, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'D', 
  start_residue_number:43, 
  end_residue_number:52, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'D', 
  start_residue_number:103, 
  end_residue_number:103, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'D', 
  start_residue_number:17, 
  end_residue_number:30, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'D', 
  start_residue_number:15, 
  end_residue_number:15, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'D', 
  start_residue_number:9, 
  end_residue_number:9, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'D', 
  start_residue_number:12, 
  end_residue_number:13, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'D', 
  start_residue_number:32, 
  end_residue_number:32, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'D', 
  start_residue_number:36, 
  end_residue_number:37, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'D', 
  start_residue_number:41, 
  end_residue_number:42, 
  color:{r:10,g:11,b:255}
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
        url:'/pdbfiles/7oaw.pdb',
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
<font>Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 7OAW by NMR and X-ray crystallography. DMHBI+ (shown in sticks) is labeled in yellow. Right: The hydrogen bonds of binding sites of the aptamer bound with DMHBI+ or other nucleotides surround small molecules.</font>
<br>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/DMHBI+_aptamer_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/DMHBI+_aptamer_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
  <br>
  <br>




<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  
  
<p class="blowheader_box">SELEX ligand</p>
<font>The Kd was determined by and measuring the increase in fluorescence as a function of increasing dye concentration in the presence of a fixed concentration of RNA aptamer<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.</font >
<br><br>
<div style="display: flex; justify-content: center;"></div>
  <img src="/images/SELEX_ligand/DMHBI_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;display:block;margin:0 auto;border:solid 1px #efefef;border-radius:0;" class="img-responsive">
<br>

<p class="blowheader_box">Structure ligand</p>
<font><p>DMHBI (4-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-1,2-dimethyl-4,5-dihydro-1H-imidazol-5-one) is predominantly found in the phenolic form, the brighter DMFBI mimics EGFP and is anionic under standard conditions. The DMFBI-RNA complex has been called Spinach, it is the first fluorescent RNA tag that is both selective and non-toxic. It only fluoresces when bound to RNA, is resistant to photobleaching and has been used to follow RNA tagged molecules as they move through cells.-----From Green Fluorescent Protein</p></font>
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
        <td name="td0"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/68787434" target="_blank" style="color:#520049"><b>68787434</b> </a></td>
        <td name="td1">C<sub>14</sub>H<sub>16</sub>N<sub>2</sub>O<sub>4</sub></td>
        <td name="td2">276.29 g/mol</td>
        <td name="td3">1241390-25-9</td>
        <td name="td4">NA</td>
        <td name="td5">NA</td>
      </tr>
	  </tbody>
  </table>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/DMHBI_stru_ligand1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/DMHBI_stru_ligand2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;"></div>

                    
<p class="blowheader_box">Similar compound</p>
<font><p>We screened the compounds with great similarity to DMHBI by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
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
        <td name="td1">ZINC2051913110</td>
        <td name="td2">DFHBI</td>
        <td name="td3">NA</td>
        <td name="td4">70808995</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC1857790839</td>
        <td name="td2">DFHBI 1T</td>
        <td name="td3">NA</td>
        <td name="td4">101889712</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC2048528770</td>
        <td name="td2">DFHBI 2T</td>
        <td name="td3">NA</td>
        <td name="td4">129080921</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC145340396</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">46898418</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC4918310</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">NA</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC34107441</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">6527199</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC8091545</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">19374977</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC409030759</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">126037191</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">ZINC408815341</td>
        <td name="td2">NA</td>
        <td name="td3">NA</td>
        <td name="td4">125823074</td>
        <td name="td5"><img src="/images/Similar_compound/DMHBI_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
	  </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] RNA mimics of green fluorescent protein.</strong></font><br />
Paige, J. S., Wu, K. Y., & Jaffrey, S. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049">Science (New York, N.Y.), 333(6042), 642–646. (2011)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] A multicolor large stokes shift fluorogen-activating RNA aptamer with cationic chromophores.</strong></font><br />
Steinmetzger, C., Palanisamy, N., Gore, K. R., & Höbartner, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30485561/" target="_blank" style="color:#520049">Chemistry (Weinheim an der Bergstrasse, Germany), 25(8), 1931–1935. (2019)</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Structure-fluorescence activation relationships of a large Stokes shift fluorogenic RNA aptamer.</strong></font><br />
Steinmetzger, C., Bessi, I., Lenz, A. K., & Höbartner, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31740962/" target="_blank" style="color:#520049">Nucleic acids research, 47(22), 11538–11550. (2019)</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Large Stokes shift fluorescence activation in an RNA aptamer by intermolecular proton transfer to guanine.</strong></font><br />
Mieczkowski, M., Steinmetzger, C., Bessi, I., Lenz, A. K., Schmiedel, A., Holzapfel, M., Lambert, C., Pena, V., & Höbartner, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049">Nature communications, 12(1), 3549. (2021)</a>
<br />
                
<a id="ref5"></a><font><strong>[5] Large Stokes shift fluorescent RNAs for dual-emission fluorescence and bioluminescence imaging in live cells.</strong></font><br />
Trachman, R. J., 3rd, Autour, A., Jeng, S. C. Y., Abdolahzadeh, A., Andreoni, A., Cojocaru, R., Garipov, R., Dolgosheina, E. V., Knutson, Jiang, L., Xie, X., Su, N., Zhang, D., Chen, X., Xu, X., Zhang, B., Huang, K., Yu, J., Fang, M., Bao, B., Zuo, F., Yang, L., Zhang, R., Li, H., Huang, X., Chen, Z., Zeng, Q., Liu, R., Lin, Q., … Yang, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/37723244/" target="_blank" style="color:#520049">Nature methods, 20(10), 1563–1572. (2023)</a>
<br />