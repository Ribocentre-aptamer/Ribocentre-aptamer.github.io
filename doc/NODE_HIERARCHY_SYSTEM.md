# 节点层级系统 - 完整逻辑文档

## 概述
本系统实现了一个复杂的多级数据筛选和可视化系统，支持用户通过交互式图表进行多层级数据筛选，同时严格禁止任何形式的数据下探（drill-down）行为。

## 核心设计原则

### 1. 严禁数据下探
- **图表必须始终显示完整的数据结构**
- **绝不能因为筛选而减少图表显示的数据维度**
- **只能通过颜色、高亮等视觉效果来表示筛选状态**

### 2. 节点层级关系
- **A节点**：第一个被交互的图表，使用原始数据进行可视化
- **B节点**：第二个被交互的图表，使用A节点的筛选结果进行可视化
- **C节点**：第三个被交互的图表，使用B节点的筛选结果进行可视化

### 3. 冻结状态管理
- 图表一旦被交互，立即进入"冻结"状态
- 冻结的图表保持其筛选条件和数据状态
- 用户可以在已冻结的图表上继续操作，更新筛选条件

## 系统架构

### 核心数据结构

```javascript
// 节点交互顺序跟踪
let nodeInteractionOrder = []; // ['yearChart', 'ligandChart', 'scatterChart']

// 每个节点的筛选后数据
let nodeFilteredData = {
    yearChart: [],     // A节点数据
    ligandChart: [],   // B节点数据  
    scatterChart: []   // C节点数据
};

// 节点冻结状态
let nodeFrozenState = {
    yearChart: false,    // A节点是否冻结
    ligandChart: false,  // B节点是否冻结
    scatterChart: false  // C节点是否冻结
};

// 活跃筛选条件
let activeFilters = {
    years: new Set(),           // 年份筛选
    gcBins: new Set(),         // GC区间筛选
    scatterSelection: null     // 散点图区域筛选
};
```

### 图表类型与对应筛选

| 图表ID | 图表类型 | 筛选类型 | 筛选条件存储 |
|--------|----------|----------|-------------|
| yearChart | 柱状图 | 年份多选 | activeFilters.years |
| ligandChart | 饼图 | GC区间多选 | activeFilters.gcBins |
| scatterChart | 散点图 | 区域选择 | activeFilters.scatterSelection |

## 交互流程

### 1. 节点注册流程
```
用户点击图表元素 → registerNodeInteraction(nodeId) → 更新交互顺序 → 设置冻结状态 → 计算节点数据 → 重新渲染所有图表
```

### 2. 数据流向

#### 初始状态（无交互）
```
所有图表 ← originalData (原始数据)
```

#### A节点交互后
```
A节点 ← originalData (高亮选中部分)
B节点 ← A节点筛选结果
C节点 ← A节点筛选结果
表格 ← A节点筛选结果
```

#### A→B节点交互后
```
A节点 ← originalData (高亮选中部分)
B节点 ← A节点筛选结果 (高亮选中部分)
C节点 ← B节点筛选结果
表格 ← A∩B筛选结果
```

#### A→B→C节点交互后
```
A节点 ← originalData (高亮选中部分)
B节点 ← A节点筛选结果 (高亮选中部分)  
C节点 ← B节点筛选结果 (高亮选中部分)
表格 ← A∩B∩C筛选结果
```

## 关键实现逻辑

### 1. 节点数据源确定

每个图表的数据源根据其在交互序列中的位置确定：

```javascript
// 确定数据源的核心逻辑
if (nodeInteractionOrder.length === 0) {
    // 无交互：使用原始数据
    dataForVisualization = [...originalData];
} else {
    const myIndex = nodeInteractionOrder.indexOf(chartId);
    
    if (myIndex === -1) {
        // 不在交互序列中：使用最后一个交互节点的数据
        const lastNodeId = nodeInteractionOrder[nodeInteractionOrder.length - 1];
        dataForVisualization = [...nodeFilteredData[lastNodeId]];
    } else if (myIndex === 0) {
        // A节点：必须使用原始数据，严禁下探
        dataForVisualization = [...originalData];
    } else {
        // B/C节点：使用上级节点的数据
        const parentNodeId = nodeInteractionOrder[myIndex - 1];
        dataForVisualization = [...nodeFilteredData[parentNodeId]];
    }
}
```

### 2. 筛选条件应用

