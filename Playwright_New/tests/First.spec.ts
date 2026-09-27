import { test } from '@playwright/test'

test('Google Launch', async({page})=>{
    await page.goto("https://www.google.com/")

})
test('Yahoo Launch', async({page})=>{
    await page.goto("https://login.yahoo.com/?.src=ym&pspid=&activity=mail-direct&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fn%2F")
})

//to find the element
// CSS Selector 
// Xpath
// getByMethod