const Questao01A = () => {
  // Definindo o objeto lista com três objetos JSON
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  // Retornando o JSX que inclui o componente Questao01B
  // Passando o objeto lista como props para Questao01B
  return (
    <div>
      <h1>Questão 01</h1>
      <Questao01B lista={lista} />
    </div>
  );
};

function Questao01B(props) {
  // Desestruturando as props para obter o objeto lista
  const { lista } = props;

  // Função para encontrar o maior valor em um objeto
  const achaMaiorValor = (obj) => {
    // Usando Math.max e Object.values para encontrar o maior valor
    return Math.max(...Object.values(obj));
  };

  // Retornando o JSX que inclui uma lista não ordenada
  // Iterando sobre cada item em lista e mostrando o maior valor de cada objeto
  return (
    <div>
      <ul>
        {lista.map((item, index) => (
          // Usando o índice como chave para cada item da lista
          <li key={index}>Maior valor: {achaMaiorValor(item)}</li>
        ))}
      </ul>
    </div>
  );
}

// Exportando o componente Questao01A como padrão
export default Questao01A;