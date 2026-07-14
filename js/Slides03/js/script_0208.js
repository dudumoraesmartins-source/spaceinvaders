var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
// acessar os valores do array
videoGames[0];
videoGames[2];

// MÉTODOS E PROPRIEDADES DE UMA ARRAY
//videoGames.pop(); // remove o último item e retorna ele
//videoGames.push('Play2'); // adiciona elemento ao final
videoGames.length; //3
// exitem outros métodos como map, reduce, forEach

// For Loop
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console


// Loop While
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console


for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
}


for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === 'Xbox') {
        break;
    }
}


var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];
// forEach - é um método que executa uma função para cada item do array
frutas.forEach(function (fruta, item, array) {
    console.log(fruta, item, array)
} );