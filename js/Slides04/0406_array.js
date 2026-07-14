// arrays -> armazenam uma coleção de elementos
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul


// construção de arrays -> herda os métodos e propriedades do protótipo do construtor array
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1]; //mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
console.log(carros.length); // 11

// Array.from() -> método para transformar em array-like objects em um array
const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);
console.log(li);
console.log(arrayLi);

const obj = {
    0: 'Eduardo',
    1: 'Moraes',
    2: 'Martins',
    // até aqui o retorno é um array vazio '[]'
    // basta adicionar length que transforma em array
    length: 3,
}
console.log(li);
console.log(arrayLi);


// Array.isArray() -> verifica se é array ou não
console.log(Array.isArray(li)); // false
console.log(Array.isArray(arrayLi)); // true


// Array.of() Array() e new Array() -> verifica se o valor é um array e retorna um valor booleano
Array.of(10); // [10]   -> cria um array com 10 no value
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); [,,,,] // -> cria um array com 5, porém, vazio
Array(1,2,3,4); // [1,2,3,4]


const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length);


// Métodos Modificadores [].sort()   - retornam um valor e modificam o array original organizando pelo unicode
console.log(instrumentos.sort());
const idades = [32,21,33,43,1,12,8]; 
console.log(idades.sort()); // [1, 12, 21, 32, 33, 43, 8]


// [].unshift --> adiciona elementos ao início da array e retorna o length da mesma
// [].push()   -> adiciona elementos ao final da array e retorna o length da mesma
carros.unshift('Landrover', 'Kia'); // 5
console.log(carros);

carros.push('Ferrari'); // 6
console.log(carros);


// [].shift() -> remove o primeiro elemento da array e retorna o mesmo
// [].pop()   -> remove o último elemento da array e retorna o mesmo
const primeiroCarro = carros.shift();
console.log(primeiroCarro);
console.log(carros);

const ultimoCarro = carros.pop();
console.log(ultimoCarro);
console.log(carros);

// [].reverse -> retorna a ordem invertida
const ordemInvertida = carros.reverse();
console.log(ordemInvertida);
console.log(carros);


// [].splice() -> adiciona valores a partir do index, remove a quantidade de itens que for passada no segundo parâmetro
const carros2 = new Array('Corola', 'Mustang', 'Honda');
carros2.splice(2, 0, 'Chevy');
console.log(carros2);


carros2.splice(0, 2, 'BYD', 'Fusca');
console.log(carros2);

// [].copyWithin(alvo, inicio, final) -> a partir do alvo, copia o array do inicio ao fim
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));
// a partir do item 2, até o item 2

// [].copyWithin(-1)
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(-1));


// [].fill(valor, inicio, final) -> preenche a array com o valor do início até o fim
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana'));
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 2, 5));
console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].fill('Banana', 0, 2));

/// MÉTODOS ACIMA MODIFICAM O ARRAY ORIGINAL



/// MÉTODOS DE ACESSO , NÃO MODIFICA O ARRAY ORIGINAL, APENAS RETORNAM UMA ARRAY MODIFICADA
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);



const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
// INCLUDES -> VERIFICA SE EXISTE NESSA ARRAY E RETORNA TRUE OU FALSE
linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
// INDEXOF -> VERIFICA SE A ARRAY POSSUI O VALOR E RETORNA O INDEX DO PRIMEIRO VALOR
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
// LASTINDEXOF -> RETORNA O INDEX DO ÚLTIMO
linguagens.lastIndexOf('js'); // 5

// [].join() -> junta toda a array em uma string única
console.log(linguagens.join());
console.log(linguagens.join(' '));
console.log(linguagens.join('-_-'));

let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2');
console.log(htmlString);
htmlString = htmlString.join('h3');
console.log(htmlString);

// [].slice() -> retorna os itens do array começando pelo início e indo até o final
console.log(linguagens.slice(3));
console.log(linguagens.slice(1, 4));

// esse clone é sujo, se modifiquei linguagens antes daqui, ele vai clonar com a modificação
const cloneLinguagens = linguagens.slice();