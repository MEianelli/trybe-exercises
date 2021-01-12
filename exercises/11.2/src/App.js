import './App.css';
import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>POKEDEX</h1>
        <div className='list'>
          {pokemons.map((pokemon, index) => (
            <Pokemon key={index} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
