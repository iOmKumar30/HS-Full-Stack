// Filter function is used to filter an array based on some condition

// filter is used to create a new array from an existing array based on some condition

// filter function always returns  a boolean value that whether to include a particular element in the array or not

const arr = [5, 1, 3, 4, 2, 6, -4, -2, -3, -1];

// suppose we want to filter out even numbers from the array arr

const even = arr.filter((num) => num % 2 == 0);
console.log("Even:", even);

const numGreaterThanTwo = arr.filter((num) => num > 2);
console.log("Numbers greater than 2:", numGreaterThanTwo);

const users = [
  { firstname: "Om", lastname: "rath", age: 19 },
  { firstname: "Sarah", lastname: "jones", age: 20 },
  { firstname: "Jane", lastname: "hill", age: 20 },
  { firstname: "John", lastname: "abraham", age: 35 },
  { firstname: "Ali", lastname: "jones", age: 19 },
  { firstname: "Raj", lastname: "kumar", age: 20 },
  { firstname: "Emma", lastname: "Watson", age: 35 },
];
// our task is to get the first name of all the users whose age is less than 30
const output = users
  .filter(function (users) {
    return users.age < 30;
  })
  .map(function (users) {
    return users.firstname;
  });
console.log(output);
