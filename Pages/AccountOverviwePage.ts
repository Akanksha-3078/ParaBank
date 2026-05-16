import { Page, expect } from '@playwright/test';

export class AccountOverviewPage {

  readonly page: Page;

  locators = {

    accountsOverviewLink:
      'a[href*="overview.htm"]',

    accountsTable:
      '#accountTable',

    accountIds:
      '#accountTable tbody tr td a'
  };

  constructor(page: Page) {

    this.page = page;
  }

  // =====================================================
  // NAVIGATE TO ACCOUNT OVERVIEW
  // =====================================================

  async navigateToAccountsOverview() {

    await this.page.click(
      this.locators.accountsOverviewLink
    );

    await expect(
      this.page.locator(this.locators.accountsTable)
    ).toBeVisible();
  }

  // =====================================================
  // GET ALL ACCOUNT IDS
  // =====================================================

  async getAllAccountIds() {

    await this.page.waitForTimeout(2000);

    const accounts = await this.page
      .locator(this.locators.accountIds)
      .allTextContents();

    return accounts.map(account =>
      account.trim()
    );
  }

  // =====================================================
  // VERIFY ACCOUNT PRESENT
  // =====================================================

  async verifyAccountPresent(accountId: string) {

    const allAccounts =
      await this.getAllAccountIds();

    console.log('Accounts Found:', allAccounts);

    expect(allAccounts)
      .toContain(accountId);
  }
}