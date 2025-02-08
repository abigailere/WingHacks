import * as PIXI from 'pixi.js'

export async function loadAssets() {
  // Use import.meta.url to get the correct path in Vite
  const spriteSheetPath = new URL('../assets/characters/Blue Witch/B_witch_idle.png', import.meta.url).href
  const spriteSheetTexture = await PIXI.Assets.load(spriteSheetPath)

  const spriteSheetData = {
    frames: {
      "walk1": { frame: { x: 0, y: 0, w: 32, h: 32 } },
      // Add more frames...
    },
    animations: {
      walk: ["walk1"],
      // Add more animations...
    },
    meta: {
      scale: "1"
    }
  }

  const spriteSheet = new PIXI.Spritesheet(spriteSheetTexture, spriteSheetData)
  await spriteSheet.parse()

  return { spriteSheet }
}
