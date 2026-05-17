# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HybridTesting.spec.ts >> E2E Hybrid Flow - Snake_00 - SAVINGS
- Location: tests/HybridTesting.spec.ts:13:9

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
            - 'row "First Name: Ankit" [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell "Ankit" [ref=e52]:
                - textbox [ref=e53]: Ankit
              - cell [ref=e54]
            - 'row "Last Name: Doe" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Doe" [ref=e57]:
                - textbox [ref=e58]: Doe
              - cell [ref=e59]
            - 'row "Address: New York Street" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "New York Street" [ref=e62]:
                - textbox [ref=e63]: New York Street
              - cell [ref=e64]
            - 'row "City: New York" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "New York" [ref=e67]:
                - textbox [ref=e68]: New York
              - cell [ref=e69]
            - 'row "State: NY" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "NY" [ref=e72]:
                - textbox [ref=e73]: NY
              - cell [ref=e74]
            - 'row "Zip Code: 10001" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "10001" [ref=e77]:
                - textbox [ref=e78]: "10001"
              - cell [ref=e79]
            - 'row "Phone #: 1234567890" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "1234567890" [ref=e82]:
                - textbox [ref=e83]: "1234567890"
              - cell [ref=e84]
            - 'row "SSN: 12345" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "12345" [ref=e87]:
                - textbox [ref=e88]: "12345"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: Username is required." [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell "Username is required." [ref=e96]
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
  1  | // ✅ One import replaces both BaseFixture and APIFixture
  2  | import { test, expect } from '../Fixture/Hybrid';
  3  | import { RegisterPage } from '../Pages/RegisterPage';
  4  | import { OpenNewAccountPage } from '../Pages/Openess';
  5  | import { AccountOverviewPage } from '../Pages/AccountOverviwePage';
  6  | import { generateUsername } from '../Utility/generateUser';
  7  | import { LoginPage } from '../Pages/LoginPage';
  8  | 
  9  | import hybridData from '../TestData/hybrid.json';
  10 | 
  11 | for (const dataSet of hybridData) {
  12 | 
  13 |     test(`E2E Hybrid Flow - ${dataSet.username} - ${dataSet.accountType}`, async ({ page, data, accountsAPI, browserName }) => {
  14 | 
  15 |         
  16 |         const registerPage = new RegisterPage(page);
  17 |         const openNewAccountPage = new OpenNewAccountPage(page);
  18 |         const loginPage = new LoginPage(page);
  19 |         const accountOverviewPage = new AccountOverviewPage(page);
  20 |         await page.goto(`${data.url}/index.htm`);
  21 |         await loginPage.verifyOpenAccountLinkNotVisible();
  22 | 
  23 |          const uniqueUsername = generateUsername(dataSet.username, browserName);
  24 |          const userData = { ...dataSet, username: uniqueUsername};
  25 | 
  26 |           
  27 | 
  28 |         
  29 |         await registerPage.openRegisterPage();
  30 |         await registerPage.registerUser(userData);
  31 |         
> 32 |         expect(await registerPage.getSuccessMessage()).toContain('Welcome');
     |                                                        ^ Error: expect(received).toContain(expected) // indexOf
  33 | 
  34 |         await openNewAccountPage.navigateToOpenNewAccountPage();
  35 |         await openNewAccountPage.validateAccountTypeDropdownOptions();
  36 |         await openNewAccountPage.validateFromAccountDropdownIsPopulated();
  37 |         await openNewAccountPage.createNewAccount(dataSet.accountType);
  38 |         await openNewAccountPage.verifyAccountCreatedSuccessfully();
  39 | 
  40 |         const newAccountId = await openNewAccountPage.getNewAccountId();
  41 |         if (newAccountId == null) throw new Error('New account ID is null or undefined');
  42 |         expect(newAccountId).toMatch(/^\d+$/);
  43 | 
  44 |         await accountOverviewPage.navigateToAccountsOverview();
  45 |         await accountOverviewPage.verifyAccountPresent(newAccountId);
  46 | 
  47 |         const response = await accountsAPI.getAccounts(newAccountId);
  48 |         expect(response.status()).toBe(200);
  49 | 
  50 |         const responseBody = await response.json();
  51 |         expect(responseBody.id).toBe(Number(newAccountId));
  52 |         expect(responseBody.customerId).toBeDefined();
  53 |         expect(responseBody.type).toBe(dataSet.accountType);
  54 |         expect(responseBody.balance).toBeDefined();
  55 | 
  56 |     });
  57 | 
  58 | }
```