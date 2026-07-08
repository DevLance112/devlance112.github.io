const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const outDir = path.resolve(__dirname, "../public/assets");

const palette = {
  bg: "#050505",
  panel: "#111411",
  ink: "#f6f2e8",
  muted: "#8e8a80",
  cyan: "#78d9d5",
  green: "#8ab47c",
  amber: "#d8aa68",
  red: "#d95f53",
};

function svgRoot(width, height, content) {
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cyanLine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.cyan}" stop-opacity="0.88"/>
      <stop offset="1" stop-color="${palette.green}" stop-opacity="0.42"/>
    </linearGradient>
    <linearGradient id="warmLine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.amber}" stop-opacity="0.78"/>
      <stop offset="1" stop-color="${palette.red}" stop-opacity="0.36"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#202824"/>
      <stop offset="0.48" stop-color="#0d0f0e"/>
      <stop offset="1" stop-color="#3b3429"/>
    </linearGradient>
    <filter id="softNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.09"/>
      </feComponentTransfer>
    </filter>
    <pattern id="grid" width="84" height="84" patternUnits="userSpaceOnUse">
      <path d="M84 0H0V84" fill="none" stroke="#f6f2e8" stroke-opacity="0.075" stroke-width="1"/>
    </pattern>
    <pattern id="tightGrid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M36 0H0V36" fill="none" stroke="#78d9d5" stroke-opacity="0.085" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="${palette.bg}"/>
  ${content}
  <rect width="${width}" height="${height}" filter="url(#softNoise)" opacity="0.45"/>
</svg>`;
}

async function render(name, width, height, content) {
  const svg = svgRoot(width, height, content);
  await sharp(Buffer.from(svg)).png({ quality: 92, compressionLevel: 9 }).toFile(path.join(outDir, name));
}

function smallText(text, x, y, size = 34, color = palette.muted, anchor = "start") {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="700" fill="${color}">${text}</text>`;
}

function gridMarks(width, height, step = 180) {
  const marks = [];
  for (let x = step; x < width; x += step) {
    marks.push(`<path d="M${x} 0V${height}" stroke="#f6f2e8" stroke-opacity="0.035"/>`);
  }
  for (let y = step; y < height; y += step) {
    marks.push(`<path d="M0 ${y}H${width}" stroke="#f6f2e8" stroke-opacity="0.035"/>`);
  }
  return marks.join("");
}

function projectCover({ title, eyebrow, accent, index, pattern }) {
  const accentColor = accent || palette.cyan;
  return `
    <rect width="1600" height="1000" fill="#070807"/>
    <rect width="1600" height="1000" fill="url(#grid)" opacity="0.52"/>
    <path d="M-80 820L410 190L770 420L1110 80L1720 250L1720 1080H-80Z" fill="url(#metal)" opacity="0.92"/>
    <path d="M88 796C362 702 496 528 680 476C918 410 1046 560 1512 328" fill="none" stroke="${accentColor}" stroke-opacity="0.76" stroke-width="4"/>
    <path d="M102 826C382 746 520 590 720 538C960 476 1106 612 1502 442" fill="none" stroke="${palette.amber}" stroke-opacity="0.34" stroke-width="2"/>
    <g transform="translate(1010 192)" opacity="0.92">
      ${pattern}
    </g>
    <rect x="64" y="64" width="1472" height="872" rx="18" fill="none" stroke="#f6f2e8" stroke-opacity="0.16"/>
    <text x="96" y="152" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="${accentColor}">${eyebrow}</text>
    <text x="96" y="744" font-family="Inter, Arial, sans-serif" font-size="118" font-weight="800" fill="${palette.ink}">${title}</text>
    <text x="96" y="820" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" fill="${palette.muted}">LANCE LI / SELECTED WORK ${index}</text>
  `;
}

