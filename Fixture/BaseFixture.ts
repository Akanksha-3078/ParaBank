import { test as baseTest } from '@playwright/test';

type TestData = {
    data: {
        url: string;
    };
};

export const test = baseTest.extend<TestData>({

    data: async ({}, use) => {

        await use({

            


            url: 'https://parabank.parasoft.com/parabank'

        });

    },

});