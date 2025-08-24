const { createDiffieHellmanGroup } = require("node:crypto");

const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
//2.1 In từng ký tự của str
for (let char of str) {console.log(char)};
//2.2. Tạo mảng đảo ngược
console.log(str.split("").reverse())
//2.3. 
console.log(str.substring(0,1)) // In vị trí đầu tiên của str
console.log(str[str.length - 1]); // In vị trí cuối của str)
//2.4
function uniqueChar(a){
    return a.filter(n => a.indexOf(n) === a.lastIndexOf(n))
}
console.log(uniqueChar(dupArr))
