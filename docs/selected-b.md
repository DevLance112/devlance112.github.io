# Selected B — attention refinement

B is selected. The design keeps its charcoal/green palette, restrained monospace labels and problem/decision/delivery framing, with fewer simultaneously competing elements.

## Reduced
- Removed hero side rail, decorative node map, duplicated focus status and blocking opening curtain.
- One primary hero action. A single featured case precedes the other two selected projects.
- Repeated project headers/metadata replaced with contextual detail on real case pages.
- Home capabilities/experience grids reduced to one concise approach section and an About link.
- Mobile article TOC starts collapsed. Reading paragraphs/images remain stable.
- Design Lab switcher moved out of B's header into a footer disclosure. Other directions remain accessible.

## Formal pages
Home, Work, Writing, About, Contact, seven project details, two article details and real 404. Existing sourced content and provenance preserved. Routes use React Router and static prerendering; ten legacy redirects and five non-indexed lab route files retained. No deployment performed.

## Validation
Full TypeScript and content validation pass. Production build and static verifier pass: 14 content pages, complete sections, unique metadata, local resources, redirects and 404. Edge browser: 56 page/width combinations (360/768/1440/1920), no horizontal overflow or page errors. Work filters, note search/empty result, keyboard disclosures, mobile TOC and anchors, loaded lazy image, and all five lab routes checked. Current source still contains explicit factual confirmation items; no independent validation of career claims or release status is implied.

Run: pnpm dev; pnpm build. Current complete production preview: http://127.0.0.1:4174/ . Existing B preview refreshed at http://127.0.0.1:4173/design-lab/systems .
