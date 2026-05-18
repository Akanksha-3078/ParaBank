// Fixture/CombinedFixture.ts

import { test as base, request, APIRequestContext } from '@playwright/test';
import { AccountsAPI } from '../Pages/APIUsers';


type CombinedFixtures = {
    data: {
        url: string;
    };
    apiContext: APIRequestContext;
    accountsAPI: AccountsAPI;
};

export const test = base.extend<CombinedFixtures>({

    
    data: async ({}, use) => {
        await use({
           //url: 'https://parabank.parasoft.com/parabank'
          url: 'http://localhost:9090/parabank/'
        });
    },

    
    apiContext: async ({}, use) => {
        const apiContext = await request.newContext({
            baseURL: 'http://localhost:9090/parabank/services/bank/',
            extraHTTPHeaders: {
                Accept: 'application/json'
            }
        });

        await use(apiContext);

        await apiContext.dispose(); 
    },

    
    accountsAPI: async ({ apiContext }, use) => {
        const accountsAPI = new AccountsAPI(apiContext);
        await use(accountsAPI);
    }

});

export const expect = test.expect;