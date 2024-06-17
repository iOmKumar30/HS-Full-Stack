const express = require("express");
const { z } = require("zod");
const app = express();

// Define Zod schema for the kidney object
const kidneySchema = z.object({
        name: z.string(),
        length: z.number(),
        food: z.string(),
});

app.use(express.json());

app.post('/get-report', function (req, res) {
    try {
        // Validate req.body against the schema
        const validatedData = kidneySchema.parse(req.body);

        // Access properties of kidney object
        const kidney = validatedData;
        const kidneyLength = kidney.length;

        // Example logic based on kidneyLength
        if (kidneyLength > 3 && kidneyLength < 7) {
            res.send(`You have ${kidneyLength} inches Kidney and they are healthy.`);
        } else {
            res.send(`You have ${kidneyLength} inches Kidney and they are not healthy. Get a checkup ASAP.`);
        }
    } catch (error) {
        console.error('Validation error:', error);
        res.status(400).send("Invalid input");
    }
});
/*To change the validation checks from parse() to safeParse() in your Express.js application using Zod, you can modify the error handling approach to accommodate safeParse(), which returns either a parsed result or null instead of throwing an error. Here's how you can refactor your server code to use safeParse()

app.post('/get-report', function (req, res) {
    // Validate req.body against the schema using safeParse
    const validatedData = kidneySchema.safeParse(req.body);

    // Check if parsing was successful
    if (!validatedData.success) {
        // Handle validation errors
        console.error('Validation errors:', validatedData.error);
        res.status(400).send("Invalid input");
        return;
    }

    // Access properties of kidney object
    const kidney = validatedData.data;
    const kidneyLength = kidney.length;

    // Example logic based on kidneyLength
    if (kidneyLength > 3 && kidneyLength < 7) {
        res.send(`You have ${kidneyLength} inches Kidney and they are healthy.`);
    } else {
        res.send(`You have ${kidneyLength} inches Kidney and they are not healthy. Get a checkup ASAP.`);
    }
});

*/
/* Test the above POST request
curl -X POST \
  http://localhost:3000/get-report \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "kidney1",
      "length": 6,
      "food": "veg"
  }'
 */
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
