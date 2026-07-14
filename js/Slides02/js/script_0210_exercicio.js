// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(var, marca, portas);
// VAR não é o nome da variável e sim a espécie
// const, não é exibido, pois não vaza o bloco
// let, não é exibido, pois, não vaza o bloco
console.log(cor);



// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
const dois = 2;
function dividirDois(x) {
  return x + dois;
}
console.log(`Resultado da primeira funcao: ${somarDois(4)}`);
console.log(`Resultado da primeira funcao: ${dividirDois(6)}`);

// O que fazer para total retornar 500?
var numero = 50;

//for(var numero = 0; numero < 10; numero++) {
// Let vai considerar a variável numero apenas dentro da execução desse bloco
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);