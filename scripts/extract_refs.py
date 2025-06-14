import re
import json
from pathlib import Path

POSTS_DIR = Path('_posts')
PUBLICATION_PAGE = Path('_pages/publications.md')

post_refs = []

# Extract references from posts
for md in POSTS_DIR.glob('*.md'):
    text = md.read_text(encoding='utf-8')
    # pattern for reference blocks
    pattern = re.compile(r'<a id="ref\d+"></a><font><strong>\[(\d+)\]([^<]+)</strong></font><br />\n([^<]+)<br />\n<a href="https://pubmed\.ncbi\.nlm\.nih\.gov/(\d+)/"[^>]*>([^<]+)</a>', re.S)
    for m in pattern.finditer(text):
        post_refs.append({
            'pmid': m.group(4),
            'title': m.group(2).strip(),
            'authors': m.group(3).strip(),
            'journal': m.group(5).strip(),
            'source_file': str(md)
        })

(Path('postRef.json')).write_text(json.dumps(post_refs, indent=2, ensure_ascii=False), encoding='utf-8')

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

(Path('publicationRef.json')).write_text(json.dumps(pub_refs, indent=2, ensure_ascii=False), encoding='utf-8')

# Combine by PMID
combined = {}
for r in pub_refs:
    combined[r['pmid']] = {'pmid': r['pmid'], 'publication': r, 'posts': []}

for r in post_refs:
    entry = combined.setdefault(r['pmid'], {'pmid': r['pmid'], 'publication': None, 'posts': []})
    entry['posts'].append(r['source_file'])

(Path('combinedRef.json')).write_text(json.dumps(list(combined.values()), indent=2, ensure_ascii=False), encoding='utf-8')
