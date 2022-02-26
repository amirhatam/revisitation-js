/*
Créez un tableau vide `numbers`
à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 
dans votre tableau.
à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre tableau 
(sans utiliser la fonction).
*/

//Loop for
let numbers = []
let max = 0

for (let i = 0; i <= 50; i++) {
    let random = Math.floor(Math.random() * (200 - 50 + 1) + 50)  // entre 50 et 200 
    numbers.push(random)
}
console.log(numbers);

for (let j = 0; j < numbers.length; j++) {
    if (max < numbers[j]) {
        max = numbers[j]
    }
}
console.log(max);