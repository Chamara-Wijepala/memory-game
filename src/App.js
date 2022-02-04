import React from "react";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <React.Fragment>
      <header>
        <button id="ClearScoreButton">Clear Score</button>
        <div id="ScoreBoard">
          <p>Score: 0</p>
          |
          <p>Best Score: 17</p>
        </div>
      </header>
      <main>
        <Gameboard/>
      </main>
    </React.Fragment>
  )
}

export default App;
