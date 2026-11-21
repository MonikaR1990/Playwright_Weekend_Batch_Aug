import { test } from './LoginFixture.spec'
import { expect } from '@playwright/test'

test('Testcase 1', async({login})=>{
    await expect(login).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('TestCase 2', async({login})=>{
    await expect(login).toHaveTitle('Swag Labs')
})

test('TestCase 3', async({login})=>{
    let product = login.locator('.title')
    await expect(product).toBeVisible()
})
