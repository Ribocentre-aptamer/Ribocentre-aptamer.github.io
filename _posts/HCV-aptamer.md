---
layout: post
title:  "HCV aptamer"
date:   2024-05-02 00:00:00
author: Jiali Wang, Fu Bo
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
<font >In 2003,  Vo NV, Oh JW, Lai MM used the SELEX method to select the aptamer with high compatibility for the Hepatitis C virus NS5B protein. They found that the aptamers can act as templates for HCV polymerase, but others can interfere with the activity of the viral enzyme. These findings suggest that these RNA aptamers may be useful for further characterization of the binding properties of NS5B, and with further modifications, may have potential therapeutic value<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2003,  Vo NV, Oh JW, Lai MM  utilized an RNA library estimated to contain 10<sup>12</sup> (one hundred trillion) distinct RNA species. Following 20 rounds of screening, the highest affinity RNA enrichment was achieved between rounds 18 and 20. Through the SELEX process, a total of 37 selected ligands were obtained, categorized into eight groups (A-H) based on sequence homology<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figures are based on the article by ribodraw tool to draw. R20-43 aptamer and R20-15 aptamer bind to hepatitis C virus NS5B protein (HCV NS5B protein)<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>R20-43 aptamer: 5'-GGGAGCUCAGAAUAAACGCUCAAUGUAGAGACUUUUCGAAAAGCGUGUUCCCAAUGAGUCUAUGCAUGCAUGAGGCCCGGAUCCGGC-3'<br>R20-15 aptamer: 5'-GGGAGCUCAGAAUAAACGCUCAAUGUAGGCUAGUACCGACCUGCGUGCCUCGCUCCUUUUCAUGCAUGCAUGAGGCCCGGAUCCGGC-3'</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/HCV_aptamer_2D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/2D/HCV_aptamer_2D2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
 <br>
 <br>

<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>This family includes viral RNA dependent RNA polymerase enzymes from hepatitis C virus and various plant viruses.-----From Pfam</p>
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
        <td name="td0">Hepatitis C virus NS5B protein (HCV NS5B protein)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P26663/entry#function" target="_blank" style="color:#520049"><b>P26663</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00998/" target="_blank" style="color:#520049"><b>PF00998</b></a></td>
        <td name="td3">58.978 kDa</td>
        <td name="td4">SMSYTWTGALITPCAAEESKLPINALSNSLLRHHNMVYATTSRSAGLRQKKVTFDRLQVLDDHYRDVLKEMKAKASTVKAKLLSVEEACKLTPPHSAKSKFGYGAKDVRNLSSKAVNHIHSVWKDLLEDTVTPIDTTIMAKNEVFCVQPEKGGRKPARLIVFPDLGVRVCEKMALYDVVSTLPQVVMGSSYGFQYSPGQRVEFLVNTWKSKKNPMGFSYDTRCFDSTVTENDIRVEESIYQCCDLAPEARQAIKSLTERLYIGGPLTNSKGQNCGYRRCRASGVLTTSCGNTLTCYLKASAACRAAKLQDCTMLVNGDDLVVICESAGTQEDAASLRVFTEAMTRYSAPPGDPPQPEYDLELITSCSSNVSVAHDASGKRVYYLTRDPTTPLARAAWETARHTPVNSWLGNIIMYAPTLWARMILMTHFFSILLAQEQLEKALDCQIYGACYSIEPLDLPQIIERLHGLSAFSLHSYSPGEINRVASCLRKLGVPPLRVWRHRARSVRARLLSQGGRAATCGKYLFNWAVK</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1CSJ" target="_blank" style="color:#520049"><b>1CSJ</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/nuccore/M58335" target="_blank" style="color:#520049"><b>M58335</b></a></td>
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
      <td name="td0">R20-43</td>
      <td name="td1">5'-GGGAGCUCAGAAUAAACGCUCAAUGUAGAGACUUUUCGAAAAGCGUGUUCCCAAUGAGUCUAUGCAUGCAUGAGGCCCGGAUCCGGC-3'</td>
      <td name="td2">HCV NS5B protein</td>
      <td name="td3">(1.4 ± 0.3)* 10<sup>4</sup> (1/s) （dissociation rate constant）</td>
    </tr>
     <tr>
      <td name="td0">R20-15</td>
      <td name="td1">5'-GGGAGCUCAGAAUAAACGCUCAAUGUAGGCUAGUACCGACCUGCGUGCCUCGCUCCUUUUCAUGCAUGCAUGAGGCCCGGAUCCGGC-3'</td>
      <td name="td2">HCV NS6B protein</td>
      <td name="td3">(1.0 ± 0.1)* 10<sup>4</sup> (1/s)</td>
    </tr>
     <tr>
      <td name="td0">R1-1</td>
      <td name="td1">5'-GGGAGCUCAGAAUAAACGCUCAACUCCUAACCUCUCCGCAUGNGCUGUUACCUACACAGCUCAGCAUGCAUGAGGCCCGGAUCCGGC-3'</td>
      <td name="td2">HCV NS7B protein</td>
      <td name="td3">(100 ± 6)* 10<sup>4</sup> (1/s)</td>
    </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/HCV_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<p class="blowheader_box">Similar compound</p>                    
