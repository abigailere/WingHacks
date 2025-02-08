// src/utils/assetLoader.js
import * as PIXI from 'pixi.js';

export async function loadAssets() {
  const spriteSheetTexture = await PIXI.Assets.load('./assets/characters/Blue Witch/B_witch_death.png');

  const spriteSheetData = {
    frames: {
      // Define your sprite frames here
      "walk1": { "frame": {"x":0, "y":0, "w":32, "h":32} },
      // Add more frames as needed
    },
    animations: {
      "walk": ["walk1"], // Add more frames to the animation as needed
    },
    meta: {
      scale: "1"
    }
  };

  const spriteSheet = new PIXI.Spritesheet(spriteSheetTexture, spriteSheetData);
  await spriteSheet.parse();

  return { spriteSheet };
}




