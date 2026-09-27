//id
//classname
//name
//placeholder
//title
//value
//aria-label

import { test } from '@playwright/test'

test('CSS Selector', async({page})=>{
    // await page.goto("https://www.amazon.in/")
    // await page.locator('#twotabsearchtextbox').fill('Laptop')
    // await page.locator('#nav-search-submit-button').click()
    // await page.locator('.nav-input.nav-progressive-attribute').click()
    // await page.locator('[placeholder="Search Amazon.in"]').fill("iphone")
    // await page.locator('[aria-label="Search Amazon.in"]').fill("Phone")
    // await page.locator('[id="twotabsearchtextbox"]').fill("Watch")
    // await page.locator('.nav-input.nav-progressive-attribute[value="Go"]').click()
    // await page.locator('#twotabsearchtextbox.nav-input.nav-progressive-attribute').fill("Apple")

    await page.goto('https://the-internet.herokuapp.com/login')
    // await page.locator('input').first().fill("bala@gmail.com")  //2 element
    // await page.locator('input').last().fill("bala@123") 

    await page.locator('input').nth(0).fill("bala@gmail.com")
    await page.locator('input').nth(1).fill("bala@123")
    await page.locator('button').click()

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('[id*="name"]').fill("Bala")
    await page.locator('[id^="name"]').fill("Mani")
    await page.locator('[id$="name"]').fill("Mani")

    //parent-child
    await page.goto("https://www.amazon.in/")
    //await page.locator('#twotabsearchtextbox').fill("Laptop") //2 element
    await page.locator(".nav-search-field #twotabsearchtextbox").fill("laptop")

    await page.goto("https://www.meesho.com/")
    await page.locator('[placeholder="Try Saree, Kurti or Search by Product Code"] input').fill("Dress")
    await page.locator('[class^="DesktopSearch"] input]').fill("Dress")
    await page.locator( '[class^="DesktopSearch"]>input').fill("Dress")
    await page.locator('label[for="username"]+input').fill("Dress")
    await page.locator('[value="search-alias=baby"]~option').click() //general sibling
    await page.locator('[value="search-alias=baby"]+option').click() //adjcent sibling
    

    await page.locator('#searchDropdownBox>option:first-child').click() 
    await page.locator('#searchDropdownBox>option:last-child').click()
    await page.locator('#searchDropdownBox>option:nth-child(5)').click()

    //visible text

    await page.locator('text=AmazonBasics').click()
    await page.locator('a:has-text("AmazonBasics")').click()
    await page.locator('a:has-text("Flights")').click()

})

//unreadable format value should be avoid
//id --> #
//classname -->  .
//other attributes --> [attributeName="value"]
//multiple attributes combine --> .classValue[attributeName="value"] or #id.classname
//tagName + attribute --> tagname#id  or tagname[attribute="value"]
//direct tagName
//first(), last(), nth(index)
//contains attribute value (*) --> [attribute*="value"]
//startswith attribute value (^) --> [attribute^="value"]
//endswith attribute value ($) --> [attribute$="value"]

//parent-child

//Desecendant Selector --> space (from parent, grand parent you able to locate child element directly)
// #nav-search-bar-form #twotabsearchtextbox

//Direct Child --> ">" --> (mainly for parent and its direct child and for grand parents)

//Adjecent Sibling --> "+" (only next sibling not so all sibling)

// General Sibling --> "~" (list out all siblings of that element)


// <div >
//     <h2>Login</h2>
//     <p>Error</p>  h2+p    
//     <p>Invalid</p> h2~p   
//     <span>Help</span>
// </div>


// <div >
//     <input>  //first-child  //nth-child(1)
//     <input>
//     <input>
//     <input>  //last-child
// </div>

//input:first-child
//input:last-child
//input:nth-child(1)
//input:nth-child(2)


//visible text

//text=AmazonBasics