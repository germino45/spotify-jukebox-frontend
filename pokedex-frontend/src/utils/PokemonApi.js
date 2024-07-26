import { processServerResponse } from "./api";

export const getPokemon = () => {
  const pokeApi = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
  ).then(processServerResponse);

  return pokeApi;
};