import { expect } from '@playwright/test';
import { test } from '../../Fixture/BaseFixture';

test.describe('UI Performance Validation', () => {

    test('@performance Validate login page load time', async ({ page , data}) => {

        const startTime = Date.now();
        await page.goto(data.url);

        await page.waitForLoadState('load');
        const endTime = Date.now();

        const loadTime = endTime - startTime;

        console.log(`Page Load Time: ${loadTime} ms`);

        // Example threshold
        expect(loadTime).toBeLessThan(3000);

    });

});