import React, { useContext } from 'react';
import ComponenteNeto2 from './ComponenteNeto2';
import { PokemonContext2 } from './PokemonContext2';

function ComponenteFilho2() {
  const numero = useContext(PokemonContext2) + 1;

  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="pokemon" />
      <ComponenteNeto2 />
    </div>
  );
}

export default ComponenteFilho2;