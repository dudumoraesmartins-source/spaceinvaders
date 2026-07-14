import React from 'react';
import UserContext from './userContext';


export default function Produto() {

  const dados = React.useContext(UserContext);
  console.log(dados);

  return (
    <div>
      oi
    </div>
  )
}