```javascript
// 计算节点的筛选数据
calculateSpecificNodeData(nodeId) {
    if (nodeId === 'yearChart' && activeFilters.years.size > 0) {
        // 年份筛选：直接从原始数据筛选
        nodeFilteredData[nodeId] = originalData.filter(d => 
            activeFilters.years.has(d.year)
        );
    } else if (nodeId === 'ligandChart' && activeFilters.gcBins.size > 0) {
        // GC区间筛选：直接从原始数据筛选
        nodeFilteredData[nodeId] = originalData.filter(d => 
            activeFilters.gcBins.has(d.gc_bin)
        );
    } else if (nodeId === 'scatterChart' && activeFilters.scatterSelection) {
        // 散点图区域筛选：直接从原始数据筛选
        const sel = activeFilters.scatterSelection;
        nodeFilteredData[nodeId] = originalData.filter(d => 
            d.length >= sel.xrange[0] && d.length <= sel.xrange[1] &&
            d.gc_content >= sel.yrange[0] && d.gc_content <= sel.yrange[1]
        );
    }
}
```

### 3. 层级数据计算

```javascript
calculateNodeData() {
    // 如果交互序列中只有一个节点(A节点)
    if (nodeInteractionOrder.length === 1) {
        const firstNodeId = nodeInteractionOrder[0];
        const firstNodeData = nodeFilteredData[firstNodeId];
        
        // 非交互节点使用A节点的筛选结果
        for (const nodeId in nodeFilteredData) {
            if (nodeId !== firstNodeId && !nodeFrozenState[nodeId]) {
                nodeFilteredData[nodeId] = [...firstNodeData];
            }
        }
        return;
    }
    
    // 处理多节点交互情况
    nodeInteractionOrder.forEach((interactedNodeId, index) => {
        if (index === 0) return; // 跳过A节点
        
        // 根据层级关系决定使用哪个上级节点的数据
        const parentNodeId = nodeInteractionOrder[index - 1];
        const parentNodeData = nodeFilteredData[parentNodeId];
        
        // 基于上级节点数据应用当前节点的筛选条件
        // ... 筛选逻辑
    });
}
```

## 视觉反馈系统

### 1. 节点状态指示器
- **A节点**：显示蓝色"A节点"标签
- **B节点**：显示蓝色"B节点"标签  
- **C节点**：显示蓝色"C节点"标签

### 2. 图表颜色编码
- **选中状态**：使用高亮颜色 (`morandiHighlight`)
- **正常状态**：使用默认莫兰迪色系
- **暗淡状态**：使用半透明颜色 (`morandiDim`)

### 3. 筛选标签系统
- 动态显示当前活跃的筛选条件
- 支持单独移除特定筛选条件
- 提供"重置全部"功能

## 用户体验流程

### 典型使用场景
1. **用户点击年份1993**
   - 年份图表成为A节点，显示完整年份分布，高亮1993
   - 其他图表显示1993年的数据分布
   - 数据表格显示1993年的所有记录

2. **用户继续点击GC区间"40-50%"**
   - GC图表成为B节点，基于1993年数据显示GC分布，高亮40-50%
   - 散点图显示1993年且GC含量40-50%的数据点
   - 数据表格显示符合两个条件的记录

3. **用户在散点图中框选区域**
   - 散点图成为C节点，显示选中区域的数据点
   - 数据表格显示符合所有三个条件的最终记录

## 重要注意事项

### 1. 数据完整性保证
- **图表始终显示完整的数据结构维度**
- **只有数据表格显示最终筛选结果**
- **图表通过视觉编码而非数据删减来反映筛选状态**

### 2. 交互一致性
- **每次图表交互都会触发所有图表的重新渲染**
- **保持交互顺序的稳定性和可预测性**
- **支持在已冻结节点上继续操作**

### 3. 性能考虑
- **避免不必要的数据复制**
- **优化图表重绘性能**
- **合理管理内存使用**

## 技术实现要点

### 1. 模块化设计
- **DataModule**: 数据加载和管理
- **ChartModule**: 图表渲染和更新
- **FilterModule**: 筛选逻辑和节点管理
- **UIModule**: 用户界面交互
- **TableModule**: 数据表格管理

### 2. 事件驱动架构
- 图表点击事件 → 筛选条件更新 → 节点注册 → 数据重计算 → 界面重绘

### 3. 状态管理
- 集中式状态管理，避免状态不一致
- 明确的状态转换流程
- 完整的状态重置机制

## 总结

本系统通过严格的节点层级管理和数据流控制，实现了复杂的多维度数据筛选功能，同时保持了良好的用户体验和数据完整性。核心设计理念是"筛选显示，而非筛选隐藏"，确保用户始终能够看到完整的数据全貌。 