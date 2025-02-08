import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./CharacterSel.css";
import Game from "./Game.jsx"; // Ensure this file exists
import  Square  from "./assets/Square.png"; // Ensure this file exists
import BlueWitch from "./assets/characters/Blue Witch/B_witch_idle.png"; // Ensure this file exists
import BlueWizard from "./assets/characters/BlueWizard Animations/BlueWizard/2BlueWizardIdle/Chara - BlueIdle00000.png"; // Ensure this file exists
import Knight from "./assets/characters/Knight_player_1.4/Idle_KG_1.png"; // Ensure this file exists
import Cat from "./assets/characters/Meow Knight/Meow-Knight_Idle.png";

function CharacterSel() {
    const navigate = useNavigate();
    const [selectedP1, setSelectedP1] = useState(null);
    const [selectedP2, setSelectedP2] = useState(null);

    const characters = [
        { id: "witch-1", src: BlueWitch },
        { id: "wizard-1", src: BlueWizard },
        { id: "knight-1", src: Knight },
        { id: "cat-1", src: Cat },
        { id: "witch-2", src: BlueWitch },
        { id: "wizard-2", src: BlueWizard },
        { id: "knight-2", src: Knight },
        { id: "cat-2", src: Cat },
    ];

    const handleSelect = (player,id) => {
        if (player === 1) {
            setSelectedP1(selectedP1 === id ? null : id);
        } else {
            setSelectedP2(selectedP2 === id ? null : id);
        }
    };
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

                {/* character selection placed inside the box  */}
                <img id= "witch-1" src={BlueWitch} alt="Blue Witch-1" className="char-P1-1-c" />
                <img id= "wizard-1"src={BlueWizard} alt="Blue Wizard-1" className="char-P1-2" />
                <img id="knight-1" src={Knight} alt="Knight-1" className="char-P1-3-c" />
                <img id="cat-1" src={Cat} alt="Cat-1" className="char-P1-4-c" />
                <img id="witch-2" src={BlueWitch} alt="Blue Witch-2" className="char-P2-1-c" />
                <img id="wizard-2" src={BlueWizard} alt="Blue Wizard-2" className="char-P2-2" />
                <img id="knight-2" src={Knight} alt="Knight-2" className="char-P2-3-c" />
                <img id="cat-2" src={Cat} alt="Cat-2" className="char-P2-4-c" />

                <div className="text-wrapper-P2">Player 2</div>
                <button className="buttonPlay" onClick={() => navigate("/game")}>
                    PLAY!
                </button>
            </div>
        </div> 
    )
}

export default CharacterSel;