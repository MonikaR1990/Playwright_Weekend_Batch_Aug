import { test } from '@playwright/test'

test('Download File', async({page})=>{
    await page.goto("https://letcode.in/file")

    //Start listen/wait for the download event //a download event going to happen so listen for the download event
    const downloadPromise = page.waitForEvent('download')

    //Click the download button
    await page.locator('#xls').click()

    //Capture the download result
    const downloadFile = await downloadPromise

    //Save the download File
    await downloadFile.saveAs(`downloadedFiles/` + downloadFile.suggestedFilename())
    await downloadFile.saveAs(`newDownloadFiles/` + downloadFile.suggestedFilename()) 

    let fileName = downloadFile.suggestedFilename()

    await downloadFile.saveAs(`E:\\${fileName}`)

    await downloadFile.saveAs('E:\\My_Report.xlsx')

    console.log(downloadFile.url())

    const path = await downloadFile.path()
    console.log(path)
    
    await page.waitForTimeout(3000)
})

//Promise ==> A representation an asynchronous process that may take time to complete

//downloadPromise ==> store the promise (future result)

//downloadFile ==> downloadObject (contains the resolved result)