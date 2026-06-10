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

  async execute(email?: string, password?: string) {
    if (email && password) {
      await this.loginPage.open();
      await this.loginPage.login(email, password);
    }

    // Ensure we're on the application page (use stored auth state)
    await this.page.goto('https://admin.probuy.kz');
    await this.page.waitForLoadState('networkidle');

    await this.requestsPage.openRequestsSection();
    await this.requestsPage.openNewRequest();
  }
}