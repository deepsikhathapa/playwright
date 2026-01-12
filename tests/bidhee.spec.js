import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bidhee.com/');
  await page.getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Deepsikha Thapa');
  await page.getByPlaceholder('Phone No.').click();
  await page.getByPlaceholder('Phone No.').press('PageUp');
  await page.getByPlaceholder('Phone No.').press('ArrowUp');
  await page.getByPlaceholder('Phone No.').fill('');
  await page.getByPlaceholder('Phone No.').press('NumLock');
  await page.getByPlaceholder('Phone No.').fill('9807324460');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('deepseekathapa@gmail.com');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('xsaascaca');
  await page.getByRole('textbox', { name: 'Captcha Captcha' }).click();
  await page.getByRole('textbox', { name: 'Captcha Captcha' }).fill('yz9b2h');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByRole('button', { name: 'ok!' }).click();
});