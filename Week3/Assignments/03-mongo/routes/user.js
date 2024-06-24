const express = require("express");
const app = express();
app.use(express.json())
const userMiddleware = require("../middleware/user");

// User Routes
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
  });
});

app.get("/courses", async (req, res) => {
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

app.post("/courses/:courseId", userMiddleware, (req, res) => {
  const courseId = req.params.courseId;
  // find the username to add the purchased course to the user
  const username = req.headers.username;

  User.updateOne(
    { username: username },
    { $push: { purchasedCourses: courseId } }
  );
  res.json({
    message: "Course purchased successfully",
  });
});

app.get("/purchasedCourses", userMiddleware, (req, res) => {
  const username = req.headers.username;

  User.findOne({ username: username }).then((user) => {
    res.json({
      purchasedCourses: user.purchasedCourses,
    });
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
