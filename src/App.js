import React from "react";

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
        <div id="Gameboard">
          <div className="Card"></div>
          <div className="Card"></div>
          <div className="Card"></div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default App;
