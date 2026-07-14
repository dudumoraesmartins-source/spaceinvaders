import React from 'react';


export default function CarrinhoCompras() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  // useRef, serve para armazenar um valor, mantém o valor mesmo que seja renderizado novamente
  let referencia = 0;

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');

    // só posso usar o clear, pq estou mantendo o valor de timeout em referencia
    // a cada renderizacao da página o valor não é esquecido
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
      console.log('teste')
    }, 2000)
    console.log(referencia);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}> Adicionar ao Carrinho {carrinho}</button>
    </div>
  );
};