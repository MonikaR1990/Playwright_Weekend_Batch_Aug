import { test, expect, type Page } from '@playwright/test';

const ORANGEHRM_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

async function login(page: Page, username: string, password: string) {
  await page.goto(ORANGEHRM_URL);
  await page.locator('input[name="username"]').fill(username);
  await page.locator('input[name="password"]').fill(password);
  await page.locator('button[type="submit"]').click();
}

test.describe('OrangeHRM Login Functionality', () => {
  test('1. Valid username and password', async ({ page }) => {
    await login(page, 'Admin', 'admin123');

    await expect(page).toHaveURL(/\/dashboard\/index$/);
    await expect(page.locator('h6.oxd-topbar-header-breadcrumb-module')).toContainText('Dashboard');
  });

  test('2. Invalid username', async ({ page }) => {
    await login(page, 'InvalidUser', 'admin123');

    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toContainText('Invalid credentials');
  });

  test('3. Invalid password', async ({ page }) => {
    await login(page, 'Admin', 'WrongPassword');

    const errorMessage = page.locator('.oxd-alert-content-text');
    await expect(errorMessage).toContainText('Invalid credentials');
  });

  test('4. Empty username', async ({ page }) => {
    await page.goto(ORANGEHRM_URL);
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    const usernameError = page.locator('.oxd-input-field-error-message').first();
    await expect(usernameError).toContainText('Required');
  });

  test('5. Empty password', async ({ page }) => {
    await page.goto(ORANGEHRM_URL);
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('button[type="submit"]').click();

    const passwordError = page.locator('.oxd-input-field-error-message').first();
    await expect(passwordError).toContainText('Required');
  });
});
