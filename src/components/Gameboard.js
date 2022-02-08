import React, { useState, useEffect } from "react";
import fetchPokemon from "../services/fetchPokemon";
import generateIndices from '../services/generateIndices'
import RenderCardDeck from "./RenderCardDeck";

export default function Gameboard() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ selectedPokemon, setSelectedPokemon ] = useState([]);
  const [ cardDeck, setCardDeck ] = useState([]);

  // useEffect with a value passed to it's dependency array, runs after initial
  // render and when the value changes. Similar to componentDidUpdate lifecycle
  useEffect(() => {
    const indices = generateIndices(selectedPokemon);
    const promises = [];

    // For each index in indices, fetch a promise and push it to promises array
    indices.forEach((index) => {
      promises.push(fetchPokemon(index));
    });

    // Takes in promises array, then calls setCardDeck and passes in a new
    // array with all the promises resolved
    Promise.all(promises).then(pokemon => {
      setCardDeck(pokemon);
      setIsLoading(false);
    });
  }, [selectedPokemon]);

  // Adds card's id to state when clicked
  function handleClick(event) {
    setSelectedPokemon(prevPokemon => [...prevPokemon, event.target.id])
  };

  return (
    <div id="Gameboard">
      {
        isLoading
          ? 'Loading...'
          : <RenderCardDeck
              handleClick={handleClick}
              cardDeck={cardDeck}
            ></RenderCardDeck>
      }
    </div>
  )
}
