import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import ComponenteFilho from './ComponenteFilho';

function ComponenteAvo() {
    const numero = useContext(PokemonContext);
  
    return (
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="pokemon" />
        <ComponenteFilho />
      </div>
    );
  }
  
  export default ComponenteAvo;