# CHANGELOG — Demo Sal Marina

Registro de cambios. Lo más reciente arriba.

## [2.0.0] — 2026-06-30 — Rediseño editorial
### Cambiado
- Rediseño completo de dirección visual: "carta editorial mediterránea × lonja y brasa".
- Nueva estructura (rompe el patrón de plantilla): Portada → I Hoy en la mesa (carta) →
  II Del puerto a la brasa (narrativa + cita) → III galería masonry → IV Reserva (azul-noche).
- Tipografía Fraunces + Caveat (notas manuscritas); papel con textura; numeración romana,
  líneas de puntos de carta, sellos. Fuera cards, grids de cards y stats tipo SaaS.
- Placeholders SVG regenerados (atmosféricos, sin texto incrustado).
- `site.ts`: `especialidades` → `carta.platos` (precio + nota); galería con `tam` y `cap`;
  `citaDestacada`. Tokens de color/utilidades editoriales nuevos en `global.css`.
### Eliminado
- Componentes antiguos: Hero, Especialidades, Nosotros, Galeria, Opiniones,
  HorarioUbicacion, Contacto (sustituidos por los nuevos bloques editoriales).

## [1.0.0] — 2026-06-30 — Demo inicial
### Añadido
- Home completa de restaurante mediterráneo (Astro 7 + Tailwind v4).
- Secciones: Hero, Especialidades, Nosotros, Galería, Opiniones, Horario,
  Ubicación (mapa placeholder), Contacto (formulario demo), Footer.
- Header sticky con menú móvil y WhatsApp flotante.
- Datos centralizados en `src/data/site.ts`.
- 14 placeholders SVG generados (`tools/gen-placeholders.mjs`).
- SEO básico + datos estructurados Schema.org.
- Responsive verificado en móvil / tablet / desktop.
- Documentación: `README.md` y `CAMBIAR_DATOS_CLIENTE.md`.
