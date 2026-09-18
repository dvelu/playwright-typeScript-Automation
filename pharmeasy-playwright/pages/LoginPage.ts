import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly mobileInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mobileInput = page.locator(
      'input[type="tel"], input[inputmode="numeric"]'
    ).first();
  }

  async enterMobile(number: string) {
    await this.mobileInput.fill(number);
  }
}