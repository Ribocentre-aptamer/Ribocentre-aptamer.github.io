#!/usr/bin/env python3
"""round_gc_content.py

对 JSON 文件中的所有 "GC Content" 字段进行四舍五入保留两位小数。

用法：
    python round_gc_content.py <input_json> [output_json]
如果未提供 output_json，将直接覆盖 input_json。
"""
import json
import sys
from pathlib import Path
from typing import Any, Dict, List


def round_value(value: Any, digits: int = 2):
    """尝试将 value 转换为 float 并四舍五入到指定小数位。转换失败则原样返回。"""
    try:
        return round(float(value), digits)
    except Exception:
        return value


def traverse_and_round(obj: Any):
    """递归遍历 obj，找到字典中的 "GC Content" 字段并处理。"""
    if isinstance(obj, dict):
        # 处理当前层级
        if "GC Content" in obj:
            obj["GC Content"] = round_value(obj["GC Content"])
        # 继续向下遍历
        for key, val in obj.items():
            traverse_and_round(val)
    elif isinstance(obj, list):
        for item in obj:
            traverse_and_round(item)


def main():
    if len(sys.argv) < 2:
        print("用法: python round_gc_content.py <input_json> [output_json]")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2]) if len(sys.argv) > 2 else input_path

    if not input_path.is_file():
        print(f"错误: 未找到文件 {input_path}")
        sys.exit(1)

    # 读取 JSON
    with input_path.open("r", encoding="utf-8") as f:
        data = json.load(f)

    # 处理
    traverse_and_round(data)

    # 写回 JSON（缩进 2，更易读）
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"已完成。结果文件: {output_path}")


if __name__ == "__main__":
    main() 