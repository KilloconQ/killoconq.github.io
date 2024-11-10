/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, c as createAstro, d as renderHead, e as renderComponent, f as renderSlot } from '../chunks/astro/server_lYGD11KA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia"
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:fernando.corrales@proton.me"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"> <nav class="flex px-3 text-sm font-medium rounded-full text-white dark:text-white justify-center items-center bg-gray-800"> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")}> ${link.title} </a>`)} </nav> </header>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://killoconq.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://killoconq.github.io");
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white"> ${company} </h4> <time class="p-0 m-0 text-sm text-gray-200/80 dark:text-white-600/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-white-600 dark:text-gray-300 md:col-span-3"> ${description} </div> </div>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      date: "2024 - Actualidad",
      title: "Software Developer",
      company: "CARFAXMX",
      description: "Desarrollador de aplicaciones web y microservicios para la empresa y sus clientes. Mantenimiento y actualizaci\xF3n a nuevas versiones de frameworks."
    },
    {
      date: "2022 - 2024",
      title: "Software Developer",
      company: "Netlogistik",
      description: "Responsable de la creaci\xF3n de nuevos componentes, utilidades y testing para plataforma de manejo de personal tanto Frontend y API. Mejora de un 30% en la entrega de software."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/components/Experience.astro", void 0);

const $$Astro = createAstro("https://killoconq.github.io");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full mx-auto lg:w-[740px] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/components/SectionContainer.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const PROJECTS = [
    {
      title: "Landing page RDS",
      description: "Landing page para RDS, empresa dedicada a productos de defensa.",
      img: "images/rds.png",
      tags: ["html", "css", "js", "astro"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ title, description, tags, img }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(img, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-yellow-400 dark:text-yellow-400"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag} py-1 px-2 `, "class")}></span> </li>`)} </ul> <div class="mt-2 text-gray-400 dark:text-gray-400"> ${description} </div> </div> </div> </article>`)} </div>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/components/Projects.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-white dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Fernando. Empecé a programar con una web de videojuegos hecha en
      HTML. Actualmente estoy <strong>trabajando con equipos multidisciplinarios y guiando nuevos
        desarrolladores</strong>.
</p> <p>
Algunos de mis éxitos incluyen <strong>desarrollar landing pages y ecommerce para empresas, así como software
        de almacenes</strong>. Siempre enfocado en la satisfacción del cliente y el desarrollo
      continuo de la mano de las técnologias más actuales.
</p> </div> </article>`;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/components/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio de Fernando - Desarrollador Full-Stack", "description": "Contrata a Fernando para crear tu aplicaci\xF3n web. Especializado en hacer realidad los sue\xF1os de mis clientes", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "w-full mx-auto py-44 lg:w-[740px]", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h1 class="text-white text-5xl font-bold flex justify-center flex-row" data-astro-cid-j7pv25f6>
Hola, soy Fernando
</h1> <h2 data-astro-cid-j7pv25f6>
3 años de experiencia. Desarrollador Full-Stack. Especializado en hacer
        realidad los sueños de mis clientes
</h2> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-semibold mb-6 flex gap-x-3 items-center" data-astro-cid-j7pv25f6>
Experiencia
</h2> ${renderComponent($$result3, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos", "class": "py-16", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-semibold mb-6 flex gap-x-3 items-center" data-astro-cid-j7pv25f6>
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi", "class": "mt-16", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-semibold mb-6 flex gap-x-3 items-center" data-astro-cid-j7pv25f6>
Sobre mí
</h2> ${renderComponent($$result3, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ` })} </main> ` })} `;
}, "/Users/fernandocorrales/Dev/projects/web/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/fernandocorrales/Dev/projects/web/portfolio/src/pages/index.astro";
const $$url = "/killoconq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
