/*
Créez une variable `dice` valant null et une variable `count` valant 0
Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire 
à dice et ajoutez 1 à `count`.
Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6.
*/

let dice = null
let count = 0

while (dice !== 6) {
    dice = Math.ceil(Math.random() * 6)
    count++
    console.log("Dice", dice);
    console.log("count", count);
}

console.log("result", count);
