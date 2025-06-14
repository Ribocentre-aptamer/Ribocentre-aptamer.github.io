---
title: "Ribocentre Aptamer - Publications"
layout: gridlay
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /publications/
---
<html lang="en">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
<title>Ribocentre-aptamer publications</title>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
<style>
:root{
  --primary-color:#520049;
}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.7;color:#333;font-size:16px;letter-spacing:.3px;}
.table-style{width:100%;margin:20px 0;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 4px rgba(0,0,0,0.1);}
.table-style th{background:var(--primary-color);color:#fff;padding:12px;text-align:left;}
.table-style td{padding:12px;border-bottom:1px solid #e8e8e8;}
.table-style tbody tr:nth-child(even){background:rgba(245,245,245,0.5);}
.table-style tbody tr:hover{background:rgba(82,0,73,0.05);}
.data-table-section a{color:#4A90E2;text-decoration:none;}
.data-table-section a:hover{text-decoration:underline;}
#searchBox{padding:10px;font-size:16px;border:2px solid #ccc;border-radius:4px;width:300px;}
#searchBox:focus{outline:none;border-color:#efefef;}
</style>
</head>
<body>
<h1 class="post-title">Publications</h1>
<p>This page lists the reviews and articles about RNA aptamers.</p>
<div class="form-container" style="margin-bottom:15px;">
  <input type="text" id="searchBox" placeholder="Search...">
  <button id="exportBtn" class="button" style="margin-left:10px;">Export Selected</button>
</div>
<section class="data-table-section">
  <table id="pubTable" class="table-style display" style="width:100%">
    <thead>
      <tr>
        <th>Select</th>
        <th>Year</th>
        <th>Author</th>
        <th>Title</th>
        <th>Journal</th>
        <th>Aptamer</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</section>
<script>
let table;
let tableData=[];
function buildRows(data){
  return data.map(d=>{
    const aptLinks=d.posts.map(p=>`<a href="${p.post_link}" target="_blank">${p.post_title}</a>`).join('<br>');
    return [
      '<input type="checkbox" class="row-select">',
      `<a href="https://pubmed.ncbi.nlm.nih.gov/${d.pmid}/" target="_blank">${d.publication.year}</a>`,
      d.publication.authors,
      d.publication.title,
      d.publication.journal,
      aptLinks
    ];
  });
}
function loadData(){
  fetch('{{ site.baseurl }}/apidata/combineRef.json')
    .then(r=>r.json())
    .then(json=>{
      tableData=json;
      const rows=buildRows(json);
      table=$('#pubTable').DataTable({
        data:rows,
        columns:[
          {title:'Select',orderable:false},
          {title:'Year'},
          {title:'Author'},
          {title:'Title'},
          {title:'Journal'},
          {title:'Aptamer'}
        ],
        responsive:true,
        pageLength:25,
        dom:'Bfrtip',
        buttons:['copy','csv','excel','pdf','print']
      });
      $('#searchBox').on('input',function(){table.search(this.value).draw();});
    });
}
function exportSelected(){
  const selected=[];
  table.rows().every(function(){
    const node=this.node();
    if($(node).find('input.row-select').prop('checked')){
      selected.push(this.data());
    }
  });
  const rows=selected.length?selected:table.rows().data().toArray();
  const headers=['Year','Author','Title','Journal','Aptamer'];
  const csv=[headers.join(',')];
  rows.forEach(r=>{
    csv.push([r[1].replace(/<[^>]+>/g,''),r[2],`"${r[3].replace(/"/g,'""')}"`,r[4],r[5].replace(/<[^>]+>/g,'; ')].join(','));
  });
  const csvContent='data:text/csv;charset=utf-8,'+csv.join('\n');
  const link=document.createElement('a');
  link.setAttribute('href',encodeURI(csvContent));
  link.setAttribute('download','publications.csv');
  document.body.appendChild(link);link.click();document.body.removeChild(link);
}
$(document).ready(function(){loadData();$('#exportBtn').on('click',exportSelected);});
</script>
</body>
</html>
