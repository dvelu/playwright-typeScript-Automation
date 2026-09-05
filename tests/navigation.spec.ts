import { test, expect } from '@playwright/test';

test.describe('Playwright documentation navigation', () => {
  test('opens the home page and verifies the title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('h1')).toContainText('Playwright');
  });

  test('navigates to the documentation page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Get started/i }).click();
    await expect(page).toHaveURL(/.*docs\/intro/);
    await expect(page.getByRole('heading', { name: /Installation/i })).toBeVisible();
  });
});
