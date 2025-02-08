import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Game from "./game.jsx"; // Ensure this file exists
import CharacterSel from "./CharacterSel.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <button className="buttonDesign" onClick={() => navigate("/character")}>
        Start Game
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