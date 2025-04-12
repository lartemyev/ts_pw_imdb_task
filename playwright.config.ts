import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.imdb.com',
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 }
  },
  testDir: './tests',
  testMatch: '*.spec.ts',
  reporter: [
    ['list'], // console
    ['html', { outputFolder: 'playwright-report' }], // HTML report
  ]
});