/*
- Créez une variable `objects` qui contiendra un tableau avec les valeurs 
`"pen"`, `"book"` et `"lamp"`.
- Ajoutez `"chair"` au début du tableau puis affichez le résultat.
- Enlevez `"lamp"` puis affichez le résultat.
- Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat.
- Enlevez `"chair"` puis affichez le résultat.
*/

const objects = ["pen", "book", "lamp"]

objects.unshift("chair")
objects.pop()
objects.push("laptop")
objects.shift()

console.log(objects);