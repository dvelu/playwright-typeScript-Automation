import { test, expect } from '@playwright/test';

const apiBaseUrl = 'https://playwright.dev';

test.describe('Playwright API checks', () => {
  test('returns a successful response for the home page', async ({ request }) => {
    const response = await request.get(apiBaseUrl);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test('returns HTML content from the home page', async ({ request }) => {
    const response = await request.get(apiBaseUrl);
    const body = await response.text();

    expect(response.headers()['content-type']).toContain('text/html');
    expect(body).toContain('Playwright');
  });
});
