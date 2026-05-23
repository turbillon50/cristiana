import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const out = resolve(root, 'public', 'icons');
mkdirSync(out, { recursive: true });

const svg = readFileSync(resolve(out, 'icon.svg'));

const maskableSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#635bff"/>
      <stop offset="55%" stop-color="#c3c0ff"/>
      <stop offset="100%" stop-color="#ffb68f"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <g transform="translate(106,106) scale(0.6)">
    <circle cx="256" cy="256" r="170" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
    <circle cx="256" cy="256" r="130" fill="rgba(255,255,255,0.12)"/>
    <text x="50%" y="54%" text-anchor="middle" font-family="Georgia, serif" font-size="200" font-weight="400" fill="#ffffff" dominant-baseline="middle" letter-spacing="-6">12</text>
    <text x="50%" y="78%" text-anchor="middle" font-family="system-ui, sans-serif" font-size="34" font-weight="700" fill="rgba(255,255,255,0.92)" letter-spacing="6">COMUNIDAD</text>
  </g>
</svg>`;

const targets = [
  { name: 'icon-192.png', size: 192, source: svg },
  { name: 'icon-512.png', size: 512, source: svg },
  { name: 'icon-maskable-192.png', size: 192, source: Buffer.from(maskableSvg) },
  { name: 'icon-maskable-512.png', size: 512, source: Buffer.from(maskableSvg) },
  { name: 'apple-touch-icon.png', size: 180, source: svg },
  { name: 'favicon-32.png', size: 32, source: svg },
  { name: 'favicon-16.png', size: 16, source: svg },
  { name: 'og-image.png', size: 1200, source: svg, height: 630 },
];

for (const t of targets) {
  const pipeline = sharp(t.source, { density: 384 }).resize(t.size, t.height || t.size, {
    fit: 'contain',
    background: { r: 252, g: 248, b: 255, alpha: 1 },
  });
  await pipeline.png({ compressionLevel: 9 }).toFile(resolve(out, t.name));
  console.log('wrote', t.name);
}
