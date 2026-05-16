// ✅ One import replaces both BaseFixture and APIFixture
import { test, expect } from '../Fixture/Hybrid';

import { RegisterPage } from '../Pages/RegisterPage';
import { OpenNewAccountPage } from '../Pages/Openess';
import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
import { LoginPage } from '../Pages/LoginPage';

import hybridData from '../TestData/hybrid.json';

for (const dataSet of hybridData) {

    test(`E2E Hybrid Flow - ${dataSet.username} - ${dataSet.accountType}`, async ({ page, data, apiContext, accountsAPI }) => {

        // PAGE OBJECT INIT
        const registerPage = new RegisterPage(page);
        const openNewAccountPage = new OpenNewAccountPage(page);
        const loginPage = new LoginPage(page);
        const accountOverviewPage = new AccountOverviewPage(page);
        // ✅ accountsAPI is now injected directly — no manual instantiation needed

        // 1. OPEN APPLICATION
        await page.goto(`${data.url}/index.htm`);
        await loginPage.verifyOpenAccountLinkNotVisible();

        // 2. REGISTER USER
        await registerPage.openRegisterPage();
        await registerPage.registerUser(dataSet);
        expect(await registerPage.getSuccessMessage()).toContain('Welcome');

        // 3. OPEN NEW ACCOUNT
        await openNewAccountPage.navigateToOpenNewAccountPage();
        await openNewAccountPage.validateAccountTypeDropdownOptions();
        await openNewAccountPage.validateFromAccountDropdownIsPopulated();
        await openNewAccountPage.createNewAccount(dataSet.accountType);
        await openNewAccountPage.verifyAccountCreatedSuccessfully();

        // 4. CAPTURE & GUARD ACCOUNT ID
        const newAccountId = await openNewAccountPage.getNewAccountId();
        if (newAccountId == null) throw new Error('New account ID is null or undefined');
        expect(newAccountId).toMatch(/^\d+$/);

        // 5. UI VERIFICATION
        await accountOverviewPage.navigateToAccountsOverview();
        await accountOverviewPage.verifyAccountPresent(newAccountId);

        // 6. API CALL
        const response = await accountsAPI.getAccounts(newAccountId);
        expect(response.status()).toBe(200);

        // 7. API ASSERTIONS
        const responseBody = await response.json();
        expect(responseBody.id).toBe(Number(newAccountId));
        expect(responseBody.customerId).toBeDefined();
        expect(responseBody.type).toBe(dataSet.accountType);
        expect(responseBody.balance).toBeDefined();

    });

}