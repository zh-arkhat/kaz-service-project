import { test, expect } from '@playwright/test';
import { LoginScenario } from '../../scenarios/auth/login.scenario';

test('User can login', async ({ page }) => {
  const scenario = new LoginScenario(page);

  await scenario.execute('arkhat.zh+admin@kazservice.kz', 'qwerty1!');

  await expect(page).toHaveURL(/dashboard/);
});