import React from "react";

export default function Header({ score, bestScore}) {
  return (
    <header>
      <button id="ClearScoreButton">Clear Score</button>
      <div id="ScoreBoard">
        <p>Score: {score}</p>
        <p>Best: {bestScore}</p>
      </div>
    </header>
  )
}
