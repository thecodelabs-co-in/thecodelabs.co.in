#!/usr/bin/env node
/**
 * Writes SEO tags into index.html on disk so "View Page Source" shows them
 * without relying on Vite transforms (e.g. opening the file or static hosts).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { applySiteSeoToIndexHtml } from './seo-inject-html.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const sitePath = path.join(root, 'src/config/site.json');
const indexPath = path.join(root, 'index.html');

const site = JSON.parse(fs.readFileSync(sitePath, 'utf8'));
let html = fs.readFileSync(indexPath, 'utf8');
html = applySiteSeoToIndexHtml(html, site);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('inject-seo: index.html updated from src/config/site.json');
