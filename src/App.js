import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";

function App() {
  const [ score, setScore ] = useState(0);
  const [ bestScore, setBestScore ] = useState(
   localStorage.getItem('bestScore') || 0
  );

  function updateScore() {
    const newScore = score + 1;

    setScore(newScore);
    if ( newScore > bestScore ) {
      setBestScore(newScore);
      localStorage.setItem('bestScore', newScore);
    };
  };

  function resetScore() {
    setScore(0);
  };

  function clearScore() {
    setScore(0);
    setBestScore(0)
    localStorage.setItem('bestScore', 0);
  }

  return (
    <React.Fragment>
      <Header
        score={score}
        bestScore={bestScore}
        clearScore={clearScore}
      />
      <main>
        <Gameboard
          updateScore={updateScore}
          resetScore={resetScore}
        />
      </main>
    </React.Fragment>
  )
}

export default App;
