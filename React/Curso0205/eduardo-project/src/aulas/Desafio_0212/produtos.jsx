import React from "react"
import Titulo from "./titulo";
import Produto from "./produto";


// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


export default function Produtos() {

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];



  return (
    <div>
      <Titulo texto={"Produtos"} />
      {
        produtos.map((e) => (
          // se estou fazendo um map, e é uma lista de itens, tem q ter uma chave
          <Produto key={e.nome} {...e} />
        ))
      }
    </div >
  )
}