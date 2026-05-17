# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UITest.spec.ts >> Registration Module >> Validate SAVINGS Account Flow for raghav_105
- Location: tests/UITest.spec.ts:127:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'passwordMismatchError')
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
            - 'row "First Name: Raghav" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Raghav" [ref=e52]:
                - textbox [ref=e53]: Raghav
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
            - 'row "Username: raghav_105_chromium" [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "raghav_105_chromium" [ref=e94]:
                - textbox [ref=e95]: raghav_105_chromium
              - cell [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - 'row "Confirm: Passwords did not match." [ref=e102]':
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell "Passwords did not match." [ref=e106]
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
  74  |       page.getByText('This username already exists.')
  75  |     ).toBeVisible();
  76  |     await page.close();
  77  |   });
  78  | 
  79  | 
  80  | 
  81  | for (const data of loginData) {
  82  |   test(`Validate login with username: ${data.testName}`,async ({ page, context }) => {
  83  |       await context.clearCookies();
  84  |       const loginPage = new LoginPage(page);
  85  |       await loginPage.navigate();
  86  | 
  87  |       await loginPage.login(data.username,data.password);
  88  |       TestUtil.logMessage(`Login attempted with username: ${data.username}`);
  89  | 
  90  |       if (data.expected === 'success') {
  91  | 
  92  |         await loginPage.verifyLoginSuccess();
  93  |         await loginPage.logout();
  94  |       }
  95  |       else {
  96  | 
  97  |         await TestUtil.captureScreenshot(page,`login-failure-${data.username || 'empty-user'}`);
  98  |         // Check if user got logged in accidentally
  99  |         //const isLoggedIn = await page.locator('text=Log Out').isVisible().catch(() => false);
  100 |         const isLoggedIn = await loginPage.isLoggedIn();
  101 |         // Flaky / security issue
  102 |         if (isLoggedIn) {
  103 | 
  104 |           TestUtil.logMessage( `BUG: User logged in with invalid credentials: ${data.username}` );
  105 | 
  106 |           throw new Error(`Security issue: Invalid login succeeded for user ${data.username}`);
  107 | 
  108 |         }
  109 |         // Expected failure validation
  110 |         await loginPage.verifyLoginFailure(data.username,data.password);
  111 | 
  112 |         await expect(loginPage.usernameInput).toBeVisible();
  113 | 
  114 |         await expect(loginPage.passwordInput).toBeVisible();
  115 | 
  116 |         TestUtil.logMessage( `Login failure validated for username: ${data.username}`);
  117 | 
  118 |       } 
  119 |     }
  120 |   );
  121 | }
  122 | 
  123 | 
  124 | 
  125 |   for (const dataSet of registerData) {
  126 | 
  127 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  128 | 
  129 |     const registerPage = new RegisterPage(page);
  130 | 
  131 |     const openNewAccountPage = new OpenNewAccountPage(page);
  132 |     const loginPage= new LoginPage(page);
  133 |     const accountOverviewPage = new AccountOverviewPage(page);
  134 | 
  135 |     await page.goto(`${data.url}/index.htm`);
  136 | 
  137 |     await loginPage.verifyOpenAccountLinkNotVisible();
  138 |     await registerPage.openRegisterPage();
  139 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  140 |     const userData = { ...dataSet,
  141 |                        username: uniqueUsername};
  142 | 
  143 |     await registerPage.registerUser(userData);
  144 | 
  145 |     if (dataSet.expected === 'success') {
  146 | 
  147 |       const successMessage = await registerPage.getSuccessMessage();
  148 | 
  149 |       expect(successMessage).toContain('Welcome');
  150 | 
  151 |       await openNewAccountPage.navigateToOpenNewAccountPage();
  152 |       await openNewAccountPage.validateAccountTypeDropdownOptions();
  153 | 
  154 |       await openNewAccountPage.validateFromAccountDropdownIsPopulated();
  155 | 
  156 |       
  157 |       await openNewAccountPage.createNewAccount(dataSet.accountType);
  158 |       
  159 |       await openNewAccountPage.verifyAccountCreatedSuccessfully();      
  160 |       
  161 |       const newAccountId = (await openNewAccountPage.getNewAccountId())!;
  162 | 
  163 |         expect(newAccountId).not.toBeNull();
  164 |       expect(newAccountId).toMatch(/^\d+$/);
  165 | 
  166 |         
  167 |         await accountOverviewPage.navigateToAccountsOverview();
  168 |         
  169 | 
  170 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  171 |     }
  172 |     else {
  173 | 
> 174 |       await expect(page.locator(registerPage.locators.passwordMismatchError)).toHaveText('Passwords did not match.');
      |                                                       ^ TypeError: Cannot read properties of undefined (reading 'passwordMismatchError')
  175 |     }
  176 |   });
  177 | }
  178 | 
  179 | });
```