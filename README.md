# Portfolio – Astro Project

Este proyecto es un portafolio personal desarrollado con [Astro](https://astro.build), un moderno framework para crear sitios web rápidos y flexibles. El objetivo es mostrar experiencia, proyectos y habilidades de manera profesional y atractiva.

## 🚀 Estructura del Proyecto

```
/
├── src/
│   ├── components/      # Componentes reutilizables (About, Header, Projects, etc.)
│   ├── layouts/         # Layouts base para las páginas
│   ├── pages/           # Páginas principales del sitio
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── styles/          # Estilos globales y Tailwind
│   └── data/            # Datos de proyectos y experiencia
├── public/              # Archivos públicos y favicon
├── package.json         # Dependencias y scripts
└── AGENTS.md            # Guía para agentes automáticos
```

## 🧑‍💻 Principales Características

- **Astro** para renderizado rápido y flexible.
- **Tailwind CSS** para estilos modernos y personalizables.
- **TypeScript** para tipado seguro y mantenible.
- **Componentes modulares** para fácil extensión y mantenimiento.
- **Datos centralizados** para proyectos y experiencia.

## 🧞 Comandos Útiles

| Comando                   | Acción                                   |
| ------------------------- | ---------------------------------------- |
| `bun install`             | Instala dependencias                     |
| `bun run dev`             | Inicia el servidor de desarrollo         |
| `bun run build`           | Genera el sitio para producción          |
| `bun run preview`         | Previsualiza el sitio generado           |
| `bunx prettier --write .` | Formatea el código según las reglas      |
| `bunx eslint .`           | Linting del código (si está configurado) |
| `bunx astro check`        | Verifica la configuración de Astro       |

## 🧪 Pruebas (Testing)

Este proyecto soporta pruebas unitarias, de integración y end-to-end (E2E).

### 1. Tests unitarios (datos/lógica)

Ejecuta todos los tests unitarios con:

```bash
bunx vitest run
```

### 2. Tests de componentes Astro

Por compatibilidad, ejecuta estos tests con Node.js (no con Bun):

```bash
npx vitest run src/components/Header.test.ts
```

> Nota: Actualmente, los tests de componentes Astro con la Container API no funcionan en Bun por un bug de compatibilidad con esbuild. Usa Node.js para estos tests.

### 3. Tests end-to-end (E2E)

Ejecuta los tests E2E con Playwright:

```bash
bunx playwright test
```

- Los tests de datos y lógica funcionan perfectamente con Bun.
- Los tests E2E funcionan perfectamente con Bun.
- Los tests de componentes Astro requieren Node.js por ahora.

Para más información, consulta la documentación oficial de [Astro Testing](https://docs.astro.build/en/guides/testing/).

## 📚 Aprende más

- [Documentación de Astro](https://docs.astro.build)
- [Discord de Astro](https://astro.build/chat)
