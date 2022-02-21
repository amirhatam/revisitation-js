/*
- Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`.
- La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur 
de `numberOfDice` et retourner leur somme.
- Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` 
et l'autre pour le `joueur2`.
- Comparez les valeurs des deux joueurs et Affichez le joueur gagnant 
(celui ayant le plus grand score).
*/

const launchDice = (numberOfDice) => {
    let result = 0
    for (let i = 1; i <= numberOfDice; i++) {
        const random = Math.ceil(Math.random() * 6)
        result += random
    }
    return result
}

const joueur1 = launchDice(5)
const joueur2 = launchDice(5)

console.log("joueur 1: ", joueur1);
console.log("joueur 2: ", joueur2);

if (joueur1 === joueur2) {
    console.log("equal !");
} else if (joueur1 > joueur2) {
    console.log("joueur 1 Win !");
} else {
    console.log("joueur 2 Win !");
}

