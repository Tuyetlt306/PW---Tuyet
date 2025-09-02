import {test} from '@playwright/test';  
test('exercise1', async({page}) => {
    await test.step('Navigate to Homepage', async() => {
        await page.goto('https://material.playwrightvn.com/index.html'); //go to page
        await page.click('//a[@href="01-xpath-register-page.html"]'); //click "Bài học 1:Register page"
 });
    await test.step('Fill infor', async () => {
        await page.locator('//input[@id="username"]').fill('Tuyet')
        await page.locator('//input[@id="email"]').fill('tuyetlt306@gmail.com')
        await page.locator('//input[@id="female"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.locator('//select[@id="interests"]').selectOption({value: "music"})
        await page.locator('//select[@id="country"]').selectOption({value: "australia"})
        await page.locator('//input[@id="dob"]').fill("1999-01-02");
        await page.locator('//input[@id="profile"]').setInputFiles('lesson-5/data-test.jpg');
        await page.locator('//textarea[@id="bio"]').fill("abc");
        await page.locator('//input[@id="rating"]').fill('5');
        await page.locator('//input[@id="favcolor"]').fill('#123456')
        await page.locator('//div[@class="tooltip"]').hover()
        await page.locator('//input[@id="newsletter"]').check();
        await page.locator('//span[@class="slider round"]').check();
        //await page.locator('//div[@class="rating-star"]').fill('5');
        //await page.locator('//input[@id="customDate"]').fill('1999-12-12');
        await page.locator('//button[@type="submit"]').click();  
   });

})