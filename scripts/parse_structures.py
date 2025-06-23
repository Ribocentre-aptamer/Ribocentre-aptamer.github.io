import json
import re
from bs4 import BeautifulSoup

# Load structure.md
with open('_pages/structure.md', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# tables ids
table_ids = ['cfttable', 'eletable', 'amintable']
records = []
for tid in table_ids:
    table = soup.find('table', {'id': tid})
    if not table:
        continue
    headers = [th.get_text(strip=True) for th in table.find('thead').find_all('th')]
    for tr in table.find('tbody').find_all('tr'):
        cells = [td.get_text(" ", strip=True) for td in tr.find_all('td')]
        if len(cells) != len(headers):
            continue
        record = dict(zip(headers, cells))
        records.append(record)

# Save merged json
with open('apidata/structures_merged.json', 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=2)
