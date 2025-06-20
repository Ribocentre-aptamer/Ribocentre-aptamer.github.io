#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PubMed API测试脚本
用于测试单个PMID的文献信息获取
"""

import json
from pubmed_api_updater import PubMedUpdater

def test_single_pmid(pmid: str):
    """测试单个PMID的信息获取"""
    print(f"正在测试PMID: {pmid}")
    
    # 创建更新器
    updater = PubMedUpdater(email="test@example.com")
    
    # 获取文献信息
    pub_info = updater.fetch_publication_info(pmid)
    
    if pub_info:
        print("✅ 成功获取文献信息:")
        print(json.dumps(pub_info, ensure_ascii=False, indent=2))
    else:
        print("❌ 无法获取文献信息")

if __name__ == "__main__":
    # 测试一些PMID
    test_pmids = [
        "16513347",  # 来自你的JSON文件
        "27566147",  # 来自你的JSON文件（已有信息的）
        "19246008"   # 来自你的JSON文件
    ]
    
    for pmid in test_pmids:
        test_single_pmid(pmid)
        print("-" * 50) 