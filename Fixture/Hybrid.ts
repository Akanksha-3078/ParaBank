// Fixture/CombinedFixture.ts

import { test as base, request, APIRequestContext } from '@playwright/test';
import { AccountsAPI } from '../Pages/APIUsers';

// ✅ All fixture types in one place
type CombinedFixtures = {
    data: {
        url: string;
    };
    apiContext: APIRequestContext;
    accountsAPI: AccountsAPI;
};

export const test = base.extend<CombinedFixtures>({

    // ✅ Data fixture (from your BaseFixture)
    data: async ({}, use) => {
        await use({
            url: 'https://parabank.parasoft.com/parabank'
        });
    },

    // ✅ API context fixture (from your APIFixture)
    apiContext: async ({}, use) => {
        const apiContext = await request.newContext({
            baseURL: 'https://parabank.parasoft.com/parabank/services/bank/',
            extraHTTPHeaders: {
                Accept: 'application/json'
            }
        });

        await use(apiContext);

        await apiContext.dispose(); // ✅ Cleanup after test
    },

    // ✅ AccountsAPI fixture — depends on apiContext above
    accountsAPI: async ({ apiContext }, use) => {
        const accountsAPI = new AccountsAPI(apiContext);
        await use(accountsAPI);
    }

});

export const expect = test.expect;