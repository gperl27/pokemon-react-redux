import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPokemon } from '../actions/index';
import { Link } from 'react-router';

class PokemonShow extends Component {
  componentWillMount() {
    this.props.showPokemon(this.props.params.id);
  }

  render() {
    const { pokemon } = this.props; 

    if (!pokemon){
      return <div>Loading...</div>
    }

    console.log(pokemon);

    return (
      <div>
        <h2>{pokemon.name}</h2>
        <Link to="/" className='btn btn-default'>Back to Index</Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { pokemon: state.pokemon.pokemon }
}

export default connect(mapStateToProps, { showPokemon })(PokemonShow);