# Cómo adaptar esta demo a un cliente real

Guía paso a paso para convertir "Sal Marina" en la web de un cliente concreto.
Tiempo estimado para una adaptación básica: **30–90 min** (sin contar las fotos).

---

## 1. Datos del negocio → `src/data/site.ts`
Es el archivo **más importante**. Casi todo sale de aquí. Cambia:

| Campo | Qué es |
|---|---|
| `nombre`, `reclamo` | Nombre del negocio y subtítulo (p. ej. "Pizzería", "Peluquería"). |
| `titularHero`, `subtituloHero` | Frase grande del hero y descripción corta. |
| `fundadoEn` | Año de apertura (alimenta "X años abiertos"). |
| `telefono` | Teléfono visible y enlace `tel:`. |
| `whatsapp` | **Solo dígitos con prefijo país**, sin `+` ni espacios (ej. `34600123456`). |
| `whatsappMensaje` | Texto que aparece prerelleno al abrir WhatsApp. |
| `email` | Email de contacto. |
| `direccion`, `ciudad` | Dirección postal. |
| `mapsLink` | Enlace "Cómo llegar" de Google Maps (ver punto 4). |
| `mapsEmbed` | URL del iframe del mapa (ver punto 4). Si lo rellenas, se muestra el mapa real. |
| `horario[]` | Días y horas. Marca el día de cierre con `cerrado: true`. |
| `avisoHorario` | Nota bajo el horario. |
| `redes` | Enlaces a Instagram / Facebook / reservas. |
| `rating`, `ratingFuente` | Valoración (ej. "4,8" · "Google · 320+ reseñas"). |
| `razonSocial` | Para el aviso legal del footer. |
| `especialidades[]` | Platos/servicios: nombre, descripción e imagen. |
| `galeria[]` | Imágenes de la galería (`alto: true` = ocupa doble alto). |
| `opiniones[]` | Testimonios reales del cliente (texto, autor, detalle, estrellas). |

> Cambiar el texto aquí actualiza **toda** la web (hero, secciones, footer, SEO, WhatsApp).

## 2. Colores y tipografía → `src/styles/global.css`
En el bloque `@theme` cambia los colores de marca:
```css
--color-terracota: #C1440E;   /* color principal / CTA */
--color-oliva:     #6B7340;   /* color secundario */
--color-arena:     #C9A86A;   /* dorado / acentos */
--color-carbon:    #1A1A18;   /* fondos oscuros */
--color-crema:     #F5EFE6;   /* fondos claros */
```
Para cambiar las tipografías: edita `--font-display` y `--font-body`, y actualiza
el `<link>` de Google Fonts en `src/layouts/Base.astro`.

> Consulta `DESIGN_SYSTEM.md` para paletas recomendadas por tipo de negocio.

## 3. Imágenes → `public/assets/`
Sustituye los SVG de placeholder por **fotos reales**, idealmente con el **mismo
nombre de archivo** (así no tocas el código). Si cambias la extensión (a `.jpg`/`.webp`),
actualiza las rutas en `src/data/site.ts` y, para el hero, en `src/components/Hero.astro`.

Archivos a sustituir:
- `hero-restaurante.svg` → foto horizontal potente del local/plato estrella.
- `sobre-nosotros.svg` → foto vertical (cocina, equipo, dueño).
- `plato-*.svg` → fotos cuadradas de cada especialidad.
- `galeria-01..06.svg` → fotos del ambiente, terraza, producto, equipo.
- `og-image.svg` → imagen para compartir en redes (1200×630).
- `logo.svg` → logo real del cliente.

> Optimiza las fotos antes de subirlas (formato `webp`/`jpg`, ancho razonable).
> **Confirma siempre los derechos de uso** de cada foto.

## 4. Mapa de Google Maps
1. Busca el negocio en Google Maps → **Compartir** → "Insertar un mapa" → copia el `src` del `<iframe>`.
2. Pega esa URL en `mapsEmbed` dentro de `src/data/site.ts`.
3. Para el botón "Cómo llegar", usa **Compartir → enviar enlace** y ponlo en `mapsLink`.

Si dejas `mapsEmbed` vacío, se muestra un bloque-placeholder que enlaza a `mapsLink`.

## 5. Formulario de contacto
El formulario es **demo y no envía nada**. Para producción, conéctalo a:
- un servicio tipo **Formspree / Web3Forms / Getform** (cambias el `action` del `<form>`), o
- el endpoint/email del cliente.
Está en `src/components/Contacto.astro`.

## 6. Aviso legal / privacidad / cookies
Los enlaces del footer apuntan a `#`. Antes de publicar:
- Crea las páginas legales (con los datos fiscales reales del cliente).
- Si el formulario recoge datos, añade política de privacidad y aviso de cookies.

## 7. Antes de publicar (checklist)
- [ ] `npm run build` sin errores.
- [ ] Revisado en móvil (375px), tablet (768px) y desktop.
- [ ] WhatsApp, teléfono (`tel:`), email (`mailto:`) y mapa funcionan.
- [ ] Formulario conectado y probado.
- [ ] Fotos reales, optimizadas y con derechos confirmados.
- [ ] Textos finales, sin contenido de la demo.
- [ ] `site` en `astro.config.mjs` apunta al dominio real.
- [ ] Páginas legales creadas.

---

## Reutilizar para OTRO tipo de negocio (no restaurante)
La estructura sirve igual para cafetería, peluquería, tienda, taller, clínica…
Para que **no parezca la misma web** (regla anti-genérico de `CLAUDE.md`):
- Cambia el **tipo de hero** y el orden/peso de secciones según el objetivo.
- Renombra "Especialidades" → "Servicios" / "Productos" / "Tratamientos".
- Cambia el **emparejamiento tipográfico** y la **paleta** (ver `DESIGN_SYSTEM.md`).
- Ajusta la retórica del copy al sector.
