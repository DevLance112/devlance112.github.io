# Project Detail Blog Article Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `/projects/:slug` detail pages from segmented case-study modules into continuous blog-style articles with images placed between text sections.

**Architecture:** Keep `ProjectDetail` in `src/App.jsx`, but replace the reading rail, cards, chapter modules, and field-note grid with one ordered article renderer. Reuse existing `projectData.js` fields and update `src/styles.css` so the article has a readable editorial measure, consistent image rhythm, and a quiet closing notes/footer area.

**Tech Stack:** React 18, Vite 6, CSS, existing GSAP reveal attributes, lucide-react icons.

## Global Constraints

- Keep the hero as the entry point for title, summary, project image, and metadata.
- Replace the case-study module stack with a single blog-style article column.
- Present the project story as intro prose followed by section headings and paragraphs.
- Place project images between text sections using the same image position rhythm across all project pages.
- Move highlights and tags to a quiet closing section after the article so they do not interrupt the story.
- Remove card grids and bullet-style content from the main article flow.
- Reuse the existing `projectData.js` fields.
- If a project has fewer images than sections, figures repeat the available article images in order so the text-image rhythm stays consistent.
- Remove the table of contents / reading rail so the page reads as an uninterrupted article.

---

### Task 0: Add Article Layout Regression Verifier

**Files:**
- Create: `scripts/verify-project-detail-article.cjs`

**Interfaces:**
- Consumes: `src/App.jsx` and `src/styles.css` as text.
- Produces: a Node-based regression check that fails while segmented case-study selectors remain and passes when article selectors are present.

- [ ] **Step 1: Write the failing verifier**

Create `scripts/verify-project-detail-article.cjs`:

```js
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
```

- [ ] **Step 2: Run verifier to confirm it fails**

Run: `node scripts/verify-project-detail-article.cjs`

Expected: FAIL with missing `case-article` snippets and remaining `case-reading-rail` / card snippets.

### Task 1: Refactor ProjectDetail Into an Article Renderer

**Files:**
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `project` object with `summary`, `challenge`, `contribution`, `outcome`, `analysis`, `highlights`, `tags`, `images`, and `cover`.
- Produces: `articleSections`, an array of `{ id: string, kicker: string, title: string, paragraphs: string[], image: string, imageLabel: string }` rendered inside `.case-article`.

- [ ] **Step 1: Confirm the current build passes before changing JSX**

Run: `npm run build`

Expected: Vite completes successfully and writes `dist/`.

- [ ] **Step 2: Replace reading-link setup with article section setup**

In `src/App.jsx`, inside `ProjectDetail`, replace:

```jsx
  const leadImage = articleImages[1] || articleImages[0];
  const readingLinks = [
    { href: "#case-brief", label: "Opening brief" },
    ...project.analysis.map((item, index) => ({
      href: `#chapter-${index + 1}`,
      label: item.title,
    })),
    { href: "#case-notes", label: "Field notes" },
  ];
```

with:

```jsx
  const articleImagePool = articleImages.length > 1 ? articleImages.slice(1) : articleImages;
  const getArticleImage = (index) => articleImagePool[index % articleImagePool.length];
  const articleSections = [
    {
      id: "article-opening",
      kicker: "Opening brief",
      title: project.challenge,
      paragraphs: [project.summary, project.contribution, project.outcome],
      image: getArticleImage(0),
      imageLabel: "Context visual",
    },
    ...project.analysis.map((item, index) => ({
      id: `article-section-${index + 1}`,
      kicker: `Part ${String(index + 1).padStart(2, "0")}`,
      title: item.title,
      paragraphs: [item.body],
      image: getArticleImage(index + 1),
      imageLabel: item.title,
    })),
  ];
