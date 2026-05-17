# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate SAVINGS Account Flow for Home_19
- Location: tests/UI.spec.ts:111:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Register')

```

# Page snapshot

```yaml
- generic [ref=e2]: "{\"type\":\"about:blank\",\"title\":\"Not Found\",\"status\":404,\"detail\":\"No endpoint GET /parabank//index.htm.\",\"instance\":\"/parabank//index.htm\"}"
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   protected page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async navigate(path: string = '') {
  11 |     await this.page.goto(path);
  12 |   }
  13 | 
  14 |   async click(locator: string) {
> 15 |     await this.page.locator(locator).click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |   }
  17 | 
  18 |   async fill(locator: string, value: string) {
  19 |     await this.page.locator(locator).fill(value);
  20 |   }
  21 | 
  22 |   async getText(locator: string) {
  23 |     return await this.page.locator(locator).textContent();
  24 |   }
  25 | }
```