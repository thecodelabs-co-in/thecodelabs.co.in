import { useEffect } from 'react';

function setMeta(name, content, isProperty = false) {
  if (content === undefined || content === null || content === '') return;
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function SEO({ title, description, keywords = [], canonicalUrl, ogImage }) {
  useEffect(() => {
    document.title = title || '';

    setMeta('description', description);

    const kw = Array.isArray(keywords) ? keywords.join(', ') : String(keywords || '');
    if (kw) setMeta('keywords', kw);

    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    if (canonicalUrl) setMeta('og:url', canonicalUrl, true);
    if (ogImage) setMeta('og:image', ogImage, true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (ogImage) setMeta('twitter:image', ogImage);

    setLink('canonical', canonicalUrl);
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}
