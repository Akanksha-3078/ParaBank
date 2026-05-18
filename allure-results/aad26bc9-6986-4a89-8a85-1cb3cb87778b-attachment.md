# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> @regression @ui (TC-AC-UI-01, TC-NEG-03 TO 10 ) Validate CHECKING Account Flow for Resv_78
- Location: tests/UI.spec.ts:114:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#newAccountId')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#newAccountId')
    14 × locator resolved to <a href="" id="newAccountId"></a>
       - unexpected value "hidden"

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
- paragraph: Welcome Kasturi Smith
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
- heading "Error!" [level=1]
- paragraph: An internal error has occurred and has been logged.
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
  1   | import { expect, Page } from '@playwright/test';
  2   | import { BasePage } from './BasePage';
  3   | 
  4   | export class OpenNewAccountPage extends BasePage {
  5   | 
  6   |   constructor(page: Page) {
  7   |     super(page);
  8   |   }
  9   | 
  10  |   
  11  | 
  12  |   readonly openNewAccountLink = this.page.locator('a[href*="openaccount"]');
  13  |   readonly openNewAccountTitle = this.page.getByRole('heading', { name: 'Open New Account' });
  14  | 
  15  |   readonly accountTypeDropdown = this.page.locator('#type');
  16  |   readonly fromAccountDropdown = this.page.locator('#fromAccountId');
  17  |   readonly openNewAccountButton = this.page.getByRole('button', { name: 'Open New Account' });
  18  |   readonly successTitle = this.page.locator('div#openAccountResult h1.title');
  19  |   readonly successMessage = this.page.locator('#openAccountResult p');
  20  |   readonly newAccountId = this.page.locator('#newAccountId');
  21  |   readonly accountTypeOptions = this.page.locator('#type').getByRole('option');
  22  |   readonly fromAccountOptions = this.page.locator('#fromAccountId').getByRole('option');
  23  | 
  24  |   
  25  |   async navigateToOpenNewAccountPage() {
  26  |     await this.openNewAccountLink.click();
  27  |     await expect(this.openNewAccountTitle).toHaveText('Open New Account');
  28  |   }
  29  |   async validateAccountTypeDropdownOptions() {
  30  | 
  31  |     await expect(this.accountTypeOptions).toHaveText(['CHECKING', 'SAVINGS']);
  32  |   }
  33  |   async validateFromAccountDropdownIsPopulated() {
  34  |     await expect.poll(async () => {return await this.accountTypeDropdown.locator('option').count()}).toBeGreaterThan(0);
  35  |   }
  36  | 
  37  |   async selectAccountType(accountType: string) {
  38  | 
  39  |     await this.accountTypeDropdown.selectOption({label: accountType});
  40  |   }
  41  | 
  42  |   async selectFirstFromAccount() {
  43  | 
  44  |     const firstOptionValue = await this.fromAccountOptions.first().getAttribute('value');
  45  | 
  46  |     if (!firstOptionValue) {
  47  | 
  48  |       throw new Error(
  49  |         'No account found in From Account dropdown'
  50  |       );
  51  |     }
  52  | 
  53  |     await this.fromAccountDropdown.selectOption(firstOptionValue);
  54  |   }
  55  | 
  56  |   async clickOpenNewAccountButton() {
  57  |      await this.openNewAccountButton.click();
  58  |   }
  59  | 
  60  |   async createNewAccount(accountType: string) {
  61  | 
  62  |     await this.selectAccountType(accountType);
  63  | 
  64  |     await this.selectFirstFromAccount();
  65  | 
  66  |     await this.clickOpenNewAccountButton();
  67  |   }
  68  | 
  69  |   async verifyAccountCreatedSuccessfully() {
  70  | 
  71  |     await expect(this.successTitle).toHaveText('Account Opened!');
  72  | 
> 73  |     await expect(this.newAccountId).toBeVisible();
      |                                     ^ Error: expect(locator).toBeVisible() failed
  74  |   }
  75  |   // async getNewAccountId(): Promise<string> {
  76  | 
  77  |   //   await expect(this.newAccountId).toBeVisible();
  78  | 
  79  |   //   const accountId = await this.newAccountId.textContent();
  80  | 
  81  |   //   if (!accountId) {
  82  | 
  83  |   //     throw new Error(
  84  | 
  85  |   //       'New Account ID is null or empty'
  86  | 
  87  |   //     );
  88  | 
  89  |   //   }
  90  | 
  91  |   //   return accountId.trim();
  92  | 
  93  |   // }
  94  | 
  95  |   async getNewAccountId() {
  96  |     return await this.newAccountId.textContent();
  97  |   }
  98  | 
  99  |   async getFirstFromAccountNumber(): Promise<string> {
  100 |   await this.page.waitForFunction(() => {
  101 |     const select = document.querySelector('#fromAccountId') as HTMLSelectElement;
  102 |     return select && select.options.length > 0;
  103 |   });
  104 | 
  105 |   const firstAccountNumber = await this.page.locator('#fromAccountId option').first().textContent();
  106 | 
  107 |   if (!firstAccountNumber) {
  108 |     throw new Error('No account found in From Account dropdown');
  109 |   }
  110 | 
  111 |   return firstAccountNumber.trim();
  112 | }
  113 | }
```