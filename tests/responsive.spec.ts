import { test, expect } from '@playwright/test';

test.describe('Responsive layout', () => {
  test('renders the home page on a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('body')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
  });

  test('renders the home page on a desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
  });
});
