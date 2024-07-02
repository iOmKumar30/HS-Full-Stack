const express = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");
const router = express.Router();

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

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  const course = await Course.findById(courseId);
  if (!course) {
    return res.status(404).json({
      message: "Course not found",
    });
  }

  // Update the user's purchasedCourses array with the full course object
  await User.updateOne(
    { username: username },
    {
      $push: { purchasedCourses: course },
    }
  );

  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers.username;
  const user = await User.findOne({ username: username });

  res.json({
    purchasedCourses: user.purchasedCourses,
  });
});

module.exports = router;
