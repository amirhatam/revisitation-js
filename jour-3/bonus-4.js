/*
- Creez un tableau vide
    - Avec une boucle for, ajoutez 20 entiers aléatoires entre 0 et 100
- Affichez ce tableau
- Avec une deuxième boucle for, trouvez l'entier le plus grand de votre 
tableau (pas le droit d'utiliser Math.max)
*/

const array = []
const max = 100


for (let i = 1; i <= 20; i++) {
    const random = Math.ceil(Math.random() * max)
    array.push(random)
}

console.log("Our Numbers", array);

let numMax = array[0]

for (let j = 0; j < array.length; j++) {

    let elem = array[j]

    if (elem > numMax) {
        numMax = elem
    }
}

console.log("Biggest number : ", numMax);