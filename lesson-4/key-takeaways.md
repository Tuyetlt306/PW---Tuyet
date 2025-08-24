# Phạm vi của biến
- var: global
- let: scope
Ex:
console.log(a); // in ra: undefined (vì var hoisted)
var a = 5;

console.log(b); // báo lỗi (vì let chưa được khai báo)
let b = 10;

# Condition command:
## If...else
## If... else if...if
## switch...case....default

# Comparison:
- == và !=: so sánh lỏng lẻo
- === và !==: so sánh tuyệt đối

# Loops:
## for...in: trả về value/index
let arr = ["A", "B", "C"];
for (let i in arr) {
  console.log(i);       // i là index: 0, 1, 2
  console.log(arr[i]);  // giá trị: A, B, C
}
## forEach: callback mỗi phần tử của mảng
- Ex 1:
let arr = ["Tuyet", "Thao", "Yen"];

arr.forEach(function(value, index) {
  console.log(index, value);
});

// Output:
// 0 Tuyet
// 1 Thao
// 2 Yen
- Ex 2:
let numbers = [1, 2, 3, 4];

numbers.forEach(num => console.log(num * 2));

// Output:
// 2
// 4
// 6
// 8

## for...of: trả về value
let arr = ["A", "B", "C"];
for (let value of arr) {
  console.log(value); // A B C
}

let str = "Hello";
for (let char of str) {
  console.log(char); // H e l l o
}
## continue: 
- dùng trong (for)
- bỏ qua lần lặp hiện tại, chạy tiếp vòng sau 
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // bỏ qua khi i = 3
  }
  console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

## break: 
- dùng trong (for/switch)
- dừng luôn vòng lặp
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // dừng vòng lặp khi i = 3
  }
  console.log(i);
}

// Output:
// 1
// 2

# Util functions
## String util
### trim(): loại bỏ space ở đầu và cuối chuỗi 
let str = "   Hello World   ";
console.log(str.trim()); 
// "Hello World"

### toLowerCase() và toUpperCase(): chuyển thành chữ thường hoặc chữ hoa
let str = "K17 Challenge";
console.log(str.toLowerCase()); // "k17 challenge"
console.log(str.toUpperCase()); // "K17 CHALLENGE"

### includes(): trả về true/false, Checks whether a string contains a substring
### replace()
let str = "I love Java";
console.log(str.replace("Java", "JavaScript")); 
// "I love JavaScript"

### split(): cắt chuỗi thành mảng
let str = "A,B,C,D";
console.log(str.split(",")); 
// ["A", "B", "C", "D"]

let str2 = "Hello";
console.log(str2.split("")); 
// ["H","e","l","l","o"]

### substring(): lấy chuỗi con từ start đến end
let str = "JavaScript";
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4, 10)); // "Script"

### indexOf(): trả về vị trí đầu tiên của ký tự trong chuỗi
let str = "Hello World";
console.log(str.indexOf("World")); // 6
console.log(str.indexOf("o"));     // 4 (chữ "o" đầu tiên)
console.log(str.indexOf("Python")); // -1

## Array util
### map: create new array by applying a function to each element
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

### filter: create new array containing only elements that match a condition
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

### find: return the 1st element that matches a condition
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2

### reduce: gộp array thành 1 giá trị
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, value) => acc + value, 0);

console.log(sum); // 10


### some: returns true if at least 1 element matches a condition
let numbers = [1, 3, 5, 7];
console.log(numbers.some(n => n % 2 === 0)); // false

### every: return true if all elements match a condition
let numbers = [2, 4, 6];
console.log(numbers.every(n => n % 2 === 0)); // true

### push: add one or more elements to the end of array
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]

### shift: remove 1st element of array and returns it
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first); // 1
console.log(arr);   // [2, 3]

### sort: should apply in number, in string it follows ASCII
let number = [3, 5, 1, 4]
number.sort((a,b) => a - b);
console.log(number) // [1,3,4,5] 