---
layout: post
title:  "Hemagglutinin aptamer"
date:   2024-05-01 00:00:00
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


<font><p class="header_box" id="description">Description</p></font>
<font>In 2005,  Misono TS and Kumar PK used Surface Plasma Resonance (SPR) technology, also known as Biocore technology, to select and analyze RNA aptamers with high affinity for human influenza virus hemagglutinin (HA). The Kd value of wild-type aptamer clone A for HA is approximately 200 pM, while the newly discovered sequence clone B has a Kd value of 115 ± 23 pM for HA<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2005,  Misono TS and Kumar PK started with an RNA library containing approximately 10<sup>13</sup> sequences, and after five rounds of screening, multiple high-affinity RNA aptamers clone sequences were ultimately obtained. Approximately 50% of these sequences exhibit high affinity binding to the target protein. Among these sequences, approximately 35% are wild-type sequences and 16% are newly discovered sequences<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw. Clone B aptamer binds to Hemagglutinin influenza virus (HA influenza virus)<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGAAUUCCGACCAGAAGGGUUAGCGGUCGUCUUAAGUAGUUUUUGGUCCUUUCCUCUCUCCUUCCUCUUCU-3'</p></font>
<img src="/images/2D/Clone_B_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
 <br>
 <br>

<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Haemagglutinin (HA) is one of two main surface fusion glycoproteins embedded in the envelope of influenza viruses, the other being neuraminidase (NA). There are sixteen known HA subtypes (H1-H16) and nine NA subtypes (N1-N9), which together are used to classify influenza viruses (e.g. H5N1). The antigenic variations in HA and NA enable the virus to evade host antibodies made to previous influenza strains, accounting for recurrent influenza epidemics. The HA glycoprotein is present in the viral membrane as a single polypeptide (HA0), which must be cleaved by the host's trypsin-like proteases to produce two peptides (HA1 and HA2) in order for the virus to be infectious. Once HA0 is cleaved, the newly exposed N-terminal of the HA2 peptide then acts to fuse the viral envelope to the cellular membrane of the host cell, which allows the viral negative-stranded RNA to infect the host cell. The type of host protease can influence the infectivity and pathogenicity of the virus.-----From Pfam</p>
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
        <td name="td0">Hemagglutinin (HA)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/A0A097PF13/entry" target="_blank" style="color:#520049"><b>A0A097PF13</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/InterPro/IPR000149/" target="_blank" style="color:#520049"><b>IPR000149</b></a></td>
        <td name="td3">63.635 kDa</td>
        <td name="td4">MKTIIALSYILCLVFAQKLPGNDNSTATLCLGHHAVSNGTLVKTITNDQIEVTNATELVQSSSTGRICDSPHQILDGENCTLIDALLGDPHCDGFQNKEWDLFVERSKAYSNCYPYDVPDYASLRSLVASSGTLEFNNESFNWTGVAQNGTSSACKRRSNKSFFSRLNWLHQLNYKYPALNVTMPNNEKFDKLYIWGVLHPSTDSDQISLYAQASGRVTVSTKRSQQTVIPNIGSRPWVRGVSSRISIYWTIVKPGDILLINSTGNLIAPRGYFKIRSGKSSIMRSDAPIGKCNSECITPNGSIPNDKPFQNVNRITYGACPRYVKQNTLKLATGMRNVPEKQTRGIFGAIAGFIENGWEGMVDGWYGFRHQNSEGTGQAADLKSTQAAINQINGKLNRLIEKTNEKFHQIEKEFSEVEGRIQDLEKYVEDTKIDLWSYNAELLVALENQHTIDLTDSEMNKLFERTKKQLRENAEDMGNGCFKIYHKCDNACIGSIRNGTYDHDVYRDEALNNRFQIKGVELKSGYKDWILWISFAISCFLLCVVLLGFIMWACQKGNIRCNICI</td>
        <td name="td5">NA</td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/nuccore/AY832929.1" target="_blank" style="color:#520049"><b>AY832929.1</b></a></td>
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
        <td name="td0">clone A</td>
        <td name="td1">5'-GGGAGAAUUCCGACCAGAAGGGUUAGCAGUCGGCAUGCGGUACAGACAGACCUUUCCUCUCUCCUUCCUCUUCU-3'</td>
        <td name="td2">HA</td>
        <td name="td3">200 pM</td>
      </tr>
	  </tbody>
     <tbody>
      <tr>
        <td name="td0">clone B</td>
        <td name="td1">5'-GGGAGAAUUCCGACCAGAAGGGUUAGCGGUCGUCUUAAGUAGUUUUUGGUCCUUUCCUCUCUCCUUCCUCUUCU-3'</td>
        <td name="td2">HA</td>
        <td name="td3">115 ± 23 pM</td>
      </tr>
	  </tbody>
  </table>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Selection of RNA aptamers against human influenza virus hemagglutinin using surface plasmon resonance.</strong></font><br />
Misono, T. S., & Kumar, P. K.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15913532/" target="_blank" style="color:#520049">Analytical biochemistry, 342(2), 312–317. (2005)</a>
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
