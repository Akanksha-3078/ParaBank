import { test, expect } from '../Fixture/APIFixture';
import apiData  from '../TestData/GetValid.json'
import validData from '../TestData/CreateValid.json';
import Ajv from 'ajv';
import { accountSchema } from '../Schemas/accountGETSchema';
import { logger } from '../Utility/logger';

const ajv = new Ajv();





test.describe('GET Accounts API Validation', () => {


test('@regression @api (TC-API-05, TC-API-03, TC-API-04) Validate Create Account API using GET response data',

  async ({ accountsAPI }) => {

    logger.info('Starting API chaining test');

    logger.info(`Sending GET request for account ID: ${validData[0].id}`);

    const getResponse = await accountsAPI.getAccounts(validData[0].id);

    logger.info(`GET Response Status: ${getResponse.status()}`);

    expect(getResponse.status()).toBe(200);

    const getResponseBody =await getResponse.json();

    logger.info( `GET Response Body: ${JSON.stringify(getResponseBody)}`);

    expect(getResponseBody).toHaveProperty('id');

    expect(getResponseBody).toHaveProperty('customerId');

    expect(getResponseBody).toHaveProperty('type');

    expect(getResponseBody).toHaveProperty('balance');

    expect( ['CHECKING', 'SAVINGS']).toContain(getResponseBody.type);

    expect(getResponseBody.balance).not.toBeNull();

    expect(typeof getResponseBody.balance).toBe('number');
    const customerId = getResponseBody.customerId;

    const fromAccountId = getResponseBody.id;

    logger.info(`Customer ID: ${customerId}`);

    logger.info(`From Account ID: ${fromAccountId}`);

    const accountTypeMap: Record<string, number> = {CHECKING: 0, SAVINGS: 1 };
    logger.info('Sending POST request to create new account');

    const postResponse = await accountsAPI.createAccount(
        customerId,
        accountTypeMap[validData[0].type],
        fromAccountId
      );

    logger.info( `POST Response Status: ${postResponse.status()}`);
    const postResponseText = await postResponse.text();
    logger.info(`POST Response Body: ${postResponseText}`);
    expect(postResponse.status()).toBe(200);
    logger.info('Create Account API test completed successfully');

  }

);

    for (const data of apiData) {

      test(`@smoke @api Verify ${data.testName}`, async ({accountsAPI}) => {

         logger.info(`Starting test: ${data.testName}`);

          logger.info(`Sending GET request for customer ID: ${data.customerId}`);

        const response = await accountsAPI.getAccounts(data.customerId);
        console.log(await response.text());
        expect(response.status()).toBe(data.expectedStatus);
        logger.info(`Test completed successfully: ${data.testName}`);
      });

    }

    test('@negative @api (TC-NEG-02)GET accounts with missing or empty customer ID', async ({accountsAPI}) => {
      logger.info('Starting negative test for empty customer ID');

    logger.info('Sending GET request with empty customer ID');
      const response = await accountsAPI.getAccounts('');
      console.log(await response.text());
      expect([400, 404, 405]).toContain(response.status());
      logger.info('Negative test for empty customer ID completed successfully');

    });



   for (const data of apiData) {

  test(`@schema @api (TC-API-07) Verify schema ${data.testName}`, async ({ accountsAPI }) => {

    logger.info(`Starting schema validation test: ${data.testName}`);

      logger.info(`Sending GET request for customer ID: ${data.customerId}`);

    const response = await accountsAPI.getAccounts(data.customerId);
    expect(response.status()).toBe(data.expectedStatus);
    if (response.status() === 200) {
      logger.info('Valid response received. Starting schema validation');

      const responseBody = await response.json();
      const validate = ajv.compile(accountSchema);
      const isValid = validate(responseBody);
      console.log(validate.errors);
      expect(isValid).toBeTruthy();
      logger.info('Schema validation completed successfully');
    } 
    else {
      const errorText = await response.text();
      console.log(errorText);
      expect(errorText).toContain('Could');
       logger.info('Negative response validation completed successfully');

    }
  });
}
});