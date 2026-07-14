// // // métodos q fazem loop em array
// // // forEach(callback(itemAtual, index, array))
// // const carros = ['Ford', 'Fiat', 'Honda'];
// // carros.forEach(function(item, index, array){
// //     //array[index] = 'Teste';
// //     console.log(item.toUpperCase(), index, array);
// // })

// // carros.forEach((item, index, array) => {
// //     console.log(item, index,array);
// // })


// const li = document.querySelectorAll('li');

// li.forEach((i) => {
//     i.classList.add('ativa');
// })

// li.forEach(function(item) {
//     item.classList.add('ativa');
// })


// // Modificar a array original

// // foreach -> sempre retorna undefined quando salvo em uma variável
// // o forEach não é pra isso, ele só quer fazer a iteração e não salvar o retorno
// const retornoForeach = li.forEach((item, index) => {
//     item.classList.add('ativa' + index);
// })
// console.log(retornoForeach);


// map -> modifica a array e salva o retorno
const carros = ['Ford', 'Fiat', 'Honda'];
const novoArray = carros.map((item, index, array) => {
    //console.log(item.toUpperCase(), index, array);
    // funcao sem retorno, sempre sera undefined de retornoi
    return item.toUpperCase();
})
console.log(novoArray);
console.log(carros);

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n => n * 2);
// const numerosX3 = numeros.map((n) => {
//     return n * 2
// });
console.log(numerosX2);
// map vs. forEach
// NOVA ARRAY = MAP
// ADICIONAR CLASSES = FOR EACH
// ADICIONAR CLASSES E NOVA ARRAY = MAP

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]


const tempoAulas = aulas.map((aula) => {
    return aula.min;
})
console.log(tempoAulas);

function nomeAulas(aula) {
    return aula.nome;
}
const arrayNomeAula = aulas.map(nomeAulas);

// mesma coisa que 
const arrayNomeAulas1 = aulas.map(function(aula) {
    return aula.nome;
})

// forma bruxa de escrever
// const nomeAulas = aula => aula.nome;


const aulasTeste = [10, 25, 30];
// reduce -> reduce(callback(acumulador, valoratual, index, array), valor inicial)
// o acumulador é o retorno da iteração anterior
const reduceAulas = aulasTeste.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index, array);
    // precisa ter return
    return item
}, 0)

const reduceAulas2 = aulasTeste.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index, array);
    // precisa ter return
    return acumulador + item;
}, 33)

console.log(reduceAulas2);




const reduceAulas3 = aulasTeste.reduce((acumulador, item) => {
    console.log(acumulador, item)
    // precisa ter return
    return acumulador + item;
})
console.log(reduceAulas3);


// const aulas2 = [10, 25, 30];
// // com valor de acumulador
// // 1
// aulas2.reduce((0, 10) => {
//     return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas2.reduce((10, 25) => {
//     return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas2.reduce((35, 30) => {
//     return 35 + 30;
// }, 0); // retorno 65


// const aulas3 = [10, 25, 30];
// // sem valor de acumulador
// // 1
// aulas3.reduce((10, 25) => {
//     return 10 + 25;
// }); // retorna 35
// // 2
// aulas3.reduce((35, 30) => {
//     return 35 + 30;
// }); // retorna 65


// como saber qual é o maior valor de uma cadeia de valores
const numeros2 = [10, 25, 60, 5, 35, 10];
const maiorValor = numeros2.reduce((anterior, atual) => {
    // return anterior < atual ? atual : anterior;
    if (anterior > atual) {
        return anterior;
    } else {
        return atual;
    }
})

console.log(maiorValor);