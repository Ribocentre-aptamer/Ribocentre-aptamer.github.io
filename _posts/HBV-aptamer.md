---
layout: post
title:  "HBV aptamer"
date:   2024-05-06 00:00:00
author: Jiali Wang, Fu Bo
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
    <div class="side-nav-item"><li><a href="#description" style="color: #000000;">Description</a></li></div>
    <div class="side-nav-item"><li><a href="#SELEX" style="color: #000000;">SELEX</a></li></div>
    <div class="side-nav-item"><li><a href="#Structure" style="color: #000000;">Structure</a></li></div>
    <div class="side-nav-item"><li><a href="#ligand-recognition" style="color: #000000;">Ligand information</a></li></div>
    <div class="side-nav-item"><li><a href="#references" style="color: #000000;">References</a></li></div>
    </ul>
</div>


<font ><p class="header_box" id="description">Description</p></font>
<font >In 2011, Feng H, Beck J, Nassal M, Hu KH selexd aptamers targeting human hepatitis B virus (HBV) RNA packaging signals using the SELEX method. These aptamers can mimic the specific interaction between HBV polymerase (P protein) and the ε RNA stem ring structure on pgRNA, but do not support viral replication. Especially, the S9 aptamer has shown high affinity and specificity for recombinant truncated HBV P protein (miniP) in vitro experiments, and does not support viral replication when used as part of the complete HBV genome. Introducing S9 RNA into HepG2 cells that briefly produce HBV strongly inhibited the packaging and DNA synthesis of pgRNA, indicating that S9 RNA can act as an ε bait to competitively inhibit the binding of P protein to the real ε signal on pgRNA. This study demonstrates the successful identification of human HBV ε - aptamers using the in vitro SELEX method, and that S9 aptamers effectively inhibit HBV replication, providing a theoretical basis for the formation of ε - bait RNA interference virus P - ε complexes, and suggesting that S9 class RNA may be further developed as a useful therapeutic tool for chronic hepatitis B<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2011, Feng H, Beck J, Nassal M, Hu KH used an in vitro reconstruction system based on recombinant truncated HBV P protein (miniP) to screen potential e-structure aptamers from two large, randomized upper stem e-RNA pools. These RNA pools are enriched with RNAs strongly bound to miniPs through three rounds of screening. Through RT-PCR product cloning, 45 individual clones were randomly selected from approximately 500 clones for sequencing. Most (43 of 45) carry upper stem sequences highly enriched in adenosine (A). The selected adaptors S6 and S9 showed high affinity and specificity for miniPs in vitro. S9 RNA strongly inhibits the packaging and DNA synthesis of pgRNA, indicating that S9 RNA can act as a decoy for the e structure by competitively inhibiting the binding of P protein to the real e signal on pgRNA<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw. S9 apatmer binds to hepatitis B virus (HBV) polymerase (P protein) (miniP)<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-UGUUCAUGUCCUACUGUUCAAACAAAAAAACUGUGCACAAAAAUAAAUUGGGGCAUGGACA-3'</p></font>
<img src="/images/2D/S9_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
<br>
<br>

<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>This entry represents protein P from hepatitis B virus. Protein P is a multifunctional enzyme that converts the viral RNA genome into dsDNA in viral cytoplasmic capsids.-----from Pfam</p>
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
        <td name="td0">Hepatitis B virus (HBV) polymerase (P protein) (miniP)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/Q9QMN7/entry" target="_blank" style="color:#520049"><b>Q9QMN7</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/InterPro/IPR037531/" target="_blank" style="color:#520049"><b>IPR037531</b></a></td>
        <td name="td3">94.48 kDa</td>
        <td name="td4">MPLSYQHFRKLLLLDDEAGPLEEELPRLADEGLNRRVAEDLNLGNLNVSIPWTHKVGNFTGLYSSTVPVFNPDWQTPSFPHIHLKEDIINRCQQYVGPLTVNEKRRLKLIMPARFYPNLTKYLPLDKGIKPYYPEHIVNHYFQTRHYLHTLWKAGILYKRETTRSASFCGSPYSWEQELQHGRLVFQTSTRHGDESFCSQSSGILSRSPVGPGIRSQFKQSRLGLQPQQGSMASGTPGRSGIIRARVHSTTRQSFGVEPSGSGHIDSSTSSASSCLHQSAVRKTAYSHLSTSKRQSSSGHAVELQHIPPSSTRSQSEGPILSCWWLQFRNSKPCSDYCLSHIVNLLEDWGPCTEYGEHHIRIPRTPARVTGGVFLVDKNPHNTTESRLVVDFSQFSRGSTHVSWPKFAVPNLQSLTNLLSSNLSWLSLDVSAAFYHLPLHPAAMPHLLVGSSGLPRYVARLSSXSRXINXQHXTMQBLHDSCSRNLYVSLXLLYKTXGRKLHLYSHPIILGFRKIPMGVGLSPFLLAQFTSAICSVVRRAFPHCLAFSYMDDVVLGAKSVQHLDSLFTAVTNFLLSLGIHLNPTKTKRWGYTLNFMGYVIGSWGTLPQEHIVHKIKHCFRKLPINRPIDWKVCQRIVGLLGFAAPFTQCGYPALMPLYACIQAKQAFTFSPTYKAFLXXQYLNLYPVARQRSGLCQVFADATPTGWGLAIGHQRMRGTFVXPLPIHTAELLAACFARSRSGAKLIGTDNSVVLSRKYTSFPWLLGCAANWILRGTSFVYVPSALNPADDPSRGRLGLYRPLLRLPYRPTTGRTSLYADSPSVPSHLPDRVHFASPLHVAWRPP</td>
        <td name="td5">NA</td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/nuccore/AB031265" target="_blank" style="color:#520049"><b>AB031265</b></a></td>
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
        <td name="td0">S9</td>
        <td name="td1">5'-UGUUCAUGUCCUACUGUUCAAACAAAAAAACUGUGCACAAAAAUAAAUUGGGGCAUGGACA-3'</td>
        <td name="td2">HBV P protein</td>
        <td name="td3">NA</td>
      </tr>
      <tr>
        <td name="td0">S6</td>
        <td name="td1">5'-UGUUCAUGUCCUACUGUUCACAGAAAAUAGCUGUGCAAAAAAAAAAGAUGGGGCAUGGACA-3'</td>
        <td name="td2">HBV P protein</td>
        <td name="td3">NA</td>
      </tr>
	  </tbody>
  </table>
<br>
<br>


                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] A SELEX-screened aptamer of human hepatitis B virus RNA encapsidation signal suppresses viral replication.</strong></font><br />
Feng, H., Beck, J., Nassal, M., & Hu, K. H.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/22125633/" target="_blank" style="color:#520049" >PloS one, 6(11), e27862. (2011)</a>
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
