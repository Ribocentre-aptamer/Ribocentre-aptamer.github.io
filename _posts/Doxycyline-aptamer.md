---
layout: post
title:  "Doxycyline aptamer"
date:   2024-05-21 00:00:00
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
<font>In 2000, Piganeau and Jenne isolated RNA binding to some dyes through in vitro selection experiments<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Piganeau, N., Jenne, A., Thuillier, V., & Famulok, M. Eight different sequences were obtained from isolation of doxycycline-conjugated RNA using an in vitro selection system, and the selected pool was cloned and sequenced after rounds 10, 13 and 16<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. In addition, an analytical affinity column was run under isocratic conditions to determine an approximate dissociation constant (Kd) for the RNA-ligand interaction. The 2D structure of the left figure(1D16-05) is based on the article, and the right figure(1D16-13) is based on the prediction results of the RNA fold website. We used the minimum free energy (MFE) structure.1D16-05 aptamer and 1D16-13 aptamer binding to Doxycyline.<br></font>
<font><p>1D16-05 aptamer: 5'-GGAGCUCGGUAGUGACGCGUUGUGUUUACGCGUCUGAUGAGUGGUACAGUCCAGGGUGAAGUUCCAAUUUUGAACACCUCCACGAAACUACCUCGAGACGU-3'<br>1D16-13 aptamer: 5'-GGAGCUCGGUAGUGACGCGUUGUGUUUACGCGUCUGAUGAGUCCUCGGUAAUCGCCGUAUCAAAAGUCGGAAUGGAGGGUCGACGAAACUACCUCGAGACGU-3'</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/Doxycyline_aptamer_2D1.svg" alt="drawing" style="width:500px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/Doxycyline_aptamer_2D2.svg" alt="drawing" style="width:500px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Doxycycline is a tetracycline antibiotic used to treat a wide variety of bacterial infections.----From Drugbank.</font>
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
        <td name="td0">Doxycyline</td>
        <td name="td1">C<sub>22</sub>H<sub>24</sub>N<sub>2</sub>O<sub>8</sub></td>
        <td name="td2">444.4 g/mol</td>
        <td name="td3">564-25-0</td>
        <td name="td4">50 mg/ml</td>
        <td name="td5">Doxycycline hydrochloride hemiethanolate hemihydrate;WC2031 | C22H24N2O8 | CID 54713166 - PubChem (nih.gov)</td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB00254" target="_blank" style="color:#520049"><b>DB00254</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Doxycyline_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Ligand</th>
        <th onclick="sortTable(2)">Sequence</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">1D16-05 aptamer</td>
        <td name="td1">Doxycyline</td>
        <td name="td2">5'-GGAGCUCGGUAGUGACGCGUUGUGUUUACGCGUCUGAUGAGUGGUACAGUCCAGGGUGAAGUUCCAAUUUUGAACACCUCCACGAAACUACCUCGAGACGU-3'</td>
        <td name="td3">20 ± 5 nM</td>
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
        <td name="td0">ZINC252586752</td>
        <td name="td1">(4R,4aR,5R,5aR,6S,12aR)-4-(dimethylamino)-1,5,10,11,12a-pentahydroxy-6-methyl-3,12-dioxo-4a,5,5a,6-tetrahydro-4H-tetracene-2-carboxamide</td>
        <td name="td2">NA</td>
        <td name="td3">124080906</td>
        <td name="td4"><img src="/images/Similar_compound/Doxycyline_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC100302140</td>
        <td name="td1">Doxycycline,(S)</td>
        <td name="td2">NA</td>
        <td name="td3">54741563</td>
        <td name="td4"><img src="/images/Similar_compound/Doxycyline_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC198855020</td>
        <td name="td1">6-Epidoxycycline</td>
        <td name="td2">3219-99-6</td>
        <td name="td3">54685534</td>
        <td name="td4"><img src="/images/Similar_compound/Doxycyline_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC198589814</td>
        <td name="td1">(4S,4aR,5S,5aR,6R,12aS)-4-(dimethylamino)-1,5,10,11,12a-pentahydroxy-6-methyl-3,12-dioxo-4a,5,5a,6-tetrahydro-4H-tetracene-2-carboxamide</td>
        <td name="td2">NA</td>
        <td name="td3">73950444</td>
        <td name="td4"><img src="/images/Similar_compound/Doxycyline_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC198796850</td>
        <td name="td1">(4R,4aS,5R,5aS,6R,12aS)-4-(dimethylamino)-1,5,10,11,12a-pentahydroxy-6-methyl-3,12-dioxo-4a,5,5a,6-tetrahydro-4H-tetracene-2-carboxamide</td>
        <td name="td2">NA</td>
        <td name="td3">54748199</td>
        <td name="td4"><img src="/images/Similar_compound/Doxycyline_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td0">ZINC100302137</td>
        <td name="td1">Doxycycline</td>
        <td name="td2">564-25-0</td>
        <td name="td3">54671203</td>
        <td name="td4"><img src="/images/Similar_compound/Doxycyline_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1]  An Allosteric Ribozyme Regulated by Doxycyline.</strong></font><br/>
Piganeau, N., Jenne, A., Thuillier, V., & Famulok, M.<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049">Angewandte Chemie (International ed. in English), 39(23), 4369–4373. (2000)</a>
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