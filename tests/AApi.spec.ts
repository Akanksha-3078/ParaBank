import { test, expect } from '../Fixture/APIFixture';
import apiData  from '../TestData/GetValid.json'
import validData from '../TestData/CreateValid.json';
import Ajv from 'ajv';
import { accountSchema } from '../Schemas/accountGETSchema';

const ajv = new Ajv();





test.describe('GET Accounts API Validation', () => {

    test('@regression @api Validate Create Account API using GET response data',

    async ({ accountsAPI}) => { const getResponse =await accountsAPI.getAccounts(validData[0].id);

    expect(getResponse.status()).toBe(200);
    const getResponseBody =await getResponse.json();
    console.log(getResponseBody);
    expect(getResponseBody).toHaveProperty('id');
    expect(getResponseBody).toHaveProperty('customerId');
    expect(getResponseBody).toHaveProperty('type');
    expect(getResponseBody).toHaveProperty('balance');
    expect(['CHECKING', 'SAVINGS']).toContain(getResponseBody.type);
    expect(getResponseBody.balance).not.toBeNull();
    expect(typeof getResponseBody.balance).toBe('number');
    const customerId = getResponseBody.customerId;
    const fromAccountId = getResponseBody.id;
    const accountTypeMap: Record<string, number> = {CHECKING: 0, SAVINGS: 1 };
    const postResponse = await accountsAPI.createAccount(customerId,accountTypeMap[validData[0].type],fromAccountId);
    console.log(await postResponse.text());
    expect(postResponse.status()).toBe(200);
}

);

    for (const data of apiData) {

      test(`@smoke @api Verify ${data.testName}`, async ({accountsAPI}) => {
        const response = await accountsAPI.getAccounts(data.customerId);
        console.log(await response.text());
        expect(response.status()).toBe(data.expectedStatus);
      });

    }

    test('@negative @api GET accounts with missing or empty customer ID', async ({accountsAPI}) => {
      const response = await accountsAPI.getAccounts('');
      console.log(await response.text());
      expect([400, 404, 405]).toContain(response.status());

    });



   for (const data of apiData) {

  test(`@schema @api Verify schema ${data.testName}`, async ({ accountsAPI }) => {

    const response = await accountsAPI.getAccounts(data.customerId);
    expect(response.status()).toBe(data.expectedStatus);
    if (response.status() === 200) {

      const responseBody = await response.json();
      const validate = ajv.compile(accountSchema);
      const isValid = validate(responseBody);
      console.log(validate.errors);
      expect(isValid).toBeTruthy();
    } 
    else {
      const errorText = await response.text();
      console.log(errorText);
      expect(errorText).toContain('Could');

    }
  });
}
});