// here we will create a simple server to handle kidney health checkups
const express = require("express");
const  app = express();

app.get('/health-checkup', function (req, res) {
    // we will do the pre-checks here
    const kidneyId = req.query.id;
    const username = req.headers.username;
    const password = req.headers.password;

    // if the user is not found, return a 404 error
    if (username != 'iomkumar' || password != "pass") {
        res.status(404).json({
            msg: "User not found!",
        });
        return;
    }

    // if the kidney id is not 1 or 2, return a 411 error
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Invalid Id!",
        });
        return;
    }
    // if the kidney id is 1, return a success message
    if (kidneyId == 1) {
        res.status(200).json({
            msg: "Your left kidney is healthy!",
        });
        return;
    }
    // if the kidney id is 2, return a success message
    if (kidneyId == 2) {
        res.status(200).json({
            msg: "Your right kidney is healthy!",
        });
        return;
    }
});

app.put('/kidney-replace', function (req, res) {
    // we will do the pre-checks here
    const kidneyId = req.query.id;
    const username = req.headers.username;
    const password = req.headers.password;

    // if the user is not found, return a 404 error
    if (username != 'iomkumar' || password != "pass") {
        res.status(404).json({
            msg: "User not found!",
        });
        return;
    }

    // if the kidney id is not 1 or 2, return a 411 error
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Invalid Id!",
        });
        return;
    }
    // if the kidney id is 1, return a success message
    if (kidneyId == 1) {
        res.status(200).json({
            msg: "Your left kidney is healthy!",
        });
        return;
    }
    // if the kidney id is 2, return a success message
    if (kidneyId == 2) {
        res.status(200).json({
            msg: "Your right kidney is healthy!",
        });
        return;
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// Test :  curl -X GET 'http://localhost:3000/health-checkup?id=1' -H 'username: iomkumar' -H 'password: pass'

// The above code violates the DRY principle as we are writing the same code multiple times. We can refactor it as follows
// To optimize it we use middlewares
/*
Middleware is software that acts as a bridge between applications, tools, and databases, allowing them to communicate and integrate seamlessly into a single system. It can also help manage data, provide application services, and handle messaging, authentication, and application programming interfaces (APIs). 

Lets see in the kidney-mw.js file that how we can do it optimally
*/