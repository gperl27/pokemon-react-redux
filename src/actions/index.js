import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon() {
  const request = axios.get(`http://pokeapi.co/api/v1/pokedex/1`);

  return {
    type: FETCH_POKEMON,
    payload: request
  }
}