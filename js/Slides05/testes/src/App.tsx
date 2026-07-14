import Produto from './Produto';
import React from "react";
import {Button} from "@heroui/react";
import {Spinner} from "@heroui/react";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado






const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(Boolean);

  async function handleClick(event) {
    setCarregando(true);
    // console.log(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const json = await response.json();
    // console.log(json);
    setDados(json);
    setCarregando(false);
  }


  const numeros = [10, 5, 20];
  
  const maior = Math.max(...numeros);
  // com spred, seria a mesma coisa que pasar o array assim...
  // const maior = Math.max(10, 5, 20);

  console.log(maior);

  //ou 
  const numeros2 = [...numeros, 15, 50, 80];
  console.log(numeros2);


  const carro = {
    rodas: 4,
    portas: 2
  }

  const carroAno = {...carro};
  console.log(`Essa é a quantidade de portas do carro: ${carroAno.portas}`);
  console.log(typeof carroAno);

  const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados',
  ]

  const precosFiltrados = precos.filter(function(preco) {
    return preco.includes('R$');
  });
  console.log(precosFiltrados);


  const precosMap = precosFiltrados.map((preco) => 'teste');
  console.log(precosMap);

  // const active = false;
  const active = true;
  const button = active && 'Botão está ativo';
  console.log(button);

  return (
    <div>
      <Button style={{margin: '.5rem'}} onClick={handleClick}>notebook</Button>
      <Button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</Button>
      <Button style={{margin: '.5rem'}} onClick={handleClick}>tablet</Button>
      {carregando && <p><Spinner />Carregando....</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};


export default App;
