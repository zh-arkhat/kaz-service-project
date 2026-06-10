import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
  testDir: './tests',

  timeout: 40000,
  retries: 1,

  fullyParallel: true,

  use: {
    // use saved auth state created by global-setup
    storageState: 'auth.json',
    actionTimeout: 0,
    navigationTimeout: 30000,
      
    
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // важно для чистоты отчёта
    launchOptions: {
    slowMo: 0
  }
  },

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright', {}]
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