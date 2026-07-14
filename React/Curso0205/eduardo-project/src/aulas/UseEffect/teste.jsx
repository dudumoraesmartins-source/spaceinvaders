import React from 'react';
import { useEffect } from 'react';


export default function Teste() {
  const [pLeft, setPLeft] = React.useState(200);
  const [pTop, setPTop] = React.useState(200);

  useEffect(() => {
    let x = null;
    let y = null;

    document.addEventListener('mousemove', onMouseUpdade, false);

    function onMouseUpdade(e) {
      console.log(`Mouse X: ${x}`);
      console.log(`Mouse Y: ${y}`);
      x = e.pageX;
      y = e.pageY;
      setPLeft(x);
      setPTop(y);
    }
  })

  return (
    <div>
      <button style={{ position: 'absolute', left: `${pLeft}px`, top: `${pTop}px` }}>Clique Aqui</button>
    </div>
  )
}