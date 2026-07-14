// function mudarClasse() {
//     document.body.classList.toggle('active');
// }

// // mudarClasse();

// setInterval(mudarClasse, 2000);


const iniciar = document.querySelector('.iniciar');

const pausar = document.querySelector('.pausar');

const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
tempo.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disable', '');
}

function pausarTempo() {
    clearInterval(timer);
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
    console.log('resetar')
}