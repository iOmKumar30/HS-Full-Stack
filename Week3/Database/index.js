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

async function userExists(username, password) {
  try {
    const user = await User.findOne({ username: username, password: password });
    return !!user; // Returns true if user exists, false if user is null (not found) converts object to boolean
  } catch (err) {
    console.error("Error checking user existence:", err);
    return false; // Return false in case of an error
  }
}

app.post("/signin", async function (req, res) {
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

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const allUsers = await User.find(); // Fetch all users from MongoDB
    
    res.json({
        users: allUsers.filter(user => user.username !== username)
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
