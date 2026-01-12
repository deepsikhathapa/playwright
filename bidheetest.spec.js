const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://bidhee.com/');
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Deepsikha Thapa');
  await page.getByPlaceholder('Phone No.').click();
  await page.getByPlaceholder('Phone No.').press('MediaPlayPause');
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();