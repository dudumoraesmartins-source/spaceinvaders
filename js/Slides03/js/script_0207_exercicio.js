// nomeie 3 propriedades ou métodos de strings
var meunome = 'Eduardo Moraes Martins';

//quantidade de caracteres no meu nome
console.log(meunome.length); // 22
// encontra uma substring dentro de uma string
console.log(meunome.indexOf('Mar')); //15
// corta uma string
console.log(meunome.slice(2, 9)); // 'uardo M'


// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');

var btn2 = document.createElement("Pai");
document.body.appendChild(btn2);
console.log(btn2);

// id -> retorna o id do btn
// innerHtml
//outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function minhaFuncao() {
    var textoCopiado = document.getElementById("btn2");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(textoCopiado.value);

    alert("O texto copiado: " + textoCopiado.value);
}