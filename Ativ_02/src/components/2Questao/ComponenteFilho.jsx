import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import ComponenteNeto from './ComponenteNeto';

function ComponenteFilho() {
  const numero = useContext(PokemonContext) + 1;

  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="pokemon" />
      <ComponenteNeto />
    </div>
  );
}

export default ComponenteFilho;