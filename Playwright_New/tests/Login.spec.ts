import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('input').nth(0).fill("john")
    await page.locator('input').nth(1).fill("SuperSecretPassword!")
    await page.locator('button').click() })

