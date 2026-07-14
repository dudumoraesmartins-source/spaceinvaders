export default function animacoes() {
  const h1 = document.querySelector('div');
  console.log(h1);
  // return console.log(Object.prototype.toString.call(h1));

  const teste = h1.dataset.cor;
  console.log(h1.dataset)


  const div_2 = document.querySelector('[data-cor]');
  console.log('eu sou div 2: ', div_2);
  console.log(div_2.dataset);

  div_2.dataset.height = 1000;
  console.log(div_2.dataset);

  div_2.dataset.height_2 = 850;
  console.log(div_2.dataset);

  delete div_2.dataset.height_2;
  console.log(div_2.dataset);

  // dataset é uma função relativamente nova, antes era utilizado
  // tudo junto dentro do class"" .... ai com manipulações pegaria os "eventos"
  // que devem ser executados, com dataset, basta pasasar a propriedade 
  // data- que retornará o objeto pronto contendo todos elementos data-

  // caso escreva a nome composto, será transformado em camel case
  // data-anima-scroll  => animaScroll

}