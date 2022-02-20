/*
- Créez une variable `cat2` qui reprend la structure de cat : 
mettez d'autres valeurs pour chaque clé.
- Créez une variable `cats` qui contient un tableau contenant 
les variables `cat` et `cat2`.
- Affichez la valeur de `age` de `cat` (il y a deux façons de le faire) dans la console
- Affichez la valeur de `isCute` de `cat2` (il y a deux façons de le faire) 
dans la console.
*/

const cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
const cat2 = {
    name: "Kitty",
    age: 1,
    isCute: true
}
const cats = { cat, cat2 }

// console.log(cats);
// console.log(cat.name, "age is :", cat.age);
// console.log(cat2.name, "is cute");

console.log(cats.cat.name, "age is :", cats.cat.age);