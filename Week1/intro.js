// there are basically three ways to declare a variable in JavaScript i.e. using "let", "var", "const", "let" declares a variable that can be changed, "var" declares a variable that can be changed, "const" declares a variable that cannot be changed.
var a = 2;
console.log(a);
a = 4;
console.log(a);
a = "Om kumar rath"; // we can change the type of the variable in runtime
console.log(a);

let b = 2;
console.log(b);
b = 4;
console.log(b);
b = "Om kumar rath"; // we can change the type of the variable in runtime
console.log(a);

const c = 2;
console.log(c);
// c = 4 ; we cannot change the value of the constant variable, hence this will give an error
console.log(c);

// datatypes in JavaScript
let firstName = "Om kumar rath";
let age = 19;
let isStudent = true;
console.log(
  "The name of this person is " +
    firstName +
    " and his age is " +
    age +
    " and he is a student " +
    isStudent
);
