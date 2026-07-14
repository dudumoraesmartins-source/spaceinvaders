import {readFile} from 'node:fs';

readFile("C:\\Uteis\\Links Úteis.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Erro: ", err);
        return;
    } else {
        console.log("Conteúdo: ", data);
    }
});