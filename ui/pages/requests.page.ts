import { Page, expect } from '@playwright/test';

export class RequestsPage {
  constructor(private page: Page) {}

  async openRequestsSection() {
    await this.page.getByRole('link', { name: 'Заявки', exact: true }).click();
  }

  async openNewRequest() {
    const row = this.page.locator('tr:has-text("Новая")').first();

    await expect(row).toBeVisible();
    await row.click();
  }
}