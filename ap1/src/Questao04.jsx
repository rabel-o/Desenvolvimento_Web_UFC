import React, { useState, useEffect } from 'react';

const Questao04 = () => {
  // Estado para armazenar as capitais com maior e menor população
  const [capitais, setCapitais] = useState({ maior: null, menor: null });

  // Promise que resolve com o array de dados fornecido
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      const data = [
        {"capital":["Dublin"],"population":4994724},
        {"capital":["Nicosia"],"population":1207361},
        {"capital":["Madrid"],"population":47351567}
      ];
      resolve(data);
    });
  };

  // Função assíncrona para buscar dados da Promise
  const getData = async () => {
    try {
      const data = await fetchData();

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

  // useEffect para chamar getData quando o componente for montado
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Questão 04</h1>
      <p>Capital com maior população: {capitais.maior}</p>
      <p>Capital com menor população: {capitais.menor}</p>
    </div>
  );
};

export default Questao04;