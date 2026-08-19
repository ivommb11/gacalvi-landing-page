import type { MentionCard, NavItem, ServiceAccordionItem, Stat, Testimonial } from '../types'

import mencion1 from '../assets/photos/mencion-1.webp'
import mencion2 from '../assets/photos/mencion-2.webp'
import mencion3 from '../assets/photos/mencion-3.webp'

import constructoraLogo from '../assets/photos/constructora.png'
import trainingCenterLogo from '../assets/photos/training.png'
import studioDesignLogo from '../assets/photos/studio.png'

export const SECTION_IDS = [
  'inicio',
  'sobre-nosotros',
  'servicios',
  'menciones',
  'testimonios',
  'contacto',
] as const

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Menciones', href: '#menciones' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export const FOOTER_NAV: readonly NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Menciones', href: '#menciones' },
  { label: 'Testimonios', href: '#testimonios' },
]

export const CONTACT_INFO = {
  address: 'Jirón Ilo 246 - Oficina 206. Cercado de Lima',
  phone: '+(51) 941 439 233',
  phoneHref: 'tel:+51941439233',
  email: 'contacto@gacalvi.com',
  emailHref: 'mailto:contacto@gacalvi.com',
} as const

const INSTAGRAM_BASE = 'https://www.instagram.com/'
const FACEBOOK_BASE = 'https://www.facebook.com/'
export const SOCIAL_HANDLES: readonly { handle: string; href: string }[] = [
  { handle: 'studiodesign.gacalvi', href: `${INSTAGRAM_BASE}studiodesign.gacalvi` },
  { handle: 'trainingcenter.gacalvi', href: `${INSTAGRAM_BASE}trainingcenter.gacalvi` },
  { handle: 'constructora.gacalvi', href: `${INSTAGRAM_BASE}constructora.gacalvi` },
]

export const SOCIAL_BRANDS: readonly { name: string; href: string }[] = [
  { name: 'Constructora Gacalvi', href: `${FACEBOOK_BASE}profile.php?id=100063643509708` },
  { name: 'Gacalvi Studio Design', href: `${FACEBOOK_BASE}profile.php?id=100077465508259` },
  { name: 'Gacalvi Training Center', href: `${FACEBOOK_BASE}trainingcenter.gacalvi` },
]

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Gracias a Corporación Gacalvi pude comprender que para ser una gran profesional tenia se tiene que aprender a trabajar en equipo. Es por ello que como asistente de oficina técnica pude apreciar el apoyo que hay dentro de la empresa para que cada uno de los que colaboramos ahí estemos siempre capacitados y dispuestos a superarnos día a día.',
    name: 'Juan José Sarmiento',
    role: 'Asistente de oficina técnica',
  },
  {
    quote:
        'Trabajar como asistente de proyectos me permitió expandir mis conocimientos en la materia, entendiendo lo que significa ser un profesional que busca la calidad en cada uno de sus proyectos.',
    name: 'Alexandra Ponce',
    role: 'Asistente de proyectos',
  },
  {
    quote:
        'Como empresa hemos trabajado muchos años a lado de Corporación Gacalvi, siempre teniendo óptimos resultados gracias a los excelentes profesionales con los que cuenta la empresa.',
    name: 'Alex Anyosa',
    role: 'Gerente Meccel Ingenieros',
  },
  {
    quote:
        'Confiar mis metas a Constructora e Inmobiliaria Gacalvi ha sido una experiencia gratificante. El compromiso del área gerencial, administrativa y técnica lo vi reflejado en la eficacia y eficiencia con la que entregaron cada uno de los proyectos. Sin duda, trabajar de su mano fue la mejor decisión.',
    name: 'Leonardo Salinas',
    role: 'Gerente Negocios Comerciales E.I.R.L.',
  },
  {
    quote:
        'Gran parte de mi crecimiento profesional se debe a mi experiencia como colaborador de Constructora e Inmobiliaria Gacalvi. En mi estadía dentro de la empresa aprendí que toda ejecución de un proyecto tiene que ser, ante todo, ética y útil para quienes confían en nosotros. Trabajar con Gacalvi ha aportado significativamente en mi carrera como arquitecto.',
    name: 'Andres Higa',
    role: 'Asistente de Proyectos',
  },
]

