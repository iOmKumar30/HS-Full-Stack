const { User } = require("../db");
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username: username,
    password: password,
  })
    .then(function (value) {
      if (value) {
        next();
      } else {
        res.status(403).json({
          msg: "User doesnt exist",
        });
      }
    })
    .catch((err) => {
      console.error("Error checking user existence:", err);
      res.status(500).json({
        msg: "Internal server error",
      });
    });
}

module.exports = userMiddleware;
