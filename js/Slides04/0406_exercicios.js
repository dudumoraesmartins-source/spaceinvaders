const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidasNew = comidas.shift();
console.log(comidas);
console.log(comidasNew);
// Remova o último valor de comidas e coloque em uma variável
const comidasNew1 = comidas.pop();
console.log(comidas);
console.log(comidasNew1);
// Adicione 'Arroz' ao final da array
const comidasNew2 = comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
const comidasNew3 = comidas.unshift('Peixe', 'Batata');
console.log(comidas);



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const estudantesNew1 = estudantes.sort();
console.log(estudantesNew1);
// Inverta a ordem dos estudantes
const estudantesNew2 = estudantes.reverse();
console.log(estudantesNew2);
// Verifique se Joana faz parte dos estudantes
console.log(`Verifique se Joana existe no array: ${estudantes.includes('Joana')}`);
// Verifique se Juliana faz parte dos estudantes
console.log(`Verifique se Juliana existe no array: ${estudantes.includes('Juliana')}`);



let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
//console.log(arrayHtml);
html = html.join('ul');
//console.log(novoHtml);
html = html.split('div');
html = html.join('li');
console.log(html);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros);
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(cloneCarros);