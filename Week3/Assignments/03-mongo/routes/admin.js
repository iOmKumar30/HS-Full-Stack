const express = require("express");
const app = express();
app.use(express.json());
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");

// Admin Routes
app.post("/signup", async (req, res) => {
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

app.post("/courses", adminMiddleware, async (req, res) => {
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

app.get("/courses", adminMiddleware, (req, res) => {
  const allCourses = Course.find({});
  res.json({
    courses: allCourses,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
