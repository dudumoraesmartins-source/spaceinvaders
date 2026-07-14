// String
// Adota todas as propriedades e métodos do prototype de String
const comida = 'Pizza';
const agua = new String('Agua');

console.log(comida.length);
console.log(comida[0]);

const frase = 'A melhor comida';
console.log(frase[4]);
console.log(frase[frase.length - 1]);

// método
const linguagem = 'JavaScript';
console.log(linguagem.charAt(0));
console.log(linguagem.charAt(linguagem.length - 1));

const frase1 = 'A melhor linguagem é ';
const fraseCompleta = frase1 + linguagem;
const fraseFinal = frase1.concat(linguagem);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';
listaFrutas.includes(fruta);        // true
listaFrutas.includes(listaFrutas);  // false

console.log(fruta.includes(listaFrutas));

console.log(listaFrutas.includes(fruta, 14));

// procura pela string que comeca com e termina com
console.log(fruta.startsWith('Ba'));
console.log(fruta.startsWith('BA'));
console.log(fruta.endsWith('nas'));
console.log(fruta.endsWith('NAS'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3)); // Dep
console.log(transacao1.slice(15)); // ente
console.log(transacao1.slice(-5)); // iente


linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java


// indexOf (onde está o caracter q eu quero)
console.log(fruta.indexOf('B')); // 0
console.log(fruta.indexOf('a')); // 1
console.log(fruta.lastIndexOf('na')); // 4 LAST retornoa a última ocorrência

// padStart e padEnd -> aumenta o tamanho da string para o valor N
// o preenchimento é feito com espaços
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
console.log(listaPrecos[0].padStart(10, '.'));
console.log(listaPrecos[0].padEnd(10, '.'));

listaPrecos.forEach((item) => {
    console.log(item.padStart(10, '-'));
})

// string repeat
const frase2 = 'Ta';
console.log(frase2.repeat(5));


// string replace, troca uma string por outra
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace('Camisas', 'Shirts');
// [ ] < espaco em branco dentro do colchetes
listaItens = listaItens.replace(/[ ]+/g, ', '); // pega todos os espaços
console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'


console.log(listaItens);
// split - divide a string de acorsdo com o padrao passado e retorna um array
const arrayLista = listaItens.split(', ');
console.log(arrayLista);
// split transformou em um array ...


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// split transforma string em array
const arrayHtml = htmlText.split('div');
// join transforma array em uma string
const novoHtml = arrayHtml.join('section');
console.log(htmlText);
console.log(arrayHtml);
console.log(arrayHtml.join(''));
console.log(novoHtml);


const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join(', '))



// toLowerCase -> tudo em letra minúscula
// toUpperCase -> tudo em letra maiúscula
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
console.log(sexo1 === 'feminino');
console.log(sexo2 === 'feminino');
console.log(sexo3 === 'feminino');

console.log(toLowerCase(sexo1) === 'feminino');
console.log(toLowerCase(sexo2) === 'feminino');
console.log(toLowerCase(sexo3) === 'feminino');


// trimmmmm - remove espaços 
// trim()
// trimStart()
// trimEnd()
const valor = ' R$ 23.00 ';
console.log(trim(valor));
console.log(trimStart(valor));
console.log(trimEnd(valor));