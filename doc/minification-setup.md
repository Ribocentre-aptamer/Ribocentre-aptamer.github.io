# Ribocentre Aptamer 网站压缩系统

## 概述

本项目采用了现代的前端构建系统，使用 **Terser** 压缩 JavaScript 文件，**cssnano** 压缩 CSS 文件，**jekyll-compress-html** 压缩 HTML 文件。这套系统完全支持 ES2020+ 语法，包括可选链操作符（`?.`）、空值合并操作符（`??`）等现代 JavaScript 特性。

## 架构说明

### 文件结构
```
├── package.json                 # Node.js 依赖管理
├── Makefile                     # 构建命令快捷方式
├── scripts/                     # 构建脚本
│   ├── minify-js.js            # JavaScript 压缩
│   ├── minify-css.js           # CSS 压缩
│   └── test-minification.js    # 压缩测试
├── js/                         # 源 JavaScript 文件
│   └── dist/                   # 压缩后的 JS 文件（自动生成）
├── css/                        # 源 CSS 文件
│   └── dist/                   # 压缩后的 CSS 文件（自动生成）
└── _plugins/                   # Jekyll 插件
    └── asset_minifier.rb       # 资源路径管理
```

### 工作流程

1. **开发模式**：使用原始文件，无压缩
2. **生产模式**：自动使用压缩后的文件
3. **构建过程**：
   - 使用 Terser 压缩 JS 文件到 `js/dist/`
   - 使用 cssnano 压缩 CSS 文件到 `css/dist/`
   - Jekyll 插件自动切换文件路径
   - jekyll-compress-html 压缩最终 HTML

## 安装依赖

### 系统要求
- Node.js 16+ 
- Ruby 2.7+
- Jekyll 3.6+

### 安装命令
```bash
# 方式一：使用 Makefile（推荐）
make install

# 方式二：手动安装
npm install
bundle install
```

## 使用方法

### 开发环境

```bash
# 启动开发服务器（无压缩，快速重载）
make serve
# 或
npm run serve

# 启动带文件监听的开发服务器
make dev
# 或  
npm run dev
```

### 生产构建

```bash
# 完整生产构建（推荐）
make build
# 或
npm run build:prod

# 仅压缩 JS 文件
make build-js
# 或
npm run minify:js

# 仅压缩 CSS 文件
make build-css  
# 或
npm run minify:css
```

### 测试压缩效果

```bash
# 测试压缩配置是否正常
make test
# 或
npm run test:minify
```

## 配置说明

### JavaScript 压缩配置

文件：`scripts/minify-js.js`

```javascript
terserOptions: {
  ecma: 2020,              // 支持 ES2020 语法
  compress: {
    drop_console: false,   // 保留 console.log（便于调试）
    drop_debugger: true,   // 移除 debugger
    unsafe_arrows: true,   // 优化箭头函数
    // ... 更多优化选项
  }
}
```

### CSS 压缩配置

文件：`scripts/minify-css.js`

```javascript
cssnanoOptions: {
  preset: ['default', {
    discardComments: { removeAll: true },
    reduceIdents: false,     // 保持类名不变
    normalizeUrl: false,     // 保持 URL 不变
    // ... 更多配置
  }]
}
```

### HTML 压缩配置

文件：`_config.yml`

```yaml
compress_html:
  clippings: all
  comments: all
  endings: all
  ignore:
    envs: [development]     # 开发环境不压缩
```

## 模板中使用压缩文件

### Jekyll 模板语法

```liquid
<!-- JavaScript 文件 -->
<script src="{{ 'js/homepage-main.js' | minified_js }}"></script>

<!-- CSS 文件 -->
<link rel="stylesheet" href="{{ 'css/main.css' | minified_css }}">
```

### 自动切换逻辑

- **开发环境**：返回原始文件路径
- **生产环境**：返回压缩文件路径（如果存在）
- **回退机制**：如果压缩文件不存在，自动使用原始文件

## 性能优化效果

### 典型压缩比例

- **JavaScript**：40-70% 体积减少
- **CSS**：20-50% 体积减少  
- **HTML**：10-30% 体积减少

### 支持的现代语法

✅ **完全支持**：
- ES6+ async/await
- 可选链操作符 (`?.`)
- 空值合并操作符 (`??`)
- 箭头函数
- 模板字符串
- 解构赋值
- 类和继承

## 常见问题

### Q: 为什么不使用 jekyll-minifier？
A: jekyll-minifier 内部使用 Uglifier，不支持 ES2020+ 语法，会在可选链操作符处报错。我们的方案使用 Terser，完全支持现代 JavaScript。

### Q: 开发时需要手动运行压缩吗？
A: 不需要。开发环境直接使用原始文件，只有生产构建时才压缩。

### Q: 如何调试压缩后的代码？
A: 
1. 开发环境使用原始文件，便于调试
2. 压缩配置保留了 `console.log`
3. 可以临时关闭压缩来调试生产问题

### Q: 如何排除某些文件不被压缩？
A: 在 `scripts/minify-js.js` 或 `scripts/minify-css.js` 的 `excludePatterns` 中添加文件模式。

## 故障排除

### 构建失败

```bash
# 1. 检查系统要求
make check

# 2. 清理缓存重新构建
make clean
make install
make build

# 3. 测试压缩功能
make test
```

### 文件未被压缩

1. 检查文件是否在排除列表中
2. 确认文件路径正确
3. 查看构建日志是否有错误

### 语法错误

如果遇到 JavaScript 语法错误：
1. 检查是否使用了过新的语法特性
2. 运行测试验证压缩配置
3. 临时排除问题文件

## 部署说明

### GitHub Pages

如果使用 GitHub Pages，需要配置 GitHub Actions：

```yaml
# .github/workflows/jekyll.yml
- name: Install Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '18'

- name: Install dependencies
  run: npm install

- name: Build assets
  run: npm run minify:js && npm run minify:css

- name: Build Jekyll
  run: JEKYLL_ENV=production bundle exec jekyll build
```

### 自托管部署

```bash
# 生产构建
make deploy

# 部署 _site 目录内容到服务器
rsync -av _site/ user@server:/path/to/website/
```

## 维护指南

### 添加新的 JS 文件

1. 将文件放在 `js/` 目录下
2. 确保语法兼容 ES2020
3. 运行 `make build-js` 测试压缩
4. 在模板中使用 `| minified_js` 过滤器

### 添加新的 CSS 文件

1. 将文件放在 `css/` 目录下  
2. 运行 `make build-css` 测试压缩
3. 在模板中使用 `| minified_css` 过滤器

### 更新压缩配置

1. 修改 `scripts/minify-js.js` 或 `scripts/minify-css.js`
2. 运行 `make test` 验证配置
3. 重新构建并测试网站功能

---

## 技术支持

如有问题，请检查：
1. [Terser 文档](https://terser.org/)
2. [cssnano 文档](https://cssnano.co/)
3. [Jekyll Compress HTML](https://github.com/penibelst/jekyll-compress-html)

本文档最后更新：2024年 