---
layout: post
title:  "TbRIII-aptamer"
date:   2024-05-20 00:00:00
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
<font>In 2006, Ohuchi, S. P., Ohtsu, T., & Nakamura, Y. developed a novel SELEX procedure (referred to as TECS-SELEX) in which cell-surface displayed recombinant protein is directly used as the selection target. Using this method, they isolated RNA aptamers against transforming growth factor-beta type III receptor expressed on Chinese hamster ovary (CHO) cells. One of the RNA aptamers has a dissociation constant in the 1 nM range and competed with transforming growth factor-beta to bind to the cell surface receptor in vitro<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2006, Ohuchi, S. P., Ohtsu, T., & Nakamura, Y. carried out SELEX using Chinese hamster ovary (CHO) cells ectopically expressing human transforming growth factor-β (TGF-β) type III receptor (TbRIII) on the cell surface. After 11 rounds of the TECS-SELEX, an RNA aptamer against TbRIII with high affinity and specificity to its functional form on the cell surface was isolated<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGCCAGGCAGCGAGAGATAAGCAGAAGAAGTATGTGACCATGCTCCAGAGAGCAACTTCACATGCGTAGCCAAACCGACCACACGCGTCCGAGA-3'</p></font>
<img src="/images/2D/TbRIII_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>Binds to TGF-beta. Could be involved in capturing and retaining TGF-beta for presentation to the signaling receptors (By similarity). In gonadotrope cells, acts as an inhibin A coreceptor and regulates follicle-stimulating hormone (FSH) levels and female fertility.-----from uniprot</p>
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
        <td name="td0">TbRIII</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/O88393/entry" target="_blank" style="color:#520049"><b>O88393</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00680/" target="_blank" style="color:#520049"><b>PF00680</b></a></td>
        <td name="td3">19.00 kDa</td>
        <td name="td4">TFNMELYNTDLFLVPSPGVFSVAENEHVYVEVSVTKADQDLGFAIQTCFISPYSNPDRMSDYTIIENICPKDDSVKFYSSKRVHFPIPHAEVDKKRFSFVFKSVFNTSLLFLHCELTLCSRNKGSQKLPKCVTPDDACTSLDATMIWTMMQNKKTFTKPLAVVLQVD</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4AJV" target="_blank" style="color:#520049"><b>4AJV</b></a></td>
        <td name="td6"><a href="https://ncbi.nlm.nih.gov/gene/21814" target="_blank" style="color:#520049"><b>21814</b></a></td>
      </tr>
	  </tbody>
  </table>

<p>Some isolated sequences bind to the affinity of the protein..</p>
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
        <td name="td0">A07 aptamer</td>
        <td name="td1">5'-GGGCCAGGCAGCGAGAGATAAGCAGAAGAAGTATGTGACCATGCTCCAGAGAGCAACTTCACATGCGTAGCCAAACCGACCACACGCGTCCGAGA-3'</td>
        <td name="td2">TbRIII</td>
        <td name="td3">2.47 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/TbRIII_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">3QW9-A</td>
      <td name="td1">23.9</td>
      <td name="td2">1.4</td>
      <td name="td3">Transforming growth</td>
    </tr>
            
     <tr>
      <td name="td0">5BUP-A</td>
      <td name="td1">14.3</td>
      <td name="td2">2.6</td>
      <td name="td3">Zona pellucida sperm-binding protein 2</td>
    </tr>
            
     <tr>
      <td name="td0">4WRN-A</td>
      <td name="td1">13.6</td>
      <td name="td2">2.2</td>
      <td name="td3">Maltose-binding periplasmic protein,uromodulin</td>
    </tr>
            
     <tr>
      <td name="td0">5HZV-A</td>
      <td name="td1">12.8</td>
      <td name="td2">2.3</td>
      <td name="td3">Maltose-binding periplasmic protein,endoglin</td>
    </tr>
            
     <tr>
      <td name="td0">7PFP-A</td>
      <td name="td1">11.7</td>
      <td name="td2">4.0</td>
      <td name="td3">Uromodulin</td>
    </tr>
            
     <tr>
      <td name="td0">8BQU-A</td>
      <td name="td1">11.3</td>
      <td name="td2">2.5</td>
      <td name="td3">Zona pellucida sperm-binding protein 3</td>
    </tr>
            
     <tr>
      <td name="td0">8RKI-B</td>
      <td name="td1">11.1</td>
      <td name="td2">2.4</td>
      <td name="td3">Zona pellucida sperm-binding protein 3</td>
    </tr>
            
     <tr>
      <td name="td0">4OF3-B</td>
      <td name="td1">9.3</td>
      <td name="td2">3.3</td>
      <td name="td3">Protein syg-1, isoform b</td>
    </tr>
            
     <tr>
      <td name="td0">5T89-Y</td>
      <td name="td1">7.4</td>
      <td name="td2">2.7</td>
      <td name="td3">Vascular endothelial growth factor a</td>
    </tr>
            
     <tr>
      <td name="td0">2DAV-A</td>
      <td name="td1">7.3</td>
      <td name="td2">2.6</td>
      <td name="td3">Myosin-binding protein c, slow-type</td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Selection of RNA aptamers against recombinant transforming growth factor-beta type III receptor displayed on cell surface.</strong></font><br />
Ohuchi, S. P., Ohtsu, T., & Nakamura, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16540230/" target="_blank" style="color:#520049">Biochimie, 88(7), 897–904. (2006)</a>
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
