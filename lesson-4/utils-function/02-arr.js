const numbers = [1, 2, 3];
const names = ['Alice', 'Bob', 'Charlie'];
//1. Push: thêm vào cuối chuỗi
numbers.push(4);
console.log(numbers);
names.push("David");
console.log(names);

//2. Pop: loại bỏ phần tử cuối
numbers.pop();
console.log(numbers);

//3. Unshift: thêm element vào đầu chuỗi
let addFirst = numbers.unshift(0);
console.log(numbers);
let addName = names.unshift("David");
console.log(names);

//4. Shift: xoá 1st element of array
let delNumber = numbers.shift();
console.log(delNumber); 
console.log(numbers);
