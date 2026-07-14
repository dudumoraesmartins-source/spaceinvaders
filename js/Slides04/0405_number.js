// Number , é a construtora de números e possui propriedades e métodos do prototype de Number

// verifica se eh NaN é true ou false
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
console.log(Number.isNaN('a'));

// isInteger -> verifica se é uma integral
Number.isInteger(20); // true
Number.isInteger(23.6); // false

// parseFloat -> retorna um número a partir de uma string
parseFloat('99.50'); // 99.5
Number.parseFloat('99.50'); // 99.5

parseInt('99.50', 10); // 99   -> por padrão passa o tipo decimal 10
parseInt('100 reais'); // 100
parseInt('23.49 reais'); // 23

// n.toFixed(decimais) -> arredonda o número com base no total de casas decimais do argumento
// n. é o método direto do número e não do Number
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.4555;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

const preco3 = 10.32323;
console.log(+preco3.toFixed() + 3232);

// n.toString(radix) transforma o número em uma string com base no radix, use o 10 no sistema decimal
const preco4 = 10.99;
preco4.toString(); // 2.99


// n.toLocaleString
const toLocaleString = preco2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(toLocaleString);



// Objeto Math (possui funções, propriedades e métodos)
console.log(Math.PI);
console.log(Math.abs(3 - 7)); // absoluto -> transforma negativo em positivo
console.log(Math.ceil(4.3)); // 5 -> arredonda sempre para cima
console.log(Math.floor(4.3)); // 4 -> arronda sempre para baixo
console.log(Math.round(4.8334)); // 5 -> como é na matemática
console.log(Math.round(4.3)); // 4 -> como é na matemática

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // um número qualquer entre 0 e 1
Math.random() * 100; // retorna um número entre 0 e 100
Math.random() * 500; // retorna um número entre 0 e 500

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorio);