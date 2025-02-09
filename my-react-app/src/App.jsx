import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Game from "./game.jsx"; // Your main game logic
import CharacterSel from "./CharacterSel.jsx"; // Character selection screen
import Pixi from "./PixisCanvas.jsx"; // PixiJS game rendering
import CreateScene from "./scenes/CreateScene.jsx"; // Scene creation

function Home() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <button className="buttonDesign" onClick={() => navigate("/character")}>
        Start Game
      </button>
      <button className="buttonScene" onClick={() => navigate("/create")}>
        Create Scene
      </button>
    </div>
  );
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={isHome ? "start-screen" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Pixi />} /> {/* ✅ Renders PixiJS game */}
        <Route path="/character" element={<CharacterSel />} />
        <Route path="/create" element={<CreateScene />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
