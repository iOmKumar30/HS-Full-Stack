// here we will learn to create our own http server
const express = require("express");
const port = 3000; // we can either specify the port directly or we can export an enviornment variable using process.env.PORT and from terminal we will give the command set "PORT=3005" or "$env:PORT=3005" as shown below
// to check the currently set port use the command "$env:PORT"
const port2 = process.env.PORT;
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  // req: request and res: response
  //const msg = req.body.message;
  // another way to sent mesage is through query parameters
  const msg = req.query.message;
  console.log(msg);
  res.json({
    output: "2 + 2 = 4",
  });
});

app.get("/", (req, res) => {
  res.send("<b>Hello World!</b><br>");
});

app.listen(port2, () => {
  console.log(`Server is running on port ${port2}`);
});
