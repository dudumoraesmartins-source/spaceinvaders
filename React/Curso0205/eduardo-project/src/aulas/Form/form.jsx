import React from 'react';
import Buttons from './button';
import Inputs from './input';

export default function Form() {
  const lista = ['Item 1', 'Item 2', 'Item 3'];


  return (
    <div>
      <Inputs id="email" label="E-Mail" required="" />
      <Inputs id="password" label="Password" type="password" />
      <Buttons items={lista} />
    </div>
  );
}