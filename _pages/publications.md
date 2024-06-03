---
title: "Ribocentre-aptamer - Publication"
layout: gridlay
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /publications/
---
<html lang="en">
<head>
<!--set sort order in table header begin-->
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <title>Ribocentre-aptamer applications</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <!--set sort order in table header finish-->
  <style>
    .box_style {
    background: #fff;
}
    .header_box {
    border: none;
    background: #efefef;
    font-size:24px
  }
  h2{
    font-size:20px;
    font-weight: bold
  }
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
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #005826;
      text-decoration: none;
      font-size: 16px;
      border: 1px solid #005826;
      border-radius: 5px;
    }
    /* 鼠标悬停样式 */
    .button:hover {
      background-color: #999;
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
      display: none;
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
<h1 class="post-title" itemprop="name headline">Publications</h1>
    
This page list the reviews and articles about RNA aptamers. 
<br><br><br>
<div class="form-container">
  <!-- 搜索框 -->
  <input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
  <!-- Download button -->
  <!--button class="button" onclick="downloadExcel()">Download</butto-->
</div>
<br>
        
<div id="sheet1" class="sheet">
    <table id="reviewtable" class="table-style1">
      <thead>
      <tr>
        <th onclick="sortTable(0)">Year</th>
        <th onclick="sortTable(1)">Author</th>
        <th onclick="sortTable(1)">Title</th>
        <th onclick="sortTable(3)">Journal</th>
      </tr>
      </thead>
      <tbody>
        <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/3097327/" target="_blank" style="color:#520049"><b>1986</b></a></td>
      <td name="td1">Satow Y, Cohen GH, Padlan EA, Davies DR</td>
      <td name="td2">Phosphocholine binding immunoglobulin Fab McPC603. An X-ray diffraction study at 2.7 A</td>
      <td name="td3">Molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12163074/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Carola Hunte 1, Hartmut Michel.</td>
      <td name="td2">Crystallisation of membrane proteins mediated by antibody fragments</td>
      <td name="td3">Structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17952087/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Day PW, Rasmussen SG, Parnot C, Fung JJ</td>
      <td name="td2">A monoclonal antibody for G protein-coupled receptor crystallography</td>
      <td name="td3">Nature methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19477632/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Koide S.</td>
      <td name="td2">Engineering of recombinant crystallization chaperones</td>
      <td name="td3">Structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Paige, J. S., Wu, K. Y., & Jaffrey, S. R.</td>
      <td name="td2">RNA mimics of green fluorescent protein</td>
      <td name="td3">Science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21151117/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Koldobskaya Y, Duguid EM, Shechner DM, Suslov NB</td>
      <td name="td2">A portable RNA sequence whose recognition by a synthetic antibody facilitates structural determination</td>
      <td name="td3">Nature structural & molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Huang H, Suslov NB, Li NS, Shelke SA, Evans ME, Koldobskaya Y</td>
      <td name="td2">A G-quadruplex-containing RNA activates fluorescence in a GFP-like fluorophore</td>
      <td name="td3">Nat Chem Biol</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25940073/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">DasGupta, S., Shelke, S. A., Li, N. S., & Piccirilli, J. A.</td>
      <td name="td2">Spinach RNA aptamer detects lead(II) with high selectivity</td>
      <td name="td3">Chemical communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27305425/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Kikuchi, N., & Kolpashchikov, D. M.</td>
      <td name="td2">Split Spinach Aptamer for Highly Selective Recognition of DNA and RNA at Ambient Temperatures</td>
      <td name="td3">Chembiochem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29309709/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Koirala D, Shelke SA, Dupont M, Ruiz S, DasGupta S</td>
      <td name="td2">Affinity maturation of a portable Fab-RNA module for chaperone-assisted RNA crystallography</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33795733/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Dao, N. T., Haselsberger, R., Khuc, M. T., Phan, A. T.</td>
      <td name="td2">Photophysics of DFHBI bound to RNA aptamer Baby Spinach</td>
      <td name="td3">Scientific reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32763306/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Zon G</td>
      <td name="td2">Recent advances in aptamer applications for analytical biochemistry</td>
      <td name="td3">Anal Biochem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35351813/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Anisuzzaman, S., Geraskin, I. M., Ilgu, M., Bendickson, L.</td>
      <td name="td2">Ligands with polyfluorophenyl moieties promote a local structural rearrangement in the Spinach2 and Broccoli aptamers that increases ligand affinities</td>
      <td name="td3">RNA </td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35267109/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Yu, Z., Wang, Y., Mei, F., Yan, H., Jin, Z., Zhang, P.</td>
      <td name="td2">Spinach-based RNA mimicking GFP in plant cells</td>
      <td name="td3">Functional & integrative genomics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Dolgosheina, E. V., Jeng, S. C., Panchapakesan, S. S., Cojocaru, R., Chen, P. S.</td>
      <td name="td2">RNA mango aptamer-fluorophore: a bright, high-affinity complex for RNA labeling and tracking</td>
      <td name="td3">ACS chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28553947/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Demeshkina, N. A., Lau, M. W. L., Panchapakesan, S. S. S.</td>
      <td name="td2">Structural basis for high-affinity fluorophore binding and activation by RNA Mango</td>
      <td name="td3">Nature chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29440634/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Autour, A., C Y Jeng, S., D Cawte, A., Abdolahzadeh, A., Galli, A.</td>
      <td name="td2">Fluorogenic RNA Mango aptamers for imaging small non-coding RNAs in mammalian cells</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29768001/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Abdolahzadeh, A., Andreoni, A., Cojocaru, R.</td>
      <td name="td2">Crystal structures of the Mango-II RNA aptamer reveal heterogeneous fluorophore binding and guide engineering of variants with improved selectivity and brightness</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29295996/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Jepsen, M. D. E., Sparvath, S. M., Nielsen, T. B., Langvad, A. H.</td>
      <td name="td2">Development of a genetically encodable FRET system using fluorescent RNA aptamers</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30992561/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Autour, A., Jeng, S. C. Y., Abdolahzadeh, A.</td>
      <td name="td2">Structure and functional reselection of the Mango-III fluorogenic RNA aptamer</td>
      <td name="td3">Nature chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32152311/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Cawte, A. D., Unrau, P. J., & Rueda, D. S.</td>
      <td name="td2">Live cell imaging of single RNA molecules with fluorogenic Mango II arrays</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32386573/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Cojocaru, R., Wu, D., Piszczek, G., Ryckelynck, M.</td>
      <td name="td2">Structure-guided engineering of the homodimeric Mango-IV fluorescence turn-on aptamer yields an RNA FRET pair</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33674421/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Kong, K. Y. S., Jeng, S. C. Y., Rayyan, B., & Unrau, P. J.</td>
      <td name="td2">RNA Peach and Mango: Orthogonal two-color fluorogenic aptamers distinguish nearly identical ligands</td>
      <td name="td3">RNA </td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33376189/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Jeng, S. C. Y., Trachman, R. J., 3rd, Weissenboeck, F., Truong, L.</td>
      <td name="td2">Fluorogenic aptamers resolve the flexibility of RNA junctions using orientation-dependent FRET</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34971617/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Harish, B., Wang, J., Hayden, E. J., Grabe, B., Hiller, W., Winter, R., & Royer, C. A.</td>
      <td name="td2">Hidden intermediates in Mango III RNA aptamer folding revealed by pressure perturbation</td>
      <td name="td3">Biophysical journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36120549/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Yang, X., Liu, C., Kuo, Y. A., Yeh, H. C., & Ren, P.</td>
      <td name="td2">Computational study on the binding of Mango-II RNA aptamer and fluorogen using the polarizable force field AMOEBA</td>
      <td name="td3">Molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36840712/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Bychenko, O. S., Khrulev, A. A., Svetlova, J. I., Tsvetkov, V. B.</td>
      <td name="td2">Red light-emitting short Mango-based system enables tracking a mycobacterial small noncoding RNA in infected macrophages</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36227560/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Link, K. A., Knutson, J. R., & Ferré-D'Amaré, A. R.</td>
      <td name="td2">Characterizing fluorescence properties of turn-on RNA aptamers</td>
      <td name="td3">Molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28644615/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Tan, X., Constantin, T. P., Sloane, K. L., Waggoner, A. S.</td>
      <td name="td2">Fluoromodules consisting of a promiscuous RNA aptamer and red or blue fluorogenic cyanine dyes: Selection, characterization, and bioimaging</td>
      <td name="td3">American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30382099/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Shelke, S. A., Shao, Y., Laski, A., Koirala, D., Weissman, B. P.</td>
      <td name="td2">Structural basis for activation of fluorogenic dyes by an RNA aptamer lacking a G-quadruplex motif</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28945233/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Song, W., Filonov, G. S., Kim, H., Hirsch, M., Li, X., Moon, J. D., & Jaffrey, S. R.</td>
      <td name="td2">Imaging RNA polymerase III transcription using a photostable RNA-fluorophore complex</td>
      <td name="td3">Nature chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31178406/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Sjekloća, L., & Ferré-D'Amaré, A. R.</td>
      <td name="td2">Binding between G quadruplexes at the homodimer interface of the corn RNA aptamer strongly activates thioflavin T fluorescence</td>
      <td name="td3">Cell chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35294188/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Wu, J., Svensen, N., Song, W., Kim, H., Zhang, S., Li, X., & Jaffrey, S. R.</td>
      <td name="td2">Self-assembly of intracellular multivalent RNA complexes using dimeric Corn and Beetroot Aptamers</td>
      <td name="td3">American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Passalacqua, L. F. M., Starich, M. R., Link, K. A., Wu, J., Knutson, J. R.</td>
      <td name="td2">Co-crystal structures of the fluorogenic aptamer Beetroot show that close homology may not predict similar RNA architecture</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30485561/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Steinmetzger, C., Palanisamy, N., Gore, K. R., & Höbartner, C.</td>
      <td name="td2">A multicolor large stokes shift fluorogen-activating RNA aptamer with cationic chromophores</td>
      <td name="td3">Chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31740962/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Steinmetzger, C., Bessi, I., Lenz, A. K., & Höbartner, C.</td>
      <td name="td2">Structure-fluorescence activation relationships of a large Stokes shift fluorogenic RNA aptamer</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34112799/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Mieczkowski, M., Steinmetzger, C., Bessi, I., Lenz, A. K., Schmiedel, A.</td>
      <td name="td2">Large Stokes shift fluorescence activation in an RNA aptamer by intermolecular proton transfer to guanine</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37723244/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Jiang, L., Xie, X., Su, N., Zhang, D., Chen, X., Xu, X., Zhang, B.</td>
      <td name="td2">Large Stokes shift fluorescent RNAs for dual-emission fluorescence and bioluminescence imaging in live cells</td>
      <td name="td3">Nature methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20159999/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Carothers, J. M., Goler, J. A., Kapoor, Y., Lara, L., & Keasling, J. D.</td>
      <td name="td2">Selecting RNA aptamers for synthetic biology: investigating magnesium dependence and predicting binding affinity</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27730489/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Duchardt-Ferner, E., Juen, M., Kreutz, C., & Wöhnert, J. </td>
      <td name="td2">NMR resonance assignments for the tetramethylrhodamine binding RNA aptamer 3 in complex with the ligand 5-carboxy-tetramethylrhodamine</td>
      <td name="td3">Biomolecular NMR assignments</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31754719/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Duchardt-Ferner, E., Juen, M., Bourgeois, B., Madl, T., Kreutz, C.</td>
      <td name="td2">Structure of an RNA aptamer in complex with the  fluorophore tetramethylrhodamine</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10339553/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Grate, D., & Wilson, C.</td>
      <td name="td2">Laser-mediated, site-specific inactivation of RNA transcripts</td>
      <td name="td3">National Academy of Sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10926496/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Baugh, C., Grate, D., & Wilson, C.</td>
      <td name="td2">2.8 A crystal structure of the malachite green aptamer</td>
      <td name="td3">Molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12475353/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Nguyen, D. H., DeFina, S. C., Fink, W. H., & Dieckmann, T.</td>
      <td name="td2">Binding to an RNA aptamer changes the charge distribution and conformation of malachite green</td>
      <td name="td3">American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubs.acs.org/doi/full/10.1021/jp037273b" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Nguyen, D. H., Dieckmann, T., Colvin, M. E., & Fink, W. H.</td>
      <td name="td2">Dynamics studies of a malachite green−RNA complex revealing the origin of the red-shift and energetic contributions of stacking interactions</td>
      <td name="td3">Physical Chemistry B</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14695514/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Flinders, J., DeFina, S. C., Brackett, D. M., Baugh, C., Wilson, C.</td>
      <td name="td2">Recognition of planar and nonplanar Ligands in the malachite green±RNA aptamer complex</td>
      <td name="td3">Chembiochem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16144363/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Kolpashchikov D. M.</td>
      <td name="td2">Binary malachite green aptamer for fluorescent detection of nucleic acids</td>
      <td name="td3">American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18667307/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Furukawa, K., Abe, H., Abe, N., Harada, M., Tsuneda, S., & Ito, Y.</td>
      <td name="td2">Fluorescence generation from tandem repeats of a malachite green RNA aptamer using rolling circle transcription</td>
      <td name="td3">Bioorganic & medicinal chemistry letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19195013/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Zhang, X., Potty, A. S., Jackson, G. W., Stepanov, V., Tang, A., Liu, Y.</td>
      <td name="td2">Engineered 5S ribosomal RNAs displaying aptamers recognizing vascular endothelial growth factor and malachite green</td>
      <td name="td3">Journal of molecular recognition: JMR</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21523267/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Bernard Da Costa, J., & Dieckmann, T.</td>
      <td name="td2">Entropy and Mg2+ control ligand affinity and specificity in the malachite green binding RNA aptamer</td>
      <td name="td3">Molecular bioSystems</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22192051/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Sokoloski, J. E., Dombrowski, S. E., & Bevilacqua, P. C.</td>
      <td name="td2">Thermodynamics of ligand binding to a heterogeneous RNA population in the malachite green aptamer</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23984874/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Da Costa, J. B., Andreiev, A. I., & Dieckmann, T.</td>
      <td name="td2">Thermodynamics and kinetics of adaptive binding in the malachite green RNA aptamer</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/slct.201600154" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Wang, H., Wang, J., Sun, N., Cheng, H., Chen, H., & Pei, R.</td>
      <td name="td2">Selection and characterization of malachite green aptamers for the development of light-up probes</td>
      <td name="td3">ChemistrySelect</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27591602/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Zhou, Y., Chi, H., Wu, Y., Marks, R. S., & Steele, T. W. J.</td>
      <td name="td2">Organic additives stabilize RNA aptamer binding of malachite green</td>
      <td name="td3">Talanta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://link.springer.com/article/10.1007/s12161-017-1144-3#citeas" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Jia, J., Yan, S., Lai, X., Xu, Y., Liu, T., & Xiang, Y.</td>
      <td name="td2">Colorimetric aptasensor for detection of malachite green in fish sample based on RNA and gold nanoparticles</td>
      <td name="td3">Food Analytical Methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29513000/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Yerramilli, V. S., & Kim, K. H. (2018).</td>
      <td name="td2">Labeling RNAs in live cells using malachite green aptamer scaffolds as fluorescent probes</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31187804/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Luo, X., Chen, Z., Li, H., Li, W., Cui, L., & Huang, J.</td>
      <td name="td2">Exploiting the application of l-aptamer with excellent stability: an efficient sensing platform for malachite green in fish samples</td>
      <td name="td3">The Analyst</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35529731/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Wang, H., Wang, H., Zhang, M., Jia, Y., & Li, Z.</td>
      <td name="td2">A label-free aptamer-based biosensor for microRNA detection by the RNA-regulated fluorescence of malachite green</td>
      <td name="td3">RSC advances</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36373144/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">R O'Steen, M., & M Kolpashchikov, D.</td>
      <td name="td2">A self-assembling split aptamer multiplex assay for SARS-COVID19 and miniaturization of a malachite green DNA-based aptamer</td>
      <td name="td3">Sensors and actuators reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18776253/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Maasch, C., Buchner, K., Eulberg, D., Vonhoff, S., & Klussmann, S.</td>
      <td name="td2">Physicochemical stability of NOX-E36, a 40mer L-RNA (Spiegelmer) for therapeutic applications</td>
      <td name="td3">Nucleic acids symposium series</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18258851/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Ninichuk, V., Clauss, S., Kulkarni, O., Schmid, H., Segerer, S.</td>
      <td name="td2">Late onset of Ccl2 blockade with the Spiegelmer mNOX-E36-3'PEG prevents glomerulosclerosis and improves glomerular filtration rate in db/db mice</td>
      <td name="td3">The American journal of pathology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19156777/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Clauss, S., Gross, O., Kulkarni, O., Avila-Ferrufino, A., Radomska, E.</td>
      <td name="td2">Ccl2/Mcp-1 blockade reduces glomerular and interstitial macrophages but does not ameliorate renal pathology in collagen4A3-deficient mice with autosomal recessive Alport nephropathy</td>
      <td name="td3">The Journal of pathology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21813474/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Baeck, C., Wehr, A., Karlmark, K. R., Heymann, F., Vucur, M., Gassler, N.</td>
      <td name="td2">Pharmacological inhibition of the chemokine CCL2 (MCP-1) diminishes liver macrophage infiltration and steatohepatitis in chronic hepatic injury</td>
      <td name="td3">Gut</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24561613/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Ehling, J., Bartneck, M., Wei, X., Gremse, F., Fech, V., Möckel, D., Baeck, C.</td>
      <td name="td2">CCL2-dependent infiltrating macrophages promote angiogenesis in progressive liver fibrosis</td>
      <td name="td3">Gut</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24481979/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Baeck, C., Wei, X., Bartneck, M., Fech, V., Heymann, F., Gassler, N., Hittatiya, K.</td>
      <td name="td2">Pharmacological inhibition of the chemokine C-C motif chemokine ligand 2 (monocyte chemoattractant protein 1) accelerates liver fibrosis regression by suppressing Ly-6C(+) macrophage infiltration in mice</td>
      <td name="td3">Hepatology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25901662/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Oberthür D, Achenbach J, Gabdulkhakov A, Buchner K, Maasch C</td>
      <td name="td2">Crystal structure of a mirror-image L-RNA aptamer (Spiegelmer) in complex with the natural L-protein target CCL2</td>
      <td name="td3">Nat Commun</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25970072/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Kalnins, A., Thomas, M. N., Andrassy, M., Müller, S., Wagner, A.</td>
      <td name="td2">Spiegelmer Inhibition of MCP-1/CCR2--Potential as an Adjunct Immunosuppressive Therapy in Transplantation.</td>
      <td name="td3">Scandinavian journal of immunology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28186566/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Menne, J., Eulberg, D., Beyer, D., Baumann, M., Saudek, F., Valkusz, Z.</td>
      <td name="td2">C-C motif-ligand 2 inhibition with emapticap pegol (NOX-E36) in type 2 diabetic patients with albuminuria</td>
      <td name="td3">Nephrology, dialysis, transplantation</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28837800/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Boels, M. G. S., Koudijs, A., Avramut, M. C., Sol, W. M. P. J., Wang, G.</td>
      <td name="td2">Systemic Monocyte Chemotactic Protein-1 Inhibition Modifies Renal Macrophages and Restores Glomerular Endothelial Glycocalyx and Barrier Function in Diabetic Nephropathy.</td>
      <td name="td3">The American journal of pathology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed. ncbi. nlm. nih. gov/24570482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Padlan, C. S., Malashkevich, V. N., Almo, S. C., Levy, M., Brenowitz, M., & Girvin, M. E.</td>
      <td name="td2">An RNA aptamer possessing a novel monovalent cation-mediated fold inhibits lysozyme catalysis by inhibiting the binding of long natural substrates</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9346949/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Thomas, M., Chédin, S., Carles, C., Riva, M., Famulok, M., & Sentenac, A.</td>
      <td name="td2">Selective targeting and inhibition of yeast RNA polymerase II by RNA aptamers</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16341226/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Kettenberger, H., Eisenführ, A., Brueckner, F., Theis, M., Famulok, M., & Cramer, P.</td>
      <td name="td2">Structure of an RNA polymerase II-RNA inhibitor complex elucidates transcription regulation by noncoding RNAs</td>
      <td name="td3">Nature structural & molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29570714/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Klopf, E., Moes, M., Amman, F., Zimmermann, B., von Pelchrzim, F.</td>
      <td name="td2">Nascent RNA signaling to yeast RNA Pol II during transcription elongation</td>
      <td name="td3">PloS one</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32663063/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Boots, J. L., von Pelchrzim, F., Weiss, A., Zimmermann, B., Friesacher, T.</td>
      <td name="td2">RNA polymerase II-binding aptamers in human ACRO1 satellites disrupt transcription in cis</td>
      <td name="td3">Transcription</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9772167/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Wilson, C., Nix, J., & Szostak, J.</td>
      <td name="td2">Functional requirements for specific ligand recognition by a biotin-binding RNA pseudoknot</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10089439/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Nix, J. C., Newhoff, A. R., & Wilson, C.</td>
      <td name="td2">Preliminary crystallographic characterization of an in vitro evolved biotin-binding RNA pseudoknot</td>
      <td name="td3">Acta crystallographica. Section D, Biological crystallography</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10698630/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Nix, J., Sussman, D., & Wilson, C.</td>
      <td name="td2">The 1.3 A crystal structure of a biotin-binding pseudoknot and the basis for RNA molecular recognition</td>
      <td name="td3">Journal of molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26903199/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Sung, T. C., Chen, W. Y., Shah, P., & Chen, C. S.</td>
      <td name="td2">A replaceable liposomal aptamer for the ultrasensitive and rapid detection of biotin</td>
      <td name="td3">Scientific reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35340298/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Uppala, J. K., Ghosh, C., Sabat, G., & Dey, M.</td>
      <td name="td2">Pull-down of Biotinylated RNA and Associated Proteins</td>
      <td name="td3">Bio-protocol</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8289245/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Jensen KB, Green L, MacDougal-Waugh S, Tuerk C.</td>
      <td name="td2">Characterization of an in vitro-selected RNA ligand to the HIV-1 Rev protein</td>
      <td name="td3">J Mol Biol</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Ye X, Gorin A, Ellington AD, Patel DJ</td>
      <td name="td2">Deep penetration of an alpha-helix into a widened RNA major groove in the HIV-1 rev peptide-RNA aptamer complex</td>
      <td name="td3">Nat Struct Biol</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10467126/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Ye X, Gorin A, Frederick R, et al</td>
      <td name="td2">RNA architecture dictates the conformations of a bound peptide</td>
      <td name="td3">Chem Biol</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10647177/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Jiang F, Gorin A, Hu W, et al.</td>
      <td name="td2">Anchoring an extended HTLV-1 Rex peptide within an RNA major groove containing junctional base triples</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18922466/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Daugherty MD, D'Orso I, Frankel AD.</td>
      <td name="td2">A solution to limited genomic capacity: using adaptable binding surfaces to assemble the functional HIV Rev oligomer on RNA</td>
      <td name="td3">Mol Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23972852/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Casu F, Duggan BM, Hennig M</td>
      <td name="td2">The arginine-rich RNA-binding motif of HIV-1 Rev is intrinsically disordered and folds upon RRE binding</td>
      <td name="td3">Biophys J</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25486594/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Jayaraman B, Crosby DC, Homer C, Ribeiro I, Mavor D, Frankel AD</td>
      <td name="td2">RNA-directed remodeling of the HIV-1 protein Rev orchestrates assembly of the Rev-Rev response element complex</td>
      <td name="td3">Elife</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10233958/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Baskerville, S., Zapp, M., & Ellington, A. D.</td>
      <td name="td2">Anti-Rex aptamers as mimics of the Rex-binding element</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12925996/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Luedtke, N. W., & Tor, Y.</td>
      <td name="td2">Fluorescence-based methods for evaluating the RNA affinity and specificity of HIV-1 Rev-RRE inhibitors</td>
      <td name="td3">Biopolymers</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18351707/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Sugaya, M., Nishino, N., Katoh, A., & Harada, K.</td>
      <td name="td2">Amino acid requirement for the high affinity binding of a selected arginine-rich peptide with the HIV Rev-response element RNA</td>
      <td name="td3">Journal of peptide science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26896646/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Prado, S., Beltrán, M., Coiras, M., Bedoya, L. M., Alcamí, J., & Gallego, J.</td>
      <td name="td2">Bioavailable inhibitors of HIV-1 RNA biogenesis identified through a Rev-based screen</td>
      <td name="td3">Biochemical pharmacology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC203359/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Warren, A. J., Bravo, J., Williams, R. L., & Rabbitts, T. H</td>
      <td name="td2">Structural basis for the heterodimeric interaction between the acute leukaemia-associated transcription factors AML1 and CBFbeta</td>
      <td name="td3">The EMBO journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12604126/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Asou N.</td>
      <td name="td2">The role of a Runt domain transcription factor AML1/RUNX1 in leukemogenesis and its clinical implications. </td>
      <td name="td3">Critical reviews in oncology/hematology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2777437/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Barton, J. L., Bunka, D. H., Knowling, S. E., Lefevre, P., Warren, A. J.</td>
      <td name="td2">Characterization of RNA aptamers that disrupt the RUNX1-CBFbeta/DNA complex. </td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20140822/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Mongelard, F., & Bouvet, P</td>
      <td name="td2">AS-1411, a guanosine-rich oligonucleotide aptamer targeting nucleolin for the potential treatment of cancer, including acute myeloid leukemia.</td>
      <td name="td3">Molecular therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23997091/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Nomura, Y., Tanaka, Y., Fukunaga, J., Fujiwara, K., Chiba, M., Iibuchi, H.</td>
      <td name="td2">Solution structure of a DNA mimicking motif of an RNA aptamer against transcription factor AML1 Runt domain</td>
      <td name="td3">Journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3683927/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Fukunaga, J., Nomura, Y., Tanaka, Y., Amano, R., Tanaka, T., Nakamura, Y.</td>
      <td name="td2">The Runt domain of AML1 (RUNX1) binds a sequence-conserved RNA motif that mimics a DNA element</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3895837/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Yang, M., Jiang, G., Li, W., Qiu, K., Zhang, M., Carter, C. M.</td>
      <td name="td2">Developing aptamer probes for acute myelogenous leukemia detection and surface protein biomarker discovery</td>
      <td name="td3">Journal of hematology & oncology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26204224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Zhao, N., Pei, S. N., Qi, J., Zeng, Z., Iyer, S. P., Lin, P., Tung, C. H., & Zu, Y</td>
      <td name="td2">Oligonucleotide aptamer-drug conjugates for targeted therapy of acute myeloid leukemia</td>
      <td name="td3">Biomaterials</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27514505/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Zaimy, M. A., Jebali, A., Bazrafshan, B., Mehrtashfar, S., Shabani, S., Tavakoli, A.</td>
      <td name="td2">Coinhibition of overexpressed genes in acute myeloid leukemia subtype M2 by gold nanoparticles functionalized with five antisense oligonucleotides and one anti-CD33(+)/CD34(+) aptamer</td>
      <td name="td3">Cancer gene therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27766833/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Amano, R., Takada, K., Tanaka, Y., Nakamura, Y., Kawai, G., Kozu, T., & Sakamoto, T</td>
      <td name="td2">Kinetic and Thermodynamic Analyses of Interaction between a High-Affinity RNA Aptamer and Its Target Protein</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26972431/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Kadioglu, O., & Efferth, T</td>
      <td name="td2">Peptide aptamer identified by molecular docking targeting translationally controlled tumor protein in leukemia cells</td>
      <td name="td3">Investigational new drugs</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30519686/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Yang, C., , Wang, Y., , Ge, M. H., , Fu, Y. J., , Hao, R., , Islam, K.</td>
      <td name="td2">Rapid identification of specific DNA aptamers precisely targeting CD33 positive leukemia cells through a paired cell-based approach</td>
      <td name="td3">Biomaterials science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31824168/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Tan, Y., Li, Y., & Tang, F</td>
      <td name="td2">Nucleic Acid Aptamer: A Novel Potential Diagnostic and Therapeutic Tool for Leukemia</td>
      <td name="td3">OncoTargets and therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9383458/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Wallis, M. G., von Ahsen, U., Schroeder, R., & Famulok, M.</td>
      <td name="td2">A novel RNA motif for neomycin recognition</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10425683/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Jiang, L., Majumdar, A., Hu, W., Jaishree, T. J., Xu, W., & Patel, D. J.</td>
      <td name="td2">Saccharide-RNA recognition in a complex formed between neomycin B and an RNA aptamer</td>
      <td name="td3"> Structure </td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10908357/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Cowan, J. A., Ohyama, T., Wang, D., & Natarajan, K</td>
      <td name="td2">Recognition of a cognate RNA aptamer by neomycin B: quantitative evaluation of hydrogen bonding and electrostatic interactions</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18000033/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Weigand, J. E., Sanchez, M., Gunnesch, E. B., Zeiher, S., Schroeder, R., & Suess, B.</td>
      <td name="td2">Screening for engineered neomycin riboswitches that control translation initiation</td>
      <td name="td3"> RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19217276/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">de-los-Santos-Alvarez, N., Lobo-Castañón, M. J., Miranda-Ordieres, A. J., & Tuñón-Blanco, P. </td>
      <td name="td2">SPR sensing of small molecules with modified RNA aptamers: detection of neomycin B</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20478079/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Wilhelmsson L. M.  Quarterly reviews of biophysics, 43(2), 159–183.</td>
      <td name="td2">Fluorescent nucleic acid base analogues</td>
      <td name="td3">Quarterly reviews of biophysics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22951899/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Jeon, J., Lee, K. H., & Rao, J.</td>
      <td name="td2"> A strategy to enhance the binding affinity of fluorophore-aptamer pairs for RNA tagging with neomycin conjugation</td>
      <td name="td3"> Chemical communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24757168/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Ilgu, M., Fulton, D. B., Yennamalli, R. M., Lamm, M. H., Sen, T. Z., & Nilsen-Hamilton, M.. </td>
      <td name="td2">An adaptable pentaloop defines a robust neomycin-B RNA aptamer with conditional ligand-bound structures</td>
      <td name="td3">. RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26661511/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Duchardt-Ferner, E., Gottstein-Schmidtke, S. R., Weigand, J. E., Ohlenschläger, O.</td>
      <td name="td2"> What a Difference an OH Makes: Conformational Dynamics as the Basis for the Ligand Specificity of the Neomycin-Sensing Riboswitch</td>
      <td name="td3">Angewandte Chemie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26942739/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Ling, K., Jiang, H., Zhang, L., Li, Y., Yang, L., Qiu, C., & Li, F. R.  </td>
      <td name="td2"> A self-assembling RNA aptamer-based nanoparticle sensor for fluorometric detection of Neomycin B in milk</td>
      <td name="td3">Analytical and bioanalytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30462266/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Gustmann, H., Segler, A. J., Gophane, D. B., Reuss, A. J., Grünewald, C.</td>
      <td name="td2"> Structure guided fluorescence labeling reveals a two-step binding mechanism of neomycin to its RNA aptamer</td>
      <td name="td3"> Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33237073/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Bastian, A. A., Gruszka, A., Jung, P., & Herrmann, A</td>
      <td name="td2">Aptamer protective groups tolerate different reagents and reactions for regioselective modification of neomycin B</td>
      <td name="td3">Organic & biomolecular chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9436913/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Wallace, S. T., & Schroeder, R. </td>
      <td name="td2">In vitro selection and characterization of streptomycin-binding RNAs: recognition discrimination between antibiotics</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12618190/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Tereshko, V., Skripkin, E., & Patel, D. J.</td>
      <td name="td2">Encapsulating streptomycin within a small 40-mer RNA</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16621675/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Lee, J. F., Stovall, G. M., & Ellington, A. D.</td>
      <td name="td2">Aptamer therapeutics advance</td>
      <td name="td3">Chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17355135/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">de-los-Santos-Alvarez, N., Lobo-Castañón, M. J., Miranda-Ordieres, A. J.</td>
      <td name="td2">Modified-RNA aptamer-based sensor for competitive impedimetric assay of neomycin B</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18388495/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Windbichler, N., von Pelchrzim, F., Mayer, O., Csaszar, E., & Schroeder, R.</td>
      <td name="td2">Isolation of small RNA-binding proteins from E. coli: evidence for frequent interaction of RNAs with RNA polymerase</td>
      <td name="td3">RNA biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20426747/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Tombelli, S., & Mascini, M.</td>
      <td name="td2">Aptamers biosensors for pharmaceutical compounds</td>
      <td name="td3">Combinatorial chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22173871/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Bose, D., Jayaraj, G., Suryawanshi, H., Agarwala, P., Pore, S. K., Banerjee, R., & Maiti, S.</td>
      <td name="td2">The tuberculosis drug streptomycin as a potential cancer therapeutic: inhibition of miR-21 function by directly targeting its precursor</td>
      <td name="td3">Angewandte Chemie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22793869/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Derbyshire, N., White, S. J., Bunka, D. H., Song, L., Stead, S., Tarbin, J.</td>
      <td name="td2">Toggled RNA aptamers against aminoglycosides allowing facile detection of antibiotics using gold nanoparticle assays</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23601877/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Zhou, N., Wang, J., Zhang, J., Li, C., Tian, Y., & Wang, J. </td>
      <td name="td2">Selection and identification of streptomycin-specific single-stranded DNA aptamers and the application in the detection of streptomycin in honey</td>
      <td name="td3">Talanta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23192876/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Nicholson, B. L., Zaslaver, O., Mayberry, L. K., Browning, K. S., & White, K. A. </td>
      <td name="td2">Tombusvirus Y-shaped translational enhancer forms a complex with eIF4F and can be functionally replaced by heterologous translational enhancers</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27281393/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Nick, T. A., de Oliveira, T. E., Pilat, D. W., Spenkuch, F., Butt, H. J., Helm, M.</td>
      <td name="td2">Stability of a Split Streptomycin Binding Aptamer</td>
      <td name="td3">The journal of physical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28965053/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Lin, B., Yu, Y., Cao, Y., Guo, M., Zhu, D., Dai, J., & Zheng, M.</td>
      <td name="td2">Point-of-care testing for streptomycin based on aptamer recognizing and digital image colorimetry by smartphone</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31757139/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Baptista, L. A., & Netz, P. A.</td>
      <td name="td2">Single molecule force spectroscopy of a streptomycin-binding RNA aptamer: An out-of-equilibrium molecular dynamics study. </td>
      <td name="td3">The Journal of chemical physics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.sciencedirect.com/science/article/abs/pii/S088915752300296X" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Yuanyuan Hui, Ding Yang, Weizhe Wang, Yingying Liu, Chao He, Bini Wang</td>
      <td name="td2">Truncated affinity-improved aptamer for selective and sensitive detection of streptomycin in dairy products with label-free electrochemical aptasensor</td>
      <td name="td3">ournal of Food Composition and Analysis</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35297324/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Nosrati, M., & Roushani, M.</td>
      <td name="td2">Three-dimensional modeling of streptomycin binding single-stranded DNA for aptamer-based biosensors, a molecular dynamics simulation approach</td>
      <td name="td3">Journal of biomolecular structure & dynamics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11557342/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Berens, C., Thain, A. & Schroeder, R.</td>
      <td name="td2">A tetracycline-binding RNA aptamer.</td>
      <td name="td3">Bioorganic & medicinal chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href=" https://pubmed.ncbi.nlm.nih.gov/12655001/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Suess, B., Hanson, S., Berens, C., Fink, B., Schroeder, R., & Hillen, W</td>
      <td name="td2">Conditional gene expression by controlling translation with tetracycline-binding aptamers</td>
      <td name="td3"> Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12950926/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Hanson, S., Berthelot, K., Fink, B., McCarthy, J. E. G. & Suess, B.</td>
      <td name="td2"> Tetracycline-aptamer-mediated translational regulation in yeast</td>
      <td name="td3">Molecular microbiology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15769877/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Hanson, S., Bauer, G., Fink, B. & Suess, B</td>
      <td name="td2"> Molecular analysis of a synthetic tetracycline-binding riboswitch</td>
      <td name="td3"> RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15723047/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Bayer, T. S. & Smolke, C. D.</td>
      <td name="td2">Programmable ligand-controlled riboregulators of eukaryotic gene expression</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16707663/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Müller, M., Weigand, J., Weichenrieder, O. & Suess, B</td>
      <td name="td2">Thermodynamic characterization of an engineered tetracyline-binding riboswitch</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17567606/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Weigand, J. E. & Suess, B</td>
      <td name="td2">Tetracycline aptamer-controlled regulation of pre-mRNA splicing in yeast</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18940672/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Xiao, H., Edwards, T. E. & Ferré-D'Amaré, A. R.</td>
      <td name="td2">Structural basis for specific, high-affinity tetracycline binding by an in vitro evolved aptamer and artificial riboswitch</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19592423/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Xiao, H., Edwards, T. E. & Ferré-D'Amaré, A. R.</td>
      <td name="td2">A fast and efficient translational control system for conditional expression of yeast genes</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21603688/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Wittmann, A. & Suess, B</td>
      <td name="td2">Selection of tetracycline inducible self-cleaving ribozymes as synthetic devices for gene regulation in yeast</td>
      <td name="td3">Molecular bioSystems</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24678266/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Demolli, S., Geist, M. M., Weigand, J. E., Matschiavelli, N., Suess, B., & Rother, M</td>
      <td name="td2">Development of β -lactamase as a tool for monitoring conditional gene expression by a tetracycline-riboswitch in Methanosarcina acetivorans</td>
      <td name="td3"> Archaea</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25517161/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Reuss, A. J., Vogel, M., Weigand, J. E., Suess, B. & Wachtveitl, J</td>
      <td name="td2">Tetracycline determines the conformation of its aptamer at physiological magnesium concentrations</td>
      <td name="td3">Biophysical journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25265236/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Beilstein, K., Wittmann, A., Grez, M., & Suess, B</td>
      <td name="td2">Conditional control of mammalian gene expression by tetracycline-dependent hammerhead ribozymes</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href=" https://pubmed.ncbi.nlm.nih.gov/27805569/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Zhong, G., Wang, H., Bailey, C. C., Gao, G., & Farzan</td>
      <td name="td2">Rational design of aptazyme riboswitches for efficient control of gene expression in mammalian cells</td>
      <td name="td3"> eLife</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27595406/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Liu, Y., Zhan, Y., Chen, Z., He, A., Li, J., Wu, H., Liu, L., Zhuang, C.</td>
      <td name="td2">Directing cellular information flow via CRISPR signal conductors</td>
      <td name="td3">Nature methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27994029/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Domin, G., Findeiß, S., Wachsmuth, M., Will, S., Stadler, P. F., & Mörl, M</td>
      <td name="td2">Applicability of a computational design approach for synthetic riboswitches</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29420816/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Vogel, M., Weigand, J. E., Kluge, B., Grez, M., & Suess, B</td>
      <td name="td2">A small, portable RNA device for the control of exon skipping in mammalian cells</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30337459/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Hetzke, T., Vogel, M., Gophane, D. B., Weigand, J. E., Suess, B.</td>
      <td name="td2">Influence of Mg2+ on the conformational flexibility of a tetracycline aptamer</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30513199/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Groher, A. C., Jager, S., Schneider, C., Groher, F., Hamacher, K., & Suess, B</td>
      <td name="td2">Tuning the Performance of Synthetic Riboswitches using Machine Learning</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32024835/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Strobel, B., Spöring, M., Klein, H., Blazevic, D., Rust, W., Sayols, S.</td>
      <td name="td2">High-throughput identification of synthetic riboswitches by barcode-free amplicon-sequencing in human cells</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37459466/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Kelvin, D. & Suess, B</td>
      <td name="td2">Tapping the potential of synthetic riboswitches: reviewing the versatility of the tetracycline aptamer</td>
      <td name="td3">RNA biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38168982/" target="_blank" style="color:#520049"><b>2024</b></a></td>
      <td name="td1">Luo, L., Jea, J. D., Wang, Y., Chao, P. W., & Yen, L</td>
      <td name="td2">Control of mammalian gene expression by modulation of polyA signal cleavage at 5' UTR</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7510417/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Jenison, R. D., Gill, S. C., Pardi, A., & Polisky, B.</td>
      <td name="td2">High-resolution molecular discrimination by RNA</td>
      <td name="td3">Science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9224568/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Tang, J., & Breaker, R. R.</td>
      <td name="td2">Rational design of allosteric ribozymes</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9253414/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Zimmermann, G. R., Jenison, R. D., Wick, C. L., Simorre, J. P., & Pardi, A.</td>
      <td name="td2">Interlocking structural motifs mediate molecular discrimination by a theophylline-binding RNA</td>
      <td name="td3">Nature structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9636066/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Zimmermann, G. R., Shields, T. P., Jenison, R. D., Wick, C. L., & Pardi, A.</td>
      <td name="td2">A semiconserved residue inhibits complex formation by stabilizing interactions in the free state of a theophylline-binding RNA</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10097080/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Soukup, G. A., & Breaker, R. R.</td>
      <td name="td2">Engineering precision RNA molecular switches</td>
      <td name="td3">National Academy of Sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10425680/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Soukup, G. A., & Breaker, R. R.</td>
      <td name="td2">Design of allosteric hammerhead ribozymes activated by ligand-induced structure stabilization</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10836787/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Zimmermann, G. R., Wick, C. L., Shields, T. P., Jenison, R. D., & Pardi, A.</td>
      <td name="td2">Molecular interactions and metal binding in the theophylline-binding core of an RNA aptamer</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11266567/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Jose, A. M., Soukup, G. A., & Breaker, R. R.</td>
      <td name="td2">Cooperative binding of effectors by an allosteric ribozyme</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15109659/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Endo, M., Mitsui, T., Okuni, T., Kimoto, M., Hirao, I., & Yokoyama, S.</td>
      <td name="td2">Unnatural base pairs mediate the site-specific incorporation of an unnatural hydrophobic component into RNA transcripts. </td>
      <td name="td3">Bioorganic & medicinal chemistry letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15004248/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Suess, B., Fink, B., Berens, C., Stentz, R., & Hillen, W.</td>
      <td name="td2"> A theophylline responsive riboswitch based on helix slipping controls gene expression in vivo.</td>
      <td name="td3"> Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15826145/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Anderson, P. C., & Mecozzi, S.</td>
      <td name="td2">Unusually short RNA sequences: design of a 13-mer RNA that selectively binds and recognizes theophylline</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15723047/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Bayer, T. S., & Smolke, C. D.</td>
      <td name="td2"> Programmable ligand-controlled riboregulators of eukaryotic gene expression. </td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16996258/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Hall, B., Hesselberth, J. R., & Ellington, A. D.</td>
      <td name="td2">Computational selection of nucleic acid biosensors via a slip structure model</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17317571/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Lynch, S. A., Desai, S. K., Sajja, H. K., & Gallivan, J. P.</td>
      <td name="td2">A high-throughput screen for synthetic riboswitches reveals mechanistic insights into their function </td>
      <td name="td3"> Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19033367/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Lynch, S. A., & Gallivan, J. P.</td>
      <td name="td2">A flow cytometry-based screen for synthetic riboswitches</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20041206/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Chen, X., & Ellington, A. D.</td>
      <td name="td2"> Design principles for ligand-sensing, conformation-switching ribozymes</td>
      <td name="td3"> PLoS computational biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22733807/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Kobori, S., Ichihashi, N., Kazuta, Y., Matsuura, T., & Yomo, T.</td>
      <td name="td2"> Kinetic analysis of aptazyme-regulated gene expression in a cell-free translation system: modeling of ligand-dependent and -independent expression</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23452219/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Penchovsky R.</td>
      <td name="td2">Computational design and biosensor applications of small molecule-sensing allosteric ribozymes</td>
      <td name="td3">Biomacromolecules</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23969558/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Nakahira, Y., Ogawa, A., Asano, H., Oyama, T., & Tozawa, Y.</td>
      <td name="td2">Theophylline-dependent riboswitch as a novel genetic tool for strict regulation of protein expression in Cyanobacterium Synechococcus elongatus PCC 7942</td>
      <td name="td3"> Plant & cell physiology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23654267/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Ceres, P., Garst, A. D., Marcano-Velázquez, J. G., & Batey, R. T.</td>
      <td name="td2">Modularity of select riboswitch expression platforms enables facile engineering of novel genetic regulatory devices</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25726466/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Badelt, S., Hammer, S., Flamm, C., & Hofacker, I. L.</td>
      <td name="td2">Thermodynamic and kinetic folding of riboswitches</td>
      <td name="td3"> Methods in enzymology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26594238/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Wei, K. Y., & Smolke, C. D</td>
      <td name="td2">Engineering dynamic cell cycle control with synthetic small molecule-responsive RNA devices</td>
      <td name="td3">Journal of biological engineering</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26642994/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Zhou, Q., Xia, X., Luo, Z., Liang, H., & Shakhnovich, E.</td>
      <td name="td2"> Searching the Sequence Space for Potent Aptamers Using SELEX in Silico</td>
      <td name="td3">Journal of chemical theory and computation</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29319503/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Liu, Y., Li, J., Chen, Z., Huang, W., & Cai, Z.</td>
      <td name="td2">ynthesizing artificial devices that redirect cellular information at will</td>
      <td name="td3">eLife</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30119599/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Page, K., Shaffer, J., Lin, S., Zhang, M., & Liu, J. M.</td>
      <td name="td2">Engineering Riboswitches in Vivo Using Dual Genetic Selection and Fluorescence-Activated Cell Sorting</td>
      <td name="td3"> ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30773480/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">You, M., Litke, J. L., Wu, R., & Jaffrey, S. R.</td>
      <td name="td2">Detection of Low-Abundance Metabolites in Live Cells Using an RNA Integrator</td>
      <td name="td3">Cell chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31490060/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Tamiev, D., Lantz, A., Vezeau, G., Salis, H., & Reuel, N. F.</td>
      <td name="td2"> Controlling Heterogeneity and Increasing Titer from Riboswitch-Regulated Bacillus subtilis Spores for Time-Delayed Protein Expression Applications</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32142605/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Wrist, A., Sun, W., & Summers, R. M.</td>
      <td name="td2">The Theophylline Aptamer: 25 Years as an Important Tool in Cellular Engineering Research.</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9383430/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Wang, Y., & Rando, R. R.</td>
      <td name="td2">Specific binding of aminoglycoside antibiotics to RNA</td>
      <td name="td3"> Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9070426/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Jiang, L., Suri, A. K., Fiala, R., & Patel, D. J.</td>
      <td name="td2">Accharide-RNA recognition in an aminoglycoside antibiotic-RNA aptamer complex</td>
      <td name="td3"> SChemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9731769/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Jiang, L., & Patel, D. J. </td>
      <td name="td2">Solution structure of the tobramycin-RNA aptamer complex</td>
      <td name="td3">Nature structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14769995/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Hartmuth, K., Vornlocher, H. P., & Lührmann, R. </td>
      <td name="td2">Tobramycin affinity tag purification of spliceosomes</td>
      <td name="td3">Methods in molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16217837/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Keller, K. M., Breeden, M. M., Zhang, J., Ellington, A. D., & Brodbelt, J. S.</td>
      <td name="td2"> Electrospray ionization of nucleic acid aptamer/small molecule complexes for screening aptamer selectivity. </td>
      <td name="td3">Journal of mass spectrometry : JMS</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25337781/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Liu, J., Wagan, S., Dávila Morris, M., Taylor, J., & White, R. J.  </td>
      <td name="td2">Achieving reproducible performance of electrochemical, folding aptamer-based sensors on microelectrodes: challenges and prospects</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25835184/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Schoukroun-Barnes, L. R., & White, R. J.</td>
      <td name="td2"> Rationally designing aptamer sequences with reduced affinity for controlled sensor performance</td>
      <td name="td3">Sensors</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29594665/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Han, X., Zhang, Y., Nie, J., Zhao, S., Tian, Y., & Zhou, N.</td>
      <td name="td2">Gold nanoparticle based photometric determination of tobramycin by using new specific DNA aptamers</td>
      <td name="td3">Mikrochimica acta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30356136/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Auwardt, S. L., Seo, Y. J., Ilgu, M., Ray, J., Feldges, R. R., Shubham, S.</td>
      <td name="td2"> Aptamer-enabled uptake of small molecule ligands</td>
      <td name="td3">Scientific reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30268963/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Nie, J., Yuan, L., Jin, K., Han, X., Tian, Y., & Zhou, N. </td>
      <td name="td2">Electrochemical detection of tobramycin based on enzymes-assisted dual signal amplification by using a novel truncated aptamer with high affinity</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31625087/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Zhou, N., Cai, R., & Han, X.  S. </td>
      <td name="td2">Creening, Post-SELEX Optimization and Application of DNA Aptamers Specific for Tobramycin</td>
      <td name="td3">Methods in molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35217273/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Wang, J., Li, H., Du, C., Li, Y., Ma, X., Yang, C., Xu, W., & Sun, C. </td>
      <td name="td2">Structure-switching aptamer triggering signal amplification strategy for tobramycin detection based on hybridization chain reaction and fluorescence synergism. </td>
      <td name="td3">Talanta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37791877/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Kraus, L., Duchardt-Ferner, E., Bräuchle, E., Fürbacher, S., Kelvin, D., Marx, H.</td>
      <td name="td2"> Development of a novel tobramycin dependent riboswitch</td>
      <td name="td3"> Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8504070/" target="_blank" style="color:#520049"><b>1993</b></a></td>
      <td name="td1">Connell, G. J., Illangesekare, M., & Yarus, M.</td>
      <td name="td2">Three small ribooligonucleotides with specific arginine sites</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12124337/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Lupold, S. E., Hicke, B. J., Lin, Y., & Coffey, D. S.</td>
      <td name="td2">Identification and characterization of nuclease-stabilized RNA molecules that bind human prostate cancer cells via the prostate-specific membrane antigen</td>
      <td name="td3">Cancer research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16740739/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Chu, T. C., Twu, K. Y., Ellington, A. D., & Levy, M.</td>
      <td name="td2">Aptamer mediated siRNA delivery</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20550178/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Kim, D., Jeong, Y. Y., & Jon, S.</td>
      <td name="td2">A drug-loaded aptamer-gold nanoparticle bioconjugate for combined CT imaging and therapy of prostate cancer</td>
      <td name="td3">ACS nano</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22004414/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Rockey, W. M., Hernandez, F. J., Huang, S. Y., Cao, S., Howell, C. A., Thomas, G. S.</td>
      <td name="td2">Rational truncation of an RNA aptamer to prostate-specific membrane antigen using computational structural modeling</td>
      <td name="td3">Nucleic acid therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25450401/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Baek, S. E., Lee, K. H., Park, Y. S., Oh, D. K., Oh, S., Kim, K. S., & Kim, D. E.</td>
      <td name="td2">RNA aptamer-conjugated liposome as an efficient anticancer drug delivery vehicle targeting cancer cells in vivo</td>
      <td name="td3">Journal of controlled release</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32525981/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Ptacek, J., Zhang, D., Qiu, L., Kruspe, S., Motlova, L., Kolenko, P., Novakova, Z.</td>
      <td name="td2">Structural basis of prostate-specific membrane antigen recognition by the A9g RNA aptamer</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12163074/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Carola Hunte 1, Hartmut Michel.</td>
      <td name="td2">Crystallisation of membrane proteins mediated by antibody fragments</td>
      <td name="td3">Current opinion in structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubs.acs.org/doi/10.1021/ja00084a010" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Michael Famulok</td>
      <td name="td2">Molecular Recognition of Amino Acids by RNA-Aptamers: An L-Citrulline Binding RNA Motif and Its Evolution into an L-Arginine Binder</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8532517/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">P Burgstaller, M Kochoyan, M Famulok</td>
      <td name="td2">Structural probing and damage selection of citrulline- and arginine-specific RNA aptamers identify base positions required for binding</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8604334/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">A Geiger, P Burgstaller, H von der Eltz, A Roeder, M Famulok</td>
      <td name="td2">RNA aptamers that bind L-arginine with sub-micromolar dissociation constants and high enantioselectivity</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Y Yang, M Kochoyan, P Burgstaller, E Westhof, M Famulok</td>
      <td name="td2">Structural basis of ligand discrimination by two related RNA aptamers resolved by NMR spectroscopy</td>
      <td name="td3">Science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9631062/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">A Nolte, S Klussmann, R Bald, V A Erdmann, J P Fürste</td>
      <td name="td2">Mirror-design of L-oligonucleotide ligands binding to L-arginine</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15801729/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Agnès Brumbt, Corinne Ravelet, Catherine Grosset, Anne Ravel, Annick Villet, Eric Peyrin</td>
      <td name="td2">Chiral stationary phase based on a biostable L-RNA aptamer</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7508262/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Lorsch JR, Szostak JW</td>
      <td name="td2">In vitro selection of RNA aptamers specific for cyanocobalamin</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10089440/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Sussman D, Greensides D, Reilly K, Wilson C</td>
      <td name="td2">Preliminary characterization of crystals of an in vitro evolved cyanocobalamin (vitamin B12) binding RNA</td>
      <td name="td3">Acta crystallographica. Section D, Biological crystallography</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10625428/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Sussman D, Nix JC, Wilson C</td>
      <td name="td2">The structural basis for molecular recognition by the vitamin B 12 RNA aptamer</td>
      <td name="td3">Nature structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10903943/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Sussman D, Wilson C</td>
      <td name="td2">A water channel in the core of the vitamin B(12) RNA aptamer</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18672888/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Gopinath SC, Awazu K, Fujimaki M, Sugimoto K, Ohki Y, Komatsubara T</td>
      <td name="td2">Influence of nanometric holes on the sensitivity of a waveguide-mode sensor: label-free nanosensor for the analysis of RNA aptamer-ligand interactions</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22658959/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Selvakumar LS, Thakur MS</td>
      <td name="td2">Nano RNA aptamer wire for analysis of vitamin B₁₂</td>
      <td name="td3">Analytical biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2820749/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Buddai, S. K., Layzer, J. M., Lu, G., Rusconi, C. P., Sullenger, B. A.</td>
      <td name="td2">An Anticoagulant RNA Aptamer That Inhibits Proteinase-Cofactor Interactions within Prothrombinase</td>
      <td name="td3">Biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4753633/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Soule, E. E., Bompiani, K. M., Woodruff, R. S., & Sullenger, B. A.</td>
      <td name="td2">Targeting Two Coagulation Cascade Proteases with a Bivalent Aptamer Yields a Potent and Antidote-Controllable Anticoagulant</td>
      <td name="td3">Nucleic acid therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29863725/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Gunaratne, R., Kumar, S., Frederiksen, J. W., Stayrook, S., Lohrmann, J. L., Perry, K.</td>
      <td name="td2">Combination of aptamer and drug for reversible anticoagulation in cardiopulmonary bypass</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35021888/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Chabata, C. V., Frederiksen, J. W., Olson, L. B., Naqvi, I. A., Hall, S. E., Gunaratne, R.</td>
      <td name="td2">Combining Heparin and a FX/Xa Aptamer to Reduce Thrombin Generation in Cardiopulmonary Bypass and COVID-19</td>
      <td name="td3">Nucleic acid therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://onlinelibrary.wiley.com/doi/10.1002/anie.199410841" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Dipl.-Chem. Petra Burgstaller, Dr. Michael Famulok</td>
      <td name="td2">Isolation of RNA Aptamers for Biological Cofactors by In Vitro Selection†</td>
      <td name="td3">Nature</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8642604/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Fan P, Suri AK, Fiala R, Live D, Patel DJ.</td>
      <td name="td2">Molecular recognition in the FMN-RNA aptamer complex</td>
      <td name="td3">J Mol Biol</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubs.acs.org/doi/10.1021/ja962918p" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Petra Burgstaller and Michael Famulok</td>
      <td name="td2">Flavin-Dependent Photocleavage of RNA at G·U Base Pairs</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10397790/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Schneider C, Sühnel J.</td>
      <td name="td2">A molecular dynamics simulation of the flavin mononucleotide-RNA aptamer complex</td>
      <td name="td3">Biopolymers</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12903340/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Jiang, F., Patel, D. J., Zhang, X., Zhao, H., & Jones, R. A</td>
      <td name="td2">Specific labeling approaches to guanine and adenine imino and amino proton assignments in the AMP-RNA aptamer complex.</td>
      <td name="td3">Journal of biomolecular NMR</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11377174/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Araki M, Okuno Y, Sugiura Y.</td>
      <td name="td2">Expression mechanism of the allosteric interactions in a ribozyme catalysis</td>
      <td name="td3">Nucleic Acids Symp Ser</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14588007/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Clark SL, Remcho VT.</td>
      <td name="td2">Electrochromatographic retention studies on a flavin-binding RNA aptamer sorbent</td>
      <td name="td3">Anal Chem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16377778/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Anderson PC, Mecozzi S</td>
      <td name="td2">Identification of a 14mer RNA that recognizes and binds flavin mononucleotide with high affinity</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16199761/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Najafi-Shoushtari SH, Famulok M</td>
      <td name="td2">Competitive regulation of modular allosteric aptazymes by a small molecule and oligonucleotide effector</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16996258/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Hall B, Hesselberth JR, Ellington AD.</td>
      <td name="td2">Computational selection of nucleic acid biosensors via a slip structure model</td>
      <td name="td3">Biosens Bioelectron</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25173759/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Sengupta A, Gavvala K, Koninti RK, Hazra P.</td>
      <td name="td2">Role of Mg²⁺ ions in flavin recognition by RNA aptamer</td>
      <td name="td3">J Photochem Photobiol B</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15099096/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">James M. Carothers, Stephanie C. Oestreich‡, Jonathan H. Davis, and Jack W. Szostak.</td>
      <td name="td2">Informational Complexity and Functional Activity of RNA Structures</td>
      <td name="td3">JACS</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16510427/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Carothers, J. M., Davis, J. H., Chou, J. J., & Szostak, J. W.</td>
      <td name="td2">Solution structure of an informationally complex high-affinity RNA aptamer to GTP</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23601641/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Curtis, E. A., & Liu, D. R.</td>
      <td name="td2">Discovery of widespread GTP-binding motifs in genomic DNA and RNA</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24824832/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Curtis, Edward A., and David R. Liu</td>
      <td name="td2">A naturally occurring, noncanonical GTP aptamer made of simple tandem repeats.</td>
      <td name="td3">RNA biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27659052/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Nasiri, A. H., Wurm, J. P., Immer, C., Weickhmann, A. K., & Wöhnert, J.</td>
      <td name="td2">An intermolecular G-quadruplex as the basis for GTP recognition in the class V–GTP aptamer</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27885761/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Wolter, A. C., Weickhmann, A. K., Nasiri, A. H., Hantke, K., Ohlenschläger, O.</td>
      <td name="td2">A stably protonated adenine nucleotide with a highly shifted pKa value stabilizes the tertiary structure of a GTP‐binding RNA aptamer</td>
      <td name="td3">Angewandte Chemie International Edition</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31030336/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Wolter, A. C., Pianu, A., Kremser, J., Strebitzer, E., Schnieders, R., Fürtig, B.& Wöhnert, J.</td>
      <td name="td2">NMR resonance assignments for the GTP-binding RNA aptamer 9-12 in complex with GTP</td>
      <td name="td3">Biomolecular NMR Assignments</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38074198/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Wachowius, F., Porebski, B. T., Johnson, C. M., & Holliger, P.</td>
      <td name="td2">Emergence of ATP‐and GTP‐Binding Aptamers from Single RNA Sequences by Error‐Prone Replication and Selection</td>
      <td name="td3">ChemSystemsChem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10212256/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Boiziau, C., Dausse, E., Yurchenko, L., & Toulmé, J. J.</td>
      <td name="td2">DNA aptamers selected against the HIV-1 trans-activation-responsive RNA element form RNA-DNA kissing complexes</td>
      <td name="td3">J Biol Chem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10606271/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Ducongé, F., & Toulmé, J. J.</td>
      <td name="td2">In vitro selection identifies key determinants for loop-loop interactions: RNA aptamers selective for the TAR RNA element of HIV-1</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10954609/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Collin, D., van, Heijenoort, C., Boiziau, C., Toulmé, J. J., & Guittet, E.</td>
      <td name="td2">NMR characterization of a kissing complex formed between the TAR RNA element of HIV-1 and a DNA aptamer</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12052182/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Darfeuille, F., Sekkai, D., Dausse, E., Kolb, G., Yurchenko, L., Boiziau, C., & Toulmé, J. J.</td>
      <td name="td2">Driving in vitro selection of anti-HIV-1 TAR aptamers by magnesium concentration and temperature</td>
      <td name="td3">Comb Chem High Throughput Screen</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12853646/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Beaurain, F, .Di, Primo, C., Toulmé, J. J., & Laguerre, M.</td>
      <td name="td2">Molecular dynamics reveals the stabilizing role of loop closing residues in kissing interactions: comparison between TAR-TAR* and TAR-aptamer</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15181175/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Darfeuille, F., Hansen, JB., Orum, H., Di, Primo, C., & Toulmé, J. J.</td>
      <td name="td2">LNA/DNA chimeric oligomers mimic RNA aptamers targeted to the TAR RNA element of HIV-1</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15723535/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Kolb,G., Reigadas, S., Boiziau, C., van Aerschot, A., Arzumanov, A., Gait, MJ.</td>
      <td name="td2">Hexitol nucleic acid-containing aptamers are efficient ligands of HIV-1 TAR RNA</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16445294/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Boucard, D., Toulmé, J. J, Di., & Primo, C.</td>
      <td name="td2">Bimodal loop-loop interactions increase the affinity of RNA aptamers for HIV-1 RNA structures</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17312962/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Bugaut, A., Toulmé , J. J., & Rayner, B.</td>
      <td name="td2">SELEX and dynamic combinatorial chemistry interplay for the selection of conjugated RNA aptamers</td>
      <td name="td3">Org Biomol Chem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17768146/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Lebars, I., Richard, T., Di Primo, C., & Toulmé, J. J.</td>
      <td name="td2">NMR structure of a kissing complex formed between the TAR RNA element of HIV-1 and a LNA-modified aptamer</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18996893/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Lebars, I., Legrand, P., Aimé, A., Pinaud, N., Fribourg, S., & Di Primo, C.</td>
      <td name="td2">Exploring TAR–RNA aptamer loop–loop interaction by X-ray crystallography, UV spectroscopy and surface plasmon resonance</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19496624/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Watrin, M., Von Pelchrzim, F., Dausse, E., Schroeder, R., & Toulmé, J. J.</td>
      <td name="td2">In vitro selection of RNA aptamers derived from a genomic human library against the TAR RNA element of HIV-1</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31548726/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Chen, X., Zhang, D., Su, N., Bao, B., Xie, X.</td>
      <td name="td2">Visualizing RNA dynamics in live cells with bright and stable fluorescent RNAs</td>
      <td name="td3">Nature Biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34725509/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Huang, K., Chen, X., Li, C., Song, Q., Li, H., Zhu, L., Yang, Y., Ren, A.</td>
      <td name="td2">Structure-based investigation of fluorogenic Pepper aptamer</td>
      <td name="td3">Nature Chemical Biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35759696/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Rees, H. C., Gogacz, W., Li, N.-S., Koirala, D., Piccirilli, J. A.</td>
      <td name="td2">Structural basis for fluorescence activation by Pepper RNA</td>
      <td name="td3"> ACS chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35580055/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Wang, Q., Xiao, F., Su, H., Liu, H., Xu, J.</td>
      <td name="td2">Inert Pepper aptamer-mediated endogenous mRNA recognition and imaging in living cells</td>
      <td name="td3">Nucleic Acids Research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35921263/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Dionisi, S., Piera, K., Baumschlager, A., Khammash, M.</td>
      <td name="td2">Implementation of a novel optogenetic tool in mammalian cells based on a split t7 RNA polymerase</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37192858/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Yang, L.-Z., Gao, B.-Q., Huang, Y., Wang, Y., Yang, L., Chen, L.-L.</td>
      <td name="td2">Multi-color RNA imaging with CRISPR-Cas13b systems in living cells</td>
      <td name="td3">Cell Insight</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36999628/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Sampedro Vallina, N., McRae, E. K. S., Hansen, B. K., Boussebayle, A., Andersen, E. S.</td>
      <td name="td2">RNA origami scaffolds facilitate cryo-EM characterization of a Broccoli-Pepper aptamer FRET pair</td>
      <td name="td3">Nucleic Acids Research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37236014/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Fang, M., Li, H., Xie, X., Wang, H., Jiang, Y.</td>
      <td name="td2">Imaging intracellular metabolite and protein changes in live mammalian cells with bright fluorescent RNA-based genetically encoded sensors</td>
      <td name="td3">Biosensors & Bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37486780/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Chen, Z., Chen, W., Reheman, Z., Jiang, H., Wu, J., Li, X.</td>
      <td name="td2">Genetically encoded RNA-based sensors with Pepper fluorogenic aptamer</td>
      <td name="td3">Nucleic Acids Research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38098702/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Yin, P., Ge, M., Xie, S., Zhang, L., Kuang, S., Nie, Z.</td>
      <td name="td2">A universal orthogonal imaging platform for living-cell RNA detection using fluorogenic RNA aptamers</td>
      <td name="td3">Chemical Science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38105499/" target="_blank" style="color:#520049"><b>2024</b></a></td>
      <td name="td1">Ying, X., Huang, C., Li, T., Li, T., Gao, M., Wang, F., Cao, J., Liu, J.</td>
      <td name="td2">An RNA Methylation-Sensitive AIEgen-Aptamer reporting system for quantitatively evaluating m6A methylase and demethylase activities</td>
      <td name="td3">ACS chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38295291/" target="_blank" style="color:#520049"><b>2024</b></a></td>
      <td name="td1">Tang, A. A., Afasizheva, A., Cano, C. T., Plath, K., Black, D., Franco, E.</td>
      <td name="td2">Optimization of RNA Pepper sensors for the detection of arbitrary RNA targets</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20445260/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Baba, S., Someya, T., Kawai, G., Nakamura, K., & Kumasaka, T.</td>
      <td name="td2">Expression, crystallization and preliminary crystallographic analysis of RNA-binding protein Hfq (YmaH) from Bacillus subtilis in complex with an RNA aptamer</td>
      <td name="td3">Acta crystallographica. Section F, Structural biology and crystallization communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22053080/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Someya, T., Baba, S., Fujimoto, M., Kawai, G., Kumasaka, T., & Nakamura, K.</td>
      <td name="td2">Crystal structure of Hfq from Bacillus subtilis in complex with SELEX-derived RNA aptamer: insight into RNA-binding properties of bacterial Hfq</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22965117/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Horstmann, N., Orans, J., Valentin-Hansen, P., Shelburne, S. A., 3rd, & Brennan, R. G.</td>
      <td name="td2">Structural mechanism of Staphylococcus aureus Hfq binding to an RNA A-tract</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24828406/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Weichenrieder O.</td>
      <td name="td2">RNA binding by Hfq and ring-forming (L)Sm proteins: a trade-off between optimal sequence readout and RNA backbone conformation</td>
      <td name="td3">RNA biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37942477/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Watkins, D., & Arya, D.</td>
      <td name="td2">Models of Hfq interactions with small non-coding RNA in Gram-negative and Gram-positive bacteria</td>
      <td name="td3">Frontiers in cellular and infection microbiology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10212256/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Boiziau, C., Dausse, E., Yurchenko, L., & Toulmé, J. J. </td>
      <td name="td2">DNA aptamers selected against the HIV-1 trans-activation-responsive RNA element form RNA-DNA kissing complexes</td>
      <td name="td3">J Biol Chem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10954609/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Collin, D., van Heijenoort, C., Boiziau, C., Toulmé, J. J., & Guittet, E.</td>
      <td name="td2">NMR characterization of a kissing complex formed between the TAR RNA element of HIV-1 and a DNA aptamer</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.proquest.com/openview/6857e35043f04e11f53714d80cdc4dcf/1?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Stubenrauch, M. </td>
      <td name="td2">In vitro selection and characterization of tRNA-like substrates of E. coli glutaminyl-tRNA synthetase</td>
      <td name="td3">Doctoral thesis, Department of Chemistry and Biochemistry, University of Colorado, Boulder, Colorado</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30916478/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Iida, M., Mashima, T., Yamaoki, Y., So, M., Nagata, T., & Katahira, M.</td>
      <td name="td2">The anti-prion RNA aptamer R12 disrupts the Alzheimer's disease-related complex between prion and amyloid β</td>
      <td name="td3">FEBS Journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18922466/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Daugherty MD, D'Orso I, Frankel AD.</td>
      <td name="td2">A solution to limited genomic capacity: using adaptable binding surfaces to assemble the functional HIV Rev oligomer on RNA</td>
      <td name="td3">Mol Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37942477/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Watkins, D., & Arya, D.</td>
      <td name="td2">Models of Hfq interactions with small non-coding RNA in Gram-negative and Gram-positive bacteria</td>
      <td name="td3">Frontiers in cellular and infection microbiology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22021209/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Steber, M., Arora, A., Hofmann, J., Brutschy, B., & Suess, B.</td>
      <td name="td2">Mechanistic basis for RNA aptamer-based induction of TetR</td>
      <td name="td3">Chembiochem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29036355/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Atanasov, J., Groher, F., Weigand, J. E., & Suess, B.</td>
      <td name="td2">Design and implementation of a synthetic pre-miR switch for controlling miRNA biogenesis in mammals</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32052019/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Grau, F. C., Jaeger, J., Groher, F., Suess, B., & Muller, Y. A.</td>
      <td name="td2">The complex formed between a synthetic RNA aptamer and the transcription repressor TetR is a structural and functional twin of the operator DNA-TetR regulator complex</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Mayer, G., Wulffen, B., Huber, C., Brockmann, J., Flicke, B., Neumann, L., Hafenbradl, D.</td>
      <td name="td2">An RNA molecule that specifically inhibits G-protein-coupled receptor kinase 2 in vitro</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22727813/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Tesmer, V. M., Lennarz, S., Mayer, G., & Tesmer, J. J.</td>
      <td name="td2">Molecular mechanism for inhibition of g protein-coupled receptor kinase 2 by a selective RNA aptamer</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26552823/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Tesmer J. J.</td>
      <td name="td2">Crystallographic Pursuit of a Protein-RNA Aptamer Complex</td>
      <td name="td3">Methods in molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://onlinelibrary.wiley.com/doi/10.1046/j.1365-2443.2000.00330.x" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Yamamoto, R., Katahira, M., Nishikawa, S., Baba, T., Taira, K., & Kumar, P.K.</td>
      <td name="td2">A novel RNA motif that binds efficiently and specifically to the Tat protein of HIV and inhibits the trans‐activation by Tat of transcription in vitro and in vivo</td>
      <td name="td3">Genes to cells</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://onlinelibrary.wiley.com/doi/10.1046/j.1365-2443.2000.00331.x" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Yamamoto, R., Baba, T., & Kumar, P. K.</td>
      <td name="td2">Molecular beacon aptamer fluoresces in the presence of Tat protein of HIV-1</td>
      <td name="td3">Genes to cells</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12737819/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Matsugami, A., Kobayashi, S., Ouhashi, K., Uesugi, S., Yamamoto, R., Taira, K.</td>
      <td name="td2">Structural basis of the highly efficient trapping of the HIV Tat protein by an RNA aptamer</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16027048/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Tombelli, S., Minunni, M., Luzi, E., & Mascini, M.</td>
      <td name="td2">Aptamer-based biosensors for the detection of HIV-1 Tat protein</td>
      <td name="td3">Bioelectrochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22975093/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Rahim Ruslinda, A., Tanabe, K., Ibori, S., Wang, X., & Kawarada, H.</td>
      <td name="td2">Effects of diamond-FET-based RNA aptamer sensing for detection of real sample of HIV-1 Tat protein</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31707021/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Caglayan, M. O., & Üstündağ, Z.</td>
      <td name="td2">Spectrophotometric ellipsometry based Tat-protein RNA-aptasensor for HIV-1 diagnosis</td>
      <td name="td3">Spectrochimica acta. Part A, Molecular and biomolecular spectroscopy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37240414/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Eladl, O., Yamaoki, Y., Kondo, K., Nagata, T., & Katahira, M.</td>
      <td name="td2">Complex Formation of an RNA Aptamer with a Part of HIV-1 Tat through Induction of Base Triples in Living Human Cells Proven by In-Cell NMR</td>
      <td name="td3">International journal of molecular sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18441054/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Miyakawa, S., Nomura, Y., Sakamoto, T., Yamaguchi, Y., Kato, K., Yamazaki, S., & Nakamura, Y.</td>
      <td name="td2">Structural and molecular basis for hyperspecificity of RNA aptamer to human immunoglobulin G</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18931441/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Sugiyama, S., Nomura, Y., Sakamoto, T., Kitatani, T., Kobayashi, A., Miyakawa, S.</td>
      <td name="td2">Crystallization and preliminary X-ray diffraction studies of an RNA aptamer in complex with the human IgG Fc fragment</td>
      <td name="td3">Acta crystallographica. Section F, Structural biology and crystallization communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20675355/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Nomura, Y., Sugiyama, S., Sakamoto, T., Miyakawa, S., Adachi, H., Takano, K., Murakami, S.</td>
      <td name="td2">Conformational plasticity of RNA for target recognition as revealed by the 2.15 A crystal structure of a human IgG-aptamer complex</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22924890/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Lee, S. H., Hoshino, Y., Randall, A., Zeng, Z., Baldi, P., Doong, R. A., & Shea, K. J.</td>
      <td name="td2">Engineered synthetic polymer nanoparticles as IgG affinity ligands</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23661463/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Ma, J., Wang, M. G., Mao, A. H., Zeng, J. Y., Liu, Y. Q.</td>
      <td name="td2">Target replacement strategy for selection of DNA aptamers against the Fc region of mouse IgG</td>
      <td name="td3">Genetics and molecular research : GMR</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10074372/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Lebruska, L. L., & Maher, L. J., 3rd.</td>
      <td name="td2">Selection and characterization of an RNA decoy for transcription factor NF-kappa B</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12886018/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Huang, D. B., Vu, D., Cassiday, L. A., Zimmerman, J. M., Maher, L. J., 3rd, & Ghosh, G.</td>
      <td name="td2">Crystal structure of NF-kappaB (p50)2 complexed to a high-affinity RNA aptamer</td>
      <td name="td3">National Academy of Sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12637683/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Cassiday, L. A., & Maher, L. J., 3rd.</td>
      <td name="td2">Yeast genetic selections to optimize RNA decoys for transcription factor NF-kappa B</td>
      <td name="td3">National Academy of Sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15263062/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Hoshika, S., Minakawa, N., & Matsuda, A.</td>
      <td name="td2">Synthesis and physical and physiological properties of 4'-thioRNA: application to post-modification of RNA aptamer toward NF-kappaB</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16517938/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Chan, R., Gilbert, M., Thompson, K. M., Marsh, H. N., Epstein, D. M., & Pendergrast, P. S.</td>
      <td name="td2">Co-expression of anti-NFkappaB RNA aptamers and siRNAs leads to maximal suppression of NFkappaB activity in mammalian cells</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18160411/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Reiter, N. J., Maher, L. J., 3rd, & Butcher, S. E.</td>
      <td name="td2">DNA mimicry by a high-affinity anti-NF-kappaB RNA aptamer</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18426920/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Wurster, S. E., & Maher, L. J., 3rd.</td>
      <td name="td2">Selection and characterization of anti-NF-kappaB p65 RNA aptamers</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19696077/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Wurster, S. E., Bida, J. P., Her, Y. F., & Maher, L. J., 3rd.</td>
      <td name="td2">Characterization of anti-NF-kappaB RNA aptamer-binding specificity in vitro and in the yeast three-hybrid system</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7518917/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Kubik, M. F., Stephens, A. W., Schneider, D., Marlar, R. A., & Tasset, D.</td>
      <td name="td2">High-affinity RNA ligands to human alpha-thrombin</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11735341/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">White, R., Rusconi, C., Scardino, E., Wolberg, A., Lawson, J., Hoffman, M., & Sullenger, B.</td>
      <td name="td2">Generation of species cross-reactive aptamers using "toggle" SELEX</td>
      <td name="td3">Molecular therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12214238/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Rusconi, C. P., Scardino, E., Layzer, J., Pitoc, G. A., Ortel, T. L., Monroe, D., & Sullenger, B. A.</td>
      <td name="td2">RNA aptamers as reversible antagonists of coagulation factor IXa</td>
      <td name="td3">Nature</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12557236/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Liu, X., Zhang, D., Cao, G., Yang, G., Ding, H., Liu, G., Fan, M., Shen, B., & Shao, N.</td>
      <td name="td2">RNA aptamers specific for bovine thrombin</td>
      <td name="td3">Journal of molecular recognition</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15196911/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Jeter, M. L., Ly, L. V., Fortenberry, Y. M., Whinna, H. C., White, R. R.</td>
      <td name="td2">RNA aptamer to thrombin binds anion-binding exosite-2 and alters protease inhibition by heparin-binding serpins</td>
      <td name="td3">FEBS letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18971322/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Long, S. B., Long, M. B., White, R. R., & Sullenger, B. A.</td>
      <td name="td2">Crystal structure of an RNA aptamer bound to thrombin</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27566147/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Abeydeera, N. D., Egli, M., Cox, N., Mercier, K., Conde, J. N., Pallan, P. S.</td>
      <td name="td2">Evoking picomolar binding in RNA by a single phosphorodithioate linkage</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
	</tbody>
    </table>
</div>        


<script>
var tables = [];
    var currentSheet = 'sheet1';
     $(document).ready(function() {
    $.noConflict();
    tables.push($('#reviewtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#researchtable').DataTable({
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

    
    
    
    // Hide the search box for DataTables
      $('#reviewtable_filter').css('display', 'none');
      $('#researchtable_filter').css('display', 'none');
      $('#rnapretable_filter').css('display', 'none');
       
      
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
// add .button.clicked  style in the begining style
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
        