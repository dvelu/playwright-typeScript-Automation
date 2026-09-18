import { Page } from '@playwright/test';

export class SearchPage {
  constructor(readonly page: Page) {}

  async waitForPage() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async containsProduct(product: string) {
    return this.page.getByText(product, { exact: false }).first().isVisible()
      .catch(() => false);
  }
}