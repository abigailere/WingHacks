// src/utils/spriteCreator.js
import * as PIXI from 'pixi.js';

export function createAnimatedSprite(textures, x, y) {
  const animatedSprite = new PIXI.AnimatedSprite(textures);
  animatedSprite.x = x;
  animatedSprite.y = y;
  animatedSprite.anchor.set(0.5);
  animatedSprite.animationSpeed = 0.1;
  return animatedSprite;
}
