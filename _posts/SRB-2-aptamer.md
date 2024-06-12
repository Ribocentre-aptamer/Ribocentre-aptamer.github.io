---
layout: post
title:  "SRB-2 aptamer"
date:   2024-05-13 00:00:00
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
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049">1998</a></h3>
  </div>
  <div class="body">
    <p>Two aptamers that recognize the fluorophore sulforhodamine B were isolated by the in vitro selection process.<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/19303859/" target="_blank" style="color:#520049">2009</a></h3>
  </div>
  <div class="body">
    <p>How SRB-2 RNA aptamer-fluorophore complexes can be simultaneously structurally and photophysically characterized by FCS was demonstrates.<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/24133044/" target="_blank" style="color:#520049">2013</a></h3>
  </div>
  <div class="body">
    <p>An alternative approach based on contact quenching of fluorophores and fluorophore-binding aptamers (inculde SRB-2) to image RNA with small molecules in living cells was presented.<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/26175046/" target="_blank" style="color:#520049">2015</a></h3>
  </div>
  <div class="body">
    <p>Combining contact-quenched fluorogenic probes with orthogonal DNB (the quencher-binding RNA aptamer) and SRB-2 aptamers allowed dual-colour imaging of two different fluorescence-enhancing RNA tags in living cells.<sup>[<a href="#ref4" style="color:#520049">4</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/29931157/" target="_blank" style="color:#520049">2018</a></h3>
  </div>
  <div class="body">
    <p>A novel, bright, orange fluorescent turn-on probe based on SBR-2 with low background fluorescence, enabling live-cell RNA imaging was rationally designed.<sup>[<a href="#ref5" style="color:#520049">5</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/31636432/" target="_blank" style="color:#520049">2020</a></h3>
  </div>
  <div class="body">
    <p>The concept of a cell-permeable fluorogenic dimer of self-quenched sulforhodamine B dyes and the corresponding dimerized aptamer that can enhance performance of the current RNA imaging method was propose.<sup>[<a href="#ref6" style="color:#520049">6</a>]</sup></p>
  </div>
 </div>
</div>


<font><p class="header_box" id="description">Description</p></font>
<font>In 1998, Leslie A Holeman et al. employed in vitro selection techniques to isolate aptamers with high-affinity binding sites for sulforhodamine B. The aptamer binds the fluorophore with high affinity, recognizing both the planar aromatic ring system and a negatively charged sulfonate, a rare example of anion recognition by RNA<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>SELEX was performed with a library containing ~5×10<sup>14</sup> random RNA molecules and selected RNAs for their ability to bind Sulforhodamine agarose. After SELEX, researchers selected a number of sequences, including SRB-1 and SRB-2, to characterize their affinity for the dye and its spectral properties<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGAACACUAUCCGACUGGCACCUGUGCUCUAUAGCAGAAUGCUAACAUUAGAUGAUGGAGGGGCGCAAGGUUAACCGCCUCAGUACAUCGGUGCCUUGGUCAUUAGGAUCCCG-3'</p></font>
<img src="/images/2D/Sulforhodamine-B_aptamer_2D.svg" alt="drawing" style="width:800px;height:500px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Sulforhodamine B or Kiton Red 620 is a fluorescent dye with uses spanning from laser-induced fluorescence (LIF) to the quantification of cellular proteins of cultured cells. This red solid dye is very water-soluble.-----From Wikipedia</font>
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
        <td name="td0">Sulforhodamine B</td>
        <td name="td1">C<sub>27</sub>H<sub>30</sub>N<sub>2</sub>O<sub>7</sub>S<sub>2</sub></td>
        <td name="td2">558.7 g/mol</td>
        <td name="td3">2609-88-3</td>
        <td name="td4">50 mg/mL in H2O, 62.5 mg/mL in DMSO</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/65191" target="_blank" style="color:#520049"><b>65191</b></a></td>
        <td name="td6"><a href="https://www.medchemexpress.cn/Sulforhodamine_B_sodium_salt.html" target="_blank" style="color:#520049"><b>HY-D0974</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Sulforhodamine-B_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
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
        <td name="td1">5'-GGAACACUAUCCGACUGGCACCUGUGCUCUAUAGCAGAAUGCUAACAUUAGAUGAUGGAGGGGCGCAAGGUUAACCGCCUCAGUACAUCGGUGCCUUGGUCAUUAGGAUCCCG-3'</td>
        <td name="td2">Sulforhodamine B</td>
        <td name="td3">310 ± 60 nM</td>
      </tr>
	  </tbody>
  </table>
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID.</p></font>
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
        <td name="td0">ZINC4235524</td>
        <td name="td1">Sulforhodamine B</td>
        <td name="td2">2609-88-3</td>
        <td name="td3">65191</td>
        <td name="td4"><img src="/images/Similar_compound/Sulforhodamine-B_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC95713114</td>
        <td name="td1">Xanthylium</td>
        <td name="td2">62796-29-6</td>
        <td name="td3">65224</td>
        <td name="td4"><img src="/images/Similar_compound/Sulforhodamine-B_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC3874033</td>
        <td name="td1">[4-[[4-(diethylamino)phenyl]-(2,4-disulfophenyl)methylidene]cyclohexa-2,5-dien-1-ylidene]-diethylazanium</td>
        <td name="td2">129-17-9</td>
        <td name="td3">8508</td>
        <td name="td4"><img src="/images/Similar_compound/Sulforhodamine-B_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC4365621</td>
        <td name="td1">Carmine Blue V/Solar Pure Blue VX</td>
        <td name="td2">20262-76-4</td>
        <td name="td3">77074</td>
        <td name="td4"><img src="/images/Similar_compound/Sulforhodamine-B_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">ZINC80902125</td>
        <td name="td1">(4-(3,6-Bis(diethylamino)-9H-xanthen-9-yl)benzene-1,3-disulphonic acid)</td>
        <td name="td2">85681-99-8</td>
        <td name="td3">3020898</td>
        <td name="td4"><img src="/images/Similar_compound/Sulforhodamine-B_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Isolation and characterization of fluorophore-binding RNA aptamers.</strong></font><br />
Holeman, L. A., Robinson, S. L., Szostak, J. W., & Wilson, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049">Folding & design, 3(6), 423–431. (1998)</a>
<br/>
            
<a id="ref2"></a><font><strong>[2] Characterization of a fluorophore binding RNA aptamer by fluorescence correlation spectroscopy and small angle X-ray scattering.</strong></font><br />
Werner, A., Konarev, P. V., Svergun, D. I., & Hahn, U.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/19303859/" target="_blank" style="color:#520049">Analytical biochemistry, 389(1), 52–62. (2009)</a>
<br/>
            
<a id="ref3"></a><font><strong>[3] Contact-Mediated Quenching for RNA Imaging in Bacteria with  a Fluorophore-Binding Aptamer.</strong></font><br />
Sunbul, M., & Jäschke, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/24133044/" target="_blank" style="color:#520049">Angewandte Chemie, 52(50), 13401–13404. (2013)</a>
<br/>
            
<a id="ref4"></a><font><strong>[4] Dual-colour imaging of RNAs using quencher- and fluorophore-binding aptamers.</strong></font><br />
Arora, A., Sunbul, M., & Jäschke, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/26175046/" target="_blank" style="color:#520049">Nucleic acids research, 43(21), e144. (2015)</a>
<br/>
            
<a id="ref5"></a><font><strong>[5] SRB-2: a promiscuous rainbow aptamer for live-cell RNA imaging.</strong></font><br />
Sunbul, M., & Jäschke, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29931157/" target="_blank" style="color:#520049">Nucleic acids research, 46(18), e110. (2018)</a>
<br/>
            
<a id="ref6"></a><font><strong>[6] A dimerization-based fluorogenic dye-aptamer module for RNA imaging in live cells.</strong></font><br />
Bouhedda, F., Fam, K. T., Collot, M., Autour, A., Marzi, S., Klymchenko, A., & Ryckelynck, M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31636432/" target="_blank" style="color:#520049">Nature chemical biology, 16(1), 69–76.  (2020)</a>
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