// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var cadastro = {
    nome: 'Eduardo',
    sobrenome: 'Martins',
    idade: 30,
    time: 'Grêmio',
    peso: 80,
    metodonew: function() {
        return `${this.nome} ${this.sobrenome}.`
    }
}
console.log(cadastro.metodonew());


// Crie um método no objeto anterior, que mostre o seu nome completo
// console.log(cadastro.nome + ' ' + cadastro.sobrenome);


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    nome: 'Pitoco',
    raca: 'Labrador',
    cor: 'Preto',
    idade: '10',
    oqFaz: function (ver) {
        ver = ver.toLowerCase();
        if (ver === 'homem') {
            //return console.log('Vai latir');
            return 'Vai latir';
        } else {
            //return console.log('Não vai latir');
            return 'Não vai latir';
        }
    }
}
console.log(cachorro.oqFaz('mulher'));


//Parte         Nome        Tipo 
//Objeto        cachorro    Estrutura principal
//Propriedade   nome        String ('Pitoco')
//Método        oqFaz       Function