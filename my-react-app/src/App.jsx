import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
//import kaboom from "kaboom";
//import kaboom from "https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs";
import "./App.css";
import Game from "./game.jsx"; // Ensure this file exists
import CharacterSel from "./CharacterSel.jsx";
import CreateScene from "./scenes/CreateScene.jsx";
import TestKaboom from "./testKaboom.jsx";
//const CreateScene = require('./scenes/CreateScene.js')

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
        <Route path="/game" element={<Game />} />
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