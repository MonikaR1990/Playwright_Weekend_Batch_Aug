import { test } from '../tests/SearchFixture.spec'
import { expect } from '@playwright/test'

test('Verify Amazon Search Result by URL', async({search})=>{ 
    await expect(search).toHaveURL(/Laptop/)
})

test('Verify Amazon Search by Title', async({search})=>{ 
    await expect(search).toHaveTitle('Amazon.in : Laptop')
})

test('Verify Amazon Search by Element', async({search})=>{ 
    const searchText = search.locator('.a-color-state a-text-bold')
    await expect(searchText).toHaveText('"Laptop"')
})
