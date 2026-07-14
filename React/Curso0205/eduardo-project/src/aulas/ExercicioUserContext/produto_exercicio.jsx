import React from 'react';
import UserContext from './Contexto_GLOBAL';


export default function ProdutoExercicio() {

  const objetoDoContextoGlobal = React.useContext(UserContext);
  console.log('Eu sou produto', objetoDoContextoGlobal);
  if (objetoDoContextoGlobal.dados === null) return null;

  return (
    <div>
      Produto: {' '}
      {
        objetoDoContextoGlobal.dados.map((a) => {
          return <li key={a.id}>{a.nome}</li>
        })
      }
    </div>
  );
};