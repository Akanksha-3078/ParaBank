import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class OpenNewAccountPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  

  readonly openNewAccountLink = this.page.locator('a[href*="openaccount"]');
  readonly openNewAccountTitle = this.page.getByRole('heading', { name: 'Open New Account' });

  readonly accountTypeDropdown = this.page.locator('#type');
  readonly fromAccountDropdown = this.page.locator('#fromAccountId');
  readonly openNewAccountButton = this.page.getByRole('button', { name: 'Open New Account' });
  readonly successTitle = this.page.locator('div#openAccountResult h1.title');
  readonly successMessage = this.page.locator('#openAccountResult p');
  readonly newAccountId = this.page.locator('#newAccountId');
  readonly accountTypeOptions = this.page.locator('#type').getByRole('option');
  readonly fromAccountOptions = this.page.locator('#fromAccountId').getByRole('option');

  
  async navigateToOpenNewAccountPage() {
    await this.openNewAccountLink.click();
    await expect(this.openNewAccountTitle).toHaveText('Open New Account');
  }
  async validateAccountTypeDropdownOptions() {

    await expect(this.accountTypeOptions).toHaveText(['CHECKING', 'SAVINGS']);
  }
  async validateFromAccountDropdownIsPopulated() {
    await expect.poll(async () => {return await this.accountTypeDropdown.locator('option').count()}).toBeGreaterThan(0);
  }

  async selectAccountType(accountType: string) {

    await this.accountTypeDropdown.selectOption({label: accountType});
  }

  async selectFirstFromAccount() {

    const firstOptionValue = await this.fromAccountOptions.first().getAttribute('value');

    if (!firstOptionValue) {

      throw new Error(
        'No account found in From Account dropdown'
      );
    }

    await this.fromAccountDropdown.selectOption(firstOptionValue);
  }

  async clickOpenNewAccountButton() {
     await this.openNewAccountButton.click();
  }

  async createNewAccount(accountType: string) {

    await this.selectAccountType(accountType);

    await this.selectFirstFromAccount();

    await this.clickOpenNewAccountButton();
  }

  async verifyAccountCreatedSuccessfully() {

    await expect(this.successTitle).toHaveText('Account Opened!');

    await expect(this.newAccountId).toBeVisible();
  }
  // async getNewAccountId(): Promise<string> {

  //   await expect(this.newAccountId).toBeVisible();

  //   const accountId = await this.newAccountId.textContent();

  //   if (!accountId) {

  //     throw new Error(

  //       'New Account ID is null or empty'

  //     );

  //   }

  //   return accountId.trim();

  // }

  async getNewAccountId() {
    return await this.newAccountId.textContent();
  }
}