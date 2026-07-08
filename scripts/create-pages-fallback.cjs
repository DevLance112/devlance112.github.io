const fs = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const distDir = path.resolve(__dirname, "../dist");
  await fs.copyFile(path.join(distDir, "index.html"), path.join(distDir, "404.html"));
  console.log("Created dist/404.html for GitHub Pages history fallback.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
