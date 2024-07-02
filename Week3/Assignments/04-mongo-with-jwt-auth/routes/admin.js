const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const u1 = new Admin({
    username: username,
    password: password,
  });

  const existingUser = await Admin.findOne({ username: username });
  if (existingUser) {
    res.status(400).send("Username already exists");
  } else {
    u1.save()
      .then(() => {
        console.log("Admin saved successfully");
        res.send("Admin saved successfully");
      })
      .catch((err) => {
        console.error("Error saving Admin", err);
        res.send("Error saving Admin", err);
      });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(401).json({
      msg: "Invalid username or password",
    });
  }
  if (admin.password != password) {
    return res.status(401).json({
      msg: "Invalid password",
    });
  } else {
    const token = jwt.sign({ username: username }, "secret", {
      expiresIn: "1h",
    });
    res.json({
      msg: "Login successful",
      token: token,
    });
  }
});
router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body;
  const newCourse = await Course.create({
    title: title,
    description: description,
    imageLink: imageLink,
    price: price,
  });
  res.json({
    msg: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const allCourses = await Course.find({});
  res.json({
    courses: allCourses,
  });
});

module.exports = router;
