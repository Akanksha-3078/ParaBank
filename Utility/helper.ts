import { Page } from '@playwright/test';

export class TestUtil {

  // Screenshot Utility
  static async captureScreenshot(
    page: Page,
    testName: string
  ) {

    const timestamp =
      new Date()
        .toISOString()
        .replace(/[:.]/g, '-');

    const screenshotPath =
      `screenshots/${testName}-${timestamp}.png`;

    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    this.logMessage(
      `Screenshot captured: ${screenshotPath}`
    );
  }

  // Logger Utility
  static logMessage(message: string) {

    const timestamp =
      new Date().toISOString();

    console.log(
      `[${timestamp}] ${message}`
    );
  }
}