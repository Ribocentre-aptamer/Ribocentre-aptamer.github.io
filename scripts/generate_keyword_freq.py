import json, re, collections, pathlib, sys

STOPWORDS = {
    'the','and','for','with','that','from','this','using','use','used','into','via','into',
    'aptamer','aptamers','rna','dna','study','studies','analysis','based','protein','proteins',
    'case','report','reports','novel','new','binding','selective','selectivity','design','toward',
    'towards','application','applications','characterization','development','select','target',
    'targets','cell','cells','sensor','sensors','assay','assays','detection','inhibition','effect',
    'effects','molecular','structure','structural','evaluation','high','model','models','activity',
    'activities','mechanism','mechanisms','analysis','data','method','methods','results','review',
    'system','systems','role','functional','function','functions','functionalities'
}

# 简单分词并过滤停用词
def tokenize(text:str):
    words = re.findall(r"[A-Za-z]+", text.lower())
    return [w for w in words if w not in STOPWORDS and len(w) > 2]

def main():
    root = pathlib.Path(__file__).resolve().parent.parent  # 项目根目录
    input_path = root / 'apidata' / 'combineRef_updated.json'
    output_path = root / 'apidata' / 'keyword_freq.json'

    if not input_path.exists():
        print('Input JSON not found:', input_path, file=sys.stderr)
        sys.exit(1)

    data = json.loads(input_path.read_text(encoding='utf-8'))
    counter = collections.Counter()

    for item in data:
        pub = item.get('publication') or {}
        title = pub.get('title') or ''
        counter.update(tokenize(title))

    # 取出现次数前 200 的关键词
    most_common = counter.most_common(200)
    output = [{"keyword": k, "count": v} for k, v in most_common]

    output_path.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'Written {len(output)} keywords to {output_path}')

if __name__ == '__main__':
    main() 