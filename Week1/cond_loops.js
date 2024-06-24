let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
let ans = 0;
for (let i = 0; i <= 100; i++) {
  console.log(i);
  ans += i;
}
console.log(ans);
let ages = [15, 30, 18, 42, 13];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are not an adult.");
  }
}
let max = 0;
for (let i = 0; i < ages.length; i++) {
  if (ages[i] > max) {
    max = ages[i];
  }
}
console.log(max);
