import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#171a18"/>
  <path d="M66 134H1134M66 545H1134" stroke="#444a44"/>
  <circle cx="78" cy="84" r="8" fill="#c4e691"/>
  <text x="100" y="96" font-family="Arial, sans-serif" font-size="35" fill="#edece5">Lance Li</text>
  <text x="1132" y="92" text-anchor="end" font-family="Consolas, monospace" font-size="18" fill="#c4e691">ENGINEERING · PRODUCT · DELIVERY</text>
  <text x="62" y="269" font-family="Arial, sans-serif" font-size="80" font-weight="600" letter-spacing="-3" fill="#edece5">From ambiguity</text>
  <text x="62" y="365" font-family="Arial, sans-serif" font-size="80" font-weight="600" letter-spacing="-3" fill="#c4e691">to working systems.</text>
  <text x="66" y="449" font-family="Arial, sans-serif" font-size="27" fill="#b0b5ad">Full-stack engineering. AI applications. Real-world delivery.</text>
  <text x="66" y="586" font-family="Consolas, monospace" font-size="18" fill="#b0b5ad">CASE STUDIES / FIELD NOTES</text>
  <text x="1134" y="586" text-anchor="end" font-family="Consolas, monospace" font-size="18" fill="#b0b5ad">devlance112.github.io</text>
</svg>`;
await writeFile('public/assets/social-card.svg', svg);
await sharp(Buffer.from(svg)).png().toFile('public/assets/social-card.png');
console.log('Generated 1200 × 630 Open Graph card.');
