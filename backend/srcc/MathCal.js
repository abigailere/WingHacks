import express from "express";
import cors from "cors";
import readline from "readline"; // Import readline for user input

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
                result = num1 / num2;
            }
            break;
    }

    return { equation: `${num1} ${operation} ${num2}`, answer: result };
}

// Function to handle a player's game session
function playGame(playerName) {
    return new Promise((resolve) => {
        let count = 0;
        let questionIndex = 0;

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        function askQuestion() {
            if (questionIndex < 10) {
                const question = generateEquation();
                console.log(`${playerName} - Q${questionIndex + 1}: ${question.equation} = ?`);

                rl.question("Your answer: ", (userInput) => {
                    const userAnswer = parseFloat(userInput);

                    if (userAnswer === question.answer) {
                        count++;
                    }

                    questionIndex++;
                    askQuestion(); // Ask the next question
                });
            } else {
                console.log(`${playerName} got ${count} correct out of 10.`);
                rl.close();
                resolve(count); // Return the score
            }
        }

        askQuestion();
    });
}

// Function to start the game for both players
async function startGame() {
    console.log("Starting game...");
    
    const player1Score = await playGame("Player 1");
    const player2Score = await playGame("Player 2");

    console.log("\nGame Over!");
    console.log(`Player 1 Score: ${player1Score}`);
    console.log(`Player 2 Score: ${player2Score}`);

    if (player1Score > player2Score) {
        console.log("🏆 Player 1 Wins!");
    } else if (player2Score > player1Score) {
        console.log("🏆 Player 2 Wins!");
    } else {
        console.log("🤝 It's a Tie!");
    }
}

// Start Express Server
app.get("/math", (req, res) => {
    currentEquation = generateEquation();
    res.json({ equation: currentEquation.equation });
});


app.listen(5000, () => {
    console.log("Server running on port 5000 :)");

    // === RUN THE GAME IN TERMINAL IF "--play" ARGUMENT IS PROVIDED ===
    if (process.argv.includes("--play")) {
        startGame();
    }
});
