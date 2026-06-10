import { test, expect } from '@playwright/test';
import { RequestsViewScenario } from '../../scenarios/requests/requests-view.scenario';

test('User can view new request', async ({ page }) => {
  const scenario = new RequestsViewScenario(page);

  await scenario.execute();

  await expect(page).not.toHaveURL(/dashboard/);

  // Проверка: в элементе select есть опция "Новая"
  const statusSelect = page.getByRole('combobox');
  await expect(statusSelect).toBeVisible();
  await expect(statusSelect).toContainText('Новая');
});