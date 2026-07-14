import React from 'react';
import UserContext from './userContext';
import Produto from './Produto';

export default function UseContextTestes() {

  // cria um estado ou um contexto em "estado global"
  // cria um objeto do tipo symbol - Consumer // Provider
  // console.log(UserContext);

  return (
    <div>
      <UserContext.Provider value={{ nome: "André" }}>
        <Produto />
      </UserContext.Provider>
    </div>
  );
};