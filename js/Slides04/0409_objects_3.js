// {}.constructor -> retorna a função construtora do objeto
const frutas = ['Banana', 'Uva'];
frutas.constructor; // Array
console.log(frutas.constructor);

const frase = 'Isso é uma String';
frase.constructor; // String
console.log(frase.constructor);

// {}.hasOwnProperty('prop') 
// {}.propertyIsEnumerable('prop)
// verifica se possui a propriedade e retorna true, 
// a propriedade deve ser direta do objeto e não do protótipo
// {}.propertyIsEnumerable() -> verifica se a propriedade é enumerável
console.log(frutas.hasOwnProperty('map')); // false
console.log(Array.hasOwnProperty('map')); // false
console.log(Array.prototype.hasOwnProperty('map')); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true



console.log(frutas.toString());
const frase_1 = 'Oi Frase';
console.log(frase_1.toString());
const somar = function(a, b) {
    return a + b;
}

const carro = {
    marca: 'Ford',
}

// Array.isArra([]); --> isso retorna se é um array ou um objeto
console.log(Object.prototype.toString.call(frutas));