---
layout: post
title:  "polβ-aptamer"
date:   2024-05-17 00:00:00
author: Bichun Wu, Jiaxin Zhao
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
<font>In 2006, Gening, L. V., & Miller, H. obtained RNA aptamers for polbeta from a variable pool of 8 x 10(12) individual RNA sequences containing 30 random nucleotides, using in vitro selection.A total of 60 individual clones selected after seven rounds were screened for the ability to inhibit polbeta activity. All of the inhibitory aptamers analyzed have a predicted tri-lobed structure<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2006, Gening, L. V., & Miller, H. obtained RNA aptamers for polβ from a variable pool of 8 × 1012 individual RNA sequences containing 30 random nucleotides, Using in vitro selection. A total of 60 individual clones selected after seven rounds were screened for the ability to inhibit polβ activity<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAAUGGAUCCACAUCUACGAAUUCGGUUGGGUUGUCGUAGAUAGAGCGCUUCAAUUCACUGCAGACUUGACGAAGCUU-3'</p></font>
<img src="/images/2D/polβ_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Repair polymerase that plays a key role in base-excision repair .During this process, the damaged base is excised by specific DNA glycosylases, the DNA backbone is nicked at the abasic site by an apurinic/apyrimidic (AP) endonuclease, and POLB removes 5'-deoxyribose-phosphate from the preincised AP site acting as a 5'-deoxyribose-phosphate lyase (5'-dRP lyase); Through its DNA polymerase activity, it adds one nucleotide to the 3' end of the arising single-nucleotide gap.-----from InterPro</p>
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
        <td name="td0">polβ</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P06746/entry" target="_blank" style="color:#520049"><b>P06746</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00680/" target="_blank" style="color:#520049"><b>PF00680</b></a></td>
        <td name="td3">38.18 kDa</td>
        <td name="td4">MSKRKAPQETLNGGITDMLTELANFEKNVSQAIHKYNAYRKAASVIAKYPHKIKSGAEAKKLPGVGTKIAEKIDEFLATGKLRKLEKIRQDDTSSSINFLTRVSGIGPSAARKFVDEGIKTLEDLRKNEDKLNHHQRIGLKYFGDFEKRIPREEMLQMQDIVLNEVKKVDSEYIATVCGSFRRGAESSGDMDVLLTHPSFTSESTKQPKLLHQVVEQLQKVHFITDTLSKGETKFMGVCQLPSKNDEKEYPHRRIDIRLIPKDQYYCGVLYFTGSDIFNKNMRAHALEKGFTINEYTIRPLGVTGVAGEPLPVDSEKDIFDYIQWKYREPKDRSE</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/8C2P" target="_blank" style="color:#520049"><b>8C2P</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/5423" target="_blank" style="color:#520049"><b>5423</b></a></td>
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
        <td name="td0">aptamer32</td>
        <td name="td1">5'-GGGAAUGGAUCCACAUCUACGAAUUCGGUUGGGUUGUCGUAGAUAGAGCGCUUCAAUUCACUGCAGACUUGACGAAGCUU-3'</td>
        <td name="td2">polβ</td>
        <td name="td3">290 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/polβ_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">4I27-A</td>
      <td name="td1">27.4</td>
      <td name="td2">3.8</td>
      <td name="td3">Dna nucleotidylexotransferase</td>
    </tr>
            
     <tr>
      <td name="td0">4P4O-A</td>
      <td name="td1">25.7</td>
      <td name="td2">3.1</td>
      <td name="td3">Dna polymerase beta</td>
    </tr>
            
     <tr>
      <td name="td0">3AU2-A</td>
      <td name="td1">17.8</td>
      <td name="td2">2.9</td>
      <td name="td3">Dna polymerase beta family (x family)</td>
    </tr>
            
     <tr>
      <td name="td0">3NYB-A</td>
      <td name="td1">17.5</td>
      <td name="td2">2.8</td>
      <td name="td3">Dna polymerase beta-like protein</td>
    </tr>
            
     <tr>
      <td name="td0">5WU1-A</td>
      <td name="td1">9.0</td>
      <td name="td2">4.0</td>
      <td name="td3">Poly(a) rna polymerase protein 2</td>
    </tr>
            
     <tr>
      <td name="td0">6IW6-A</td>
      <td name="td1">8.8</td>
      <td name="td2">4.2</td>
      <td name="td3">Speckle targeted pip5k1a-regulated poly(a) polyme</td>
    </tr>
            
     <tr>
      <td name="td0">6IW6-A</td>
      <td name="td1">8.6</td>
      <td name="td2">8.9</td>
      <td name="td3">Terminal uridylyltransferase 4,terminal uridylylt</td>
    </tr>
            
     <tr>
      <td name="td0">3HJ1-B</td>
      <td name="td1">8.6</td>
      <td name="td2">5.1</td>
      <td name="td3">Minor editosome-associated tutase</td>
    </tr>
            
     <tr>
      <td name="td0">3C66-A</td>
      <td name="td1">8.6</td>
      <td name="td2">4.1</td>
      <td name="td3">Poly(a) polymerase</td>
    </tr>
            
     <tr>
      <td name="td0">4ZRL-A</td>
      <td name="td1">8.3</td>
      <td name="td2">3.5</td>
      <td name="td3">Poly(a) rna polymerase gld-2</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] RNA aptamers selected against DNA polymerase beta inhibit the polymerase activities of DNA polymerases beta and kappa.</strong></font><br />
Gening, L. V., & Miller, H.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049">Nucleic acids research, 34(9), 2579–2586. (2006)</a>
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
