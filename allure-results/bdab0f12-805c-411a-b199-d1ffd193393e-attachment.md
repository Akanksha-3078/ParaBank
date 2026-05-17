# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HybridTesting.spec.ts >> E2E Hybrid Flow - Ankit_89 - SAVINGS
- Location: tests/HybridTesting.spec.ts:13:9

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
    13 × locator resolved to <a href="" id="newAccountId"></a>
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
- paragraph: Welcome Ankit Doe
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
  13  | 
  14  |   //readonly openNewAccountTitle =this.page.locator('div#openAccountForm h1.title');
  15  |   readonly openNewAccountTitle = this.page.getByRole('heading', { name: 'Open New Account' });
  16  | 
  17  |   readonly accountTypeDropdown = this.page.locator('#type');
  18  | 
  19  |   //readonly accountTypeOptions = this.page.locator('#type option');
  20  | 
  21  |   readonly fromAccountDropdown = this.page.locator('#fromAccountId');
  22  | 
  23  |   //readonly fromAccountOptions = this.page.locator('#fromAccountId option');
  24  | 
  25  |   //readonly openNewAccountButton =this.page.locator('input[value="Open New Account"]');
  26  |   
  27  |   readonly openNewAccountButton = this.page.getByRole('button', { name: 'Open New Account' });
  28  | 
  29  | 
  30  |   readonly successTitle = this.page.locator('div#openAccountResult h1.title');
  31  | 
  32  |   readonly successMessage = this.page.locator('#openAccountResult p');
  33  | 
  34  |   readonly newAccountId = this.page.locator('#newAccountId');
  35  |   // ✅ This works — option is a valid ARIA role
  36  |    readonly accountTypeOptions = this.page.locator('#type').getByRole('option');
  37  |    readonly fromAccountOptions = this.page.locator('#fromAccountId').getByRole('option');
  38  | 
  39  |   // =====================================================
  40  |   // NAVIGATION
  41  |   // =====================================================
  42  | 
  43  |   async navigateToOpenNewAccountPage() {
  44  |     await this.openNewAccountLink.click();
  45  |     await expect(this.openNewAccountTitle).toHaveText('Open New Account');
  46  |   }
  47  | 
  48  |   // =====================================================
  49  |   // DROPDOWN VALIDATIONS
  50  |   // =====================================================
  51  | 
  52  |   async validateAccountTypeDropdownOptions() {
  53  | 
  54  |     await expect(this.accountTypeOptions).toHaveText(['CHECKING', 'SAVINGS']);
  55  |   }
  56  | 
  57  | // async validateFromAccountDropdownIsPopulated() {
  58  | 
  59  | //   // Wait until dropdown has at least 1 option
  60  | //   await expect.poll(async () => {return await this.fromAccountOptions.count();}).toBeGreaterThan(0);
  61  | 
  62  | //   // Get option texts
  63  | //   const options = await this.fromAccountOptions.allTextContents();
  64  | 
  65  | //   const validOptions = options.map(option => option.trim()).filter(option => option !== '');
  66  | 
  67  | //   expect(validOptions.length).toBeGreaterThan(0);
  68  | // }
  69  |   async validateFromAccountDropdownIsPopulated() {
  70  |     await expect.poll(async () => {return await this.accountTypeDropdown.locator('option').count()}).toBeGreaterThan(0);
  71  |   }
  72  | 
  73  |   async selectAccountType(accountType: string) {
  74  | 
  75  |     await this.accountTypeDropdown.selectOption({label: accountType});
  76  |   }
  77  | 
  78  |   async selectFirstFromAccount() {
  79  | 
  80  |     const firstOptionValue = await this.fromAccountOptions.first().getAttribute('value');
  81  | 
  82  |     if (!firstOptionValue) {
  83  | 
  84  |       throw new Error(
  85  |         'No account found in From Account dropdown'
  86  |       );
  87  |     }
  88  | 
  89  |     await this.fromAccountDropdown.selectOption(firstOptionValue);
  90  |   }
  91  | 
  92  |   async clickOpenNewAccountButton() {
  93  |      await this.openNewAccountButton.click();
  94  |   }
  95  | 
  96  |   async createNewAccount(accountType: string) {
  97  | 
  98  |     await this.selectAccountType(accountType);
  99  | 
  100 |     await this.selectFirstFromAccount();
  101 | 
  102 |     await this.clickOpenNewAccountButton();
  103 |   }
  104 | 
  105 |   // =====================================================
  106 |   // ASSERTIONS
  107 |   // =====================================================
  108 | 
  109 |   async verifyAccountCreatedSuccessfully() {
  110 | 
  111 |     await expect(this.successTitle).toHaveText('Account Opened!');
  112 | 
> 113 |     await expect(this.newAccountId).toBeVisible();
      |                                     ^ Error: expect(locator).toBeVisible() failed
  114 |   }
  115 | 
  116 |   async getNewAccountId() {
  117 |     return await this.newAccountId.textContent();
  118 |   }
  119 | }
```