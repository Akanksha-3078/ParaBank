# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> @smoke @ui @flaky Validate login with username: (TC-LG-03) IncorrectPassword
- Location: tests/UI.spec.ts:67:7

# Error details

```
Error: Security issue: Invalid login succeeded for user Akanksha_30
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome John Smith
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Accounts Overview" [level=1] [ref=e51]
        - table [ref=e52]:
          - rowgroup [ref=e53]:
            - row "Account Balance* Available Amount" [ref=e54]:
              - columnheader "Account" [ref=e55]
              - columnheader "Balance*" [ref=e56]
              - columnheader "Available Amount" [ref=e57]
          - rowgroup
          - rowgroup [ref=e58]:
            - row "*Balance includes deposits that may be subject to holds" [ref=e59]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=e60]
  - generic [ref=e62]:
    - list [ref=e63]:
      - listitem [ref=e64]:
        - link "Home" [ref=e65] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "About Us" [ref=e67] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Services" [ref=e69] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e70]:
        - link "Products" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Locations" [ref=e73] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e74]:
        - link "Forum" [ref=e75] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e76]:
        - link "Site Map" [ref=e77] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e78]:
        - link "Contact Us" [ref=e79] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e80]: © Parasoft. All rights reserved.
    - list [ref=e81]:
      - listitem [ref=e82]: "Visit us at:"
      - listitem [ref=e83]:
        - link "www.parasoft.com" [ref=e84] [cursor=pointer]:
          - /url: http://www.parasoft.com/
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
  17  |   test('@negative @ui (TC-AC-UI-02, TC-NEG-01) Verify mandatory field validation with no data', async ({ page, data }) => {
  18  | 
  19  |     const registerPage = new RegisterPage(page);
  20  | 
  21  |     await page.goto(data.url);
  22  |      //await page.goto(`${data.url}`);
  23  | 
  24  |     await registerPage.openRegisterPage();
  25  | 
  26  |     await registerPage.click(registerPage.locators.registerButton);
  27  | 
  28  |    await TestUtil.captureScreenshot(page,`madatoryField-failure-|| 'empty-user'}`);
  29  | 
  30  |     await expect(page.getByText('First name is required.')).toBeVisible();
  31  |     await expect(page.getByText('Last name is required.')).toBeVisible();
  32  |     await expect(page.getByText('Address is required.')).toBeVisible();
  33  |   });
  34  | 
  35  | 
  36  |   test('@negative @ui (TC-AC-UI-03, TC-NEG-02 ) Verify user cannot register with existing username', async ({ page, data }) => {
  37  | 
  38  |     const registerPage = new RegisterPage(page);
  39  |     const homePage = new HomePage(page);
  40  | 
  41  |     const uniqueUsername = `user${Date.now()}`;
  42  |     const registerData = {
  43  |       ...userData,
  44  |       username: uniqueUsername
  45  |     };
  46  | 
  47  |     await page.goto(data.url);
  48  |     await registerPage.openRegisterPage();
  49  |     await registerPage.registerUser(registerData);
  50  | 
  51  |     const successMessage = await registerPage.getSuccessMessage();
  52  |     expect(successMessage).toContain('Welcome');
  53  | 
  54  |     await homePage.logout();
  55  | 
  56  |     await registerPage.openRegisterPage();
  57  |     await registerPage.registerUser(userData);
  58  |     await expect(
  59  |       page.getByText('This username already exists.')
  60  |     ).toBeVisible();
  61  |     await page.close();
  62  |   });
  63  | 
  64  | 
  65  | 
  66  | for (const dataSet of loginData) {
  67  |   test(`@smoke @ui @flaky Validate login with username: ${dataSet.testName}`,async ({ page, context, data}) => {
  68  |       await context.clearCookies();
  69  |       const loginPage = new LoginPage(page);
  70  |       const homePage = new HomePage(page);
  71  |        await page.goto(data.url);
  72  |       //await loginPage.navigate();
  73  | 
  74  |       await loginPage.login(dataSet.username,dataSet.password);
  75  |       TestUtil.logMessage(`Login attempted with username: ${dataSet.username}`);
  76  | 
  77  |       if (dataSet.expected === 'success') {
  78  | 
  79  |         await loginPage.verifyLoginSuccess();
  80  |         await homePage.logout();
  81  |       }
  82  |       else {
  83  |         const isLoggedIn = await loginPage.isLoggedIn();
  84  |          await TestUtil.captureScreenshot(page,`login-failure-${dataSet.username || 'empty-user'}`);
  85  |         // // Flaky / security issue
  86  |         console.log(isLoggedIn);
  87  |         if (isLoggedIn) {
  88  | 
  89  |           TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${dataSet.username}` );
