// ✅ One import replaces both BaseFixture and APIFixture
import { test, expect } from '../Fixture/Hybrid';
import { RegisterPage } from '../Pages/RegisterPage';
import { OpenNewAccountPage } from '../Pages/Openess';
import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
import { generateUsername } from '../Utility/generateUser';
import { LoginPage } from '../Pages/LoginPage';

import hybridData from '../TestData/hybrid.json';

for (const dataSet of hybridData) {

    test(`E2E Hybrid Flow - ${dataSet.username} - ${dataSet.accountType}`, async ({ page, data, accountsAPI, browserName }) => {

        
        const registerPage = new RegisterPage(page);
        const openNewAccountPage = new OpenNewAccountPage(page);
        const loginPage = new LoginPage(page);
        const accountOverviewPage = new AccountOverviewPage(page);
        await page.goto(`${data.url}/index.htm`);
        await loginPage.verifyOpenAccountLinkNotVisible();

         const uniqueUsername = generateUsername(dataSet.username, browserName);
         const userData = { ...dataSet, username: uniqueUsername};

          

        
        await registerPage.openRegisterPage();
        await registerPage.registerUser(userData);
        
        expect(await registerPage.getSuccessMessage()).toContain('Welcome');

        await openNewAccountPage.navigateToOpenNewAccountPage();
        await openNewAccountPage.validateAccountTypeDropdownOptions();
        await openNewAccountPage.validateFromAccountDropdownIsPopulated();
        await openNewAccountPage.createNewAccount(dataSet.accountType);
        await openNewAccountPage.verifyAccountCreatedSuccessfully();

        const newAccountId = await openNewAccountPage.getNewAccountId();
        if (newAccountId == null) throw new Error('New account ID is null or undefined');
        expect(newAccountId).toMatch(/^\d+$/);

        await accountOverviewPage.navigateToAccountsOverview();
        await accountOverviewPage.verifyAccountPresent(newAccountId);

        const response = await accountsAPI.getAccounts(newAccountId);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.id).toBe(Number(newAccountId));
        expect(responseBody.customerId).toBeDefined();
        expect(responseBody.type).toBe(dataSet.accountType);
        expect(responseBody.balance).toBeDefined();

    });

}