const patterns = {
  voice: `
    <rect x="0" y="0" width="350" height="350" rx="28" fill="#0d1110" stroke="#f6f2e8" stroke-opacity="0.18"/>
    <path d="M74 178C98 96 246 96 270 178" fill="none" stroke="${palette.cyan}" stroke-width="8" stroke-linecap="round"/>
    <path d="M96 206C132 254 212 254 248 206" fill="none" stroke="${palette.green}" stroke-width="8" stroke-linecap="round"/>
    <path d="M174 112V246" stroke="${palette.ink}" stroke-opacity="0.58" stroke-width="7" stroke-linecap="round"/>
    <path d="M132 152V218M216 152V218" stroke="${palette.amber}" stroke-opacity="0.76" stroke-width="6" stroke-linecap="round"/>
  `,
  resume: `
    <rect x="0" y="0" width="360" height="430" rx="24" fill="#0d1110" stroke="#f6f2e8" stroke-opacity="0.18"/>
    <rect x="46" y="62" width="188" height="18" fill="${palette.ink}" opacity="0.78"/>
    <rect x="46" y="118" width="268" height="10" fill="${palette.cyan}" opacity="0.72"/>
    <rect x="46" y="158" width="238" height="10" fill="${palette.muted}" opacity="0.7"/>
    <rect x="46" y="198" width="268" height="10" fill="${palette.muted}" opacity="0.7"/>
    <path d="M58 304L128 246L198 280L302 188" fill="none" stroke="${palette.amber}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="46" y="338" width="268" height="42" rx="8" fill="${palette.cyan}" opacity="0.16"/>
  `,
  academy: `
    <rect x="0" y="0" width="410" height="330" rx="28" fill="#0d1110" stroke="#f6f2e8" stroke-opacity="0.18"/>
    <path d="M74 244H336" stroke="${palette.ink}" stroke-opacity="0.5" stroke-width="10" stroke-linecap="round"/>
    <path d="M96 246V146L198 84L314 146V246" fill="none" stroke="${palette.green}" stroke-width="9" stroke-linejoin="round"/>
    <path d="M138 246V184H272V246" fill="none" stroke="${palette.cyan}" stroke-width="8"/>
    <path d="M138 184H272" stroke="${palette.amber}" stroke-width="8"/>
    <path d="M204 112V246" stroke="${palette.ink}" stroke-opacity="0.5" stroke-width="5"/>
  `,
  sprint: `
    <rect x="0" y="0" width="430" height="330" rx="28" fill="#0d1110" stroke="#f6f2e8" stroke-opacity="0.18"/>
    <path d="M72 244L160 104L252 228L348 82" fill="none" stroke="${palette.red}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M72 248H356" stroke="${palette.ink}" stroke-opacity="0.45" stroke-width="7" stroke-linecap="round"/>
    <rect x="78" y="74" width="68" height="38" rx="8" fill="${palette.cyan}" opacity="0.28"/>
    <rect x="178" y="260" width="78" height="38" rx="8" fill="${palette.amber}" opacity="0.28"/>
    <rect x="284" y="130" width="72" height="38" rx="8" fill="${palette.green}" opacity="0.28"/>
  `,
};

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  await render(
    "hero-lance.png",
    2400,
    1500,
    `
      <rect width="2400" height="1500" fill="#050505"/>
      <rect width="2400" height="1500" fill="url(#grid)" opacity="0.46"/>
      ${gridMarks(2400, 1500, 240)}
      <path d="M908 1390L1514 94L1918 112L1270 1508Z" fill="url(#metal)" opacity="0.9"/>
      <path d="M1352 1500L1860 436L2178 508L1728 1500Z" fill="#121611" opacity="0.78"/>
      <path d="M928 1128C1148 854 1326 516 1516 122" fill="none" stroke="${palette.cyan}" stroke-opacity="0.86" stroke-width="8"/>
      <path d="M1262 1286C1426 1014 1590 710 1838 448" fill="none" stroke="${palette.amber}" stroke-opacity="0.62" stroke-width="5"/>
      <path d="M1480 164L2040 340L2196 706" fill="none" stroke="${palette.green}" stroke-opacity="0.34" stroke-width="3"/>
      <g opacity="0.8">
        <rect x="1540" y="258" width="460" height="286" rx="18" fill="#0a0c0b" stroke="#f6f2e8" stroke-opacity="0.14"/>
        <rect x="1594" y="324" width="292" height="12" fill="${palette.ink}" opacity="0.58"/>
        <rect x="1594" y="374" width="350" height="10" fill="${palette.cyan}" opacity="0.5"/>
        <rect x="1594" y="420" width="196" height="10" fill="${palette.amber}" opacity="0.5"/>
        <path d="M1600 486H1940" stroke="#f6f2e8" stroke-opacity="0.18"/>
      </g>
      <g opacity="0.54">
        ${smallText("VISUAL", 1540, 760, 50, palette.ink)}
        ${smallText("AI DESIGN", 1540, 832, 50, palette.cyan)}
        ${smallText("BRAND SYSTEM", 1540, 904, 50, palette.amber)}
      </g>
      <path d="M0 1160C420 1028 668 1094 1018 942C1270 832 1490 642 1868 638C2088 636 2252 696 2400 756V1500H0Z" fill="#050505" opacity="0.62"/>
    `
  );

  await render(
    "avatar-lance.png",
    1000,
    1200,
    `
      <rect width="1000" height="1200" fill="#080908"/>
      <rect width="1000" height="1200" fill="url(#tightGrid)" opacity="0.42"/>
      <path d="M170 1030L312 478L484 294L650 466L826 1030Z" fill="url(#metal)" opacity="0.95"/>
      <path d="M330 424C368 302 612 302 650 424C686 544 624 672 492 672C360 672 294 544 330 424Z" fill="#151b18"/>
      <path d="M312 846C372 738 430 704 500 704C570 704 626 738 690 846L756 1102H244Z" fill="#101310"/>
      <path d="M214 1036C360 948 460 904 608 922C710 934 784 982 854 1044" fill="none" stroke="${palette.cyan}" stroke-opacity="0.8" stroke-width="7"/>
      <path d="M300 346C382 238 604 232 700 354" fill="none" stroke="${palette.amber}" stroke-opacity="0.64" stroke-width="5"/>
      <rect x="62" y="62" width="876" height="1076" rx="22" fill="none" stroke="#f6f2e8" stroke-opacity="0.16"/>
      <text x="84" y="130" font-family="Inter, Arial, sans-serif" font-size="44" font-weight="800" fill="${palette.cyan}">LANCE LI</text>
      <text x="84" y="188" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="${palette.muted}">VISUAL / AI / BRAND</text>
      <text x="500" y="1092" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="132" font-weight="800" fill="${palette.ink}" opacity="0.9">LL</text>
    `
  );

  await render(
    "motion-still.png",
    1100,
    1480,
    `
      <rect width="1100" height="1480" fill="#070807"/>
      <rect width="1100" height="1480" fill="url(#grid)" opacity="0.52"/>
      <path d="M80 1100C270 780 360 536 612 380C784 274 942 258 1120 208V1480H80Z" fill="url(#metal)" opacity="0.88"/>
      <g transform="translate(112 128)">
        <rect width="876" height="214" rx="20" fill="#0c100e" stroke="#f6f2e8" stroke-opacity="0.16"/>
        <rect x="42" y="54" width="270" height="18" fill="${palette.ink}" opacity="0.72"/>
        <rect x="42" y="104" width="520" height="12" fill="${palette.cyan}" opacity="0.64"/>
        <rect x="42" y="146" width="390" height="12" fill="${palette.muted}" opacity="0.7"/>
      </g>
      <g transform="translate(112 420)">
        <rect width="876" height="420" rx="20" fill="#0c100e" stroke="#f6f2e8" stroke-opacity="0.16"/>
        <path d="M56 310C178 212 240 248 342 168C442 90 520 134 606 174C702 220 748 166 820 98" fill="none" stroke="${palette.cyan}" stroke-width="7" stroke-linecap="round"/>
        <path d="M56 344H822" stroke="#f6f2e8" stroke-opacity="0.16"/>
        <path d="M56 258H822" stroke="#f6f2e8" stroke-opacity="0.1"/>
        <path d="M56 172H822" stroke="#f6f2e8" stroke-opacity="0.1"/>
      </g>
      <g transform="translate(112 930)">
        <rect width="260" height="300" rx="18" fill="#0c100e" stroke="${palette.amber}" stroke-opacity="0.28"/>
        <rect x="52" y="66" width="156" height="14" fill="${palette.amber}" opacity="0.74"/>
        <rect x="52" y="126" width="116" height="116" rx="12" fill="${palette.amber}" opacity="0.12"/>
      </g>
      <g transform="translate(420 930)">
        <rect width="568" height="300" rx="18" fill="#0c100e" stroke="${palette.cyan}" stroke-opacity="0.28"/>
        <rect x="48" y="64" width="320" height="14" fill="${palette.ink}" opacity="0.72"/>
        <rect x="48" y="122" width="456" height="12" fill="${palette.cyan}" opacity="0.58"/>
        <rect x="48" y="172" width="388" height="12" fill="${palette.green}" opacity="0.48"/>
        <rect x="48" y="222" width="280" height="12" fill="${palette.muted}" opacity="0.7"/>
      </g>
    `
  );

  await render(
    "project-ai-secretary.png",
    1600,
    1000,
    projectCover({
      title: "AI Secretary",
      eyebrow: "VOICE / CALENDAR / TRUST",
      accent: palette.cyan,
      index: "01",
      pattern: patterns.voice,
    })
  );

  await render(
    "project-resume-builder.png",
    1600,
    1000,
    projectCover({
      title: "Resume Builder",
      eyebrow: "AI CAREER SYSTEM",
      accent: palette.amber,
      index: "02",
      pattern: patterns.resume,
    })
  );

  await render(
    "project-healthcare-academy.png",
    1600,
    1000,
    projectCover({
      title: "Health Academy",
      eyebrow: "SERVICE EXPERIENCE",
      accent: palette.green,
      index: "03",
      pattern: patterns.academy,
    })
  );

  await render(
    "project-inscribex.png",
    1600,
    1000,
    projectCover({
      title: "InscribeX",
      eyebrow: "PRODUCT SPRINT",
      accent: palette.red,
      index: "04",
      pattern: patterns.sprint,
    })
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
