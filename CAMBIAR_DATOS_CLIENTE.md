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
| `carta.nota` | Nota manuscrita bajo el título de la carta. |
| `carta.platos[]` | Carta: `nombre`, `descripcion`, `precio` (usa `'s/m'` para "según mercado"), `nota` (nota del chef, manuscrita), `imagen`. |
| `galeria[]` | Imágenes: `src`, `alt`, `cap` (pie de foto) y `tam` (`feature`/`tall`/`wide`/`normal`, controla el tamaño en el masonry). |
| `opiniones[]` | Testimonios (texto, autor, detalle, estrellas). |
| `citaDestacada` | Cita grande de la sección "El puerto" (por defecto, la primera opinión). |

> Cambiar el texto aquí actualiza **toda** la web (hero, secciones, footer, SEO, WhatsApp).

## 2. Colores y tipografía → `src/styles/global.css`
En el bloque `@theme` cambia los colores de marca:
```css
--color-tinta:  #17130d;   /* texto / fondos oscuros */
--color-papel:  #f3e9d8;   /* fondo claro (papel) */
--color-brasa:  #bd4422;   /* acento principal / CTA */
--color-oliva:  #5f6b3a;   /* notas del chef / secundario */
--color-oro:    #b8924e;   /* sellos / detalles */
--color-noche:  #111b1f;   /* sección de reserva (cierre) */
```
Para cambiar las tipografías: edita `--font-display`, `--font-body` y `--font-hand`
(notas manuscritas), y actualiza el `<link>` de Google Fonts en `src/layouts/Base.astro`.

> Consulta `DESIGN_SYSTEM.md` para paletas recomendadas por tipo de negocio.

## 3. Imágenes → `public/assets/img/`
Las **fotos** de la demo están en `public/assets/img/` (las `*.svg` sueltas de
`public/assets/` son el logo y placeholders antiguos, ya no se usan en la home).

> **Origen y licencia:** las fotos de la demo son de **Pexels** (licencia gratuita,
> uso comercial y personal, sin atribución obligatoria) — válidas para demo/portfolio.
> Para la **web final del cliente**, sustitúyelas por **fotos propias del cliente**:
> venden más y evitan cualquier duda de derechos.

Sustituye cada archivo por la foto real con el **mismo nombre** (así no tocas el código).
Si cambias la extensión, actualiza las rutas en `src/data/site.ts`.

**Hero (portada):** la demo usa `img/hero-terraza-mar.jpg` con un zoom lento sutil.
- **Foto:** reemplázala por una foto horizontal potente (terraza con mar/puerto, o plato
  a la brasa). El zoom y el degradado siguen funcionando encima.
- **Vídeo:** en `src/components/Portada.astro` hay un bloque `<video>` comentado. Descoméntalo,
  pon `img/hero.mp4`/`img/hero.webm` del cliente y deja la imagen de `poster`.

Archivos a sustituir (en `public/assets/img/`):
- `hero-terraza-mar.jpg` → portada (terraza/mar/puerto, o vídeo).
- `lonja-pescado-brasa.jpg` → foto del producto del día (sección "Hoy entra por lonja").
- `puerto-brasa-fuego.jpg` → brasa/fuego (sección "Del puerto a la brasa").
- `galeria-1..6-*.jpg` → ambiente, terraza, brasa, marisco, mesa, puerto.
- `logo.svg` (en `public/assets/`) → logo real del cliente.

> Optimiza las fotos antes de subirlas (`webp`/`jpg`, ancho ~1200–1920).
> **Confirma siempre los derechos** de cualquier foto que no sea del cliente.

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
