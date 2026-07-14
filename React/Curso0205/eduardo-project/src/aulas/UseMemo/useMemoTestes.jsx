import React from 'react';

function operacaoLenta() {
  let c;

  for (let i = 0; i < 1000000000; i++) {
    c = i + i / 10;
  }
  return c;
}

export default function UseMemoTestes() {

  // useMemo -> memoriza um valor evitando a recriação do mesmo todas as vezes que o componente for atualizado
  // recebe um callback e um array de dependencias
  // operacoes lentas em javascript

  const [contar, setContar] = React.useState(0);


  // const valor = React.useMemo(() => {
  //   const localStorageItem = window.localStorage.getItem('produto');
  //   console.log('Aconteceu o memo');
  //   return localItem;
  // }, [])

  const t1 = performance.now();

  const valor = React.useMemo(() => { operacaoLenta() }, []);

  // console.log(valor);
  console.log(performance.now() - t1);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};