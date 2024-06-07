---
title: "Riboaptamer - RNA-Aptamers"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /Ribocentre-aptamer/
---
<html lang="en">
<head>
<!--set sort order in table header begin-->
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title>Aptamer applications</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <!--set sort order in table header finish-->
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
   .box_style{
    background: #ffffff;
  }
  h2{
    font-size:20px;
  }
/* 按钮容器样式 */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
      overflow:auto
    }
    /* 按钮样式 */
    .button {
      display: block;
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      background-color: #ffffff;
      color: #520049;
      text-decoration: none;
      font-size: 16px;
      border: 1px solid #520049;
      border-radius: 5px;
    }
    /* 鼠标悬停样式 */
    .button:hover {
      background-color: #c9c5c5;
      cursor: pointer;
    }
    /* 样式表格 */
    .table-style1 {
        border: 2px solid #ffffff;
        border: 2px solid #ffffff;
		    border: 2px solid #ffffff;
		    border-radius: 5px;
		    background-color: #fff;
		    border-radius: 5px;
        }
		  .table-style1 th {
        background-color: #520049;
        background-color: #520049;
        background-color: #520049;
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
		  .table-style1 td {
		    background-color: #ffffff;
		    background-color: #f9f9f9;
		    background-color: #f9f9f9;
		    }		
		  .table-style1 th, .table-style1 td {
		  padding: 10px 10px;
		}
    table.dataTable.no-footer {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
    /* 隐藏所有 sheet */
    .sheet {
      display: all;
      overflow:auto
    }
    /* Style the search box */
  #searchBox {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 1px;
    width: 300px;
  }
  /* Style the search box when it has focus */
  #searchBox:focus {
    outline: none;
    border-color: #efefef;
  }
  /* Style the placeholder text */
  #searchBox::placeholder {
    font-size: 16px;
  }
  button, input, optgroup, select, textarea {
    color: #000000;
    font: inherit;
    /* font-weight: bold; */
    margin: 0;
}
  /* 搜索框和下载框水平布局 */
    .form-container {
      display: flex;
      align-items: center;
      overflow:auto
    }
    .form-container input {
      margin-right: 10px;
    }
    /* 下载框位置设置 */
    .form-container select {
      margin-left: auto;
      padding: 10px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 4px;
      width: 300px;
    }
    .button.clicked {
    background-color: #999;
}
  </style>
</head>


<body onload="showSheet('sheet1')">
<h1 class="post-title" itemprop="name headline">RNA Aptamers</h1>
    
RNA Aptamers are nucleic acid molecules that mimic antibodies by folding into complex 3D shapes that bind to specific targets. Although some aptamers exist naturally as the ligand-binding elements of riboswitches, most are generated in vitro and can be tailored for a specific target.
<br>
<br>
<br>
        
<p class="header_box" >Statistical information </p>
<iframe src="../plotly_pie.html" class="rounded-iframe" width="100%" height="600" frameborder="0"></iframe>





<!--img src="/images/aptamers/Aptamers_classification.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive"-->
<div style="display: flex; justify-content: center;">   
</div>

<!--a href="/downloads/riboswitches_page/Classification_of_Riboswitches.pdf" target="_blank" download="Classification_of_Riboswitches.pdf"><button class="btn btn-secondary" style="color:#520049" ><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download FIGURE</button></a-->   

<!--p>For more detailed information about each Aptamer, please browse the table below.</p-->
<br>



<p class="header_box" >Detail information</p>    
This section lists all the experimentally validated Aptamers.
<br><br>
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
  <!--select id="downloadOptions">
    <option value="" disabled selected>Select an option</option>
    <option value="/downloads/RNA-aptamers_page/Small_molecules.xlsx">Small molecules</option>
     <option value="/downloads/RNA-aptamers_page/Proteins.xlsx">Proteins</option>
      <option value="/downloads/RNA-aptamers_page/Nucleic_acids.xlsx">Nucleic acids</option>
      <option value="/downloads/RNA-aptamers_page/Others.xlsx">Others</option>
    <option value="/downloads/RNA-aptamers/All_tables.xlsx">all table in this page </option>
  </select-->
  <!-- Download button -->
  <!--button class="button" onclick="downloadExcel()">Download</button-->
</div>
  <!-- 按钮 -->
  <!--div class="button-container">
      <button class="button" onclick="showSheet('sheet1')">Small molecules</button>
      <button class="button" onclick="showSheet('sheet2')">Proteins</button>
      <button class="button" onclick="showSheet('sheet3')">Nucleic acids</button>
      <button class="button" onclick="showSheet('sheet3')">Others</button>
  </div-->
        
