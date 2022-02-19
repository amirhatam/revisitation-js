/*
- Créez une variable `roundedNumber` de valeur `3.6`.
- En utilisant uniquement `Math.floor()`, `Math.ceil()`, des opérations 
mathématiques et un `if () {} else {}` reproduisez le comportement de `Math.round()`
-Changez la valeur de `roundedNumber` pour tester l'algorithme que vous avez créé avec
les valuers `3.3`, `3.8` et `12.4` et vérifier que ça marche bien dans tous les cas.
- Une fois fini, rajoutez un autre algorithme pour obtenir le même resultat 
mais en convertissant `roundedNumber` en string et en utilissant `substring`.
*/


//Result in form Number
const roundedNumber = 3.6
const decimal = roundedNumber - Math.floor(roundedNumber)

let result = 0

if (decimal > 0.5) {
    result = Math.ceil(roundedNumber);
} else {
    result = Math.floor(roundedNumber);
}
console.log(result);

// Result in form String

const strNum = roundedNumber.toString()

const decimalIndex = strNum.indexOf(".")
const strDecimal = "0" + strNum.substring(decimalIndex)

//let intDecimal = parseInt(strDecimal); // Not necessary

let strResult = 0

if (strDecimal > 0.5) {
    strResult = Math.ceil(roundedNumber);
} else {
    strResult = Math.floor(roundedNumber);
}
console.log(strResult);

