const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// let's understand why the readFile() method is asynchronous.
console.log("Hello World");
// Ideally the "Hello World" should be printed at the last line of the code.
// But it's not the case, because the readFile() method takes some time to execute and because it is an synchronous method, the rest of the code will not wait until the readFile() is completed and hence it will print "Hello World" before the file has been read.

// one more example to see why readFile() is an asynchronous Javascript function
console.log(a);

fs.readFile("a.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log("Data successfully read from the file.");
  console.log(data);
});
let ans = 0;
for (let i = 0; i <= 10; i++) {
  ans += i;
}
console.log(ans);
