---
layout: post
title:  "W2 aptamer"
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
<font>June Hyung Lee and Hana Kim et al. reported aptamers with affinity for complement component 5 in their article published in 2002<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In their work published in 2002, June Hyung Lee and Hana Kim et al. used SELEX to isolate RNA aptamer sequences with affinity for complement component 5 from a nucleic acid library containing about 5×10<sup>14</sup> 30-nucleotides-long sequences after 15 rounds of selection process<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<font><p>5'-CGUCCCUUCGCAACCCUUUAAGACUUGGGACCCUGCUCUU-3'</p></font>
<img src="/images/2D/W2_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<font>Activation of C5 by a C5 convertase initiates the spontaneous assembly of the late complement components, C5-C9, into the membrane attack complex. C5b has a transient binding site for C6. The C5b-C6 complex is the foundation upon which the lytic complex is assembled.-----From Uniprot</font>
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
        <td name="td0">C5 protein</td>
        <td name="td1"><a href="https://www.uniprot.org/uniprotkb/P01031/entry" target="_blank" style="color:#520049"><b>P01031</b></a></td>
        <td name="td2"><a href="https://www.ebi.ac.uk/interpro/entry/pfam/PF07678/" target="_blank" style="color:#520049"><b>PF07678</b></a></td>
        <td name="td3">188.305 kDa</td>
        <td name="td4">MGLLGILCFLIFLGKTWGQEQTYVISAPKIFRVGASENIVIQVYGYTEAFDATISIKSYPDKKFSYSSGHVHLSSENKFQNSAILTIQPKQLPGGQNPVSYVYLEVVSKHFSKSKRMPITYDNGFLFIHTDKPVYTPDQSVKVRVYSLNDDLKPAKRETVLTFIDPEGSEVDMVEEIDHIGIISFPDFKIPSNPRYGMWTIKAKYKEDFSTTGTAYFEVKEYVLPHFSVSIEPEYNFIGYKNFKNFEITIKARYFYNKVVTEADVYITFGIREDLKDDQKEMMQTAMQNTMLINGIAQVTFDSETAVKELSYYSLEDLNNKYLYIAVTVIESTGGFSEEAEIPGIKYVLSPYKLNLVATPLFLKPGIPYPIKVQVKDSLDQLVGGVPVTLNAQTIDVNQETSDLDPSKSVTRVDDGVASFVLNLPSGVTVLEFNVKTDAPDLPEENQAREGYRAIAYSSLSQSYLYIDWTDNHKALLVGEHLNIIVTPKSPYIDKITHYNYLILSKGKIIHFGTREKFSDASYQSINIPVTQNMVPSSRLLVYYIVTGEQTAELVSDSVWLNIEEKCGNQLQVHLSPDADAYSPGQTVSLNMATGMDSWVALAAVDSAVYGVQRGAKKPLERVFQFLEKSDLGCGAGGGLNNANVFHLAGLTFLTNANADDSQENDEPCKEILRPRRTLQKKIEEIAAKYKHSVVKKCCYDGACVNNDETCEQRAARISLGPRCIKAFTECCVVASQLRANISHKDMQLGRLHMKTLLPVSKPEIRSYFPESWLWEVHLVPRRKQLQFALPDSLTTWEIQGVGISNTGICVADTVKAKVFKDVFLEMNIPYSVVRGEQIQLKGTVYNYRTSGMQFCVKMSAVEGICTSESPVIDHQGTKSSKCVRQKVEGSSSHLVTFTVLPLEIGLHNINFSLETWFGKEILVKTLRVVPEGVKRESYSGVTLDPRGIYGTISRRKEFPYRIPLDLVPKTEIKRILSVKGLLVGEILSAVLSQEGINILTHLPKGSAEAELMSVVPVFYVFHYLETGNHWNIFHSDPLIEKQKLKKKLKEGMLSIMSYRNADYSYSVWKGGSASTWLTAFALRVLGQVNKYVEQNQNSICNSLLWLVENYQLDNGSFKENSQYQPIKLQGTLPVEARENSLYLTAFTVIGIRKAFDICPLVKIDTALIKADNFLLENTLPAQSTFTLAISAYALSLGDKTHPQFRSIVSALKREALVKGNPPIYRFWKDNLQHKDSSVPNTGTARMVETTAYALLTSLNLKDINYVNPVIKWLSEEQRYGGGFYSTQDTINAIEGLTEYSLLVKQLRLSMDIDVSYKHKGALHNYKMTDKNFLGRPVEVLLNDDLIVSTGFGSGLATVHVTTVVHKTSTSEEVCSFYLKIDTQDIEASHYRGYGNSDYKRIVACASYKPSREESSSGSSHAVMDISLPTGISANEEDLKALVEGVDQLFTDYQIKDGHVILQLNSIPSSDFLCVRFRIFELFEVGFLSPATFTVYEYHRPDKQCTMFYSTSNIKIQKVCEGAACKCVEADCGQMQEELDLTISAETRKQTACKPEIAYAYKVSITSITVENVFVKYKATLLDIYKTGEAVAEKDSEITFIKKVTCTNAELVKGRQYLIMGKEALQIKYNFSFRYIYPLDSLTWIEYWPRDTTCSSCQAFLANLDEFAEDIFLNGC</td>
        <td name="td5">
        <a href="https://www.rcsb.org/structure/3CU7" target="_blank" style="color:#520049"><b>3CU7</b></a>
        </td>
        <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/gene/727" target="_blank" style="color:#520049"><b>727</b></a></td>
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
      <td name="td0">W2 aptamer</td>
      <td name="td1">5'-CGUCCCUUCGCAACCCUUUAAGACUUGGGACCCUGCUCUU-3'</td>
      <td name="td2">C5 protein</td>
      <td name="td3">3.6 nM</td>
    </tr>
     <tr>
      <td name="td0">W12 aptamer</td>
      <td name="td1">5'-GUGCAGGUUUUGAAGAUGUGCCGACUUCUACACCAAACGGCA-3'</td>
      <td name="td2">C5 protein</td>
      <td name="td3">3.8 nM</td>
    </tr>
     <tr>
      <td name="td0">W50 aptamer</td>
      <td name="td1">5'-GACUUGUGCAAGAACCCAGUCAAAAGCCGGGCCGUUAAGCUA-3'</td>
      <td name="td2">C5 protein</td>
      <td name="td3">4.3 nM</td>
    </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/W2_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
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
      <td name="td0">5I5K-B </td>
      <td name="td1">40.5</td>
      <td name="td2">2.7</td>
      <td name="td3">Complement C5                                             </td>
    </tr>
            
     <tr>
      <td name="td0">8OQ3-D </td>
      <td name="td1">35.1</td>
      <td name="td2">5.1</td>
      <td name="td3">Complement C3                                             </td>
    </tr>
            
     <tr>
      <td name="td0">3PVM-B</td>
      <td name="td1">34.9</td>
      <td name="td2">5.8</td>
      <td name="td3">Complement C5                                             </td>
    </tr>
            
     <tr>
      <td name="td0">7S63-A</td>
      <td name="td1">31.8</td>
      <td name="td2">5.6</td>
      <td name="td3">Alpha 2-macroglobulin                                     </td>
    </tr>
            
     <tr>
      <td name="td0">4LNV-A </td>
      <td name="td1">27.3</td>
      <td name="td2">7.0</td>
      <td name="td3">Thioester-containing protein I                            </td>
    </tr>
            
     <tr>
      <td name="td0">4RTD-A</td>
      <td name="td1">18.8</td>
      <td name="td2">9.2</td>
      <td name="td3">Uncharacterized lipoprotein Yfhm                          </td>
    </tr>
            
     <tr>
      <td name="td0">5A42-A </td>
      <td name="td1">18.3</td>
      <td name="td2">8.2</td>
      <td name="td3">Uncharacterized lipoprotein Yfhm                          </td>
    </tr>
            
     <tr>
      <td name="td0">2SQC-A </td>
      <td name="td1">14.3</td>
      <td name="td2">13.6</td>
      <td name="td3">Squalene-hopene cyclase                                   </td>
    </tr>
            
     <tr>
      <td name="td0">3PMM-A </td>
      <td name="td1">13.1</td>
      <td name="td2">3.3</td>
      <td name="td3">Putative cytoplasmic protein                              </td>
    </tr>
            
     <tr>
      <td name="td0">4V1R-A</td>
      <td name="td1">12.9</td>
      <td name="td2">3.4</td>
      <td name="td3">Alpha-1,6-mannanase     </td>
    </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Interaction of C5 protein with RNA aptamers selected by SELEX.</strong></font><br />
Lee, J. H., Kim, H., Ko, J., & Lee, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12490703/" target="_blank" style="color:#520049">Nucleic acids research, 30(24), 5360–5368. (2002)</a>
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