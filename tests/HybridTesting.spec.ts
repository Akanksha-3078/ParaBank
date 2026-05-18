import { test, expect } from '../Fixture/Hybrid';
import { RegisterPage } from '../Pages/RegisterPage';
import { OpenNewAccountPage } from '../Pages/Openess';
import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
import { generateUsername } from '../Utility/generateUser';
import { LoginPage } from '../Pages/LoginPage';
import { TestUtil } from '../Utility/helper';
import { logger } from '../Utility/logger';

import hybridData from '../TestData/hybrid.json';

for (const dataSet of hybridData) {

    test(`@integration @ai @ui (TC-API-02-HY)E2E Hybrid Flow - ${dataSet.username} - ${dataSet.accountType}`, async ({ page, data, accountsAPI, browserName }) => {

        logger.info(`Starting Hybrid E2E Flow for ${dataSet.username}`);
        const registerPage = new RegisterPage(page);
        const openNewAccountPage = new OpenNewAccountPage(page);
        const loginPage = new LoginPage(page);
        const accountOverviewPage = new AccountOverviewPage(page);
        //await page.goto(`${data.url}/index.htm`);
        await page.goto(data.url)
        await loginPage.verifyOpenAccountLinkNotVisible();

         const uniqueUsername = generateUsername(browserName);
         const userData = { ...dataSet, username: uniqueUsername};

        await registerPage.openRegisterPage();
        await registerPage.registerUser(userData);
        logger.info(`User is registered with username ${uniqueUsername}`);
        expect(await registerPage.getSuccessMessage()).toContain('Welcome');

        await openNewAccountPage.navigateToOpenNewAccountPage();
        await openNewAccountPage.validateAccountTypeDropdownOptions();
        await openNewAccountPage.validateFromAccountDropdownIsPopulated();
        await openNewAccountPage.createNewAccount(dataSet.accountType);
        await openNewAccountPage.verifyAccountCreatedSuccessfully();
       
        const newAccountId = (await openNewAccountPage.getNewAccountId())!;
         logger.info(`New Account is created Successfully and AccountId is ${newAccountId}`);
        if (newAccountId == null) throw new Error('New account ID is null or undefined');
        expect(newAccountId).toMatch(/^\d+$/);

        await accountOverviewPage.navigateToAccountsOverview();
       await accountOverviewPage.verifyAccountPresent(newAccountId);
         logger.info(`Iniciation of the API testing with ${newAccountId}`);
         console.log("ACCOUNT ID:", newAccountId);
        const response = await accountsAPI.getAccounts(newAccountId);
        console.log(newAccountId);
        console.log(response);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.id).toBe(Number(newAccountId));
        expect(responseBody.customerId).toBeDefined();
        expect(responseBody.type).toBe(dataSet.accountType);
        expect(responseBody.balance).toBeDefined();
        logger.info(`Hybrid E2E Flow completed successfully for ${uniqueUsername}`);
         await TestUtil.captureScreenshot(page,`HYBRID-${dataSet.username || 'empty-user'}`);

    });

}


