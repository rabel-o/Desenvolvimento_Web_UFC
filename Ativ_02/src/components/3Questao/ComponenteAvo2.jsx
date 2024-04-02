import React, { useState, useContext } from 'react';
import { PokemonContext2 } from './PokemonContext2';
import ComponenteFilho2 from './ComponenteFilho2';

function ComponenteAvo2() {
  const [contador, setContador] = useState(1);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <PokemonContext2.Provider value={contador}>
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`} alt="pokemon" />
        <ComponenteFilho2 />
        <button onClick={incrementarContador}>Incrementar</button>
      </div>
    </PokemonContext2.Provider>
  );
}

export default ComponenteAvo2;