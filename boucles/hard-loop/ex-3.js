/*
Créez un tableau vide `numbers`.
à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans 
votre tableau.
à l'aide d'une boucle while affichez le premier élément de votre tableau superieur 
ou égal à 75 et inferieur ou égal à 100.
*/

const numbers = []
let res = 0
for (let i = 0; i < 50; i++) {
    let random = Math.floor(Math.random() * (200 - 50 + 1) + 50)
    numbers.push(random)
}
console.log(numbers);

while (!(res >= 75 && res <= 100)) {
    res = numbers.shift()
}
console.log(res);