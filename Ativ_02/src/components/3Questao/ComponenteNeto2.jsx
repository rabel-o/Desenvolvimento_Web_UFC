import React, { useContext } from 'react';
import { PokemonContext2 } from './PokemonContext2';

function ComponenteNeto2() {
  const numero = useContext(PokemonContext2) + 2;

  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="pokemon" />
    </div>
  );
}

export default ComponenteNeto2;