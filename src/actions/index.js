import axios from 'axios';

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const SHOW_POKEMON = 'SHOW_POKEMON';

export function fetchPokemon() {
  const request = axios.get(`http://pokeapi.co/api/v2/pokemon/?limit=150`);

  return {
    type: FETCH_POKEMON,
    payload: request
  }
}

export function showPokemon(props) {
  const request = axios.get(`http://pokeapi.co/api/v2/pokemon/${props}`);

  return {
    type: SHOW_POKEMON,
    payload: request
  }
}