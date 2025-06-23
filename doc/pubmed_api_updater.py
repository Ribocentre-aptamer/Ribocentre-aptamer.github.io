#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PubMed API更新器
用于补充JSON文件中缺失的文献信息
"""

import json
import requests
import time
import xml.etree.ElementTree as ET
from typing import Dict, List, Optional
import logging

# 设置日志
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class PubMedUpdater:
    def __init__(self, email: str = "3193843136@qq.com"):
        """
        初始化PubMed更新器
        
        Args:
            email: 你的邮箱地址（PubMed API建议提供）
        """
        self.email = email
        self.base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
        self.rate_limit = 0.34  # 每秒最多3个请求（保守估计）
        
    def fetch_publication_info(self, pmid: str) -> Optional[Dict]:
        """
        从PubMed获取单篇文献信息
        
        Args:
            pmid: PubMed ID
            
        Returns:
            包含文献信息的字典，如果获取失败返回None
        """
        try:
            # 第一步：使用esummary获取基本信息
            summary_url = f"{self.base_url}esummary.fcgi"
            summary_params = {
                "db": "pubmed",
                "id": pmid,
                "retmode": "xml",
                "email": self.email
            }
            
            response = requests.get(summary_url, params=summary_params, timeout=10)
            response.raise_for_status()
            
            # 解析XML
            root = ET.fromstring(response.content)
            
            # 查找DocSum元素
            docsum = root.find(".//DocSum")
            if docsum is None:
                logger.warning(f"未找到PMID {pmid}的文献信息")
                return None
            
            # 提取信息
            publication_info = {
                "pmid": pmid,
                "year": None,
                "authors": None,
                "title": None,
                "journal": None
            }
            
            # 提取各个字段
            for item in docsum.findall("Item"):
                name = item.get("Name")
                if name == "PubDate":
                    # 提取年份
                    pub_date = item.text
                    if pub_date:
                        # 尝试提取年份（通常是前4位数字）
                        year_match = pub_date[:4]
                        if year_match.isdigit():
                            publication_info["year"] = year_match
                            
                elif name == "AuthorList":
                    # 提取作者列表
                    authors = []
                    for author in item.findall("Item"):
                        if author.text:
                            authors.append(author.text)
                    if authors:
                        publication_info["authors"] = ", ".join(authors)
                        
                elif name == "Title":
                    # 提取标题
                    if item.text:
                        publication_info["title"] = item.text.strip()
                        
                elif name == "Source":
                    # 提取期刊名
                    if item.text:
                        publication_info["journal"] = item.text.strip()
            
            # 如果基本信息不完整，尝试使用efetch获取详细信息
            if not all([publication_info["title"], publication_info["authors"]]):
                publication_info = self._fetch_detailed_info(pmid, publication_info)
            
            logger.info(f"成功获取PMID {pmid}的文献信息")
            return publication_info
            
        except requests.exceptions.RequestException as e:
            logger.error(f"获取PMID {pmid}时发生网络错误: {e}")
            return None
        except ET.ParseError as e:
            logger.error(f"解析PMID {pmid}的XML时发生错误: {e}")
            return None
        except Exception as e:
            logger.error(f"获取PMID {pmid}时发生未知错误: {e}")
            return None
    
    def _fetch_detailed_info(self, pmid: str, existing_info: Dict) -> Dict:
        """
        使用efetch获取详细的文献信息
        
        Args:
            pmid: PubMed ID
            existing_info: 已有的文献信息
            
        Returns:
            更新后的文献信息
        """
        try:
            fetch_url = f"{self.base_url}efetch.fcgi"
            fetch_params = {
                "db": "pubmed",
                "id": pmid,
                "retmode": "xml",
                "email": self.email
            }
            
            response = requests.get(fetch_url, params=fetch_params, timeout=10)
            response.raise_for_status()
            
            root = ET.fromstring(response.content)
            
            # 查找文章信息
            article = root.find(".//Article")
            if article is None:
                return existing_info
            
            # 提取标题
            title_elem = article.find(".//ArticleTitle")
            if title_elem is not None and title_elem.text and not existing_info["title"]:
                existing_info["title"] = title_elem.text.strip()
            
            # 提取作者
            author_list = article.find(".//AuthorList")
            if author_list is not None and not existing_info["authors"]:
                authors = []
                for author in author_list.findall("Author"):
                    last_name = author.find("LastName")
                    fore_name = author.find("ForeName")
                    if last_name is not None and last_name.text:
                        name = last_name.text
                        if fore_name is not None and fore_name.text:
                            # 只取名字的首字母
                            initials = ". ".join([n[0] for n in fore_name.text.split() if n])
                            name = f"{name}, {initials}."
                        authors.append(name)
                
                if authors:
                    existing_info["authors"] = ", ".join(authors)
            
            # 提取期刊名
            journal_elem = article.find(".//Journal/Title")
            if journal_elem is not None and journal_elem.text and not existing_info["journal"]:
                existing_info["journal"] = journal_elem.text.strip()
            
            # 提取年份
            pub_date = article.find(".//PubDate/Year")
            if pub_date is not None and pub_date.text and not existing_info["year"]:
                existing_info["year"] = pub_date.text.strip()
            
            return existing_info
            
        except Exception as e:
            logger.warning(f"获取PMID {pmid}详细信息时出错: {e}")
            return existing_info
    
    def update_json_file(self, input_file: str, output_file: str = None) -> None:
        """
        更新JSON文件中的文献信息
        
        Args:
            input_file: 输入JSON文件路径
            output_file: 输出JSON文件路径（如果为None，则覆盖原文件）
        """
        if output_file is None:
            output_file = input_file
        
        logger.info(f"开始处理文件: {input_file}")
        
        # 读取JSON文件
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        updated_count = 0
        total_null_count = 0
        
        # 遍历所有条目
        for i, entry in enumerate(data):
            if entry.get("publication") is None and entry.get("pmid"):
                total_null_count += 1
                pmid = entry["pmid"]
                
                logger.info(f"正在处理第 {i+1}/{len(data)} 条记录，PMID: {pmid}")
                
                # 获取文献信息
                pub_info = self.fetch_publication_info(pmid)
                
                if pub_info:
                    entry["publication"] = pub_info
                    updated_count += 1
                    logger.info(f"✅ 成功更新PMID {pmid}")
                else:
                    logger.warning(f"❌ 无法获取PMID {pmid}的信息")
                
                # 速率限制
                time.sleep(self.rate_limit)
                
                # 每处理50个条目保存一次（防止数据丢失）
                if updated_count % 50 == 0:
                    logger.info(f"中间保存...已更新 {updated_count} 个条目")
                    with open(output_file, 'w', encoding='utf-8') as f:
                        json.dump(data, f, ensure_ascii=False, indent=2)
        
        # 最终保存
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        logger.info(f"处理完成！")
        logger.info(f"总计发现 {total_null_count} 个缺失的文献条目")
        logger.info(f"成功更新 {updated_count} 个条目")
        logger.info(f"输出文件: {output_file}")

def main():
    """主函数"""
    # 配置参数
    input_file = "apidata/combineRef_updated.json"  # 输入文件路径
    output_file = "apidata/combineRef_updated.json"  # 输出文件路径
    email = "your_email@example.com"  # 替换为你的邮箱
    
    # 创建更新器
    updater = PubMedUpdater(email=email)
    
    # 更新文件
    try:
        updater.update_json_file(input_file, output_file)
    except Exception as e:
        logger.error(f"程序执行出错: {e}")

if __name__ == "__main__":
    main() 