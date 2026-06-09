# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: requests\requests-view.spec.ts >> User can view new request
- Location: tests\requests\requests-view.spec.ts:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Заявки') resolved to 3 elements:
    1) <a href="/orders" class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-fast text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100">…</a> aka getByRole('link', { name: 'Заявки', exact: true })
    2) <p class="font-semibold text-neutral-900">Последние заявки</p> aka getByText('Последние заявки')
    3) <a href="/orders" class="text-sm text-neutral-500 hover:text-brand transition-colors duration-fast">Все заявки →</a> aka getByRole('link', { name: 'Все заявки →' })

Call log:
  - waiting for getByText('Заявки')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - complementary [ref=e3]:
      - generic [ref=e5]: КазСервисПроект
      - navigation [ref=e6]:
        - list [ref=e8]:
          - listitem [ref=e9]:
            - link "Дашборд" [ref=e10] [cursor=pointer]:
              - /url: /dashboard
              - img [ref=e11]
              - text: Дашборд
        - generic [ref=e16]:
          - paragraph [ref=e17]: Продажи
          - list [ref=e18]:
            - listitem [ref=e19]:
              - link "Заявки" [ref=e20] [cursor=pointer]:
                - /url: /orders
                - img [ref=e21]
                - text: Заявки
            - listitem [ref=e25]:
              - link "Клиенты" [ref=e26] [cursor=pointer]:
                - /url: /clients
                - img [ref=e27]
                - text: Клиенты
        - generic [ref=e31]:
          - paragraph [ref=e32]: Каталог
          - list [ref=e33]:
            - listitem [ref=e34]:
              - link "Товары" [ref=e35] [cursor=pointer]:
                - /url: /products
                - img [ref=e36]
                - text: Товары
            - listitem [ref=e40]:
              - link "Поставщики" [ref=e41] [cursor=pointer]:
                - /url: /suppliers
                - img [ref=e42]
                - text: Поставщики
            - listitem [ref=e47]:
              - link "Оборудование клиентов" [ref=e48] [cursor=pointer]:
                - /url: /equipment
                - img [ref=e49]
                - text: Оборудование клиентов
            - listitem [ref=e51]:
              - link "Правила наценки" [ref=e52] [cursor=pointer]:
                - /url: /pricing
                - img [ref=e53]
                - text: Правила наценки
        - generic [ref=e57]:
          - paragraph [ref=e58]: Управление
          - list [ref=e59]:
            - listitem [ref=e60]:
              - link "Сотрудники" [ref=e61] [cursor=pointer]:
                - /url: /staff
                - img [ref=e62]
                - text: Сотрудники
            - listitem [ref=e67]:
              - link "Чат-сессии" [ref=e68] [cursor=pointer]:
                - /url: /chat-sessions
                - img [ref=e69]
                - text: Чат-сессии
    - generic [ref=e71]:
      - banner [ref=e72]:
        - generic [ref=e73]:
          - button "Уведомления" [ref=e74] [cursor=pointer]:
            - img [ref=e75]
            - generic [ref=e78]: 99+
          - button "АЖ Архат Жаксылыков" [ref=e79] [cursor=pointer]:
            - generic [ref=e81]: АЖ
            - generic [ref=e82]: Архат Жаксылыков
            - img [ref=e83]
      - main [ref=e85]:
        - generic [ref=e86]:
          - generic [ref=e88]:
            - heading "Добро пожаловать" [level=1] [ref=e89]
            - paragraph [ref=e90]: Обзор системы за сегодня — 9 июня 2026 г.
          - generic [ref=e91]:
            - button "Сегодня" [ref=e92] [cursor=pointer]
            - button "Неделя" [ref=e93] [cursor=pointer]
            - button "Месяц" [ref=e94] [cursor=pointer]
            - button "Все" [ref=e95] [cursor=pointer]
            - button "Период" [ref=e96] [cursor=pointer]
          - generic [ref=e97]:
            - generic [ref=e99] [cursor=pointer]:
              - generic [ref=e100]:
                - paragraph [ref=e101]: Заявок всего
                - paragraph [ref=e102]: "77"
              - img [ref=e104]
            - generic [ref=e108]:
              - generic [ref=e109]:
                - paragraph [ref=e110]: Оборот за всё время
                - paragraph [ref=e111]: 9.2M ₸
                - paragraph [ref=e112]: "Сумма заявок в статусах: Согласована, Ожидает оплату, Оплачено, Ожидает отправки, Отгружена, Завершена. Без новых, отменённых и архивных."
              - img [ref=e114]
            - generic [ref=e116]:
              - generic [ref=e117]:
                - paragraph [ref=e118]: Выручка за всё время
                - paragraph [ref=e119]: 8.4M ₸
                - paragraph [ref=e120]: "Сумма оплаченных заявок (деньги получены). Статусы: Оплачено, Ожидает отправки, Отгружена, Завершена."
              - img [ref=e122]
            - generic [ref=e126]:
              - generic [ref=e127]:
                - paragraph [ref=e128]: Прибыль за всё время
                - paragraph [ref=e129]: 524K ₸
                - paragraph [ref=e130]: "Чистый заработок сверх закупочной цены. Статус: Завершена."
              - img [ref=e132]
            - generic [ref=e136]:
              - generic [ref=e137]:
                - paragraph [ref=e138]: Активных поставщика
                - paragraph [ref=e139]: "12"
              - img [ref=e141]
          - generic [ref=e146]:
            - generic [ref=e147]:
              - generic [ref=e148]:
                - generic [ref=e149]:
                  - paragraph [ref=e150]: Последние заявки
                  - paragraph [ref=e151]: Требуют вашего внимания
                - link "Все заявки →" [ref=e152] [cursor=pointer]:
                  - /url: /orders
              - generic [ref=e153]:
                - button "Все" [ref=e154] [cursor=pointer]
                - button "Новые" [ref=e155] [cursor=pointer]
                - button "В работе" [ref=e156] [cursor=pointer]
                - button "Ожидает оплату" [ref=e157] [cursor=pointer]
              - table [ref=e159]:
                - rowgroup [ref=e160]:
                  - row "№ Клиент Сумма Дата Статус" [ref=e161]:
                    - columnheader "№" [ref=e162]
                    - columnheader "Клиент" [ref=e163]
                    - columnheader "Сумма" [ref=e164]
                    - columnheader "Дата" [ref=e165]
                    - columnheader "Статус" [ref=e166]
                    - columnheader [ref=e167]
                - rowgroup [ref=e168]:
                  - row "ORD-2026-000062 Ильдар +77076816557 61 200 ₸ 08.06 10:08 Новая Детали →" [ref=e169]:
                    - cell "ORD-2026-000062" [ref=e170]
                    - cell "Ильдар +77076816557" [ref=e171]:
                      - generic [ref=e172]: Ильдар
                      - generic [ref=e173]: "+77076816557"
                    - cell "61 200 ₸" [ref=e174]
                    - cell "08.06 10:08" [ref=e175]
                    - cell "Новая" [ref=e176]:
                      - generic [ref=e177]: Новая
                    - cell "Детали →" [ref=e178]:
                      - link "Детали →" [ref=e179] [cursor=pointer]:
                        - /url: /orders/14eba2fb-f9a1-43ec-9d64-026715591990
                  - row "ORD-2026-000061 Зарип Пиржанов 789456123 488 172 ₸ 01.06 17:26 Новая Детали →" [ref=e180]:
                    - cell "ORD-2026-000061" [ref=e181]
                    - cell "Зарип Пиржанов 789456123" [ref=e182]:
                      - generic [ref=e183]: Зарип Пиржанов
                      - generic [ref=e184]: "789456123"
                    - cell "488 172 ₸" [ref=e185]
                    - cell "01.06 17:26" [ref=e186]
                    - cell "Новая" [ref=e187]:
                      - generic [ref=e188]: Новая
                    - cell "Детали →" [ref=e189]:
                      - link "Детали →" [ref=e190] [cursor=pointer]:
                        - /url: /orders/7d1e4f07-2a88-4b2b-b710-2c2ff96c944e
                  - row "ORD-2026-000060 Жаманбаев Куат +789456123 685 200 ₸ 29.05 15:04 Новая Детали →" [ref=e191]:
                    - cell "ORD-2026-000060" [ref=e192]
                    - cell "Жаманбаев Куат +789456123" [ref=e193]:
                      - generic [ref=e194]: Жаманбаев Куат
                      - generic [ref=e195]: "+789456123"
                    - cell "685 200 ₸" [ref=e196]
                    - cell "29.05 15:04" [ref=e197]
                    - cell "Новая" [ref=e198]:
                      - generic [ref=e199]: Новая
                    - cell "Детали →" [ref=e200]:
                      - link "Детали →" [ref=e201] [cursor=pointer]:
                        - /url: /orders/cee9da91-8e3d-46c4-9ad8-77d540786b1d
                  - row "ORD-2026-000059 Жаманбаев Куат +789456123 685 200 ₸ 29.05 14:41 Новая Детали →" [ref=e202]:
                    - cell "ORD-2026-000059" [ref=e203]
                    - cell "Жаманбаев Куат +789456123" [ref=e204]:
                      - generic [ref=e205]: Жаманбаев Куат
                      - generic [ref=e206]: "+789456123"
                    - cell "685 200 ₸" [ref=e207]
                    - cell "29.05 14:41" [ref=e208]
                    - cell "Новая" [ref=e209]:
                      - generic [ref=e210]: Новая
                    - cell "Детали →" [ref=e211]:
                      - link "Детали →" [ref=e212] [cursor=pointer]:
                        - /url: /orders/8d9fc48f-cad3-46ea-9a72-354d8844a71a
                  - row "ORD-2026-000058 Жаманбаев Куат +789456123 325 200 ₸ 29.05 14:39 Новая Детали →" [ref=e213]:
                    - cell "ORD-2026-000058" [ref=e214]
                    - cell "Жаманбаев Куат +789456123" [ref=e215]:
                      - generic [ref=e216]: Жаманбаев Куат
                      - generic [ref=e217]: "+789456123"
                    - cell "325 200 ₸" [ref=e218]
                    - cell "29.05 14:39" [ref=e219]
                    - cell "Новая" [ref=e220]:
                      - generic [ref=e221]: Новая
                    - cell "Детали →" [ref=e222]:
                      - link "Детали →" [ref=e223] [cursor=pointer]:
                        - /url: /orders/1d5af968-f4ee-4b8e-bf83-7b4d32de71d0
                  - row "ORD-2026-000057 Архатулы Рауан +77017389219 1 402 709 ₸ 28.05 17:38 Новая Детали →" [ref=e224]:
                    - cell "ORD-2026-000057" [ref=e225]
                    - cell "Архатулы Рауан +77017389219" [ref=e226]:
                      - generic [ref=e227]: Архатулы Рауан
                      - generic [ref=e228]: "+77017389219"
                    - cell "1 402 709 ₸" [ref=e229]
                    - cell "28.05 17:38" [ref=e230]
                    - cell "Новая" [ref=e231]:
                      - generic [ref=e232]: Новая
                    - cell "Детали →" [ref=e233]:
                      - link "Детали →" [ref=e234] [cursor=pointer]:
                        - /url: /orders/03d37253-80be-4d33-9fcb-bee3c293bcd8
                  - row "ORD-2026-000056 Архатулы Рауан +77017389219 1 402 709 ₸ 28.05 17:37 Новая Детали →" [ref=e235]:
                    - cell "ORD-2026-000056" [ref=e236]
                    - cell "Архатулы Рауан +77017389219" [ref=e237]:
                      - generic [ref=e238]: Архатулы Рауан
                      - generic [ref=e239]: "+77017389219"
                    - cell "1 402 709 ₸" [ref=e240]
                    - cell "28.05 17:37" [ref=e241]
                    - cell "Новая" [ref=e242]:
                      - generic [ref=e243]: Новая
                    - cell "Детали →" [ref=e244]:
                      - link "Детали →" [ref=e245] [cursor=pointer]:
                        - /url: /orders/8b3e46b6-4d9b-49fd-b0b9-6b2dad1762f9
                  - row "ORD-2026-000055 Архатулы Рауан +77017389219 805 418 ₸ 28.05 17:19 Новая Детали →" [ref=e246]:
                    - cell "ORD-2026-000055" [ref=e247]
                    - cell "Архатулы Рауан +77017389219" [ref=e248]:
                      - generic [ref=e249]: Архатулы Рауан
                      - generic [ref=e250]: "+77017389219"
                    - cell "805 418 ₸" [ref=e251]
                    - cell "28.05 17:19" [ref=e252]
                    - cell "Новая" [ref=e253]:
                      - generic [ref=e254]: Новая
                    - cell "Детали →" [ref=e255]:
                      - link "Детали →" [ref=e256] [cursor=pointer]:
                        - /url: /orders/62a0da5c-937f-48b9-b715-e7ec40c87932
                  - row "ORD-2026-000054 Архатулы Рауан +77017389219 805 418 ₸ 28.05 17:17 Новая Детали →" [ref=e257]:
                    - cell "ORD-2026-000054" [ref=e258]
                    - cell "Архатулы Рауан +77017389219" [ref=e259]:
                      - generic [ref=e260]: Архатулы Рауан
                      - generic [ref=e261]: "+77017389219"
                    - cell "805 418 ₸" [ref=e262]
                    - cell "28.05 17:17" [ref=e263]
                    - cell "Новая" [ref=e264]:
                      - generic [ref=e265]: Новая
                    - cell "Детали →" [ref=e266]:
                      - link "Детали →" [ref=e267] [cursor=pointer]:
                        - /url: /orders/96c2f3bd-299d-45a7-a135-8dcb11b71c3e
                  - row "ORD-2026-000053 Ильдар 87078215008 8 158 253 ₸ 28.05 17:04 Новая Детали →" [ref=e268]:
                    - cell "ORD-2026-000053" [ref=e269]
                    - cell "Ильдар 87078215008" [ref=e270]:
                      - generic [ref=e271]: Ильдар
                      - generic [ref=e272]: "87078215008"
                    - cell "8 158 253 ₸" [ref=e273]
                    - cell "28.05 17:04" [ref=e274]
                    - cell "Новая" [ref=e275]:
                      - generic [ref=e276]: Новая
                    - cell "Детали →" [ref=e277]:
                      - link "Детали →" [ref=e278] [cursor=pointer]:
                        - /url: /orders/ada7c36c-bfd2-405f-b65e-74fb6db3e952
            - generic [ref=e279]:
              - paragraph [ref=e281]: Последние события
              - generic [ref=e282]:
                - generic [ref=e283]:
                  - img [ref=e285]
                  - paragraph [ref=e288]: Архат Жаксылыков изменил статус заявки ORD-2026-000052 → Завершена
                  - generic [ref=e289]: 12 дней назад
                - generic [ref=e290]:
                  - img [ref=e292]
                  - paragraph [ref=e295]: Архат Жаксылыков изменил статус заявки ORD-2026-000052 → Отгружена
                  - generic [ref=e296]: 12 дней назад
                - generic [ref=e297]:
                  - img [ref=e299]
                  - paragraph [ref=e302]: Архат Жаксылыков изменил статус заявки ORD-2026-000052 → Ожидает отправки
                  - generic [ref=e303]: 12 дней назад
                - generic [ref=e304]:
                  - img [ref=e306]
                  - paragraph [ref=e309]: Архат Жаксылыков изменил статус заявки ORD-2026-000052 → Оплачено
                  - generic [ref=e310]: 12 дней назад
                - generic [ref=e311]:
                  - img [ref=e313]
                  - paragraph [ref=e316]: Архат Жаксылыков изменил статус заявки ORD-2026-000052 → Ожидает оплату
                  - generic [ref=e317]: 12 дней назад
                - generic [ref=e318]:
                  - img [ref=e320]
                  - paragraph [ref=e323]: Архат Жаксылыков изменил статус заявки ORD-2026-000052 → Согласована
                  - generic [ref=e324]: 12 дней назад
                - generic [ref=e325]:
                  - img [ref=e327]
                  - paragraph [ref=e330]: Архат Жаксылыков изменил статус заявки ORD-2026-000051 → Оплачено
                  - generic [ref=e331]: 12 дней назад
                - generic [ref=e332]:
                  - img [ref=e334]
                  - paragraph [ref=e337]: Архат Жаксылыков изменил статус заявки ORD-2026-000051 → Ожидает оплату
                  - generic [ref=e338]: 12 дней назад
                - generic [ref=e339]:
                  - img [ref=e341]
                  - paragraph [ref=e344]: Архат Жаксылыков изменил статус заявки ORD-2026-000051 → Согласована
                  - generic [ref=e345]: 12 дней назад
                - generic [ref=e346]:
                  - img [ref=e348]
                  - paragraph [ref=e352]: "Архат Жаксылыков применил импорт: создано 1226, обновлено 0"
                  - generic [ref=e353]: 12 дней назад
                - generic [ref=e354]:
                  - img [ref=e356]
                  - paragraph [ref=e360]: Синхронизация завершена (1226 строк)
                  - generic [ref=e361]: 12 дней назад
                - generic [ref=e362]:
                  - img [ref=e364]
                  - paragraph [ref=e367]: Архат Жаксылыков создал сотрудника tractor@mail.ru
                  - generic [ref=e368]: 12 дней назад
                - generic [ref=e369]:
                  - img [ref=e371]
                  - paragraph [ref=e374]: Архат Жаксылыков отменил заявку ORD-2026-000050
                  - generic [ref=e375]: 12 дней назад
                - generic [ref=e376]:
                  - img [ref=e378]
                  - paragraph [ref=e381]: Архат Жаксылыков изменил статус заявки ORD-2026-000043 → Согласована
                  - generic [ref=e382]: 12 дней назад
                - generic [ref=e383]:
                  - img [ref=e385]
                  - paragraph [ref=e388]: Архат Жаксылыков изменил статус заявки ORD-2026-000045 → Завершена
                  - generic [ref=e389]: 12 дней назад
  - region "Notifications (F8)":
    - list
  - alert [ref=e390]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class RequestsPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async openRequestsSection() {
> 7  |     await this.page.getByText('Заявки').click();
     |                                         ^ Error: locator.click: Error: strict mode violation: getByText('Заявки') resolved to 3 elements:
  8  |   }
  9  | 
  10 |   async openNewRequest() {
  11 |     const row = this.page.locator('tr:has-text("Новая")').first();
  12 | 
  13 |     await expect(row).toBeVisible();
  14 |     await row.click();
  15 |   }
  16 | }
```