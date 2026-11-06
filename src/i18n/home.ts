import type { Locale } from './ui';

/** Long-form home page copy. Short labels live in ui.ts. */
export const home = {
  es: {
    principles: [
      {
        headline: 'Encuentro el problema antes que la tarea.',
        body: 'No recibo tickets. Camino la planta, veo dónde se pierde tiempo y decido qué vale la pena construir.',
      },
      {
        headline: 'Me quedo cuando se rompe.',
        body: 'Despliego lo que escribo y lidio con las consecuencias. Eso cambia cómo diseño desde el principio.',
      },
      {
        headline: 'El sistema sobrevive a la realidad, no al caso feliz.',
        body: 'Internet se cae, un operador se equivoca, un almacén no coincide. Se diseña para eso.',
      },
      {
        headline: 'Uso AI para ir más rápido, no para saber menos.',
        body: 'Trabajo a diario con agentes de código. Sigo siendo el responsable de lo que entra a producción.',
      },
    ],
    tools: [
      {
        label: 'Lo que corre en producción',
        items: ['TypeScript', 'Angular · React · Next.js', 'Node.js · NestJS', 'PostgreSQL · Prisma'],
      },
      {
        label: 'Dónde vive',
        items: ['Linux · VPS', 'Docker', 'Supabase · Firebase', 'DNS · secretos · backups'],
      },
      {
        label: 'Cómo lo construyo',
        items: ['Git · GitHub', 'Claude Code', 'Agentes de coding', 'Automatización'],
      },
    ],
    exploring: [
      {
        headline: 'Desarrollo asistido por agentes',
        body: 'Uso Claude Code todos los días. Me interesa menos el modelo y más cómo cambia el rol del que escribe software. Estoy aprendiendo esto en público, no vendiéndolo.',
      },
      {
        headline: 'Herramientas internas que se construyen solas',
        body: 'Automatizar el trabajo manual que todavía queda: reportes, capturas, conciliaciones. Menos gente copiando datos entre pantallas.',
      },
    ],
    outside: {
      headline: 'Toco el bajo en',
      band: 'Bingo at the Casino',
      bandUrl: '[ LINK DE LA BANDA ]',
      body: 'Dos EPs publicados y más canciones en proceso. Es lo único que hago donde nada se despliega.',
    },
    contact: [
      { label: '[ TU EMAIL ]', href: 'mailto:[ TU EMAIL ]', primary: true },
      { label: 'GitHub', href: '[ TU GITHUB ]', primary: false },
      { label: 'LinkedIn', href: '[ TU LINKEDIN ]', primary: false },
    ],
  },
  en: {
    principles: [
      {
        headline: 'I find the problem before the ticket.',
        body: 'Nobody hands me tickets. I walk the plant, see where time is lost, and decide what is worth building.',
      },
      {
        headline: 'I stay when it breaks.',
        body: 'I deploy what I write and deal with the consequences. That changes how I design from the start.',
      },
      {
        headline: 'The system survives reality, not the happy path.',
        body: 'The connection drops, an operator makes a mistake, a warehouse count is off. You design for that.',
      },
      {
        headline: 'I use AI to move faster, not to know less.',
        body: 'I work with coding agents every day. I am still accountable for what reaches production.',
      },
    ],
    tools: [
      {
        label: 'What runs in production',
        items: ['TypeScript', 'Angular · React · Next.js', 'Node.js · NestJS', 'PostgreSQL · Prisma'],
      },
      {
        label: 'Where it lives',
        items: ['Linux · VPS', 'Docker', 'Supabase · Firebase', 'DNS · secrets · backups'],
      },
      {
        label: 'How I build it',
        items: ['Git · GitHub', 'Claude Code', 'Coding agents', 'Automation'],
      },
    ],
    exploring: [
      {
        headline: 'Agent-assisted development',
        body: 'I use Claude Code every day. I care less about the model and more about how it changes the job of writing software. I am learning this in public, not selling it.',
      },
      {
        headline: 'Internal tools that build themselves',
        body: 'Automating the manual work that is left: reports, data entry, reconciliations. Fewer people copying numbers between screens.',
      },
    ],
    outside: {
      headline: 'I play bass in',
      band: 'Bingo at the Casino',
      bandUrl: '[ BAND LINK ]',
      body: 'Two EPs out and more songs in progress. It is the only thing I do where nothing gets deployed.',
    },
    contact: [
      { label: '[ YOUR EMAIL ]', href: 'mailto:[ YOUR EMAIL ]', primary: true },
      { label: 'GitHub', href: '[ YOUR GITHUB ]', primary: false },
      { label: 'LinkedIn', href: '[ YOUR LINKEDIN ]', primary: false },
    ],
  },
} as const satisfies Record<Locale, unknown>;
