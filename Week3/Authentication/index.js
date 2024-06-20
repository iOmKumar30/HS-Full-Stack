/**
    Create a website with two endpoints:

    POST /signin
    GET /users
    The POST /signin endpoint should authenticate a user and return a JWT token.
    The GET /users endpoint should return all users in the database, but only if the request is authenticated with a valid JWT token.
    
    The website should use JWT (JSON Web Token) authentication.
    The request body for POST /signin should include:
    username: string
    password: string
   
    If the user is not signed in (token is incorrect), the GET /users endpoint should return a 403 status code.
**/

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  let ans = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      ans = true;
    }
  }
  return ans;
}
/*
    inbuilt function for above logic:
    function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}
*/

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
      res.json({
          users: ALL_USERS.filter(user => user.username !== username)
      });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
