const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
    return n1 + n2 + ' 2';
}
// propriedadesx
// length - total de parametros da funcao
console.log(somar(3,3).length);
console.log(somar.name);

// métodos
// call - executa a funcao
function darOi(nome, idade) {
    console.log('Oi para você' + nome + idade);
}
darOi.call({}, 'Eduardo', 30); // passa um novo valor de this


window.marca = 'Carro';
window.ano = 288;
function descricaoCarro(velocidade) {
    console.log(this);
    // console.log(window.marca + ' ' + window.ano);
    console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}
// passa um objeto como argumento
descricaoCarro.call({marca: 'Honda', ano: 2015}, 150);

const carros = ['Ford', 'Fiat', 'VW'];
carros.forEach.call(carros, (item) => {
    console.log(item);
});
const frutas = ['Banana', 'Uva', 'Pêra'];
frutas.forEach.call(frutas, (item) => {
    console.log(item);
});


function Dom(seletor) {
    this.element = document.querySelector(seletor);
}
// Dom.prototype = this
Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe)
}

const ul = new Dom('ul');
console.log(ul.element);

ul.ativo('ativar');

// pra funcionar tem q ter o element n ocaso dessa funcao
const li = {
    element: document.querySelector('li'),
}
ul.ativo.call(li, 'ativo');
// o objeto deve ser sempre parecido com oq deveria ser


console.log(frutas);
// Array.prototype.mostrarThis = function() {
//     console.log(this);
// }
// Sao a mesma coisa
Array.prototype.pop.call(frutas);
frutas.pop();
// vamos usar array.prototype -> quando tiver um objeto que se pareça com um array

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3,
}

const li_2 = document.querySelectorAll('li');
const filtro = Array.prototype.filter.call(li_2, (item) => {
    console.log(item.classList.contains('ativo'));
    return item.classList.contains('ativo');
});
console.log(filtro);
console.log(li_2);
