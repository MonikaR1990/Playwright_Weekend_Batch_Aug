//Xpath

import { test } from '@playwright/test'

test('Xpath', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Laptop")
    await page.locator("//input[@id='twotabsearchtextbox'][@placeholder='Search Amazon.in']").fill("Laptop")

    await page.locator("//input[@id='twotabsearchtextbox' and @placeholder='Search Amazon.in']").click()
    await page.locator("//input[@id='twotabsearchtextbox' or @placeholder='Search Amazon.in']").click()

    await page.locator("//input[contains(@id,name)]").click()
    ////a[contains(@href, 'automation-form.html')]
    await page.locator("//input[starts-with(@id,name)]").click()
    
    await page.locator("//a[text()='Data Entry Form']").click()
    await page.locator("//a[contains(text(), 'Entry')]").click()
    await page.locator("//a[starts-with(text(), 'Data')]").click()


    await page.locator("//option[text()='Baby']/parent::select").click()
    await page.locator('//select[@id="searchDropdownBox"]/child::option[10]').click()

    await page.locator('//select[@id="searchDropdownBox"]/ancestor::form').click()

    
})

//1. Single Attribute ==> //tagname[@attribute='attribute value']
//2. Multiple Attribute ==>//tagname[@attribute='attribute value'][@attribute='attribute value']
//3. and / or ==>  //tagname[@attribute='attribute value' and @attribute='attribute value']
                   // //tagname[@attribute='attribute value' or @attribute='attribute value']
//4. contains ==> //tagname[contains(@attribute,'attribute partial value')]
//5. starts-with==> //tagname[starts-with(@attribute,'attribute partial value')]
//6. ends-with ==> no
//7. Exact Visible Text ==> //tagname[text()='exact visible text']
//8. text contains ==> //tagname[contains(text(),'text value partial')]
//9. text startswith ==> //tagname[contains(text(),'text value partial')]

//10. Find the parent using child ==> //option[text()='Baby']/parent::select
//11. Find the child using parent ==> //select[@id="searchDropdownBox"]/child::option[10]

//12. Find the ancestor(Grand Parent) using Grand Child(Descendant) ==> //select[@id="searchDropdownBox"]/ancestor::form
//13. Find the Descendant(Garnd Child) using ancestor(Grand Parent) ==> //form[@name="site-search"]/descendant::select

//14. Find following all family matching elements ==> //label[@for="twotabsearchtextbox"]/following::input
//15. Find following own sibling matching elements ==> //label[@for="twotabsearchtextbox"]/following-sibling::input

//16. Find preceding all family matching elements ==> //label[@for="twotabsearchtextbox"]/preceding::input
//17. Find preceding own family  matching siblings elements ==> //label[@for="twotabsearchtextbox"]/preceding-sibling::input