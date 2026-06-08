import { LoginPage } from '../../ui/pages/login.page';

export class LoginScenario {
  constructor(private page) {
    this.loginPage = new LoginPage(page);
  }

  async execute(user: string, pass: string) {
    await this.loginPage.open();
    await this.loginPage.login(user, pass);
  }
}