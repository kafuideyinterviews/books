/**
 * Regenerates favicons / PWA icons from public/icons/favicon.png
 * Zooms the circular badge so the KD mark reads larger in browser tabs.
 * Run: node scripts/generate-icons.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico").default || require("png-to-ico");

const root = path.join(__dirname, "..");
const sourcePath = path.join(root, "public", "icons", "favicon.png");
const iconsDir = path.join(root, "public", "icons");
const appDir = path.join(root, "app");

/**
 * @param {number} size
 * @param {{ zoom?: number; pad?: number }} opts
 * zoom > 1 crops into the center (bigger badge). pad adds black safe-zone (maskable).
 */
async function squareIcon(size, opts = {}) {
  const zoom = opts.zoom ?? 1.28;
  const pad = Math.max(0, Math.round(size * (opts.pad ?? 0)));
  const inner = size - pad * 2;

  const meta = await sharp(sourcePath).metadata();
  const w = meta.width;
  const h = meta.height;
  const side = Math.min(w, h);
  const crop = Math.round(side / zoom);
  const left = Math.round((w - crop) / 2);
  const top = Math.round((h - crop) / 2);

  let img = sharp(sourcePath)
    .extract({ left, top, width: crop, height: crop })
    .resize(inner, inner, {
      fit: "cover",
      kernel: sharp.kernel.lanczos3,
    });

  if (pad > 0) {
    img = img.extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    });
  }

  return img.png().toBuffer();
}

async function write(file, buffer) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, buffer);
  console.log("wrote", path.relative(root, file));
}

async function main() {
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing source icon: ${sourcePath}`);
  }

  // Stronger zoom on tiny tab icons so KD fills the slot
  const fav16 = await squareIcon(16, { zoom: 1.45 });
  const fav32 = await squareIcon(32, { zoom: 1.4 });
  const fav48 = await squareIcon(48, { zoom: 1.35 });
  const fav64 = await squareIcon(64, { zoom: 1.32 });

  const icon192 = await squareIcon(192, { zoom: 1.28 });
  const icon512 = await squareIcon(512, { zoom: 1.28 });
  const mask192 = await squareIcon(192, { zoom: 1.2, pad: 0.1 });
  const mask512 = await squareIcon(512, { zoom: 1.2, pad: 0.1 });
  const apple = await squareIcon(180, { zoom: 1.28 });
  const appIcon = await squareIcon(512, { zoom: 1.28 });

  await write(path.join(iconsDir, "favicon-16.png"), fav16);
  await write(path.join(iconsDir, "favicon-32.png"), fav32);
  await write(path.join(iconsDir, "favicon-48.png"), fav48);
  await write(path.join(iconsDir, "favicon-64.png"), fav64);
  await write(path.join(iconsDir, "icon-192.png"), icon192);
  await write(path.join(iconsDir, "icon-512.png"), icon512);
  await write(path.join(iconsDir, "icon-192-maskable.png"), mask192);
  await write(path.join(iconsDir, "icon-512-maskable.png"), mask512);
  await write(path.join(iconsDir, "apple-touch-icon.png"), apple);
  await write(path.join(iconsDir, "icon.png"), appIcon);

  await write(path.join(appDir, "icon.png"), appIcon);
  await write(path.join(appDir, "apple-icon.png"), apple);

  // Multi-size ICO — browsers pick the largest they can use
  const ico = await pngToIco([fav16, fav32, fav48, fav64]);
  await write(path.join(appDir, "favicon.ico"), ico);

  const publicFav = path.join(root, "public", "favicon.ico");
  if (fs.existsSync(publicFav)) {
    fs.unlinkSync(publicFav);
    console.log("removed public/favicon.ico");
  }

  console.log("done — zoomed favicon from public/icons/favicon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
