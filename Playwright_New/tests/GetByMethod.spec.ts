import { test } from '@playwright/test'

test('GetBy', async({page})=>{
    
    await page.goto("https://www.amazon.in/")

    await page.getByText('AmazonBasic').click() //contain text

    await page.getByText('Returns').first().click()

    await page.getByRole('searchbox', {name: 'Search Amazon.in'}).fill("Laptop")
    await page.waitForTimeout(3000)

    await page.getByRole('button', {name: 'Go'}).first().click()
    await page.getByRole('link', {name:'AmazonBasics'}).click()

    await page.getByPlaceholder('Search Amazon.in').fill("Laptop")

    await page.goto("https://www.google.com/")
    
    await page.getByRole('combobox', {name: 'Search'}).fill("Selenium")
    await page.getByRole('button', {name: 'Google Search'}).click()
    await page.waitForTimeout(3000)

    await page.getByRole('img', {name: 'Google'}).click()

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('radio', {name: 'male'}).click()
    await page.getByRole('checkbox', {name: 'sunday'}).click()

    await page.getByLabel('Name:').fill("Poornima")

    await page.getByPlaceholder("Enter Name").fill("Bala") //placeholder attribute
    await page.getByTitle('Search for Products, Brands and More').fill("Latop") //Allows locating elements by their title attribute.
    
    await page.getByLabel('Search Amazon.in').fill("Laptop")
    await page.waitForTimeout(3000)
    
    await page.goto("https://vinothqaacademy.com/demo-site/")
    await page.getByAltText('Vinoth Tech Solutions').click()  //Allows locating elements by their alt text. (only for image)

    await page.goto("https://www.passthenote.com/auth/login")
    await page.getByTestId('ptn-login-email-input').fill("admin@gmail.com") //Locate element by the test id.

})

//getByRole ==> name --> Property --> Visible text, value,  aria-label