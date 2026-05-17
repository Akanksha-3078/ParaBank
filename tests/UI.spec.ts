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

  test('@negative @ui Verify mandatory field validation with no data', async ({ page, data }) => {

    const registerPage = new RegisterPage(page);

    await page.goto(data.url);
     //await page.goto(`${data.url}`);

    await registerPage.openRegisterPage();

    await registerPage.click(registerPage.locators.registerButton);

   await TestUtil.captureScreenshot(page,`madatoryField-failure-|| 'empty-user'}`);

    await expect(page.getByText('First name is required.')).toBeVisible();
    await expect(page.getByText('Last name is required.')).toBeVisible();
    await expect(page.getByText('Address is required.')).toBeVisible();
  });


  test('@negative @ui Verify user cannot register with existing username', async ({ page, data }) => {

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



for (const dataSet of loginData) {
  test(`@smoke @ui Validate login with username: ${dataSet.testName}`,async ({ page, context, data}) => {
      await context.clearCookies();
      const loginPage = new LoginPage(page);
      const homePage = new HomePage(page);
       await page.goto(data.url);
      //await loginPage.navigate();

      await loginPage.login(dataSet.username,dataSet.password);
      TestUtil.logMessage(`Login attempted with username: ${dataSet.username}`);

      if (dataSet.expected === 'success') {

        await loginPage.verifyLoginSuccess();
        await homePage.logout();
      }
      else {
        const isLoggedIn = await loginPage.isLoggedIn();
         await TestUtil.captureScreenshot(page,`login-failure-${dataSet.username || 'empty-user'}`);
        // // Flaky / security issue
        console.log(isLoggedIn);
        if (isLoggedIn) {
          //await homePage.logout();

          TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${dataSet.username}` );
           throw new Error(`Security issue: Invalid login succeeded for user ${dataSet.username}`);
          
        //await context.clearCookies();

       }
      
        await loginPage.verifyLoginFailure(dataSet.username,dataSet.password);

        await expect(loginPage.usernameInput).toBeVisible();

        await expect(loginPage.passwordInput).toBeVisible();

        TestUtil.logMessage( `Login failure validated for username: ${dataSet.username}`);

      } 
    }
  );
}



  for (const dataSet of registerData) {

  test(`@regression @ui Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {

    const registerPage = new RegisterPage(page);
    const openNewAccountPage = new OpenNewAccountPage(page);
    const loginPage= new LoginPage(page);
    const accountOverviewPage = new AccountOverviewPage(page);

    //await page.goto(`${data.url}/index.htm`);
    await page.goto(data.url);

    await loginPage.verifyOpenAccountLinkNotVisible();
     //await page.waitForLoadState('networkidle');
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
       TestUtil.logMessage(`User is created successfully with username ${uniqueUsername} and new AccountID is ${newAccountId}`);

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