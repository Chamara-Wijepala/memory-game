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

  return (
    <React.Fragment>
      <Header score={score} bestScore={bestScore} />
      <main>
        <Gameboard updateScore={updateScore} />
      </main>
    </React.Fragment>
  )
}

export default App;
