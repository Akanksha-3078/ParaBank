# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI.spec.ts >> Registration Module >> Validate login with username: UserPresent
- Location: tests/UI.spec.ts:86:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /overview.htm/
Received string:  "https://parabank.parasoft.com/parabank/login.htm;jsessionid=28B27429E111195F4CC8AC268BA7AE41"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://parabank.parasoft.com/parabank/login.htm;jsessionid=28B27429E111195F4CC8AC268BA7AE41"

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: 9fcfbdc5b9f0ff67 • 2026-05-17 04:05:00 UTC"
  - heading "You are being rate limited" [level=2]
- heading "What happened?" [level=2]
- paragraph: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
- paragraph:
  - text: Please see
  - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
  - text: for more details.
- text: Was this page helpful?
- button "Yes"
- button "No"
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: 9fcfbdc5b9f0ff67
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class LoginPage extends BasePage {
  5  | 
  6  |   readonly usernameInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly loginButton: Locator;
  9  |   readonly errorMessage: Locator;
  10 |   readonly logoutLink: Locator;
  11 |   readonly openAccountLink: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 | 
  15 |     super(page);
  16 |     
  17 |     this.loginButton = page.getByRole('button', { name: 'Log In' });
  18 |     this.logoutLink = page.getByRole('link', { name: 'Log Out' });
  19 |     this.errorMessage = page.locator('.error');
  20 |     this.usernameInput = page.locator('input[name="username"]');
  21 |     this.passwordInput = page.locator('input[name="password"]');
  22 |     this.openAccountLink = page.locator('a[href*="openaccount"]');
  23 | 
  24 |   }
  25 | 
  26 |   async navigate(path: string = 'https://parabank.parasoft.com/parabank/index.htm') {
  27 |     await super.navigate(path);
  28 |   }
  29 | 
  30 |   async login(username: string, password: string) {
  31 |     await this.usernameInput.fill(username);   
  32 |     await this.passwordInput.fill(password);   
  33 |     await this.loginButton.click();            
  34 | }
  35 | 
  36 |     
  37 |   async verifyOpenAccountLinkNotVisible() {
  38 |     await expect(this.openAccountLink).toHaveCount(0);
  39 |   }
  40 | 
  41 |   async verifyLoginSuccess() {
> 42 |     await expect(this.page).toHaveURL(/overview.htm/);
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  43 |     //await expect(this.page).toHaveURL(/overview\.htm/,{ timeout: 10000 });
  44 |     await expect(this.logoutLink).toBeVisible();
  45 |   }
  46 | 
  47 |   async isLoggedIn(){
  48 |     return await this.logoutLink.isVisible({ timeout: 0 });
  49 |   }
  50 |   // async logout(): Promise<void> {
  51 |   //   await this.logoutLink.click();
  52 |   // }
  53 | 
  54 |   async verifyLoginFailure(username: string,password: string) {
  55 | 
  56 |   const errorMessage = this.page.locator('.error');
  57 |   if (username === '' && password === '') {
  58 |     await expect(errorMessage).toContainText('Please enter a username and password.');
  59 |   }
  60 |   else {
  61 |    await expect(errorMessage).toContainText(/The username and password could not be verified.|An internal error has occurred and has been logged./);
  62 |   }
  63 | }
  64 | }
```