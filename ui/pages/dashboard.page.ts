import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async expectLoaded() {
    await this.page.waitForURL(/dashboard/);
  }
}