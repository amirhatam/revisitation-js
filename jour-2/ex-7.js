/*
- Créez une variable `password` de valeur `"azerty"`
- À l'aide d'une condition, affichez "The password is secure" si `
password` a une longueur plus grande que 5.
*/

const password = "azerty"

if (password.length > 5) {
    console.log("The password is secure");
} else {
    console.log("The password is not secure !");
}