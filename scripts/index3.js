'use strict';

const classe = [];

// Array di possibili nomi/cognomi
const nomi = ['Mario', 'Luigi', 'Anita', 'Bianca', 'Carlo'];
const cognomi = ['Bianchi', 'Rossi', 'Verdi', 'Neri'];

// Funzione per numero casuale tra min e max (inclusi)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
    const studenteTmp = {};
    studenteTmp.corso = 'Sviluppo Web';
    studenteTmp.eta = getRandomInt(18, 90);

    const randomNameIndex = getRandomInt(0, nomi.length - 1);
    studenteTmp.nome = nomi[randomNameIndex];

    const randomSurnameIndex = getRandomInt(0, cognomi.length - 1);
    studenteTmp.cognome = cognomi[randomSurnameIndex];

    studenteTmp.matricola = i + 1;

    classe.push(studenteTmp);
}

console.log(classe);
