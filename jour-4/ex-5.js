/*
- Créez une fonction `addUp` qui reçoit un paramètre `num`
- À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
- Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78
*/

const addUp = (num) => {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i

    }
    return sum
}
const result = addUp(12);
console.log(result);
addUp(12)