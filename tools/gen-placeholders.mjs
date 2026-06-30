// Genera placeholders SVG ATMOSFÉRICOS (sin derechos, sin texto incrustado).
// Buscan parecer fotografía real: luz cálida, sombras, grano y viñeta.
// Uso: npm run gen:assets
// Para un cliente real: sustituye los .svg por fotos reales con el MISMO nombre.

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'assets');
mkdirSync(OUT, { recursive: true });

// Escena = base oscura/clara + 2-3 focos de luz de color + viñeta + grano.
// `lights`: [{x,y,r,color,op}] focos difusos (simulan luz/comida/ambiente).
function scene({ w, h, id, base, base2, lights = [], vignette = 0.55, grain = 0.05, caption = '' }) {
  const blur = Math.round(Math.min(w, h) * 0.09);
  const lightEls = lights
    .map(
      (l, i) =>
        `<circle cx="${w * l.x}" cy="${h * l.y}" r="${Math.min(w, h) * l.r}" fill="${l.color}" opacity="${l.op}" filter="url(#blur-${id})"/>`
    )
    .join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${caption || 'Sal Marina'}">
  <defs>
    <linearGradient id="base-${id}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${base}"/>
      <stop offset="1" stop-color="${base2}"/>
    </linearGradient>
    <radialGradient id="vig-${id}" cx="0.5" cy="0.42" r="0.75">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="${vignette}"/>
    </radialGradient>
    <filter id="blur-${id}"><feGaussianBlur stdDeviation="${blur}"/></filter>
    <filter id="grain-${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="${grain}"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#base-${id})"/>
  ${lightEls}
  <rect width="${w}" height="${h}" fill="url(#vig-${id})"/>
  <rect width="${w}" height="${h}" filter="url(#grain-${id})" opacity="0.6"/>
</svg>`;
}

// Plato: superficie de mesa + "plato" circular con luz cenital + comida difusa.
function plato({ id, surface, surface2, plate, food, accent }) {
  const w = 900,
    h = 900;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Plato Sal Marina">
  <defs>
    <radialGradient id="srf-${id}" cx="0.5" cy="0.35" r="0.85">
      <stop offset="0" stop-color="${surface}"/>
      <stop offset="1" stop-color="${surface2}"/>
    </radialGradient>
    <radialGradient id="plt-${id}" cx="0.45" cy="0.4" r="0.6">
      <stop offset="0" stop-color="${plate}"/>
      <stop offset="0.78" stop-color="${plate}"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.25"/>
    </radialGradient>
    <filter id="b-${id}"><feGaussianBlur stdDeviation="34"/></filter>
    <filter id="g-${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#srf-${id})"/>
  <circle cx="${w * 0.5}" cy="${h * 0.5}" r="${w * 0.36}" fill="#000" opacity="0.18" filter="url(#b-${id})"/>
  <circle cx="${w * 0.5}" cy="${h * 0.48}" r="${w * 0.34}" fill="url(#plt-${id})"/>
  <circle cx="${w * 0.46}" cy="${h * 0.46}" r="${w * 0.17}" fill="${food}" opacity="0.85" filter="url(#b-${id})"/>
  <circle cx="${w * 0.58}" cy="${h * 0.54}" r="${w * 0.1}" fill="${accent}" opacity="0.8" filter="url(#b-${id})"/>
  <circle cx="${w * 0.52}" cy="${h * 0.42}" r="${w * 0.06}" fill="#fff" opacity="0.12" filter="url(#b-${id})"/>
  <rect width="${w}" height="${h}" filter="url(#g-${id})" opacity="0.6"/>
</svg>`;
}

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="70" viewBox="0 0 260 70" role="img" aria-label="Sal Marina">
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="0" y="34" font-size="30" font-style="italic" fill="#f4ece0">Sal Marina</text>
    <line x1="2" y1="46" x2="198" y2="46" stroke="#c2a35f" stroke-width="1"/>
    <text x="2" y="62" font-family="Arial, Helvetica, sans-serif" font-size="9.5" letter-spacing="5" fill="#f4ece0" fill-opacity="0.7">DESDE 1998 · PALMA</text>
  </g>
