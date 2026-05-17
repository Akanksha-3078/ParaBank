# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate SAVINGS Account Flow for raghav_105
- Location: tests/UI.spec.ts:132:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('span#repeatedPassword\\.errors')
Expected: "Passwords did not match."
Received: "Password confirmation is required."
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('span#repeatedPassword\\.errors')
    14 × locator resolved to <span class="error" id="repeatedPassword.errors">Password confirmation is required.</span>
       - unexpected value "Password confirmation is required."

```

```yaml
- text: Password confirmation is required.
```

# Test source

```ts
  78  |       page.getByText('This username already exists.')
  79  |     ).toBeVisible();
  80  |     await page.close();
  81  |   });
  82  | 
  83  | 
  84  | 
  85  | for (const data of loginData) {
  86  |   test(`Validate login with username: ${data.testName}`,async ({ page, context }) => {
  87  |       await context.clearCookies();
  88  |       const loginPage = new LoginPage(page);
  89  |       const homePage = new HomePage(page);
  90  |       await loginPage.navigate();
  91  | 
  92  |       await loginPage.login(data.username,data.password);
  93  |       TestUtil.logMessage(`Login attempted with username: ${data.username}`);
  94  | 
  95  |       if (data.expected === 'success') {
  96  | 
  97  |         await loginPage.verifyLoginSuccess();
  98  |         await homePage.logout();
  99  |       }
  100 |       else {
  101 | 
  102 |         await TestUtil.captureScreenshot(page,`login-failure-${data.username || 'empty-user'}`);
  103 |         // Check if user got logged in accidentally
  104 |         //const isLoggedIn = await page.locator('text=Log Out').isVisible().catch(() => false);
  105 |         const isLoggedIn = await loginPage.isLoggedIn();
  106 |         // Flaky / security issue
  107 |         if (isLoggedIn) {
  108 | 
  109 |           TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${data.username}` );
  110 | 
  111 |           throw new Error(`Security issue: Invalid login succeeded for user ${data.username}`);
  112 | 
  113 |         }
  114 |         // Expected failure validation
  115 |         await loginPage.verifyLoginFailure(data.username,data.password);
  116 | 
  117 |         await expect(loginPage.usernameInput).toBeVisible();
  118 | 
  119 |         await expect(loginPage.passwordInput).toBeVisible();
  120 | 
  121 |         TestUtil.logMessage( `Login failure validated for username: ${data.username}`);
  122 | 
  123 |       } 
  124 |     }
  125 |   );
  126 | }
  127 | 
  128 | 
  129 | 
  130 |   for (const dataSet of registerData) {
  131 | 
  132 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  133 | 
  134 |     const registerPage = new RegisterPage(page);
  135 |     const openNewAccountPage = new OpenNewAccountPage(page);
  136 |     const loginPage= new LoginPage(page);
  137 |     const accountOverviewPage = new AccountOverviewPage(page);
  138 | 
  139 |     await page.goto(`${data.url}/index.htm`);
  140 | 
  141 |     await loginPage.verifyOpenAccountLinkNotVisible();
  142 |     await registerPage.openRegisterPage();
  143 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  144 |     const userData = { ...dataSet,
  145 |                        username: uniqueUsername};
  146 | 
  147 |     await registerPage.registerUser(userData);
  148 | 
  149 |     if (dataSet.expected === 'success') {
  150 | 
  151 |       const successMessage = await registerPage.getSuccessMessage();
  152 | 
  153 |       expect(successMessage).toContain('Welcome');
  154 | 
  155 |       await openNewAccountPage.navigateToOpenNewAccountPage();
  156 |       await openNewAccountPage.validateAccountTypeDropdownOptions();
  157 | 
  158 |       await openNewAccountPage.validateFromAccountDropdownIsPopulated();
  159 | 
  160 |       
  161 |       await openNewAccountPage.createNewAccount(dataSet.accountType);
  162 |       
  163 |       await openNewAccountPage.verifyAccountCreatedSuccessfully();      
  164 |       
  165 |       const newAccountId = (await openNewAccountPage.getNewAccountId())!;
  166 | 
  167 |         expect(newAccountId).not.toBeNull();
  168 |       expect(newAccountId).toMatch(/^\d+$/);
  169 | 
  170 |         
  171 |         await accountOverviewPage.navigateToAccountsOverview();
  172 |         
  173 | 
  174 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  175 |     }
  176 |     else {
  177 | 
> 178 |       await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
      |                                                                               ^ Error: expect(locator).toHaveText(expected) failed
  179 |     }
  180 |   });
  181 | }
  182 | 
  183 | });
```