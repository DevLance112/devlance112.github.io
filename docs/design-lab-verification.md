# Design Lab verification

- `node scripts/build-lab.mjs`: PASS; five physical route entries in dist-lab.
- `node node_modules/typescript/bin/tsc --noEmit -p tsconfig.lab.json`: PASS.
- Production browser: installed Microsoft Edge through Playwright, local port 4173.
- Four demos × 360, 768, 1440, 1920px: 16/16 viewport/scroll-width matches; same exact h1 in all versions.
- Production pageerror collection: empty.
- All four project disclosures: open by click and keyboard Enter.
- All four article previews: open by click/keyboard; Escape closes; focus returns to trigger.
- Systems case tabs: correct panel after selection; roving tabIndex and arrow/Home/End support implemented.
- Reduced Motion: opening curtain hidden; animation creation skipped; smooth scroll disabled.
- Design Lab at 360px: scrollWidth 360; direction navigation and browser back work.
- Visual review: 1440px desktop heroes, 360px heroes and case reading, comparison desktop preview grid. Screenshot captures in tmp/design-lab; raw width/error results in tmp/design-lab/qa.json.
- Original homepage tested at 1440/360px, mobile Contact visibly clipped; audit distinguishes visual clipping from scroll-width pass.

No live deployment, Lighthouse score, Safari/iOS physical-device test or complete final-site build is claimed. The existing general SSR entry references absent App.tsx; this pre-existing incomplete pipeline is outside the isolated lab delivery. Use build:lab for this deliverable.
