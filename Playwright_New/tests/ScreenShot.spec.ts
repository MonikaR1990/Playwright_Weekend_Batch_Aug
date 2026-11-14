import { test, expect } from '@playwright/test'

test('Screenshot_1_FullPAge', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:'E:\\Screenshots\\letcodeScreenshot_1.jpg', fullPage: true})
})

test('Screenshot_2_Normal', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:'E:\\Screenshots\\letcodeScreenshot_2.jpg'})
})

test('Screenshot_3_Particular_Element', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let startBtn = page.locator('.start')
    await startBtn.screenshot({path:'E:\\Screenshots\\startBtn.jpg'})
})

test('Screenshot_4', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await expect(page).toHaveURL('/inventory11111.html')
})

test('Screenshot_5', async({page})=>{
   
    let timeStamp = Date.now()
    console.log(timeStamp)

    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page).toHaveURL(/inventory.html/)

    await page.screenshot({path:`SauceDemoShot/test_${timeStamp}.jpg`})
})


//1970 Jan 1 : 12 am

// 1 sec = 1000 millisecond

// 10 sec = 10000 milliseconds

// so many years .....1794650119139 milliseconds

