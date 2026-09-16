# Content inventory and evidence notes

Reviewed on **2026-09-06**. The English website follows the language of the supplied resume and existing portfolio. These notes distinguish recorded facts, editorial reconstruction, and missing evidence.

## Sources reviewed

| Source | Use | Reliability boundary |
| --- | --- | --- |
| `public/assets/files/lance-li-resume-2026.pdf` | Contact information, education, role titles, employment dates, AI implementation, NewU delivery cadence, workforce program results | Supplied self-reported resume snapshot; no independent validation or current-status check |
| `src/projectData.js` | Inventory, legacy slugs, asset paths, existing narrative | Secondary rewrite; does not override the original project records |
| `old_content/devlance112.github.io/NewU-InscribeX-Detail.html` | Sponsor and collaborators, requirements, constraints, architecture, profile-data tradeoff, unfinished work | Detailed team artifact; some dates/team details conflict with the resume; designs are not proof all features shipped |
| `old_content/devlance112.github.io/AI-Resume-Builder-Detail.html` | React editor, job parsing, suggestions, preview, PostgreSQL/Strapi/Render, process and last recorded testing status | No live deployment, test set, or user evidence supplied; broad custom-model claims omitted pending evidence |
| `old_content/devlance112.github.io/Movie-Browser-Detail.html` | Six-week academic collaboration, servlet architecture, XML ingestion, database optimization, cloud retirement, Android extension | No benchmark logs, adoption data, or code-level security verification |
| `old_content/devlance112.github.io/Webcrawler-Indexer-Ranker-Project-Detail.html` | Team credits, six-week scope, bounded crawling, file storage, byte offsets, ranking, historical latency claim | Legacy heading mistakenly names another project and 2019; later data lists 2023; benchmark method absent |
| `old_content/devlance112.github.io/Pantry-Pal-Detail.html` | On-device recommendation, signals, MongoDB model, missing exclusion UI | Team ownership and dates absent; legacy heading contains unrelated copied material |
| `old_content/devlance112.github.io/ORC and Translate.html` | Flask, Tesseract, googletrans, upload/translation flow, AI-assisted debugging | No timing, accuracy, deployment, or data-handling verification |
| `old_content/devlance112.github.io/Multi-Reader-Audiobook.html` | Narration/feedback/reward concept | Explicitly conceptual; proposed benefits are not outcomes |

Original HTML, resume, and image files remain unchanged.

## Priority case studies

1. **AI Secretary & Resume Builder** demonstrates AI application work, a job-specific product workflow, a React editor, relational data, and testing. Stronger publication needs current release status, representative input/output examples, a manual test matrix, and exact contributor ownership.
2. **NewU InscribeX** demonstrates requirement translation, stakeholder coordination, constraints, and a genuine technical tradeoff. It contains the richest narrative evidence: copied username/avatar fields versus centralized profile reads, CTO input, API-call pressure, and deferred Redis work. Stronger publication needs reconciled team/duration details and released-feature evidence.
3. **Movie Browsing Website** demonstrates full-stack depth: XML import, servlet APIs, sessions, database access, deployment, and Android reuse. Stronger publication needs the original repository and a reproducible benchmark/deployment procedure.

The remaining four projects are retained as archives, including the explicitly unimplemented audiobook concept. Every project uses the same thirteen-section case-study contract so future evidence can be inserted without changing the page renderer.

## Claims resolved or bounded

- **FDE positioning:** “FDE-oriented delivery” is a target direction and organizing theme, not a historical job title. Actual titles remain Lead Developer & Founder, Team Lead / Project Coordinator, Career Advisor, and Project Coordinator.
- **NewU duration/team:** resume says a four-person team in an eight-week cycle; original project page says ten weeks and names four collaborators in addition to first-person authorship. Both records are retained and the discrepancy is explicitly marked for confirmation.
- **NewU on-time delivery:** 100% appears in the resume and is labeled as a resume-reported result. No sprint acceptance records were supplied.
- **NewU risk reduction:** the resume’s 15% figure is omitted from site copy because the measurement method is absent.
- **NewU Redis:** the source proposes Redis and explicitly defers optimization; the new site does not describe it as implemented.
- **NewU migration:** the archived 50% completion refers only to the profile-read migration at the time the source was written. It is not a current status.
- **AI secretary manual tests:** 80% appears in the supplied resume. Site copy identifies it as a historical report with no denominator, scenario list, or test date, not production reliability.
- **Resume builder launch:** original page says final testing and launch preparation. No later launch is assumed.
- **Movie performance:** sub-500 ms and the 20,000+ movie count from the secondary rewrite are not used as results because the reviewed original page does not substantiate them.
- **Search latency:** under 100 ms is present in the original source and is preserved as a historical self-reported measurement with no hardware, query distribution, percentiles, or benchmark logs.
- **Search complexity:** a byte-offset lookup is not described as making total search or ranking O(1).
- **Security:** the old claim that POST prevents injection is not repeated as a security guarantee. Historic Jasypt/reCAPTCHA/HTTPS descriptions do not imply a current security audit. Cookie-based state does not establish privacy protection.
- **Workforce metrics:** 909 served, 792 placements, 87% placement; 82 Health Care Academy students, 88% graduation, and 95% placement among graduates are all present in the resume. They are presented as program-level resume results, never as software-product metrics or sole individual achievements.
- **Images:** NewU/movie/pantry/search/OCR images are retained historical artifacts. The AI cover is labeled as a previous-portfolio illustration whose production-screenshot provenance is unverified. The audiobook decorative image is explicitly not evidence of a built product.

