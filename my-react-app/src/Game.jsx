import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import PauseMenu from "./components/PauseMenu";
import bottomtile from "./assets/background/kenney_pixel-platformer/Tiles/tile_0002.png";
import "./Game.css";

const Game = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [equation, setEquation] = useState("Loading...");
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [playerTurn, setPlayerTurn] = useState(1);
    const [scores, setScores] = useState({ 1: 0, 2: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState("");

    const navigate = useNavigate(); // React Router navigation

    // Fetch the math equation and player turn from the backend
    const fetchEquation = () => {
        fetch("http://localhost:5000/math")
            .then(res => res.json())
            .then(data => {
                if (data.gameOver) {
                    setGameOver(true);
                    setScores(data.scores);
                    setWinner(data.winner);
                } else {
                    setEquation(data.equation);
                    setPlayerTurn(data.playerTurn);
                }
            })
            .catch(err => console.error("Error fetching equation:", err));
    };

    // Load the initial equation when the game starts
    useEffect(() => {
        fetchEquation();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/check-answer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answer }),
            });

            const result = await response.json();
            setFeedback(result.correct ? "✅ Correct!" : "❌ Wrong Answer");
            setAnswer("");

            if (result.gameOver) {
                setGameOver(true);
                setScores(result.scores);
                setWinner(
                    result.scores[1] > result.scores[2]
                        ? "Player 1"
                        : result.scores[1] < result.scores[2]
                            ? "Player 2"
                            : "Tie"
                );
            } else {
                setPlayerTurn(result.playerTurn);
                setEquation("Loading..."); // Prevent old equation flash
                fetchEquation(); // Fetch the new equation
            }
        } catch (error) {
            console.error("Error submitting answer:", error);
        }
    };

    return (
        <div className="game-container">
            {/* Bottom Tiles */}
            {[...Array(5)].map((_, index) => (
                <div className={`bottom-image${index + 1}`} key={index}>
                    <img src={bottomtile} alt="Bottom Tile" />
                </div>
            ))}

            {gameOver ? (
                <div className="game-over">
                    <h1>Game Over!</h1>
                    <p>Player 1 Score: {scores[1]}</p>
                    <p>Player 2 Score: {scores[2]}</p>
                    <h2>{winner === "Tie" ? "🤝 It's a Tie!" : `🏆 ${winner} Wins!`}</h2>
                    <button onClick={() => navigate("/")}>Start Screen</button> {/* Navigate to Start */}
                </div>
            ) : (
                <div>
                    <h2 className="playerTurn-Text">Player {playerTurn}'s Turn</h2>
                    <h3 className="equation-Text">Solve: {equation}</h3>

                    <form onSubmit={handleSubmit}>
                        <input
                            className="answer-input"
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter"
                        />
                        <button type="submit">Submit</button>
                    </form>

                    {feedback && <p>{feedback}</p>}

                    {/* Pause Menu */}
                    <PauseMenu isPaused={isPaused} setIsPaused={setIsPaused} restartGame={() => navigate("/")} />

                    {/* Pause Button */}
                    <button className="pause-button" onClick={() => setIsPaused(true)}>Pause</button>
                </div>
            )}
        </div>
    );
};

export default Game;
