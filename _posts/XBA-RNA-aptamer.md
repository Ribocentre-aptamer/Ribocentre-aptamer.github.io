---
layout: post
title:  "XBA RNA aptamer"
date:   2024-05-10 00:00:00
author: Linfei Li, Yuhang Luo
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
<font>In 1998, Daisuke Kiga et al.isolated RNAs that bind to xanthine (2,6-dioxypurine) from a population of 1012 random sequences by in vitro selection, he xanthine/guanine-binding RNAs is the same as a sequence in one of the internalloops of the hairpin ribozyme, except for a substitution that is neutral with respect to xanthine/guanine binding<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br></font>
<br>
<br>


<p class="header_box" id="SELEX">SELEX</p>
<p>Kiga, D., Futamura, Y., Sakamoto, K., & Yokoyama, S. In vitro screening of xanthine-binding RNAs by in vitro screening started with an RNA library of 60 nt random sequences flanked by two primer-binding regions, and sequence homologues of 36 clones were identified, with only the shortest aptamers having concordant sequence<sup>[<a href="#ref1" style="color:#520049">1</a>]</sup>.<br>
Detailed information are accessible on <a href="{{ site.url }}{{ site.baseurl }}/SELEX" target="_blank" style="color:#520049"><b><i>SELEX</i></b></a> page.</p>
<br>
<br>


<p class="header_box" id="Structure">Structure</p>
<font>The 2D structure of the figure is based on the article by ribodraw tool to draw.<br></font>
<font><p>5'-GGCACGUGUAUUACCCUAGUGGUCGACGUGCC-3'</p></font>
<img src="/images/2D/XBA_aptamer_2D.svg" alt="drawing" style="width:800px;height:400px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>



<font ><p class="header_box" id="ligand-recognition">Ligand information</p></font>  

<p class="blowheader_box">SELEX ligand</p>
<p>9H-xanthine is an oxopurine in which the purine ring is substituted by oxo groups at positions 2 and 6 and N-9 is protonated. It has a role as a Saccharomyces cerevisiae metabolite. It is a tautomer of a 7H-xanthine.-----From DrugBank</p>
<p>Guanine is a 2-aminopurine carrying a 6-oxo substituent. It has a role as a human metabolite, an algal metabolite, a Saccharomyces cerevisiae metabolite, an Escherichia coli metabolite and a mouse metabolite. It is a purine nucleobase, an oxopurine and a member of 2-aminopurines. It derives from a hydride of a 9H-purine.-----From DrugBank</p>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Molecular Formula</th>
        <th onclick="sortTable(2)">MW</th>
        <th onclick="sortTable(3)">CAS</th>
        <th onclick="sortTable(4)">Solubility</th>
        <th onclick="sortTable(5)">PubChem</th>
        <th onclick="sortTable(6)">Drug ID</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td0">Xanthine</td>
        <td name="td1">C<sub>5</sub>H<sub>4</sub>N<sub>4</sub>O<sub>2</sub></td>
        <td name="td2">152.11 g/mol</td>
        <td name="td3">69-89-6</td>
        <td name="td4">69 mg/L (at 16 °C)</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/1188" target="_blank" style="color:#520049"><b>1188</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB02134" target="_blank" style="color:#520049"><b>DB02134</b></a></td>
      </tr>
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">C<sub>5</sub>H<sub>5</sub>N<sub>5</sub>O</td>
        <td name="td2">151.13 g/mol</td>
        <td name="td3">73-40-5</td>
        <td name="td4">2080 mg/L (at 37 °C)</td>
        <td name="td5"><a href="https://pubchem.ncbi.nlm.nih.gov/compound/135398634" target="_blank" style="color:#520049"><b>135398634</b></a></td>
        <td name="td6"><a href="https://go.drugbank.com/drugs/DB02377" target="_blank" style="color:#520049"><b>DB02377</b></a></td>
      </tr>
	  </tbody>
  </table>
<div style="display: flex; justify-content: center;"></div>
<img src="/images/SELEX_ligand/XBA_aptamer_SELEX_ligand.svg" alt="drawing" style="width:1000px;height:400px;border:solid 1px #efefef;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>
<br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;" >
  <thead>
      <tr>
        <th onclick="sortTable(1)">Ligand</th>
        <th onclick="sortTable(2)">Sequence</th>
        <th onclick="sortTable(3)">Affinity</th>
      </tr>
  </thead>
    <tbody>
      <tr>
        <td name="td1">Xanthine</td>
        <td name="td2">5'GGCACGUGUAUUACCCUAGUGGUCGACGUGCC3'</td>
        <td name="td3">3.3 µM</td>
      </tr>
      <tr>
        <td name="td1">Guanine</td>
        <td name="td2">5'GGCACGUGUAUUACCCUAGUGGUCGACGUGCC3'</td>
        <td name="td3">1.3 µM</td>
      </tr>
	  </tbody>
  </table>
