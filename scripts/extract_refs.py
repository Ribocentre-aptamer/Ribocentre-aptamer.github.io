import re
import json
import yaml
from pathlib import Path

POSTS_DIR = Path('_posts')
PUBLICATION_PAGE = Path('_pages/publications.md')

post_refs = []

# Extract references from posts
for md in POSTS_DIR.glob('*.md'):
    text = md.read_text(encoding='utf-8')

    # parse front matter for post title
    front_match = re.match(r'^---\n(.*?)\n---', text, re.S)
    post_title = md.stem
    if front_match:
        try:
            front = yaml.safe_load(front_match.group(1))
            if isinstance(front, dict) and 'title' in front:
                post_title = str(front['title']).strip('"')
        except Exception:
            pass
    post_link = f"/_posts/{md.stem}"

    # pattern for reference blocks
    pattern = re.compile(r'<a id="ref\d+"></a><font><strong>\[(\d+)\]([^<]+)</strong></font><br />\n([^<]+)<br />\n<a href="https://pubmed\.ncbi\.nlm\.nih\.gov/(\d+)/"[^>]*>([^<]+)</a>', re.S)
    for m in pattern.finditer(text):
        post_refs.append({
            'pmid': m.group(4),
            'title': m.group(2).strip(),
            'authors': m.group(3).strip(),
            'journal': m.group(5).strip(),
            'source_file': str(md),
            'post_title': post_title,
            'post_link': post_link
        })

(Path('apidata/postRef.json')).write_text(
    json.dumps(post_refs, indent=2, ensure_ascii=False),
    encoding='utf-8'
)


# Extract references from publication table
pub_refs = []
html = PUBLICATION_PAGE.read_text(encoding='utf-8')
row_pattern = re.compile(r'<tr>\s*<td name="td0"><a href="https://pubmed\.ncbi\.nlm\.nih\.gov/(\d+)/"[^>]*><b>(\d+)</b></a></td>\s*<td name="td1">([^<]*)</td>\s*<td name="td2">([^<]*)</td>\s*<td name="td3">([^<]*)</td>', re.S)
for m in row_pattern.finditer(html):
    pub_refs.append({
        'pmid': m.group(1),
        'year': m.group(2),
        'authors': m.group(3).strip(),
        'title': m.group(4).strip(),
        'journal': m.group(5).strip()
    })


(Path('apidata/publicationRef.json')).write_text(
    json.dumps(pub_refs, indent=2, ensure_ascii=False),
    encoding='utf-8'
)


# Combine by PMID
combined = {}
for r in pub_refs:
    combined[r['pmid']] = {'pmid': r['pmid'], 'publication': r, 'posts': []}

for r in post_refs:
    entry = combined.setdefault(r['pmid'], {'pmid': r['pmid'], 'publication': None, 'posts': []})
    entry['posts'].append({
        'source_file': r['source_file'],
        'post_title': r['post_title'],
        'post_link': r['post_link']
    })


(Path('apidata/combineRef.json')).write_text(
    json.dumps(list(combined.values()), indent=2, ensure_ascii=False),
    encoding='utf-8'
)

