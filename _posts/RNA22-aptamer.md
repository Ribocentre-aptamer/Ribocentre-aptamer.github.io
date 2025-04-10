---
layout: post
title:  "RNA22 aptamer"
date:   2024-05-22 00:00:00
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
<font>Gary Zhai and Maya Iskandar et al. reported aptamers with affinity for Wilms tumor protein in their article published in 2001<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In their work published in 2001, Gary Zhai and Maya Iskandar et al. used SELEX to isolate RNA aptamer sequences with affinity for wilms tumor protein from a nucleic acid library<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGGCCACCAACGACAUUGAUAUGGUGACCACCCCGGCGUUGAUAUAAAAUAGUGCCCAUGGAUCCGCGGGUGUCGGG-3'</p></font>
<img src="/images/2D/RNA22_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>WT1 is a type of transcription factor that plays an important role in cellular development and cell survival. Recognizes and binds to the DNA sequence 5'-GCG(T/G)GGGCG-3'. Regulates the expression of numerous target genes, including EPO. Plays an essential role for development of the urogenital system. It has a tumor suppressor as well as an oncogenic role in tumor formation. Function may be isoform-specific: isoforms lacking the KTS motif may act as transcription factors.-----From Uniprot</p>
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
        <td name="td0">WT1</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P19544/entry" target="_blank" style="color:#520049"><b>P19544</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF02165/" target="_blank" style="color:#520049"><b>PF02165</b></a></td>
        <td name="td3">49.188 kDa</td>
        <td name="td4">MGSDVRDLNALLPAVPSLGGGGGCALPVSGAAQWAPVLDFAPPGASAYGSLGGPAPPPAPPPPPPPPPHSFIKQEPSWGGAEPHEEQCLSAFTVHFSGQFTGTAGACRYGPFGPPPPSQASSGQARMFPNAPYLPSCLESQPAIRNQGYSTVTFDGTPSYGHTPSHHAAQFPNHSFKHEDPMGQQGSLGEQQYSVPPPVYGCHTPTDSCTGSQALLLRTPYSSDNLYQMTSQLECMTWNQMNLGATLKGVAAGSSSSVKWTEGQSNHSTGYESDNHTTPILCGAQYRIHTHGVFRGIQDVRRVPGVAPTLVRSASETSEKRPFMCAYPGCNKRYFKLSHLQMHSRKHTGEKPYQCDFKDCERRFSRSDQLKRHQRRHTGVKPFQCKTCQRKFSRSDHLKTHTRTHTGKTSEKPFSCRWPSCQKKFARSDELVRHHNMHQRNMTKLQLAL</td>
        <td name="td5">
        <a href="https://www.rcsb.org/structure/2PRT" target="_blank" style="color:#520049"><b>2PRT</b></a>
        </td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/nuccore/U06486.1" target="_blank" style="color:#520049"><b>U06486.1</b></a></td>
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
      <td name="td0">RNA20 aptamer</td>
      <td name="td1">5'-GGGGCCACCAACGACAUUGACGAAUGCGUAAAUUGCUAGGUUGAUAUUAAAUAGUGCCCAUGGAUCCGCGGGUGUCGGG-3'</td>
      <td name="td2">WT1-ZFP</td>
      <td name="td3">87.4 ± 10.4 nM</td>
    </tr>
            
     <tr>
      <td name="td0">RNA22 aptamer</td>
      <td name="td1">5'-GGGGCCACCAACGACAUUGAUAUGGUGACCACCCCGGCGUUGAUAUAAAAUAGUGCCCAUGGAUCCGCGGGUGUCGGG-3'</td>
      <td name="td2">WT1-ZFP</td>
      <td name="td3">13.8 ± 1.1 nM</td>
    </tr>
            
     <tr>
      <td name="td0">RNA38 aptamer</td>
      <td name="td1">5'-GGGGCCACCAACGACAUUAUCACCCACCCCGAGCUGGCGUUGAUAUAAAAUAGUGCCCAUGGAUCCGCGGGUGUCGGG-3'</td>
      <td name="td2">WT1-ZFP</td>
      <td name="td3">17.8 ± 1.4 nM</td>
    </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/RNA22_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">7W1M-H </td>
      <td name="td1">9.9</td>
      <td name="td2">5.2</td>
      <td name="td3">Structural maintenance of chromosomes protein 1A         </td>
    </tr>
            
     <tr>
      <td name="td0">6JNM-A</td>
      <td name="td1">9.4</td>
      <td name="td2">2.5</td>
      <td name="td3">Lysine-specific demethylase Ref6                         </td>
    </tr>
            
     <tr>
      <td name="td0">7Y3M-C </td>
      <td name="td1">7.6</td>
      <td name="td2">2.4</td>
      <td name="td3">DNA (16-mer)                                              </td>
    </tr>
            
     <tr>
      <td name="td0">4GZN-C </td>
      <td name="td1">7.5</td>
      <td name="td2">2.0</td>
      <td name="td3">DNA (5'-d(*tp*ap*tp*tp*gp*cp*(5cm)p*gp*cp*ap*g)-3          </td>
    </tr>
            
     <tr>
      <td name="td0">8FFZ-A </td>
      <td name="td1">7.4</td>
      <td name="td2">5.0</td>
      <td name="td3">Transcription factor IIIA                                 </td>
    </tr>
            
     <tr>
      <td name="td0">1LLM-C</td>
      <td name="td1">7.0</td>
      <td name="td2">6.7</td>
      <td name="td3">5'-D(*tp*cp*cp*cp*ap*cp*gp*cp*gp*tp*gp*gp*g)-3'           </td>
    </tr>
            
     <tr>
      <td name="td0">8GN3-B </td>
      <td name="td1">7.0</td>
      <td name="td2">2.9</td>
      <td name="td3">Zinc finger and btb domain-containing protein 10         </td>
    </tr>
            
     <tr>
      <td name="td0">2LT7-A</td>
      <td name="td1">6.7</td>
      <td name="td2">3.2</td>
      <td name="td3">Transcriptional regulator kaiso                           </td>
    </tr>
            
     <tr>
      <td name="td0">2DRP-D </td>
      <td name="td1">4.5</td>
      <td name="td2">2.4</td>
      <td name="td3">DNA (5'-                                                   </td>
    </tr>
            
     <tr>
      <td name="td0">2EN2-A  </td>
      <td name="td1">2.6</td>
      <td name="td2">3.5</td>
      <td name="td3">B-cell lymphoma 6 protein</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Characterization of RNA aptamer binding by the Wilms' tumor suppressor protein WT1.</strong></font><br />
Zhai, G., Iskandar, M., Barilla, K., & Romaniuk, P. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/11329270/" target="_blank" style="color:#520049">Biochemistry, 40(7), 2032–2040. (2001)</a>
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