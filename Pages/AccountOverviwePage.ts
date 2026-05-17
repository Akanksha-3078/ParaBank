import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountOverviewPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
    readonly accountsOverviewLink = this.page.getByRole('link', { name: 'Accounts Overview' });
    readonly accountsTable = this.page.locator('#accountTable');
    readonly accountIds = this.page.locator('#accountTable').getByRole('link');

    
    async navigateToAccountsOverview() {
        await this.accountsOverviewLink.click();                    
        await expect(this.accountsTable).toBeVisible();            
    }

    
    async getAllAccountIds(): Promise<string[]> {
        await expect(this.accountIds).not.toHaveCount(0);           
        const accounts = await this.accountIds.allTextContents();
        return accounts.map(account => account.trim());
    }

    
    async verifyAccountPresent(accountId: string) {
        await expect(this.accountIds.filter({                       
            hasText: accountId
        })).toBeVisible();
    }
}