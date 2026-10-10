import type { Dictionary } from "./en";

// Spanish copy. Mirrors `en.ts`; TypeScript will fail the build if a key is missing.
// Reviews below are SAMPLE placeholders: replace them with genuine
// customer reviews before launch.

const es: Dictionary = {
  meta: {
    title: "Tours privados en Gibraltar | Visitas al Peñón con guía local",
    description:
      "Tours privados y guiados por el Peñón de Gibraltar: Cueva de San Miguel, los monos de Berbería, los Túneles del Gran Asedio y Punta Europa. Recogida en el hotel, la frontera o la terminal de cruceros.",
  },
  nav: {
    tours: "Tours",
    highlights: "Qué ver",
    why: "Por qué nosotros",
    reviews: "Opiniones",
    faq: "Preguntas",
    book: "Reservar",
    language: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Tours privados · Gibraltar",
    title: "Descubre el Peñón con tu propio guía local",
    body: "Vehículo privado y cómodo, sin aglomeraciones y con un guía nacido y criado en Gibraltar. Te recogemos en la frontera, tu hotel o la terminal de cruceros.",
    primaryCta: "Ver nuestros tours",
    whatsappCta: "Escríbenos por WhatsApp",
    badges: ["Valoración 5,0 de nuestros clientes", "Guías locales con licencia", "Recogida gratuita en Gibraltar"],
  },
  tours: {
    eyebrow: "Nuestros tours",
    title: "Elige tu tour privado",
    body: "Todos los tours son privados: solo tú y tu grupo, con guía y vehículo. Los precios son por vehículo, no por persona.",
    from: "Desde",
    perVehicle: "por vehículo",
    onRequest: "Precio a consultar",
    upTo: "Hasta {n} personas",
    flexible: "Duración flexible",
    hours: "{n} h",
    minutes: "{n} min",
    book: "Reservar este tour",
    featured: "El más popular",
    items: {
      "rock-tour": {
        title: "Tour del Peñón",
        summary:
          "El tour imprescindible de Gibraltar: el mirador de las Columnas de Hércules, la Cueva de San Miguel y los famosos monos de Berbería.",
        includes: ["Entrada a la Reserva Natural", "Cueva de San Miguel", "Apes' Den (monos)", "Columnas de Hércules"],
      },
      "full-experience": {
        title: "Gibraltar al completo",
        summary:
          "Todo lo que ofrece el Peñón en una mañana o tarde sin prisas, desde el Skywalk hasta el Castillo Árabe y el faro de Punta Europa.",
        includes: ["Todas las paradas del Tour del Peñón", "Skywalk", "Túneles del Gran Asedio", "Castillo Árabe", "Punta Europa"],
      },
      "cruise-tour": {
        title: "Tour para cruceristas",
        summary:
          "Adaptado al horario de tu barco. Te esperamos en la terminal y garantizamos que vuelves a bordo con tiempo de sobra.",
        includes: ["Recogida y regreso a la terminal", "Lo mejor del Peñón", "Paradas para fotos", "Garantía de regreso al barco"],
      },
      "siege-tunnels": {
        title: "Historia y túneles",
        summary:
          "Recorre 300 años de historia militar: los Túneles del Gran Asedio, los túneles de la Segunda Guerra Mundial y las murallas.",
        includes: ["Túneles del Gran Asedio", "Túneles de la II Guerra Mundial", "Castillo Árabe", "Murallas de la ciudad"],
      },
      "dolphins-rock": {
        title: "Delfines + Peñón",
        summary:
          "Empieza el día viendo delfines salvajes en la Bahía de Gibraltar y después sube al Peñón a sus mejores miradores.",
        includes: ["Excursión en barco con delfines", "Tour del Peñón", "Recogida en el puerto", "Recomendaciones para comer"],
      },
      "tailor-made": {
        title: "Tour a medida",
        summary:
          "Grupos grandes, ocasiones especiales, fotografía o movilidad reducida: cuéntanos qué necesitas y lo diseñamos contigo.",
        includes: ["Itinerario personalizado", "Grupos de hasta 16", "Minibús disponible", "Otros idiomas bajo petición"],
      },
    },
  },
  highlights: {
    eyebrow: "Qué verás",
    title: "Lo mejor del Peñón",
    items: [
      { title: "Cueva de San Miguel", body: "Una catedral de estalactitas dentro del Peñón, escenario de conciertos y espectáculos de luz." },
      { title: "Monos de Berbería", body: "Los únicos monos salvajes de Europa, viviendo en libertad en la parte alta del Peñón." },
      { title: "Túneles del Gran Asedio", body: "Galerías excavadas a mano en el siglo XVIII para defender el Peñón." },
      { title: "Skywalk", body: "Una plataforma de cristal a 340 m sobre el mar con vistas a dos continentes." },
      { title: "Punta Europa", body: "El extremo sur de Gibraltar, donde el Mediterráneo se encuentra con el Atlántico." },
      { title: "Castillo Árabe", body: "Una torre del siglo XIV que todavía vigila el casco antiguo." },
    ],
  },
  why: {
    eyebrow: "Por qué viajar con nosotros",
    title: "Un tour privado, como debe ser",
    items: [
      { title: "Guías locales con licencia", body: "Nacidos en Gibraltar, con licencia oficial y llenos de historias que no salen en las guías." },
      { title: "Totalmente privado", body: "Sin autobuses compartidos ni desconocidos. Tu grupo, tu ritmo, tus paradas." },
      { title: "Recogida fácil", body: "Frontera, hotel, puerto deportivo o terminal de cruceros: te esperamos allí." },
      { title: "Todo incluido", body: "Entradas a la Reserva Natural y agua embotellada incluidas en el precio." },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    title: "Reserva en tres pasos",
    items: [
      { title: "Envíanos un mensaje", body: "Usa el formulario, WhatsApp o email con la fecha, el tour y el número de personas." },
      { title: "Te confirmamos", body: "Te respondemos rápido con la disponibilidad y la hora de recogida." },
      { title: "Disfruta del Peñón", body: "Tu guía te espera en el punto acordado. Pagas el mismo día con tarjeta o en efectivo." },
    ],
  },
  reviews: {
    eyebrow: "Opiniones",
    title: "Lo que dicen nuestros clientes",
    items: [
      { quote: "Nuestro guía hizo reír y aprender a toda la familia. ¡Los monos fueron lo mejor para los niños!", name: "Lucía", origin: "Madrid" },
      { quote: "Perfecto para nuestra escala de crucero. Lo vimos todo y volvimos al barco con tiempo de sobra.", name: "Javier y Marta", origin: "Barcelona" },
      { quote: "Privado, cómodo y muy bien organizado. Las vistas desde el Skywalk son inolvidables.", name: "Carmen", origin: "Sevilla" },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Están incluidas las entradas?", a: "Sí. La entrada a la Reserva Natural del Peñón, que incluye la Cueva de San Miguel y el Skywalk, está incluida en todos los tours del Peñón." },
      { q: "¿Dónde nos recogéis?", a: "En cualquier punto de Gibraltar: la frontera con España, tu hotel, los puertos deportivos o la terminal de cruceros." },
      { q: "¿El precio es por persona?", a: "No, los precios son por vehículo para hasta 6 personas. Para grupos más grandes, pídenos un presupuesto a medida." },
      { q: "¿Podemos ir si venimos desde España?", a: "Claro. Cruza la frontera a pie desde La Línea y te estaremos esperando en el lado de Gibraltar. Recuerda llevar pasaporte o DNI." },
      { q: "¿Son aptos para niños o personas con movilidad reducida?", a: "Sí. La mayoría de paradas están a pocos pasos del vehículo y adaptamos la ruta a tus necesidades. Avísanos al reservar." },
      { q: "¿Cuál es la política de cancelación?", a: "Cancelación gratuita hasta 24 horas antes del tour. ¿Mal tiempo? Cambiamos la fecha o te devolvemos el dinero." },
    ],
  },
  booking: {
    eyebrow: "Reserva tu tour",
    title: "Solicita tu reserva",
    body: "Rellena tus datos y envía la solicitud por WhatsApp o email. Te confirmaremos la disponibilidad lo antes posible.",
    fields: {
      tour: "Tour",
      date: "Fecha",
      guests: "Número de personas",
      pickup: "Punto de recogida",
      name: "Nombre completo",
      email: "Email",
      phone: "Teléfono (opcional)",
      message: "¿Algo más que debamos saber? (opcional)",
    },
    pickupOptions: ["Frontera", "Hotel en Gibraltar", "Terminal de cruceros", "Puerto deportivo", "Otro"],
    selectPlaceholder: "Selecciona…",
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por email",
    note: "Enviar una solicitud no te compromete a nada. No se realiza ningún pago online.",
    errors: {
      required: "Este campo es obligatorio.",
      email: "Introduce un email válido.",
      date: "Elige una fecha a partir de hoy.",
    },
    success: "Tu solicitud está lista: solo tienes que pulsar enviar en WhatsApp o en tu app de correo.",
    messageIntro: "¡Hola! Me gustaría solicitar un tour privado.",
    messageSubject: "Solicitud de reserva de tour",
    contactTitle: "¿Prefieres hablar?",
    contactBody: "Escríbenos directamente: normalmente respondemos en menos de una hora.",
  },
  footer: {
    tagline: "Tours privados y guiados por el Peñón de Gibraltar con guías locales.",
    explore: "Explorar",
    contact: "Contacto",
    follow: "Síguenos",
    rights: "Todos los derechos reservados.",
  },
  whatsappFloat: "Escríbenos por WhatsApp",
  whatsappGreeting: "¡Hola! Me gustaría información sobre vuestros tours.",
};

export default es;
