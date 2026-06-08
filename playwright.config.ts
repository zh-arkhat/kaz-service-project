import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 40000,
  retries: 1,

  fullyParallel: true,

  use: {
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
    ['allure-playwright', {}] // 👈 ВАЖНО: пустой объект обязателен
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