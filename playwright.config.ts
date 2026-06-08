import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 40000,
  retries: 1,

  fullyParallel: true,

  use: {
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['list'],
    ['html']
  ],
});