const users = [
  {
    firstName: "Om",
    gender: "male",
    age: 19,
  },
  {
    firstName: "Sarah",
    gender: "female",
    age: 20,
    metadata: {
      foodChoice: "Non-Veg",
      favColor: "Blue",
    },
  },
  {
    firstName: "Jane",
    gender: "female",
    age: 34,
  },
];
for (let i = 0; i < users.length; i++) {
  if (users[i].gender == "female") {
    console.log(users[i].firstName);
  }
}
console.log(users[1].metadata.favColor);
