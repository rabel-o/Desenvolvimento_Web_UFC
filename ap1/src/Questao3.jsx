import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  // Estado para armazenar as capitais com maior e menor população
  const [capitais, setCapitais] = useState({ maior: null, menor: null });

  // Função assíncrona para buscar dados da API
  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
      const data = await response.json();

      // Encontrar a capital com maior e menor população
      let maior = data[0];
      let menor = data[0];

      data.forEach(pais => {
        if (pais.population > maior.population) {
          maior = pais;
        }
        if (pais.population < menor.population) {
          menor = pais;
        }
      });

      // Atualizar o estado com as capitais encontradas
      setCapitais({
        maior: maior.capital[0],
        menor: menor.capital[0]
      });
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // useEffect para chamar fetchData quando o componente for montado
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Questão 03</h1>
      <p>Capital com maior população: {capitais.maior}</p>
      <p>Capital com menor população: {capitais.menor}</p>
    </div>
  );
};

export default Questao03;