// src/components/Sprite.jsx
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import * as PIXI from "pixi.js";

// Load all images dynamically using import.meta.glob()
const animations = {
    idle: import.meta.glob("../assets/characters/Knight_player_1.4/Crouching_Idle_KG_*.png", { eager: true }),
    attack: import.meta.glob("../assets/characters/Knight_player_1.4/Attack_KG_*.png", { eager: true }),
    walk: import.meta.glob("../assets/characters/Knight_player_1.4/Crouching_Walk_KG_*.png", { eager: true }),
};

// Convert imported modules into an array of URLs
const getTextures = (animation) =>
    Object.values(animations[animation]).map((mod) => PIXI.Texture.from(mod.default));

function Sprite({ animationType, x, y, app }) {
    const spriteRef = useRef(null);
    const [textures, setTextures] = useState(getTextures("idle"));

    useEffect(() => {
        if (!spriteRef.current) {
            const animatedSprite = new PIXI.AnimatedSprite(textures);
            animatedSprite.x = x;
            animatedSprite.y = y;
            animatedSprite.anchor.set(0.5);
            animatedSprite.animationSpeed = 0.1;
            animatedSprite.play();

            app.stage.addChild(animatedSprite);
            spriteRef.current = animatedSprite;
        } else {
            spriteRef.current.textures = textures;
            spriteRef.current.play();
        }

        return () => {
            if (spriteRef.current) {
                app.stage.removeChild(spriteRef.current);
                spriteRef.current.destroy();
            }
        };
    }, [textures, x, y, app]);

    useEffect(() => {
        setTextures(getTextures(animationType));
    }, [animationType]);

    return null; // No JSX needed
}
Sprite.propTypes = {
    animationType: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    app: PropTypes.object.isRequired,
};

export default Sprite;
