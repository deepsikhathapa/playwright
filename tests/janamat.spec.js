const {test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('janamat party', async ({}) => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://janamatparty.bidhee.net/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email / Phone / Membership' }).click();
  await page.getByRole('textbox', { name: 'Email / Phone / Membership' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Password / PIN Number' }).click();
  await page.getByRole('textbox', { name: 'Password / PIN Number' }).fill('12345678');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'ram' }).click();
  await page.getByRole('button', { name: ' Logout' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});