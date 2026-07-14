// /* set time out vai esperar tudo oq está rodando no script em 
// primeiro plano para só depois rodar o segundo plano, quando 
// a execucao passa pelo settimeout, ela fica em callback queue
// até terminar todas as chamas da call stack, depois a queue será 
// executada na stack */

// function espera(texto) {
//     console.log('Passou 0');
// }

// setTimeout(() => {
//     console.log('Testando')
// }, 0);

// for(let i = 0; i < 20; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i)
// }

// /* setTimeout é objeto window, se o usar o this, o this vira objeto window */

function loop(texto) {
    console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
const meuLoop = setInterval(() => {
    console.log(i++);
    if(i > 20) {
        clearInterval(meuLoop)
    }
}, 1000)


/* para poder user o clearInterval, preciso que o setInterval esteja dentro de uma constante
