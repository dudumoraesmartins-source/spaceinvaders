// Prototype - é um objeto adicionado a uma função quando a mesma é criada
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou';
    }
}

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' Pessoa nadou';
}

const eduardo = new Pessoa('Eduardo', 28);

// console.log(Pessoa.prototype)


// __proto__
// dá problema no retorno, ele acessa diretamente a função e não pega o this
eduardo.__proto__.andar();

// herança de prototipo
// objeto possui acesso aos métodos e propriedades do protótipo
// do construtor responsável por criar este objeto

// objetos herdados do protótipo Object
Object.prototype;
eduardo.toString();
eduardo.isPrototypeOf();
eduardo.valueOf();

// console.log(Object.prototype);
// console.log(eduardo.toString());
// console.log(eduardo.isPrototypeOf());
// console.log(eduardo.valueOf());


// Construtores Nativos
// const pais = 'Brasil';
// const cidade = new String('Rio');

// pais.charAt(0); // B
// cidade.chartAt(0); // R

String.prototype;


// É possível acessar a função do protótipo
// é comum, principalmente em códigos mais antigos o uso das funções de protótipo do construtor Array
const lista = document.querySelectorAll('li');

// transforma em um array
const listaArray = Array.prototype.slice.call(lista);



// ISSO É UMA LISTAAAAAAAAAAAAAAA
const listaAnimais = ['Teemo', 'Pretinha', 'Kate', 'Amora'];
// ISSO TRANSFORMA ESSA BOSTA EM UM ARRAY
const listaAnimaisToArray = Array.prototype.slice.call(listaAnimais);


// método de array
const listaArray1 = Array.prototype.slice.call(listaAnimais);
// basicamente o from, reduz "prototype.slice.call" - mas é a mesma coisa
// transforma em array do mesmo jeito
const listaArray2 = Array.from(lista);

// no objeto nativo, existe método linkado diretamente ao objeto
// isso retorna apenas as funções que foram criadas dentro do prototype
Object.getOwnPropertyNames(Array);

// isso retorna até as funções que foram criadas depois do prototype
Object.getOwnPropertyNames(Pessoa.prototype);
Object.getOwnPropertyNames(Array.prototype);
// métodos do protótipos são herdados


// métodos e propriedades estão acessando com . e são referentes ao tipo de dados retornado antes do ponto
const carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true;
    }
}

Carro; // Object -> propriedades e métodos de Object
Carro.marca; // String -> isso vai retornar todas as propriedades e métodos da String prototypes
Carro.acelerar(); // isso está executando a função - o retorno será somente true -> vai retornar propriedades e métodos de booleanos

Carro.preco.constructor.name;
Carro.preco.constructor.name.constructor.name;

Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0); // String