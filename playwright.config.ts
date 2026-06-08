import { defineConfig, devices } from '@playwright/test';

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

  // 👇 ДОБАВЬ ВОТ ЭТО
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // ← настоящий Google Chrome
        headless: false,    // ← чтобы видеть браузер
      },
    },
  ],
});