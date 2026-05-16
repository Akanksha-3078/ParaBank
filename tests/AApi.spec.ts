import { test, expect } from '../Fixture/APIFixture';
import apiData  from '../TestData/GetValid.json'
import validData from '../TestData/CreateValid.json';




test.describe('GET Accounts API Validation', () => {

    test(

    'Validate Create Account API using GET response data',

    async ({ accountsAPI}) => {


        const getResponse =
            await accountsAPI.getAccounts(
                validData[0].id
            );

        expect(getResponse.status()).toBe(200);

        const getResponseBody =
            await getResponse.json();

        console.log(getResponseBody);

        expect(getResponseBody).toHaveProperty('id');

        expect(getResponseBody).toHaveProperty('customerId');

         expect(getResponseBody).toHaveProperty('type');

        expect(getResponseBody).toHaveProperty('balance');

        expect(

      ['CHECKING', 'SAVINGS']

    ).toContain(

      getResponseBody.type

    );

    expect(getResponseBody.balance)

      .not.toBeNull();

    expect(

      typeof getResponseBody.balance

    ).toBe('number');

    

        // =========================================
        // STEP 2 → Extract Data
        // =========================================

        const customerId =
            getResponseBody.customerId;

        const fromAccountId =
            getResponseBody.id;

        // =========================================
        // STEP 3 → Account Type Mapping
        // =========================================

        const accountTypeMap: Record<string, number> = {

            CHECKING: 0,
            SAVINGS: 1

        };

        // =========================================
        // STEP 4 → CREATE NEW ACCOUNT
        // =========================================

        const postResponse =
            await accountsAPI.createAccount(

                customerId,

                accountTypeMap[validData[0].type],

                fromAccountId

            );

        console.log(await postResponse.text());

        expect(postResponse.status()).toBe(200);

    }

);


    

    for (const data of apiData) {

      test(`Verify ${data.testName}`, async ({accountsAPI}) => {

        const response = await accountsAPI.getAccounts(data.customerId);

        console.log(await response.text());

        expect(response.status()).toBe(data.expectedStatus);


      });

    }

    test('GET accounts with missing or empty customer ID', async ({accountsAPI}) => {

      const response = await accountsAPI.getAccounts('');

      console.log(await response.text());

      expect([400, 404, 405]).toContain(response.status());

    });

});