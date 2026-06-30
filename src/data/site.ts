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

// --- Hoy en la mesa (carta, no "cards") -------------------------------------
// `precio`: usa 's/m' (según mercado) para dar sensación de carta real.
// `nota`: nota manuscrita del chef (se muestra en tipografía a mano).
export const carta = {
  nota: 'La carta cambia cada mañana, según lo que entra de la lonja y la huerta.',
  platos: [
    {
      nombre: 'Pescado del día a la brasa',
      descripcion: 'Lo que llega esa mañana de la lonja, a la brasa de leña con aceite de oliva de la isla.',
      precio: 's/m',
      nota: 'Pregunta qué ha entrado hoy',
      imagen: '/assets/plato-pescado-brasa.svg'
    },
    {
      nombre: 'Arroz de marisco a fuego lento',
      descripcion: 'En paellera, con fumet de la casa reducido durante horas. Para dos.',
      precio: '24',
      nota: 'Nuestro plato más pedido',
      imagen: '/assets/plato-arroz-marisco.svg'
    },
    {
      nombre: 'Verduras de la huerta a la brasa',
      descripcion: 'De huertas de la isla, a la brasa o en escabeche suave. Cambia cada mes.',
      precio: '14',
      nota: '',
      imagen: '/assets/plato-verduras-temporada.svg'
    },
    {
      nombre: 'Postre del chef, hecho en casa',
      descripcion: 'Lo que apetezca esa semana. Pregunta a tu camarero por el de hoy.',
      precio: '7',
      nota: 'Distinto cada semana',
      imagen: '/assets/plato-postre-casero.svg'
    }
  ]
};

// Compatibilidad: especialidades como lista simple (por si se reutiliza)
export const especialidades = carta.platos;

// --- Galería editorial (tamaños variados para composición asimétrica) -------
// `tam`: 'feature' (grande), 'tall' (vertical), 'wide' (apaisada), 'normal'.
export const galeria = [
  { src: '/assets/galeria-02.svg', alt: 'La terraza al atardecer', tam: 'feature', cap: 'La terraza, al caer el sol' },
  { src: '/assets/galeria-06.svg', alt: 'La brasa en la cocina', tam: 'tall', cap: 'El fuego, siempre encendido' },
  { src: '/assets/galeria-03.svg', alt: 'Producto de temporada', tam: 'normal', cap: 'Lo de hoy' },
  { src: '/assets/galeria-04.svg', alt: 'Mesa puesta', tam: 'normal', cap: 'Mesa sin prisa' },
  { src: '/assets/galeria-01.svg', alt: 'Ambiente de la sala', tam: 'tall', cap: 'La sala' },
  { src: '/assets/galeria-05.svg', alt: 'Barra y selección de vinos', tam: 'wide', cap: 'La barra y los vinos de la isla' }
];

// --- Opiniones (ficticias realistas para la demo) ---------------------------
export const opiniones = [
  {
    texto:
      'El mejor arroz de marisco que he comido en la isla. Pedimos mesa en la terraza al atardecer y fue redondo.',
    autor: 'Marta Gil',
    detalle: 'Cena de aniversario',
    estrellas: 5
  },
  {
    texto:
      'Pescado fresquísimo y trato cercano. Te explican lo que ha entrado ese día y te aconsejan sin prisa.',
    autor: 'Andreas Köhler',
    detalle: 'Comida en pareja',
    estrellas: 5
  },
  {
    texto:
      'Nos adaptaron el menú para un grupo de 8, salió rápido y el postre del chef fue la sorpresa de la noche.',
    autor: 'Lucía Fernández',
    detalle: 'Comida de empresa',
    estrellas: 5
  }
];

// Cita destacada (pull-quote editorial, en vez de un grid de testimonios)
export const citaDestacada = opiniones[0];
