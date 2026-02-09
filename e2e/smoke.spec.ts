import { test, expect } from '@playwright/test';

/**
 * Smoke testovi – verifikacija da sajt radi.
 * Pokreće se jednom dnevno na GitHub Actions.
 */

test.describe('Sajt radi', () => {
  test('početna se učitava', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SAVAPEX/);
    await expect(page.locator('nav')).toBeVisible();
  });

  test('navigacija do glavnih stranica', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();

    await page.click('nav a:has-text("O Nama")');
    await expect(page).toHaveURL(/about-us/);

    await page.click('nav a:has-text("Proizvodi")');
    await expect(page).toHaveURL(/products/);

    await page.click('nav a:has-text("Usluge")');
    await expect(page).toHaveURL(/services/);

    await page.click('nav a:has-text("Reference")');
    await expect(page).toHaveURL(/references/);

    await page.click('nav a:has-text("Kontakt")');
    await expect(page).toHaveURL(/contact-us/);
  });
});
