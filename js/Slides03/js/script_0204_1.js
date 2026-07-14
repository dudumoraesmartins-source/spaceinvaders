/* Boolean */
var possuiGraduacao = true;
var possuiDoutorado = false;

// sempre verifica se if é verdadeiro
if (possuiGraduacao) {
    console.log('Possui graduação.');
} else {
    console.log('Não possui graduação.');
}

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui Graduação, mas não possui doutorado');
} else {
    console.log('Não possui Graduação.');
}
// retorna Possui Graduação, mas não possui doutorado


// Switch
// Usa para veirficar se uma variável é igual a outras diferentes
// utilizando case com a palavra chave break para cancelar a continuação
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para  o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para rosas.');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    default:
        console.log('Feche os olhos');
}

// Truthey e Falsy - valores que retoram true e outros que retornam sempre falso
// Falsy - 
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ('');
// todo resto é truthy
// Truthy -
if (true);
if (1);
if (' ');
if ('eduardo');
if (-5);
if ({});

// Operador lógico de negação
// Truthy
if (!true);
if (!1);
if (!'');
if (!undefined);
if (!!' '); // true - a primeira negação, nega o true, converte para falso, depois nega o falso e converte para true
if (!!''); // false - expressão em branco é falsy, se estou negando falso, é verdadeiro. Mas eu nego uma segunda vez, e nego o verdadeiro, então é falso

// Operador de Comparação
10 > 5;
5 > 10;
20 < 10;
10 <= 10;
10 >= 11;

// Operadores de Comparação
// == comparação não tão estrita - ou seja, 10 é igual a '10'
// === comparação estrita - ou seja, 10 não é igual a '10'
10 == '10';     // true
10 == 10;       // true
10 === '10';    // false
10 === 10;      // true
10 != 15;       // true
10 != '10';     // false
10 !== '10';    // true


// Operadores Lógicos &&
// Só retorna true, se ambos valores forem true
// retorna false para todo resto
true && true;   // true
true && false;  // false
false && true;  // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false;     //false
(5 >= 5) && (3 < 6); // true

// Operadores Lógicos ||  --> OU
// Só retorna falso, se ambos os valores forem falsos
// retorna verdadeiro para todo resto
true || true;   // true
true || false;  // true
false || true;  // true
'Gato' || 'Cão';    // 'Gato'
(5 - 5) || (5 + 5); //10
'Gato' || false;    // Gato
(5 >= 5) || (3 < 6);    // true


// Exercícios 
// Verifique se a sua idade é maior do que a de algum parente
var mae = (2026 - 1963)
var eu = (2026 - 1995)
if (mae > eu) {
    console.log('A idade da mãe é maior que a minha.');
} else if (mae === eu) {
    console.log('Nossa idade é igual');
} else {
    console.log('A minha idade é maior que da mãe.');
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// só retorna o valor da última expressão true ( 5 - 2 ) na última sintaxe
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Eduardo';   // true
var idade = 30;         // true
var possuiDoutorado = false; // false
var empregoFuturo;      // false
var dinheiroNaConta = 0;    // false
if (dinheiroNaConta) {
    console.log('Verdadeiro');
} else {
    console.log('Falso')
};



// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
// falso e verdadeiro -> vai retornar falso (regra do operador &&)
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
// primeira expressão -> falso e verdadeiro retorna verdadeiro (regra do operador ||)
if(('Gato' === 'gato') || (5 > 2)) {
    // regra do operador &&, retorna verdadeiro na segunda expressão -> Cão
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}