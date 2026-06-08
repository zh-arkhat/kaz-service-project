import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://admin.probuy.kz/login');
  }

  async login(user: string, pass: string) {
    await this.page.locator('#email').fill(user);
    await this.page.locator('#password').fill(pass);

    await this.page.getByRole('button', { name: 'Войти' }).click();
  }
}