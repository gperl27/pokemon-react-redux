import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PokemonIndex from './containers/pokemon_index';
import PokemonShow from './containers/pokemon_show';


import App from './components/app';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={PokemonIndex} />
      <Route path="/api/v1/pokemon/:id" component={PokemonShow} />
    </Route>
  );