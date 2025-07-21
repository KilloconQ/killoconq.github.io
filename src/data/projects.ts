import rdsImage from '../assets/images/rds.png';

export type Project = {
  title: string;
  description: string;
  img?: ImageMetadata;
  tags: string[];
  date: string; // <- importante
};

export const PROJECTS: Project[] = [
  {
    title: 'Landing page RDS',
    description: 'Landing page para RDS, empresa dedicada a productos de defensa.',
    img: rdsImage,
    tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
    date: '2022-03-01',
  },
  {
    title: 'Cotizador',
    description: `
      Aplicación web desarrollada para una empresa dedicada a la fabricación de muebles para construcción.
      Permite generar cotizaciones personalizadas, integrar catálogos de productos, y agilizar el flujo de ventas entre clientes y administración.
      Incluye lógica compleja para la selección de materiales y cálculos de precios en tiempo real. Construido con React y Firebase para asegurar rapidez, escalabilidad y flexibilidad.
    `.trim(),
    tags: ['React', 'Firebase', 'Material UI', 'JavaScript'],
    date: '2024-05-15',
  },
  {
    title: 'ERP Intralink',
    description: `
      Sistema empresarial integral para la gestión de inventarios, compras y ventas en entornos multiempresa.
      Desarrollado como solución SaaS escalable, incorpora autenticación JWT, control de acceso por roles, dashboards, y manejo avanzado de materiales y órdenes de compra.
      Utiliza Angular para el frontend y Node.js/NestJS con Postgres y Prisma para un backend robusto y seguro. Integración con procesos de automatización y reporting personalizado para fábricas y PYMES.
    `.trim(),
    tags: ['Angular', 'Node.js', 'NestJS', 'Postgres', 'Prisma'],
    date: '2025-07-01',
  },
];
