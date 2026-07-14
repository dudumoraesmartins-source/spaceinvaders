const imgs = document.querySelectorAll('img');
//console.log(imgs);


//forEach é um método de array
imgs.forEach(
    function(item, index, array) {
        //console.log(array, index);
    }
);


// pega os títulos do index
const titulos = document.getElementsByClassName('titulo');
// transforma em tipo array com array from
const titulosArray = Array.from(titulos);
// aí sim consegue usar o forEach (só aceita array para percorrer as linhas)
titulosArray.forEach(
    function(item, index, array) {
        console.log(item, array);
    }
);

// Arrow Functions
// encurta a function expressiuon (encurta a sintaxe)
titulosArray.forEach( 
    (index, item, array) => {
        console.log(index, item, array);
    }
);


// Particularidades da Sintaxe ***
// argumento único não precisa de parênteses
imgs.forEach(
    item => {
        console.log(item);
    }
);

// multiplos argumentos precisam de parênteses
imgs.forEach(
    (item, index) => {
        console.log(item, index);
    }
);

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(
    () => {
        console.log(i++);
    }
);

// uma unica linha de código não precisa de chaves, nao fecha a linha com ;
// é possível omitir as chaves para função que retorna uma linha
imgs.forEach((item) => console.log(i++));
imgs.forEach(() => console.log(i++));