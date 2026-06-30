// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Despliegue en GitHub Pages como "project page":
//   site = https://<usuario>.github.io
//   base = /<nombre-repo>
// URL final: https://connoreichon.github.io/demo-restaurante-mediterraneo/
export default defineConfig({
  site: 'https://connoreichon.github.io',
  base: '/demo-restaurante-mediterraneo',
  vite: {
    plugins: [tailwindcss()]
  }
});
