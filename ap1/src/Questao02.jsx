import React, { useState } from 'react';

const Questao02 = () => {
  // URLs das imagens de frente e de costas do Pikachu
  const frenteImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  const costasImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

  // Estado para controlar qual imagem está sendo exibida
  const [isFrente, setIsFrente] = useState(true);

  // Função para alternar entre a imagem de frente e de costas
  const alternaImg = () => {
    setIsFrente(!isFrente);
  };

  return (
    <div>
      <h1>Questão 02</h1>
      <img src={isFrente ? frenteImg : costasImg} alt="Pokemon" />
      <button onClick={alternaImg}>
        {isFrente ? 'Mostrar Costas' : 'Mostrar Frente'}
      </button>
    </div>
  );
};

export default Questao02;