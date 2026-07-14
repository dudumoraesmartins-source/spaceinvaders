import React from 'react';
import Produto from './produto';

export default function useEfeitos() {

  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);


  // console.log('Executou fora');

  React.useEffect(() => {
    console.log('Estou renderizando cada evento na página');
  });

  React.useEffect(() => {
    console.log('Estou renderizando somente no primeiro evento da página');
  }, []);
  // [] -> significa que não tem dependência nenhuma, então ocorre só uma vez

  React.useEffect(() => {
    document.title = 'Total ' + contar;
    console.log('Estou renderizando somente quando o ESTADO MUDA');
  }, [contar]);

  // VAI ATIVAR SOMENTE NA PRIMEIRA RENDERIZACAO DA PÁGINA A CHAMADA DA API
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(response => response.json())
      .then(json => setDados(json));
    console.log('Estou renderizando a chamada da API somente no primeiro evento da página')
  }, []);
  // [] -> significa que não tem dependência nenhuma, então ocorre só uma vez



  return (
    <>
      <button onClick={() => setContar(contar + 1)}>
        {contar}
      </button>

      <div>
        {dados &&
          (
            <div>
              <h1>{dados.nome}</h1>
              <p>R${dados.preco}</p>
            </div>
          )
        }
      </div >

      <button onClick={() => setAtivo(!ativo)}>{!ativo ? 'Ativar' : 'Inativar'}</button>
      {ativo && <Produto />}

    </>
  );
};