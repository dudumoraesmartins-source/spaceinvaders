/* Operadores de Atribuição */
var x = 5;
var y = 10;
x += y;
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);
x %= y;
console.log(x);
x **= y;
console.log(x);


/* Operador ternário */
var idade = 19;
/* 3 coisas acontecendo ..
CONDIÇÃO: (idade >= 18) ?
VERDADEIRO: 'Pode beber'
FALSO: 'Não pode beber'
*/
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

var naoPossuiDiabetes = false;
var podeBeber2 = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber2);