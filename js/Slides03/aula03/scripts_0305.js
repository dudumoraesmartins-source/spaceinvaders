// classList
// retorna uma lista com classes do elemento
// permite adicionar, remover e verificar se tem
const menu = document.querySelector('.menu');
console.log(menu)

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe 
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); // substituir

if (menu.classList.contains('azul')) {
    //console.log("Possui Azul!");
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

// // método antigo para adicionar elementos em uma classe
// menu.className = 'ativo teste azul';
// console.log(menu.className);
// menu.className = menu.className + ' amarelo';
menu.className += ' amarelo';
console.log(menu.className);



// atributtes
const animais = document.querySelector('.animais');

console.log(animais.attributes);
console.log(animais.attributes[2]);

console.log(animais.attributes.id);
console.log(animais.attributes['data-texto']);


// getAttribute e setAttribute
const img = document.querySelector('img');
// método que retornam ou definem de acordo com o atributo selecionado
img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo');
img.hasAttribute('id');  // true / false
img.removeAttribute('alt'); // remove o alt
img.hasAttributes(); // true / false se tem algum atributo
// get é pegar
console.log(img.getAttribute('src'));
// set define ou atualiza   set = setar
console.log(img.setAttribute('alt', 'Texto Alternativo'));
console.log(img.hasAttribute('id'));
console.log(img.removeAttribute('alt'));
console.log(img.hasAttributes());


// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores
// Read Only -> somente leitura
const animais_2 = document.querySelector('.animais');
animais_2.className; // string com o nome das classes
animais_2.className = 'azul'; // substitui completamente a string
animais_2.className += ' vermelho'; // adiciona vermelho a string

animais_2.attributes = 'class="ativo"'; // não funciona, read-only


// TUDO O QUE É MÉTODO TÁ EM VERDE
// TUDO O QUE É PROPRIEDADE TÁ EM ROXO/AMARELO


// carro é o objeto
const carro = {
    // portas é o método, e 4 é a propriedades
    portas: 4,
    // andar é método
    andar: function(km) {
        console.log(`Andou ${km} Kms.`);
    }
}

// para acessar
carro.andar(10);

console.log(carro.portas);
// essa propriedade permite alterar
carro.portas = 20;
console.log(carro.portas);