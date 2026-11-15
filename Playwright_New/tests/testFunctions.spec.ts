import { test, expect } from '@playwright/test'

test.describe('Google Page Test', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://www.google.com/")
    })

    test('Test 1', async({page})=>{
        await expect(page).toHaveTitle('Google')
    })
    test('Test 2', async({page})=>{
        await expect(page).toHaveURL('https://www.google.com/')
    })
    test('Test 3', async({page})=>{
        await expect(page.locator('[aria-label="Search"]')).toBeVisible()
    })
})

test.describe('Amazon Page Test', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://www.amazon.in/")
    })

    test('Test 1', async({page})=>{
        await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })
    test('Test 2', async({page})=>{
        await expect(page).toHaveURL('https://www.amazon.in/')
    })
    test('Test 3', async({page})=>{
        await expect(page.locator('input#twotabsearchtextbox')).toBeVisible()
    })
})

//=================================================================

//test.skip() ==> is used to skip a particular test case. Playwright will not execute he test steps inside that test

test.describe('Login Page', ()=>{
    
    test('Valid Login', async()=>{
    console.log("Valid Login Executed")
    })

    test('Invalid Login', async()=>{
    console.log("Invalid Login Executed")
    })

    test.skip('Forgot Password', async()=>{
    console.log("Forgot Password Executed")
    })

})

//==========================================================================

//test.only() ==> is used to execute only a particular test case while other test cases or skipped

test.describe('New Login Page', ()=>{
    
    test('Valid Login', async()=>{
    console.log("Valid Login Executed")
    })

    test('Invalid Login', async()=>{
    console.log("Invalid Login Executed")
    })

    test('Empty Credendials', async()=>{
    console.log("Empty Credendials Executed")
    })

    test('Forgot Password', async()=>{
    console.log("Forgot Password Executed")
    })

    test.only('Create new account', async()=>{
    console.log("Create new account Executed")
    })

})

//=========================================================================

//test.fail() ==> is used to mark a test case as an expected fail

test.describe('Payment Process', ()=> {
    
    test('UPI Payment', async()=>{
    console.log('UPI Payment')
    expect(200).toBe(200)
    })
    
    test('Credit Card Payment', async()=>{
    console.log('UPI Payment')
    expect(200).toBe(200)
    })
    
    //Known bug expected to fail
    test.fail('Debit Card', async()=>{
    console.log('UPI Payment')

    //Known Application Bug
    //Expected: 200
    //Actual: 500
    expect(500).toBe(200)
    })

    //When developer fixes the Debit Card bug, test.fail() to test() and verify that the test passes normally
    
    test('Net Banking Payment', async()=>{
    console.log('UPI Payment')
    expect(200).toBe(200)
    })
})

//===========================================================================

//test.slow() ==> is used when a test case needs more execution time than usual.

//It increase that test timeout to 3 times the default timeout

test.describe('Online Shopping Application', ()=>{
    

    test.beforeEach(async({page})=>{
        await page.goto("https://www.amazon.in/")
    })

    test('Test 1 - Title Test', async({page})=>{
        await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })
    test('Test 2 - URL Test', async({page})=>{
        await expect(page).toHaveURL('https://www.amazon.in/')
    })
    test('Test 3 - Element Test', async({page})=>{
        await expect(page.locator('input#twotabsearchtextbox')).toBeVisible()
    })
    test('Test 3 - Generate Report', async({page})=>{
        
        test.slow()

        console.log("Report Generation Started")
        await page.waitForTimeout(4000)
        console.log("Report Generation Completed")

        expect(200).toBe(200)

    })
})

//===========================================================================

//test.step() ==> is used to divide a single test case into multiple smaller, meaningful steps

//Example

//Login Process has 4 steps:
//1. Open the application
//2. Enter Username
//3. Enter Password
//4. Click Login and 
//5. Verify the dashboard

//It rprovides step-level reporting and better debugging visiblity

test.describe('Orange HRM', ()=>{
    test('Orange HRM Login Test', async({page})=>{
        await test.step('Step - 1 - Open Application', async()=>{
          await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
        })
        await test.step('Step - 2 - Enter Username', async()=>{
          await page.locator('[name="username"]').fill('Admin')
        })
        await test.step('Step - 3 - Enter Password', async()=>{
          await page.locator('[name="password"]').fill('admin123')
        })
        await test.step('Step - 4 - Click Login', async()=>{
          await page.locator('button').click()
        })
        await test.step('Step - 5 - Verify the Dashboard', async()=>{
          await expect(page).toHaveURL(/dashboard/)
        })
    })
})

//==========================================================================

//test.use() ==> is used to configure test fixtures and set common browser or page settings seperately in every test

//Browser: Chromium
//Viewport: 1280 X 720
//Screenshot: 
//Video: 

test.use({
        viewport: { width: 500, height: 220 },
        colorScheme:'dark',
        screenshot: 'on',
        video: 'on'
    })

test.describe('New Application', ()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://www.amazon.in/")
    })

    test('Title Test', async({page})=>{
        await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    })
    test('URL Test', async({page})=>{
        await expect(page).toHaveURL('https://www.amazon.in/')
    })
    test('Element Test', async({page})=>{
        await expect(page.locator('input#twotabsearchtextbox')).toBeVisible()
    })
    test('Generate Report', async({page})=>{
        console.log("Report Generation Started")
        await page.waitForTimeout(4000)
        console.log("Report Generation Completed")

        expect(200).toBe(200)

    })
})


test.describe('Desktop Testing', () => {

    test.use({
        viewport: { width: 200, height: 100 }
    });

    test('Desktop Login Test', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        console.log('Desktop Login');

    });

    test('Desktop Home Page Test', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        console.log('Desktop Home Page');

    });

});

//test.describe.configure()
//test.describe.only() ==> execute only particular Group
//test.describe.skip() ==> Skip the particular test group

//test.fixme() ==> Do not execute the test because it needs fixing

//test.setTimeout(120000)