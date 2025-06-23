import json
from pathlib import Path

JSON_PATH = Path("apidata/sequences_cleaned.json")
POSTS_DIR = Path("_posts")


def main():
    if not JSON_PATH.exists():
        raise FileNotFoundError(f"{JSON_PATH} not found")

    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    sheet = data.get("Sheet1", [])

    missing = []
    for rec in sheet:
        linker = rec.get("Linker")
        if not linker:
            missing.append((rec.get("ID"), "<Linker missing>"))
            continue

        # Expect form '/_posts/<slug>.html'
        slug = Path(linker).stem  # removes .html
        # Check for .md or .html source in _posts
        md_file = POSTS_DIR / f"{slug}.md"
        html_file = POSTS_DIR / f"{slug}.html"
        if not md_file.exists() and not html_file.exists():
            missing.append((rec.get("ID"), linker))

    total = len(sheet)
    invalid = len(missing)
    valid = total - invalid

    print(f"总记录数: {total}")
    print(f"有效链接: {valid}")
    print(f"无效链接: {invalid}")
    if missing:
        print("无效条目列表 (ID, Linker):")
        for _id, linker in missing:
            print(f"  - {_id}: {linker}")


if __name__ == "__main__":
    main() 