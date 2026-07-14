import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const nome = dados.cliente;
  const idade = dados.idade;
  const situacao = dados.ativa;
  // const totalGasto =
  // console.log(Object.getPrototypeOf(dados).map);

  let soma = 0;
  dados.compras.map((e) => {
    soma += Number(e.preco.substring(3, e.preco.length));
    // console.log(soma);
  })
  // console.log(`Sou o final da Soma ${soma}`);


  const total2 =
    dados.compras.map(
      (item) => Number(item.preco.replace('R$ ', '')),
    )
      .reduce(
        (a, b) => a + b
      );
  // reduce => a vai funcionar como acumulador e b como item iterado
  // 1 linha 0 + 2500
  // 2 linha 2500 + 3000
  // 3 linha 5500 + 1500
  // ...

  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p style={{ color: dados.ativa ? 'green' : 'red' }}>Situação: {situacao ? 'Ativa' : 'Inativo'}</p>
      <p>Total Gasto: {soma}</p>
    </div >
  )
}

export default App
