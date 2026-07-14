/* Tipos de Dados */
var nome = 'Eduardo';
var idade = 28;
var possuiFaculdade = true; // Boolean
var time; //Undefined
var comida = null;
var simbolo = Symbol();
var novoObjeto = {};

console.log(typeof simbolo);
// retorna string

/* Concatenar palavras */
var sobrenome = 'Martins';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto)
console.log(typeof(nomeCompleto))

/* Aspas Duplas, simples e Template String */
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
'JavaScript é "super" fácil';
//"JavaScript é "super" fácil"; //esse aqui da merda

/* Template String */
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // utilizando template string


/* Exercício */
var contendoString = 'Eu contenho uma string';
var contendoNumeroNaString = '1';
var minhaIdade = 30;

var nomePrimario = 'Eduardo'
var sobrenome = 'Martins';
var nomeCompletoConcatenado = nomePrimario;
console.log(nomeCompletoConcatenado);

var frase = "It's a time";
var fraseCompleta = contendoString + ' ' + frase;
console.log(fraseCompleta);

console.log(typeof(nomeCompletoConcatenado))