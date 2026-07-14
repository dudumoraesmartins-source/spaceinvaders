// variaveis declaradas dentro de uma funcao nao sao acessadas fora das mesmas
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();
// tentando acessar a variavel carro que esta fora da funcao
//console.log(carro); //variavel carro is not defined




function mostrarCarro2() {
    // se cria a variavel sem dizer q ela eh const var ou let, ela funciona em qlqr escopo
    carro2 = 'Fusca2';
    console.log(carro2);
}

mostrarCarro2();
console.log(carro2);


// para evitar erros bobos no javascript
'use strict'
function mostrarCarro3() {
    carro3 = 'Fusca3';
    console.log(carro3);
}

mostrarCarro3();
// tentando acessar a variavel carro que esta fora da funcao
console.log(carro3); //variavel carro is not defined



var carro4 = 'Audi';

function mostrarCarro4() {
    var frase = `Meu carro é um ${carro4}`;
    console.log(frase);
}

mostrarCarro();
console.log(carro4);



if (true) {
    var mes = 'Julho';
    console.log(mes);
}
console.log(mes);


// nao queremos que a variavel vaze para fora do bloco - let ou const nao vazam
if (true) {
    let mes1 = 'Dezembro';
    console.log(mes1);
}
//console.log(mes1); // erro, mes1 is not defined
// Var vaza o bloco



// so utilizamos o const e o let para nao vazar mais o var
if (true) {
    const carro5 = 'BMW';
    console.log(carro5);
}
//console.log(carro5); // erro, carro5 is not defined


//{} cria um bloco
{
    var carro6 = 'Lambo';
    const carro7 = 'Ferrari';
}
console.log(carro6);
//console.log(carro7); // erro carro7 is not defined

