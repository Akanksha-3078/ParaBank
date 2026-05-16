import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OpenNewAccountPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // =====================================================
  // LOCATORS
  // =====================================================

  readonly openNewAccountLink =
    this.page.locator('a[href*="openaccount"]');

  readonly openNewAccountTitle =
    this.page.locator('div#openAccountForm h1.title');

  readonly accountTypeDropdown =
    this.page.locator('#type');

  readonly accountTypeOptions =
    this.page.locator('#type option');

  readonly fromAccountDropdown =
    this.page.locator('#fromAccountId');

  readonly fromAccountOptions =
    this.page.locator('#fromAccountId option');

  readonly openNewAccountButton =
    this.page.locator('input[value="Open New Account"]');

  readonly successTitle =
    this.page.locator('div#openAccountResult h1.title');

  readonly successMessage =
    this.page.locator('#openAccountResult p');

  readonly newAccountId =
    this.page.locator('#newAccountId');

  // =====================================================
  // NAVIGATION
  // =====================================================

  async navigateToOpenNewAccountPage() {

    await this.openNewAccountLink.click();

    await expect(this.openNewAccountTitle)
      .toHaveText('Open New Account');
  }

  // =====================================================
  // DROPDOWN VALIDATIONS
  // =====================================================

  async validateAccountTypeDropdownOptions() {

    await expect(this.accountTypeOptions)
      .toHaveText(['CHECKING', 'SAVINGS']);
  }

async validateFromAccountDropdownIsPopulated() {

  // Wait until dropdown has at least 1 option
  await expect.poll(async () => {

    return await this.fromAccountOptions.count();

  }).toBeGreaterThan(0);

  // Get option texts
  const options =
    await this.fromAccountOptions.allTextContents();

  const validOptions =
    options
      .map(option => option.trim())
      .filter(option => option !== '');

  expect(validOptions.length)
    .toBeGreaterThan(0);
}

  async selectAccountType(accountType: string) {

    await this.accountTypeDropdown.selectOption({
      label: accountType
    });
  }

  async selectFirstFromAccount() {

    const firstOptionValue =
      await this.fromAccountOptions
        .first()
        .getAttribute('value');

    if (!firstOptionValue) {

      throw new Error(
        'No account found in From Account dropdown'
      );
    }

    await this.fromAccountDropdown
      .selectOption(firstOptionValue);
  }

  async clickOpenNewAccountButton() {

    await this.openNewAccountButton.click();
  }

  async createNewAccount(accountType: string) {

    await this.selectAccountType(accountType);

    await this.selectFirstFromAccount();

    await this.clickOpenNewAccountButton();
  }

  // =====================================================
  // ASSERTIONS
  // =====================================================

  async verifyAccountCreatedSuccessfully() {

    await expect(this.successTitle)
      .toHaveText('Account Opened!');

    await expect(this.newAccountId)
      .toBeVisible();
  }

  async getNewAccountId() {

    return await this.newAccountId.textContent();
  }
}