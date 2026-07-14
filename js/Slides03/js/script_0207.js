var nome = 'Eduardo';

nome.length;
console.log(nome.length);

nome.charAt(1);
console.log(nome.charAt(1));

nome.replace('do', 'du');
console.log(nome.replace('do', 'du'));

nome;
console.log(nome);

nome.toLowerCase;
console.log(nome.toLowerCase);

var altura = 1.8;
console.log(altura.toString());
console.log(altura.toFixed());


function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();

console.log(areaQuadrado.length); // 1
console.log(addEventListener.length); //2


var btn = document.querySelector('.btn');

btn.classList.add('azul'); //adiciona a classe azul
console.log(btn.classList.add('azul'));
btn.innerText; //clique
console.log(btn.innerText);
btn.addEventListener('click', function() {
    console.log('Clicou')
})