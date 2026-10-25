//Playwright one of the feature Auto wait

//that automatically waits for web element to become ready before erforming an action

// auto-wait (30 seconds --> 30000 millisecond)

//timeout issue when element not found over 30 seconds

import { test } from '@playwright/test'

test('Waits', async({page})=>{
    await page.goto("https://www.amazon.in/", {waitUntil: 'domcontentloaded'})
    await page.locator('a#twotabsearchtextbox').fill("Laptop")
})

test('WaitFor', async({page})=>{
    await page.goto("https://www.amazon.in/")
    const searchBtn = page.locator('input#twotabsearchtextbox')
    await searchBtn.waitFor() //wait for an element default 30 seconds
    await searchBtn.waitFor({state: 'visible', timeout: 50000})  
}) 

test('WaitForSelector', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForSelector('input#twotabsearchtextbox', {state:'visible'})
    await page.locator('input#twotabsearchtextbox').click()
})

test('waitForURL', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('standard_user')
    await page.locator('#login-button').click()

    await page.waitForURL('https://www.saucedemo.com/inventory.html')    
    //await page.waitForURL(/inventory/)
    const currentUrl = page.url()
    console.log(currentUrl)
})
test('waitForLoadState', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('standard_user')
    await page.locator('#login-button').click()

    await page.waitForLoadState('domcontentloaded')
    const title = await page.locator('.title').textContent()
    console.log(title)

    await page.waitForLoadState('load')
    const title1 = await page.locator('.title').textContent()
    console.log(title1)

    await page.waitForLoadState('networkidle')
    const title2 = await page.locator('.title').textContent()
    console.log(title2)
})


test('Dom content loaded', async({page})=>{
    const startTime = Date.now()

    await page.goto("https://www.amazon.in/", {waitUntil: 'domcontentloaded'})
    const endTime = Date.now()

    console.log('DOM Loaded Time: ' , endTime - startTime)
}) //699

test('Load content loaded', async({page})=>{
    const startTime = Date.now()

    await page.goto("https://www.amazon.in/", {waitUntil: 'load'})
    const endTime = Date.now()

    console.log('DOM Loaded Time: ' , endTime - startTime)
}) //921

test('Networkidle content loaded', async({page})=>{
    const startTime = Date.now()

    await page.goto("https://www.amazon.in/", {waitUntil:'networkidle', timeout: 50000})
    const endTime = Date.now()

    console.log('DOM Loaded Time: ' , endTime - startTime)
}) 

test('waitForTimeOut', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('standard_user')
    await page.locator('#login-button').click()

    await page.waitForTimeout(3000)  //sleep mode

    const currentUrl = page.url()
    console.log(currentUrl)
})


//Auto-Wait

//Time out exceed issue:
//1. Wrong xpath or selector
//2. element load and visible more than 30 seconds (application slow)
//3. element present in iframe 
//4. Page not loaded fully
//5. Element exists in DOM not present in UI
//6. Dynamic Elements

/*
    1. is the selector correct?
    2. Is the element actually present?
    3. Is it visible?
    4. Is that element enabled/clickable?
    5. Is it inside an iframe?
    6. Is that application/API loading properly


1. waitFor() ==> Waits for a locator/elements to reach a specficed state (visible, hidden, attached, detached)
     States:
     1. visible ==> an element exists in the DOM and is visible to the user on the page/ui
     2. hidden  ==> an element present in DOM and user can't see
     3. attached ==> an element exists in the DOM (but the element may or may not visible to the user)
     4. detached ==> an element doesn't exists in the DOM (an element completely removed from DOM)
     
     visible != attached

     visible ==> spineer is displayed (Spinner exist in DOM)
     hidden ==> spineer invisible (Spinner exist in DOM)
     attached ==> spinner exists in the DOM, even if invisible
     detached ==> spinner has been removed frm the DOM

2.  waiForSelector()      
    Waits for an element matching a given selector to reach specfic state

waitFor() ==> Locator ==> I have a locator, playwright wait for that locator
waitForSelector() ==> Page ==> I give selector, playwright wait for it    


locator Vs selector

'#user-name'  => ID selector
'.login-button' => class name selector
'input[placeholder='login'] =>  attribute selecor
  //a[@id='login_text']   => xpath selector

locator

        const username = page.locator('#username')

page.locator('#username') ==> Creates Locator Object
username ==> Variable storing the Locator Obeject

A playwright object ==> locator


waitForUrl()
    Wait until expected URL reaches (30 seconds)
    Click --> url change --> wait until expected url --> continue  
    
waitForLoadState()
    It is used to wait until a particular page loading state reached before continue other next steps

    When we open a website, the page may still be loading. If our test performs an action too early, it may fail.

    load state 
    3 states of load (event)
    =================
    1. domcontentloaded ==> Wait until the HTML is parsed and DOM Created after that next step process
    2. load ==> wait until the page's load events occurs (all relvant resources to finish to loaded)
    3. networkIdle ==>

    DOM --> The Browser converts the HTML into tree of objects called DOM 

    domcontentloaded

    Browser Page (amozon)
        |
    HTML Recieved
        |
    HTML is Parsed
        |
    DOM is Created
        |
    Other Resources may still be loading


    Resources
    ==========
    HTML
    CSS
    Script
    Images
    Fonts
    Videos

    networkIdel
    ============

    Page Starts
        |
    HTML Request
    CSS Request
    JS Requset
    Product API
    Image Request
    Video Request
        |
    Network becomes idle
        |
    500 ms secs (networkIdle)

    HTML parsing is complete --> Product API request may still loading
    load --> The browser load event fired

    waitForTimeOut()
    waitForEvent()
    waitForRequest()
    waitForResponse
    */



