import { expect } from '@playwright/test';
import { test } from '../Fixture/BaseFixture';
import { AccountsAPI } from '../Pages/APIUsers';
import { RegisterPage } from '../Pages/RegisterPage';
import { OpenNewAccountPage } from '../Pages/Openess';
import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
import { LoginPage } from '../Pages/LoginPage';

import hybridData from '../TestData/hybrid.json';

for (const dataSet of hybridData) {

  test(`E2E Hybrid Flow - ${dataSet.username} - ${dataSet.accountType}`, async ({ page, data }) => {
    

    // =========================
    // PAGE OBJECT INIT
    // =========================
    const registerPage = new RegisterPage(page);
    const openNewAccountPage = new OpenNewAccountPage(page);
    const loginPage = new LoginPage(page);
    const accountOverviewPage = new AccountOverviewPage(page);
    const accountsAPI = new AccountsAPI();
    await accountsAPI.init(); 

    // =========================
    // 1. OPEN APPLICATION (FROM FIXTURE)
    // =========================
    await page.goto(`${data.url}/index.htm`);

    await loginPage.verifyOpenAccountLinkNotVisible();

    // =========================
    // 2. REGISTER USER
    // =========================
    await registerPage.openRegisterPage();
    await registerPage.registerUser(dataSet);

    const successMessage = await registerPage.getSuccessMessage();
    expect(successMessage).toContain('Welcome');

    // =========================
    // 3. OPEN NEW ACCOUNT
    // =========================
    await openNewAccountPage.navigateToOpenNewAccountPage();

    await openNewAccountPage.validateAccountTypeDropdownOptions();
    await openNewAccountPage.validateFromAccountDropdownIsPopulated();

    // Choose SAVINGS / CHECKING dynamically from dataset
    await openNewAccountPage.createNewAccount(dataSet.accountType);

    await openNewAccountPage.verifyAccountCreatedSuccessfully();

    // =========================
    // 4. CAPTURE ACCOUNT ID
    // =========================
    const newAccountId = await openNewAccountPage.getNewAccountId();

    expect(newAccountId).toBeTruthy();
    expect(newAccountId).toMatch(/^\d+$/);

    console.log("Created Account ID:", newAccountId);

    // =========================
    // 5. VERIFY IN UI (ACCOUNT OVERVIEW)
    // =========================
    await accountOverviewPage.navigateToAccountsOverview();
    // newAccountId can be string | null, ensure it's a string before passing to the page method
    if (newAccountId == null) throw new Error('New account ID is null or undefined');
    await accountOverviewPage.verifyAccountPresent(newAccountId);

    // =========================
    // 6. API VALIDATION USING SAME ACCOUNT ID
    // =========================
    const response = await accountsAPI.getAccounts(newAccountId);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log("API Response:", responseBody);

    // =========================
    // 7. API ASSERTIONS
    // =========================
    expect(responseBody).toBeDefined();
    expect(responseBody.id).toBe(Number(newAccountId));
    expect(responseBody.customerId).toBeDefined();
    expect(responseBody.type).toBe(dataSet.accountType);
    expect(responseBody.balance).toBeDefined();

  });

}