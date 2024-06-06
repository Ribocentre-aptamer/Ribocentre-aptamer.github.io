---
layout: post
title:  "(eIF4A)-aptamer"
date:   2024-04-9 00:00:00
author: Zhijie Tan, Qiaozhen Liu
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



         
<font><p class="header_box" id="description">Description</p></font>
<font>In 2003, Oguro et al. generated the RNA aptamers 4Apt with high affinity for human translation initiation factor 4A (eIF4A)  by SELEX, then confirming the secondary structure. Then in 2005, Sakamoto et al. determined the solution structure of two essential nucleotide loops (AUCGCA and ACAUAGA) within the aptamer 4Apt using NMR spectroscopy, and proposed that the AUCGCA loop is directly involved in the interaction with eIF4A<sup>[<a href="#ref1" style="color:#520049">1</a></sup><sup>,<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>In 2003, Oguro et al. generated the RNA aptamers 4Apt with high affinity for human translation initiation factor 4A (eIF4A) by SELEX<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>   



<p class="header_box" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>AUCGCA loop is directly involved in the interaction with eIF4A. The flexibility of the ACAUAGA loop is important to support this interaction<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.</p></font>
<font><p>5'-GGGGACCGCGCCCCACAUGUGAGUGAGGCCGAAACGUAGAUUCGACAGGAGGCUCACA-3'</p></font>
<img src="/images/2D/eIF4A_aptamer_2D.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
<br>


<p class="blowheader_box">3D visualisation</p>             
<font >Sakamoto et al. determined the solution structure of two essential nucleotide loops (AUCGCA and ACAUAGA) within the aptamer 4Apt using NMR spectroscopy, suggesting that the C7 and C9 of the AUCGCA loop directly interact with eIF4A. Due to the lacking structure of 4Apt aptamer against eIF4A in PDB, eIF4A_aptamer_pocket2.svg is only marked for the essential bases and eIF4A_aptamer_pocket1.svg can not be presented. In the AUCGCA loop, C7 and C9 are mrked for the directly interacted bases, while ACCGCA loop forms a similar conformation to U-turn motif and that the U-turn like conformation could be important for eIF4A binding without directly interacted bases<sup>[<a href="#ref2" style="color:#520049">2</a></sup><sup>]</sup>.<br>Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/eIF4A_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>PDBe Molstar</title>
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
    <body onload="customize()">
        <div class="controlsSection1">
            <button onclick="
              var selectSections1 = [
                {
  struct_asym_id: 'A',
  start_residue_number:1,
  end_residue_number:6,
  color:{r:34,g:139,b:34}
},
{
  struct_asym_id: 'A', 
  start_residue_number:7, 
  end_residue_number:7, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'A',    
  start_residue_number:8, 
  end_residue_number:8, 
  color:{r:34,g:139,b:34}
},
{
  struct_asym_id: 'A', 
  start_residue_number:9, 
  end_residue_number:9, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:10, 
  end_residue_number:15, 
  color:{r:34,g:139,b:34}
}
              ]
            viewerInstance1.visual.select({ data: selectSections1, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 120px;">Color Selection</button><br><br>
          <button button style="float: left;height:25px;width: 120px;" onclick="viewerInstance1.visual.clearSelection()">Clear Selection</button><br><br>
      </div>
    <div class="viewerSection1">
    <!-- Molstar container -->
      <div id="myViewer1"></div>
    </div>
    <script>
      var viewerInstance1 = new PDBeMolstarPlugin();
      var options1 = {
        customData:{
        url:'/pdbfiles/1xwp.pdb',
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
</body>
</html>
</td>
</tr>
</table>
</div>


<p class="blowheader_box">Binding pocket</p>             
<font >Due to the lacking structure of 4Apt aptamer against eIF4A in PDB ID 1XWU and 1XWP，the eIF4A_aptamer_pocket1.svg can not presented.</font>
<br>
<br>
  <img src="/images/Binding_pocket/eIF4A_aptamer_binding_pocket2.svg" alt="drawing" style="width:1000px;height:400px;display:block;border:solid 1px #efefef;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<br>
<br>


<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  
<p class="blowheader_box">SELEX ligand</p>
<font >Oguro et al. used 40N and 30N to perform the in vitro RNA selection, which represented 40 and 30 random nucleotide positions, respectively<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.</font >
<br><br>
<div style="display: flex; justify-content: center;">
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(0)">Sequence</th>
        <th onclick="sortTable(0)">Ligand</th>
        <th onclick="sortTable(1)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">RNA no.1</td>
        <td name="td1">5′-CAGGCGUUUAGCCUCUAAGUAACAGGGGGCCUCCCAUGAGC-3′</td>
        <td name="td3">mammalian translation initiation factor 4A</td>
        <td name="td4">3μM</td>
      </tr>
      <tr>
        <td name="td0">RNA no.11</td>
        <td name="td1">5′-ACAUUGCAUCGACAGCUGCAAGGCUCCCGCCGUACAAACC *5-3′</td>
        <td name="td3">mammalian translation initiation factor 4A</td>
        <td name="td4">8μM</td>
      </tr>
      <tr>
        <td name="td0">RNA no.20</td>
        <td name="td1">5′-GGGGACCGCGCCCCACAUGUGAGUGAGGCCGAAACGUAGA *28-3′</td>
        <td name="td3">mammalian translation initiation factor 4A</td>
        <td name="td4">40nM</td>
      </tr>
      <tr>
        <td name="td0">RNA no.21</td>
        <td name="td1">5′-GGGGACCGCGCCCCACAUGUGAGUGAGGCCGAAACAUAGA-3′</td>
        <td name="td3">mammalian translation initiation factor 4A</td>
        <td name="td4">27nM</td>
      </tr>
      <tr>
        <td name="td0">RNA no.30</td>
        <td name="td1">5′-UGUGGAUGAUUUGUAUGAUCGCGCAUACAA *5-3′</td>
        <td name="td3">mammalian translation initiation factor 4A</td>
        <td name="td4">1μM</td>
      </tr>
	  </tbody>
  </table>
  </div>

<p class="blowheader_box">Structure ligand</p>
<font><p>ATP-dependent RNA helicase which is a subunit of the eIF4F complex involved in cap recognition and is required for mRNA binding to ribosome. In the current model of translation initiation, eIF4A unwinds RNA secondary structures in the 5'-UTR of mRNAs which is necessary to allow efficient binding of the small ribosomal subunit, and subsequent scanning for the initiator codon.-----Pfam</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Uniprot ID</th>
        <th onclick="sortTable(1)">Pfam</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">Amino acids sequences</th>
        <th onclick="sortTable(4)">PDB ID</th>
        <th onclick="sortTable(5)">GenBank</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0"><a href="https://www.uniprot.org/uniprotkb/P10081/entry" target="_blank" style="color:#520049"><b>P10081</b></a></td>
        <td name="td1"><a href="https://www.ebi.ac.uk/interpro/protein/UniProt/P10081/" target="_blank" style="color:#520049"><b>P10081</b></a></td>
        <td name="td2">44.70kDa</td>
        <td name="td3">SEGITDIEESQIQTNYDKVVYKFDDMELDENLLRGVFGYGFEEPSAIQQRAIMPIIEGHDVLAQAQSGTGKTGTFSIAALQRIDTSVKAPQALMLAPTRELALQIQKVVMALAFHMDIKVHACIGGTSFVEDAEGLRDAQIVVGTPGRVFDNIQRRRFRTDKIKMFILDEADEMLSSGFKEQIYQIFTLLPPTTQVVLLSATMPNDVLEVTTKFMRNPVRILVKKDELTLEGIKQFYVNVEEEEYKYECLTDLYDSISVTQAVIFCNTRRKVEELTTKLRNDKFTVSAIYSDLPQQERDTIMKEFRSGSSRILISTDLLARGIDVQQVSLVINYDLPANKENYIHRIGRGGRFGRKGVAINFVTNEDVGAMRELEKFYSTQIEELPSDIATLLN</td>
        <td name="td4"><a href="https://www.rcsb.org/structure/1FUU" target="_blank" style="color:#520049"><b>1FUU</b></a></td>
        <td name="td5"><a href="https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?lvl=0&id=559292" target="_blank" style="color:#520049"><b>559292</b> </a></td>
      </tr>
	  </tbody>
  </table>
 <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/eIF4A_stru_ligand.svg" alt="drawing" style="width:800px;height:300px;"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;"></div>


<p class="blowheader_box">Similar compound</p>
<font><p>We used the Dail server website to compare the structural similarities of ligand proteins, and selected the previous information with high similarity for presentation. The Dali server is a network service for comparing protein structures in 3D. Dali compares them against those in the Protein Data Bank (PDB).</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">PDB</th>
        <th onclick="sortTable(2)">Z-score</th>
        <th onclick="sortTable(3)">RMSD</th>
        <th onclick="sortTable(4)">Description</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">8RC0-D</td>
        <td name="td2">27.1</td>
        <td name="td3">5</td>
        <td name="td4">CD2 antigen cytoplasmic tail-binding protein 2</td>
      </tr>
      <tr>
        <td name="td1">3I5X-A</td>
        <td name="td2">24.8</td>
        <td name="td3">9.6</td>
        <td name="td4">ATP-dependent rna helicase mss116</td>
      </tr>
      <tr>
        <td name="td1">6YVH-K</td>
        <td name="td2">24.1</td>
        <td name="td3">1.5</td>
        <td name="td4">Pre-mRNA-splicing factor cwc22 homolog</td>
      </tr>
      <tr>
        <td name="td1">7NAD-X</td>
        <td name="td2">22.9</td>
        <td name="td3">10.4</td>
        <td name="td4">25s rRNA</td>
      </tr>
      <tr>
        <td name="td1">3I32-A</td>
        <td name="td2">20.1</td>
        <td name="td3">1.9</td>
        <td name="td4">Heat resistant rna dependent atpase</td>
      </tr>
      <tr>
        <td name="td1">8VX9-B</td>
        <td name="td2">19.1</td>
        <td name="td3">6.6</td>
        <td name="td4">Hama</td>
      </tr>
      <tr>
        <td name="td1">6ZNP-A</td>
        <td name="td2">19.1</td>
        <td name="td3">8.9</td>
        <td name="td4">Uncharacterized ATP-dependent helicase ypra</td>
      </tr>
      <tr>
        <td name="td1">5V9X-A</td>
        <td name="td2">18.6</td>
        <td name="td3">9.5</td>
        <td name="td4">ATP-dependent dna helicase</td>
      </tr>
      <tr>
        <td name="td1">5DCA-A</td>
        <td name="td2">18.5</td>
        <td name="td3">7.8</td>
        <td name="td4">Pre-mrna-splicing helicase brr2</td>
      </tr>
      <tr>
        <td name="td1">4CGZ-A</td>
        <td name="td2">17.7</td>
        <td name="td3">3.5</td>
        <td name="td4">Bloom's syndrome helicase</td>
      </tr>
	  </tbody>
  </table>
<br>
<br>

                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] RNA aptamers to initiation factor 4A helicase hinder cap-dependent translation by blocking ATP hydrolysis.</strong></font><br />
Oguro, A., Ohtsu, T., Svitkin, YV., Sonenberg, N., & Nakamura, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049" >RNA, 9(4):394-407. (2003)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] NMR structures of double loops of an RNA aptamer against mammalian initiation factor 4A.</strong></font><br />
Sakamoto, T., Oguro, A., Kawai, G., Ohtsu, T., & Nakamura, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15687383/" target="_blank" style="color:#520049">Nucleic Acids Research, 33(2):745-54. (2005)</a>
<br />