```

- [ ] **Step 3: Replace the segmented body JSX with one article flow**

In `src/App.jsx`, replace the full `<section className="case-blog-shell section-band">...</section>` body with:

```jsx
      <section className="case-blog-shell section-band">
        <SectionTitle>Article</SectionTitle>
        <div className="section-inner case-article-layout">
          <article className="case-article" aria-label={`${project.title} project article`}>
            {articleSections.map((section) => (
              <section className="case-article-section" id={section.id} key={section.id} data-motion-section>
                <div className="case-article-copy" data-reveal-copy>
                  <p className="section-kicker">{section.kicker}</p>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <figure className="case-article-figure image-reveal" data-image-reveal>
                  <img src={section.image} alt={`${project.title} ${section.imageLabel}`} />
                  <span className="image-curtain" aria-hidden="true" />
                  <figcaption>
                    <span>{section.imageLabel}</span>
                    <span>{project.title}</span>
                  </figcaption>
                </figure>
              </section>
            ))}

            <footer className="case-article-footer" data-motion-section>
              <div className="case-article-copy" data-reveal-copy>
                <p className="section-kicker">Closing notes</p>
                <h2>What this project shows.</h2>
                {project.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
              <div className="case-tags case-blog-tags" data-reveal-card>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </footer>
          </article>
        </div>
      </section>
```

- [ ] **Step 4: Run build to verify JSX compiles**

Run: `npm run build`

Expected: PASS. If it fails, fix syntax or missing variable errors before continuing.

### Task 2: Restyle the Detail Body as Continuous Blog Prose

**Files:**
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: JSX classes `.case-article-layout`, `.case-article`, `.case-article-section`, `.case-article-copy`, `.case-article-figure`, `.case-article-footer`.
- Produces: a single-column article layout with consistent text/image rhythm.

- [ ] **Step 1: Replace old blog layout styles**

In `src/styles.css`, replace the block beginning at `.case-blog-layout` and ending at `.case-blog-tags` with:

```css
.case-article-layout {
  display: block;
  max-width: 1060px;
}

.case-article {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(72px, 9vw, 128px);
}

.case-article-section,
.case-article-footer {
  position: relative;
  display: grid;
  gap: clamp(34px, 5vw, 62px);
}

.case-article-section + .case-article-section {
  border-top: 1px solid var(--line);
  padding-top: clamp(72px, 9vw, 118px);
}

.case-article-copy {
  max-width: 780px;
}

.case-article-copy h2 {
  margin: 0;
  color: var(--ink);
  font-size: clamp(2.3rem, 4vw, 4.35rem);
  font-weight: 780;
  line-height: 1.06;
  text-wrap: balance;
}

.case-article-copy p:not(.section-kicker) {
  max-width: 720px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: clamp(1rem, 1.25vw, 1.12rem);
  line-height: 1.9;
}

.case-article-figure {
  position: relative;
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(120, 217, 213, 0.08), transparent 35%),
    #0c0e0d;
}

.case-article-figure img {
  width: 100%;
  max-height: 760px;
  object-fit: contain;
  will-change: transform;
}

.case-article-figure figcaption {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--line);
  padding: 14px 16px;
  color: rgba(246, 242, 232, 0.58);
  font-size: 0.8rem;
  font-weight: 800;
}

.case-article-footer {
  border-top: 1px solid var(--line);
  padding-top: clamp(58px, 7vw, 86px);
}

.case-blog-tags {
  position: relative;
  z-index: 1;
  margin-top: 0;
}
```

- [ ] **Step 2: Update responsive selectors**

In the `@media (max-width: 1200px)`, `@media (max-width: 900px)`, and `@media (max-width: 640px)` sections, remove rules that target `.case-blog-layout`, `.case-reading-rail`, `.case-story-block`, `.chapter-watermark`, `.case-story-copy`, `.case-context-figure`, `.case-brief-cards`, and `.case-notes-grid`.

Add this mobile rule in `@media (max-width: 640px)`:

```css
  .case-article {
    gap: 70px;
  }

  .case-article-section + .case-article-section {
    padding-top: 70px;
  }

  .case-article-copy h2 {
    font-size: 2.25rem;
    line-height: 1.1;
  }

  .case-article-copy p:not(.section-kicker) {
    font-size: 1rem;
    line-height: 1.78;
  }

  .case-article-figure figcaption {
    display: grid;
  }
```

- [ ] **Step 3: Run build to catch CSS/JS regressions**

Run: `npm run build`

Expected: PASS.

### Task 3: Verify the Article Experience

**Files:**
- Modify if needed: `src/App.jsx`
- Modify if needed: `src/styles.css`

**Interfaces:**
- Consumes: the working `/projects/:slug` route.
- Produces: verified detail page behavior on desktop and mobile widths.

- [ ] **Step 1: Start local preview**

Run: `npm run dev -- --port 5173`

Expected: Vite serves the site at `http://127.0.0.1:5173/`.

- [ ] **Step 2: Inspect one detail page on desktop**

Open: `http://127.0.0.1:5173/projects/newu-inscribex`

Expected: The page shows the existing hero followed by a continuous article. There is no reading rail, no contribution/outcome cards, no field-note card grid, and images appear between text sections.

- [ ] **Step 3: Inspect one detail page on mobile width**

Open the same route at a narrow viewport around 390px wide.

Expected: Text remains inside its containers, figures stack cleanly between sections, captions do not overlap, and buttons in the hero remain usable.

- [ ] **Step 4: Final status check**

Run: `git status --short`

Expected: Only intentional changes are present from this implementation plus pre-existing unrelated workspace changes.
