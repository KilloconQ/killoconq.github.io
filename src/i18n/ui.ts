export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const ui = {
  es: {
    'site.title': 'Fernando Corrales — Sistemas internos',
    'site.description':
      'Construyo y opero los sistemas internos de una fábrica de muebles: ERP, almacén y producción.',
    'nav.work': 'Trabajo',
    'nav.notes': 'Notas',
    'nav.contact': 'Contacto',
    'nav.back': 'Trabajo',
    'nav.menu': 'Abrir menú',
    'hero.eyebrow': 'Fábrica de mobiliario · México · desarrollador principal',
    'hero.line1': 'Cuando mi código falla,',
    'hero.line2a': 'la planta',
    'hero.line2b': 'se detiene',
    'hero.body':
      'Construyo y opero los sistemas internos de una fábrica de muebles: ERP, almacén y producción. Del esquema de base de datos hasta el servidor donde corre.',
    'board.title': 'Tablero de sistemas',
    'board.polling': 'Consultando',
    'status.live': 'Operando',
    'status.building': 'En obra',
    'section.how': 'Cómo trabajo',
    'section.work': 'Trabajo seleccionado',
    'section.tools': 'Herramientas',
    'section.tools.note': 'agrupadas por para qué sirven',
    'section.exploring': 'Explorando ahora',
    'section.outside': 'Fuera del código',
    'section.notes': 'Notas',
    'contact.headline': '¿Tienes un sistema del que nadie se quiere hacer cargo?',
    'case.problem': 'El problema',
    'case.built': 'Qué construí',
    'case.decisions': 'Decisiones técnicas',
    'case.broke': 'Dónde se rompió',
    'case.learned': 'Qué aprendí',
    'case.stack': 'Stack',
    'case.context': 'Contexto',
    'case.status': 'Estado',
    'case.period': 'Periodo',
    'case.role': 'Rol',
    'case.users': 'Usuarios',
    'footer.location': 'Fernando Corrales — México',
    'footer.built': 'Astro · sin analytics',
  },
  en: {
    'site.title': 'Fernando Corrales — Internal systems',
    'site.description':
      'I build and run the internal systems of a furniture factory: ERP, warehouse and production.',
    'nav.work': 'Work',
    'nav.notes': 'Notes',
    'nav.contact': 'Contact',
    'nav.back': 'Work',
    'nav.menu': 'Open menu',
    'hero.eyebrow': 'Furniture factory · Mexico · lead developer',
    'hero.line1': 'When my code fails,',
    'hero.line2a': 'the plant',
    'hero.line2b': 'stops',
    'hero.body':
      'I build and run the internal systems of a furniture factory: ERP, warehouse and production. From the database schema to the server it runs on.',
    'board.title': 'Systems board',
    'board.polling': 'Polling',
    'status.live': 'Running',
    'status.building': 'In progress',
    'section.how': 'How I work',
    'section.work': 'Selected work',
    'section.tools': 'Tools',
    'section.tools.note': 'grouped by what they are for',
    'section.exploring': 'Exploring now',
    'section.outside': 'Outside code',
    'section.notes': 'Notes',
    'contact.headline': 'Got a system nobody wants to own?',
    'case.problem': 'The problem',
    'case.built': 'What I built',
    'case.decisions': 'Technical decisions',
    'case.broke': 'Where it broke',
    'case.learned': 'What I learned',
    'case.stack': 'Stack',
    'case.context': 'Context',
    'case.status': 'Status',
    'case.period': 'Period',
    'case.role': 'Role',
    'case.users': 'Users',
    'footer.location': 'Fernando Corrales — Mexico',
    'footer.built': 'Astro · no analytics',
  },
} as const;

export function useTranslations(locale: Locale) {
  return function t(key: keyof (typeof ui)['es']): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key];
  };
}

/** Prefix a path with the locale. Spanish lives at the root. */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  return `${prefix}${clean}`;
}
