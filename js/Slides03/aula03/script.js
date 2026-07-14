// Seleciona pelo ID
const animaisSection = document.getElementById('animais'); 
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');



// getElementByClassname vai retornar uma lista com o nome do elemento
// getElementByTagName retorna uma lista de elementos
// seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
// retorna como se fosse uma lista com pares chave valor
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection 
const ul = document.getElementsByTagName('ul');

console.log(gridSection[0]);

// querySelector -> retorna o primeiro elemento que combinar com o Seletor
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// seleciona todos os elementos
const fotosAnimais = document.querySelectorAll('.animais img');
//console.log(fotosAnimais);
console.log(fotosAnimais[0]);


//htmlCollection -> 

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);


// Array-Like -> Se parece com array, mas não são
// forEach() -> método de array, só tem no nodeList
gridSectionNode.forEach(function(item, index) {
    console.log(item, index);
});

// array é o objeto
// from é método de array
const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function(item) {
    console.log(item);
})