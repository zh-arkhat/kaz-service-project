# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: requests\change-status.spec.ts >> User can change request status from Новая to В работе and verify in list after closing
- Location: tests\requests\change-status.spec.ts:5:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('tr:has-text("Новая")').first().getByRole('link', { name: 'Детали →' }).first()
    - locator resolved to <a href="/orders/cee9da91-8e3d-46c4-9ad8-77d540786b1d" class="text-xs text-neutral-500 hover:text-brand transition-colors duration-fast">Детали →</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - link "Заявки" [active] [ref=e20] [cursor=pointer]:
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
            - heading "Заявки" [level=1] [ref=e89]
            - paragraph [ref=e90]: Полная воронка — от входящего запроса до завершения
          - tablist [ref=e92]:
            - tab "Все 79" [selected] [ref=e93] [cursor=pointer]:
              - text: Все
              - generic [ref=e94]: "79"
            - tab "Новая 26" [ref=e95] [cursor=pointer]:
              - text: Новая
              - generic [ref=e96]: "26"
            - tab "В работе 11" [ref=e97] [cursor=pointer]:
              - text: В работе
              - generic [ref=e98]: "11"
            - tab "Согласована 6" [ref=e99] [cursor=pointer]:
              - text: Согласована
              - generic [ref=e100]: "6"
            - tab "Ожидает оплаты 0" [ref=e101] [cursor=pointer]:
              - text: Ожидает оплаты
              - generic [ref=e102]: "0"
            - tab "Оплачено 3" [ref=e103] [cursor=pointer]:
              - text: Оплачено
              - generic [ref=e104]: "3"
            - tab "Ожидает отправки 2" [ref=e105] [cursor=pointer]:
              - text: Ожидает отправки
              - generic [ref=e106]: "2"
            - tab "Отгружена 4" [ref=e107] [cursor=pointer]:
              - text: Отгружена
              - generic [ref=e108]: "4"
            - tab "Завершена 17" [ref=e109] [cursor=pointer]:
              - text: Завершена
              - generic [ref=e110]: "17"
            - tab "Отменено 10" [ref=e111] [cursor=pointer]:
              - text: Отменено
              - generic [ref=e112]: "10"
          - generic [ref=e113]:
            - generic [ref=e115]:
              - generic [ref=e116]:
                - img
                - textbox "Поиск по номеру, телефону или товару..." [ref=e117]
              - combobox [ref=e118]:
                - option "Все компании" [selected]
                - option "ТОО Зарип"
                - option "ТОО Ром"
                - option "Маскарпоне"
                - option "Альтаир Морс"
                - option "Финальная Тестовая"
                - option "Казсервис"
                - option "ТОО Инфор"
                - option "ИП Трактор"
                - option "ТОО Жастар"
                - option "ТОО Экибастуз"
                - option "Aqshoqy"
                - option "ТОО ТЕСТТТ"
                - option "тоо тест"
                - option "ТОО Infoland"
                - option "ТОО Infoland"
                - option "ТОО EduKZ"
                - option "ИП Гинятуллин И."
                - option "ТОО Ильдар-Х Логистика"
                - option "ТОО ТехКорп Алматы"
            - table [ref=e120]:
              - rowgroup [ref=e121]:
                - row "№ Телефон / Клиент Товар Сумма Дата Статус Менеджер" [ref=e122]:
                  - columnheader "№" [ref=e123]
                  - columnheader "Телефон / Клиент" [ref=e124]
                  - columnheader "Товар" [ref=e125]
                  - columnheader "Сумма" [ref=e126]
                  - columnheader "Дата" [ref=e127]
                  - columnheader "Статус" [ref=e128]
                  - columnheader "Менеджер" [ref=e129]
                  - columnheader [ref=e130]
              - rowgroup [ref=e131]:
                - row "ORD-2026-000064 +77023461050 ТОО Infoland 11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459 488 239 ₸ 10.06 13:36 В работе — Согласовать Детали →" [ref=e132] [cursor=pointer]:
                  - cell "ORD-2026-000064" [ref=e133]
                  - cell "+77023461050 ТОО Infoland" [ref=e134]:
                    - generic [ref=e135]: "+77023461050"
                    - generic [ref=e136]: ТОО Infoland
                  - cell "11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459" [ref=e137]:
                    - generic [ref=e138]: 11-inch iPad Air M4 Wi-Fi 128GB - Purple,Model A3459
                  - cell "488 239 ₸" [ref=e139]
                  - cell "10.06 13:36" [ref=e140]
                  - cell "В работе" [ref=e141]:
                    - generic [ref=e142]: В работе
                  - cell "—" [ref=e143]
                  - cell "Согласовать Детали →" [ref=e144]:
                    - generic [ref=e145]:
                      - button "Согласовать" [ref=e146]
                      - button "Детали →" [ref=e147]
                - row "ORD-2026-000063 +77023461050 ТОО Infoland Монохромный принтер Xerox Phaser 3020BI 63 750 ₸ 10.06 13:31 В работе — Согласовать Детали →" [ref=e148] [cursor=pointer]:
                  - cell "ORD-2026-000063" [ref=e149]
                  - cell "+77023461050 ТОО Infoland" [ref=e150]:
                    - generic [ref=e151]: "+77023461050"
                    - generic [ref=e152]: ТОО Infoland
                  - cell "Монохромный принтер Xerox Phaser 3020BI" [ref=e153]:
                    - generic [ref=e154]: Монохромный принтер Xerox Phaser 3020BI
                  - cell "63 750 ₸" [ref=e155]
                  - cell "10.06 13:31" [ref=e156]
                  - cell "В работе" [ref=e157]:
                    - generic [ref=e158]: В работе
                  - cell "—" [ref=e159]
                  - cell "Согласовать Детали →" [ref=e160]:
                    - generic [ref=e161]:
                      - button "Согласовать" [ref=e162]
                      - button "Детали →" [ref=e163]
                - row "ORD-2026-000062 +77076816557 ТОО Infoland Монохромный принтер Xerox Phaser 3020BI 61 200 ₸ 08.06 10:08 В работе Архат Жаксылыков Согласовать Детали →" [ref=e164] [cursor=pointer]:
                  - cell "ORD-2026-000062" [ref=e165]
                  - cell "+77076816557 ТОО Infoland" [ref=e166]:
                    - generic [ref=e167]: "+77076816557"
                    - generic [ref=e168]: ТОО Infoland
                  - cell "Монохромный принтер Xerox Phaser 3020BI" [ref=e169]:
                    - generic [ref=e170]: Монохромный принтер Xerox Phaser 3020BI
                  - cell "61 200 ₸" [ref=e171]
                  - cell "08.06 10:08" [ref=e172]
                  - cell "В работе" [ref=e173]:
                    - generic [ref=e174]: В работе
                  - cell "Архат Жаксылыков" [ref=e175]
                  - cell "Согласовать Детали →" [ref=e176]:
                    - generic [ref=e177]:
                      - button "Согласовать" [ref=e178]
                      - button "Детали →" [ref=e179]
                - row "ORD-2026-000061 789456123 ТОО Зарип МФП Canon i-SENSYS MF754Cdw (5455C023) + ещё 1 488 172 ₸ 01.06 17:26 В работе Архат Жаксылыков Согласовать Детали →" [ref=e180] [cursor=pointer]:
                  - cell "ORD-2026-000061" [ref=e181]
                  - cell "789456123 ТОО Зарип" [ref=e182]:
                    - generic [ref=e183]: "789456123"
                    - generic [ref=e184]: ТОО Зарип
                  - cell "МФП Canon i-SENSYS MF754Cdw (5455C023) + ещё 1" [ref=e185]:
                    - generic [ref=e186]: МФП Canon i-SENSYS MF754Cdw (5455C023) + ещё 1
                  - cell "488 172 ₸" [ref=e187]
                  - cell "01.06 17:26" [ref=e188]
                  - cell "В работе" [ref=e189]:
                    - generic [ref=e190]: В работе
                  - cell "Архат Жаксылыков" [ref=e191]
                  - cell "Согласовать Детали →" [ref=e192]:
                    - generic [ref=e193]:
                      - button "Согласовать" [ref=e194]
                      - button "Детали →" [ref=e195]
                - row "ORD-2026-000060 +789456123 Aqshoqy 3D принтер Creality K1C + ещё 1 685 200 ₸ 29.05 15:04 Новая — Взять в работу Детали →" [ref=e196] [cursor=pointer]:
                  - cell "ORD-2026-000060" [ref=e197]
                  - cell "+789456123 Aqshoqy" [ref=e198]:
                    - generic [ref=e199]: "+789456123"
                    - generic [ref=e200]: Aqshoqy
                  - cell "3D принтер Creality K1C + ещё 1" [ref=e201]:
                    - generic [ref=e202]: 3D принтер Creality K1C + ещё 1
                  - cell "685 200 ₸" [ref=e203]
                  - cell "29.05 15:04" [ref=e204]
                  - cell "Новая" [ref=e205]:
                    - generic [ref=e206]: Новая
                  - cell "—" [ref=e207]
                  - cell "Взять в работу Детали →" [ref=e208]:
                    - generic [ref=e209]:
                      - button "Взять в работу" [ref=e210]
                      - button "Детали →" [ref=e211]
                - row "ORD-2026-000059 +789456123 Aqshoqy 3D принтер Flying Bear Ghost 7 + ещё 1 685 200 ₸ 29.05 14:41 Новая — Взять в работу Детали →" [ref=e212] [cursor=pointer]:
                  - cell "ORD-2026-000059" [ref=e213]
                  - cell "+789456123 Aqshoqy" [ref=e214]:
                    - generic [ref=e215]: "+789456123"
                    - generic [ref=e216]: Aqshoqy
                  - cell "3D принтер Flying Bear Ghost 7 + ещё 1" [ref=e217]:
                    - generic [ref=e218]: 3D принтер Flying Bear Ghost 7 + ещё 1
                  - cell "685 200 ₸" [ref=e219]
                  - cell "29.05 14:41" [ref=e220]
                  - cell "Новая" [ref=e221]:
                    - generic [ref=e222]: Новая
                  - cell "—" [ref=e223]
                  - cell "Взять в работу Детали →" [ref=e224]:
                    - generic [ref=e225]:
                      - button "Взять в работу" [ref=e226]
                      - button "Детали →" [ref=e227]
                - row "ORD-2026-000058 +789456123 Aqshoqy 3D принтер Creality K1C 325 200 ₸ 29.05 14:39 Новая — Взять в работу Детали →" [ref=e228] [cursor=pointer]:
                  - cell "ORD-2026-000058" [ref=e229]
                  - cell "+789456123 Aqshoqy" [ref=e230]:
                    - generic [ref=e231]: "+789456123"
                    - generic [ref=e232]: Aqshoqy
                  - cell "3D принтер Creality K1C" [ref=e233]:
                    - generic [ref=e234]: 3D принтер Creality K1C
                  - cell "325 200 ₸" [ref=e235]
                  - cell "29.05 14:39" [ref=e236]
                  - cell "Новая" [ref=e237]:
                    - generic [ref=e238]: Новая
                  - cell "—" [ref=e239]
                  - cell "Взять в работу Детали →" [ref=e240]:
                    - generic [ref=e241]:
                      - button "Взять в работу" [ref=e242]
                      - button "Детали →" [ref=e243]
                - row "ORD-2026-000057 +77017389219 Aqshoqy Цветной принтер Xerox C410DN 1 402 709 ₸ 28.05 17:38 Новая — Взять в работу Детали →" [ref=e244] [cursor=pointer]:
                  - cell "ORD-2026-000057" [ref=e245]
                  - cell "+77017389219 Aqshoqy" [ref=e246]:
                    - generic [ref=e247]: "+77017389219"
                    - generic [ref=e248]: Aqshoqy
                  - cell "Цветной принтер Xerox C410DN" [ref=e249]:
                    - generic [ref=e250]: Цветной принтер Xerox C410DN
                  - cell "1 402 709 ₸" [ref=e251]
                  - cell "28.05 17:38" [ref=e252]
                  - cell "Новая" [ref=e253]:
                    - generic [ref=e254]: Новая
                  - cell "—" [ref=e255]
                  - cell "Взять в работу Детали →" [ref=e256]:
                    - generic [ref=e257]:
                      - button "Взять в работу" [ref=e258]
                      - button "Детали →" [ref=e259]
                - row "ORD-2026-000056 +77017389219 Aqshoqy Цветной принтер Xerox C410DN 1 402 709 ₸ 28.05 17:37 Новая — Взять в работу Детали →" [ref=e260] [cursor=pointer]:
                  - cell "ORD-2026-000056" [ref=e261]
                  - cell "+77017389219 Aqshoqy" [ref=e262]:
                    - generic [ref=e263]: "+77017389219"
                    - generic [ref=e264]: Aqshoqy
                  - cell "Цветной принтер Xerox C410DN" [ref=e265]:
                    - generic [ref=e266]: Цветной принтер Xerox C410DN
                  - cell "1 402 709 ₸" [ref=e267]
                  - cell "28.05 17:37" [ref=e268]
                  - cell "Новая" [ref=e269]:
                    - generic [ref=e270]: Новая
                  - cell "—" [ref=e271]
                  - cell "Взять в работу Детали →" [ref=e272]:
                    - generic [ref=e273]:
                      - button "Взять в работу" [ref=e274]
                      - button "Детали →" [ref=e275]
                - row "ORD-2026-000055 +77017389219 Aqshoqy Цветной принтер Xerox C410DN 805 418 ₸ 28.05 17:19 Новая — Взять в работу Детали →" [ref=e276] [cursor=pointer]:
                  - cell "ORD-2026-000055" [ref=e277]
                  - cell "+77017389219 Aqshoqy" [ref=e278]:
                    - generic [ref=e279]: "+77017389219"
                    - generic [ref=e280]: Aqshoqy
                  - cell "Цветной принтер Xerox C410DN" [ref=e281]:
                    - generic [ref=e282]: Цветной принтер Xerox C410DN
                  - cell "805 418 ₸" [ref=e283]
                  - cell "28.05 17:19" [ref=e284]
                  - cell "Новая" [ref=e285]:
                    - generic [ref=e286]: Новая
                  - cell "—" [ref=e287]
                  - cell "Взять в работу Детали →" [ref=e288]:
                    - generic [ref=e289]:
                      - button "Взять в работу" [ref=e290]
                      - button "Детали →" [ref=e291]
                - row "ORD-2026-000054 +77017389219 Aqshoqy Цветной принтер Xerox C410DN 805 418 ₸ 28.05 17:17 Новая — Взять в работу Детали →" [ref=e292] [cursor=pointer]:
                  - cell "ORD-2026-000054" [ref=e293]
                  - cell "+77017389219 Aqshoqy" [ref=e294]:
                    - generic [ref=e295]: "+77017389219"
                    - generic [ref=e296]: Aqshoqy
                  - cell "Цветной принтер Xerox C410DN" [ref=e297]:
                    - generic [ref=e298]: Цветной принтер Xerox C410DN
                  - cell "805 418 ₸" [ref=e299]
                  - cell "28.05 17:17" [ref=e300]
                  - cell "Новая" [ref=e301]:
                    - generic [ref=e302]: Новая
                  - cell "—" [ref=e303]
                  - cell "Взять в работу Детали →" [ref=e304]:
                    - generic [ref=e305]:
                      - button "Взять в работу" [ref=e306]
                      - button "Детали →" [ref=e307]
                - row "ORD-2026-000053 87078215008 Казсервис Цветной принтер Xerox VersaLink C7000DN + ещё 1 8 158 253 ₸ 28.05 17:04 Новая — Взять в работу Детали →" [ref=e308] [cursor=pointer]:
                  - cell "ORD-2026-000053" [ref=e309]
                  - cell "87078215008 Казсервис" [ref=e310]:
                    - generic [ref=e311]: "87078215008"
                    - generic [ref=e312]: Казсервис
                  - cell "Цветной принтер Xerox VersaLink C7000DN + ещё 1" [ref=e313]:
                    - generic [ref=e314]: Цветной принтер Xerox VersaLink C7000DN + ещё 1
                  - cell "8 158 253 ₸" [ref=e315]
                  - cell "28.05 17:04" [ref=e316]
                  - cell "Новая" [ref=e317]:
                    - generic [ref=e318]: Новая
                  - cell "—" [ref=e319]
                  - cell "Взять в работу Детали →" [ref=e320]:
                    - generic [ref=e321]:
                      - button "Взять в работу" [ref=e322]
                      - button "Детали →" [ref=e323]
                - row "ORD-2026-000052 +77017389219 Aqshoqy МФП Canon i-SENSYS MF3010 (5252B004) 600 000 ₸ 28.05 16:28 Завершена Архат Жаксылыков Детали →" [ref=e324] [cursor=pointer]:
                  - cell "ORD-2026-000052" [ref=e325]
                  - cell "+77017389219 Aqshoqy" [ref=e326]:
                    - generic [ref=e327]: "+77017389219"
                    - generic [ref=e328]: Aqshoqy
                  - cell "МФП Canon i-SENSYS MF3010 (5252B004)" [ref=e329]:
                    - generic [ref=e330]: МФП Canon i-SENSYS MF3010 (5252B004)
                  - cell "600 000 ₸" [ref=e331]
                  - cell "28.05 16:28" [ref=e332]
                  - cell "Завершена" [ref=e333]:
                    - generic [ref=e334]: Завершена
                  - cell "Архат Жаксылыков" [ref=e335]
                  - cell "Детали →" [ref=e336]:
                    - button "Детали →" [ref=e338]
                - row "ORD-2026-000051 +77017389219 Aqshoqy 0 RING ROLLER UNIT 160 ₸ 28.05 16:00 Оплачено Архат Жаксылыков Отправить Детали →" [ref=e339] [cursor=pointer]:
                  - cell "ORD-2026-000051" [ref=e340]
                  - cell "+77017389219 Aqshoqy" [ref=e341]:
                    - generic [ref=e342]: "+77017389219"
                    - generic [ref=e343]: Aqshoqy
                  - cell "0 RING ROLLER UNIT" [ref=e344]:
                    - generic [ref=e345]: 0 RING ROLLER UNIT
                  - cell "160 ₸" [ref=e346]
                  - cell "28.05 16:00" [ref=e347]
                  - cell "Оплачено" [ref=e348]:
                    - generic [ref=e349]: Оплачено
                  - cell "Архат Жаксылыков" [ref=e350]
                  - cell "Отправить Детали →" [ref=e351]:
                    - generic [ref=e352]:
                      - button "Отправить" [ref=e353]
                      - button "Детали →" [ref=e354]
                - row "ORD-2026-000050 +77017389219 Aqshoqy Цветной лазерный принтер Canon I-S LBP647CDW 329 885 ₸ 28.05 14:34 Отменено Архат Жаксылыков Детали →" [ref=e355] [cursor=pointer]:
                  - cell "ORD-2026-000050" [ref=e356]
                  - cell "+77017389219 Aqshoqy" [ref=e357]:
                    - generic [ref=e358]: "+77017389219"
                    - generic [ref=e359]: Aqshoqy
                  - cell "Цветной лазерный принтер Canon I-S LBP647CDW" [ref=e360]:
                    - generic [ref=e361]: Цветной лазерный принтер Canon I-S LBP647CDW
                  - cell "329 885 ₸" [ref=e362]
                  - cell "28.05 14:34" [ref=e363]
                  - cell "Отменено" [ref=e364]:
                    - generic [ref=e365]: Отменено
                  - cell "Архат Жаксылыков" [ref=e366]
                  - cell "Детали →" [ref=e367]:
                    - button "Детали →" [ref=e369]
                - row "ORD-2026-000049 +77017389219 Aqshoqy МФУ Ricoh SP 230SFNw 126 000 ₸ 25.05 11:43 Завершена — Детали →" [ref=e370] [cursor=pointer]:
                  - cell "ORD-2026-000049" [ref=e371]
                  - cell "+77017389219 Aqshoqy" [ref=e372]:
                    - generic [ref=e373]: "+77017389219"
                    - generic [ref=e374]: Aqshoqy
                  - cell "МФУ Ricoh SP 230SFNw" [ref=e375]:
                    - generic [ref=e376]: МФУ Ricoh SP 230SFNw
                  - cell "126 000 ₸" [ref=e377]
                  - cell "25.05 11:43" [ref=e378]
                  - cell "Завершена" [ref=e379]:
                    - generic [ref=e380]: Завершена
                  - cell "—" [ref=e381]
                  - cell "Детали →" [ref=e382]:
                    - button "Детали →" [ref=e384]
                - row "ORD-2026-000048 +77012345680 ИП Гинятуллин И. Принтер Canon I-SENSYS LBP246DW II (7187C006) 1 142 341 ₸ 24.05 18:21 Завершена Архат Жаксылыков Детали →" [ref=e385] [cursor=pointer]:
                  - cell "ORD-2026-000048" [ref=e386]
                  - cell "+77012345680 ИП Гинятуллин И." [ref=e387]:
                    - generic [ref=e388]: "+77012345680"
                    - generic [ref=e389]: ИП Гинятуллин И.
                  - cell "Принтер Canon I-SENSYS LBP246DW II (7187C006)" [ref=e390]:
                    - generic [ref=e391]: Принтер Canon I-SENSYS LBP246DW II (7187C006)
                  - cell "1 142 341 ₸" [ref=e392]
                  - cell "24.05 18:21" [ref=e393]
                  - cell "Завершена" [ref=e394]:
                    - generic [ref=e395]: Завершена
                  - cell "Архат Жаксылыков" [ref=e396]
                  - cell "Детали →" [ref=e397]:
                    - button "Детали →" [ref=e399]
                - row "ORD-2026-000047 +77012345680 ИП Гинятуллин И. — — 24.05 18:12 Завершена — Детали →" [ref=e400] [cursor=pointer]:
                  - cell "ORD-2026-000047" [ref=e401]
                  - cell "+77012345680 ИП Гинятуллин И." [ref=e402]:
                    - generic [ref=e403]: "+77012345680"
                    - generic [ref=e404]: ИП Гинятуллин И.
                  - cell "—" [ref=e405]:
                    - generic [ref=e406]: —
                  - cell "—" [ref=e407]
                  - cell "24.05 18:12" [ref=e408]
                  - cell "Завершена" [ref=e409]:
                    - generic [ref=e410]: Завершена
                  - cell "—" [ref=e411]
                  - cell "Детали →" [ref=e412]:
                    - button "Детали →" [ref=e414]
                - row "ORD-2026-000046 +77017389219 Без компании Цветное МФУ Canon Pixma E414 1 630 746 ₸ 21.05 15:23 Завершена — Детали →" [ref=e415] [cursor=pointer]:
                  - cell "ORD-2026-000046" [ref=e416]
                  - cell "+77017389219 Без компании" [ref=e417]:
                    - generic [ref=e418]: "+77017389219"
                    - generic [ref=e419]: Без компании
                  - cell "Цветное МФУ Canon Pixma E414" [ref=e420]:
                    - generic [ref=e421]: Цветное МФУ Canon Pixma E414
                  - cell "1 630 746 ₸" [ref=e422]
                  - cell "21.05 15:23" [ref=e423]
                  - cell "Завершена" [ref=e424]:
                    - generic [ref=e425]: Завершена
                  - cell "—" [ref=e426]
                  - cell "Детали →" [ref=e427]:
                    - button "Детали →" [ref=e429]
                - row "ORD-2026-000045 +77017389219 Aqshoqy Принтер Canon i-SENSYS LBP6030B (8468B042) + ещё 1 714 017 ₸ 20.05 17:26 Завершена — Детали →" [ref=e430] [cursor=pointer]:
                  - cell "ORD-2026-000045" [ref=e431]
                  - cell "+77017389219 Aqshoqy" [ref=e432]:
                    - generic [ref=e433]: "+77017389219"
                    - generic [ref=e434]: Aqshoqy
                  - cell "Принтер Canon i-SENSYS LBP6030B (8468B042) + ещё 1" [ref=e435]:
                    - generic [ref=e436]: Принтер Canon i-SENSYS LBP6030B (8468B042) + ещё 1
                  - cell "714 017 ₸" [ref=e437]
                  - cell "20.05 17:26" [ref=e438]
                  - cell "Завершена" [ref=e439]:
                    - generic [ref=e440]: Завершена
                  - cell "—" [ref=e441]
                  - cell "Детали →" [ref=e442]:
                    - button "Детали →" [ref=e444]
            - generic [ref=e445]:
              - generic [ref=e446]: Страница 1 из 4 · 79 заявок
              - generic [ref=e447]:
                - button "← Назад" [disabled] [ref=e448]
                - button "Вперёд →" [ref=e449] [cursor=pointer]
  - region "Notifications (F8)":
    - list
  - alert [ref=e450]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginScenario } from '../../scenarios/auth/login.scenario';
  3  | import { RequestsPage } from '../../ui/pages/requests.page';
  4  | 
  5  | test('User can change request status from Новая to В работе and verify in list after closing', async ({ page }) => {
  6  |   const login = new LoginScenario(page);
  7  |   const requestsPage = new RequestsPage(page);
  8  | 
  9  |   await login.execute('arkhat.zh+admin@kazservice.kz', 'qwerty1!');
  10 | 
  11 |   await requestsPage.openRequestsSection();
  12 | 
  13 |   // Capture first row with status "Новая"
  14 |   const row = page.locator('tr:has-text("Новая")').first();
  15 |   await expect(row).toBeVisible({ timeout: 10000 });
  16 |   const orderNumber = (await row.locator('td').first().innerText()).trim();
  17 | 
  18 |   // Open details (use row's details link if available)
  19 |   const detailsLink = row.getByRole('link', { name: 'Детали →' }).first();
  20 |   if (await detailsLink.count() > 0) {
> 21 |     await detailsLink.click();
     |                       ^ Error: locator.click: Test timeout of 40000ms exceeded.
  22 |   } else {
  23 |     await row.click();
  24 |     const openFull = page.getByText('Открыть полностью').first();
  25 |     if (await openFull.count() > 0) {
  26 |       await openFull.scrollIntoViewIfNeeded();
  27 |       await openFull.click();
  28 |     }
  29 |   }
  30 | 
  31 |   await page.waitForURL(/\/orders\//);
  32 |   await page.waitForLoadState('networkidle');
  33 | 
  34 |   // Try to click "Взять в работу" if exists
  35 |   const takeBtn = page.getByRole('button', { name: 'Взять в работу' }).first();
  36 |   if (await takeBtn.count() > 0) {
  37 |     await takeBtn.scrollIntoViewIfNeeded();
  38 |     await takeBtn.click();
  39 |     await page.waitForTimeout(500);
  40 |   } else {
  41 |     // Fallback: change native select to IN_PROGRESS
  42 |     const select = page.locator('select').first();
  43 |     if (await select.count() > 0) {
  44 |       await select.scrollIntoViewIfNeeded();
  45 |       try {
  46 |         await select.selectOption({ value: 'IN_PROGRESS' });
  47 |       } catch (e) {
  48 |         await page.evaluate(() => {
  49 |           const s = document.querySelector('select');
  50 |           if (s) {
  51 |             (s as HTMLSelectElement).value = 'IN_PROGRESS';
  52 |             s.dispatchEvent(new Event('change', { bubbles: true }));
  53 |           }
  54 |         });
  55 |       }
  56 |       await expect(select).toHaveValue('IN_PROGRESS');
  57 |     } else {
  58 |       const inWork = page.getByText('В работе').first();
  59 |       if (await inWork.count() > 0) await inWork.click();
  60 |       else throw new Error('Не удалось найти способ сменить статус на странице заявки');
  61 |     }
  62 |   }
  63 | 
  64 |   // Close form / go back to list
  65 |   await requestsPage.openRequestsSection();
  66 |   await page.waitForLoadState('networkidle');
  67 | 
  68 |   // Verify that the same order now shows status "В работе"
  69 |   const updatedRow = page.locator(`tr:has-text("${orderNumber}")`).first();
  70 |   await expect(updatedRow).toBeVisible({ timeout: 10000 });
  71 |   await expect(updatedRow).toContainText('В работе');
  72 | });
  73 | 
```