import {test} from '@playwright/test'

test('Single Window Handling', async({page})=>{
    await page.goto("https://letcode.in/window")

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), //newPage
        page.locator('#home').click()  //click Result
    ])
   
    await newPage.locator('[placeholder="Search practice labs..."]').fill("Palywright")
    console.log(await newPage.title())
    console.log(newPage.url())
    await page.waitForTimeout(5000)
})


let colors = ["Red", "Blue", "Green"]

let [c1] = colors

//Promise.all() ==> used to handle multiple asynchronous process and you want all completeawait
//page ==> represents tab 1 --> https://letcode.in/window
//newPage ==> represents tab 2 --> https://letcode.in/test

/*
  page
    |
  wait for popup
    |
  new browser tab open
    |
 page.waitForEvent('popup') --> return that Page Object
    |
 newPage 

*/