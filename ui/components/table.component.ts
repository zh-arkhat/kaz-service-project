import { Page } from '@playwright/test';

export class TableComponent {
  constructor(private page: Page) {}

  async findRow(text: string) {
    return this.page.locator(`tr:has-text("${text}")`);
  }
}