//Assertion = Testing or Verification

//Actual Result
//Expected Result

//Verify that the actual result matches the expected result

//Assertion
//1. Hard Assert
//2. Soft Assert

//Playwright Test Framework  ==> Browser Automation + Testing

//Automation --> Selenium 
//Testing --> TestNG

//expect is a playwright function to create an assertion

import { test, expect } from '@playwright/test'

//1. toBeVisible() ==> Checks Whether the elements is visible 

//Verify that user able to login with valid credientials

test('toBeVisible', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    const userProfile =  page.locator('.account').first()
    console.log(userProfile)
    await expect(userProfile).toBeVisible()
})

//Verify that user able to see error message while using invalid credentials

test('toBeVisible_1', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonyaaaaa@123")
    await page.locator('.button-1.login-button').click()

    const errorMsg = page.locator('.validation-summary-errors')
    await expect(errorMsg).toBeVisible()
    
})

//2. toHaveText() ==> Checks the exact visible text of the element
test('toHaveText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    const userProfile = page.locator('.account').first()
    await expect(userProfile).toHaveText('sonya.a@gmail.com')
})

//3. toContainText() ==> Checks the partial visible text of the element
test('toContainText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    const userProfile = page.locator('.account').first()
    await expect(userProfile).toContainText('sonya')
})

//4. toHaveURL() ==> it is used to check whether the current browser URL matches the expected URL
test('toHaveURL', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveURL(/inventory.html/)
    console.log("Test Checked")
})

//page ==> playwright readymade object ==> page all details, url, title, elements

//5. toHaveTitle()
test('toHaveTitle', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("Laptop")
    await page.locator('#nav-search-submit-button').click()

    await expect(page).toHaveTitle('Amazon.in : Laptop')

    console.log(await page.title()) //it returns current page title
    console.log(page.url()) //it returns the current page url


   // page.url() //synchronus process ==> directly return string
   // await page.title() //Asynchronus process ==>  return Promise<string> //await waits foer the Promise to resolve and gives us the actual title
})

//6. toBeEnabled()
test('toBeEnabled', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill("Laptop")
    const searchBtn = page.locator('#nav-search-submit-button')

    await expect(searchBtn).toBeEnabled()

    await searchBtn.click()

})

/*
toBeVisible()             Vs           //toBeEnabled()
The Search Button is                     The Search Button is displayed and interact with user
displayed on the screen 

*/

//7. toBeDisabled
test('toBeDisabled', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls")
    const input = page.locator('//form/child::input')

    await expect(input).toBeVisible()
    await expect(input).toBeDisabled() 

    await page.locator('//form[@id="input-example"]//button').click()
    //await page.locator('#input-example>button').click()

    await expect(input).toBeEnabled()     

})
//8. toHaveValue() is used to verfiy whether an input field contains the expected value

//toHaveValue() used in the form of fields such as username, password, email, and search boxes

test('toHaveValue', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('inpu#twotabsearchtextbox').fill("Laptop")

    await expect(page.locator('inpu#twotabsearchtextbox')).toHaveValue('Laptop')
})

//9. toBeChecked() ==> is used to verify whether a checkbox or radio button is selected (checked)

test('toBeChecked', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const sundayCheck =  page.locator('#sunday')
    await sundayCheck.check()
    //await sundayCheck.uncheck()

    await expect(sundayCheck).toBeChecked()
})

//10.toHaveCount() ==> is used to verify the number of elements matching on a webpage
test('toHaveCount', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const totalDays = page.locator("//label[contains(text(),'day')]")
    
    const days = await totalDays.allInnerTexts()
    console.log(days)

    await expect(totalDays).toHaveCount(7)
})

test('toHaveCount_1', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await page.waitForLoadState('load')
    const products = page.locator('.inventory_item_name ')

    const pcount = await products.count()
    console.log(pcount)

    const ptitle = await products.allTextContents()
    console.log(ptitle)

    const pAll = await products.all()
    console.log(pAll)

    const firstProduct = await products.first().textContent()
    console.log(firstProduct)
    
    await expect(products).toHaveCount(6)
})

//Generic Test (toBe, toContain, toEqual, toMatch toBeTruthy, toBeFalsy)
//Data Validation

//11. toBe() ==> number, string
test('toBe', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    const userProfile = await page.locator('.account').first().textContent()
    expect(userProfile).toBe('sonya.a@gmail.com')

    
    // const userProfile = page.locator('.account').first()
    // await expect(userProfile).toHaveText('sonya.a@gmail.com')

})

//12. toContain()

//toContain --> check partial string data
//toHaveContain --> check the elements visible text by partially 

test('toContain', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    const userProfile = await page.locator('.account').first().textContent()
    expect(userProfile).toContain('sonya')
})

//13. toEqual() ==> array, object, type
test('toEqual', async({page})=>{
    const actualFruits = ["Apple", "Banana", "Cherry"]

    const expectedFruits = ["Apple", "Banana", "Cherry"]

    expect(actualFruits).toEqual(expectedFruits)

})

//14. toMatch()

test('toMatch', async({page})=>{
    const phone = 9600393318
    expect(phone).toMatch(/^\d{10}$/)

    //  /  / start and end of the regex
    //  ^ start of the string
    // \d Any digits from 0 t0 9
    // {10} exactly 10 digits
    // $ End of the string 
})

//15. toBeTruthy()
test('toBeTruthy', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    // const userProfile = page.locator('.account').first()
    // await expect(userProfile).toBeVisible()

    const userProfile = await page.locator('.account').first().isVisible()
    expect(userProfile).toBeTruthy()

})

//16. toBeFalsy()
test('toBeFasly()', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('.button-1.login-button').click()

    // const userProfile = page.locator('.account').first()
    // await expect(userProfile).toBeVisible()

    const userProfile = await page.locator('.account6768678').first().isVisible()
    expect(userProfile).toBeFalsy()
})

