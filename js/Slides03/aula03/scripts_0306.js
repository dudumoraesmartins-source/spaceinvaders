const listaAnimais = document.querySelector('.animais-lista');

// propriedades e métodos dos objetos Element - maioria read only
console.log(listaAnimais.clientHeight); // height + padding
console.log(listaAnimais.offsetHeight); // height + padding + border
console.log(listaAnimais.scrollHeight); // height total, mesmo dentro de scroll



// topo do elemento e todo da página
// offset elemento top e off set left
console.log(listaAnimais.offsetTop);
console.log(listaAnimais.offsetLeft);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

// getBoundingClientRect() -> método
// método que retorna um objeto com valores width, height, distância dos elementos
// cria um objeto com as medidas de todo o elemento
const rect = listaAnimais.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// MÉTODO É UMA FUNÇÃO QUE PERTENCE A UM OBJETO -> MÉTODO ARMAZENA COMPORTAMENTO
// MÉTODO()
// PROPRIEDADE
// objeto.nomexyz -> propriedade
// objeto.nomexyz() -> método

if (rect.top < 0 ) {
    console.log('Passou do elemento');
}


// WINDOW
console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
    window.pageXOffset,
);

// utilize um media-querie como no css para verificar a larguda do browser
const small = window.matchMedia('(max-width: 600px').matches;
// propriedade matches dá true ou false, se o teste do media querie deu certo ou nao
if (small.matches) {
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
}


// selecione o elemento no inspetor (Dom)
// abra o console e digite $0 para selecionar o mesmo
// os elementos selecionados anteriormente são $1 $2