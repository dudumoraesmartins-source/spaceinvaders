import React from 'react';

export default function Produto() {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // cria o evento no histórico do navegador e ocupa memória
  // toda vez q o elemento é renderizado... como esse componente não tem mudança
  // sempre será o mesmo, ele fica ocupando espaço em memória do navegador
  // function handleScroll(event) {
  //   console.log(event);
  // }
  // window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <p>Meu Produto</p>
    </div>
  )
}