<div id="sheet1" class="sheet">
    <h2>Small molecules</h2>
    <table id="cfttable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ATP-aptamer" target="_blank" style="color:#520049"><b>ATP aptamer</b></a></td>
        <td name="td2">ATP,<br>adenosine</td>
        <td name="td3">ATP (Adenosine 5'-triphosphate) is an important substance for energy storage and metabolism in the body, which provides energy for metabolism and plays a role as a coenzyme in cells. ATP is an important endogenous signal molecule in immunity and inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7687750/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1AM0" target="_blank" style="color:#520049"><b>1AM0</b> </a>(AMP)<br><a href="https://www.rcsb.org/structure/1RAW" target="_blank" style="color:#520049"><b>1RAW</b> </a>(AMP)</td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B4-25-aptamer" target="_blank" style="color:#520049"><b>B4-25 aptamer</b></a></td>
        <td name="td2">Reactive Blue 4</td>
        <td name="td3">Reactive Blue 4 is an anthraquinone dye, as a single colorimetric chemosensor for sequential determination of multiple analytes with different optical responses in aqueous media. Reactive Blue 4 is phytotoxic, cytotoxic and genotoxic.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B4-25-aptamer" target="_blank" style="color:#520049"><b>CB-42 aptamer</b></a></td>
        <td name="td2">Cibacron Blue 3GA</td>
        <td name="td3">Cibacron Blue 3G-A is an anthraquinone dye, inhibits the R46 β-lactamase with a Ki value of 1.2 uM.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Pepper-aptamer" target="_blank" style="color:#520049"><b>Pepper aptamer</b></a></td>
        <td name="td2">(4-((2-hydroxyethyl)(methyl)amino)-benzylidene)-cyanophenylacetonitrile (HBC)</td>
        <td name="td3">HBC ((4-((2-hydroxyethyl)(methyl)amino)-benzylidene)-cyanophenyl-acetonitrile) is a synthetic dye similar to GFP fluorophores, with a structurally rigid electron acceptor and a strong electron donor.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/31548726/" target="_blank" style="color:#520049"><b>2019</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7EOH" target="_blank" style="color:#520049"><b>7EOH</b></a><br><a href="https://www.rcsb.org/structure/7SZU" target="_blank" style="color:#520049"><b>7SZU</b></a><br><a href="https://www.rcsb.org/structure/7U0Y" target="_blank" style="color:#520049"><b>7U0Y</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FMN-aptamer" target="_blank" style="color:#520049"><b>FMN aptamer</b></a></td>
        <td name="td2">FMN</td>
        <td name="td3">Flavin mononucleotide (FMN)  is a cofactor that mediates oxidation–reduction reactions when bound as a prosthetic group in flavoproteins.The chromophore (isoalloxazine ring) of FMN serves as a transient carrier of a pair of hydrogen atoms removed from the substrate molecule in redox reactions catalyzed by these enzymes.</td>
        <td name="td4"><a href="https://onlinelibrary.wiley.com/doi/10.1002/anie.199410841" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1FMN" target="_blank" style="color:#520049"><b>1FMN</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GTP-aptamer" target="_blank" style="color:#520049"><b>GTP aptamer</b></a></td>
        <td name="td2">GTP</td>
        <td name="td3">Guanosine-5'-triphosphate (GTP) is a purine nucleoside triphosphate. It is one of the building blocks needed for the synthesis of RNA during the transcription process. Its structure is similar to that of the guanosine nucleoside, the only difference being that nucleotides like GTP have phosphates on their ribose sugar. GTP has the guanine nucleobase attached to the 1' carbon of the ribose and it has the triphosphate moiety attached to ribose's 5' carbon.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2AU4" target="_blank" style="color:#520049"><b>2AU4</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tetracycline-aptamer" target="_blank" style="color:#520049"><b>Tetracycline aptamer</b></a></td>
        <td name="td2">Tetracycline</td>
        <td name="td3">Tetracyclines are a group of broad-spectrum antibiotic compounds that have a common basic structure and are either isolated directly from several species of Streptomyces bacteria or produced semi-synthetically from those isolated compounds.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>2001</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3EGZ" target="_blank" style="color:#520049"><b>3EGZ</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Corn-aptamer" target="_blank" style="color:#520049"><b>Corn aptamer</b></a></td>
        <td name="td2">DFHO</td>
        <td name="td3">DFHO(3,5-difluoro-4-hydroxybenzylidene imidazolinone-2-oxime) is a Corn homologous ligand that fluoresces yellow upon excitation and is used to image RNA in living cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28945233/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://doi.org/10.2210/pdb5BJP/pdb" target="_blank" style="color:#520049"><b>5BJP</b></a><br><a href="https://www.rcsb.org/structure/5BJO" target="_blank" style="color:#520049"><b>5BJO</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NeomycinB-RNA-aptamer" target="_blank" style="color:#520049"><b>NeomycinB RNA aptamer</b></a></td>
        <td name="td2">Aminoglycoside antibiotic</td>
        <td name="td3">Neomycin is an aminoglycoside antibiotic that displays bactericidal activity against gram-negative aerobic bacilli and some anaerobic bacilli where resistance has not yet arisen. It is generally not effective against gram-positive bacilli and anaerobic gram-negative bacilli. Neomycin comes in oral and topical formulations, including creams, ointments, and eyedrops. Neomycin belongs to the aminoglycoside class of antibiotics that contain two or more amino sugars connected by glycosidic bonds.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9383458/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NEM" target="_blank" style="color:#520049"><b>1NEM</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Streptomycin-RNA-Aptamer" target="_blank" style="color:#520049"><b>Streptomycin-RNA Aptamer</b></a></td>
        <td name="td2">Streptomycin</td>
        <td name="td3">Streptomycin is an antibiotic medication used to treat a number of bacterial infections, including tuberculosis, Mycobacterium avium complex, endocarditis, brucellosis, Burkholderia infection, plague, tularemia, and rat bite fever. For active tuberculosis it is often given together with isoniazid, rifampicin, and pyrazinamide. It is administered by injection into a vein or muscle.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NTA" target="_blank" style="color:#520049"><b>1NTA</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Theophylline-aptamer" target="_blank" style="color:#520049"><b>Theophylline-aptamer(TCT8-40)</b></a></td>
        <td name="td2">Theophylline</td>
        <td name="td3">Theophylline, also known as 1,3-dimethylxanthine, is a drug that inhibits phosphodiesterase and blocks adenosine receptors. It is used to treat chronic obstructive pulmonary disease (COPD) and asthma. It is pharmacology is similar to other methylxanthine drugs (e.g., theobromine and caffeine).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7510417/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EHT" target="_blank" style="color:#520049"><b>1EHT</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tobramycin-RNA-aptamer" target="_blank" style="color:#520049"><b>Tobramycin-RNA aptamer</b></a></td>
        <td name="td2">Tobramycin</td>
        <td name="td3">Tobramycin is an aminoglycoside antibiotic derived from Streptomyces tenebrarius that is used to treat various types of bacterial infections, particularly Gram-negative infections. Tobramycin works by binding to a site on the bacterial 30S and 50S ribosome, preventing formation of the 70S complex.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1TOB" target="_blank" style="color:#520049"><b>1TOB</b></a><br><a href="https://www.rcsb.org/structure/2TOB" target="_blank" style="color:#520049"><b>2TOB</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/5HTP-aptamer" target="_blank" style="color:#520049"><b>5HTP-aptamer</b></a></td>
        <td name="td2">5-Hydroxytryptophan (5HTP)</td>
        <td name="td3">5-Hydroxytryptophan (5HTP), also known as oxitriptan, is a naturally occurring amino acid and chemical precursor as well as a metabolic intermediate in the biosynthesis of the neurotransmitter serotonin.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28092358/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5KPY" target="_blank" style="color:#520049"><b>5KPY</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Riboflavin-aptamer" target="_blank" style="color:#520049"><b>Riboflavin aptamer</b></a></td>
        <td name="td2">Flavin mononucleotide(FMN)<br>Riboflavin(Rb)<br>flavin adenine dinucleotide(FAD)</td>
        <td name="td3">Riboflavin is d-Ribitol in which the hydroxy group at position 5 is substituted by a 7,8-dimethyl-2,4-dioxo-3,4-dihydrobenzo[g]pteridin-10(2H)-yl moiety. It is a nutritional factor found in milk, eggs, malted barley, liver, kidney, heart, and leafy vegetables, but the richest natural source is yeast. The free form occurs only in the retina of the eye, in whey, and in urine; its principal forms in tissues and cells are as flavin mononucleotide and flavin-adenine dinucleotide. It has a role as a photosensitizing agent, a food colouring, an Escherichia coli metabolite, a mouse metabolite, a cofactor, a plant metabolite, a human urinary metabolite, an anti-inflammatory agent, a fundamental metabolite and an antioxidant. It is a vitamin B2 and a flavin. It is a conjugate acid of a riboflavin(1-).from-ChEBI</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/36097297/" target="_blank" style="color:#520049"><b>2022</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7RWR" target="_blank" style="color:#520049"><b>7RWR</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Amino Acids & Peptides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Citrulline-aptamer" target="_blank" style="color:#520049"><b>Citrulline aptamer</b></a></td>
        <td name="td2">Citrulline</td>
        <td name="td3">Citrulline is a metabolic intermediate within the urea cycle, which is the pathway by which mammals excrete ammonia by converting it into urea. Citrulline is also produced as a byproduct of the enzymatic production of nitric oxide from the amino acid arginine, catalyzed by nitric oxide synthase. In the yeast species Saccharomyces cerevisiae, citrulline is a metabolic intermediate in the latter, cytosolic half of the arginine biosynthesis pathway.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1KOD" target="_blank" style="color:#520049"><b>1KOD</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Amino Acids & Peptides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Citrulline-aptamer" target="_blank" style="color:#520049"><b>Arginine aptamer</b></a></td>
        <td name="td2">Arginine</td>
        <td name="td3">Arginine is the amino acid with the formula (H2N)(HN)CN(H)(CH2)3CH(NH2)CO2H. The molecule features a guanidino group appended to a standard amino acid framework. At physiological pH, the carboxylic acid is deprotonated (−CO2−) and both the amino and guanidino groups are protonated, resulting in a cation. Only the l-arginine (symbol Arg or R) enantiomer is found naturally. Arg residues are common components of proteins. It is encoded by the codons CGU, CGC, CGA, CGG, AGA, and AGG. The guanidine group in arginine is the precursor for the biosynthesis of nitric oxide. Like all amino acids, it is a white, water-soluble solid.--from wikipedia.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9631062/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1KOC" target="_blank" style="color:#520049"><b>1KOC</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Vitamin-B12-aptamer" target="_blank" style="color:#520049"><b>Vitamin B12-aptamer</b></a></td>
        <td name="td2">Cyanocobalamin (vitamin B12)</td>
        <td name="td3">Cyanocobalamin (commonly known as Vitamin B12) is a highly complex, essential vitamin, owing its name to the fact that it contains the mineral, cobalt. This vitamin is produced naturally by bacteria, and is necessary for DNA synthesis and cellular energy production. Vitamin B12 has many forms, including the cyano-, methyl-, deoxyadenosyl- and hydroxy-cobalamin forms. The cyano form, is the most widely used form in supplements and prescription drugs,. Several pharmaceutical forms of cyanocobalamin have been developed, including the tablet, injection, and nasal spray forms,,.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1ET4" target="_blank" style="color:#520049"><b>1ET4</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/DIR2s-apt-aptamer" target="_blank" style="color:#520049"><b>DIR2s-apt aptamer</b></a></td>
        <td name="td2">OTB-SO3<br>OTB-SO3, Fab</td>
        <td name="td3">OTB (3-Methyl-2-[(3-methyl-1,3-benzothiazol-3-ium-2-yl)methylidene]-1,3-benzoxazole) is a cyanine dye that fluoresces blue when excited.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28644615/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6DB9" target="_blank" style="color:#520049"><b>6DB9 (OTB-SO3)</b></a><br><br><a href="https://www.rcsb.org/structure/6DB8" target="_blank" style="color:#520049"><b>6DB8 (OTB-SO3, Fab)</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Beetroot-aptamer(ThT)" target="_blank" style="color:#520049"><b>Beetroot aptamer(ThT)</b></a></td>
        <td name="td2">ThT<br>DFHO<br>DFAME</td>
        <td name="td3">ThT (Thioflavin T) are fluorescent dyes used for histology staining and biophysical studies of protein aggregation and investigate amyloid formation. They are also used in biophysical studies of the electrophysiology of bacteria.<br>DFHO (3,5-difluoro-4-hydroxybenzylidene imidazolinone-2-oxime) is a Corn homologous ligand that fluoresces yellow upon excitation and is used to image RNA in living cells.<br>DFAME is a red fluorophore. Beetroot and Corn are dimeric fluorogenic RNA aptamers that can bind to DFAME to form Beetroot-DFAME (Kd=460 nM) and Corn-DFAME (Kd= 3600 nM). Beetroot-DFAME (Kd=460 nM) and Corn-DFAME can be used to form RNA assemblies in living cells. Creating RNA assemblies can be used for the study of RNA Nanostructures. DNA/RNA Nanostructures would be useful in cell and gene therapy (CGT) research.----From MedChemExpress</td>
        <td name="td4"><a href="https:" target="_blank" style="color:#520049"><b>2022</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/8EYW" target="_blank" style="color:#520049"><b>8EYW</b></a><br><a href="https://www.rcsb.org/structure/8EYV" target="_blank" style="color:#520049"><b>8EYV</b></a><br><a href="https://www.rcsb.org/structure/8EYU" target="_blank" style="color:#520049"><b>8EYU</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Beetroot-aptamer(DFAME)" target="_blank" style="color:#520049"><b>Beetroot aptamer(DFAME)</b></a></td>
        <td name="td2">DFAME<br>DFHO<br>ThT</td>
        <td name="td3">DFAME is a red fluorophore. Beetroot and Corn are dimeric fluorogenic RNA aptamers that can bind to DFAME to form Beetroot-DFAME (Kd=460 nM) and Corn-DFAME (Kd= 3600 nM). Beetroot-DFAME (Kd=460 nM) and Corn-DFAME can be used to form RNA assemblies in living cells. Creating RNA assemblies can be used for the study of RNA Nanostructures. DNA/RNA Nanostructures would be useful in cell and gene therapy (CGT) research.----From MedChemExpress<br>DFHO (3,5-difluoro-4-hydroxybenzylidene imidazolinone-2-oxime) is a Corn homologous ligand that fluoresces yellow upon excitation and is used to image RNA in living cells.<br>ThT (Thioflavin T) are fluorescent dyes used for histology staining and biophysical studies of protein aggregation and investigate amyloid formation. They are also used in biophysical studies of the electrophysiology of bacteria.----From Wikipedia</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/35294188/" target="_blank" style="color:#520049"><b>2022</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/8EYU" target="_blank" style="color:#520049"><b>8EYU</b></a><br><a href="https://www.rcsb.org/structure/8EYV" target="_blank" style="color:#520049"><b>8EYV</b></a><br><a href="https://www.rcsb.org/structure/8F0N" target="_blank" style="color:#520049"><b>8F0N</b></a><br><a href="https://www.rcsb.org/structure/8EYW" target="_blank" style="color:#520049"><b>8EYW</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Chili-aptamer" target="_blank" style="color:#520049"><b>Chili aptamer</b></a></td>
        <td name="td2">DMHBI (4-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-1,2-dimethyl-4,5-dihydro-1H-imidazol-5-one)<br>DMHBO+</td>
        <td name="td3">DMHBI (4-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-1,2-dimethyl-4,5-dihydro-1H-imidazol-5-one) is predominantly found in the phenolic form, the brighter DMFBI mimics EGFP and is anionic under standard conditions. The DMFBI-RNA complex has been called Spinach, it is the first fluorescent RNA tag that is both selective and non-toxic. It only fluoresces when bound to RNA, is resistant to photobleaching and has been used to follow RNA tagged molecules as they move through cells.----From Green Fluorescent Protein<br>DMHBO+ ([4-[(2Z,4Z)-4-[(4-hydroxy-3,5-dimethoxyphenyl)methylidene]-2-(nitrosomethylidene)-5-oxoimidazolidin-1-yl]phenyl]-trimethylazanium) is a cationic chromophore that binds to the Chili aptamer with a Kd of 12 nM. The Chili-DMHBO+ complex is an ideal fluorescence donor for FRET to the rhodamine dye Atto 590, suitable for imaging RNA in cells. Ex/Em=456/592 nm.----MedChemExpress</td>
        <td name="td4"><a href="https:" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7OAW" target="_blank" style="color:#520049"><b>7OAW (DMHBI+)</b></a><br><br><a href="https://www.rcsb.org/structure/7OAX" target="_blank" style="color:#520049"><b>7OAX</b></a><br><br><a href="https://www.rcsb.org/structure/7OA3" target="_blank" style="color:#520049"><b>7OA3</b></a><br><br><a href="https://www.rcsb.org/structure/7OAV" target="_blank" style="color:#520049"><b>7OAV (DMHBO+)</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TMR-aptamer" target="_blank" style="color:#520049"><b>TMR aptamer</b></a></td>
        <td name="td2">TMR (Tetramethylrhodamine)</td>
        <td name="td3">TMR (tetramethylrhodamine) is a rhodamine in which four hydrogens have been replaced by methyl groups. Forms such as tetramethylrhodamine dextran are often used as fluorescent tracer dyes in cell research.----From Wiktionary</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20159999/" target="_blank" style="color:#520049"><b>2010</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6GZK" target="_blank" style="color:#520049"><b>6GZK</b></a><br><a href="https://www.rcsb.org/structure/6GZR" target="_blank" style="color:#520049"><b>6GZR</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-aptamer(TO1-biotin)" target="_blank" style="color:#520049"><b>Mango aptamer(TO1-biotin)</b></a></td>
        <td name="td2">TO1-Biotin</td>
        <td name="td3">TO1 (Thiazole Orange) is an asymmetric cyanine fluorophore, which contains a benzothiazole ring covalently linked to a quinoline ring via a monomethine bridge.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5V3F" target="_blank" style="color:#520049"><b>5V3F</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Mango-III-aptamer(YO3)" target="_blank" style="color:#520049"><b>Mango-III aptamer(YO3)</b></a></td>
        <td name="td2">YO3 (Oxazole yellow 3)</td>
        <td name="td3">YO3 (Oxazole yellow 3) is a synthetic fluorescent small molecule whose spectral properties are very similar to Texas Red. YO3-biotin fluoresces with comparable intensities when bound in either the Mango or the Spinach construct, similarly to TO1-biotin. DFHBI-1T outcompetes YO3-biotin bound in Spinach, whereas YO3-biotin is unable to outcompete DFHBI-1T bound in Spinach.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>2014</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6UP0" target="_blank" style="color:#520049"><b>6UP0</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-aptamer" target="_blank" style="color:#520049"><b>Spinach aptamer</b></a></td>
        <td name="td2">DFHBI ((Z)-4-(3,5-difluoro- 4-hydroxybenzylidene)-1,2-dimethyl-1H-imidazol-5(4H)-one)</td>
        <td name="td3">DFHBI ((Z)-4-(3,5-difluoro- 4-hydroxybenzylidene)-1,2-dimethyl-1H-imidazol-5(4H)-one) is a small molecule that resembles the chromophore of green fluorescent protein (GFP). Spinach and DFHBI are essentially nonfluorescent when unbound, whereas the Spinach-DFHBI complex is brightly fluorescent both in vitro and in living cells.----From MedChemExpress</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4TS0" target="_blank" style="color:#520049"><b>4TS0</b></a><br><a href="https://www.rcsb.org/structure/4TS2" target="_blank" style="color:#520049"><b>4TS2</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/MG-aptamer" target="_blank" style="color:#520049"><b>MG aptamer</b></a></td>
        <td name="td2">MG (Malachite green)</td>
        <td name="td3">MG (Malachite green) is an organic compound that is used as a dyestuff and controversially as an antimicrobial in aquaculture. Malachite green is traditionally used as a dye for materials such as silk, leather, and paper. Despite its name the dye is not prepared from the mineral malachite; the name just comes from the similarity of color.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10339553/" target="_blank" style="color:#520049"><b>1999</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1Q8N" target="_blank" style="color:#520049"><b>1Q8N</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Biotin-aptamer" target="_blank" style="color:#520049"><b>Biotin aptamer</b></a></td>
        <td name="td2">Biotin</td>
        <td name="td3">Biotin is one of the vitamin B groups, also known as vitamin H, vitamin B7, coenzyme R (Coenzyme R) and so on. Biotin is abundant in liver, kidney, yeast and milk, and it is an important factor for organisms to fix carbon dioxide. It is easy to combine with protein Avidin in egg white. Eating a large amount of raw protein can hinder the absorption of biotin and lead to biotin deficiency, such as depilation, weight loss and dermatitis. Because its deficiency rarely occurs, it is often called biotin directly.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9772167/" target="_blank" style="color:#520049"><b>1998</b></a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1F27" target="_blank" style="color:#520049"><b>1F27</b></a></td>
      </tr>    
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-RNA-aptamer" target="_blank" style="color:#520049"><b>Aptamer 24-2-min(Spinach)</b></a></td>
        <td name="td2">DFHBI and Fab</td>
        <td name="td3">DFHBI (3,5-difluoro-4-hydroxybenzylidene imidazolinone) is a small molecule that resembles the chromophore of green fluorescent protein (GFP) for imaging RNA in living cells.. Spinach and DFHBI are essentially nonfluorescent when unbound, whereas the Spinach-DFHBI complex is brightly fluorescent both in vitro and in living cells.DFHBI fluorescence is activated by binding to Spinach2 or Broccoli aptamers. Exhibits peak excitation maxima of 447 nm and peak fluorescence emission of 501 nm when bound to Spinach2.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4KZD" target="_blank" style="color:#520049"><b>4KZD</b></a><br><a href="https://www.rcsb.org/structure/4Q9Q" target="_blank" style="color:#520049"><b>4Q9Q</b></a><br><a href="https://www.rcsb.org/structure/4KZD" target="_blank" style="color:#520049"><b>4KZD</b></a><br><a href="https://www.rcsb.org/structure/4Q9R" target="_blank" style="color:#520049"><b>4Q9R</b></a></td>
      </tr>    
	  </tbody>
  </table>
</div>        
    


<div id="sheet5" class="sheet">
    <h2>Proteins</h2>
    <table id="eletable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Other</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/bacteriophage-MS2-coat-protein-aptamer" target="_blank" style="color:#520049"><b>Bacteriophage MS2 coat protein-aptamer</b></a></td>
        <td name="td2">Bacteriophage MS2 coat protein</td>
        <td name="td3">The coat protein of the RNA bacteriophage MS2 binds a specific stem-loop structure in viral RNA to accomplish encapsidation of the genome and translational repression of replicase synthesis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1469719/" target="_blank" style="color:#520049"><b>1992</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6MSF" target="_blank" style="color:#520049"><b>6MSF</b> </a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hfq-aptamer" target="_blank" style="color:#520049"><b>Hfq aptamer</b></a></td>
        <td name="td2">Hfq</td>
        <td name="td3">Hfq binds to the loop structure formed by the AG repeat sequence, which regulates gene expression.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22053080/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3HSB" target="_blank" style="color:#520049"><b>3HSB</b></a><br><a href="https://www.rcsb.org/structure/3AHU" target="_blank" style="color:#520049"><b>3AHU</b></a></td>
      </tr>    
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>Lys1.2minF aptamer</b></a></td>
        <td name="td2">HEWL(lysozyme)</td>
        <td name="td3">It is a powerful enzyme found in abundance in tears, saliva, and human milk. In humans, it is encoded in the LYZ gene. Since it is a small, easily available, and highly stable protein, it has been subject to extensive research regarding its function and structure. Lysozyme acts as a non-specific defense against bacteria and fungi. It is a component of the innate immune system, and is an important part of an infant's diet to ward off diarrhea. It is an enzyme known for its ability to degrade the polysaccharide architecture of many kinds of cell walls, normally for the purpose of protection against bacterial infection.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4M6D" target="_blank" style="color:#520049"><b>4M6D</b></a></td>
      </tr>    
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>Lys1.2minE apatmer</b></a></td>
        <td name="td2">HEWL(lysozyme)</td>
        <td name="td3">It is a powerful enzyme found in abundance in tears, saliva, and human milk. In humans, it is encoded in the LYZ gene. Since it is a small, easily available, and highly stable protein, it has been subject to extensive research regarding its function and structure. Lysozyme acts as a non-specific defense against bacteria and fungi. It is a component of the innate immune system, and is an important part of an infant's diet to ward off diarrhea. It is an enzyme known for its ability to degrade the polysaccharide architecture of many kinds of cell walls, normally for the purpose of protection against bacterial infection.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4M4O" target="_blank" style="color:#520049"><b>4M4O</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>Lys1.2minE apatmer</b></a></td>
        <td name="td2">HEWL(lysozyme)</td>
        <td name="td3">It is a powerful enzyme found in abundance in tears, saliva, and human milk. In humans, it is encoded in the LYZ gene. Since it is a small, easily available, and highly stable protein, it has been subject to extensive research regarding its function and structure. Lysozyme acts as a non-specific defense against bacteria and fungi. It is a component of the innate immune system, and is an important part of an infant's diet to ward off diarrhea. It is an enzyme known for its ability to degrade the polysaccharide architecture of many kinds of cell walls, normally for the purpose of protection against bacterial infection.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www. rcsb. org/structure/4M4O" target="_blank" style="color:#520049"><b>4M4O</b></a></td>
      </tr>    
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-REV-peptide-aptamer" target="_blank" style="color:#520049"><b>HIV-1 REV peptide-aptamer</b></a></td>
        <td name="td2">HIV-1 REV peptide</td>
        <td name="td3">The HIV-1 protein Rev controls a key step in viral replication by mediating nuclear output of both unspliced and single-spliced viral mRNAs.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1ULL" target="_blank" style="color:#520049"><b>1ULL</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Others</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Bovine-prion-protein(bPrP)-aptamer" target="_blank" style="color:#520049"><b>Bovine prion protein(bPrP) aptamer</b></a></td>
        <td name="td2">Bovine prion protein</td>
        <td name="td3">Normal cellular form of prion protein (PrP<sub>C</sub>) change into abnormal form (PrP<sub>Sc</sub>) and causes anti-prion, prevent prion and Alzheimer's disease. There are the similar structures between 2RSK and 2RU7, so only the 2RU7 with last literature is chosen.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2RU7" target="_blank" style="color:#520049"><b>2RU7</b></a><br><a href="https://www.rcsb.org/structure/2RSK" target="_blank" style="color:#520049"><b>2RSK</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GlnRs-aptamer" target="_blank" style="color:#520049"><b>GlnRs aptamer</b></a></td>
        <td name="td2">Glutaminyl-tRNA synthetase (GlnRs)</td>
        <td name="td3">GlnRs (Glutaminyl-tRNA synthetase) is one of the members of aminoacyl tRNA synthetase. It forms a sub complex with arginine tRNA synthetase (RRS) and P43 (a cofactor of the aminoacyl tRNA synthetase complex ) in the complex, and has a close interaction with RRS and P43, with weaker interaction with other aminoacyl tRNA synthetases.</td>
        <td name="td4"><a href="https://www.proquest.com/openview/6857e35043f04e11f53714d80cdc4dcf/1?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EXD" target="_blank" style="color:#520049"><b>1EXD</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/eIF4A-aptamer" target="_blank" style="color:#520049"><b>(eIF4A)-aptamer</b></a></td>
        <td name="td2">mammalian translation initiation factor 4A (eIF4A)</td>
        <td name="td3">The apparent role of mammalian translation initiation factor 4A (eIF4A) is to facilitate the "melting" of secondary structure present in the 5′ untranslated region of mRNAs that impedes translation initiation, finally controlling the translation initiation. RNA aptamers to initiation factor 4A helicase hinder cap-dependent translation by blocking ATP hydrolysis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1XWP" target="_blank" style="color:#520049"><b>1XWP</b></a><br><a href="https://www.rcsb.org/structure/1XWU" target="_blank" style="color:#520049"><b>1XWU</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RBA-14-aptamer" target="_blank" style="color:#520049"><b>RBA-14 aptamer</b></a></td>
        <td name="td2">Rev<sup>93</sup></td>
        <td name="td3">HIV-1 Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6CF2" target="_blank" style="color:#520049"><b>6CF2</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/GRK2-aptamer" target="_blank" style="color:#520049"><b>GRK2 aptamer</b></a></td>
        <td name="td2">G-protein-coupled receptor kinase 2 (GRK2)</td>
        <td name="td3">G-protein-coupled receptor kinase 2 (GRK2) is an enzyme that in humans is encoded by the ADRBK1 gene. GRK2 was initially called Beta-adrenergic receptor kinase (βARK or βARK1), and is a member of the G protein-coupled receptor kinase subfamily of the Ser/Thr protein kinases that is most highly similar to GRK3(βARK2).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3UZT" target="_blank" style="color:#520049"><b>3UZT</b></a><br><a href="https://www.rcsb.org/structure/3UZS" target="_blank" style="color:#520049"><b>3UZS</b></a></td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Tat-aptamer" target="_blank" style="color:#520049"><b>Tat aptamer</b></a></td>
        <td name="td2">HIV Tat peptides</td>
        <td name="td3">In molecular biology, Tat is a protein that is encoded for by the tat gene in HIV-1. Tat is a regulatory protein that drastically enhances the efficiency of viral transcription. Tat stands for "Trans-Activator of Transcription". The protein consists of between 86 and 101 amino acids depending on the subtype. Tat vastly increases the level of transcription of the HIV dsDNA.</td>
        <td name="td4"><a href="https://onlinelibrary.wiley.com/doi/10.1046/j.1365-2443.2000.00330.x" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NBK" target="_blank" style="color:#520049"><b>1NBK</b></a><br>(argininamide)</td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/IgG-aptamer" target="_blank" style="color:#520049"><b>IgG aptamer</b></a></td>
        <td name="td2">Human IgG</td>
        <td name="td3">IgG (Immunoglobulin G) is a four-stranded monomer, the main antibody component in blood serum and extracellular fluid, Immunoglobulin G(IgG) can be divided into four subclasses, namely immunoglobulin G1, immunoglobulin G2, immunoglobulin G3 and immunoglobulin G4, according to the difference of γ-chain antigenicity in immunoglobulin G molecules (the four subclasses in mice are immunoglobulin G1, immunoglobulin G2a, immunoglobulin G2b and immunoglobulin G3).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18441054/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3AGV" target="_blank" style="color:#520049"><b>3AGV</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NF-kappaB-aptamer" target="_blank" style="color:#520049"><b>NF-kappaB aptamer</b></a></td>
        <td name="td2">NF-kappaB P50</td>
        <td name="td3">Nuclear factor kappa-B (NF-κB) protein was first discovered by David Baltimore. This protein family can selectively bind to the κ-light chain enhancer of B cells to regulate the expression of many genes. Members of NF-κB family have structural homology with retrovirus cancer protein v-Rel, so they are classified as NF-κB/Rel proteins. In mammals, there are five proteins in this family, which are RelA(p65), RelB, c-Rel, NF-κB1(p50) and NF-κB2(p52).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10074372/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1OOA" target="_blank" style="color:#520049"><b>1OOA</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Thrombin-aptamer" target="_blank" style="color:#520049"><b>Thrombin aptamer</b></a></td>
        <td name="td2">Human Thrombin</td>
        <td name="td3">Thrombin is a serine protease, an enzyme that, in humans, is encoded by the F2 gene. During the clotting process, prothrombin (coagulation factor II) is proteolytically cleaved by the prothrombinase enzyme complex to form thrombin. Thrombin in turn acts as a serine protease that converts soluble fibrinogen into insoluble strands of fibrin, as well as catalyzing many other coagulation-related reactions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5DO4" target="_blank" style="color:#520049"><b>5DO4</b></a><br><a href="https://www.rcsb.org/structure/3DD2" target="_blank" style="color:#520049"><b>3DD2</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ribosomal-protein-S8-aptamer" target="_blank" style="color:#520049"><b>Ribosomal protein S8-aptamer</b></a></td>
        <td name="td2">ribosomal protein S8</td>
        <td name="td3">In the free state, the internal loop of the ribosomal protein S8 aptamper hairpin stem contains G-A, U-U and A-A mismatches with an overall helical A-form geometry. To bind r-protein S8, the internal loop undergoes a dramatic rearrangement of secondary structure to form a base triple and a base quartet.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25140011/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4PDB" target="_blank" style="color:#520049"><b>4PDB</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/TetR-aptamer" target="_blank" style="color:#520049"><b>TetR aptamer</b></a></td>
        <td name="td2">Transcription repressor TetR</td>
        <td name="td3">Tet Repressor proteins (otherwise known as TetR) are proteins playing an important role in conferring antibiotic resistance to large categories of bacterial species. Tetracycline (Tc) is a broad family of antibiotics to which bacteria have evolved resistance.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6SY4" target="_blank" style="color:#520049"><b>6SY4</b></a><br><a href="https://www.rcsb.org/structure/6SY6" target="_blank" style="color:#520049"><b>6SY6</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Others</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/REX16-aptamer" target="_blank" style="color:#520049"><b>REX16 aptamer</b></a></td>
        <td name="td2">HTLV-1 arginine-rich Rex peptide</td>
        <td name="td3">Rex is a post-transcriptional regulator that induces the emergence of unspliced and single-spliced viral mRNA in the cytoplasm.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10647177/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EXY" target="_blank" style="color:#520049"><b>1EXY</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/AML1(RUNX1)-aptamer" target="_blank" style="color:#520049"><b>AML1 (RUNX1)-aptamer</b></a></td>
        <td name="td2">AML1 Runt domain</td>
        <td name="td3">AML1 (RUNX1) is a key transcription factor for hematopoiesis that binds to the Runt-binding double-stranded DNA element (RDE) of target genes through its N-terminal Runt domain.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/23997091/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2RRC" target="_blank" style="color:#520049"><b>2RRC</b> </a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/A9g-RNA-aptamer" target="_blank" style="color:#520049"><b>A9g RNA aptamer</b></a></td>
        <td name="td2">human glutamate carboxypeptidase II (GCPII)</td>
        <td name="td3">A9g is a 43-bp PSMA-specific RNA aptamer, that was determined to the 2.2 Å resolution limit. The analysis of the PSMA/aptamer interface allows for identification of key interactions critical for nanomolar binding affinity and high selectivity of A9g for human PSMA. Combined with in silico modeling, site-directed mutagenesis, inhibition experiments and cell-based assays, the structure also provides an insight into structural changes of the aptamer and PSMA upon complex formation, mechanistic explanation for inhibition of the PSMA enzymatic activity by A9g as well as its ligand-selective competition with small molecules targeting the internal pocket of the enzyme.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/32525981/" target="_blank" style="color:#520049"><b>2020</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6RTI" target="_blank" style="color:#520049"><b>6RTI</b> </a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Spinach-RNA-aptamer" target="_blank" style="color:#520049"><b>Spinach RNA aptamer</b></a></td>
        <td name="td2">Fab BL3-6S97N</td>
        <td name="td3">An independent selection using a 40-nt randomized library unconstrained by secondary structure revealed a GNGACCC consensus sequence for Fab BL3–6 binding.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/29309709/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6B14" target="_blank" style="color:#520049"><b>6B14</b></a><br><a href="https://www.rcsb.org/structure/6B3K" target="_blank" style="color:#520049"><b>6B3K</b></a></td>
      </tr>  
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Factor-Xa-aptamer" target="_blank" style="color:#520049"><b>Factor Xa-aptamer</b></a></td>
        <td name="td2">DesGla-XaS195A</td>
        <td name="td3">GD-FXaS195A is a FXa variant that lacks the membrane binding γ-carboxyglutamic acid (Gla) domain and contains an alanine substitution at the catalytic serine.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/29863725/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5VOF" target="_blank" style="color:#520049"><b>5VOF</b></a></td>
      </tr>   
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/NOX-E36-L-aptamer" target="_blank" style="color:#520049"><b>NOX-E36 L-aptamer</b></a></td>
        <td name="td2">L-CCL2</td>
        <td name="td3">L-CCL2(Chemokine C-C Motif Ligand 2), also known as monocyte chemoattractant protein 1 (MCP1) or small inducible cytokine A2 (SCYA2), is a protein classified as a chemotactic cytokine or chemokine. MCP1 binds to the chemokine receptors CCR2 and CCR5. CCL2 belongs to the CC chemokine family, small soluble proteins whose main function is to regulate cell trafficking and that act as molecular signals to induce cellular migration during inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25970072/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4R8I" target="_blank" style="color:#520049"><b>4R8I</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/FC-RNA-aptamer" target="_blank" style="color:#520049"><b>FC RNA aptamer</b></a></td>
        <td name="td2">RNA polymerase (Pol) II (S. cerevisiae)</td>
        <td name="td3">RNA polymerase II (RNAP II and Pol II) is a multiprotein complex that transcribes DNA into precursors of messenger RNA (mRNA) and most small nuclear RNA (snRNA) and microRNA. It is one of the three RNAP enzymes found in the nucleus of eukaryotic cells. A 550 kDa complex of 12 subunits, RNAP II is the most studied type of RNA polymerase. A wide range of transcription factors are required for it to bind to upstream gene promoters and begin transcription.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9346949/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2B63" target="_blank" style="color:#520049"><b>2B63</b></a></td>
      </tr> 
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/10G-1-aptamer" target="_blank" style="color:#520049"><b>10G-1 aptamer</b></a></td>
        <td name="td2">Hepatitis C virus (HCV) NS3 protease</td>
        <td name="td3">The RNA genome of human hepatitis C virus (HCV) is translated into a large precursor polyprotein. NS3 protein has a trypsin-like serine-protease motif in its N-terminal region, the NS3 protease of HCV has a crucial role in the processing of the polyprotein into functional viral proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/59-aptamer" target="_blank" style="color:#520049"><b>59 aptamer</b></a></td>
        <td name="td2">HIV-1 Rev protein</td>
        <td name="td3">HIV-1 Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/B.2-aptamer" target="_blank" style="color:#520049"><b>B.2 aptamer</b></a></td>
        <td name="td2">Hepatitis C virus (HCV) NS5B polymerase (HCV NS5BΔC55 protein)</td>
        <td name="td3">HCV NS5B is a 66-kDa membrane-associated viral nonstructural protein, derived from the C-terminal end of the polyprotein. NS5B was initially identified as an RNA-dependent RNA polymerase (RdRp) by the presence of the hallmark GDD sequence, a motif involved in binding the Mg2+ ions essential for all polymerase functions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/C52-aptamer" target="_blank" style="color:#520049"><b>C52 aptamer</b></a></td>
        <td name="td2">Human immunodeficiency virus type 1 (HIV-1) Rev protein</td>
        <td name="td3">HIV-1 Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8523524/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Clone-31-aptamer" target="_blank" style="color:#520049"><b>Clone 31 aptamer</b></a></td>
        <td name="td2">Human immunodeficiency virus type 1 (HIV-1) Tat protein</td>
        <td name="td3">Tat proteins (trans-activating proteins) are present in all known lentiviruses and are early RNA binding proteins that regulate transcription. Tat from the human immunodeficiency virus type-1 (HIV-1) is a protein comprising 86 amino acids and encoded by 2 exons. The first 72 amino acids are encoded by exon 1 and exhibit full trans-activating activity. The second exon encodes a 14-amino-acid C-terminal sequence that is not required for transactivation but does contain an RGD motif, which is important in binding to alphavbeta3 and alpha5beta1 integrins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10886365/" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/G6-16-aptamer" target="_blank" style="color:#520049"><b>G6-16 aptamer</b></a></td>
        <td name="td2">Hepatitis C virus (HCV) NS3 protein</td>
        <td name="td3">Hepatitis C virus (HCV) is a single-stranded RNA virus and its genome is translated into a single large polyprotein. The viral-encoded NS3 protein possesses protease, nucleoside triphosphatase, and helicase activities, which are considered essential for viral proliferation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/G9-II-aptamer" target="_blank" style="color:#520049"><b>G9-II aptamer</b></a></td>
        <td name="td2">Hepatitis C virus (HCV) NS3 protease (ΔNS3)</td>
        <td name="td3">The RNA genome of human hepatitis C virus (HCV) is translated into a large precursor polyprotein. NS3 protein has a trypsin-like serine-protease motif in its N-terminal region, the NS3 protease of HCV has a crucial role in the processing of the polyprotein into functional viral proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ligand-1.1-aptamer" target="_blank" style="color:#520049"><b>ligand 1.1 aptamer</b></a></td>
        <td name="td2">Human imunnodeficiency virus type 1 reverse transcriptase (HIV-1 RT)</td>
        <td name="td3">HIV-1 RT is an heterodimeric and multifunctional enzyme possessing DNA polymerase activity, on both RNA and DNA templates, and ribonuclease H activity (RNase H) which degrades the RNA strand of RNA/DNA and RNA/RNA hybrids.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1379730/" target="_blank" style="color:#520049"><b>1992</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/P5-aptamer" target="_blank" style="color:#520049"><b>P5 aptamer</b></a></td>
        <td name="td2">Human immunodeficiency virus type 1 (HIV-1) integrase</td>
        <td name="td3">In vitro, integrase has been shown to be necessary for processing double-stranded viral DNA, cleaving recipient DNA, and integrating the processed DNA into the host genome. It is usually carried by the virus itself and is not present in the host cell.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7778267/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/YT1-aptamer" target="_blank" style="color:#520049"><b>YT1 aptamer</b></a></td>
        <td name="td2">Human T-cell lymphotropic virus (HTLV-1) Tax protein</td>
        <td name="td3">Tax protein is a transactivating protein, it does not normally bind to nucleic acids, but instead stimulates transcription by interacting with a variety of cellular transcription factors, including the cyclic AMP-response element binding protein (CREB), NF-kappa B, and the serum response factor (SRF).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7489503/" target="_blank" style="color:#520049"><b>1995</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Others</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HSV-1-US11-aptamer" target="_blank" style="color:#520049"><b>HSV-1 US11-aptamer</b></a></td>
        <td name="td2">Herpes simplex virus-1 (HSV-1) US11</td>
        <td name="td3">Herpes simplex virus-1 US11 is a RNA-binding protein with a novel RNA-binding domain. US11 has also been described as a double-stranded RNA (dsRNA)-binding protein.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16246910/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/SARS-CoV-N-protein-aptamer" target="_blank" style="color:#520049"><b>SARS-CoV N protein aptamer</b></a></td>
        <td name="td2">SARS-CoV nucleocapsid (N) protein</td>
        <td name="td3">SARS-CoV nucleocapsid (N) protein refers to the nucleocapsid protein of the Severe Acute Respiratory Syndrome Coronavirus (SARS-CoV). The nucleocapsid protein is one of the key components that make up the structure of viral particles. It encapsulates the genetic material of the virus, namely the RNA genome, forming the nucleocapsid of the virus.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/19684916/" target="_blank" style="color:#520049"><b>2009</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-CA-aptamer" target="_blank" style="color:#520049"><b>HIV-1 CA-aptamer</b></a></td>
        <td name="td2">HIV-1 capsid (CA) protein</td>
        <td name="td3">HIV-1 capsid (CA) protein is the protein shell of a virus, enclosing its genetic material. It consists of several oligomeric (repeating) structural subunits made of protein called protomers. The observable 3-dimensional morphological subunits, which may or may not correspond to individual proteins, are called capsomeres. The proteins making up the capsid are called capsid proteins or viral coat proteins (VCP). The capsid and inner genome is called the nucleocapsid.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/35018437/" target="_blank" style="color:#520049"><b>2022</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hemagglutinin-aptamer" target="_blank" style="color:#520049"><b>Hemagglutinin aptamer</b></a></td>
        <td name="td2">Hemagglutinin (HA)</td>
        <td name="td3">Hemagglutinin (HA) is a substance that causes red blood cell agglutination, such as antibodies or glycoproteins found on the surface of viruses. Virus hemagglutinin enables the virus to bind to host cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/15913532/" target="_blank" style="color:#520049"><b>2005</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HPV-16-E7-oncoprotein-aptamer" target="_blank" style="color:#520049"><b>HPV-16 E7 oncoprotein aptamer</b></a></td>
        <td name="td2">Human papillomavirus type 16 (HPV-16) E7 oncoprotein</td>
        <td name="td3">Human papillomavirus type 16 (HPV-16) E7 oncoprotein (HPV-16 E7 protein) is a small acidic phosphoprotein that resembles adenovirus E1A and SV40 large T antigen both in sequence and functionality.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21565620/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5">NA</td>
      </tr>
       <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIRRV-aptamer" target="_blank" style="color:#520049"><b>HIRRV aptamer</b></a></td>
        <td name="td2">Hirame rhabdovirus (HIRRV)</td>
        <td name="td3">Hirome rhabdovirus (HIRRV) belongs to the family of rhabdoviruses and is composed of rod-shaped particles that can infect living organisms, including viruses that cause rabies.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/H3N2-aptamer" target="_blank" style="color:#520049"><b>H3N2 aptamer</b></a></td>
        <td name="td2">Haemagglutinin (HA) region of H3N2</td>
        <td name="td3">Hemagglutinin (HA) is an antigenic glycoprotein located on the surface of influenza virus, which is responsible for binding the virus to infected cells. The name "hemagglutinin" comes from the fact that this protein can cause the aggregation ("agglutination") of red blood cells in vitro.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16476969/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HIV-1-PR-aptamer" target="_blank" style="color:#520049"><b>HIV-1 PR aptamer</b></a></td>
        <td name="td2">HIV-1 protease (PR)</td>
        <td name="td3">HIV-1 protease (PR) is a retroviral aspartyl protease (retropepsin), an enzyme involved with peptide bond hydrolysis in retroviruses, that is essential for the life-cycle of HIV, the retrovirus that causes AIDS. HIV protease cleaves newly synthesized polyproteins (namely, Gag and Gag-Pol) at nine cleavage sites to create the mature protein components of an HIV virion, the infectious form of a virus outside of the host cell. Without effective HIV protease, HIV virions remain uninfectious.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HCV-aptamer" target="_blank" style="color:#520049"><b>HCV aptamer</b></a></td>
        <td name="td2">Hepatitis C virus NS5B protein (HCV NS5B protein)</td>
        <td name="td3">Hepatitis C virus NS5B protein (HCV NS5B protein) refers to a non-structural protein of the Hepatitis C virus (HCV), specifically the non-structural protein numbered as 5B. The NS5B protein plays a crucial role in the life cycle and replication of HCV, as it functions as an RNA-dependent RNA polymerase (RdRp).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049"><b>2003</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HBV-aptamer" target="_blank" style="color:#520049"><b>HBV aptamer</b></a></td>
        <td name="td2">Hepatitis B virus (HBV) polymerase (P protein) (miniP)</td>
        <td name="td3">Hepatitis B virus (HBV) polymerase (P protein) (miniP) is a key enzyme in the replication process of hepatitis B virus (HBV).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22125633/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Gastrointestinal-cancer-antigen-50-aptamer" target="_blank" style="color:#520049"><b>Gastrointestinal cancer antigen 50-aptamer</b></a></td>
        <td name="td2">Gastrointestinal cancer antigen 50</td>
        <td name="td3">Gastrointestinal cancer antigen 50 (CA 50), a novel cancer-associated carbohydrate marker, is detected by the C 50 antibody that has been obtained by immunization of mice with a human colorectal adenocarcinoma cell line.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Cancer-antigen-72–4(CA72-4)-aptamer" target="_blank" style="color:#520049"><b>Cancer antigen 72–4(CA72-4)-aptamer</b></a></td>
        <td name="td2">Cancer antigen 72–4(CA72-4)</td>
        <td name="td3">CA 72-4 is a mucin-glycoprotein present on the surface of many cell types such as ovarian, breast, colon, pancreatic cells, especially cancer cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Chemokine-CCL17-aptamer" target="_blank" style="color:#520049"><b>Chemokine CCL17-aptamer</b></a></td>
        <td name="td2">Chemokine CCL17</td>
        <td name="td3">CCL17 is a powerful chemokine produced in the thymus and by antigen-presenting cells like dendritic cells, macrophages, and monocytes.CCL17 plays a complex role in cancer. It attracts T-regulatory cells allowing for some cancers to evade an immune response.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Gastrointestinal-carcinoembryonic-antigen-(CEA)-aptamer" target="_blank" style="color:#520049"><b>Gastrointestinal carcinoembryonic antigen (CEA)-aptamer</b></a></td>
        <td name="td2">Gastrointestinal carcinoembryonic antigen (CEA)</td>
        <td name="td3">Carcinoembryonic antigen (CEA) describes a set of highly-related glycoproteins involved in cell adhesion.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Glycoprotein-2-(GP2)-protein-aptamer" target="_blank" style="color:#520049"><b>Glycoprotein 2 (GP2) protein-aptamer</b></a></td>
        <td name="td2">Glycoprotein 2 (GP2) protein</td>
        <td name="td3">The glycoprotein 2 (GP2) is exclusively expressed on M cells among intestinal epithelial cells and serves as an uptake receptor for a subset of commensal and pathogenic bacteria.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24334484/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Hemagglutinin-(HA)-protein-aptamer" target="_blank" style="color:#520049"><b>Hemagglutinin (HA) protein-aptamer</b></a></td>
        <td name="td2">Hemagglutinin (HA) protein</td>
        <td name="td3">Hemagglutinin (HA) protein is a homotrimeric glycoprotein found on the surface of influenza viruses and is integral to its infectivity.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24835440/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Interleukin-6-receptor-domain-3-(IL-6R-D3)-aptamer" target="_blank" style="color:#520049"><b>Interleukin-6 receptor domain 3 (IL-6R D3)-aptamer</b></a></td>
        <td name="td2">Interleukin-6 receptor domain 3 (IL-6R D3)</td>
        <td name="td3">Interleukin 6 (IL6) is a potent pleiotropic cytokine that regulates cell growth and differentiation and plays an important role in immune response. Dysregulated production of IL6 and this receptor are implicated in the pathogenesis of many diseases, such as multiple myeloma, autoimmune diseases and prostate cancer.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/26383776/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Restriction-endonucleases-(REases)-KpnI-aptamer" target="_blank" style="color:#520049"><b>Restriction endonucleases (REases) KpnI-aptamer</b></a></td>
        <td name="td2">Restriction endonucleases (REases) KpnI</td>
        <td name="td3">The restriction endonucleases (REases) KpnI is an orthodox Type IIP enzyme, which binds to DNA in the absence of metal ions and cleaves the DNA sequence 5′-GGTAC^C-3′ in the presence of Mg2+ as shown generating 3′ four base overhangs.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Ubiquitin-carboxyl-terminal-hydrolase37-(UCH37)-aptamer" target="_blank" style="color:#520049"><b>Ubiquitin carboxyl-terminal hydrolase37 (UCH37)-aptamer</b></a></td>
        <td name="td2">Ubiquitin carboxyl-terminal hydrolase37 (UCH37)</td>
        <td name="td3">Ubiquitin carboxyl-terminal hydrolase is a member of a gene family whose products hydrolyze small C-terminal adducts of ubiquitin to generate the ubiquitin monomer.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/27930845/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/CypB-aptamer" target="_blank" style="color:#520049"><b>CypB-aptamer</b></a></td>
        <td name="td2">cyclophilin B (CypB)</td>
        <td name="td3">CypB is an ER-resident protein that possesses peptidyl-prolyl cis/trans-isomerase activity and is known to be secreted into body fluids. It has been implicated as a tissue biomarker in other cancers.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22484812/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ERα-aptamer" target="_blank" style="color:#520049"><b>ERα-aptamer</b></a></td>
        <td name="td2">Estrogen receptor α (ERα)</td>
        <td name="td3">Estrogen plays a prominent role in the etiology of various cancers. Its effect on the target tissue is primarily mediated through binding to specific intracellular estrogen receptors, ERα and ERβ.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/Escherichia-coli-aptamer" target="_blank" style="color:#520049"><b>Escherichia coli-aptamer</b></a></td>
        <td name="td2">Escherichia coli O157:H7</td>
        <td name="td3">Escherichia coli (E. coli) O157:H7 is a major foodborne pathogen that causes life-threatening symptoms in humans worldwide.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22166202/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/HPAI-H5N1-aptamer" target="_blank" style="color:#520049"><b>HPAI H5N1-aptamer</b></a></td>
        <td name="td2">Hemagglutinin (HA) of H5N1 and H7N7</td>
        <td name="td3">Hemagglutinin (HA) of H5N1 and H7N7 is responsible for both receptor (glycan) binding and membrane fusion during cell entry.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24374323/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/IL-17A-aptamer" target="_blank" style="color:#520049"><b>IL-17A aptamer</b></a></td>
        <td name="td2">Proinflammatory cytokine interleukin-17A (IL-17A)</td>
        <td name="td3">The proinflammatory cytokine interleukin-17A (IL-17A) is produced primarily by the CD4+T cell subset called Th17 cells, which is involved in host defense, inflammation, and autoimmune disorders.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/20967861/" target="_blank" style="color:#520049"><b>2011</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/OX40-aptamer" target="_blank" style="color:#520049"><b>OX40-aptamer</b></a></td>
        <td name="td2">OX40</td>
        <td name="td3">OX40 is a costimulatory receptor expressed primarily on activated CD4 T cells approximately 18–24 hours after initial stimulation via the T cell receptor. OX40's cognate ligand, OX40-L, is expressed on antigen presenting cells (APCs) such as dendritic cells and B lymphocytes and binds to OX40, inducing an agonistic response in T lymphocytes that results in cell proliferation, increased cytokine production, and long-term survival of T lymphocytes.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/23113766/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/RF-1-aptamer" target="_blank" style="color:#520049"><b>RF-1-aptamer</b></a></td>
        <td name="td2">Escherichia coli release factor 1</td>
        <td name="td3">Release factor 1 (RF-1) is an essential cofactor which is responsible for translation termination at stop codons UAA and UAG.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/17188871" target="_blank" style="color:#520049"><b>2007</b> </a></td>
        <td name="td5">NA</td>
      </tr>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/ZAP-aptamer" target="_blank" style="color:#520049"><b>ZAP-aptamer</b></a></td>
        <td name="td2">Zinc-finger antiviral protein</td>
        <td name="td3">The zinc-finger antiviral protein (ZAP) is a host factor that specifically inhibits the replication of certain viruses, including murine leukemia virus, Sindbis virus and Ebola virus, by targeting the viral mRNAs for degradation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/21203916/" target="_blank" style="color:#520049"><b>2010</b> </a></td>
        <td name="td5">NA</td>
      </tr>
	  </tbody>
  </table>
</div>



<div id="sheet6" class="sheet" class="table-style1">
    <h2>Nucleic acid</h2>
    <table id="amintable">
     <thead>
      <tr>
        <th onclick="sortTable(0)">Category</th>
        <th onclick="sortTable(1)">Name</th>
        <th onclick="sortTable(2)">Ligand</th>
        <th onclick="sortTable(3)">Description</th>
        <th onclick="sortTable(4)">Discovery</th>
        <th onclick="sortTable(5)">PDB</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/_posts/LR06-aptamer" target="_blank" style="color:#520049"><b>LR06(GA) aptamer</b></a></td>
        <td name="td2">TAR RNA</td>
        <td name="td3">The trans-activating responsive (TAR) RNA element located in the 5′ untranslated region of the HIV-1 genome is a 59-nt imperfect stem-loop essential for the viral replication. TAR regulates transcription by interacting with both viral and cellular proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7521014/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2OOM" target="_blank" style="color:#520049"><b>2OOM</b> </a></td>
      </tr>    
	  </tbody>
  </table>
</div>
     
                
<script>
  var tables = [];
    var currentSheet = 'sheet1';
     $(document).ready(function() {
    $.noConflict();
    tables.push($('#cfttable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#rnadetable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#rnapretable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#smtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#eletable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));


    
    tables.push($('#amintable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#sugtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#tboxtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#othtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    
    
    // Hide the search box for DataTables
      $('#cfttable_filter').css('display', 'none');
      $('#rnadetable_filter').css('display', 'none');
      $('#rnapretable_filter').css('display', 'none');
       $('#smtable_filter').css('display', 'none');
      $('#eletable_filter').css('display', 'none');
      $('#amintable_filter').css('display', 'none');
      $('#sugtable_filter').css('display', 'none');
      $('#tboxtable_filter').css('display', 'none');
      $('#othtable_filter').css('display', 'none'); 
      
  // Show the initial sheet (sheet1) and hide others
    showSheet('sheet1');
    hideAllSheetsExcept('sheet1');
  });

  function sortTable(columnIndex) {
    // TODO: Add sorting logic based on the columnIndex
  }

  

function downloadExcel() {
  var selectElement = document.getElementById('downloadOptions');
  var selectedValue = selectElement.value;

  // Check if a valid option was selected
  if (selectedValue !== '') {
    // Create a temporary link element with the download URL
    var link = document.createElement('a');
    link.href = selectedValue;
    link.download = selectedValue.split('/').pop(); // Set the filename to the last part of the URL
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }
}
	
	
	function showSheet(sheetId) {
    // Hide the current sheet
    if (currentSheet) {
        var currentSheetElement = document.getElementById(currentSheet);
        currentSheetElement.style.display = 'none';
    }

    // Show the selected sheet
    var sheet = document.getElementById(sheetId);
    sheet.style.display = 'block';

    // Update the current sheet
    currentSheet = sheetId;

    // Get all buttons
    var buttons = document.querySelectorAll('.button');

    // Remove clicked class from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove('clicked');
    });

    // Add clicked class to the clicked button using event.target
    event.target.classList.add('clicked');
}

  function hideAllSheetsExcept(sheetId) {
    var sheets = document.getElementsByClassName('sheet');
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.id !== sheetId) {
        sheet.style.display = 'none';
      }
    }
    }

    function showAllSheets() {
      var sheets = document.getElementsByClassName('sheet');
      for (var i = 0; i < sheets.length; i++) {
        sheets[i].style.display = 'block';
      }
    }

    function searchTables() {
      var keyword = $('#searchBox').val().toLowerCase();

      tables.forEach(function(table) {
        table.search(keyword).draw();
      });
      // Filter the sheets based on search results
    filterSheets();
  }

  function filterSheets() {
    var keyword = $('#searchBox').val().toLowerCase();
    var sheets = document.getElementsByClassName('sheet');

    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      var table = tables[i];

      var displaySheet = false;

      table.rows().eq(0).each(function(index) {
        var row = table.row(index);
        var rowData = row.data().join(' ').toLowerCase();
        var display = rowData.includes(keyword) ? '' : 'none';
        row.nodes().to$().css('display', display);

        if (display !== 'none') {
          displaySheet = true;
        }
      });

      if (displaySheet) {
        $('#' + sheet.id).show();
      } else {
        $('#' + sheet.id).hide();
      }
    }
  }  
  </script>
        
    </body>
</html><br>
        