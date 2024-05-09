---
layout: post
title:  "Cell-SELEX"
date:   2024-05-08 00:00:00
author: Bo Fu
permalink: /docs/Cell-SELEX/
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
  .header_boxx4 {
    display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: left;
      background-color: #ffffff;
      text-decoration: none;
      border-radius: 1px;
      width:230px;
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


<p class="header_boxx4" id="Structure">Detailed Information</p>
<p class="blowheader_box">Introduction</p>
<font>Cell-SELEX evolved from the SELEX technique. The need to develop ligands capable of targeting cell surface molecules or whole cells for various biomedical applications, including diagnostics and therapeutics, led to the development of Cell-SELEX.<br>
The key character of Cell-SELEX is the use of living cells as targets for the selection of aptamers, enabling the identification of ligands that specifically bind to cell surface molecules or receptors. In a work published in 2006, Dihua Shangguan of Weihong Tan's team used the differences in surface molecular characteristics of different types of cells to screen aptamers that specifically recognize leukemia cells in the absence of cell surface information.<br>
Initial studies demonstrated the feasibility of using Cell-SELEX for selecting aptamers against a variety of cell surface molecules and receptors. One of the primary challenges in developing Cell-SELEX was adapting the SELEX process to target cell surface molecules or whole cells while maintaining the efficiency and specificity of the selection process. Another difficulty was optimizing the selection conditions to ensure the enrichment of aptamers that specifically recognize the target cells while minimizing non-specific interactions.<br> 
The development of Cell-SELEX was marked by the pioneering work of researchers who sought to adapt the SELEX process to target living cells. Cell-SELEX has had a significant impact on various fields including molecular biology, biotechnology, and medicine.  It has enabled the discovery of aptamers capable of specifically targeting cell surface molecules or receptors for applications such as targeted drug delivery, cancer therapy, and cell imaging.  Cell-SELEX offers advantages over traditional antibody-based approaches, including ease of synthesis, modification, and scalability, making it a valuable tool for developing novel therapeutics and diagnostics.
</font>
<br>

<p class="blowheader_box">Process</p>             
<font >Cell-SELEX retains the iterative process of SELEX, involving selection, partitioning, amplification, and enrichment of nucleic acid sequences. Cell-SELEX involves the incubation of a nucleic acid library with live target cells under physiological conditions. After incubation, unbound sequences are removed, and bound sequences are eluted and amplified. The amplified pool is then subjected to subsequent rounds of selection to enrich for aptamers with high affinity and specificity for the target cells.</font>
<img src="/images/SELEX/Cell-SELEX.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;">   
</div>
<br>


