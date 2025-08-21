//Exercise 1
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(`Exc1: ${car.year}`);
//Exercise 2
const person = {
  name: "Tuyet",
  address: {
    street: "Trung kinh",
    city: "hanoi",
    country: "vietnam",
  },
};
console.log(`Exc2: ${person.address.street}`);
//Exercise 3
const student = {
  name: "Tuyet",
  grades: {
    math: 9,
    english: 9.5,
  },
};
console.log(`Exc3: ${student[`grades`]["math"]}`);
//Exercise 4
const setting = {
  volume: 12,
  brightness: "light",
};
setting.volume = 15.9;
console.log("Exc4:", setting);
//Exercise 5
const bike = {
  high: 13.2,
  price: 150.0,
};
bike.color = "green";
console.log("Exc5:", bike);
//Exercise 6:
const employee = {
  name: "Tuyet",
  age: 30,
};
delete employee.age;
console.log("Exc6:", employee);
//Exercise 7:
const school = {
    'classA': ['An', 'Binh', 'Chau'],
    'classB': ['Dao', 'Huong', 'Giang']
}
console.log('Exc7:', school);