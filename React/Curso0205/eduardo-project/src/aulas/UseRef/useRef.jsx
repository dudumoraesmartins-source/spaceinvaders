import React from 'react';


export default function UseRef() {
  // const video = React.useRef();
  // retorna um objeto, com uma única propriedade: Current
  // usado para se referir a um elemento do DOM sem precisar do querySelector
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  // só vai carregar o current, após a renderização da página
  // logo, esse console log será undefined
  // console.log(video.current);

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentarios}</li>
        ))}
      </ul>
      <input
        type='text'
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};