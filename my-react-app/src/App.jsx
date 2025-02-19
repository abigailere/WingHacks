import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
//import kaboom from "kaboom";
//import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";
import "./App.css";
import Game from "./Game.jsx"; // Ensure this file exists
import CharacterSel from "./CharacterSel.jsx";
import Pixi from "./PixisCanvas.jsx"; // Ensure this file exists
import CreateScene from "./scenes/CreateScene.jsx";
import Player1Win from "./Player1Win.jsx"
import Player2Win from "./Player2Win.jsx"
// import TestKaboom from "./testKaboom.jsx";
//const CreateScene = require('./scenes/CreateScene.js')

function Home() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <button className="buttonDesign" onClick={() => navigate("/character")}>
        Start Game
      </button>
      {/* <button className="buttonScene" onClick={() => navigate("/create")}>
        Create Scene
      </button> */}
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
        <Route path="/game" element={<Game />} />
        <Route path="/character" element={<CharacterSel />} />
        <Route path="/create" element={<Player2Win/>} /> 
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