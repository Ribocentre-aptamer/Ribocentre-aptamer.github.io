# PubMed API文献信息补充工具

这个工具用于自动从PubMed数据库获取文献信息，补充JSON文件中缺失的publication字段。

## 功能特点

- 🚀 自动从PubMed API获取文献信息
- 📝 提取标题、作者、期刊、发表年份等关键信息
- 🔄 支持批量处理大量PMID
- 💾 中间保存功能，防止数据丢失
- 🛡️ 完善的错误处理和日志记录
- ⏱️ 自动速率限制，遵守API使用规范

## 安装依赖

```bash
pip install -r requirements.txt
```

## 使用方法

### 1. 测试单个PMID

首先建议测试几个PMID，确认脚本工作正常：

```bash
python test_pubmed_api.py
```

### 2. 批量更新JSON文件

编辑 `pubmed_api_updater.py` 中的配置：

```python
def main():
    # 配置参数
    input_file = "apidata/combineRef_updated.json"  # 输入文件路径
    output_file = "apidata/combineRef_updated.json"  # 输出文件路径
    email = "your_email@example.com"  # 替换为你的真实邮箱
```

然后运行：

```bash
python pubmed_api_updater.py
```

## 脚本说明

### pubmed_api_updater.py

主要功能脚本，包含：

- `PubMedUpdater` 类：核心功能类
- `fetch_publication_info()` 方法：获取单个PMID的文献信息
- `update_json_file()` 方法：批量更新JSON文件

### test_pubmed_api.py

测试脚本，用于验证API功能是否正常。

## 处理流程

1. **读取JSON文件**：加载包含PMID的JSON数据
2. **识别缺失条目**：找到`publication`字段为`null`的条目
3. **API调用**：使用PubMed Entrez API获取文献信息
4. **信息提取**：从XML响应中提取以下字段：
   - pmid：PubMed ID
   - year：发表年份
   - authors：作者列表
   - title：文章标题
   - journal：期刊名称
5. **数据更新**：将获取的信息更新到JSON结构中
6. **保存结果**：将更新后的数据保存到输出文件

## API使用规范

- 使用NCBI Entrez E-utilities API
- 遵守每秒最多3个请求的速率限制
- 建议提供有效的邮箱地址
- 自动重试机制处理网络错误

## 输出格式

更新后的publication字段格式：

```json
{
  "pmid": "16513347",
  "publication": {
    "pmid": "16513347",
    "year": "2006",
    "authors": "Smith, J. D., Johnson, A. B., Brown, C.",
    "title": "A novel approach to RNA aptamer selection",
    "journal": "Nature"
  },
  "posts": [...]
}
```

## 注意事项

1. **邮箱配置**：请在脚本中设置你的真实邮箱地址
2. **速率限制**：脚本会自动控制请求频率，请勿修改速率限制设置
3. **中间保存**：每处理50个条目会自动保存，避免长时间运行时数据丢失
4. **错误处理**：如果某个PMID无法获取信息，会跳过并继续处理其他条目
5. **网络环境**：确保网络连接稳定，可以访问PubMed API

## 常见问题

### Q: 某些PMID无法获取信息怎么办？
A: 可能原因包括：
- PMID不存在或已被撤回
- 网络连接问题
- API临时不可用
脚本会自动跳过这些条目并记录日志。

### Q: 处理时间很长怎么办？
A: 由于API速率限制，处理大量数据需要时间。脚本有中间保存功能，可以安全中断和恢复。

### Q: 如何验证更新结果？
A: 检查输出文件中原本为`null`的`publication`字段是否已被正确填充。

## 技术支持

如果遇到问题，请检查：
1. 网络连接是否正常
2. 依赖包是否正确安装
3. 文件路径是否正确
4. 邮箱地址是否已配置 