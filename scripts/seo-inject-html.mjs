import { buildSeoHeadTags } from './seo-head-snippet.mjs';

const BEGIN = '<!-- site-seo:begin -->';
const END = '<!-- site-seo:end -->';
const LEGACY_MARKER = '<!--app-seo-->';

/**
 * Idempotent: updates or inserts the SEO block in index.html string.
 */
export function applySiteSeoToIndexHtml(html, site) {
  const injected = buildSeoHeadTags(site);
  const block = `${BEGIN}\n    ${injected}\n    ${END}`;

  if (html.includes(BEGIN) && html.includes(END)) {
    const re = new RegExp(`${escapeRegExp(BEGIN)}[\\s\\S]*?${escapeRegExp(END)}`, 'm');
    return html.replace(re, block);
  }

  if (html.includes(LEGACY_MARKER)) {
    return html.replace(LEGACY_MARKER, block);
  }

  return html.replace(
    /(<meta name="viewport"[^>]*\/?>)/i,
    `$1\n    ${block}`
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
