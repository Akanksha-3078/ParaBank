# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AApi.spec.ts >> GET Accounts API Validation >> @smoke @api Verify (TC-NEG-API-01)
- Location: tests/AApi.spec.ts:77:11

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 429
```

# Test source

```ts
  1   | import { test, expect } from '../Fixture/APIFixture';
  2   | import apiData  from '../TestData/GetValid.json'
  3   | import validData from '../TestData/CreateValid.json';
  4   | import Ajv from 'ajv';
  5   | import { accountSchema } from '../Schemas/accountGETSchema';
  6   | import { logger } from '../Utility/logger';
  7   | 
  8   | const ajv = new Ajv();
  9   | 
  10  | 
  11  | 
  12  | 
  13  | 
  14  | test.describe('GET Accounts API Validation', () => {
  15  | 
  16  | 
  17  | test('@regression @api (TC-API-05, TC-API-03, TC-API-04) Validate Create Account API using GET response data',
  18  | 
  19  |   async ({ accountsAPI }) => {
  20  | 
  21  |     logger.info('Starting API chaining test');
  22  | 
  23  |     logger.info(`Sending GET request for account ID: ${validData[0].id}`);
  24  | 
  25  |     const getResponse = await accountsAPI.getAccounts(validData[0].id);
  26  | 
  27  |     logger.info(`GET Response Status: ${getResponse.status()}`);
  28  | 
  29  |     expect(getResponse.status()).toBe(200);
  30  | 
  31  |     const getResponseBody =await getResponse.json();
  32  | 
  33  |     logger.info( `GET Response Body: ${JSON.stringify(getResponseBody)}`);
  34  | 
  35  |     expect(getResponseBody).toHaveProperty('id');
  36  | 
  37  |     expect(getResponseBody).toHaveProperty('customerId');
  38  | 
  39  |     expect(getResponseBody).toHaveProperty('type');
  40  | 
  41  |     expect(getResponseBody).toHaveProperty('balance');
  42  | 
  43  |     expect( ['CHECKING', 'SAVINGS']).toContain(getResponseBody.type);
  44  | 
  45  |     expect(getResponseBody.balance).not.toBeNull();
  46  | 
  47  |     expect(typeof getResponseBody.balance).toBe('number');
  48  |     const customerId = getResponseBody.customerId;
  49  | 
  50  |     const fromAccountId = getResponseBody.id;
  51  | 
  52  |     logger.info(`Customer ID: ${customerId}`);
  53  | 
  54  |     logger.info(`From Account ID: ${fromAccountId}`);
  55  | 
  56  |     const accountTypeMap: Record<string, number> = {CHECKING: 0, SAVINGS: 1 };
  57  |     logger.info('Sending POST request to create new account');
  58  | 
  59  |     const postResponse = await accountsAPI.createAccount(
  60  |         customerId,
  61  |         accountTypeMap[validData[0].type],
  62  |         fromAccountId
  63  |       );
  64  | 
  65  |     logger.info( `POST Response Status: ${postResponse.status()}`);
  66  |     const postResponseText = await postResponse.text();
  67  |     logger.info(`POST Response Body: ${postResponseText}`);
  68  |     expect(postResponse.status()).toBe(200);
  69  |     logger.info('Create Account API test completed successfully');
  70  | 
  71  |   }
  72  | 
  73  | );
  74  | 
  75  |     for (const data of apiData) {
  76  | 
  77  |       test(`@smoke @api Verify ${data.testName}`, async ({accountsAPI}) => {
  78  | 
  79  |          logger.info(`Starting test: ${data.testName}`);
  80  | 
  81  |           logger.info(`Sending GET request for customer ID: ${data.customerId}`);
  82  | 
  83  |         const response = await accountsAPI.getAccounts(data.customerId);
  84  |         console.log(await response.text());
> 85  |         expect(response.status()).toBe(data.expectedStatus);
      |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  86  |         logger.info(`Test completed successfully: ${data.testName}`);
  87  |       });
  88  | 
  89  |     }
  90  | 
  91  |     test('@negative @api (TC-NEG-02)GET accounts with missing or empty customer ID', async ({accountsAPI}) => {
  92  |       logger.info('Starting negative test for empty customer ID');
  93  | 
  94  |     logger.info('Sending GET request with empty customer ID');
  95  |       const response = await accountsAPI.getAccounts('');
  96  |       console.log(await response.text());
  97  |       expect([400, 404, 405]).toContain(response.status());
  98  |       logger.info('Negative test for empty customer ID completed successfully');
  99  | 
  100 |     });
  101 | 
  102 | 
  103 | 
  104 |    for (const data of apiData) {
  105 | 
  106 |   test(`@schema @api (TC-API-07) Verify schema ${data.testName}`, async ({ accountsAPI }) => {
  107 | 
  108 |     logger.info(`Starting schema validation test: ${data.testName}`);
  109 | 
  110 |       logger.info(`Sending GET request for customer ID: ${data.customerId}`);
  111 | 
  112 |     const response = await accountsAPI.getAccounts(data.customerId);
  113 |     expect(response.status()).toBe(data.expectedStatus);
  114 |     if (response.status() === 200) {
  115 |       logger.info('Valid response received. Starting schema validation');
  116 | 
  117 |       const responseBody = await response.json();
  118 |       const validate = ajv.compile(accountSchema);
  119 |       const isValid = validate(responseBody);
  120 |       console.log(validate.errors);
  121 |       expect(isValid).toBeTruthy();
  122 |       logger.info('Schema validation completed successfully');
  123 |     } 
  124 |     else {
  125 |       const errorText = await response.text();
  126 |       console.log(errorText);
  127 |       expect(errorText).toContain('Could');
  128 |        logger.info('Negative response validation completed successfully');
  129 | 
  130 |     }
  131 |   });
  132 | }
  133 | });
```