// import React from "react";
// import Game from "./Game"; // Import the Kaboom game component

// function Game() {
//   // Define the scene outside of the return statement
//   scene("fight", () => {
//     const background = add([
//       sprite("background")
//     ]);
//   });

//   // Start the scene
//   go("fight");

//   return (
//     <div>
//       <h1>Welcome to the Fighting Game! 🎮</h1>
//       <Game /> {/* This renders the Kaboom.js game */}
//     </div>
//   );
// }

// export default Game;
import { useEffect, useState } from "react";
import kaboom from "kaboom";
// import PauseMenu from "../PauseMenu"; // Import pause menu

function Game() {
    const [isPaused, setIsPaused] = useState(false);
//   let k = null; // Keep Kaboom instance
    const navigate = useNavigate();


    // Toggle pause state when Escape key is pressed
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsPaused(prevState => !prevState);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="game-container">
            <h1>Hello World</h1>

            {isPaused && (
                <div className="pause-menu">
                    <h2>Paused</h2>
                    <button onClick={() => setIsPaused(false)}>Resume</button>
                    <button onClick={() => navigate("/")}>Main Menu</button>
                </div>
            )}
        </div>
    );
//     useEffect(() => {
//         if (!gameRef.current) return;

//     // Initialize Kaboom instance
//     k = kaboom({
//         global: false, width: 800, height: 600, background: [0, 0, 0], 
//         root: gameRef.current, grid: false,
//     });

//     return () => k.destroy();
//   }, []);

//     const togglePause = () => {
//     setIsPaused((prev) => {
//         const newPausedState = !prev;
//         if (k) k.paused = newPausedState; // Pause or unpause Kaboom game
//         return newPausedState;
//     });
//   };

//   return (
//     <div>
//         <button onClick={togglePause} style={{ position: "absolute", top: 10, right: 10 }}>
//         Pause
//         </button>
//         <PauseMenu isPaused={isPaused} onResume={togglePause} />
//         <div ref={gameRef} style={{ width: "100%", height: "100%" }} />
//     </div>
//   );
}

export default Game;
