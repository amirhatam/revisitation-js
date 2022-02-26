// A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200.

let min = 50

let paire = 0
while (min <= 200) {
    paire = min++
    if (paire % 2 === 0) {
        console.log(paire);
    }
}