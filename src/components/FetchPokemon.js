import { Pokedex } from "pokeapi-js-wrapper";

const pokedex = new Pokedex();

export default async function fetchPokemon(index) {
  const response = await pokedex.getPokemonByName(index);

  return {
    id: response.id,
    name: response.name,
    sprite: response.sprites.front_default,
  };
};
