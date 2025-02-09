import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './game.css'
import { Application, Graphics, Text, TextStyle, Sprite, Assets } from 'pixi.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)

(async () => {
});
