// Genera placeholders SVG editoriales (sin derechos) para la demo.
// Uso: npm run gen:assets
// Para adaptar a un cliente real: sustituye los .svg/.png de /public/assets
// por fotos reales con el MISMO nombre de archivo (ver CAMBIAR_DATOS_CLIENTE.md).

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'assets');
mkdirSync(OUT, { recursive: true });

// Paleta mediterránea
const PAL = {
  carbon: '#1A1A18',
  carbon2: '#26241F',
  crema: '#F5EFE6',
  terracota: '#C1440E',
  terracota2: '#E0683A',
  oliva: '#6B7340',
  arena: '#C9A86A'
};

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Un placeholder = degradado cálido + glow + textura (turbulencia) + blobs suaves
// + tratamiento tipográfico editorial (eyebrow + título serif).
function svg({
  w,
  h,
  bg = PAL.carbon,
  bg2 = PAL.carbon2,
  glow = PAL.terracota,
  ink = PAL.crema,
  eyebrow = '',
  title = '',
  dark = true,
  id = 'p'
}) {
  const fontTitle = Math.round(Math.min(w, h) * (title.length > 14 ? 0.085 : 0.11));
  const fontEye = Math.round(Math.min(w, h) * 0.032);
  const blob = (cx, cy, r, c, o) =>
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}" opacity="${o}" filter="url(#soft-${id})"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title || 'placeholder')}">
  <defs>
    <linearGradient id="grad-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
    <radialGradient id="glow-${id}" cx="0.7" cy="0.3" r="0.9">
      <stop offset="0" stop-color="${glow}" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="${glow}" stop-opacity="0.12"/>
      <stop offset="1" stop-color="${glow}" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft-${id}"><feGaussianBlur stdDeviation="${Math.round(Math.min(w, h) * 0.07)}"/></filter>
    <filter id="noise-${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="${dark ? 0.06 : 0.05}"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#grad-${id})"/>
  ${blob(w * 0.78, h * 0.28, Math.min(w, h) * 0.32, glow, 0.5)}
  ${blob(w * 0.2, h * 0.82, Math.min(w, h) * 0.28, PAL.oliva, 0.28)}
  ${blob(w * 0.5, h * 0.5, Math.min(w, h) * 0.22, PAL.arena, 0.18)}
  <rect width="${w}" height="${h}" fill="url(#glow-${id})"/>
  <rect width="${w}" height="${h}" filter="url(#noise-${id})" opacity="0.7"/>
  <rect x="${w * 0.04}" y="${h * 0.04}" width="${w * 0.92}" height="${h * 0.92}" fill="none" stroke="${ink}" stroke-opacity="0.18" stroke-width="${Math.max(1, Math.round(w * 0.0015))}"/>
  ${
    title
      ? `<g text-anchor="middle" font-family="Georgia, 'Times New Roman', serif">
    ${eyebrow ? `<text x="${w / 2}" y="${h / 2 - fontTitle * 0.7}" font-family="Arial, Helvetica, sans-serif" font-size="${fontEye}" letter-spacing="${fontEye * 0.25}" fill="${ink}" fill-opacity="0.7">${esc(eyebrow.toUpperCase())}</text>` : ''}
    <text x="${w / 2}" y="${h / 2 + fontTitle * 0.35}" font-size="${fontTitle}" font-style="italic" fill="${ink}">${esc(title)}</text>
  </g>`
      : ''
  }
</svg>`;
}

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="64" viewBox="0 0 240 64" role="img" aria-label="Sal Marina">
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="0" y="30" font-size="26" font-style="italic" fill="${PAL.crema}">Sal</text>
    <text x="52" y="30" font-size="26" fill="${PAL.terracota2}">Marina</text>
    <line x1="0" y1="42" x2="168" y2="42" stroke="${PAL.arena}" stroke-width="1.2"/>
    <text x="0" y="58" font-family="Arial, Helvetica, sans-serif" font-size="9.5" letter-spacing="4" fill="${PAL.crema}" fill-opacity="0.75">COCINA MEDITERRANEA</text>
  </g>
</svg>`;
}

const files = {
  'logo.svg': logoSvg(),
  'hero-restaurante.svg': svg({
    w: 1600, h: 1000, id: 'hero', bg: '#15140F', bg2: '#2A2118', glow: PAL.terracota,
    eyebrow: 'Frente al mar · desde 1998', title: 'Sal Marina'
  }),
  'og-image.svg': svg({
    w: 1200, h: 630, id: 'og', bg: '#15140F', bg2: '#2A2118', glow: PAL.terracota,
    eyebrow: 'Cocina mediterranea', title: 'Sal Marina'
  }),
  'sobre-nosotros.svg': svg({
    w: 1000, h: 1200, id: 'sobre', bg: PAL.carbon, bg2: '#322B22', glow: PAL.oliva,
    eyebrow: 'Nuestra historia', title: 'A fuego lento'
  }),
  'plato-pescado-brasa.svg': svg({ w: 900, h: 900, id: 'd1', glow: PAL.terracota, eyebrow: 'A la brasa', title: 'Pescado del dia' }),
  'plato-arroz-marisco.svg': svg({ w: 900, h: 900, id: 'd2', glow: PAL.arena, eyebrow: 'En paellera', title: 'Arroz de marisco' }),
  'plato-verduras-temporada.svg': svg({ w: 900, h: 900, id: 'd3', glow: PAL.oliva, eyebrow: 'De la huerta', title: 'Verduras de temporada' }),
  'plato-postre-casero.svg': svg({ w: 900, h: 900, id: 'd4', glow: PAL.terracota2, eyebrow: 'Hecho en casa', title: 'Postre del chef' }),
  'galeria-01.svg': svg({ w: 900, h: 1100, id: 'g1', glow: PAL.terracota, eyebrow: 'Sala', title: 'Ambiente' }),
  'galeria-02.svg': svg({ w: 1100, h: 800, id: 'g2', glow: PAL.arena, eyebrow: 'Terraza', title: 'Atardecer' }),
  'galeria-03.svg': svg({ w: 900, h: 900, id: 'g3', glow: PAL.oliva, eyebrow: 'Cocina', title: 'Producto' }),
  'galeria-04.svg': svg({ w: 900, h: 900, id: 'g4', glow: PAL.terracota2, eyebrow: 'Detalle', title: 'Mesa puesta' }),
  'galeria-05.svg': svg({ w: 1100, h: 800, id: 'g5', glow: PAL.arena, eyebrow: 'Barra', title: 'Vinos' }),
  'galeria-06.svg': svg({ w: 900, h: 1100, id: 'g6', glow: PAL.terracota, eyebrow: 'Equipo', title: 'En la brasa' })
};

for (const [name, content] of Object.entries(files)) {
  writeFileSync(join(OUT, name), content, 'utf8');
  console.log('  ✓', name);
}
console.log(`\n${Object.keys(files).length} placeholders generados en public/assets/`);
