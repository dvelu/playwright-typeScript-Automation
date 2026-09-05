import { test, expect } from '@playwright/test';

test('captures a screenshot of the Playwright home page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveScreenshot('playwright-home.png', {
    fullPage: true,
  });
});
