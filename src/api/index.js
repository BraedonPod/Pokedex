import data from './data.json';

export const fetchPokemonData = () => {
  return data;
}

export const fetchPokemon = (id) => {
  return data[id]
}