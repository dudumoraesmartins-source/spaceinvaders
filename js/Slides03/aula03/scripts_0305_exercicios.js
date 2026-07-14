// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll('.menu a');
menuAtivo.forEach(
    (item) => {
        item.classList.add('ativo');
    }
);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// menuAtivo.forEach(
//     (item, index) =>{
//         if (index !== 0) {
//             item.classList.remove('ativo');
//         }
//     }
// );


// menuAtivo.forEach(
//     (item, index) => {
//         if (index === 0) return; 
//         item.classList.remove('ativo');
//     }
// );


// for (let i = 0; i < menuAtivo.length; i++ ) {
//     if (i === 0) {
//         continue;
//     } else {
//         menuAtivo[i].classList.remove('ativo');
//     }
// }

for (let i = 0; i < menuAtivo.length; i++ ) {
    if (i === 0) {continue;}
    menuAtivo[i].classList.remove('ativo');
}

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');

img.forEach(
    (item) => {
        const possuiAtributo = item.hasAttributes('alt');
        console.log(item, possuiAtributo);
    }
);




// Modifique o href do link externo no menu
// <li><a href="https://www.origamid.com/">Dev →</a></li>
const selecionaHrefEspecifico = document.querySelector('.menu a:not([href^="#"])');
selecionaHrefEspecifico.setAttribute('href', 'https://google.com');
console.log(selecionaHrefEspecifico);