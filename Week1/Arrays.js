// Arrays Handbook
// Arrays are used to store multiple values in a single variable
// Functions of Arrays: push(), pop(), shift(), unshift(), length, indexOf(), lastIndexOf(), slice(), splice(), concat(), join(), reverse(), sort(), etc

// Run each function to see the output, play and learn by doing.

let arr = [1, 2, 3, 4, 5];

// push
console.log("Original Array:", arr);
arr.push(6);
console.log("After push:", arr);
console.log("\n");
// pop
console.log("Original Array:", arr);
arr.pop();
console.log("After pop:", arr);
console.log("\n");

// shift is basically pop from the front
console.log("Original Array:", arr);
arr.shift();
console.log("After shift:", arr);
console.log("\n");

// unshift is basically push from the front
console.log("Original Array:", arr);
arr.unshift(1);
arr.unshift(0);
console.log("After unshift:", arr);
console.log("\n");

// length
console.log("Original Array:", arr);
console.log("Length:", arr.length);
console.log("\n");

// indexOf
console.log("Original Array:", arr);
console.log("Index of 1:", arr.indexOf(1));
console.log("\n");

// lastIndexOf
arr.push(1);
arr.push(1);
console.log("Original Array:", arr);
console.log("Last Index of 1:", arr.lastIndexOf(1));
console.log("\n");
arr.pop();
arr.pop();

// slice
console.log("Original Array:", arr);
console.log("After slice:", arr.slice(1, 3));
console.log("\n");

// splice: remove elements from an array and return them as a new array
console.log("Original Array:", arr);
console.log("After splice:", arr.splice(1, 3));
console.log("\n");

// concat
console.log("Original Array:", arr);
console.log("After concat:", arr.concat([6, 7, 8]));
console.log("\n");

// join : Adds all the elements of an array into a string, separated by the specified separator string.
console.log("Original Array:", arr);
console.log("After join:", arr.join(", "));
console.log("\n");

// reverse
console.log("Original Array:", arr);
console.log("After reverse:", arr.reverse());
console.log("\n");

// sort
let arr2 = [7, 3, 5, 1, 0, 2, 6, 4];
console.log("Original Array:", arr2);
console.log("After sort:", arr2.sort());
console.log("\n");

// forEach
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach((element) => {
  console.log(element);
});
console.log("\n");

// important: forEach is a callback function and this is how we can use it
function logItems(str) {
  console.log(str);
}
// the below works as follow:
// the arr3.forEach(logItems) will execute the logItems function for each element in the array
arr3.forEach(logItems);

// map : will cover later
