// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaValores = 0;
transacoes.forEach(
    (item) => {
        const primeiroCaracter = item.valor.indexOf(' ');
        const ultimoCaracter = item.valor.length;
        const retornaValor = item.valor.substring(primeiroCaracter, ultimoCaracter)
        const converteNumber = Number(retornaValor);
        somaValores += converteNumber;
    }
)
console.log(somaValores);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
// split transforma string em array
const transportesSplit = transportes.split(';');
// join transforma array em uma string
// const transportesArray = transportesSplit.join(', ');

console.log(transportesSplit);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlSemSpan = html.split('span');
const htmlNovo = htmlSemSpan.join('a');
console.log(htmlNovo);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const ultimoCaracterFrase = frase.length - 1;
const fraseUltimoCaracter = frase.slice(ultimoCaracterFrase);
console.log(fraseUltimoCaracter);

// Retorne o total de taxas
let totalTaxas = 0;
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
transacoes1.forEach(
    (item) => {
        const novoItem = item.trim().toLowerCase();
        if (novoItem.includes('taxa')) {
            totalTaxas += 1;
            // console.log(novoItem);
        }
    }
)

console.log(totalTaxas);
// console.log(typeof transacoes1);