import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PauseMenu from "./components/PauseMenu";
import bottomtile from "./assets/background/kenney_pixel-platformer/Tiles/tile_0002.png";
import "./Game.css";

const Game = () => {
    const [isPaused, setIsPaused] = useState(false);
    const navigate = useNavigate();

    const restartGame = () => {
        window.location.reload();
    };

    return (
        <div className="game-container">
           
            {/* Bottom Image */}
            <div className="bottom-image1">
                <img src={bottomtile} alt="Bottom Tile" />
            </div>
            {/* Bottom Image */}
            <div className="bottom-image2">
                <img src={bottomtile} alt="Bottom Tile" />
            </div>
            {/* Bottom Image */}
            <div className="bottom-image3">
                <img src={bottomtile} alt="Bottom Tile" />
            </div>
            {/* Bottom Image */}
            <div className="bottom-image4">
                            <img src={bottomtile} alt="Bottom Tile" />
                        </div>
            {/* Bottom Image */}
            <div className="bottom-image5">
                            <img src={bottomtile} alt="Bottom Tile" />
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