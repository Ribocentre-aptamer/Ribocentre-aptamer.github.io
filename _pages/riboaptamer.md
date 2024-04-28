---
title: "Riboaptamer - RNA-Aptamers"
layout: riboswitch
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
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #c9c5c5;
      border-radius: 5px;
      width:250px;
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
      width:245px;
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
      width:210px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
   .box_style{
    background: #ffffff;
  }
  h2{
    font-size:20px;
    font-weight: bold;
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
    table {
        border: 1px solid #ffffff;
        border: 1px solid #ffffff;
		    border: 1px solid #ffffff;
		    border-radius: 5px;
		    background-color: #fff;
		    border-radius: 5px;
        }
		  th {
        background-color: #520049;
        background-color: #520049;
        background-color: #520049;
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
		  td {
		    background-color: #ffffff;
		    background-color: #ffffff;
		    background-color: #ffffff;
		    }		
		  th, td {
		  padding: 10px 10px;
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
    border-radius: 4px;
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
<br><br>
        
<p class="header_boxx1" >Statistical information </p>
<img src="/images/aptamers/Aptamers_classification.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>

<!--a href="/downloads/riboswitches_page/Classification_of_Riboswitches.pdf" target="_blank" download="Classification_of_Riboswitches.pdf"><button class="btn btn-secondary" style="color:#520049" ><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download FIGURE</button></a-->   
<br>
<p>For more detailed information about each Aptamer, please browse the table below.</p>
<br>

<p class="header_boxx2" >Detail information</p>    
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
<br>
  <!-- 按钮 -->
  <!--div class="button-container">
      <button class="button" onclick="showSheet('sheet1')">Small molecules</button>
      <button class="button" onclick="showSheet('sheet2')">Proteins</button>
      <button class="button" onclick="showSheet('sheet3')">Nucleic acids</button>
      <button class="button" onclick="showSheet('sheet3')">Others</button>
  </div-->
        
<div id="sheet1" class="sheet">
    <h2>Small molecules</h2>
    <table id="cfttable">
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
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/ATP-aptamer" target="_blank" style="color:#520049"><b>ATP aptamer</b></a></td>
        <td name="td2">ATP,<br>adenosine</td>
        <td name="td3">ATP (Adenosine 5'-triphosphate) is an important substance for energy storage and metabolism in the body, which provides energy for metabolism and plays a role as a coenzyme in cells. ATP is an important endogenous signal molecule in immunity and inflammation.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7687750/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1AM0" target="_blank" style="color:#520049"><b>1AM0</b> </a>(AMP)<br><a href="https://www.rcsb.org/structure/1RAW" target="_blank" style="color:#520049"><b>1RAW</b> </a>(AMP)</td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/B4-25-aptamer" target="_blank" style="color:#520049"><b>B4-25 aptamer</b></a></td>
        <td name="td2">Reactive Blue 4</td>
        <td name="td3">Reactive Blue 4 is an anthraquinone dye, as a single colorimetric chemosensor for sequential determination of multiple analytes with different optical responses in aqueous media. Reactive Blue 4 is phytotoxic, cytotoxic and genotoxic.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Synthetic</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/B4-25-aptamer" target="_blank" style="color:#520049"><b>CB-42 aptamer</b></a></td>
        <td name="td2">Cibacron Blue 3GA</td>
        <td name="td3">Cibacron Blue 3G-A is an anthraquinone dye, inhibits the R46 β-lactamase with a Ki value of 1.2 uM.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1697402/" target="_blank" style="color:#520049"><b>1990</b> </a></td>
        <td name="td5">NA</td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Pepper-aptamer" target="_blank" style="color:#520049"><b>Pepper aptamer</b></a></td>
        <td name="td2">(4-((2-hydroxyethyl)(methyl)amino)-benzylidene)-cyanophenylacetonitrile (HBC)</td>
        <td name="td3">HBC ((4-((2-hydroxyethyl)(methyl)amino)-benzylidene)-cyanophenyl-acetonitrile) is a synthetic dye similar to GFP fluorophores, with a structurally rigid electron acceptor and a strong electron donor.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/31548726/" target="_blank" style="color:#520049"><b>2019</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/7EOH" target="_blank" style="color:#520049"><b>7EOH</b></a><br><a href="https://www.rcsb.org/structure/7SZU" target="_blank" style="color:#520049"><b>7SZU</b></a><br><a href="https://www.rcsb.org/structure/7U0Y" target="_blank" style="color:#520049"><b>7U0Y</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Biologics & Signaling Molecules</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/FMN-aptamer" target="_blank" style="color:#520049"><b>FMN aptamer</b></a></td>
        <td name="td2">FMN</td>
        <td name="td3">Flavin mononucleotide (FMN)  is a cofactor that mediates oxidation–reduction reactions when bound as a prosthetic group in flavoproteins.The chromophore (isoalloxazine ring) of FMN serves as a transient carrier of a pair of hydrogen atoms removed from the substrate molecule in redox reactions catalyzed by these enzymes.</td>
        <td name="td4"><a href="https://onlinelibrary.wiley.com/doi/10.1002/anie.199410841" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1FMN" target="_blank" style="color:#520049"><b>1FMN</b></a></td>
      </tr>    
	  </tbody>
     <tbody>
      <tr>
        <td name="td0" rowspan = "1">Nucleosides & Nucleotides</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/GTP-aptamer" target="_blank" style="color:#520049"><b>GTP aptamer</b></a></td>
        <td name="td2">GTP</td>
        <td name="td3">Guanosine-5'-triphosphate (GTP) is a purine nucleoside triphosphate. It is one of the building blocks needed for the synthesis of RNA during the transcription process. Its structure is similar to that of the guanosine nucleoside, the only difference being that nucleotides like GTP have phosphates on their ribose sugar. GTP has the guanine nucleobase attached to the 1' carbon of the ribose and it has the triphosphate moiety attached to ribose's 5' carbon.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049"><b>2006</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2AU4" target="_blank" style="color:#520049"><b>2AU4</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Pharmaceuticals</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Tetracycline-aptamer" target="_blank" style="color:#520049"><b>Tetracycline aptamer</b></a></td>
        <td name="td2">Tetracycline</td>
        <td name="td3">Tetracyclines are a group of broad-spectrum antibiotic compounds that have a common basic structure and are either isolated directly from several species of Streptomyces bacteria or produced semi-synthetically from those isolated compounds.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>2001</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3EGZ" target="_blank" style="color:#520049"><b>3EGZ</b></a></td>
      </tr>    
	  </tbody>
     <tbody>
      <tr>
        <td name="td0" rowspan = "1">Fluorophores</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Corn-aptamer" target="_blank" style="color:#520049"><b>Corn aptamer</b></a></td>
        <td name="td2">DFHO</td>
        <td name="td3">DFHO(3,5-difluoro-4-hydroxybenzylidene imidazolinone-2-oxime) is a Corn homologous ligand that fluoresces yellow upon excitation and is used to image RNA in living cells.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/28945233/" target="_blank" style="color:#520049"><b>2017</b> </a></td>
        <td name="td5"><a href="https://doi.org/10.2210/pdb5BJP/pdb" target="_blank" style="color:#520049"><b>5BJP</b></a><br><a href="https://www.rcsb.org/structure/5BJO" target="_blank" style="color:#520049"><b>5BJO</b></a></td>
      </tr>    
	  </tbody>
  </table>
</div>        
    
<div id="sheet2" class="sheet">
    <h2>Proteins</h2>
    <table id="cfttable">
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
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/bacteriophage-MS2-coat-protein-aptamer" target="_blank" style="color:#520049"><b>Bacteriophage MS2 coat protein-aptamer</b></a></td>
        <td name="td2">Bacteriophage MS2 coat protein</td>
        <td name="td3">The coat protein of the RNA bacteriophage MS2 binds a specific stem-loop structure in viral RNA to accomplish encapsidation of the genome and translational repression of replicase synthesis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/1469719/" target="_blank" style="color:#520049"><b>1992</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6MSF" target="_blank" style="color:#520049"><b>6MSF</b> </a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Hfq-aptamer" target="_blank" style="color:#520049"><b>Hfq aptamer</b></a></td>
        <td name="td2">Hfq</td>
        <td name="td3">Hfq binds to the loop structure formed by the AG repeat sequence, which regulates gene expression.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/22053080/" target="_blank" style="color:#520049"><b>2012</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3HSB" target="_blank" style="color:#520049"><b>3HSB</b></a><br><a href="https://www.rcsb.org/structure/3AHU" target="_blank" style="color:#520049"><b>3AHU</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>Lys1.2minF aptamer</b></a></td>
        <td name="td2">HEWL(lysozyme)</td>
        <td name="td3">It is a powerful enzyme found in abundance in tears, saliva, and human milk. In humans, it is encoded in the LYZ gene. Since it is a small, easily available, and highly stable protein, it has been subject to extensive research regarding its function and structure. Lysozyme acts as a non-specific defense against bacteria and fungi. It is a component of the innate immune system, and is an important part of an infant's diet to ward off diarrhea. It is an enzyme known for its ability to degrade the polysaccharide architecture of many kinds of cell walls, normally for the purpose of protection against bacterial infection.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4M6D" target="_blank" style="color:#520049"><b>4M6D</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Lysozyme-aptamer" target="_blank" style="color:#520049"><b>Lys1.2minE apatmer</b></a></td>
        <td name="td2">HEWL(lysozyme)</td>
        <td name="td3">It is a powerful enzyme found in abundance in tears, saliva, and human milk. In humans, it is encoded in the LYZ gene. Since it is a small, easily available, and highly stable protein, it has been subject to extensive research regarding its function and structure. Lysozyme acts as a non-specific defense against bacteria and fungi. It is a component of the innate immune system, and is an important part of an infant's diet to ward off diarrhea. It is an enzyme known for its ability to degrade the polysaccharide architecture of many kinds of cell walls, normally for the purpose of protection against bacterial infection.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/24570482/" target="_blank" style="color:#520049"><b>2013</b> </a></td>
        <td name="td5"><a href="https://www. rcsb. org/structure/4M4O" target="_blank" style="color:#520049"><b>4M4O</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/HIV-1-REV-peptide-aptamer" target="_blank" style="color:#520049"><b>HIV-1 REV peptide apatmer</b></a></td>
        <td name="td2">HIV-1 REV peptide</td>
        <td name="td3">The HIV-1 protein Rev controls a key step in viral replication by mediating nuclear output of both unspliced and single-spliced viral mRNAs.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1ULL" target="_blank" style="color:#520049"><b>1ULL</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Others</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Bovine-prion-protein(bPrP)-aptamer" target="_blank" style="color:#520049"><b>Bovine prion protein(bPrP) aptamer</b></a></td>
        <td name="td2">Bovine prion protein</td>
        <td name="td3">Normal cellular form of prion protein (PrP<sub>C</sub>) change into abnormal form (PrP<sub>Sc</sub>) and causes anti-prion, prevent prion and Alzheimer's disease. There are the similar structures between 2RSK and 2RU7, so only the 2RU7 with last literature is chosen.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/2RU7" target="_blank" style="color:#520049"><b>2RU7</b></a><br><a href="https://www.rcsb.org/structure/2RSK" target="_blank" style="color:#520049"><b>2RSK</b></a></td>
      </tr>    
	  </tbody>
     <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/GlnRs-aptamer" target="_blank" style="color:#520049"><b>GlnRs aptamer</b></a></td>
        <td name="td2">Glutaminyl-tRNA synthetase (GlnRs)</td>
        <td name="td3">GlnRs (Glutaminyl-tRNA synthetase) is one of the members of aminoacyl tRNA synthetase. It forms a sub complex with arginine tRNA synthetase (RRS) and P43 (a cofactor of the aminoacyl tRNA synthetase complex ) in the complex, and has a close interaction with RRS and P43, with weaker interaction with other aminoacyl tRNA synthetases.</td>
        <td name="td4"><a href="https://www.proquest.com/openview/6857e35043f04e11f53714d80cdc4dcf/1?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank" style="color:#520049"><b>1996</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1EXD" target="_blank" style="color:#520049"><b>1EXD</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/eIF4A-aptamer" target="_blank" style="color:#520049"><b>(eIF4A)-aptamer</b></a></td>
        <td name="td2">mammalian translation initiation factor 4A (eIF4A)</td>
        <td name="td3">The apparent role of mammalian translation initiation factor 4A (eIF4A) is to facilitate the "melting" of secondary structure present in the 5′ untranslated region of mRNAs that impedes translation initiation, finally controlling the translation initiation. RNA aptamers to initiation factor 4A helicase hinder cap-dependent translation by blocking ATP hydrolysis.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1XWP" target="_blank" style="color:#520049"><b>1XWP</b></a><br><a href="https://www.rcsb.org/structure/1XWU" target="_blank" style="color:#520049"><b>1XWU</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/RBA-14-aptamer" target="_blank" style="color:#520049"><b>RBA-14 aptamer</b></a></td>
        <td name="td2">Rev<sup>93</sup></td>
        <td name="td3">HIV-1 Rev (116 residues, 13 kDa) is an essential regulatory protein expressed early in viral replication, it mediates nuclear export of un-spliced and partially spliced viral RNAs for production of viral genomes and structural proteins.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6CF2" target="_blank" style="color:#520049"><b>6CF2</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/GRK2-aptamer" target="_blank" style="color:#520049"><b>GRK2 aptamer</b></a></td>
        <td name="td2">G-protein-coupled receptor kinase 2 (GRK2)</td>
        <td name="td3">G-protein-coupled receptor kinase 2 (GRK2) is an enzyme that in humans is encoded by the ADRBK1 gene. GRK2 was initially called Beta-adrenergic receptor kinase (βARK or βARK1), and is a member of the G protein-coupled receptor kinase subfamily of the Ser/Thr protein kinases that is most highly similar to GRK3(βARK2).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3UZT" target="_blank" style="color:#520049"><b>3UZT</b></a><br><a href="https://www.rcsb.org/structure/3UZS" target="_blank" style="color:#520049"><b>3UZS</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Viral</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Tat-aptamer" target="_blank" style="color:#520049"><b>Tat aptamer</b></a></td>
        <td name="td2">HIV Tat peptides</td>
        <td name="td3">In molecular biology, Tat is a protein that is encoded for by the tat gene in HIV-1. Tat is a regulatory protein that drastically enhances the efficiency of viral transcription. Tat stands for "Trans-Activator of Transcription". The protein consists of between 86 and 101 amino acids depending on the subtype. Tat vastly increases the level of transcription of the HIV dsDNA.</td>
        <td name="td4"><a href="https://onlinelibrary.wiley.com/doi/10.1046/j.1365-2443.2000.00330.x" target="_blank" style="color:#520049"><b>2000</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1NBK" target="_blank" style="color:#520049"><b>1NBK</b></a><br>(argininamide)</td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/IgG-aptamer" target="_blank" style="color:#520049"><b>IgG aptamer</b></a></td>
        <td name="td2">Human IgG</td>
        <td name="td3">IgG (Immunoglobulin G) is a four-stranded monomer, the main antibody component in blood serum and extracellular fluid, Immunoglobulin G(IgG) can be divided into four subclasses, namely immunoglobulin G1, immunoglobulin G2, immunoglobulin G3 and immunoglobulin G4, according to the difference of γ-chain antigenicity in immunoglobulin G molecules (the four subclasses in mice are immunoglobulin G1, immunoglobulin G2a, immunoglobulin G2b and immunoglobulin G3).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/18441054/" target="_blank" style="color:#520049"><b>2008</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/3AGV" target="_blank" style="color:#520049"><b>3AGV</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/NF-kappaB-aptamer" target="_blank" style="color:#520049"><b>NF-kappaB aptamer</b></a></td>
        <td name="td2">NF-kappaB P50</td>
        <td name="td3">Nuclear factor kappa-B (NF-κB) protein was first discovered by David Baltimore. This protein family can selectively bind to the κ-light chain enhancer of B cells to regulate the expression of many genes. Members of NF-κB family have structural homology with retrovirus cancer protein v-Rel, so they are classified as NF-κB/Rel proteins. In mammals, there are five proteins in this family, which are RelA(p65), RelB, c-Rel, NF-κB1(p50) and NF-κB2(p52).</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/10074372/" target="_blank" style="color:#520049"><b>1999</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/1OOA" target="_blank" style="color:#520049"><b>1OOA</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Mammalian</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Thrombin-aptamer" target="_blank" style="color:#520049"><b>Thrombin aptamer</b></a></td>
        <td name="td2">Human Thrombin</td>
        <td name="td3">Thrombin is a serine protease, an enzyme that, in humans, is encoded by the F2 gene. During the clotting process, prothrombin (coagulation factor II) is proteolytically cleaved by the prothrombinase enzyme complex to form thrombin. Thrombin in turn acts as a serine protease that converts soluble fibrinogen into insoluble strands of fibrin, as well as catalyzing many other coagulation-related reactions.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/5DO4" target="_blank" style="color:#520049"><b>5DO4</b></a><br><a href="https://www.rcsb.org/structure/3DD2" target="_blank" style="color:#520049"><b>3DD2</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/Ribosomal-protein-S8-aptamer" target="_blank" style="color:#520049"><b>Ribosomal protein S8-aptamer</b></a></td>
        <td name="td2">ribosomal protein S8</td>
        <td name="td3">In the free state, the internal loop of the ribosomal protein S8 aptamper hairpin stem contains G-A, U-U and A-A mismatches with an overall helical A-form geometry. To bind r-protein S8, the internal loop undergoes a dramatic rearrangement of secondary structure to form a base triple and a base quartet.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/25140011/" target="_blank" style="color:#520049"><b>2014</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/4PDB" target="_blank" style="color:#520049"><b>4PDB</b></a></td>
      </tr>    
	  </tbody>
    <tbody>
      <tr>
        <td name="td0" rowspan = "1">Bacteria</td>
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/TetR-aptamer" target="_blank" style="color:#520049"><b>TetR aptamer</b></a></td>
        <td name="td2">Transcription repressor TetR</td>
        <td name="td3">Tet Repressor proteins (otherwise known as TetR) are proteins playing an important role in conferring antibiotic resistance to large categories of bacterial species. Tetracycline (Tc) is a broad family of antibiotics to which bacteria have evolved resistance.</td>
        <td name="td4"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b> </a></td>
        <td name="td5"><a href="https://www.rcsb.org/structure/6SY4" target="_blank" style="color:#520049"><b>6SY4</b></a><br><a href="https://www.rcsb.org/structure/6SY6" target="_blank" style="color:#520049"><b>6SY6</b></a></td>
      </tr>    
	  </tbody>
  </table>
</div>


<div id="sheet3" class="sheet">
    <h2>Nucleic acid</h2>
    <table id="cfttable">
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
        <td name="td1"><a href="{{ site.url }}{{ site.baseurl }}/docs/LR06-aptamer" target="_blank" style="color:#520049"><b>LR06(GA) aptamer</b></a></td>
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
</html><br><br>
        