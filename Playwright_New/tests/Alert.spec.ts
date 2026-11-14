import { test } from '@playwright/test'

test('Dialog Box Accept', async({ page })=>{ 
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog=>{    //listen the dialog event
        await page.waitForTimeout(3000)
        console.log(dialog.message())
        await dialog.accept()   //OK
    })

    await page.locator('#accept').click()
})

test('Dialog Box Dismiss', async({ page })=>{ 
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(3000)
        await dialog.dismiss()    //CANCEL
        console.log(dialog.message())
    })

    await page.locator('#confirm').click()
})


test('Dialog Box Prompt', async({ page })=>{ 
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(3000)
        await dialog.accept("Monika")   
        console.log(await page.locator('#myName').textContent())
    })

    await page.locator('#prompt').click()
    
})


//dialog --> event

//accept
//dismiss
//message
//accept("Prompt")

/*
    Page Open
        |
    Register Alert Handler (page.on())
        |
    Alert Trigger (click button)
        |
]   Handler catches the Alerts (dailogs)
        |
    Accept / Dismiss
*/

//Event - something happens