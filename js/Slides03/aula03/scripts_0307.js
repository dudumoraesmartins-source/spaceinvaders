const img = document.querySelector('img');

// eh chamada a cada evento ocorrido
// elemento.addEventListener(event, callback, options)
// img.addEventListener('click', function() {
//     console.log('Clicou');
// })

// Callback
// boa prática, chamar a função fora do addEventListener

function callback() {
    console.log('Clicou');
}

img.addEventListener('click', callback);


// Event
// primeiro parâmetro do callback é referente ao evento q ocorreu
function callback(event) {
    console.log(event);
}

img.addEventListener('click', callback);


const animaisLista = document.querySelector('.animais-lista');

function callbacklista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
}
animaisLista.addEventListener('click', callbacklista);

console.log(animaisLista);


// Propriedades do Event
function executarCallback(event) {
    const currentTarget = event.currentTarget;
    const target = event.target;
    const type = event.type;
    const path = event.path;
    console.log(currentTarget, target, type, path);
}
animaisLista.addEventListener('click', executarCallback);

// event.preventDefault()
// previne o comportamento padrão do evento do browser
// ira prevenir que o link seja ativado
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event) {
    event.preventDefault(); // previna o padrão do evento
    console.log(event.currentTarget.href);
}
linkExterno.addEventListener('click', clickNoLink);
// tu não vai ser redirecionado


// this
// palavra especial do javascript que faz referência a diferentes objetos
// em eventos, ela faz referência ao elemento 
// em que o addEventListener foi adicionado
function callbackThis(event) {
    console.log(this); // retorna a imagem
    console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);


// diferentes eventos
// click, scroll, resize, keydown, keyup, mouseenter
const h1 = document.querySelector('h1');

function callback_2(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', callback_2);
h1.addEventListener('mouseenter', callback_2);
window.addEventListener('scroll', callback_2);
window.addEventListener('resize', callback_2);
window.addEventListener('keydown', callback_2);

// keyboard - adiciona atalhos para facilitar a navegacao
function handleKeyboard(event) {
    if (event.key === 'a')
        document.body.classList.toggle('azul');
    else if (event.key === 'v')
        document.body.classList.toggle('vermelho');
}
window.addEventListener('keydown', callback);


// preciso que dispare isso até o valor total do slice seja carregado
window.addEventListener('scroll', 
    () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            console.log(scrollTop);
            console.log(clientHeight);
            console.log(scrollHeight);
            console.log("Perto do Final!!!!!!!!");
        }
    }
);