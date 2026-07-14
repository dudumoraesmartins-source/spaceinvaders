const carroNormal = {
    marca: 'Marca',
    preco: 0,
}

/* MODIFICA O OBJETO CARRO */
const honda = carroNormal;
honda.marca = 'Honda';
honda.preco = 2000;

/* MODIFICA O OBJETO CARRO */
const fiat = carroNormal;
fiat.marca = 'fiat';
fiat.preco = 3000;

/*
const honda = {
    marca: 'Honda',
    preco: 2000
}
*/

// funções construtoras que constroem novos objetos sempre que chamamos a mesma
// Pascal case = primeira letra maiúscula
function Carro() {
    // consigo fazer referencia com this
    this.marca = 'Marca';
    this.preco = 0;
}

const honda2 = new Carro();
// com o new, crio um objeto com o nome da função
// ou seja, a const honda está criando um objeto carro

honda2.teste = 'oi';
honda2.andar = function() {
    console.log('Andou');
}



// // New é responsável por criar um novo objeto na função
// const vw = new Carro();
// // 1 cria um novo objeto
// vw = {};
// // 2 Define o protótipo - vai herdar os métodos e propriedades
// vw.prototype = Carro.prototype;
// // 3 Aponta a variável this para o objeto
// this = vw;
// // 4 Executa a função, substituindo this pelo objeto
// vw.marca = 'Volkswagen';
// vw.preco = 10000;
// // 5 Retorna o novo objeto
// return vw = {
//     marca: 'Marca',
//     preco: 0,
// }


// parametros e argumentos
function Apartamento(localAtribuido, precoAtribuido) {
    // 1. Cria um objeto: vw = {}
    // 2. Linka o protótipo: vw.__proto__ = Carro.prototype
    // 3. O 'this' vira esse objeto 'Apartamento'
    this.local = localAtribuido;
    this.preco = precoAtribuido;
}

const centro = new Apartamento();
centro.local = 'Ao lado Seg';

const urlandia = new Apartamento('Videiras', 1000);

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);

// const Dom = {
//     seletor: 'li',
//     // para chamar no navegador e executar Dom.element()
//     element() {
//         const elementoSelecionado = document.querySelector(this.seletor);
//         return elementoSelecionado;
//     },
//     ativar() {
//         //const elementoSelecionado = document.querySelector(this.seletor);
//         const elementoSelecionado = this.element();
//         elementoSelecionado.classList.add('ativo');
//     }
// }

// Dom.seletor = 'ul';
// Dom.ativar();


function Dom(seletor) {
    this.seletor = seletor;
    this.element = function() {
        return document.querySelector(this.seletor);
    },
    this.ativar = function() {
        //const elementoSelecionado = document.querySelector(this.seletor);
        const elementoSelecionado = this.element();
        elementoSelecionado.classList.add('ativo');
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

// um objeto construtor não irá influenciar em outro objeto criado
const lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();