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
- paragraph: Welcome Dona Sunny
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
    - row "14787 $515.50 $515.50":
      - cell "14787":
        - link "14787":
          - /url: activity.htm?id=14787
      - cell "$515.50"
      - cell "$515.50"
    - row "Total $515.50":
      - cell "Total"
      - cell "$515.50"
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
  86  |   test(
  87  |     `Validate login with username: ${data.testName}`,
  88  |     async ({ page, context }) => {
  89  |       await context.clearCookies();
  90  | 
  91  |       const loginPage = new LoginPage(page);
  92  | 
  93  |       await loginPage.navigate();
  94  | 
  95  |       await loginPage.login(
  96  |         data.username,
  97  |         data.password
  98  |       );
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
  111 |         await page.screenshot({
  112 |           path:
  113 |             `screenshots/login-failure-${data.username || 'empty-user'}.png`,
  114 |           fullPage: true
  115 |         });
  116 | 
  117 |         await loginPage.verifyLoginFailure(
  118 |           data.username,
  119 |           data.password
  120 |         );
  121 | 
  122 |         await expect(
  123 |           loginPage.usernameInput
> 124 |         ).toBeVisible();
      |           ^ Error: expect(locator).toBeVisible() failed
  125 | 
  126 |         await expect(
  127 |           loginPage.passwordInput
  128 |         ).toBeVisible();
  129 |       }
  130 |     }
  131 |   );
  132 | }
  133 | 
  134 |   for (const dataSet of registerData) {
  135 | 
  136 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  137 | 
  138 |     const registerPage =
  139 |       new RegisterPage(page);
  140 | 
  141 |     const openNewAccountPage =
  142 |       new OpenNewAccountPage(page);
  143 |     const loginPage= new LoginPage(page);
  144 |     const accountOverviewPage =
  145 |   new AccountOverviewPage(page);
  146 | 
  147 |     await page.goto(
  148 |       `${data.url}/index.htm`
  149 |     );
  150 |     await loginPage.verifyOpenAccountLinkNotVisible();
  151 |     await registerPage.openRegisterPage();
  152 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  153 |   const userData = {
  154 |   ...dataSet,
  155 |   username: uniqueUsername
  156 | };
  157 | 
  158 |     await registerPage.registerUser(userData);
  159 | 
  160 |     if (dataSet.expected === 'success') {
  161 | 
  162 |       const successMessage =
  163 |         await registerPage.getSuccessMessage();
  164 | 
  165 |       expect(successMessage)
  166 |         .toContain('Welcome');
  167 | 
  168 |       await openNewAccountPage
  169 |         .navigateToOpenNewAccountPage();
  170 |       await openNewAccountPage
  171 |         .validateAccountTypeDropdownOptions();
  172 | 
  173 |       await openNewAccountPage
  174 |         .validateFromAccountDropdownIsPopulated();
  175 | 
  176 |       
  177 |       await openNewAccountPage
  178 |         .createNewAccount(dataSet.accountType);
  179 |       
  180 |       await openNewAccountPage
  181 |         .verifyAccountCreatedSuccessfully();      
  182 |       
  183 |       const newAccountId =
  184 |         (await openNewAccountPage.getNewAccountId())!;
  185 | 
  186 |         expect(newAccountId).not.toBeNull();
  187 |       expect(newAccountId)
  188 |         .toMatch(/^\d+$/);
  189 | 
  190 |         
  191 |         await accountOverviewPage.navigateToAccountsOverview();
  192 |         
  193 | 
  194 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  195 |     }
  196 |     else {
  197 | 
  198 |       await expect(
  199 |         page.locator(
  200 |           registerPage.locators.passwordMismatchError
  201 |         )
  202 |       ).toHaveText(
  203 |         'Passwords did not match.'
  204 |       );
  205 |     }
  206 |   });
  207 | }
  208 | 
  209 | });
```