import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { applySiteSeoToIndexHtml } from './scripts/seo-inject-html.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadSiteConfig() {
  const sitePath = path.resolve(__dirname, 'src/config/site.json');
  return JSON.parse(fs.readFileSync(sitePath, 'utf8'));
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-seo-from-site-json',
      transformIndexHtml(html) {
        const site = loadSiteConfig();
        return applySiteSeoToIndexHtml(html, site);
      },
    },
  ],
});
