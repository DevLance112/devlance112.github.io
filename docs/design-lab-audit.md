# Portfolio audit — 2026-09-06

## Scope and evidence
Read the supplied resume PDF, current App.jsx/styles.css, existing content layer and archived NewU/AI project records. Inspected the actual local homepage at 1440px and 360px after fixing its missing entry reference. No external references were supplied. Existing uncommitted changes are preserved; this delivery adds an isolated Design Lab, not a final website.

## Findings
1. Identity: current homepage lists Project Management / Administrative / AI Application / Full-Stack. This describes categories rather than a coherent responsibility. Resume supports engineering, coordination and operations; FDE is the requested positioning, not a historical title.
2. Ten-second test: large name is memorable, but concrete work is behind “Enter portfolio.” Remove that extra step in the demos; put a clear value proposition and selected evidence together.
3. Order: portal → portfolio → project adds friction. Current homepage cannot show the problem/decision/result sequence without another navigation.
4. Narrative: archives contain genuine detail, especially NewU’s profile storage decision. The underlying content is stronger than the summary presentation. Do not dismiss all old content as superficial.
5. Visuals: the dark palette, fine rules and spacing already have value. Large decorative technical background, very heavy labels, repeated role strings and unverified cover illustrations dilute that strength. A design is not proof of implementation.
6. Motion: current GSAP code provides reveals and opening behavior, but its large-name entrance spends attention before introducing a problem. Demo motion reveals positioning, evidence and chapters instead.
7. Mobile: at 360px, Contact in the top navigation is visibly clipped even though document scrollWidth equals viewport width. Overflow checks alone are insufficient. Demo navigation wraps explicitly.
8. Accessibility: source shows several images lacking lazy loading and generic captions. Demo artifacts receive meaningful alt/captions; native disclosures and modal dialogs support keyboard use; reduced motion bypasses opening and scroll motion.
9. Runtime: index.html referenced absent main.tsx, yielding a blank page. Corrected reference to existing main.jsx. Existing SSR entry also imports absent App.tsx. Its unfinished production pipeline is preserved; a separate build:lab pipeline provides a verifiable production demo build without creating final pages.
10. SEO/performance: existing metadata is useful but does not establish working prerendering; the missing SSR entry prevents that pipeline. Demo routes have noindex and dedicated titles, lazy project imagery and a separately loaded lab bundle. Full production SEO remains for the selected design.

## Content disposition
| Action | Material | Treatment |
|---|---|---|
| Keep | Original resume, HTML, NewU interface/database artifacts, genuine project decisions, contacts | Preserve originals; use clear source boundaries |
| Rewrite | Parallel role labels, broad product claims, hero summary | One value proposition; explicit role, problem, constraint, decision, outcome |
| Restructure | Project wall, experience metrics, article material | Case dossiers, work records, attributed program outcomes, editorial notes |
| Remove from proposed layouts | Entry gate, decorative hero grid, repetitive labels, unsupported metric emphasis | Originals remain untouched; omit these elements from demos |

## Positioning and shared baseline
Lance Li — Full-stack Engineer · Product & Project Delivery.
“I turn ambiguous, real-world problems into working products and systems.”
FDE-oriented practice connects sponsor needs, product choices, full-stack implementation and delivery. It is not represented as a past job title.

All four demos import src/lab/content.ts, which selects from src/content/siteContent.ts: NewU InscribeX, AI Secretary & Resume Builder, Movie Browsing Website; identical roles/stacks, bio, four evidence-linked capabilities, two editorial article adaptations, four employment records and email/GitHub/LinkedIn. NewU is the featured case in all directions. Article previews are dated editorial adaptations, not invented historical posts.

## Missing evidence
NewU team size and duration conflict; final release status, individual implementation ownership and read-cost results need confirmation. Redis was deferred. AI testing figures are historical self-reports, not production reliability. Current availability, project release links, original screenshots for AI, discovery findings, rejected technical options and personal reflection need supplying before final publication. No customers, metrics or team contributions are invented.
