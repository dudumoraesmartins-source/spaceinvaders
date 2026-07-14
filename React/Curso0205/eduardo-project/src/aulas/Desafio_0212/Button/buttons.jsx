import React from "react"

export default function Buttons({ text, redirect }) {

  return (
    <header>
      <ul>
        <li>
          <a href={redirect}>{text}</a>
        </li>
      </ul>
    </header>
  )
}