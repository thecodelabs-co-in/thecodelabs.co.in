/**
 * Shared SEO <head> snippet from site.json (single source of truth).
 * Used by: scripts/inject-seo.mjs, vite.config.js
 */

export function escapeHtmlAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/\r?\n/g, ' ');
}

export function buildSeoHeadTags(site) {
  const seo = site.seo || {};
  const title = seo.title || 'The Code Labs';
  const description = seo.description || '';
  const keywords = Array.isArray(seo.keywords) ? seo.keywords.join(', ') : '';
  const canonical = seo.canonicalUrl || 'https://thecodelabs.co.in';
  const ogImage = seo.ogImage || 'https://thecodelabs.co.in/assets/img/LogoFull.svg';

  const lines = [
    `<title>${escapeHtmlAttr(title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(description)}" />`,
  ];
  if (keywords) {
    lines.push(`<meta name="keywords" content="${escapeHtmlAttr(keywords)}" />`);
  }
  lines.push(
    `<link rel="canonical" href="${escapeHtmlAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(ogImage)}" />`
  );
  return lines.join('\n    ');
}
