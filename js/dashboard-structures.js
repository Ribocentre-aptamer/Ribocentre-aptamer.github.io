(function () {
    if (typeof DataModule === 'undefined') {
        console.error('DataModule not found');
        return;
    }

    const origLoad = DataModule.loadData;
    DataModule.loadData = async function () {
        try {
            const dataPath = window.DASHBOARD_CONFIG?.dataPath || './apidata/structures_merged.json';
            const resp = await fetch(dataPath);
            if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
            const data = await resp.json();

            data.forEach(d => {
                d.category = d['Phase Determination'] || 'NA';
                d.structure = d['Structure Determination'] || 'NA';
            });

            originalData = data;
            filteredData = [...data];

            this.updateStatistics();
            ChartModule.createAllCharts();
            UIModule.updateDataSummary();
            FilterModule.updateFilterTags();
            TableModule.updateDataTable();
        } catch (e) {
            console.error('Failed to load structure data:', e);
            this.showLoadingError(e.message);
        }
    };

    if (typeof TableModule !== 'undefined') {
        TableModule.updateDataTable = function () {
            const tbody = document.getElementById('tableBody');
            const info = document.getElementById('tableInfo');
            if (!tbody || !info) return;

            info.textContent = `Showing ${filteredData.length} records (out of ${originalData.length} total)`;
            tbody.innerHTML = '';

            const addTooltip = (cell, html) => {
                if (!html) return;
                cell.style.cursor = 'pointer';
                cell.addEventListener('mouseenter', e => showAmirTooltip(html, e.clientX, e.clientY));
                cell.addEventListener('mousemove', e => showAmirTooltip(html, e.clientX, e.clientY));
                cell.addEventListener('mouseleave', hideAmirTooltip);
            };

            filteredData.forEach((item, idx) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${idx + 1}</td>
                    <td>${item['Name'] || ''}</td>
                    <td>${item['Ligand'] || ''}</td>
                    <td>${item['Structure Determination'] || ''}</td>
                    <td>${item['NDB'] || ''}</td>
                    <td>${item['Phase Determination'] || ''}</td>
                    <td>${item['Resolution(Å)'] || ''}</td>
                    <td>${item['Year'] || ''}</td>
                `;
                tbody.appendChild(row);
            });
        };
    }

    if (typeof ChartModule !== 'undefined') {
        ChartModule.createAllCharts = function () {
            this.createStructureChart();
            this.createPhaseChart();
        };

        ChartModule.createStructureChart = function () {
            const counts = {};
            filteredData.forEach(d => {
                const key = d['Structure Determination'] || 'NA';
                counts[key] = (counts[key] || 0) + 1;
            });
            const labels = Object.keys(counts);
            const values = labels.map(k => counts[k]);
            const trace = { x: labels, y: values, type: 'bar', marker: { color: '#4A90E2' } };
            Plotly.newPlot('yearChart', [trace], Object.assign({}, chartLayoutBase, {margin:{t:40}}), chartConfig);
        };

        ChartModule.createPhaseChart = function () {
            const counts = {};
            filteredData.forEach(d => {
                const key = d['Phase Determination'] || 'NA';
                counts[key] = (counts[key] || 0) + 1;
            });
            const labels = Object.keys(counts);
            const values = labels.map(k => counts[k]);
            const trace = { labels: labels, values: values, type: 'pie', hole: 0.4 };
            Plotly.newPlot('ligandChart', [trace], Object.assign({}, chartLayoutBase, {margin:{t:40}}), chartConfig);
        };
    }
})();
