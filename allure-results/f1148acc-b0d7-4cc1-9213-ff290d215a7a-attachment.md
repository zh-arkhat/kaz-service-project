# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: requests\change-status.spec.ts >> User can change request status from Новая to В работе
- Location: tests\requests\change-status.spec.ts:4:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('select').first()
    - locator resolved to <select class="px-3 py-2 text-sm rounded-lg border border-neutral-200 bg-neutral-0 text-neutral-700 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-fast">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    78 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic:
  - generic:
    - complementary:
      - generic:
        - generic: КазСервисПроект
      - navigation:
        - generic:
          - list:
            - listitem:
              - link:
                - /url: /dashboard
                - img
                - text: Дашборд
        - generic:
          - paragraph: Продажи
          - list:
            - listitem:
              - link:
                - /url: /orders
                - img
                - text: Заявки
            - listitem:
              - link:
                - /url: /clients
                - img
                - text: Клиенты
        - generic:
          - paragraph: Каталог
          - list:
            - listitem:
              - link:
                - /url: /products
                - img
                - text: Товары
            - listitem:
              - link:
                - /url: /suppliers
                - img
                - text: Поставщики
            - listitem:
              - link:
                - /url: /equipment
                - img
                - text: Оборудование клиентов
            - listitem:
              - link:
                - /url: /pricing
                - img
                - text: Правила наценки
        - generic:
          - paragraph: Управление
          - list:
            - listitem:
              - link:
                - /url: /staff
                - img
                - text: Сотрудники
            - listitem:
              - link:
                - /url: /chat-sessions
                - img
                - text: Чат-сессии
    - generic:
      - banner:
        - generic:
          - button:
            - img
            - generic: 99+
          - button:
            - generic:
              - generic: АЖ
            - generic: Архат Жаксылыков
            - img
      - main:
        - generic:
          - generic:
            - generic:
              - heading [level=1]: Заявки
              - paragraph: Полная воронка — от входящего запроса до завершения
          - generic:
            - tablist:
              - tab [selected]:
                - text: Все
                - generic: "79"
              - tab:
                - text: Новая
                - generic: "30"
              - tab:
                - text: В работе
                - generic: "7"
              - tab:
                - text: Согласована
                - generic: "6"
              - tab:
                - text: Ожидает оплаты
                - generic: "0"
              - tab:
                - text: Оплачено
                - generic: "3"
              - tab:
                - text: Ожидает отправки
                - generic: "2"
              - tab:
                - text: Отгружена
                - generic: "4"
              - tab:
                - text: Завершена
                - generic: "17"
              - tab:
                - text: Отменено
                - generic: "10"
          - generic:
            - generic:
              - generic:
                - generic:
                  - img
                  - textbox:
                    - /placeholder: Поиск по номеру, телефону или товару...
                - combobox
            - generic:
              - table:
                - rowgroup:
                  - row:
                    - columnheader: №
                    - columnheader: Телефон / Клиент
                    - columnheader: Товар
                    - columnheader: Сумма
                    - columnheader: Дата
                    - columnheader: Статус
                    - columnheader: Менеджер
                    - columnheader
                - rowgroup:
                  - row:
                    - cell: ORD-2026-000064
                    - cell:
                      - generic: "+77023461050"
                      - generic: ТОО Infoland
                    - cell:
                      - generic: 11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459
                    - cell: 488 239 ₸
                    - cell: 10.06 13:36
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000063
                    - cell:
                      - generic: "+77023461050"
                      - generic: ТОО Infoland
                    - cell:
                      - generic: Монохромный принтер Xerox Phaser 3020BI
                    - cell: 63 750 ₸
                    - cell: 10.06 13:31
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000062
                    - cell:
                      - generic: "+77076816557"
                      - generic: ТОО Infoland
                    - cell:
                      - generic: Монохромный принтер Xerox Phaser 3020BI
                    - cell: 61 200 ₸
                    - cell: 08.06 10:08
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000061
                    - cell:
                      - generic: "789456123"
                      - generic: ТОО Зарип
                    - cell:
                      - generic: МФП Canon i-SENSYS MF754Cdw (5455C023) + ещё 1
                    - cell: 488 172 ₸
                    - cell: 01.06 17:26
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000060
                    - cell:
                      - generic: "+789456123"
                      - generic: Aqshoqy
                    - cell:
                      - generic: 3D принтер Creality K1C + ещё 1
                    - cell: 685 200 ₸
                    - cell: 29.05 15:04
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000059
                    - cell:
                      - generic: "+789456123"
                      - generic: Aqshoqy
                    - cell:
                      - generic: 3D принтер Flying Bear Ghost 7 + ещё 1
                    - cell: 685 200 ₸
                    - cell: 29.05 14:41
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000058
                    - cell:
                      - generic: "+789456123"
                      - generic: Aqshoqy
                    - cell:
                      - generic: 3D принтер Creality K1C
                    - cell: 325 200 ₸
                    - cell: 29.05 14:39
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000057
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: Цветной принтер Xerox C410DN
                    - cell: 1 402 709 ₸
                    - cell: 28.05 17:38
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000056
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: Цветной принтер Xerox C410DN
                    - cell: 1 402 709 ₸
                    - cell: 28.05 17:37
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000055
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: Цветной принтер Xerox C410DN
                    - cell: 805 418 ₸
                    - cell: 28.05 17:19
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000054
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: Цветной принтер Xerox C410DN
                    - cell: 805 418 ₸
                    - cell: 28.05 17:17
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000053
                    - cell:
                      - generic: "87078215008"
                      - generic: Казсервис
                    - cell:
                      - generic: Цветной принтер Xerox VersaLink C7000DN + ещё 1
                    - cell: 8 158 253 ₸
                    - cell: 28.05 17:04
                    - cell:
                      - generic: Новая
                    - cell: —
                    - cell:
                      - generic:
                        - button: Взять в работу
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000052
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: МФП Canon i-SENSYS MF3010 (5252B004)
                    - cell: 600 000 ₸
                    - cell: 28.05 16:28
                    - cell:
                      - generic: Завершена
                    - cell: Архат Жаксылыков
                    - cell:
                      - generic:
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000051
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: 0 RING ROLLER UNIT
                    - cell: 160 ₸
                    - cell: 28.05 16:00
                    - cell:
                      - generic: Оплачено
                    - cell: Архат Жаксылыков
                    - cell:
                      - generic:
                        - button: Отправить
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000050
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: Цветной лазерный принтер Canon I-S LBP647CDW
                    - cell: 329 885 ₸
                    - cell: 28.05 14:34
                    - cell:
                      - generic: Отменено
                    - cell: Архат Жаксылыков
                    - cell:
                      - generic:
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000049
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: МФУ Ricoh SP 230SFNw
                    - cell: 126 000 ₸
                    - cell: 25.05 11:43
                    - cell:
                      - generic: Завершена
                    - cell: —
                    - cell:
                      - generic:
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000048
                    - cell:
                      - generic: "+77012345680"
                      - generic: ИП Гинятуллин И.
                    - cell:
                      - generic: Принтер Canon I-SENSYS LBP246DW II (7187C006)
                    - cell: 1 142 341 ₸
                    - cell: 24.05 18:21
                    - cell:
                      - generic: Завершена
                    - cell: Архат Жаксылыков
                    - cell:
                      - generic:
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000047
                    - cell:
                      - generic: "+77012345680"
                      - generic: ИП Гинятуллин И.
                    - cell:
                      - generic: —
                    - cell: —
                    - cell: 24.05 18:12
                    - cell:
                      - generic: Завершена
                    - cell: —
                    - cell:
                      - generic:
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000046
                    - cell:
                      - generic: "+77017389219"
                      - generic: Без компании
                    - cell:
                      - generic: Цветное МФУ Canon Pixma E414
                    - cell: 1 630 746 ₸
                    - cell: 21.05 15:23
                    - cell:
                      - generic: Завершена
                    - cell: —
                    - cell:
                      - generic:
                        - button: Детали →
                  - row:
                    - cell: ORD-2026-000045
                    - cell:
                      - generic: "+77017389219"
                      - generic: Aqshoqy
                    - cell:
                      - generic: Принтер Canon i-SENSYS LBP6030B (8468B042) + ещё 1
                    - cell: 714 017 ₸
                    - cell: 20.05 17:26
                    - cell:
                      - generic: Завершена
                    - cell: —
                    - cell:
                      - generic:
                        - button: Детали →
            - generic:
              - generic: Страница 1 из 4 · 79 заявок
              - generic:
                - button [disabled]: ← Назад
                - button: Вперёд →
  - alert
  - dialog "ORD-2026-000064" [ref=e2]:
    - button "Закрыть" [active] [ref=e3] [cursor=pointer]:
      - img [ref=e4]
    - generic [ref=e8]:
      - heading "ORD-2026-000064" [level=2] [ref=e9]
      - generic [ref=e10]: Илиас · ТОО Infoland
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13]: "Статус:"
        - generic [ref=e14]: Новая
        - generic [ref=e15]:
          - img [ref=e16]
          - text: Веб-чат
        - combobox [ref=e19] [cursor=pointer]:
          - option "Новая" [disabled] [selected]
          - option "В работе"
      - generic [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]: Сумма
          - generic [ref=e23]: 488 239 ₸
        - generic [ref=e24]:
          - generic [ref=e25]: № счёта
          - generic [ref=e26]: —
        - generic [ref=e27]:
          - generic [ref=e28]: Дата
          - generic [ref=e29]: 10.06.2026
      - generic [ref=e30]:
        - generic [ref=e31]: Состав заказа
        - table [ref=e32]:
          - rowgroup [ref=e33]:
            - row "Товар Кол-во Цена / Правило Сумма" [ref=e34]:
              - columnheader "Товар" [ref=e35]
              - columnheader "Кол-во" [ref=e36]
              - columnheader "Цена / Правило" [ref=e37]
              - columnheader "Сумма" [ref=e38]
              - columnheader [ref=e39]
          - rowgroup [ref=e40]:
            - row "11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459 Уменьшить 1 Увеличить 488 239 ₸ Поставщик 488 239 ₸ Удалить позицию" [ref=e41]:
              - cell "11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459" [ref=e42]:
                - link "11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459" [ref=e43] [cursor=pointer]:
                  - /url: /products/a9414fc7-3315-4780-b622-0bf53a860f34
              - cell "Уменьшить 1 Увеличить" [ref=e44]:
                - generic [ref=e45]:
                  - button "Уменьшить" [disabled] [ref=e46]:
                    - img [ref=e47]
                  - spinbutton [ref=e48]: "1"
                  - button "Увеличить" [ref=e49] [cursor=pointer]:
                    - img [ref=e50]
              - cell "488 239 ₸ Поставщик" [ref=e51]:
                - generic [ref=e52]: 488 239 ₸
                - link "Поставщик" [ref=e53] [cursor=pointer]:
                  - /url: /pricing/d3b10b32-1996-4678-b7c3-2b1ad501df4a
              - cell "488 239 ₸" [ref=e54]
              - cell "Удалить позицию" [ref=e55]:
                - button "Удалить позицию" [ref=e56] [cursor=pointer]:
                  - img [ref=e57]
        - generic [ref=e60]:
          - textbox "Добавить товар по названию..." [ref=e64]
          - button "+ Добавить" [disabled] [ref=e65]
      - generic [ref=e66]:
        - generic [ref=e67]: Клиент
        - generic [ref=e68]:
          - img [ref=e70]
          - generic [ref=e73]:
            - generic [ref=e75]: Илиас
            - generic [ref=e76]: "+77023461050"
            - link "ТОО Infoland" [ref=e77] [cursor=pointer]:
              - /url: /clients/d5bf4a8d-10c0-4532-9ee5-da182bbc6535
      - generic [ref=e78]:
        - generic [ref=e79]: Заметка менеджера
        - textbox "Добавьте заметку для внутреннего использования..." [ref=e80]
        - button "Сохранить" [ref=e82] [cursor=pointer]
    - generic [ref=e83]:
      - button "Закрыть" [ref=e84] [cursor=pointer]
      - generic [ref=e85]:
        - button "Отменить" [ref=e86] [cursor=pointer]
        - link "Открыть полностью →" [ref=e87] [cursor=pointer]:
          - /url: /orders/fdac47aa-9e2f-460a-aa79-5ca45e59af23
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { RequestsViewScenario } from '../../scenarios/requests/requests-view.scenario';
  3  | 
  4  | test('User can change request status from Новая to В работе', async ({ page }) => {
  5  |   const scenario = new RequestsViewScenario(page);
  6  | 
  7  |   await scenario.execute(
  8  |     'arkhat.zh+admin@kazservice.kz',
  9  |     'qwerty1!'
  10 |   );
  11 | 
  12 |   await expect(page).not.toHaveURL(/dashboard/);
  13 | 
  14 |   // Используем локаторы из requests-view.spec.ts
  15 |   const statusCombobox = page.getByRole('combobox');
  16 |   await expect(statusCombobox).toBeVisible();
  17 |   await expect(statusCombobox).toContainText('Новая');
  18 | 
  19 |   // Попробуем сменить селект: сначала нативный select, иначе клик меню
  20 |   const nativeSelect = page.locator('select');
  21 |   if (await nativeSelect.count() > 0) {
> 22 |     await nativeSelect.first().selectOption({ label: 'В работе' });
     |                                ^ Error: locator.selectOption: Test timeout of 40000ms exceeded.
  23 |   } else {
  24 |     await statusCombobox.click();
  25 |     const optionItem = page.getByRole('option', { name: 'В работе' });
  26 |     if (await optionItem.count() > 0) {
  27 |       await optionItem.first().click();
  28 |     } else {
  29 |       await page.getByText('В работе').first().click();
  30 |     }
  31 |   }
  32 | 
  33 |   // Проверяем, что статус поменялся
  34 |   await expect(statusCombobox).toContainText('В работе');
  35 |   await expect(page.getByText('В работе')).toBeVisible();
  36 | });
  37 | 
```