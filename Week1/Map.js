//Map is a higher order function in javascript
// higher order functions are functions that take one or more functions as arguments or return a function
// What does Map do?
// Map is used to transform one array into another array

//example

const arr = [5, 2, 3, 1, 6, 4];

const double = arr.map(function (num) {
  return num * 2;
});
console.log("Double:", double);

const triple = arr.map((num) => num * 3);
console.log("Triple:", triple);

const binary = arr.map((num) => num.toString(2));
console.log("Binary:", binary);

const users = [
  { firstname: "Om", lastname: "rath", age: 19 },
  { firstname: "Sarah", lastname: "jones", age: 20 },
  { firstname: "Jane", lastname: "hill", age: 34 },
  { firstname: "John", lastname: "abraham", age: 35 },
];
// our task is to get a list of full names of all the users
const fullnames = users.map(function(user){
    return user.firstname + " " + user.lastname;
})
console.log(fullnames);