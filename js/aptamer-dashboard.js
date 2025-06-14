function initAptamerDashboard(config){
  const {dataPath, prefix} = config;
  const state = {
    data: [],
    filtered: [],
    years: new Set(),
    categories: new Set()
  };

  const ids = {
    yearChart: `${prefix}-yearChart`,
    catChart: `${prefix}-categoryChart`,
    tableBody: `${prefix}-tableBody`,
    tableInfo: `${prefix}-tableInfo`,
    currentCount: `${prefix}-currentCount`,
    filterPercentage: `${prefix}-filterPercentage`,
    reset: `${prefix}-reset`,
    filterTags: `${prefix}-filterTags`
  };

  fetch(dataPath)
    .then(r => r.json())
    .then(data => {
      state.data = data.map(d => ({
        name: d.Named || d.name || '',
        ligand: d.Ligand || d.ligand || '',
        year: parseInt(d.Year || d.year),
        category: d.Category || d.category || ''
      }));
      state.filtered = state.data.slice();
      draw();
    });

  function draw(){
    updateYearChart();
    updateCategoryChart();
    updateTable();
  }

  function applyFilters(){
    state.filtered = state.data.filter(d => {
      const yok = state.years.size? state.years.has(d.year):true;
      const cok = state.categories.size? state.categories.has(d.category):true;
      return yok && cok;
    });
    updateYearChart();
    updateCategoryChart();
    updateTable();
  }

  function updateYearChart(){
    const counts = {};
    state.data.forEach(d=>{counts[d.year]=(counts[d.year]||0)+1});
    const years = Object.keys(counts).map(Number).sort((a,b)=>a-b);
    const visCounts = {};
    state.filtered.forEach(d=>{visCounts[d.year]=(visCounts[d.year]||0)+1});
    const trace = {
      x: years,
      y: years.map(y=>visCounts[y]||0),
      type:'bar',
      marker:{color: years.map(y=> state.years.has(y)? '#520049':'#aee1d6')}
    };
    Plotly.newPlot(ids.yearChart,[trace],{margin:{t:30}});
    document.getElementById(ids.yearChart).on('plotly_click', ev=>{
      const y = ev.points[0].x;
      if(state.years.has(y)) state.years.delete(y); else state.years.add(y);
      applyFilters();
    });
  }

  function updateCategoryChart(){
    const counts = {};
    state.data.forEach(d=>{counts[d.category]=(counts[d.category]||0)+1});
    const cats = Object.keys(counts);
    const visCounts={};
    state.filtered.forEach(d=>{visCounts[d.category]=(visCounts[d.category]||0)+1});
    const trace = {
      labels: cats,
      values: cats.map(c=>visCounts[c]||0),
      type:'pie',
      marker:{colors:['#F6D6AD','#B5C7ED','#F7B7A3','#E7B7E8','#B7E7E1']}
    };
    Plotly.newPlot(ids.catChart,[trace],{margin:{t:30}});
    document.getElementById(ids.catChart).on('plotly_click', ev=>{
      const c = ev.points[0].label;
      if(state.categories.has(c)) state.categories.delete(c); else state.categories.add(c);
      applyFilters();
    });
  }

  function updateTable(){
    const tb = document.getElementById(ids.tableBody);
    tb.innerHTML='';
    state.filtered.forEach((d,i)=>{
      const tr=document.createElement('tr');
      tr.innerHTML=`<td>${i+1}</td><td>${d.name}</td><td>${d.ligand}</td><td>${d.year}</td><td>${d.category}</td>`;
      tb.appendChild(tr);
    });
    document.getElementById(ids.tableInfo).textContent=`Showing ${state.filtered.length} records`;
    document.getElementById(ids.currentCount).textContent=state.filtered.length;
    const percent = state.data.length? (state.filtered.length/state.data.length*100).toFixed(1):'0';
    document.getElementById(ids.filterPercentage).textContent=percent+'%';
    updateTags();
  }

  function updateTags(){
    const tagBox=document.getElementById(ids.filterTags);
    tagBox.innerHTML='';
    state.years.forEach(y=>{
      const t=document.createElement('span');
      t.className='filter-tag';
      t.textContent='Year: '+y;
      t.onclick=()=>{state.years.delete(y);applyFilters();};
      tagBox.appendChild(t);
    });
    state.categories.forEach(c=>{
      const t=document.createElement('span');
      t.className='filter-tag';
      t.textContent='Category: '+c;
      t.onclick=()=>{state.categories.delete(c);applyFilters();};
      tagBox.appendChild(t);
    });
  }

  document.getElementById(ids.reset).addEventListener('click',()=>{
    state.years.clear();
    state.categories.clear();
    applyFilters();
  });
}
