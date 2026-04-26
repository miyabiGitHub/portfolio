/**
 * SVGからOGP用PNG画像を生成するスクリプト
 * 実行: node scripts/generate-og-image.mjs
 *
 * 前提: sharp をインストールしていること
 *   npm install --save-dev sharp
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

async function generateOgImage() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn(
      "⚠️  sharp がインストールされていません。\n" +
      "   npm install --save-dev sharp を実行してから再度お試しください。\n" +
      "   SVG のまま使用することもできます。"
    );
    process.exit(0);
  }

  const svgPath = resolve(root, "public", "og-image.svg");
  const pngPath = resolve(root, "public", "og-image.png");

  const svgBuffer = readFileSync(svgPath);

  await sharp(svgBuffer)
    .resize(1200, 630)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(pngPath);

  console.log("✅ OGP画像を生成しました: public/og-image.png (1200x630px)");
}

generateOgImage().catch(console.error);
