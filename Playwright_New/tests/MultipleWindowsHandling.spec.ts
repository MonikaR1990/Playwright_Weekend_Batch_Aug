import { test, Page } from '@playwright/test'

test('Multiple Pages', async({page, context})=>{
    await page.goto("https://letcode.in/window")

    await Promise.all([
        context.waitForEvent('page'), 
        context.waitForEvent('page'),
        page.locator('#multi').click()
    ])

    let alertPage: Page | undefined
    let dropDownPage: Page | undefined

    for(let p of context.pages())
    {
        await page.waitForLoadState('load')
        if(p.url().includes('/alert'))
        {
            alertPage = p
            await alertPage.bringToFront()
            console.log(await alertPage.title())
            await alertPage.getByText('Contact').first().click()
            await alertPage.waitForTimeout(3000)
        }
        if(p.url().includes('/dropdowns'))
        {
            dropDownPage = p
            await dropDownPage.bringToFront()
            console.log(dropDownPage.title())
            await dropDownPage.locator('#fruits').selectOption('2')
            await dropDownPage.waitForTimeout(3000)
        }
    }

})

//3 Interface
//Page
//Browser
//BrowserContext

//fixtures