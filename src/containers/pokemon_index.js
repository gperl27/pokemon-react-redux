import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/index';
import { Link } from 'react-router';

//capitalize first letter of pokemon names
//add to String prototype for scalabitlity
String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}


class PokemonIndex extends Component {
  componentWillMount() {
    this.props.fetchPokemon();
  }

  renderPokemon() {

    return this.props.pokemon.results.map(pokemon => {
      return (
        <li className="list-group-item" key={pokemon.name} >
          <Link to={`${pokemon.name}`}>
            <strong>{pokemon.name.capitalizeFirstLetter()}</strong>
          </Link>
        </li>
      )
    });
  }

  render() {
    if(!this.props.pokemon.results){
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul className="list-group">
          {this.renderPokemon()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { pokemon: state.pokemon.all }
}

export default connect(mapStateToProps, { fetchPokemon })(PokemonIndex);
