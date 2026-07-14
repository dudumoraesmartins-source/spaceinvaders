import React from 'react';

export default function Buttons(...props) {


  // console.log(typeof props); // objeto
  // console.log(Object.getPrototypeOf(...props));

  console.log(...props);
  // ESTÁ CHEGANDO ASSIM props = [ { items: ['Item 1', 'Item 2', 'Item 3'] } ]
  const lista2 = props[0].items;
  console.log(lista2);
  // console.log(typeof lista2);

  lista2.map((e) => console.log(e));

  return (
    <button>
      Clique
    </button>
  )
}