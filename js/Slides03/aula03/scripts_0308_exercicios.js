// Duplique o menu e adicione ele em copyright
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoCopy = menu.cloneNode(true);

copy.appendChild(novoCopy);


// Selecione o primeiro DT da dl de Faq
const primeiroDtFaq = document.querySelector('.faq').querySelector('dt');
//console.log(primeiroDtFaq);

const primeiroDtFaq1 = document.querySelector('.faq');
const elementoDt = primeiroDtFaq1.querySelector('dt');
//console.log(elementoDt);

// Selecione o DD referente ao primeiro DT
const primeiroDdRefDt = primeiroDtFaq.nextElementSibling;
console.log(primeiroDdRefDt);
primeiroDdRefDt.remove;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

// faq.innerHTML = ''

faq.innerHTML = animais.innerHTML;