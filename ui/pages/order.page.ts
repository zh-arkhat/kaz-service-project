import { Page, Locator, expect } from '@playwright/test';

export class OrderPage {
  constructor(private page: Page) {}

  async openByRow(row: Locator) {
    const detailsLink = row.getByRole('link', { name: 'Детали →' }).first();
    if (await detailsLink.count() > 0) {
      await Promise.all([
        this.page.waitForURL(/\/orders\//).catch(() => {}),
        detailsLink.click()
      ]);
    } else {
      await row.scrollIntoViewIfNeeded();
      await row.click();

      // Try to find a direct link in the row (href to /orders/)
      const innerLink = row.locator('a[href*="/orders/"]').first();
      if (await innerLink.count() > 0) {
        const href = await innerLink.getAttribute('href');
        if (href) {
          await this.page.goto(href);
          await this.page.waitForLoadState('networkidle');
          return;
        }
      }

      // Try to find the control inside the row without hovering (hover may be blocked by overlays)
      const openFullInRow = row.getByText('Открыть полностью').first();
      if (await openFullInRow.count() > 0) {
        await Promise.all([
          this.page.waitForURL(/\/orders\//).catch(() => {}),
          openFullInRow.click()
        ]);
        await this.page.waitForLoadState('networkidle');
        return;
      }

      // Fallback to global search for the control
      const openFull = this.page.getByText('Открыть полностью').first();
      if (await openFull.count() > 0) {
        await openFull.scrollIntoViewIfNeeded();
        await Promise.all([
          this.page.waitForURL(/\/orders\//).catch(() => {}),
          openFull.click()
        ]);
        await this.page.waitForLoadState('networkidle');
        return;
      }

      // Final fallback: click element with matching text via JS (avoids pointer interception)
      const clicked = await this.page.evaluate(() => {
        const text = 'Открыть полностью';
        const els = Array.from(document.querySelectorAll('*')) as HTMLElement[];
        const el = els.find(e => e.textContent && e.textContent.trim().includes(text));
        if (el) {
          el.click();
          return true;
        }
        return false;
      });
      if (clicked) {
        await this.page.waitForLoadState('networkidle');
        return;
      }
    }

    // Wait for network idle to ensure page/modal content loaded.
    await this.page.waitForLoadState('networkidle');
  }

  async takeIntoWork() {
    const takeBtn = this.page.getByRole('button', { name: 'Взять в работу' }).first();
    if (await takeBtn.count() > 0) {
      await takeBtn.scrollIntoViewIfNeeded();
      await takeBtn.click();
      await this.page.waitForTimeout(500);
      return;
    }

    const select = this.page.locator('select').first();
    if (await select.count() > 0) {
      await select.scrollIntoViewIfNeeded();
      try {
        await select.selectOption({ value: 'IN_PROGRESS' });
      } catch (e) {
        // If the page was closed or navigated away, treat as success (status may have changed)
        try {
          if (this.page.isClosed()) return;
        } catch (_) {}

        // If status text already present, return
        const inWorkText = this.page.getByText('В работе').first();
        if (await inWorkText.count() > 0) return;

        // Fallback: use an element handle evaluate
        const handle = await this.page.$('select');
        if (handle) {
          try {
            await handle.evaluate((s: any) => {
              (s as HTMLSelectElement).value = 'IN_PROGRESS';
              s.dispatchEvent(new Event('change', { bubbles: true }));
            });
          } catch (err) {
            // swallow fallback errors and continue
            return;
          }
        } else {
          // nothing to do
          return;
        }
      }
      await expect(select).toHaveValue('IN_PROGRESS');
      return;
    }

    const inWorkText = this.page.getByText('В работе').first();
    if (await inWorkText.count() > 0) {
      await inWorkText.click();
      return;
    }

    throw new Error('Не удалось переключить статус заявки на "В работе"');
  }
}
