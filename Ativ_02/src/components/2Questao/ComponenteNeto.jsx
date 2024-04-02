import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

function ComponenteNeto() {
  const numero = useContext(PokemonContext) + 2;

  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="pokemon" />
    </div>
  );
}

export default ComponenteNeto;