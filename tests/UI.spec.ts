import { expect } from '@playwright/test';
import { test } from '../Fixture/BaseFixture';
import { RegisterPage } from '../Pages/RegisterPage';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { OpenNewAccountPage } from '../Pages/Openess';
import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
import loginData from '../TestData/loginData.json';
import registerData from '../TestData/registerData.json';
import { generateUsername } from '../Utility/generateUser';


test.describe('Registration Module', () => {

  test('Verify mandatory field validation with no data', async ({ page, data }) => {

    const registerPage = new RegisterPage(page);

    await page.goto(data.url);

    await registerPage.openRegisterPage();

    await registerPage.click(registerPage.locators.registerButton);

    await page.screenshot({
      path: 'screenshots/mandatory-validation.png',
      fullPage: true
    });

    await expect(page.getByText('First name is required.')).toBeVisible();
    await expect(page.getByText('Last name is required.')).toBeVisible();
    await expect(page.getByText('Address is required.')).toBeVisible();
    await page.close();
  });


  test('Verify user cannot register with existing username', async ({ page, data }) => {

    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);

    const username = `user${Date.now()}`;

    const userData = {
      firstName: 'Sanvu',
      lastName: 'Prasad',
      address: 'Kolkata',
      city: 'Kolkata',
      state: 'West Bengal',
      zipCode: '700001',
      phone: '9876543210',
      ssn: '123456',
      username: username,
      password: 'Test@123',
      confirmPassword: 'Test@123'
    };

    await page.goto(data.url);

    // Step 1 -> Register first time
    await registerPage.openRegisterPage();
    await registerPage.registerUser(userData);

    const successMessage = await registerPage.getSuccessMessage();
    expect(successMessage).toContain('Welcome');

    // Step 2 -> Logout
    await homePage.logout();

    // Step 3 -> Try registering again with same username
    await registerPage.openRegisterPage();
    await registerPage.registerUser(userData);

    // Step 4 -> Verify duplicate username error
    await expect(
      page.getByText('This username already exists.')
    ).toBeVisible();
    await page.close();
  });



for (const data of loginData) {

  test(
    `Validate login with username: ${data.password}`,
    async ({ page }) => {

      const loginPage =
        new LoginPage(page);

      await loginPage.navigate();

      await loginPage.login(
        data.username,
        data.password
      );

      if (data.expected === 'success') {

        await loginPage.verifyLoginSuccess();

        await loginPage.click(
          'text=Log Out'
        );
      }

      else {

        await page.screenshot({
          path:
            `screenshots/login-failure-${data.username || 'empty-user'}.png`,
          fullPage: true
        });

        await loginPage.verifyLoginFailure(
          data.username,
          data.password
        );

        await expect(
          loginPage.usernameInput
        ).toBeVisible();

        await expect(
          loginPage.passwordInput
        ).toBeVisible();
      }
    }
  );
}

  for (const dataSet of registerData) {

  test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {

    const registerPage =
      new RegisterPage(page);

    const openNewAccountPage =
      new OpenNewAccountPage(page);
    const loginPage= new LoginPage(page);
    const accountOverviewPage =
  new AccountOverviewPage(page);

    await page.goto(
      `${data.url}/index.htm`
    );
    await loginPage.verifyOpenAccountLinkNotVisible();
    await registerPage.openRegisterPage();
    const uniqueUsername = generateUsername(dataSet.username, browserName);
  const userData = {
  ...dataSet,
  username: uniqueUsername
};

    await registerPage.registerUser(userData);

    if (dataSet.expected === 'success') {

      const successMessage =
        await registerPage.getSuccessMessage();

      expect(successMessage)
        .toContain('Welcome');

      await openNewAccountPage
        .navigateToOpenNewAccountPage();
      await openNewAccountPage
        .validateAccountTypeDropdownOptions();

      await openNewAccountPage
        .validateFromAccountDropdownIsPopulated();

      
      await openNewAccountPage
        .createNewAccount(dataSet.accountType);
      
      await openNewAccountPage
        .verifyAccountCreatedSuccessfully();      
      
      const newAccountId =
        (await openNewAccountPage.getNewAccountId())!;

        expect(newAccountId).not.toBeNull();
      expect(newAccountId)
        .toMatch(/^\d+$/);

        
        await accountOverviewPage.navigateToAccountsOverview();
        

        await accountOverviewPage.verifyAccountPresent(newAccountId);
    }
    else {

      await expect(
        page.locator(
          registerPage.locators.passwordMismatchError
        )
      ).toHaveText(
        'Passwords did not match.'
      );
    }
  });
}

});