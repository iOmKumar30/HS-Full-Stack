/*
Using an 1 second up counter, create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/
// let current = 0;
// function counter() {
//   const interval = setInterval(() => { console.log(current++);
//   }, 1000);

// }
// counter();

// If you want to print the time to the console and update it in place (i.e., overwrite the previous time) without creating new lines every second, you can use carriage return (\r) to move the cursor back to the beginning of the line
function showTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  //process.stdout.write('\r' + time);: This prints the time to the console and uses \r (carriage return) to move the cursor back to the beginning of the line, so the next output overwrites the previous one.
  process.stdout.write('\r' + time);
  setTimeout(showTime, 1000);
}

showTime();

