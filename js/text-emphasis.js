(function(){
  // List of words to ignore when emphasizing
  const ignoreWords = new Set([
    'and','the','for','with','this','that','from','into','onto','upon','about',
    'RNA','DNA','GFP','NMR','are','not','has','its'
  ]);

  function emphasize(selector){
    const paragraphs = document.querySelectorAll(selector + ' p');
    paragraphs.forEach(para => {
      if(para.getAttribute('data-processed') === 'true') return;
      const textNodes = [];
      function getTextNodes(node){
        if(node.nodeType === 3){
          textNodes.push(node);
        } else if(node.nodeType === 1 && !['SCRIPT','STYLE','SPAN','SUP','SUB','A'].includes(node.nodeName)) {
          Array.from(node.childNodes).forEach(getTextNodes);
        }
      }
      getTextNodes(para);
      textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        if(!text.trim()) return;
        const parts = [];
        let lastIndex = 0;
        const regex = /\b([A-Za-z]{3,})\b/g;
        let match;
        while((match = regex.exec(text)) !== null){
          const word = match[1];
          const startIndex = match.index;
          if(ignoreWords.has(word.toLowerCase())) continue;
          if(startIndex > lastIndex){
            parts.push(document.createTextNode(text.substring(lastIndex,startIndex)));
          }
          const prefixSpan = document.createElement('span');
          prefixSpan.style.fontWeight = '600';
          prefixSpan.style.color = '#520049';
          prefixSpan.style.display = 'inline';
          prefixSpan.textContent = word.substring(0,3);
          const rest = document.createTextNode(word.substring(3));
          parts.push(prefixSpan);
          parts.push(rest);
          lastIndex = startIndex + word.length;
        }
        if(lastIndex < text.length){
          parts.push(document.createTextNode(text.substring(lastIndex)));
        }
        if(parts.length > 0){
          const frag = document.createDocumentFragment();
          parts.forEach(p=>frag.appendChild(p));
          textNode.parentNode.replaceChild(frag,textNode);
        }
      });
      para.setAttribute('data-processed','true');
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    if(window.location.pathname.includes('/applications/')){
      emphasize('.content-section');
    }
    if(document.body.getAttribute('data-page') === 'aptamer'){
      emphasize('.container');
    }
  });
})();
