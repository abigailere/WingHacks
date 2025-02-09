import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let playerTurn = 1;
let playerScores = { 1: 0, 2: 0 };
let questionCount = 0;
const totalRounds = 10;

// Function to generate a random number
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a math equation
function generateEquation() {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    if (num1 < num2) [num1, num2] = [num2, num1]; // Ensure num1 >= num2

    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let result;
    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            if (num1 % num2 !== 0) return generateEquation(); // Ensure integer result
            result = num1 / num2;
            break;
    }

    return { equation: `${num1} ${operation} ${num2}`, answer: result };
}

// Store the current equation
let currentEquation = generateEquation();

// Endpoint to get the current question
app.get("/math", (req, res) => {
    if (questionCount >= totalRounds * 2) {
        return res.json({
            gameOver: true,
            scores: playerScores,
            winner: playerScores[1] > playerScores[2] ? "Player 1" : playerScores[1] < playerScores[2] ? "Player 2" : "Tie",
        });
    }
    res.json({ equation: currentEquation.equation, playerTurn });
});

// Endpoint to check the answer and switch turns
app.post("/check-answer", (req, res) => {
    const { answer } = req.body;
    const correct = parseFloat(answer) === currentEquation.answer;

    if (correct) playerScores[playerTurn]++;

    playerTurn = playerTurn === 1 ? 2 : 1; // Switch turns
    questionCount++; // Increment question count
    currentEquation = generateEquation(); // Generate a new question

    res.json({ correct, playerTurn, gameOver: questionCount >= totalRounds * 2, scores: playerScores });
});

// Start the Express server
app.listen(5000, () => console.log("✅ Server running on port 5000 🚀"));
