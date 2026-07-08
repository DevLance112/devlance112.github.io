const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "src", "App.jsx"), "utf8");
const css = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");

const requiredAppSnippets = [
  'className="case-article-layout"',
  'className="case-article"',
  'className="case-article-section"',
  'className="case-article-footer"',
  "articleSections.map",
];

const forbiddenAppSnippets = [
  'className="case-reading-rail"',
  'className="case-brief-cards"',
  'className="case-notes-grid"',
  "readingLinks.map",
];

const requiredCssSnippets = [
  ".case-article-layout",
  ".case-article-section",
  ".case-article-copy",
  ".case-article-figure",
  ".case-article-footer",
];

const forbiddenCssSnippets = [
  ".case-reading-rail",
  ".case-brief-cards",
  ".case-notes-grid",
  ".chapter-watermark",
];

const failures = [];

for (const snippet of requiredAppSnippets) {
  if (!app.includes(snippet)) failures.push(`Missing App.jsx snippet: ${snippet}`);
}

for (const snippet of forbiddenAppSnippets) {
  if (app.includes(snippet)) failures.push(`Forbidden App.jsx snippet remains: ${snippet}`);
}

for (const snippet of requiredCssSnippets) {
  if (!css.includes(snippet)) failures.push(`Missing styles.css snippet: ${snippet}`);
}

for (const snippet of forbiddenCssSnippets) {
  if (css.includes(snippet)) failures.push(`Forbidden styles.css snippet remains: ${snippet}`);
}

if (failures.length) {
  console.error("Project detail article verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Project detail article verification passed.");
