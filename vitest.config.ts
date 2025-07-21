import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default defineConfig(
  getViteConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.test.{ts,js}'],
      exclude: ['node_modules', 'dist', 'coverage', 'e2e/**/*.e2e.{ts,js}'],
    },
  })
);
