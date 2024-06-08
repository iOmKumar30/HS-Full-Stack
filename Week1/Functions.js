function findSum(a, b) {
  let result = a + b;
  displayResult(result); // this change we have to make
  return result;
}

function displayResult(data) {
  console.log("Result of findSum is : " + data);
}

function displayResultPassive(data) {
  console.log("findSum's result is  : " + data);
}

// You are only allowed to call one function, how will you displayResult of a sum
// we can simply call one function i.e. the findSum function as shown below
const ans = findSum(3, 5);
// Cool, now you are asked to make a change in such a way that you are not allowed to change the functions, but you have to display the reuslt in passive form.
// what we can do is we can pass a function as an argument to another function, and then call that function inside the displayResult function as shown below
function findMultiplication(a, b, callback) {
  let result = a * b;
  callback(result);
}
findMultiplication(3, 5, displayResultPassive);
findMultiplication(3, 5, displayResult);

function calculate(a, b, operation) {
  if (operation == "sum") {
    return a + b;
  }
  if (operation == "multiply") {
    return a * b;
  }
  if (operation == "divide") {
    return a / b;
  }
  if (operation == "minus") {
    return a - b;
  }
}
console.log(calculate(3, 5, "sum"));
console.log(calculate(3, 5, "multiply"));
console.log(calculate(3, 5, "divide"));
console.log(calculate(5, 3, "minus"));

//one more example of callback function
function greet() {
  console.log("Hello, how are you?");
}
setTimeout(greet, 3 * 1000);
// in the above the greet function will be executed after 3 seconds
