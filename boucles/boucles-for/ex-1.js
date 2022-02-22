/*
Calculez la somme des carrés des nombres de 5 à 10

Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. 
exemple: 5x5 = 25

Resultat attendu: 355
*/

const min = 5
const max = 10

let result = 0
for (let i = min; i <= max; i++) {
    let carre = i * i
    result += carre
}
console.log(result);