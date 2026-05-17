import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage{

  constructor(page: Page) {
    super(page);
  }

  readonly locators = {
    registerLink: 'text=Register',

    firstName: 'input[id="customer.firstName"]',
    lastName: 'input[id="customer.lastName"]',
    address: 'input[id="customer.address.street"]',
    city: 'input[id="customer.address.city"]',
    state: 'input[id="customer.address.state"]',
    zipCode: 'input[id="customer.address.zipCode"]',
    phone: 'input[id="customer.phoneNumber"]',
    ssn: 'input[id="customer.ssn"]',
    username: 'input[id="customer.username"]',
    password: 'input[id="customer.password"]',
    confirmPassword: 'input[id="repeatedPassword"]',

    registerButton: 'input[value="Register"]',
    passwordMismatchError: 'span#repeatedPassword\\.errors',

    pageTitle: 'h1.title',
    //successMessage: 'h1.title'
  };

  async openRegisterPage() {
    await this.click(this.locators.registerLink);

  
    await expect(this.page.locator(this.locators.pageTitle)).toHaveText('Signing up is easy!');
  }

  async registerUser(data: any) {
    await this.fill(this.locators.firstName, data.firstName);
    await this.fill(this.locators.lastName, data.lastName);
    await this.fill(this.locators.address, data.address);
    await this.fill(this.locators.city, data.city);
    await this.fill(this.locators.state, data.state);
    await this.fill(this.locators.zipCode, data.zipCode);
    await this.fill(this.locators.phone, data.phone);
    await this.fill(this.locators.ssn, data.ssn);
    await this.fill(this.locators.username, data.username);
    await this.fill(this.locators.password, data.password);
    await this.fill(this.locators.confirmPassword, data.confirmPassword);
    await this.click(this.locators.registerButton);
  }

  async getSuccessMessage() {
    return await this.getText(this.locators.pageTitle);
  }
}
