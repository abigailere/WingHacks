//default scene
import React, { useEffect } from 'react';
import { Application, Sprite, Loader } from "pixi.js";
import backgroundImage from "../assets/blue.png";

const CreateScene = () => {
  useEffect(() => {
    const app = new Application({
      width: 800,
      height: 600,
      backgroundColor: 0x000000, // Black background
    });

   // Append the Pixi canvas to the DOM
    const gameContainer = document.getElementById("game-container");
    if (gameContainer) {
      gameContainer.appendChild(app.view);
    }

    // Load the background image using Pixi's Loader
    const loader = new Loader();
    loader.add("background", backgroundImage).load(() => {
        console.log("Background image loaded:", loader.resources["background"]);
      // Create a sprite using the loaded texture
      const backgroundSprite = new Sprite(loader.resources["background"].texture);
        
        // Set the position and size of the background to cover the canvas
        backgroundSprite.width = app.screen.width;
        backgroundSprite.height = app.screen.height;
        
        // Add the sprite to the stage
      app.stage.addChild(backgroundSprite);
    });

    // Cleanup on component unmount
    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return (
    <div id="game-container">
      {/* Pixi.js will render the game here */}
    </div>
  );
};

export default CreateScene;
