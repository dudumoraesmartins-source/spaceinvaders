// Native
// objetos definidos na especificação da linguagem, independente do host

// Objetos de Browser - Host
// NodeList
// HTMLCollection
// Element

// Objetos do usuário
// Const

// Bibliotecas
// jQuery -> manipular o dom sem se preocupar se tem ou não no browser a função nativa

// Verificar se um objeto EXISTE
if (typeof Array.from !== "undefined") {
    console.log('Existe nesse navegador');
}
// se for igual a undefined -> não existe o método

// métodos para integração com outros softwares -> API
// api do browse -> console.log('Oi');