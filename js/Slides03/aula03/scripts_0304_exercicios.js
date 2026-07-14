// Mostre no console cada parágrado do site
const cadaParagrafo = document.querySelectorAll('p');
// console.log(cadaParagrafo);
cadaParagrafo.forEach(
    (item, index, array) => {
        console.log(item, index);
    }
);


// Mostre o texto dos parágrafos no console
cadaParagrafo.forEach(
    (item) => {
        console.log(item.innerText);
    }
);





// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach( 
    (item, index) => {
        console.log(item, index);
    }
);

let i = 0;
imgs.forEach( 
    () => {
        console.log(i++);
    }
);

imgs.forEach(() => i++);