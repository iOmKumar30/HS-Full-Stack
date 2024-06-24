const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ sum: sum });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
