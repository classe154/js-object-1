'use strict';

// Object: contenitore per dati correlati (proprietà: nomeChiave = valore)
const studente = {
    nome: 'Mario',
    cognome: 'Bianchi',
    eta: 22,
    corso: 'Sviluppo Web',
    attivo: true,
    "num-presenze": 28, // Eccezione
    repos: [ // ARRAY dentro object
        'progetto1', 'progetto2', 'todo-app'
    ],  
    contatti: { // OBJECT dentro object
        email: 'luigi@email.com',
        telefono: '333-1234567',
        addresses: [
            'Via dalle scatole 5',
            'Piazza della Vittoria 1'
        ]
    },
};

//const studente = null;

console.log(studente); // Mostra tutto l'object

// Dot Notation
console.log(studente.cognome);

// Bracket Notation (con un solo valore)
const nomeProprieta = 'nome';
console.log(studente[nomeProprieta]); // studente['nome']
console.log(studente.nomeProprieta); // undefined

const studenteRepos = studente.repos;
const studenteContactInfo = studente.contatti;

// NOOOO
//let studenteNome = studente.nome;
//studenteNome = 'Piero';

studente.nome = 'Piero';

// Modifica di una proprietà esistente
studente['contatti']['email'] = 'pieroNew@gmail.com';
//studenteContactInfo['email'] = 'piero@gmail.com';

// Aggiungere una proprietà a un oggetto
studente.dateOfBirth = 2001;

console.log(Object.keys(studente));
