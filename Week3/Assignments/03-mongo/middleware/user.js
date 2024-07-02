const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const user = await User.findOne({ username, password });
    if (user) {
      next();
    } else {
      res.status(403).json({
        msg: "User doesn't exist",
      });
    }
  } catch (err) {
    console.error("Error checking user existence:", err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
}

module.exports = userMiddleware;
