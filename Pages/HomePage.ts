import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  logoutLink = () => this.page.locator('text=Log Out');
  async logout() {
    await this.logoutLink().click();
  }

}