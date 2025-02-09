import React from "react";
import { useNavigate } from "react-router-dom";
import "./PauseMenu.css";

const PauseMenu = ({ isPaused, setIsPaused, restartGame }) => {
  const navigate = useNavigate();

  if (!isPaused) return null;

  return (
    <div className="pause-menu">
      <h2>Game Paused</h2>
      <button onClick={() => setIsPaused(false)}>Resume</button>
      <button onClick={restartGame}>Restart</button>
      <button onClick={() => navigate("/")}>Exit</button>
    </div>
  );
};

export default PauseMenu;
