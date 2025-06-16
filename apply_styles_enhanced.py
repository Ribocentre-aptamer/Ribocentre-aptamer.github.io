import os
import re
import glob

# 源文件路径
source_file = "_posts/Theophylline-aptamer_back1.md"

# 提取样式部分
def extract_styles(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取<style>标签内容
    style_pattern = re.compile(r'<style>(.*?)</style>', re.DOTALL)
    style_match = style_pattern.search(content)
    
    if style_match:
        return style_match.group(0)
    return None

# 提取JavaScript部分
def extract_scripts(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取<script>标签内容
    script_pattern = re.compile(r'<script>(.*?)</script>', re.DOTALL)
    script_match = script_pattern.search(content)
    
    if script_match:
        return script_match.group(0)
    return None

# 从文件中提取h2标题
def extract_headings(content):
    # 从Markdown文件中提取h2标题
    headings = []
    
    # 查找Markdown格式的h2标题 (## 标题)
    md_headings = re.findall(r'##\s+(.*?)(?:\n|$)', content)
    headings.extend(md_headings)
    
    # 查找HTML格式的h2标题 (<h2>标题</h2>)
    html_headings = re.findall(r'<h2[^>]*>(.*?)</h2>', content)
    headings.extend(html_headings)
    
    # 如果没找到标题，使用默认标题列表
    if not headings:
        headings = ["Timeline", "Description", "SELEX", "Structure", "Ligand information", "References"]
    
    return headings

# 生成侧边导航栏HTML
def generate_sidebar_nav(headings):
    nav_html = '<!-- 侧边导航 -->\n<div class="side-nav" id="sideNav">\n  <ul>\n'
    
    for heading in headings:
        heading_id = heading.lower().replace(' ', '-')
        nav_html += f'    <li class="side-nav-item"><a href="#{heading_id}">{heading}</a></li>\n'
    
    nav_html += '  </ul>\n</div>\n\n'
    return nav_html

# 应用样式到目标文件
def apply_styles_to_file(target_file, styles, scripts):
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取标题以生成导航栏
    headings = extract_headings(content)
    sidebar_nav = generate_sidebar_nav(headings)
    
    # 检查文件是否已经有样式
    has_style = '<style>' in content
    has_script = '<script>' in content
    has_html = '<html>' in content
    
    # 如果已有样式，替换它
    if has_style:
        content = re.sub(r'<style>.*?</style>', styles, content, flags=re.DOTALL)
    else:
        # 在front matter后添加样式
        front_matter_end = content.find('---', 3) + 3
        content = content[:front_matter_end] + '\n<html>\n<head>\n' + styles + '\n</head>\n<body>\n' + content[front_matter_end:]
    
    # 如果已有脚本，替换它
    if has_script:
        content = re.sub(r'<script>.*?</script>', scripts, content, flags=re.DOTALL)
    else:
        # 在文件末尾添加脚本
        content = content + '\n' + scripts
    
    # 如果已有侧边栏导航，替换它
    if '<div class="side-nav"' in content:
        content = re.sub(r'<div class="side-nav".*?</div>\s*\n', sidebar_nav, content, flags=re.DOTALL)
    
    # 如果没有HTML结构，添加它（但保留现有内容）
    if not has_html:
        front_matter_end = content.find('---', 3) + 3
        content_after_front_matter = content[front_matter_end:]
        
        # 添加HTML结构但保留原始内容
        new_content = content[:front_matter_end] + '\n<html>\n<head>\n' + styles + '\n</head>\n<body>\n'
        
        # 添加导航和进度条
        new_content += '<!-- 阅读进度条 -->\n<div class="progress-container">\n  <div class="progress-bar" id="progressBar"></div>\n</div>\n\n'
        new_content += '<!-- 导航球 -->\n<div class="nav-ball" id="navBall">\n  <div class="nav-ball-icon">\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n</div>\n\n'
        new_content += '<!-- 遮罩层 -->\n<div class="overlay" id="overlay"></div>\n\n'
        new_content += sidebar_nav
        
        # 将现有内容包装在content-section中
        content_sections = []
        
        # 尝试匹配Markdown格式的标题
        md_sections = re.split(r'##\s+(.*?)(?:\n|$)', content_after_front_matter)
        
        if len(md_sections) > 1:
            # 有Markdown标题，将每个标题部分包装在content-section中
            for i in range(1, len(md_sections), 2):
                title = md_sections[i]
                section_content = md_sections[i+1] if i+1 < len(md_sections) else ''
                
                # 构建带有样式的h2标题
                header = f'<div class="content-section">\n  <h2 class="section-title" id="{title.lower().replace(" ", "-")}">{title}</h2>\n{section_content}\n</div>\n'
                content_sections.append(header)
            
            new_content += ''.join(content_sections)
        else:
            # 尝试匹配HTML格式的标题
            html_sections = re.split(r'<h2[^>]*>(.*?)</h2>', content_after_front_matter)
            
            if len(html_sections) > 1:
                # 有HTML标题，将每个标题部分包装在content-section中
                new_content_sections = []
                for i in range(1, len(html_sections), 2):
                    title = html_sections[i]
                    section_content = html_sections[i+1] if i+1 < len(html_sections) else ''
                    
                    # 构建带有样式的h2标题
                    header = f'<div class="content-section">\n  <h2 class="section-title" id="{title.lower().replace(" ", "-")}">{title}</h2>\n{section_content}\n</div>\n'
                    new_content_sections.append(header)
                
                new_content += ''.join(new_content_sections)
            else:
                # 没有标题，将整个内容包装在content-section中
                new_content += f'<div class="content-section">\n{content_after_front_matter}\n</div>\n'
        
        new_content += scripts + '\n</body>\n</html>'
        content = new_content
    
    # 应用常见的类替换
    # 将普通h2替换为带样式的h2
    content = re.sub(r'<h2>(.*?)</h2>', r'<h2 class="section-title" id="\1">\1</h2>', content)
    
    # 将h3替换为带样式的h3
    content = re.sub(r'<h3>(.*?)</h3>', r'<h3 class="subsection-title">\1</h3>', content)
    
    # 将blockquote替换为带样式的blockquote
    content = re.sub(r'<blockquote>(.*?)</blockquote>', r'<blockquote class="info-box">\1</blockquote>', content, flags=re.DOTALL)
    
    # 将表替换为带样式的表
    content = re.sub(r'<table>', r'<table class="table">', content)
    
    # 将特定的div添加blowheader_box类
    content = re.sub(r'<div>\s*<h3>(.*?)</h3>', r'<div class="blowheader_box">\1', content)
    
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"已更新: {target_file}")

# 主函数
def main():
    # 提取样式和脚本
    styles = extract_styles(source_file)
    scripts = extract_scripts(source_file)
    
    if not styles:
        print("无法从源文件提取样式！")
        return
    
    # 获取所有Markdown文件
    md_files = glob.glob("_posts/*.md")
    
    # 排除源文件
    if source_file in md_files:
        md_files.remove(source_file)
    
    # 应用样式到所有文件
    for file in md_files:
        apply_styles_to_file(file, styles, scripts)
        print(f"已处理: {file}")
    
    print(f"总共处理了 {len(md_files)} 个文件")

if __name__ == "__main__":
    main() 