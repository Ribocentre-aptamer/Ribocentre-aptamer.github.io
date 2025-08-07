# 网站文件精简优化报告

## 总体分析

通过扫描整个项目，发现了以下可以优化的文件和目录：

## 1. 立即可删除的空文件 (节省空间: 几乎无)

```bash
# 空的CSS文件，可以直接删除
rm css/dist/advanced-search-overrides.css  # 0 bytes
rm css/dist/compact-search.css             # 0 bytes

# 对应的源文件也很小，如果确认不使用可以删除
rm css/advanced-search-overrides.css       # 1 byte
rm css/compact-search.css                  # 1 byte
```

## 2. 重复文件分析 (节省空间: ~15MB)

### dist目录说明
`css/dist/` 和 `js/dist/` 目录是构建脚本生成的压缩文件目录。如果您使用构建流程，这些是必要的。但如果直接引用源文件，可以删除整个dist目录：

```bash
# 如果不使用构建流程，可以删除整个dist目录
rm -rf css/dist/
rm -rf js/dist/
```

**注意**: 删除前请确认网站是引用源文件还是dist文件。

## 3. 大文件分析与优化建议

### 超大文件 (>1MB)
```
js/mol/pdbe-molstar-plugin.js              5.2MB (分子结构查看器)
js/dist/mol/pdbe-molstar-plugin.js         5.1MB (压缩版本)
js/mol/ro_pdbe-molstar-plugin-1.2.1.js     2.4MB (旧版本)
js/dist/mol/ro_pdbe-molstar-plugin-1.2.1.js 2.3MB (压缩版本)
```

**建议**: 
- 删除旧版本的molstar插件 (ro_pdbe-molstar-plugin-1.2.1.js)
- 只保留最新版本
- 考虑使用CDN版本

### 可能未使用的大文件
```
js/svg-pan-zoom.js                         607KB (未找到引用)
js/RNAcentral-sequence-search.js           775KB (未找到引用)
js/dataTables.uikit.js                     439KB (可能未使用)
```

## 4. Forna目录文件分析

`css/forna/` 和 `js/forna/` 目录包含RNA结构可视化工具：

```
css/forna/bootstrap.min.css                107KB
js/forna/d3.js                            318KB
js/forna/fornac.js                        大型可视化库
```

**建议**: 如果网站不使用RNA结构可视化功能，可以删除整个forna目录。

## 5. 重复的库文件

### D3.js重复
```
js/d3.js                                  318KB
js/forna/d3.js                           318KB
```

### jQuery重复
```
js/jquery.js                             94KB
js/forna/jquery.js                       94KB
```

**建议**: 统一使用一个版本，或者使用CDN。

## 6. 推荐的清理步骤

### 第一步：安全删除（立即执行）
```bash
# 删除空文件
rm css/dist/advanced-search-overrides.css
rm css/dist/compact-search.css
rm css/advanced-search-overrides.css
rm css/compact-search.css

# 删除旧版本molstar
rm js/mol/ro_pdbe-molstar-plugin-1.2.1.js
rm js/dist/mol/ro_pdbe-molstar-plugin-1.2.1.js
```

### 第二步：检查是否使用后删除
```bash
# 检查这些文件是否被引用，如果没有则删除
rm js/svg-pan-zoom.js                    # 607KB
rm js/RNAcentral-sequence-search.js      # 775KB
rm js/dataTables.uikit.js               # 439KB
```

### 第三步：条件性删除（需要确认功能需求）
```bash
# 如果不需要RNA结构可视化功能
rm -rf css/forna/
rm -rf js/forna/
rm css/fornac.css
rm js/fornac.js

# 如果不使用构建流程
rm -rf css/dist/
rm -rf js/dist/
```

## 7. CDN优化建议

考虑将以下库文件替换为CDN版本：
- jQuery (当前94KB本地文件)
- Bootstrap (当前67KB本地文件)
- D3.js (当前318KB本地文件)
- DataTables (当前439KB本地文件)

## 8. 预期收益

- **立即删除空文件**: ~几bytes
- **删除旧版molstar**: ~4.7MB
- **删除未使用大文件**: ~1.8MB
- **删除dist目录**: ~15MB
- **删除forna功能**: ~5MB+

**总计可节省**: 20-25MB+

## 9. 验证清理效果

清理后建议验证网站功能：

```bash
# 检查网站是否正常运行
bundle exec jekyll serve

# 检查浏览器控制台是否有404错误
# 测试所有主要功能页面
```

## 10. 持续优化建议

1. **建立构建流程**: 使用webpack或类似工具管理依赖
2. **启用Gzip压缩**: 在服务器层面压缩文件
3. **图片优化**: 压缩images目录下的图片文件
4. **代码分割**: 按页面需求加载JS/CSS文件
5. **缓存策略**: 设置适当的浏览器缓存头

---

**注意**: 在执行任何删除操作前，请先备份您的项目，并在测试环境中验证更改。 