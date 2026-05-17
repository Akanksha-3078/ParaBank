# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate login with username: UserNotPresent
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
    - row "12345 -$3100.00 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$3100.00"
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
    - row "13344 $1131.10 $1131.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1131.10"
      - cell "$1131.10"
    - row "13566 $100.00 $100.00":
      - cell "13566":
        - link "13566":
          - /url: activity.htm?id=13566
      - cell "$100.00"
      - cell "$100.00"
    - row "16341 $100.00 $100.00":
      - cell "16341":
        - link "16341":
          - /url: activity.htm?id=16341
      - cell "$100.00"
      - cell "$100.00"
    - row "16452 $100.00 $100.00":
      - cell "16452":
        - link "16452":
          - /url: activity.htm?id=16452
      - cell "$100.00"
      - cell "$100.00"
    - row "16563 $100.00 $100.00":
      - cell "16563":
        - link "16563":
          - /url: activity.htm?id=16563
      - cell "$100.00"
      - cell "$100.00"
    - row "16674 $100.00 $100.00":
      - cell "16674":
        - link "16674":
          - /url: activity.htm?id=16674
      - cell "$100.00"
      - cell "$100.00"
    - row "16785 $100.00 $100.00":
      - cell "16785":
        - link "16785":
          - /url: activity.htm?id=16785
      - cell "$100.00"
      - cell "$100.00"
    - row "16896 $100.00 $100.00":
      - cell "16896":
        - link "16896":
          - /url: activity.htm?id=16896
      - cell "$100.00"
      - cell "$100.00"
    - row "17007 $100.00 $100.00":
      - cell "17007":
        - link "17007":
          - /url: activity.htm?id=17007
      - cell "$100.00"
      - cell "$100.00"
    - row "17118 $100.00 $100.00":
      - cell "17118":
        - link "17118":
          - /url: activity.htm?id=17118
      - cell "$100.00"
      - cell "$100.00"
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
  20  |     await page.goto(data.url);
  21  | 
  22  |     await registerPage.openRegisterPage();
  23  | 
  24  |     await registerPage.click(registerPage.locators.registerButton);
  25  | 
  26  |     await page.screenshot({
  27  |       path: 'screenshots/mandatory-validation.png',
  28  |       fullPage: true
  29  |     });
  30  | 
  31  |     await expect(page.getByText('First name is required.')).toBeVisible();
  32  |     await expect(page.getByText('Last name is required.')).toBeVisible();
  33  |     await expect(page.getByText('Address is required.')).toBeVisible();
  34  |     await page.close();
  35  |   });
  36  | 
  37  | 
  38  |   test('Verify user cannot register with existing username', async ({ page, data }) => {
  39  | 
  40  |     const registerPage = new RegisterPage(page);
  41  |     const homePage = new HomePage(page);
  42  | 
  43  |     const username = `user${Date.now()}`;
  44  | 
  45  |     const userData = {
  46  |       firstName: 'Sanvu',
  47  |       lastName: 'Prasad',
  48  |       address: 'Kolkata',
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
  109 |       else {
  110 | 
  111 |         await TestUtil.captureScreenshot( page,`login-failure-${data.username || 'empty-user'}`);
  112 | 
  113 |         await loginPage.verifyLoginFailure(
  114 |           data.username,
  115 |           data.password
  116 |         );
  117 | 
  118 |         await expect(
  119 |           loginPage.usernameInput
> 120 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  121 | 
  122 |         await expect(
  123 |           loginPage.passwordInput
  124 |         ).toBeVisible();
  125 |       }
  126 |     }
  127 |   );
  128 | }
  129 | 
  130 | 
  131 | 
  132 |   for (const dataSet of registerData) {
  133 | 
  134 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  135 | 
  136 |     const registerPage =
  137 |       new RegisterPage(page);
  138 | 
  139 |     const openNewAccountPage =
  140 |       new OpenNewAccountPage(page);
  141 |     const loginPage= new LoginPage(page);
  142 |     const accountOverviewPage =
  143 |   new AccountOverviewPage(page);
  144 | 
  145 |     await page.goto(
  146 |       `${data.url}/index.htm`
  147 |     );
  148 |     await loginPage.verifyOpenAccountLinkNotVisible();
  149 |     await registerPage.openRegisterPage();
  150 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  151 |   const userData = {
  152 |   ...dataSet,
  153 |   username: uniqueUsername
  154 | };
  155 | 
  156 |     await registerPage.registerUser(userData);
  157 | 
  158 |     if (dataSet.expected === 'success') {
  159 | 
  160 |       const successMessage =
  161 |         await registerPage.getSuccessMessage();
  162 | 
  163 |       expect(successMessage)
  164 |         .toContain('Welcome');
  165 | 
  166 |       await openNewAccountPage
  167 |         .navigateToOpenNewAccountPage();
  168 |       await openNewAccountPage
  169 |         .validateAccountTypeDropdownOptions();
  170 | 
  171 |       await openNewAccountPage
  172 |         .validateFromAccountDropdownIsPopulated();
  173 | 
  174 |       
  175 |       await openNewAccountPage
  176 |         .createNewAccount(dataSet.accountType);
  177 |       
  178 |       await openNewAccountPage
  179 |         .verifyAccountCreatedSuccessfully();      
  180 |       
  181 |       const newAccountId =
  182 |         (await openNewAccountPage.getNewAccountId())!;
  183 | 
  184 |         expect(newAccountId).not.toBeNull();
  185 |       expect(newAccountId)
  186 |         .toMatch(/^\d+$/);
  187 | 
  188 |         
  189 |         await accountOverviewPage.navigateToAccountsOverview();
  190 |         
  191 | 
  192 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  193 |     }
  194 |     else {
  195 | 
  196 |       await expect(
  197 |         page.locator(
  198 |           registerPage.locators.passwordMismatchError
  199 |         )
  200 |       ).toHaveText(
  201 |         'Passwords did not match.'
  202 |       );
  203 |     }
  204 |   });
  205 | }
  206 | 
  207 | });
```