import { test, expect } from '@playwright/test';

test('Open website', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveTitle(/Practice Software Testing/);
});