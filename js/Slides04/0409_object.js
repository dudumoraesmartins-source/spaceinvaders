const pessoa = new Object({
    nome: 'Eduardo',
})

console.log(pessoa);


// object.create -> retorna um novo objeto que terá como protótipo o objeto do primeiro argumento
const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}
// object.create
const honda = Object.create(carro);
console.log(honda.init('Honda').acelerar());

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar());


// Object.assign(alvo, obj1, obj2)
// passa um objeto alvo, todos os objetos a mais, as propriedades e os métodos modificam o alvo
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

const carro1 = {
    rodas: 4,
    mala: true,
}

Object.assign(moto, funcaoAutomovel, carro1);
console.log(moto);

// object.defineProperties(alvo, propriedades) -> adiciona ao alvo novas propriedades
// a diferença é a possibilidade de serem definidas características dessas propriedades

const moto_3 = {
    rodas: 2
}

console.log(moto_3);
moto_3.rodas = 5;
console.log(`eu consigo colocar uma moto de cinco rodas se não fixar essa propriedade ${moto_3}`);
console.log(moto_3);

// mas posso criar propriedades imutáveis
moto_4 = {
    capacete: true,
}
console.log(moto_4);
Object.defineProperties(moto_4, {
    rodas: {
        value: 2,
        configurable: false, // coloco que não é configurável - impossível deletar
        writable: true, // se false, impede que você escreva no item
        enumerable: false, // por padrao tudo é falso
    }
})

moto_4.capacete = false;
console.log(moto_4);


// método get ou set
moto_5 = {
    capacete: true,
}
console.log(moto_5);
Object.defineProperties(moto_5, {
    rodas: {
        get: function() {
            return this._rodas;
        },
        set: function() {
            this._rodas = valor * 4 + ' Total Rodas'
        }
    }
})

console.log('Abaixo é exemplo da funcao get');
console.log(moto_5);


// Object.getOwnPropertyDescriptors(obj) -> Lista todos os métodos e propriedades 
// de um objeto com suas devidas configurações
Object.getOwnPropertyDescriptors(Array);
console.log(Object.getOwnPropertyDescriptors(Array));
// lista com métodos e propriedades e array

Object.getOwnPropertyDescriptors(Array.prototype);
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// Lista com métodos e propriedades do protótipo de array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'));
// puxa de uma única propriedade


const carro_6 = {
    marca: 'Ford',
    ano: 2018,
}
// Object.keys(obj), Object.values(obj), Object.entries(obj)
// Object.keys -> retorna um array com chaves de todas as propriedades diretas e enumeráveis
// Object.values -> retorna um array com os valores do objeto
// Object.entries -> retorna um array com arrays contendo a chave e o valor

// Object.getOwnPropertyNames(Array) -> retorna um array com todas as proriedades diretas do objeto (não retorna as do protótipo)

// Object.getPrototypeOf() e Object.is() -> retorna o protótipo do objeto, verifica se os objetos são iguais e retorna true ou false
const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

const frutas_1 = ['Banana', 'Pêra'];
const frutas_2 = ['Banana', 'Pêra'];
const novaFruta = frutas_1;
novaFruta[0] = 'Uva';
console.log(frutas_1);
Object.is(frutas_1, frutas_2);

Object.freeze(frutas_1); // impede qualquer mudança nas propriedades
Object.seal(frutas_1); // previne a adição de novas propriedades e impede que as atuais sejam deletadas
Object.preventExtensions(frutas_1); // previne a adição de novas propriedades

console.log(Object.isFrozen(frutas_1)); // true
console.log(Object.isSealed(frutas_1)); // true
console.log(Object.isExtensible(frutas_1)); // false