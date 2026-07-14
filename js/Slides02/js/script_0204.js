/*
Boolean ou false ou true
*/

var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('Possui graduação');
    // se eu colocar let x = 10 -> o let é somente dentro desse escopo
} 
else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else



var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} 
else if (possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado');
}
else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


/* existem valores que retornam true o outros que retoram false quando 
verificados em uma expressão booleana */
// Falsy - um valor falso
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ('');
// Todo o resto é truthy - um valor verdadeiro
if (true);
if (1);
if (' ');
if ('Eduardo');
if (-5);
if ({});


var nome = '10kg' / 10;

if (nome) {
    console.log(nome);
} else {
    console.log(nome);
    console.log('Nome não existe');
}

// Operador Lógico de Negação !  (inverte o valor)
// !true = false
if (!true);
if (!1);
if (!' ');
if (!'Eduardo');
if (!-5);
if (!{});
//agora tudo é falso - falsy

if (!!-5); // retorna true, converte para falso no primeiro ! e depois para true com !
if (!!{}); // retorna true, converte para falso no primeiro ! e depois para true com !


/* operadores de comparação */
10 > 5; //true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

/* Operadores de Comparação */
10 == '10'; //true
10 == 10; // true
10 === '10'; // false
// === é estritamente ou seja 10 é diferente de '10'
10 === 10; // true
10 != 15; // true
10 != '10'; //false
10 !== '10'; //true

