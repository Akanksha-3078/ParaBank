# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate login with username: IncorrectPassword
- Location: tests/UI.spec.ts:136:7

# Error details

```
Error: Security Bug: Login succeeded with invalid credentials
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
        - paragraph [ref=e29]: Welcome Dona Sunny
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
  103 | 
  104 | //         await loginPage.click(
  105 | //           'text=Log Out'
  106 | //         );
  107 | //       }
  108 | 
  109 | //       else {
  110 | 
  111 | //         await page.screenshot({
  112 | //           path:
  113 | //             `screenshots/login-failure-${data.username || 'empty-user'}.png`,
  114 | //           fullPage: true
  115 | //         });
  116 | 
  117 | //         await loginPage.verifyLoginFailure(
  118 | //           data.username,
  119 | //           data.password
  120 | //         );
  121 | 
  122 | //         await expect(
  123 | //           loginPage.usernameInput
  124 | //         ).toBeVisible();
  125 | 
  126 | //         await expect(
  127 | //           loginPage.passwordInput
  128 | //         ).toBeVisible();
  129 | //       }
  130 | //     }
  131 | //   );
  132 | // }
  133 | 
  134 | for (const data of loginData) {
  135 | 
  136 |   test(
  137 |     `Validate login with username: ${data.testName}`,
  138 |     async ({ page, context }) => {
  139 | 
  140 |       // Clear session before every login attempt
  141 |       await context.clearCookies();
  142 | 
  143 |       const loginPage = new LoginPage(page);
  144 | 
  145 |       await loginPage.navigate();
  146 | 
  147 |       // Ensure fresh state
  148 |       await page.goto('https://parabank.parasoft.com/parabank/logout.htm')
  149 |         .catch(() => {});
  150 | 
  151 |       await loginPage.navigate();
  152 | 
  153 |       await loginPage.login(
  154 |         data.username,
  155 |         data.password
  156 |       );
  157 | 
  158 |       // Wait for either:
  159 |       // success OR error message
  160 |       await Promise.race([
  161 |         page.waitForURL(/overview\.htm/, {
  162 |           timeout: 5000
  163 |         }).catch(() => null),
  164 | 
  165 |         page.locator('.error').waitFor({
  166 |           state: 'visible',
  167 |           timeout: 5000
  168 |         }).catch(() => null)
  169 |       ]);
  170 | 
  171 |       // ==========================
  172 |       // SUCCESS CASE
  173 |       // ==========================
  174 |       if (data.expected === 'success') {
  175 | 
  176 |         await expect(page).toHaveURL(/overview\.htm/);
  177 | 
  178 |         await expect(
  179 |           page.locator('text=Log Out')
  180 |         ).toBeVisible();
  181 | 
  182 |         await loginPage.click('text=Log Out');
  183 |       }
  184 | 
  185 |       // ==========================
  186 |       // FAILURE CASE
  187 |       // ==========================
  188 |       else {
  189 | 
  190 |         const isLoggedIn =
  191 |           await page.locator('text=Log Out')
  192 |             .isVisible()
  193 |             .catch(() => false);
  194 | 
  195 |         // Handle flaky app behavior
  196 |         if (isLoggedIn) {
  197 | 
  198 |           console.log(
  199 |             `BUG: Invalid credentials logged in for user: ${data.username}`
  200 |           );
  201 | 
  202 |           // Fail intentionally
> 203 |           throw new Error(
      |                 ^ Error: Security Bug: Login succeeded with invalid credentials
  204 |             'Security Bug: Login succeeded with invalid credentials'
  205 |           );
  206 |         }
  207 | 
  208 |         // Verify still on login page
  209 |         await expect(
  210 |           loginPage.usernameInput
  211 |         ).toBeVisible();
  212 | 
  213 |         await expect(
  214 |           loginPage.passwordInput
  215 |         ).toBeVisible();
  216 | 
  217 |         // Verify error message
  218 |         await expect(
  219 |           page.locator('.error')
  220 |         ).toBeVisible();
  221 | 
  222 |         await page.screenshot({
  223 |           path:
  224 |             `screenshots/login-failure-${data.username || 'empty-user'}.png`,
  225 |           fullPage: true
  226 |         });
  227 |       }
  228 |     }
  229 |   );
  230 | }
  231 | 
  232 |   for (const dataSet of registerData) {
  233 | 
  234 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  235 | 
  236 |     const registerPage =
  237 |       new RegisterPage(page);
  238 | 
  239 |     const openNewAccountPage =
  240 |       new OpenNewAccountPage(page);
  241 |     const loginPage= new LoginPage(page);
  242 |     const accountOverviewPage =
  243 |   new AccountOverviewPage(page);
  244 | 
  245 |     await page.goto(
  246 |       `${data.url}/index.htm`
  247 |     );
  248 |     await loginPage.verifyOpenAccountLinkNotVisible();
  249 |     await registerPage.openRegisterPage();
  250 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  251 |   const userData = {
  252 |   ...dataSet,
  253 |   username: uniqueUsername
  254 | };
  255 | 
  256 |     await registerPage.registerUser(userData);
  257 | 
  258 |     if (dataSet.expected === 'success') {
  259 | 
  260 |       const successMessage =
  261 |         await registerPage.getSuccessMessage();
  262 | 
  263 |       expect(successMessage)
  264 |         .toContain('Welcome');
  265 | 
  266 |       await openNewAccountPage
  267 |         .navigateToOpenNewAccountPage();
  268 |       await openNewAccountPage
  269 |         .validateAccountTypeDropdownOptions();
  270 | 
  271 |       await openNewAccountPage
  272 |         .validateFromAccountDropdownIsPopulated();
  273 | 
  274 |       
  275 |       await openNewAccountPage
  276 |         .createNewAccount(dataSet.accountType);
  277 |       
  278 |       await openNewAccountPage
  279 |         .verifyAccountCreatedSuccessfully();      
  280 |       
  281 |       const newAccountId =
  282 |         (await openNewAccountPage.getNewAccountId())!;
  283 | 
  284 |         expect(newAccountId).not.toBeNull();
  285 |       expect(newAccountId)
  286 |         .toMatch(/^\d+$/);
  287 | 
  288 |         
  289 |         await accountOverviewPage.navigateToAccountsOverview();
  290 |         
  291 | 
  292 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  293 |     }
  294 |     else {
  295 | 
  296 |       await expect(
  297 |         page.locator(
  298 |           registerPage.locators.passwordMismatchError
  299 |         )
  300 |       ).toHaveText(
  301 |         'Passwords did not match.'
  302 |       );
  303 |     }
```