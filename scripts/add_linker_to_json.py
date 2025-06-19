import json
import re
from pathlib import Path


def slugify(name: str) -> str:
    """Convert a page name to a slug used in post filenames.

    Rules:
    1. Strip leading/trailing whitespace.
    2. Replace spaces and consecutive whitespace with single dash '-'.
    3. Replace some special separators (en dash, em dash, slash, underscore) with dash.
    4. Remove characters that are not alphanumeric, dash, or parentheses.
    5. Compress multiple dashes.
    6. Return slug without leading/trailing dashes.
    """
    # Normalize spaces and separators
    slug = name.strip()
    separator_pattern = r"[\s/·—–_]+"  # include various separators
    slug = re.sub(separator_pattern, "-", slug)

    # Remove unwanted punctuation except parentheses which exist in some filenames
    slug = re.sub(r"[^A-Za-z0-9\-()]+", "", slug)

    # Compress multiple dashes
    slug = re.sub(r"-{2,}", "-", slug)
    slug = slug.strip("-")
    return slug


def main():
    json_path = Path("apidata/sequences_cleaned.json")
    if not json_path.exists():
        raise FileNotFoundError("Could not find sequences_cleaned.json at expected path.")

    with json_path.open("r", encoding="utf-8") as f:
        data = json.load(f)

    if "Sheet1" not in data:
        raise KeyError("Expected top-level key 'Sheet1' not found in JSON data.")

    updated = False
    for record in data["Sheet1"]:
        if "Linker" not in record:
            page_name = record.get("Linker name (page name)")
            if not page_name:
                continue  # skip if no page name
            slug = slugify(page_name)
            record["Linker"] = f"/_posts/{slug}.html"
            updated = True

    if updated:
        # Write back JSON with pretty formatting for readability
        with json_path.open("w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print("sequences_cleaned.json 已更新，并已为所有记录添加 Linker 字段。")
    else:
        print("所有记录均已包含 Linker 字段，未做修改。")


if __name__ == "__main__":
    main() 