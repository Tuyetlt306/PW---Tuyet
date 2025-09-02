# 1. DOM: Document object model
## Opening tag:
```js 
<option value = "usa">
```
## Closing tag:
```js 
</option>
```
## Self-closing tag:
Normally use for elements do not have content. Ex: image, line break, or input fields
```js
<img src="image.jpg" alt="image description" />
<br> => normally is line break
```
# 2. Selector: (XPath selector)
- XPath = XML path
## Absolute XPath:
Start with /
Ex: /html/body/div/p
## Relative XPath:
Start with //
Ex: //div[@id='parent']
can use '' or ""
# 3. Playwright basic syntax:
## test
```js
import {test} from '@playright/test';
test('testname', async ({
page }) => { 
    //code
    });
```
## step
```js
await test.step("StepName", async() => {
    //code
});
```
### Basic actions:
#### Navigate
```js
await page.goto('https://example.com'); 
```
#### Click
##### Single click
```js
await page.locator('//button').click();
```
##### Double click
```js
await page.locator('//button').dblclick();
```
##### Right click
```js
await page.locator('//button').click({ button: 'right' });
```
##### Click + modifier keys
```js
await page.locator('').click({ modifiers: ['Control'] }); // Ctrl + Click
```
#### Input
```js
await page.locator('//input').fill('abc');   // nhập text
await page.locator('//input').pressSequentially('abc',{
delay: 100,
});   // nhập text (giống fill nhưng mô phỏng gõ phím)
```
#### Radio button/ Checkbox
- Test giá trị hiện tại đang check hay không
```js
const isChecked =
page.locator('//input').isChecked();
```
- Execute action Check/Uncheck
```js
page.locator('//input').check();  // tự động chọn checked
page.locator('//input').setChecked(false) //setChecked có thể chỉ định trạng thái true (chọn) hoặc false(bỏ chọn)
```
#### Select option (Dropdown select)
```js
// chọn theo giá trị
await page.selectOption('#country', 'VN');

// chọn theo label (text hiển thị)
await page.selectOption('#country', { label: 'Vietnam' });

// chọn theo index
await page.selectOption('#country', { index: 2 });
```
