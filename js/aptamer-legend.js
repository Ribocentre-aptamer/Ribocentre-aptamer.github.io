// Aptamer Legend JS - 自动渲染颜色图例并实现交互高亮
(function(){
  // 1. 加载palette_map
  let paletteMap = {};
  function fetchPaletteMap(cb) {
    fetch('/apidata/palette_map_20250806_231255.json')
      .then(res => res.json())
      .then(data => { paletteMap = data; if(cb) cb(); });
  }

  // 2. 渲染legend
  function renderLegend() {
    const legendContainer = document.getElementById('aptamerLegend');
    if (!legendContainer) return;
    legendContainer.innerHTML = '';
    Object.entries(paletteMap).forEach(([cat, color]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.setAttribute('data-category', cat);
      item.innerHTML = `<span class="legend-color" style="background:${color}"></span><span class="legend-label">${cat}</span>`;
      legendContainer.appendChild(item);
    });
    // 交互：hover legend高亮table
    legendContainer.querySelectorAll('.legend-item').forEach(item => {
      item.addEventListener('mouseenter', function() {
        const cat = this.getAttribute('data-category');
        document.querySelectorAll('[data-category]').forEach(cell => {
          if (cell.getAttribute('data-category') === cat) {
            cell.classList.add('highlighted');
          }
        });
      });
      item.addEventListener('mouseleave', function() {
        document.querySelectorAll('.highlighted').forEach(cell => {
          cell.classList.remove('highlighted');
        });
      });
    });
  }

  // 3. 全局初始化函数
  window.initAptamerLegend = function() {
    fetchPaletteMap(renderLegend);
  };
})();
