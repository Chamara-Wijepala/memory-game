import React from "react";

export default function Header({ score, bestScore, clearScore }) {
  return (
    <header>
      <button id="ClearScoreButton" onClick={clearScore}>Clear Score</button>
      <div id="ScoreBoard">
        <p>Score: {score}</p>
        <p>Best: {bestScore}</p>
      </div>
    </header>
  )
}
