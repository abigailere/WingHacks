import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import CharacterSel from "./CharacterSel.jsx";
import Main from './main.jsx'
import * as PIXI from 'pixi.js'

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
    <>
      <Experience />
      <div className={isHome ? "start-screen" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
