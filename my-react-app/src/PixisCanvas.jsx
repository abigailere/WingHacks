import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const PixiCanvas = () => {
    const pixiContainer = useRef(null);

    useEffect(() => {
        const app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });

        if (pixiContainer.current) {
            pixiContainer.current.appendChild(app.view);
        }

        // Create a rotating sprite
        const sprite = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");
        sprite.anchor.set(0.5);
        sprite.x = app.view.width / 2;
        sprite.y = app.view.height / 2;
        app.stage.addChild(sprite);

        // Animation
        app.ticker.add(() => {
            sprite.rotation += 0.05;
        });

        // Cleanup
        return () => {
            app.destroy(true, { children: true });
        };
    }, []);

    return <div ref={pixiContainer} />;
};

export default PixiCanvas;
