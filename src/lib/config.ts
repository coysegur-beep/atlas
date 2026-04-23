/**
 * Configuración global del sitio.
 * Edita estos valores y se actualizan en todo el proyecto.
 */

export const SITE = {
  name: 'Atenas Seguridad Privada Ltda.',
  shortName: 'Atenas Seguridad',
  domain: 'grupoempresarialatenas.com',
  url: 'https://grupoempresarialatenas.com',
  description: 'Empresa de seguridad privada en Barranquilla con 27 años de experiencia. Vigilancia, escoltas, medios tecnológicos y estudios de seguridad en el Atlántico, Colombia.',
  locale: 'es-CO',
  language: 'es',
  founded: 1997,
  
  contact: {
    phone: '+57 605 123 4567',
    phoneHref: 'tel:+576051234567',
    whatsapp: '+57 300 123 4567',
    whatsappLink: 'https://wa.me/573001234567',
    email: 'contacto@grupoempresarialatenas.com',
    address: {
      street: 'Calle X #X-XX',
      city: 'Barranquilla',
      region: 'Atlántico',
      country: 'Colombia',
      postalCode: '080001',
      lat: 10.9685,
      lng: -74.7813,
    },
  },
  
  social: {
    facebook: 'https://www.facebook.com/atenasseguridad',
    instagram: 'https://www.instagram.com/atenasseguridad',
    whatsapp: 'https://wa.me/573001234567',
  },
  
  // Para SEO local — Google Business Profile
  business: {
    type: 'SecurityService',
    priceRange: '$$',
    areaServed: ['Barranquilla', 'Soledad', 'Malambo', 'Puerto Colombia', 'Atlántico'],
    openingHours: 'Mo-Su 00:00-23:59', // 24/7
  },
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sistema de Gestión', href: '/sistema-integrado-gestion' },
  { label: 'Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
];

export const SERVICIOS = [
  {
    slug: 'vigilancia',
    nombre: 'Vigilancia',
    descripcionCorta: 'Personal certificado para vigilancia fija y móvil con dotación de radio, GPS y comunicación con redes de apoyo.',
    icono: 'shield',
  },
  {
    slug: 'escoltas',
    nombre: 'Escoltas',
    descripcionCorta: 'Protección especial a personas de alto riesgo en desplazamientos y eventos públicos.',
    icono: 'users',
  },
  {
    slug: 'medios-tecnologicos',
    nombre: 'Medios Tecnológicos',
    descripcionCorta: 'CCTV, alarmas, control de acceso, GPS y monitoreo 24/7 desde nuestra central.',
    icono: 'monitor',
  },
  {
    slug: 'estudios-de-seguridad',
    nombre: 'Estudios de Seguridad',
    descripcionCorta: 'Verificación de personal con informes del entorno laboral, jurídico, familiar y social.',
    icono: 'file-search',
  },
];
