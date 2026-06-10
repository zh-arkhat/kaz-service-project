import { test, expect } from '@playwright/test';

// This test performs the explicit login flow and must not reuse the global storage state
test.use({ storageState: undefined });
import { LoginScenario } from '../../scenarios/auth/login.scenario';

test('User can login', async ({ page }) => {

  const scenario = new LoginScenario(page);

  await scenario.execute(
    'arkhat.zh+admin@kazservice.kz',
    'qwerty1!'
  );

  await expect(page).toHaveURL(/dashboard/);

  // Verify dashboard heading is visible for this specific test
  await expect(page.getByRole('heading', { name: 'Добро пожаловать' })).toBeVisible();

  await test.info().attach('dashboard', {
    body: await page.screenshot(),
    contentType: 'image/png'
  });

});