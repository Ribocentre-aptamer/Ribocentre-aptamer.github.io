---
layout: post
title:  "D8 aptamer"
date:   2024-05-27 00:00:00
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
<font>In 2001,D R Engelke et al. obtained RNA aptamers for binding Sephadex by an in vitro screen, which were divided into two groups based on consensus sequences, and both showed strong binding to Sephadex G-100. The high-affinity D8 aptamer specifically bound dextran B512, the base material of Sephadex, but not isomaltose and its derivatives, suggesting that its optimal binding site contains more than four glucose residues linked by α-1,6 glycosidic bonds.The D8 aptamer was highly specific for the Sephadex substrate, and did not significantly bind other substrates. Using Sephadex G-100, this aptamer can be purified from complex cellular RNA mixtures up to 60,000-fold enrichment. These RNA aptamers can be used as affinity tags for rapid purification from complex RNA mixtures<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>D. R. Engelke et al. conducted in vitro screening of RNA aptamers for Sephadex. The D8 aptamer was obtained through 11 rounds of systematic evolution of ligands by exponential enrichment (SELEX) from an RNA library comprising approximately 7 x 10^16 distinct sequences. In the final screening phase, a total of 15 RNA aptamers were assessed for their ability to effectively bind to Sephadex, with D8 exhibiting the highest affinity. The aptamers were synthesized via PCR amplification and subsequent in vitro transcription, and their binding affinity was determined using a radiolabeled binding assay. The binding affinity of the D8 aptamer for Sephadex G-100 was measured at 9 nM<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The sequence and secondary prediction structure of the aptamer will be shown here, here we used ribodraw to complete the figure. The 2D structure of the figures is based on the prediction results of the RNA fold website by ribodraw tool to draw. We used the minimum free energy (MFE) structure. D8 aptamer binding to Sephadex G-100.<br></font>
<font><p>5'-GGGAGUCGACCGACCAGAAGUCCGAGUAAUUUACGUUUUGAUACGGUUGCGGAACUUGCUAUGUGCGUCUACAUCUAGACUCAU-3'</p></font>
<img src="/images/2D/G-100_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Streptavidin is an organochlorine compound.A 60-kDa extracellular protein of Streptomyces avidinii with four high-affinity biotin binding sites. Unlike AVIDIN, streptavidin has a near neutral isoelectric point and is free of carbohydrate side chains.-----From MeSH</font>
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
        <td name="td0">Sephadex G-100</td>
        <td name="td1">C<sub>226</sub>H<sub>274</sub>N<sub>28</sub>O<sub>14</sub>S<sub>6</sub></td>
        <td name="td2">3799 g/mol</td>
        <td name="td3">9050-94-6</td>
        <td name="td4">Sephadex G-100 swells in water and aqueous solutions, but it is not soluble in the typical sense.</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/168009902" target="_blank" style="color:#520049"><b>168009902</b></a></td>
        <td name="td6">NA</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/G-100_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
        <td name="td1">GAGHDUBDWHWETJ-BAVMLWJSSA-N</td>
        <td name="td2">NA</td>
        <td name="td3">21058895</td>
        <td name="td4"><img src="/images/Similar_compound/G-100_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">DB-088580</td>
        <td name="td2">NA</td>
        <td name="td3">73739721</td>
        <td name="td4"><img src="/images/Similar_compound/G-100_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">QJTYIRZUJHSJFB-KIFXMQJISA-N</td>
        <td name="td2">NA</td>
        <td name="td3">160436749</td>
        <td name="td4"><img src="/images/Similar_compound/G-100_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">SFNUDLHCPKIVJG-NUPKRKSMSA-N</td>
        <td name="td2">NA</td>
        <td name="td3">160820953</td>
        <td name="td4"><img src="/images/Similar_compound/G-100_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td1">GAGHDUBDWHWETJ-YZUGSRDLSA-N</td>
        <td name="td2">NA</td>
        <td name="td3">160436751</td>
        <td name="td4"><img src="/images/Similar_compound/G-100_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Sephadex-binding RNA ligands: rapid affinity purification of RNA from complex RNA mixtures.</strong></font><br/>
Srisawat C, Goldstein IJ, Engelke DR<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/11139634/" target="_blank" style="color:#520049">Nucleic acids research. 2001 Jan 15;29(2):E4. (2001)</a>
<br/>

<a id="ref2"></a><font><strong>[2] Construction of RNA-Quantum Dot Chimera for Nanoscale Resistive Biomemory Application.</strong></font><br/>
Lee T, Yagati AK, Pi F, Sharma A, Choi JW, Guo P<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/26135474/" target="_blank" style="color:#520049">ACS nano. 2015 Jul 28;9(7):6675-82. (2015)</a>
<br/>

<a id="ref3"></a><font><strong>[3] Single Functionalized pRNA/Gold Nanoparticle for Ultrasensitive MicroRNA Detection Using Electrochemical Surface-Enhanced Raman Spectroscopy.</strong></font><br/>
Lee T, Mohammadniaei M, Zhang H, Yoon J, Choi HK, Guo S, Guo P, Choi JW<br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/32042566/" target="_blank" style="color:#520049">Advanced science (Weinheim, Baden-Württemberg, Germany). 2019 Dec 18;7(3):1902477. (2019)</a>
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