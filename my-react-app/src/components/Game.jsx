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
