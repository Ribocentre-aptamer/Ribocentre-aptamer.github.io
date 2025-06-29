#!/usr/bin/env python3
"""
add_more_info_to_fluorescence_json.py
------------------------------------
功能：
1. 遍历 apidata/fluorescence_data.json（默认路径）的每一条记录。
2. 如果记录缺少 more_info 字段或该字段为空，自动根据 name 生成 slug，构造
   https://aptamer.ribocentre.org/_posts/{slug} 链接并写入 more_info。
3. 如果记录已有 more_info，默认只做合法性检测；可通过 --force 选项强制覆盖。
4. 检测规则：本地 _posts 目录下是否存在同名 .md 或 .html 文件。
5. 处理结束后输出统计信息，并在非 --dry-run 模式下覆盖保存 JSON 文件。
使用示例：
    python add_more_info_to_fluorescence_json.py                 # 基本运行
    python add_more_info_to_fluorescence_json.py -v              # 显示调试信息
    python add_more_info_to_fluorescence_json.py --dry-run       # 仅测试，不写文件
    python add_more_info_to_fluorescence_json.py --force -v      # 强制更新并显示调试信息
"""
import argparse
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import List, Tuple


@dataclass
class Stats:
    total: int = 0
    already_have: int = 0
    added: int = 0
    valid: int = 0
    invalid: int = 0


class MoreInfoProcessor:
    """处理 fluorescence_data.json 的类"""

    def __init__(self, json_path: str, posts_dir: str, verbose: bool = False):
        self.json_path = Path(json_path)
        self.posts_dir = Path(posts_dir)
        self.verbose = verbose
        self.stats = Stats()
        self.invalid_entries: List[Tuple[str, str, str]] = []  # (name, candidate_link, reason)

    # --------------------- 工具方法 ---------------------
    def log(self, msg: str):
        if self.verbose:
            print(f"[DEBUG] {msg}")

    _SEP_PATTERN = re.compile(r"[\s/·—–_]+")
    _INVALID_CHARS = re.compile(r"[^A-Za-z0-9\-()]+")

    @classmethod
    def slugify(cls, name: str) -> str:
        """将 aptamer 名称转换为 slug (类似 Jekyll 文件名)."""
        # 去掉结尾的 "aptamer"（忽略大小写，允许前后空格）
        name = re.sub(r"\s*aptamer\s*$", "", name, flags=re.IGNORECASE)
        name = name.strip()
        # 将空格、斜杠、破折号等替换为 -
        slug = cls._SEP_PATTERN.sub("-", name)
        # 移除非法字符
        slug = cls._INVALID_CHARS.sub("", slug)
        # 合并重复 - 并去头尾 -
        slug = re.sub(r"-{2,}", "-", slug).strip("-")
        return slug

    def _candidate_link(self, slug: str) -> str:
        return f"https://aptamer.ribocentre.org/_posts/{slug}"

    def _local_files_exist(self, slug: str) -> bool:
        """检查 _posts 下是否存在 slug.md 或 slug.html"""
        md_file = self.posts_dir / f"{slug}.md"
        html_file = self.posts_dir / f"{slug}.html"
        exists = md_file.exists() or html_file.exists()
        self.log(f"检测本地文件: {md_file} 或 {html_file} -> {'存在' if exists else '不存在'}")
        return exists

    # --------------------- 主处理流程 ---------------------
    def process(self, force_update: bool = False) -> bool:
        if not self.json_path.exists():
            raise FileNotFoundError(f"找不到 JSON 文件: {self.json_path}")
        if not self.posts_dir.exists():
            raise FileNotFoundError(f"找不到 _posts 目录: {self.posts_dir}")

        self.log("加载 JSON 数据 ...")
        with self.json_path.open("r", encoding="utf-8") as f:
            data: List[dict] = json.load(f)

        self.stats.total = len(data)
        updated = False

        for i, rec in enumerate(data, 1):
            name = rec.get("name", f"记录{i}")
            current_link: str = rec.get("more_info", "")

            self.log(f"\n处理 {i}/{self.stats.total}: {name}")

            if current_link and not force_update:
                self.stats.already_have += 1
                # 校验已存在链接
                slug = Path(current_link).name  # 获取文件名或 slug
                slug = slug.replace(".html", "")  # 去除扩展名
                if self._local_files_exist(slug):
                    self.stats.valid += 1
                else:
                    self.stats.invalid += 1
                    self.invalid_entries.append((name, current_link, "本地 _posts 中未找到对应文件"))
                continue

            # 生成新的 link
            slug = self.slugify(name)
            link = self._candidate_link(slug)
            self.log(f"生成链接: {link}")

            if self._local_files_exist(slug):
                rec["more_info"] = link
                self.stats.added += 1
                self.stats.valid += 1
                updated = True
                self.log("✅ 添加成功 (有效链接)")
            else:
                self.stats.invalid += 1
                self.invalid_entries.append((name, link, "本地 _posts 中未找到对应文件"))
                self.log("❌ 未找到对应 _posts 文件，跳过")

        return updated, data

    # --------------------- 输出 ---------------------
    def print_stats(self):
        print("\n" + "=" * 60)
        print("📊 处理统计信息")
        print("=" * 60)
        print(f"总记录数:              {self.stats.total}")
        print(f"已有有效 more_info:    {self.stats.already_have}")
        print(f"新添加的链接:          {self.stats.added}")
        print(f"有效链接数:            {self.stats.valid}")
        print(f"无效链接数:            {self.stats.invalid}")
        if self.stats.total:
            print(f"链接有效率:            {self.stats.valid / self.stats.total * 100:.1f}%")

        if self.invalid_entries:
            print("\n❌ 无效或缺失链接详情 (前 20 条):")
            print("-" * 80)
            for idx, (name, link, reason) in enumerate(self.invalid_entries[:20], 1):
                print(f"{idx:2d}. 名称: {name}")
                print(f"    链接: {link}")
                print(f"    原因: {reason}\n")
            if len(self.invalid_entries) > 20:
                print(f"... 以及 {len(self.invalid_entries) - 20} 条未显示")


# ------------------------- CLI -------------------------

def cli():
    parser = argparse.ArgumentParser(description="为 fluorescence_data.json 补充 more_info 字段并做有效性校验")
    parser.add_argument("--json-path", default="apidata/fluorescence_data.json", help="JSON 数据文件路径 (默认: apidata/fluorescence_data.json)")
    parser.add_argument("--posts-dir", default="_posts", help="_posts 目录路径 (默认: _posts)")
    parser.add_argument("--force", action="store_true", help="强制覆盖已有 more_info")
    parser.add_argument("--dry-run", action="store_true", help="仅测试运行，不保存文件")
    parser.add_argument("-v", "--verbose", action="store_true", help="输出调试信息")

    args = parser.parse_args()

    try:
        processor = MoreInfoProcessor(args.json_path, args.posts_dir, args.verbose)
        updated, new_data = processor.process(force_update=args.force)

        if updated and not args.dry_run:
            with Path(args.json_path).open("w", encoding="utf-8") as f:
                json.dump(new_data, f, ensure_ascii=False, indent=2)
            print(f"\n✅ 已保存更新到 {args.json_path}")
        elif args.dry_run:
            print("\n🧪 测试运行，未保存任何更改")
        else:
            print("\n✨ 没有需要更新的记录")

        processor.print_stats()

    except Exception as e:
        print(f"❌ 错误: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    cli() 