import { test, expect } from '@playwright/test';
import { LoginScenario } from '../../scenarios/auth/login.scenario';

test('User can login', async ({ page }) => {
  const scenario = new LoginScenario(page);

  await scenario.execute('admin', '1234');

  await expect(page).toHaveURL(/dashboard/);
});