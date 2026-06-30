# CLAUDE.md — Reglas de este proyecto (web de negocio local)

Hereda las reglas globales de `~/.claude/CLAUDE.md`. Aquí van las reglas
**concretas de webs de negocio local**.

## Proceso obligatorio antes de programar
1. **Entender el negocio**: qué vende, a quién, qué le diferencia, qué objeción tiene el cliente.
2. **Definir el objetivo de conversión** (ej.: que llamen, reserven por WhatsApp, vengan al local).
3. **Estructura de secciones** acorde a ese objetivo.
4. **Proponer 2-3 direcciones visuales distintas** (personalidad/layout diferentes, no solo colores).
5. **Elegir** una dirección con el cliente (o conmigo).
6. **Implementar mobile-first.**
7. **Revisar responsive** (móvil + desktop).
8. **Textos comerciales** reales (nada de relleno).
9. **Probar** botones, enlaces, formularios, WhatsApp, mapa.
10. **Resumir** lo hecho y qué falta del cliente.

## Lo que esta web SIEMPRE debe tener
- Botón **WhatsApp flotante** (clic → chat con mensaje prerrelleno).
- **CTA principal** claro y repetido (reservar / pedir cita / llamar / cómo llegar).
- **Click-to-call** en el teléfono.
- **Google Maps** embebido + dirección + cómo llegar.
- **Horarios** legibles (y aviso de festivos si aplica).
- **Servicios o productos** con foto, nombre y, si procede, precio.
- **Prueba social**: opiniones/testimonios reales.
- **Pie** con datos de contacto, redes y aviso legal/cookies.

## Datos del cliente: centralizados y fáciles de cambiar
- Todos los datos variables (nombre, teléfono, WhatsApp, dirección, horarios,
  redes, colores) en **un único sitio** (config/datos), no repartidos por el HTML.
- Las imágenes, con nombres claros y un sitio único; deja un comentario de dónde se cambian.

## Reglas de copy
- Frases cortas, orientadas a la acción del cliente final.
- Prohibido el relleno corporativo vacío.
- Cada sección responde a una pregunta del cliente: ¿qué ofrecéis? ¿es bueno?
  ¿dónde estáis? ¿cuándo? ¿cómo os contacto?

## Imágenes
- Sin fotos reales → **placeholders bien diseñados** + nota de dónde cambiarlas.
- Fotos de Instagram/Google/web pública → **confirmar derechos** antes de publicar.
- Nunca imágenes sin permiso en la versión final.

## Antes de entregar (checklist)
- [ ] Móvil perfecto (375px y 390px).
- [ ] Tablet y desktop correctos.
- [ ] WhatsApp, teléfono, email y mapa funcionan.
- [ ] Formulario envía y valida.
- [ ] Sin enlaces rotos ni imágenes que falten.
- [ ] Velocidad razonable (imágenes optimizadas).
- [ ] Textos sin "lorem" ni placeholders olvidados.
