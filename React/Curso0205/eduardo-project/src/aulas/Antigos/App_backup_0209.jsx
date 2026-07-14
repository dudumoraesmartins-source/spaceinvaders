import React from 'react';
import Header from './aulas/header';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {

  const dados = produtos;

  const dadosFiltrados =
    dados.filter((e) => Number(e.preco.substring(3, e.preco.length)) > 1500);

  console.log(dadosFiltrados);

  return (
    <>

      <Header />

      <section>
        {
          dadosFiltrados
            .map(
              (e) =>
                <div key={e.id}>
                  <h1>{e.nome}</h1>
                  <p>Preço: {e.preco}</p>
                  <ul>{
                    e.cores
                      .map(
                        (g) => <li key={g}>{g}</li>
                      )
                  }
                  </ul>
                </div>
            )
        }
      </section>

    </>
  )
}

export default App
