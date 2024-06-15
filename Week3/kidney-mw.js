const express = require("express");
const app = express();

/* 
function userMiddleWare(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "omkumar" && password != "pass") {
        res.status(404).send("User not found!");
        return;
    } else {
        next();
    }
};

// The middleware checks the user credentials, and we know no matter what our motive is the user credentials always must be verified. So, we will use the middleware in every request and we will make it a global middleware using app.get()
app.use(userMiddleWare); 
*/
// Global middleware to validate user credentials
app.use((req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username !== "omkumar" || password !== "pass") {
        res.status(404).send("User not found!");
        return;
    }
    next();
});

// we will define another global middleware that will calculate the total number of requests coming from user
let requestCounts = {};
app.use((req, res, next) => {
    const path = req.path;
    requestCounts[path] = (requestCounts[path] || 0) + 1;
    let totalRequests = Object.values(requestCounts).reduce((a, b) => a + b);
    console.log('\r' + "Total Requests:", totalRequests);
    next();
});

let elapsedTime = [];
app.use((req, res, next) => {
    const startTime = new Date().getTime();

    res.on("finish", () => {
        const endTime = new Date().getTime();
         elapsedTime.push((endTime - startTime));
    });

    next();
});

// Middleware to log the average response time
app.use((req, res, next) => {
    if (elapsedTime.length == 0) {
        console.log('\r' + "Average Response Time: 0 milliseconds");
        next();
    }
    const avgResponseTime = elapsedTime.reduce((a, b) => a + b, 0) / (elapsedTime.length || 1);
    console.log('\r' + "Average Response Time: " + avgResponseTime + " milliseconds");
    next();
});

// Middleware to validate kidney ID
function kidneyMiddleWare(req, res, next) {
    const kidneyId = parseInt(req.query.id, 10);
    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(403).send("Invalid Id!")
    } else {
        next();
    }
}

app.get('/health-checkup', kidneyMiddleWare, (req, res) => {
    const kidneyId = parseInt(req.query.id, 10);
    
    if (kidneyId === 1) {
        res.status(200).send("Your left kidney is healthy!");
    } else if (kidneyId === 2) {
        res.status(200).send("Your right kidney is healthy!");
    } else {
        res.status(400).send("Invalid kidney ID");
    }
});

app.get('/kidney-replace', kidneyMiddleWare, (req, res) => {
    res.send("Your kidney has to be replaced");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
