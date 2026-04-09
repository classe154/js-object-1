const washMachine = [
    "rosso",
    "blu",
    "verde",
    "giallo",
    "rosso",
    "blu",
    "verde",
    "giallo",
    "rosso",
    "blu",
    "verde",
    "giallo",
    "rosso",
    "lilla",
    "lilla",
    "blu",
    "arancio",
    "verde"
];

const socks = {
    // blu: 1
    // rosso: 2
};

for (const sock of washMachine) {
    if (!(sock in socks)) { // se la proprietà col colore del calzino non è presente nell'oggetto socks
        // aggiungiamo la proprietà all'oggetto socks associando a essa il numero dei calzini trovati (1)
        socks[sock] = 1;
    } else { // se la proprietà è già presente, la andiamo a incrementare
        socks[sock] = socks[sock] + 1
    }
}

for (const sock in socks) {
    if (socks[sock] % 2 !== 0) {
        console.log(`${sock} Spaiato`);
    }
}

console.log(socks);