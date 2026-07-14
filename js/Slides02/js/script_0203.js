/* Números */
var idade = 28;
console.log(idade)
var gols = 1000;
var pi = 3.14;
var exp = 2e10;
console.log(exp)

/* Operadores Aritméticos */
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
console.log(expoente)
var modulo = 14 % 5;
console.log(modulo)

/* Operadores Aritméticos em String
NAN = Not A Number
-> É possível verificar se a variável é NaN com a função isNan()*/
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade;
console.log(peso)
var pesoPorDois = peso / 2;

/* ORDEM IMPORTA */
var total1 = 20 + 5 * 2;
console.log("Total 1: ", total1);
console.log(`Total 1: ${total1}`);
var total2 = (20 + 5) * 2;
var total3 = 20 / 2 * 5;
var total4 = 10 + 10 * 2 + 20 / 2;

/* OPERADORES ARITMÉTICOS UNÁRIOS 
para Decremento seria --x */
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
// adiciona depois de exibir o valor
console.log(`Eu Incremento valor ${incremento2++}`); //5
console.log(incremento2); //6

var incremento3 = 5;
// adiciona antes de exibir o valor
console.log(`Eu Incremento valor ${++incremento3}`); //6
console.log(incremento3); //6


/* Operadores aritméticos unários o + e o - tentam transformar em número */
var frase = 'Isso é um teste';
+frase;
-frase;

var idade = '28';
+idade;
-idade;
console.log(+idade + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1
console.log(-possuiFaculdade); //1



// EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log("O resultado da expressao é: " + total);

// Crie duas expressões que retornem NaN
var valor_ex2 = 'Eu sou etc..' / 50;
console.log(valor_ex2)
var valor_ex3 = 'Eu sou etc..' * 50;
console.log(valor_ex3)

// Somar a string '200' com o número 50 e retornar 250
// necessário usar operador unário
var string_200 = '200';
var numero_50 = 50;
var soma_string_numero = +string_200 + numero_50;
console.log(soma_string_numero)

// Incremente o número 5 e retorne o seu valor incrementado
var incrementar_numero = 5;
var incrementado = (++incrementar_numero)
console.log(incrementado)


// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero //+ unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(pesoPorDois + unidade);