</svg>`;
}

// Hero: atardecer en la terraza frente al mar (escena figurativa, sin derechos).
function heroSunset({ w, h, id }) {
  const horizon = Math.round(h * 0.5);
  const olas = [0.06, 0.13, 0.22, 0.33, 0.46, 0.62]
    .map(
      (f) =>
        `<rect x="0" y="${Math.round(horizon + (h - horizon) * f)}" width="${w}" height="${Math.max(1, Math.round(h * 0.004))}" fill="#ffe6c0" opacity="${(0.14 - f * 0.16).toFixed(3)}"/>`
    )
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Terraza frente al mar al atardecer">
  <defs>
    <linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#14100c"/>
      <stop offset="0.42" stop-color="#3a2316"/>
      <stop offset="0.72" stop-color="#b9542a"/>
      <stop offset="0.92" stop-color="#e89a4e"/>
      <stop offset="1" stop-color="#f3c074"/>
    </linearGradient>
    <linearGradient id="sea-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d98a48"/>
      <stop offset="0.12" stop-color="#9a5a38"/>
      <stop offset="0.55" stop-color="#36251f"/>
      <stop offset="1" stop-color="#0e0a08"/>
    </linearGradient>
    <radialGradient id="sun-${id}" cx="0.66" cy="1" r="0.62">
      <stop offset="0" stop-color="#ffe7b0" stop-opacity="0.9"/>
      <stop offset="0.4" stop-color="#ffb060" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#ffb060" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="vgn-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0705" stop-opacity="0.35"/>
      <stop offset="0.4" stop-color="#0a0705" stop-opacity="0"/>
      <stop offset="1" stop-color="#0a0705" stop-opacity="0.85"/>
    </linearGradient>
    <filter id="soft-${id}"><feGaussianBlur stdDeviation="${Math.round(w * 0.012)}"/></filter>
    <filter id="grain-${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${w}" height="${horizon}" fill="url(#sky-${id})"/>
  <ellipse cx="${w * 0.66}" cy="${horizon}" rx="${w * 0.5}" ry="${Math.round(h * 0.34)}" fill="url(#sun-${id})"/>
  <circle cx="${w * 0.66}" cy="${Math.round(horizon - h * 0.025)}" r="${Math.round(h * 0.07)}" fill="#ffdf95" opacity="0.92" filter="url(#soft-${id})"/>
  <rect y="${horizon}" width="${w}" height="${h - horizon}" fill="url(#sea-${id})"/>
  <rect x="${Math.round(w * 0.58)}" y="${horizon}" width="${Math.round(w * 0.16)}" height="${h - horizon}" fill="#ffcf8a" opacity="0.15" filter="url(#soft-${id})"/>
  ${olas}
  <rect width="${w}" height="${h}" fill="url(#vgn-${id})"/>
  <rect width="${w}" height="${h}" filter="url(#grain-${id})" opacity="0.5"/>
</svg>`;
}

