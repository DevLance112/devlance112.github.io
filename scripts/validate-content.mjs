import { access } from 'node:fs/promises';
import path from 'node:path';
import * as content from '../src/content/siteContent.ts';
import { pages, redirects } from './site-routes.mjs';

const failures = [];
const { projects, articles } = content;
const routePaths = new Set([...pages.map((page) => page.path), ...redirects.map((redirect) => redirect.path)]);
const projectSlugs = new Set(projects.map((project) => project.slug));
const articleSlugs = new Set(articles.map((article) => article.slug));
const requireText = (value, label) => { if (typeof value !== 'string' || !value.trim()) failures.push(`${label} must contain text.`); };

for (const [name, items, slugs] of [['projects', projects, projectSlugs], ['articles', articles, articleSlugs]]) {
  if (!items.length) failures.push(`${name} must not be empty.`);
  if (slugs.size !== items.length) failures.push(`${name} contains duplicate slugs.`);
  for (const item of items) {
    const label = `${name}/${item.slug}`;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) failures.push(`${label} has an invalid slug.`);
    for (const key of ['title', 'summary', 'date', 'category']) requireText(item[key], `${label}.${key}`);
    if (!item.sections?.length) failures.push(`${label} needs article sections.`);
    const sectionIds = new Set();
    for (const section of item.sections ?? []) {
      if (sectionIds.has(section.id)) failures.push(`${label} repeats section id ${section.id}.`);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id)) failures.push(`${label} has invalid section id ${section.id}.`);
      sectionIds.add(section.id);
      requireText(section.title, `${label}.${section.id}.title`);
      if (!section.paragraphs?.length) failures.push(`${label}.${section.id} needs body text.`);
      if (section.table?.rows.some((row) => row.length !== section.table.headers.length)) failures.push(`${label}.${section.id} has inconsistent table columns.`);
    }
    for (const slug of item.relatedArticles ?? []) if (!articleSlugs.has(slug)) failures.push(`${label} links to unknown article ${slug}.`);
    for (const slug of item.relatedProjects ?? []) if (!projectSlugs.has(slug)) failures.push(`${label} links to unknown project ${slug}.`);
  }
}

async function inspect(value, label) {
  if (Array.isArray(value)) return Promise.all(value.map((item, index) => inspect(item, `${label}[${index}]`)));
  if (!value || typeof value !== 'object') return;
  if ('src' in value) requireText(value.alt, `${label}.alt`);
  for (const [key, child] of Object.entries(value)) {
    if (typeof child === 'string' && (key === 'href' || key === 'src' || /resume/i.test(key))) {
      if (/^(?:javascript|data):/i.test(child)) failures.push(`${label}.${key} uses an unsupported URL scheme.`);
      if (child.startsWith('/')) {
        const resource = decodeURIComponent(child.split(/[?#]/)[0]);
        if (!routePaths.has(resource)) {
          const filename = path.resolve('public', `.${resource}`);
          const publicRoot = `${path.resolve('public')}${path.sep}`;
          if (!filename.startsWith(publicRoot)) failures.push(`${label}.${key} escapes the public folder.`);
          else try { await access(filename); } catch { failures.push(`${label}.${key} points to missing resource ${resource}.`); }
        }
      }
    }
    await inspect(child, `${label}.${key}`);
  }
}

await inspect(content, 'content');
if (new Set(pages.map((page) => page.title)).size !== pages.length) failures.push('Every page needs a unique title.');
if (failures.length) {
  console.error(`Content validation failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}
console.log(`Content verified: ${projects.length} projects, ${articles.length} articles, ${pages.length} routes; references, images, and local resources resolve.`);
