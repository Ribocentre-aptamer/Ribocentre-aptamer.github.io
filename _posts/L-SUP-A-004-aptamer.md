---
layout: post
title:  "L-SUP-A-004 aptamer"
date:   2024-05-15 00:00:00
author: Yuhang Luo, Linfei Li
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
<font>In 2005, Sven Klussmann et al. screened RNA aptamers against mirror-image conformation (d-peptide) substance P and used this aptamer (SUP-A-004) to bind naturally-occurring l-substance P, showing a binding affinity (K(d)) of 40 nM and inhibiting l-substance P-mediated Ca2+ release in cell culture experiments with an inhibitory concentration (IC50) of 45 nM<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Sven Klussmann et al. use a single-stranded DNA library (ssDNA library) that contains about 10^15 different molecules. These molecules are enzymatically converted from the synthetic DNA library and transcribed into RNA for subsequent screening. The screening process uses the automated SELEEX (Systematic Evolution of Ligands by EXponential enrichment) technology. This technique allows the execution of in vitro screening cycles without direct human intervention. The initial three screening cycles were performed manually, and from the fourth cycle onwards, automated equipment was used. Throughout the screening process, RNA binds to the target molecule D-substance P. Unbound RNA is discarded, while bound RNA is amplified by PCR for the next round of screening. In total, about 14 rounds of screening were performed and 24 different sequences were obtained from the screening process. The final identified and frequent haptamer sequence was reduced to the 44 nucleotide long sequence SUP-A-004<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. In addition,The authors also used Isothermal Titration Calorimetry (ITC) to determine the affinity of L-SUP-A-004 aptamer and substance P. This method was used to determine the affinity of the two aptamers. By this method, the researchers were able to accurately determine the dissociation constant (Kd) between the two, which was determined to be 40 nM. The 2D structure of the figures is based on the prediction results of the RNA fold website by ribodraw tool to draw. We used the minimum free energy (MFE) structure. L-SUP-A-004 aptamer binding to Substance P.<br></font>
<font><p>5'-GGCGCAGGUGGGUAAAGGGGUGUGAUCGAGGGUCGAGAGGCGCC-3'</p></font>
<img src="/images/2D/SubstanceP_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Substance P is a neuropeptide consisting of 11-amino acids. It preferentially activates neurokinin-1 receptors, exterting excitatory effects on central and peripheral neurons and involved in pain transmission. It has a role as a neurotransmitter, a vasodilator agent and a neurokinin-1 receptor agonist. It is a conjugate base of a substance P(3+).-----From ChEBI.</font>
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
        <td name="td0">Substance P</td>
        <td name="td1">C<sub>63</sub>H<sub>98</sub>N<sub>18</sub>O<sub>13</sub>S</td>
        <td name="td2">1347.6 g/mol</td>
        <td name="td3">33507-63-0</td>
        <td name="td4">≥ 20 mg/mL (14.84 mM) (at 20 °C, water)</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/36511" target="_blank" style="color:#520049"><b>36511</b></a></td>
        <td name="td6">NA</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/SubstanceP_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We used the PubChem database to screen compounds that were more similar to Substance P,  and selected the most similar compounds for display. For those without CAS numbers, we will supplement them with Pubchem CID.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
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
        <td name="td1">Bhsar-SP</td>
        <td name="td2">110880-55-2</td>
        <td name="td3">163829</td>
        <td name="td4"><img src="/images/Similar_compound/SubstanceP_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">Fmrfamide</td>
        <td name="td2">64190-70-1</td>
        <td name="td3">10100083</td>
        <td name="td4"><img src="/images/Similar_compound/SubstanceP_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">Substance P, pro(9)-</td>
        <td name="td2">104486-69-3</td>
        <td name="td3">163732</td>
        <td name="td4"><img src="/images/Similar_compound/SubstanceP_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">Septide</td>
        <td name="td2">79775-19-2</td>
        <td name="td3">119137</td>
        <td name="td4"><img src="/images/Similar_compound/SubstanceP_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">Substance P (5-11)</td>
        <td name="td2">51165-09-4</td>
        <td name="td3">162632</td>
        <td name="td4"><img src="/images/Similar_compound/SubstanceP_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
      <tr>
        <td name="td1">Sub-stance p</td>
        <td name="td2">NA</td>
        <td name="td3">3447505</td>
        <td name="td4"><img src="/images/Similar_compound/SubstanceP_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Development of an automated in vitro selection protocol to obtain RNA-based aptamers: identification of a biostable substance P antagonist.</strong></font><br/>
Eulberg D, Buchner K, Maasch C, Klussmann S<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/15745995/" target="_blank" style="color:#520049">Nucleic acids research. 2005 Mar 3;33(4):e45. (2005)</a>
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