//Interactions

import { test } from '@playwright/test'

test('Interactions', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/") 

    //1. fill() ==> Type the text (textbox, searchox, combobox)
    await page.locator("#name").fill("Balaji")
    await page.locator('#name').fill("Balaji")
    await page.fill('#name', "Balaji")

    //2. pressSequentially() ==> Type character by character
    await page.locator("#email").pressSequentially("Kumaran")

    // //3. type() 
    // await page.locator('#phone').type("899867667")

    //4. click()  //button, radio, link, imglink
    await page.locator('.start').click()
    await page.click('.start')

    //5. clear() //clear text
    await page.locator('#textarea').fill("Chennai")
    await page.locator('#textarea').clear()

    //5. Radio (click & check)
    await page.locator('#male').click()
    await page.locator('#female').check()

    //6. Check Box (check)
    await page.locator('#sunday').check()
    await page.check('#tuesday')

    //7. Uncheck Box (uncheck)
    await page.locator('#sunday').uncheck()
    await page.uncheck('#tuesday')

    //8. Select
    await page.locator('#country').selectOption('germany') //select by value (value attrbute)
    await page.locator('#country').selectOption({label: 'France'}) //select by visisble text
    await page.locator('#country').selectOption({index: 4}) //sellect the value by index

    await page.locator('#colors').selectOption(['blue', 'green', 'yellow'])

    await page.locator('#colors').selectOption([{index: 3}, {index: 2}, {index: 1}])
    
    //await page.waitForTimeout(3000)

    //9. File Upload
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt')

    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data1.txt', 'E:\\Data.docx', 'E:\\book.pdf'])
    
    //10. mouse hover (move the mouse to the element)
    await page.getByText('Point Me').hover()

    //11. Double Click
    await page.getByText("Copy Text").dblclick()

    //12. Right Click
    await page.getByText("Copy Text").click() //left click
    await page.getByText("Copy Text").click({button:'right'})
    
    //13.Drag and Drop
    await page.dragAndDrop('#draggable', '#droppable')

    //14. focus()
    await page.locator('#Wikipedia1_wikipedia-search-input').focus()

    //15. press() - Keyboard button
    await page.locator('#Wikipedia1_wikipedia-search-input').fill("Selenium")
    //await page.locator('#Wikipedia1_wikipedia-search-input').press('Enter')
    await page.locator('#Wikipedia1_wikipedia-search-input').press('Tab')
    await page.locator('.wikipedia-search-button').press('Enter')  

    //16. Scroll
    await page.locator('//button[text()="Upload Multiple Files"]').scrollIntoViewIfNeeded()

    //17. Mouse (pixel based x axis and y axis)
    await page.mouse.wheel(0, 1000) //Scroll Down

    await page.mouse.wheel(0, -1000) //Scroll Up

    await page.mouse.wheel(1000, 0)  //Scroll Right

    await page.mouse.wheel(-1000, 0) //Scroll Left


    //18. Copy + Paste
    await page.locator('#name').press('Control+A')
    await page.locator('#name').press('Control+C')

    await page.locator('#textarea').clear()
    await page.locator('#textarea').press('Control+V')

    await page.waitForTimeout(5000) 

})