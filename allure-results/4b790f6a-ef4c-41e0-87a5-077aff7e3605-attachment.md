# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Verify user cannot register with existing username
- Location: tests/UI.spec.ts:35:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('This username already exists.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('This username already exists.')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: 9fcfb11ddc900aaa • 2026-05-17 03:56:22 UTC"
  - heading "You are being rate limited" [level=2]
- heading "What happened?" [level=2]
- paragraph: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
- paragraph:
  - text: Please see
  - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
  - text: for more details.
- text: Was this page helpful?
- button "Yes"
- button "No"
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: 9fcfb11ddc900aaa
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | import { test } from '../Fixture/BaseFixture';
  3   | import { RegisterPage } from '../Pages/RegisterPage';
  4   | import { HomePage } from '../Pages/HomePage';
  5   | import { LoginPage } from '../Pages/LoginPage';
  6   | import { OpenNewAccountPage } from '../Pages/Openess';
  7   | import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
  8   | import loginData from '../TestData/loginData.json';
  9   | import registerData from '../TestData/registerData.json';
  10  | import { generateUsername } from '../Utility/generateUser';
  11  | import userData from '../TestData/existUser.json';
  12  | import { TestUtil } from '../Utility/helper';
  13  | 
  14  | 
  15  | test.describe('Registration Module', () => {
  16  | 
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
  41  | 
  42  |     // const userData = {
  43  |     //   firstName: 'Sanvu',
  44  |     //   lastName: 'Prasad',
  45  |     //   address: 'Kolkata',
  46  |     //   city: 'Kolkata',
  47  |     //   state: 'West Bengal',
  48  |     //   zipCode: '700001',
  49  |     //   phone: '9876543210',
  50  |     //   ssn: '123456',
  51  |     //   username: username,
  52  |     //   password: 'Test@123',
  53  |     //   confirmPassword: 'Test@123'
  54  |     // };
  55  |     const registerData = {
  56  |       ...userData,
  57  |       username: uniqueUsername
  58  |     };
  59  | 
  60  |     await page.goto(data.url);
  61  | 
  62  |     // Step 1 -> Register first time
  63  |     await registerPage.openRegisterPage();
  64  |     await registerPage.registerUser(registerData);
  65  | 
  66  |     const successMessage = await registerPage.getSuccessMessage();
  67  |     expect(successMessage).toContain('Welcome');
  68  | 
  69  |     // Step 2 -> Logout
  70  |     await homePage.logout();
  71  | 
  72  |     // Step 3 -> Try registering again with same username
  73  |     await registerPage.openRegisterPage();
  74  |     await registerPage.registerUser(userData);
  75  | 
  76  |     // Step 4 -> Verify duplicate username error
  77  |     await expect(
  78  |       page.getByText('This username already exists.')
> 79  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
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
  178 |       await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
  179 |     }
```