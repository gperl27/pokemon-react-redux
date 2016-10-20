import { FETCH_POKEMON, SHOW_POKEMON } from '../actions/index';

const INITIAL_STATE = { all: [], pokemon: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_POKEMON:
      return { ...state, all: action.payload.data };
    case SHOW_POKEMON:
      return { ...state, pokemon: action.payload.data };
    default:
      return state;
  }
}