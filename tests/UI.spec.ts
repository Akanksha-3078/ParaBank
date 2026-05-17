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
import userData from '../TestData/existUser.json';
import { TestUtil } from '../Utility/helper';


test.describe('Registration Module', () => {

  test('Verify mandatory field validation with no data', async ({ page, data }) => {

    const registerPage = new RegisterPage(page);

    await page.goto(data.url);

    await registerPage.openRegisterPage();

    await registerPage.click(registerPage.locators.registerButton);

   await TestUtil.captureScreenshot(page,`madatoryField-failure-|| 'empty-user'}`);

    await expect(page.getByText('First name is required.')).toBeVisible();
    await expect(page.getByText('Last name is required.')).toBeVisible();
    await expect(page.getByText('Address is required.')).toBeVisible();
  });


  test('Verify user cannot register with existing username', async ({ page, data }) => {

    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);

    const uniqueUsername = `user${Date.now()}`;
    const registerData = {
      ...userData,
      username: uniqueUsername
    };

    await page.goto(data.url);
    await registerPage.openRegisterPage();
    await registerPage.registerUser(registerData);

    const successMessage = await registerPage.getSuccessMessage();
    expect(successMessage).toContain('Welcome');

    await homePage.logout();

    await registerPage.openRegisterPage();
    await registerPage.registerUser(userData);
    await expect(
      page.getByText('This username already exists.')
    ).toBeVisible();
    await page.close();
  });



for (const data of loginData) {
  test(`Validate login with username: ${data.testName}`,async ({ page, context }) => {
      await context.clearCookies();
      const loginPage = new LoginPage(page);
      const homePage = new HomePage(page);
      await loginPage.navigate();

      await loginPage.login(data.username,data.password);
      TestUtil.logMessage(`Login attempted with username: ${data.username}`);

      if (data.expected === 'success') {

        await loginPage.verifyLoginSuccess();
        await homePage.logout();
      }
      else {

        await TestUtil.captureScreenshot(page,`login-failure-${data.username || 'empty-user'}`);
        
        const isLoggedIn = await loginPage.isLoggedIn();
        // Flaky / security issue
        if (isLoggedIn) {

          TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${data.username}` );

          throw new Error(`Security issue: Invalid login succeeded for user ${data.username}`);

        }
        await loginPage.verifyLoginFailure(data.username,data.password);

        await expect(loginPage.usernameInput).toBeVisible();

        await expect(loginPage.passwordInput).toBeVisible();

        TestUtil.logMessage( `Login failure validated for username: ${data.username}`);

      } 
    }
  );
}



  for (const dataSet of registerData) {

  test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {

    const registerPage = new RegisterPage(page);
    const openNewAccountPage = new OpenNewAccountPage(page);
    const loginPage= new LoginPage(page);
    const accountOverviewPage = new AccountOverviewPage(page);

    await page.goto(`${data.url}/index.htm`);

    await loginPage.verifyOpenAccountLinkNotVisible();
    await registerPage.openRegisterPage();
    const uniqueUsername = generateUsername(dataSet.username, browserName);
    const userData = { ...dataSet,
                       username: uniqueUsername};

    await registerPage.registerUser(userData);

    if (dataSet.expected === 'success') {

      const successMessage = await registerPage.getSuccessMessage();

      expect(successMessage).toContain('Welcome');

      await openNewAccountPage.navigateToOpenNewAccountPage();
      await openNewAccountPage.validateAccountTypeDropdownOptions();

      await openNewAccountPage.validateFromAccountDropdownIsPopulated();

      
      await openNewAccountPage.createNewAccount(dataSet.accountType);
      
      await openNewAccountPage.verifyAccountCreatedSuccessfully();      
      
      const newAccountId = (await openNewAccountPage.getNewAccountId())!;

        expect(newAccountId).not.toBeNull();
      expect(newAccountId).toMatch(/^\d+$/);

        
        await accountOverviewPage.navigateToAccountsOverview();
        

        await accountOverviewPage.verifyAccountPresent(newAccountId);
    }
    else {

      await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
    }
  });
}

});