# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate SAVINGS Account Flow for raghav_105
- Location: tests/UI.spec.ts:110:7

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at http://http//localhost:9090/parabank//index.htm
Call log:
  - navigating to "http://http//localhost:9090/parabank//index.htm", waiting until "load"

```

# Test source

```ts
  17  |   test('Verify mandatory field validation with no data', async ({ page, data }) => {
  18  | 
  19  |     const registerPage = new RegisterPage(page);
  20  | 
  21  |     await page.goto(data.url);
  22  | 
  23  |     await registerPage.openRegisterPage();
  24  | 
  25  |     await registerPage.click(registerPage.locators.registerButton);
  26  | 
  27  |    await TestUtil.captureScreenshot(page,`madatoryField-failure-|| 'empty-user'}`);
  28  | 
  29  |     await expect(page.getByText('First name is required.')).toBeVisible();
  30  |     await expect(page.getByText('Last name is required.')).toBeVisible();
  31  |     await expect(page.getByText('Address is required.')).toBeVisible();
  32  |   });
  33  | 
  34  | 
  35  |   test('Verify user cannot register with existing username', async ({ page, data }) => {
  36  | 
  37  |     const registerPage = new RegisterPage(page);
  38  |     const homePage = new HomePage(page);
  39  | 
  40  |     const uniqueUsername = `user${Date.now()}`;
  41  |     const registerData = {
  42  |       ...userData,
  43  |       username: uniqueUsername
  44  |     };
  45  | 
  46  |     await page.goto(data.url);
  47  |     await registerPage.openRegisterPage();
  48  |     await registerPage.registerUser(registerData);
  49  | 
  50  |     const successMessage = await registerPage.getSuccessMessage();
  51  |     expect(successMessage).toContain('Welcome');
  52  | 
  53  |     await homePage.logout();
  54  | 
  55  |     await registerPage.openRegisterPage();
  56  |     await registerPage.registerUser(userData);
  57  |     await expect(
  58  |       page.getByText('This username already exists.')
  59  |     ).toBeVisible();
  60  |     await page.close();
  61  |   });
  62  | 
  63  | 
  64  | 
  65  | for (const data of loginData) {
  66  |   test(`Validate login with username: ${data.testName}`,async ({ page, context }) => {
  67  |       await context.clearCookies();
  68  |       const loginPage = new LoginPage(page);
  69  |       const homePage = new HomePage(page);
  70  |       await loginPage.navigate();
  71  | 
  72  |       await loginPage.login(data.username,data.password);
  73  |       TestUtil.logMessage(`Login attempted with username: ${data.username}`);
  74  | 
  75  |       if (data.expected === 'success') {
  76  | 
  77  |         await loginPage.verifyLoginSuccess();
  78  |         await homePage.logout();
  79  |       }
  80  |       else {
  81  | 
  82  |         await TestUtil.captureScreenshot(page,`login-failure-${data.username || 'empty-user'}`);
  83  |         
  84  |         const isLoggedIn = await loginPage.isLoggedIn();
  85  |         // Flaky / security issue
  86  |         if (isLoggedIn) {
  87  | 
  88  |           TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${data.username}` );
  89  | 
  90  |           throw new Error(`Security issue: Invalid login succeeded for user ${data.username}`);
  91  | 
  92  |         }
  93  |         await loginPage.verifyLoginFailure(data.username,data.password);
  94  | 
  95  |         await expect(loginPage.usernameInput).toBeVisible();
  96  | 
  97  |         await expect(loginPage.passwordInput).toBeVisible();
  98  | 
  99  |         TestUtil.logMessage( `Login failure validated for username: ${data.username}`);
  100 | 
  101 |       } 
  102 |     }
  103 |   );
  104 | }
  105 | 
  106 | 
  107 | 
  108 |   for (const dataSet of registerData) {
  109 | 
  110 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  111 | 
  112 |     const registerPage = new RegisterPage(page);
  113 |     const openNewAccountPage = new OpenNewAccountPage(page);
  114 |     const loginPage= new LoginPage(page);
  115 |     const accountOverviewPage = new AccountOverviewPage(page);
  116 | 
> 117 |     await page.goto(`${data.url}/index.htm`);
      |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at http://http//localhost:9090/parabank//index.htm
  118 | 
  119 |     await loginPage.verifyOpenAccountLinkNotVisible();
  120 |     await registerPage.openRegisterPage();
  121 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  122 |     const userData = { ...dataSet,
  123 |                        username: uniqueUsername};
  124 | 
  125 |     await registerPage.registerUser(userData);
  126 | 
  127 |     if (dataSet.expected === 'success') {
  128 | 
  129 |       const successMessage = await registerPage.getSuccessMessage();
  130 | 
  131 |       expect(successMessage).toContain('Welcome');
  132 | 
  133 |       await openNewAccountPage.navigateToOpenNewAccountPage();
  134 |       await openNewAccountPage.validateAccountTypeDropdownOptions();
  135 | 
  136 |       await openNewAccountPage.validateFromAccountDropdownIsPopulated();
  137 | 
  138 |       
  139 |       await openNewAccountPage.createNewAccount(dataSet.accountType);
  140 |       
  141 |       await openNewAccountPage.verifyAccountCreatedSuccessfully();      
  142 |       
  143 |       const newAccountId = (await openNewAccountPage.getNewAccountId())!;
  144 | 
  145 |         expect(newAccountId).not.toBeNull();
  146 |       expect(newAccountId).toMatch(/^\d+$/);
  147 | 
  148 |         
  149 |         await accountOverviewPage.navigateToAccountsOverview();
  150 |         
  151 | 
  152 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  153 |     }
  154 |     else {
  155 | 
  156 |       await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
  157 |     }
  158 |   });
  159 | }
  160 | 
  161 | });
```