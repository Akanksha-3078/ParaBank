# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> @negative @ui (TC-AC-UI-02, TC-NEG-01) Verify mandatory field validation with no data
- Location: tests/UI.spec.ts:17:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('text=Register')

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
     |                                      ^ Error: locator.click: Target page, context or browser has been closed
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