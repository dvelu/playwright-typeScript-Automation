import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByPlaceholder(/Search for medicines/i).first();
    this.loginButton = page.getByText('Login', { exact: true }).first();
  }

  async open() {
    await this.page.goto('/');
  }

  async search(product: string) {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
  }
}