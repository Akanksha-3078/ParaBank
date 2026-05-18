import {test as base,request,APIRequestContext} from '@playwright/test';

import { AccountsAPI } from '../Pages/APIUsers';

type APIFixture = {

    apiContext: APIRequestContext;

    accountsAPI: AccountsAPI;
};

export const test =
    base.extend<APIFixture>({

    apiContext: async ({}, use) => {

        const apiContext = await request.newContext({

            baseURL:'https://parabank.parasoft.com/parabank/services/bank/',

            extraHTTPHeaders: {

                Accept: 'application/json'
            }

        });

        await use(apiContext);

        await apiContext.dispose();
    },

    accountsAPI:
    async ({ apiContext }, use) => {

        const accountsAPI =
            new AccountsAPI(apiContext);

        await use(accountsAPI);
    }

});

export const expect = test.expect;

