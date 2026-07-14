// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilcampeao = [1959, 1962, 1970, 1994, 2002];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var item = 0; item < brasilcampeao.length; item++ ){
    console.log(`O Brasil ganhou a copa de ${brasilcampeao[item]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var item = 0;
while (item < frutas.length) {
    if (frutas[item] !== 'Pera') {
        console.log(`A fruta selecionada: ${frutas[item]}`);
    } else {
        console.log(`A fruta selecionada: ${frutas[item]}`);
        break;
    }
    item++;
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);