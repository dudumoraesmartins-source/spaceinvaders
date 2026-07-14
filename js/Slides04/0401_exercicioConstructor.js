// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function ConstructorPessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(nome + ' andou');
    }
}

const constructPessoa = new ConstructorPessoa('Eduardo', 30);
constructPessoa.andar();



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new ConstructorPessoa('João', 20);
const pessoa2 = new ConstructorPessoa('Maria', 25);
const pessoa3 = new ConstructorPessoa('Bruno', 15);


function sacanearEvandro(nome, orgao) {
    this.nome = nome;
    this.orgao = orgao;
    this.segurou = function() {
        console.log(nome + ' segurou meu ' + orgao);
    }
}

const Evandro = new sacanearEvandro('Evandro', 'pau');


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Manipula(lista, ) {
    this.lista = lista;
    this.elements = this.elementList;
    this.maniInsere = function() {
        const manipulaLista = document.querySelectorAll(lista);
        manipulaLista.forEach((item) => {
            item.classList.add('fui-ativo-gordao');
            console.log(manipulaLista);
        });
    }
    this.maniRemove = function() {
        const removeClass = document.querySelectorAll(lista);
        removeClass.forEach((item) => {
            item.classList.remove('fui-ativo-gordao');
            console.log(removeClass);
        });
    }
};

const manipulaLista = new Manipula('li');

manipulaLista.maniInsere();
manipulaLista.maniRemove();


console.log(manipulaLista);