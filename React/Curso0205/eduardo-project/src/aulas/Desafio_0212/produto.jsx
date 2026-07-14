import React from "react"

export default function Produto({ nome, propriedades }) {

  return (
    <div style={{ border: "1px solid", margin: "1rem", padding: "1rem" }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((e) => <li>{e}</li>)}
      </ul>
    </div >
  )
}