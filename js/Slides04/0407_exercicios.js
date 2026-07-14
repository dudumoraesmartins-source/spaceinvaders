// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


const cursosSelector = document.querySelectorAll('.curso'); // isso retorna uma nodeList
const arrayItens = Array.from(cursosSelector);
console.log(arrayItens);
const objetosCursos = arrayItens.map(
    (linha) => {
      const titulo = linha.querySelector('h1').innerText;
      const descricao = linha.querySelector('p').innerText;
      const aulas = linha.querySelector('.aulas').innerText;
      const horas = linha.querySelector('.horas').innerText;
      return {
        titulo: titulo,
        descricao: descricao,
        aulas: aulas,
        horas: horas,
      }
})
console.log(objetosCursos);



// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosFiltrados = numeros.filter(item => item > 100);
console.log(numerosFiltrados);
//ou
const numerosListaFiltrados = numeros.filter((item) => {
  return item > 100;
});
console.log(numerosListaFiltrados);




// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
});
console.log(`Tem Baixo? ${temBaixo}`);




// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
const precoTotalCompras = compras.reduce((acumulador, item, index, array) => {
  const totalLength = item.preco.length;
  const posicaoCifrao = item.preco.indexOf('$') + 1;
  const normalizaPreco = item.preco.slice(posicaoCifrao, totalLength);
  const substituiVirgula = normalizaPreco.replace(',', '.').trim();
  return acumulador + Number(substituiVirgula);
}, 0)
console.log(precoTotalCompras);