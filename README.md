# Ribocentre-Aptamer 适配体数据库

> 专业的RNA适配体数据库和管理系统

## 🌐 在线访问
- **项目主页**: https://aptamer.ribocentre.org/
- **GitHub仓库**: https://github.com/Ribocentre-aptamer/Ribocentre-aptamer.github.io

## 📋 项目概述

Ribocentre-Aptamer 是一个综合性的RNA适配体数据库，提供：
- **180个适配体**的详细信息（53个有3D结构 + 127个无3D结构）
- **统一的数据管理系统**
- **强大的搜索功能**
- **可视化展示工具**
- **完整的维护工具链**

## 🚀 快速开始

### 维护人员
```bash
# 查看系统状态
python scripts/manage_aptamers.py stats

# 添加新适配体
python scripts/manage_aptamers.py add-3d "适配体名称" "链接" "分类"

# 验证数据
python scripts/manage_aptamers.py validate
```

### 开发者
```bash
# 安装依赖
bundle install
npm install

# 本地运行
bundle exec jekyll serve
```

## 📁 项目结构

```
├── 📄 PROJECT_DOCUMENTATION.md    # 📖 项目完整文档
├── 📁 doc/                        # 📚 技术文档目录
│   ├── 📄 README.md               # 📋 文档导航
│   └── 📄 *.txt                   # 📝 所有技术文档（避免Jekyll渲染）
├── 📁 scripts/                    # 🔧 管理脚本目录
│   ├── 📄 README.md               # 📋 脚本使用指南
│   ├── 🐍 manage_aptamers.py      # 🎯 统一适配体管理
│   └── 🔧 其他工具脚本...         # ⚡ 各种处理工具
├── 📁 apidata/                    # 💾 数据文件
├── 📁 _posts/                     # 📖 适配体详情页面
└── 📁 其他Jekyll文件...           # 🌐 网站结构
```

## 📖 文档系统

### 📚 统一文档入口
- **[📄 项目完整文档](PROJECT_DOCUMENTATION.md)** - 包含所有重要信息的综合文档

### 📁 分类文档
- **[🔧 技术文档目录](doc/README.md)** - 所有技术文档和开发指南  
- **[⚡ 脚本使用指南](scripts/README.md)** - 完整的脚本工具说明

### 🔍 文档特色
- ✅ **避免Jekyll渲染冲突** - 技术文档使用.txt格式
- ✅ **完整保留内容** - 所有原始信息都已整理保存
- ✅ **便于搜索维护** - 统一的README格式便于查找
- ✅ **分类清晰** - 按功能和用途详细分类

## 🛠️ 核心功能

### 🎯 统一数据管理
- 支持有3D和无3D结构两种适配体类型
- 15个分类系统自动管理
- 命令行工具简化操作
- 自动数据验证和备份

### 🔍 强大搜索系统
- 模块化搜索架构
- 多种搜索方式（基础、高级、主页）
- 实时搜索建议
- 关键词高亮

### 📊 数据可视化
- 交互式数据表格
- 分子结构3D展示
- 统计图表展示
- 响应式设计

### ⚡ 性能优化
- 资源压缩和缓存
- 模块化加载
- 移动端优化

## 📈 系统架构

### 🏗️ 技术栈
- **前端**: Jekyll + SCSS + JavaScript (ES6+)
- **可视化**: D3.js + Plotly.js + Molstar
- **数据**: JSON + 静态文件
- **部署**: GitHub Pages

### 🔄 数据流程
```
原始数据 → Python脚本处理 → JSON数据文件 → JavaScript渲染 → 用户界面
```

### 🔧 管理工具链
- **数据管理**: 统一的Python脚本
- **质量控制**: 自动验证和测试
- **性能优化**: 资源压缩工具
- **文档系统**: 完整的使用指南

## 📊 数据统计

- **适配体总数**: 180个
  - 有3D结构: 53个（8个分类）
  - 无3D结构: 127个（7个分类）
- **技术文档**: 30+个专业文档
- **管理脚本**: 22个工具脚本
- **代码文件**: 1000+个文件

## 🎯 重构成果

### ✨ 维护效率提升
- **操作时间**: 30分钟 → 30秒
- **出错概率**: 高风险 → 几乎为零
- **学习门槛**: 需要前端知识 → 零门槛
- **系统统一**: 两套独立系统 → 统一架构

### 🔧 工具现代化
- **手动修改HTML/CSS** → **一条命令操作**
- **硬编码位置映射** → **自动分类配色**
- **无数据验证** → **自动验证脚本**
- **分离的维护流程** → **统一的管理工具**

## 🐳 Docker部署

### 构建镜像
```bash
docker build -t ribocentre-aptamer .
```

### 本地运行
```bash
docker run -p 4000:4000 -v $(pwd):/app ribocentre-aptamer
```

### 生产环境部署
```bash
docker run -d -p 4000:4000 -e JEKYLL_ENV=production ribocentre-aptamer
```

## 🤝 贡献指南

### 维护工作流程
1. 查看 `PROJECT_DOCUMENTATION.md` 了解系统
2. 使用 `scripts/` 目录下的工具进行操作
3. 参考 `doc/` 目录下的技术文档
4. 运行验证命令确保数据完整性

### 开发指南
1. 阅读相关技术文档
2. 遵循现有的代码规范
3. 提交前运行测试和验证
4. 更新相关文档

## 📞 技术支持

### 🔍 快速查找
```bash
# 搜索维护相关文档
grep -r "管理" doc/

# 查找脚本使用方法
grep -r "使用方法" scripts/

# 搜索特定功能实现
grep -r "搜索功能" doc/
```


