---
layout: post
title:  "Okra aptamer"
date:   2024-06-07 00:00:00
author: Bo Fu, Jiali Wang
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
<font>In 2024, Fangting Zuo and Li Jiang et al. employed in vitro selection techniques to isolate aptamers with high-affinity binding sites for ACE. The aptamer binds the fluorophore with high affinity. Favorable features of ACE together contribute to the high photostability of Okra-ACE complex<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>SELEX was performed with a library containing ~10<sup>14</sup> random RNA molecules and selected RNAs for their ability to bind bind and activate the fuorophore ligand ACE to emit bright green fuorescence. After SELEX, researchers selected a number of sequences, including Okra, to characterize their affinity for the dye and its spectral properties<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw.<br></font>
<font><p>5'-CGGGGACCAUCCAGCGAUGGAUACUGCUGCUUCGGCAGAGCAAGGAUAAUAUCUAGAACGACCAUCCG-3'</p></font>
<img src="/images/2D/ACE_aptamer_2D.svg" alt="drawing" style="width:800px;height:500px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>3-(2,3,6,7-tetrahydro-1H,5H-pyrido(3,2,1-ij)quinolin-9-yl)acrylamide- 2-cyano-N-(2-(2-aminoethoxy) ethyl) (ACE) was a non-GFP-like fluorophore, a hydrophilic derivative of  9-(2-carboxy-2-cyanovinyl) julolidine molecule rotor that has low fluorescence in solution.-----From <a href="https://doi.org/10.1038/s41589-024-01629-x" target="_blank">PMID: 38783134</a></font>
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
        <td name="td0">ACE</td>
        <td name="td1">C<sub>20</sub>H<sub>26</sub>N<sub>4</sub>O<sub>2</sub></td>
        <td name="td2">354.4 g/mol</td>
        <td name="td3">NA</td>
        <td name="td4">NA</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/170898143" target="_blank" style="color:#520049"><b>170898143</b></a></td>
        <td name="td6">NA</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/ACE_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<!--table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">Sequence</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">5'-CGGGGACCAUCCAGCGAUGGAUACUGCUGCUUCGGCAGAGCAAGGAUAAUAUCUAGAACGACCAUCCG-3'</td>
        <td name="td2">ACE</td>
        <td name="td3">1.2 nM</td>
      </tr>
	  </tbody>
  </table-->
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID. For another compound, we used a similar compound query method from the PubChem database.</p></font>
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
        <td name="td0">NA</td>
        <td name="td1">N-(2-(2-Aminoethoxy)ethyl)-2-cyano-3-(1,2,3,5,6,7-hexahydropyrido[3,2,1-ij]quinolin-9-yl)acrylamide</td>
        <td name="td2">NA</td>
        <td name="td3">170898143</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(E)-3-(1-azatricyclo[7.3.1.05,13]trideca-5,7,9(13)-trien-7-yl)-2-cyano-N-[2-[(2,2,2-trifluoroacetyl)amino]oxyethyl]prop-2-enamide</td>
        <td name="td2">NA</td>
        <td name="td3">156684979</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC14879905</td>
        <td name="td1">N-[(1-methyl-1,2,3,4-tetrahydro-6-quinolinyl)methyl]-6-(4-morpholinylmethyl)-2-oxo-1,2-dihydro-3-pyridinecarboxamide</td>
        <td name="td2">NA</td>
        <td name="td3">26275887</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC209173648</td>
        <td name="td1">(E)-3-(1-azatricyclo[7.3.1.05,13]trideca-5,7,9(13)-trien-7-yl)-2-cyano-N-methylprop-2-enamide</td>
        <td name="td2">NA</td>
        <td name="td3">59401066</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC202676737</td>
        <td name="td1">6-Methyl-1-(2-morpholin-4-ylethyl)-2-oxo-4-piperazin-1-ylquinoline-3-carbonitrile</td>
        <td name="td2">NA</td>
        <td name="td3">59740520</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">3-acetamidopropyl (E)-3-(1-azatricyclo[7.3.1.05,13]trideca-5,7,9(13)-trien-7-yl)-2-cyanoprop-2-enoate</td>
        <td name="td2">NA</td>
        <td name="td3">121464698</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(E)-3-(1-azatricyclo[7.3.1.05,13]trideca-5,7,9(13)-trien-7-yl)-2-cyano-N-pentylprop-2-enamide</td>
        <td name="td2">NA</td>
        <td name="td3">121464699</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">(E)-3-(1-azatricyclo[7.3.1.05,13]trideca-5,7,9(13)-trien-7-yl)-N-[2-[2-(6-chlorohexoxy)ethoxy]ethyl]-2-cyanoprop-2-enamide</td>
        <td name="td2">NA</td>
        <td name="td3">154615008</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">NA</td>
        <td name="td1">tert-butyl N-[2-[[(E)-3-(1-azatricyclo[7.3.1.05,13]trideca-5,7,9(13)-trien-7-yl)-2-cyanoprop-2-enoyl]amino]ethoxy]carbamate</td>
        <td name="td2">NA</td>
        <td name="td3">156376202</td>
        <td name="td4"><img src="/images/Similar_compound/ACE_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Imaging the dynamics of messenger RNA with a bright and stable green fluorescent RNA.</strong></font><br />
Zuo, F., Jiang, L., Su, N., Zhang, Y., Bao, B., Wang, L., Shi, Y., Yang, H., Huang, X., Li, R., Zeng, Q., Chen, Z., Lin, Q., Zhuang, Y., Zhao, Y., Chen, X., Zhu, L., & Yang, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/38783134/" target="_blank" style="color:#520049">Nature chemical biology, 10.1038/s41589-024-01629-x. (2024)</a>
<br/>


<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- Molstar CSS & JS -->
      <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.1.css">
      <script src="/js/mol/pdbe-molstar-plugin.js"></script>
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