const preco = 47.87787;

const precoArredondado = preco.toFixed(2); // retona uma string com arredondamento de 2 decimais

const precoNumeroDecimal = Number(precoArredondado); // retorna o numero decimal

// ou

const preco2 = 47.232323;
const normalizaPreco = Number(preco2.toFixed(2));
const normalizaPreco2 = +preco2.toFixed(2);
console.log(normalizaPreco2);
