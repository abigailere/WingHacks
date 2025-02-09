import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterSel.css";
import Game from "./Game.jsx";
import Square from "./assets/Square.png";
import BlueWitch from "./assets/characters/Blue Witch/B_witch_idle.png";
import BlueWizard from "./assets/characters/BlueWizard Animations/BlueWizard/2BlueWizardIdle/Chara - BlueIdle00000.png";
import Knight from "./assets/characters/Knight_player_1.4/Idle_KG_1.png";
import Cat from "./assets/characters/Meow Knight/Meow-Knight_Idle.png";

function CharacterSel() {
    const navigate = useNavigate();
    const [selectedP1, setSelectedP1] = useState(null);
    const [selectedP2, setSelectedP2] = useState(null);
    const [error, setError] = useState(false); // State for validation error

    const charactersP1 = [
        { id: "witch-1", src: BlueWitch, className: "char-P1-1-c" },
        { id: "wizard-1", src: BlueWizard, className: "char-P1-2" },
        { id: "knight-1", src: Knight, className: "char-P1-3-c" },
        { id: "cat-1", src: Cat, className: "char-P1-4-c" },
    ];

    const charactersP2 = [
        { id: "witch-2", src: BlueWitch, className: "char-P2-1-c" },
        { id: "wizard-2", src: BlueWizard, className: "char-P2-2" },
        { id: "knight-2", src: Knight, className: "char-P2-3-c" },
        { id: "cat-2", src: Cat, className: "char-P2-4-c" },
    ];

    const handleSelect = (player, id) => {
        if (player === 1) {
            setSelectedP1(selectedP1 === id ? null : id);
        } else {
            setSelectedP2(selectedP2 === id ? null : id);
        }
    };

    const handlePlay = () => {
        if (selectedP1 && selectedP2) {
            navigate("/game"); // Proceed if both players have selected
        } else {
            setError(true); // Show red border if selection is incomplete
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

                {/* Character Selection Boxes */}
                {charactersP1.map((char, index) => (
                    <img key={char.id} src={Square} alt="Square" className={`char-P1-${index + 1}`} />
                ))}
                {charactersP2.map((char, index) => (
                    <img key={char.id} src={Square} alt="Square" className={`char-P2-${index + 1}`} />
                ))}

                {/* Player 1 Characters */}
                {charactersP1.map((char) => (
                    <img
                        key={char.id}
                        id={char.id}
                        src={char.src}
                        alt={char.id}
                        className={`${char.className} ${selectedP1 && selectedP1 !== char.id ? "hidden" : ""}`}
                        onClick={() => handleSelect(1, char.id)}
                        onDoubleClick={() => handleSelect(1, char.id)}
                    />
                ))}

                {/* Player 2 Characters */}
                {charactersP2.map((char) => (
                    <img
                        key={char.id}
                        id={char.id}
                        src={char.src}
                        alt={char.id}
                        className={`${char.className} ${selectedP2 && selectedP2 !== char.id ? "hidden" : ""}`}
                        onClick={() => handleSelect(2, char.id)}
                        onDoubleClick={() => handleSelect(2, char.id)}
                    />
                ))}

                <div className="text-wrapper-P2">Player 2</div>

                {/* Play Button */}
                <button className={`buttonPlay ${error ? "error-border" : ""}`} onClick={handlePlay}>
                    PLAY!
                </button>
            </div>
        </div>
    );
}

export default CharacterSel;





