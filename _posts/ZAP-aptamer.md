---
layout: post
title:  "ZAP-aptamer"
date:   2024-05-29 00:00:00
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
<font>In 2010, Huang et al. used the SELEX method to isolate ZAP-binding RNAaptamers. After 21 rounds of selection, ZAP-binding aptamers were isolated. Sequence analysis revealed that they are G-rich RNAs with predicted stem-loop structures containing conserved “GGGUGG” and “GAGGG” motifs in the loop region<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2010, Huang et al. used the SELEX method to isolate the aptamer with 40 nucleotides of random sequence, after 21 rounds of selection. Sequence analysis revealed that they are G-rich RNAs with predicted stem-loop structures containing conserved “GGGUGG” and “GAGGG” motifs in the loop region<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>21E was the aptamer sequence mainly studied in the article, which had a high affinity with ZAP. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAACAGUCCGAGCCUGCGUGCGAGGAGGUGGAGAGGGUGGGUGUGCGUGGCGUGGGGUGAAUUCGUCAUA-3'</p></font>
<img src="/images/2D/ZAP_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Zinc-finger antiviral protein (ZAP) is a host factor that specifically inhibits the replication of certain viruses, such as HIV-1, by targeting viral mRNA for degradation. N-terminal domain of ZAP is the major functional domain which contains four zinc-finger motifs. This entry represents the third zinc finger type CCCH.-----from Pfam</p>
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
        <td name="td0">Zinc-finger antiviral protein (ZAP)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/Q8K3Y6/entry" target="_blank" style="color:#520049"><b>Q8K3Y6</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/InterPro/IPR040954/" target="_blank" style="color:#520049"><b>IPR040954</b></a></td>
        <td name="td3">26.21 kDa</td>
        <td name="td4">GPLGMADPGVCCFITKILCAHGGRMTLEELLGEIRLPEAQLYELLETAGPDRFVLLETGGQAGITRSVVATTRARVCRRKYCQRPCDSLHLCKLNLLGRCHYAQSQRNLCKYSHDVLSEQNFQILKNHELSGLNQEELACLLVQSDPFFLPEICKSYKGEGRKQTCGQPQPCERLHICEHFTRGNCSYLNCLRSHNLMDRKVLTIMREHGLSPDVVQNIQDICNNKHAR</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3U9G" target="_blank" style="color:#520049"><b>3U9G</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/protein/ADD71159.1" target="_blank" style="color:#520049"><b>ADD71159.1</b></a></td>
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
        <td name="td0">21E</td>
        <td name="td1">5'-UGCGUGCGAGGAGGUGGAGAGGGUGGGUGUGCGUGGCGUG-3'</td>
        <td name="td2">Zinc-finger antiviral protein (ZAP)</td>
        <td name="td3">NA</td>
      </tr>
      <tr>
        <td name="td0">21K</td>
        <td name="td1">5'-GGGAACAGUCCGAGCCAAGCGGUAGCGUCAGGGGGUGGAGGGAGGAGGCCGCGUGGUGUGGGUGAAUUCGUCAUA-3'</td>
        <td name="td2">Zinc-finger antiviral protein (ZAP)</td>
        <td name="td3">NA</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/ZAP_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<p class="blowheader_box">Similar compound</p>                    
<font><p>We used the Dail server website to compare the structural similarities of ligand proteins, and chose the top 10 in terms of similarity for presentation. The Dali server is a network service for comparing protein structures in 3D. Dali compares them against those in the Protein Data Bank (PDB). Z-score is a standard score that is converted from an original score. The list of neighbours is sorted by Z-score. Similarities with a Z-score lower than 2 are spurious. RMSD(Root Mean Square Deviation) value is used to measure the degree to which atoms deviate from the alignment position.</p></font>
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
      <td name="td0">3U9G-A</td>
      <td name="td1">37.2</td>
      <td name="td2">0.0</td>
      <td name="td3">Zinc finger CCCH-type antiviral Protein 1</td>
    </tr>
            
     <tr>
      <td name="td0">2ZKZ-C</td>
      <td name="td1">5.5</td>
      <td name="td2">2.2</td>
      <td name="td3">Transcriptional repressor pagr</td>
    </tr>
            
     <tr>
      <td name="td0">2RDP-A</td>
      <td name="td1">5.5</td>
      <td name="td2">2.7</td>
      <td name="td3">Putative transcriptional regulator marr</td>
    </tr>
            
     <tr>
      <td name="td0">7EL3-A</td>
      <td name="td1">5.4</td>
      <td name="td2">2.8</td>
      <td name="td3">Homoprotocatechuate degradation operon regulator</td>
    </tr>
            
     <tr>
      <td name="td0">7WZE-A</td>
      <td name="td1">5.3</td>
      <td name="td2">3.1</td>
      <td name="td3">Uncharacterized HTH-type transcriptional regulato</td>
    </tr>
            
     <tr>
      <td name="td0">3S2W-A</td>
      <td name="td1">5.2</td>
      <td name="td2">2.9</td>
      <td name="td3">Transcriptional regulator, marr family</td>
    </tr>
            
     <tr>
      <td name="td0">2WTE-A</td>
      <td name="td1">5.2</td>
      <td name="td2">2.8</td>
      <td name="td3">CSA3</td>
    </tr>
            
     <tr>
      <td name="td0">3BPX-A</td>
      <td name="td1">5.0</td>
      <td name="td2">3.0</td>
      <td name="td3">Transcriptional regulator, marr family</td>
    </tr>
            
     <tr>
      <td name="td0">3VB2-B</td>
      <td name="td1">5.0</td>
      <td name="td2">2.5</td>
      <td name="td3">Multiple antibiotic resistance protein marr</td>
    </tr>
            
     <tr>
      <td name="td0">2NYX-B</td>
      <td name="td1">4.9</td>
      <td name="td2">2.9</td>
      <td name="td3">Probable transcriptional regulatory protein, RV14</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Analyses of SELEX-derived ZAP-binding RNA aptamers suggest that the binding specificity is determined by both structure and sequence of the RNA.</strong></font><br />
Huang, Z., Wang, X., & Gao, G.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/21203916/" target="_blank" style="color:#520049">Protein Cell, 1(8), 752-9. (2010)</a>
<br/>

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
