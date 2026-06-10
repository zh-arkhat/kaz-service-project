import { test, expect } from '@playwright/test';
import { ChangeStatusScenario } from '../../scenarios/requests/change-status.scenario';

test('User can change request status from Новая to В работе (scenario)', async ({ page }) => {
  const scenario = new ChangeStatusScenario(page);

  const orderNumber = await scenario.execute();

  // Verify that the same order now shows status "В работе"
  const updatedRow = page.locator(`tr:has-text("${orderNumber}")`).first();
  await expect(updatedRow).toBeVisible({ timeout: 10000 });
  await expect(updatedRow).toContainText('В работе');
});
