---
layout: post
title:  "SE RNA #1 aptamer"
date:   2024-05-22 00:00:00
author: Bo Fu, Jiali Wang
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



<font><p class="header_box" id="description">Description</p></font>
<font>Soo-Jin Bae and Ji-Hyun Oum et al. reported aptamers with affinity for nuclear factor of activated T cells in their article published in 2002<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In their work published in 2002, Soo-Jin Bae and Ji-Hyun Oum et al. used SELEX to isolate RNA aptamer sequences with affinity for nuclear factor of activated T cells from a nucleic acid library containing about 10<sup>14</sup> 94-nucleotides-long sequences after 10 rounds of selection process<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-GGGAGAGCGGAAGCGUGCUGGGCCUCUGUUCCCAAGGGAAUACUGGUCGUGUUGGAUCAGGUUGGCAUAACCCAGAGGUCGAUGGAUCCCCCC-3'</p></font>
<img src="/images/2D/SE-RNA1_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>




<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>NFATC1 plays a role in the inducible expression of cytokine genes in T-cells, especially in the induction of the IL-2 or IL-4 gene transcription. Also controls gene expression in embryonic cardiac cells. Could regulate not only the activation and proliferation but also the differentiation and programmed death of T-lymphocytes as well as lymphoid and non-lymphoid cells.-----From Uniprot</font>
<br>
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
        <td name="td0">NFATC1</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/O95644/entry" target="_blank" style="color:#520049"><b>O95644</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF00554/" target="_blank" style="color:#520049"><b>PF00554</b></a></td>
        <td name="td3">101.243 kDa</td>
        <td name="td4">MPSTSFPVPSKFPLGPAAAVFGRGETLGPAPRAGGTMKSAEEEHYGYASSNVSPALPLPTAHSTLPAPCHNLQTSTPGIIPPADHPSGYGAALDGGPAGYFLSSGHTRPDGAPALESPRIEITSCLGLYHNNNQFFHDVEVEDVLPSSKRSPSTATLSLPSLEAYRDPSCLSPASSLSSRSCNSEASSYESNYSYPYASPQTSPWQSPCVSPKTTDPEEGFPRGLGACTLLGSPRHSPSTSPRASVTEESWLGARSSRPASPCNKRKYSLNGRQPPYSPHHSPTPSPHGSPRVSVTDDSWLGNTTQYTSSAIVAAINALTTDSSLDLGDGVPVKSRKTTLEQPPSVALKVEPVGEDLGSPPPPADFAPEDYSSFQHIRKGGFCDQYLAVPQHPYQWAKPKPLSPTSYMSPTLPALDWQLPSHSGPYELRIEVQPKSHHRAHYETEGSRGAVKASAGGHPIVQLHGYLENEPLMLQLFIGTADDRLLRPHAFYQVHRITGKTVSTTSHEAILSNTKVLEIPLLPENSMRAVIDCAGILKLRNSDIELRKGETDIGRKNTRVRLVFRVHVPQPSGRTLSLQVASNPIECSQRSAQELPLVEKQSTDSYPVVGGKKMVLSGHNFLQDSKVIFVEKAPDGHHVWEMEAKTDRDLCKPNSLVVEIPPFRNQRITSPVHVSFYVCNGKRKRSQYQRFTYLPANVPIIKTEPTDDYEPAPTCGPVSQGLSPLPRPYYSQQLAMPPDPSSCLVAGFPPCPQRSTLMPAAPGVSPKLHDLSPAAYTKGVASPGHCHLGLPQPAGEAPAVQDVPRPVATHPGSPGQPPPALLPQQVSAPPSSSCPPGLEHSLCPSSPSPPLPPATQEPTCLQPCSPACPPATGRPQHLPSTVRRDESPTAGPRLLPEVHEDGSPNLAPIPVTVKREPEELDQLYLDDVNEIIRNDLSSTSTHS</td>
        <td name="td5">
        <a href="https://www.rcsb.org/structure/5SVE" target="_blank" style="color:#520049"><b>5SVE</b></a>
        </td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/4772" target="_blank" style="color:#520049"><b>4772</b></a></td>
      </tr>
   </tbody>
  </table>

<font>Some isolated sequences bind to the affinity of the protein.</font>
<br>
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
        <td name="td0">SE RNA #1 aptamer</td>
        <td name="td1">5'-GGGAGAGCGGAAGCGUGCUGGGCCUCUGUUCCCAAGGGAAUACUGGUCGUGUUGGAUCAGGUUGGCAUAACCCAGAGGUCGAUGGAUCCCCCC-3'</td>
        <td name="td2">NFATC</td>
        <td name="td3">30 nM</td>
      </tr>
   </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/SE-RNA1_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
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
      <td name="td0">4IL1-A</td>
      <td name="td1">55.9</td>
      <td name="td2">1.0</td>
      <td name="td3">Calmodulin, calcineurin subunit B type 1, serine/          </td>
    </tr>
            
     <tr>
      <td name="td0">1WAO-1</td>
      <td name="td1">43.7</td>
      <td name="td2">4.8</td>
      <td name="td3">Serine/threonine protein phosphatase 5                    </td>
    </tr>
            
     <tr>
      <td name="td0">6ZEJ-I</td>
      <td name="td1">42.3</td>
      <td name="td2">1.8</td>
      <td name="td3">Serine/threonine-protein phosphatase PP1-Alpha CA          </td>
    </tr>
            
     <tr>
      <td name="td0">2Z72-A</td>
      <td name="td1">20.8</td>
      <td name="td2">3.4</td>
      <td name="td3">Protein-tyrosine-phosphatase                             </td>
    </tr>
            
     <tr>
      <td name="td0">2DFJ-A</td>
      <td name="td1">17.2</td>
      <td name="td2">2.8</td>
      <td name="td3">Diadenosinetetraphosphatase                               </td>
    </tr>
            
     <tr>
      <td name="td0">1G5B-B</td>
      <td name="td1">16.7</td>
      <td name="td2">2.8</td>
      <td name="td3">Serine/threonine protein phosphatase                      </td>
    </tr>
            
     <tr>
      <td name="td0">2QJC-A</td>
      <td name="td1">16.5</td>
      <td name="td2">2.9</td>
      <td name="td3">Diadenosine tetraphosphatase, putative                    </td>
    </tr>
            
     <tr>
      <td name="td0">2GJU-A</td>
      <td name="td1">15.5</td>
      <td name="td2">3.1</td>
      <td name="td3">252aa long hypothetical protein                           </td>
    </tr>
            
     <tr>
      <td name="td0">5VJV-A </td>
      <td name="td1">15.0</td>
      <td name="td2">3.0</td>
      <td name="td3">Rhizobiales-like phosphatase 2                            </td>
    </tr>
            
     <tr>
      <td name="td0">3QFM-A </td>
      <td name="td1">13.6</td>
      <td name="td2">3.1</td>
      <td name="td3">Putative uncharacterized protein  </td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] In vitro selection of specific RNA inhibitors of NFATc.</strong></font><br />
Bae, S. J., Oum, J. H., Sharma, S., Park, J., & Lee, S. W.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12408978/" target="_blank" style="color:#520049">Biochemical and biophysical research communications, 298(4), 486–492. (2002)</a>
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
    </html>