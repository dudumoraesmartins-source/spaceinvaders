// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafosQuery = document.querySelectorAll('p');
const arrayParagrafo = Array.from(paragrafosQuery);
// const somaTotalParagrafos = arrayParagrafo.reduce((acumulador, array_) => {
//     const somaCaracteres = Number(array_.innerText.length);
//     return acumulador + somaCaracteres;
// }, 0)
// console.log(somaTotalParagrafos)
const totalCaracteres = Array.prototype.reduce.call(paragrafosQuery, (acumulador, item) => {
    return acumulador + Number(item.innerText.length);
}, 0)
console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
const selecionaParagrafos = document.querySelectorAll('section p');
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}
console.log(criarElemento('li', 'azul', 'Esse é o meu conteúdo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
const cursosJS = h1Titulo('Cursos de JavaScript');
const cursosHTML = h1Titulo('Cursos de HTML');

console.log(h1Titulo('Cursos de Javascript'));
console.log(cursosJS);
console.log(cursosHTML);