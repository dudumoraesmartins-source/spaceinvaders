/* OBJETO  --- par de chave valor */
var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
}

// objetos . propriedades
pessoa.nome;

console.log(pessoa.nome);

console.log(typeof pessoa);


// um método pode ter uma função como propriedade
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        //return lado + lado + lado + lado;
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));



console.log(Math.random());


var carro = {};
var pessoa = {};
console.log(typeof carro); // object


// dot signfica ponto
// this sempre faz referencia ao próprio objeto
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor);

menu.esconder = function() {
    console.log('Esconder')
}

// mostra o que herdei do objeto para fazer esse
// mostra se foi criado objeto antes desse
menu.hasOwnProperty('width');
menu.hasOwnProperty('height');

