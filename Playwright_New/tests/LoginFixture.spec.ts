import { test as base } from '@playwright/test'
import { Page } from '@playwright/test'

type myFixture = {
    login: Page
}
export const test = base.extend<myFixture>({
    login: async({page}, use)=>{
        await page.goto("https://www.saucedemo.com/")
        await page.locator('#user-name').fill("standard_user")
        await page.locator('#password').fill("secret_sauce")
        await page.locator('#login-button').click()

        await use(page) //playwright make this page available to my test
    }
})

// type student = {
//     name: string
// }

//test ==> playwright's original test function
//base ==> another variable referring to the same function

//<> symbols used for typescript generics

// let student = {
//     name: "Bala",
//     greet: function(){

//     }
// }