const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://iOmKumar03:OMiiest%40%4030@cluster0.hbkq4mo.mongodb.net/user_app?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;
  const u1 = new User({
    name: name,
    username: username,
    password: password,
  });

  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    res.status(400).send("Username already exists");
  } else {
    u1.save()
      .then(() => {
        console.log("User saved successfully");
        res.send("User saved successfully");
      })
      .catch((err) => {
        console.error("Error saving user", err);
        res.send("Error saving user", err);
      });
  }
});

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
