import React from 'react';
import { Context } from './components/1Questao/Context';
import FunctionA from './components/1Questao/FunctionA';
import ComponenteAvo2 from './components/3Questao/ComponenteAvo2';
import { PokemonContext2 } from './components/3Questao/PokemonContext2';
import ComponenteAvo from './components/2Questao/ComponenteAvo';
import { PokemonContext } from './components/2Questao/PokemonContext';


function App() {
  const cores = {bkgA:"green",bkgB:"white",bkgC:"yellow", bkgD:"blue"};

  return (
    <div>
      <h1>Questao 1</h1>
      <Context.Provider value={cores}>
        <FunctionA />
      </Context.Provider>
      <hr />
      <h1>Questao 2</h1>
      <PokemonContext.Provider value={1}>
      <ComponenteAvo />
      </PokemonContext.Provider>
      <hr />
      <h1>Questao 3</h1>
      <PokemonContext2.Provider value={1}>
      <ComponenteAvo2 />
      </PokemonContext2.Provider>
    </div>
  );
}

export default App;