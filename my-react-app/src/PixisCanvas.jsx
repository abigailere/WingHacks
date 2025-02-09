// import { useEffect, useRef } from "react";
// import * as PIXI from "pixi.js";

// const PixiCanvas = () => {
//     const pixiContainer = useRef(null);

//     useEffect(() => {
//         const app = new PIXI.Application({
//             width: 800,
//             height: 600,
//             backgroundColor: 0x1099bb,
//         });

//         if (pixiContainer.current) {
//             pixiContainer.current.appendChild(app.view);
//         }

//         // Create a rotating sprite
//         const sprite = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");
//         sprite.anchor.set(0.5);
//         sprite.x = app.view.width / 2;
//         sprite.y = app.view.height / 2;
//         app.stage.addChild(sprite);

//         // Animation
//         app.ticker.add(() => {
//             sprite.rotation += 0.05;
//         });

//         // Cleanup
//         return () => {
//             app.destroy(true, { children: true });
//         };
//     }, []);

//     return <div ref={pixiContainer} />;
// };

// export default PixiCanvas;

// import { useEffect, useRef } from "react";
// import * as PIXI from "pixi.js";
// import spriteSheet from "./assets/characters/brunette king.png";

// const PixiCanvas = () => {
//     const pixiContainer = useRef(null);

//     useEffect(() => {
//         const app = new PIXI.Application({
//             width: 800,
//             height: 600,
//             backgroundColor: 0x1099bb,
//         });

//     // pixiContainer.current.appendChild(app.view);

//     // Attach PixiJS canvas to the div
//     if (pixiContainer.current) {
//         pixiContainer.current.appendChild(app.view);
//       }

//     // // Load the sprite sheet
//     // PIXI.Assets.load("/brunette king.png").then((texture) => {
//     //   const frames = [];
     
//     // Load texture from imported image
//     const texture = PIXI.Texture.from(spriteSheet);
//     const frames = [];

//     // Assuming it's a horizontal sprite sheet with equal frame sizes
//     const frameWidth = texture.width / 4; // Adjust based on how many frames you have
//     const frameHeight = texture.height;
      
//     for (let i = 0; i < 4; i++) {
//         frames.push(new PIXI.Texture(texture, new PIXI.Rectangle(i * frameWidth, 0, frameWidth, frameHeight)));
//     }

//     const animatedSprite = new PIXI.AnimatedSprite(frames);
//     animatedSprite.x = 300;
//     animatedSprite.y = 300;
//     animatedSprite.animationSpeed = 0.1; // Adjust speed as needed
//     animatedSprite.play();

//     app.stage.addChild(animatedSprite);
//     });

//     // return () => {
//     //   app.destroy(true, { children: true });
//     // };

//     return () => {
//         app.destroy(true, { children: true });
//     };

// }
// // , []);

//   return <div ref={pixiContainer} />;
// };

// export default PixiCanvas;
import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
// import spriteSheet from "../assets/characters/brunette king.png"; // Import the sprite sheet
import spriteSheet from "/src/assets/characters/brunette king.png";


const PixiCanvas = () => {
  const pixiContainer = useRef(null);

  useEffect(() => {
    // Create a new PixiJS application
    const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
    });

    // Attach PixiJS canvas to the div
    if (pixiContainer.current) {
      pixiContainer.current.appendChild(app.view);
    }

    // Load texture from imported image
    const texture = PIXI.Texture.from(spriteSheet);
    const frames = [];

    // Assuming it's a horizontal sprite sheet with equal frame sizes
    const frameWidth = texture.width / 4; // Adjust based on your sprite sheet
    const frameHeight = texture.height;

    for (let i = 0; i < 4; i++) {
      frames.push(new PIXI.Texture(texture, new PIXI.Rectangle(i * frameWidth, 0, frameWidth, frameHeight)));
    }

    // Create animated sprite
    const animatedSprite = new PIXI.AnimatedSprite(frames);
    animatedSprite.x = 300;
    animatedSprite.y = 300;
    animatedSprite.animationSpeed = 0.1; // Adjust speed as needed
    animatedSprite.play();

    app.stage.addChild(animatedSprite);

    // Cleanup function to destroy PixiJS app when component unmounts
    return () => {
      app.destroy(true, { children: true });
    };
  }, []); // <-- This is the correct placement for the dependency array

  return <div ref={pixiContainer} />;
};

export default PixiCanvas;
