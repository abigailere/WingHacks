import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PauseMenu from "./components/PauseMenu";
import "./Game.css";

const Game = () => {
    const [isPaused, setIsPaused] = useState(false);
    const navigate = useNavigate();

    const restartGame = () => {
        window.location.reload();
    };

    return (
        <div className="game-container">
            {/* Game Area */}
            <div className="game-screen">
                <div className="player"></div>
                <div className="enemy"></div>
            </div>
            
            {/* Pause Menu */}
            <PauseMenu isPaused={isPaused} setIsPaused={setIsPaused} restartGame={restartGame} />
            
            {/* Pause Button */}
            <button className="pause-button" onClick={() => setIsPaused(true)}>
                Pause
            </button>
        </div>
    );
};

export default Game;