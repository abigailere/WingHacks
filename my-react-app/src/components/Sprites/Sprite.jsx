// src/components/Sprite.jsx
import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

function Sprite({ texture, x, y, app }) {
  const spriteRef = useRef(null);

  useEffect(() => {
    if (!spriteRef.current) {
      const sprite = new PIXI.Sprite(texture);
      sprite.x = x;
      sprite.y = y;
      app.stage.addChild(sprite);
      spriteRef.current = sprite;
    }

    return () => {
      if (spriteRef.current) {
        app.stage.removeChild(spriteRef.current);
        spriteRef.current.destroy();
      }
    };
  }, [texture, x, y, app]);

  return null; // This component doesn't render anything in the DOM
}

export default Sprite;
