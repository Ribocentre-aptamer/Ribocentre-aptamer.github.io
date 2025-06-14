---
title: "Ribocentre Aptamer - Structures"
layout: riboaptamer
excerpt: "Ribocentre-aptamer: A aptamer database"
sitemap: True
permalink: /structures/
---

<link rel="stylesheet" href="/css/dashboard.css">
<script>
  window.DASHBOARD_CONFIG = {
    baseurl: '{{ site.baseurl }}',
    dataPath: '{{ site.baseurl }}/apidata/structures_merged.json'
  };
</script>

<div class="amir-container">
    <div class="chart-container">
        <div class="chart-wrapper">
            <div class="chart-header">
                <h4 class="chart-title">Structure determination methods</h4>
                <div class="chart-controls">
                    <span class="chart-info">Click on bars for filtering</span>
                </div>
            </div>
            <div class="chart-content">
                <div id="yearChart" class="amir-chart"></div>
            </div>
        </div>
        <div class="chart-wrapper">
            <div class="chart-header">
                <h4 class="chart-title">Phase determination strategies</h4>
                <div class="chart-controls">
                    <span class="chart-info">Click on pie sectors for filtering</span>
                </div>
            </div>
            <div class="chart-content">
                <div id="ligandChart" class="amir-chart"></div>
            </div>
        </div>
    </div>

    <section class="filter-controls">
        <div class="filter-header">
            <h4 class="filter-title">Data Filtering</h4>
            <div class="filter-actions">
                <button class="filter-btn reset-btn" id="resetAllFilters">Reset All</button>
                <button class="filter-btn export-btn" id="exportData">Export Data</button>
            </div>
        </div>
        <div class="filter-tags" id="filterTags"></div>
    </section>

    <section class="data-table-section">
        <div class="chart-header">
            <h4 class="chart-title">Structure Data</h4>
            <div class="chart-controls">
                <span class="chart-info" id="tableInfo">Showing all records</span>
            </div>
        </div>
        <div class="table-container">
            <div class="table-responsive">
                <table id="dataTable" class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Ligand</th>
                            <th>Structure determination</th>
                            <th>NDB</th>
                            <th>Phase determination</th>
                            <th>Resolution (Å)</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody"></tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="data-summary">
        <div class="summary-cards">
            <div class="summary-card">
                <span class="summary-label">Currently Showing</span>
                <span class="summary-count" id="currentCount">0</span>
                <span class="summary-unit">records</span>
            </div>
            <div class="summary-card">
                <span class="summary-label">Filter Ratio</span>
                <span class="summary-percentage" id="filterPercentage">0%</span>
                <span class="summary-unit">visible</span>
            </div>
        </div>
    </section>
</div>

<div class="amir-tooltip" id="amirTooltip">
    <div class="tooltip-content"></div>
    <div class="tooltip-arrow"></div>
</div>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="{{ site.baseurl }}/js/dashboard-config.js"></script>
<script src="{{ site.baseurl }}/js/dashboard-main.js"></script>
<script src="{{ site.baseurl }}/js/dashboard-structures.js"></script>
