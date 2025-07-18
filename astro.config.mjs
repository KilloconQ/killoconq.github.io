import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://killoconq.github.io',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  // adapter: netlify(),
});
