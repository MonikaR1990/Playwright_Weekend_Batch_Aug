import { test as base } from '@playwright/test'
import { Page } from '@playwright/test'

type mySerachFixture = {
    search: Page
}

export const test = base.extend<mySerachFixture>({
    search: async({page}, use)=>{
        await page.goto("https://www.amazon.in/")
        await page.locator('input#twotabsearchtextbox').fill("Laptop")
        await page.locator('input#twotabsearchtextbox').press('Enter')

        await use(page)
    }
})