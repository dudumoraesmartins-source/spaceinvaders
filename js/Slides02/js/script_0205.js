/* Funções -> Bloco de código que pode ser executado reutilizado */
function areaQuardado(lado) {
    return lado * lado
}

console.log(areaQuardado(4))

function pi() {
    return 3.14
}

var total = 5 * pi();
console.log(total);

/* Parâmetros e Argumentos */
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.80))
console.log(imc(60, 1.70))



/* Parênteses Executa a Função */
function corFavorita(cor) {
    if (cor === 'azul') {
        return "Você gosta do céu.";
    } else if (cor === 'verde') {
        return "Você gosta de mato.";
    } else {
        return "Você não gosta de nada";
    }
}
console.log(corFavorita());


/* Argumentos podem ser funções */
/* CALLBACK -> geralmente acontece após algum evento 
addEventListener('click', function() {
    console.log('Clicou');
});

addEventListener(argumento_1, argumento_2)
-> primeiro argumento é o click o segundo é uma função anônima


funções anônimas não tem o nome definido, e são escritas como
function() {} 
ou
() => {}
*/

/* PODE OU NÃO RETORNAR UM VALOR 
quando não definimos o return, irá retoranar undefined */
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log('Retorna o valor do IMC:' + imc);
}

imc(80, 1.80);
//console.log(imc(80, 1.80));


/* VALORES RETORNADOS 
função que pode retornar qualquer tipo de dado ou até outras funções */
function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
/* retornar diferentes tipos de dados na mesma funçaõ, não é bom */
console.log(terceiraIdade(18))
console.log(terceiraIdade('18'))
console.log(terceiraIdade(65))


/* Escopo das funções 
variáveis definidas dentro do bloco, não são visíveis fora dele */
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar.`
}
//console.log(totalPaises);
// Erro, total de países não definido


/* ESCOPO LÉXICO 
funções que acessam variáveis criadas no contexto pai */
var profissao = 'TI';

function dados() {
  var nome = 'Eduardo';
  var idade = 30;
  function outrosDados() {
    var endereco = 'Rio Grande do Sul';
    var idade = 31;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Eduardo, 30, Rio Grande do Sul, TI'
// console.log(outrosDados()); // retorna um erro


/* Hoisting 
Antes de executar uma função, o js move todas as funções declaradas para a memória
*/

imc2(80, 1.80);

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc2);
}



/* EXERCÍCIOS */