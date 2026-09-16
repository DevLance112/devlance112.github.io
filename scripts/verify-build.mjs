import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { pages, redirects, escapeHtml } from './site-routes.mjs';
import { projects, articles } from '../src/content/siteContent.ts';

const failures = [];
const routePaths = new Set([...pages.map((page) => page.path), ...redirects.map((redirect) => redirect.path)]);
const documents = [];
for (const page of pages) {
  const filename = path.join('dist', page.path.replace(/^\//, ''), 'index.html');
  let html;
  try { html = await readFile(filename, 'utf8'); } catch { failures.push(`Missing built route ${page.path}.`); continue; }
  documents.push([page.path, html]);
  if (!html.includes(`<title>${escapeHtml(page.title)}</title>`)) failures.push(`${page.path} has incorrect title metadata.`);
  if (!html.includes(`name="description" content="${escapeHtml(page.description)}"`)) failures.push(`${page.path} has incorrect description metadata.`);
  if (!html.includes(`property="og:url" content="https://devlance112.github.io${page.path}"`)) failures.push(`${page.path} has incorrect Open Graph URL.`);
  if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) failures.push(`${page.path} must have exactly one prerendered h1.`);
  if (!/<main(?:\s|>)/.test(html)) failures.push(`${page.path} has no prerendered main landmark.`);
  const content = page.kind === 'project' ? projects.find((item) => item.slug === page.slug) : page.kind === 'article' ? articles.find((item) => item.slug === page.slug) : null;
  for (const section of content?.sections ?? []) {
    if (!html.includes(`id="${section.id}"`)) failures.push(`${page.path} is missing section ${section.id} from the static body.`);
  }
}

for (const [route, html] of documents) {
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const href = match[1].replace(/&amp;/g, '&');
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const resource = decodeURIComponent(href.split(/[?#]/)[0]);
    if (routePaths.has(resource)) continue;
    try { await access(path.resolve('dist', `.${resource}`)); } catch { failures.push(`${route} references missing built resource ${resource}.`); }
  }
}
for (const redirect of redirects) {
  const html = await readFile(path.join('dist', redirect.path, 'index.html'), 'utf8');
  if (!html.includes(`url=${redirect.target}`)) failures.push(`Legacy redirect ${redirect.path} is missing its destination.`);
}
const missing = await readFile('dist/404.html', 'utf8');
if (!missing.includes('noindex, follow') || !/404|not found/i.test(missing)) failures.push('404.html must contain the real, non-indexable not-found page.');
if (missing === await readFile('dist/index.html', 'utf8')) failures.push('404.html must not duplicate the home page.');
for (const resource of ['sitemap.xml', 'robots.txt', '.nojekyll', 'assets/social-card.png']) {
  try { await access(path.join('dist', resource)); } catch { failures.push(`Missing deployment resource ${resource}.`); }
}
if (failures.length) {
  console.error(`Build verification failed:\n${[...new Set(failures)].map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}
console.log(`Build verified: ${pages.length} static pages with unique SEO metadata, complete case study/article sections, valid local resources, ${redirects.length} redirects, and a dedicated 404.`);
