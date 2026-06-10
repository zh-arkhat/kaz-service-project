import { chromium, FullConfig } from '@playwright/test';

const STORAGE = 'auth.json';
const LOGIN_URL = 'https://admin.probuy.kz/login';
const USER = process.env.TEST_USER || 'arkhat.zh+admin@kazservice.kz';
const PASS = process.env.TEST_PASS || 'qwerty1!';

export default async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(LOGIN_URL);
  await page.fill('#email', USER);
  await page.fill('#password', PASS);
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.waitForURL(/dashboard/, { timeout: 30000 }).catch(() => {});
  await page.context().storageState({ path: STORAGE });
  await browser.close();
}
