import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly logoutLink: Locator;
  readonly openAccountLink: Locator;

  constructor(page: Page) {

    super(page);
    
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.logoutLink = page.getByRole('link', { name: 'Log Out' });
    this.errorMessage = page.locator('.error');
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.openAccountLink = page.locator('a[href*="openaccount"]');

  }

  async navigate(path: string = 'https://parabank.parasoft.com/parabank/index.htm') {
    await super.navigate(path);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);   
    await this.passwordInput.fill(password);   
    await this.loginButton.click();            
}

    
  async verifyOpenAccountLinkNotVisible() {
    await expect(this.openAccountLink).toHaveCount(0);
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/overview.htm/);
    await expect(this.logoutLink).toBeVisible();
  }

  async isLoggedIn(){
    return await this.logoutLink.isVisible({ timeout: 0 });
  }
  

  async verifyLoginFailure(username: string,password: string) {

  const errorMessage = this.page.locator('.error');
  if (username === '' && password === '') {
    await expect(errorMessage).toContainText('Please enter a username and password.');
  }
  else {
   await expect(errorMessage).toContainText(/The username and password could not be verified.|An internal error has occurred and has been logged./);
  }
}
}