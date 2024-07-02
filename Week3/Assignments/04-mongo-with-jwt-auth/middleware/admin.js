const { Admin } = require("../db");
const jwt = require("jsonwebtoken");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Access token missing" });
  }

  const token = authHeader.split(" ")[1];

  // this is one of the benifits of using JWT WEB TOKENS that we save a database call
  try {
    const decoded = jwt.verify(token, "secret");
    if (decoded.username) {
      req.adminId = decoded.adminId;
      next();
    }
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = adminMiddleware;
