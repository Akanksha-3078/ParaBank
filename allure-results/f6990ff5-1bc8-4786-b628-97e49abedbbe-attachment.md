# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UITest.spec.ts >> Registration Module >> Verify user cannot register with existing username
- Location: tests/UITest.spec.ts:35:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'Signing up is easy!' })

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
        - paragraph [ref=e29]: Welcome Sanvu Prasad
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
      - generic [ref=e48]:
        - heading "Welcome user1778962565835" [level=1] [ref=e49]
        - paragraph [ref=e50]: Your account was created successfully. You are now logged in.
  - generic [ref=e52]:
    - list [ref=e53]:
      - listitem [ref=e54]:
        - link "Home" [ref=e55] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e56]:
        - link "About Us" [ref=e57] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e58]:
        - link "Services" [ref=e59] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e60]:
        - link "Products" [ref=e61] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e62]:
        - link "Locations" [ref=e63] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e64]:
        - link "Forum" [ref=e65] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e66]:
        - link "Site Map" [ref=e67] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Contact Us" [ref=e69] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e70]: © Parasoft. All rights reserved.
    - list [ref=e71]:
      - listitem [ref=e72]: "Visit us at:"
      - listitem [ref=e73]:
        - link "www.parasoft.com" [ref=e74] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  12 | 
  13 | //     firstName: 'input[id="customer.firstName"]',
  14 | //     lastName: 'input[id="customer.lastName"]',
  15 | //     address: 'input[id="customer.address.street"]',
  16 | //     city: 'input[id="customer.address.city"]',
  17 | //     state: 'input[id="customer.address.state"]',
  18 | //     zipCode: 'input[id="customer.address.zipCode"]',
  19 | //     phone: 'input[id="customer.phoneNumber"]',
  20 | //     ssn: 'input[id="customer.ssn"]',
  21 | //     username: 'input[id="customer.username"]',
  22 | //     password: 'input[id="customer.password"]',
  23 | //     confirmPassword: 'input[id="repeatedPassword"]',
  24 | 
  25 | //     registerButton: 'input[value="Register"]',
  26 | //     passwordMismatchError:
  27 | //      'span#repeatedPassword\\.errors',
  28 | 
  29 | //     pageTitle: 'h1.title',
  30 | //     successMessage: 'h1.title'
  31 | //   };
  32 | 
  33 | //   async openRegisterPage() {
  34 | //     await this.click(this.locators.registerLink);
  35 | 
  36 | //     // Assertion
  37 | //     await expect(this.page.locator(this.locators.pageTitle))
  38 | //       .toHaveText('Signing up is easy!');
  39 | //   }
  40 | 
  41 | //   async registerUser(data: any) {
  42 | //     await this.fill(this.locators.firstName, data.firstName);
  43 | //     await this.fill(this.locators.lastName, data.lastName);
  44 | //     await this.fill(this.locators.address, data.address);
  45 | //     await this.fill(this.locators.city, data.city);
  46 | //     await this.fill(this.locators.state, data.state);
  47 | //     await this.fill(this.locators.zipCode, data.zipCode);
  48 | //     await this.fill(this.locators.phone, data.phone);
  49 | //     await this.fill(this.locators.ssn, data.ssn);
  50 | //     await this.fill(this.locators.username, data.username);
  51 | //     await this.fill(this.locators.password, data.password);
  52 | //     await this.fill(this.locators.confirmPassword, data.confirmPassword);
  53 | 
  54 | //     await this.click(this.locators.registerButton);
  55 | //   }
  56 | 
  57 | //   async getSuccessMessage() {
  58 | //     return await this.getText(this.locators.successMessage);
  59 | //   }
  60 | // }
  61 | 
     |                                     ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
```