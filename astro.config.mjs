import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://killoconq.github.io',
  base: 'killoconq.github.io',
  integrations: [tailwind()]
});
