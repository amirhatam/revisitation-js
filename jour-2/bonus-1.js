/*
- Créez une variable `random` qui contient une valeur 
aléatoire entre 1 et 6 (nombres entiers seulement)
- À l'aide d'une condition, affichez "Yes I win !" 
si `random` est égal à 6, et "So close..." dans les autres cas
*/

const min = 1
const max = 6

const random = Math.ceil(Math.random() * max)

console.log(random);
if (random == max) {
    console.log("Yes I win !");
} else {
    console.log("So close...");
}

