import { test } from '@playwright/test'


test('Iframe', async({page})=>{
    await page.goto("https://letcode.in/frame")

    let frame1 = page.frameLocator('#firstFr')
    await frame1.locator('[name="fname"]').fill("Balaji")
    await frame1.locator('[name="lname"]').fill("G")
    
    let frame2 = frame1.frameLocator('[title="Inner Frame"]')

    await frame2.locator('[name="email"]').fill("balaji@gmail.com")

    await frame1.locator('[name="fname"]').clear()
    await frame1.locator('[name="lname"]').clear()

    await page.getByText('Contact').first().click()

    console.log(await page.title())


    
    await page.waitForTimeout(3000)






})

