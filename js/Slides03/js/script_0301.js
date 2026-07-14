/* window.alert('Você é muito burro'); */
/*
const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/index.html') {
    console.log('É igual seu otário.');
}
*/
const h1Selecionado = document.querySelector('h1');

/* element é um objeto */

const h1Classes = h1Selecionado.classList;
/* console.log(h1Classes);*/ 

console.log(h1Selecionado.innerText);
console.log(h1Selecionado.classList);
console.log(h1Selecionado.id);
console.log(h1Selecionado.offsetHeight);


function callbackh1() {
    console.log('Clicou em', h1Selecionado.innerText);
}

/* 'click' é o evento
callback é a função q vai ocorrer */
h1Selecionado.addEventListener('click', callbackh1);


// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');


// Retorne a linguagem do navegador
console.log(window.navigator.language);


// Retorne a largura da janela 
console.log(`Esse é o valor da largura(width): ${window.innerWidth}`);
console.log(`Esse é o valor do altura(height): ${window.innerHeight}`);