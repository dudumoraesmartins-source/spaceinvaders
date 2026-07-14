// apply -> funciona como call, os argumentos são pasados através de uma array
const numeros = [33, 23, 2, 434, 54, 5424, 4];

const numerosMath = Math.max.apply(null, numeros);
console.log(numerosMath);

// Apply vs Call
const li = document.querySelectorAll('li');
function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
// aqui no apply está dentro de um array
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

// function.bind() bind -> retorna a funcao com o novo contexto do this, mas nao ativa a funcao, somente dps de colocar a variavel
const arrayLi = Array.from(li);
const filtro = Array.prototype.filter.bind(li, (item) => {
    return item.classList.contains('ativo');
})

console.log(filtro());

console.log(li);

// isso retorna um novo conceito de this
const $ = document.querySelectorAll.bind(document, 'li');
// não precisamos passar todos argumentos no bind, podemos passar na nova funcao no mmento da execução da mesma


const carro = {
    marca: 'Ford',
    ano: 2018, 
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}
console.log(carro);

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(300, 20));


// Argumentos Comuns - podemos passar argumentos em comum para criar uma nova funcao e retornar a nova funcao
function imc(altura, peso) {
    return peso / (altura * altura);
}
const imc180 = imc.bind(null, 1.80);
imc(1.80, 70);
imc180(70);