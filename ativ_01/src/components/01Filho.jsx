const Filho = ({ altura, peso }) => {
    const imc = peso / (altura * altura);

    const getMensagem = () => {
        if (imc < 18) {
            return <h3>Abaixo do Peso</h3>;
        } else if (imc > 25) {
            return <h3>Acima do Peso</h3>;
        } else {
            return <h3>Peso ideal</h3>;
        }
    };

    return (
        <div>
            <h2>IMC: {imc.toFixed(2)}</h2>
            {getMensagem()}
        </div>
    )
}

export default Filho;