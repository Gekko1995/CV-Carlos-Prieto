export const profile = {
  name: 'Carlos Andrés Prieto Martín',
  title: 'Ingeniero Mecatrónico',
  tagline: 'Soporte técnico · Infraestructura tecnológica · Sector público',
  initials: 'CP',
  photo: null,
  about:
    'Ingeniero Mecatrónico con una trayectoria integral que combina la precisión de la mecánica industrial con la innovación de la ingeniería moderna. Mi formación inició con una base técnica y tecnológica sólida en el SENA, lo que me otorgó una visión práctica y operativa única para la resolución de problemas en planta e infraestructura. Como profesional, he liderado la representación legal y la ejecución de contratos tecnológicos en el sector público, especializándome en la modernización de servicios gubernamentales, soporte técnico avanzado y gestión de proyectos de ingeniería de alto impacto.',
};

export const credential = {
  title: 'Ingeniero Mecatrónico',
  institution: 'Fundación Universitaria Agraria de Colombia',
  institutionShort: 'UNIAGRARIA',
  registry: 'COPNIA',
  registryNote: 'Disponible con copia certificada',
  description:
    'Mi formación como Ingeniero Mecatrónico (UNIAGRARIA) es el pilar de mi capacidad para diseñar y supervisar sistemas complejos que integran mecánica, electrónica y control. Mi proyecto de grado sobre aeronaves no tripuladas para la industria ganadera refleja mi enfoque en aplicar la tecnología para resolver necesidades reales del sector productivo. Esta titulación, respaldada por mi matrícula profesional (COPNIA), me faculta para gestionar proyectos de infraestructura tecnológica con total rigor técnico y legal.',
  highlights: [
    { label: 'Diseño y supervisión', value: 'Sistemas mecánica + electrónica + control' },
    { label: 'Proyecto de grado',     value: 'Aeronaves no tripuladas (sector ganadero)' },
    { label: 'Habilita',              value: 'Gestión técnica y legal de infraestructura' },
  ],
};

export const company = {
  name: 'CONAP Soluciones',
  logo: '/images/logo-aconap.png',
  mision:
    'Proveer soluciones integrales en ingeniería y tecnología que optimicen la gestión administrativa y operativa del sector público y privado. Nos enfocamos en garantizar la continuidad de los procesos a través de un soporte técnico de alta calidad, suministros confiables y la implementación de herramientas innovadoras que faciliten la transparencia y la eficiencia institucional.',
  vision:
    'Consolidarnos para el año 2030 como la empresa líder en consultoría y servicios tecnológicos en el departamento de Cundinamarca, siendo reconocidos por nuestra integridad en la contratación pública, nuestra capacidad de respuesta técnica y nuestra contribución a la modernización digital de los entes territoriales.',
};

