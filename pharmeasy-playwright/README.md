# PharmEasy Playwright Automation

Playwright + TypeScript framework using Page Object Model, custom fixtures, test data, screenshots, HTML reports and GitHub Actions.

## Setup

```bash
npm install
npx playwright install
cp .env.example .env
```

## Run

```bash
npm test
npm run test:headed
npm run test:smoke
npm run test:regression
npm run report
```

Selectors may need updating when the live PharmEasy UI changes. Do not use real OTPs, payment credentials, or place real orders during practice.
