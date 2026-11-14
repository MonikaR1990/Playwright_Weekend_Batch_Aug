import { test, expect } from '@playwright/test'

//Hooks are special functions used to execute some code automatically at specific stages of test execution

//Playwright Test 4 main hooks

//test.beforeAll() ==> Executes only once before all test cases (Create Test Data, Start Server, Perform one-time set (DB))
//test.afterAll() ==> Executes only once after all test cases (Delete Test Data, DB connection close, stop server, final clean up)
//test.beforeEach() ==> Executes before every individual test cases (Login, common setup, URL Launch)
//test.afterEach() ==> Executes after every individual test cases (Logout, Test Data Clean, Screenshot)

test.beforeAll(async()=>{
    console.log("Before All")
})

test.beforeEach(async({page})=>{
    console.log("Before Each")
    await page.goto("https://www.google.com/")
})
test('TestCase 1', async({page})=>{
    console.log("TestCase 1")
    await expect(page).toHaveTitle('Google')
})

test('TestCase 2', async({page})=>{
    console.log("TestCase 2")
    await expect(page).toHaveURL('https://www.google.com/')
})

test('TestCase 3', async({page})=>{
    console.log("TestCase 3")
    let searchBox = page.locator('[name="q"]')
    await expect(searchBox).toBeVisible()
})

test('TestCase 4', async({page})=>{
    console.log("TestCase 4")
    let searchBtn = page.locator('[value="Google Search"]').last()
    await expect(searchBtn).toBeEnabled()
})
test.afterEach(async({page})=>{
    console.log("After Each")
    await page.screenshot({path:`GooglePageTest/test_${Date.now()}.jpg`})
})

test.afterAll(async()=>{
    console.log("After All")
})