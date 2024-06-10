---
layout: post
title:  "Conventional SELEX"
date:   2024-05-08 00:00:00
author: Bo Fu
categories: SELEX
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
<p><br /></p>


<p class="header_box">Introduction</p>
<p>SELEX originated from the pioneering work of Larry Gold and Jack Szostak in the early 1990s,which demonstrating the selection of RNA ligands against T4 DNA polymerase and ATP, respectively.</p>
<p>The development of SELEX was driven by the need for high-affinity ligands that could rival antibodies in specificity and affinity but with advantages such as lower immunogenicity, smaller size, and simpler chemical synthesis.</p>
<p>Initially, one of the major challenges was developing a robust and reliable method for selecting ligands with high specificity and affinity from large pools of random sequences. Another difficulty was the optimization of selection conditions to ensure efficient enrichment of target-binding ligands while minimizing non-specific interactions.</p>
<p>Over the years, SELEX has been continually refined and adapted, leading to numerous advancements such as the development of modified SELEX techniques (e.g., Cell-SELEX for selecting ligands against whole cells) and the integration of high-throughput sequencing for rapid analysis of selected pools.</p>
<br>
<br>


<p class="header_box">Process</p>      
<font >SELEX typically involves several key steps: (1) selection, where the nucleic acid pool is incubated with the target molecule, (2) partitioning, to separate bound sequences from unbound ones, (3) amplification, to increase the concentration of selected sequences, and (4) enrichment, where the amplified pool is subjected to subsequent rounds of selection to enrich for high-affinity binders.</font>
<img src="/images/SELEX/Conventional-SELEX.svg" alt="drawing" style="width:800px;display:block;margin:0 auto;border-radius:0;" class="img-responsive">
<div style="display: flex; justify-content: center;"></div>