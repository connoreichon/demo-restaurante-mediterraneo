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

// --- Hoy entra por lonja (3 productos del día, formato pizarra) -------------
// `origen`: etiqueta de procedencia. `preparacion`: nota corta. `precio`: 's/m'.
export const lonja = {
  nota: 'Lo que ha entrado esta mañana. Cuando se acaba, se acaba.',
  productos: [
    {
      nombre: 'Dorada de la bahía',
      origen: 'Lonja de Palma',
      preparacion: 'A la sal o a la brasa de leña',
      precio: 's/m',
      imagen: '/assets/img/lonja-pescado-brasa.jpg'
    },
    {
      nombre: 'Gamba roja de Sóller',
      origen: 'Costa de Tramuntana',
      preparacion: 'A la plancha, solo sal y aceite',
      precio: 's/m',
      imagen: '/assets/plato-arroz-marisco.svg'
    },
    {
      nombre: 'Sepia y su tinta',
      origen: 'Lonja de Palma',
      preparacion: 'A la brasa, con alioli suave',
      precio: '18',
      imagen: '/assets/plato-verduras-temporada.svg'
    }
  ]
};

// --- Carta (resto, por si se reutiliza) -------------------------------------
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
  { src: '/assets/img/galeria-1-terraza-puerto.jpg', alt: 'Terraza del restaurante frente al puerto', tam: 'feature', cap: 'La terraza, frente al puerto' },
  { src: '/assets/img/galeria-2-fuego.jpg', alt: 'Pescado a la brasa', tam: 'tall', cap: 'El fuego, siempre encendido' },
  { src: '/assets/img/galeria-3-marisco.jpg', alt: 'Marisco a la brasa', tam: 'normal', cap: 'Lo de hoy, de la lonja' },
  { src: '/assets/img/galeria-4-mesa-mar.jpg', alt: 'Mesa puesta frente al mar', tam: 'normal', cap: 'Mesa sin prisa, frente al mar' },
  { src: '/assets/img/galeria-5-sombra.jpg', alt: 'Terraza con sombrillas', tam: 'tall', cap: 'Sombra y sobremesa' },
  { src: '/assets/img/galeria-6-pescadores.jpg', alt: 'Pescadores en el puerto al amanecer', tam: 'wide', cap: 'Del puerto, cada mañana' }
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
