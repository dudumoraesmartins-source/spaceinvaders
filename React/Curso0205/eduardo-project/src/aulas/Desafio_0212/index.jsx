import React from "react";
import Buttons from "./Button/buttons";
import Home from "./home";
import Produtos from "./produtos";
import Headers from "./header";

export default function Desafio_0212() {

  const { pathname } = window.location;
  let Pagina = Produtos;
  if (pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }


  return (
    <div>
      <Headers />
      <Pagina />
    </div>
  )
}