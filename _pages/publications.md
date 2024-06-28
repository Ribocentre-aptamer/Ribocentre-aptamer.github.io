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
<script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
  <!--set sort order in table header finish-->
  <style>
    body {
    padding-top: 0px;
}
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
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9310370/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Urvil, P. T., Kakiuchi, N., Zhou, D. M., Shimotohno, K.</td>
      <td name="td2">Selection of RNA aptamers that bind specifically to the NS3 protease of hepatitis C virus</td>
      <td name="td3">European journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9356339/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Kumar, P. K., Machida, K., Urvil, P. T., Kakiuchi, N., Vishnuvardhan, D.</td>
      <td name="td2">Isolation of RNA aptamers specific to the NS3 protein of hepatitis C virus from a pool of completely random RNA</td>
      <td name="td3">Virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10848986/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Fukuda, K., Vishnuvardhan, D., Sekiya, S., Hwang, J., Kakiuchi, N.</td>
      <td name="td2">Isolation and characterization of RNA aptamers specific for the hepatitis C virus nonstructural protein 3 protease</td>
      <td name="td3">European journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11118325/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Hwang, J., Fauzi, H., Fukuda, K., Sekiya, S., Kakiuchi, N., Shimotohno, K., Taira, K., Kusakabe, I., & Nishikawa, S.</td>
      <td name="td2">The RNA aptamer-binding site of hepatitis C virus NS3 protease</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12655010/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Nishikawa, F., Kakiuchi, N., Funaji, K., Fukuda, K., Sekiya, S., & Nishikawa, S.</td>
      <td name="td2">Inhibition of HCV NS3 protease by RNA aptamers in cells</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15541341/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Fukuda, K., Umehara, T., Sekiya, S., Kunio, K., Hasegawa, T., & Nishikawa, S.</td>
      <td name="td2">An RNA ligand inhibits hepatitis C virus NS3 protease and helicase activities</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22814430/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Vaughan, R., Li, Y., Fan, B., Ranjith-Kumar, C. T., & Kao, C. C.</td>
      <td name="td2">RNA binding by the NS3 protease of the hepatitis C virus</td>
      <td name="td3">Virus research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7505429/" target="_blank" style="color:#520049"><b>1993</b></a></td>
      <td name="td1">Giver, L., Bartel, D., Zapp, M., Pawul, A., Green, M., & Ellington, A. D.</td>
      <td name="td2">Selective optimization of the Rev-binding element of HIV-1</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7506689/" target="_blank" style="color:#520049"><b>1993</b></a></td>
      <td name="td1">Giver, L., Bartel, D. P., Zapp, M. L., Green, M. R., & Ellington, A. D.</td>
      <td name="td2">Selection and design of high-affinity RNA ligands for HIV-1 Rev</td>
      <td name="td3">Gene</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7664035/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Leclerc, F., Cedergren, R., & Ellington, A. D.</td>
      <td name="td2">A three-dimensional model of the Rev-binding element of HIV-1 derived from analyses of aptamers</td>
      <td name="td3">Nature structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8523524/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Symensma, T. L., Giver, L., Zapp, M., Takle, G. B., & Ellington, A. D.</td>
      <td name="td2">RNA aptamers selected to bind human immunodeficiency virus type 1 Rev in vitro are Rev responsive in vivo</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9713975/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Konopka, K., Düzgüneş, N., Rossi, J., & Lee, N. S.</td>
      <td name="td2">Receptor ligand-facilitated cationic liposome delivery of anti-HIV-1 Rev-binding aptamer and ribozyme DNAs</td>
      <td name="td3">Journal of drug targeting</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15610009/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Wilkinson, T. A., Zhu, L., Hu, W., & Chen, Y. </td>
      <td name="td2">Retention of conformational flexibility in HIV-1 Rev-RNA complexes</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30017564/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Dearborn, A. D., Eren, E., Watts, N. R., Palmer, I. W.</td>
      <td name="td2">Structure of an RNA Aptamer that Can Inhibit HIV-1 by Blocking Rev-Cognate RNA (RRE) Binding and Rev-Rev Association</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11907208/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Biroccio, A., Hamm, J., Incitti, I., De Francesco, R., & Tomei, L.</td>
      <td name="td2">Selection of RNA aptamers that are specific and high-affinity ligands of the hepatitis C virus RNA-dependent RNA polymerase</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12667800/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Vo, N. V., Oh, J. W., & Lai, M. M.</td>
      <td name="td2">Identification of RNA ligands that bind hepatitis C virus polymerase selectively and inhibit its RNA synthesis from the natural viral RNA templates</td>
      <td name="td3">Virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22163979/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Roh, C., Kim, S. E., & Jo, S. K. </td>
      <td name="td2">Label free inhibitor screening of hepatitis C virus (HCV) NS5B viral protein using RNA oligonucleotide</td>
      <td name="td3">Sensors</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23596299/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Lee, C. H., Lee, Y. J., Kim, J. H., Lim, J. H.</td>
      <td name="td2">Inhibition of hepatitis C virus (HCV) replication by specific RNA aptamers against HCV NS5B RNA replicase</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26440598/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Lee, C. H., Lee, S. H., Kim, J. H., Noh, Y. H.</td>
      <td name="td2">Pharmacokinetics of a Cholesterol-conjugated Aptamer Against the Hepatitis C Virus (HCV) NS5B Protein</td>
      <td name="td3">Molecular therapy. Nucleic acids</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38027068/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Kim, T. H., & Lee, S. W.</td>
      <td name="td2">Generation of hepatitis C virus-resistant liver cells by genome editing-mediated stable expression of RNA aptamer</td>
      <td name="td3">Molecular therapy. Methods & clinical development</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8755498/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Xu, W., & Ellington, A. D.</td>
      <td name="td2">Anti-peptide aptamers recognize amino acid sequence and bind a protein epitope</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8946856/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Ye, X., Gorin, A., Ellington, A. D., & Patel, D. J.</td>
      <td name="td2">Deep penetration of an alpha-helix into a widened RNA major groove in the HIV-1 rev peptide-RNA aptamer complex</td>
      <td name="td3">Nature structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8841594/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Yamamoto, R., Toyoda, S., Viljanen, P., Machida, K.</td>
      <td name="td2">In vitro selection of RNA aptamers that can bind specifically to Tat protein of HIV-1</td>
      <td name="td3">Nucleic acids symposium series</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10886365/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Yamamoto, R., Katahira, M., Nishikawa, S., Baba, T.</td>
      <td name="td2">A novel RNA motif that binds efficiently and specifically to the Ttat protein of HIV and inhibits the trans-activation by Tat of transcription in vitro and in vivo</td>
      <td name="td3">Genes to cells : devoted to molecular & cellular mechanisms</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11132628/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Kawakami, J., Imanaka, H., Yokota, Y., & Sugimoto, N.</td>
      <td name="td2"> In vitro selection of aptamers that act with Zn2+</td>
      <td name="td3">Journal of inorganic biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12737819/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Matsugami, A., Kobayashi, S., Ouhashi, K., Uesugi, S., Yamamoto, R., Taira, K., Nishikawa, S., Kumar, P. K., & Katahira, M.</td>
      <td name="td2">Structural basis of the highly efficient trapping of the HIV Tat protein by an RNA aptamer</td>
      <td name="td3">Structure (London</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28620664/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Yamaoki, Y., Nagata, T., Mashima, T., & Katahira, M.</td>
      <td name="td2">Development of an RNA aptamer that acquires binding capacity against HIV-1 Tat protein via G-quadruplex formation in response to potassium ions</td>
      <td name="td3">Chemical communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31707021/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Caglayan, M. O., & Üstündağ, Z.</td>
      <td name="td2">Spectrophotometric ellipsometry based Tat-protein RNA-aptasensor for HIV-1 diagnosis</td>
      <td name="td3">Spectrochimica acta. Part A</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37240414/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Eladl, O., Yamaoki, Y., Kondo, K., Nagata, T., & Katahira, M.</td>
      <td name="td2">Complex Formation of an RNA Aptamer with a Part of HIV-1 Tat through Induction of Base Triples in Living Human Cells Proven by In-Cell NMR</td>
      <td name="td3">International journal of molecular sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15247433/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Hwang, B., Cho, J. S., Yeo, H. J., Kim, J. H., Chung, K. M.</td>
      <td name="td2">Isolation of specific and high-affinity RNA aptamers against NS3 helicase domain of hepatitis C virus</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/1379730/" target="_blank" style="color:#520049"><b>1992</b></a></td>
      <td name="td1">Tuerk, C., MacDougal, S., & Gold, L.</td>
      <td name="td2">RNA pseudoknots that inhibit human immunodeficiency virus type 1 reverse transcriptase</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10751399/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Kensch, O., Connolly, B. A., Steinhoff, H. J., McGregor, A., Goody, R. S., & Restle, T. </td>
      <td name="td2">HIV-1 reverse transcriptase-pseudoknot RNA aptamer interaction has a binding affinity in the low picomolar range coupled with high specificity</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12050367/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Joshi, P., & Prasad, V. R.</td>
      <td name="td2">Potent inhibition of human immunodeficiency virus type 1 replication by template analog reverse transcriptase inhibitors derived by SELEX (systematic evolution of ligands by exponential enrichment)</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25073457/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Aeksiri, N., Songtawee, N., Gleeson, M. P., Hannongbua, S., & Choowongkomon, K.</td>
      <td name="td2">Insight into HIV-1 reverse transcriptase-aptamer interaction from molecular dynamics simulations</td>
      <td name="td3">Journal of molecular modeling</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31943114/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Nguyen, P. D. M., Zheng, J., Gremminger, T. J., Qiu, L.</td>
      <td name="td2">Binding interface and impact on protease cleavage for an RNA aptamer to HIV-1 reverse transcriptase</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32732393/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Gruenke, P. R., Alam, K. K., Singh, K., & Burke, D. H.</td>
      <td name="td2">2'-fluoro-modified pyrimidines enhance affinity of RNA oligonucleotides to HIV-1 reverse transcriptase</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7778267/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Allen, P., Worland, S., & Gold, L.</td>
      <td name="td2">Isolation of high-affinity RNA ligands to HIV-1 integrase from a random pool</td>
      <td name="td3">Virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7489503/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Tian, Y., Adya, N., Wagner, S., Giam, C. Z., Green, M. R., & Ellington, A. D.</td>
      <td name="td2">Dissecting protein:protein interactions between transcription factors with an RNA aptamer</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16246910/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Bryant, K. F., Cox, J. C., Wang, H., Hogle, J. M., Ellington, A. D., & Coen, D. M.</td>
      <td name="td2">Binding of herpes simplex virus-1 US11 to specific RNA sequences</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19684916/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Ahn, D. G., Jeon, I. J., Kim, J. D., Song, M. S.</td>
      <td name="td2">RNA aptamer-based sensitive detection of SARS coronavirus nucleocapsid protein</td>
      <td name="td3">The Analyst</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35018437/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Gruenke, P. R., Aneja, R., Welbourn, S., Ukah, O. B.</td>
      <td name="td2">Selection and identification of an RNA aptamer that specifically binds the HIV-1 capsid lattice and inhibits viral replication</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15913532/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Misono, T. S., & Kumar, P. K.</td>
      <td name="td2">Selection of RNA aptamers against human influenza virus hemagglutinin using surface plasmon resonance</td>
      <td name="td3">Analytical biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21565620/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Toscano-Garibay, J. D., Benítez-Hess, M. L., & Alvarez-Salas, L. M.</td>
      <td name="td2">Isolation and characterization of an RNA aptamer for the HPV-16 E7 oncoprotein</td>
      <td name="td3">Archives of medical research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22943666/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Hwang, S. D., Midorikawa, N., Punnarak, P., Kikuchi, Y., Kondo, H.</td>
      <td name="td2">Inhibition of Hirame rhabdovirus growth by RNA aptamers</td>
      <td name="td3">Journal of fish diseases</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16476969/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Gopinath, S. C. B., Misono, T. S., Kawasaki, K., Mizuno, T., Imai, M.</td>
      <td name="td2">An RNA aptamer that distinguishes between closely related human influenza viruses and inhibits haemagglutinin-mediated membrane fusion</td>
      <td name="td3">The Journal of general virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25689224/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Duclair, S., Gautam, A., Ellington, A., & Prasad, V. R.</td>
      <td name="td2">High-affinity RNA Aptamers Against the HIV-1 Protease Inhibit Both In Vitro Protease Activity and Late Events of Viral Replication</td>
      <td name="td3">Molecular therapy. Nucleic acids</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22125633/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Feng, H., Beck, J., Nassal, M., & Hu, K. H.</td>
      <td name="td2">A SELEX-screened aptamer of human hepatitis B virus RNA encapsidation signal suppresses viral replication</td>
      <td name="td3">PloS one</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30303958/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Pan, Q., Law, C. O., Yung, M. M., Han, K. C.</td>
      <td name="td2">Novel RNA aptamers targeting gastrointestinal cancer biomarkers CEA, CA50 and CA72-4 with superior affinity and specificity</td>
      <td name="td3">PLoS One</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29103909/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Fülle, L., Steiner, N., Funke, M., Gondorf, F., Pfeiffer, F.</td>
      <td name="td2">RNA aptamers recognizing murine CCL17 inhibit T cell chemotaxis and reduce contact hypersensitivity in vivo</td>
      <td name="td3">Molecular Therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24334484/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Hanazato, M., Nakato, G., Nishikawa, F., Hase, K., Nishikawa, S., & Ohno, H</td>
      <td name="td2">Selection of an aptamer against mouse GP2 by SELEX</td>
      <td name="td3">Cell structure and function</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24835440/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Kwon, H. M., Lee, K. H., Han, B. W., Han, M. R.</td>
      <td name="td2">An RNA aptamer that specifically binds to the glycosylated hemagglutinin of avian influenza virus and suppresses viral infection in cells</td>
      <td name="td3">PloS one</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26383776/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Mittelberger, F., Meyer, C., Waetzig, G. H., Zacharias, M.</td>
      <td name="td2">RAID3-An interleukin-6 receptor-binding aptamer with post-selective modification-resistant affinity</td>
      <td name="td3">RNA biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26184872/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Mondragón, E., & Maher III, L. J. </td>
      <td name="td2">RNA aptamer inhibitors of a restriction endonuclease</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27930845/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Lee, J. H., & Lee, M. J.</td>
      <td name="td2">Isolation and Characterization of RNA Aptamers against a Proteasome‐Associated Deubiquitylating Enzyme UCH37</td>
      <td name="td3">ChemBioChem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22484812/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Ray, P., Rialon-Guevara, KL., Veras, E., Sullenger, BA., & White, RR.</td>
      <td name="td2">Comparing human pancreatic cell secretomes by in vitro aptamer selection identifies cyclophilin B as a candidate pancreatic cancer biomarker</td>
      <td name="td3">Journal of Clinical Investgation</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24152208/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Ray, P., Sullenger, BA., & White, RR.</td>
      <td name="td2">Further characterization of the target of a potential aptamer biomarker for pancreatic cancer: cyclophilin B and its posttranslational modifications</td>
      <td name="td3">Nucleic Acid Therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24588102/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Xu, D., Chatakonda, VK., Kourtidis, A., Conklin, DS., & Shi, H.</td>
      <td name="td2">In search of novel drug target sites on estrogen receptors using RNA aptamers</td>
      <td name="td3">Nucleic Acid Therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22166202/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Lee, YJ., Han, SR., Maeng, JS., Cho, YJ., & Lee, SW.</td>
      <td name="td2">In vitro selection of Escherichia coli O157:H7-specific RNA aptamer</td>
      <td name="td3">Biochemical and Biophysical Research Communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24374323/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Suenaga, E., & Kumar, PK.</td>
      <td name="td2">An aptamer that binds efficiently to the hemagglutinins of highly pathogenic avian influenza viruses (H5N1 and H7N7) and inhibits hemagglutinin-glycan interactions</td>
      <td name="td3">Acta Biomaterialia</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20967861/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Ishiguro, A., Akiyama, T., Adachi, H., Inoue, J., & Nakamura, Y.</td>
      <td name="td2">Therapeutic potential of anti-interleukin-17A aptamer: suppression of interleukin-17A signaling and attenuation of autoimmunity in two mouse models</td>
      <td name="td3">Arthritis Rheum</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23113766/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Pratico, ED., Sullenger, BA., & Nair, SK. </td>
      <td name="td2">Identification and characterization of an agonistic aptamer against the T cell costimulatory receptor, OX40</td>
      <td name="td3">Nucleic Acid Therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17188871" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Suenaga, E., & Kumar, PK. Sando, S., Ogawa, A., Nishi, T.</td>
      <td name="td2">In vitro selection of RNA aptamer against Escherichia coli release factor 1</td>
      <td name="td3">Bioorganic & Medicinal Chemistry Letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21203916/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Huang, Z., Wang, X., & Gao, G.</td>
      <td name="td2">Analyses of SELEX-derived ZAP-binding RNA aptamers suggest that the binding specificity is determined by both structure and sequence of the RNA</td>
      <td name="td3">Protein Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10908352/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Tok, J. B., Cho, J., & Rando, R. R.</td>
      <td name="td2">RNA aptamers that specifically bind to a 16S ribosomal RNA decoding region construct</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10449422/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Scarabino, D., Crisari, A., Lorenzini, S., Williams, K., & Tocchini-Valentini, G. P.</td>
      <td name="td2">tRNA prefers to kiss</td>
      <td name="td3">The EMBO journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7504300/" target="_blank" style="color:#520049"><b>1993</b></a></td>
      <td name="td1">Jellinek, D., Lynott, C. K., Rifkin, D. B., & Janjić, N.</td>
      <td name="td2">High-affinity RNA ligands to basic fibroblast growth factor inhibit receptor binding</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9222504/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Cho, B., Taylor, D. C., Nicholas, H. B., Jr, & Schmidt, F. J. </td>
      <td name="td2">Interacting RNA species identified by combinatorial selection</td>
      <td name="td3">Bioorganic & medicinal chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20729797/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Horii, K., Omi, K., Yoshida, Y., Imai, Y., Sakai, N.</td>
      <td name="td2">Development of a sphingosylphosphorylcholine detection system using RNA aptamers</td>
      <td name="td3">Molecules</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9343239/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Weiss, S., Proske, D., Neumann, M., Groschup, M. H.</td>
      <td name="td2">RNA aptamers specifically interact with the prion protein PrP</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28513534/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Macedo, B., & Cordeiro, Y.</td>
      <td name="td2">Unraveling Prion Protein Interactions with Aptamers and Other PrP-Binding Nucleic Acids</td>
      <td name="td3">International journal of molecular sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35970037/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Hirao, I., Harada, Y., Nojima, T., Osawa, Y., Masaki, H., & Yokoyama, S.</td>
      <td name="td2">In vitro selection of RNA aptamers that bind to colicin E3 and structurally resemble the decoding site of 16S ribosomal RNA</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16799875/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Mercey, R., Lantier, I., Maurel, M. C., Grosclaude, J., Lantier, F., & Marc, D.</td>
      <td name="td2">Fast, reversible interaction of prion protein with RNA aptamers containing specific sequence patterns</td>
      <td name="td3">Archives of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16189080/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Pan, Q., Zhang, X. L., Wu, H. Y., He, P. W., Wang, F.</td>
      <td name="td2">Aptamers that preferentially bind type IVB pili and inhibit human monocytic-cell invasion by Salmonella enterica serovar typhi</td>
      <td name="td3">Antimicrobial agents and chemotherapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10348914/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Takeno, H., Yamamoto, S., Tanaka, T., Sakano, Y., & Kikuchi, Y.</td>
      <td name="td2">Selection of an RNA molecule that specifically inhibits the protease activity of subtilisin</td>
      <td name="td3">Journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9192624/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Klug, S. J., Hüttenhofer, A., Kromayer, M., & Famulok, M.</td>
      <td name="td2">In vitro and in vivo characterization of novel mRNA motifs that bind special elongation factor SelB</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10496219/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Klug, S. J., Hüttenhofer, A., & Famulok, M.</td>
      <td name="td2">In vitro selection of RNA aptamers that bind special elongation factor SelB, a protein with multiple RNA-binding sites, reveals one major interaction domain at the carboxyl terminus</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9603938/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Bell, S. D., Denu, J. M., Dixon, J. E., & Ellington, A. D.</td>
      <td name="td2">RNA molecules that bind to and inhibit the active site of a tyrosine phosphatase</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16131593/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Dubey, A. K., Baker, C. S., Romeo, T., & Babitzke, P.</td>
      <td name="td2">RNA sequence and secondary structure participate in high-affinity CsrA-RNA interaction</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11904188/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Szkaradkiewicz, K., Nanninga, M., Nesper-Brock, M.</td>
      <td name="td2">RNA aptamers directed against release factor 1 from Thermus thermophilus</td>
      <td name="td3">FEBS letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15294895/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Ferrer-Orta,& Verdaguer, N.</td>
      <td name="td2">Structure of foot-and-mouth disease virus RNA-dependent RNA polymerase and its complex with a template-primer RNA</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1624902/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Ellingham, M., & Stonehouse, N. J.</td>
      <td name="td2">Selection and characterization of RNA aptamers to the RNA-dependent RNA polymerase from foot-and-mouth disease virus</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17588619/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Du, M., Ulrich, H., Zhao, X., Aronowski, J., & Jayaraman, V. </td>
      <td name="td2">Water soluble RNA based antagonist of AMPA receptors</td>
      <td name="td3">Neuropharmacology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16888322/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Rentmeister, & Famulok, M. </td>
      <td name="td2">RNA aptamers selectively modulate protein recruitment to the cytoplasmic domain of beta-secretase BACE1 in vitro</td>
      <td name="td3">RNA </td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17030508/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Gopinath, S. C., Balasundaresan, D., Akitomi, J., & Mizuno, H. </td>
      <td name="td2">An RNA aptamer that discriminates bovine factor IX from human factor IX</td>
      <td name="td3">Journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1370693/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Mochizuki,& Nakamura, Y.</td>
      <td name="td2">High affinity RNA for mammalian initiation factor 4E interferes with mRNA-cap binding and inhibits translation</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16707660/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Gening, L. V., & Miller, H. </td>
      <td name="td2">RNA aptamers selected against DNA polymerase beta inhibit the polymerase activities of DNA polymerases beta and kappa</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16540230/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Ohuchi, S. P., Ohtsu, T., & Nakamura, Y.</td>
      <td name="td2">Selection of RNA aptamers against recombinant transforming growth factor-beta type III receptor displayed on cell surface</td>
      <td name="td3">Biochimie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17079480/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Lee, H. K., & Jeong, S.</td>
      <td name="td2">Modulation of oncogenic transcription and alternative splicing by beta-catenin and an RNA aptamer in colon cancer cells</td>
      <td name="td3">Cancer research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/3097327/" target="_blank" style="color:#520049"><b>1986</b></a></td>
      <td name="td1">Satow Y, Cohen GH, Padlan EA, Davies DR</td>
      <td name="td2">Phosphocholine binding immunoglobulin Fab McPC603. An X-ray diffraction study at 2.7 A</td>
      <td name="td3">Journal of molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12163074/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Carola Hunte 1, Hartmut Michel.</td>
      <td name="td2">Crystallisation of membrane proteins mediated by antibody fragments</td>
      <td name="td3">Current opinion in structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17952087/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Day PW, Rasmussen SG, Parnot C, Fung JJ, Masood A</td>
      <td name="td2">A monoclonal antibody for G protein-coupled receptor crystallography</td>
      <td name="td3">Nature methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19477632/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Koide S.</td>
      <td name="td2">Engineering of recombinant crystallization chaperones</td>
      <td name="td3">Current opinion in structural biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21798953/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Paige, J. S., Wu, K. Y., & Jaffrey, S. R.</td>
      <td name="td2">RNA mimics of green fluorescent protein</td>
      <td name="td3">Science </td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21151117/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Koldobskaya Y, Duguid EM, Shechner DM, Suslov NB, Ye J</td>
      <td name="td2">A portable RNA sequence whose recognition by a synthetic antibody facilitates structural determination</td>
      <td name="td3">Nature structural & molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24952597/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Huang H, Suslov NB, Li NS, Shelke SA, Evans ME</td>
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
      <td name="td3">Chembiochem : a European journal of chemical biology</td>
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
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35267109/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Yu, Z., Wang, Y., Mei, F., Yan, H., Jin, Z., Zhang, P.</td>
      <td name="td2">Spinach-based RNA mimicking GFP in plant cells</td>
      <td name="td3">Functional & integrative genomics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15055546/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Lee SY, Jeong S.</td>
      <td name="td2">In vitro selection and characterization of TCF-1 binding RNA aptamers</td>
      <td name="td3">Mol Cells</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15629461/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Lee SK, Park MW, Yang EG, Yu J, Jeong S.</td>
      <td name="td2">An RNA aptamer that binds to the beta-catenin interaction domain of TCF-1 protein</td>
      <td name="td3">Biochem Biophys Res Commun</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15781225/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Park MW, Choi KH, Jeong S.</td>
      <td name="td2">Inhibition of the DNA binding by the TCF-1 binding RNA aptamer</td>
      <td name="td3">Biochem Biophys Res Commun</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16985077/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Choi KH, Park MW, Lee SY, Jeon MY, Kim MY, Lee HK</td>
      <td name="td2">Intracellular expression of the T-cell factor-1 RNA aptamer as an intramer</td>
      <td name="td3">Mol Cancer Ther</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12874383/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Chen CH, Chernis GA, Hoang VQ, Landgraf R.</td>
      <td name="td2">Inhibition of heregulin signaling by an aptamer that preferentially binds to the oligomeric form of human epidermal growth factor receptor-3</td>
      <td name="td3">Proc Natl Acad Sci U S A</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29499944/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Yu X, Ghamande S, Liu H, Xue L, Zhao S, Tan W</td>
      <td name="td2">Targeting EGFR/HER2/HER3 with a Three-in-One Aptamer-siRNA Chimera Confers Superior Activity against HER2+ Breast Cancer</td>
      <td name="td3">Mol Ther Nucleic Acids</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15562003/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Mori T, Oguro A, Ohtsu T, Nakamura Y.</td>
      <td name="td2">RNA aptamers selected against the receptor activator of NF-kappaB acquire general affinity to proteins of the tumor necrosis factor receptor family</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15277685/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Theis MG, Knorre A, Kellersch B, Moelleken J, Wieland F, Kolanus W, Famulok M.</td>
      <td name="td2">Discriminatory aptamer reveals serum response element transcription regulated by cytohesin-2</td>
      <td name="td3">Proc Natl Acad Sci U S A</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19854646/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Mayer G, Lohberger A, Butzen S, Pofahl M, Blind M, Heckel A.</td>
      <td name="td2">From selection to caged aptamers: identification of light-dependent ssDNA aptamers targeting cytohesin</td>
      <td name="td3">Bioorg Med Chem Lett</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23757206/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Niebel B, Wosnitza CI, Famulok M.</td>
      <td name="td2">RNA-aptamers that modulate the RhoGEF activity of Tiam1</td>
      <td name="td3">Bioorg Med Chem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12649492/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Oguro A, Ohtsu T, Svitkin YV, Sonenberg N, Nakamura Y.</td>
      <td name="td2">RNA aptamers to initiation factor 4A helicase hinder cap-dependent translation by blocking ATP hydrolysis</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16940549/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Miyakawa S, Oguro A, Ohtsu T, Imataka H, Sonenberg N, Nakamura Y.</td>
      <td name="td2">RNA aptamers to mammalian initiation factor 4G inhibit cap-dependent translation by blocking the formation of initiation factor complexes</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15359119/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Cho JS, Lee YJ, Shin KS, Jeong S, Park J, Lee SW.</td>
      <td name="td2">In vitro selection of specific RNA aptamers for the NFAT DNA binding domain</td>
      <td name="td3">Mol Cells</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12408978/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Bae SJ, Oum JH, Sharma S, Park J, Lee SW.</td>
      <td name="td2">In vitro selection of specific RNA inhibitors of NFATc</td>
      <td name="td3">Biochem Biophys Res Commun</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26350736/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Malsagova KA, Ivanov YD, Pleshakova TO, Kozlov AF, Krohin NV</td>
      <td name="td2">[SOI-nanowire biosensor for the detection of D-NFAT 1 protein]</td>
      <td name="td3">Biomed Khim</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31451750/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Yun Y, Zhang Y, Zhang C, Huang L, Tan S, Wang P, Vilariño-Gúell C</td>
      <td name="td2">Regulator of calcineurin 1 is a novel RNA-binding protein to regulate neuronal apoptosis</td>
      <td name="td3">Mol Psychiatry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16199752/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Plummer KA, Carothers JM, Yoshimura M, Szostak JW, Verdine GL.</td>
      <td name="td2">In vitro selection of RNA aptamers against a composite small molecule-protein surface</td>
      <td name="td3">Nucleic Acids Res</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15629041/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Yan X, Gao X, Zhang Z.</td>
      <td name="td2">Isolation and characterization of 2'-amino-modified RNA aptamers for human TNFalpha</td>
      <td name="td3">Genomics Proteomics Bioinformatics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15971588/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Guo KT, Yan XR, Huang GJ, Xu CX, Chai YS, Zhang ZQ.</td>
      <td name="td2">[Screening and characterization of DNA aptamers with hTNF-alpha binding and neutralizing activity]</td>
      <td name="td3">Sheng Wu Gong Cheng Xue Bao</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31989789/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Mashayekhi K, Ganji A, Sankian M.</td>
      <td name="td2">Designing a new dimerized anti human TNF-α aptamer with blocking activity</td>
      <td name="td3">Biotechnol Prog</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12557236/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Liu X, Zhang D, Cao G, Yang G, Ding H</td>
      <td name="td2">RNA aptamers specific for bovine thrombin</td>
      <td name="td3">J Mol Recognit</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12885412/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Hwang B, Han K, Lee SW.</td>
      <td name="td2">Prevention of passively transferred experimental autoimmune myasthenia gravis by an in vitro selected RNA aptamer</td>
      <td name="td3">FEBS Lett</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11785949/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Hwang B, Lee SW.</td>
      <td name="td2">Improvement of RNA aptamer activity against myasthenic autoantibodies by extended sequence selection</td>
      <td name="td3">Biochem Biophys Res Commun</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23196060/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Shigdar, S., Qiao, L., Zhou, S. F., Xiang, D., Wang, T., Li, Y.</td>
      <td name="td2">RNA aptamers targeting cancer stem cell marker CD133</td>
      <td name="td3">Cancer letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16467303/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Yang, C., Yan, N., Parish, J., Wang, X., Shi, Y., & Xue, D.</td>
      <td name="td2">RNA aptamers targeting the cell death inhibitor CED-9 induce cell killing in Caenorhabditis elegans</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7528207/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Conrad, R., Keranen, L. M., Ellington, A. D., & Newton, A. C.</td>
      <td name="td2">Isozyme-specific inhibition of protein kinase C by RNA aptamers</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8937571/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Conrad, R., & Ellington, A. D.</td>
      <td name="td2">Detecting immobilized protein kinase C isozymes with RNA aptamers</td>
      <td name="td3">Analytical biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29666232/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Powell Gray, B., Kelly, L., Ahrens, D. P., Barry, A. P., Kratschmer, C.</td>
      <td name="td2">Tunable cytotoxic aptamer-drug conjugates for the treatment of prostate cancer</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26221481/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Moosavian, S. A., Jaafari, M. R., Taghdisi, S. M., Mosaffa, F.</td>
      <td name="td2">Development of RNA aptamers as molecular probes for HER2(+) breast cancer study using cell-SELEX</td>
      <td name="td3">Iranian journal of basic medical sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27648925/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Iaboni, M., Fontanella, R., Rienzo, A., Capuozzo, M., Nuzzo, S.</td>
      <td name="td2">Targeting Insulin Receptor with a Novel Internalizing Aptamer</td>
      <td name="td3">Molecular therapy. Nucleic acids</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18557632/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Goers, E. S., Voelker, R. B., Gates, D. P., & Berglund, J. A.</td>
      <td name="td2">RNA binding specificity of Drosophila muscleblind</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12024047/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Bhattacharyya, S. N., Chatterjee, S., & Adhya, S.</td>
      <td name="td2">Mitochondrial RNA import in Leishmania tropica: aptamers homologous to multiple tRNA domains that interact cooperatively or antagonistically at the inner membrane</td>
      <td name="td3">Molecular and cellular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20348443/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Kolesnikova, O., Kazakova, H., Comte, C., Steinberg, S., Kamenski, P.</td>
      <td name="td2">Selection of RNA aptamers imported into yeast and human mitochondria</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25087963/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Tawaraya, Y., Hyodo, M., Ara, M. N., Yamada, Y., & Harashima, H.</td>
      <td name="td2">RNA aptamers for targeting mitochondria using a mitochondria-based SELEX method</td>
      <td name="td3">Biological & pharmaceutical bulletin</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27056631/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Yamada, Y., Furukawa, R., & Harashima, H.</td>
      <td name="td2">A Dual-Ligand Liposomal System Composed of a Cell-Penetrating Peptide and a Mitochondrial RNA Aptamer Synergistically Facilitates Cellular Uptake and Mitochondrial Targeting</td>
      <td name="td3">Journal of pharmaceutical sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9586110/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Hirao, I., Yoshinari, S., Yokoyama, S., Endo, Y., & Ellington, A. D.</td>
      <td name="td2">In vitro selection of aptamers that bind to ribosome-inactivating toxins</td>
      <td name="td3">Nucleic acids symposium series</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10671532/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Hirao, I., Madin, K., Endo, Y., Yokoyama, S., & Ellington, A. D.</td>
      <td name="td2">RNA aptamers that bind to and inhibit the ribosome-inactivating protein, pepocin</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12903331/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Fukusho, S., Furusawa, H., & Okahata, Y.</td>
      <td name="td2">In vitro selection and analysis of RNA aptamer recognize arginine-rich motif (ARM) model peptide on a QCM</td>
      <td name="td3">Nucleic acids symposium series</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12120324/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Fukusho, S., Furusawa, H., & Okahata, Y.</td>
      <td name="td2">In vitro selection and evaluation of RNA aptamers that recognize arginine-rich-motif model peptide on a quartz-crystal microbalance</td>
      <td name="td3">Chemical communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24623705/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Furusawa, H., Fukusho, S., & Okahata, Y.</td>
      <td name="td2">Arginine arrangement of bacteriophage λ N-peptide plays a role as a core motif in GNRA tetraloop RNA binding</td>
      <td name="td3">Chembiochem : a European journal of chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9111335/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Shi, H., Hoffman, B. E., & Lis, J. T.</td>
      <td name="td2">A specific RNA hairpin loop structure binds the RNA recognition motifs of the Drosophila SR protein B52</td>
      <td name="td3">Molecular and cellular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10468557/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Shi, H., Hoffman, B. E., & Lis, J. T.</td>
      <td name="td2">RNA aptamers as effective protein antagonists in a multicellular organism</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12655012/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Kim, S., Shi, H., Lee, D. K., & Lis, J. T.</td>
      <td name="td2">Specific SR protein-dependent splicing substrates identified through genomic SELEX</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19380374/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Xu, D., & Shi, H.</td>
      <td name="td2">Composite RNA aptamers as functional mimics of proteins</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/2200121/" target="_blank" style="color:#520049"><b>1990</b></a></td>
      <td name="td1">Tuerk, C., & Gold, L.</td>
      <td name="td2">Systematic evolution of ligands by exponential enrichment: RNA ligands to bacteriophage T4 DNA polymerase</td>
      <td name="td3">Science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32222697/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Camorani, S., Granata, I., Collina, F., Leonetti, F., Cantile, M., Botti, G.</td>
      <td name="td2">Novel Aptamers Selected on Living Cells for Specific Recognition of Triple-Negative Breast Cancer</td>
      <td name="td3">iScience</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10198434/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Homann, M., & Göringer, H. U.</td>
      <td name="td2">Combinatorial selection of high affinity RNA ligands to live African trypanosomes</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11557345/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Homann, M., & Göringer, H. U.</td>
      <td name="td2">Uptake and intracellular transport of RNA aptamers in African trypanosomes suggest therapeutic "piggy-back" approach</td>
      <td name="td3">Bioorganic & medicinal chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12582125/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Lorger, M., Engstler, M., Homann, M., & Göringer, H. U.</td>
      <td name="td2">Targeting the variable surface of African trypanosomes with variant surface glycoprotein-specific, serum-stable RNA aptamers</td>
      <td name="td3">Eukaryotic cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16925510/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Homann, M., Lorger, M., Engstler, M., Zacharias, M., & Göringer, H. U.</td>
      <td name="td2">Serum-stable RNA aptamers to an invariant surface domain of live African trypanosomes</td>
      <td name="td3">Combinatorial chemistry & high throughput screening</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16594626/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Göringer, H. U., Homann, M., Zacharias, M., & Adler, A.</td>
      <td name="td2">RNA aptamers as potential pharmaceuticals against infections with African trypanosomes</td>
      <td name="td3">Handbook of experimental pharmacology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18220540/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Adler, A., Forster, N., Homann, M., & Göringer, H. U.</td>
      <td name="td2">Post-SELEX chemical optimization of a trypanosome-specific RNA aptamer</td>
      <td name="td3">Combinatorial chemistry & high throughput screening</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23017685/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Zelada-Guillén, G. A., Tweed-Kent, A., Niemann, M., Göringer, H. U</td>
      <td name="td2">Ultrasensitive and real-time detection of proteins in blood using a potentiometric carbon-nanotube aptasensor</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7520755/" target="_blank" style="color:#520049"><b>1994</b></a></td>
      <td name="td1">Jellinek, D., Green, L. S., Bell, C., & Janjić, N.</td>
      <td name="td2">Inhibition of receptor binding by high-affinity RNA ligands to vascular endothelial growth factor</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9383475/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Green, L. S., Jellinek, D., Bell, C., Beebe, L. A., Feistner, B. D., Gill, S. C.</td>
      <td name="td2">Nuclease-resistant nucleic acid ligands to vascular permeability factor/vascular endothelial growth factor</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9685413/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Ruckman, J., Green, L. S., Beeson, J., Waugh, S., Gillette, W. L.</td>
      <td name="td2">2'-Fluoropyrimidine RNA-based aptamers to the 165-amino acid form of vascular endothelial growth factor (VEGF165). Inhibition of receptor binding and VEGF-induced vascular permeability through interactions requiring the exon 7-encoded domain</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10548435/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Bell, C., Lynam, E., Landfair, D. J., Janjic, N., & Wiles, M. E.</td>
      <td name="td2">Oligonucleotide NX1838 inhibits VEGF165-mediated cellular responses in vitro</td>
      <td name="td3">In vitro cellular & developmental biology. Animal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10517237/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Tucker, C. E., Chen, L. S., Judkins, M. B., Farmer, J. A., Gill, S. C.</td>
      <td name="td2">Detection and plasma pharmacokinetics of an anti-vascular endothelial growth factor oligonucleotide-aptamer (NX1838) in rhesus monkeys</td>
      <td name="td3">Journal of chromatography. B</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15625332/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Gragoudas, E. S., Adamis, A. P., Cunningham, E. T., Jr, Feinsod, M.</td>
      <td name="td2">Pegaptanib for neovascular age-related macular degeneration</td>
      <td name="td3">The New England journal of medicine</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16357200/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Lee, J. H., Canny, M. D., De Erkenez, A., Krilleke, D., Ng, Y. S.</td>
      <td name="td2">A therapeutic aptamer inhibits angiogenesis by specifically targeting the heparin binding domain of VEGF165</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16518379/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Ng, E. W., Shima, D. T., Calias, P., Cunningham, E. T.</td>
      <td name="td2">Pegaptanib, a targeted anti-VEGF aptamer for ocular vascular disease</td>
      <td name="td3">Nature reviews. Drug discovery</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19668516/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Trujillo, C. A., Nery, A. A., Alves, J. M., Martins, A. H., & Ulrich, H.</td>
      <td name="td2">Development of the anti-VEGF aptamer to a therapeutic agent for clinical ophthalmology</td>
      <td name="td3">Clinical ophthalmology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18951306/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Deissler, H. L., & Lang, G. E.</td>
      <td name="td2">Wirkung von VEGF165 und dem VEGF-Aptamer Pegaptanib (Macugen) auf die Zusammensetzung der Tight Junctions mikrovaskulärer Endothelzellen aus der Retina [Effect of VEGF165 and the VEGF aptamer pegaptanib (Macugen) on the protein composition of tight junctions in microvascular endothelial cells of the retina]</td>
      <td name="td3">Klinische Monatsblatter fur Augenheilkunde</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18154762/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Lanzl, I. M., Maier, M., Feucht, N., Lohmann, C. P., & Kotliar, K. E.</td>
      <td name="td2">Intraocular pressure effects of pegaptanib (macugen) injections in patients with and without glaucoma</td>
      <td name="td3">American journal of ophthalmology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18156376/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Calvo-González, C., Reche-Frutos, J., Donate-López, J., García-Feijoó, J.</td>
      <td name="td2">Combined Pegaptanib sodium (Macugen) and photodynamic therapy in predominantly classic juxtafoveal choroidal neovascularisation in age related macular degeneration</td>
      <td name="td3">The British journal of ophthalmology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28352569/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Lönne, M., Bolten, S., Lavrentieva, A., Stahl, F., Scheper, T., & Walter, J. G.</td>
      <td name="td2">Development of an aptamer-based affinity purification method for vascular endothelial growth factor</td>
      <td name="td3">Biotechnology reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25733800/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Basile, A. S., Hutmacher, M. M., Kowalski, K. G., Gandelman, K. Y.</td>
      <td name="td2">Population pharmacokinetics of pegaptanib sodium (Macugen(®)) in patients with diabetic macular edema</td>
      <td name="td3">Clinical ophthalmology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27189805/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Huang, D., Zhao, C., Ju, R., Kumar, A., Tian, G., Huang, L.</td>
      <td name="td2">VEGF-B inhibits hyperglycemia- and Macugen-induced retinal apoptosis</td>
      <td name="td3">Scientific reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33363367/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Man, J., Dong, J., Wang, Y., He, L., Yu, S., Yu, F., Wang, J.</td>
      <td name="td2">Simultaneous Detection of VEGF and CEA by Time-Resolved Chemiluminescence Enzyme-Linked Aptamer Assay</td>
      <td name="td3">International journal of nanomedicine</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34562647/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Zhao, P., Tang, Z. W., Lin, H. C., Djuanda, D., Zhu, Z., Niu, Q.</td>
      <td name="td2">VEGF aptamer/i-motif-based drug co-delivery system for combined chemotherapy and photodynamic therapy</td>
      <td name="td3">Photodiagnosis and photodynamic therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36625560/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Kalathingal, M., & Rhee, Y. M.</td>
      <td name="td2">Molecular mechanism of binding between a therapeutic RNA aptamer and its protein target VEGF: A molecular dynamics study</td>
      <td name="td3">Journal of computational chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11259376/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Jo, D. G., Kim, M. J., Choi, Y. H., Kim, I. K.</td>
      <td name="td2">Pro-apoptotic function of calsenilin/DREAM/KChIP3</td>
      <td name="td3">FASEB journal : official publication of the Federation of American Societies for Experimental Biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11535596/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Osawa, M., Tong, K. I., Lilliehook, C., Wasco, W.</td>
      <td name="td2">Calcium-regulated DNA binding and oligomerization of the neuronal calcium-sensing protein, calsenilin/DREAM/KChIP3</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11788589/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Craig, T. A., Benson, L. M., Venyaminov, S. Y., Klimtchuk, E. S.</td>
      <td name="td2">The metal-binding properties of DREAM: evidence for calcium-mediated changes in DREAM structure</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12732196/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Jo, D. G., Chang, J. W., Hong, H. S., Mook-Jung, I., & Jung, Y. K.</td>
      <td name="td2">Contribution of presenilin/gamma-secretase to calsenilin-mediated apoptosis</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15590057/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Bhattacharya, S., Bunick, C. G., & Chazin, W. J.</td>
      <td name="td2">Target selectivity in EF-hand calcium binding proteins</td>
      <td name="td3">Biochimica et biophysica acta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17904852/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Lee, K. H., Jeong, S., Yang, E. G., Park, Y. K., & Yu, J.</td>
      <td name="td2">An RNA aptamer that recognizes a specific conformation of the protein calsenilin</td>
      <td name="td3">Bioorganic & medicinal chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/3893430/" target="_blank" style="color:#520049"><b>1985</b></a></td>
      <td name="td1">Gejyo, F., Yamada, T., Odani, S., Nakagawa, Y. Shirahama, T. </td>
      <td name="td2"> new form of amyloid protein associated with chronic hemodialysis was identified as beta 2-microglobulin</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/2871446/" target="_blank" style="color:#520049"><b>1986</b></a></td>
      <td name="td1">Chanard, J., Lavaud, S., Toupance, O., Melin, J. P.</td>
      <td name="td2">Beta 2-microglobulin-associated amyloidosis in chronic haemodialysis patients</td>
      <td name="td3">Lancet</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9356260/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Sunde, M., Serpell, L. C., Bartlam, M., Fraser, P. E.</td>
      <td name="td2">Common core structure of amyloid fibrils by synchrotron X-ray diffraction</td>
      <td name="td3">Journal of molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11818542/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">O'Nuallain, B., & Wetzel, R.</td>
      <td name="td2">Conformational Abs recognizing a generic amyloid fibril epitope</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11820803/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Ylera, F., Lurz, R., Erdmann, V. A., & Fürste, J. P.</td>
      <td name="td2">Selection of RNA aptamers to the Alzheimer's disease amyloid peptide</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17878167/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Bunka, D. H., Mantle, B. J., Morten, I. J., Tennent, G. A.</td>
      <td name="td2">Production and characterization of RNA aptamers specific for amyloid fibril epitopes</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/6320006/" target="_blank" style="color:#520049"><b>1984</b></a></td>
      <td name="td1">Nowak, L., Bregestovski, P., Ascher, P., Herbet, A., & Prochiantz, A.</td>
      <td name="td2">Magnesium gates glutamate-activated channels in mouse central neurones</td>
      <td name="td3">Nature</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11848921/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Oivanen, M., Kuusela, S., & Lönnberg, H.</td>
      <td name="td2">Kinetics and Mechanisms for the Cleavage and Isomerization of the Phosphodiester Bonds of RNA by Brønsted Acids and Bases</td>
      <td name="td3">Chemical reviews</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14567697/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Li, G., Pei, W., & Niu, L.</td>
      <td name="td2">Channel-opening kinetics of GluR2Q(flip) AMPA receptor: a laser-pulse photolysis study</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16540562/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Mayer, M. L., Ghosal, A., Dolman, N. P., & Jane, D. E. </td>
      <td name="td2">Crystal structures of the kainate receptor GluR5 ligand binding core dimer with novel GluR5-selective antagonists</td>
      <td name="td3">The Journal of neuroscience : the official journal of the Society for Neuroscience</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17929944/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Huang, Z., Pei, W., Jayaseelan, S., Shi, H., & Niu, L.</td>
      <td name="td2">RNA aptamers selected against the GluR2 glutamate receptor channel</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28872832/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Huang, Z., Wen, W., Wu, A., & Niu, L.</td>
      <td name="td2">Chemically Modified, α-Amino-3-hydroxy-5-methyl-4-isoxazole (AMPA) Receptor RNA Aptamers Designed for in Vivo Use</td>
      <td name="td3">ACS chemical neuroscience</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/7781920/" target="_blank" style="color:#520049"><b>1995</b></a></td>
      <td name="td1">Premont, R. T., Inglese, J., & Lefkowitz, R. J.</td>
      <td name="td2">Protein kinases that phosphorylate activated G protein-coupled receptors</td>
      <td name="td3">FASEB journal : official publication of the Federation of American Societies for Experimental Biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8691724/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Lohse, M. J., Krasel, C., Winstel, R., & Mayor, F. Jr</td>
      <td name="td2">G-protein-coupled receptor kinases</td>
      <td name="td3">Kidney international</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9325250/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Peppel, K., Boekhoff, I., McDonald, P., Breer, H.</td>
      <td name="td2">G protein-coupled receptor kinase 3 (GRK3) gene disruption leads to loss of odorant receptor desensitization</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16339447/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Tesmer, V. M., Kawano, T., Shankaranarayanan, A., Kozasa, T.</td>
      <td name="td2">Snapshot of activated G proteins at the membrane: the Galphaq-GRK2-Gbetagamma complex</td>
      <td name="td3">Science </td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18230760/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Mayer, G., Wulffen, B., Huber, C., Brockmann, J., Flicke, B.</td>
      <td name="td2">An RNA molecule that specifically inhibits G-protein-coupled receptor kinase 2 in vitro</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/6300098/" target="_blank" style="color:#520049"><b>1983</b></a></td>
      <td name="td1">Klausner, R. D., Van Renswoude, J., Ashwell, G., Kempf, C.</td>
      <td name="td2">Receptor-mediated endocytosis of transferrin in K562 cells</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/6300903/" target="_blank" style="color:#520049"><b>1983</b></a></td>
      <td name="td1">Dautry-Varsat, A., Ciechanover, A., & Lodish, H. F.</td>
      <td name="td2">pH and the recycling of transferrin during receptor-mediated endocytosis</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/3681112/" target="_blank" style="color:#520049"><b>1987</b></a></td>
      <td name="td1">Bernstein S. E.</td>
      <td name="td2">Hereditary hypotransferrinemia with hemosiderosis, a murine disorder resembling human atransferrinemia</td>
      <td name="td3">The Journal of laboratory and clinical medicine</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9546397/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Lebrón, J. A., Bennett, M. J., Vaughn, D. E., Chirino, A. J.</td>
      <td name="td2">Crystal structure of the hemochromatosis protein HFE and characterization of its interaction with transferrin receptor</td>
      <td name="td3">Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14617356/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Parton, R. G., & Richards, A. A.</td>
      <td name="td2">Lipid rafts and caveolae as portals for endocytosis: new insights and common mechanisms</td>
      <td name="td3">Traffic</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18838694/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Chen, C. H., Dellamaggiore, K. R., Ouellette, C. P., Sedano, C. D.</td>
      <td name="td2">Aptamer-based endocytosis of a lysosomal enzyme</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10704308/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Huang, T. H., Yang, D. S., Plaskos, N. P.</td>
      <td name="td2">Structural studies of soluble oligomers of the Alzheimer beta-amyloid peptide</td>
      <td name="td3">ournal of molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12176077/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Klein W. L.</td>
      <td name="td2">Abeta toxicity in Alzheimer's disease: globular oligomers (ADDLs) as new vaccine and drug targets</td>
      <td name="td3">Neurochemistry international</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15919759/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Arimon, M., Díez-Pérez, I., Kogan, M. J., Durany, N.</td>
      <td name="td2">Fine structure study of Abeta1-42 fibrillogenesis with atomic force microscopy</td>
      <td name="td3">FASEB journal : official publication of the Federation of American Societies for Experimental Biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17008022/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Güntert, A., Döbeli, H., & Bohrmann, B.</td>
      <td name="td2">High sensitivity analysis of amyloid-beta peptide composition in amyloid deposits from human and PS2APP mouse brain</td>
      <td name="td3">Neuroscience</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19668864/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Takahashi, T., Tada, K., & Mihara, H.</td>
      <td name="td2">RNA aptamers selected against amyloid beta-peptide (Abeta) inhibit the aggregation of Abeta</td>
      <td name="td3">Molecular bioSystems</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/3930479/" target="_blank" style="color:#520049"><b>1985</b></a></td>
      <td name="td1">Hekman, C. M., & Loskutoff, D. J.</td>
      <td name="td2">Endothelial cells produce a latent inhibitor of plasminogen activators that can be activated by denaturants</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/2459123/" target="_blank" style="color:#520049"><b>1988</b></a></td>
      <td name="td1">Declerck, P. J., De Mol, M., Alessi, M. C., Baudner, S.</td>
      <td name="td2">Purification and characterization of a plasminogen activator inhibitor 1 binding protein from human plasma. Identification as a multimeric form of S protein (vitronectin)</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8662688/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Deng, G., Royle, G., Wang, S., Crain, K., & Loskutoff, D. J.</td>
      <td name="td2">Structural and functional analysis of the plasminogen activator inhibitor-1 binding motif in the somatomedin B domain of vitronectin</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9168821/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Kjøller, L., Kanse, S. M., Kirkegaard, T., Rodenburg, K. W.</td>
      <td name="td2">Plasminogen activator inhibitor-1 represses integrin- and vitronectin-mediated cell migration independently of its function as an inhibitor of plasminogen activation</td>
      <td name="td3">Experimental cell research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15138609/" target="_blank" style="color:#520049"><b>2004</b></a></td>
      <td name="td1">Chorostowska-Wynimko, J., Skrzypczak-Jankun, E., & Jankun, J.</td>
      <td name="td2">Plasminogen activator inhibitor type-1: its structure, biological activity and role in tumorigenesis (Review)</td>
      <td name="td3">International journal of molecular medicine</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19284310/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Blake, C. M., Sullenger, B. A., Lawrence, D. A., & Fortenberry, Y. M.</td>
      <td name="td2">Antimetastatic potential of PAI-1-specific RNA aptamers</td>
      <td name="td3">Oligonucleotides</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19271740/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Li, N., Ebright, J. N., Stovall, G. M., Chen, X., Nguyen, H. H.</td>
      <td name="td2">Technical and biological issues relevant to cell typing with aptamers</td>
      <td name="td3">Journal of proteome research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20572251/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Townshend, B., Aubry, I., Marcellus, R. C., Gehring, K.</td>
      <td name="td2">An RNA aptamer that selectively inhibits the enzymatic activity of protein tyrosine phosphatase 1B in vitro</td>
      <td name="td3">Chembiochem : a European journal of chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29711918/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Piganeau, N., Jenne, A., Thuillier, V., & Famulok, M.</td>
      <td name="td2"> An Allosteric Ribozyme Regulated by Doxycyline</td>
      <td name="td3">Angewandte Chemie (International ed. in English)</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11705996/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Meli, M., Vergne, J., Décout, J. L., & Maurel, M. C.  </td>
      <td name="td2">Adenine-aptamer complexes: a bipartite RNA site that binds the adenine nucleic base</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9384530/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Burke, D. H., Hoffman, D. C., Brown, A., Hansen, M.</td>
      <td name="td2">RNA aptamers to the peptidyl transferase inhibitor chloramphenicol</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21839787/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Mehta, J., Van Dorst, B., Rouah-Martin, E., Herrebout, W.</td>
      <td name="td2">In vitro selection and characterization of DNA aptamers recognizing chloramphenicol</td>
      <td name="td3">Journal of biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10913311/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Koizumi, M., & Breaker, R. R.</td>
      <td name="td2"> Molecular recognition of cAMP by an RNA aptamer</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9425088/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Hamasaki, K., Killian, J., Cho, J., & Rando, R. R.</td>
      <td name="td2">Minimal RNA constructs that specifically bind aminoglycoside antibiotics with high affinities</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11101810/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Jhaveri, S., Rajendran, M., & Ellington, A. D.</td>
      <td name="td2">In vitro selection of signaling aptamers</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9238640/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Lato, S. M., & Ellington, A. D.</td>
      <td name="td2">Screening chemical libraries for nucleic-acid-binding drugs by in vitro selection: a test case with lividomycin</td>
      <td name="td3">Molecular diversity</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9512549/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Kiga, D., Futamura, Y., Sakamoto, K., & Yokoyama, S. </td>
      <td name="td2">An RNA aptamer to the xanthine/guanine base with a distinctive mode of purine recognition</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18726014/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Sando, S., Narita, A., Hayami, M., & Aoyama, Y.</td>
      <td name="td2">Transcription monitoring using fused RNA with a dye-binding light-up aptamer as a tag: a blue fluorescent RNA</td>
      <td name="td3">Chemical communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38783134/" target="_blank" style="color:#520049"><b>2024</b></a></td>
      <td name="td1">Zuo, F., Jiang, L., Su, N., Zhang, Y., Bao, B.</td>
      <td name="td2">Imaging the dynamics of messenger RNA with a bright and stable green fluorescent RNA</td>
      <td name="td3">Nature chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37723244/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Jiang, L., Xie, X., Su, N., Zhang, D., Chen, X. </td>
      <td name="td2">Large Stokes shift fluorescent RNAs for dual-emission fluorescence and bioluminescence imaging in live cells</td>
      <td name="td3">Nature methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38816645/" target="_blank" style="color:#520049"><b>2024</b></a></td>
      <td name="td1">Huang, K., Song, Q., Fang, M., Yao, D.</td>
      <td name="td2">Structural basis of a small monomeric Clivia fluorogenic RNA with a large Stokes shift</td>
      <td name="td3">Nature chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8650187/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">O'Connell, D., Koenig, A., Jennings, S., Hicke, B., Han, H. L.</td>
      <td name="td2">Calcium-dependent oligonucleotide antagonists specific for L-selectin</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12692304/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">White, R. R., Shan, S., Rusconi, C. P., Shetty, G.</td>
      <td name="td2">Inhibition of rat corneal angiogenesis by a nuclease-resistant RNA aptamer specific for angiopoietin-2</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9883908/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Kimoto, M., Sakamoto, K., Shirouzu, M., Hirao, I.</td>
      <td name="td2">RNA aptamers that specifically bind to the Ras-binding domain of Raf-1</td>
      <td name="td3">FEBS letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10101203/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Triqueneaux, G., Velten, M., Franzon, P., Dautry, F.</td>
      <td name="td2">RNA binding specificity of Unr, a protein with five cold shock domains</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9546673/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Gal, S. W., Amontov, S., Urvil, P. T., Vishnuvardhan, D.</td>
      <td name="td2">Selection of a RNA aptamer that binds to human activated protein C and inhibits its protease function</td>
      <td name="td3">European journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8946842/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Ishizaki, J., Nevins, J. R., & Sullenger, B. A.</td>
      <td name="td2">Inhibition of cell proliferation by an RNA ligand that selectively blocks E2F function</td>
      <td name="td3">Nature medicine</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12054450/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Daniels, D. A., Sohal, A. K., Rees, S., & Grisshammer, R.</td>
      <td name="td2">Generation of RNA aptamers to the G-protein-coupled receptor for neurotensin, NTS-1</td>
      <td name="td3">Analytical biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9873529/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Jhaveri, S., Olwin, B., & Ellington, A. D.</td>
      <td name="td2">In vitro selection of phosphorothiolated aptamers</td>
      <td name="td3">Bioorganic & medicinal chemistry letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11329270/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Zhai, G., Iskandar, M., Barilla, K., & Romaniuk, P. J.</td>
      <td name="td2">Characterization of RNA aptamer binding by the Wilms' tumor suppressor protein WT1</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10097084/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Blind, M., Kolanus, W., & Famulok, M.</td>
      <td name="td2">Cytoplasmic RNA modulators of an inside-out signal-transduction cascade</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12490703/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Lee, J. H., Kim, H., Ko, J., & Lee, Y.</td>
      <td name="td2">Interaction of C5 protein with RNA aptamers selected by SELEX</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9889155/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Holeman, L. A., Robinson, S. L., Szostak, J. W., & Wilson, C.</td>
      <td name="td2">Isolation and characterization of fluorophore-binding RNA aptamers</td>
      <td name="td3">Folding & design</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19303859/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Werner, A., Konarev, P. V., Svergun, D. I., & Hahn, U.</td>
      <td name="td2">Characterization of a fluorophore binding RNA aptamer by fluorescence correlation spectroscopy and small angle X-ray scattering</td>
      <td name="td3">Analytical biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24133044/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Sunbul, M., & Jäschke, A.</td>
      <td name="td2">Contact-Mediated Quenching for RNA Imaging in Bacteria with  a Fluorophore-Binding Aptamer</td>
      <td name="td3">Angewandte Chemie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26175046/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Arora, A., Sunbul, M., & Jäschke, A.</td>
      <td name="td2">Dual-colour imaging of RNAs using quencher- and fluorophore-binding aptamers</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29931157/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Sunbul, M., & Jäschke, A.</td>
      <td name="td2">SRB-2: a promiscuous rainbow aptamer for live-cell RNA imaging</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31636432/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Bouhedda, F., Fam, K. T., Collot, M., Autour, A.</td>
      <td name="td2">A dimerization-based fluorogenic dye-aptamer module for RNA imaging in live cells</td>
      <td name="td3">Nature chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25337688/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Filonov, G. S., Moon, J. D., Svensen, N., & Jaffrey, S. R.</td>
      <td name="td2">Broccoli: rapid selection of an RNA mimic of green fluorescent protein by fluorescence-based selection and directed evolution</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26000751/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Filonov, G. S., Kam, C. W., Song, W., & Jaffrey, S. R.</td>
      <td name="td2">In-gel imaging of RNA processing using broccoli reveals optimal aptamer expression strategies</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26995352/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Filonov, G. S., & Jaffrey, S. R.</td>
      <td name="td2">RNA imaging with dimeric Broccoli in live bacterial and mammalian cells</td>
      <td name="td3">Current protocols in chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26877022/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Svensen, N., & Jaffrey, S. R.</td>
      <td name="td2">Fluorescent RNA aptamers as a tool to study RNA-modifying enzymes</td>
      <td name="td3">Cell chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27467146/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Ageely, E. A., Kartje, Z. J., Rohilla, K. J., Barkau, C. L., & Gagnon, K. T.</td>
      <td name="td2">Quadruplex-flanking stem structures modulate the stability and metal ion preferences of RNA mimics of GFP</td>
      <td name="td3">ACS chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28180326/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Okuda, M., Fourmy, D., & Yoshizawa, S.</td>
      <td name="td2">Use of baby Spinach and Broccoli for imaging of structured cellular RNAs</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28548488/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Alam, K. K., Tawiah, K. D., Lichte, M. F., Porciani, D., & Burke, D. H.</td>
      <td name="td2">A fluorescent split aptamer for visualizing RNA-RNA assembly in vivo</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28991414/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Wang, Z., Luo, Y., Xie, X., Hu, X., Song, H., Zhao, Y., Shi, J.</td>
      <td name="td2">In situ spatial complementation of aptamer-mediated recognition enables live-cell imaging of native RNA transcripts in real time</td>
      <td name="td3">Angewandte Chemie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30513826/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Chandler, M., Lyalina, T., Halman, J., Rackley, L., Lee, L.</td>
      <td name="td2">Broccoli fluorets: split aptamers as a user-friendly fluorescent toolkit for dynamic RNA nanotechnology</td>
      <td name="td3">Molecules</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30962542/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Litke, J. L., & Jaffrey, S. R.</td>
      <td name="td2">Highly efficient expression of circular RNA aptamers in cells using autocatalytic transcripts</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31850609/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Li, X., Kim, H., Litke, J. L., Wu, J., & Jaffrey, S. R.</td>
      <td name="td2">Fluorophore-promoted RNA folding and photostability enables imaging of single broccoli-tagged mRNAs in live mammalian cells</td>
      <td name="td3">Angewandte Chemie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32698574/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Li, X., Mo, L., Litke, J. L., Dey, S. K., Suter, S. R., & Jaffrey, S. R.</td>
      <td name="td2">Imaging intracellular S-adenosyl methionine dynamics in live mammalian cells with a genetically encoded red fluorescent RNA-based sensor</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33303627/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Kartje, Z. J., Janis, H. I., Mukhopadhyay, S., & Gagnon, K. T.</td>
      <td name="td2">Revisiting T7 RNA polymerase transcription in vitro with the Broccoli RNA aptamer as a simplified real-time fluorescent reporter</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33342694/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Zhang, T., Zhou, W., Lin, X., Khan, M. R., Deng, S.</td>
      <td name="td2">Light-up RNA aptamer signaling-CRISPR-cas13a-based mix-and-read assays for profiling viable pathogenic bacteria</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34490956/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Li, X., Wu, J., & Jaffrey, S. R.</td>
      <td name="td2">Engineering fluorophore recycling in a fluorogenic RNA aptamer</td>
      <td name="td3">Angewandte Chemie</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25101481/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Dolgosheina, E. V., Jeng, S. C., Panchapakesan, S. S.</td>
      <td name="td2">RNA mango aptamer-fluorophore: a bright, high-affinity complex for RNA labeling and tracking</td>
      <td name="td3">ACS chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28553947/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Demeshkina, N. A., Lau, M. W. L.</td>
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
      <td name="td1">Trachman, R. J., 3rd, Cojocaru, R., Wu, D., Piszczek, G.</td>
      <td name="td2">Structure-guided engineering of the homodimeric Mango-IV fluorescence turn-on aptamer yields an RNA FRET pair</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33674421/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Kong, K. Y. S., Jeng, S. C. Y., Rayyan, B., & Unrau, P. J.</td>
      <td name="td2">RNA Peach and Mango: Orthogonal two-color fluorogenic aptamers distinguish nearly identical ligands</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34971617/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Harish, B., Wang, J., Hayden, E. J., Grabe, B., Hiller, W.</td>
      <td name="td2">Hidden intermediates in Mango III RNA aptamer folding revealed by pressure perturbation</td>
      <td name="td3">Biophysical journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36120549/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Yang, X., Liu, C., Kuo, Y. A., Yeh, H. C., & Ren, P.</td>
      <td name="td2">Computational study on the binding of Mango-II RNA aptamer and fluorogen using the polarizable force field AMOEBA</td>
      <td name="td3">Frontiers in molecular biosciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36840712/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Bychenko, O. S., Khrulev, A. A., Svetlova, J. I., Tsvetkov, V. B.</td>
      <td name="td2">Red light-emitting short Mango-based system enables tracking a mycobacterial small noncoding RNA in infected macrophages</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28644615/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Tan, X., Constantin, T. P., Sloane, K. L., Waggoner, A. S.</td>
      <td name="td2">Fluoromodules consisting of a promiscuous RNA aptamer and red or blue fluorogenic cyanine dyes: Selection, characterization, and bioimaging</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30382099/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Shelke, S. A., Shao, Y., Laski, A., Koirala, D., Weissman, B. P.</td>
      <td name="td2">Structural basis for activation of fluorogenic dyes by an RNA aptamer lacking a G-quadruplex motif</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28945233/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Song, W., Filonov, G. S., Kim, H., Hirsch, M., Li, X.</td>
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
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/37221204/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Passalacqua, L. F. M., Starich, M. R., Link, K. A.</td>
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
      <td name="td1">Mieczkowski, M., Steinmetzger, C., Bessi, I., Lenz, A. K.</td>
      <td name="td2">Large Stokes shift fluorescence activation in an RNA aptamer by intermolecular proton transfer to guanine</td>
      <td name="td3">Nature communications</td>
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
      <td name="td1">Duchardt-Ferner, E., Juen, M., Bourgeois, B., Madl, T.</td>
      <td name="td2">Structure of an RNA aptamer in complex with the  fluorophore tetramethylrhodamine</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35294188/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Wu, J., Svensen, N., Song, W., Kim, H., Zhang, S., Li, X., & Jaffrey, S. R.</td>
      <td name="td2">Self-assembly of intracellular multivalent RNA complexes using dimeric Corn and Beetroot Aptamers</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29295996/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Jepsen, M. D. E., Sparvath, S. M., Nielsen, T. B., Langvad, A. H.</td>
      <td name="td2">Development of a genetically encodable FRET system using fluorescent RNA aptamers</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33376189/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Jeng, S. C. Y., Trachman, R. J., 3rd, Weissenboeck, F., Truong, L.</td>
      <td name="td2">Fluorogenic aptamers resolve the flexibility of RNA junctions using orientation-dependent FRET</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36227560/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Trachman, R. J., 3rd, Link, K. A., Knutson, J. R., & Ferré-D'Amaré, A. R.</td>
      <td name="td2">Characterizing fluorescence properties of turn-on RNA aptamers</td>
      <td name="td3">Methods in molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23746618/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Strack, R. L., & Jaffrey, S. R.</td>
      <td name="td2">New approaches for sensing metabolites and proteins in live cells using RNA</td>
      <td name="td3">Current opinion in chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23991672/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Höfer, K., Langejürgen, L. V., & Jäschke, A.</td>
      <td name="td2">Universal aptamer-based real-time monitoring of enzymatic RNA synthesis</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24286188/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Han, K. Y., Leslie, B. J., Fei, J., Zhang, J., & Ha, T.</td>
      <td name="td2">Understanding the photophysics of the spinach-DFHBI RNA aptamer-fluorogen complex to improve live-cell RNA imaging</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24393009/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Song, W., Strack, R. L., Svensen, N., & Jaffrey, S. R.</td>
      <td name="td2">Plug-and-play fluorophores extend the spectral properties of Spinach</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23991760/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Pothoulakis, G., Ceroni, F., Reeve, B., & Ellis, T.</td>
      <td name="td2">The spinach RNA aptamer as a characterization tool for synthetic biology</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25026079/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Warner, K. D., Chen, M. C., Song, W., Strack, R. L.</td>
      <td name="td2">Structural basis for activity of highly efficient RNA mimics of green fluorescent protein</td>
      <td name="td3">Nature structural & molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24942625/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Bhadra, S., & Ellington, A. D.</td>
      <td name="td2">A Spinach molecular beacon triggered by strand displacement</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24932527/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Rogers, T. A., Andrews, G. E., Jaeger, L., & Grabow, W. W.</td>
      <td name="td2">Fluorescent monitoring of RNA assembly and processing using the split-Spinach aptamer</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25964329/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">You, M., Litke, J. L., & Jaffrey, S. R.</td>
      <td name="td2">Imaging metabolite dynamics in living cells using a Spinach-based riboswitch</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26612428/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Zhang, J., Fei, J., Leslie, B. J., Han, K. Y., Kuhlman, T. E., & Ha, T.</td>
      <td name="td2">Tandem spinach array for mRNA imaging in living bacterial cells</td>
      <td name="td3">Scientific reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26932363/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Autour, A., Westhof, E., & Ryckelynck, M.</td>
      <td name="td2">iSpinach: a fluorogenic RNA aptamer optimized for in vitro applications</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30016869/" target="_blank" style="color:#520049"><b>2018</b></a></td>
      <td name="td1">Tang, X., Deng, R., Sun, Y., Ren, X., Zhou, M., & Li, J.</td>
      <td name="td2">Amplified tandem Spinach-based aptamer transcription enables low background miRNA detection</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30807171/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Santra, K., Geraskin, I., Nilsen-Hamilton, M., Kraus, G. A., & Petrich, J. W.</td>
      <td name="td2">Characterization of the photophysical behavior of DFHBI derivatives: Fluorogenic molecules that illuminate the Spinach RNA aptamer</td>
      <td name="td3">The journal of physical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10339553/" target="_blank" style="color:#520049"><b>19990525</b></a></td>
      <td name="td1">Grate, D., & Wilson, C.</td>
      <td name="td2">Laser-mediated, site-specific inactivation of RNA transcripts</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10926496/" target="_blank" style="color:#520049"><b>20000804</b></a></td>
      <td name="td1">Baugh, C., Grate, D., & Wilson, C.</td>
      <td name="td2">2.8 A crystal structure of the malachite green aptamer</td>
      <td name="td3">Journal of molecular biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12475353/" target="_blank" style="color:#520049"><b>20021218</b></a></td>
      <td name="td1">Nguyen, D. H., DeFina, S. C., Fink, W. H., & Dieckmann, T.</td>
      <td name="td2">Binding to an RNA aptamer changes the charge distribution and conformation of malachite green</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubs.acs.org/doi/full/10.1021/jp037273b" target="_blank" style="color:#520049"><b>20031225</b></a></td>
      <td name="td1">Nguyen, D. H., Dieckmann, T., Colvin, M. E., & Fink, W. H.</td>
      <td name="td2">Dynamics studies of a malachite green−RNA complex revealing the origin of the red-shift and energetic contributions of stacking interactions</td>
      <td name="td3">The Journal of Physical Chemistry B</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14695514/" target="_blank" style="color:#520049"><b>20040103</b></a></td>
      <td name="td1">Flinders, J., DeFina, S. C., Brackett, D. M., Baugh, C., Wilson, C.</td>
      <td name="td2">Recognition of planar and nonplanar Ligands in the malachite green±RNA aptamer complex</td>
      <td name="td3">Chembiochem : a European journal of chemical biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16144363/" target="_blank" style="color:#520049"><b>20050914</b></a></td>
      <td name="td1">Kolpashchikov D. M.</td>
      <td name="td2">Binary malachite green aptamer for fluorescent detection of nucleic acids</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18667307/" target="_blank" style="color:#520049"><b>20080815</b></a></td>
      <td name="td1">Furukawa, K., Abe, H., Abe, N., Harada, M., Tsuneda, S., & Ito, Y.</td>
      <td name="td2">Fluorescence generation from tandem repeats of a malachite green RNA aptamer using rolling circle transcription</td>
      <td name="td3">Bioorganic & medicinal chemistry letters</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19195013/" target="_blank" style="color:#520049"><b>20090301</b></a></td>
      <td name="td1">Zhang, X., Potty, A. S., Jackson, G. W., Stepanov, V., Tang, A.</td>
      <td name="td2">Engineered 5S ribosomal RNAs displaying aptamers recognizing vascular endothelial growth factor and malachite green</td>
      <td name="td3">Journal of molecular recognition: JMR</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21523267/" target="_blank" style="color:#520049"><b>20110701</b></a></td>
      <td name="td1">Bernard Da Costa, J., & Dieckmann, T.</td>
      <td name="td2">Entropy and Mg2+ control ligand affinity and specificity in the malachite green binding RNA aptamer</td>
      <td name="td3">Molecular bioSystems</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22192051/" target="_blank" style="color:#520049"><b>20120110</b></a></td>
      <td name="td1">Sokoloski, J. E., Dombrowski, S. E., & Bevilacqua, P. C.</td>
      <td name="td2">Thermodynamics of ligand binding to a heterogeneous RNA population in the malachite green aptamer</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23984874/" target="_blank" style="color:#520049"><b>20130924</b></a></td>
      <td name="td1">Da Costa, J. B., Andreiev, A. I., & Dieckmann, T.</td>
      <td name="td2">Thermodynamics and kinetics of adaptive binding in the malachite green RNA aptamer</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/slct.201600154" target="_blank" style="color:#520049"><b>20160606</b></a></td>
      <td name="td1">Wang, H., Wang, J., Sun, N., Cheng, H., Chen, H., & Pei, R.</td>
      <td name="td2">Selection and characterization of malachite green aptamers for the development of light-up probes</td>
      <td name="td3">ChemistrySelect</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27591602/" target="_blank" style="color:#520049"><b>20161101</b></a></td>
      <td name="td1">Zhou, Y., Chi, H., Wu, Y., Marks, R. S., & Steele, T. W. J.</td>
      <td name="td2">Organic additives stabilize RNA aptamer binding of malachite green</td>
      <td name="td3">Talanta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://link.springer.com/article/10.1007/s12161-017-1144-3#citeas" target="_blank" style="color:#520049"><b>20180115</b></a></td>
      <td name="td1">Jia, J., Yan, S., Lai, X., Xu, Y., Liu, T., & Xiang, Y.</td>
      <td name="td2">Colorimetric aptasensor for detection of malachite green in fish sample based on RNA and gold nanoparticles</td>
      <td name="td3">Food Analytical Methods</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/29513000/" target="_blank" style="color:#520049"><b>20180316</b></a></td>
      <td name="td1">Yerramilli, V. S., & Kim, K. H.</td>
      <td name="td2">Labeling RNAs in live cells using malachite green aptamer scaffolds as fluorescent probes</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31187804/" target="_blank" style="color:#520049"><b>20190721</b></a></td>
      <td name="td1">Luo, X., Chen, Z., Li, H., Li, W., Cui, L., & Huang, J.</td>
      <td name="td2">Exploiting the application of l-aptamer with excellent stability: an efficient sensing platform for malachite green in fish samples</td>
      <td name="td3">The Analyst</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35529731/" target="_blank" style="color:#520049"><b>20191015</b></a></td>
      <td name="td1">Wang, H., Wang, H., Zhang, M., Jia, Y., & Li, Z.</td>
      <td name="td2">A label-free aptamer-based biosensor for microRNA detection by the RNA-regulated fluorescence of malachite green</td>
      <td name="td3">RSC advances</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/36373144/" target="_blank" style="color:#520049"><b>20221101</b></a></td>
      <td name="td1">R O'Steen, M., & M Kolpashchikov, D.</td>
      <td name="td2">A self-assembling split aptamer multiplex assay for SARS-COVID19 and miniaturization of a malachite green DNA-based aptamer</td>
      <td name="td3">Sensors and actuators reports</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19901993/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Rahimi F, Murakami K, Summers JL, Chen CH, Bitan G</td>
      <td name="td2">RNA aptamers generated against oligomeric Abeta40 recognize common amyloid aptatopes with low specificity but high sensitivity</td>
      <td name="td3">PLoS One</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25618678/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Babu E, Muthu Mareeswaran P, Sathish V, Singaravadivel S, Rajagopal S</td>
      <td name="td2">Sensing and inhibition of amyloid-β based on the simple luminescent aptamer-ruthenium complex system</td>
      <td name="td3">Talanta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30642129/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Janas T, Sapoń K, Stowell MHB, Janas T</td>
      <td name="td2">Selection of Membrane RNA Aptamers to Amyloid Beta Peptide: Implications for Exosome-Based Antioxidant Strategies</td>
      <td name="td3">International journal of molecular sciences</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32127399/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Murakami K, Obata Y, Sekikawa A, Ueda H, Izuo N</td>
      <td name="td2">An RNA aptamer with potent affinity for a toxic dimer of amyloid β42 has potential utility for histochemical studies of Alzheimer's disease</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11884639/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Lato SM, Ozerova ND, He K, Sergueeva Z, Shaw BR, Burke DH</td>
      <td name="td2">Boron-containing aptamers to ATP</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9245404/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Mannironi C, Di Nardo A, Fruscoloni P, Tocchini-Valentini GP</td>
      <td name="td2">In vitro selection of dopamine RNA ligands</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21168553/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Park H, Paeng IR</td>
      <td name="td2">Development of direct competitive enzyme-linked aptamer assay for determination of dopamine in serum</td>
      <td name="td3">Analytica chimica acta</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23069733/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Annoni C, Nakata E, Tamura T, Liew FF, Nakano S, Gelmi ML, Morii T</td>
      <td name="td2">Construction of ratiometric fluorescent sensors by ribonucleopeptides</td>
      <td name="td3">Organic & biomolecular chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23210972/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Farjami E, Campos R, Nielsen JS, Gothelf KV, Kjems J, Ferapontova EE</td>
      <td name="td2">RNA aptamer-based electrochemical biosensor for selective and label-free analysis of dopamine</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25882962/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Álvarez-Martos I, Campos R, Ferapontova EE</td>
      <td name="td2">Surface state of the dopamine RNA aptamer affects specific recognition and binding of dopamine by the aptamer-modified electrodes</td>
      <td name="td3">The Analyst</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26916821/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Álvarez-Martos I, Ferapontova EE</td>
      <td name="td2">Electrochemical Label-Free Aptasensor for Specific Analysis of Dopamine in Serum in the Presence of Structurally Related Neurotransmitters</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30605601/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Álvarez-Martos I, Møller A, Ferapontova EE</td>
      <td name="td2">Dopamine Binding and Analysis in Undiluted Human Serum and Blood by the RNA-Aptamer Electrode</td>
      <td name="td3">ACS chemical neuroscience</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/35775197/" target="_blank" style="color:#520049"><b>2022</b></a></td>
      <td name="td1">Harbaugh SV, Silverman AD, Chushak YG, Zimlich K, Wolfe M</td>
      <td name="td2">Engineering a Synthetic Dopamine-Responsive Riboswitch for In Vitro Biosensing</td>
      <td name="td3">ACS synthetic biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9631062/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Nolte A, Klussmann S, Bald R, Erdmann VA, Fürste JP</td>
      <td name="td2">Mirror-design of L-oligonucleotide ligands binding to L-arginine</td>
      <td name="td3">Nature biotechnology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8604334/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Geiger A, Burgstaller P, von der Eltz H, Roeder A, Famulok M</td>
      <td name="td2">RNA aptamers that bind L-arginine with sub-micromolar dissociation constants and high enantioselectivity</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10786843/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Mannironi C, Scerch C, Fruscoloni P, Tocchini-Valentini GP</td>
      <td name="td2">Molecular recognition of amino acids by RNA aptamers: the evolution into an L-tyrosine binder of a dopamine-binding RNA motif</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28835641/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Abatemarco J, Sarhan MF, Wagner JM, Lin JL, Liu L</td>
      <td name="td2">NA-aptamers-in-droplets (RAPID) high-throughput screening for secretory phenotypes</td>
      <td name="td3">Nature communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11756401/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Proske D, Höfliger M, Söll RM, Beck-Sickinger AG, Famulok M</td>
      <td name="td2">A Y2 receptor mimetic aptamer directed against neuropeptide Y</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15984861/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Mendonsa SD, Bowser MT</td>
      <td name="td2">In vitro selection of aptamers with affinity for neuropeptide Y using capillary electrophoresis</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/33297678/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">López L, Hernández N, Reyes Morales J, Cruz J, Flores K</td>
      <td name="td2">Measurement of Neuropeptide Y Using Aptamer-Modified Microelectrodes by Electrochemical Impedance Spectroscopy</td>
      <td name="td3">Analytical chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38033269/" target="_blank" style="color:#520049"><b>2023</b></a></td>
      <td name="td1">Seibold JM, Abeykoon SW, Ross AE, White RJ</td>
      <td name="td2">Development of an Electrochemical, Aptamer-Based Sensor for Dynamic Detection of Neuropeptide Y</td>
      <td name="td3">ACS sensors</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/38709872/" target="_blank" style="color:#520049"><b>2024</b></a></td>
      <td name="td1">Fernández-Vega L, Meléndez-Rodríguez DE, Ospina-Alejandro M</td>
      <td name="td2">Development of a Neuropeptide Y-Sensitive Implantable Microelectrode for Continuous Measurements</td>
      <td name="td3">ACS sensors</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11139634/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Srisawat C, Goldstein IJ, Engelke DR</td>
      <td name="td2">Sephadex-binding RNA ligands: rapid affinity purification of RNA from complex RNA mixtures</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26135474/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Lee T, Yagati AK, Pi F, Sharma A, Choi JW, Guo P</td>
      <td name="td2">Construction of RNA-Quantum Dot Chimera for Nanoscale Resistive Biomemory Application</td>
      <td name="td3">ACS nano</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32042566/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Lee T, Mohammadniaei M, Zhang H, Yoon J, Choi HK, Guo S</td>
      <td name="td2">Single Functionalized pRNA/Gold Nanoparticle for Ultrasensitive MicroRNA Detection Using Electrochemical Surface-Enhanced Raman Spectroscopy</td>
      <td name="td3">Advanced science</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11178986/" target="_blank" style="color:#520049"><b>2001</b></a></td>
      <td name="td1">Jeong S, Eom T, Kim S, Lee S, Yu J</td>
      <td name="td2">In vitro selection of the RNA aptamer against the Sialyl Lewis X and its inhibition of the cell adhesion</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15745995/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Eulberg D, Buchner K, Maasch C, Klussmann S</td>
      <td name="td2">Development of an automated in vitro selection protocol to obtain RNA-based aptamers: identification of a biostable substance P antagonist</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/1370372/" target="_blank" style="color:#520049"><b>1992</b></a></td>
      <td name="td1">Burnashev, N., Monyer, H., Seeburg, P. H., & Sakmann, B.</td>
      <td name="td2">Divalent ion permeability of AMPA receptor channels is dominated by the edited form of a single subunit</td>
      <td name="td3">Neuron 8</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8604042/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Wenthold, R. J., Petralia, R. S., Blahos, J., II, & Niedzielski, A. S.</td>
      <td name="td2">Evidence for multiple AMPA receptor complexes in hippocampal CA1/CA2 neurons</td>
      <td name="td3">J. Neurosci</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8522940/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Seeburg, P. H.</td>
      <td name="td2">The role of RNA editing in controlling glutamate receptor channel properties</td>
      <td name="td3">J. Neurochem</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8987736/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Swanson, G. T., Kamboj, S. K., & Cull-Candy, S. G.</td>
      <td name="td2">Single-channel properties of recombinant AMPA receptors depend on RNA editing, splice variation, and subunit composition</td>
      <td name="td3">J. Neurosci</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/11124978/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Schiffer, H. H., Swanson, G. T., Masliah, E., & Heinemann, S. F.</td>
      <td name="td2">Unequal expression of allelic kainate receptor GluR7 mRNAs in human brains</td>
      <td name="td3">J. Neurosci</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/14622580/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Greger, I. H., Khatri, L., Kong, X., & Ziff, E. B.</td>
      <td name="td2">AMPA receptor tetramerization is mediated by Q/R editing</td>
      <td name="td3">Neuron</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20518485/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Huang, Z., Han, Y., Wang, C., & Niu, L.</td>
      <td name="td2">Potent and selective inhibition of the open-channel conformation of AMPA receptors by an RNA aptamer</td>
      <td name="td3">Biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21402710/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Park, J. S., Wang, C., Han, Y., Huang, Z., & Niu, L.</td>
      <td name="td2">Potent and selective inhibition of a single alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA) receptor subunit by an RNA aptamer</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28325839/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Jaremko, W. J., Huang, Z., Wen, W., Wu, A., Karl, N., & Niu, L.</td>
      <td name="td2">Identification and characterization of RNA aptamers: A long aptamer blocks the AMPA receptor and a short aptamer blocks both AMPA and kainate receptors</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/34509496/" target="_blank" style="color:#520049"><b>2021</b></a></td>
      <td name="td1">Huang, Z., & Niu, L.</td>
      <td name="td2">RNA aptamers for AMPA receptors</td>
      <td name="td3">Neuropharmacology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/6375662/" target="_blank" style="color:#520049"><b>1984</b></a></td>
      <td name="td1">Glennera, G. G., & Wong, C. W.</td>
      <td name="td2">Alzheimer’s disease: initial report of the purification and characterization of a novel cerebrovascular amyloid protein</td>
      <td name="td3">Biochemical and biophysical research communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/3159021/" target="_blank" style="color:#520049"><b>1985</b></a></td>
      <td name="td1">Masters, C. L., Simms, G., Weinman, N. A., Multhaup, G.</td>
      <td name="td2">Amyloid plaque core protein in Alzheimer disease and Down syndrome</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9190286/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Harper, J. D., Wong, S. S., Lieber, C. M., & Lansbury, P. T.</td>
      <td name="td2">Observation of metastable Aβ amyloid protofibrils by atomic force microscopy</td>
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9268388/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Walsh, D. M., Lomakin, A., Benedek, G. B., Condron, M. M.</td>
      <td name="td2">Amyloid beta-protein fibrillogenesis. Detection of a protofibrillar intermediate</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9600986/" target="_blank" style="color:#520049"><b>1998</b></a></td>
      <td name="td1">Lambert, M. P., Barlow, A. K., Chromy, B. A., Edwards, C., Freed, R.</td>
      <td name="td2">Diffusible, nonfibrillar ligands derived from Abeta1-42 are potent central nervous system neurotoxins</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12750461/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Hoshi, M., Sato, M., Matsumoto, S., Noguchi, A., Yasutake, K.</td>
      <td name="td2">Spherical aggregates of beta-amyloid (amylospheroid) show high neurotoxicity and activate tau protein kinase I/glycogen synthase kinase-3beta</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/17245412/" target="_blank" style="color:#520049"><b>2007</b></a></td>
      <td name="td1">Haass, C., & Selkoe, D. J.</td>
      <td name="td2">Soluble protein oligomers in neurodegeneration: lessons from the Alzheimer's amyloid beta-peptide</td>
      <td name="td3">Nature reviews. Molecular cell biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18845536/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Roychaudhuri, R., Yang, M., Hoshi, M. M., & Teplow, D. B.</td>
      <td name="td2">Amyloid β-protein assembly and Alzheimer disease</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27162352/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Watanabe-Nakayama, T., Ono, K., Itami, M., Takahashi, R.</td>
      <td name="td2">High-speed atomic force microscopy reveals structural dynamics of amyloid β1-42 aggregates</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16868550/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Waldmann T. A.</td>
      <td name="td2">The biology of interleukin-2 and interleukin-15: implications for cancer therapy and vaccine design</td>
      <td name="td3">Nature reviews. Immunology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20732639/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Malek, T. R., & Castro, I. </td>
      <td name="td2">Interleukin-2 receptor signaling: at the interface between tolerance and immunity</td>
      <td name="td3">Immunity</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23675235/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Ito, M., Zhao, N., Zeng, Z., Zhou, X., Chang, C. C., & Zu, Y.</td>
      <td name="td2"> Interleukin-2 functions in anaplastic large cell lymphoma cells through augmentation of extracellular signal-regulated kinases 1/2 activation</td>
      <td name="td3">International journal of biomedical science : IJBS</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21719603/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Yang, Z. Z., Grote, D. M., Ziesmer, S. C., Manske, M. K.</td>
      <td name="td2">Soluble IL-2Ralpha facilitates IL-2-mediated immune responses and predicts reduced survival in follicular B-cell non-Hodgkin lymphoma</td>
      <td name="td3">Blood</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22849383/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Whiteside TL, Schuler P, Schilling B.</td>
      <td name="td2">Induced and natural regulatory T cells in human cancer</td>
      <td name="td3">Expert opinion on biological therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25422100/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Mir, M. A., Maurer, M. J., Ziesmer, S. C., Slager, S. L.</td>
      <td name="td2"> Elevated serum levels of IL-2R, IL-1RA, and CXCL9 are associated with a poor prognosis in follicular lymphoma</td>
      <td name="td3">Blood</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26205340/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Melero, I., Berman, D. M., Aznar, M. A., Korman, A. J.</td>
      <td name="td2">Evolving synergistic combinations of targeted immunotherapies to combat cancer.</td>
      <td name="td3">Nature reviews. Cancer</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/25561050/" target="_blank" style="color:#520049"><b>2015</b></a></td>
      <td name="td1">Ma, H., Liu, J., Ali, M. M., Mahmood, M. A., Labanieh, L.</td>
      <td name="td2">Nucleic acid aptamers in cancer research, diagnosis and therapy</td>
      <td name="td3">Nucleic acid aptamers in cancer research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28383112/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Binder, M., O'Byrne, M. M., Maurer, M. J., Ansell, S.</td>
      <td name="td2">Associations between elevated pre-treatment serum cytokines and peripheral blood cellular markers of immunosuppression in patients with lymphoma</td>
      <td name="td3">American journal of hematology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/31383650/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Veeramani, S., Blackwell, S. E., Thiel, W. H., Yang, Z. Z.</td>
      <td name="td2">An RNA Aptamer-Based Biomarker Platform Demonstrates High Soluble CD25 Occupancy by IL2 in the Serum of Follicular Lymphoma Patients</td>
      <td name="td3">Cancer immunology research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12453418/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Milne, T. A., Briggs, S. D., Brock, H. W., Martin, M. E.</td>
      <td name="td2">MLL targets SET domain methyltransferase activity to Hox gene promoters</td>
      <td name="td3">Mol. Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12482972/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Hsieh, J. J., Ernst, P., Erdjument-Bromage, H., Tempst, P.</td>
      <td name="td2">Proteolytic cleavage of MLL generates a complex of N- and C-terminal fragments that confers protein stability and subnuclear localization</td>
      <td name="td3">Mol. Cell. Biol.</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16199523/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Milne, T. A., Dou, Y., Martin, M. E., Brock, H. W.</td>
      <td name="td2">MLL associates specifically with a subset of transcriptionally active target genes</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15949446/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Morillon, A., Karabetsou, N., Nair, A., & Mellor, J.</td>
      <td name="td2">Dynamic lysine methylation on histone H3 defines the regulatory phase of gene transcription</td>
      <td name="td3">Mol. Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18224408/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Dou, Y., & Hess, J. L.</td>
      <td name="td2">Mechanisms of transcriptional regulation by MLL and its disruption in acute leukemia</td>
      <td name="td3">International journal of hematology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16878130/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Dou, Y., Milne, T. A., Ruthenburg, A. J., Lee, S., Lee, J. W.</td>
      <td name="td2">Regulation of MLL1 H3K4 methyltransferase activity by its core components</td>
      <td name="td3">Nat. Struct. Mol. Biol.</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19187761/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">Southall, S. M., Wong, P. S., Odho, Z., Roe, S. M., & Wilson, J. R.</td>
      <td name="td2">Structural basis for the requirement of additional factors for MLL1 SET domain activity and recognition of epigenetic marks</td>
      <td name="td3">Mol. Cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24288367/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Jeong, K. W., Andreu-Vieyra, C., You, J. S., Jones, P. A.</td>
      <td name="td2">Establishment of active chromatin structure at enhancer elements by mixed-lineage leukemia 1 to initiate estrogendependent gene expression</td>
      <td name="td3">Nucleic Acids Res.</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23210835/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Karatas, H., Townsend, E. C., Cao, F., Chen, Y., Bernard, D.</td>
      <td name="td2">High-affinity, small-molecule peptidomimetic inhibitors of MLL1/WDR5 protein-protein interaction</td>
      <td name="td3">Journal of the American Chemical Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24389101/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Cao, F., Townsend, E. C., Karatas, H., Xu, J., Li, L., Lee, S.</td>
      <td name="td2">Targeting MLL1 H3K4 methyltransferase activity in mixed-lineage leukemia</td>
      <td name="td3">Molecular cell</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30419633/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Ul-Haq, A., Jin, M. L., Jeong, K. W., Kim, H. M., & Chun, K. H.</td>
      <td name="td2">Isolation of MLL1 Inhibitory RNA Aptamers</td>
      <td name="td3">Biomolecules & therapeutics</td>
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
      <td name="td1">Clauss, S., Gross, O., Kulkarni, O., Avila-Ferrufino, A.</td>
      <td name="td2">Ccl2/Mcp-1 blockade reduces glomerular and interstitial macrophages but does not ameliorate renal pathology in collagen4A3-deficient mice with autosomal recessive Alport nephropathy</td>
      <td name="td3">The Journal of pathology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/21813474/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Baeck, C., Wehr, A., Karlmark, K. R., Heymann, F., Vucur, M.</td>
      <td name="td2">Pharmacological inhibition of the chemokine CCL2 (MCP-1) diminishes liver macrophage infiltration and steatohepatitis in chronic hepatic injury</td>
      <td name="td3">Gut</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24561613/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Ehling, J., Bartneck, M., Wei, X., Gremse, F., Fech, V.</td>
      <td name="td2">CCL2-dependent infiltrating macrophages promote angiogenesis in progressive liver fibrosis</td>
      <td name="td3">Gut</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24481979/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Baeck, C., Wei, X., Bartneck, M., Fech, V., Heymann, F.</td>
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
      <td name="td2">Spiegelmer Inhibition of MCP-1/CCR2--Potential as an Adjunct Immunosuppressive Therapy in Transplantation</td>
      <td name="td3">Scandinavian journal of immunology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28186566/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Menne, J., Eulberg, D., Beyer, D., Baumann, M., Saudek, F.</td>
      <td name="td2">C-C motif-ligand 2 inhibition with emapticap pegol (NOX-E36) in type 2 diabetic patients with albuminuria</td>
      <td name="td3">Nephrology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/28837800/" target="_blank" style="color:#520049"><b>2017</b></a></td>
      <td name="td1">Boels, M. G. S., Koudijs, A., Avramut, M. C., Sol, W. M. P. J.</td>
      <td name="td2">Systemic Monocyte Chemotactic Protein-1 Inhibition Modifies Renal Macrophages and Restores Glomerular Endothelial Glycocalyx and Barrier Function in Diabetic Nephropathy</td>
      <td name="td3">The American journal of pathology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed. ncbi. nlm. nih. gov/24570482/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Padlan, C. S., Malashkevich, V. N., Almo, S. C., Levy, M., Brenowitz, M.</td>
      <td name="td2">An RNA aptamer possessing a novel monovalent cation-mediated fold inhibits lysozyme catalysis by inhibiting the binding of long natural substrates</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9346949/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Thomas, M., Chédin, S., Carles, C., Riva, M., Famulok, M.</td>
      <td name="td2">Selective targeting and inhibition of yeast RNA polymerase II by RNA aptamers</td>
      <td name="td3">The Journal of biological chemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16341226/" target="_blank" style="color:#520049"><b>2006</b></a></td>
      <td name="td1">Kettenberger, H., Eisenführ, A., Brueckner, F., Theis, M.</td>
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
      <td name="td1">Boots, J. L., von Pelchrzim, F., Weiss, A., Zimmermann, B.</td>
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
      <td name="td3">Acta crystallographica. Section D</td>
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
      <td name="td3">Journal of peptide science : an official publication of the European Peptide Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26896646/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Prado, S., Beltrán, M., Coiras, M., Bedoya, L. M., Alcamí, J.</td>
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
      <td name="td1">Barton, J. L., Bunka, D. H., Knowling, S. E., Lefevre, P.</td>
      <td name="td2">Characterization of RNA aptamers that disrupt the RUNX1-CBFbeta/DNA complex. </td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20140822/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Mongelard, F., & Bouvet, P</td>
      <td name="td2">AS-1411, a guanosine-rich oligonucleotide aptamer targeting nucleolin for the potential treatment of cancer, including acute myeloid leukemia.</td>
      <td name="td3">Current opinion in molecular therapeutics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/23997091/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Nomura, Y., Tanaka, Y., Fukunaga, J., Fujiwara, K., Chiba, M.</td>
      <td name="td2">Solution structure of a DNA mimicking motif of an RNA aptamer against transcription factor AML1 Runt domain</td>
      <td name="td3">Journal of biochemistry</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3683927/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Fukunaga, J., Nomura, Y., Tanaka, Y., Amano, R., Tanaka, T.</td>
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
      <td name="td1">Zhao, N., Pei, S. N., Qi, J., Zeng, Z., Iyer, S. P., Lin, P.</td>
      <td name="td2">Oligonucleotide aptamer-drug conjugates for targeted therapy of acute myeloid leukemia</td>
      <td name="td3">Biomaterials</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27514505/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Zaimy, M. A., Jebali, A., Bazrafshan, B., Mehrtashfar, S., Shabani, S.</td>
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
      <td name="td1">Jiang, L., Majumdar, A., Hu, W., Jaishree, T. J., Xu, W.</td>
      <td name="td2">Saccharide-RNA recognition in a complex formed between neomycin B and an RNA aptamer</td>
      <td name="td3">Structure</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10908357/" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Cowan, J. A., Ohyama, T., Wang, D., & Natarajan, K</td>
      <td name="td2">Recognition of a cognate RNA aptamer by neomycin B: quantitative evaluation of hydrogen bonding and electrostatic interactions</td>
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/18000033/" target="_blank" style="color:#520049"><b>2008</b></a></td>
      <td name="td1">Weigand, J. E., Sanchez, M., Gunnesch, E. B., Zeiher, S., Schroeder, R.</td>
      <td name="td2">Screening for engineered neomycin riboswitches that control translation initiation</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/19217276/" target="_blank" style="color:#520049"><b>2009</b></a></td>
      <td name="td1">de-los-Santos-Alvarez, N., Lobo-Castañón, M. J., Miranda-Ordieres, A. J., & Tuñón-Blanco, P. </td>
      <td name="td2">SPR sensing of small molecules with modified RNA aptamers: detection of neomycin B</td>
      <td name="td3">Biosensors & bioelectronics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/20478079/" target="_blank" style="color:#520049"><b>2010</b></a></td>
      <td name="td1">Wilhelmsson L. M.</td>
      <td name="td2">Fluorescent nucleic acid base analogues</td>
      <td name="td3">Quarterly reviews of biophysics</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22951899/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Jeon, J., Lee, K. H., & Rao, J.</td>
      <td name="td2"> A strategy to enhance the binding affinity of fluorophore-aptamer pairs for RNA tagging with neomycin conjugation</td>
      <td name="td3">Chemical communications</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/24757168/" target="_blank" style="color:#520049"><b>2014</b></a></td>
      <td name="td1">Ilgu, M., Fulton, D. B., Yennamalli, R. M., Lamm, M. H.</td>
      <td name="td2">An adaptable pentaloop defines a robust neomycin-B RNA aptamer with conditional ligand-bound structures</td>
      <td name="td3">RNA</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/26661511/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Duchardt-Ferner, E., Gottstein-Schmidtke, S. R., Weigand, J. E.</td>
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
      <td name="td1">Gustmann, H., Segler, A. J., Gophane, D. B., Reuss, A. J.</td>
      <td name="td2"> Structure guided fluorescence labeling reveals a two-step binding mechanism of neomycin to its RNA aptamer</td>
      <td name="td3">Nucleic acids research</td>
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
      <td name="td3">RNA (New York</td>
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
      <td name="td3">Current opinion in chemical biology</td>
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
      <td name="td3">Combinatorial chemistry & high throughput screening</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22173871/" target="_blank" style="color:#520049"><b>2012</b></a></td>
      <td name="td1">Bose, D., Jayaraj, G., Suryawanshi, H., Agarwala, P., Pore, S. K.</td>
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
      <td name="td1">Nicholson, B. L., Zaslaver, O., Mayberry, L. K., Browning, K. S.</td>
      <td name="td2">Tombusvirus Y-shaped translational enhancer forms a complex with eIF4F and can be functionally replaced by heterologous translational enhancers</td>
      <td name="td3">Journal of virology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/27281393/" target="_blank" style="color:#520049"><b>2016</b></a></td>
      <td name="td1">Nick, T. A., de Oliveira, T. E., Pilat, D. W., Spenkuch, F., Butt, H. J.</td>
      <td name="td2">Stability of a Split Streptomycin Binding Aptamer</td>
      <td name="td3">The journal of physical chemistry. B</td>
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
      <td name="td3">Nucleic acids research</td>
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
      <td name="td3">RNA</td>
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
      <td name="td1">Demolli, S., Geist, M. M., Weigand, J. E., Matschiavelli, N., Suess, B.</td>
      <td name="td2">Development of β -lactamase as a tool for monitoring conditional gene expression by a tetracycline-riboswitch in Methanosarcina acetivorans</td>
      <td name="td3">Archaea (Vancouver</td>
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
      <td name="td3">eLife</td>
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
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/10425680/" target="_blank" style="color:#520049"><b>1999</b></a></td>
      <td name="td1">Soukup, G. A., & Breaker, R. R.</td>
      <td name="td2">Design of allosteric hammerhead ribozymes activated by ligand-induced structure stabilization</td>
      <td name="td3">Structure </td>
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
      <td name="td3">Nucleic acids research</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/15826145/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Anderson, P. C., & Mecozzi, S.</td>
      <td name="td2">Unusually short RNA sequences: design of a 13-mer RNA that selectively binds and recognizes theophylline</td>
      <td name="td3">Journal of the American Chemical Society</td>
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
      <td name="td3">Chemistry & biology</td>
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
      <td name="td3">PLoS computational biology</td>
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
      <td name="td3">Plant & cell physiology</td>
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
      <td name="td3">Methods in enzymology</td>
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
      <td name="td3">ACS synthetic biology</td>
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
      <td name="td3">Chemistry & biology</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/9070426/" target="_blank" style="color:#520049"><b>1997</b></a></td>
      <td name="td1">Jiang, L., Suri, A. K., Fiala, R., & Patel, D. J.</td>
      <td name="td2">Accharide-RNA recognition in an aminoglycoside antibiotic-RNA aptamer complex. </td>
      <td name="td3">SChemistry & biology</td>
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
      <td name="td3">Nucleic acids research</td>
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
      <td name="td3">Journal of controlled release : official journal of the Controlled Release Society</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/32525981/" target="_blank" style="color:#520049"><b>2020</b></a></td>
      <td name="td1">Ptacek, J., Zhang, D., Qiu, L., Kruspe, S., Motlova, L., Kolenko, P., Novakova, Z.</td>
      <td name="td2">Structural basis of prostate-specific membrane antigen recognition by the A9g RNA aptamer</td>
      <td name="td3">Nucleic acids research</td>
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
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/8650546/" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Y Yang, M Kochoyan, P Burgstaller, E Westhof, M Famulok</td>
      <td name="td2">Structural basis of ligand discrimination by two related RNA aptamers resolved by NMR spectroscopy</td>
      <td name="td3">Science</td>
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
      <td name="td3">Acta crystallographica</td>
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
      <td name="td3">ACS chemical biology</td>
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
      <td name="td3">Acta crystallographica. Section F</td>
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
      <td name="td3">Structural mechanism of Staphylococcus aureus Hfq binding to an RNA A-tract. Nucleic acids research</td>
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
      <td name="td0"><a href="https://www.proquest.com/openview/6857e35043f04e11f53714d80cdc4dcf/1?pq-origsite=gscholar&cbl=18750&diss=y" target="_blank" style="color:#520049"><b>1996</b></a></td>
      <td name="td1">Stubenrauch, M. </td>
      <td name="td2">In vitro selection and characterization of tRNA-like substrates of E. coli glutaminyl-tRNA synthetase</td>
      <td name="td3">Doctoral thesis</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/30916478/" target="_blank" style="color:#520049"><b>2019</b></a></td>
      <td name="td1">Iida, M., Mashima, T., Yamaoki, Y., So, M., Nagata, T., & Katahira, M.</td>
      <td name="td2">The anti-prion RNA aptamer R12 disrupts the Alzheimer's disease-related complex between prion and amyloid β</td>
      <td name="td3">FEBS Journal</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22021209/" target="_blank" style="color:#520049"><b>2011</b></a></td>
      <td name="td1">Steber, M., Arora, A., Hofmann, J., Brutschy, B., & Suess, B.</td>
      <td name="td2">Mechanistic basis for RNA aptamer-based induction of TetR</td>
      <td name="td3">Chembiochem : a European journal of chemical biology</td>
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
      <td name="td3">Genes to Cells</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://onlinelibrary.wiley.com/doi/10.1046/j.1365-2443.2000.00331.x" target="_blank" style="color:#520049"><b>2000</b></a></td>
      <td name="td1">Yamamoto, R., Baba, T., & Kumar, P. K.</td>
      <td name="td2">Molecular beacon aptamer fluoresces in the presence of Tat protein of HIV-1</td>
      <td name="td3">Genes to cells</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/16027048/" target="_blank" style="color:#520049"><b>2005</b></a></td>
      <td name="td1">Tombelli, S., Minunni, M., Luzi, E., & Mascini, M.</td>
      <td name="td2">Aptamer-based biosensors for the detection of HIV-1 Tat protein</td>
      <td name="td3">Bioelectrochemistry (Amsterdam</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/22975093/" target="_blank" style="color:#520049"><b>2013</b></a></td>
      <td name="td1">Rahim Ruslinda, A., Tanabe, K., Ibori, S., Wang, X., & Kawarada, H.</td>
      <td name="td2">Effects of diamond-FET-based RNA aptamer sensing for detection of real sample of HIV-1 Tat protein</td>
      <td name="td3">Biosensors & bioelectronics</td>
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
      <td name="td3">Acta crystallographica. Section F</td>
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
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12637683/" target="_blank" style="color:#520049"><b>2003</b></a></td>
      <td name="td1">Cassiday, L. A., & Maher, L. J., 3rd.</td>
      <td name="td2">Yeast genetic selections to optimize RNA decoys for transcription factor NF-kappa B</td>
      <td name="td3">Proceedings of the National Academy of Sciences of the United States of America</td>
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
      <td name="td3">RNA (New York</td>
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
      <td name="td3">Molecular therapy : the journal of the American Society of Gene Therapy</td>
    </tr>
            
     <tr>
      <td name="td0"><a href="https://pubmed.ncbi.nlm.nih.gov/12214238/" target="_blank" style="color:#520049"><b>2002</b></a></td>
      <td name="td1">Rusconi, C. P., Scardino, E., Layzer, J., Pitoc, G. A., Ortel, T. L., Monroe, D., & Sullenger, B. A.</td>
      <td name="td2">RNA aptamers as reversible antagonists of coagulation factor IXa</td>
      <td name="td3">Nature</td>
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
</html><br>
        