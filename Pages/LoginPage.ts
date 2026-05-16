import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;

  readonly loginButton: Locator;

  readonly errorMessage: Locator;

  readonly logoutLink: Locator;

  constructor(page: Page) {

    super(page);

    this.usernameInput = page.locator(
      'input[name="username"]'
    );

    this.passwordInput = page.locator(
      'input[name="password"]'
    );

    this.loginButton = page.locator(
      'input[value="Log In"]'
    );

    this.errorMessage = page.locator(
      '.error'
    );

    this.logoutLink = page.locator(
      'text=Log Out'
    );
  }

  async navigate(path: string = 'https://parabank.parasoft.com/parabank/index.htm') {
    await super.navigate(path);
  }

  async login(username: string, password: string) {

    await this.fill(
      'input[name="username"]',
      username
    );

    await this.fill(
      'input[name="password"]',
      password
    );

    await this.click(
      'input[value="Log In"]'
    );
  }
  async verifyOpenAccountLinkNotVisible() {

  const linkCount =
    await this.page
      .locator('a[href*="openaccount"]')
      .count();

  expect(linkCount).toBe(0);
}

  async verifyLoginSuccess() {

    await expect(this.page)
      .toHaveURL(/overview.htm/);

    await expect(this.logoutLink)
      .toBeVisible();
  }

  // async verifyLoginFailure() {

  //   await expect(this.errorMessage)
  //     .toContainText(
  //       'The username and password could not be verified.'
  //     );
  // }
  async verifyLoginFailure(
  username: string,
  password: string
) {

  const errorMessage =
    this.page.locator('.error');

  // Blank credentials validation
  if (
    username === '' &&
    password === ''
  ) {

    await expect(errorMessage)
      .toContainText(
        'Please enter a username and password.'
      );
  }

  // Invalid credentials validation
  else {

    await expect(errorMessage)
      .toContainText(
        /The username and password could not be verified.|An internal error has occurred/
      );
  }
}
}