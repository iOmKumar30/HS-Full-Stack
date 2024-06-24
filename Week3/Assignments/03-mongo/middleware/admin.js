const { Admin } = require("../db");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  Admin.findOne(username, password)
    .then(function (value) {
      if (value) {
        next();
      } else {
        res.status(403).json({
          msg: "Admin doesnt exist",
        });
      }
    })
    .catch(function (err) {
      console.error("Error checking admin existence:", err);
      res.status(500).json({
        msg: "Internal server error",
      });
    });
}

module.exports = adminMiddleware;
