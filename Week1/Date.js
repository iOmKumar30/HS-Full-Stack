const currentDate = new Date();
console.log("Date:", currentDate.getDate());
console.log("Month:", currentDate.getMonth());
console.log("Year:", currentDate.getFullYear());
console.log("Full Date:", currentDate);
console.log("Time:", currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
function currentTimePrint() {
    const date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
setInterval(currentTimePrint, 1000);