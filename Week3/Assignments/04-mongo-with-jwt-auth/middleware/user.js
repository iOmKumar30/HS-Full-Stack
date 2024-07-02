const { User } = require("../db");
const jwt = require("jsonwebtoken");
async function userMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Access token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secret");
    if (decoded.username) {
      req.userId = decoded.userId; // Attach the user ID to the request object
      next();
    }
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = userMiddleware;
