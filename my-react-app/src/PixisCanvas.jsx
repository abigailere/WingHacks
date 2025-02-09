// src/PixisCanvas.jsx
import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";

// Import knight animation frames dynamically
const knightFrames = import.meta.glob("./assets/characters/Knight_player_1.4/.png", { eager: true });

function PixisCanvas() {
    const canvasRef = useRef(null);
    const appRef = useRef(null);
    const [animationType, setAnimationType] = useState("idle"); // Default animation

    useEffect(() => {
        if (!appRef.current) {
            const app = new PIXI.Application({
                width: 800,
                height: 600,
                backgroundColor: 0x1099bb,
            });
            canvasRef.current.appendChild(app.view);
            appRef.current = app;
        }

        return () => {
            appRef.current.destroy(true);
            appRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!appRef.current) return;

        const app = appRef.current;

        // Load knight animation frames
        const animations = {
            idle: Object.values(knightFrames).filter((img) => img.default.includes("Crouching_Idle_KG")),
            attack: Object.values(knightFrames).filter((img) => img.default.includes("Attack_KG")),
            walk: Object.values(knightFrames).filter((img) => img.default.includes("Crouching_Walk_KG")),
        };

        const textures = animations[animationType].map((img) => PIXI.Texture.from(img.default));

        // Create animated sprite
        const knight = new PIXI.AnimatedSprite(textures);
        knight.x = 400;
        knight.y = 300;
        knight.anchor.set(0.5);
        knight.animationSpeed = 0.1;
        knight.play();

        app.stage.addChild(knight);

        return () => {
            app.stage.removeChild(knight);
            knight.destroy();
        };
    }, [animationType]);

    return (
        <div>
            <h1>Knight Animation</h1>
            <button onClick={() => setAnimationType("attack")}>Attack</button>
            <button onClick={() => setAnimationType("idle")}>Idle</button>
            <button onClick={() => setAnimationType("walk")}>Walk</button>

            <div ref={canvasRef}></div>
        </div>
    );
}

export default PixisCanvas;
