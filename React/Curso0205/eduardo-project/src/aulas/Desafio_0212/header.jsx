import React from "react";
import Buttons from "./Button/buttons";

export default function Home() {

  return (
    <div>
      <Buttons redirect="/home" text={"Home"} />
      <Buttons redirect="/produtos" text={"Produtos"} />
    </div>
  )
}