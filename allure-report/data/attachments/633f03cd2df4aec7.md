# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate SAVINGS Account Flow for raghav_105
- Location: tests/UI.spec.ts:138:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('span#repeatedPassword\\.errors')
Expected: "Passwords did not match."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('span#repeatedPassword\\.errors')

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
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: Raghav"':
      - cell "First Name:"
      - cell "Raghav":
        - textbox: Raghav
      - cell
    - 'row "Last Name: Smith"':
      - cell "Last Name:"
      - cell "Smith":
        - textbox: Smith
      - cell
    - 'row "Address: California Street"':
      - cell "Address:"
      - cell "California Street":
        - textbox: California Street
      - cell
    - 'row "City: LA"':
      - cell "City:"
      - cell "LA":
        - textbox: LA
      - cell
    - 'row "State: CA"':
      - cell "State:"
      - cell "CA":
        - textbox: CA
      - cell
    - 'row "Zip Code: 90001"':
      - cell "Zip Code:"
      - cell "90001":
        - textbox: "90001"
      - cell
    - 'row "Phone #: 9999999999"':
      - 'cell "Phone #:"'
      - cell "9999999999":
        - textbox: "9999999999"
      - cell
    - 'row "SSN: 77777"':
      - cell "SSN:"
      - cell "77777":
        - textbox: "77777"
      - cell
    - row:
      - cell
    - 'row "Username: raghav_105_chromium"':
      - cell "Username:"
      - cell "raghav_105_chromium":
        - textbox: raghav_105_chromium
      - cell
    - 'row "Password: Password is required."':
      - cell "Password:"
      - cell:
        - textbox
      - cell "Password is required."
    - row "Confirm:":
      - cell "Confirm:"
      - cell:
        - textbox
      - cell
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
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
  124 |         ).toBeVisible();
  125 | 
  126 |         await expect(
  127 |           loginPage.passwordInput
  128 |         ).toBeVisible();
  129 |       }
  130 |     }
  131 |   );
  132 | }
  133 | 
  134 | 
  135 | 
  136 |   for (const dataSet of registerData) {
  137 | 
  138 |   test(`Validate ${dataSet.accountType} Account Flow for ${dataSet.username}`, async ({ page, data, browserName }) => {
  139 | 
  140 |     const registerPage =
  141 |       new RegisterPage(page);
  142 | 
  143 |     const openNewAccountPage =
  144 |       new OpenNewAccountPage(page);
  145 |     const loginPage= new LoginPage(page);
  146 |     const accountOverviewPage =
  147 |   new AccountOverviewPage(page);
  148 | 
  149 |     await page.goto(
  150 |       `${data.url}/index.htm`
  151 |     );
  152 |     await loginPage.verifyOpenAccountLinkNotVisible();
  153 |     await registerPage.openRegisterPage();
  154 |     const uniqueUsername = generateUsername(dataSet.username, browserName);
  155 |   const userData = {
  156 |   ...dataSet,
  157 |   username: uniqueUsername
  158 | };
  159 | 
  160 |     await registerPage.registerUser(userData);
  161 | 
  162 |     if (dataSet.expected === 'success') {
  163 | 
  164 |       const successMessage =
  165 |         await registerPage.getSuccessMessage();
  166 | 
  167 |       expect(successMessage)
  168 |         .toContain('Welcome');
  169 | 
  170 |       await openNewAccountPage
  171 |         .navigateToOpenNewAccountPage();
  172 |       await openNewAccountPage
  173 |         .validateAccountTypeDropdownOptions();
  174 | 
  175 |       await openNewAccountPage
  176 |         .validateFromAccountDropdownIsPopulated();
  177 | 
  178 |       
  179 |       await openNewAccountPage
  180 |         .createNewAccount(dataSet.accountType);
  181 |       
  182 |       await openNewAccountPage
  183 |         .verifyAccountCreatedSuccessfully();      
  184 |       
  185 |       const newAccountId =
  186 |         (await openNewAccountPage.getNewAccountId())!;
  187 | 
  188 |         expect(newAccountId).not.toBeNull();
  189 |       expect(newAccountId)
  190 |         .toMatch(/^\d+$/);
  191 | 
  192 |         
  193 |         await accountOverviewPage.navigateToAccountsOverview();
  194 |         
  195 | 
  196 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  197 |     }
  198 |     else {
  199 | 
  200 |       await expect(
  201 |         page.locator(
  202 |           registerPage.locators.passwordMismatchError
  203 |         )
> 204 |       ).toHaveText(
      |         ^ Error: expect(locator).toHaveText(expected) failed
  205 |         'Passwords did not match.'
  206 |       );
  207 |     }
  208 |   });
  209 | }
  210 | 
  211 | });
```