import { Page } from '@playwright/test';
import { LoginPage } from '../../ui/pages/login.page';
import { RequestsPage } from '../../ui/pages/requests.page';

export class RequestsViewScenario {
  private loginPage: LoginPage;
  private requestsPage: RequestsPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
    this.requestsPage = new RequestsPage(page);
  }

  async execute(email: string, password: string) {
    await this.loginPage.open();
    await this.loginPage.login(email, password);

    await this.requestsPage.openRequestsSection();
    await this.requestsPage.openNewRequest();
  }
}