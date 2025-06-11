const SearchUtils = {
  async fetchData(paths) {
    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          const text = await response.text();
          return JSON.parse(text);
        }
      } catch (e) {
        console.warn('Failed to load search data from', path, e);
      }
    }
    throw new Error('All search data paths failed');
  },

  processResults(data, query) {
    const queryLower = query.toLowerCase();
    const terms = queryLower.split(/\s+/).filter(t => t.length > 0);
    const results = [];
    data.forEach(item => {
      const titleLower = (item.title || '').toLowerCase();
      const categoryLower = (item.category || '').toLowerCase();
      const tagsLower = (item.tags || '').toLowerCase();
      const contentLower = (item.content || '').toLowerCase();
      let matched = false;
      if (titleLower.includes(queryLower) ||
          categoryLower.includes(queryLower) ||
          tagsLower.includes(queryLower) ||
          contentLower.includes(queryLower)) {
        matched = true;
      } else {
        for (const term of terms) {
          if (titleLower.includes(term) ||
              categoryLower.includes(term) ||
              tagsLower.includes(term) ||
              contentLower.includes(term)) {
            matched = true;
            break;
          }
        }
      }
      if (matched) {
        item.relevanceScore = this.calculateRelevanceScore(item, query);
        results.push(item);
      }
    });
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);
    return results;
  },

  calculateRelevanceScore(item, query) {
    let score = 0;
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    const fullQuery = query.toLowerCase();
    const title = (item.title || '').toLowerCase();
    const category = (item.category || '').toLowerCase();
    const tags = (item.tags || '').toLowerCase();
    const content = (item.content || '').toLowerCase();
    if (title.includes(fullQuery)) score += 200;
    if (content.includes(fullQuery)) score += 100;
    if (category.includes(fullQuery)) score += 80;
    if (tags.includes(fullQuery)) score += 90;
    terms.forEach(term => {
      if (title === term) score += 100;
      else if (title.startsWith(term)) score += 80;
      else if (title.includes(term)) score += 60;
      if (category.includes(term)) score += 30;
      if (tags.includes(term)) score += 40;
      if (content.includes(term)) score += Math.min((content.match(new RegExp(term,'gi'))||[]).length*3,30);
    });
    return score;
  },

  highlightKeywords(text, query) {
    if (!text) return '';
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
    let result = text;
    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      result = result.replace(regex, '<span class="keyword-highlight">$1</span>');
    });
    return result;
  },

  getContentPreview(content, query, before = 200) {
    if (!content) return '';
    const queryLower = query.toLowerCase();
    const pos = content.toLowerCase().indexOf(queryLower);
    if (pos !== -1) {
      const start = Math.max(0, pos - before);
      const end = Math.min(content.length, pos + before);
      let preview = content.substring(start, end);
      if (start > 0) preview = '...' + preview;
      if (end < content.length) preview = preview + '...';
      return this.highlightKeywords(preview, query);
    }
    return this.highlightKeywords(content.substring(0, before) + '...', query);
  }
};
