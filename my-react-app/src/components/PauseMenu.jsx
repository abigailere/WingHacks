// import React from "react";

// function PauseMenu({ isPaused, onResume }) {
//   if (!isPaused) return null; // Only show when paused

//   return (
//     <div style={styles.menu}>
//       <h2 style={styles.text}>Game Paused</h2>
//       <button onClick={onResume} style={styles.button}>Resume</button>
//     </div>
//   );
// }

// const styles = {
//   menu: {
//     position: "absolute", top: "50%", left: "50%",
//     transform: "translate(-50%, -50%)",
//     background: "rgba(0,0,0,0.8)", color: "#fff",
//     padding: "20px", borderRadius: "10px",
//     textAlign: "center",
//     zIndex: 10, // Ensures it appears above the Kaboom grid
//   },
//   text: {
//     fontSize: "24px", // Increase font size for better visibility
//   },
//   button: {
//     padding: "10px 20px", fontSize: "16px",
//     background: "yellow", border: "none",
//     cursor: "pointer",
//   },
// };

// export default PauseMenu;

import React from "react";
import "./Game.css"; // Ensure styles apply

const PauseMenu = ({ isPaused, setIsPaused }) => {
  if (!isPaused) return null; // Only render when paused

  return (
    <div className="pause-menu">
      <h2>Paused</h2>
      <button onClick={() => setIsPaused(false)}>Resume</button>
    </div>
  );
};

export default PauseMenu;
