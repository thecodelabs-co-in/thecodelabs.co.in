import { useEffect } from 'react';

function setMeta(name, content, isProperty = false) {
  if (!content) return;
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function SEO({ title, description, keywords = [] }) {
  useEffect(() => {
    document.title = title || '';

    setMeta('description', description);

    const kw = Array.isArray(keywords) ? keywords.join(', ') : String(keywords || '');
    if (kw) setMeta('keywords', kw);

    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
  }, [title, description, keywords]);

  return null;
}
