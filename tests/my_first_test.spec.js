import {test, expect} from '@playwright/test'

test('My first test', async({page}) => {
  await page.goto('https://www.youtube.com')
  await expect(page).toHaveTitle('YouTube')
})