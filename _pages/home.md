---
title: "Ribocentre-aptamer - Home"
layout: homelay
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /
---
<html lang="zh-cn">
<head>
<meta charset="utf-8"> 

<style>
  button, input, optgroup, select, textarea {
    color: #ffffff;
    font: inherit;
    font-weight: bold;
    margin: 0;
}
.header_box1 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 5px;
      width:295px;
	    height:50px;
  }
  .header_box2 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 5px;
      width:100px;
	    height:50px;
  }
  .header_box3 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #000000;
      text-decoration: none;
      border: 1px solid #ffffff;
      border-radius: 5px;
      width:200px;
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
      width:290px;
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
      width:90px;
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
      width:200px;
	    height:50px;
      border-width: 1px 1px 2px 1px;
      border-style: solid solid solid solid;
      border-color:#ffffff #ffffff #ccc #ffffff;
  }
  .box_style{
    background: #ffffff;
  }
  .wrapper {
    display: block;
    position: relative;
    width: 100%; /*大边框的大小*/
    margin: 0;
    padding: 0;
    text-align: left;
    word-wrap: break-word;
    }
  .sectiontitle {
    display: block;
    max-width: 100%;
    margin: 0 auto ;
    text-align: left;
    background :#fff;
    }
  body {
    padding-top: 0px;
  }
  .well {
    max-width: 70%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  .smallwell {
    max-width: 100%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  table:not(.table-bordered)>thead>tr>th,table:not(.table-bordered)>tbody>tr>th,table:not(.table-bordered)>tfoot>tr>th,table:not(.table-bordered)>thead>tr>td,table:not(.table-bordered)>tbody>tr>td,table:not(.table-bordered)>tfoot>tr>td,.table:not(.table-bordered)>thead>tr>th,.table:not(.table-bordered)>tbody>tr>th,.table:not(.table-bordered)>tfoot>tr>th,.table:not(.table-bordered)>thead>tr>td,.table:not(.table-bordered)>tbody>tr>td,.table:not(.table-bordered)>tfoot>tr>td {
    border-color: transparent;
    border: 1px solid #fff 
}
  .left-aligned {
  text-align: left;
}
   img{
    margin: 0 0 0 0; 
    border-radius: 0%; }
    

    /* 弹窗样式 */
      .click-here {
      cursor: pointer;
      font-weight: bold;
      color: #520049; /* Add the green color */
    }
        .popup {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            padding: 10px;
            background-color: #f0f0f0;
            border: 2px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            z-index: 9999;
        }
        .popup-image {
      display: inline;
      width: 40px; /* Adjust the size as needed */
      margin-right: 10px;
    }
        /* 关闭按钮样式 */
        .close-btn {
            display: block;
            margin-top: 10px;
            text-align: center;
            cursor: pointer;
        }
        .popup-title {
      font-size: 24px;
      
    }
        /* 弹窗样式 */
     /*一闪一闪*/
    .updating-text {
      animation: updateText 2s infinite;
      font-weight:bold;
      color:#520049
    }
    @keyframes updateText {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
    }
    /*一闪一闪*/
</style>
</head>
<body>
  <!-- 弹窗内容开始 -->
    <!--div class="popup" id="myPopup">
        <div class="popup-title">
      <img class="popup-image" src="/images/light.svg" alt="Image"> 
      Need helps
    </div>
        <a href="https://riboswitch.ribocentre.org/helps/" class="hidden-link" id="link1" target="_blank"></a>
      How to use the database, <span onclick="openLink('link1')" class="click-here">click here</span><br>
      <a href="https://docs.google.com/spreadsheets/d/1QWMju5Y1uzZ9tL10eDpD7j4IMYvkP9VWAkgVgvU8HqY/edit#gid=0" class="hidden-link" id="link2" target="_blank"></a>
      How to provide feedback, <span onclick="openLink('link2')" class="click-here">click here</span>
        <button class="close-btn" onclick="closePopup()">Close pop-up window</button>
    </div-->

  <!-- 弹窗内容结束 -->
 
<div class="wrapper box_style" ><!-- 整个边框 -->
<br>
  <div class="well" style="border: 1px solid #ffffff; background-color: #fff;"> <!--改了大边框的颜色为白色,原来是灰色#efefef-->
    <section class="sectiontitle"> 
    <h2 class="post-title" itemprop="name headline"><strong>Welcome to Ribocentre-aptamer</strong></h2>
    <div>
    <div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators"> 
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
         <li data-target="#carousel" data-slide-to="4"></li>
         <li data-target="#carousel" data-slide-to="5"></li>
    </ol>
    <!-- Items -->
    <div class="carousel-inner" markdown="0">
         <div class="item active">
            <img src="/images/home_page/home_page1.svg" alt="Slide 1" style=" width:700px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item ">
            <img src="/images/home_page/home_page2.svg" alt="Slide 1" style=" width:700px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home_page3.svg" alt="Slide 2" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <!--div class="item">
            <img src="/images/home_page/home_page_picture4.svg" alt="Slide 3" style="width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home_page_picture5.svg" alt="Slide 4" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home_page_picture6.svg" alt="Slide 4" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div-->
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br>
<strong style="color:#520049;font-weight: bold">Ribocentre-aptamer</strong>  is a publicly accessible aptamer dataset and searchable database containing comprehensive information on all APtamers. RNA aptamers are oligonucleotides with high binding affinity and specificity to target molecules, which are expected to become a new generation of therapeutic molecules and targeted delivery materials.
<br><br>

<strong style="color:#0874c4;font-weight: bold">Ribocentre</strong>  is designed to contain comprehensive information of all natural ribozymes. Ribozymes are good systems for understanding the ‘sequence - structure - function’ relationship of RNA molecules, since ribozymes are found in the genomes of species from all kingdoms of life and play a role in important reactions such as peptide-bond formation, RNA splicing, transfer RNA biosynthesis, and viral replication. This is therefore an excellent time to summarise these properties, and our new web-based database will make this generally accessible<a href="https://www.ribocentre.org/" target="_blank" style="color:#0874c4" > (Accessing the Ribocentre)</a>.
<br><br>
<strong style="color:#005826;font-weight: bold">Riboswitch</strong>  is a regulatory segment of a messenger RNA molecule that binds a small molecule, resulting in a change in production of the proteins encoded by the mRNA. Thus, an mRNA that contains a riboswitch is directly involved in regulating its own activity, in response to the concentrations of its effector molecule. The discovery that modern organisms use RNA to bind small molecules, and discriminate against closely related analogs, expanded the known natural capabilities of RNA beyond its ability to code for proteins, catalyze reactions, or to bind other RNA or protein macromolecules.<a href="https://riboswitch.ribocentre.org/" target="_blank" style="color:#005826" > (Accessing the Riboswitch)</a>
</div>
<br>
        


<!--div class="sectiontitle" style="border: 1px solid #C9C9C9; background-color: #fff;">
<p class="header_box" >Search by sequence<span class="updating-text"> (Continuously updated)</span></p>
<html>
  <head>
    <title>Sequence search</title>
  </head>
  <body>
    <rnacentral-sequence-search
            databases='["ribocentre"]'
            examples='[
              {"description": "c-di-GMP-II-GAG riboswitch", "urs": "", "sequence": "CUGCACGCGGGAGGCUGUGAUCCGCCGGACGUACCGACUGCGGCCACCGCAGUCCGGCGGGGAGCCACUGGUGAGACCGGCCCCCGAAG"},
              {"description": "TPP riboswitch (THI element)", "urs": "", "sequence": "GTGTCCACTCACGGGTGCGCTTCATTAAGCGCTGAGAATAAACCGTTTGAACCTGATCCGGGTTATGCCGGCGATAGGAAGAGAATTATGCATAATG"}
            ]'
            rfam="true"
    />
  <script type="text/javascript" src="https://www.ribocentre.org/js/RNAcentral-sequence-search.js"></script></body>
</html>
</div>
<br>
<br-->

<!--div class="sectiontitle" style="border: 2px solid #C9C9C9; background-color: #fff; border-radius:9px;" >
<p class="header_boxx1" style="color:#444444">Search by aptamers' name</p>
<div class="left-aligned" style="width: 82%;">
<script async src="https://cse.google.com/cse.js?cx=83f482a688df849e9"></script>
<div class="gcse-search" ></div>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Example: 
    <a href="http://localhost:4000/docs/ATP-RNA-aptamer" target="_blank" style="color:#520049">ATP aptamer</a> &nbsp;&nbsp;
   <br>
    &nbsp;&nbsp;&nbsp;&nbsp;Quick links:&nbsp;
    <a href="http://localhost:4000/riboswitches/" style="color:#520049">RNA-Aptamers</a>&nbsp;&nbsp;
    <a href="http://localhost:4000/sequences/" style="color:#520049">Sequences</a>&nbsp;&nbsp;
    <a href="http://localhost:4000/helps/" style="color:#520049">Teams</a>&nbsp;&nbsp;
</p>
</div>
</div>
<br>
<br-->

<div class="sectiontitle" style="border: 2px solid #ffffff; background-color: #fff; border-radius:9px;">
<p class="header_boxx2" style="color:#444444">Cite us</p>
<div class="left-aligned" style="width: 82%;">
Zhichao Miao, Lin Huang <br>
<strong style="color:#520049;font-weight: bold">Ribocentre-aptamer: a database of aptamers.</strong><br>
<a href="https://pubmed.ncbi.nlm.nih.gov/37855663/" target="_blank" style="color:#520049" >Article link</a>
</div>
</div>
<br>


<div class="sectiontitle" style="border: 2px solid #ffffff; background-color: #fff; border-radius:9px;">
<p class="header_boxx3" style="color:#444444">Related database</p>
<div class="left-aligned" style="width: 82%;">
<a href="https://www.ribocentre.org/" target="_blank"><img src="/images/Ribo_centre_logo.jpg" alt="drawing" style="width:150px;margin:0 auto;"></a>
<a href="https://riboswitch.ribocentre.org/" target="_blank"><img src="/images/Riboswitch_logo_new.png" alt="drawing" style="width:105px;margin:0 auto;"></a>
</div>
</div>
<br>


<script>
        // 打开弹窗
        function openPopup() {
            var popup = document.getElementById('myPopup');
            popup.style.display = 'block';
        }

        // 关闭弹窗
        function closePopup() {
            var popup = document.getElementById('myPopup');
            popup.style.display = 'none';
        }

        // 页面加载完成后自动打开弹窗
        window.onload = function() {
            openPopup();
        };
        function openLink(linkId) {
        // 根据 linkId 参数获取链接元素
        const linkElement = document.getElementById(linkId);
        // 点击链接
        linkElement.click();
    }

   
    </script>
<br>














  
 






