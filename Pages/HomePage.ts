import { Page } from '@playwright/test';
import { BasePage } from './BasePage';              

export class HomePage extends BasePage {            

    constructor(page: Page) {
        super(page);                                
    }

    
    readonly logoutLink = this.page.getByRole('link', { name: 'Log Out' });
    readonly accountsLink  = this.page.getByRole('link', { name: 'Accounts Overview' });
    readonly openAccountLink = this.page.getByRole('link', { name: 'Open New Account' });

    async logout(){
        await this.logoutLink.click();
    }

}