import { Page } from '@playwright/test';
import { LoginPage } from '../../ui/pages/login.page';
import { RequestsPage } from '../../ui/pages/requests.page';
import { OrderPage } from '../../ui/pages/order.page';

export class ChangeStatusScenario {
  private loginPage: LoginPage;
  private requestsPage: RequestsPage;
  private orderPage: OrderPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
    this.requestsPage = new RequestsPage(page);
    this.orderPage = new OrderPage(page);
  }

  async execute(email: string, password: string) {
    await this.loginPage.open();
    await this.loginPage.login(email, password);

    await this.requestsPage.openRequestsSection();

    const row = this.page.locator('tr:has-text("Новая")').first();
    await row.waitFor({ state: 'visible', timeout: 10000 });
    const orderNumber = (await row.locator('td').first().innerText()).trim();

    await this.orderPage.openByRow(row);
    await this.orderPage.takeIntoWork();

    // go back to list
    await this.requestsPage.openRequestsSection();
    await this.page.waitForLoadState('networkidle');

    return orderNumber;
  }
}