## Writing adaptations

- `profile-data-read-cost`: **One profile, many messages: the cost of keeping names current**. Derived from the NewU user-data discussion and its explicit storage alternatives. The table, simplified diagram, and pseudocode are clearly editorial explanations; neither a cache deployment nor performance improvement is invented.
- `search-with-a-file-backed-index`: **A search index that doesn’t need to fit in memory**. Derived from the archived file-storage, byte-position, and ranking description. Pseudocode is illustrative and the latency result is bounded.

Both articles carry **2026-09-06**, the date of this editorial adaptation, not a fabricated original publication date. Article and project relationships use slugs for reciprocal navigation.

## Material to add before strengthening claims

- Current availability, current project status, and preferred public location wording.
- Original source repositories and live URLs, if available.
- Exact roles and collaborator ownership for each build.
- NewU’s reconciled dates, team size, final scope, acceptance checklist, migration state, and any read-cost measurements.
- AI model/provider information, data flow/retention and permission design, evaluation inputs, manual test denominator, observed failure categories, and release state.
- Movie and search benchmark code, dataset definition, machine configuration, and timing methodology.
- Discovery artifacts: interview notes, requirement changes, rejected alternatives, and actual prioritization decisions.
- Author-written reflections on failures, tradeoffs, and what they would change.
- Original deployment screenshots with capture dates and clear ownership; current AI covers should be replaced if they cannot be verified.

Missing material uses visible English `[To confirm: …]` text in the content layer. Editorial suggestions are labeled as follow-up recommendations, not past actions.

## Maintenance contract

- Types: `src/content/types.ts`.
- Authoring: `src/content/siteContent.ts`.
- Required project sections: overview, context, problem, constraints, my-role, discovery, problem-breakdown, options-considered, key-decisions, final-solution, delivery, outcome, reflection.
- Rich content supports paragraphs, bullets, image/caption, table, code/language, diagram, and attributed quote.
- To add a project, create a typed `Project` with a unique slug and thirteen sections; set `featured` only when evidence and presentation are ready.
- To add a note, create a typed `Article`, use its actual writing/adaptation date, link real project slugs, and preserve source/editorial notes.
- Do not turn a `[To confirm]` item into a factual claim until new evidence is supplied.

Legacy source URLs initially point to the matching GitHub archive paths. Their live remote availability has not been checked; the local files listed above are the actual reviewed evidence. A deployed static copy may replace those source URLs without changing the narrative.

## Archive inclusion and ranker writing — completed September 7, 2026
All original Project-List entries are present: AI Secretary & Resume Builder, NewU InscribeX, OCR & Translate, Movie Browsing Website, Webcrawler/Indexer/Ranker, and Pantry Pal. Multi-Reader Audiobook is also retained from its standalone archived page and visibly labeled concept-only. Work now opens with all seven records; Selected remains an optional three-project filter. The homepage points to all seven without expanding into a full archive wall.

New article: `designing-a-search-ranker`, authored in `src/content/rankerArticle.ts`. It cites the original project record, transcribes the original weighting image, explains intended signals and cosine scoring, reviews negative transformed TF values, supplies a clearly labeled illustrative scorer, and proposes relevance/performance checks without inventing historical tests. Links run both ways between the article and the search project. The existing storage/indexing article remains available.

Validation: illustrative Python assertions pass; TF numerical example verified (-0.6989700043360187); full TypeScript/content/static build verification passes (7 projects, 3 articles, 15 pages). Browser checks at 360/768/1440/1920 verify all-seven default, concept label, Selected filter, article sections, no overflow, writing search and reciprocal links. No page errors. Desktop/mobile formula rendering visually reviewed.
