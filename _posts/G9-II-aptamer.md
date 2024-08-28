---
layout: post
title:  "G9-II aptamer"
date:   2024-05-07 00:00:00
author: Ke Chen, Yangyi Ren
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
    <div class="side-nav-item"><li><a href="#timeline" style="color: #000000;">Timeline</a></li></div>
    <div class="side-nav-item"><li><a href="#description" style="color: #000000;">Description</a></li></div>
    <div class="side-nav-item"><li><a href="#SELEX" style="color: #000000;">SELEX</a></li></div>
    <div class="side-nav-item"><li><a href="#Structure" style="color: #000000;">Structure</a></li></div>
    <div class="side-nav-item"><li><a href="#ligand-recognition" style="color: #000000;">Ligand information</a></li></div>
    <div class="side-nav-item"><li><a href="#references" style="color: #000000;">References</a></li></div>
    </ul>
</div>



<p class="header_box" id="timeline">Timeline</p>
<div class="timeline">
   <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049">1997</a></h3>
  </div>
  <div class="body">
    <p>An aptamer called 10G-1, which binds specifically to the NS3 protease, was selected for the first time by in vitro genetic-selection strategy<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/9356339/" target="_blank" style="color:#520049">1997</a></h3>
  </div>
  <div class="body">
    <p>Keigo Machida et al. isolated aptamers that inhibited the activity of NS3 protease and helicase<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049">2000</a></h3>
  </div>
  <div class="body">
    <p>Kotaro Fukuda et al. isolated RNA aptamers that bind specifically to the NS3 protease active site in the truncated polypeptide ΔNS3<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/11118325/" target="_blank" style="color:#520049">2000</a></h3>
  </div>
  <div class="body">
    <p>The binding sites of NS3 protease domain and aptamer were analyzed by alanine scanning mutagenesis<sup>[<a href="#ref4" style="color:#520049">4</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/12655010/" target="_blank" style="color:#520049">2003</a></h3>
  </div>
  <div class="body">
    <p>Fumiko Nishikawa et al. constructed a G9 aptamer expression system in cultured cells, using the cytomegarovirus enhancer + chicken beta-actin globin (CAG) promoter<sup>[<a href="#ref5" style="color:#520049">5</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/15541341/" target="_blank" style="color:#520049">2004</a></h3>
  </div>
  <div class="body">
    <p>Kotaro Fukuda et al. designed a new aptamer called NEO-III-14U to inhibit both protease and helicase activity<sup>[<a href="#ref6" style="color:#520049">6</a>]</sup></p>
  </div>
 </div>
            
 <div class="entry">
  <div class="title">
    <h3><a href="https://pubmed.ncbi.nlm.nih.gov/22814430/" target="_blank" style="color:#520049">2012</a></h3>
  </div>
  <div class="body">
    <p>Robert Vaughan et al. showed that RNAs can bind directly to the active site cleft of the NS3 protease domain (NS3P) and inhibit proteolysis of peptide substrates. RNAs that are less apt to form intramolecular structures have a stronger inhibitory activity than RNAs with more stable base paired regions<sup>[<a href="#ref7" style="color:#520049">7</a>]</sup></p>
  </div>
 </div>
</div>





<font ><p class="header_box" id="description">Description</p></font>
<font >In 2000, Kotaro Fukuda and colleagues isolated RNA aptamers that bind specifically to the NS3 protease active site in the truncated polypeptide ΔNS3. RNA aptamers were selected in vitro by systematic evolution of ligands by exponential enrichment (SELEX)<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2000, Kotaro Fukuda and colleagues designed a selecting method based on existing research. The RNA pool for SELEX had a 30-nucleotide randomized core region. After nine selection cycles, a pool of ΔNS3-specific RNA aptamers were obtained. This RNA pool included 45 clones that divided into three main classes (G9-I, II and III). These classes include the conserved sequence GA(A/U)UGGGAC<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>G9-II was the aptamer sequence mainly studied in the article, which had a high affinity with ΔNS3. The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup>.<br></font>
<font><p>5'-GGGAGAAUUCCGACCAGAAGUGCUCUUAGAAUGGGACUAAGACACGGGACCCUUUCCUCUCUCCUUCCUCUUCU-3'</p></font>
<img src="/images/2D/G9-II_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
<br>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  
 
<p class="blowheader_box">SELEX ligand</p>
<p>Hepatitis C virus NS3 protein is a serine protease which has a trypsin-like fold. The non-structural (NS) protein NS3 is one of the NS proteins involved in replication of the HCV genome. The action of NS3 protease (NS3P), which resides in the N-terminal one-third of the NS3 protein, then yields all remaining non-structural proteins.-----From Pfam</p>
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
        <td name="td0">HCV NS3 protease (ΔNS3)</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/B2Y2M9/entry#sequences" target="_blank" style="color:#520049"><b>B2Y2M9</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF02907/" target="_blank" style="color:#520049"><b>PF02907</b></a></td>
        <td name="td3">19.15 kDa</td>
        <td name="td4">APITAYAQQTRGLLGCIITSLTGRDKNQVEGEVQIVSTATQTFLATCINGVCWTVYHGAGTRTIASPKGPVIQMYTNVDQDLVGWPAPQGSRSLTPCTCGSSDLYLVTRHADVIPVRRRGDSRGSLLSPRPISYLKGSSGGPLLCPAGHAVGLFRAAVCTRGVAKAVDFIPVENLETTMRS</td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3KF2" target="_blank" style="color:#520049"><b>3KF2</b></a></td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/protein/ABY67662.1" target="_blank" style="color:#520049"><b>ABY67662.1</b></a></td>
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
        <td name="td0">G9-II</td>
        <td name="td1">GGGAGAAUUCCGACCAGAAGUGCUCUUAGAAUGGGACUAAGACACGGGACCCUUUCCUCUCUCCUUCCUCUUCU</td>
        <td name="td2">HCV NS3 protease (ΔNS3)</td>
        <td name="td3">6.3 nM</td>
      </tr>
	  </tbody>
     <tbody>
      <tr>
        <td name="td0">G9-I</td>
        <td name="td1">GGGAGAAUUCCGACCAGAAGCUUCGGGAUUUGAGGGUAGAAUGGGACUACCUUUCCUCUCUCCUUCCUCUUCU</td>
        <td name="td2">HCV NS3 protease (ΔNS3)</td>
        <td name="td3">11.6 nM</td>
      </tr>
	  </tbody>
      <tbody>
      <tr>
        <td name="td0">G9-III</td>
        <td name="td1">GGGAGAAUUCCGACCAGAAGUACGACACGAUUGGGACGUGUCUAUGGGACCCUUUCCUCUCUCCUUCCUCUUCU</td>
        <td name="td2">HCV NS3 protease (ΔNS3)</td>
        <td name="td3">8.9 nM</td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/G9-II_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:350px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
        <td name="td0">1CU1-A</td>
        <td name="td1">20.7</td>
        <td name="td2">1.0</td>
        <td name="td3">Protein (protease/helicase NS3)</td>
      </tr>
      <tr>
        <td name="td0">2W5E-A</td>
        <td name="td1">15.3</td>
        <td name="td2">2.2</td>
        <td name="td3">Putative sering protease</td>
      </tr>
      <tr>
        <td name="td0">3K6Y-A</td>
        <td name="td1">14.7</td>
        <td name="td2">2.7</td>
        <td name="td3">Possible membrane-associated sering protease</td>
      </tr>
      <tr>
        <td name="td0">2R3Y-A</td>
        <td name="td1">14.4</td>
        <td name="td2">2.8</td>
        <td name="td3">Protease degs</td>
      </tr>
      <tr>
        <td name="td0">6Z05-A</td>
        <td name="td1">14.2</td>
        <td name="td2">2.8</td>
        <td name="td3">Dego family sering endoprotease</td>
      </tr>
      <tr>
        <td name="td0">4INK-A</td>
        <td name="td1">13.4</td>
        <td name="td2">2.8</td>
        <td name="td3">Sering protease spld</td>
      </tr>
      <tr>
        <td name="td0">5LKL-A</td>
        <td name="td1">13.3</td>
        <td name="td2">3.0</td>
        <td name="td3">Genome polyprotein</td>
      </tr>
      <tr>
        <td name="td0">1SGP-E</td>
        <td name="td1">13.0</td>
        <td name="td2">3.0</td>
        <td name="td3">Streptomyces griseus proteinase B</td>
      </tr>
      <tr>
        <td name="td0">7SJY-A</td>
        <td name="td1">12.8</td>
        <td name="td2">3.1</td>
        <td name="td3">Anti-sigma-I factor RSGI9</td>
      </tr>
      <tr>
        <td name="td0">8W20-C</td>
        <td name="td1">12.7</td>
        <td name="td2">3.0</td>
        <td name="td3">Secreted protein</td>
      </tr>
    </tbody>
  </table>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Selection of RNA aptamers that bind specifically to the NS3 protease of hepatitis C virus.</strong></font><br />
Urvil, P. T., Kakiuchi, N., Zhou, D. M., Shimotohno, K., Kumar, P. K., & Nishikawa, S.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049">European journal of biochemistry, 248(1), 130–138.  (1997)</a>
<br/>
            
<a id="ref2"></a><font><strong>[2] Isolation of RNA aptamers specific to the NS3 protein of hepatitis C virus from a pool of completely random RNA.</strong></font><br />
Kumar, P. K., Machida, K., Urvil, P. T., Kakiuchi, N., Vishnuvardhan, D., Shimotohno, K., Taira, K., & Nishikawa, S.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9356339/" target="_blank" style="color:#520049">Virology, 237(2), 270–282. (1997)</a>
<br/>
            
<a id="ref3"></a><font><strong>[3] Isolation and characterization of RNA aptamers specific for the hepatitis C virus nonstructural protein 3 protease.</strong></font><br />
Fukuda, K., Vishnuvardhan, D., Sekiya, S., Hwang, J., Kakiuchi, N., Taira, K., Shimotohno, K., Kumar, P. K., & Nishikawa, S.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049">European journal of biochemistry, 267(12), 3685–3694. (2000)</a>
<br/>
            
<a id="ref4"></a><font><strong>[4] The RNA aptamer-binding site of hepatitis C virus NS3 protease.</strong></font><br />
Hwang, J., Fauzi, H., Fukuda, K., Sekiya, S., Kakiuchi, N., Shimotohno, K., Taira, K., Kusakabe, I., & Nishikawa, S.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/11118325/" target="_blank" style="color:#520049">Biochemical and biophysical research communications, 279(2), 557–562. (2000)</a>
<br/>
            
<a id="ref5"></a><font><strong>[5] Inhibition of HCV NS3 protease by RNA aptamers in cells.</strong></font><br />
Nishikawa, F., Kakiuchi, N., Funaji, K., Fukuda, K., Sekiya, S., & Nishikawa, S.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12655010/" target="_blank" style="color:#520049">Nucleic acids research, 31(7), 1935–1943. (2003)</a>
<br/>
            
<a id="ref6"></a><font><strong>[6] An RNA ligand inhibits hepatitis C virus NS3 protease and helicase activities.</strong></font><br />
Fukuda, K., Umehara, T., Sekiya, S., Kunio, K., Hasegawa, T., & Nishikawa, S.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15541341/" target="_blank" style="color:#520049">Biochemical and biophysical research communications, 325(3), 670–675. (2004)</a>
<br/>
            
<a id="ref7"></a><font><strong>[7] RNA binding by the NS3 protease of the hepatitis C virus.</strong></font><br />
Vaughan, R., Li, Y., Fan, B., Ranjith-Kumar, C. T., & Kao, C. C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/22814430/" target="_blank" style="color:#520049">Virus research, 169(1), 80–90. (2012)</a>
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
