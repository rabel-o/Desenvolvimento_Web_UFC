import Pai from "./components/01Pai";
import * as PC from "./components/02MeuPC";
import { World, Arena, Hero, Enemy } from "./components/03Batalha";

function App() {
  const heroImg = 'https://upload.wikimedia.org/wikipedia/pt/8/8d/Batman_por_Jim_Lee.jpg';
  const enemyImg = 'https://s.aficionados.com.br/imagens/coringa-brianbolland.jpg';

  return (
    <div>
      <h1>1 Questão</h1>
      <Pai />

      <hr />

      <h1>2 Questão</h1>
      <PC.PlacaMae nome="ASUS PRIME" preco="$200" />
      <PC.Memoria nome="Corsair Vengeance" preco="$150" />
      <PC.PlacaDeVideo nome="NVIDIA GeForce RTX 3080" preco="$700" />

      <hr />

      <h1>3 Questão</h1>
      <World>
          <Arena arena="Gotham City">
              <Hero name="Batman" img={heroImg} />
              <Enemy name="Coringa" img={enemyImg} />
          </Arena>
      </World>
    </div>
    
  );
}

export default App;
