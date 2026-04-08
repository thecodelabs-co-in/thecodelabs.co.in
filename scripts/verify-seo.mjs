#!/usr/bin/env node
/**
 * Ensures index.html (and optionally dist/index.html) contains SEO from site.json.
 * No npm dependencies — run: node scripts/verify-seo.mjs [--dist]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { applySiteSeoToIndexHtml } from './seo-inject-html.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function normalizeEol(s) {
  return s.replace(/\r\n/g, '\n');
}

function loadSite() {
  const p = path.join(root, 'src/config/site.json');
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function assertIndexInSync(relPath, label) {
  const site = loadSite();
  const indexPath = path.join(root, relPath);
  if (!fs.existsSync(indexPath)) {
    console.error(`verify-seo: missing ${relPath}`);
    process.exit(1);
  }
  const raw = normalizeEol(fs.readFileSync(indexPath, 'utf8'));
  const expected = normalizeEol(applySiteSeoToIndexHtml(raw, site));
  if (raw !== expected) {
    console.error(`verify-seo: ${label} is out of sync with src/config/site.json`);
    console.error(`verify-seo: run: npm run inject-seo`);
    console.error(`verify-seo: (then rebuild if you use dist/)`);
    process.exit(1);
  }
  if (!raw.includes('<!-- site-seo:begin -->') || !raw.includes('<!-- site-seo:end -->')) {
    console.error(`verify-seo: ${label} must contain <!-- site-seo:begin --> and <!-- site-seo:end -->`);
    process.exit(1);
  }
  const desc = site.seo?.description || '';
  if (desc && !raw.includes('name="description"')) {
    console.error(`verify-seo: ${label} missing meta description`);
    process.exit(1);
  }
  if (!raw.includes('property="og:title"')) {
    console.error(`verify-seo: ${label} missing og:title`);
    process.exit(1);
  }
  console.log(`verify-seo: OK — ${label} matches site.json`);
}

assertIndexInSync('index.html', 'index.html');

if (process.argv.includes('--dist')) {
  assertIndexInSync('dist/index.html', 'dist/index.html');
}
