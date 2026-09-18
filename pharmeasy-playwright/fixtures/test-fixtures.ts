import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SearchPage } from '../pages/SearchPage';

type Fixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  searchPage: SearchPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  searchPage: async ({ page }, use) => await use(new SearchPage(page))
});

export { expect };