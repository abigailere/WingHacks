<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react'
import * as PIXI from 'pixi.js'
import { loadAssets } from '@/utils/assetLoader'
import Sprite from './Sprite'

function Game({ pixiApp }) {
  const [assets, setAssets] = useState(null)
  const gameRef = useRef(null)

  useEffect(() => {
    if (pixiApp && gameRef.current) {
      gameRef.current.appendChild(pixiApp.view)

      loadAssets().then(loadedAssets => {
        setAssets(loadedAssets)
      })

      return () => {
        if (gameRef.current.contains(pixiApp.view)) {
          gameRef.current.removeChild(pixiApp.view)
        }
      }
    }
  }, [pixiApp])

  return (
    <div ref={gameRef}>
      {pixiApp && assets && (
        <Sprite 
          texture={assets.spriteSheet.textures['walk1']}
          x={100}
          y={100}
          app={pixiApp}
        />
      )}
    </div>
  )
}

export default Game
=======
import kaboom from "kaboom";
import React, { useRef, useState, useEffect } from "react";
import PauseMenu from "./PauseMenu";
import "./Game.css";

const Game = () => {
	const canvasRef = React.useRef(null)
    const [isPaused, setIsPaused] = React.useState(false);
    const kaboomRef = React.useRef(null);

	React.useEffect(() => {
		const k = kaboom({
			global: false, //doesnt import to global namespace
			canvas: canvasRef.current,
	    });

		kaboomRef.current = k;

        // Create the main screen
        k.add([
            k.text("Welcome to Fighting Game!", { size: 32 }),
            k.pos(200, 100),
        ]);

        // Sample game object
        const player = k.add([
            k.rect(40, 40),
            k.pos(100, 100),
            k.color(0, 0, 255),
        ]);

        // Pause function
        function togglePause() {
            setIsPaused((prev) => !prev);
        }
    
        // Watch for ESC key to pause
        k.keyPress("escape", togglePause);
    
        return () => {
            k.destroyAll(); // Cleanup on unmount
        };
	}, []);

    // useEffect(() => {
    //     if (kaboomRef.current) {
    //       if (isPaused) {
    //         kaboomRef.current.debug.inspect = false; // Hide debug
    //         kaboomRef.current.loop(() => {}); // Stop game loop
    //       } else {
    //         kaboomRef.current.run(); // Resume game loop
    //       }
    //     }
    // }, [isPaused]);

	return (
        // <canvas ref={canvasRef}></canvas>
        <div className="game-container">
            {/* Kaboom Game Canvas */}
            <canvas ref={canvasRef}></canvas>

            {/* Pause Menu */}
            <PauseMenu isPaused={isPaused} setIsPaused={setIsPaused} />

            {/* Pause Button */}
            <button className="pause-button" onClick={() => setIsPaused(true)}>
                Pause
            </button>
        </div>
    );
};
export default Game;
>>>>>>> 3f5d8feccdea3de48cfa0af54c66a758100d0b1d