export const contact = {
  email: 'administracion@conapsoluciones.com',
  phone: '3212766649',
  phoneDisplay: '321 276 6649',
  matricula: 'Disponible con copia certificada',
  location: 'Cundinamarca, Colombia',
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

// Orden cronológico ascendente: del más antiguo al más reciente
export const education = [
  {
    title: 'Bachiller Técnico Industrial',
    institution: 'I.E.D. Técnico Industrial de Tocancipá',
    year: '2012',
    type: 'bachiller',
  },
  {
    title: 'Técnico en Mecánico de Maquinaria Industrial',
    institution: 'SENA',
    year: '2012',
    type: 'tecnico',
  },
  {
    title: 'Tecnólogo en Mantenimiento Electromecánico Industrial',
    institution: 'SENA',
    year: '2015',
    type: 'tecnologico',
  },
  {
    title: 'Diplomado: Gestión de proyectos a través de herramientas tecnológicas',
    institution: 'Diplomado',
    year: '2020',
    type: 'diplomado',
  },
  {
    title: 'Ingeniería Mecatrónica',
    institution: 'Fundación Universitaria Agraria de Colombia',
    year: '2021',
    type: 'pregrado',
  },
];

// Habilidades segmentadas según experiencia: cada bloque combina la base
// técnica del SENA con la capacidad de ingeniería profesional UNIAGRARIA.
// El icon es una clave que mapea a un SVG en src/components/SkillIcons.jsx
export const skills = [
  {
    icon: 'wrench',
    group: 'Soporte Técnico en Mecánica Industrial y Electromecánica',
    description:
      'Gracias a mis títulos de Técnico en Mecánico de Maquinaria Industrial y Tecnólogo en Mantenimiento Electromecánico del SENA, poseo una destreza superior en el diagnóstico y reparación de activos físicos. Esta habilidad me permite intervenir maquinaria industrial, sistemas de transmisión y componentes electromecánicos con precisión técnica, garantizando la disponibilidad operativa y prolongando la vida útil de los equipos mediante planes de mantenimiento preventivo y correctivo de alta calidad.',
    items: ['Diagnóstico de fallas', 'Maquinaria industrial', 'Sistemas de transmisión', 'Componentes electromecánicos', 'Mantenimiento preventivo', 'Mantenimiento correctivo'],
  },
  {
    icon: 'chip',
    group: 'Ingeniería Mecatrónica y Desarrollo Tecnológico',
    description:
      'Como Ingeniero, aplico el pensamiento sistémico para la integración de hardware y software. Mi experiencia incluye el diseño e implementación de soluciones tecnológicas personalizadas, desde la configuración de servidores y redes de datos hasta el desarrollo de propuestas innovadoras en robótica y automatización. Domino la gestión de proyectos tecnológicos, asegurando que cada implementación cumpla con los estándares técnicos y las necesidades de modernización de la organización.',
    items: ['Pensamiento sistémico', 'Integración hardware/software', 'Servidores y redes', 'Robótica y automatización', 'Gestión de proyectos', 'Modernización tecnológica'],
  },
  {
    icon: 'camera',
    group: 'Infraestructura de Seguridad y Transmisión Audiovisual',
    description:
      'He consolidado una especialidad técnica en la instalación y puesta en marcha de sistemas de Circuito Cerrado de Televisión (CCTV) y plataformas de streaming institucional. Mi enfoque abarca desde la infraestructura física y el cableado estructurado hasta la configuración lógica de software de transmisión, permitiendo a las entidades públicas y privadas mantener una comunicación transparente, segura y en tiempo real con sus audiencias.',
    items: ['CCTV', 'Streaming institucional', 'Cableado estructurado', 'Software de transmisión', 'Infraestructura física', 'Comunicación en tiempo real'],
  },
  {
    icon: 'briefcase',
    group: 'Gestión Legal, Logística y de Suministros',
    description:
      'Mi experiencia como Representante Legal en contratos estatales me ha dotado de una visión administrativa crítica. Tengo la capacidad de gestionar integralmente la cadena de suministros, desde la adquisición de mobiliario y tecnología hasta la logística de eventos de gran escala. Mi gestión garantiza el cumplimiento normativo en la contratación pública, asegurando que cada recurso se administre de forma eficiente para el fortalecimiento operativo de los entes territoriales.',
    items: ['Representación legal', 'Contratación pública', 'Cadena de suministros', 'Cumplimiento normativo', 'Logística de eventos', 'Adquisiciones'],
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
  { id: 'sobre',        label: 'Sobre mí',     type: 'anchor' },
  { id: 'experiencia',  label: 'Experiencia',  type: 'route', to: '/experiencia' },
  { id: 'educacion',    label: 'Educación',    type: 'anchor' },
  { id: 'habilidades',  label: 'Habilidades',  type: 'anchor' },
  { id: 'proyectos',    label: 'Proyectos',    type: 'anchor' },
  { id: 'contacto',     label: 'Contacto',     type: 'anchor' },
];
