import { test, expect } from '@playwright/test';

test('checks key documentation links are visible and usable', async ({ page }) => {
  await page.goto('/');

  const getStarted = page.getByRole('link', { name: /Get started/i }).first();
  await expect(getStarted).toBeVisible();
  await expect(getStarted).toHaveAttribute('href', /docs/);

  const docsLink = page.getByRole('link', { name: /^Docs$/i }).first();
  await expect(docsLink).toBeVisible();
  await expect(docsLink).toHaveAttribute('href', /docs/);
});
