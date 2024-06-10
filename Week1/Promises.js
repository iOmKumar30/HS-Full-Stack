/*
How can we create an asynchronous function in JavaScript?
We can use the Promise object.
But first we have will create asynchronous function without the use of Promise.
*/
const fs = require("fs");

function omReadFile(callback) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    callback(data);
  });
}
function onDone(data) {
  console.log(data);
}

omReadFile(onDone);

/*
Now we can do the above function in asynchronous way using Promise.
*/

// own asynchronous function
function littleReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

// littleReadFile() returns a Promise

//callback function to call
function onDone(data) {
  console.log(data);
}

// calling the asynchronous function
littleReadFile().then(onDone);

// Promise is a class and hence we can initiate an object of it
const promise = new Promise(function (resolve) {
  resolve("Hello");
});

// Logging the Promise object itself instead of just the data resolved with
promise.then(function () {
  console.log(promise);
});

//Actually logging the data with what the function above resolved with
promise.then(function (data) {
  console.log(data);
});

// let's see one more example of Promise
// we will create a function that returns a Promise

function asyncFunction() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 3000, "Hello from asynchronous function");
  });
}

asyncFunction().then(function (data) {
  console.log(data);
});

// the above without using Promise by simply wrapping the setTimeout inside a function
function asyncFunction2(callback) {
    setTimeout(callback, 3000);
}
asyncFunction2(callback => {
  console.log("Hello from asynchronous function2 without using Promise");
});

// Now we will introduce a new term async/await
// It means that we can use the async keyword in front of a function that returns a Promise and we can use the await keyword in front of a function that returns a Promise to wait for the Promise to be resolved

async function main() {
  const data = await asyncFunction();
  console.log(data);
}