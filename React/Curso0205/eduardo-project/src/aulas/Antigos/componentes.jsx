import React from 'react';

export default function Componentes() {
  // podemos passar argumentos aos componentes -> props
  const Titulo = ({ cor, texto, children }) => {
    return (
      <h1 style={{ color: cor }}>{texto}, {children}</h1>
    );
  }




  return (
    <div>
      <Titulo cor="red" texto="Meu título 1"> Isso é o children </Titulo>
      <Titulo cor="blue" texto="Meu título 2" />
    </div>
  )
}