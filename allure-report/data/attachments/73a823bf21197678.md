# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate login with username: IncorrectPassword
- Location: tests/UI.spec.ts:86:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="username"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[name="username"]')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - columnheader "Account"
      - columnheader "Balance*"
      - columnheader "Available Amount"
  - rowgroup:
    - row "12345 -$2300.00 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$2300.00"
      - cell "$0.00"
    - row "12456 $10.45 $10.45":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$10.45"
      - cell "$10.45"
    - row "12567 $100.00 $100.00":
      - cell "12567":
        - link "12567":
          - /url: activity.htm?id=12567
      - cell "$100.00"
      - cell "$100.00"
    - row "12678 -$100.00 $0.00":
      - cell "12678":
        - link "12678":
          - /url: activity.htm?id=12678
      - cell "-$100.00"
      - cell "$0.00"
    - row "12789 $100.00 $100.00":
      - cell "12789":
        - link "12789":
          - /url: activity.htm?id=12789
      - cell "$100.00"
      - cell "$100.00"
    - row "12900 $0.00 $0.00":
      - cell "12900":
        - link "12900":
          - /url: activity.htm?id=12900
      - cell "$0.00"
      - cell "$0.00"
    - row "13011 $100.00 $100.00":
      - cell "13011":
        - link "13011":
          - /url: activity.htm?id=13011
      - cell "$100.00"
      - cell "$100.00"
    - row "13122 $1100.00 $1100.00":
      - cell "13122":
        - link "13122":
          - /url: activity.htm?id=13122
      - cell "$1100.00"
      - cell "$1100.00"
    - row "13233 $100.00 $100.00":
      - cell "13233":
        - link "13233":
          - /url: activity.htm?id=13233
      - cell "$100.00"
      - cell "$100.00"
    - row "13344 $1231.10 $1231.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1231.10"
      - cell "$1231.10"
    - row "54321 $1351.12 $1351.12":
      - cell "54321":
        - link "54321":
          - /url: activity.htm?id=54321
      - cell "$1351.12"
      - cell "$1351.12"
    - row "Total $1692.67":
      - cell "Total"
      - cell "$1692.67"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  49  |       city: 'Kolkata',
  50  |       state: 'West Bengal',
  51  |       zipCode: '700001',
  52  |       phone: '9876543210',
  53  |       ssn: '123456',
  54  |       username: username,
  55  |       password: 'Test@123',
  56  |       confirmPassword: 'Test@123'
  57  |     };
  58  | 
  59  |     await page.goto(data.url);
  60  | 
  61  |     // Step 1 -> Register first time
  62  |     await registerPage.openRegisterPage();
  63  |     await registerPage.registerUser(userData);
  64  | 
  65  |     const successMessage = await registerPage.getSuccessMessage();
  66  |     expect(successMessage).toContain('Welcome');
  67  | 
  68  |     // Step 2 -> Logout
  69  |     await homePage.logout();
  70  | 
  71  |     // Step 3 -> Try registering again with same username
  72  |     await registerPage.openRegisterPage();
  73  |     await registerPage.registerUser(userData);
  74  | 
  75  |     // Step 4 -> Verify duplicate username error
  76  |     await expect(
  77  |       page.getByText('This username already exists.')
  78  |     ).toBeVisible();
  79  |     await page.close();
  80  |   });
  81  | 
  82  | 
  83  | 
  84  | for (const data of loginData) {
  85  | 
  86  |   test(`Validate login with username: ${data.testName}`,async ({ page, context }) => {
  87  |       await context.clearCookies();
  88  |       const loginPage = new LoginPage(page);
  89  | 
  90  |       await loginPage.navigate();
  91  | 
  92  |       await loginPage.login(
  93  |         data.username,
  94  |         data.password
  95  |       );
  96  |       TestUtil.logMessage(`Login attempted with username: ${data.username}`
  97  | 
  98  | );
  99  | 
  100 |       if (data.expected === 'success') {
  101 | 
  102 |         await loginPage.verifyLoginSuccess();
  103 | 
  104 |         await loginPage.click(
  105 |           'text=Log Out'
  106 |         );
  107 |       }
  108 | 
  109 |       // else {
  110 | 
  111 |       //   await TestUtil.captureScreenshot( page,`login-failure-${data.username || 'empty-user'}`);
  112 | 
  113 |       //   await loginPage.verifyLoginFailure(
  114 |       //     data.username,
  115 |       //     data.password
  116 |       //   );
  117 | 
  118 |       //   await expect(
  119 |       //     loginPage.usernameInput
  120 |       //   ).toBeVisible();
  121 | 
  122 |       //   await expect(
  123 |       //     loginPage.passwordInput
  124 |       //   ).toBeVisible();
  125 |       // }
  126 |       else {
  127 | 
  128 |         const isLoggedIn =
  129 |           await page.locator('text=Log Out')
  130 |             .isVisible()
  131 |             .catch(() => false);
  132 | 
  133 |         // Handle flaky app behavior
  134 |         if (isLoggedIn) {
  135 | 
  136 |           console.log(
  137 |             `BUG: Invalid credentials logged in for user: ${data.username}`
  138 |           );
  139 | 
  140 |           // Fail intentionally
  141 |           throw new Error(
  142 |             'Security Bug: Login succeeded with invalid credentials'
  143 |           );
  144 |         }
  145 | 
  146 |         // Verify still on login page
  147 |         await expect(
  148 |           loginPage.usernameInput
> 149 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  150 | 
  151 |         await expect(
  152 |           loginPage.passwordInput
  153 |         ).toBeVisible();
  154 | 
  155 |         // Verify error message
  156 |         await expect(
  157 |           page.locator('.error')
  158 |         ).toBeVisible();
  159 | 
  160 |         await page.screenshot({
  161 |           path:
  162 |             `screenshots/login-failure-${data.username || 'empty-user'}.png`,
  163 |           fullPage: true
  164 |         });
  165 |       }
  166 |       
  167 |     }
  168 |   );
  169 | }
  170 | 
  171 | 
  172 | 
  173 |   for (const dataSet of registerData) {
  174 | 
  175 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  176 | 
  177 |     const registerPage =
  178 |       new RegisterPage(page);
  179 | 
  180 |     const openNewAccountPage =
  181 |       new OpenNewAccountPage(page);
  182 |     const loginPage= new LoginPage(page);
  183 |     const accountOverviewPage =
  184 |   new AccountOverviewPage(page);
  185 | 
  186 |     await page.goto(
  187 |       `${data.url}/index.htm`
  188 |     );
  189 |     await loginPage.verifyOpenAccountLinkNotVisible();
  190 |     await registerPage.openRegisterPage();
  191 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  192 |   const userData = {
  193 |   ...dataSet,
  194 |   username: uniqueUsername
  195 | };
  196 | 
  197 |     await registerPage.registerUser(userData);
  198 | 
  199 |     if (dataSet.expected === 'success') {
  200 | 
  201 |       const successMessage =
  202 |         await registerPage.getSuccessMessage();
  203 | 
  204 |       expect(successMessage)
  205 |         .toContain('Welcome');
  206 | 
  207 |       await openNewAccountPage
  208 |         .navigateToOpenNewAccountPage();
  209 |       await openNewAccountPage
  210 |         .validateAccountTypeDropdownOptions();
  211 | 
  212 |       await openNewAccountPage
  213 |         .validateFromAccountDropdownIsPopulated();
  214 | 
  215 |       
  216 |       await openNewAccountPage
  217 |         .createNewAccount(dataSet.accountType);
  218 |       
  219 |       await openNewAccountPage
  220 |         .verifyAccountCreatedSuccessfully();      
  221 |       
  222 |       const newAccountId =
  223 |         (await openNewAccountPage.getNewAccountId())!;
  224 | 
  225 |         expect(newAccountId).not.toBeNull();
  226 |       expect(newAccountId)
  227 |         .toMatch(/^\d+$/);
  228 | 
  229 |         
  230 |         await accountOverviewPage.navigateToAccountsOverview();
  231 |         
  232 | 
  233 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  234 |     }
  235 |     else {
  236 | 
  237 |       await expect(
  238 |         page.locator(
  239 |           registerPage.locators.passwordMismatchError
  240 |         )
  241 |       ).toHaveText(
  242 |         'Passwords did not match.'
  243 |       );
  244 |     }
  245 |   });
  246 | }
  247 | 
  248 | });
```