const INK = '#14110d';
const files = {
  'logo.svg': logoSvg(),

  // Portada: atardecer en la terraza frente al mar.
  'hero-restaurante.svg': heroSunset({ w: 1800, h: 1200, id: 'hero' }),
  'og-image.svg': heroSunset({ w: 1200, h: 630, id: 'og' }),

  // Narrativa "del puerto a la brasa": brasas, fuego desde abajo.
  'sobre-nosotros.svg': scene({
    w: 1200, h: 1500, id: 'brasa', base: '#1a0f09', base2: '#070504',
    lights: [
      { x: 0.5, y: 0.92, r: 0.6, color: '#d4521b', op: 0.6 },
      { x: 0.35, y: 0.8, r: 0.3, color: '#f0a23a', op: 0.45 },
      { x: 0.7, y: 0.85, r: 0.28, color: '#bd2f11', op: 0.4 }
    ],
    vignette: 0.62
  }),

  // Platos
  'plato-pescado-brasa.svg': plato({ id: 'd1', surface: '#2a2018', surface2: '#140e09', plate: '#e9ddc7', food: '#7c6a4a', accent: '#bd4422' }),
  'plato-arroz-marisco.svg': plato({ id: 'd2', surface: '#241a12', surface2: '#120c07', plate: '#1f1b14', food: '#c08a2e', accent: '#bd4422' }),
  'plato-verduras-temporada.svg': plato({ id: 'd3', surface: '#23201a', surface2: '#100e0a', plate: '#ece3d4', food: '#5f6b3a', accent: '#8a9647' }),
  'plato-postre-casero.svg': plato({ id: 'd4', surface: '#241a14', surface2: '#120b08', plate: '#efe7d8', food: '#caa15e', accent: '#9c5a2a' }),

  // Galería — tonos variados (parecen fotos distintas)
  'galeria-01.svg': scene({ // sala, ambiente dim cálido (vertical)
    w: 1000, h: 1400, id: 'g1', base: '#2a2017', base2: '#0f0a07',
    lights: [{ x: 0.7, y: 0.3, r: 0.5, color: '#d99a4e', op: 0.4 }, { x: 0.3, y: 0.7, r: 0.35, color: '#bd4422', op: 0.2 }], vignette: 0.55
  }),
  'galeria-02.svg': scene({ // terraza atardecer (apaisado, rosados)
    w: 1400, h: 1000, id: 'g2', base: '#3a2418', base2: '#1a1c22',
    lights: [{ x: 0.8, y: 0.7, r: 0.6, color: '#e8915a', op: 0.5 }, { x: 0.5, y: 0.3, r: 0.4, color: '#d98a86', op: 0.3 }], vignette: 0.5
  }),
  'galeria-03.svg': scene({ // producto, oliva/verde
    w: 1000, h: 1000, id: 'g3', base: '#23271a', base2: '#0e110a',
    lights: [{ x: 0.4, y: 0.4, r: 0.5, color: '#6f7d3e', op: 0.45 }, { x: 0.7, y: 0.7, r: 0.3, color: '#c2a35f', op: 0.3 }], vignette: 0.5
  }),
  'galeria-04.svg': scene({ // mesa puesta, crema cálida
    w: 1000, h: 1000, id: 'g4', base: '#3a2e1f', base2: '#1c140c',
    lights: [{ x: 0.5, y: 0.45, r: 0.55, color: '#e7cf9c', op: 0.45 }, { x: 0.25, y: 0.75, r: 0.3, color: '#bd7a3a', op: 0.25 }], vignette: 0.45
  }),
  'galeria-05.svg': scene({ // barra y vinos, rojo profundo (apaisado)
    w: 1400, h: 1000, id: 'g5', base: '#2a1414', base2: '#100707',
    lights: [{ x: 0.7, y: 0.4, r: 0.5, color: '#9c2b22', op: 0.45 }, { x: 0.3, y: 0.6, r: 0.35, color: '#d9a14e', op: 0.3 }], vignette: 0.55
  }),
  'galeria-06.svg': scene({ // brasa cocina (vertical, naranjas)
    w: 1000, h: 1400, id: 'g6', base: '#1f1109', base2: '#0a0604',
    lights: [{ x: 0.5, y: 0.7, r: 0.55, color: '#d4521b', op: 0.55 }, { x: 0.6, y: 0.4, r: 0.3, color: '#f0a23a', op: 0.35 }], vignette: 0.55
  })
};

for (const [name, content] of Object.entries(files)) {
  writeFileSync(join(OUT, name), content, 'utf8');
  console.log('  ✓', name);
}
console.log(`\n${Object.keys(files).length} placeholders atmosféricos generados en public/assets/`);