<font><p>We used the Dail server website to compare the structural similarities of ligand proteins, and chose the top 10 in terms of similarity for presentation. The Dali server is a network service for comparing protein structures in 3D. Dali compares them against those in the Protein Data Bank (PDB). Z-score is a standard score that is converted from an original score. The list of neighbours is sorted by Z-score. Similarities with a Z-score lower than 2 are spurious. RMSD (Root Mean Square Deviation) value is used to measure the degree to which atoms deviate from the alignment position.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(0)">PDB</th>
        <th onclick="sortTable(1)">Z-socre</th>
        <th onclick="sortTable(2)">RMSD</th>
        <th onclick="sortTable(3)">Description</th>
      </tr>
      </thead>
    <tbody>
      <tr>
      <td name="td0">3GNW-B</td>
      <td name="td1">51.7</td>
      <td name="td2">1.1</td>
      <td name="td3">RNA-directed RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">5Y6R-A</td>
      <td name="td1">30.3</td>
      <td name="td2">3.3</td>
      <td name="td3">Genome polyprotein</td>
    </tr>
     <tr>
      <td name="td0">4K6M-A</td>
      <td name="td1">27.2</td>
      <td name="td2">3.1</td>
      <td name="td3">Polyprotein</td>
    </tr>
     <tr>
      <td name="td0">1SH0-B</td>
      <td name="td1">24.5</td>
      <td name="td2">4.0</td>
      <td name="td3">RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">8WU3-B</td>
      <td name="td1">23.5</td>
      <td name="td2">3.3</td>
      <td name="td3">RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">2IJD-1</td>
      <td name="td1">23.0</td>
      <td name="td2">3.5</td>
      <td name="td3">Picornain 3c, RNA-directed RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">5I61-A</td>
      <td name="td1">20.5</td>
      <td name="td2">3.4</td>
      <td name="td3">Potential RNA-dependent RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">6OGZ-A</td>
      <td name="td1">18.4</td>
      <td name="td2">4.0</td>
      <td name="td3">Rotavirus RNA-dependent RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">8GWE-A</td>
      <td name="td1">17.7</td>
      <td name="td2">3.8</td>
      <td name="td3">RNA-directed RNA polymerase</td>
    </tr>
     <tr>
      <td name="td0">8H69-B</td>
      <td name="td1">17.6</td>
      <td name="td2">3.9</td>
      <td name="td3">Cryo-EM structure of influenza RNA polymerase</td>
    </tr>
    </tbody>
  </table>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Identification of RNA ligands that bind hepatitis C virus polymerase selectively and inhibit its RNA synthesis from the natural viral RNA templates.</strong></font><br />
Vo, N. V., Oh, J. W., & Lai, M. M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049" >Virology, 307(2), 301–316. (2003)</a>
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
    <script>
    window.addEventListener('DOMContentLoaded', function() {
      var td = document.getElementsByName('td4')[0];
      var maxLength = 100; // 设置最大长度
      var originalText = td.innerHTML;
      var displayedText = originalText.substring(0, maxLength);
      
      if (originalText.length > maxLength) {
        displayedText += '<span class="ellipsis-btn">......</span>'; // 在超出长度时添加省略号按钮
        displayedText += '<span class="hidden-content">' + originalText.substring(maxLength) + '</span>'; // 隐藏的内容
        td.innerHTML = displayedText;
        
        // 获取省略号按钮元素和隐藏的内容元素
        var ellipsisBtn = td.querySelector('.ellipsis-btn');
        var hiddenContent = td.querySelector('.hidden-content');
        
        // 添加点击事件监听器
        ellipsisBtn.addEventListener('click', function() {
          if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'inline'; // 展开内容
            ellipsisBtn.innerHTML = '...'; // 更新按钮文字为“...”
            td.appendChild(ellipsisBtn); // 将按钮移到内容后面
          } else {
            hiddenContent.style.display = 'none'; // 收起内容
            ellipsisBtn.innerHTML = '......'; // 更新按钮文字为省略号
            td.appendChild(ellipsisBtn); // 将按钮移到内容后面
          }
        });
      }
    });
  </script>
    </html>
