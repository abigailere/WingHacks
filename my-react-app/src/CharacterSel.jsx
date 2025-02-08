import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./CharacterSel.css";
import Game from "./game.jsx"; // Ensure this file exists
import  Square  from "./assets/Square.png"; // Ensure this file exists

function CharacterSel() {
    const navigate = useNavigate();
    return (
        <div className="character-screen">
            <div className="div">
                <div className="overlap-group">
                <img src={Square} alt="Square" className="size-48-P1" />
                <div className="text-wrapper-P1">Player 1</div>
                </div>
                <img src={Square} alt="Square" className="size-48-P2" />
                {/* boxes character selection  */}
                <img src={Square} alt="Square" className="char-P1-1" />
                <img src={Square} alt="Square" className="char-P1-2" />
                <img src={Square} alt="Square" className="char-P1-3" />
                <img src={Square} alt="Square" className="char-P1-4" />
                <img src={Square} alt="Square" className="char-P2-1" /> 
                <img src={Square} alt="Square" className="char-P2-2" />
                <img src={Square} alt="Square" className="char-P2-3" /> 
                <img src={Square} alt="Square" className="char-P2-4" />
                <div className="text-wrapper-P2">Player 2</div>
                <button className="buttonPlay" onClick={() => navigate("/game")}>
                    PLAY!
                </button>
            </div>
        </div> 
    )
}

export default CharacterSel;