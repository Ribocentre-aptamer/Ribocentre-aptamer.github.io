---
layout: post
title:  "Escherichia coli-aptamer"
date:   2024-06-02 00:00:00
author: Zhijie Tan, Qiaozhen Liu
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
<font>In 2012, Lee et al. identified a RNA aptamer-based ligand which can specifically distinguish the pathogen E. coli O157:H7 from others was developed by a subtractive cell-SELEX method. The isolated RNA aptamer that distinguishes between the virulent serotype and the nonpathogenic strain specifically bound to an O157:H7-specific lipopolysaccharide which includes the O antigen<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2012, Lee et al. identified a RNA aptamer-based ligand which can specifically distinguish the pathogen E. coli O157:H7 from others was developed by a subtractive cell-SELEX method. An RNA library was first incubated with the E. coli K12 strain, and the RNAs binding to the strain were discarded. The precluded RNAs were then used for the selection of O157:H7-specific aptamers. After 6 rounds of the subtractive cell-SELEX process, the selected aptamer was found to specifically bind to the O157:H7 serotype, but not to the K12 strain<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>I-1 was the aptamer sequence mainly studied in the article, which had a high affinity with Escherichia coli O157H7. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-UGAUUCCAUCUUCCUGGACUGUCGAAAAUUCAGUAUCGGGAGGUUACGUAUUUGGUUUAU-3'</p></font>
<img src="/images/2D/Ecoli_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Escherichia coli O157:H7 is a serotype of the bacterial species Escherichia coli and is one of the Shiga-like toxin–producing types of E. coli. It is a cause of disease, typically foodborne illness, through consumption of contaminated and raw food, including raw milk and undercooked ground beef. Infection with this type of pathogenic bacteria may lead to hemorrhagic diarrhea, and to kidney failure; these have been reported to cause the deaths of children younger than five years of age, of elderly patients, and of patients whose immune systems are otherwise compromised.-----From Wiki</p>
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
        <td name="td0">Escherichia coli O157:H7</td>
        <td name="td1"><a href="https://ngdc.cncb.ac.cn/genbase/search/gb/AB011548.2" target="_blank" style="color:#520049"><b>AB011548.2</b></a></td>
        <td name="td2"><a href="https://ngdc.cncb.ac.cn/genbase/search/gb/ACT76084.1" target="_blank" style="color:#520049"><b>ACT76084.1</b></a></td>
        <td name="td3"><a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=83334" target="_blank" style="color:#520049"><b>83334</b></a></td>
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
        <td name="td0">I-1 aptamer</td>
        <td name="td1">5'-UGAUUCCAUCUUCCUGGACUGUCGAAAAUUCAGUAUCGGGAGGUUACGUAUUUGGUUUAU-3'</td>
        <td name="td2">Escherichia coli O157:H7</td>
        <td name="td3">110 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/Ecoil_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] In vitro selection of Escherichia coli O157:H7-specific RNA aptamer.</strong></font><br />
Lee, YJ., Han, SR., Maeng, JS., Cho, YJ., & Lee, SW.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/22166202/" target="_blank" style="color:#520049">Biochemical and Biophysical Research Communications,417(1):414-20. (2012)</a>
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
