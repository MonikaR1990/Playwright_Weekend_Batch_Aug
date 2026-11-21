
import {chromium, test} from '@playwright/test'

test('Launch', async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com/")                  
})

test('Browser Fixture', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
})

test('Context Fixture', async({context})=>{
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
    page.context()
})

test('Page Fixture', async({page})=>{
    await page.goto("https://www.google.com/")
})




//A fixture provides everything a test needs to execute

//In Playwright Test Fixture is pre-defined setup or reusable object

//Common Playwright fixtures  (readymade objects)

//browser
//context
//page 
//browserName
//request 

//Browser (chrome application)
//   |
//Browser Context  (Separate user session)
//   |
//Page (Browser Tab) 

//page.context() returns the Browser Context

test('Two users login test', async({browser})=>{
    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    const page1 = await context1.newPage()
    const page2 = await context2.newPage()

    await page1.goto("https://www.saucedemo.com/")
    await page1.waitForTimeout(3000)
    await page1.locator('#user-name').fill("standard_user")
    await page1.locator('#password').fill("secret_sauce")
    await page1.locator('#login-button').click()

    await page2.goto("https://www.saucedemo.com/")
    await page1.waitForTimeout(3000)
    await page2.locator('#user-name').fill("locked_out_user")
    await page2.locator('#password').fill("secret_sauce")
    await page2.locator('#login-button').click()
    await page1.waitForTimeout(3000)

})
