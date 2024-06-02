---
layout: post
title:  "LR06 aptamer"
date:   2024-04-5 00:00:00
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
<!--body>
  <p style="font-size: 16px">Click the buttons to navigate to different sections:</p>
  <div class="button-container">
    <a class="button" style="color:#520049" href="#timeline">Timeline</a>
    <a class="button" style="color:#520049" href="#description">Description</a>
    <a class="button" style="color:#520049" href="#SELEX">SELEX</a>
    <a class="button" style="color:#520049" href="#structure">Structure</a>
    <a class="button" style="color:#520049" href="#ligand-recognition">Ligand recognition
    <a class="button" style="color:#520049" href="#references">References</a>
   </a>
  </div>
</body-->
</html>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
     display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #c9c5c5;
      border-radius: 5px;
      width:225px;
	    height:50px;
  }
  .header_boxx1 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:115px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx2 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:140px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx3 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:85px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx4 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:120px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx5 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:215px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .header_boxx6 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:135px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .blowheader_box{
    display: block;
      padding: 10px;
      font-size:18px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 5px;
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
<p><br /></p>


<p class="header_boxx1" id="timeline">Timeline</p>
<div class="timeline">
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/10212256/" target="_blank" style="color:#520049">1999</a></h3>
    </div>
    <div class="body">
      <p>The DNA aptamer was selected for the first time<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/7521014/" target="_blank" style="color:#520049">1999</a></h3>
    </div>
    <div class="body">
      <p>The RNA aptamer was selected for the first time<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/10954609/" target="_blank" style="color:#520049">2000</a></h3>
    </div>
    <div class="body">
      <p>NMR characterization of a kissing complex formed between the TAR RNA element and DNA aptamer<sup>[<a href="#ref3" style="color:#520049">3</a>]</sup></p>
    </div>
  </div>
    <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/12052182/" target="_blank" style="color:#520049">2002</a></h3>
    </div>
    <div class="body">
      <p>Effect of magnesium concentration and temperature on screening of TAR aptamers in vitro<sup>[<a href="#ref4" style="color:#520049">4</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/12853646/" target="_blank" style="color:#520049">2003</a></h3>
    </div>
    <div class="body">
      <p>Stabilization of ring-closed residues in affinity interactions<sup>[<a href="#ref5" style="color:#520049">5</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/15181175/" target="_blank" style="color:#520049">2004</a></h3>
    </div>
    <div class="body">
      <p>LNA/DNA chimeric oligomers mimic RNA aptamers targeted to the TAR<sup>[<a href="#ref6" style="color:#520049">6</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/15723535/" target="_blank" style="color:#520049">2005</a></h3>
    </div>
    <div class="body">
      <p>Discovery and detection of hexitol nucleic acid aptamers<sup>[<a href="#ref7" style="color:#520049">7</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/17312962/" target="_blank" style="color:#520049">2006</a></h3>
    </div>
    <div class="body">
      <p>Application of SELEX technique in TAR aptamer selection<sup>[<a href="#ref8" style="color:#520049">8</a>]</sup></p>
    </div>
  </div>
<div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/16445294/" target="_blank" style="color:#520049">2006</a></h3>
    </div>
    <div class="body">
      <p>The role of bimodal ring interaction in aptamer binding<sup>[<a href="#ref9" style="color:#520049">9</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/17768146/" target="_blank" style="color:#520049">2007</a></h3>
    </div>
    <div class="body">
      <p>Nuclear magnetic resonance structure of complexes formed between TAR RNA and RNA modified aptamers<sup>[<a href="#ref10" style="color:#520049">10</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/9257650/" target="_blank" style="color:#520049">2008</a></h3>
    </div>
    <div class="body">
      <p>Exploring TAR–RNA aptamer loop–loop interaction by X-ray crystallography, UV spectroscopy and SPR<sup>[<a href="#ref11" style="color:#520049">11</a>]</sup></p>
    </div>
  </div>
  <div class="entry">
    <div class="title">
      <h3><a href="https://pubmed.ncbi.nlm.nih.gov/19496624/" target="_blank" style="color:#520049">2009</a></h3>
    </div>
    <div class="body">
      <p>In vitro selection of RNA aptamers for HIV-1-resistant TAR RNA elements obtained from human genome libraries<sup>[<a href="#ref12" style="color:#520049">12</a>]</sup></p>
    </div>
  </div>
</div>


         
<font ><p class="header_boxx2" id="description">Description</p></font>
<font >In 1999, Ducongé F et al. used in vitro selecting techniques to isolate aptamers with high affinity binding TAR RNA sites. This 59-nt imperfect stem-loop is at the 5' end of HIV-1 transcriptIn. In 2007, Lebars I et al. used NMR systems and molecular dynamics methods to determine the structure of the complex formed by the LNA-modified aptamer and TAR RNA<sup>[<a href="#ref2" style="color:#520049">2</a></sup><sup>,<a href="#ref10" style="color:#520049">10</a>]</sup>.<br></font>
<p><br /></p> <br>

<p class="header_boxx3" id="SELEX">SELEX</p>
<p>The in vitro selection experiment designed by Ducongé F and colleagues in 1999 mainly consisted of RNA pool ampplification and subsequent selection processes. RNAs were obtained by in vitro transcription of the PCR-amplified library with T7 RNA polymerase. The aptamer with high affinity was selected by eight rounds and the washing times were increased in the sixth to eighth rounds<sup>[<a href="#ref2" style="color:#520049">2</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
     <br> <br>    



<p class="header_boxx4" id="Structure">Structure</p>
<p class="blowheader_box">2D representation</p>
<font><p>Here we used ribodraw to complete the figure, through the 3D structure information. LR06(GA) was the aptamer sequence mainly studied in the article where structural selecting is performed<sup>[<a href="#ref10" style="color:#520049">10</a>]</sup>.</p></font>
<font><p>5'-CACGGUCCCAGACGUG-3'</p></font>
<img src="/images/2D/LR06_aptamer_2D.svg" alt="drawing" style="width:700px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>



<p class="blowheader_box">3D visualisation</p>             
<font >Lebars I and colleagues present the solution structure of  TAR/LR06(GA) complex, as determined by heteronuclear NMR spectroscopy and molecular dynamics calculations. Structures were calculated using CNS (crystallography and nuclear magnetic resonance systems) twist Angle molecular dynamics (TAMD) scheme, and NOE and dihedral Angle constraints were also used. In the figure, the TAR RNA sequence is labeled in forest, the LR06(GA) sequence is labeled in cyan, and the interacting bases in the two sequences are labeled in magenta. The PDB ID of this structure is 2OOM<sup>[<a href="#ref10" style="color:#520049" >10</a>]</sup>. Additional available structures that have been solved and detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/structures" target="_blank" style="color:#520049"><b><i>Structures</i></b></a> page.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/LR06_aptamer_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  end_residue_number:5, 
  color:{r:34,g:139,b:34}
},
{
  struct_asym_id: 'A', 
  start_residue_number:6, 
  end_residue_number:10, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:11, 
  end_residue_number:16, 
  color:{r:34,g:139,b:34}
},
{
  struct_asym_id: 'B', 
  start_residue_number:17, 
  end_residue_number:22, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'B', 
  start_residue_number:23, 
  end_residue_number:27, 
  color:{r:255,g:0,b:255}
},
{
  struct_asym_id: 'B', 
  start_residue_number:28, 
  end_residue_number:32, 
  color:{r:9,g:254,b:254}
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
        url:'/pdbfiles/2OOM-3D.pdb',
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
    </html></td>
  </tr></table><br>
  </div>


<p class="blowheader_box">Binding pocket</p>             
<font >Left: Surface representation of the binding pocket of the aptamer generated from PDB ID: 2OOM by NMR. Trans-activating responsive (TAR) RNA (shown in surface) is labeled in gray. Right: The hydrogen bonds of binding sites of the aptamer bound with TAR RNA.</font>
<br><br>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/LR06(GA)_aptamer_binding_pocket1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-right: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/Binding_pocket/LR06(GA)_aptamer_binding_pocket2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  </tr>
  </table>
  <br><br>





<font ><p class="header_boxx5" id="ligand-recognition">Ligand information</p></font>  
  
<p class="blowheader_box">SELEX ligand</p>
<font >Lebars I and colleagues characterized the loop-loop complexes using thermal denaturation experiments monitored by ultraviolet absorption spectroscopy. Subsequently, they determined the affinity between R06(GA) and TAR RNA by SPR(Surface Plasmon Resonance) method. At the same time, the affinity between the LNA-modified aptamer and TAR RNA was also determined. These methods were employed to comprehensively assess the stability and affinity of different aptamers interaction under different experimental conditions, allowing for a robust evaluation of the binding affinity and dynamics between RNA aptamer and TAR RNA in varied environments<sup>[<a href="#ref10" style="color:#520049">10</a>]</sup>.</font >
<div style="display: flex; justify-content: center;">
<br>
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
        <td name="td0">TAR*(UA)</td>
        <td name="td1">5‘-GCUGUUCCCAGACAGC-3’</td>
        <td name="td2">trans-activating responsive (TAR) RNA</td>
        <td name="td3">92.5 ± 5.2nM</td>
      </tr>
      <tr>
        <td name="td0">R06(GA)</td>
        <td name="td1">5'-GGUCGGUCCCAGACGACC-3'</td>
        <td name="td2">trans-activating responsive (TAR) RNA</td>
        <td name="td3">355.0 ± 18.0nM</td>
      </tr>
      <tr>
        <td name="td0">LR06(GA)</td>
        <td name="td1">5'-CACGGUCCCAGACGUG-3'</td>
        <td name="td2">trans-activating responsive (TAR) RNA</td>
        <td name="td3">27.8 ± 3.4nM</td>
      </tr>
	  </tbody>
  </table>
  </div>
<br>


<p class="blowheader_box">Structure ligand</p>
<font><p>The HIV trans-activation response (TAR) element is an RNA element which is known to be required for the trans-activation of the viral promoter and for virus replication. The TAR hairpin is a dynamic structure that acts as a binding site for the Tat protein, and this interaction stimulates the activity of the long terminal repeat promoter.------from Rfam</p></font>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Mirbase ID</th>
        <th onclick="sortTable(1)">Rfam</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">Sequence</th>
        <th onclick="sortTable(4)">PDB ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0"><a href="https://mirbase.org/hairpin/MI0007073?acc=MI0007073" target="_blank" style="color:#520049"><b>MI0007073</b></a></td>
        <td name="td1"><a href="https://rfam.org/family/RF00250" target="_blank" style="color:#520049"><b>RF00250</b></a></td>
        <td name="td2">9.31 kDa</td>
        <td name="td3">5'-GGCAGAUCUGAGCCUGGGAGCUCUCUGCC-3′</td>
        <td name="td4"><a href="https://www.rcsb.org/structure/1ANR" target="_blank" style="color:#520049"><b>1ANR</b></a></td>
      </tr>
	  </tbody>
  </table>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/Structure_ligand/LR06_stru_ligand.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<div style="display: flex; justify-content: center;">
  </div>
                    
<br><br>

                 
<p class="header_boxx6" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] DNA aptamers selected against the HIV-1 trans-activation-responsive RNA element form RNA-DNA kissing complexes.</strong></font><br />
Boiziau, C., Dausse, E., Yurchenko, L., & Toulmé, J. J. <br />
<a href="https://pubmed.ncbi.nlm.nih.gov/10212256/" target="_blank" style="color:#520049" >J Biol Chem, 274(18), 12730-7. (1999)</a>
<br />
                
<a id="ref2"></a><font><strong>[2] In vitro selection identifies key determinants for loop-loop interactions: RNA aptamers selective for the TAR RNA element of HIV-1.</strong></font><br />
Ducongé F., & Toulmé, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049">RNA, 5(12), 1605-14. (1999)</a>
<br />
                
<a id="ref3"></a><font><strong>[3] NMR characterization of a kissing complex formed between the TAR RNA element of HIV-1 and a DNA aptamer.</strong></font><br />
Collin, D., van Heijenoort, C., Boiziau, C., Toulmé, J. J., & Guittet, E.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/10954609/" target="_blank" style="color:#520049"> Nucleic Acids Res, 28(17), 3386–3391. (2000)</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Driving in vitro selection of anti-HIV-1 TAR aptamers by magnesium concentration and temperature.</strong></font><br />
Darfeuille, F., Sekkai, D., Dausse, E., Kolb, G., Yurchenko, L., Boiziau, C., & Toulmé, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12052182/" target="_blank" style="color:#520049">Comb Chem High Throughput Screen, 5(4), 313-25. (2002)</a>
<br />
                
<a id="ref5"></a><font><strong>[5] Molecular dynamics reveals the stabilizing role of loop closing residues in kissing interactions: comparison between TAR-TAR* and TAR-aptamer.</strong></font><br />
Beaurain, F., Di Primo, C., Toulmé, J. J., & Laguerre, M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12853646/" target="_blank" style="color:#520049">Nucleic Acids Res, 31(14), 4275-84. (2003)</a>
<br />
                
<a id="ref6"></a><font><strong>[6] LNA/DNA chimeric oligomers mimic RNA aptamers targeted to the TAR RNA element of HIV-1.</strong></font><br />
Darfeuille, F., Hansen, J. B., Orum, H., Di Primo, C., & Toulmé, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15181175/" target="_blank" style="color:#520049">Nucleic Acids Res, 32(10), 3101–3107. (2004)</a>
<br />
                
<a id="ref7"></a><font><strong>[7] Hexitol nucleic acid-containing aptamers are efficient ligands of HIV-1 TAR RNA.</strong></font><br />
Kolb, G., Reigadas, S., Boiziau, C., van Aerschot, A., Arzumanov, A., Gait, M. J., Herdewijn, P., & Toulmé, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15723535/" target="_blank" style="color:#520049">Biochemistry, 44(8), 2926-33. (2005)</a>
<br />
                
<a id="ref8"></a><font><strong>[8] Bimodal loop-loop interactions increase the affinity of RNA aptamers for HIV-1 RNA structures.</strong></font><br />
Boucard, D., Toulmé, J. J., & Di Primo, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16445294/" target="_blank" style="color:#520049">Biochemistry, 45(5), 1518-24. (2006)</a>
<br />
                
<a id="ref9"></a><font><strong>[9] SELEX and dynamic combinatorial chemistry interplay for the selection of conjugated RNA aptamers.</strong></font><br />
Bugaut, A., Toulmé, J. J., & Rayner, B.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/17312962/" target="_blank" style="color:#520049">Org Biomol Chem, 4(22), 4082-8. (2006)</a>
<br />
                
<a id="ref10"></a><font><strong>[10] NMR structure of a kissing complex formed between the TAR RNA element of HIV-1 and a LNA-modified aptamer.</strong></font><br />
Lebars, I., Richard, T., Di Primo, C., & Toulmé, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/17768146/" target="_blank" style="color:#520049">Nucleic Acids Res, 35(18), 6103-14. (2007)</a>
<br />
                
<a id="ref11"></a><font><strong>[11] Exploring TAR–RNA aptamer loop–loop interaction by X-ray crystallography, UV spectroscopy and surface plasmon resonance.</strong></font><br />
Lebars, I., Legrand, P., Aimé, A., Pinaud, N., Fribourg, S., & Di Primo, C.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/18996893/" target="_blank" style="color:#520049">Nucleic Acids Res, 36(22), 7146-56. (2008)</a>
<br />

<a id="ref12"></a><font><strong>[12] In vitro selection of RNA aptamers derived from a genomic human library against the TAR RNA element of HIV-1.</strong></font><br />
Watrin, M., Von Pelchrzim, F., Dausse, E., Schroeder, R., & Toulmé, J. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/19496624/" target="_blank" style="color:#520049">Biochemistry, 48(26), 6278-84. (2009)</a>
<br />
                       