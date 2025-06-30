# Ribocentre-Aptamer Database

> Professional RNA Aptamer Database and Management System

## 🌐 Online Access
- **Project Homepage**: https://aptamer.ribocentre.org/
- **GitHub Repository**: https://github.com/Ribocentre-aptamer/Ribocentre-aptamer.github.io

## 📋 Project Overview

Ribocentre-Aptamer is a comprehensive RNA aptamer database that provides:
- **Detailed information for 180 aptamers** (53 with 3D structures + 127 without 3D structures)
- **Unified data management system**
- **Powerful search functionality**
- **Visualization tools**
- **Complete maintenance toolkit**

## 🚀 Quick Start

### For Maintainers
```bash
# Check system status
python scripts/manage_aptamers.py stats

# Add new aptamer
python scripts/manage_aptamers.py add-3d "Aptamer Name" "Link" "Category"

# Validate data
python scripts/manage_aptamers.py validate
```

### For Developers
```bash
# Install dependencies
bundle install
npm install

# Run locally
bundle exec jekyll serve
```

## 📁 Project Structure

```
├── 📄 PROJECT_DOCUMENTATION.md    # 📖 Complete project documentation
├── 📁 doc/                        # 📚 Technical documentation directory
│   ├── 📄 README.md               # 📋 Documentation navigation
│   └── 📄 *.txt                   # 📝 All technical docs (avoid Jekyll rendering)
├── 📁 scripts/                    # 🔧 Management scripts directory
│   ├── 📄 README.md               # 📋 Script usage guide
│   ├── 🐍 manage_aptamers.py      # 🎯 Unified aptamer management
│   └── 🔧 Other utility scripts...# ⚡ Various processing tools
├── 📁 apidata/                    # 💾 Data files
├── 📁 _posts/                     # 📖 Aptamer detail pages
└── 📁 Other Jekyll files...       # 🌐 Website structure
```

## 📖 Documentation System

### 📚 Unified Documentation Entry
- **[📄 Complete Project Documentation](PROJECT_DOCUMENTATION.md)** - Comprehensive document with all important information

### 📁 Categorized Documentation
- **[🔧 Technical Documentation Directory](doc/README.md)** - All technical docs and development guides  
- **[⚡ Script Usage Guide](scripts/README.md)** - Complete script tool documentation

### 🔍 Documentation Features
- ✅ **Avoid Jekyll rendering conflicts** - Technical docs use .txt format
- ✅ **Complete content preservation** - All original information organized and preserved
- ✅ **Easy search and maintenance** - Unified README format for easy navigation
- ✅ **Clear categorization** - Detailed classification by function and purpose

## 🛠️ Core Features

### 🎯 Unified Data Management
- Support for both 3D and non-3D structure aptamer types
- Automatic management of 15 classification systems
- Command-line tools for simplified operations
- Automatic data validation and backup

### 🔍 Powerful Search System
- Modular search architecture
- Multiple search modes (basic, advanced, homepage)
- Real-time search suggestions
- Keyword highlighting

### 📊 Data Visualization
- Interactive data tables
- 3D molecular structure display
- Statistical chart visualization
- Responsive design

### ⚡ Performance Optimization
- Resource compression and caching
- Modular loading
- Mobile optimization

## 📈 System Architecture

### 🏗️ Technology Stack
- **Frontend**: Jekyll + SCSS + JavaScript (ES6+)
- **Visualization**: D3.js + Plotly.js + Molstar
- **Data**: JSON + Static files
- **Deployment**: GitHub Pages

### 🔄 Data Flow
```
Raw Data → Python Script Processing → JSON Data Files → JavaScript Rendering → User Interface
```

### 🔧 Management Toolkit
- **Data Management**: Unified Python scripts
- **Quality Control**: Automatic validation and testing
- **Performance Optimization**: Resource compression tools
- **Documentation System**: Complete usage guides

## 📊 Data Statistics

- **Total Aptamers**: 180
  - With 3D structures: 53 (8 categories)
  - Without 3D structures: 127 (7 categories)
- **Technical Documents**: 30+ professional documents
- **Management Scripts**: 22 utility scripts
- **Code Files**: 1000+ files

## 🎯 Refactoring Achievements

### ✨ Maintenance Efficiency Improvements
- **Operation Time**: 30 minutes → 30 seconds
- **Error Probability**: High risk → Nearly zero
- **Learning Curve**: Frontend knowledge required → Zero barrier
- **System Unity**: Two independent systems → Unified architecture

### 🔧 Tool Modernization
- **Manual HTML/CSS editing** → **Single command operation**
- **Hard-coded position mapping** → **Automatic classification coloring**
- **No data validation** → **Automatic validation scripts**
- **Separate maintenance processes** → **Unified management tools**

## 🐳 Docker Deployment

### Build Image
```bash
docker build -t ribocentre-aptamer .
```

### Local Run
```bash
docker run -p 4000:4000 -v $(pwd):/app ribocentre-aptamer
```

### Production Deployment
```bash
docker run -d -p 4000:4000 -e JEKYLL_ENV=production ribocentre-aptamer
```

## 🤝 Contributing Guide

### Maintenance Workflow
1. Review `PROJECT_DOCUMENTATION.md` to understand the system
2. Use tools in the `scripts/` directory for operations
3. Refer to technical documentation in the `doc/` directory
4. Run validation commands to ensure data integrity

### Development Guide
1. Read relevant technical documentation
2. Follow existing code standards
3. Run tests and validation before submitting
4. Update relevant documentation

## 📞 Technical Support

### 🔍 Quick Search
```bash
# Search maintenance-related documentation
grep -r "manage" doc/

# Find script usage methods
grep -r "usage" scripts/

# Search specific feature implementations
grep -r "search" doc/
```

### 📧 Contact Information
- Check project Wiki
- Create GitHub Issues
- Contact maintenance team

---

> 🎉 **New documentation system organization complete!**
> 
> All technical documentation and script instructions have been reorganized to avoid Jekyll rendering interference and facilitate maintenance and search.
> 
> Please check `PROJECT_DOCUMENTATION.md` for complete information.

*Last Updated: December 2024*

