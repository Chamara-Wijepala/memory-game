export default function generateIndices(selectedPokemon) {
  const indices = [];
  const min = 1;
  const max = 898;

  for(let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * ((max + 1) - min) + min);
    indices.push(index);
  };

  // Returns true if every element in indices matches any of the elements in
  // selectedPokemon array
  const noUniqueIndex = indices.every((index) => {
    return selectedPokemon.some(pokemon => {
      return pokemon === index;
    });
  });
  
  if( noUniqueIndex ) {
    generateIndices(selectedPokemon);
  } else {
    return indices;
  };
};
