/*
 Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000
Résultat attendu: 128
*/

const min = 100
const max = 1000

let result = 0

for (let i = min; i <= max; i++) {
    if (i % 7 === 0) {
        result++
    }
}
console.log(test);