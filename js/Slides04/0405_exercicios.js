// Retorne um número aleatório
// entre 1050 e 2000
const minimoNum = 1050;
const maximoNum = 2000;
const aleatorio = Math.floor(Math.random() * (maximoNum - minimoNum + 1)) + minimoNum;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
console.log(Math.max(...arrayNumeros));


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let somaValores = 0;
function normalizaValores(lista) {
    lista.forEach((item) => {
            const posicaoCifrao = item.indexOf('$') + 1;
            const posicaoTotal = item.length;
            const removeCifrao = item.substring(posicaoCifrao, posicaoTotal);
            const removeEspacoEmBranco = removeCifrao.trim();
            const trocaVirgulaPorPonto = removeEspacoEmBranco.replace(',', '.');
            const transformaEmNumero = Number(trocaVirgulaPorPonto);
            const arredondaNumeros = transformaEmNumero.toFixed(2);
            // esse mais na frente do "arredondaNumeros" garante que o toFixed volte a ser number
            somaValores += +arredondaNumeros;
            console.log(arredondaNumeros);
        }
    )
}

normalizaValores(listaPrecos);
console.log(somaValores);