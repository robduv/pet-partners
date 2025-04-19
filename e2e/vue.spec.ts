import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Pet Partners of Fairfield County')
})
