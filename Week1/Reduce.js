// Reduce function is used to reduce an array to a single value for example if
// we have an array of numbers, we can reduce it to a single number by adding
// them up or any other operation

const arr = [9, 7, 3, 4, 2, -6, -4, -2, -3, -1];
const sum = arr.reduce(function (accumulator, currentValue) {
  accumulator = accumulator + currentValue;
  return accumulator;
}, 0);
console.log("Sum:", sum);

// Here, we are adding the accumulator (0) with the current value (9) and then adding that to the next value (7) and so on.

const maxValue = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, arr[0]);
console.log("Max:", maxValue);

const minValue = arr.reduce(function (acc, curr) {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
}, arr[0]);
console.log("Min:", minValue);

const users = [
  { firstname: "Om", lastname: "rath", age: 19 },
  { firstname: "Sarah", lastname: "jones", age: 20 },
  { firstname: "Jane", lastname: "hill", age: 20 },
  { firstname: "John", lastname: "abraham", age: 35 },
  { firstname: "Ali", lastname: "jones", age: 19 },
  { firstname: "Raj", lastname: "kumar", age: 20 },
  { firstname: "Emma", lastname: "Watson", age: 35 },
];
// out task is to get a list of all different types of ages and how many people have that age
// We will use the reduce function here because here we want to reduce our array to just one object

const uniqueAges = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log("UniqueAges:", uniqueAges);

// firstnames of users with age less than 30
const output = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstname);
    }
    return acc;
}, []); console.log("Age less than 30:", output);
