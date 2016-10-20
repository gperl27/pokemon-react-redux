import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPokemon } from '../actions/index';
import { Link } from 'react-router';
import Abilities from '../components/abilities';
import Types from '../components/types';


class PokemonShow extends Component {
  componentWillMount() {
    this.props.showPokemon(this.props.params.name);
  }

  render() {
    const { pokemon } = this.props; 


    if (!pokemon){
      return <div>Loading...</div>
    }

    const abilities = pokemon.abilities.map(ability => ability.ability);
    const types = pokemon.types.map(type => type.type);
    console.log(pokemon);

    return (
      <div>
        <div className="well">
          <img src={pokemon.sprites.front_default} />
          <h2>{pokemon.name.capitalizeFirstLetter()}</h2>
          <hr />
          <h3>Type(s):</h3>
          <Types data={types} />
          <hr />
          <h3>Abilities:</h3>
          <Abilities data={abilities} />
        </div>


        <Link to="/">
          <button className='btn btn-secondary'>
            Back to Index
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { pokemon: state.pokemon.pokemon }
}

export default connect(mapStateToProps, { showPokemon })(PokemonShow);