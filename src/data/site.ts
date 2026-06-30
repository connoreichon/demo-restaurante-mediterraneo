// ============================================================================
//  DATOS DEL CLIENTE — edita SOLO este archivo para adaptar la web.
//  Todo lo demás (componentes, estilos) lee de aquí. Ver CAMBIAR_DATOS_CLIENTE.md
// ============================================================================

export const site = {
  // --- Identidad ------------------------------------------------------------
  nombre: 'Sal Marina',
  reclamo: 'Cocina mediterránea',
  // Eslogan corto para el hero
  titularHero: 'Mar, brasa y producto de temporada',
  subtituloHero:
    'Restaurante mediterráneo frente al puerto. Pescado del día, arroces a fuego lento y una terraza para ver el atardecer.',
  fundadoEn: 1998,

  // --- Contacto -------------------------------------------------------------
  telefono: '+34 600 123 456',
  // Solo dígitos con prefijo de país, para el enlace de WhatsApp
  whatsapp: '34600123456',
  whatsappMensaje: 'Hola, me gustaría reservar mesa en Sal Marina.',
  email: 'reservas@salmarina.example',

  // --- Ubicación ------------------------------------------------------------
  direccion: 'Passeig del Port, 12',
  ciudad: '07015 Palma de Mallorca',
  // Reemplaza por el enlace real "Cómo llegar" de Google Maps del cliente
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Passeig+del+Port+12+Palma',
  // URL de embed del mapa (placeholder: ver CAMBIAR_DATOS_CLIENTE.md para poner el real)
  mapsEmbed: '',

  // --- Horario --------------------------------------------------------------
  horario: [
    { dia: 'Lunes', horas: 'Cerrado', cerrado: true },
    { dia: 'Martes a Jueves', horas: '13:00 – 16:00 · 20:00 – 23:30' },
    { dia: 'Viernes y Sábado', horas: '13:00 – 16:30 · 20:00 – 00:00' },
    { dia: 'Domingo', horas: '13:00 – 16:30' }
  ],
  avisoHorario: 'Recomendamos reservar los fines de semana y festivos.',

  // --- Redes ----------------------------------------------------------------
  redes: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    // Plataforma de reservas (TheFork, etc.) — opcional
    reservas: ''
  },

  // --- Prueba social (hero) -------------------------------------------------
  rating: '4,8',
  ratingFuente: 'Google · 320+ reseñas',

  // --- Legal ----------------------------------------------------------------
  razonSocial: 'Sal Marina Restauración S.L.',
  anioActual: new Date().getFullYear()
};

// --- Especialidades ---------------------------------------------------------
export const especialidades = [
  {
    nombre: 'Pescado del día a la brasa',
    descripcion: 'Lo que llega esa mañana de la lonja, a la brasa de leña y aceite de oliva.',
    imagen: '/assets/plato-pescado-brasa.svg'
  },
  {
    nombre: 'Arroz de marisco',
    descripcion: 'A fuego lento en paellera, con fumet de la casa. Mínimo dos personas.',
    imagen: '/assets/plato-arroz-marisco.svg'
  },
  {
    nombre: 'Verduras de temporada',
    descripcion: 'De huertas de la isla, a la brasa o escabechadas. La carta cambia cada mes.',
    imagen: '/assets/plato-verduras-temporada.svg'
  },
  {
    nombre: 'Postres caseros',
    descripcion: 'Hechos cada día en casa. Pregunta por el postre del chef.',
    imagen: '/assets/plato-postre-casero.svg'
  }
];

// --- Galería ----------------------------------------------------------------
export const galeria = [
  { src: '/assets/galeria-01.svg', alt: 'Ambiente de la sala', alto: true },
  { src: '/assets/galeria-02.svg', alt: 'Terraza al atardecer' },
  { src: '/assets/galeria-03.svg', alt: 'Producto de temporada' },
  { src: '/assets/galeria-04.svg', alt: 'Mesa puesta' },
  { src: '/assets/galeria-05.svg', alt: 'Barra y selección de vinos' },
  { src: '/assets/galeria-06.svg', alt: 'Cocina a la brasa', alto: true }
];

// --- Opiniones (ficticias realistas para la demo) ---------------------------
export const opiniones = [
  {
    texto:
      'El mejor arroz de marisco que he comido en la isla. Pedimos mesa en la terraza al atardecer y fue redondo. Repetiremos seguro.',
    autor: 'Marta Gil',
    detalle: 'Cena de aniversario',
    estrellas: 5
  },
  {
    texto:
      'Pescado fresquísimo y trato cercano. Te explican lo que ha entrado ese día y te aconsejan sin prisa. Se nota el producto.',
    autor: 'Andreas Köhler',
    detalle: 'Comida en pareja',
    estrellas: 5
  },
  {
    texto:
      'Fuimos un grupo de 8 y todo perfecto: nos adaptaron el menú, salió rápido y el postre del chef fue la sorpresa de la noche.',
    autor: 'Lucía Fernández',
    detalle: 'Comida de empresa',
    estrellas: 5
  }
];
