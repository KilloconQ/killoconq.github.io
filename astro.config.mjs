import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://killoconq.github.io',
  base: 'killoconq.github.io',
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify()
});