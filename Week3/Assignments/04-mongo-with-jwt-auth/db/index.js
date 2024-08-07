const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://iOmKumar03:OMiiest%40%4030@cluster0.hbkq4mo.mongodb.net/course_app?retryWrites=true&w=majority"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: Object, // Change this to store full objects
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
