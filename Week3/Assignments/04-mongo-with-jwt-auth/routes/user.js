const express = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await User.create({
    username,
    password,
    purchasedCourses: [], // Initialize with an empty array
  });
  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user || user.password !== password) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }

  const token = jwt.sign({ userId: user._id, username: username }, "secret", {
    expiresIn: "1h",
  });

  res.json({
    msg: "Login successful",
    token: token,
  });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const userId = req.userId;

  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  // Update the user's purchasedCourses array with the full course object
  await User.findByIdAndUpdate(
    userId,
    { $push: { purchasedCourses: course } },
    { new: true }
  );

  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (user.purchasedCourses.length === 0) {
    return res.status(404).json({
      message: "No courses purchased",
    });
  }
  res.json({
    purchasedCourses: user.purchasedCourses,
  });
});

module.exports = router;
