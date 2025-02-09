import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
}

// Generate a random math equation
function generateEquation() {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();

    if (num1 < num2) {
        [num1, num2] = [num2, num1]; // Swap values
    }

    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num1 % num2 !== 0) {
                return generateEquation(); // Ensure no decimal results
            } else {    
                result = (num1 / num2);
            }
            break;
    }

    return { equation: `${num1} ${operation} ${num2}`, answer: result };
}
//store the current equation globally
let currentEquation = generateEquation();

app.get("/math", (req, res) => {
    currentEquation = generateEquation();
    res.json({ equation: currentEquation.equation });
});

// Endpoint to check user answer
app.post("/math/check", (req, res) => {
    const userAnswer = parseFloat(req.body.answer);
    const correct = userAnswer === currentEquation.answer;
    res.json({ correct, correctAnswer: currentEquation.answer });
});


app.listen(5000, () => {
    console.log("Server running on port 5000 :)");
});

