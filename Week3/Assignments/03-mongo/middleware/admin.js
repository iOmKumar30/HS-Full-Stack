const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin doesn't exist",
      });
    }
  } catch (err) {
    console.error("Error checking admin existence:", err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
}

module.exports = adminMiddleware;
