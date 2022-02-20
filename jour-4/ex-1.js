/*
- Créez une variable `cat` contenant les clés suivantes : `name` de valeur 
`"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`.
- Affichez `cat` dans la console
- Affichez la valeur de `age` dans la console.
- À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`.
*/

const cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}
if (cat.isCute) {
    console.log("So cute !");
} else {
    console.log("No is not cute :(");
}

