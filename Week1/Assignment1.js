//counter that counts from n to 0 second by second
function countDown(n) {
  const interval = setInterval(() => {
    console.log(n);
    n--;
    if (n < 0) {
      clearInterval(interval);
    }
  }, 1000);
}
countDown(5);

//calculate the time it takes between a setTimeout call and the inner function actually running
function measureTimeout(callback) {
  const start = performance.now();
  setTimeout(() => {
    const end = performance.now();
    const elapsedTime = end - start;
    callback(elapsedTime);
  }, 0);
}

// Example usage:
measureTimeout((time) => {
  console.log(`Time elapsed: ${time} milliseconds`);
});
