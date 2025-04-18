---
layout: post
title:  "HIRRV aptamer"
date:   2024-05-06 00:00:00
author: Jiali Wang, Bo Fu
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


<font ><p class="header_box" id="description">Description</p></font>
<font >In 2012, Hwang SD, Midorikawa N, Punnarak P, et al. used selexed RNA aptamers (H1, H2, H3, and H4) targeting Hirome rhabdovirus (HIRRV) through an in vitro process called Systematic Evolution of Ligands by Exponential Enrichment (SELEX). These RNA aptamers are able to specifically bind to HIRRV, and when used to treat Hirome natural embryo (HINAE) cells in contact with the virus, the appearance of cytopathic effect (CPE) is reduced compared to the control group that only treated the virus. This indicates that these RNA aptamers can inhibit the growth of HIRRV. In addition, by transforming RNA aptamer genes into Rhodovulum sulfidophilum and secreting these aptamers into the culture medium, the recombinant R Sulfidophilum may be a powerful tool for preventing HIRRV infection in the aquaculture industry<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2012, Hwang SD, Midorikawa N, Punnarak P, et al. used an ssDNA library containing approximately 5 × 10<sup>16</sup> different sequences, and after nine rounds of SELEX, they sequenced 45 RNA aptamers and identified four RNA aptamers (H1, H2, H3, and H4) that could specifically bind to HIRRV<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figures are based on the article by ribodraw tool to draw. H1 and H2 aptamers bind to Hirame rhabdovirus (HIRRV)<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>H1 aptamer: 5'-GGGCCAGGCAGCGAGGGUGUAUAGGUAUUGAAUCAAUUGUUUUAGCGUUGUCUUACCGACCACACGCGUCCGAGA-3'<br>H2 aptamer: 5'-GGGCCAGGCAGCGAGGGAACGCGAGCUUAGAUUUCGGAGAACAGUUUGUAAUUGUUCCGACCACACGCGUCCGAGA-3'</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/H1_aptamer_2D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/H1_aptamer_2D2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
 <br>
<br>

<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>   

<p class="blowheader_box">SELEX ligand</p>
<p>(Biology) any of the viruses belonging to the Rhabdoviradae family, which are composed of rod-shaped particles that can infect living organisms, and which include the viruses that cause rabies.-----From Wiki</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">GenBase gene</th>
        <th onclick="sortTable(2)">GenBase protein</th>
        <th onclick="sortTable(3)">NCBI ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">Hirame rhabdovirus (HIRRV)</td>
        <td name="td1"><a href="https://ngdc.cncb.ac.cn/genbase/search/gb/NC_005093.1" target="_blank" style="color:#520049"><b>NC_005093.1</b></a></td>
        <td name="td2"><a href="https://ngdc.cncb.ac.cn/genbase/search/index?accession=Hirame%20rhabdovirus&dataType=Protein&dataSource=" target="_blank" style="color:#520049"><b>Hirame rhabdovirus</b></a></td>
        <td name="td3"><a href="https://www.ncbi.nlm.nih.gov/datasets/taxonomy/1980915/" target="_blank" style="color:#520049"><b>1980915</b></a></td>
      </tr>
	  </tbody>
  </table>
<p>Some isolated sequences bind to the affinity of the protein.</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Sequence</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
      <td name="td0">H1</td>
      <td name="td1">5'-GGGCCAGGCAGCGAGGGUGUAUAGGUAUUGAAUCAAUUGUUUUAGCGUUGUCUUACCGACCACACGCGUCCGAGA-3'</td>
      <td name="td2">Hirame rhabdovirus (HIRRV)</td>
      <td name="td3">NA</td>
    </tr>
     <tr>
      <td name="td0">H2</td>
      <td name="td1">5'-GGGCCAGGCAGCGAGGGAACGCGAGCUUAGAUUUCGGAGAACAGUUUGUAAUUGUUCCGACCACACGCGUCCGAGA-3'</td>
      <td name="td2">Hirame rhabdovirus (HIRRV)</td>
      <td name="td3">NA</td>
    </tr>
     <tr>
      <td name="td0">H3</td>
      <td name="td1">5'-GGGCCAGGCAGCGAGGUCCUAUACAGUGUGACCGGUUGAAAGUGGGUUCGUUGCCGACCACACGCGUCCGAGA-3'</td>
      <td name="td2">Hirame rhabdovirus (HIRRV)</td>
      <td name="td3">NA</td>
    </tr>
     <tr>
      <td name="td0">H4</td>
      <td name="td1">5'-GGGCCAGGCAGCGAGGGGUUAAGCCGGAUUGUAGACUGUAACAGGUAGAGCUGGCCCGACCACACGCGUCCGAGA-3'</td>
      <td name="td2">Hirame rhabdovirus (HIRRV)</td>
      <td name="td3">NA</td>
    </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/H1_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Inhibition of Hirame rhabdovirus growth by RNA aptamers.</strong></font><br />
Hwang, S. D., Midorikawa, N., Punnarak, P., Kikuchi, Y., Kondo, H., Hirono, I., & Aoki, T.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049" >Journal of fish diseases, 35(12), 927–934. (2012)</a>
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
