//forEach e eventos
// addEventListener é adicionado a um único elemento, é necessário loop entre os elementos de uma lista
const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((item) => {
    item.addEventListener('click', handleImg);
    }
);