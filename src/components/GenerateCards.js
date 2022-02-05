import React from "react";

export default function GenerateCards(pokemon, handleClick) {
  const { id, name, sprite } = pokemon;
  
  return (
    <img
      className="Card"
      alt={name}
      src={sprite}
      id={id}
      onClick={handleClick}
    ></img>
  )
};