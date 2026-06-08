import { Page } from '@playwright/test';
import { LoginPage } from '../../ui/pages/login.page';

export class LoginScenario {
  private loginPage: LoginPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async openLoginPage() {
    await this.loginPage.open();
  }

  async login(user: string, pass: string) {
    await this.loginPage.login(user, pass);
  }

  async execute(user: string, pass: string) {
    await this.openLoginPage();
    await this.login(user, pass);
  }
}