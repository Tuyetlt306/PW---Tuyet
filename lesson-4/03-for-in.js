const student = {
  name: "Alex",
  age: 10,
  salary: 20,
};
//3.1
for (let i in student) {
  console.log(`Variable: ${i}, Value: ${student[i]}`);
}
//3.2
let sum = 0;
for (let i in student) {
  if (typeof student[i] == "number") {
    sum += student[i];
  }
}
console.log(sum);
//3.3
const varArray = [];
for (let i in student) {
  varArray.push(i);
}
console.log(varArray);
