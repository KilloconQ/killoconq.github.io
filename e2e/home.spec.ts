import { test, expect } from '@playwright/test';

test('La página principal carga y muestra el título', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Portafolio de Fernando - Desarrollador Full-Stack/i);
  await expect(page.locator('h1')).toBeVisible();
});

// Test: Navigation/menu is visible and contains all expected links
test('El menú de navegación está visible y contiene los enlaces correctos', async ({ page }) => {
  await page.goto('/');
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
  await expect(nav.locator('a[aria-label="experiencia"]')).toHaveText(/Experiencia/i);
  await expect(nav.locator('a[aria-label="proyectos"]')).toHaveText(/Proyectos/i);
  await expect(nav.locator('a[aria-label="sobre-mi"]')).toHaveText(/Sobre mí/i);
  await expect(nav.locator('a[aria-label="contacto"]')).toHaveText(/Contacto/i);
});

// Test: "Experiencia" section is present and visible
test('La sección Experiencia está presente y visible', async ({ page }) => {
  await page.goto('/');
  const experienciaSection = page.locator('section#experiencia');
  await expect(experienciaSection).toBeVisible();
  await expect(experienciaSection.locator('h2')).toHaveText(/Experiencia/i);
});

// Test: "Proyectos" section is present and visible
test('La sección Proyectos está presente y visible', async ({ page }) => {
  await page.goto('/');
  const proyectosSection = page.locator('section#proyectos');
  await expect(proyectosSection).toBeVisible();
  await expect(proyectosSection.locator('h2')).toHaveText(/Proyectos/i);
});

// Test: "Sobre mí" section is present and visible
test('La sección Sobre mí está presente y visible', async ({ page }) => {
  await page.goto('/');
  const sobreMiSection = page.locator('section#sobre-mi');
  await expect(sobreMiSection).toBeVisible();
  await expect(sobreMiSection.locator('h2')).toHaveText(/Sobre mí/i);
});

// Test: All main navigation links work (scroll to section or open mail client)
test('Los enlaces de navegación funcionan correctamente', async ({ page }) => {
  await page.goto('/');
  // Experiencia
  await page.click('a[aria-label="experiencia"]');
  await expect(page.locator('section#experiencia')).toBeVisible();
  // Proyectos
  await page.click('a[aria-label="proyectos"]');
  await expect(page.locator('section#proyectos')).toBeVisible();
  // Sobre mí
  await page.click('a[aria-label="sobre-mi"]');
  await expect(page.locator('section#sobre-mi')).toBeVisible();
  // Contacto (mailto)
  const contactoLink = page.locator('a[aria-label="contacto"]');
  await expect(contactoLink).toHaveAttribute('href', /mailto:fernando.corrales@proton.me/);
});

// Test: All main headings are visible (basic accessibility)
test('Todos los encabezados principales son visibles', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('section#experiencia h2')).toBeVisible();
  await expect(page.locator('section#proyectos h2')).toBeVisible();
  await expect(page.locator('section#sobre-mi h2')).toBeVisible();
});
