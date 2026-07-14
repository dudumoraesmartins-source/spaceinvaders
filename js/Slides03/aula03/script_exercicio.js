// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
todasImagens.forEach(function(item, index) {
    console.log(item, index)
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
todasImagens.forEach(function(item, index) {
    if (item.localName === 'img'){
        console.log(item, index)
    }
});

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);


// Selecione o primeiro h2 dentro de .animais-descricao
//const primeiroh2 = document.querySelector('h2', '.animais-descricao');
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);
console.log(ultimoP[--ultimoP.length]);