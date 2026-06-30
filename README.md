# Sal Marina — Demo restaurante mediterráneo

**🔗 Demo online:** https://connoreichon.github.io/demo-restaurante-mediterraneo/

Web de **demostración** (portfolio) para vender en Fiverr / Workana / contacto directo.
Restaurante ficticio mediterráneo moderno. Pensada para **adaptarse en minutos** a
restaurantes, cafeterías, tiendas u otros negocios locales.

> ⚠️ Datos, textos, opiniones y fotos son **ficticios / placeholders**. Antes de
> usarla con un cliente real, lee [`CAMBIAR_DATOS_CLIENTE.md`](CAMBIAR_DATOS_CLIENTE.md).

## Stack
- **Astro 7** (estático, muy rápido).
- **Tailwind CSS v4** (vía plugin de Vite, tokens en `src/styles/global.css`).
- Sin librerías JS pesadas: animaciones y menú con JS nativo.
- Tipografías **Cormorant Garamond + Inter** (Google Fonts, licencia abierta).

## Qué incluye
- Home completa de una sola página con navegación ancla.
- **Hero** a pantalla completa con CTA a reserva/WhatsApp y prueba social.
- **Especialidades** (4 platos).
- **Nosotros** (historia + datos).
- **Galería** visual (grid responsive).
- **Opiniones** (testimonios).
- **Horario** + **Ubicación** con mapa (placeholder a Google Maps).
- **Contacto** con formulario de reserva (demo, no envía).
- **Footer** + **WhatsApp flotante**.
- Responsive móvil / tablet / desktop. SEO básico + datos estructurados (Schema.org).

## Cómo arrancar (local)
```bash
npm install
npm run dev        # http://localhost:4321/demo-restaurante-mediterraneo/
npm run gen:assets # regenera los placeholders SVG de /public/assets
```
> ℹ️ La web vive bajo el `base` `/demo-restaurante-mediterraneo/` (para GitHub Pages),
> por eso la URL local incluye esa ruta. La raíz `/` da 404 a propósito.

## Cómo hacer build
```bash
npm run build      # genera /dist (estático)
npm run preview    # sirve /dist en local (misma ruta /demo-restaurante-mediterraneo/)
```

## Desplegar en GitHub Pages
El despliegue es **automático**: cada `git push` a `main` lanza el workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que compila con la
acción oficial de Astro y publica `dist/` en Pages. Sin Netlify, Vercel ni tokens externos.

Configuración (ya hecha en este repo):
- `astro.config.mjs`: `site: 'https://connoreichon.github.io'` y `base: '/demo-restaurante-mediterraneo'`.
- Las rutas de imágenes usan el helper [`src/lib/asset.ts`](src/lib/asset.ts) para respetar el `base`.
- GitHub → **Settings → Pages → Source: GitHub Actions**.
- El repo debe ser **público** (Pages gratis no admite repos privados).

Para un repo nuevo, cambia el nombre del repo en `base` (debe coincidir) y el usuario en `site`.

## Comandos útiles
```bash
npm run preview    # vista previa del build
npm run gen:assets # regenera placeholders SVG
```

## Estructura
```
src/
├── data/site.ts            ← TODOS los datos del cliente (editar aquí)
├── styles/global.css       ← tokens de marca (colores, fuentes)
├── layouts/Base.astro      ← <head>, SEO, fuentes, script de animación
├── lib/asset.ts            ← helper de rutas (respeta el `base` de Pages)
├── components/             ← Header, Hero, Especialidades, Nosotros,
│                             Galeria, Opiniones, HorarioUbicacion,
│                             Contacto, Footer, WhatsAppFloat
└── pages/index.astro       ← ensambla la home
public/assets/              ← imágenes (placeholders SVG bien nombrados)
tools/gen-placeholders.mjs  ← generador de los placeholders
```

## Adaptar a otro cliente
Ver [`CAMBIAR_DATOS_CLIENTE.md`](CAMBIAR_DATOS_CLIENTE.md). Resumen: editas
`src/data/site.ts`, cambias los colores en `src/styles/global.css` y sustituyes
las imágenes de `public/assets/` por las fotos reales (mismos nombres de archivo).

## Aviso sobre imágenes
Los placeholders son SVG generados por nosotros (sin derechos). Para la entrega
final usa **fotos reales con permiso del cliente**. Nunca publiques fotos de
Instagram / Google / web ajena sin confirmar derechos de uso.
