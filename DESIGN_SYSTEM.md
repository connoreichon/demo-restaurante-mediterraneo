# DESIGN_SYSTEM.md — Sistema de diseño para webs de negocio local

Guía para que cada web sea **distinta y premium**, no una plantilla reskineada.

---

## 1. Paletas recomendadas por tipo de negocio

> Son puntos de partida. Ajusta a la marca real del cliente (logo, local, producto).

| Sector | Dirección de color | Ejemplo de paleta |
|---|---|---|
| Restaurante / gastrobar | Cálido, apetecible, contraste alto | Carbón `#1A1A1A`, crema `#F5EFE6`, terracota `#C1440E`, oliva `#6B7340` |
| Cafetería / panadería | Suave, artesanal, acogedor | Marrón café `#4B3621`, crema `#FBF3E4`, mostaza `#D9A441`, verde salvia `#8AA399` |
| Tienda / moda | Limpio, editorial, mucho blanco | Negro `#111`, blanco `#FFF`, arena `#E7E2DC`, acento vivo a elegir |
| Peluquería / estética | Elegante, femenino o unisex premium | Nude `#E8D6CF`, carbón `#222`, rosa palo `#C99', dorado `#C9A227` |
| Clínica / dental / fisio | Confianza, limpio, sanitario | Azul `#1F6FEB`, blanco, gris `#F2F5F9`, verde menta `#3DBE8B` |
| Gimnasio / crossfit | Enérgico, oscuro, contraste fuerte | Negro `#0E0E0E`, lima `#C6FF00`, gris `#1C1C1C`, blanco |
| Taller / mecánica / reformas | Industrial, sólido, fiable | Antracita `#23272A`, naranja seguridad `#FF6A00`, gris acero `#9AA1A8` |
| Autónomo / servicios | Profesional, sobrio, directo | Azul marino `#16324F`, blanco, gris `#EDEFF2`, acento cálido |

**Regla:** máximo 1 color de marca + neutros + 1 acento. El acento solo en CTAs y detalles.

---

## 2. Tipos de hero (portada)

Elige según el negocio; **no uses siempre el mismo**:
1. **Foto a pantalla completa + titular + CTA** (restaurantes, gimnasios, estética).
2. **Split**: texto a un lado, imagen al otro (servicios, clínicas, autónomos).
3. **Hero con buscador/acción rápida** (reservar mesa, pedir cita).
4. **Mosaico/galería** de fondo (tiendas, moda, peluquerías con porfolio).
5. **Vídeo corto en bucle** (ambiente del local; cuidado con peso).
6. **Hero minimal editorial**: mucho blanco, tipografía grande (moda, marca premium).

Cada hero debe tener: **promesa clara + CTA principal + señal de confianza** (rating, años, ubicación).

---

## 3. Tipos de CTA

- **Primario:** reservar / pedir cita / pedir presupuesto / llamar ahora.
- **WhatsApp flotante:** siempre presente, con mensaje prerrelleno.
- **Click-to-call:** el teléfono es un enlace `tel:`.
- **Cómo llegar:** enlace directo a Google Maps.
- **Secundarios:** ver carta, ver servicios, ver galería.

Regla: **un solo CTA primario por pantalla**. No compitas con cinco botones iguales.

---

## 4. Secciones típicas de negocio local

Orden orientativo (reordena según objetivo):
1. Hero (promesa + CTA).
2. Servicios / productos destacados.
3. Sobre nosotros / por qué elegirnos (confianza).
4. Galería / porfolio.
5. Opiniones / testimonios (con nombre y foto si se puede).
6. Precios / carta (si aplica).
7. Ubicación + mapa + cómo llegar.
8. Horarios.
9. Contacto + formulario + WhatsApp.
10. Pie: redes, aviso legal, cookies.

---

## 5. Reglas de responsive
- **Mobile-first**: diseña primero para 375px.
- Breakpoints de referencia: móvil <640, tablet 640–1024, desktop >1024.
- Tipografía fluida; nada de texto < 16px en móvil.
- Botones con área táctil mínima 44×44px.
- Imágenes con `srcset`/tamaños correctos; nunca servir una foto de 4000px en móvil.
- Menú: hamburguesa en móvil, horizontal en desktop.
- Prueba en 375 / 390 / 768 / 1280 antes de entregar.

---

## 6. Reglas para que parezca premium
- **Espaciado generoso** (respira: padding vertical amplio entre secciones).
- **Una tipografía con carácter** para titulares + una neutra legible para cuerpo.
- **Jerarquía clara**: tamaños y pesos bien diferenciados.
- **Consistencia**: mismos radios, sombras y espaciados en toda la web.
- **Microinteracciones sutiles** (hover, fade-in al hacer scroll) sin exagerar.
- **Fotografía buena** manda más que cualquier efecto. Si la foto es mala, la web parece barata.
- **Contraste y accesibilidad** correctos.
- Menos es más: quita lo que no aporte a la conversión.

---

## 7. Adaptar una web a otro cliente sin que parezca "cambio de textos"
El error típico es coger una web y solo cambiar nombre y colores. Para que no se note:
- Cambia el **tipo de hero** (de los 6 de arriba).
- Cambia el **orden y el peso** de las secciones según el objetivo del nuevo negocio.
- Cambia el **emparejamiento tipográfico** (titular + cuerpo).
- Cambia el **ritmo de layout**: dónde van imágenes a sangre, dónde tarjetas, dónde columnas.
- Cambia la **retórica del copy** según el sector (un taller no habla como una clínica estética).
- Cambia las **microinteracciones** y el tratamiento de imagen (recortes, formas, bordes).
- Reutiliza **componentes**, no **composiciones**: el mismo botón vale; el mismo layout entero, no.

**Test final:** si pones dos webs tuyas al lado y "se nota que son la misma", repítelo.
