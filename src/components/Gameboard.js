import React, { useState, useEffect } from "react";

export default function Gameboard() {
  const [ selectedPokemon, setSelectedPokemon] = useState([]);

  function handleClick(event) {
    setSelectedPokemon(prevPokemon => [...prevPokemon, event.target.id])
  };

  return (
    <div id="Gameboard">
      <img className="Card" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" onClick={handleClick}></img>
      <img className="Card" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" onClick={handleClick}></img>
      <img className="Card" alt="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" onClick={handleClick}></img>
    </div>
  )
}
