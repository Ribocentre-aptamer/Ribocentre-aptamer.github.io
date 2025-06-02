---
layout: post
title:  "YT1 aptamer"
date:   2024-05-10 00:00:00
author: Ke Chen, Yangyi Ren
categories: Aptamer
---
<!--p style="font-size: 24px"><strong>Keywords: </strong> <br/></p>
<font ><strong>small molecule, Synthetic, dyes, PubChem CID 25863</strong></font >
<br /-->

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
<font >In 1995, Yu Tian and colleagues used the SELEX method to isolate the aptamer with high affinity for the HTLV-1 Tax protein. It prevents the Tax protein from forming complexes with cellular transcription factors, thereby exerting its inhibitory effect<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 1995, Yu Tian et al. started from a pool of greater than 10<sup>13</sup> different RNAs with a core of 120 random sequence positions. After five cycles of selection and amplification, a single nucleic acid species remained. This aptamer was found to bind Tax with high affinity and specificity<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>YT1 was the aptamer sequence mainly studied in the article, which had a high affinity with HTLV-1 Tax protein. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGAAUUCCGACCAGAAGCUUGGACUUAUUCUCGAGCCUGCAUGUGCUAGUCGACGUUGUUUCUGCAUCUUGAAAGAUGGGGCUGUGGGUGUGGUUACUUCUACGCGGUAUGCACUGUACGCCAUCCAUAUGUGCGUCUACAUGGAUCCUCA-3'</p></font>
<img src="/images/2D/YT1_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
<br>
<br>




<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Tax is a transcriptional activator. Its ability to modulate the expression and function of many cellular genes has been reasoned to be a major contributory mechanism explaining HTLV-I-mediated transformation of cells. In activating cellular gene expression, Tax impinges upon several cellular signal-transduction pathways, including those for CREB/ATF and NF-kappaB.-----From Pfam</p>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Uniprot ID</th>
        <th onclick="sortTable(2)">Pfam</th>
        <th onclick="sortTable(3)">MW</th>
        <th onclick="sortTable(4)">Amino acids sequences</th>
        <th onclick="sortTable(5)">PDB</th>
        <th onclick="sortTable(6)">Gene ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">HTLV-1 Tax protein</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P14079/entry" target="_blank" style="color:#520049"><b>P14079</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF02959/" target="_blank" style="color:#520049"><b>PF02959</b></a></td>
        <td name="td3">1.04 kDa</td>
        <td name="td4">KHFRETEV</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7QRS" target="_blank" style="color:#520049"><b>7QRS</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/1491938" target="_blank" style="color:#520049"><b>1491938</b></a></td>
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
        <td name="td0">YT1</td>
        <td name="td1">GGGAGAAUUCCGACCAGAAGCUUGGACUUAUUCUCGAGCCUGCAUGUGCUAGUCGACGUUGUUUCUGCAUCUUGAAAGAUGGGGCUGUGGGUGUGGUUACUUCUACGCGGUAUGCACUGUACGCCAUCCAUAUGUGCGUCUACAUGGAUCCUCA</td>
        <td name="td2">HTLV-1 Tax protein</td>
        <td name="td3">70 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/YT1_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:300px;border:solid 1px #efefef!important;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>

<p class="blowheader_box">Similar compound</p>                    
<font><p>Due to the lack of complete or large fragments of the protein structure, no similar compounds have been listed in this part.</p></font>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Dissecting protein:protein interactions between transcription factors with an RNA aptamer.</strong></font><br />
Tian, Y., Adya, N., Wagner, S., Giam, C. Z., Green, M. R., & Ellington, A. D.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/7489503/" target="_blank" style="color:#520049" >RNA (New York, N.Y.), 1(3), 317–326.  (1995)</a>
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
