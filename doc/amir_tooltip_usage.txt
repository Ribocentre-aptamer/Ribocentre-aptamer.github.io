# AMIR Tooltip 交互组件使用报告

> 更新时间：2025-06-19

## 设计目标

1. **固定位置展开**： 鼠标点击目标元素（如表格中的序列单元格）后，Tooltip 以"下拉框 / 弹窗"形式在元素上方（空间不足时在下方）固定显示，不再跟随鼠标移动。
2. **手动关闭**： 用户可通过以下方式关闭 Tooltip：
   - 点击 Tooltip 右上角的"×"关闭按钮；
   - 再次点击触发元素；
   - 点击页面其他任意位置。
3. **信息丰富**：
   - 显示序列长度（`Length: N nt`）
   - 彩色渲染完整序列，等宽字体便于查看比对
   - 底部文字 `Click tooltip to copy` 提示点击即可复制
4. **可交互**： Tooltip 本身启用 `pointer-events: auto`，允许用户在其中自由选择 / 复制文本，滚动长内容。
5. **长序列适配**： 设置 `max-height`＋`overflow-y: auto`，当序列过长时自动出现滚动条。
6. **主题一致**： 白色背景 + Morandi 主题点缀 (#520049)；与 aptamer 页面整体视觉风格统一。

## 组件结构

```html
<div class="amir-tooltip" id="amirTooltip">
  <div class="tooltip-content"><!-- 动态内容插入 --></div>
  <span class="tooltip-close">×</span>
  <div class="tooltip-arrow"></div>
</div>
```

CSS 关键点见 `_includes/custom_styles/aptamer_styles.html`：
- `.amir-tooltip`： 白底、阴影、圆角、最大尺寸、滚动
- `.sequence-display`： 等宽字体 + 灰底容器
- `.tooltip-close`： 右上角关闭按钮

## JS API

```js
showAmirTooltip(html, anchorEl)
```
- `html`     : Tooltip 内部的 HTML 字符串
- `anchorEl` : 触发元素（必传，必须是一个 DOM 元素）

```js
hideAmirTooltip()
```
- 主动关闭 Tooltip

> API 定义于 `_includes/custom_styles/aptamer_navigation.html`，页面加载时若全局尚未存在同名函数会自动注册。这样其它页面可零配置复用。

### 行为细节
1. 调用 `showAmirTooltip()` 时，如 Tooltip 已经锚定在同一元素，则执行切换隐藏（Toggle）。
2. Tooltip 计算 `anchorEl.getBoundingClientRect()`，在**上方**优先展示；若空间不足则移至下方。
3. 箭头方向随展示位置自动调整。
4. 页面加载后会自动给 **序列表格** "Sequence" 列绑定点击事件：生成彩色序列 + 长度信息的 Tooltip，点击 Tooltip 或再次点击单元格即可复制完整序列到剪贴板。

## 扩展与复用

1. **其它数据展示**： 只需构造 `html` 字符串并传入目标元素，即可快速在任何 UI 场景中复用该组件。
2. **主题定制**： 在 `aptamer_styles.html` 调整 `.amir-tooltip`、`.tooltip-arrow`、`.tooltip-close` 等变量即可快速替换配色与尺寸。
3. **行为定制**： 如需悬浮触发、自动消失等，可在页面脚本中重写或包装 `showAmirTooltip` 调用逻辑，而无需修改核心函数。

## 注意事项

- Tooltip 采用 **fixed 定位**，不会因页面滚动而偏离。
- 为避免页面中多个 Tooltip 冲突，组件内部维护 `currentAnchor` 单例，只允许存在一个可见实例。
- 若需要在同一页面多处同时显示不同 Tooltip，可复制 `amir-tooltip` 结构并改写函数命名。

---

© Ribocentre-Aptamer 项目 