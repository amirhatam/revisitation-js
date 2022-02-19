/*
- Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
- À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` 
en lui ajoutant la valeur de `i` (i est l'index de votre boucle).
- Affichez la valeur de `total` après votre boucle, total doit valoir 
55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
*/

let total = 0
const limit = 10

for (let i = 1; i <= limit; i++) {
    total += i
    console.log(i);
    console.log("+");
}
console.log(":", total);