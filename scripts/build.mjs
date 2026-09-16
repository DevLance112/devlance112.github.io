import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';
import { pages, redirects, notFound, pageHead, siteUrl, escapeHtml } from './site-routes.mjs';

process.env.NODE_ENV = 'production';
await build();
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: '.vite/ssr',
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
});

const { render } = await import(pathToFileURL(path.resolve('.vite/ssr/entry-server.mjs')).href);
const template = (await readFile('dist/index.html', 'utf8'))
  .replace(/\s*<title>[\s\S]*?<\/title>/g, '')
  .replace(/\s*<meta\b[^>]*(?:name="(?:description|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g, '')
  .replace(/\s*<link\b[^>]*rel="canonical"[^>]*>/g, '');

async function writePage(route, html, filename = 'index.html') {
  const folder = path.join('dist', route.replace(/^\//, ''));
  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, filename), html);
}

for (const page of pages) {
  const markup = await render(page.path);
  const html = template
    .replace('</head>', () => `${pageHead(page)}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
  await writePage(page.path, html);
}

// Legacy URLs get real static redirects; their canonical destination owns the content.
for (const redirect of redirects) {
  const destination = pages.find((page) => page.path === redirect.target);
  const target = escapeHtml(redirect.target);
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
${pageHead(destination, { noindex: true })}
<meta http-equiv="refresh" content="0;url=${target}"></head>
<body><main><h1>This page has moved</h1><p><a href="${target}">Continue to ${escapeHtml(destination.title)}</a></p></main>
<script>location.replace(${JSON.stringify(redirect.target)} + location.search + location.hash);</script></body></html>`;
  await writePage(redirect.path, html);
}

const missingHtml = template
  .replace('</head>', () => `${pageHead(notFound, { noindex: true })}\n  </head>`);
const missingMarkup = await render('/__page-not-found__');
for (const missingRoute of ['/work/__missing-project__', '/writing/__missing-article__']) {
  if (!(await render(missingRoute)).includes('404')) throw new Error(`${missingRoute} must render a 404, not an unrelated article.`);
}
await writePage('/', missingHtml.replace('<div id="root"></div>', () => `<div id="root">${missingMarkup}</div>`), '404.html');
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${siteUrl}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile('dist/route-manifest.json', `${JSON.stringify({ pages: pages.map(({ path: route, title }) => ({ path: route, title })), redirects }, null, 2)}\n`);
// Retain the design exploration archive without indexing it as portfolio content.
for (const route of ['/design-lab', '/design-lab/editorial', '/design-lab/systems', '/design-lab/cinematic', '/design-lab/minimal']) {
  const labPage = { path: route, title: 'Design Lab — Lance Li', description: 'Four design explorations. Systems is the selected direction, refined for attention.' };
  await writePage(route, template.replace('</head>', () => `${pageHead(labPage, { noindex: true })}\n</head>`));
}
console.log(`Prerendered ${pages.length} complete pages, ${redirects.length} legacy redirects, and a true 404 page.`);
