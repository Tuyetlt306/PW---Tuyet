import {test} from '@playwright/test';
test ('exercise2', async({page}) => {
    await test.step('Navigate Product page', async() => {
        await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html')
    });
    await test.step('Add 2 product1 to cart', async() => {
        await page.locator('//button[@data-product-id="1"]').click()
        await page.locator('//button[@data-product-id="1"]').click()
    });
    await test.step('Add 3 product2 to cart', async() => {
        await page.locator('//button[@data-product-id="2"]').click()
        await page.locator('//button[@data-product-id="2"]').click()
        await page.locator('//button[@data-product-id="2"]').click()
    });
    await test.step('Add 1 product3 to cart', async() => {
        await page.locator('//button[@data-product-id="3"]').click()
    });
}) ;
