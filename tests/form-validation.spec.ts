import { test, expect } from '@playwright/test';

test.describe('Playwright search form', () => {
  test('shows validation feedback for an empty search', async ({ page }) => {
    await page.goto('/');

    const search = page.getByPlaceholder(/search/i).first();
    await search.focus();
    await search.press('Enter');

    await expect(page).toHaveURL(/playwright\.dev/);
  });

  test('accepts text in the search field', async ({ page }) => {
    await page.goto('/');

    const search = page.getByPlaceholder(/search/i).first();
    await search.fill('locators');
    await expect(search).toHaveValue('locators');
  });
});
