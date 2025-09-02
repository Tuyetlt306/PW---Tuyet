import { test } from "@playwright/test";
test("exercise3", async ({ page }) => {
  await test.step("Go to page", async () => {
    await page.goto(
      "https://material.playwrightvn.com/03-xpath-todo-list.html"
    );
  });
  await test.step("add 100 items", async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`); //input text
      await page.locator('//button[@id="add-task"]').click(); //click button add
    }
  });
  await test.step("delete todo has odd number", async() =>{
    for (let i=1; i<=100; i++){
        if(i%2===1){
   await page.locator(`//li[span[normalize-space(text())="Todo ${i}"]]//button[normalize-space(text())="Delete"]`).click()
    
}}})
})