> 90  |            throw new Error(`Security issue: Invalid login succeeded for user ${dataSet.username}`);
      |                  ^ Error: Security issue: Invalid login succeeded for user Akanksha_30
  91  |           
  92  |         //await context.clearCookies();
  93  | 
  94  |        }
  95  |       
  96  |         await loginPage.verifyLoginFailure(dataSet.username,dataSet.password);
  97  | 
  98  |         await expect(loginPage.usernameInput).toBeVisible();
  99  | 
  100 |         await expect(loginPage.passwordInput).toBeVisible();
  101 | 
  102 |         TestUtil.logMessage( `Login failure validated for username: ${dataSet.username}`);
  103 |          await TestUtil.captureScreenshot(page,`login-failure-${dataSet.username || 'empty-user'}`);
  104 | 
  105 |       } 
  106 |     }
  107 |   );
  108 | }
  109 | 
  110 | 
  111 | 
  112 |   for (const dataSet of registerData) {
  113 | 
  114 |   test(`@regression @ui (TC-AC-UI-01, TC-NEG-03 TO 10 ) Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  115 | 
  116 |     const registerPage = new RegisterPage(page);
  117 |     const openNewAccountPage = new OpenNewAccountPage(page);
  118 |     const loginPage= new LoginPage(page);
  119 |     const accountOverviewPage = new AccountOverviewPage(page);
  120 | 
  121 |     await page.goto(data.url);
  122 | 
  123 |     await loginPage.verifyOpenAccountLinkNotVisible();
  124 |     await registerPage.openRegisterPage();
  125 |     const uniqueUsername = generateUsername(browserName);
  126 |     const userData = { ...dataSet,
  127 |                        username: uniqueUsername};
  128 | 
  129 |     await registerPage.registerUser(userData);
  130 | 
  131 |     if (dataSet.expected === 'success') {
  132 | 
  133 |       const successMessage = await registerPage.getSuccessMessage();
  134 | 
  135 |       expect(successMessage).toContain('Welcome');
  136 | 
  137 |       await openNewAccountPage.navigateToOpenNewAccountPage();
  138 |       await openNewAccountPage.validateAccountTypeDropdownOptions();
  139 | 
  140 |       await openNewAccountPage.validateFromAccountDropdownIsPopulated();
  141 | 
  142 |       
  143 |       await openNewAccountPage.createNewAccount(dataSet.accountType);
  144 |       
  145 |       await openNewAccountPage.verifyAccountCreatedSuccessfully();      
  146 |       
  147 |       const newAccountId = (await openNewAccountPage.getNewAccountId())!;
  148 |       console.log(newAccountId);
  149 |        TestUtil.logMessage(`User is created successfully with username ${uniqueUsername} and new AccountID is ${newAccountId}`);
  150 | 
  151 |         expect(newAccountId).not.toBeNull();
  152 |       expect(newAccountId).toMatch(/^\d+$/);
  153 | 
  154 |         
  155 |         await accountOverviewPage.navigateToAccountsOverview();
  156 |         
  157 | 
  158 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  159 |     }
  160 |     else {
  161 | 
  162 |       await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
  163 |     }
  164 |      await TestUtil.captureScreenshot(page,`regression-failure-${dataSet.username || 'empty-user'}`);
  165 |   });
  166 | }
  167 | 
  168 | });
```