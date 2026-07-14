// outerHtml
// innerHTML
// innerText
// propriedades que retornam uma string contendo html ou texto
// é possível atribuir um novo valor para as mesmas
const menu = document.querySelector('.menu');

menu.outerHTML;
menu.innerHTML; // a tag vai como texto
menu.innerText; // a tag é renderizada

//menu.innerText = '<p>Texto</p>'; // a tag vai como texto
//menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

const animaisLista = document.querySelector('.animais-descricao');
// console.log(animaisLista.innerHTML); // comentei pq suja mt o console

h1.innerHTML = '<p>Novo Título</p>';


// TRANSVERSING
// NAVEGAR PELO DOM UTILIZANDO SUAS PROPRIEDADES E MÉTODOS
const lista = document.querySelector('.animais-lista');
console.log(lista);

lista.parentElement; // pai // retorna o primeiro elemento acima section
lista.parentElement.parentElement; // pai do pai // retorna o primeiro elemento acima, do acima (nível 2 de parent element- o primeiro nível é mãe, o segundo é vó) ( no caso é o body ) 
lista.previousElementSibling; // pega todo o elemento anterior // título
lista.nextElementSibling; // elemento abaixo // retorna o próximo elemento da página html

lista.children;
lista.children[0];
lista.children[--lista.children.length];

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


// ELEMENT VS NODE
// elements representa um elemento do html ou uma tag
// Node representa um nó e pode ser um Element, texto, comentário, quebra de linhas
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
console.log(lista.childNodes); // todos os node child // espaços a mais, comentários


const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo); // move lista para o final de contato

//contato.appendChild(lista);

// quero inserir em contato
// quero mover animais
// elemento que quero mover antes,
// pai.insertBefore(novoElemento, elementoReferencia);
// contato.insertBefore(animais, titulo); // insere a lista antes de 

// contato.removeChild(titulo); // remove titulo de contato 
//contato.replaceChild(lista, titulo); // substitui titulo por lista



// NOVOS ELEMENTOS
// Podemos criar novos elementos com o método createElement();
const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo Título Create Element';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

//animais.appendChild(novoH1);
//console.log(animais.appendChild(novoH1));


// CLONAR ELEMENTOS 
// Todo elemento selecionado é único, para criar um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1Fa1 = h1.cloneNode(true); // true sinaliza para incluir
cloneH1Fa1.classList.add('azul');
faq.appendChild(cloneH1Fa1);