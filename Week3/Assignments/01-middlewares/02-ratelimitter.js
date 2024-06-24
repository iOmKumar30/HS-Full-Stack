const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

// Set up the rate limiter
const limiter = rateLimit({
  windowMs: 5000, // 3 seconds
  max: 5, // Limit each user to 5 requests per `windowMs`
  keyGenerator: (req) => req.headers["user-id"], // Use user-id as the key
  handler: (req, res) => {
    res.status(404).send("no entry");
  },
});

// Apply the rate limiter to all requests
app.use(limiter);

app.get("/user", function (req, res) {
  const userId = req.headers["user-id"];
  res.status(200).json({ name: "john", user: userId });
});

app.post("/user", function (req, res) {
  const userId = req.headers["user-id"];
  res.status(200).json({ msg: "created dummy user", user: userId });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

module.exports = app;

/*
My implementation:
let numberOfRequestsForUser = {};

setInterval(() => {
  numberOfRequestsForUser = {};
}, 3000); // Clear every 3 seconds

app.use(function (req, res, next) {
  const userId = req.headers["user-id"];
  
  if (!userId) {
    return res.status(400).send("User ID is required");
  }

  if (numberOfRequestsForUser[userId]) {
    if (numberOfRequestsForUser[userId] > 5) {
      return res.status(404).send("no entry");
    } else {
      numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
});


*/
