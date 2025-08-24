const numbers = [1, 2, 3];
const str = "Playwright";
const student = {
    "name": "Alex",
    "age": 10,
    "salary": 20
};
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//1.1. In từng phần tử numbers
numbers.forEach((value) => {console.log(value)});

//1.2
let sum = numbers.reduce((initial,value) => initial + value, 0);
console.log(`Sum of array numbers ${sum}`);  // Tính tổng
console.log(`Min of array numbers ${Math.min(...numbers)}`);
console.log(`Max of array numbers ${Math.max(...numbers)}`);
//1.3
let doubled = numbers.map(n => n*2);
console.log(doubled)
