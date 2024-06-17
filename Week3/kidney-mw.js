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
// Global middleware to validate user credentials: 
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
    const avgResponseTime = elapsedTime.reduce((a, b) => a + b, 0) / (elapsedTime.length);
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

app.use(express.json());
app.post('/get-report', function (req, res) {
    const kidney = req.body.kidney;

    if (!kidney || typeof kidney.length !== 'number') {
        return res.status(400).send("Invalid input");
    }

    const kidneyLength = kidney.length;

    if (kidneyLength > 3 && kidneyLength < 7) {
        res.send("You have " + kidneyLength + " inches Kidney and they are healthy.");
    } else {
        res.send("You have " + kidneyLength + " inches Kidney and they are not healthy. Get a checkup ASAP.");
    }
});
/* test POST request for above
curl -X POST http://localhost:3000/get-report \
     -H "Content-Type: application/json" \
     -H "username: omkumar" \
     -H "password: pass" \
     -d '{
           "kidney": {
             "name": "kidney1",
             "length": 5,
             "food": "veg"
         }
     }'
 */

// lets test the global catch
app.get('/test-global-catch', (req, res,next) => {
    try {
        throw new Error("This is a test error for global error handler");
    } catch (err) {
        next(err); // Pass the error to the global error handling middleware
    }
});

/*
In software development, "global catches" typically refer to mechanisms that handle exceptions or errors across an entire application or a significant part of it. These are implemented to ensure that any unhandled errors are caught and managed, preventing the application from crashing and allowing for graceful error reporting and logging.
Ensure that global catch is at the very end of the code, because sequence matters in middlewares
*/
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error! Try after sometime.");
});
/* curl -X GET http://localhost:3000/test-global-catch \
     -H "username: omkumar" \
     -H "password: pass" 
*/
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