export const MENTIONS: readonly MentionCard[] = [
  {
    id: 'constructivo-2026',
    src: mencion1,
    alt: 'Edificio moderno premiado',
    title: 'Reinventado la construcción de las edificaciones',
    category: 'Conferencia Online',
    date: '',
    description:
      '',
    fullText:
      'El Ing. Gabriel Calderón Vivar, miembro de Gacalvi, participo como expositor de la conferencia “Reinventando la construcción de las edificaciones”, organizada por la revista CONSTRUCTIVO y ExpoCONSTRUCTIVO. La participación del ingeniero Calderón giró en torno a los bloques de concreto: ventajas, uso y respuesta del personal de obra.\n'+'\n' +
        'Diversas son las ventajas que tiene el uso de bloques de concreto, de las cuales hemos decidido resaltar las dos más significativas para la empresa.\n' +
        '\n' +
        '•\tEntre las ventajas del uso de bloques de concreto se evidencian: un mayor avance en un menor tiempo, fácil y práctico manejo en obra, como también, variedad de medidas.\n' +'\n' +
        '•\tLa renuencia del personal frente a nuevos sistemas constructivos debe ser un tema que las personas involucradas en el rubro de la construcción han de tomar en cuenta, pues aún existe un miedo a enfrentar los cambios. Se debe empezar por forjar la confianza en otras técnicas que escapan de lo convencional.',
  },
  {
    id: 'bloques-concreto',
    src: mencion2,
    alt: 'Bloques de concreto para tu obra',
    title: '¿Por qué elegir bloques de concreto para tu obra?',
    category: 'Artículo',
    date: '',
    description: 'El Ing. Gabriel Calderón Vivar, nos instruye sobre el uso de bloques de concreto. A lo largo de la entrevista brindada a la revista Constructivo en su edición número 146 nos comenta cuáles son las mayores ventajas de utilizar bloques de concreto en un proyecto inmobiliario.',
    fullText:
        'El Ing. Gabriel Calderón Vivar, nos instruye sobre el uso de bloques de concreto. A lo largo de la entrevista brindada a la revista Constructivo en su edición número 146 nos comenta cuáles son las mayores ventajas de utilizar bloques de concreto en un proyecto inmobiliario.\n'+'\n'+
        'MASSA DUN DUN\n' +
        '«Massa Dun Dun es un innovador producto que viene revolucionando la manera de construir. Fuerte, resistente y práctica, esta mezcla de polímeros para el asentado de ladrillo rinde hasta veinte veces más que el mortero convencional.»\n' +
        '\n' +
        '•\tProducto Sustentable\n' +
        '•\tMayor productividad\n' +
        '•\tElimina variaciones en el mortero tradicional\n' +
        '•\tProducto sustentable',
  },
  {
    id: 'massa-dun-dun',
    src: mencion3,
    alt: 'Massa Dun Dun: bloques de concreto',
    title: 'Massa Dun Dun: Resistente, eficiente y rentable en toda obra.',
    category: 'Entrevista',
    date: '',
    description: 'El Ing. Gabriel Calderón Vivar, miembro de Gacalvi, tuvo una pequeña entrevista para la nueva edición de constructivo. En esta oportunidad, comentó sobre las ventajas de uno de los productos que venimos implementando y sus beneficios en obra.',
    fullText:
        'El Ing. Gabriel Calderón Vivar, miembro de Gacalvi, tuvo una pequeña entrevista para la nueva edición de constructivo. En esta oportunidad, comentó sobre las ventajas de uno de los productos que venimos implementando y sus beneficios en obra.\n'+'\n'+
        'BLOQUES DE CONCRETO\n' +
        'Son elementos premoldeados de medidas uniformes y resistentes, fabricados para la construcción de muro y tabiques. Han sido producidos a partir de un sistema de tecnología avanzada para garantizar su competitividad y calidad. Son ideales para mampostería, viviendas, diversidad de muros perimetrales, industriales, entre otros.\n' +
        '\n' +
        '•\tVersátil\n' +
        '•\tResistente\n' +
        '•\tEconomizador de tiempo y recursos\n' +
        '•\tPráctico',
  },
]

export const STATS: readonly Stat[] = [
  { value: '100+', lines: ['Proyectos', 'EJECUTADOS'] },
  { value: '20+', lines: ['AÑOS EN EL', 'MERCADO'] },
]

export const SERVICES: readonly ServiceAccordionItem[] = [
  {
    id: 'constructora',
    title: 'Constructora',
    logo: constructoraLogo,
    description:
      'Estamos dispuestos a convertir espacios vacíos en proyectos con calidad, seguridad y eficiencia.',
  },
  {
    id: 'training-center',
    title: 'Training Center',
    logo: trainingCenterLogo,
    description:
      'Capacitaciones constantes para futuros representantes del rubro arquitectónico y de la ingeniería.',
  },
  {
    id: 'studio-design',
    title: 'Studio Design',
    logo: studioDesignLogo,
    description:
      'El diseño arquitectónico se ha convertido en nuestro aliado para realizar lo que tu mente imagina.',
  },
]
