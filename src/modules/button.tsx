export default function Buttons() {

  let fazerAlgo = 0;
  function clickInicio() {
    fazerAlgo = 1;
    console.log('Cliquei no Início: ', fazerAlgo);
  }

  function clickFim() {
    fazerAlgo = 0;
    console.log('Cliquei no Final: ', fazerAlgo);
  }

  return (
    <div className="buttons-container">
      <button onClick={clickInicio}>Inicio</button>
      <button onClick={clickFim}>Fim</button>
    </div >
  )
}