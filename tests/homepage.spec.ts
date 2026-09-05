import { test, expect } from '@playwright/test';

test('homepage has the expected title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link navigates to docs', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /get started/i }).click();
  await expect(page).toHaveURL(/.*intro/);
});
