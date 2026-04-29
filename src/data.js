export const profile = {
  name: 'Carlos Andrés Prieto Martín',
  title: 'Ingeniero Mecatrónico',
  tagline: 'Soporte técnico · Infraestructura tecnológica · Sector público',
  initials: 'CP',
  // Para usar tu foto: pon el archivo en public/images/foto.jpg y deja:
  // photo: '/images/foto.jpg'
  // Si lo dejas en null, se muestra el placeholder con iniciales.
  photo: null,
  about:
    'Ingeniero Mecatrónico con amplia experiencia en soporte técnico, gestión de infraestructura tecnológica y mantenimiento industrial para el sector público. Especialista en la ejecución de proyectos de innovación, logística y suministro de soluciones tecnológicas para entidades gubernamentales.',
};

export const contact = {
  email: 'carlos@fundacionwrts.org',
  github: 'Gekko1995',
  githubUrl: 'https://github.com/Gekko1995',
  linkedin: 'Carlos Andrés Prieto Martín',
  linkedinUrl: 'https://www.linkedin.com/',
  matricula: 'Disponible con copia certificada',
  location: 'Colombia',
};

export const experience = [
  {
    role: 'Representante Legal / Contratista Independiente',
    company: 'Sector Público',
    period: '2021 — Actualidad',
    location: 'Cundinamarca, Colombia',
    summary:
      'Ejecución de contratos de soporte técnico, infraestructura tecnológica y suministro para concejos y alcaldías municipales.',
    clients: ['Gachancipá', 'Nemocón', 'Guatavita', 'Sopó', 'Zipacón', 'Choachí'],
    bullets: [
      'Soporte técnico y mantenimiento preventivo/correctivo de equipos de cómputo, redes de datos y servidores.',
      'Suministro e instalación de sistemas de seguridad (CCTV) y circuitos de streaming para transmisiones oficiales.',
      'Gestión logística y suministro de bienes, mobiliario y tecnología para el fortalecimiento administrativo de concejos municipales.',
      'Producción y edición de gacetas municipales y textos de memoria histórica.',
    ],
  },
];

export const education = [
  {
    title: 'Ingeniería Mecatrónica',
    institution: 'Fundación Universitaria Agraria de Colombia',
    year: '2021',
    type: 'pregrado',
  },
  {
    title: 'Tecnólogo en Mantenimiento Electromecánico Industrial',
    institution: 'SENA',
    year: '2015',
    type: 'tecnologico',
  },
  {
    title: 'Técnico en Mecánico de Maquinaria Industrial',
    institution: 'SENA',
    year: '2012',
    type: 'tecnico',
  },
  {
    title: 'Bachiller Técnico Industrial',
    institution: 'I.E.D. Técnico Industrial de Tocancipá',
    year: '2012',
    type: 'bachiller',
  },
  {
    title: 'Diplomado: Gestión de proyectos a través de herramientas tecnológicas',
    institution: 'Diplomado',
    year: '2020',
    type: 'diplomado',
  },
];

export const skills = [
  {
    group: 'Industrial / Electromecánica',
    items: ['Mantenimiento preventivo y correctivo', 'Maquinaria industrial', 'Sistemas electromecánicos', 'Diagnóstico de fallas'],
  },
  {
    group: 'Soporte IT y Redes',
    items: ['Equipos de cómputo', 'Redes de datos', 'Servidores', 'Cableado estructurado'],
  },
  {
    group: 'Audiovisual y Seguridad',
    items: ['CCTV', 'Streaming oficial', 'Sistemas de votación electrónica', 'Audio profesional'],
  },
  {
    group: 'Gestión Pública',
    items: ['Contratación estatal', 'Logística de suministros', 'Gestión de proyectos', 'Edición editorial municipal'],
  },
];

// Para añadir imagen a un proyecto:
// 1. Pon el archivo en public/images/ (ej. public/images/proyecto-eth.jpg)
// 2. Añade: image: '/images/proyecto-eth.jpg'
// Si lo dejas sin image, se muestra solo la tarjeta sin foto.
export const projects = [
  {
    name: 'Plataforma ETH-ANH (PGV)',
    role: 'Desarrollo y gestión',
    description:
      'Plataforma web para la gestión y viabilidad de proyectos de inversión pública: 39 módulos integrados (diagnóstico territorial, gestión financiera, informes, georreferenciación, control documental).',
    stack: ['React', 'Supabase', 'Node/Express', 'Vercel'],
    highlight: 'Plataforma activa en producción',
    image: null,
  },
  {
    name: 'Aeronaves no tripuladas para ganadería',
    role: 'Propuesta tecnológica',
    description:
      'Propuesta de uso de drones aplicada a la industria ganadera del sector de Tocancipá, con foco en monitoreo de hato, cercas y manejo de pastos.',
    stack: ['UAV', 'Sensores', 'Análisis territorial'],
    highlight: 'Propuesta sectorial regional',
    image: null,
  },
  {
    name: 'Modernización Tecnológica de Concejos',
    role: 'Líder técnico',
    description:
      'Implementación de sistemas de votación electrónica y streaming oficial en los concejos municipales de Gachancipá y Sopó, con instalación, capacitación y soporte continuo.',
    stack: ['Hardware AV', 'Streaming', 'Redes', 'Soporte'],
    highlight: 'Implementación en 2 municipios',
    image: null,
  },
];

export const navLinks = [
  { id: 'sobre',        label: 'Sobre mí' },
  { id: 'contratos',    label: 'Contratos' },
  { id: 'experiencia',  label: 'Experiencia' },
  { id: 'educacion',    label: 'Educación' },
  { id: 'habilidades',  label: 'Habilidades' },
  { id: 'proyectos',    label: 'Proyectos' },
  { id: 'contacto',     label: 'Contacto' },
];
