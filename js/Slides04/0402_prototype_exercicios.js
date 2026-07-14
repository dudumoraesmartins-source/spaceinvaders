// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
    //return console.log('Oi');
    return console.log(`${this.nome} ${this.sobrenome} possui ${this.idade} anos`);
}

const eduardo = new Pessoas('Eduardo', 'Martins', 30);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(Object.getOwnPropertyNames(NodeList.prototype));

console.log(HTMLCollection.prototype);
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

console.log(Document.prototype);
console.log(Object.getOwnPropertyNames(Document.prototype));


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// DÁ PARA ACESSAR A TODOS OS MÉTODOS HTMLELEMENTS
li; //object // HTMLLIElement
console.log(li.constructor.name);

// DÁ PARA ACESSAR A TODOS OS MÉTODOS FUNCTION
li.click; // function // Function
console.log(li.click.constructor.name);

// DÁ PARA ACESSAR A TODOS OS MÉTODOS string
li.innerText;  // string // String
console.log(li.innerText.constructor.name);

// DÁ PARA ACESSAR A TODOS OS MÉTODOS number
li.value; // number // Number
console.log(li.value.constructor.name);
li.hidden; // boolean // Boolean
console.log(li.hidden.constructor.name);
li.offsetLeft; // number // Number
console.log(li.offsetLeft.constructor.name);
li.click(); //undefined // Undefined
//console.log(li.click().constructor.name);

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String pq é assim > "Boolean"
