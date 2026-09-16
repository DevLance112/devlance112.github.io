import { projects, articles } from '../src/content/siteContent.ts';

export const siteUrl = 'https://devlance112.github.io';
export const socialImage = `${siteUrl}/assets/social-card.png`;
export const pages = [
  { path: '/', title: 'Lance Li — From ambiguity to working systems', description: 'Lance Li connects ambiguous real-world problems to working products and systems through full-stack engineering, AI applications, and project delivery.' },
  { path: '/work', title: 'Work & case studies — Lance Li', description: 'Explore Lance Li’s engineering and delivery work: the problem, the constraints, the decisions, and what was built.' },
  { path: '/writing', title: 'Writing & field notes — Lance Li', description: 'Notes on AI applications, full-stack systems, product decisions, and the work of moving from an unclear problem to a useful solution.' },
  { path: '/about', title: 'About & experience — Lance Li', description: 'Lance Li’s background across software engineering, AI applications, workforce operations, and cross-functional project delivery.' },
  { path: '/contact', title: 'Contact — Lance Li', description: 'Get in touch with Lance Li about full-stack engineering, AI applications, technical collaboration, and product delivery.' },
  ...projects.map((project) => ({ path: `/work/${project.slug}`, title: `${project.title} — Case study — Lance Li`, description: project.summary, kind: 'project', slug: project.slug })),
  ...articles.map((article) => ({ path: `/writing/${article.slug}`, title: `${article.title} — Lance Li`, description: article.summary, kind: 'article', slug: article.slug })),
];

export const redirects = [
  { path: '/portfolio', target: '/' },
  { path: '/projects', target: '/work' },
  { path: '/resume', target: '/about' },
  ...projects.map((project) => ({ path: `/projects/${project.slug}`, target: `/work/${project.slug}` })),
];

export const notFound = { path: '/404', title: 'Page not found — Lance Li', description: 'This page could not be found. Explore Lance Li’s work, writing, and background, or get in touch.' };
export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

export function pageHead(page, { noindex = false } = {}) {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const url = escapeHtml(`${siteUrl}${page.path}`);
  return `    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="${page.kind === 'article' ? 'article' : 'website'}" />
    <meta property="og:site_name" content="Lance Li" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${socialImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Lance Li. From ambiguity to working systems." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${socialImage}" />`;
}
