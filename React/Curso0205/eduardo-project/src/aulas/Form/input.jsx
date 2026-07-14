import React from 'react';

export default function Inputs({ id, label, ...props }) {



  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
}