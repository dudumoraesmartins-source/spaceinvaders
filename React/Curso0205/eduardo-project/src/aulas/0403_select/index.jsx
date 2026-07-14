import React from 'react';

export default function Select() {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
}