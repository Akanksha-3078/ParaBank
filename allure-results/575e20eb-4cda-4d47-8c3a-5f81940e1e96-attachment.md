# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate CHECKING Account Flow for Kakrii_90
- Location: tests/UI.spec.ts:129:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Welcome"
Received string:    "Signing up is easy!"
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: Kasturi" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Kasturi" [ref=e52]:
                - textbox [ref=e53]: Kasturi
              - cell [ref=e54]
            - 'row "Last Name: Smith" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Smith" [ref=e57]:
                - textbox [ref=e58]: Smith
              - cell [ref=e59]
            - 'row "Address: California Street" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "California Street" [ref=e62]:
                - textbox [ref=e63]: California Street
              - cell [ref=e64]
            - 'row "City: LA" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "LA" [ref=e67]:
                - textbox [ref=e68]: LA
              - cell [ref=e69]
            - 'row "State: CA" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "CA" [ref=e72]:
                - textbox [ref=e73]: CA
              - cell [ref=e74]
            - 'row "Zip Code: 90001" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "90001" [ref=e77]:
                - textbox [ref=e78]: "90001"
              - cell [ref=e79]
            - 'row "Phone #: 9999999999" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "9999999999" [ref=e82]:
                - textbox [ref=e83]: "9999999999"
              - cell [ref=e84]
            - 'row "SSN: 77777" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "77777" [ref=e87]:
                - textbox [ref=e88]: "77777"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: Kakrii_90_chromium This username already exists." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "Kakrii_90_chromium" [ref=e94]:
                - textbox [ref=e95]: Kakrii_90_chromium
              - cell "This username already exists." [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  51  |       phone: '9876543210',
  52  |       ssn: '123456',
  53  |       username: username,
  54  |       password: 'Test@123',
  55  |       confirmPassword: 'Test@123'
  56  |     };
  57  | 
  58  |     await page.goto(data.url);
  59  | 
  60  |     // Step 1 -> Register first time
  61  |     await registerPage.openRegisterPage();
  62  |     await registerPage.registerUser(userData);
  63  | 
  64  |     const successMessage = await registerPage.getSuccessMessage();
  65  |     expect(successMessage).toContain('Welcome');
  66  | 
  67  |     // Step 2 -> Logout
  68  |     await homePage.logout();
  69  | 
  70  |     // Step 3 -> Try registering again with same username
  71  |     await registerPage.openRegisterPage();
  72  |     await registerPage.registerUser(userData);
  73  | 
  74  |     // Step 4 -> Verify duplicate username error
  75  |     await expect(
  76  |       page.getByText('This username already exists.')
  77  |     ).toBeVisible();
  78  |     await page.close();
  79  |   });
  80  | 
  81  | 
  82  | 
  83  | for (const data of loginData) {
  84  |   test(`Validate login with username: ${data.testName}`,async ({ page, context }) => {
  85  |       await context.clearCookies();
  86  |       const loginPage = new LoginPage(page);
  87  |       await loginPage.navigate();
  88  | 
  89  |       await loginPage.login(data.username,data.password);
  90  |       TestUtil.logMessage(`Login attempted with username: ${data.username}`);
  91  | 
  92  |       if (data.expected === 'success') {
  93  | 
  94  |         await loginPage.verifyLoginSuccess();
  95  |         await loginPage.logout();
  96  |       }
  97  |       else {
  98  | 
  99  |         await TestUtil.captureScreenshot(page,`login-failure-${data.username || 'empty-user'}`);
  100 |         // Check if user got logged in accidentally
  101 |         //const isLoggedIn = await page.locator('text=Log Out').isVisible().catch(() => false);
  102 |         const isLoggedIn = await loginPage.isLoggedIn();
  103 |         // Flaky / security issue
  104 |         if (isLoggedIn) {
  105 | 
  106 |           TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${data.username}` );
  107 | 
  108 |           throw new Error(`Security issue: Invalid login succeeded for user ${data.username}`);
  109 | 
  110 |         }
  111 |         // Expected failure validation
  112 |         await loginPage.verifyLoginFailure(data.username,data.password);
  113 | 
  114 |         await expect(loginPage.usernameInput).toBeVisible();
  115 | 
  116 |         await expect(loginPage.passwordInput).toBeVisible();
  117 | 
  118 |         TestUtil.logMessage( `Login failure validated for username: ${data.username}`);
  119 | 
  120 |       } 
  121 |     }
  122 |   );
  123 | }
  124 | 
  125 | 
  126 | 
  127 |   for (const dataSet of registerData) {
  128 | 
  129 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  130 | 
  131 |     const registerPage = new RegisterPage(page);
  132 | 
  133 |     const openNewAccountPage = new OpenNewAccountPage(page);
  134 |     const loginPage= new LoginPage(page);
  135 |     const accountOverviewPage = new AccountOverviewPage(page);
  136 | 
  137 |     await page.goto(`${data.url}/index.htm`);
  138 | 
  139 |     await loginPage.verifyOpenAccountLinkNotVisible();
  140 |     await registerPage.openRegisterPage();
  141 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  142 |     const userData = { ...dataSet,
  143 |                        username: uniqueUsername};
  144 | 
  145 |     await registerPage.registerUser(userData);
  146 | 
  147 |     if (dataSet.expected === 'success') {
  148 | 
  149 |       const successMessage = await registerPage.getSuccessMessage();
  150 | 
> 151 |       expect(successMessage).toContain('Welcome');
      |                              ^ Error: expect(received).toContain(expected) // indexOf
  152 | 
  153 |       await openNewAccountPage.navigateToOpenNewAccountPage();
  154 |       await openNewAccountPage.validateAccountTypeDropdownOptions();
  155 | 
  156 |       await openNewAccountPage.validateFromAccountDropdownIsPopulated();
  157 | 
  158 |       
  159 |       await openNewAccountPage.createNewAccount(dataSet.accountType);
  160 |       
  161 |       await openNewAccountPage.verifyAccountCreatedSuccessfully();      
  162 |       
  163 |       const newAccountId = (await openNewAccountPage.getNewAccountId())!;
  164 | 
  165 |         expect(newAccountId).not.toBeNull();
  166 |       expect(newAccountId).toMatch(/^\d+$/);
  167 | 
  168 |         
  169 |         await accountOverviewPage.navigateToAccountsOverview();
  170 |         
  171 | 
  172 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  173 |     }
  174 |     else {
  175 | 
  176 |       await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
  177 |     }
  178 |   });
  179 | }
  180 | 
  181 | });
```