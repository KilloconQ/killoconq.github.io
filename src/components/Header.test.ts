import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Header from '../components/Header.astro?raw';

test('Header renderiza todos los enlaces de navegación', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Header);
  expect(result).toContain('Experiencia');
  expect(result).toContain('Proyectos');
  expect(result).toContain('Sobre mí');
  expect(result).toContain('Contacto');
});
