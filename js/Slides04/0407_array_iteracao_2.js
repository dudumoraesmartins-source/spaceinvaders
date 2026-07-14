const aulas = [
  {
    nome: 'HTML 1',
    nome_2: 'HTML 11',
    min: 15
  },
  {
    nome: 'HTML 1',
    nome_2: 'HTML 12',
    min: 15
  },
  {
    nome: 'HTML 2',
    nome_2: 'HTML 22',
    min: 10
  },
  {
    nome: 'CSS 1',
    nome_2: 'CSS 11',
    min: 20
  },
  {
    nome: 'JS 1',
    nome_2: 'JS 11',
    min: 25
  },
]


var acumulador = {}

const listaAulas = aulas.reduce((acumulador, aula, index) => {
    // console.log(aula.nome)
    // atribui o acumulador
    acumulador[index] = aula.nome;
    console.log(acumulador)
    return acumulador;
}, {})


// aulas.reduce(
//     ({}, {nome: 'HTML 1', min: 15}, 0) => {
//         {}[0] = 'HTML 1';
//         return {0: 'HTML 1'};
//     }, 
//     {}
// )

// aulas.reduce(
//     ({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 0) => {
//         {0: 'HTML 1'}[1] = 'HTML 2';
//         return {0: 'HTML 1', 1: 'HTML 2'};
//     },
//     {}
// )



// [].reduceRight()
const frutas = ['Banana', 'Pêra', 'Uva'];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta); // retorna Uva Pêra Banana
const frutasLeft = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta); // retorna Banana Pêra Uva


// [].some() - se pelo menos um retorno da iteracao for truthy, ele retorna true
const temUva = frutas.some((item) => {
    console.log(item);
    return item === 'Uva';
})

console.log(temUva);

// [].every() - se todos returns das iterações forem truthy, o método irá retornar true
// se pelo menos um for FinalizationRegistry, ele irá retornar false
const every = frutas.every((item) => {
    return item === 'Uva';
})

console.log(every);


// [].find() - retorna o valor atual da primeira iteracao que retornar truthy
// para no primeiro verdadeiro
const indexUva = frutas.find((item) => {
    return item === 'Banana';
})
console.log('Index Find: ', indexUva);


// [].findIndex() - invés de retornar o valor, retorna o index deste valor no array
// para no primeiro verdadeiro
const indexUva1 = frutas.findIndex((item) => {
    return item === 'Uva';
})
console.log('Index Find Index: ', indexUva1);


// [].filter() - retorna um array com a lista de valores que durante a execução itera retornando valor truthy
const arrayFrutas = frutas.filter((item) => {
    console.log(item);
    // return item === 'Banana';
    return item;
})
console.log(arrayFrutas);

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

const maiores15 = aulas.filter((aula) => {
    console.log(aula.min);
    return aula.min > 15;
})
console.log(maiores15);