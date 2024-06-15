// Now we will introduce a new term async/await
// It means that we can use the async keyword in front of a function that returns a Promise and we can use the await keyword in front of a function that returns a Promise to wait for the Promise to be resolved

async function asyncFunction() {
  var p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hello from asynchronous function");
    }, 3000);
  });
  return p;
}

async function main() {

    
  let data = await asyncFunction();
    console.log("from main");
    console.log(data);
}
main();
