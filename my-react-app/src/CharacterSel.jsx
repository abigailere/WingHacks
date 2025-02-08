import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./CharacterSel.css";
import Game from "./Game.jsx"; // Ensure this file exists
import  Square  from "./assets/Square.png"; // Ensure this file exists

function CharacterSel() {
    return (
        <div className="character-screen">
            <div className="div">
                <div className="overlap-group">
                <img src={Square} alt="Square" className="size-48-P1" />
                <div className="text-wrapper-P1">Player 1</div>
                </div>
                <img src={Square} alt="Square" className="size-48-P2" />
                <div className="text-wrapper-P2">Player 2</div>
                <button className="buttonPlay" onClick={() => navigate(Game)}>
                    PLAY!
                </button>
            </div>
        </div> 
    )
}

export default CharacterSel;