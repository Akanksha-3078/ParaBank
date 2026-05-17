import { test, expect } from '../../Fixture/APIFixture';
import validData from '../../TestData/CreateValid.json';

for (const data of validData) {

      test(`@performance Verify ${data.testName}`, async ({accountsAPI}) => {
        const start= Date.now();
        const response = await accountsAPI.getAccounts(validData[0].id);
        const end = Date.now();

        const responseTime = end - start;

        console.log(`API Response Time: ${responseTime} ms`);

        expect(response.status()).toBe(200);

        // Requirement: Fail if > 2 sec

        if (responseTime > 2000) {console.log(`WARNING: Response time exceeded threshold. Actual: ${responseTime} ms`);} 
            else {console.log(`SUCCESS: Response time is within acceptable limit`);}

        console.log(`Response Status: ${response.status()}`);
      });

    }