const mes = 'Julho';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
    dia: 28,
    mes: 'Julho',
    ano: 2018,
}

data.dia = 29; //funciona
// tenta mudar data para string
//data = 'Janeiro'; // erro


const data2 = {
    mes: 'Julho',
    ano: 1995,
}

data2.dia = 5;


// LET - Mantém o escopo e impede a redeclaração, mas permite modificar o valor da variável
/*let ano; // erro, impede a redeclaração
ano = 2018;
ano++;
console.log(ano);

let ano = 2020; // erro, redeclarou a variável
*/