<br>



<p class="blowheader_box">Similar compound</p>                    
<font><p>We screened the compounds with great similarity to  by using the ZINC database and showed some of the compounds' structure diagrams. For some CAS numbers not available, we will supplement them with Pubchem CID. For another compound, we used a similar compound query method from the PubChem database.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
      <thead>
      <tr>
        <th onclick="sortTable(5)">Source ligand</th>
        <th onclick="sortTable(0)">Zinc_id</th>
        <th onclick="sortTable(1)">Named</th>
        <th onclick="sortTable(2)">CAS</th>
        <th onclick="sortTable(3)">Pubchem CID</th>
        <th onclick="sortTable(4)">Structure</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0">Xanthine (2,6-dioxypurine)</td>
        <td name="td1">ZINC13517187</td>
        <td name="td2">Xanthine</td>
        <td name="td3">69-89-6</td>
        <td name="td4">1188</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound1.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Xanthine (2,6-dioxypurine)</td>
        <td name="td1">ZINC89203233</td>
        <td name="td2">1,7-Dihydroimidazo[4,5-c]pyridine-4,6-dione</td>
        <td name="td3">73771-32-1</td>
        <td name="td4">22086935</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound2.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Xanthine (2,6-dioxypurine)</td>
        <td name="td1">ZINC95922756</td>
        <td name="td2">7-amino-1H-imidazo[4,5-b]pyridin-5(4H)-one</td>
        <td name="td3">37660-70-1</td>
        <td name="td4">45079066</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound3.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Xanthine (2,6-dioxypurine)</td>
        <td name="td1">ZINC84403374 </td>
        <td name="td2">Isoguanine</td>
        <td name="td3">3373-53-3</td>
        <td name="td4">76900</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound4.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Xanthine (2,6-dioxypurine)</td>
        <td name="td1">ZINC17174075</td>
        <td name="td2">Hypoxanthine, 2-fluoro-</td>
        <td name="td3">1480-90-6</td>
        <td name="td4">135418579</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound5.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Xanthine (2,6-dioxypurine)</td>
        <td name="td1">ZINC238514582</td>
        <td name="td2">6-Chloro-1H-purin-2(3H)-one</td>
        <td name="td3">1146697-79-1</td>
        <td name="td4">101216963</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound6.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC895129</td>
        <td name="td2">Guanine</td>
        <td name="td3">73-40-5</td>
        <td name="td4">135398634</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound7.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC14982924</td>
        <td name="td2">2-Methyl-7H-purin-6-ol</td>
        <td name="td3">5167-18-0</td>
        <td name="td4">135449674</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound8.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC9974955</td>
        <td name="td2">2-Bromohypoxanthine</td>
        <td name="td3">87781-93-9</td>
        <td name="td4">135413991</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound9.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC100004527</td>
        <td name="td2">7-Deazaguanine</td>
        <td name="td3">7355-55-7</td>
        <td name="td4">135408714</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound10.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC16939736</td>
        <td name="td2">5-amino-6H-[1,3]thiazolo[5,4-d]pyrimidin-7-one</td>
        <td name="td3">nan</td>
        <td name="td4">335016</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound11.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC18102838</td>
        <td name="td2">2-Amino-3,7-dihydropyrrolo[3,2-d]pyrimidin-4-one</td>
        <td name="td3">nan</td>
        <td name="td4">135857139</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound12.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
            
      <tr>
        <td name="td0">Guanine</td>
        <td name="td1">ZINC116890271</td>
        <td name="td2">5-amino-6H-[1,3]oxazolo[5,4-d]pyrimidin-7-one</td>
        <td name="td3">nan</td>
        <td name="td4">49870045</td>
        <td name="td5"><img src="/images/Similar_compound/XBA_Simi_compound13.svg" alt="drawing" style="width:500px"  px="" /></td>
      </tr>
    </tbody>
  </table>
<br>
<br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] An RNA aptamer to the xanthine/guanine base with a distinctive mode of purine recognition.</strong></font><br/>
Kiga, D., Futamura, Y., Sakamoto, K., & Yokoyama, S. <br/>
<a href="https://pubmed.ncbi.nlm.nih.gov/9512549/" target="_blank" style="color:#520049"> Nucleic acids research, 26(7), 1755–1760 (1998)</a>
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